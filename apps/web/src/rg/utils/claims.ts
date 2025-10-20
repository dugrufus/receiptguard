export function validatePercent(n: number): boolean {
  return Number.isFinite(n) && n >= 1 && n <= 100;
}
export function applyPolicyCaps(amount: number, capPercent: number, maxDollars: number): number {
  const byPercent = amount * Math.min(1, Math.max(0, capPercent / 100));
  const byMax = Math.min(byPercent, maxDollars);
  return Math.max(0, byMax);
}