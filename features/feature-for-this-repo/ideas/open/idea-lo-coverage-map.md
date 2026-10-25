# Learning Objective Coverage Map

## Summary
A syllabus-shaped checklist of every official learning objective (LO) with its K-level, showing which LOs the user has studied (via section mapping) and which they've been tested on (via quiz questions tagged with `lo`). The exam is built from LOs, so this is the ground-truth gap finder.

## Why it fits
Quiz questions already carry `lo` tags like `AI-1.1.1` and `level: 'K2'` (`src/data/ctaiv2/quiz.js`), and learn chapters have an `objectives` field attached in `src/data/ctaiv2/index.js`. This idea joins those two existing datasets into one view; the only new data work is a complete LO list per chapter if `objectives` isn't already exhaustive.

## Scope
- New page or a tab within Exam Insights: LO table grouped by chapter — id, K-level, one-line text, studied?, quizzed?, quiz result
- Highlight LOs with no quiz coverage at all (know what the sample exam *doesn't* test)
- Depends on per-question answer history for the "quiz result" column (shared with [[idea-mistake-review-deck]] / [[idea-readiness-dashboard]]); without it, show studied/quizzed only

## Risks & unknowns
- Need to verify the `objectives` data in learn chapters carries LO ids and K-levels, not just prose — if not, one-time data authoring from the syllabus PDF is required.
- Section→LO mapping may not be 1:1; the syllabus assigns LOs to sections, so mapping should follow the syllabus numbering.

## Open Questions
- [ ] Is this a standalone study-path step, or folded into the Exam Insights page as an extra view?
  > YOUR ANSWER:

## Status
OPEN
