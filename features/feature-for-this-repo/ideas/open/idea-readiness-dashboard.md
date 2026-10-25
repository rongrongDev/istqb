# Exam Readiness Dashboard

## Summary
A per-chapter mastery view that combines what's already tracked (sections studied) with quiz performance per chapter, and rolls it up into an overall "readiness" indicator against the real 65% pass mark. Answers the one question every candidate has: "am I ready, and where am I weak?"

## Why it fits
The home page already shows two coarse numbers (sections studied, best mock score) from `src/lib/progress.js`. Questions carry `chapter` and `points` metadata, and chapters expose `sections`, so a per-chapter breakdown is a pure aggregation of data the app already has — no new content authoring needed.

## Scope
- New dashboard section on the home page (or dedicated page) with one row per chapter: sections studied, questions attempted, % correct
- Overall readiness verdict (e.g. weakest chapters called out: "focus on Ch. 5 and 6")
- Requires per-question answer recording (shared groundwork with the Mistake Review Deck idea)

## Risks & unknowns
- Readiness heuristics can mislead: 40 questions spread over 7 chapters means small samples per chapter. Show counts, not just percentages.
- Depends on per-question history existing — if the Mistake Review Deck idea is rejected, this idea must include that recording work itself.

## Open Questions
- [ ] Should this live on the home page (always visible) or as a separate step in the study path?
  > YOUR ANSWER:
- [ ] Do you want a blunt verdict ("likely ready / not yet") or only neutral per-chapter stats with no judgment?
  > YOUR ANSWER:

## Status
OPEN
