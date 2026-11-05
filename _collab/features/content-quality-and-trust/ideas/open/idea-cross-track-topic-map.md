# Cross-Track Topic Map

## Summary

Link sections that teach the same topic in different syllabi (ATDD in CTFL 2.1.3 and CT-AcT 1.2.3; performance in CT-PT, CT-AcT 4.3 and CT-FT 5.3; security in CT-SEC, CT-AcT 4.4 and CT-FT 5.4). Each Learn section shows "Also covered in…", and a topic index lists them all. Learners with several certifications reuse what they know and notice differences.

## Why it fits

With 13 tracks there is a lot of overlap. I added a few manual "See also" blocks during the new tracks; this makes it systematic with one mapping file instead of hand-written links.

## Scope

- `src/data/topics.js`: topic → list of (track, section id)
- "Also covered in" chips on Learn sections, driven by the map
- A topic index page

## Risks & unknowns

- Building the map is manual curation across ~500 sections
- Overlapping topics can teach slightly different definitions; that needs flagging, not hiding

## Open Questions

- [ ] Curate a small set of high-value topics first (about 20), or aim for full coverage?
                                  > YOUR ANSWER:
- [ ] Should the existing hand-written "See also" blocks be replaced by the map?
                                  > YOUR ANSWER:

## Status

OPEN
