'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { KindSymbol } from '@/components/kind-symbol';
import type { Track } from '@/content/profile';
import type { Copy } from '@/content/copy';
import type { Locale } from '@/i18n/config';
import { afterglow, polar, rangeOf, RINGS, RADIUS } from './geometry';

const PERIOD_MS = 6000;
const REDUCED = '(prefers-reduced-motion: reduce)';

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}
const BEARING_LABELS = Array.from({ length: 12 }, (_, i) => i * 30);

type Props = {
  tracks: Track[];
  lang: Locale;
  copy: Copy['scope'];
  kinds: Copy['kinds'];
  initial: string;
};

export function TrackingDisplay({ tracks, lang, copy, kinds, initial }: Props) {
  const [locked, setLocked] = useState(initial);
  // Reduced motion starts held, with every track lit; the visitor's own choice wins after that.
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
  const [userHold, setUserHold] = useState<boolean | null>(null);
  const holding = userHold ?? reduced;
  const sweepRef = useRef<HTMLDivElement>(null);
  const blipRefs = useRef(new Map<string, HTMLSpanElement>());
  const scopeRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    const blips = blipRefs.current;
    if (holding) {
      for (const el of blips.values()) el.style.opacity = '1';
      return;
    }
    let frame = 0;
    let visible = true;
    const start = performance.now();
    const tick = (now: number) => {
      const angle = (((now - start) % PERIOD_MS) / PERIOD_MS) * 360;
      if (sweepRef.current) sweepRef.current.style.transform = `rotate(${angle}deg)`;
      for (const t of tracks) {
        const el = blips.get(t.callsign);
        if (el) el.style.opacity = afterglow((angle - t.bearing + 360) % 360).toFixed(3);
      }
      frame = visible ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === 'visible';
      if (visible && !frame) frame = requestAnimationFrame(tick);
    });
    if (scopeRef.current) io.observe(scopeRef.current);
    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible && !frame) frame = requestAnimationFrame(tick);
    };
    document.addEventListener('visibilitychange', onVisibility);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [holding, tracks]);

  const index = Math.max(0, tracks.findIndex((t) => t.callsign === locked));
  const target = tracks[index];

  const step = useCallback(
    (delta: number, focus = false) => {
      const next = tracks[(index + delta + tracks.length) % tracks.length];
      setLocked(next.callsign);
      if (focus) buttonRefs.current.get(next.callsign)?.focus();
    },
    [index, tracks],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      step(1, true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      step(-1, true);
    }
  };

  const status = `${holding ? copy.states.hold : copy.states.sweep} · ${tracks.length} ${copy.tracks} · ${copy.states.locked} ${target.callsign}`;

  return (
    <div className="grid gap-6 lg:contents">
      {/* The scope */}
      <figure className="relative order-1 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
        <div ref={scopeRef} className="relative mx-auto aspect-square w-full max-w-[min(100%,calc(100svh-12rem))]" role="group" aria-label={copy.label} onKeyDown={onKeyDown}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r={100 * RADIUS + 3} fill="#161b20" stroke="var(--color-rule)" strokeWidth="0.25" />
            <circle cx="50" cy="50" r={100 * RADIUS} fill="none" stroke="var(--color-ring)" strokeWidth="0.25" />
            {RINGS.map((r) => (
              <circle key={r.year} cx="50" cy="50" r={100 * RADIUS * r.range} fill="none" stroke="var(--color-ring)" strokeWidth="0.18" strokeDasharray="0.6 0.9" />
            ))}
            <line x1="50" y1={50 - 100 * RADIUS} x2="50" y2={50 + 100 * RADIUS} stroke="var(--color-rule)" strokeWidth="0.15" />
            <line x1={50 - 100 * RADIUS} y1="50" x2={50 + 100 * RADIUS} y2="50" stroke="var(--color-rule)" strokeWidth="0.15" />
            {Array.from({ length: 72 }, (_, i) => {
              const a = i * 5;
              const long = a % 30 === 0;
              const p1 = polar(a, 1);
              const p2 = polar(a, long ? 0.955 : 0.975);
              return <line key={a} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="var(--color-ring)" strokeWidth={long ? 0.3 : 0.18} />;
            })}
            <rect x="49.3" y="49.3" width="1.4" height="1.4" fill="none" stroke="var(--color-ink-2)" strokeWidth="0.25" />
          </svg>

          {/* Bearing and ring labels as HTML, so they stay legible at any scope size. */}
          {BEARING_LABELS.map((b) => {
            const p = polar(b, 1.065);
            return (
              <span key={b} aria-hidden="true" className="data pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-[10px] text-ink-3 sm:text-[11px]" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                {String(b).padStart(3, '0')}
              </span>
            );
          })}
          {RINGS.map((r) => {
            const p = polar(225, r.range);
            return (
              <span key={r.year} aria-hidden="true" className="data pointer-events-none absolute -translate-x-full -translate-y-full pr-1 text-[10px] text-ink-3 sm:text-[11px]" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                {r.year}
              </span>
            );
          })}
          <span aria-hidden="true" className="data pointer-events-none absolute left-1/2 top-1/2 translate-x-2 translate-y-1 text-[10px] text-ink-2 sm:text-[11px]">EHGG</span>

          <div className="pointer-events-none absolute overflow-hidden rounded-full" style={{ inset: `${50 - 100 * RADIUS}%` }}>
            <div ref={sweepRef} className="sweep" />
          </div>

          {tracks.map((t) => {
            const p = polar(t.bearing, rangeOf(t.start));
            const isLocked = t.callsign === locked;
            const tagLeft = p.x > 70;
            return (
              <button
                key={t.callsign}
                ref={(el) => {
                  if (el) buttonRefs.current.set(t.callsign, el);
                }}
                type="button"
                aria-pressed={isLocked}
                aria-label={`${t.callsign}: ${t.role[lang]}, ${t.org[lang]}, ${t.period[lang]}`}
                onClick={() => setLocked(t.callsign)}
                onMouseEnter={() => setLocked(t.callsign)}
                onFocus={() => setLocked(t.callsign)}
                className="group absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center outline-offset-0"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span ref={(el) => { if (el) blipRefs.current.set(t.callsign, el); }} className={`relative block transition-colors ${isLocked ? 'text-amber' : 'text-track'}`}>
                  <KindSymbol kind={t.kind} className="size-3 sm:size-3.5" />
                </span>
                {/* Target box when locked */}
                <span aria-hidden="true" className={`pointer-events-none absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-amber transition-[opacity,scale] duration-300 ease-(--ease-out-expo) ${isLocked ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`} />
                {/* Data tag on a leader line */}
                <span aria-hidden="true" className={`pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center gap-1.5 ${tagLeft ? 'right-[calc(100%-0.6rem)] flex-row-reverse' : 'left-[calc(100%-0.6rem)]'}`}>
                  <span className={`block h-px w-3 sm:w-5 ${isLocked ? 'bg-amber' : 'bg-ink-3'}`} />
                  <span className={`data whitespace-nowrap text-left leading-tight ${tagLeft ? 'text-right' : ''}`}>
                    <span className={`block text-[11px] font-bold sm:text-[13px] ${isLocked ? 'text-amber' : 'text-ink'}`}>{t.callsign}</span>
                    <span className="hidden text-[10px] text-ink-2 sm:block sm:text-[11px]">{t.tag}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <figcaption className="mx-auto mt-3 flex max-w-[min(100%,calc(100svh-12rem))] flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm text-ink-2">
          <span className="max-w-[52ch]">{copy.caption}</span>
          <button
            type="button"
            onClick={() => setUserHold(!holding)}
            aria-pressed={holding}
            className="inline-flex min-h-11 items-center gap-2 border border-rule px-3 text-ink transition-colors hover:border-ink-2"
          >
            {holding ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
            {holding ? copy.resume : copy.hold}
          </button>
        </figcaption>
      </figure>

      {/* Readout of the locked track */}
      <section aria-labelledby="readout-title" className="order-2 border border-rule bg-panel lg:order-none lg:col-start-1 lg:row-start-2">
        <header className="flex items-center justify-between gap-3 border-b border-rule px-4 py-2.5">
          <h2 id="readout-title" className="text-sm font-semibold text-ink-2">{copy.readout}</h2>
          <p className="data text-[11px] text-ink-3">{status}</p>
        </header>
        <div className="grid gap-3 px-4 py-3.5" aria-live="polite">
          <div className="flex items-baseline justify-between gap-3">
            <p className="data text-2xl font-bold text-amber">{target.callsign}</p>
            <p className="flex items-center gap-1.5 text-sm text-ink-2">
              <KindSymbol kind={target.kind} className="size-3 text-track" />
              {kinds[target.kind]}
            </p>
          </div>
          <p className="hidden text-[15px] text-ink-2 lg:[@media(max-height:820px)]:block">{target.role[lang]} · {target.org[lang]} · {target.period[lang]}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[15px] lg:[@media(max-height:820px)]:hidden">
            <dt className="text-ink-3">{copy.fields.role}</dt>
            <dd>{target.role[lang]}</dd>
            <dt className="text-ink-3">{copy.fields.org}</dt>
            <dd>{target.org[lang]}</dd>
            <dt className="text-ink-3">{copy.fields.period}</dt>
            <dd>{target.period[lang]}</dd>
          </dl>
          <p className="text-base font-semibold leading-snug">{target.result[lang]}</p>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-rule pt-1">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {target.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-ink underline decoration-ink-3 hover:decoration-amber">
                  {l.label[lang]}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
              <a href={`#strip-${target.callsign.toLowerCase()}`} className="inline-flex min-h-11 items-center text-sm text-ink-2 underline decoration-ink-3 hover:text-ink">
                {copy.strip}
              </a>
            </div>
            <div className="flex">
              <button type="button" onClick={() => step(-1)} aria-label={copy.previous} className="grid size-11 place-items-center border border-rule text-ink-2 hover:text-ink">
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label={copy.next} className="-ml-px grid size-11 place-items-center border border-rule text-ink-2 hover:text-ink">
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
