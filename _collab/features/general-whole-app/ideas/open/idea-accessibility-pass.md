# Accessibility Pass (Keyboard, Screen Reader, Contrast)

## Summary

Make the site fully usable by keyboard and screen reader and meet WCAG AA contrast: visible focus rings, real headings, accessible names on icon-only controls, `aria-expanded` on collapsibles, and contrast fixes. This also improves exam practice, since the real ISTQB exam platforms offer accessibility features.

## Why it fits

The UI is built from `<button>`s with inline styles and no focus styles. Glyphs such as `›`, `…` and `⌂` act as link labels, expand/collapse sections in the guide/summary pages have no ARIA state, and the hub uses light text (`T.faint`, `opacity: 0.7` on white-on-gradient) that may fail contrast.

## Scope

- Global focus-visible style
- `aria-expanded`/`aria-controls` on every collapsible; `aria-live` region for quiz feedback and timer warnings
- Heading hierarchy audit (one `h1` per page)
- Contrast audit of `theme.js` tokens and track gradients; adjust where they fail
- Automated axe-core check in a Playwright script over every route

## Risks & unknowns

- Some fixes touch all 30 page files unless the shared templates land first

## Open Questions

- [ ] Target level: WCAG 2.2 AA throughout, or a lighter “keyboard + screen reader basics” pass?
                                  > YOUR ANSWER:

## Status

OPEN
