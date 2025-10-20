'use client';
import { t } from '@/rg/copy';
import { formatPercentInt } from '@/rg/utils/format';

export default function AggMatchedAs({ id, confidence }:{ id:string, confidence:number }) {
  const percent = formatPercentInt(confidence);
  const strip = t('agg.matchedAs.strip').replace('{id}', id).replace('{percent}', percent);
  return (
    <div className="rounded border p-2 text-sm" role="status" aria-live="polite">
      {/* [RG:BLOCK AGG.MATCHED_AS START] */}
      {strip}
      {/* [RG:BLOCK AGG.MATCHED_AS END] */}
    </div>
  );
}