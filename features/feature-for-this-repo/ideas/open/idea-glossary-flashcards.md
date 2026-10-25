# Glossary Flashcards with Spaced Repetition

## Summary
Turn the 63 glossary terms into a flashcard deck: term on the front, syllabus definition on the back, with "knew it / didn't know it" self-grading. A simple Leitner-box scheduler resurfaces terms you keep missing more often than ones you know cold.

## Why it fits
The glossary page already frames its value as "exams test exact wording", but today it's a static read-only list (`src/pages/ctaiv2-glossary.jsx`, 80 lines). The data (`src/data/ctaiv2/glossary.js`) already has term, definition, chapters, and syllabus ref — everything a card needs. Progress persistence infrastructure already exists in `src/lib/progress.js`.

## Scope
- New route/page (e.g. `ctaiv2-flashcards`) or a "Practice" mode toggle inside the existing glossary page
- Card flip UI with self-grade buttons (again / good)
- Leitner boxes (3–5 boxes) persisted in localStorage alongside existing progress
- Filter deck by chapter
- Home page card showing "N terms due for review"

## Risks & unknowns
- Reverse-direction cards (definition → term) double the deck but may better match how exams ask
- Overlap with a possible future "mistake review deck" for quiz questions — keep the scheduler generic?

## Open Questions
- [ ] Should cards also work definition→term (you see the definition, recall the term), or only term→definition?
  > YOUR ANSWER:
- [ ] Standalone page in the study path, or a mode inside the existing glossary page?
  > YOUR ANSWER:

## Status
OPEN
