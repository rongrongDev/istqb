# Shuffled Mock Exams

## Summary

An option on the quiz check-in to shuffle question order and answer-option order for practice and mock exams. Repeat takers stop remembering "the answer to Q12 is c" and have to read the question again.

## Why it fits

`QuizPage` always serves questions in sample-exam order with options a–d fixed. Several tracks only have one sample set, so learners retake the same 40 questions many times.

## Scope

- Check-in toggles: shuffle questions, shuffle options
- Remap letters consistently in the question, the review and the explanation's "CORRECT (b)" labels
- Keep "Exam A · Q12" source labels so learners can still find the original

## Risks & unknowns

- Explanations reference letters ("WRONG (a)") and some options say "Both a and b"; those can't be shuffled safely
- Matrix-style options (e.g. "i, iii and iv") break if reordered

## Open Questions

- [ ] Shuffle options too, or only question order (much simpler and safe for every question)?
                                  > YOUR ANSWER:
- [ ] Shuffle by default in exam simulation, or always opt-in?
                                  > YOUR ANSWER:

## Status

OPEN
