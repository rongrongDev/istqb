# Printable One-Page Cheat Sheets

## Summary
A print-optimized "cheat sheet" view per chapter (and one for the glossary) that condenses key facts, traps, and definitions into a dense, black-on-white layout meant for printing or PDF export via the browser's print dialog. For last-minute revision away from a screen.

## Why it fits
The content already exists in three densities (learn, summaries, exam-insights traps in `ctaiv2-guide.jsx`); this is a fourth, print-shaped rendering of the same data files — no new authoring. The current dark-gradient UI is actively hostile to printing, so a dedicated print route is the clean solution.

## Scope
- New route (e.g. `ctaiv2-print`) with chapter picker and a `@media print` stylesheet: compact typography, no nav, page-break control per chapter
- Content selection: section key points from summaries + traps/key facts from the guide + chapter keywords with one-line definitions
- "Print / Save as PDF" button that calls `window.print()`

## Risks & unknowns
- Fitting a chapter on one page requires editorial judgment about what to drop; "one page" may realistically be "1–2 pages" for heavy chapters like 3 and 5.
- Print CSS is fiddly across browsers; target Chrome/Safari and accept minor differences.

## Open Questions
- [ ] Strictly one page per chapter (aggressively trimmed), or "as compact as possible" without a hard limit?
  > YOUR ANSWER:

## Status
OPEN
