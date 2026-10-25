# ISTQB Learning Hub — Wiki

Compiled notes on how this repo works. Start with Architecture. Maintenance rules: [SCHEMA](SCHEMA.md). History: [log](log.md).

## System
- [Architecture](architecture.md) — static React/Vite SPA, auto-routing from `src/pages/`, Shell (track switcher, tabs, ⌘K), dashboard, track page; open questions. observed, pinned 70b2e7a
- [Theme](theme.md) — Chalkboard light/dark CSS variables in `src/styles.css`, the theme toggle, breakpoints. observed, pinned 70b2e7a

## Tracks and content
- [Tracks Registry](tracks.md) — `src/lib/tracks.js`: the 5 tracks, entry shape, CT-AI v1 legacy block, how to add a track. observed, pinned 70b2e7a
- [Content Data](content-data.md) — `src/data/<track>/` file shapes: chapters, learn blocks, attachLearn, quiz and glossary. observed, pinned 7e14a2d
- [Study Pages](pages.md) — thin per-track wrappers over 4 shared components, quiz/exam rules. observed, pinned 70b2e7a

## State
- [Learner Progress](progress.md) — localStorage keys per track, best-score logic, known gaps. observed, pinned 70b2e7a
