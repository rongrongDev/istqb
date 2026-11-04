# Task 006: Finance Testing (CT-FT v1.0) study track

## Description

ISTQB's new specialist syllabus for testing in the finance domain (banking, payments, regulation-heavy systems), published May 2026. Approved 2026-11-04.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [ ] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [ ] `src/data/ctft/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [ ] `src/data/ctft/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [ ] `src/data/ctft/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [ ] `src/data/ctft/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [ ] Pages `ctft-learn`, `ctft` (summaries), `ctft-guide`, `ctft-glossary`, `ctft-quiz` (practice + timed mock with the official duration and pass mark)
- [ ] Progress stored under the `ct-ft-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [ ] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctft` page and breadcrumbs all work
- [ ] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [ ] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [ ] Hub badge marks it as new (like CT-QDO's “NEW 2026”)
- [ ] Check istqb.org for errata or a v1.0.x update before authoring; record the version used
- [ ] If no official sample exam is published yet, ship Learn/Summaries/Glossary and show the Quiz step as “coming soon”, rather than inventing unofficial questions

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-ct-ft.md`

## Status

TODO
