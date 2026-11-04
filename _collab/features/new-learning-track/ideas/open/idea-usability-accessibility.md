# Usability / Accessibility Testing

## Summary

Add a track on testing user experience: either ISTQB's Usability Testing specialist (CT-UT) or ASTQB's Accessibility Testing certification (WCAG-based). Both cover how to evaluate whether real people, including people with disabilities, can use a product.

## Why it fits

The site already hosts an ASTQB track (CT-SS), so a second ASTQB certificate fits the hub's org tagging. The topic also connects to the accessibility-pass idea in `general-whole-app/`. Follows the established track recipe from the done tasks (CTFL v4, CT-QDO, CT-MAT, CT-SS): `src/data/<id>/` (chapters + learn content + official sample-exam quiz checked against the answer key + glossary), five step pages (Learn / Summaries / Exam Insights / Glossary / Quiz with a timed mock), a `makeProgress` storage key, and one `tracks.js` entry, which makes it appear on the hub, the track page and the breadcrumbs automatically.

## Scope

- Pick one syllabus; all chapters, learn content, sample exam quiz, glossary
- New `tracks.js` entry, progress key, five step pages, hub card

## Risks & unknowns

- Accessibility content references WCAG versions, so keep it aligned with the syllabus's version, not the latest WCAG

## Open Questions

- [ ] Which one: ISTQB Usability Testing (CT-UT), ASTQB Accessibility Testing, or both as separate tracks?
                                  > YOUR ANSWER:

- [ ] Do you have the official syllabus PDF and a sample exam with its answer key for this one (to put in `trainings/`), or should I work only from the public istqb.org downloads?
                                  > YOUR ANSWER:

## Status

OPEN
