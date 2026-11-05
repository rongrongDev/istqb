---
title: Learner Progress
sources:
  - src/lib/progress.js
  - src/lib/tracks.js
  - src/pages/
  - src/components/
pinned_commit: aa5da0b
updated: 2026-11-05
confidence: observed
---

# Learner progress

Per-browser, `localStorage`-only; no accounts, nothing leaves the device. Read/write
failures (e.g. private browsing) are swallowed and the site works without progress
(`src/lib/progress.js:1-3,6-21`).

## Data

`makeProgress(KEY)` (`src/lib/progress.js:5-47`) stores one JSON object per key:

```
{ studied: ["1.1", "2.3", …], bestExam: { score, total, date: "YYYY-MM-DD" } }
```

- `setSectionStudied(id, bool)` toggles a section id; returns the new `Set`.
- `recordExamScore(score, total)` keeps only the highest `score` (compared by points,
  not percentage) — `src/lib/progress.js:37-44`.

## Keys and exports

| Track | Key | Export suffix |
|---|---|---|
| CT-AI v2 | `ctai-v2-progress` | *(none)* — `getStudiedSections` … |
| CT-AI v1 | `ctai-v1-progress` | `V1` |
| CTFL v4 | `ctfl-v4-progress` | `CTFL` |
| CT-QDO | `ct-qdo-progress` | `QDO` |
| CT-MAT | `ct-mat-progress` | `MAT` |
| Soft Skills | `ct-ss-progress` | `SS` |
| CT-GenAI | `ct-genai-progress` | `GenAI` |
| CTAL-TAE | `ctal-tae-progress` | `TAE` |
| CT-TAS | `ct-tas-progress` | `TAS` |
| CT-PT | `ct-pt-progress` | `PT` |
| CT-SEC | `ct-sec-progress` | `SEC` |
| CT-FT | `ct-ft-progress` | `FT` |
| CT-AcT | `ct-act-progress` | `ACT` |
| CT-UT | `ct-ut-progress` | `UT` |

Source: `src/lib/progress.js:49-148`. Renaming a key wipes existing learners' progress.

## Readers and writers

- Writers: each `<t>-learn.jsx` wrapper passes its `getStudiedSections*` /
  `setSectionStudied*` to `LearnPage`, and each `<t>-quiz.jsx` passes `recordExamScore*` /
  `getBestExamScore*` to `QuizPage` — see [pages](pages.md).
- Readers: the dashboard (`src/App.jsx:31-32`, also derives "next up" from studied ids and
  chapter order) and `TrackPage` (`src/components/TrackPage.jsx:35-36`) via
  `track.progress` in [tracks](tracks.md). Pass colouring uses the pass mark, 65% of the total
  rounded up.
- The dashboard probes `localStorage` and shows a banner when writes throw (`src/App.jsx:19-27`).
- The topic-path reader writes through `track.progress.setStudied`, so a section studied in a path counts in its track and vice versa; path progress is derived, not stored (`src/lib/learning.js:130-138`, [learning](learning.md)).
- The theme choice uses its own key, `theme` ([theme](theme.md)).
- Learning features use one more key, `learning-state`: `{mode, level, role, exercisesDone[], selfCheck, trapTally}` (`src/lib/learning.js:9-10`); capstone rubric ticks use `capstone-progress` (`src/pages/capstones.jsx`).

## Known gaps

- `recordExamScoreV1` is exported but never called: `ctai-quiz.jsx` has no exam mode, so
  the "Best v1 mock" line on the CT-AI track page (`src/components/TrackPage.jsx:41,113`)
  can never appear.
- CTFL stores a single `bestExam` across Sample Exams A–D, so the best score does not say
  which set it came from (`src/pages/ctflv4-quiz.jsx:5,16`).
