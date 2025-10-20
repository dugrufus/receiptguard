'use client';
import { useState } from "react";
import { t } from "@/rg/copy/t";

export default function AddPurchaseScan() {
  const [confidence, setConfidence] = useState<number | null>(null);
  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('add.scan.title')}</h1>
      {/* [RG:BLOCK ADD.SCAN START] */}
      <div className="space-y-4">
        <input
          type="file"
          accept="image/*"
          aria-label={t('add.scan.title')}
          className="block w-full rounded-lg border p-3"
          onChange={() => setConfidence(0)}
        />
        <div className="text-sm opacity-80">
          {t('add.ocr.confidence')}: {confidence === null ? '—' : Math.round(confidence) + '%'}
        </div>
      </div>
      {/* [RG:BLOCK ADD.SCAN END] */}
    </main>
  );
}