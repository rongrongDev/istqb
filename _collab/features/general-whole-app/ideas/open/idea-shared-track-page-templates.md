# Shared Track Page Templates

## Summary

Replace the 30 near-identical page files (`<track>-learn`, `-guide`, `-glossary`, `-quiz`, and the summary page, for each of the 6 syllabi) with one generic component per step type, driven by `src/lib/tracks.js`. Every future feature (search, tooltips, dark mode, notes) then gets built once instead of six times.

## Why it fits

`diff src/pages/ctflv4-learn.jsx src/pages/ctqdo-learn.jsx` shows the only differences are the data import, the progress helpers, and a hard-coded header gradient, all of which `tracks.js` already holds (`gradient`, `loadData`, `progress`). `src/lib/progress.js` is likewise six copies of `makeProgress` exported under different names. The hub, `TrackPage` and `PageChrome` are already config-driven; the leaf pages are the last part that isn't.

## Scope

- Generic `LearnPage`, `SummaryPage`, `GuidePage`, `GlossaryPage`, `QuizPage` components in `src/components/`, taking a track id
- Extend each `tracks.js` entry with the per-track text these pages hard-code: header label, exam-format line, pass mark, exam time, quiz set structure (CTFL Exams A–D, QDO appendix)
- Progress accessed as `track.progress.*`, not via named imports
- Keep existing URLs working (e.g. `/ctflv4-learn`) or redirect them to the new scheme
- Delete the per-track page files once at parity, then check every track by screenshot

## Risks & unknowns

- Quiz pages have drifted (`ctflv4-quiz.jsx` is 479 lines vs 434 for others; CT-AI v1 has its own shape), so the generic quiz needs variant points, not one fixed layout
- Large diff touching every route — needs a careful visual check per track

## Open Questions

- [ ] URL scheme: keep the flat `/ctflv4-learn` style, or move to nested `/track/ctfl/learn` (with redirects from the old paths)?
                                  > YOUR ANSWER:

- [ ] Should the CT-AI v1 legacy pages be folded into the templates too, or left as hand-written pages since that syllabus is superseded?
                                  > YOUR ANSWER:

## Status

OPEN
