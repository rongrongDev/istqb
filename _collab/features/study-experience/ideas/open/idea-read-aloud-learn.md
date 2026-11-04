# Listen Mode (Read-Aloud Learn Content)

## Summary

A play/pause control on Learn chapters that reads the content aloud with the browser's built-in speech synthesis, highlighting the current block. You can study while commuting or walking, or listen while reading.

## Why it fits

Learn content is structured text blocks (`p`, `list`, `note`, `example`), which suit sequential narration well. The Web Speech API is free, offline and dependency-free, which fits the static, no-backend app.

## Scope

- Play / pause / skip-to-next-section controls in a sticky bar
- Speed control; highlight and auto-scroll to the block being read
- Tables read row by row, or skipped with an announcement

## Risks & unknowns

- Voice quality varies a lot by OS/browser; acronyms (CTFL, BVA, kMNC) need pronunciation hints
- Background playback on mobile Safari is limited

## Open Questions

- [ ] Browser speech only (free, varies by device), or pre-generated audio files (consistent quality, large assets, a TTS service)?
                                  > YOUR ANSWER:

## Status

OPEN
