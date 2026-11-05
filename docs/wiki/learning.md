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
  - src/pages/playbook.jsx
  - src/pages/pairs.jsx
  - src/pages/situations.jsx
  - src/pages/tradeoffs.jsx
  - src/pages/anti-patterns.jsx
  - src/pages/interview.jsx
  - src/pages/capstones.jsx
  - src/components/QuizPage.jsx
  - scripts/check-learning.mjs
pinned_commit: aa5da0b
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
| `/playbook` | `playbook.jsx` | 12 exam tactics, each with a live official demo question; trap types with the learner's tally; track notes |
| `/pairs?p=<id>` | `pairs.jsx` | Confusable pairs with a rule, examples and a which-is-it drill; track filter |
| `/situations?s=<id>` | `situations.jsx` | Workplace dilemmas: pick a response, then every response's rating (best / acceptable / risky) and reasoning |
| `/tradeoffs?t=<id>` | `tradeoffs.jsx` | Decision guides: options side by side, "choose it when", debate for contested topics, sources |
| `/anti-patterns#<id>` | `anti-patterns.jsx` | Anti-patterns by area (symptom, cause, harm, fix) and a spot-it check |
| `/interview?q=<id>` | `interview.jsx` | Interview questions by level and area; outline hidden until revealed |
| `/capstones?c=<id>&stage=<n>` | `capstones.jsx` | Staged projects: task, model answer, rubric checklist |

The Shell shows six of them as tabs — Explore, Exercises, Situations, Trade-offs, Interview, Record; the rest are reached from Explore and highlight its tab (`src/lib/learnNav.js`).

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
| `traps.js` | 9 `trapTypes` and `traps["<track>:<set>:<num>"] = {optionId: trapId}` — every wrong option of CTFL Sample Exam A |
| `workings.js` | `workings["<track>:<set>:<num>"] = steps[]` — 18 official calculation/technique questions (CTFL, CT-AcT, CT-PT) |
| `playbook.js` | `tactics[{id, title, rule, why, demo:[track, set, num]}]` and `trackNotes` |
| `pairs.js` | `{id, a, b, rule, exA, exB, links, drill[{text, answer}]}` — 18 pairs |
| `situations.js` | `{id, area, title, scenario, responses[{text, rating, why}], links}` — 10 |
| `tradeoffs.js` | `{id, title, question, options[{name, pros, cons, when}], debate?, rule, links, recipes, sources}` — 8 |
| `antipatterns.js` | `{id, area, title, symptom, cause, harm, fix, spot, links}` — 12 in 4 areas |
| `realworld.js` | `{track, section, exam, reality}` — 23 notes |
| `interview.js` | `{id, level, area, q, looksFor, outline, followUps, links}` — 16 |
| `capstones.js` | `{id, title, level, brief, stages[{title, task, model, rubric, templates, recipes?, links}]}` — 2 |

`track` is a track id from [tracks](tracks.md), `section` a section id of that track.
`npm run check:learning` fails on any reference that doesn't exist (`scripts/check-learning.mjs`), and also checks that every trap/working key is a real question and that no trap tag sits on a correct answer.
Exercises and the self-check are written for this site and labelled as such; they are never
mixed into the official sample-exam quizzes ([pages](pages.md#quiz-rules)).

## State

`src/lib/learning.js` keeps one `localStorage` key, `learning-state`:
`{mode: "exam"|"learning", level, role, exercisesDone[], selfCheck, trapTally}` with a small subscribe
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

## Inside the quizzes

For questions with entries in `traps.js` / `workings.js`, `QuizPage` shows a "Trap: …" chip on
a chosen wrong option after it's revealed (on every tagged wrong option in review), adds the
trap to `trapTally` via `recordTraps` on practice submit and exam finish, and offers "Show the
working" under the official explanation. The check-in links to the playbook. Lookups use the
current track from the route (`useCurrentTrack`).

## Inside track Learn pages

Glossary tooltips (`TermsProvider`/`Rich` in `Blocks.jsx`, skipping terms under 4 letters
and a stop-list of very common words) and `SectionExtras` ("In the real world" notes, exercises, and links to the section's recipes,
templates, cases, pairs, trade-offs, anti-patterns, situations and interview questions) appear in every track's Learn step ([pages](pages.md)).

## Open questions

- Trap tags, workings, situations' ratings and trade-off guides are this site's judgement, labelled as such in the UI; they are not official ISTQB content.
- Case-study facts and tool-recipe commands were written from public sources and tool docs as
  known in 2026 (unverified against live sites from this environment); recipes carry a version stamp to re-check.
