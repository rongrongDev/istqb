---
title: Tracks Registry
sources:
  - src/lib/tracks.js
pinned_commit: 47192d8
updated: 2026-11-05
confidence: observed
---

# Tracks registry

`src/lib/tracks.js` is the single source of truth for which certifications exist and
in what order their pages are studied. The dashboard, track landing pages and the site shell
([architecture](architecture.md)) all read it (`src/lib/tracks.js:1-5`).

## Current tracks

| id | shortName | org | Pages (step 1→5) | Data dir |
|---|---|---|---|---|
| `ctai` | CT-AI v2.0 | ISTQB | `ctaiv2-learn`, `ctaiv2`, `ctaiv2-guide`, `ctaiv2-glossary`, `ctaiv2-quiz` | `src/data/ctaiv2/` |
| `ctfl` | CTFL v4.0 | ISTQB | `ctflv4-*` | `src/data/ctflv4/` |
| `ctqdo` | CT-QDO v1.0 | ISTQB | `ctqdo-*` | `src/data/ctqdo/` |
| `ctmat` | CT-MAT 2019 | ISTQB | `ctmat-*` | `src/data/ctmat/` |
| `softskills` | Soft Skills CT-SS | ASTQB | `softskills-*` | `src/data/softskills/` |
| `ctgenai` | CT-GenAI v1.1 | ISTQB | `ctgenai-*` | `src/data/ctgenai/` |
| `ctaltae` | CTAL-TAE v2.0 | ISTQB | `ctaltae-*` | `src/data/ctaltae/` |
| `cttas` | CT-TAS v1.0 | ISTQB | `cttas-*` | `src/data/cttas/` |
| `ctpt` | CT-PT 2018 | ISTQB | `ctpt-*` | `src/data/ctpt/` |
| `ctsec` | CT-SEC 2016 | ISTQB | `ctsec-*` | `src/data/ctsec/` |
| `ctft` | CT-FT v1.0 | ISTQB | `ctft-*` | `src/data/ctft/` |
| `ctact` | CT-AcT 2019 | ISTQB | `ctact-*` | `src/data/ctact/` |
| `ctut` | CT-UT 2018 | ISTQB | `ctut-*` | `src/data/ctut/` |

13 tracks. Source: `src/lib/tracks.js:50-363`. The step order is always Learn → Chapter Summaries →
Exam Insights → Glossary → Quiz; see [pages](pages.md) for what each one does.

## Entry shape

Each entry has: `id`, `shortName`, `title`, `org`, `level`, `badge`, `blurb`,
`gradient`, `accent`, `prerequisite`, `steps[]` (`{path, step, title, desc}`),
`progress` (`{getStudied, setStudied, getBestExam}` from [progress](progress.md); `setStudied` is used by the topic-path reader, [learning](learning.md)), `loadData`
(dynamic import of `src/data/<track>/index.js`), `loadGlossary` (used by the ⌘K lookup),
and `exam` (`{questions, points, minutes?, note}`, shown on the track page; the pass mark is derived
as 65% of `points`, and `minutes` defaults to 60 — CTAL-TAE sets 90, CT-SEC 120) — e.g. `src/lib/tracks.js:52-86`.
Points: CT-AI v2.0 44, CT-QDO, CT-SS and CT-FT 45, CT-GenAI 46, CT-TAS 49, CTAL-TAE 66, CT-SEC 80, the rest 40.

The header comment mentions `comingSoon: true` for a disabled hub card
(`src/lib/tracks.js:4-5`), but no code reads that flag (inferred: it was
planned and not implemented).

## Legacy block (CT-AI v1.0)

Only `ctai` has `legacy`: a label, a note, four v1 pages (`ctaiv1-learn`, `ctai`,
`ctaiv1-glossary`, `ctai-quiz`, each with a `short` tab label), and its own `loadData` /
`loadGlossary` — `src/lib/tracks.js:69-80`. v1 progress is exposed separately as
`legacyProgress` (`src/lib/tracks.js:365`). Note the v1 pages use the
older file names `ctai.jsx` / `ctai-quiz.jsx`.

## Helpers

- `getTrack(id)` — `src/lib/tracks.js:367-369`.
- `findPage(path)` → `{track, title, step?, next?, legacy?}` — `src/lib/tracks.js:373-386`; the shell uses it to pick the track pill and active tab.
- `registeredPaths()` — set of all step + legacy paths; the dashboard lists the rest under
  "More pages" (minus the [learning](learning.md) pages) — `src/lib/tracks.js:389-396`.

## Adding a track

1. Add `src/data/<track>/` following [content-data](content-data.md).
2. Add page files `src/pages/<track>{,-learn,-guide,-glossary,-quiz}.jsx` — thin wrappers
   around the shared components; copy an existing track's set (see [pages](pages.md)).
3. Add a progress key + exports in `src/lib/progress.js` ([progress](progress.md)).
4. Add the entry to `tracks` here, including `setStudied` in `progress`, `loadGlossary` and `exam`.
5. Optionally reference its sections from [learning](learning.md) paths; run `npm run check:learning`.
