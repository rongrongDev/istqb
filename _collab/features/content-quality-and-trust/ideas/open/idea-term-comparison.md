# Compare a Term Across Syllabi

## Summary

When a term appears in several glossaries (test oracle, risk, usability, test automation…), ⌘K lookup and the Glossary step offer "Compare definitions", showing each track's wording side by side. Learners sitting a second exam see where the new syllabus words a familiar term differently.

## Why it fits

⌘K lookup on the dashboard already searches every track's glossary via `loadGlossary`. This groups matching terms instead of listing them separately.

## Scope

- Normalise terms (case, plurals, "(abbrev)" suffixes) to group matches
- Side-by-side comparison panel in lookup and on GlossaryPage
- Badge on glossary entries that exist in other tracks

## Risks & unknowns

- Some definitions differ only in punctuation, which is noise
- Loading all 13 glossaries at once for the badge count

## Open Questions

- [ ] Should differences be highlighted (diff-style), or just shown side by side?
                                  > YOUR ANSWER:

## Status

OPEN
