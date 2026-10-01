import { NextResponse, type NextRequest } from 'next/server';
import { decideRoute } from '@/i18n/routing';

export function proxy(request: NextRequest) {
  const decision = decideRoute(request.nextUrl.pathname);
  if (decision.kind === 'next') return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = decision.to;
  return decision.kind === 'rewrite' ? NextResponse.rewrite(url) : NextResponse.redirect(url, 308);
}

// Next internals, metadata routes and files (the CV, images, icons) are never localized.
export const config = {
  matcher: ['/((?!_next|api|(?:.*/)?(?:icon|apple-icon|opengraph-image|twitter-image)|robots.txt|sitemap.xml|.*\..*).*)'],
};
