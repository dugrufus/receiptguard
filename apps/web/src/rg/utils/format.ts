export function formatPercentInt(value: number): string {
  if (!Number.isFinite(value)) return "0%";
  const pct = Math.round(value * 100);
  return `${pct}%`;
}