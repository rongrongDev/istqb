---
title: Tracks Registry
sources:
  - src/lib/tracks.js
pinned_commit: 70b2e7a
updated: 2026-10-25
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

Source: `src/lib/tracks.js:15-143`. The step order is always Learn → Chapter Summaries →
Exam Insights → Glossary → Quiz; see [pages](pages.md) for what each one does.

## Entry shape

Each entry has: `id`, `shortName`, `title`, `org`, `level`, `badge`, `blurb`,
`gradient`, `accent`, `prerequisite`, `steps[]` (`{path, step, title, desc}`),
`progress` (`{getStudied, getBestExam}` from [progress](progress.md)), `loadData`
(dynamic import of `src/data/<track>/index.js`), `loadGlossary` (used by the ⌘K lookup),
and `exam` (`{questions, points, note}`, shown on the track page; the pass mark is derived
as 65% of `points`) — e.g. `src/lib/tracks.js:16-50`. CT-AI v2.0 is 44 points, CT-QDO and
CT-SS 45, the rest 40.

The header comment mentions `comingSoon: true` for a disabled hub card
(`src/lib/tracks.js:4-5`), but no code reads that flag (inferred: it was
planned and not implemented).

## Legacy block (CT-AI v1.0)

Only `ctai` has `legacy`: a label, a note, four v1 pages (`ctaiv1-learn`, `ctai`,
`ctaiv1-glossary`, `ctai-quiz`, each with a `short` tab label), and its own `loadData` /
`loadGlossary` — `src/lib/tracks.js:34-45`. v1 progress is exposed separately as
`legacyProgress` (`src/lib/tracks.js:146`). Note the v1 pages use the
older file names `ctai.jsx` / `ctai-quiz.jsx`.

## Helpers

- `getTrack(id)` — `src/lib/tracks.js:148-150`.
- `findPage(path)` → `{track, title, step?, next?, legacy?}` — `src/lib/tracks.js:154-167`; the shell uses it to pick the track pill and active tab.
- `registeredPaths()` — set of all step + legacy paths; the dashboard lists the rest under
  "More pages" — `src/lib/tracks.js:170-177`.

## Adding a track

1. Add `src/data/<track>/` following [content-data](content-data.md).
2. Add page files `src/pages/<track>{,-learn,-guide,-glossary,-quiz}.jsx` — thin wrappers
   around the shared components; copy an existing track's set (see [pages](pages.md)).
3. Add a progress key + exports in `src/lib/progress.js` ([progress](progress.md)).
4. Add the entry to `tracks` here, including `loadGlossary` and `exam`.
