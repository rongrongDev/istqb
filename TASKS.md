# Tasks

Task files live in `tasks/backlog/`, `tasks/in-progress/`, and `tasks/done/`.
Tasks are generated from resolved brainstorm ideas in `features/<topic>/ideas/resolved/`.

## Backlog


## In progress

(none)

## Done

- [ISTQB learning hub main page + sitewide end-to-end navigation](tasks/done/task-learning-hub-and-navigation.md) — rebuilt `src/App.jsx` Home as a multi-track ISTQB hub driven by a new `src/lib/tracks.js` registry (5 tracks, config-only to extend), added `/track/:id` landing pages (`src/components/TrackPage.jsx`: study path, progress stats, exam readiness, CT-AI v1 legacy pages grouped under the CT-AI track), and wrapped every routed page in `src/components/PageChrome.jsx` — a breadcrumb bar (Hub › Track › Step) with next-step / back-to-track links on all 29 leaf routes

- [Site-wide color scheme consistency (beige + dark grey)](tasks/done/task-sitewide-color-consistency.md) — created `src/lib/theme.js` (beige surface tokens + dark grey text scale) and pointed all 29 page files + `App.jsx` at it, replacing every cool-grey neutral (#F8FAFC/#F3F4F6/#F9FAFB/#E5E7EB/#D1D5DB → beige #F5F0E6/#EDE6D8/#E3DCCB/#D6CDB8); verified by grep (zero stray neutrals in src/) and headless-Chrome screenshots of home, learn, quiz, guide, glossary, and summaries pages

- [ASTQB Soft Skills study content (following CT-AI v2 format)](tasks/done/task-astqb-soft-skills-content.md) — built the ASTQB CT-SS track: `src/data/softskills/` (4 chapters with full learn content, 40-question / 45-point quiz verified against the official answer key, 25-term glossary), `/softskills` + `/softskills-learn` + `/softskills-guide` + `/softskills-glossary` + `/softskills-quiz` pages with timed 60-min exam simulation, `ct-ss-progress` key, and a Soft Skills section on the home page

- [Mobile Application Testing study content (following CT-AI v2 format)](tasks/done/task-ct-mat-content.md) — built the CT-MAT (2019) track: `src/data/ctmat/` (5 chapters with full learn content, 40-question quiz from Sample Exam A verified against the official answer key, 118-term glossary from chapter keywords + Appendix B), `/ctmat` + `/ctmat-learn` + `/ctmat-guide` + `/ctmat-glossary` + `/ctmat-quiz` pages with timed 60-min exam simulation, `ct-mat-progress` key, and a CT-MAT section on the home page

- [CT-QDO v1.0 study content (following CT-AI v2 format)](tasks/done/task-ct-qdo-v1-content.md) — built the CT-QDO v1.0 track: `src/data/ctqdo/` (4 chapters with full learn content, 40-question quiz + 8 appendix questions verified against the official answer key, 87-term glossary), `/ctqdo` + `/ctqdo-learn` + `/ctqdo-guide` + `/ctqdo-glossary` + `/ctqdo-quiz` pages with timed 60-min exam simulation, `ct-qdo-progress` key, and a CT-QDO section on the home page

- [CTFL v4.0 study content (following CT-AI v2 format)](tasks/done/task-ctfl-v4-content.md) — built the CTFL v4.0 track: `src/data/ctflv4/` (6 chapters with full learn content, 160-question quiz from Sample Exams A–D verified against the official answer keys, 97-term glossary), `/ctflv4` + `/ctflv4-learn` + `/ctflv4-guide` + `/ctflv4-glossary` + `/ctflv4-quiz` pages with per-set exam simulation, `ctfl-v4-progress` key, and a CTFL section on the home page

- [CT-AI v1 study content (parity with CT-AI v2)](tasks/done/task-ctai-v1-content.md) — built the CT-AI v1 track: `src/data/ctaiv1/` (11 chapters, learn content, 67-question quiz verified against the official answer key, 117-term glossary), `/ctaiv1-learn` + `/ctaiv1-glossary` pages, per-track progress keys, and v1/v2 sections on the home page
- [Main page color scheme consistency (beige + dark grey)](tasks/done/task-main-page-color-consistency.md) — restyled `src/App.jsx` from indigo/purple to beige + dark grey to match the other pages
