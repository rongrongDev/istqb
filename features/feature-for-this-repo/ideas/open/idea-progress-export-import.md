# Progress Export / Import

## Summary
Let the user back up their study progress to a JSON file (or copyable string) and restore it on another device or browser. Protects weeks of studied-section tracking and exam history from a cleared cache, and enables studying on both laptop and phone.

## Why it fits
All progress lives in a single localStorage key (`ctai-v2-progress` in `src/lib/progress.js`), which the code itself notes silently disappears in private browsing. As more features write to progress (flashcards, mistake decks, streaks), losing it gets more painful — a cheap export/import now future-proofs everything.

## Scope
- "Export progress" button that downloads a JSON file (or copies a compact string to clipboard)
- "Import progress" that validates the payload and merges or replaces
- A small settings/progress corner on the home page to host both, plus a "reset all progress" with confirm
- Versioned payload format so future progress-schema changes stay importable

## Risks & unknowns
- Merge vs replace on import: merge is friendlier but ambiguous for "best exam score" style fields (take max?).
- No backend exists and none is planned — file/clipboard transfer is the honest scope, not sync.

## Open Questions
- [ ] On import, replace existing progress wholesale, or merge (union of studied sections, max of scores)?
  > YOUR ANSWER:

## Status
OPEN
