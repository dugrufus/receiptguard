import Link from "next/link";
import { Search, Camera, AlertTriangle, Tag, CalendarRange, Truck, ShoppingBag } from "lucide-react";
import { Card } from "@/components/rg/Card";
import { Pill } from "@/components/rg/Pill";
import { ListRow } from "@/components/rg/ListRow";
import { formatCurrency, formatPercentInt, formatAbsDateWithWeekday } from "@/rg/utils/format";

export default function HomePage() {
  const safetyCount = 2;

  const priceDrops = [
    { id: "p1", title: "Wireless Headphones", total: 159.99, dropRatio: 0.20 },
    { id: "p2", title: '4K Monitor 27"', total: 279.00, dropRatio: 0.15 },
  ];

  const returnWindows = [
    { id: "r1", merchant: "Target",   ends: "2025-10-21" },
    { id: "r2", merchant: "Best Buy", ends: "2025-10-25" },
    { id: "r3", merchant: "Amazon",   ends: "2025-10-31" },
  ];

  const tracking = [
    { id: "t1", carrier: "UPS",  status: "Out for delivery" },
    { id: "t2", carrier: "USPS", status: "Arrived at hub" },
  ];

  const recentPurchases = [
    { id: "o1", merchant: "Amazon", total: 45.67 },
    { id: "o2", merchant: "Apple",  total: 1299.00 },
  ];

  return (
    <div className="pb-24"> {/* space for bottom nav */}
      {/* Sticky page header */}
      <header
        className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800
                   bg-zinc-50/80 dark:bg-zinc-950/70 backdrop-blur"
      >
        <div className="mx-auto w-full max-w-screen-sm md:max-w-screen-md px-4 h-14 flex items-center">
          <h1 className="text-base font-semibold">Home</h1>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-screen-sm md:max-w-screen-md px-4 py-4 space-y-4">
        {/* Top search/actions area (compact) */}
        <div className="flex items-center gap-3">
          {/* [RG:BLOCK HOME.SEARCH_BAR START] */}
          <div className="flex-1">
            <label htmlFor="store-search" className="sr-only">Search stores</label>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 h-11 focus-within:ring-2 focus-within:ring-sky-500">
              <Search size={18} className="opacity-70" aria-hidden />
              <input
                id="store-search"
                placeholder="Search stores"
                className="w-full bg-transparent outline-none text-sm text-zinc-900 placeholder:text-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              />
            </div>
          </div>
          {/* [RG:BLOCK HOME.SEARCH_BAR END] */}

          {/* [RG:BLOCK HOME.PHOTO_BUTTON START] */}
          <Link
            href="/best-price/photo"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-11 px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <Camera size={18} aria-hidden /> Photo search
          </Link>
          {/* [RG:BLOCK HOME.PHOTO_BUTTON END] */}
        </div>

        {/* Safety notices */}
        <Card
          title="Safety notices"
          icon={<AlertTriangle size={20} className="text-amber-600 dark:text-amber-400" aria-hidden />}
          badge={<Pill tone="info">{safetyCount} {safetyCount === 1 ? "notice" : "notices"}</Pill>}
          pressable
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Check recent recalls and alerts.</span>
            <Link href="/recall" className="text-xs font-medium underline underline-offset-2 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">View</Link>
          </div>
        </Card>

        {/* Price Drops */}
        <Card
          title="Price Drops"
          icon={<Tag size={20} className="text-sky-600 dark:text-sky-400" aria-hidden />}
          actions={<Link href="/price-drops" className="text-xs font-medium underline underline-offset-2 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">See all</Link>}
        >
          <div role="list" aria-label="Recent price drops">
            {priceDrops.map((p) => (
              <ListRow
                key={p.id}
                as="a"
                href={`/price-drops/${p.id}`}
                icon={<Tag size={20} aria-hidden />}
                title={p.title}
                right={{ value: `${formatCurrency(p.total)} (${formatPercentInt(p.dropRatio)})`, showChevron: true }}
                className="first:pt-0 last:pb-0"
              />
            ))}
          </div>
        </Card>

        {/* Return Windows */}
        <Card
          title="Return Windows"
          icon={<CalendarRange size={20} className="text-emerald-600 dark:text-emerald-400" aria-hidden />}
          actions={<Link href="/return" className="text-xs font-medium underline underline-offset-2 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">See all</Link>}
        >
          <div role="list" aria-label="Upcoming return windows">
            {returnWindows.map((r) => (
              <ListRow
                key={r.id}
                as="a"
                href={`/return/${r.id}`}
                icon={<CalendarRange size={20} aria-hidden />}
                title={r.merchant}
                right={{ value: formatAbsDateWithWeekday(r.ends), showChevron: true }}
                className="first:pt-0 last:pb-0"
              />
            ))}
          </div>
        </Card>

        {/* Tracking */}
        <Card
          title="Tracking"
          icon={<Truck size={20} className="text-sky-600 dark:text-sky-400" aria-hidden />}
          actions={<Link href="/tracking" className="text-xs font-medium underline underline-offset-2 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">See all</Link>}
        >
          <div role="list" aria-label="Shipments">
            {tracking.map((t) => (
              <ListRow
                key={t.id}
                as="a"
                href={`/tracking/${t.id}`}
                icon={<Truck size={20} aria-hidden />}
                title={t.carrier}
                meta={t.status}
                right={{ showChevron: true }}
                className="first:pt-0 last:pb-0"
              />
            ))}
          </div>
        </Card>

        {/* Purchases */}
        <Card
          title="Purchases"
          icon={<ShoppingBag size={20} className="text-zinc-600 dark:text-zinc-400" aria-hidden />}
          actions={<Link href="/purchases" className="text-xs font-medium underline underline-offset-2 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">See all</Link>}
        >
          <div role="list" aria-label="Recent purchases">
            {recentPurchases.map((o) => (
              <ListRow
                key={o.id}
                as="a"
                href={`/purchases/${o.id}`}
                icon={<ShoppingBag size={20} aria-hidden />}
                title={o.merchant}
                right={{ value: formatCurrency(o.total), showChevron: true }}
                className="first:pt-0 last:pb-0"
              />
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}