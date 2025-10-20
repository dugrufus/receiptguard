'use client';
import Link from "next/link";
import { t } from "@/rg/copy/t";

export default function AddPurchase() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('add.title')}</h1>
      {/* [RG:BLOCK ADD.TILES START] */}
      <div className="grid grid-cols-1 gap-3">
        <Link href="/add-purchase/scan" className="block rounded-2xl p-4 shadow ring-1 ring-black/5">
          <div className="text-base font-medium">{t('add.scan.title')}</div>
        </Link>
        <Link href="/add-purchase/order" className="block rounded-2xl p-4 shadow ring-1 ring-black/5">
          <div className="text-base font-medium">{t('add.order.title')}</div>
        </Link>
        <Link href="/add-purchase/paste" className="block rounded-2xl p-4 shadow ring-1 ring-black/5">
          <div className="text-base font-medium">{t('add.paste.title')}</div>
        </Link>
      </div>
      {/* [RG:BLOCK ADD.TILES END] */}
    </main>
  );
}