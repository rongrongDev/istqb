# Task 004: Performance Testing (CT-PT) study track

## Description

ISTQB Performance Testing specialist syllabus: performance test types (load, stress, scalability, spike, endurance…), metrics, planning, load generation, and analysing and reporting results.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [ ] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [ ] `src/data/ctpt/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [ ] `src/data/ctpt/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [ ] `src/data/ctpt/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [ ] `src/data/ctpt/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [ ] Pages `ctpt-learn`, `ctpt` (summaries), `ctpt-guide`, `ctpt-glossary`, `ctpt-quiz` (practice + timed mock with the official duration and pass mark)
- [ ] Progress stored under the `ct-pt-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [ ] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctpt` page and breadcrumbs all work
- [ ] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [ ] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [ ] Confirm the syllabus is still current (published 2018) and not slated for a sunset or rewrite; note the check in the data file header

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-ct-pt.md`

## Status

TODO
