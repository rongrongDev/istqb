# Tasks

Task files live in `tasks/backlog/`, `tasks/in-progress/`, and `tasks/done/`.
Tasks are generated from resolved brainstorm ideas in `features/<topic>/ideas/resolved/`.

## Backlog

- [Site-wide design revamp — directions → blueprint](tasks/backlog/task-design-revamp.md) — picked Exam Room + Chalkboard; blueprint in `design/site-revamp-blueprint.html` (design history per round)
- [Resume an exam after refresh](tasks/backlog/task-resume-exam-after-refresh.md) — save the in-progress attempt with its deadline; resume or discard (after the redesign)
- [Mock exam attempt history and score trend](tasks/backlog/task-attempt-history.md) — keep every attempt incl. per-chapter points; trend vs 65% line
- [Weak-spot drill](tasks/backlog/task-weak-spot-drill.md) — name the weakest chapter and start a filtered practice set (needs attempt history)
- [Mistake deck](tasks/backlog/task-mistake-deck.md) — wrong answers become a deck cleared by two right answers in a row
- [Flag questions for review](tasks/backlog/task-flag-for-review.md) — flag during the exam; markers in the bar/grid and finish bar
- [Exam-day countdown](tasks/backlog/task-exam-day-countdown.md) — booked date per track; days left and daily section target
- [Best score per CTFL sample exam](tasks/backlog/task-best-score-per-ctfl-set.md) — `bestBySet` for Sets A–D alongside the overall best
- [Export and import progress](tasks/backlog/task-export-import-progress.md) — JSON backup/restore of all track keys, validated
- [Sync across devices](tasks/backlog/task-sync-across-devices.md) — OPEN: needs a backend; 4 questions to answer

## In progress

(none)

## Done

- [Enrich learning — tasks 022–031](_collab/tasks/done/task-022-worked-solutions.md) — step-by-step workings on 18 official calculation/technique questions, trap tags on every wrong option of CTFL Sample Exam A with a per-learner trap tally, an exam technique playbook (12 tactics on real questions), 18 confusable pairs with a drill, 10 tricky workplace situations, 8 trade-off guides, 12 anti-patterns, 23 "in the real world" notes, 16 interview questions and 2 capstone projects; content in `src/data/learning/`, checked by `npm run check:learning`

- [Learn without an exam — tasks 010–021](_collab/tasks/done/task-010-topic-paths.md) — new `/explore` area for people learning without a certificate: 6 topic paths across tracks with plain-language notes (`/path`), 6 role paths (`/roles`), a learning mode that hides exam framing, beginner/practitioner/expert levels, glossary tooltips in Learn text, 9 hands-on exercises (some auto-checked), 6 tool recipes (`/toolbox`), 10 Markdown templates, 6 sourced failure case studies, concept of the day, an 18-question self-check and a learning record; content in `src/data/learning/`, checked by `npm run check:learning`

- [CT-UT study content — Usability Testing (2018 syllabus)](_collab/tasks/done/task-008-usability-testing-track.md) — built the CT-UT track: `src/data/ctut/` (8 chapters with full learn content, 40-question quiz from ISTQB Sample Exam set A v1.2 cross-checked against its answer key — K-levels from the syllabus, keyword questions mapped to LOs by topic, 45-term glossary), `/ctut` + `/ctut-learn` + `/ctut-guide` + `/ctut-glossary` + `/ctut-quiz` pages with a 60-min exam simulation, `ct-ut-progress` key, a hub card, and See-also links with CT-AcT

- [CT-AcT study content — Acceptance Testing (2019 syllabus)](_collab/tasks/done/task-007-acceptance-testing-track.md) — built the CT-AcT track: `src/data/ctact/` (5 chapters with full learn content linking ATDD/BDD to CTFL 2.1.3/2.2.1, 40-question quiz from ISTQB Sample Exam set A v1.3 cross-checked against its answer key — BPMN/DMN figures described in text, 36-term glossary), `/ctact` + `/ctact-learn` + `/ctact-guide` + `/ctact-glossary` + `/ctact-quiz` pages with a 60-min exam simulation, `ct-act-progress` key, and a hub card

