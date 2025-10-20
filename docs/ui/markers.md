## Markers Registry

- [RG:BLOCK PACKET.STEPS] — **Request 13** — Steps UI for packet: Confirm facts → Attachments → Generate (mock data URL) with Message Hub summary.

[RG:BLOCK MARKERS.REQ14 START]
- HOME.ADD_PURCHASE_FAB — Home FAB to open ""Add purchase"" flow.
- ADD.TILES — Root tiles for Scan / Order # / Paste in /add-purchase.
- ADD.SCAN — Image picker + OCR confidence.
- ADD.ORDER — Manual form inputs (merchant, order #, date, total).
- ADD.PASTE — Multi-line paste with parsing hint.
[RG:BLOCK MARKERS.REQ14 END]


[RG:BLOCK DOCS.MARKERS REQ-15 START]
- [RG:BLOCK HOME.SEARCH_BAR] — Home header search input (Request 15 — Best-Price Store Aggregator).
- [RG:BLOCK HOME.PHOTO_BUTTON] — Home header photo search button (Request 15).
- [RG:BLOCK AGG.TEXT] — Text search input + results container (best-price/page).
- [RG:BLOCK AGG.PHOTO] — Image picker + privacy note (best-price/photo/page).
- [RG:BLOCK AGG.RESULTS] — Results list with filters & sort (best-price/results/page).
- [RG:BLOCK AGG.OFFER] — Offer breakdown (item + shipping + est. tax = total) (best-price/offer/[id]/page).
- [RG:BLOCK AGG.FILTERS] — Filters (New/Used/Refurb/Pickup/Fast) component.
- [RG:BLOCK AGG.SORT] — Sort (Total, Item price, Fastest, Rating) component.
- [RG:BLOCK AGG.VARIANTS] — Variant chooser (Color, Capacity…) component.
- [RG:BLOCK AGG.MATCHED_AS] — Strip “Matched as … • Confidence … • Not this item?” component.
[RG:BLOCK DOCS.MARKERS REQ-15 END]
- [RG:BLOCK MSG.THREAD] — Request 16 — Per-case threaded conversation (header, list, composer)
- [RG:BLOCK MSG.GLOBAL] — Request 16 — Global thread list with search and unread badge
- [RG:BLOCK MSG.COMPOSE] — Request 16 — Composer with quick replies (Nudge/More info/Confirm)
