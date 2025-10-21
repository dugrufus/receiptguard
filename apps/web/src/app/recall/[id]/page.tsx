/* [RG:BLOCK RECALL.DETAIL START]
Purpose: recall detail page. Shows hazard, affected models, remedy, CTA "Start remedy"
Markers: RECALL.DETAIL — QA will assert presence and copy keys.
Accessibility: role="main", landmark, SR-friendly text, verb-first CTAs.
[RG:BLOCK RECALL.DETAIL END] */

import React from "react"
import Link from "next/link"

export default function RecallDetailPage({ params }: { params: { id: string }}) {
  const id = params?.id ?? "unknown"
  return (
    <main className="min-h-screen bg-white text-default" role="main" aria-labelledby="recall-title">
      <header className="sticky top-0 h-14 flex items-center px-4 border-b" style={{borderColor: '#E5E7EB'}}>
        <h1 id="recall-title" className="text-lg font-semibold">Recall detail</h1>
      </header>

      <section className="p-4 space-y-4">
        <article className="rounded-2xl p-4 shadow-sm border">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold">Hazard: Battery overheating</h2>
              <p className="text-sm text-muted">Affected models: AirPods Pro (2nd gen)</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor:'#FEF3C7', color:'#D97706'}}>Safety</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold">Remedy</h3>
            <p className="text-sm text-muted">Free repair or replacement. Contact the merchant or request assistance from ReceiptGuard.</p>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 h-12 rounded-lg text-white font-semibold" style={{backgroundColor:'#0B5FFF'}}>Start remedy</button>
            <Link href="/support" className="h-12 inline-flex items-center px-4 rounded-lg border font-semibold">Contact support</Link>
          </div>
        </article>

        <div className="rounded-2xl p-4 border bg-[color:var(--surface-subtle)]">
          <p className="text-sm text-muted">View merchant instructions for returns and remedies. Use "Start remedy" to create a tracked claim.</p>
        </div>
      </section>
    </main>
  )
}