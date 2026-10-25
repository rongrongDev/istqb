# Personal Notes & Bookmarks

## Summary
Let the user attach a short personal note to any section, glossary term, or quiz question, and bookmark items into a "My notes" collection page. Captures the personal "I always confuse kMNC with neuron coverage" insights that generic content can't.

## Why it fits
Every content item already has a stable id (section ids like `5.1.4`, question ids, glossary terms), so notes are a simple id→text map in the existing localStorage store (`src/lib/progress.js`). The learn page already has per-section interaction (studied checkboxes), so a note affordance slots into an established pattern.

## Scope
- Note icon on learn sections, glossary entries, and quiz explanation views; opens a small textarea, saves on blur
- Bookmark (star) toggle on the same items
- A "My notes" page listing all notes and bookmarks grouped by chapter, each linking back to its source
- Notes included in progress export if that feature lands ([[idea-progress-export-import]])

## Risks & unknowns
- Free-text notes raise the stakes of localStorage loss — pairs strongly with export/import.
- UI restraint needed: note icons on every paragraph would clutter the reading experience; one per section/term/question is the right grain.

## Open Questions
- [ ] Are notes and bookmarks both wanted, or is one of them (which?) enough for a first version?
  > YOUR ANSWER:

## Status
OPEN
