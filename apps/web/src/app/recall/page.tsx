/* [RG:BLOCK RECALL.INDEX START]
Purpose: /recall index — lists active recalls & safety notices following Rev C tokens.
Markers: RECALL.INDEX — used by QA and marker registry.
Accessibility: list with role="list", verb-first buttons.
Preload hint: data-prefetch="purchase-details" on NBA-like entries to signal router prefetch.
[RG:BLOCK RECALL.INDEX END] */

import React from "react"
import Link from "next/link"

export default function RecallIndexPage() {
  return (
    <main className="min-h-screen bg-white text-default">
      <header className="sticky top-0 h-14 flex items-center px-4 border-b" style={{borderColor: '#E5E7EB'}}>
        <h1 className="text-xl font-semibold">Safety notices</h1>
      </header>

      <section className="p-4 space-y-4">
        <div className="rounded-2xl p-4 shadow-sm border" role="region" aria-labelledby="recall-summary">
          <h2 id="recall-summary" className="text-base font-semibold">Recall notices</h2>
          <p className="text-sm text-muted">We show safety notices for items in your purchases. Tap an item to view remedies.</p>
        </div>

        <ul role="list" className="space-y-3" aria-live="polite">
          <li className="rounded-2xl bg-white border shadow-sm p-3 flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">AirPods Pro (2nd gen) — Battery hazard</p>
                <p className="text-xs text-muted">Affected serial numbers: XXXX • Remedy: Free repair or replacement</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <Link href="/recall/airpods-pro-2" prefetch={true} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold" aria-label="View recall details for AirPods Pro">
                View
              </Link>
            </div>
          </li>
        </ul>

        <div className="rounded-2xl p-4 border bg-[color:var(--surface-subtle)]">
          <p className="text-sm text-muted">No active recalls for your purchases.</p>
          <Link href="/purchases" className="text-sm font-semibold mt-2 inline-block">View all purchases</Link>
        </div>
      </section>
    </main>
  )
}