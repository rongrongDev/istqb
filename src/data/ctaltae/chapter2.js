// CTAL-TAE v2.0 — Chapter 2: Preparing for Test Automation
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 2,
  title: 'Preparing for Test Automation',
  time: '180 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "5 questions per sample exam, including two 3-point K4 analysis questions. Know testability = observability + controllability + architecture transparency, which tests belong in which ENVIRONMENT (local dev → build → integration → preproduction → production), the requirement questions to ask when analyzing an SUT, and the tool comparison table (tools in columns, requirements in rows).",
  sections: [
    {
      id: '2.1.1', title: 'Infrastructure Configuration Needs for Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "TESTABILITY (interfaces enabling control and observation) is a non-functional requirement designed in parallel with the SUT — usually by a software architect with a TAE.",
        "Configuration aids: accessibility identifiers (generated or set manually), system environment variables, deployment variables (set before deployment).",
        "Design for testability: OBSERVABILITY (interfaces to see whether actual = expected), CONTROLLABILITY (interfaces to perform actions: UI elements, function calls, TCP/IP, USB, signals), ARCHITECTURE TRANSPARENCY (clear documented components/interfaces at all levels)."
      ],
      examInsights: [
        "A-Q4 KEY — The TAF can access interfaces to PERFORM ACTIONS on the system = controllability.",
        "ASTQB-Q4 — Observability lets automation determine whether expected results were achieved."
      ]
    },
    {
      id: '2.1.2', title: 'Test Automation in Different Environments', level: 'K2', type: 'deep',
      deepPoints: [
        "LOCAL DEVELOPMENT: component, GUI and API tests; white-box checks in the IDE.",
        "BUILD: build + low-level tests (component, component integration) and static analysis on a local machine or CI/CD agent — no deployment.",
        "INTEGRATION: release candidate integrated with other systems; FULLY AUTOMATED UI/API suite; black-box only; FIRST environment with monitoring.",
        "PREPRODUCTION: mostly NON-FUNCTIONAL (performance efficiency) — closest to production; user acceptance testing; monitored.",
        "PRODUCTION: functional and non-functional assessment in real time with monitoring; canary, blue/green, A/B testing."
      ],
      examInsights: [
        "A-Q5 / A-Q6 KEY — Preproduction = performance efficiency + UAT; a full automated suite first runs against a release candidate in the INTEGRATION environment.",
        "ASTQB-Q5/Q6 — Most accurate performance results in staging (preproduction); automated API tests best in integration."
      ]
    },
    {
      id: '2.2.1', title: 'Analyzing an SUT to Determine the Test Automation Solution', level: 'K4', type: 'deep',
      deepPoints: [
        "Gather requirements with stakeholders (manual testers, business, BAs) to identify risks and mitigations; web, mobile, web services need different technical automation.",
        "Requirements to consider: which TEST PROCESS ACTIVITIES to automate (management, design, generation, execution); which TEST LEVELS; which TEST TYPES; which roles and skill sets; which products/product lines (span and lifetime of the TAS); which kinds of SUT; TEST DATA availability and quality; how to emulate unreachable cases (3rd-party apps)."
      ],
      examInsights: [
        "A-Q7 KEY (K4, 3 pts, select TWO) — Capture requirements such as 'must the approach support component testing?' and similar test level/type questions about the SUT.",
        "ASTQB-Q7 — Automation runs automatically in the pipeline → choose a tool that integrates easily and uses similar technology to the SUT."
      ]
    },
    {
      id: '2.2.2', title: 'Illustrating the Technical Findings of a Tool Evaluation', level: 'K4', type: 'deep',
      deepPoints: [
        "There may be no single tool meeting every requirement — stakeholders must accept that.",
        "COMPARISON TABLE: tools in COLUMNS, requirements in ROWS, cells = properties and priorities.",
        "Criteria: language/technology and IDE; configurability (environments, run configurations, dynamic/static setup values); test data management (central repo, version control); different tools for different test types; reporting; integration with CI/CD, task tracking, test management; scalability, maintainability, modifiability, compatibility, reliability.",
        "Demonstrate the proposal to stakeholders for approval."
      ],
      examInsights: [
        "A-Q8 KEY (K4, 3 pts) — A tool that only meets requirements on paper (release notes) but fails a key requirement → recommend NOT selecting it.",
        "ASTQB-Q8 — Read the comparison against the stated priorities (e.g. open source preferred, strong programmers) to pick the tool."
      ]
    }
  ]
};
