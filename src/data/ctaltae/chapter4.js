// CTAL-TAE v2.0 — Chapter 4: Implementing Test Automation
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 4,
  title: 'Implementing Test Automation',
  time: '150 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "4 questions per sample exam (one 3-point K4). Know what a PILOT evaluates (technical + non-technical aspects, CI/CD integration early, periodic progress checks), the deployment risks (firewall, resources, network/reliability) and the four technical risks (packaging, logging, test structuring, updating), the six log levels in order, and the clean-code rules for maintainability.",
  sections: [
    {
      id: '4.1.1', title: 'Guidelines for Test Automation Pilot and Deployment', level: 'K3', type: 'deep',
      deepPoints: [
        "Define the SCOPE of validation of the pilot — short, but its outcome can steer the whole project.",
        "Evaluate: programming language(s); suitable COTS/open-source tools; test levels; selected test cases; test case development approach → define an initial approach, possibly several prototypes to compare.",
        "Define timelines and check progress PERIODICALLY to spot and mitigate risks. Integrate into CI/CD DURING the pilot to expose issues early; adapt the CI/CD setup as tests grow.",
        "Non-technical aspects: team knowledge/experience, team structure, LICENSING and organization rules, planned testing types and target levels.",
        "At the end TAEs and test managers evaluate success/failure and decide."
      ],
      examInsights: [
        "A-Q15 KEY (K3, 2 pts) — Valid pilot objectives include evaluating licensing options/corporate rules and selecting the most suitable COTS or open-source tool.",
        "ASTQB-Q15 — When building the team, a primary consideration is whether you can find people with the specific skills the solution needs."
      ]
    },
    {
      id: '4.2.1', title: 'Deployment Risks and Mitigation Strategies', level: 'K4', type: 'deep',
      deepPoints: [
        "Design the TAF↔SUT interfacing first; then select packaging, logging and test harness tools. Expansion and maintenance of the automation code are crucial pilot evaluation factors.",
        "Deployment risks: FIREWALL openings, RESOURCE utilization (CPU, RAM), network connection, reliability — e.g. real mobile devices must be powered, charged, networked, with SUT access.",
        "Technical risks: PACKAGING (version control and shared repositories for testware), LOGGING, TEST STRUCTURING (test harness + TEST FIXTURES control environment and data, pre/postconditions, suite grouping → repeatable, atomic tests), UPDATING (automatic updates of harness agents and device OS versions → power supplies, network, device configuration plans).",
        "Log levels: FATAL (may abort execution) → ERROR (fails the test case) → WARN (unexpected but flow continues) → INFO (basic progress) → DEBUG (details for failure investigation) → TRACE (even more detail)."
      ],
      examInsights: [
        "A-Q16 KEY (K4, 3 pts) — Matching risks to mitigations, e.g. integration issues → integrate into CI/CD; unstable environment/data → test harnesses and fixtures; data needs → third-party data generation tools.",
        "ASTQB-Q16 — Real physical devices: plan for OS upgrades on devices and the retesting they trigger."
      ]
    },
    {
      id: '4.3.1', title: 'Factors Affecting TAS Maintainability', level: 'K2', type: 'deep',
      deepPoints: [
        "Maintainability depends on programming standards and shared expectations — follow Robert C. Martin's CLEAN CODE: common naming conventions (loginButton), logical common project structure, AVOID HARDCODING (use data-driven testing; constants for stable values), few method parameters, short simple methods, use logging, use design patterns where beneficial, focus on testability.",
        "Use STATIC ANALYZERS and code formatters for quality and readability.",
        "Agree a BRANCHING strategy (feature, release, defect-fix branches)."
      ],
      examInsights: [
        "A-Q17 / A-Q18 KEY — Improve maintainability with static analyzers; the most effective way to reduce maintenance time is applying design patterns.",
        "ASTQB-Q17/Q18 — Record/playback tools often hardcode data; static analyzers check coding standards for higher code quality."
      ]
    }
  ]
};
