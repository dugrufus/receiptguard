import Link from "next/link";
import { Card } from "@/components/rg/Card";
import { t } from "@/rg/copy";

export default function RecallIndexPage() {
  return (
    <main className="p-4 space-y-4">
      {/* [RG:BLOCK RECALL.INDEX START] */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h1 className="text-xl font-semibold">{t("recall.title")}</h1>
      </header>

      <section aria-labelledby="recall-list-title" className="space-y-3">
        <h2 id="recall-list-title" className="sr-only">{t("recall.title")}</h2>

        {/* Empty state placeholder — replace with real notices list when data is wired */}
        <Card>
          <p className="text-sm">{t("recall.list.empty")}</p>
        </Card>
      </section>
      {/* [RG:BLOCK RECALL.INDEX END] */}
    </main>
  );
}