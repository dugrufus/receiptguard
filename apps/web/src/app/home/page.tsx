import { t } from "@/rg/copy/t";
import Link from "next/link";
import { t } from "@/rg/i18n";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-xl pb-20 p-4 space-y-4">
      {/* [RG:BLOCK HOME.PRICE_DROPS START] */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-medium">{t("home.priceDrops.title") ?? "Price drops"}</h2>
        <div className="text-sm opacity-80"> </div>
      </section>
      {/* [RG:BLOCK HOME.PRICE_DROPS END] */}
    {/* [RG:BLOCK HOME.ADD_PURCHASE_FAB START] */}
<Link
  href="/add-purchase"
  aria-label={t('add.title')}
  className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-1 ring-black/5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
>
  <span className="sr-only">{t('add.title')}</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
</Link>
{/* [RG:BLOCK HOME.ADD_PURCHASE_FAB END] */}
</main>
  );
}
