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
    </main>
  );
}
