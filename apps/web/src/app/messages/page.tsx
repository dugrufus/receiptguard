import { t } from "@/rg/i18n/t";

export default function Page() {
  return (
    <main className="p-4">
      {/* [RG:BLOCK MSG.GLOBAL START] */}
      <h1>{t("messages.title")}</h1>
      <p>{t("messages.sla.hint")}</p>
      {/* [RG:BLOCK MSG.GLOBAL END] */}
    </main>
  );
}