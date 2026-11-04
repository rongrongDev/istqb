# Finance Testing (CT-FT v1.0)

## Summary

Add ISTQB's new Specialist syllabus for testing in the finance domain (banking, payments, regulation-heavy systems), published May 2026.

## Why it fits

It's the newest syllabus on ISTQB's list, mirroring how CT-QDO was added as “NEW 2026”. Domain tracks broaden the hub beyond technique-focused certs. Follows the established track recipe from the done tasks (CTFL v4, CT-QDO, CT-MAT, CT-SS): `src/data/<id>/` (chapters + learn content + official sample-exam quiz checked against the answer key + glossary), five step pages (Learn / Summaries / Exam Insights / Glossary / Quiz with a timed mock), a `makeProgress` storage key, and one `tracks.js` entry, which makes it appear on the hub, the track page and the breadcrumbs automatically.

## Scope

- All chapters, learn content, sample exam quiz, glossary of finance and regulatory terms
- New `tracks.js` entry, progress key, five step pages, hub card

## Risks & unknowns

- Very new: sample exams and translations may be limited, and errata likely in the first year

## Open Questions

- [x] Is there real demand for this from you or your audience, or is it only “new and available”?
                                  > YOUR ANSWER: Yes: approved by you in chat, 2026-11-04.

- [x] Do you have the official syllabus PDF and a sample exam with its answer key for this one (to put in `trainings/`), or should I work only from the public istqb.org downloads?
                                  > YOUR ANSWER: Default (set by Claude after your 2026-11-04 approval; change it in the task if wrong): work from the public istqb.org downloads (syllabus, sample exam, answer key). If you have the PDFs, drop them into `trainings/` and they take precedence.

## Decision

Approved in chat on 2026-11-04 as a track to build.

## Status

RESOLVED
