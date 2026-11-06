# Content Notes Shown in the App

## Summary

A small "About this content" panel on each track page and quiz check-in listing the source documents and versions, plus any deviations: omitted questions, diagrams described in text, LOs mapped by topic, assumed durations. Learners know what to trust and what to double-check against the official PDFs.

## Why it fits

These notes already exist, but only in `quiz.js` header comments and task files (e.g. CT-FT's excluded ISTQB set, CT-PT's omitted Q27, CT-SEC's topic-mapped LOs). Nobody using the site can see them.

## Scope

- `sources` field per track in data: syllabus version/date, sample exams used, deviation notes
- Panel on TrackPage and QuizPage check-in
- "Mapped by topic" marker on affected questions in review

## Risks & unknowns

- Keeping notes accurate when content changes (tie to the integrity checks)

## Open Questions

- [ ] Show deviations to every learner, or tuck them behind an "About this content" disclosure?
                                  > YOUR ANSWER:

## Status

OPEN
