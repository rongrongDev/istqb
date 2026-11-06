# Task 007: Acceptance Testing (CT-AcT) study track

## Description

ISTQB Acceptance Testing specialist syllabus: business-facing acceptance criteria, user/operational/contract acceptance testing, ATDD and BDD in practice, and collaboration with business analysts and product owners.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [x] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header — syllabus v1.0 (2019) and ISTQB Sample Exam set A v1.3 (2023-10-26) supplied in `trainings/ISTQB/Acceptance Testing 2019/`
- [x] `src/data/ctact/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [x] `src/data/ctact/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [x] `src/data/ctact/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key — 40 questions / 40 points; key table and per-question answers cross-checked. Q17's option tables and the BPMN diagrams of Q18–Q20 are images in the PDF, so they are described in text (transcribed from the PDF pages)
- [x] `src/data/ctact/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [x] Pages `ctact-learn`, `ctact` (summaries), `ctact-guide`, `ctact-glossary`, `ctact-quiz` (practice + timed mock with the official duration and pass mark) — 60 min and 65% (26/40): the standard specialist format; the uploaded documents don't state them
- [x] Progress stored under the `ct-act-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [x] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctact` page and breadcrumbs all work
- [x] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [x] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [x] Confirm the current version and code on istqb.org — istqb.org is unreachable from this environment; code CT-AcT and syllabus v1.0 (2019) taken from the supplied sample exam (v1.3, 2023, "Compatible with Syllabus version 1.0")
- [x] ATDD/BDD sections link to CTFL learn sections 2.1.3 and 2.2.1 — "See also" links in learn 1.2.3 and 3.3.2 point to `/ctflv4-learn` naming sections 2.1.3 and 2.2.1 (the learn page has no per-section anchors)

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-acceptance-testing.md`

## Status

DONE
