import { ArrowUpRight, Download } from 'lucide-react';
import type { Copy } from '@/content/copy';
import { capabilities, person, personal } from '@/content/profile';
import type { Locale } from '@/i18n/config';

/** A small authored drawing of a family graph: people as boxes, unions as dots. */
function TreeSketch() {
  const people: [number, number][] = [
    [16, 14], [54, 14], [86, 14], [124, 14],
    [35, 56], [105, 56],
    [16, 98], [52, 98], [88, 98], [124, 98],
  ];
  return (
    <svg viewBox="0 0 140 110" className="h-auto w-full max-w-[20rem]" aria-hidden="true" focusable="false">
      <g stroke="var(--color-ring)" strokeWidth="1" fill="none">
        <path d="M28 14H42M98 14H112M35 14V50M105 14V50M47 56H93M70 56V76M16 76H124M16 76V92M52 76V92M88 76V92M124 76V92" />
      </g>
      <g fill="var(--color-track)">
        <circle cx="35" cy="14" r="2.2" />
        <circle cx="105" cy="14" r="2.2" />
        <circle cx="70" cy="56" r="2.2" />
      </g>
      {people.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 12} y={y - 6} width="24" height="12" fill="var(--color-panel-2)" stroke="var(--color-ink-3)" strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export function Personal({ lang, copy }: { lang: Locale; copy: Copy['personal'] }) {
  return (
    <section aria-labelledby="personal-title" className="border-t border-rule">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:py-24">
        <div>
          <h2 id="personal-title" className="text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">{personal.title[lang]}</h2>
          <p className="mt-4 max-w-[52ch] text-lg text-ink-2">{personal.body[lang]}</p>
          <p className="mt-3 text-sm text-ink-3">{personal.stack}</p>
          <a href={personal.href} target="_blank" rel="noopener" className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-ink-3 hover:decoration-amber">
            {copy.visit} {personal.name}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <TreeSketch />
        </div>
      </div>
    </section>
  );
}

export function Tools({ lang, copy }: { lang: Locale; copy: Copy['tools'] }) {
  return (
    <section aria-labelledby="tools-title" className="rack border-y border-rule">
      <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 md:py-24">
        <h2 id="tools-title" className="text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">{copy.title}</h2>
        <dl className="mt-10 grid gap-2.5">
          {capabilities.map((c) => (
            <div key={c.area.en} className="grid border border-rule bg-panel-2 shadow-[0_6px_14px_-8px_rgb(0_0_0/0.7)] md:grid-cols-[5rem_15rem_minmax(0,1fr)]">
              <span aria-hidden="true" className="data hidden border-r border-rule px-4 py-4 text-sm font-bold text-track md:block">{c.code}</span>
              <dt className="border-b border-rule px-4 pt-4 pb-2 font-bold md:border-b-0 md:border-r md:py-4">{c.area[lang]}</dt>
              <dd className="px-4 pb-4 pt-2 text-ink-2 md:py-4">{c.tools}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Contact({ copy }: { copy: Copy['contact'] }) {
  const channels = [
    { label: copy.email, value: person.email, href: `mailto:${person.email}` },
    { label: copy.whatsapp, value: person.whatsapp.display, href: person.whatsapp.href },
    { label: copy.linkedin, value: 'in/sinan-ceviker', href: person.linkedin },
    { label: copy.github, value: 'sinan2000', href: person.github },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-28">
        <div>
          <h2 id="contact-title" className="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">{copy.title}</h2>
          <p className="mt-5 max-w-[44ch] text-lg text-ink-2">{copy.body}</p>
          <a href={person.cv} download className="mt-8 inline-flex min-h-12 items-center gap-2 bg-amber px-5 font-bold text-amber-ink transition-colors hover:bg-[#f7d27a]">
            <Download className="size-4" aria-hidden="true" />
            {copy.cv}
          </a>
        </div>
        <ul className="self-end border border-rule bg-panel">
          {channels.map((c) => (
            <li key={c.label} className="border-b border-rule last:border-b-0">
              <a href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" className="group grid min-h-16 grid-cols-[6.5rem_minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 md:px-6">
                <span className="data text-xs font-bold uppercase text-track">{c.label}</span>
                <span className="break-all text-lg font-semibold group-hover:text-amber md:text-2xl">{c.value}</span>
                <ArrowUpRight className="size-5 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
