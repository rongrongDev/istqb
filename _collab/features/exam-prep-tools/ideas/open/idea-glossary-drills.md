# Glossary Drills (Flashcards and Term Matching)

## Summary

A "Drill" mode on each track's Glossary step: flip-card flashcards (term → definition, or reversed) and a timed matching round that pairs 6 terms with 6 definitions. Learners memorise the exact definitions ISTQB exams test, without needing new questions.

## Why it fits

Every track already ships a `glossary.js` (term, chapters, definition) and the `GlossaryPage` already has search and a chapter filter. Drills reuse that data and filter, so all 13 tracks get them at once. It stays clear of the rule against inventing unofficial exam questions, because nothing is scored as an exam.

## Scope

- Drill toggle on `GlossaryPage`: flashcards (shuffle, know / don't know) and matching rounds
- Respect the current chapter filter
- Per-track "terms mastered" count in localStorage

## Risks & unknowns

- Long definitions (some are 2–3 sentences) are awkward in a matching grid
- Mastery state is one more localStorage key per track

## Open Questions

- [ ] Should "known" cards come back later (simple spaced repetition), or does a session end when every card is marked known?
                                  > YOUR ANSWER:
- [ ] Should mastered-term counts show on the track page and dashboard, or stay inside the Glossary step?
                                  > YOUR ANSWER:

## Status

OPEN
