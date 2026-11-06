# Production Build & Deploy Pipeline

## Summary

Serve the site as an optimised static build (`vite build` → CDN or static host) with an automated deploy on push, instead of what `vite.config.js` suggests is the Vite dev server exposed at `istqb.rongrong.dev`. Pages would load faster (bundled, minified, cached) and nothing would be left running dev-only.

## Why it fits

`vite.config.js` only configures `server.allowedHosts` for `istqb.rongrong.dev`, which is a dev-server setting, so the public site appears to be running `vite` dev mode. There's no `preview`/build host config, no SPA fallback rule, and no CI.

## Scope

- Pick a static host (Cloudflare Pages, Netlify, GitHub Pages, or nginx on the current box) with an SPA fallback to `index.html`
- GitHub Action: install → (tests) → build → deploy on push to main
- Long-cache headers for hashed assets, no-cache for `index.html`
- Custom domain `istqb.rongrong.dev` moved over

## Risks & unknowns

- Assumption to confirm: how the site is actually hosted today
- `trainings/` (official PDFs) is gitignored and must stay out of any public build

## Open Questions

- [ ] How is istqb.rongrong.dev served today (vite dev server, `vite preview`, something else), and is there a preferred host?
                                  > YOUR ANSWER:

## Status

OPEN
