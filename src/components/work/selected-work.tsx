import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { KindSymbol } from '@/components/kind-symbol';
import { HmiArt, RadarTracksArt } from '@/components/work/work-art';
import type { Copy } from '@/content/copy';
import type { TrackKind } from '@/content/profile';
import type { Locale } from '@/i18n/config';
import { caseStudyUrl, type WorkItem } from '@/lib/work';

/** Callsigns tie each case study to its blip family on the scope; unknown slugs get one from their name. */
const CALLSIGNS: Record<string, { callsign: string; kind: TrackKind; art?: () => ReactNode }> = {
  coup: { callsign: 'COUP', kind: 'project' },
  genesa: { callsign: 'GENESA', kind: 'project' },
  'hmi-bluetooth-remote': { callsign: 'HMI', kind: 'project', art: HmiArt },
  'plastmach-group': { callsign: 'PLSTMCH', kind: 'project' },
  'ai-cup-2026': { callsign: 'AICUP', kind: 'competition', art: RadarTracksArt },
};

function idOf(item: WorkItem) {
  return CALLSIGNS[item.slug] ?? { callsign: item.slug.replace(/[^a-z0-9]/gi, '').slice(0, 7).toUpperCase(), kind: 'project' as const };
}

/** The callsign as a data tag pinned to the visual's corner, like a label on the scope. */
function Tag({ item }: { item: WorkItem }) {
  const { callsign, kind } = idOf(item);
  return (
    <span className="absolute left-0 top-0 z-10 flex items-center gap-1.5 border-b border-r border-rule bg-glass px-2.5 py-1.5">
      <KindSymbol kind={kind} className="size-3 text-track" />
      <span className="data text-xs font-bold text-ink group-hover:text-amber">{callsign}</span>
    </span>
  );
}

function Visual({ item, lang }: { item: WorkItem; lang: Locale }) {
  const { art: Art } = idOf(item);
  if (!item.image) {
    if (!Art) return null;
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-rule">
        <Tag item={item} />
        <Art />
      </div>
    );
  }
  const phone = item.image.frame === 'phone';
  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-[#161b20]">
      <Tag item={item} />
      <Image
        src={item.image.src}
        alt={item.title[lang]}
        width={item.image.width}
        height={item.image.height}
        sizes="(min-width: 768px) 22rem, 100vw"
        className={phone ? 'absolute left-1/2 top-4 h-auto w-[34%] -translate-x-1/2 rounded-[14px] transition-transform duration-500 ease-(--ease-out-expo) group-hover:-translate-y-2' : 'size-full object-cover object-top transition-transform duration-700 ease-(--ease-out-expo) group-hover:scale-[1.03]'}
      />
    </div>
  );
}

/** Featured case studies, read from the SNS studio site; each row opens the case study there. */
export function SelectedWork({ items, lang, copy }: { items: WorkItem[]; lang: Locale; copy: Copy['work'] }) {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 id="work-title" className="text-3xl font-extrabold tracking-[-0.02em] md:text-5xl">{copy.title}</h2>
          <p className="mt-4 text-lg text-ink-2">{copy.body}</p>
        </div>
        <a href={lang === 'ro' ? 'https://snsautomation.tech/ro/work' : 'https://snsautomation.tech/work'} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-ink-3 hover:decoration-amber">
          {copy.all}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <ol className="mt-12 border-t border-rule">
        {items.map((item) => {
          return (
            <li key={item.slug} className="border-b border-rule">
              <a
                href={caseStudyUrl(item.slug, lang)}
                target="_blank"
                rel="noopener"
                className="group grid gap-5 py-6 md:grid-cols-[22rem_minmax(0,1fr)_auto] md:items-center md:gap-10 md:py-8"
              >
                <Visual item={item} lang={lang} />
                <div className="md:col-start-2">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] md:text-3xl">{item.title[lang]}</h3>
                  <p className="mt-2 max-w-[60ch] text-ink-2">{item.summary[lang]}</p>
                  <p className="mt-3 text-sm text-ink-3">{item.stack.join(' · ')}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink md:col-start-3 md:justify-self-end">
                  {copy.open}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
