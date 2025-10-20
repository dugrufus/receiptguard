'use client';
import { t } from '@/rg/copy';

export default function AggVariants(){
  return (
    <section className="space-y-2" aria-label={t('agg.variants.title')}>
      {/* [RG:BLOCK AGG.VARIANTS START] */}
      <h2 className="font-medium">{t('agg.variants.title')}</h2>
      <div className="flex gap-2">
        <button className="rounded px-3 py-2 border">Color</button>
        <button className="rounded px-3 py-2 border">Capacity</button>
      </div>
      {/* [RG:BLOCK AGG.VARIANTS END] */}
    </section>
  );
}