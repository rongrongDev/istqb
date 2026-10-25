---
title: Architecture
sources:
  - package.json
  - vite.config.js
  - index.html
  - src/main.jsx
  - src/App.jsx
  - src/components/Shell.jsx
  - src/components/TrackPage.jsx
  - src/components/ui.jsx
  - public/
pinned_commit: 70b2e7a
updated: 2026-10-25
confidence: observed
---

# Architecture

A static, client-only React single-page app that teaches ISTQB/ASTQB certification
syllabi. No backend, no API calls, no build-time content pipeline: all study content
is hand-authored JS modules bundled into the app ([content-data](content-data.md)),
and learner state lives in `localStorage` ([progress](progress.md)). The UI follows
the "Exam Room" design (`design/site-revamp-blueprint.html`, see its As built section).

## Stack

- React 19, React Router 7, Vite 8 with `@vitejs/plugin-react`, and `lucide-react`
  for icons — `package.json`.
- Scripts: `dev`, `build`, `preview` (plain Vite) — `package.json`.
- No test framework, linter, or CI configured (none found in `package.json` or the repo tree).
- Vite dev server allows the host `istqb.rongrong.dev` besides localhost — `vite.config.js:7`.
  How/where that host is deployed is **not determined**.

## Boot and routing

1. `index.html` loads the Google Fonts (Lexend, Spline Sans Mono), the favicons in
   `public/`, and applies a remembered theme before first paint ([theme](theme.md)).
2. `src/main.jsx` imports `src/styles.css` and wraps `<App>` in `StrictMode` + `BrowserRouter`.
3. `src/App.jsx:12-17` globs `./pages/*.jsx`; **every file in `src/pages/` becomes a
   lazy route at `/<filename>`** — no route table to edit.
4. `src/App.jsx:205-215` declares three route kinds:
   - `/` → `Home`, the dashboard (`src/App.jsx:126-203`), inside `Shell`.
   - `/track/:id` → `TrackPage` (`src/components/TrackPage.jsx`), which renders its own `Shell`.
   - `/<page>` → the page component inside `<Shell path={page}>`.

## Shell

`src/components/Shell.jsx:107` is the chrome around every screen: logo, track
switcher (5 tracks, CT-AI v1.0 legacy, Dashboard), step tabs built from
`findPage(path)` and [tracks](tracks.md), a theme toggle, the ⌘K / Ctrl+K lookup
(`Shell.jsx:19-104`, searches glossary terms and section titles of the current track,
or every track on the dashboard), an icon tab strip under 900px, and a footer saying the
site is an unofficial study aid. The full-screen exam covers it with a fixed overlay
([pages](pages.md#quiz-rules)).

## Dashboard

`Home` derives everything from studied ids and chapter order — no extra storage
(`src/App.jsx:30-41`): a next-up card for the started track with the most studied
sections, a readiness card (best mock vs the 65% line, chapter with most unstudied
sections), first-visit card when nothing is started, one tile per track, a warning
banner when `localStorage` throws (`src/App.jsx:19-27`), and a "More pages" list for
page files not registered in any track. It lazy-loads every track's chapters via
`track.loadData()`.

## Track page

`TrackPage.jsx` shows the track header, an exam-facts card from `track.exam`, stats
(sections studied, best mock, points to pass), the 5-step stepper, and for CT-AI the
legacy v1.0 pages.

## Styling

Global classes in `src/styles.css` (tokens + components) — see [theme](theme.md). Small
shared pieces (logo, K-level chip, meter, hint bar, `pct`, `passMark`) live in
`src/components/ui.jsx`.

## Open questions

- Deployment target and process for `istqb.rongrong.dev` — not determined.
- Whether the CT-AI v1 quiz is meant to record a best score (see [progress](progress.md#known-gaps)).
