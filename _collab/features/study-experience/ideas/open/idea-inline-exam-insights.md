# Exam Traps Shown Inside Learn Sections

## Summary

Show each section's “exam insights” (known traps and keys from the official sample exams) as a callout right inside the Learn section, so you meet the trap while you're learning the concept rather than in a separate Exam Insights pass.

## Why it fits

Chapter data already has `examInsights` arrays per section (e.g. 2.1.2: “Asked in ALL FOUR exams… memorize the four practices”). Only the guide page renders them; the Learn page ignores them even though it has the same section objects in hand.

## Scope

- New “⚠️ Exam trap” callout style in the Learn block renderer, collapsed by default to avoid spoilers
- Count badge in the section header (“2 traps”)
- Rethink the step order in `tracks.js` if Learn now carries the insights (does Exam Insights stay a separate step?)

## Risks & unknowns

- The insights quote sample-exam question numbers (“B-Q9 KEY”), which may spoil the mock if read first

## Open Questions

- [ ] Collapsed by default with a “reveal” (protects the mock), or always visible?
                                  > YOUR ANSWER:

- [ ] Once Learn shows the traps, should the separate Exam Insights step stay, merge with Summaries, or go?
                                  > YOUR ANSWER:

## Status

OPEN
