import { Download } from 'lucide-react';
import Link from 'next/link';
import { Clock } from '@/components/site/clock';
import type { Copy } from '@/content/copy';
import { person } from '@/content/profile';
import { locales, type Locale } from '@/i18n/config';
import { localizePath } from '@/i18n/routing';

/** The workstation's top strip: who, where and when, language, and the CV. */
export function StatusStrip({ lang, copy }: { lang: Locale; copy: Copy['status'] }) {
  return (
    <header className="border-b border-rule bg-rack">
      <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={localizePath('/', lang)} className="data text-[13px] font-bold tracking-[0.06em] text-ink">
          S-D ÇEVIKER
        </Link>
        <p className="hidden items-center gap-2 text-[13px] text-ink-2 md:flex">
          <span className="data font-bold text-track">{person.station}</span>
          <span>{copy.station}</span>
          <Clock timeZone={person.timeZone} />
          <span className="text-ink-3">{copy.local}</span>
        </p>
        <div className="flex items-center gap-3">
          <nav aria-label={copy.language} className="flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={localizePath('/', l)}
                hrefLang={l}
                aria-current={l === lang ? 'page' : undefined}
                className={`data grid min-h-11 min-w-11 place-items-center text-[13px] ${l === lang ? 'text-amber' : 'text-ink-3 hover:text-ink'}`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>
          <a href={person.cv} download className="inline-flex h-9 items-center gap-1.5 bg-amber px-3 text-[13px] font-bold text-amber-ink transition-colors hover:bg-[#f7d27a]">
            <Download className="size-3.5" aria-hidden="true" />
            {copy.cv}
          </a>
        </div>
      </div>
    </header>
  );
}
