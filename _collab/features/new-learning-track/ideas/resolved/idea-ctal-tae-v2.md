# Advanced Level Test Automation Engineering (CTAL-TAE v2.0)

## Summary

Add the Advanced Test Automation Engineering syllabus (v2.0, the only English version since 12 June 2025): automation goals, generic test automation architecture, designing and implementing automation, CI/CD integration, reporting, and verifying the automation solution.

## Why it fits

It pairs naturally with CT-QDO (DevOps pipelines) and CT-MAT (mobile automation), both already on the site, and gives automation-focused learners a technical Advanced step after CTFL. Follows the established track recipe from the done tasks (CTFL v4, CT-QDO, CT-MAT, CT-SS): `src/data/<id>/` (chapters + learn content + official sample-exam quiz checked against the answer key + glossary), five step pages (Learn / Summaries / Exam Insights / Glossary / Quiz with a timed mock), a `makeProgress` storage key, and one `tracks.js` entry, which makes it appear on the hub, the track page and the breadcrumbs automatically.

## Scope

- All v2.0 chapters with learn content
- Sample exam quiz
- Glossary; cross-links to CT-QDO pipeline material
- New `tracks.js` entry, progress key, five step pages, hub card

## Risks & unknowns

- Strong overlap with CT-TAS (test automation strategy); the two should be scoped as distinct

## Open Questions

- [x] If only one automation track is added, should it be TAE (engineer, Advanced) or CT-TAS (strategy, Specialist)?
                                  > YOUR ANSWER: Both: you approved CTAL-TAE v2.0 and CT-TAS as separate tracks (chat, 2026-11-04). Scope each distinctly: TAE = engineering/architecture, TAS = organisational strategy.

- [x] Do you have the official syllabus PDF and a sample exam with its answer key for this one (to put in `trainings/`), or should I work only from the public istqb.org downloads?
                                  > YOUR ANSWER: Default (set by Claude after your 2026-11-04 approval; change it in the task if wrong): work from the public istqb.org downloads (syllabus, sample exam, answer key). If you have the PDFs, drop them into `trainings/` and they take precedence.

## Decision

Approved in chat on 2026-11-04 as a track to build.

## Status

RESOLVED
