"use client";

import React, { useMemo, useState, useEffect } from "react";
import { validatePercent, applyPolicyCaps } from "../../../../rg/utils/validation";

// NOTE: Using project i18n: all strings referenced via t('claim.*')
declare const t: (key: string) => string;

// Mock data for now (fed from mocks at this stage)
type PurchaseItem = { id: string; title: string; price: number; thumbnail?: string };
type Purchase = { id: string; merchant: string; orderDate: string; items: PurchaseItem[] };

const mockPurchase: Purchase = {
  id: "demo-1",
  merchant: "Demo Merchant",
  orderDate: "2025-06-12",
  items: [
    { id: "i1", title: "Widget A", price: 39.99, thumbnail: "" },
    { id: "i2", title: "Widget B", price: 24.50, thumbnail: "" },
    { id: "i3", title: "Widget C", price: 12.00, thumbnail: "" },
  ],
};

function formatCurrency(n: number) {
  try { return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n); }
  catch { return `$${n.toFixed(2)}`; }
}

export default function Page() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [percent, setPercent] = useState<number>(10);
  const [queued, setQueued] = useState<boolean>(false);
  const [undoWindow, setUndoWindow] = useState<number>(0);

  const chosenItems = useMemo(
    () => mockPurchase.items.filter(i => selected[i.id]),
    [selected]
  );
  const subtotal = useMemo(
    () => chosenItems.reduce((sum, i) => sum + i.price, 0),
    [chosenItems]
  );

  const caps = { maxPercent: 50, maxAmountCents: 5000 }; // demo policy caps
  const { percent: effectivePercent, cappedAmountCents } = useMemo(
    () => applyPolicyCaps(percent, subtotal, caps),
    [percent, subtotal]
  );
  const estimate = cappedAmountCents / 100;

  function toggleItem(id: string) { setSelected(prev => ({ ...prev, [id]: !prev[id] })); }
  function handlePercentChange(v: string) {
    const n = Number(v);
    try { setPercent(validatePercent(n)); } catch {}
  }
  function sendClaim() { setQueued(true); setUndoWindow(10); }
  function undo() { setQueued(false); setUndoWindow(0); }

  useEffect(() => {
    if (!queued) return;
    if (undoWindow <= 0) { setQueued(false); return; } // finalize (enqueue) here
    const t = setTimeout(() => setUndoWindow(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [queued, undoWindow]);

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Stepper with aria-live for progress updates */}
      <div className="w-full border-b bg-white px-4 py-3" aria-live="polite">
        <div className="text-sm">
          {`Step ${step} of 4`} — {[
            t("claim.items.title"),
            t("claim.amount.title"),
            t("claim.draft.title"),
            t("claim.send.cta"),
          ][step - 1]}
        </div>
        <div className="mt-2 h-2 w-full rounded bg-gray-100">
          <div className="h-2 rounded bg-black" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
      </div>

      <main className="flex-1 space-y-6 p-4">
        {/* [RG:BLOCK CLAIM.ITEMS JSX START] */}
        {step === 1 && (
          <section>
            <h1 className="mb-3 text-xl font-semibold">{t("claim.items.title")}</h1>
            <ul className="space-y-3">
              {mockPurchase.items.map(item => (
                <li key={item.id} className="flex items-center gap-3 rounded-2xl border p-3">
                  <div className="h-12 w-12 rounded bg-gray-100" aria-hidden />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-600">{formatCurrency(item.price)}</div>
                  </div>
                  <input type="checkbox" className="h-5 w-5" checked={!!selected[item.id]} onChange={() => toggleItem(item.id)} aria-label={`Select ${item.title}`} />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <button className="rounded-2xl bg-black px-4 py-2 text-white disabled:opacity-50" onClick={() => setStep(2)} disabled={chosenItems.length === 0}>
                {t("claim.amount.title")}
              </button>
            </div>
          </section>
        )}
        {/* [RG:BLOCK CLAIM.ITEMS JSX END] */}

        {/* [RG:BLOCK CLAIM.AMOUNT JSX START] */}
        {step === 2 && (
          <section>
            <h2 className="mb-3 text-xl font-semibold">{t("claim.amount.title")}</h2>
            <label className="mb-2 block text-sm">{t("claim.amount.inputLabel")}</label>
            <div className="flex items-center gap-2">
              <input type="number" className="w-24 rounded-2xl border px-3 py-2" min={1} max={100} value={percent} onChange={(e) => handlePercentChange(e.target.value)} />
              <span>%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t("claim.amount.policyCapHint")}</p>
            <div className="mt-4 flex justify-between">
              <button className="rounded-2xl border px-4 py-2" onClick={() => setStep(1)}>{t("claim.items.title")}</button>
              <button className="rounded-2xl bg-black px-4 py-2 text-white" onClick={() => setStep(3)}>{t("claim.draft.title")}</button>
            </div>
          </section>
        )}
        {/* [RG:BLOCK CLAIM.AMOUNT JSX END] */}

        {/* [RG:BLOCK CLAIM.DRAFT JSX START] */}
        {step === 3 && (
          <section>
            <h2 className="mb-3 text-xl font-semibold">{t("claim.draft.title")}</h2>
            <div className="mb-3 flex gap-2">
              <button className="rounded-2xl border px-3 py-1">{t("claim.draft.tabs.email")}</button>
              <button className="rounded-2xl border px-3 py-1">{t("claim.draft.tabs.pdf")}</button>
            </div>
            <div className="rounded-2xl border p-3 text-sm">
              <p><strong>Merchant:</strong> {mockPurchase.merchant}</p>
              <p><strong>Order date:</strong> {mockPurchase.orderDate}</p>
              <p><strong>Items:</strong> {chosenItems.map(i => i.title).join(", ")}</p>
              <p><strong>Requested:</strong> {effectivePercent}%</p>
              <p><strong>Estimated credit:</strong> {formatCurrency(estimate)}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="rounded-2xl border px-4 py-2" onClick={() => setStep(2)}>{t("claim.amount.title")}</button>
              <button className="rounded-2xl bg-black px-4 py-2 text-white" onClick={() => setStep(4)}>{t("claim.send.cta")}</button>
            </div>
          </section>
        )}
        {/* [RG:BLOCK CLAIM.DRAFT JSX END] */}

        {/* [RG:BLOCK CLAIM.SEND JSX START] */}
        {step === 4 && (
          <section>
            <h2 className="mb-3 text-xl font-semibold">{t("claim.send.cta")}</h2>
            <button className="rounded-2xl bg-black px-4 py-2 text-white" onClick={sendClaim}>{t("claim.send.cta")}</button>
            {queued && (
              <div role="status" aria-live="polite" className="mt-3 rounded-2xl border px-3 py-2">
                {t("claim.toast.queued")} ({undoWindow})
                <button className="ml-2 underline" onClick={undo}>{t("claim.toast.undo")}</button>
              </div>
            )}
          </section>
        )}
        {/* [RG:BLOCK CLAIM.SEND JSX END] */}
      </main>

      {/* Sticky summary */}
      <div className="sticky bottom-0 w-full border-t bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm">{`Estimated credit ${formatCurrency(estimate)}`}</div>
          <div className="flex gap-2">
            {step > 1 && (<button className="rounded-2xl border px-3 py-2" onClick={() => setStep((s) => (s > 1 ? ((s - 1) as any) : s))}>Back</button>)}
            {step < 4 && (<button className="rounded-2xl bg-black px-4 py-2 text-white" onClick={() => setStep((s) => ((s + 1) as any))}>Next</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}