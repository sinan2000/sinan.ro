import 'server-only';
import snapshot from '@/content/work-snapshot.json';

const SNS = 'https://www.snsautomation.tech';
const ENDPOINT = `${SNS}/cms-api/projects?where%5Bfeatured%5D%5Bexists%5D=true&locale=all&depth=1&sort=order&limit=10`;

type Pair = { en: string; ro: string };

export type WorkItem = {
  slug: string;
  title: Pair;
  summary: Pair;
  stack: string[];
  image: { src: string; width: number; height: number; frame: 'phone' | 'browser' | 'none' } | null;
};

type ApiMedia = { kind?: string; frame?: string | null; file?: { url?: string; width?: number; height?: number } | null };
type ApiProject = { slug: string; title: unknown; summary: unknown; stack?: { name: string }[]; media?: ApiMedia[] };

function pair(v: unknown): Pair | null {
  if (typeof v === 'string') return { en: v, ro: v };
  if (!v || typeof v !== 'object') return null;
  const { en, ro } = v as Partial<Pair>;
  return en ? { en, ro: ro || en } : null;
}

/** One SNS project as this site shows it; null when the document is missing what the list needs. */
export function toWorkItem(p: ApiProject): WorkItem | null {
  const title = pair(p.title);
  const summary = pair(p.summary);
  if (!p.slug || !title || !summary) return null;
  const cover = p.media?.find((m) => m.kind === 'image' && m.file?.url && m.file.width && m.file.height);
  const frame = cover?.frame === 'phone' || cover?.frame === 'browser' ? cover.frame : 'none';
  return {
    slug: p.slug,
    title,
    summary,
    stack: (p.stack ?? []).map((s) => s.name),
    image: cover?.file?.url ? { src: new URL(cover.file.url, SNS).toString(), width: cover.file.width!, height: cover.file.height!, frame } : null,
  };
}

/** Featured SNS projects, refreshed daily; the bundled snapshot covers an outage or a malformed answer. */
export async function getSelectedWork(): Promise<WorkItem[]> {
  try {
    const res = await fetch(ENDPOINT, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`SNS answered ${res.status}`);
    const data = (await res.json()) as { docs?: ApiProject[] };
    const items = (data.docs ?? []).map(toWorkItem).filter((x): x is WorkItem => x !== null);
    if (items.length === 0) throw new Error('SNS returned no featured projects');
    return items;
  } catch (e) {
    console.error(`[work] Using the bundled snapshot: ${e instanceof Error ? e.message : String(e)}`);
    return snapshot as WorkItem[];
  }
}

export function caseStudyUrl(slug: string, lang: 'en' | 'ro'): string {
  return `${SNS}${lang === 'ro' ? '/ro' : ''}/work/${slug}`;
}
