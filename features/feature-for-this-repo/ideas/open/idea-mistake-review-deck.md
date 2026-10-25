# Mistake Review Deck

## Summary
Track every quiz/mock question the user answers incorrectly and offer a "Review my mistakes" mode that re-asks only those questions until they're answered correctly (e.g. twice in a row). This is the highest-leverage revision activity in the final days before an exam.

## Why it fits
The quiz page already knows per-question correctness at answer time; it just throws that information away — `src/lib/progress.js` only stores the best total exam score. Adding a per-question answer history (`{ qid: { wrong: n, right: n, lastResult } }`) extends the existing localStorage pattern naturally.

## Scope
- Record per-question outcomes in both practice and mock modes
- New "Review mistakes (N)" entry point on the quiz start screen, shown only when N > 0
- A question graduates out of the deck after being answered correctly (threshold configurable in code)
- Show lifetime stats per question (e.g. "you've missed this 3 times")

## Risks & unknowns
- Interaction with mock exams: should a wrong answer under time pressure count the same as a wrong practice answer?
- With only 40 questions, users may memorize answers by position — mitigated by shuffling option order in review mode.

## Open Questions
- [ ] Should mock-exam mistakes feed the same review deck as practice mistakes, or be tracked separately?
  > YOUR ANSWER:
- [ ] How does a question leave the deck: one correct answer, or two consecutive correct answers?
  > YOUR ANSWER:

## Status
OPEN
