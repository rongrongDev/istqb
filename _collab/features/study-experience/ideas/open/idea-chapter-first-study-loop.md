# Chapter-First Study Loop

## Summary

Offer a second study path, chapter by chapter: Learn ch. 1 → ch. 1 summary → ch. 1 traps → ch. 1 questions, then on to ch. 2, with a chapters × steps checklist on the track page. Today's path is step-first: read all chapters, then summaries of all, then insights for all, then quiz all.

## Why it fits

`TrackPage` shows five static step cards (“FOLLOW THE STEPS IN ORDER”), and the breadcrumb “Next” link moves step to step. All the data is already chapter-scoped (every page has a chapter picker, questions carry `chapter`), so a chapter loop is a new route through existing content.

## Scope

- Track page: a grid of chapters (rows) × steps (columns), each cell linking to that chapter in that step, with completion ticks
- “Next” in the breadcrumb follows the chosen path mode
- Chapter quiz = practice-mode questions filtered to that chapter (overlaps with the earlier Chapter-Filtered Practice idea; reuse it if built)

## Risks & unknowns

- Needs deep links into a chapter on each step page
- Completion for Summary/Insights steps isn't tracked today; this needs a definition (e.g. opened)

## Open Questions

- [ ] Replace the step-first path, or offer both with a per-track toggle?
                                  > YOUR ANSWER:

## Status

OPEN
