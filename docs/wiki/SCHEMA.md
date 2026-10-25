# Wiki Schema

## Scope

Agreed 2026-10-25. Location: `docs/wiki/`. Audience: the repo owner, other
contributors, and agent sessions — write for someone new to the repo.

Covered: the whole tracked repo — `src/` (app shell, components, lib, pages, data) and
root config (`package.json`, `vite.config.js`, `index.html`).

Excluded: `trainings/` (source PDFs, git-ignored), `node_modules/`, and the untracked
working folders `tasks/`, `features/`, `_refactor/`. Data files in `src/data/` are
documented by shape and convention, not chapter by chapter.

Pages: `architecture`, `tracks`, `content-data`, `pages`, `progress`, `theme`, plus
`index`, `log`, and this file.

## Ownership

The repo is immutable from the wiki's point of view. Normal development changes
code; a wiki operation never does. The agent owns every file in this directory.
Humans curate: they choose emphasis and ask the questions. The agent does the
bookkeeping — summarising, cross-referencing, filing.

## Page conventions

Every page opens with frontmatter:

```yaml
---
title: Image Similarity
sources: # repo paths this page is derived from
  - services/similarity/
  - config/embeddings.yaml
pinned_commit: 4f2a1c9 # commit the page was verified against
updated: 2026-09-17
confidence: observed # observed | mixed | inferred
---
```

Rules for the body:
- **Never modify code.** Writes go to the wiki directory only — no refactors, no comment insertion.
- **Cite narrowly**: `services/similarity/index.py:88-104`. An uncited substantive claim is a defect.
- **Mark what you don't know**: plain prose = observed and cited; `(inferred)` = your
  reading of intent, stated nowhere; `(unverified)` = from a human or an old doc,
  not confirmed against code. Never silently promote inferred to observed.
- **Never invent** endpoints, env vars or responsibilities. Write "not determined"
  and add it to open questions in `architecture.md`.
- **No secrets.** Name the variable, never the value.
- **Link across pages** with relative links. Every page should have at least one
  inbound link from somewhere other than `index.md`.
- Short and linked beats long and complete. A page nobody reads is a page that rots.
- Page names are `lowercase-hyphenated.md`, named after the repo's own vocabulary.

## Update

Baseline = the newest commit in `log.md`, or each page's own `pinned_commit` if a
page was skipped last pass. Run `git log --oneline <baseline>..HEAD` and
`git diff --name-only <baseline>..HEAD`, then map changed paths onto pages via
their `sources`. Three buckets: affected pages, new territory no page claims, and
untouched pages — leave those alone and do not re-pin them, since re-pinning
unread pages destroys the staleness signal. Read `index.md` before adding a page,
and follow the naming and structure already there.

Read the actual diff before rewriting a page. Commit messages are evidence about
intent, not about behaviour — but they are the best raw source this pattern gets
for design rationale, so capture them while fresh. State corrections in the log
rather than quietly overwriting. Re-pin only pages you actually re-read. If the
diff is large (50+ files, or a rename-heavy refactor), say so and offer to split
the pass instead of updating everything shallowly.

Repo-specific: a new track touches `src/data/<track>/`, `src/pages/<track>*.jsx`,
`src/lib/progress.js` and `src/lib/tracks.js` together — update the tables in
`tracks.md` and `progress.md`, and note any quiz-shape variation in `content-data.md`.

## Query

Read `index.md` first, drill into the 2–5 pages it points at, grep the wiki if the
index comes up short. Answer from pages, citing them; fall back to reading code
only when the wiki is thin or the page's pin is behind, and say which you did. If
code contradicts the wiki, say so and fix the page in the same turn. File answers
that cost real work back into the wiki — a new page, or a section on an existing
one — with a log entry. Skip filing for trivial lookups.

## Lint

Report findings before fixing anything, except index and link repairs, which you
may fix directly and list afterwards. A wiki can become internally consistent
around a claim that is simply wrong, so every finding must quote the conflicting
text or name the commit that falsifies it.

1. Stale pins — for each page, `git diff --name-only <pinned_commit>..HEAD -- <sources>`.
   Non-empty means possibly stale. Mechanical, unarguable, highest value.
2. Contradictions — quote both pages verbatim; resolve by reading code, not by
   preferring the more recently updated page.
3. Drifted claims — spot-check checkable assertions (timeouts, env var names,
   endpoint paths, error codes) against code.
4. Orphans — pages with no inbound link other than `index.md`.
5. Gaps — topics referenced across pages with no page of their own; in-scope
   directories no page's `sources` covers.
6. Uncited claims, index drift, and practice that has diverged from this schema.

End every lint with questions worth investigating next — what the wiki cannot
currently answer. That list is often the most useful output of the pass.

## Log format

`## [YYYY-MM-DD] <init|update|query|lint> | <sha or range>` followed by Revised /
Created / Deleted / Superseded / Deferred lines.
