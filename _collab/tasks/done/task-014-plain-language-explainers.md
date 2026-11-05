# Task 014: Plain-language explainers and jargon tooltips

## Description

Glossary terms in Learn text become tooltips showing the definition (hover or tap), and path steps show an "In plain words" box.

## Acceptance Criteria

- [x] Current track's glossary auto-linked in Learn paragraphs and list items, first occurrence per block, with a stop-list (terms under 4 letters and very common words such as test, defect, risk are skipped)
- [x] Tooltip opens on hover, focus and tap, closes on Escape/outside tap
- [x] "In plain words" box in the path reader from the step note
- [x] `npm run build` passes; the new screens checked in a browser at desktop and phone width, light and dark — no console errors or horizontal overflow; `npm run check:learning` validates every section reference
- [x] `_collab/TASKS.md` updated when finished

## Depends on

- task-010-topic-paths.md

## Source

Resolved from `_collab/features/learning-without-certification/ideas/resolved/idea-plain-language-explainers.md`

## Status

DONE
