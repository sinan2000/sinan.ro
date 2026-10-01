/**
 * Drawn visuals for case studies that have no screenshots yet, in the scope's own vector language.
 * They illustrate the subject; they are not captures of the product.
 */

/** AI Cup: bird tracks crossing a radar sector, one line style per track. Illustrative, not competition data. */
export function RadarTracksArt() {
  const tracks = [
    { d: 'M38 150 C70 132 96 126 132 112 S196 86 236 70', label: 'TRK 014', at: [236, 70] },
    { d: 'M60 182 C92 170 130 168 168 150 S226 128 262 124', label: 'TRK 027', at: [262, 124] },
    { d: 'M84 70 C112 84 150 96 182 98 S236 96 270 104', label: 'TRK 033', at: [270, 104] },
  ];
  return (
    <svg viewBox="0 0 320 200" className="size-full" role="img" aria-label="Drawing: three bird tracks crossing a radar sector">
      <rect width="320" height="200" fill="#161b20" />
      <g fill="none" stroke="var(--color-ring)" strokeWidth="0.8">
        <path d="M20 196 A180 180 0 0 1 300 30" strokeDasharray="2 3" />
        <path d="M20 196 A260 260 0 0 1 316 92" strokeDasharray="2 3" />
        <path d="M20 196 A110 110 0 0 1 130 92" strokeDasharray="2 3" />
      </g>
      {tracks.map((t, i) => (
        <g key={t.label}>
          <path d={t.d} fill="none" stroke="var(--color-track)" strokeWidth="1.4" strokeDasharray={i === 1 ? '5 3' : i === 2 ? '1.5 3' : undefined} opacity={0.9} />
          <rect x={t.at[0] - 3} y={t.at[1] - 3} width="6" height="6" fill="var(--color-track)" />
          <text x={t.at[0] + 7} y={t.at[1] + 3} fontFamily="var(--font-data)" fontSize="9" fill="var(--color-ink)">{t.label}</text>
        </g>
      ))}
      <text x="308" y="190" textAnchor="end" fontFamily="var(--font-data)" fontSize="8" fill="var(--color-ink-3)">RADAR TRACKS · 9 CLASSES</text>
    </svg>
  );
}

/** HMI: the control screen on a phone, as line art: position readout, target, start and stop. */
export function HmiArt() {
  return (
    <svg viewBox="0 0 320 200" className="size-full" role="img" aria-label="Drawing: the HMI control screen on a phone, with position, target, start and stop">
      <rect width="320" height="200" fill="#161b20" />
      <g transform="translate(108 14)">
        <rect width="104" height="186" rx="14" fill="#1b2026" stroke="var(--color-ink-3)" strokeWidth="1.2" />
        <rect x="40" y="7" width="24" height="4" rx="2" fill="var(--color-ring)" />
        <text x="12" y="34" fontFamily="var(--font-data)" fontSize="7" fill="var(--color-ink-3)">PL-1301 · CONNECTED</text>
        <rect x="12" y="42" width="80" height="44" fill="var(--color-panel-2)" />
        <text x="18" y="54" fontFamily="var(--font-data)" fontSize="6.5" fill="var(--color-ink-3)">POSITION MM</text>
        <text x="18" y="76" fontFamily="var(--font-data)" fontSize="18" fontWeight="700" fill="var(--color-ink)">----.-</text>
        <rect x="12" y="94" width="80" height="22" fill="none" stroke="var(--color-ring)" />
        <text x="18" y="108" fontFamily="var(--font-data)" fontSize="7" fill="var(--color-ink-2)">TARGET ----.-</text>
        <rect x="12" y="124" width="38" height="26" fill="var(--color-track)" />
        <text x="31" y="141" textAnchor="middle" fontFamily="var(--font-data)" fontSize="8" fontWeight="700" fill="#12161a">START</text>
        <rect x="54" y="124" width="38" height="26" fill="#e05d4a" />
        <text x="73" y="141" textAnchor="middle" fontFamily="var(--font-data)" fontSize="8" fontWeight="700" fill="#12161a">STOP</text>
      </g>
      <g fill="none" stroke="var(--color-track)" strokeWidth="1" opacity="0.7">
        <path d="M232 92 a10 10 0 0 1 0 16M240 84 a20 20 0 0 1 0 32M248 76 a30 30 0 0 1 0 48" />
      </g>
      <text x="262" y="104" fontFamily="var(--font-data)" fontSize="8" fill="var(--color-ink-3)">BLE</text>
    </svg>
  );
}
