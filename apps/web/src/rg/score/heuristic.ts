/**
 * Refund Likelihood & Effort Score — Heuristic
 * Weights (sum=1):
 *  - Time remaining within policy window: 0.45
 *  - Receipt quality (0..1):              0.35
 *  - Merchant policy leniency:            0.20  (lenient=1, standard=0.6, strict=0.3)
 *
 * Thresholds:
 *  - High   >= 0.66
 *  - Medium >= 0.40
 *  - Low    <  0.40
 *
 * Effort minutes ≈ inversely proportional to score:
 *   minutes = clamp( round(baseMinutes * (1.75 - score)), 2, 25 )
 */

export type ScoreBand = 'High' | 'Medium' | 'Low';

export type MerchantPolicy = 'lenient' | 'standard' | 'strict';

export interface ScoreInput {
  /** Days left in policy window; null if unknown / not applicable */
  policyDaysLeft: number | null;
  /** Receipt quality 0..1 (1 best) */
  receiptQuality: number;
  /** Merchant policy character */
  merchantPolicy: MerchantPolicy;
  /** Optional: underlying task base minutes (defaults to 10) */
  baseMinutes?: number;
  /** Optional: is price drop/return eligible (for factor list only) */
  eligible?: boolean;
}

export interface ScoreFactor {
  label: string;
  value?: string | number;
  hint?: string;
}

export interface ScoreResult {
  band: ScoreBand;
  score: number;           // 0..1
  minutesApprox: number;   // ~N min
  factors: ScoreFactor[];  // for the "Why?" drawer
}

/* internal helpers */
const policyWeight = 0.45;
const receiptWeight = 0.35;
const merchantWeight = 0.20;

const merchantMap: Record<MerchantPolicy, number> = {
  lenient: 1.0,
  standard: 0.6,
  strict: 0.3,
};

function clamp(n: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, n)); }

export function computeRefundScore(input: ScoreInput): ScoreResult {
  const {
    policyDaysLeft,
    receiptQuality,
    merchantPolicy,
    baseMinutes = 10,
    eligible,
  } = input;

  // Normalize policy time (assume 0..30 days window; unknown treated conservatively at 0.5)
  const normPolicy = policyDaysLeft == null
    ? 0.5
    : clamp(policyDaysLeft / 30, 0, 1);

  const normReceipt = clamp(receiptQuality, 0, 1);
  const normMerchant = merchantMap[merchantPolicy] ?? 0.6;

  const score = clamp(
    normPolicy   * policyWeight +
    normReceipt  * receiptWeight +
    normMerchant * merchantWeight,
  0, 1);

  let band: ScoreBand = 'Low';
  if (score >= 0.66) band = 'High';
  else if (score >= 0.40) band = 'Medium';

  const minutesApprox = clamp(Math.round(baseMinutes * (1.75 - score)), 2, 25);

  const factors: ScoreFactor[] = [
    { label: 'Policy match / time remaining', value: policyDaysLeft == null ? 'Unknown' : `${policyDaysLeft}d`, hint: 'More days left ⇒ higher score' },
    { label: 'Receipt quality', value: Math.round(normReceipt * 100) + '%', hint: 'Clear itemization & totals ⇒ higher score' },
    { label: 'Merchant policy', value: merchantPolicy, hint: 'Lenient > Standard > Strict' },
  ];
  if (typeof eligible === 'boolean') {
    factors.push({ label: 'Eligible (price-drop / return)', value: eligible ? 'Yes' : 'No' });
  }

  return { band, score, minutesApprox, factors };
}
