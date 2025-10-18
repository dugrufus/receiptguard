// [RG:BLOCK DOCS.BEST_PRICE_SPEC START]
# Best-Price Aggregator Spec

## Inputs
- Photo flow: user snaps/chooses product photo → on-device preprocessing → server-side match; privacy: processed, not saved unless user adds to Purchases.
- Text/link flow: paste URL or enter keywords/SKU.

## Normalization
- Normalize to total price: item + tax (by state/ZIP) + shipping; show breakdown and 'Estimated tax by ZIP/state'.
- Confidence score 0–1; show 'Not this item?' link to refine.

## Tie-break
- If totals equal within .01, prefer fastest delivery; then merchant reputation; then return window length.

## Output
- Ranked offers with Total, Delivery ETA, Source, Confidence.
// [RG:BLOCK DOCS.BEST_PRICE_SPEC END]


// [RG:BLOCK DOCS.BEST_PRICE_SPEC START]
# Best-Price Aggregator Spec

## Inputs
- Text search (title, brand, UPC/SKU)
- Photo search (processed client/server; **not saved** unless user adds item)

## Normalization
- Base price + estimated tax (by state + ZIP) + shipping
- Display estimation basis under total

## Scoring & Tie-Break
- Rank by **best total**; on ties, prefer **fastest delivery**

## Confidence & Correction
- Confidence badge; “Not this item?” → open correction drawer

## Disclosures
- Taxes estimated; merchant checkout is source of truth
// [RG:BLOCK DOCS.BEST_PRICE_SPEC END]


// [RG:BLOCK DOCS.BEST_PRICE_SPEC START]
# Best-Price Aggregator Spec

## Inputs
- Text search (title, brand, UPC/SKU)
- Photo search (processed client/server; **not saved** unless user adds item)

## Normalization
- Base price + estimated tax (by state + ZIP) + shipping
- Display estimation basis under total

## Scoring & Tie-Break
- Rank by **best total**; on ties, prefer **fastest delivery**

## Confidence & Correction
- Confidence badge; “Not this item?” → open correction drawer

## Disclosures
- Taxes estimated; merchant checkout is source of truth
// [RG:BLOCK DOCS.BEST_PRICE_SPEC END]


// [RG:BLOCK DOCS.BEST_PRICE_SPEC START]
# Best-Price Aggregator Spec

## Inputs
- Text search (title, brand, UPC/SKU)
- Photo search (processed client/server; **not saved** unless user adds item)

## Normalization
- Base price + estimated tax (by state + ZIP) + shipping
- Display estimation basis under total

## Scoring & Tie-Break
- Rank by **best total**; on ties, prefer **fastest delivery**

## Confidence & Correction
- Confidence badge; “Not this item?” → open correction drawer

## Disclosures
- Taxes estimated; merchant checkout is source of truth
// [RG:BLOCK DOCS.BEST_PRICE_SPEC END]

[RG:BLOCK DOCS.BEST_PRICE START]
# Best Price — Definitions & Rules

- **Total** = itemPrice + shipping + *estimated* tax = `totalCents`.
- Filters: condition, pickupAvailable, deliveryDays; Sorts: total, deliveryDays.
- “Matched as” strip shows normalized model/sku.
- Tie-breaks: lower deliveryDays, then pickupAvailable=true.
- Privacy: Photo search opt-in; on-device pre-scan; no images stored without consent.
[RG:BLOCK DOCS.BEST_PRICE END]


