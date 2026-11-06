# Expert Level (CTEL) Modules

## Summary

Add one of ISTQB's Expert Level syllabi, e.g. Improving the Test Process or Test Management (Strategic/Operational/Managing the Team). This is the top of the ISTQB ladder, aimed at senior test managers and process consultants.

## Why it fits

It would complete the hub's ladder from Foundation through Advanced to Expert, and pairs with whichever Advanced tracks get built (Advanced Test Management is still an open idea here). Follows the established track recipe from the done tasks (CTFL v4, CT-QDO, CT-MAT, CT-SS): `src/data/<id>/` (chapters + learn content + official sample-exam quiz checked against the answer key + glossary), five step pages (Learn / Summaries / Exam Insights / Glossary / Quiz with a timed mock), a `makeProgress` storage key, and one `tracks.js` entry, which makes it appear on the hub, the track page and the breadcrumbs automatically.

## Scope

- Pick one CTEL module: all chapters, learn content, sample exam quiz (if published), glossary
- New `tracks.js` entry, progress key, five step pages, hub card

## Risks & unknowns

- Current version/code to confirm on istqb.org before authoring
- Expert exams include essay questions that a multiple-choice quiz can't simulate
- Smallest audience of any ISTQB level

## Open Questions

- [ ] Which Expert module, if any: Improving the Test Process, or Test Management?
                                  > YOUR ANSWER:

- [ ] Expert exams include essay questions. Is a Learn + glossary + practice-question track enough, without full exam simulation?
                                  > YOUR ANSWER:

- [ ] Do you have the official syllabus PDF and a sample exam with its answer key for this one (to put in `trainings/`), or should I work only from the public istqb.org downloads?
                                  > YOUR ANSWER:

## Status

OPEN
