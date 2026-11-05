---
title: Theme
sources:
  - src/styles.css
  - src/lib/theme.js
  - index.html
pinned_commit: 70b2e7a
updated: 2026-10-25
confidence: observed
---

# Theme

The "Chalkboard" palette from the design blueprint, as CSS variables in
`src/styles.css`, with all component classes (buttons, chips, meters, cards, shell,
exam) in the same file. Pages use class names, not inline colour values — see
[architecture](architecture.md#styling).

## Light and dark

- Light tokens on `:root` (`src/styles.css:4`); dark under
  `prefers-color-scheme: dark` unless `data-theme="light"` (`styles.css:16-17`), or
  forced with `:root[data-theme="dark"]` (`styles.css:27`).
- The top-bar toggle calls `setThemeChoice` (`src/lib/theme.js:33-40`), which sets
  `data-theme` on `<html>` and remembers it in `localStorage["theme"]`; an inline script in
  `index.html` applies it before first paint.

## Tokens

`--app`, `--surface`, `--surface-2`, `--raised`, `--line`, `--text`, `--muted`,
`--accent`, `--accent-fg`, `--accent-soft`, `--sel`, `--sel-fg`, `--ok`, `--warn`,
`--danger`, `--chip`, plus shadows, scrim, fonts (Lexend, Spline Sans Mono) and radii.
`T` in `src/lib/theme.js:5-19` maps the same names to `var(--…)` for inline styles.

## Rules

- Don't hard-code colours in components; use the classes or `T`.
- Track colours (`accent` in [tracks](tracks.md)) appear only as small dots.
- Breakpoints: 900px (step tabs become the icon strip, grids collapse) and 640px
  (phone layout, exam grid/confirm become bottom sheets) — `styles.css:291,304`.
