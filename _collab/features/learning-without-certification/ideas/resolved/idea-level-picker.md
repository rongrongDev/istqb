# Beginner / Practitioner / Expert Levels

## Summary

Tag sections and paths by depth (beginner, practitioner, expert) and let visitors set their level, so a newcomer sees foundations first and an experienced engineer skips to advanced material.

## Why it fits

Tracks span Foundation, Specialist and Advanced levels already (`level` in tracks.js); sections need a finer tag.

## Scope

- `depth` tag per section (derived from track level and K-level, then adjusted)
- Level setting on the dashboard; filters paths and suggestions
- Short self-check to suggest a level

## Risks & unknowns

- Tagging ~500 sections well is manual work

## Open Questions

- [x] Derive depth automatically from track level + K-level, or tag by hand?
                                  > YOUR ANSWER: (default picked by Claude, since you asked to build everything — change it and I'll adjust) Derive automatically: Foundation track or K1/K2 → beginner, Specialist or K3 → practitioner, Advanced track or K4 → expert. Path steps can override.

## Status

RESOLVED
