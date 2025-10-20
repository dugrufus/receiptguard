export type PurchaseLike = { id?: string; store?: string; returnBy: string | Date };
export function daysUntilReturnBy(purchase: PurchaseLike): number {
  const d = new Date(purchase.returnBy);
  const now = new Date();
  return Math.ceil((d.getTime() - now.getTime()) / 86400000);
}
export function urgencyColor(days: number): string {
  if (days <= 0) return "text-red-700";
  if (days <= 3) return "text-red-600";
  if (days <= 7) return "text-amber-600";
  return "text-green-600";
}