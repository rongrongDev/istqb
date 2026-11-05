// "Where do I start?" self-check. Original diagnostic questions written for this site — NOT
// official ISTQB/ASTQB sample questions, and never mixed into the exam quizzes.
// Six areas × three questions of rising difficulty (1 beginner, 2 practitioner, 3 expert).
// Placement per area: 0–1 right → beginner, 2 → practitioner, 3 → expert.

export const areas = [
  {
    id: "design", title: "Test design", path: "test-design",
    questions: [
      {
        q: "A field accepts whole numbers from 1 to 100. Which set of values best tests its boundaries?",
        options: ["1, 50, 100", "0, 1, 100, 101", "-1, 0, 50", "10, 20, 30, 40"],
        correct: 1,
        why: "Bugs gather at the edges: test the value on each boundary and the one just outside it.",
      },
      {
        q: "A rule has three independent yes/no conditions. How many columns does a full decision table have?",
        options: ["3", "6", "8", "9"],
        correct: 2,
        why: "Each condition doubles the combinations: 2 × 2 × 2 = 8.",
      },
      {
        q: "Your tests reach 100% statement coverage of a function. What can you conclude?",
        options: ["Every branch outcome was exercised", "The function has no defects", "Every line ran at least once, but some decision outcomes may never have been taken", "Every input partition was tested"],
        correct: 2,
        why: "An if without an else can be fully line-covered while its false outcome is never tested; branch coverage is stronger.",
      },
    ],
  },
  {
    id: "process", title: "Test process and risk", path: "fundamentals",
    questions: [
      {
        q: "A bug is fixed. Which pair of tests should follow?",
        options: ["Smoke and load tests", "Re-run the failed test (confirmation) and check nothing else broke (regression)", "Only a code review", "A full exploratory session on every feature"],
        correct: 1,
        why: "Confirmation testing checks the fix; regression testing checks the change didn't break existing behaviour.",
      },
      {
        q: "With limited time, how should you decide what to test first?",
        options: ["Alphabetically by feature", "Whatever was built most recently", "By product risk: likelihood of failure × impact if it fails", "Whatever has the most test cases already written"],
        correct: 2,
        why: "Risk-based prioritisation puts effort where failures are both likely and costly.",
      },
      {
        q: "Exit criteria are met on paper, but a critical defect affecting 2% of users is still open the day before a fixed release. What's the most useful action?",
        options: ["Release silently and fix later", "Report the risk, its impact and the options (fix, workaround, delay, exclude feature) to the people who decide", "Lower the defect's severity so it no longer blocks", "Stop all testing until it's fixed"],
        correct: 1,
        why: "Testing informs the release decision; stakeholders decide with clear risk information, not a hidden or relabelled defect.",
      },
    ],
  },
  {
    id: "automation", title: "Test automation", path: "automation",
    questions: [
      {
        q: "Which test is usually the best first candidate for automation?",
        options: ["A one-off check of a feature being removed next week", "A stable regression test run before every release", "An exploratory session on a new design", "A judgement of whether the colours look pleasant"],
        correct: 1,
        why: "Stable, frequently repeated checks pay back the effort of automating them fastest.",
      },
      {
        q: "Hundreds of UI tests break every time a button label changes. What design change helps most?",
        options: ["Add longer waits", "Put locators and page actions in one layer (e.g. page objects) that tests reuse", "Run the tests less often", "Record the tests again after each change"],
        correct: 1,
        why: "Layering isolates UI details, so one change is fixed in one place instead of in every test.",
      },
      {
        q: "A test passes and fails intermittently with no code change. What should you do first?",
        options: ["Delete it", "Retry it automatically until it passes", "Investigate the test and environment (timing, shared data, dependencies) before trusting either result", "Mark the build green regardless"],
        correct: 2,
        why: "Flaky results are information; hiding them with retries or deletion lets real defects through.",
      },
    ],
  },
  {
    id: "performance", title: "Performance", path: "performance",
    questions: [
      {
        q: "Which test checks how a system behaves well beyond its expected peak load?",
        options: ["Load test", "Stress test", "Smoke test", "Usability test"],
        correct: 1,
        why: "Stress testing pushes past expected limits to see how the system fails and recovers.",
      },
      {
        q: "Why report the 90th-percentile response time rather than the average?",
        options: ["It's always lower", "Averages hide the slow experiences a sizeable share of users actually get", "Tools can't calculate averages", "It's required by law"],
        correct: 1,
        why: "A few very fast responses can make the average look fine while one user in ten waits far longer.",
      },
      {
        q: "Target: 30 transactions per second. Each takes 1 s to respond plus 9 s think time. Roughly how many virtual users are needed?",
        options: ["30", "100", "300", "3,000"],
        correct: 2,
        why: "Virtual users ≈ throughput × (response + think time) = 30 × 10 = 300.",
      },
    ],
  },
  {
    id: "security", title: "Security", path: "security",
    questions: [
      {
        q: "A login page says \"No account with that email\" for unknown addresses. Why is that a security issue?",
        options: ["It slows down login", "It lets attackers find out which accounts exist", "It breaks accessibility rules", "It isn't — it's helpful"],
        correct: 1,
        why: "Account enumeration: attackers learn valid usernames, leaving only the password to guess.",
      },
      {
        q: "A user changes the order ID in a URL from 1001 to 1002 and sees someone else's order. What failed?",
        options: ["Authentication", "Authorisation (access control)", "Encryption", "Performance"],
        correct: 1,
        why: "The user is logged in correctly, but the system didn't check they may access that object.",
      },
      {
        q: "You're asked to run an active vulnerability scan against production tonight. What must come first?",
        options: ["Nothing — scans are harmless", "Written approval, an agreed scope and time window, and a plan if the scan disrupts the service", "Turning off logging", "Telling only the developers"],
        correct: 1,
        why: "Active scans send attacks and can disrupt systems; testing without approval can be illegal and harmful.",
      },
    ],
  },
  {
    id: "usability", title: "Usability and accessibility", path: "usability",
    questions: [
      {
        q: "Which is a usability problem?",
        options: ["The server runs out of memory", "Users can't find how to cancel an order, though the feature works", "A password is stored in plain text", "A report is generated in 2 seconds"],
        correct: 1,
        why: "The function works to specification, but people can't use it effectively — that's usability.",
      },
      {
        q: "In a usability test session, the participant is confused but still trying. What should the moderator do?",
        options: ["Explain how the feature works", "Stay quiet, observe, and encourage thinking aloud; help only if they're completely stuck", "End the session", "Ask leading questions to guide them"],
        correct: 1,
        why: "The test measures what users can do on their own; helping early hides the problem.",
      },
      {
        q: "Automated accessibility checks report zero WCAG violations. What does that tell you?",
        options: ["The site is fully accessible", "Only that the issues a tool can detect weren't found; keyboard and screen-reader checks are still needed", "The site meets WCAG AAA", "No users with disabilities will have problems"],
        correct: 1,
        why: "Tools catch a share of problems (contrast, missing labels); many barriers need human evaluation.",
      },
    ],
  },
];

export function placement(right) {
  return right >= 3 ? "expert" : right === 2 ? "practitioner" : "beginner";
}
