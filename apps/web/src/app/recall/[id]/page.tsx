import React from 'react';
import { t } from '@/rg/copy';

export default function Page() {
  return (
    <main className="p-4 space-y-4">
      {/* [RG:BLOCK RECALL.DETAIL START] */}
      <h1 className="text-xl font-semibold">{t('recall.title')}</h1>
      <section className="space-y-3">
        <div className="rounded-xl border p-4">
          <div className="text-sm font-medium mb-1">{t('recall.hazard')}</div>
          <div className="text-sm opacity-80">—</div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="text-sm font-medium mb-1">{t('recall.remedy')}</div>
          <div className="text-sm opacity-80">—</div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="text-sm font-medium mb-1">{t('recall.affected')}</div>
          <div className="text-sm opacity-80">—</div>
        </div>
        <button type="button" className="rounded-2xl border px-4 h-10">
          {t(''recall.cta'')}
        </button>
      </section>
      {/* [RG:BLOCK RECALL.DETAIL END] */}
    </main>
  );
}