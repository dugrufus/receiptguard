# REQUEST 10 — Smart Return Combinator

## Purpose
Combine returns by merchant; warn on near deadlines; generate single label/pickup.
Branch \eat/req-10-return-combinator\.

## Preconditions & Dependencies
Request 04 implemented (return flow present).

## Files & Artifacts to Create/Modify
- **Home chip marker**: \[RG:BLOCK HOME.RETURNS_COMBINE_CHIP] — “Combine returns”.
- \pps\web\src\app\return\combine\[merchant]\page.tsx\ — \[RG:BLOCK RET.COMBINE] — selector of items; combined weight/ETA; chosen label/pickup option; near-deadline warnings.

## Copy keys to add
- \combine.title\, \combine.selectItems\, \combine.labelOption\,
  \combine.pickupOption\, \combine.warning.deadline\.

## Acceptance Criteria
Chip plus route marker present; commit exists.

## Verification Steps
Assert chip injection and route marker; copy keys exist; registry updated.

## Unknowns
None.