// Templates and checklists: ready-to-copy Markdown, paraphrased from what the syllabi say an
// artefact should contain. `links` = the Learn sections that explain each one.

export const templates = [
  {
    id: "test-plan",
    area: "Test management",
    title: "Test plan outline",
    use: "Agree scope, approach and exit criteria for a release or project before testing starts.",
    links: [["ctfl", "5.1.1"], ["ctfl", "5.1.3"]],
    body: `# Test plan — <product / release>

## Context
- Scope: what is in and out of testing
- Test objectives: what testing must show or find
- Test basis: requirements, stories, designs used

## Approach
- Test levels and test types
- Techniques per area (e.g. boundary values for pricing rules)
- Automation: what is automated, where it runs
- Test environments and test data

## Risks
| Risk | Likelihood | Impact | How testing addresses it |
|---|---|---|---|

## Criteria
- Entry criteria: <e.g. build deployed to staging, smoke tests green>
- Exit criteria: <e.g. no open critical defects, all high-risk areas tested>

## Schedule, roles, communication
- Milestones and owners
- Reporting: what, to whom, how often
`,
  },
  {
    id: "exploratory-charter",
    area: "Test design",
    title: "Exploratory testing charter",
    use: "Give a time-boxed exploratory session a clear mission and record what you found.",
    links: [["ctfl", "4.4.2"], ["ctact", "2.3.1"]],
    body: `# Charter — <short mission>

- Explore: <area or feature>
- With: <resources — data, tools, personas, e.g. "as a first-time user">
- To discover: <information you want, e.g. "how refunds handle partial payments">
- Time box: 60 minutes
- Tester(s): <names> · Date: <date>

## Session notes
- Setup and data used:
- Ideas tried:

## Findings
| # | Type (bug / question / idea) | Description | Severity |
|---|---|---|---|

## Coverage and follow-up
- What was covered / not covered:
- New charters suggested:
`,
  },
  {
    id: "bug-report",
    area: "Defect management",
    title: "Defect report",
    use: "Report a failure so someone else can reproduce, prioritise and fix it without asking you.",
    links: [["ctfl", "5.5"], ["softskills", "2.2.3"]],
    body: `# <Short title: what fails, where, under which condition>

- ID: <auto> · Reported by: <name> · Date: <date>
- Environment: <build/version, browser/device, test environment>
- Severity: <critical / major / minor> · Priority: <set by triage>

## Steps to reproduce
1.
2.
3.

## Expected result
<what should happen, with the requirement or criterion it comes from>

## Actual result
<what happened — exact message, screenshot, log excerpt>

## Notes
- Reproducible: <always / sometimes (x of y) / once>
- Workaround: <if any>
- Attachments: <screenshots, video, logs>
`,
  },
  {
    id: "acceptance-criteria",
    area: "Requirements",
    title: "Acceptance criteria checklist",
    use: "Review a user story's acceptance criteria before development starts.",
    links: [["ctact", "2.1"], ["ctfl", "4.5.2"]],
    body: `# Acceptance criteria review — <story ID>

- [ ] Each criterion is a statement that is either true or false
- [ ] Each criterion is measurable (numbers, limits, exact messages)
- [ ] No implementation details (databases, frameworks, button colours)
- [ ] Happy path covered
- [ ] Error and edge cases covered (invalid input, limits, empty states)
- [ ] Non-functional needs covered where relevant (speed, security, accessibility)
- [ ] Business analyst, developer and tester agree on the meaning
- [ ] Each criterion can be traced to at least one acceptance test
`,
  },
  {
    id: "gherkin-feature",
    area: "Requirements",
    title: "Gherkin feature file",
    use: "Write behaviour as Given–When–Then scenarios that business people can read and tools can run.",
    links: [["ctact", "2.2.2"], ["ctfl", "4.5.3"]],
    body: `Feature: <capability, in business language>
  As a <role>
  I want <goal>
  So that <benefit>

  Background:
    Given <state shared by every scenario>

  Scenario: <happy path, one behaviour>
    Given <starting state>
    When <one user action>
    Then <observable result>

  Scenario Outline: <rule checked with several examples>
    Given <state with <value>>
    When <action>
    Then <result <expected>>

    Examples:
      | value | expected |
      |       |          |
`,
  },
  {
    id: "risk-register",
    area: "Test management",
    title: "Product risk register",
    use: "List product risks, score them and decide how testing responds.",
    links: [["ctfl", "5.2.3"], ["ctfl", "5.2.4"]],
    body: `# Product risk register — <product>

Scale: likelihood and impact 1 (low) – 3 (high); risk level = likelihood × impact.

| ID | Risk (what could go wrong for users or the business) | Likelihood | Impact | Level | Response (test type, depth, owner) | Status |
|---|---|---|---|---|---|---|
| R1 | | | | | | |

Response options: test more deeply, test earlier, add reviews, accept, transfer, or avoid.
Review the register at every release and when the product changes.
`,
  },
  {
    id: "usability-test-script",
    area: "Usability",
    title: "Usability test script (moderator checklist)",
    use: "Run each usability session the same way.",
    links: [["ctut", "5.3.2"], ["ctut", "5.4"]],
    body: `# Usability test script — <product>

## Before the participant arrives
- [ ] Device, browser and test account reset
- [ ] Recording and observation room ready
- [ ] Task cards printed in order

## Briefing (read aloud)
"We're testing the product, not you. Please think aloud as you go. I can't help during tasks, but there are no wrong answers."

## Pre-session questions
1. How often do you <do the activity> today?
2. Which tools or apps do you use for it?

## Tasks
| # | Scenario wording | Data given | Complete when | Abandon after |
|---|---|---|---|---|
| 1 (simple) | | | | |

## Post-session questions
1. Which 2–3 things did you like most?
2. Which 2–3 things most need improving?
`,
  },
  {
    id: "usability-report",
    area: "Usability",
    title: "Usability test report outline",
    use: "Report usability findings in a form decision makers read.",
    links: [["ctut", "5.6.4"], ["ctut", "5.6.5"]],
    body: `# Usability test report — <product, date>

## 1. Executive summary (max one page)
- What was tested and how
- Top findings and recommendations

## 2. Findings and recommendations (max 25)
| # | Type | Severity | Finding (header + description, 2+ examples) | Recommendation |
|---|---|---|---|---|

Type: usability problem · positive finding · good idea · functional problem
Severity: minor · major · critical · catastrophic

## 3. Objectives and purpose
## 4. Method
- Participants (anonymised), environment, tasks, script
## 5. Contacts
- Moderator(s), note-taker(s)
`,
  },
  {
    id: "performance-test-plan",
    area: "Performance",
    title: "Performance test plan (one page)",
    use: "Agree what a load or stress test must prove before writing scripts.",
    links: [["ctpt", "4.1.2"], ["ctpt", "4.1.1"]],
    body: `# Performance test plan — <system>

## Objectives
- Question to answer: <e.g. "Can checkout handle Black Friday peak?">
- Acceptance criteria: <e.g. p90 response < 800 ms at 200 checkouts/min; error rate < 1%>

## Operational profile
| User action | Share of traffic | Think time |
|---|---|---|

## Load profile
- Test type: load / stress / spike / endurance
- Ramp-up, steady state, ramp-down: <durations and user counts>

## Environment and data
- Environment and how it compares to production
- Test data volume and reset approach

## Monitoring
- Client metrics: response times (percentiles), throughput, errors
- Server metrics: CPU, memory, DB, queues

## Risks and approvals
- Shared systems affected, who approves, when it runs
`,
  },
  {
    id: "security-checklist",
    area: "Security",
    title: "Web security test checklist",
    use: "A starting checklist for security checks on a web application, before or alongside specialist testing.",
    links: [["ctsec", "5.2"], ["ctsec", "5.3"], ["ctsec", "3.4.2"]],
    body: `# Security checklist — <application>

Approval to test received from: <name, date> · Scope: <hosts, accounts>

## Authentication
- [ ] Account lockout or throttling after repeated failed logins
- [ ] Login errors don't reveal whether the username exists
- [ ] Password reset links expire and work only once
- [ ] Multi-factor authentication enforced where required

## Authorisation
- [ ] Users can't reach other users' data by changing IDs in URLs or requests
- [ ] Admin functions are refused for normal users (check the API, not just hidden buttons)

## Data protection
- [ ] HTTPS everywhere; no mixed content
- [ ] Sensitive data encrypted at rest; keys not in source code
- [ ] Cookies set Secure, HttpOnly and SameSite

## Input handling
- [ ] Inputs validated server-side
- [ ] No injection (SQL, script) via forms, headers or parameters

## Operations
- [ ] Security headers present (CSP, HSTS)
- [ ] Error pages don't leak stack traces or versions
- [ ] Dependencies scanned for known vulnerabilities
`,
  },
];

export const templatesFor = (track, section) => templates.filter((t) => t.links.some(([tr, s]) => tr === track && s === section));
