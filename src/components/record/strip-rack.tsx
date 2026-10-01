import { ArrowUpRight } from 'lucide-react';
import { KindSymbol } from '@/components/kind-symbol';
import type { Copy } from '@/content/copy';
import type { Track, TrackKind } from '@/content/profile';
import type { Locale } from '@/i18n/config';

const PAPER: Record<TrackKind, string> = {
  role: 'bg-strip-role',
  project: 'bg-strip-project',
  competition: 'bg-strip-competition',
  education: 'bg-strip-education',
};

function Strip({ t, lang, kinds }: { t: Track; lang: Locale; kinds: Copy['kinds'] }) {
  return (
    <li
      id={`strip-${t.callsign.toLowerCase()}`}
      className={`${PAPER[t.kind]} scroll-mt-24 text-strip-ink shadow-[0_6px_14px_-8px_rgb(0_0_0/0.7)] md:grid md:grid-cols-[8.5rem_minmax(0,1fr)_9.5rem_minmax(0,1.6fr)]`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-strip-ink/20 px-4 py-3 md:block md:border-b-0 md:border-r md:py-4">
        <p className="data text-xl font-bold leading-none">{t.callsign}</p>
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-strip-ink-2 md:mt-2">
          <KindSymbol kind={t.kind} className="size-4 shrink-0" />
          {kinds[t.kind]}
        </p>
      </div>
      <div className="px-4 pt-3 md:border-r md:border-strip-ink/20 md:py-4">
        <p className="font-bold leading-snug">{t.role[lang]}</p>
        <p className="text-[15px] text-strip-ink-2">{t.org[lang]}</p>
      </div>
      <div className="px-4 pt-1 md:border-r md:border-strip-ink/20 md:py-4">
        <p className="text-[15px] text-strip-ink-2 md:text-strip-ink">{t.period[lang]}</p>
      </div>
      <div className="grid gap-1.5 px-4 pb-4 pt-3 md:py-4">
        <p className="font-semibold leading-snug">{t.result[lang]}</p>
        <p className="text-[15px] leading-relaxed text-strip-ink-2">{t.details[lang]}</p>
        {t.links.length > 0 && (
          <p className="flex flex-wrap gap-x-4">
            {t.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold underline decoration-strip-ink/40 hover:decoration-strip-ink">
                {l.label[lang]}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </p>
        )}
      </div>
    </li>
  );
}

/** The record as a strip rack: active strips on the upper rail, completed ones below, newest first. */
export function StripRack({ tracks, lang, copy, kinds }: { tracks: Track[]; lang: Locale; copy: Copy['record']; kinds: Copy['kinds'] }) {
  const byNewest = [...tracks].sort((a, b) => b.start - a.start);
  const groups = [
    { key: 'active', title: copy.active, list: byNewest.filter((t) => t.active) },
    { key: 'completed', title: copy.completed, list: byNewest.filter((t) => !t.active) },
  ];
  return (
    <section id="record" aria-labelledby="record-title" className="rack border-y border-rule">
      <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 md:py-28">
        <h2 id="record-title" className="text-3xl font-extrabold tracking-[-0.02em] md:text-5xl">{copy.title}</h2>
        <div className="mt-12 grid gap-12">
          {groups.map((g) => (
            <div key={g.key}>
              <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold text-ink-2">
                {g.title}
                <span className="data text-ink-3">{g.list.length}</span>
              </h3>
              <ol className="grid gap-2.5">
                {g.list.map((t) => (
                  <Strip key={t.callsign} t={t} lang={lang} kinds={kinds} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
