'use client';
import { t } from '@/rg/copy';

export default function AggSort(){
  return (
    <label className="ml-auto flex items-center gap-2">
      {/* [RG:BLOCK AGG.SORT START] */}
      <span className="text-sm opacity-80">Sort</span>
      <select name="sort" className="border rounded px-2 py-1" aria-label="Sort results">
        <option value="total">{t('agg.sort.total')}</option>
        <option value="item">{t('agg.sort.item')}</option>
        <option value="fastest">{t('agg.sort.fastest')}</option>
        <option value="rating">{t('agg.sort.rating')}</option>
      </select>
      {/* [RG:BLOCK AGG.SORT END] */}
    </label>
  );
}