import { Download, Mail } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Contact, Personal, Tools } from '@/components/closing/closing';
import { StripRack } from '@/components/record/strip-rack';
import { TrackingDisplay } from '@/components/scope/tracking-display';
import { StatusStrip } from '@/components/site/status-strip';
import { SnsCredit } from '@/components/sns/sns-credit';
import { SelectedWork } from '@/components/work/selected-work';
import { getCopy } from '@/content/copy';
import { person, tracks } from '@/content/profile';
import { isLocale, locales } from '@/i18n/config';
import { localizePath } from '@/i18n/routing';
import { getSelectedWork } from '@/lib/work';

export const revalidate = 86400;

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const work = await getSelectedWork();

  return (
    <>
      <StatusStrip lang={lang} copy={copy.status} />
      <main id="main">
        <section aria-labelledby="name" className="mx-auto grid max-w-[1360px] gap-8 px-4 pb-16 pt-10 sm:px-6 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:grid-rows-[auto_auto] lg:gap-x-14 lg:gap-y-6 lg:pb-8 lg:pt-8 lg:[@media(max-height:820px)]:gap-y-4 lg:[@media(max-height:820px)]:pt-5">
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <h1 id="name" className="text-[clamp(2.5rem,min(5.2vw,8.5svh),4.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
              <span className="whitespace-nowrap">Sinan-Deniz</span> <span className="block">Çeviker</span>
            </h1>
            <p className="mt-4 text-xl font-semibold md:text-2xl">{copy.hero.role}</p>
            <p className="mt-3 max-w-[46ch] text-[17px] leading-relaxed text-ink-2 lg:[@media(max-height:820px)]:text-[15px] lg:[@media(max-height:820px)]:leading-normal">{copy.hero.lede}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={person.cv} download className="inline-flex min-h-12 items-center gap-2 bg-amber px-5 font-bold text-amber-ink transition-colors hover:bg-[#f7d27a]">
                <Download className="size-4" aria-hidden="true" />
                {copy.hero.cv}
                <span className="data text-xs font-normal opacity-70">{copy.hero.cvMeta}</span>
              </a>
              <a href={`mailto:${person.email}`} className="inline-flex min-h-12 items-center gap-2 border border-ring px-5 font-bold transition-colors hover:border-ink">
                <Mail className="size-4" aria-hidden="true" />
                {copy.hero.email}
              </a>
            </div>
          </div>
          <TrackingDisplay tracks={tracks} lang={lang} copy={copy.scope} kinds={copy.kinds} initial="AICUP" />
        </section>

        <StripRack tracks={tracks} lang={lang} copy={copy.record} kinds={copy.kinds} />
        <SelectedWork items={work} lang={lang} copy={copy.work} />
        <Personal lang={lang} copy={copy.personal} />
        <Tools lang={lang} copy={copy.tools} />
        <Contact copy={copy.contact} />
      </main>
      <footer className="border-t border-rule bg-rack">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-ink-3 sm:px-6">
          <p>{copy.footer.rights}</p>
          <nav aria-label={copy.status.language} className="flex">
            {locales.map((l) => (
              <Link key={l} href={localizePath('/', l)} hrefLang={l} aria-current={l === lang ? 'page' : undefined} className={`data grid min-h-11 min-w-11 place-items-center ${l === lang ? 'text-amber' : 'hover:text-ink'}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>
          <SnsCredit lang={lang} site="sinan-ro" />
        </div>
      </footer>
    </>
  );
}
