'use client';
import { t } from '@/rg/copy';

export default function AggFilters(){
  return (
    <fieldset className="flex gap-3 items-center" aria-label="Filters">
      {/* [RG:BLOCK AGG.FILTERS START] */}
      <legend className="sr-only">Filters</legend>
      <label><input type="checkbox" name="new" /> {t('agg.filters.new')}</label>
      <label><input type="checkbox" name="used" /> {t('agg.filters.used')}</label>
      <label><input type="checkbox" name="refurb" /> {t('agg.filters.refurb')}</label>
      <label><input type="checkbox" name="pickup" /> {t('agg.filters.pickup')}</label>
      <label><input type="checkbox" name="fast" /> {t('agg.filters.fast')}</label>
      {/* [RG:BLOCK AGG.FILTERS END] */}
    </fieldset>
  );
}