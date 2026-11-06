# Task 002: Advanced Test Automation Engineering (CTAL-TAE v2.0) study track

## Description

ISTQB Advanced Level Test Automation Engineering v2.0 (the only English version since 12 June 2025): automation goals, generic test automation architecture, designing and implementing automation, CI/CD integration, reporting, and verifying the automation solution. CT-TAS is a separate track (task for CT-TAS), so this one stays engineering- and architecture-focused.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [x] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [x] `src/data/ctaltae/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [x] `src/data/ctaltae/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [x] `src/data/ctaltae/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [x] `src/data/ctaltae/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [x] Pages `ctaltae-learn`, `ctaltae` (summaries), `ctaltae-guide`, `ctaltae-glossary`, `ctaltae-quiz` (practice + timed mock with the official duration and pass mark)
- [x] Progress stored under the `ctal-tae-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [x] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctaltae` page and breadcrumbs all work
- [x] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [x] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [x] Track badge/level reads Advanced; prerequisite is CTFL
- [x] Quiz and mock support the Advanced exam format (scenario-based questions; exam duration and pass mark taken from the official exam structure document, not assumed from the Specialist tracks) — 90 min and the 41-point ASTQB pass mark are stated in the uploaded ASTQB sample; the ISTQB set uses 65% (43/66) since the separate Exam Structures document wasn't among the sources
- [x] Pipeline/CI sections link to the matching CT-QDO learn chapter (`seealso` blocks in 2.1.2, 5.1.1, 5.1.2)

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-ctal-tae-v2.md`

## Status

DONE
