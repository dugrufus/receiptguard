'use client';
import { t } from "@/rg/copy/t";

export default function AddPurchasePaste() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('add.paste.title')}</h1>
      {/* [RG:BLOCK ADD.PASTE START] */}
      <div className="space-y-3">
        <textarea className="w-full min-h-[200px] rounded-lg border p-3" placeholder={t('add.paste.hint')}></textarea>
        <button className="w-full rounded-xl p-3 shadow ring-1 ring-black/5">{t('add.cta.save')}</button>
      </div>
      {/* [RG:BLOCK ADD.PASTE END] */}
    </main>
  );
}