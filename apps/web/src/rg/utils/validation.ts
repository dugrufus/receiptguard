/**
 * validatePercent: clamps to integer 1..100
 */
export function validatePercent(value: number): number {
  if (!Number.isFinite(value)) throw new Error('Percent must be a number');
  const r = Math.round(value);
  if (r < 1) return 1;
  if (r > 100) return 100;
  return r;
}

/**
 * applyPolicyCaps:
 * Given requested percent (1..100) and total price in dollars,
 * enforce optional caps: maxPercent (1..100) and/or maxAmountCents (integer).
 * Returns the effective percent and capped amount in cents.
 */
export function applyPolicyCaps(
  requestedPercent: number,
  totalPriceDollars: number,
  caps?: { maxPercent?: number; maxAmountCents?: number }
): { percent: number; cappedAmountCents: number } {
  let percent = validatePercent(requestedPercent);
  if (typeof caps?.maxPercent === 'number') {
    percent = Math.min(percent, validatePercent(caps.maxPercent));
  }
  const rawCents = Math.round(totalPriceDollars * 100 * (percent / 100));
  const cappedAmountCents =
    typeof caps?.maxAmountCents === 'number'
      ? Math.min(rawCents, Math.max(0, Math.floor(caps.maxAmountCents)))
      : rawCents;
  return { percent, cappedAmountCents };
}