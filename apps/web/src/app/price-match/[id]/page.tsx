'use client';

import React, { useState } from 'react';

// Stub t() to avoid inline strings for now.
const t = (k: string) => k;

type Row = { label: string; paid: string; competitor: string };

export default function PriceMatchPage() {
  const [tab, setTab] = useState<"concise" | "detailed">("concise");

  const rows: Row[] = [
    { label: "item",       paid: "$0.00", competitor: "$0.00" },
    { label: "shipping",   paid: "$0.00", competitor: "$0.00" },
    { label: "est. tax",   paid: "$0.00", competitor: "$0.00" },
    { label: "total",      paid: "$0.00", competitor: "$0.00" },
  ];

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-xl font-semibold">{t("pm.title")}</h1>

      {/* [RG:BLOCK PM.EVIDENCE START] */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-medium mb-3">{t("pm.evidence.title")}</h2>
        <div role="table" aria-label="evidence" className="w-full text-sm">
          <div role="row" className="grid grid-cols-3 font-semibold border-b py-2">
            <div> </div>
            <div>Paid</div>
            <div>Competitor</div>
          </div>
          {rows.map((r) => (
            <div key={r.label} role="row" className="grid grid-cols-3 py-2 border-b">
              <div className="capitalize">{r.label}</div>
              <div>{r.paid}</div>
              <div>{r.competitor}</div>
            </div>
          ))}
        </div>
      </section>
      {/* [RG:BLOCK PM.EVIDENCE END] */}

      {/* [RG:BLOCK PM.RULES START] */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-medium mb-3">{t("pm.rules.title")}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <input type="checkbox" aria-label="Same model" className="mt-1" />
            <span>Same model / SKU</span>
          </li>
          <li className="flex items-start gap-2">
            <input type="checkbox" aria-label="New condition" className="mt-1" />
            <span>New / in-stock</span>
          </li>
          <li className="flex items-start gap-2">
            <input type="checkbox" aria-label="Authorized seller" className="mt-1" />
            <span>Authorized seller</span>
          </li>
        </ul>
        <p className="mt-3 text-sm" role="status" aria-live="polite">
          {t("pm.rules.ineligible").replace("{reason}","")}
        </p>
      </section>
      {/* [RG:BLOCK PM.RULES END] */}

      {/* [RG:BLOCK PM.DRAFT START] */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-medium mb-3">{t("pm.draft.title")}</h2>
        <div className="flex gap-2 mb-3" role="tablist" aria-label="Draft tabs">
          <button role="tab" aria-selected={tab==="concise"} className="px-3 py-2 rounded-xl border" onClick={()=>setTab("concise")}>
            {t("pm.draft.concise")}
          </button>
          <button role="tab" aria-selected={tab==="detailed"} className="px-3 py-2 rounded-xl border" onClick={()=>setTab("detailed")}>
            {t("pm.draft.detailed")}
          </button>
        </div>
        <textarea className="w-full min-h-[160px] rounded-xl border p-3" aria-label="Draft body"
          defaultValue={tab==="concise"
            ? "Hello, I found a lower price at ..."
            : "Hello, I found a lower price at ... including details: ..."}>
        </textarea>
      </section>
      {/* [RG:BLOCK PM.DRAFT END] */}
    </main>
  );
}