- [CT-FT study content — Finance Testing v1.0](_collab/tasks/done/task-006-ct-ft-track.md) — built the CT-FT track: `src/data/ctft/` (6 chapters with full learn content, 40-question / 45-point quiz from the ASTQB Finance Testing v1.0 sample exam cross-checked against its answer document — the ISTQB set A was left out because its answers don't match its questions, 52-term glossary), `/ctft` + `/ctft-learn` + `/ctft-guide` + `/ctft-glossary` + `/ctft-quiz` pages with a 60-min (assumed) exam simulation and 30-point pass mark, `ct-ft-progress` key, and a "NEW 2026" hub card

- [CT-SEC study content — Security Testing (2016 syllabus)](_collab/tasks/done/task-005-security-testing-track.md) — built the CT-SEC track: `src/data/ctsec/` (9 chapters with full learn content, 45-question / 80-point quiz from ISTQB Sample Exam set A v1.1 cross-checked against its answer key — LO/chapter mapping by topic since the official key lists none, 57-term glossary), `/ctsec` + `/ctsec-learn` + `/ctsec-guide` + `/ctsec-glossary` + `/ctsec-quiz` pages with a 120-min exam simulation, `ct-sec-progress` key, and a hub card

- [CT-PT study content — Performance Testing (2018)](_collab/tasks/done/task-004-ct-pt-track.md) — built the CT-PT track: `src/data/ctpt/` (5 chapters with full learn content, 79-question quiz from ISTQB Sample Exam A v1.3 + the ASTQB 2019 sample exam — base scenario repeated per question, image-only chart question omitted — cross-checked against both answer keys, 36-term glossary), `/ctpt` + `/ctpt-learn` + `/ctpt-guide` + `/ctpt-glossary` + `/ctpt-quiz` pages with per-set 60-min exam simulation, `ct-pt-progress` key, and a hub card

- [CT-TAS v1.0 study content — Test Automation Strategy](_collab/tasks/done/task-003-ct-tas-track.md) — built the CT-TAS track: `src/data/cttas/` (6 chapters with full learn content and CTAL-TAE cross-links, 80-question quiz from ISTQB Sample Exam A v1.2 + the ASTQB TAS sample exam, cross-checked against both answer keys, 35-term glossary), `/cttas` + `/cttas-learn` + `/cttas-guide` + `/cttas-glossary` + `/cttas-quiz` pages with per-set 60-min exam simulation, `ct-tas-progress` key, and a hub card that contrasts it with CTAL-TAE

- [CTAL-TAE v2.0 study content — Advanced Test Automation Engineering](_collab/tasks/done/task-002-ctal-tae-v2-track.md) — built the CTAL-TAE track: `src/data/ctaltae/` (8 chapters with full learn content and CT-QDO cross-links, 80-question quiz from ISTQB Sample Exam v2.4 + the ASTQB TAE sample exam with 1–3-point K2–K4 items, cross-checked against both answer keys, 43-term glossary), `/ctaltae` + `/ctaltae-learn` + `/ctaltae-guide` + `/ctaltae-glossary` + `/ctaltae-quiz` pages with per-set 90-min exam simulation, `ctal-tae-progress` key, and a hub card

- [CT-GenAI v1.1 study content — Testing with Generative AI](_collab/tasks/done/task-001-ct-genai-track.md) — built the CT-GenAI track: `src/data/ctgenai/` (5 chapters with full learn content and CT-AI v2 cross-links, 80-question quiz from ISTQB Sample Exam A v1.1 + the ASTQB v1.1 sample exam, cross-checked against both answer keys, 50-term glossary from chapter keywords + Appendix D), `/ctgenai` + `/ctgenai-learn` + `/ctgenai-guide` + `/ctgenai-glossary` + `/ctgenai-quiz` pages with per-set 60-min exam simulation, `ct-genai-progress` key, and a hub card
- [Exam Room redesign — implementation](tasks/done/task-exam-room-redesign.md) — rebuilt the UI as the Exam Room design with the Chalkboard palette (light/dark, remembered toggle) and the Test brackets logo: the 29 page files are now thin wrappers over shared `LearnPage`, `NotesPage`, `GlossaryPage` and `QuizPage` components; `Shell.jsx` (track switcher, step tabs, ⌘K lookup, phone tab strip) replaces PageChrome; readiness dashboard, exam-facts track page, full-screen exam with segment navigator and finish confirm bar; checked in headless Chrome at 1280px and 390px

- [ISTQB learning hub main page + sitewide end-to-end navigation](tasks/done/task-learning-hub-and-navigation.md) — rebuilt `src/App.jsx` Home as a multi-track ISTQB hub driven by a new `src/lib/tracks.js` registry (5 tracks, config-only to extend), added `/track/:id` landing pages (`src/components/TrackPage.jsx`: study path, progress stats, exam readiness, CT-AI v1 legacy pages grouped under the CT-AI track), and wrapped every routed page in `src/components/PageChrome.jsx` — a breadcrumb bar (Hub › Track › Step) with next-step / back-to-track links on all 29 leaf routes

- [Site-wide color scheme consistency (beige + dark grey)](tasks/done/task-sitewide-color-consistency.md) — created `src/lib/theme.js` (beige surface tokens + dark grey text scale) and pointed all 29 page files + `App.jsx` at it, replacing every cool-grey neutral (#F8FAFC/#F3F4F6/#F9FAFB/#E5E7EB/#D1D5DB → beige #F5F0E6/#EDE6D8/#E3DCCB/#D6CDB8); verified by grep (zero stray neutrals in src/) and headless-Chrome screenshots of home, learn, quiz, guide, glossary, and summaries pages

- [ASTQB Soft Skills study content (following CT-AI v2 format)](tasks/done/task-astqb-soft-skills-content.md) — built the ASTQB CT-SS track: `src/data/softskills/` (4 chapters with full learn content, 40-question / 45-point quiz verified against the official answer key, 25-term glossary), `/softskills` + `/softskills-learn` + `/softskills-guide` + `/softskills-glossary` + `/softskills-quiz` pages with timed 60-min exam simulation, `ct-ss-progress` key, and a Soft Skills section on the home page

- [Mobile Application Testing study content (following CT-AI v2 format)](tasks/done/task-ct-mat-content.md) — built the CT-MAT (2019) track: `src/data/ctmat/` (5 chapters with full learn content, 40-question quiz from Sample Exam A verified against the official answer key, 118-term glossary from chapter keywords + Appendix B), `/ctmat` + `/ctmat-learn` + `/ctmat-guide` + `/ctmat-glossary` + `/ctmat-quiz` pages with timed 60-min exam simulation, `ct-mat-progress` key, and a CT-MAT section on the home page

- [CT-QDO v1.0 study content (following CT-AI v2 format)](tasks/done/task-ct-qdo-v1-content.md) — built the CT-QDO v1.0 track: `src/data/ctqdo/` (4 chapters with full learn content, 40-question quiz + 8 appendix questions verified against the official answer key, 87-term glossary), `/ctqdo` + `/ctqdo-learn` + `/ctqdo-guide` + `/ctqdo-glossary` + `/ctqdo-quiz` pages with timed 60-min exam simulation, `ct-qdo-progress` key, and a CT-QDO section on the home page

- [CTFL v4.0 study content (following CT-AI v2 format)](tasks/done/task-ctfl-v4-content.md) — built the CTFL v4.0 track: `src/data/ctflv4/` (6 chapters with full learn content, 160-question quiz from Sample Exams A–D verified against the official answer keys, 97-term glossary), `/ctflv4` + `/ctflv4-learn` + `/ctflv4-guide` + `/ctflv4-glossary` + `/ctflv4-quiz` pages with per-set exam simulation, `ctfl-v4-progress` key, and a CTFL section on the home page

- [CT-AI v1 study content (parity with CT-AI v2)](tasks/done/task-ctai-v1-content.md) — built the CT-AI v1 track: `src/data/ctaiv1/` (11 chapters, learn content, 67-question quiz verified against the official answer key, 117-term glossary), `/ctaiv1-learn` + `/ctaiv1-glossary` pages, per-track progress keys, and v1/v2 sections on the home page
- [Main page color scheme consistency (beige + dark grey)](tasks/done/task-main-page-color-consistency.md) — restyled `src/App.jsx` from indigo/purple to beige + dark grey to match the other pages
