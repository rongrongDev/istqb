# Real-Exam Review Experience for Mocks

## Summary
Bring the mock exam closer to the real ISTQB testing interface: flag questions for review during the exam, a question-palette overview (answered / unanswered / flagged) for jumping around, and a post-exam results screen with per-chapter score breakdown and direct review of each question with its explanation.

## Why it fits
The timed mock in `ctaiv2-quiz.jsx` exists but (at 433 lines for both modes) is a linear pass; real exam technique — skip hard questions, return later, budget time — can't be practiced on it. All explanation content for post-exam review already exists per question.

## Scope
- In-exam: flag toggle per question, palette grid showing status of all 40, free navigation between questions before submitting
- Explicit "Submit exam" with confirmation listing unanswered count
- Results screen: total score vs 65% pass mark (already computed), plus per-chapter breakdown and a filterable review list (all / wrong / flagged) showing each question with the user's answer vs correct answer and explanation
- Wrong answers feed the mistake deck if that feature lands ([[idea-mistake-review-deck]])

## Risks & unknowns
- This is a substantial rework of the exam-mode state machine in `ctaiv2-quiz.jsx`; worth extracting exam state into a hook or lib first.
- Palette + flagging on a 375px phone screen needs a compact layout (e.g. 8×5 dot grid).

## Open Questions
- [ ] Should the timer auto-submit at 60:00 (real exam behavior) or let the user overrun with a warning?
  > YOUR ANSWER:

## Status
OPEN
