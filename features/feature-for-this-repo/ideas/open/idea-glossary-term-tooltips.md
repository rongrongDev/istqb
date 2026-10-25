# Inline Glossary Term Tooltips

## Summary
Auto-link glossary terms wherever they appear in Learn content, chapter summaries, and quiz explanations: hovering (or tapping) "metamorphic testing" shows its exact syllabus definition in a tooltip/popover without leaving the page. Reinforces the exact wording the exam tests, in context.

## Why it fits
The glossary data (`src/data/ctaiv2/glossary.js`) is a clean term→definition map, and the Learn pages render long prose where those same 63 terms appear constantly. Today the user must context-switch to the glossary page and search manually.

## Scope
- A text-rendering helper that scans rendered strings for glossary terms (longest-match, case-insensitive, word-boundary) and wraps them in a tooltip trigger
- Tooltip shows term, definition, chapter refs, and a link to the glossary page
- Apply to Learn pages and quiz explanations first; summaries later
- Cap to first occurrence per paragraph to avoid link soup

## Risks & unknowns
- Matching is heuristic: terms like "Attack" or "Classification" appear in non-glossary senses; first-occurrence-only and word boundaries mitigate but won't be perfect.
- Performance: scanning large learn chapters for 63 terms needs a single-pass regex, not 63 passes.
- Mobile has no hover — needs tap-to-open, tap-outside-to-close.

## Open Questions
- [ ] Is a slightly imperfect auto-matcher acceptable, or would you rather hand-mark terms in the content data (more accurate, much more editing work)?
  > YOUR ANSWER:

## Status
OPEN
