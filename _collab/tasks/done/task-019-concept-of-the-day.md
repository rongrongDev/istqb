# Task 019: Concept of the day

## Description

A daily concept card on the dashboard: a glossary term with its definition and a link to read more, picked deterministically by date from the learner's level/paths or from all tracks.

## Acceptance Criteria

- [x] Date-seeded pick, same card all day
- [x] Respects level and chosen paths when set — uses the chosen role's paths, else the level (beginner: CTFL, CT-UT, Soft Skills)
- [x] Link to the term in its track glossary/learn section
- [x] `npm run build` passes; the new screens checked in a browser at desktop and phone width, light and dark — no console errors or horizontal overflow; `npm run check:learning` validates every section reference
- [x] `_collab/TASKS.md` updated when finished

## Depends on

- task-013-level-picker.md

## Source

Resolved from `_collab/features/learning-without-certification/ideas/resolved/idea-concept-of-the-day.md`

## Status

DONE
