# Resume Where You Left Off

## Summary

Remember the last section opened in each track and show a “Continue: 4.2.3 Boundary Value Analysis →” button on the hub card, on the track landing page, and on the Learn chapter list. Coming back to study takes one click instead of re-finding your place.

## Why it fits

Progress already lives in a per-track localStorage key (`ctfl-v4-progress` etc. via `makeProgress`), so a `lastVisited` field fits the same store. `TrackPage` already shows a progress block, which is the natural place for the button.

## Scope

- Record the last chapter/section (and scroll position) on the Learn page; optionally also the last step page visited
- “Continue” button on hub card, track page and Learn chapter list
- Fall back to the first unstudied section when nothing has been visited

## Risks & unknowns

- Section-level resume needs deep links (see general-whole-app Deep-Linkable URLs)

## Open Questions

- [ ] Resume only within Learn, or across all steps (e.g. “Continue your Exam A practice, question 23”)?
                                  > YOUR ANSWER:

## Status

OPEN
