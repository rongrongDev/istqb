# PWA & Offline Support

## Summary
Make the site installable and fully usable offline: add a web app manifest and a service worker that precaches the built assets. Study on a plane or commute with no connectivity — all content is static data bundled into the JS anyway.

## Why it fits
The app is a pure static Vite SPA with zero runtime network dependencies (all chapter/quiz/glossary data is compiled in), which makes it a near-perfect offline candidate — the only missing pieces are the manifest, icons, and a service worker. Progress is already localStorage-based, so it works offline by construction.

## Scope
- `vite-plugin-pwa` (or hand-rolled manifest + workbox) with precache-all strategy
- App manifest: name, theme color matching the purple gradient, icons
- Update flow: new deploy → "refresh for the latest content" toast rather than silently serving stale content
- Verify lazy-loaded page chunks (from `import.meta.glob`) are all precached

## Risks & unknowns
- Service worker staleness is the classic footgun: a bad update strategy can pin users to old content. The prompt-to-refresh pattern avoids this.
- How is the site deployed/hosted? Service worker scope and HTTPS requirements depend on that.

## Open Questions
- [ ] Where is (or will) the site (be) hosted — GitHub Pages, Netlify, Vercel, something else? This determines base path and SW registration details.
  > YOUR ANSWER:

## Status
OPEN
