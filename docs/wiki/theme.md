---
title: Theme
sources:
  - src/lib/theme.js
pinned_commit: 7e14a2d
updated: 2026-10-25
confidence: observed
---

# Theme

`src/lib/theme.js` exports `T`, the shared neutral palette: beige surfaces and a dark
grey text scale (`src/lib/theme.js:6-24`). Every page imports it
(`import { T } from "../lib/theme.js"`), and styles are inline objects — see
[architecture](architecture.md#styling).

| Token | Use |
|---|---|
| `pageBg`, `pageGradient` | page background (flat / hub gradient) |
| `panel`, `surface`, `track` | inner boxes, chips, progress-bar tracks |
| `border`, `borderStrong`, `hairline` | card borders, inputs, separators |
| `disabled` | disabled text/icons |
| `ink`, `inkSoft`, `body`, `muted`, `faint` | text, strongest → faintest |

## Rules

- Don't hard-code neutral greys/beiges; use `T` (`src/lib/theme.js:1-2`).
- **Not** in `T` on purpose: track accents and gradients (in [tracks](tracks.md) and
  per-chapter `color`/`bg` in [content-data](content-data.md)), and the pass/fail colours
  `#059669` / `#DC2626` (`src/lib/theme.js:3-4`), which are repeated as literals in
  pages.
- No dark mode exists.
