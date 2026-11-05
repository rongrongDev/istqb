// Tricky workplace situations: pick a response, then see how each response is rated
// (best / acceptable / risky) and why. Written for this site; ratings reflect common good
// practice and the linked syllabus sections, but real situations depend on context.

export const situations = [
  {
    id: "critical-bug-before-release",
    area: "Release",
    title: "A critical bug the day before release",
    scenario: "It's the afternoon before a fixed launch date. You find a defect that charges about 2% of customers twice when they retry a failed payment. The fix looks small but touches the payment service. The product manager wants to launch on time.",
    responses: [
      { text: "Say nothing and log it for the next sprint — the launch date is fixed.", rating: "risky", why: "Hiding a known critical risk takes the decision away from the people accountable for it, and double charges hurt customers and trust." },
      { text: "Block the release yourself until it's fixed.", rating: "risky", why: "Testers inform the release decision; they don't own it. Acting as a gatekeeper damages trust and may not be the right business call." },
      { text: "Report it immediately with impact, reproduction steps and options — fix and retest, disable retries, release with a workaround and monitoring, or delay — and let the decision makers choose.", rating: "best", why: "Gives stakeholders clear risk information and realistic options. The decision is made with eyes open, and the report is on record." },
      { text: "Ask a developer to patch it quietly tonight so the release can go out.", rating: "acceptable", why: "Fixing it is good, but an unreviewed late change to payments without retesting and stakeholder awareness creates new risk." },
    ],
    links: [["ctfl", "5.3.3"], ["ctact", "5.2.2"], ["ctfl", "5.2.4"]],
  },
  {
    id: "works-on-my-machine",
    area: "Communication",
    title: "\"Works on my machine\"",
    scenario: "A developer closes your defect report with the comment \"Cannot reproduce — works on my machine.\" You can reproduce it every time in the test environment.",
    responses: [
      { text: "Reopen it with a firmer comment.", rating: "risky", why: "Escalating tone without new information usually starts a ping-pong of reopen/close." },
      { text: "Reproduce it together: share environment details, data, logs and a screen recording, and offer a short pairing session.", rating: "best", why: "The difference is usually environment, data or configuration. Shared evidence turns a disagreement into a joint investigation." },
      { text: "Escalate to the team lead straight away.", rating: "acceptable", why: "Sometimes needed, but escalating before trying to reproduce together harms the working relationship." },
      { text: "Accept the closure — the developer knows the code best.", rating: "risky", why: "The failure is real in the test environment, which is closer to production; dropping it lets a known defect escape." },
    ],
    links: [["softskills", "1.2.4"], ["softskills", "2.2.3"], ["ctfl", "5.5"]],
  },
  {
    id: "flaky-pipeline",
    area: "Automation",
    title: "A flaky test blocks the pipeline",
    scenario: "One UI test fails about one run in five with a timeout. Every failure blocks merges for the whole team, and people have started re-running the pipeline until it passes.",
    responses: [
      { text: "Delete the test.", rating: "risky", why: "You lose whatever risk it covered, and the root cause (in the test or the product) is never found." },
      { text: "Add automatic retries until it passes.", rating: "risky", why: "Retries hide intermittent product defects (race conditions, timeouts) as well as test problems." },
      { text: "Quarantine it from the blocking stage with an owner and a deadline, investigate the cause (waits, test data, environment), then fix and restore it.", rating: "best", why: "Unblocks the team without losing the signal; the time limit and owner stop quarantine becoming a graveyard." },
      { text: "Increase the timeout to 60 seconds.", rating: "acceptable", why: "May reduce failures, but treats the symptom and can hide a real performance problem." },
    ],
    links: [["ctaltae", "7.1.3"], ["ctaltae", "7.1.2"], ["ctqdo", "3.2.1"]],
  },
  {
    id: "skip-regression",
    area: "Release",
    title: "\"We don't have time for regression testing\"",
    scenario: "A product owner asks the team to skip regression testing for a small change to the tax calculation so it can ship today.",
    responses: [
      { text: "Agree — it's a small change.", rating: "risky", why: "Small changes to shared logic often have wide effects; tax errors are costly and visible." },
      { text: "Refuse to release without the full regression suite.", rating: "acceptable", why: "Protects quality, but ignores the business need and the option of a targeted approach." },
      { text: "Propose a risk-based selection: run the tests around tax and the flows that use it, plus a smoke test, and state clearly what isn't covered.", rating: "best", why: "Matches testing effort to risk and time, and makes the remaining risk explicit for the decision." },
    ],
    links: [["ctfl", "2.2.3"], ["ctfl", "5.1.5"], ["ctfl", "5.2.3"]],
  },
  {
    id: "no-requirements",
    area: "Test design",
    title: "No requirements, results needed by Friday",
    scenario: "A new feature arrived with no written requirements. The analyst is on leave and management wants test results this week.",
    responses: [
      { text: "Wait until the requirements are written.", rating: "risky", why: "Nothing gets tested and the deadline passes; useful information was available sooner." },
      { text: "Run time-boxed exploratory sessions with charters, ask the developers and users how it should behave, and report what you learn and the open questions.", rating: "best", why: "Exploratory testing fits missing specifications; charters keep it focused and the report makes assumptions visible." },
      { text: "Write test cases based on how you think it should work.", rating: "acceptable", why: "Better than nothing, but hidden assumptions become \"expected results\" nobody agreed to." },
    ],
    links: [["ctfl", "4.4.2"], ["ctact", "2.3.1"], ["ctfl", "4.4.1"]],
  },
  {
    id: "automate-everything",
    area: "Automation",
    title: "\"Automate 100% of our tests by next quarter\"",
    scenario: "Your manager sets a goal of 100% test automation by next quarter to cut testing costs.",
    responses: [
      { text: "Start converting every manual test case to UI automation.", rating: "risky", why: "Builds a slow, brittle suite; some tests (exploratory, usability, visual judgement) shouldn't be automated at all." },
      { text: "Agree on objectives first (faster feedback, cheaper regression), pick candidates by frequency, stability and risk, favour lower layers, and report ROI.", rating: "best", why: "Automation succeeds when it serves goals; a metric like 100% says nothing about value." },
      { text: "Explain that it's impossible and keep testing manually.", rating: "acceptable", why: "Right that 100% isn't sensible, but misses the chance to automate what does pay off." },
    ],
    links: [["cttas", "1.1.1"], ["cttas", "3.3.1"], ["cttas", "3.3.3"], ["cttas", "5.1.1"]],
  },
  {
    id: "no-test-environment",
    area: "Test management",
    title: "The test environment isn't ready",
    scenario: "System testing starts Monday, but the shared test environment won't be ready for another week. The schedule can't move.",
    responses: [
      { text: "Report the project risk with its impact on the schedule, and propose mitigations: static testing now, test in a temporary environment or with service virtualisation, and re-plan priorities.", rating: "best", why: "Turns a blocker into managed risk and keeps useful work going." },
      { text: "Test in production instead.", rating: "risky", why: "Unplanned production testing risks real customers and data, and usually breaks policies." },
      { text: "Wait and compress testing into the remaining time.", rating: "acceptable", why: "Sometimes unavoidable, but silently squeezing testing hides the risk from decision makers." },
    ],
    links: [["ctfl", "5.2.2"], ["ctfl", "3.1.2"], ["ctfl", "5.1.3"]],
  },
  {
    id: "rejected-usability-findings",
    area: "Communication",
    title: "Developers dismiss usability findings",
    scenario: "Your heuristic review found that users must re-enter data on the next page. The developers say it's \"just your opinion\" and won't change it.",
    responses: [
      { text: "Argue harder in the next meeting.", rating: "risky", why: "Opinion against opinion rarely moves anyone." },
      { text: "Run a short usability test with a few real users and invite the developers to watch.", rating: "best", why: "Seeing real users struggle turns opinion into evidence; observed sessions are the most convincing way to sell findings." },
      { text: "Escalate to management to force the change.", rating: "acceptable", why: "Might work, but builds resentment and doesn't build the team's understanding." },
    ],
    links: [["ctut", "5.6.3"], ["ctut", "7.1.1"], ["ctut", "4.2.3"]],
  },
  {
    id: "security-scan-production",
    area: "Security",
    title: "\"Just run a scan on production tonight\"",
    scenario: "A manager asks you to run an active vulnerability scan against the production site tonight because an audit is coming.",
    responses: [
      { text: "Run it tonight — it's what was asked.", rating: "risky", why: "Active scans send attacks and can disrupt services or data; without written approval it may even be illegal." },
      { text: "Get written approval and an agreed scope and time window, inform operations, prepare a rollback/stop plan — or scan a production-like environment instead.", rating: "best", why: "Security testing needs explicit authorisation and planning to be safe and defensible." },
      { text: "Run a passive scan instead without telling anyone.", rating: "acceptable", why: "Lower risk, but still unapproved activity on production." },
    ],
    links: [["ctsec", "3.4.2"], ["ctsec", "3.4.1"], ["ctsec", "8.1"]],
  },
  {
    id: "bug-count-target",
    area: "Test management",
    title: "Bonus tied to number of bugs found",
    scenario: "Management proposes rewarding testers by the number of defects they log each month.",
    responses: [
      { text: "Welcome it — it motivates testers.", rating: "risky", why: "Encourages splitting and logging trivial issues, and sets testers against developers." },
      { text: "Suggest measures tied to outcomes — escaped defects, risk coverage, time to feedback — and explain how count targets distort behaviour.", rating: "best", why: "Metrics shape behaviour; outcome-based measures reward what the business actually needs." },
      { text: "Accept it but don't change how you work.", rating: "acceptable", why: "Avoids gaming yourself, but the incentive still harms the team." },
    ],
    links: [["ctfl", "5.3.1"], ["softskills", "3.1.4"], ["ctfl", "1.5.2"]],
  },
];

export const ratingLabel = { best: "Best", acceptable: "Acceptable", risky: "Risky" };
