# Diagrams & Visual Blocks in Learn Content

## Summary

Add new Learn block types (`diagram`, `steps`, `compare`) and draw the key visual concepts the syllabi rely on: V-model, test pyramid, testing quadrants, state-transition diagrams, the DevOps loop, confusion matrices. They render as inline SVG that follows the theme.

## Why it fits

The Learn renderer (`Block` in each `*-learn.jsx`) supports `p`, `list`, `table`, `example` and `note`, all text. Many K2/K3 objectives are inherently visual (CTFL 4.2.4 state transition testing, CT-AI confusion matrix, QDO pipeline), and the official PDFs (kept privately in `trainings/`) use figures you can't see here.

## Scope

- `diagram` block type pointing to small SVG React components in `src/components/diagrams/`
- A first set of about 8 diagrams for the most-tested visual concepts
- `compare` block: side-by-side two-column contrast (e.g. confirmation vs regression)

## Risks & unknowns

- Drawing accurate diagrams is the bulk of the work; each must match the syllabus definitions
- Must not reproduce copyrighted figures one-to-one; draw original equivalents

## Open Questions

- [ ] Which tracks first: CTFL (most learners), or the track you're studying now?
                                  > YOUR ANSWER:

## Status

OPEN
