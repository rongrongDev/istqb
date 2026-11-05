---
title: Learn Without an Exam
sources:
  - src/lib/learning.js
  - src/lib/learnNav.js
  - src/data/learning/
  - src/components/Blocks.jsx
  - src/components/LearnExtras.jsx
  - src/components/LearnUI.jsx
  - src/pages/explore.jsx
  - src/pages/path.jsx
  - src/pages/roles.jsx
  - src/pages/exercises.jsx
  - src/pages/toolbox.jsx
  - src/pages/templates.jsx
  - src/pages/case-studies.jsx
  - src/pages/self-check.jsx
  - src/pages/learning-record.jsx
  - scripts/check-learning.mjs
pinned_commit: 47192d8
updated: 2026-11-05
confidence: observed
---

# Learn without an exam

A second way into the same content, for people who want to learn testing without sitting a
certification (tasks 010–021). It reuses the track sections ([content-data](content-data.md))
and adds cross-track material in `src/data/learning/`. Entry point: `/explore`, linked from the
track menu and the dashboard ([architecture](architecture.md)).

## Pages

| Route | Page | Does |
|---|---|---|
| `/explore` | `explore.jsx` | Hub: level picker, self-check, exam/learning mode switch, concept of the day, roles, topic paths, tools |
| `/path?p=<id>&step=<n>` | `path.jsx` | Topic-path reader: one step per view, "In plain words" note, the section rendered from its track, outline; no `p` → path index |
| `/roles?r=<id>` | `roles.jsx` | Role reading list (paths + extra sections); "Make this my role" |
| `/exercises` | `exercises.jsx` | All exercises, filter "not done" |
| `/toolbox?r=<id>` | `toolbox.jsx` | Tool recipes with version stamp, steps and copyable code |
| `/templates?t=<id>` | `templates.jsx` | Markdown templates, area filter, copy |
| `/case-studies?c=<id>` | `case-studies.jsx` | Failure case studies with public sources |
| `/self-check` | `self-check.jsx` | 18-question placement; result per area, suggested level, recommended paths |
| `/learning-record` | `learning-record.jsx` | Aggregate of everything studied; plain-text summary to copy |

The Shell shows the non-hidden ones as tabs (`src/lib/learnNav.js`).

## Data (`src/data/learning/`)

| File | Shape |
|---|---|
| `paths.js` | `{id, title, level, summary, for, steps[{track, section, note, depth?}]}` — 6 paths |
| `roles.js` | `{id, title, why, paths[], extras[{track, section, note}]}` — 6 roles |
| `exercises.js` | `{id, track, section, title, task, hints[], check?, solution}`; `check` is `{kind: "values"|"number", answer}` for auto-checking — 9 exercises |
| `recipes.js` | `{id, tool, version, title, goal, links[[track, section]], steps[], lang, code}` — 6 recipes |
| `templates.js` | `{id, area, title, use, links, body}` (Markdown) — 10 templates |
| `cases.js` | `{id, title, when, domain, summary, happened, cause, lessons[], links, sources[]}` — 6 cases |
| `selfcheck.js` | 6 areas × 3 questions `{q, options, correct, why}`; `placement(right)`: 0–1 beginner, 2 practitioner, 3 expert |

`track` is a track id from [tracks](tracks.md), `section` a section id of that track.
`npm run check:learning` fails on any reference that doesn't exist (`scripts/check-learning.mjs`).
Exercises and the self-check are written for this site and labelled as such; they are never
mixed into the official sample-exam quizzes ([pages](pages.md#quiz-rules)).

## State

`src/lib/learning.js` keeps one `localStorage` key, `learning-state`:
`{mode: "exam"|"learning", level, role, exercisesDone[], selfCheck}` with a small subscribe
API and `useLearning()` hook (`src/lib/learning.js:9-45`). Path progress is not stored:
`pathProgress` reads each step's track progress, and the path reader writes through
`track.progress.setStudied`, so paths and tracks share ticks ([progress](progress.md)).

## Levels and depth

`depthOf(trackLevel, kLevel)` = the higher of track level (Foundation → beginner,
Specialist → practitioner, Advanced → expert) and K-level (K3 → practitioner, K4 → expert);
a path step's `depth` overrides it (`src/lib/learning.js:65-72`). A chosen level and role sort
paths on Explore (`rankedPaths`) and pick the concept-of-the-day pool (`conceptTracks`) in
`src/components/LearnUI.jsx`. The concept is a date-seeded pick from those glossaries, the same
all day (`conceptOfTheDay`, `src/lib/learning.js:166-172`).

## Learning mode

Default is exam mode. Learning mode hides K-level chips (`KChip`), the Learn objectives box,
the Insights step and tab, the track page's exam card and pass stats, and the dashboard's
readiness card and mock rows; Quiz becomes "Practice" ([architecture](architecture.md)).

## Inside track Learn pages

Glossary tooltips (`TermsProvider`/`Rich` in `Blocks.jsx`, skipping terms under 4 letters
and a stop-list of very common words) and `SectionExtras` (exercises plus links to recipes,
templates and cases for that section) appear in every track's Learn step ([pages](pages.md)).

## Open questions

- Case-study facts and tool-recipe commands were written from public sources and tool docs as
  known in 2026 (unverified against live sites from this environment); recipes carry a version stamp to re-check.
