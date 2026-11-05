# Task 010: Topic paths across tracks

## Description

Curated learning paths that string sections from several tracks into one subject (Testing fundamentals, Test design techniques, Test automation, Performance testing, Security testing, Usability & accessibility), read in a path reader with a plain-language note per step. Studying a step marks the section studied in its own track.

## Acceptance Criteria

- [x] `src/data/learning/paths.js` with 6 paths: id, title, summary, level, steps of (track, section id, plain-language note)
- [x] Paths index page and a path reader (one step per view, prev/next, section content rendered from the track data)
- [x] Marking a step studied updates that track's progress; path progress is computed from track progress
- [x] Every (track, section) reference is checked by a script
- [x] Paths are reachable from the dashboard
- [x] `npm run build` passes; the new screens checked in a browser at desktop and phone width, light and dark — no console errors or horizontal overflow; `npm run check:learning` validates every section reference
- [x] `_collab/TASKS.md` updated when finished

## Depends on

- none

## Source

Resolved from `_collab/features/learning-without-certification/ideas/resolved/idea-topic-paths.md`

## Status

DONE
