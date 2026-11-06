// CTAL-TAE v2.0 — Chapter 3: Test Automation Architecture
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 3,
  title: 'Test Automation Architecture',
  time: '210 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "Core design chapter, 6 questions per sample exam incl. four 2-point K3 items. Know the gTAA interfaces and the four capabilities (generation, definition, execution, adaptation), what the TAA must address, the THREE TAF layers (test scripts → business logic → core libraries), the pros/cons of each test automation approach (capture/playback → linear → structured → DDT → KDT; TDD; BDD), and the facade / singleton / page object / flow model patterns.",
  sections: [
    {
      id: '3.1.1', title: 'Major Capabilities in a Test Automation Architecture', level: 'K2', type: 'deep',
      deepPoints: [
        "gTAA (generic test automation architecture) = high-level abstract view of how test automation communicates with the SUT, project management, test management and configuration management, plus the capabilities to cover when designing a TAA.",
        "Interfaces: SUT interface (SUT ↔ TAF); PROJECT MANAGEMENT interface (automation development progress); TEST MANAGEMENT interface (test case definitions ↔ automated test cases); CONFIGURATION MANAGEMENT interface (CI/CD pipelines, environments, testware).",
        "Capabilities: TEST GENERATION (optional; automated design from a test model, MBT); TEST DEFINITION (define/implement test cases & suites, separated from SUT/tools; test data, cases, library); TEST EXECUTION (execution tool + logging/reporting); TEST ADAPTATION (adaptors to SUT APIs, protocols, services)."
      ],
      examInsights: [
        "A-Q9 KEY — Matching: automated design from a model = test generation; defining tests = test definition; running + logging = test execution; connecting via protocols/services = test adaptation.",
        "ASTQB-Q9/Q10 — The interface to test management software lives in the gTAA; the ecosystem the automation runs in is the TAS."
      ]
    },
    {
      id: '3.1.2', title: 'Designing a Test Automation Solution', level: 'K2', type: 'deep',
      deepPoints: [
        "A TAS is defined by the SUT's functional, non-functional and technical requirements and the tools needed; built with commercial or open-source tools, possibly plus SUT-SPECIFIC ADAPTORS.",
        "The TAA (technical design of the TAS) addresses: selecting tools and tool libraries; developing plugins/components; connectivity and interface requirements (firewalls, databases, URLs, mocks/stubs, message queues, protocols); connecting test management and defect management tools; version control and repositories."
      ],
      examInsights: [
        "A-Q10 KEY — SUT output can't be translated back to the automated test cases → the SUT-specific adaptors were not implemented.",
        "ASTQB-Q11 — Connecting to the SUT via APIs = the test adaptation capability."
      ]
    },
    {
      id: '3.1.3', title: 'Layering of Test Automation Frameworks', level: 'K3', type: 'deep',
      deepPoints: [
        "TAF = foundation of the TAS: test harness (test runner), test libraries, test scripts, test suites. Keep the number of layers LOW.",
        "TEST SCRIPTS layer: test case repository and suite annotations; calls the business logic layer (steps, flows, API calls) — never the core libraries directly.",
        "BUSINESS LOGIC layer: all SUT-DEPENDENT libraries (inherit from or use facades of the core libraries); configures the TAF to run against the SUT — e.g. the connection to a new app; page and flow models live here.",
        "CORE LIBRARIES layer: SUT-INDEPENDENT libraries reusable across projects on the same stack — the base for scaling to multiple TAFs."
      ],
      examInsights: [
        "A-Q11 KEY (K3, 2 pts) — Reusing a framework for a new app: configure the connection to the new app in the BUSINESS LOGIC layer.",
        "ASTQB-Q12 — Page and flow models → business logic layer; generic user actions → core libraries."
      ]
    },
    {
      id: '3.1.4', title: 'Approaches for Automating Test Cases', level: 'K3', type: 'deep',
      deepPoints: [
        "CAPTURE/PLAYBACK: record manual interactions (no-code / low-code). + easy to start. − hard to maintain/scale; SUT must be available; small scope, rarely changing SUT; tied to the recorded SUT version; recording each test is time consuming.",
        "LINEAR SCRIPTING: scripts without custom libraries (can edit recorded scripts). + easy start, easier to modify than recordings. − same maintenance problems; needs some programming.",
        "STRUCTURED SCRIPTING: reusable test libraries/steps/journeys. + maintainable, scalable, portable; business logic separate. − programming needed; initial TAF investment.",
        "TDD: red → green → refactor. + simpler component tests, better code quality/testability/coverage, fewer defects propagate. − takes time to learn; done badly gives false confidence.",
        "DATA-DRIVEN (DDT, builds on structured): same scripts, many data files. + quick test expansion, low cost per test, test analysts write data. − needs test data management.",
        "KEYWORD-DRIVEN (KDT, often builds on DDT): tables of user-perspective keywords + data. + BAs/TAs can write tests, usable manually too (ISO/IEC/IEEE 29119-5). − keyword maintenance is complex; big effort for small systems.",
        "BDD: Given/When/Then feature files executed by a BDD tool. + communication, scenarios = test cases, multiple levels. − negative/edge cases still needed; often misused as 'just natural language'; complex step maintenance; complex steps hurt debugging."
      ],
      examInsights: [
        "A-Q12 KEY (K3, 2 pts) — Quick results, small scope, testers who can't program and implement tests directly → capture/playback.",
        "A-Q13 KEY (K3, 2 pts) — Same flows, many data variations, results needed quickly → data-driven testing.",
        "ASTQB-Q13 — Fast, cheap demo where maintainability doesn't matter → capture/playback."
      ]
    },
    {
      id: '3.1.5', title: 'Design Principles and Design Patterns', level: 'K3', type: 'deep',
      deepPoints: [
        "Test automation IS software development.",
        "OOP principles: encapsulation, abstraction, inheritance, polymorphism. SOLID: single responsibility, open-closed, Liskov substitution, interface segregation, dependency inversion → readability, maintainability, scalability.",
        "FACADE hides implementation details, exposing only what testers need. SINGLETON ensures only one driver communicates with the SUT.",
        "PAGE OBJECT MODEL: a class per page holds the locators — SUT structure changes are fixed in ONE place.",
        "FLOW MODEL: an extra facade over page objects storing user actions — a double facade; steps reused across scripts."
      ],
      examInsights: [
        "A-Q14 KEY (K3, 2 pts) — Frequently changing GUI and reusable user actions → flow model pattern with web elements in page objects.",
        "ASTQB-Q14 — Locators break on each code drop → page object pattern."
      ]
    }
  ]
};
