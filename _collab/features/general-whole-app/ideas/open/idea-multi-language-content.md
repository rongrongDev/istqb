# Multi-Language Interface & Content

## Summary

Support a second language for the interface first (navigation, buttons, labels) and optionally for study content, starting with whichever language the learner actually sits the exam in. ISTQB publishes syllabi and exams in many languages, and exact terminology in the exam language matters.

## Why it fits

All UI strings are hard-coded English inside the 30 page files, and content lives in per-chapter JS modules, so a parallel `src/data/<track>/<lang>/` tree would slot into the existing `loadData()` pattern. The glossary's “exams test exact wording” premise depends on language.

## Scope

- i18n layer for UI strings (a small dictionary, no heavy library)
- Language switcher stored per browser
- Optional: bilingual glossary (English term + translated term + definition) as the cheapest high-value content step

## Risks & unknowns

- Translating full learn content is a very large authoring job; only the official glossary translations are “authoritative”
- Hard to do cleanly until the shared templates exist

## Open Questions

- [ ] Which language(s), if any? (e.g. Simplified Chinese, Bahasa Malaysia)
                                  > YOUR ANSWER:

- [ ] Interface only, a bilingual glossary, or full study content?
                                  > YOUR ANSWER:

## Status

OPEN
