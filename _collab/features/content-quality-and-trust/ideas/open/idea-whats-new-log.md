# What's New Page for Content Updates

## Summary

A public changelog of content changes: new tracks, corrected answers, rewritten sections, syllabus updates, each dated and linked. Returning learners see what changed since their last visit.

## Why it fits

Content changes often (8 tracks added in one PR; fixes like the quiz default-set bug). Commit messages exist but learners never see them.

## Scope

- `src/data/changelog.js` entries (date, track, summary, link)
- What's New page plus a "new since your last visit" dot
- Entry added as part of each content task

## Risks & unknowns

- Needs discipline to keep updated

## Open Questions

- [ ] Hand-written entries, or generated from commit messages (feat/fix scoped to tracks)?
                                  > YOUR ANSWER:

## Status

OPEN
