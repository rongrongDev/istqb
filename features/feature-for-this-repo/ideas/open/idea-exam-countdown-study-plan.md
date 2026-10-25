# Exam Countdown & Study Pacing

## Summary
Let the user set their exam date, then show a countdown and a pacing signal on the home page: "12 days left, 18 of 30 sections studied — you need ~2 sections/day." Turns the existing passive progress numbers into a plan.

## Why it fits
The home page already computes sections-studied out of total (`App.jsx` Home component); pacing is that same data divided by days remaining. Persisting one date in the existing `src/lib/progress.js` store is trivial. This is the motivational layer on top of everything already built.

## Scope
- "Set exam date" control on the home page, stored in localStorage
- Countdown banner with sections/day pacing and a simple on-track / behind indicator
- Suggested "next up" link: first unstudied section, or mock exam if all sections are done
- Nothing time-based beyond date math — no notifications (it's a website, not an app)

## Risks & unknowns
- Pacing that only counts sections ignores quiz/glossary work; keep the message honest ("sections" not "readiness").
- Users without a booked exam date should see zero nagging — feature is fully opt-in.

## Open Questions
- [ ] Beyond the countdown, do you want it to suggest a concrete daily plan (which sections on which days), or just the rate ("~2 sections/day")?
  > YOUR ANSWER:

## Status
OPEN
