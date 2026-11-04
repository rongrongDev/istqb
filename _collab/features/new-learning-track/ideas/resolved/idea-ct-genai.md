# Testing with Generative AI (CT-GenAI v1.1)

## Summary

Add ISTQB's specialist syllabus on using generative AI and LLMs in test work: prompt engineering for test tasks, LLM risks (hallucination, non-determinism, data privacy), LLM-powered test infrastructure, and organisational rollout. It's the newest high-demand specialist cert (approved July 2025, minor update v1.1).

## Why it fits

It's the natural companion to the CT-AI v2 track already on the site: CT-AI covers testing AI systems, CT-GenAI covers using GenAI to test. A hub learner on the AI path would expect both. Follows the established track recipe from the done tasks (CTFL v4, CT-QDO, CT-MAT, CT-SS): `src/data/<id>/` (chapters + learn content + official sample-exam quiz checked against the answer key + glossary), five step pages (Learn / Summaries / Exam Insights / Glossary / Quiz with a timed mock), a `makeProgress` storage key, and one `tracks.js` entry, which makes it appear on the hub, the track page and the breadcrumbs automatically.

## Scope

- All CT-GenAI chapters with learn content, objectives and keywords
- Official sample exam as the quiz, with explanations
- Glossary of GenAI terms (prompt, RAG, hallucination, temperature…)
- Cross-links to overlapping CT-AI v2 concepts
- New `tracks.js` entry, progress key, five step pages, hub card

## Risks & unknowns

- Some third-party listings still call it v1.0; confirm the current version on istqb.org before authoring
- The fast-moving subject makes paraphrased examples date quickly

## Open Questions

- [x] Should it sit as its own hub card, or be grouped with CT-AI under an “AI testing” heading?
                                  > YOUR ANSWER: Default (set by Claude after your approval; change in the task if wrong): its own hub card, like every other track, with cross-links to CT-AI v2.

- [x] Do you have the official syllabus PDF and a sample exam with its answer key for this one (to put in `trainings/`), or should I work only from the public istqb.org downloads?
                                  > YOUR ANSWER: Default (set by Claude after your 2026-11-04 approval; change it in the task if wrong): work from the public istqb.org downloads (syllabus, sample exam, answer key). If you have the PDFs, drop them into `trainings/` and they take precedence.

## Decision

Approved in chat on 2026-11-04 as a track to build.

## Status

RESOLVED
