// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX START]
# Acceptance Matrix

| Code | Area | Criteria | Pass |
|---|---|---|---|
| HOME-01 | Dashboard | Loads price drops, returns, and recent activity within 1.5s on Wi-Fi | □ |
| CLAIM-01 | Claim Draft | User can generate a claim PDF/email for price drop | □ |
| RET-01 | Returns | Shows accurate return window and policy text | □ |
| ACT-01 | Activity | Timeline shows latest 20 events with absolute timestamps | □ |
| HIST-01 | History | Savings & refunds totals match claims resolved | □ |
| SET-SCOPE-01 | Settings | Email Autocatch connect/disconnect works | □ |
| BATCH-01 | Queue | Jobs enqueue with idempotency and process within SLA | □ |
| MATCH-01 | Best-Price | Photo + text flows produce normalized offers | □ |
| RECALL-01 | Recall | Recall cases create pre-filled claim with proof packet | □ |
| AGG-01 | Aggregator | Tie-break prefers fastest delivery on total ties | □ |
| MSG-01 | Message Hub | Per-case thread with SLA hints and quick replies | □ |
| A11Y-01 | Accessibility | 44pt targets, focus rings, 4.5:1 contrast | □ |
// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX END]


// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX START]
# Acceptance Matrix

| Code           | Area        | Criteria (Pass = true) |
|----------------|-------------|-------------------------|
| HOME-01        | Dashboard   | Lists Price Drops, Returns, Activity with empty states |
| CLAIM-01       | Claims      | Generate PDF/email for price adjustment with correct totals |
| RET-01         | Returns     | Shows deadline with weekday and local time |
| ACT-01         | Activity    | Timeline groups by day and status |
| HIST-01        | History     | Savings & Refunds totals localized |
| SET-SCOPE-01   | Settings    | Email Autocatch connect, pause, revoke |
| BATCH-01       | Queue       | Jobs enqueued with idempotency keys |
| MATCH-01       | Price Match | Tie-break rule applied correctly |
| RECALL-01      | Recall      | Detects vendor recall notification |
| AGG-01         | Aggregator  | Normalization shows est. tax basis |
| MSG-01         | MessageHub  | SLA hint and snippets visible |
| A11Y-01        | A11y        | 44pt targets, ≥4.5:1 contrast, focus ring |
// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX END]


// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX START]
# Acceptance Matrix

| Code           | Area        | Criteria (Pass = true) |
|----------------|-------------|-------------------------|
| HOME-01        | Dashboard   | Lists Price Drops, Returns, Activity with empty states |
| CLAIM-01       | Claims      | Generate PDF/email for price adjustment with correct totals |
| RET-01         | Returns     | Shows deadline with weekday and local time |
| ACT-01         | Activity    | Timeline groups by day and status |
| HIST-01        | History     | Savings & Refunds totals localized |
| SET-SCOPE-01   | Settings    | Email Autocatch connect, pause, revoke |
| BATCH-01       | Queue       | Jobs enqueued with idempotency keys |
| MATCH-01       | Price Match | Tie-break rule applied correctly |
| RECALL-01      | Recall      | Detects vendor recall notification |
| AGG-01         | Aggregator  | Normalization shows est. tax basis |
| MSG-01         | MessageHub  | SLA hint and snippets visible |
| A11Y-01        | A11y        | 44pt targets, ≥4.5:1 contrast, focus ring |
// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX END]


// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX START]
# Acceptance Matrix

| Code           | Area        | Criteria (Pass = true) |
|----------------|-------------|-------------------------|
| HOME-01        | Dashboard   | Lists Price Drops, Returns, Activity with empty states |
| CLAIM-01       | Claims      | Generate PDF/email for price adjustment with correct totals |
| RET-01         | Returns     | Shows deadline with weekday and local time |
| ACT-01         | Activity    | Timeline groups by day and status |
| HIST-01        | History     | Savings & Refunds totals localized |
| SET-SCOPE-01   | Settings    | Email Autocatch connect, pause, revoke |
| BATCH-01       | Queue       | Jobs enqueued with idempotency keys |
| MATCH-01       | Price Match | Tie-break rule applied correctly |
| RECALL-01      | Recall      | Detects vendor recall notification |
| AGG-01         | Aggregator  | Normalization shows est. tax basis |
| MSG-01         | MessageHub  | SLA hint and snippets visible |
| A11Y-01        | A11y        | 44pt targets, ≥4.5:1 contrast, focus ring |
// [RG:BLOCK DOCS.ACCEPTANCE_MATRIX END]

[RG:BLOCK DOCS.ACCEPTANCE START]
# Acceptance Matrix

- HOME- ✓ cards render, timers tick, a11y landmarks
- CLAIM- ✓ request flow, PDF stub, optimistic submit
- RET- ✓ windows list, policy links, filterable
- ACT- ✓ event feed, filter chips, preserve scroll
- HIST- ✓ refunds & savings, filter ranges
- SET- ✓ Autocatch controls, notifications 9:00 AM
- BATCH- ✓ background jobs enqueued
- MATCH- ✓ best-price matching surfaces
- RECALL- ✓ notices appear with severity
- AGG- ✓ win feed aggregates
- MSG- ✓ message hub with threads
- A11Y- ✓ keyboard paths, focus traps, Esc behavior
[RG:BLOCK DOCS.ACCEPTANCE END]


