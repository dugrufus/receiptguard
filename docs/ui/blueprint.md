// [RG:BLOCK DOCS.BLUEPRINT START]
# UI Blueprint — Information Architecture & UX Baselines

## IA & Page Map
- Home (Dashboard)
- Activity (All updates)
- Returns
- Claims
- History (Savings & Refunds)
- Settings

## Navigation & State Model
- Bottom nav: Home • Activity • History • Settings
- State persists via URL + local cache; optimistic UI on network ops.

## A11y Baselines
- 44px targets, 4.5:1 contrast, visible focus
- Landmarks: `main`, `nav`; Esc closes safe overlays; focus trap in drawers.

## Acceptance Matrix Overview
- Each screen has: layout ✓, data ✓ (mocks ok), a11y ✓, error states ✓.
[RG:BLOCK DOCS.BLUEPRINT END]





// [RG:BLOCK DOCS.BLUEPRINT START]
# Information Architecture & Navigation
- **Pages:** Home, Activity, Returns, Claims, Messages, History, Settings
- **Bottom Nav:** Home • Activity • History • Settings
- **State Model:** Derived from contracts: Purchase, Offer, Event, Message, RecallNotice
- **A11y Baselines:** 44px targets, 4.5:1 contrast, visible focus, focus trap in drawers, Esc closes when safe; regions: <main>, <nav>
## Acceptance Matrix Overview
See acceptance-matrix.md for sectioned checklists.
[RG:BLOCK DOCS.BLUEPRINT END]





// [RG:BLOCK DOCS.BLUEPRINT START]
# Information Architecture & Navigation
- **Pages:** Home, Activity, Returns, Claims, Messages, History, Settings
- **Bottom Nav:** Home • Activity • History • Settings
- **State Model:** Derived from contracts: Purchase, Offer, Event, Message, RecallNotice
- **A11y Baselines:** 44px targets, 4.5:1 contrast, visible focus, focus trap in drawers, Esc closes when safe; regions: <main>, <nav>
## Acceptance Matrix Overview
See acceptance-matrix.md for sectioned checklists.
[RG:BLOCK DOCS.BLUEPRINT END]





// [RG:BLOCK DOCS.BLUEPRINT START]
# Information Architecture & Navigation
- **Pages:** Home, Activity, Returns, Claims, Messages, History, Settings
- **Bottom Nav:** Home • Activity • History • Settings
- **State Model:** Derived from contracts: Purchase, Offer, Event, Message, RecallNotice
- **A11y Baselines:** 44px targets, 4.5:1 contrast, visible focus, focus trap in drawers, Esc closes when safe; regions: <main>, <nav>
## Acceptance Matrix Overview
See acceptance-matrix.md for sectioned checklists.
[RG:BLOCK DOCS.BLUEPRINT END]

[RG:BLOCK DOCS.BLUEPRINT.SCORING START]
## Scoring Heuristics (Next Step)
Define factor weights for refund likelihood and effort (e.g., policy match, time remaining, receipt quality, item category).
Capture heuristic in mocks and keep this section as the living spec.
[RG:BLOCK DOCS.BLUEPRINT.SCORING END]
## Refund Likelihood & Effort Score - Heuristic

Factors:
- Policy match
- Receipt quality
- Time remaining

Score bands:
- High: Most factors align strongly
- Medium: Mixed indicators
- Low: Most indicators weak or missing

Approximate minutes are displayed on the pill.
