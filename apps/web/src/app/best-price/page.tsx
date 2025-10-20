'use client';
import { t } from '@/rg/copy';

export default function BestPricePage() {
  return (
    <main className="p-4 space-y-4">
      {/* [RG:BLOCK AGG.TEXT START] */}
      <h1 className="text-xl font-semibold">{t('agg.title')}</h1>
      <form action="/best-price/results" method="get" className="flex gap-2" aria-label="Text search">
        <input
          type="text"
          name="q"
          placeholder={t('agg.search.placeholder')}
          aria-label={t('agg.search.placeholder')}
          className="flex-1 border rounded px-3 py-2"
        />
        <button type="submit" className="rounded px-3 py-2 border" aria-label="Search">
          Search
        </button>
      </form>
      <section role="region" aria-label="Search results" className="min-h-20 rounded border p-3">
        {/* results will stream here */}
      </section>
      {/* [RG:BLOCK AGG.TEXT END] */}
    </main>
  );
}