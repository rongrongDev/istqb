# Custom Mock Exam Builder

## Summary
A configurable exam mode alongside the fixed official mock: choose question count, chapters, and time limit, with questions randomly sampled and option order shuffled. Prevents the "I've memorized question 7's answer is C" effect of re-running the same 40 questions in the same order.

## Why it fits
The mock exam infrastructure (timer, scoring vs the 65% pass mark, `recordExamScore`) already exists in `ctaiv2-quiz.jsx`; this reuses it with a generated question set instead of the fixed one. Question metadata (`chapter`, `points`, `multi`) supports proportional sampling.

## Scope
- "Custom exam" setup screen: question count slider, chapter multi-select, time limit (default proportional: 1.5 min/question)
- Random sampling, optionally weighted to match the official per-chapter distribution
- Option order shuffling (answer letters remapped correctly in scoring and explanations)
- Custom exam scores tracked separately from the official mock's best score

## Risks & unknowns
- Only 40 questions exist, so a "random 40-question exam" is just a shuffle; the value is in smaller drills (10–20 questions) and shuffling.
- Option shuffling must not corrupt explanations that reference option letters ("WRONG (b): ...") — explanations are keyed by original option id, so display must map ids, not letters.

## Open Questions
- [ ] Should option-order shuffling also apply to the regular practice and official mock modes, or only custom exams?
  > YOUR ANSWER:
- [ ] Is this worth having as a separate mode, given Chapter-Filtered Practice covers the "drill a subset" need without a timer? (If you want both, they should share the filtering UI.)
  > YOUR ANSWER:

## Status
OPEN
