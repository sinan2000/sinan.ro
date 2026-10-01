import Link from 'next/link';
import { getCopy } from '@/content/copy';

// Rendered inside the [lang] layout; the proxy sends unknown English paths here, so English is the fallback.
export default function NotFound() {
  const copy = getCopy('en');
  return (
    <main id="main" className="mx-auto grid min-h-[70svh] max-w-[1360px] content-center gap-4 px-4 sm:px-6">
      <p className="data text-sm text-track">404 · NO RETURN</p>
      <h1 className="text-4xl font-extrabold tracking-[-0.02em] md:text-6xl">{copy.notFound.title}</h1>
      <p className="text-lg text-ink-2">{copy.notFound.body}</p>
      <Link href="/" className="mt-2 w-fit font-semibold underline decoration-ink-3 hover:decoration-amber">{copy.notFound.home}</Link>
    </main>
  );
}
