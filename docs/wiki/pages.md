---
title: Study Pages
sources:
  - src/pages/
pinned_commit: 7e14a2d
updated: 2026-10-25
confidence: observed
---

# Study pages

29 page files in `src/pages/`, each one a route by filename ([architecture](architecture.md)).
Each track has five, registered as steps in [tracks](tracks.md). The files are
self-contained and near-duplicates across tracks — there is no shared page
component; a fix in one track's page usually needs repeating in the others.

| Step | File pattern | Reads | Does |
|---|---|---|---|
| 1 Learn | `<t>-learn.jsx` | `chapters` (with `.learn`) | Renders learn blocks; per-section "studied" toggle → [progress](progress.md) (e.g. `src/pages/ctmat-learn.jsx:86-89`) |
| 2 Summaries | `<t>.jsx` | `chapters` | Deep vs skim sections, deep/skim counts per chapter (`src/pages/ctmat.jsx:89-90,180`) |
| 3 Exam Insights | `<t>-guide.jsx` | `chapters` | Summaries plus `examInsights` counts/lists (`src/pages/ctmat-guide.jsx:123-126`) |
| 4 Glossary | `<t>-glossary.jsx` | `glossary` | Term list |
| 5 Quiz | `<t>-quiz.jsx` | `questions`, `totalPoints` | Practice mode with explanations, or timed exam simulation |

Data shapes: [content-data](content-data.md). Colours: [theme](theme.md).

## Quiz rules

- Exam simulation: `EXAM_MINUTES = 60`, optional +25% for non-native speakers, pass mark
  `Math.ceil(totalPoints * 0.65)` — `src/pages/ctmat-quiz.jsx:9-11,64`.
- Answer is correct only if the selected set equals `correct` exactly (multi-select
  supported) — `src/pages/ctflv4-quiz.jsx:43-46`.
- On finish, the score is saved with the track's `recordExamScore*` (e.g.
  `src/pages/ctmat-quiz.jsx:45`).
- CTFL: the learner picks one of Sample Exams A–D; totals per set
  (`src/pages/ctflv4-quiz.jsx:12-13,30-32`).
- CT-QDO: the exam scores `mainQuestions` only; appendix questions are practice
  (`src/pages/ctqdo-quiz.jsx:53`).
- CT-AI v1 (`ctai-quiz.jsx`): older page, practice only — no `EXAM_MINUTES`, no exam
  timer, and no score recording (no `recordExamScore*` import in the file).

## Pages outside the standard set

`ctai.jsx`, `ctai-quiz.jsx`, `ctaiv1-learn.jsx`, `ctaiv1-glossary.jsx` are the CT-AI v1
legacy pages (no v1 guide page). Any new `.jsx` not in [tracks](tracks.md) shows up in
the hub's "MORE" list.
