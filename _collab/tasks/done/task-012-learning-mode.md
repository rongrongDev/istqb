# Task 012: Learning mode without exam framing

## Description

A site-wide switch between Exam mode (default) and Learning mode, which hides K-levels, objective codes, exam insights and pass marks, and points newcomers to paths.

## Acceptance Criteria

- [x] Mode toggle in the top bar, remembered per browser (default: Exam mode)
- [x] In Learning mode: K-level chips and objective boxes hidden, Insights tab hidden, Quiz tab labelled Practice, track page exam card hidden (also the best-mock and pass-mark stats; dashboard tiles drop the mock row)
- [x] Dashboard shows the Learn-by-topic area first in Learning mode
- [x] `npm run build` passes; the new screens checked in a browser at desktop and phone width, light and dark — no console errors or horizontal overflow; `npm run check:learning` validates every section reference
- [x] `_collab/TASKS.md` updated when finished

## Depends on

- none

## Source

Resolved from `_collab/features/learning-without-certification/ideas/resolved/idea-learning-mode.md`

## Status

DONE
