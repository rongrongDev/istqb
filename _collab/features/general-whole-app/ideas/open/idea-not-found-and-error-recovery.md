# 404 Page, Error Boundary & Stale-Deploy Recovery

## Summary

Add a friendly 404 for unknown URLs and an error boundary with a “Something went wrong — reload / back to hub” screen. Also handle the classic SPA failure where, after a redeploy, an open tab tries to lazy-load a chunk that no longer exists and shows a blank page.

## Why it fits

`App.jsx` has no `path="*"` route, so a mistyped URL renders an empty page. Every page is loaded with `lazy()` (from `import.meta.glob`), so a failed dynamic import after a deploy currently has no recovery. `TrackPage` already has an inline “Unknown track” state, which shows the pattern.

## Scope

- Catch-all route with a styled 404 page that suggests the closest known path (simple string distance against `registeredPaths()`)
- Top-level React error boundary with a reset button
- Chunk-load-error detection → one automatic reload (guarded against loops)

## Risks & unknowns

- Small in scope; mostly a question of whether it's worth doing now

## Open Questions


## Status

OPEN
