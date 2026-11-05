// Trade-off decision guides: common team decisions with each option's strengths, costs and
// when it wins. `debate` presents both sides of contested topics. Sources are named works
// (no copied text); `links` = related Learn sections, `recipes` = Toolbox recipe ids.

export const tradeoffs = [
  {
    id: "mocks-vs-real",
    title: "Test doubles or real dependencies?",
    question: "Should tests call the real database, payment provider or downstream service, or replace them with mocks, stubs or fakes?",
    options: [
      { name: "Test doubles (mocks, stubs, fakes)", pros: ["Fast and deterministic", "Can simulate errors, timeouts and rare responses", "No shared environment needed"], cons: ["Can drift from the real behaviour", "Over-mocking tests the implementation, not the behaviour", "Integration problems slip through"], when: "Component tests, error paths that are hard to trigger, and slow or costly third-party services." },
      { name: "Real dependencies", pros: ["Catches integration and configuration problems", "Higher confidence that it really works"], cons: ["Slower and flakier", "Needs environments and test data", "Hard to force failure modes"], when: "Integration and system tests of the critical paths, and anywhere the dependency's behaviour is the risk." },
    ],
    rule: "Mock at the edges you don't own and keep a smaller set of tests against the real thing; make sure every double is checked against reality somewhere (e.g. contract tests).",
    links: [["ctfl", "2.2.1"], ["ctaltae", "5.1.3"], ["ctqdo", "3.2.2"]],
    recipes: ["newman-api"],
    sources: ["Gerard Meszaros, xUnit Test Patterns (2007) — test double terminology", "Martin Fowler, \"Mocks Aren't Stubs\" (martinfowler.com)"],
  },
  {
    id: "e2e-vs-contract",
    title: "End-to-end tests or contract tests between services?",
    question: "How do you check that independently deployed services still work together?",
    options: [
      { name: "End-to-end tests", pros: ["Test the real user journey across services", "Catch problems no single team sees"], cons: ["Slow, flaky and hard to debug", "Need every service deployed together", "Become a bottleneck as services grow"], when: "A few critical journeys (sign-up, checkout) before release." },
      { name: "Consumer-driven contract tests", pros: ["Fast, run in each service's own pipeline", "Pinpoint which service broke the agreement", "Let teams deploy independently"], cons: ["Don't test full journeys or data flows", "Need discipline to keep contracts current", "Tooling to learn (e.g. Pact)"], when: "Many services owned by different teams, deploying independently." },
    ],
    rule: "Use contracts for the many service-to-service agreements and keep end-to-end tests for the handful of journeys that matter most.",
    links: [["ctqdo", "3.2.2"], ["ctaltae", "5.1.1"], ["ctfl", "2.2.1"]],
    recipes: ["newman-api", "playwright-ui"],
    sources: ["Ian Robinson, \"Consumer-Driven Contracts: A Service Evolution Pattern\" (martinfowler.com, 2006)", "Pact documentation (docs.pact.io)"],
  },
  {
    id: "pyramid-vs-trophy",
    title: "Test pyramid or testing trophy?",
    question: "What mix of unit, integration and end-to-end tests should a team aim for?",
    options: [
      { name: "Test pyramid", pros: ["Many fast unit tests give quick, precise feedback", "Few slow UI tests keep the suite fast"], cons: ["Unit tests can be tightly coupled to implementation", "Lots of unit tests can still miss integration problems"], when: "Logic-heavy code (calculations, rules), back-end services, libraries." },
      { name: "Testing trophy", pros: ["Most effort on integration tests, which reflect how users use the software", "Static analysis as the base layer", "Less brittle under refactoring"], cons: ["Integration tests are slower and harder to diagnose", "Needs good test infrastructure"], when: "UI-heavy front-ends and apps where most risk is in how parts fit together." },
    ],
    debate: {
      a: "Pyramid view: cheap, fast, isolated tests at the bottom give the best feedback per cost; push tests as low as possible.",
      b: "Trophy view: confidence comes from testing the way software is used; integration tests give the best confidence per cost, and many unit tests just mirror the code.",
      common: "Both agree on few slow end-to-end tests and on pushing checks to the cheapest layer that still gives real confidence. The right shape depends on where your risks are.",
    },
    rule: "Treat the shape as a starting point; look at where your defects actually come from and where tests break for the wrong reasons, then adjust.",
    links: [["ctfl", "5.1.6"], ["cttas", "3.1.1"], ["cttas", "3.1.3"]],
    recipes: ["playwright-ui"],
    sources: ["Mike Cohn, Succeeding with Agile (2009) — the test automation pyramid", "Ham Vocke, \"The Practical Test Pyramid\" (martinfowler.com, 2018)", "Kent C. Dodds, \"Write tests. Not too many. Mostly integration.\" and the Testing Trophy"],
  },
  {
    id: "staging-vs-production",
    title: "Test in staging or in production?",
    question: "Is a pre-production environment enough, or should some testing happen in production?",
    options: [
      { name: "Staging / pre-production", pros: ["Safe: no real customers or data at risk", "Full control of data and timing"], cons: ["Never quite matches production (scale, data, configuration, traffic)", "Expensive to keep in sync"], when: "Functional, destructive and security testing; anything that could harm users." },
      { name: "Testing in production (safely)", pros: ["Real traffic, data and infrastructure", "Finds problems staging can't reproduce"], cons: ["Risk to real users if done carelessly", "Needs feature flags, canary releases, monitoring and fast rollback"], when: "Monitoring, canary and staged rollouts, A/B tests, synthetic checks, chaos experiments with a small blast radius." },
    ],
    rule: "Do both: test thoroughly before release, then verify safely in production with gradual rollout and good observability. Never run destructive or unapproved tests on production.",
    links: [["ctqdo", "4.2.2"], ["ctqdo", "4.2.6"], ["ctqdo", "4.2.7"], ["cttas", "3.1.3"]],
    recipes: [],
    sources: ["Cindy Sridharan, \"Testing in Production, the safe way\" (2018)", "Google, Site Reliability Engineering (O'Reilly, 2016) — canarying"],
  },
  {
    id: "coded-vs-record",
    title: "Coded automation or record-and-replay?",
    question: "Should automated UI tests be written in code or captured with a recorder / low-code tool?",
    options: [
      { name: "Coded (framework + code)", pros: ["Maintainable with abstractions (page objects)", "Version-controlled, reviewable, reusable", "Full power for data and assertions"], cons: ["Needs programming skills", "Slower to create the first tests"], when: "Long-lived suites, CI pipelines, complex applications." },
      { name: "Record-and-replay / low-code", pros: ["Quick to start", "Usable by non-programmers"], cons: ["Brittle: recordings break on UI changes", "Duplicated steps everywhere", "Weak assertions unless edited"], when: "Prototypes, one-off checks, or as a starting point you then refactor." },
    ],
    rule: "Recordings are a quick start, not an architecture. For anything you'll keep, layer the framework so UI details live in one place.",
    links: [["ctaltae", "3.1.3"], ["ctaltae", "3.1.4"], ["ctaltae", "4.3.1"]],
    recipes: ["playwright-ui"],
    sources: ["ISTQB CTAL-TAE v2.0 syllabus, chapter 3 (approaches for automating test cases)"],
  },
  {
    id: "synthetic-vs-masked",
    title: "Synthetic test data or masked production data?",
    question: "Where should realistic test data come from without breaking privacy rules?",
    options: [
      { name: "Masked / anonymised production data", pros: ["Realistic distributions and edge cases", "Reveals data-quality problems"], cons: ["Masking can be reversible if done badly", "Still regulated if not truly anonymised", "Large and slow to refresh"], when: "Migration and reconciliation testing, performance testing with realistic volumes." },
      { name: "Synthetic data", pros: ["No personal data at all", "Can target specific edge cases and volumes", "Repeatable and versionable"], cons: ["May miss real-world oddities", "Generating realistic relationships is work"], when: "Functional and automated tests, shared or less-secure environments, early development." },
    ],
    rule: "Default to synthetic data for automated tests; use properly anonymised production data where realism is the point, with access controls and an audit trail.",
    links: [["ctft", "4.3"], ["ctqdo", "3.1.4"], ["ctai", "5.1.1"]],
    recipes: [],
    sources: ["GDPR (EU 2016/679) on anonymisation vs pseudonymisation", "ISTQB CT-FT v1.0 syllabus, section 4.3"],
  },
  {
    id: "scripted-vs-exploratory",
    title: "Scripted test cases or exploratory testing?",
    question: "Should testers follow written test cases or explore with charters?",
    options: [
      { name: "Scripted tests", pros: ["Repeatable and auditable", "Easy to hand over and automate", "Clear coverage of requirements"], cons: ["Find what you expected to look for", "Expensive to write and maintain", "Testers can stop thinking"], when: "Regulated contexts, regression, acceptance criteria, anything you'll automate." },
      { name: "Exploratory testing", pros: ["Finds unexpected problems fast", "Adapts as you learn", "Little preparation"], cons: ["Depends on tester skill", "Harder to show coverage", "Not repeatable as-is"], when: "New or changing features, missing specifications, usability, after scripted tests pass." },
    ],
    rule: "Combine them: scripts (ideally automated) for known risks, time-boxed charters for the unknown, with notes good enough to report coverage.",
    links: [["ctfl", "4.4.2"], ["ctact", "2.3.1"], ["ctmat", "3.3.4"]],
    recipes: [],
    sources: ["James Whittaker, Exploratory Software Testing (2009)", "Elisabeth Hendrickson, Explore It! (2013)"],
  },
  {
    id: "shift-left-vs-right",
    title: "Shift left or shift right?",
    question: "Should testing effort move earlier in development, or later into production?",
    options: [
      { name: "Shift left", pros: ["Defects found when cheapest to fix", "Reviews and early tests prevent defects", "Fast feedback in CI"], cons: ["Can't see real-world usage, scale or data", "Needs investment in skills and tooling"], when: "Requirements reviews, TDD/ATDD, static analysis, component and API tests." },
      { name: "Shift right", pros: ["Learns from real users and traffic", "Finds problems pre-production can't", "Validates value, not just correctness"], cons: ["Problems reach some users first", "Needs monitoring, flags and rollback"], when: "Monitoring, canaries, A/B tests, chaos engineering, usage analytics." },
    ],
    rule: "Not either/or: shift left to prevent and catch most defects cheaply, shift right to learn what only production can teach.",
    links: [["ctfl", "2.1.5"], ["cttas", "3.1.3"], ["ctqdo", "4.2.6"]],
    recipes: ["k6-load"],
    sources: ["ISTQB CTFL v4.0 section 2.1.5", "ISTQB CT-TAS syllabus section 3.1.3"],
  },
];
