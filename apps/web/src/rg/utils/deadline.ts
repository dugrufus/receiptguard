export type PurchaseLike = { returnBy?: string | Date | null };

export function daysUntilReturnBy(purchase: PurchaseLike): number {
  const rb = purchase?.returnBy ? new Date(purchase.returnBy) : null;
  if (!rb || isNaN(rb.getTime())) return 0;
  const now = new Date();
  // ceil to count partial days
  const ms = rb.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / 86_400_000));
}

export function urgencyColor(days: number): 'ok' | 'warn' | 'danger' {
  if (days <= 2) return 'danger';
  if (days <= 5) return 'warn';
  return 'ok';
}

export function formatAbsolute(d: Date): string {
  return d.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
}