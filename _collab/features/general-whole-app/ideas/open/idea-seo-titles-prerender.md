# Per-Page Titles, Meta & Static Prerendering

## Summary

Give every route a real `<title>` and description (e.g. “CTFL v4.0 · Learn Chapter 4 — Test Analysis and Design”) and prerender the routes to static HTML. Search engines can then index the content, link previews show something meaningful, and browser tabs and history become readable.

## Why it fits

`index.html` has one static title, “ISTQB Study Guides”, for every page. The app is a client-only SPA, so a shared link to `/ctflv4-guide` previews as a blank page. All content is static, which makes prerendering cheap: the pages need no data fetching.

## Scope

- Title/description per route, derived from `tracks.js` (`findPage`) and chapter titles; React 19 supports `<title>`/`<meta>` inside components natively
- Open Graph tags with a generic share image
- Build-time prerender of all registered routes (e.g. a small Playwright/Vite SSG step), plus `sitemap.xml` and `robots.txt`

## Risks & unknowns

- Prerendering needs the hosting to serve `/<route>/index.html`; see the production deploy idea
- Content paraphrases ISTQB syllabi; making it publicly indexable is a visibility decision

## Open Questions

- [ ] Should the site be discoverable by search engines at all, or stay effectively private (titles only, `noindex`)?
                                  > YOUR ANSWER:

## Status

OPEN
