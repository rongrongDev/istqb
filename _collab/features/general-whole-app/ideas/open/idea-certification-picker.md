# “Which Certification Next?” Picker

## Summary

A short guided section on the hub that asks about the learner's situation (no cert yet / have CTFL; role: QA engineer, developer, test lead; interest: AI, DevOps, mobile, soft skills) and recommends a track order, with prerequisites, size and exam format side by side.

## Why it fits

`tracks.js` already holds `prerequisite`, `level`, `org`, badges like “START HERE” / “NO PREREQUISITE”, and chapter/question counts. Today the hub is a flat list of five cards with no guidance, and four of the five tracks require CTFL first.

## Scope

- Comparison table: track, org, prerequisite, chapters, sample questions, exam length, pass mark
- 2–3 question picker that highlights a recommended path (e.g. CTFL → CT-AI)
- New `tracks.js` fields for exam facts if they aren't already there (questions, minutes, pass %)

## Risks & unknowns

- Exam facts (duration, pass mark, cost) change between syllabus versions; keep them in config with a “check the official site” note

## Open Questions

- [ ] Should it include tracks the site doesn't cover yet (e.g. CTAL-TA, CTFL-AT) as “coming soon” cards for career-path context?
                                  > YOUR ANSWER:

## Status

OPEN
