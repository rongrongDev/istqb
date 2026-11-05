# Report a Content Issue

## Summary

A "Report an issue" link on every Learn section, glossary term and quiz question. It opens a pre-filled GitHub issue (track, section or question id, current text) on rongrongDev/istqb. Learners can flag typos, wrong answers or outdated content in two clicks, with exact context.

## Why it fits

The site is static with no backend, and the content is hand-authored from PDFs across 13 tracks, so errors will exist. GitHub issues need no server, and ids such as `ctft` + `5.3` or `A-Q17` already pinpoint the content.

## Scope

- Link builder for `https://github.com/rongrongDev/istqb/issues/new?title=…&body=…&labels=content`
- Placed in LearnPage section footer, GlossaryPage entries, QuizPage review
- Issue template for content reports

## Risks & unknowns

- Requires reporters to have a GitHub account
- The repo must be public for strangers to file issues

## Open Questions

- [ ] Is the repo public (or going to be)? If not, should reports go somewhere else, such as an email address or a form?
                                  > YOUR ANSWER:

## Status

OPEN
