import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible_Next, B612_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../globals.css';
import { getCopy } from '@/content/copy';
import { person, tracks } from '@/content/profile';
import { isLocale, locales } from '@/i18n/config';
import { localizePath } from '@/i18n/routing';

// Next has no metrics to build an adjusted fallback for this family yet, so the plain system stack stands in.
const atkinson = Atkinson_Hyperlegible_Next({ subsets: ['latin', 'latin-ext'], variable: '--font-atkinson', display: 'swap', adjustFontFallback: false, fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'] });
const b612 = B612_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-b612', display: 'swap' });

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: '#1b2026', colorScheme: 'dark' };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = getCopy(lang);
  return {
    metadataBase: new URL(person.url),
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: { canonical: localizePath('/', lang), languages: { en: '/', ro: '/ro', 'x-default': '/' } },
    openGraph: {
      type: 'profile',
      url: localizePath('/', lang),
      siteName: person.name,
      title: copy.meta.title,
      description: copy.meta.description,
      locale: lang === 'ro' ? 'ro_RO' : 'en_GB',
      images: [{ url: '/og-aicup.jpg', width: 1200, height: 630, alt: copy.contact.photoAlt }],
    },
    twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
  };
}

function personJsonLd(lang: 'en' | 'ro') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    url: person.url,
    image: `${person.url}/sinan-aicup.jpg`,
    jobTitle: lang === 'ro' ? 'Inginer AI și software' : 'AI & Software Engineer',
    email: `mailto:${person.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Groningen', addressCountry: 'NL' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Groningen' },
    award: 'AI Cup 2026, 2nd place of 89 teams',
    sameAs: [person.linkedin, person.github, person.studio],
    knowsAbout: ['Machine learning', 'Python', 'TypeScript', 'Next.js', 'React Native', 'PostgreSQL'],
    hasOccupation: tracks.filter((t) => t.kind === 'role').map((t) => ({ '@type': 'Occupation', name: t.role.en })),
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  return (
    <html lang={lang} className={`${atkinson.variable} ${b612.variable}`}>
      <body className="min-h-screen bg-glass text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)).replace(/</g, '\\u003c') }} />
        <a href="#main" className="skip-link">{copy.skip}</a>
        {children}
      </body>
      <GoogleAnalytics gaId="G-075R6P76VN" />
    </html>
  );
}
