---
title: Learner Progress
sources:
  - src/lib/progress.js
  - src/lib/tracks.js
  - src/pages/
pinned_commit: 7e14a2d
updated: 2026-10-25
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

Source: `src/lib/progress.js:49-90`. Renaming a key wipes existing learners' progress.

## Readers and writers

- Writers: each `<t>-learn.jsx` (studied toggles) and `<t>-quiz.jsx` (best exam) — see [pages](pages.md).
- Readers: hub cards (`src/App.jsx:42-43`) and `TrackPage` (`src/components/TrackPage.jsx:31-37`)
  via `track.progress` in [tracks](tracks.md). Pass colouring uses ≥65%.

## Known gaps

- `recordExamScoreV1` is exported but never called: `ctai-quiz.jsx` has no exam mode, so
  the "Best v1 mock" line on the CT-AI track page (`src/components/TrackPage.jsx:37,117`)
  can never appear.
- CTFL stores a single `bestExam` across Sample Exams A–D, so the best score does not say
  which set it came from (`src/pages/ctflv4-quiz.jsx:56`).
