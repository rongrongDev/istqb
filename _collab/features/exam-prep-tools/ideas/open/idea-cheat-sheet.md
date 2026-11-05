# One-Page Revision Sheet per Track

## Summary

A printable "night before" sheet per track: the quick-reference lines, definition swaps, K3/K4 objectives, exam format and the most-missed insights, laid out to fit one or two A4 pages. Learners print it or save it as a PDF.

## Why it fits

The Summary and Insights wrappers already hold quick-reference lines, swaps, K-level notes and exam format as props, and chapters carry `examInsights` tagged TRAP/KEY. The sheet collects what is already written into a print layout.

## Scope

- Sixth view per track (or a "Revision sheet" button on Insights) with `@media print` styles
- Pull from wrapper props plus TRAP-tagged insights
- Works in light theme for print regardless of the current theme

## Risks & unknowns

- Per-track quick-reference text lives in page wrappers, not data; it may need moving into `src/data/` to reuse
- Fitting the long tracks (CT-SEC, CTAL-TAE) on 2 pages

## Open Questions

- [ ] Hand-curated content per track, or assembled automatically from existing props and insights?
                                  > YOUR ANSWER:
- [ ] One page strictly, or up to two?
                                  > YOUR ANSWER:

## Status

OPEN
