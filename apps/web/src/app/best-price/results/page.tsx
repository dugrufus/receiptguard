'use client';
import { t } from '@/rg/copy';
import AggFilters from '@/components/rg/AggFilters';
import AggSort from '@/components/rg/AggSort';
import AggMatchedAs from '@/components/rg/AggMatchedAs';

export default function BestPriceResultsPage() {
  return (
    <main className="p-4 space-y-4">
      {/* [RG:BLOCK AGG.RESULTS START] */}
      <h1 className="text-xl font-semibold">{t('agg.results.title')}</h1>
      <div className="flex items-center gap-3">
        <AggFilters />
        <AggSort />
      </div>
      <AggMatchedAs id="Model/GTIN" confidence={0.82} />
      <ul role="list" className="divide-y rounded border">
        {/* offers will render here */}
        <li className="p-3 opacity-60">{t('agg.results.empty')}</li>
      </ul>
      {/* [RG:BLOCK AGG.RESULTS END] */}
    </main>
  );
}