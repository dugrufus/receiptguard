export type PriceDrop = { id: string; item: string; paidTotal: number; competitorTotal: number; dropPercent: number };
export type ReturnWindow = { id: string; store: string; returnBy: string };
export type TrackingItem = { id: string; carrier: string; status: string };
export type Purchase = { id: string; store: string; total: number; date: string; returnBy: string };

export function getMockPriceDrops(): PriceDrop[] {
  return [
    { id: "pd_1", item: "Wireless Headphones", paidTotal: 199.99, competitorTotal: 159.99, dropPercent: 20 },
    { id: "pd_2", item: "4K Monitor 27\"", paidTotal: 329.0, competitorTotal: 279.0, dropPercent: 15 }
  ];
}
export function getMockReturnWindows(): ReturnWindow[] {
  const now = new Date();
  const d = (n: number) => new Date(now.getTime() + n*86400000).toISOString();
  return [
    { id: "rw_1", store: "Target", returnBy: d(2) },
    { id: "rw_2", store: "Best Buy", returnBy: d(6) },
    { id: "rw_3", store: "Amazon", returnBy: d(12) }
  ];
}
export function getMockTracking(): TrackingItem[] {
  return [
    { id: "tr_1", carrier: "UPS", status: "Out for delivery" },
    { id: "tr_2", carrier: "USPS", status: "Arrived at hub" }
  ];
}
export function getMockPurchases(): Purchase[] {
  const iso = (d: Date) => d.toISOString();
  return [
    { id: "po_1", store: "Amazon", total: 45.67, date: iso(new Date()), returnBy: iso(new Date(Date.now() + 10*86400000)) },
    { id: "po_2", store: "Apple", total: 1299, date: iso(new Date()), returnBy: iso(new Date(Date.now() + 14*86400000)) }
  ];
}
export function getMockSafetyNoticesCount(): number {
  return 2;
}