import type { TrackKind } from '@/content/profile';

/** ATC-style track symbols: the shape carries the kind, so colour is never the only signal. */
export function KindSymbol({ kind, className }: { kind: TrackKind; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" className={className}>
      {kind === 'role' && <rect x="3" y="3" width="10" height="10" fill="currentColor" />}
      {kind === 'project' && <circle cx="8" cy="8" r="5.5" fill="currentColor" />}
      {kind === 'competition' && <path d="M8 1.5 14.5 8 8 14.5 1.5 8Z" fill="currentColor" />}
      {kind === 'education' && <path d="M8 2 14.5 13.5h-13Z" fill="currentColor" />}
    </svg>
  );
}
