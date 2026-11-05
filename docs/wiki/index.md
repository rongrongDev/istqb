# ISTQB Learning Hub — Wiki

Compiled notes on how this repo works. Start with Architecture. Maintenance rules: [SCHEMA](SCHEMA.md). History: [log](log.md).

## System
- [Architecture](architecture.md) — static React/Vite SPA, auto-routing from `src/pages/`, Shell (track switcher, tabs, ⌘K), dashboard, track page; open questions. observed, pinned 47192d8
- [Theme](theme.md) — Chalkboard light/dark CSS variables in `src/styles.css`, the theme toggle, breakpoints. observed, pinned 47192d8

## Tracks and content
- [Tracks Registry](tracks.md) — `src/lib/tracks.js`: the 13 tracks, entry shape, CT-AI v1 legacy block, how to add a track. observed, pinned 47192d8
- [Content Data](content-data.md) — `src/data/<track>/` file shapes: chapters, learn blocks, attachLearn, quiz and glossary. observed, pinned 47192d8
- [Study Pages](pages.md) — thin per-track wrappers over 4 shared components, glossary tooltips, quiz/exam rules. observed, pinned aa5da0b

## Learning without an exam
- [Learn Without an Exam](learning.md) — `/explore` area: topic and role paths, learning mode, levels, exercises, toolbox, templates, case studies, self-check, learning record, exam playbook and traps, worked solutions, pairs, situations, trade-offs, anti-patterns, interview prep, capstones; `src/data/learning/` and `npm run check:learning`. observed, pinned aa5da0b

## State
- [Learner Progress](progress.md) — localStorage keys per track, best-score logic, known gaps. observed, pinned aa5da0b
