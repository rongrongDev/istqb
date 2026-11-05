# Syllabus Version Register and Update Check

## Summary

A single register of every track's syllabus version, release date, sample-exam versions and last-checked date, shown as a "Syllabus versions" page. It comes with a documented update routine (download, diff learning objectives, update content). Learners see each track is current; you see which tracks need refreshing when ISTQB releases a new version.

## Why it fits

Versions are scattered across data-file headers and track names (CT-AI keeps a v1 legacy block; CTAL-TAE moved to v2.0). New syllabi keep appearing (CT-FT in 2026), and this session couldn't reach istqb.org to check errata.

## Scope

- `src/data/syllabi.js` (or fields in `tracks.js`) with version, date, source and checked-on
- Public "Syllabus versions" page linked from the dashboard footer
- Wiki page or task template describing the update routine, including an LO diff script

## Risks & unknowns

- Automated checks against istqb.org are not possible from this environment
- Sample exams update independently of syllabi

## Open Questions

- [ ] Should the page show "last checked" dates publicly, or keep that internal (wiki only)?
                                  > YOUR ANSWER:
- [ ] Should superseded versions get legacy blocks like CT-AI v1, or be removed when a new version lands?
                                  > YOUR ANSWER:

## Status

OPEN
