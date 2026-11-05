---
title: Theme
sources:
  - src/styles.css
  - src/lib/theme.js
  - index.html
pinned_commit: 47192d8
updated: 2026-11-05
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
  (phone layout, exam grid/confirm become bottom sheets) — `@media` blocks near the end of `styles.css`.
- The [learning](learning.md) pages add `.g2`, `.seg` (segmented control), `.callout.plain`
  ("In plain words"), `.codeb` (code/template block), `.term`/`.tip` (glossary tooltip — `position:
  fixed`, placed by `Blocks.jsx`, because `.boxc` clips overflow) and `.chip.lvl-*` level colours,
  all on the same tokens (`styles.css`, "Learn without an exam" block).
