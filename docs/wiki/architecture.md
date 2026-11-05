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
  - scripts/check-learning.mjs
pinned_commit: 47192d8
updated: 2026-11-05
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
- Scripts: `dev`, `build`, `preview` (plain Vite), and `check:learning`, a Node script that
  validates every section reference in `src/data/learning/` (`scripts/check-learning.mjs`) — `package.json`.
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
switcher (13 tracks, CT-AI v1.0 legacy, "Learn without an exam", Dashboard), step tabs built from
`findPage(path)` and [tracks](tracks.md), a theme toggle, the ⌘K / Ctrl+K lookup
(`Shell.jsx:19-104`, searches glossary terms and section titles of the current track,
or every track on the dashboard), an icon tab strip under 900px, and a footer saying the
site is an unofficial study aid. On the [learning](learning.md) pages the tabs come from
`src/lib/learnNav.js` instead (`Shell.jsx:128-139`). A mode button next to the theme toggle
switches Exam/Learning mode (`Shell.jsx:143,182`); in Learning mode the Insights tab is
hidden and Quiz is labelled Practice (`Shell.jsx:133-137`). The full-screen exam covers it with a fixed overlay
([pages](pages.md#quiz-rules)).

## Dashboard

`Home` derives everything from studied ids and chapter order — no extra storage
(`src/App.jsx:30-41`): a next-up card for the started track with the most studied
sections, a readiness card (best mock vs the 65% line, chapter with most unstudied
sections), first-visit card when nothing is started, one tile per track, a warning
banner when `localStorage` throws (`src/App.jsx:19-27`), and a "More pages" list for
page files not registered in any track or the learning area (`src/App.jsx:152`). It lazy-loads every track's chapters via
`track.loadData()`. A "Learn without an exam" section shows top topic paths and the concept of
the day (`src/App.jsx:130-147`); in Learning mode it moves above the tracks, the readiness card
is replaced and tiles drop the mock-exam row ([learning](learning.md)).

## Track page

`TrackPage.jsx` shows the track header, an exam-facts card from `track.exam` (duration
`exam.minutes`, default 60 — `TrackPage.jsx:66`), stats (sections studied, best mock, points
to pass), the 5-step stepper, and for CT-AI the legacy v1.0 pages. Learning mode hides the
exam card, mock and pass stats and the Insights step (`TrackPage.jsx:63-102`).

## Styling

Global classes in `src/styles.css` (tokens + components) — see [theme](theme.md). Small
shared pieces (logo, K-level chip, meter, hint bar, `pct`, `passMark`) live in
`src/components/ui.jsx`; the K-level chip renders nothing in Learning mode (`ui.jsx`, `KChip`).

## Open questions

- Deployment target and process for `istqb.rongrong.dev` — not determined.
- Whether the CT-AI v1 quiz is meant to record a best score (see [progress](progress.md#known-gaps)).
