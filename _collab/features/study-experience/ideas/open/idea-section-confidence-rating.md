# Self-Rated Confidence per Section

## Summary

Replace the binary “Mark studied” toggle with a three-level self-rating (😕 shaky / 🙂 OK / 💪 solid). The track page then lists your shaky sections as a “Revisit these” queue, so revision targets what you feel unsure about, not everything.

## Why it fits

The Learn page already has a per-section toggle writing to `studied` in the track's progress store; this extends the same control and data shape. It's separate from quiz-based readiness: it captures self-assessment, which matters for sections that have no sample questions.

## Scope

- 3-state control in the Learn section header (studied = any rating, for backward compatibility)
- Migrate existing `studied` arrays to “OK”
- “Revisit” list on `TrackPage` sorted by chapter, linking straight to each section
- Also usable from the Summaries page

## Risks & unknowns

- Extra friction compared with a single click; must stay one tap on mobile

## Open Questions

- [ ] Three levels, or keep it binary and add a separate “flag for review” toggle?
                                  > YOUR ANSWER:

## Status

OPEN
