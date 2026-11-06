// CT-TAS v1.0 — Chapter 3 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The strategic heart of the syllabus: how automated tests should be distributed across test levels, how the SUT's architecture and the SDLC shape that distribution, how to shift testing left and right, and how to decide which tests to automate — including what only automation can do and what is hard to automate.",
  keywords: [
    "API testing", "component testing", "contract testing", "shift left", "shift right", "system under test",
    "test automation approach", "test condition", "test double", "test level", "test pyramid",
  ],
  objectives: [
    { id: "CT-TAS-3.1.1", level: "K2", text: "Differentiate between test automation distributions" },
    { id: "CT-TAS-3.1.2", level: "K2", text: "Select a test automation approach based on the system under test architecture" },
    { id: "CT-TAS-3.1.3", level: "K3", text: "Demonstrate ways to optimize test automation distribution to achieve shift left and shift right approaches" },
    { id: "CT-TAS-3.2.1", level: "K2", text: "Explain how test automation projects conform with legacy software development lifecycle models" },
    { id: "CT-TAS-3.2.2", level: "K2", text: "Explain how test automation projects conform with Agile software development best practices that support test automation" },
    { id: "CT-TAS-3.2.3", level: "K3", text: "Prepare for test automation projects to conform with DevOps best practices that support test automation in continuous testing" },
    { id: "CT-TAS-3.3.1", level: "K2", text: "Explain criteria for determining the suitability of tests for test automation" },
    { id: "CT-TAS-3.3.2", level: "K2", text: "Identify challenges that only test automation can address" },
    { id: "CT-TAS-3.3.3", level: "K2", text: "Identify test conditions that are difficult to automate" },
  ],
  sections: {
    "3.1.1": {
      objective: "CT-TAS-3.1.1",
      body: [
        { type: "p", text: "Mike Cohn's test automation pyramid has three levels — unit (ISTQB: component), service and UI. The service level covers three test types: component integration testing (UI and API validated with test doubles such as mocks and stubs), contract testing (contracts between services) and API testing (real services and real data). UI testing is end-to-end through the GUI." },
        { type: "p", text: "Sketch the current distribution (manual and automated, per level) as a baseline and a target shape achievable in the timeline. If feasible, the target is the pyramid." },
        { type: "table", headers: ["Distribution", "Shape", "Consequence"], rows: [
          ["Pyramid", "Many fast, stable low-level tests; few UI tests", "Balanced; the usual target state"],
          ["Ice cream cone", "Inverted: reasonable service testing, most defects found by UI tests, little component testing", "Costly UI automation; defects found late"],
          ["Hourglass", "Heavy at the top and bottom, service level mostly missing", "Integration defects slip through; if logic sits in APIs, many UI tests can move down"],
          ["Umbrella", "Almost entirely UI tests", "Slow defect turnaround, costly maintenance; if lower levels are impossible, optimize the UI suite's speed and stability"],
        ]},
      ],
    },
    "3.1.2": {
      objective: "CT-TAS-3.1.2",
      body: [
        { type: "p", text: "The right level structure depends on culture, engineering maturity, the SDLC and whether the SUT is a mainframe or microservices. The pyramid is ideal but may be out of reach or take a long time, so set realistic intermediate targets — for example umbrella to hourglass — and then the next target." },
        { type: "p", text: "Mainframes are accessed through terminal emulation (green screens); batch validation is limited, component testing is hard and there are few or no APIs, so testing runs mostly through batch jobs, databases and the GUI. When legacy systems are modernized toward microservices, introduce API and contract testing for the modernized parts." },
      ],
    },
    "3.1.3": {
      objective: "CT-TAS-3.1.3",
      body: [
        { type: "p", text: "With current and target distributions known, plan a roadmap: what to automate (scope), how (strategy), a prioritized backlog and entry criteria for automation." },
        { type: "list", intro: "Shift left — bottom-up:", items: [
          "Low code coverage signals missing component tests: add them first.",
          "Then review and improve their quality — best practices, TDD, test technique workshops.",
          "Test UI and API components with test doubles instead of real services and data: faster, more consistent, early feedback that fits CI/CD.",
          "Add contract testing between providers and consumers to find root causes earlier and reduce API and UI tests; an API call graph shows which APIs consume or produce which.",
        ]},
        { type: "list", intro: "Shift right — testing after release (preproduction or production), monitoring performance and user feedback; combined with observability, automation speeds release-or-rollback decisions. It aims to:", items: [
          "Understand user preferences.",
          "Support canary releases and dark launches with minimal disruption.",
          "Find production defects early.",
          "Expand the scope of automation and increase coverage.",
        ]},
      ],
    },
    "3.2.1": {
      objective: "CT-TAS-3.2.1",
      body: [
        { type: "table", headers: ["Model", "Automation consequences"], rows: [
          ["Waterfall", "Testing follows requirements, design and implementation, so automation starts late; long cycles leave few chances to use it and feedback arrives too late — lowest ROI"],
          ["V-model", "Test planning and design happen early (e.g. architecture design yields integration test design), but the TAS is still implemented late — better ROI than waterfall, still behind Agile"],
        ]},
      ],
    },
    "3.2.2": {
      objective: "CT-TAS-3.2.2",
      body: [
        { type: "p", text: "The Agile ideal is in-sprint test automation: every user story's exit criteria include its automation work — test definitions, automated tests, TAF updates and, where relevant, CI/CD integration — so the agreed scope is deployable by the end of the sprint." },
        { type: "p", text: "Teams that apply Agile poorly leave automation out of estimates, push it into separate tickets or don't track it at all. An immature team should first achieve in-sprint testing with automation lagging one sprint, then work toward in-sprint automation." },
      ],
    },
    "3.2.3": {
      objective: "CT-TAS-3.2.3",
      body: [
        { type: "p", text: "Agile organizes the work; DevOps delivers software end to end by automating build, integration, test, deployment and production activities. The result is continuous testing with feedback loops." },
        { type: "list", items: [
          "Emphasize lower-level automated tests — component, component integration and contract tests — without real data and services, so they run fast.",
          "Run automation in the same pipeline that builds the SUT, with suites triggered at each phase: local, pull request, merge, deploy.",
          "Run larger UI and API suites separately for additional value.",
          "Focus manual effort on exploratory testing and end-user feedback.",
        ]},
        { type: "seealso", label: "CTAL-TAE Learn — Chapter 5", href: "/ctaltae-learn", text: "which test levels run in which CI/CD pipeline, in engineering detail (5.1.1)" },
      ],
    },
    "3.3.1": {
      objective: "CT-TAS-3.3.1",
      body: [
        { type: "p", text: "A test analyst who knows what's automatable, or a TAE with domain knowledge, selects and prioritizes tests for automation by asking:" },
        { type: "list", items: [
          "Is it technically possible? Are there technical challenges, and is the team trained for them?",
          "Does the coding effort give an adequate ROI (see 5.1.1)?",
          "Is there value in running it frequently?",
          "Functional or non-functional? Part of smoke, regression or confirmation testing?",
          "Is it repeatable, and easy to maintain when the SUT changes?",
          "Does it cover frequently used business workflows?",
          "Does it overlap with other tests so steps and data can be reused?",
        ]},
      ],
    },
    "3.3.2": {
      objective: "CT-TAS-3.3.2",
      body: [
        { type: "list", intro: "Some testing is only practical with automation — when:", items: [
          "Manual execution would take unacceptably long.",
          "Test executions must be synchronized.",
          "Results must be available in a pipeline.",
          "Large log files must be parsed for defects.",
          "Timing must be precise.",
          "Permutations across OSs, browsers, devices, locations or configurations are needed.",
          "Huge volumes of executions or data inputs are needed for coverage.",
          "Non-functional testing needs automated monitoring and analysis or simulated masses of users (stress, reliability).",
        ]},
      ],
    },
    "3.3.3": {
      objective: "CT-TAS-3.3.3",
      body: [
        { type: "list", intro: "Test conditions that are hard or impossible to automate:", items: [
          "Design requirements such as consistent look and feel across platforms — subjective, needing human review.",
          "Heavy human interaction — e.g. loan applications where agents must check details, decide manually or contact the customer.",
          "Technical restrictions — e.g. the OS blocks UI tools from reading native text messages outside the SUT.",
          "Lengthy time dependencies — e.g. waiting two hours for a session timeout — unless time can be manipulated with mocks, server-side responses or OS time changes.",
        ]},
      ],
    },
  },
};
