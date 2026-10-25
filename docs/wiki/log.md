# Wiki Log

## [2026-10-25] init | 7e14a2d
Created: architecture, tracks, content-data, pages, progress, theme (6 pages) + index, log, SCHEMA.
Scope: whole repo — `src/`, root config. Excluded: `trainings/` PDFs, `node_modules/`, untracked `tasks/`, `features/`, `_refactor/`; data files covered by shape, not per chapter. Audience: the owner, other contributors, and agent sessions.

## [2026-10-25] update | 7e14a2d..70b2e7a
Revised: architecture (Shell replaces PageChrome, dashboard, track page, lucide-react), pages (4 shared components, thin wrappers, confirm bar on finish, navigator), theme (Chalkboard CSS variables, toggle, breakpoints — replaces beige `T` palette), tracks (`loadGlossary`, `exam`, legacy `short`/loaders), progress (readers/writers via components, storage probe, `theme` key).
Left alone: content-data (no `src/data/` changes) — only its renderer citation was corrected to `src/components/LearnPage.jsx:6-43`; not re-pinned.
Superseded: theme.md's "No dark mode exists" and the beige token table; pages.md's "no shared page component".
Rationale (commit 12474de, design/site-revamp-blueprint.html As built): Exam Room redesign; behaviour unchanged except the finish confirm bar.
