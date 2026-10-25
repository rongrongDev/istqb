# ISTQB Learning Hub — Wiki

Compiled notes on how this repo works. Start with Architecture. Maintenance rules: [SCHEMA](SCHEMA.md). History: [log](log.md).

## System
- [Architecture](architecture.md) — static React/Vite SPA, auto-routing from `src/pages/`, hub, track pages, PageChrome; open questions. observed, pinned 7e14a2d
- [Theme](theme.md) — shared beige/dark-grey `T` tokens and what's deliberately excluded. observed, pinned 7e14a2d

## Tracks and content
- [Tracks Registry](tracks.md) — `src/lib/tracks.js`: the 5 tracks, entry shape, CT-AI v1 legacy block, how to add a track. observed, pinned 7e14a2d
- [Content Data](content-data.md) — `src/data/<track>/` file shapes: chapters, learn blocks, attachLearn, quiz and glossary. observed, pinned 7e14a2d
- [Study Pages](pages.md) — the five per-track page files, quiz/exam rules, per-track differences. observed, pinned 7e14a2d

## State
- [Learner Progress](progress.md) — localStorage keys per track, best-score logic, known gaps. observed, pinned 7e14a2d
