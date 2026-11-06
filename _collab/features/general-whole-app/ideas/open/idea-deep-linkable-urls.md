# Deep-Linkable URLs & Working Back Button

## Summary

Put the open chapter, section, glossary filter and quiz mode in the URL (e.g. `/ctflv4-learn/4#4.2.3`) so that refresh, the browser Back button and shared links all land in the same place. Today these views are kept only in React state, so refreshing or pressing Back on a chapter returns you to the chapter list.

## Why it fits

Every leaf page keeps `const [activeChapter, setActiveChapter] = useState(null)`; there are no URL params, and `window.scrollTo(0,0)` is the only navigation. React Router 7 is already installed, so this is wiring work, not a new dependency. Search, resume and cross-links all need these URLs.

## Scope

- Chapter as a route param or query (`?ch=4`), section as a hash anchor with scroll-into-view
- Guide/summary expand state for a linked section opens it automatically
- Quiz: keep mode/set in the URL; individual in-progress answers stay out of it
- Replace the plain `<a href="/ctflv4">` links at the bottom of Learn pages with router `<Link>`s (they currently reload the whole app)

## Risks & unknowns

- Doing this before the shared templates means doing it 30 times; doing it after means waiting

## Open Questions

- [ ] Should a timed mock exam survive a page refresh (resume with the remaining time) or restart, as it does today?
                                  > YOUR ANSWER:

## Status

OPEN
