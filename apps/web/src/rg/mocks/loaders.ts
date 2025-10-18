export type PriceDrop = { id: string; item: string; wasCents: number; nowCents: number; merchant: string; date: string };
export type ReturnWindow = { id: string; item: string; windowEnd: string; daysLeft: number };
export type Tracking = { id: string; carrier: string; numberMasked: string; status: string; lastUpdate: string };
export type Purchase = { id: string; merchant: string; totalCents: number; date: string; items: { name: string; qty: number; priceCents: number }[] };

export function getMockPriceDrops(): PriceDrop[] {
  return [
    { id: "pd_1", item: "Wireless Headphones", wasCents: 12999, nowCents: 9999, merchant: "ShopCo", date: "2025-10-10" }
  ];
}
export function getMockReturnWindows(): ReturnWindow[] {
  return [
    { id: "rw_1", item: "Winter Jacket", windowEnd: "2025-11-02", daysLeft: 17 }
  ];
}
export function getMockTracking(): Tracking[] {
  return [
    { id: "trk_1", carrier: "UPS", numberMasked: "1Z****1234", status: "In Transit", lastUpdate: "2025-10-15T14:21:00Z" }
  ];
}
export function getMockPurchases(): Purchase[] {
  return [
    { id: "pur_1", merchant: "ShopCo", totalCents: 18999, date: "2025-10-08",
      items: [
        { name: "Wireless Headphones", qty: 1, priceCents: 12999 },
        { name: "Case", qty: 1, priceCents: 6000 }
      ] }
  ];
}