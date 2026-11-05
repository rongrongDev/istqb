# Wiki Log

## [2026-10-25] init | 7e14a2d
Created: architecture, tracks, content-data, pages, progress, theme (6 pages) + index, log, SCHEMA.
Scope: whole repo — `src/`, root config. Excluded: `trainings/` PDFs, `node_modules/`, untracked `tasks/`, `features/`, `_refactor/`; data files covered by shape, not per chapter. Audience: the owner, other contributors, and agent sessions.

## [2026-10-25] update | 7e14a2d..70b2e7a
Revised: architecture (Shell replaces PageChrome, dashboard, track page, lucide-react), pages (4 shared components, thin wrappers, confirm bar on finish, navigator), theme (Chalkboard CSS variables, toggle, breakpoints — replaces beige `T` palette), tracks (`loadGlossary`, `exam`, legacy `short`/loaders), progress (readers/writers via components, storage probe, `theme` key).
Left alone: content-data (no `src/data/` changes) — only its renderer citation was corrected to `src/components/LearnPage.jsx:6-43`; not re-pinned.
Superseded: theme.md's "No dark mode exists" and the beige token table; pages.md's "no shared page component".
Rationale (commit 12474de, design/site-revamp-blueprint.html As built): Exam Room redesign; behaviour unchanged except the finish confirm bar.

## [2026-11-05] update | 70b2e7a..47192d8
Revised: tracks (13 tracks; `progress.setStudied`; `exam.minutes`; points per track; helper line refs), progress (8 new track keys; `learning-state` key; paths write through track progress), content-data (`seealso` block; renderer moved to `Blocks.jsx`; 2026-track quiz fields and deviation headers; pointer to `src/data/learning/`), pages (78 pages; tooltips and `SectionExtras` in Learn; `examMinutes`), architecture (learning tabs and mode toggle in Shell; dashboard learn section; track page duration and learning mode; `check:learning` script), theme (classes for the learning pages; tooltip is `position: fixed`), index.
Created: learning (the "learn without an exam" area — pages, data shapes, state, levels, learning mode).
Corrected: tracks.md legacy block cite (was `src/lib/tracks.js:34-45`, now 69-80 after the new imports); theme.md breakpoint cite no longer uses line numbers that shift.
Rationale (commits 0dae344, 449ca80, tasks 010–021): make the site useful to engineers at every level who aren't sitting an exam, reusing the syllabus content; the 8 new tracks (tasks 001–008) arrived via the merge of main and commit 858c745.
Scale: 336 files changed, ~150 of them track data files covered by shape per the schema.

## [2026-11-05] update | 47192d8..aa5da0b
Revised: learning (7 new pages, 10 new data files, quiz integration, trapTally, check-script coverage, open question on site-judgement content), progress (`trapTally`, `capstone-progress` key), pages (85 page files; trap chips and workings in QuizPage), index.
Left alone: architecture, tracks, content-data, theme — no behaviour change in their sources beyond new CSS classes (theme not re-pinned).
Rationale (commits 54573e0, 995a692, tasks 022–031): enrich learning with tactics for tricky questions, workplace judgement and industry trade-offs; challenge questions and explain-it-back parked as KIV.
