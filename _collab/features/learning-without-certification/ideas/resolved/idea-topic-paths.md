# Topic Paths Across Tracks

## Summary

Curated paths such as "Get started with performance testing", "Security testing basics" or "Test automation from zero" that string together sections from several tracks in a sensible order. People learn a subject, not a certificate.

## Why it fits

13 tracks already hold the content; a path is an ordered list of (track, section) references, reusing the Learn reader.

## Scope

- `src/data/paths.js` with ordered section references and short connective notes
- Path page with progress (reusing studied state)
- Paths listed on the dashboard next to tracks

## Risks & unknowns

- Sections written for one syllabus may assume that track's earlier chapters

## Open Questions

- [x] Which 3–5 paths should come first?
                                  > YOUR ANSWER: (default picked by Claude, since you asked to build everything — change it and I'll adjust) Start with 6: Testing fundamentals, Test design techniques, Test automation, Performance testing, Security testing, Usability & accessibility.
- [x] Should paths reuse track progress (a section studied once counts everywhere)?
                                  > YOUR ANSWER: (default picked by Claude, since you asked to build everything — change it and I'll adjust) Yes. A path step marks the section studied in its track, so progress counts everywhere.

## Status

RESOLVED
