import { t } from "@/rg/i18n/t";

export default async function Page({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  return (
    <main className="p-4">
      {/* [RG:BLOCK MSG.THREAD START] */}
      <div>{t("messages.thread.title")} — Case {caseId}</div>
      {/* [RG:BLOCK MSG.THREAD END] */}
    </main>
  );
}