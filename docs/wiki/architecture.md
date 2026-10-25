---
title: Architecture
sources:
  - package.json
  - vite.config.js
  - index.html
  - src/main.jsx
  - src/App.jsx
  - src/components/PageChrome.jsx
  - src/components/TrackPage.jsx
pinned_commit: 7e14a2d
updated: 2026-10-25
confidence: observed
---

# Architecture

A static, client-only React single-page app that teaches ISTQB/ASTQB certification
syllabi. No backend, no API calls, no build-time content pipeline: all study content
is hand-authored JS modules bundled into the app ([content-data](content-data.md)),
and learner state lives in `localStorage` ([progress](progress.md)).

## Stack

- React 19, React Router 7, Vite 8 with `@vitejs/plugin-react` — `package.json`.
- Scripts: `dev`, `build`, `preview` (plain Vite) — `package.json:6-10`.
- No test framework, linter, or CI configured (none found in `package.json` or the repo tree).
- Vite dev server allows the host `istqb.rongrong.dev` besides localhost — `vite.config.js:7`.
  How/where that host is deployed is **not determined**.

## Boot and routing

1. `index.html` mounts `#root` and loads `src/main.jsx`.
2. `src/main.jsx:6-12` wraps `<App>` in `StrictMode` + `BrowserRouter`.
3. `src/App.jsx:11-16` globs `./pages/*.jsx`; **every file in `src/pages/` becomes a
   lazy route at `/<filename>`** — no route table to edit.
4. `src/App.jsx:113-123` declares three route kinds:
   - `/` → `Home` (the hub, `src/App.jsx:18-101`), one card per entry in [tracks](tracks.md),
     plus a "MORE" list for page files not registered in any track (`src/App.jsx:19-20,78-99`).
   - `/track/:id` → `TrackPage` (`src/components/TrackPage.jsx`): study path, sections-studied
     count, best mock score, legacy pages. It lazy-loads the track's chapters via
     `track.loadData()` to count sections (`TrackPage.jsx:15-20,33-36`).
   - `/<page>` → the page component wrapped in `PageChrome`.

## PageChrome

`src/components/PageChrome.jsx:18-66` renders a breadcrumb bar (Hub › Track › Step N)
above every page and a "Next (step N+1)" or "Back to track" link, using
`findPage(path)` from [tracks](tracks.md). Pages themselves know nothing about
navigation — see [pages](pages.md).

## Styling

Inline `style={{…}}` objects everywhere; no CSS files or CSS-in-JS library. Neutral
colours come from the shared token object — see [theme](theme.md).

## Open questions

- Deployment target and process for `istqb.rongrong.dev` — not determined.
- Whether the CT-AI v1 quiz is meant to record a best score (see [progress](progress.md#known-gaps)).
