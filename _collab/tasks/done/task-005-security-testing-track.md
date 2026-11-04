# Task 005: Security Testing study track

## Description

ISTQB's security testing certification: security risks and threat modelling, security test techniques and tools, aligning testing with security policies, and evaluating results. ISTQB's naming and level for security have changed over time, so the first step is confirming the current certificate.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [x] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [x] `src/data/ctsec/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [x] `src/data/ctsec/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [x] `src/data/ctsec/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [x] `src/data/ctsec/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [x] Pages `ctsec-learn`, `ctsec` (summaries), `ctsec-guide`, `ctsec-glossary`, `ctsec-quiz` (practice + timed mock with the official duration and pass mark) — 45 questions / 80 points from the sample exam, pass 65% (52); 120 min is the standard advanced-format duration, not stated in the uploaded documents
- [x] Progress stored under the `ct-sec-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [x] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctsec` page and breadcrumbs all work
- [x] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [x] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [x] Before authoring, confirm the current certificate code, level (Specialist vs Advanced) and version on istqb.org; set the track id, badge and level from that (rename `ctsec` if the official code differs) — confirmed from the supplied files: the sample exam (v1.1, 2021) names it CT-SEC, 'Security Testing, Specialist', compatible with the 2016 Advanced Security Tester syllabus; id `ctsec`, level Specialist. The official key has no LOs, so question→LO/chapter mapping was done by topic and labelled as such

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-security-testing.md`

## Status

DONE
