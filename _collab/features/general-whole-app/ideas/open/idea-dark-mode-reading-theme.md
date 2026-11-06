# Dark Mode & Reading Comfort Settings

## Summary

A theme switch (Light beige / Dark / follow system) plus a text-size control (S / M / L) stored per browser. Long Learn chapters (CTFL ch. 4–5 are 180–250 lines of prose each) are hard to read at night against a bright beige page.

## Why it fits

`src/lib/theme.js` already centralises the neutral palette into tokens (`T.pageBg`, `T.ink`, `T.border`…) after the colour-consistency tasks, so dark mode is mostly a second token set. However, many colours are still inline hex in the pages (callout greens/ambers, `white` cards, chapter colours).

## Scope

- Move `T` to CSS custom properties and set them on `:root[data-theme]`
- Replace the inline `white` / callout hexes with tokens
- Settings popover in the breadcrumb bar and on the hub
- Respect `prefers-color-scheme` by default; text size scales the base `fontSize`s

## Risks & unknowns

- Every page uses inline styles with literal px sizes, so text scaling may need `rem` conversion across all pages
- Chapter accent colours (e.g. `#7C3AED`) must keep readable contrast on a dark background

## Open Questions

- [ ] Is dark mode wanted, or only the text-size / reading-width controls?
                                  > YOUR ANSWER:

## Status

OPEN
