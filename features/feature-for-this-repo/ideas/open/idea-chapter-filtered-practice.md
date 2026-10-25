# Chapter-Filtered Quiz Practice

## Summary
Let the user practice quiz questions filtered by chapter (and optionally by K-level or learning objective) instead of always running through all 40 in order. Someone who just finished studying Chapter 5 can immediately drill only Chapter 5 questions.

## Why it fits
Every question in `src/data/ctaiv2/quiz.js` already carries `chapter`, `lo`, and `level` metadata — the filter data exists but is unused. The quiz page (`ctaiv2-quiz.jsx`) currently offers only "all questions" practice or the timed mock. This closes the loop between the Learn step and the Quiz step of the study path.

## Scope
- Chapter picker (multi-select) on the quiz start screen for practice mode
- Optional secondary filters: K-level (K1–K4), learning objective
- Show per-chapter question counts so users know how much material each filter covers
- Mock exam mode stays untouched (always the full official 40)

## Risks & unknowns
- Some chapters have few questions (the 40 official questions are unevenly distributed), so a single-chapter drill can be very short — fine, but worth surfacing the count upfront.

## Open Questions
- [ ] Is filtering by chapter alone enough, or do you also want K-level / learning-objective filters in the first version?
  > YOUR ANSWER:

## Status
OPEN
