'use client';

import React from 'react';
import { t } from '@/rg/copy/t';

export default function Page() {
  return (
    <main className="p-4 pb-24 max-w-screen-sm mx-auto space-y-6" role="main" aria-labelledby="batch-title">
      {/* [RG:BLOCK BATCH.HEADER START] */}
      <header className="flex items-center justify-between gap-3">
        <h1 id="batch-title" className="text-2xl font-semibold tracking-tight">{t('batch.title')}</h1>
        <div className="flex items-center gap-2">
          <button type="button" className="px-3 py-2 rounded-2xl border" aria-label={t('batch.approveAll')}>
            {t('batch.approveAll')}
          </button>
          <button type="button" className="px-3 py-2 rounded-2xl border" aria-label={t('batch.sendAll')}>
            {t('batch.sendAll')}
          </button>
        </div>
      </header>
      {/* [RG:BLOCK BATCH.HEADER END] */}

      {/* [RG:BLOCK BATCH.SECTIONS START] */}
      <section aria-labelledby="sec-price-drops" className="space-y-2">
        <h2 id="sec-price-drops" className="text-lg font-medium">{t('batch.sections.priceDrops')}</h2>
        {/* TODO: Render list of price-drop items from Request 03 sources */}
        <div role="region" aria-live="polite" className="text-sm opacity-80">No items yet.</div>
      </section>

      <section aria-labelledby="sec-late-deliveries" className="space-y-2">
        <h2 id="sec-late-deliveries" className="text-lg font-medium">{t('batch.sections.lateDeliveries')}</h2>
        {/* TODO: Render list of late-delivery items */}
        <div role="region" aria-live="polite" className="text-sm opacity-80">No items yet.</div>
      </section>

      <section aria-labelledby="sec-returns-soon" className="space-y-2">
        <h2 id="sec-returns-soon" className="text-lg font-medium">{t('batch.sections.returnsSoon')}</h2>
        {/* TODO: Render list of returns due in next 7 days from Request 04 sources */}
        <div role="region" aria-live="polite" className="text-sm opacity-80">No items yet.</div>
      </section>
      {/* [RG:BLOCK BATCH.SECTIONS END] */}

      {/* [RG:BLOCK BATCH.FOOTER START] */}
      <footer className="pt-6 text-xs opacity-70" aria-live="polite">
        {t('batch.throttle.note')}
      </footer>
      {/* [RG:BLOCK BATCH.FOOTER END] */}
    </main>
  );
}