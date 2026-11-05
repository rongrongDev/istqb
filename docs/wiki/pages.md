---
title: Study Pages
sources:
  - src/pages/
  - src/components/LearnPage.jsx
  - src/components/NotesPage.jsx
  - src/components/GlossaryPage.jsx
  - src/components/QuizPage.jsx
  - src/components/Blocks.jsx
  - src/components/LearnExtras.jsx
pinned_commit: 47192d8
updated: 2026-11-05
confidence: observed
---

# Study pages

78 page files in `src/pages/`, each one a route by filename ([architecture](architecture.md)): 13 tracks × 5 steps, the CT-AI v1 legacy pages, and 9 pages of the [learning](learning.md) area.
Each is a thin wrapper that passes its track's data, progress functions and original
wording to one of four shared components, so **a fix in a component reaches every
track**. Each track has five pages, registered as steps in [tracks](tracks.md).

| Step | File pattern | Component | Does |
|---|---|---|---|
| 1 Learn | `<t>-learn.jsx` | `LearnPage` | Chapter list, then one section per view with "Mark studied & next" and a chapter outline panel |
| 2 Summaries | `<t>.jsx` | `NotesPage mode="summaries"` | Chapter list with deep/skim/K3 counts, collapsible sections, deep/skim filter |
| 3 Exam Insights | `<t>-guide.jsx` | `NotesPage mode="insights"` | Same, plus the chapter's `examInsights` in a side column |
| 4 Glossary | `<t>-glossary.jsx` | `GlossaryPage` | Search term or definition, alphabetical, chapter filter |
| 5 Quiz | `<t>-quiz.jsx` | `QuizPage` | Check-in, practice, timed exam, result, review |

Data shapes: [content-data](content-data.md). Styles: [theme](theme.md).

## Per-track content in wrappers

Hand-written text that is not in `src/data/` lives in the wrapper props: Summaries/Insights
headers, legends, K-level notes, exam format, quick-reference lines (e.g.
`src/pages/ctflv4-guide.jsx`), and quiz rules grids (e.g. `src/pages/ctmat-quiz.jsx`).

## Learn

- URL state: `?ch=<chapter>&s=<section>` (`src/components/LearnPage.jsx:84`); the old
  CT-AI v1 `?ch=N` deep link still works (section defaults to the first).
- "Mark studied & next" calls the track's `setSectionStudied(id, true)` and advances
  (`LearnPage.jsx:134-135`); the studied button still toggles off (`LearnPage.jsx:95`).
- Chapter intro, objectives and keywords show above the first section; sections
  without learn content fall back to `summary` / `deepPoints`. Learning mode hides the
  objectives box ([learning](learning.md)).
- Body blocks render through `Block` in `src/components/Blocks.jsx`; inside a
  `TermsProvider` (the current track's glossary) the first mention of each glossary term per
  paragraph or list item becomes a tooltip with its definition.
- Under each section, `SectionExtras` (`src/components/LearnExtras.jsx`) shows that
  section's exercises and links to related tool recipes, templates and case studies, if any.

## Insights classification

`TRAP` → trap; any of KEY, MATCHING, SCENARIO, CALCULATION, ORDERING, APPLICATION,
PATTERN, MEMORY AID → key; else plain insight (`src/components/NotesPage.jsx:6-7`).

## Quiz rules

- Exam simulation: `EXAM_MINUTES = 60` unless the wrapper passes `examMinutes` (CTAL-TAE 90,
  CT-SEC 120), optional +25%, pass mark `Math.ceil(total × 0.65)`
  (`src/components/QuizPage.jsx:7,41,67`, `ui.jsx:9`).
- Answer is correct only if the selected set equals `correct` exactly (`QuizPage.jsx:68-71`).
- Finish with unanswered questions shows a confirm bar (bottom sheet on phones) with
  "Go to first unanswered"; at 0:00 the exam finishes without it (`QuizPage.jsx:82-96`).
  Timer turns red under 300 s.
- On finish the score goes to the wrapper's `record` (`QuizPage.jsx:86`); the result
  page shows a new-best notice when it beat the stored best.
- Navigator: a segment bar plus a "Q4 / 40" button opening the numbered grid; the
  review uses the same bar coloured right/wrong.
- Track rules come in as props: `examSets` (CTFL: Sample Exams A–D; CT-QDO: `mainQuestions`
  only; others: all questions), `practicePools`, and no `record` = practice only.
- CT-AI v1 (`ctai-quiz.jsx`): practice only — no timer and no score recording.

## Pages outside the standard set

`ctai.jsx`, `ctai-quiz.jsx`, `ctaiv1-learn.jsx`, `ctaiv1-glossary.jsx` are the CT-AI v1
legacy pages (no v1 guide page). Any new `.jsx` not in [tracks](tracks.md) or the learning area shows up in
the dashboard's "More pages" list. The learning-area pages are described in [learning](learning.md).
