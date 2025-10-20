'use client';
import { t } from "@/rg/copy/t";

export default function AddPurchaseOrder() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('add.order.title')}</h1>
      {/* [RG:BLOCK ADD.ORDER START] */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <label className="block">
          <span className="block text-sm mb-1">Merchant</span>
          <input name="merchant" className="w-full rounded-lg border p-3" placeholder="e.g., Target" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Order #</span>
          <input name="orderNumber" className="w-full rounded-lg border p-3" placeholder="e.g., 123-4567890-0000000" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Date</span>
          <input type="date" name="date" className="w-full rounded-lg border p-3" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Total</span>
          <input type="number" step="0.01" name="total" className="w-full rounded-lg border p-3" placeholder="0.00" />
        </label>
        <button className="w-full rounded-xl p-3 shadow ring-1 ring-black/5">{t('add.cta.save')}</button>
      </form>
      {/* [RG:BLOCK ADD.ORDER END] */}
    </main>
  );
}