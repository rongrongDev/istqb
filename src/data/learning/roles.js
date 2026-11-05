// Role-based starting points, built from topic paths (src/data/learning/paths.js) plus a few
// role-specific sections. Each extra points at (track id, section id) with a short reason.

export const roles = [
  {
    id: "developer",
    title: "Developer",
    why: "You already test your own code. Knowing test design and risk helps you write fewer, better tests and catch the bugs reviewers and users would otherwise find.",
    paths: ["fundamentals", "test-design", "automation"],
    extras: [
      { track: "ctfl", section: "4.3.2", note: "Branch coverage — what your unit-test coverage number really means" },
      { track: "ctfl", section: "1.1.2", note: "Testing vs debugging — two different jobs" },
      { track: "ctqdo", section: "2.1.4", note: "Pull requests as a quality gate" },
    ],
  },
  {
    id: "product",
    title: "Product owner or business analyst",
    why: "Clear requirements and acceptance criteria are the cheapest defect prevention there is. You decide what \"done\" means, so you shape what gets tested.",
    paths: ["fundamentals", "usability"],
    extras: [
      { track: "ctact", section: "1.1.3", note: "How unclear requirements turn into wrong tests" },
      { track: "ctact", section: "2.1", note: "Writing acceptance criteria that can be checked" },
      { track: "ctact", section: "2.2.2", note: "Given–When–Then for user stories" },
      { track: "ctact", section: "5.2.2", note: "Reading a test summary to make a release decision" },
    ],
  },
  {
    id: "manager",
    title: "Engineering or delivery manager",
    why: "You decide how much testing a release gets and when to ship. Risk, metrics and good reporting let you make those calls with evidence instead of gut feel.",
    paths: ["fundamentals"],
    extras: [
      { track: "ctfl", section: "5.1.3", note: "Entry and exit criteria — when testing can start and when it's enough" },
      { track: "ctfl", section: "5.2.3", note: "Product risk analysis for prioritising effort" },
      { track: "ctfl", section: "5.3.2", note: "What a useful test report contains" },
      { track: "ctqdo", section: "1.1.3", note: "DORA metrics for delivery performance" },
      { track: "softskills", section: "3.1.4", note: "Cost of quality — arguing for testing in budget terms" },
    ],
  },
  {
    id: "new-qa",
    title: "New QA engineer",
    why: "A solid base in how testing works, how to design tests and how to communicate findings will carry you through any team or tool stack.",
    paths: ["fundamentals", "test-design", "usability"],
    extras: [
      { track: "softskills", section: "2.2.3", note: "Writing defect reports developers act on" },
      { track: "softskills", section: "1.2.4", note: "Working with developers" },
      { track: "ctfl", section: "4.4.1", note: "Error guessing — using experience deliberately" },
    ],
  },
  {
    id: "sdet",
    title: "SDET or automation engineer",
    why: "Automation is only as good as the tests it runs and the architecture holding them. These sections cover both, plus how suites live inside pipelines.",
    paths: ["automation", "test-design", "performance"],
    extras: [
      { track: "ctqdo", section: "2.2.6", note: "Implementing a CI/CD pipeline with quality gates" },
      { track: "ctaltae", section: "5.1.1", note: "Automation at each test level inside pipelines" },
      { track: "ctaltae", section: "6.1.3", note: "Publishing useful automation progress reports" },
    ],
  },
  {
    id: "quality-lead",
    title: "Quality lead or test manager",
    why: "You set the approach for a team. Strategy, automation investment, performance and security risks, and getting buy-in all land on your desk.",
    paths: ["fundamentals", "automation", "security"],
    extras: [
      { track: "cttas", section: "2.1.3", note: "Factors when defining an automation strategy" },
      { track: "ctqdo", section: "1.1.4", note: "CALMS — culture, automation, lean, measurement, sharing" },
      { track: "softskills", section: "3.2.4", note: "Handling production escapes" },
      { track: "ctgenai", section: "5.1.2", note: "Building a GenAI strategy for testing" },
    ],
  },
];

export const getRole = (id) => roles.find((r) => r.id === id) || null;
