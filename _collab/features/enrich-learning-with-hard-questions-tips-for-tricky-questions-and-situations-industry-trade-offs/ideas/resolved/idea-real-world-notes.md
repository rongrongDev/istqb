# "In the Real World" Notes on Sections

## Summary

Short callouts on Learn sections where everyday industry practice differs from the syllabus wording: lightweight test plans in agile teams, test levels blurred in CI pipelines, risk matrices replaced by quick triage, exit criteria as pipeline gates. Each says what the exam expects and what teams usually do.

## Why it fits

Practitioners notice the gap and lose trust if it's ignored; exam candidates need to know which answer the exam wants. Fits the existing callout blocks and SectionExtras.

## Scope

- `src/data/learning/realworld.js` keyed by (track, section)
- "In the real world" callout under the section
- Start with 20–30 high-traffic sections (CTFL chapters 1, 2, 5)

## Risks & unknowns

- Must not contradict what the exam requires — always state the exam answer first

## Open Questions

- [x] Show these in Exam mode too, or only in Learning mode?
                                  > YOUR ANSWER: (default picked by Claude, since you asked to build all of these — change it and I'll adjust) Both modes; the note always states what the exam expects first.

## Status

RESOLVED
