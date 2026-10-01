import { defaultLocale, isLocale, type Locale } from './config';

export type RouteDecision = { kind: 'next' } | { kind: 'rewrite'; to: string } | { kind: 'redirect'; to: string };

function firstSegment(pathname: string): string {
  return pathname.split('/')[1] ?? '';
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** English is unprefixed (rewritten to /en internally); /en/... redirects to the unprefixed URL; /ro stays. */
export function decideRoute(pathname: string): RouteDecision {
  const seg = firstSegment(pathname);
  if (seg === defaultLocale) {
    const rest = pathname.slice(seg.length + 1);
    return { kind: 'redirect', to: rest === '' ? '/' : rest };
  }
  if (isLocale(seg)) return { kind: 'next' };
  return { kind: 'rewrite', to: pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}` };
}
