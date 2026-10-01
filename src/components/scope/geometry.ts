/** The scope's clock: the present sits at the centre, the rim is just before September 2023. */
export const NOW = 2026.75;
const SPAN = 3.25;
/** Scope radius as a share of the square, leaving the rim for bearing labels. */
export const RADIUS = 0.44;

/** Distance from the centre (0..1) for a decimal year; square-root spacing keeps recent tracks apart. */
export function rangeOf(year: number): number {
  return Math.min(1, Math.max(0.2, Math.sqrt((NOW - year) / SPAN)));
}

/** Server and browser trig can differ in the last digits; rounding keeps hydration identical. */
const round = (n: number) => Math.round(n * 1000) / 1000;

/** Position in percent of the square for a bearing (degrees from north, clockwise) and a range. */
export function polar(bearing: number, range: number): { x: number; y: number } {
  const a = (bearing * Math.PI) / 180;
  return { x: round(50 + 100 * RADIUS * range * Math.sin(a)), y: round(50 - 100 * RADIUS * range * Math.cos(a)) };
}

/** Range rings at the turn of each year still on the scope. */
export const RINGS = [2026, 2025, 2024].map((year) => ({ year, range: rangeOf(year) }));

/** Brightness of a blip the sweep passed `behind` degrees ago: full on contact, decaying to a dim hold. */
export function afterglow(behind: number): number {
  return 0.32 + 0.68 * Math.exp(-behind / 70);
}
