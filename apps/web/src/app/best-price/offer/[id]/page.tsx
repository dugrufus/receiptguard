'use client';
import { t } from '@/rg/copy';
import Link from 'next/link';

export default function BestPriceOfferPage() {
  const item = 999.99, shipping = 10.00, tax = 90.00, total = item + shipping + tax;
  return (
    <main className="p-4 space-y-4">
      {/* [RG:BLOCK AGG.OFFER START] */}
      <h1 className="text-xl font-semibold">{t('agg.offer.title')}</h1>
      <div className="rounded border p-3 space-y-1">
        <div className="flex justify-between"><span>{t('agg.offer.item')}</span><span>\</span></div>
        <div className="flex justify-between"><span>{t('agg.offer.shipping')}</span><span>\</span></div>
        <div className="flex justify-between"><span>{t('agg.offer.tax')}</span><span>\</span></div>
        <hr />
        <div className="flex justify-between font-semibold"><span>{t('agg.offer.total')}</span><span>\</span></div>
        <p className="text-xs opacity-70">{t('agg.privacy.note')}</p>
      </div>
      <div className="flex gap-2">
        <button className="rounded px-3 py-2 border">{t('agg.offer.goToStore')}</button>
        <button className="rounded px-3 py-2 border">{t('agg.offer.trackPrice')}</button>
      </div>
      <Link className="underline" href="/best-price/results">{t('agg.offer.back')}</Link>
      {/* [RG:BLOCK AGG.OFFER END] */}
    </main>
  );
}