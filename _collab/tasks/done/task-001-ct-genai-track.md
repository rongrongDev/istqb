# Task 001: Testing with Generative AI (CT-GenAI v1.1) study track

## Description

ISTQB's specialist syllabus on using generative AI and LLMs in testing: prompt engineering for test tasks, LLM risks (hallucination, non-determinism, privacy), LLM-powered test infrastructure, and organisational adoption. It's the companion to the existing CT-AI v2 track (testing AI systems vs using GenAI to test). Approved 2026-11-04; gets its own hub card.

Build it as a full ISTQB study track following the established recipe from the existing tracks (CTFL v4, CT-QDO, CT-MAT, CT-SS): chapter data, learn content, an official sample-exam quiz checked against the answer key, a glossary, the five step pages, a progress key and a `tracks.js` entry. Sources: the public istqb.org/astqb.org downloads by default; PDFs dropped into `trainings/` take precedence. That default was set after your 2026-11-04 approval and can be changed here.

## Acceptance Criteria

- [x] Official sources gathered: syllabus, sample exam(s), answer key from the public download (or `trainings/` if provided); version and date recorded in each data file header
- [x] `src/data/ctgenai/` with one file per chapter (id, title, time, color, bg, overview, sections with level/type/summary or deepPoints/examInsights) and an `index.js` that attaches learn content, following `src/data/ctflv4/`
- [x] `src/data/ctgenai/learn/chapterN.js` for every chapter: intro, keywords, all learning objectives with K-levels, and paraphrased teaching content for every section (no verbatim syllabus copying)
- [x] `src/data/ctgenai/quiz.js` from the official sample exam, with lo, level, points, chapter, multi, options and explanations; every answer checked against the official answer key
- [x] `src/data/ctgenai/glossary.js` covering every chapter keyword, with definitions and chapter refs
- [x] Pages `ctgenai-learn`, `ctgenai` (summaries), `ctgenai-guide`, `ctgenai-glossary`, `ctgenai-quiz` (practice + timed mock with the official duration and pass mark) — pass mark 30/46 (65%) is stated in the sources; the 60-min duration is ISTQB's standard specialist format, not stated in the uploaded documents
- [x] Progress stored under the `ct-genai-progress` localStorage key via `makeProgress` in `src/lib/progress.js`
- [x] `src/lib/tracks.js` entry (title, org, level, badge, blurb, gradient, accent, prerequisite, 5 steps, progress, loadData), so the hub card, `/track/ctgenai` page and breadcrumbs all work
- [x] `npm run build` passes; headless screenshots of the hub, track page, a learn chapter, the guide, the glossary and the quiz match the beige/dark-grey theme
- [x] Root `TASKS.md` Done list and `_collab/TASKS.md` updated when finished
- [x] Confirm the current version (v1.1 vs v1.0) on istqb.org before authoring; record the version and date in the data file headers
- [x] Learn sections whose concepts overlap CT-AI v2 link to the matching `ctaiv2-learn` chapter (new `seealso` learn block: 1.1.1, 3.1.1, 3.4.1, 4.1.2, 4.2.1)

## Depends on

- none

## Source

Resolved from `_collab/features/new-learning-track/ideas/resolved/idea-ct-genai.md`

## Status

DONE
