# Install as an App and Study Offline

## Summary

Make the hub installable on phones and desktops (web app manifest) and readable offline (service worker caching the built pages and track data). Learners can study on a commute or flight with no connection.

## Why it fits

`main` already added favicons and an apple-touch icon, and the app is a static Vite build with lazily loaded per-track chunks. Progress already stays in the browser, so offline study needs no backend.

## Scope

- `manifest.webmanifest`, icons, theme colour from the Chalkboard palette
- Service worker (e.g. `vite-plugin-pwa`) precaching the shell and caching track chunks once opened
- "Available offline" indicator per track and a "download all tracks" action

## Risks & unknowns

- Stale-cache bugs after deploys need an update prompt
- Deployment target for istqb.rongrong.dev is still undetermined (wiki open question)

## Open Questions

- [ ] Cache every track up front (~4 MB), or only tracks the learner has opened?
                                  > YOUR ANSWER:
- [ ] When a new version is deployed: prompt "Update available", or update silently on next launch?
                                  > YOUR ANSWER:

## Status

OPEN
