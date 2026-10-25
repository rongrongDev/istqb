---
title: Tracks Registry
sources:
  - src/lib/tracks.js
pinned_commit: 7e14a2d
updated: 2026-10-25
confidence: observed
---

# Tracks registry

`src/lib/tracks.js` is the single source of truth for which certifications exist and
in what order their pages are studied. The hub, track landing pages and breadcrumbs
([architecture](architecture.md)) all read it (`src/lib/tracks.js:1-5`).

## Current tracks

| id | shortName | org | Pages (step 1→5) | Data dir |
|---|---|---|---|---|
| `ctai` | CT-AI v2.0 | ISTQB | `ctaiv2-learn`, `ctaiv2`, `ctaiv2-guide`, `ctaiv2-glossary`, `ctaiv2-quiz` | `src/data/ctaiv2/` |
| `ctfl` | CTFL v4.0 | ISTQB | `ctflv4-*` | `src/data/ctflv4/` |
| `ctqdo` | CT-QDO v1.0 | ISTQB | `ctqdo-*` | `src/data/ctqdo/` |
| `ctmat` | CT-MAT 2019 | ISTQB | `ctmat-*` | `src/data/ctmat/` |
| `softskills` | Soft Skills CT-SS | ASTQB | `softskills-*` | `src/data/softskills/` |

Source: `src/lib/tracks.js:15-131`. The step order is always Learn → Chapter Summaries →
Exam Insights → Glossary → Quiz; see [pages](pages.md) for what each one does.

## Entry shape

Each entry has: `id`, `shortName`, `title`, `org`, `level`, `badge`, `blurb`,
`gradient`, `accent`, `prerequisite`, `steps[]` (`{path, step, title, desc}`),
`progress` (`{getStudied, getBestExam}` from [progress](progress.md)), and
`loadData` (dynamic import of the track's `src/data/<track>/index.js`) — e.g.
`src/lib/tracks.js:16-46`.

The header comment mentions `comingSoon: true` for a disabled hub card
(`src/lib/tracks.js:4-5`), but `src/App.jsx` does not read that flag (inferred: it was
planned and not implemented).

## Legacy block (CT-AI v1.0)

Only `ctai` has `legacy`: a label, a note, and four v1 pages (`ctaiv1-learn`, `ctai`,
`ctaiv1-glossary`, `ctai-quiz`) — `src/lib/tracks.js:34-43`. v1 progress is exposed
separately as `legacyProgress` (`src/lib/tracks.js:134`). Note the v1 pages use the
older file names `ctai.jsx` / `ctai-quiz.jsx`.

## Helpers

- `getTrack(id)` — `src/lib/tracks.js:136-138`.
- `findPage(path)` → `{track, title, step?, next?, legacy?}` — `src/lib/tracks.js:142-155`.
- `registeredPaths()` — set of all step + legacy paths; the hub lists the rest under
  "MORE" — `src/lib/tracks.js:158-165`.

## Adding a track

1. Add `src/data/<track>/` following [content-data](content-data.md).
2. Add page files `src/pages/<track>{,-learn,-guide,-glossary,-quiz}.jsx` (copy an
   existing track's set; they are near-identical, see [pages](pages.md)).
3. Add a progress key + exports in `src/lib/progress.js` ([progress](progress.md)).
4. Add the entry to `tracks` here.
