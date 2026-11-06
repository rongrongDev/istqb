# Task 003: Test Automation Strategy (CT-TAS) study track

## Description

ISTQB specialist syllabus on planning and governing test automation across an organisation: objectives and business case, strategy, architecture choices, scaling, and measuring automation. Built alongside CTAL-TAE v2.0 but scoped to strategy, not engineering.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [x] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [x] `src/data/cttas/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [x] `src/data/cttas/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [x] `src/data/cttas/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [x] `src/data/cttas/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [x] Pages `cttas-learn`, `cttas` (summaries), `cttas-guide`, `cttas-glossary`, `cttas-quiz` (practice + timed mock with the official duration and pass mark)
- [x] Progress stored under the `ct-tas-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [x] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/cttas` page and breadcrumbs all work
- [x] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [x] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [x] Track blurb on the hub says how it differs from CTAL-TAE (strategy vs engineering) so learners pick the right one
- [x] Cross-links to the CTAL-TAE track where the topics overlap (`seealso` in 1.1.2, 3.2.3, 4.3.3, 5.4.1; reverse link from CTAL-TAE 1.2.1)

## Depends on

- none (cross-links assume the CTAL-TAE task's track exists; skip them if it isn't built yet)

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-ct-tas.md`

## Status

DONE
