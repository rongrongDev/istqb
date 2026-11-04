// CTAL-TAE v2.0 — Chapter 1: Introduction and Objectives for Test Automation
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 1,
  title: 'Introduction and Objectives for Test Automation',
  time: '45 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "Short K2 chapter — 3 questions per sample exam. Know the advantages, disadvantages AND limitations of test automation as three separate lists, where automation happens in waterfall vs V-model vs Agile (eliminating silos → in-sprint automation), and the tool-selection drivers: analyze the SUT, cost, team skills (low-code for non-programmers, same language as the SUT for programmers).",
  sections: [
    {
      id: '1.1.1', title: 'Advantages and Disadvantages of Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "Test automation = tools to control/set up test suites, automated execution, comparing actual vs expected results.",
        "ADVANTAGES: more tests per build; tests impossible manually (real-time, remote, parallel); more complex tests; faster; less human error; more efficient use of resources; quicker feedback; improves reliability; consistent execution across cycles.",
        "DISADVANTAGES: extra costs (TAE hires, hardware, training); initial investment; time to develop and MAINTAIN; needs clear objectives; rigidity / less adaptable to SUT changes; may introduce additional defects.",
        "LIMITATIONS: not all manual tests can be automated; verifies only what it is programmed to; only machine-interpretable results; only results verifiable by an automated test oracle."
      ],
      examInsights: [
        "A-Q1 KEY — A LIMITATION: automation can only check results verifiable by an automated oracle/code.",
        "ASTQB-Q1 — 'Always verifies exactly what it was programmed to verify' is a disadvantage (coverage doesn't grow by itself)."
      ]
    },
    {
      id: '1.2.1', title: 'Test Automation Across SDLC Models', level: 'K2', type: 'deep',
      deepPoints: [
        "WATERFALL: linear, sequential phases with approved documents; automation built in parallel to or after implementation; test runs in the verification phase.",
        "V-MODEL: each requirement level has a matching test level (component, component integration, system, system integration, acceptance) — a TAF per test level is possible and recommended.",
        "AGILE: TAEs and business decide roadmap/timeline; code reviews, pair programming, frequent automated runs; ELIMINATING SILOS lets the team cover all levels with the right amount of automation → IN-SPRINT AUTOMATION."
      ],
      examInsights: [
        "A-Q2 KEY — In Agile, automated tests focus more on component tests than on acceptance tests.",
        "ASTQB-Q2 — Covering all test levels with the right depth of automation comes from eliminating silos."
      ]
    },
    {
      id: '1.2.2', title: 'Selecting Suitable Test Automation Tools', level: 'K2', type: 'deep',
      deepPoints: [
        "First ANALYZE THE SUT and identify project requirements as the baseline; understand what the project wants over time (UI vs web services need different features).",
        "Always consider COSTS; COTS or custom open-source solutions can be complex.",
        "TEAM composition/experience: little programming → low-code/no-code tools; programmers → tools in the SUT's language (debug with developers, cross-training)."
      ],
      examInsights: [
        "A-Q3 KEY — NOT necessary for tool selection: the quality of the SUT requirements.",
        "ASTQB-Q3 — Highly technical team → a tool based on the same code/language as the SUT."
      ]
    }
  ]
};
