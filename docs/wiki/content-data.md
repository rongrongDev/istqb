---
title: Content Data
sources:
  - src/data/
pinned_commit: 47192d8
updated: 2026-11-05
confidence: observed
---

# Content data

All study material is hand-authored JS in `src/data/<track>/`. Header comments say it
was written or parsed from the official syllabus and sample-exam PDFs kept in the
(git-ignored) `trainings/` folder — e.g. `src/data/ctmat/quiz.js:1-2`,
`src/data/ctflv4/quiz.js:1-3`. There is no generator script in the repo; the PDFs are
not shipped.

Each track directory has the same files:

```
chapterN.js        summary/revision data per chapter
learn/chapterN.js  long-form teaching content per chapter
index.js           merges the two → export const chapters
quiz.js            export const questions (+ totalPoints on most tracks)
glossary.js        export const glossary
```

## chapterN.js

Default export `{id, title, time, color, bg, overview, sections[]}`. Each section has
`id` (syllabus number, e.g. `'1.1'`), `title`, `level` (K1–K4), `type`
(`'deep'` | `'skim'`), and either `deepPoints[]` (deep) or `summary` (skim), plus
optional `examInsights[]` — `src/data/ctmat/chapter1.js:3-26`, `src/data/ctmat/chapter2.js:30-35`.
The Summaries and Exam Insights [pages](pages.md) render these.

## learn/chapterN.js

Default export `{intro, keywords[], objectives[], sections: {"<id>": {objective, body[]}}}`.
`body` is a list of blocks: `p`, `list` (`{intro?, items}`), `table` (`{headers, rows}`),
`example` (`{title, text}`), `note` (`{title?, text}`), `seealso` (`{label, href, text}`, a link to another track) —
documented at `src/data/ctmat/learn/chapter1.js:1-4`, rendered by `Block` in
`src/components/Blocks.jsx:108-153`, which also turns glossary terms into tooltips ([pages](pages.md)).

## index.js — attachLearn

`attachLearn(chapter, learn)` copies `intro/keywords/objectives` onto `chapter.learn`
and, for each section whose id appears in `learn.sections`, sets `section.learn`
(`src/data/ctmat/index.js:15-24`). The same function is duplicated in every track's
`index.js` (e.g. `src/data/ctaiv1/index.js:31-40`). **Section ids must match between
`chapterN.js` and `learn/chapterN.js`** or the learn content silently drops.

## quiz.js

Question shape: `{id, lo, level, points, chapter, multi, text, options[{id,text}], correct[], explanation}`
— `src/data/ctmat/quiz.js:7-24`. Track-specific variations:

- CTFL: extra `exam` (`"A"`–`"D"`) and `num` fields; four sample exams in one file
  (`src/data/ctflv4/quiz.js:5-8`). No `totalPoints` export — the quiz page computes per-set totals.
- CT-QDO: `appendix: true` on extra questions; exports `mainQuestions` and
  `totalPoints` over main questions only (`src/data/ctqdo/quiz.js:848-849`).
- CT-AI v1: no `lo` field on any question, and marks extra questions with `isAppendix` instead of `appendix`
  (`src/data/ctaiv1/quiz.js:4-10`).
- `totalPoints` = sum of `points` for ctaiv2, ctmat, softskills, ctqdo (e.g. `src/data/ctmat/quiz.js:691`).
- The 2026 tracks (ctgenai, ctaltae, cttas, ctpt, ctsec, ctft, ctact, ctut) carry `exam` (`"A"` or `"ASTQB"`) and `num` on every question and export no `totalPoints`. Each `quiz.js` header comment records its sources and deviations: omitted image-only questions (CT-PT ASTQB Q27), diagrams written as text (CT-AcT Q17–Q20), LOs mapped by topic where the official key has none (CT-SEC, CT-UT Q35–Q40), the excluded CT-FT ISTQB set — e.g. `src/data/ctft/quiz.js:1-7`.

Source-data corrections are documented inline — e.g. CT-MAT Q31 follows the official
rationale over the answer-key table (`src/data/ctmat/quiz.js:3-5`).

## glossary.js

`export const glossary = [{term, chapters[], ref, definition}]` —
`src/data/ctmat/glossary.js:5-8`. ctaiv2 also exports `glossaryByLetter()`
(`src/data/ctaiv2/glossary.js:71`), which no page imports.

## Learning content

`src/data/learning/` holds the cross-track material for people learning without an exam — paths, roles, exercises, recipes, templates, case studies, self-check. It references track sections by id; see [learning](learning.md).
