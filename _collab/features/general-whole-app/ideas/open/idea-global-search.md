# Global Search Across All Tracks

## Summary

A search box (plus a `/` or Ctrl/Cmd-K shortcut) on the hub and in the breadcrumb bar that finds learn sections, glossary terms, exam traps and quiz questions across all six syllabi, and jumps straight to the result. Handy for “where was boundary value analysis explained?” or for checking a term while revising.

## Why it fits

All content is static JS data already in the bundle (`src/data/<track>/`), with stable ids (section `4.2.3`, glossary terms, quiz `id`/`lo`). Each glossary page already has its own search filter, but nothing searches across pages or tracks.

## Scope

- Client-side index built lazily from each track's `loadData()`, with no server
- Results grouped by type (Section / Term / Trap / Question) and labelled with the track badge
- Keyboard navigation in the results list; Esc closes
- Clicking a result opens the exact chapter/section (needs deep links, see Deep-Linkable URLs)

## Risks & unknowns

- Index size: CTFL `quiz.js` alone is 5,300 lines, so indexing everything up front may slow the first open
- Fuzzy matching may need a small library (e.g. MiniSearch) or a hand-written scorer

## Open Questions

- [ ] Should quiz questions be searchable, or would that make it too easy to look up answers mid-practice? (Option: index questions but hide their answers in results.)
                                  > YOUR ANSWER:

- [ ] Search all tracks at once, or default to the current track with an “all tracks” toggle?
                                  > YOUR ANSWER:

## Status

OPEN
