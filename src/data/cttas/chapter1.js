// CT-TAS v1.0 — Chapter 1: Introduction and Objectives for Test Automation Strategy
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 1,
  title: 'Introduction and Objectives for Test Automation Strategy',
  time: '45 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "5 questions per sample exam, all K2. Know what a test automation STRATEGY must address (purpose, risks, scope, stakeholders, tools, TAA, environments), the objectives of automation, the long list of technical success factors (testability, strategy, TAA, a usable TAF with reporting, traceability, retirement of tests…), and the four investment criteria for choosing candidate projects.",
  sections: [
    {
      id: '1.1.1', title: 'Goals and Objectives for a Test Automation Strategy', level: 'K2', type: 'deep',
      deepPoints: [
        "A strategy defines: intended PURPOSE, RISKS, SCOPE, STAKEHOLDERS, TOOLS, the TAA, ENVIRONMENTS.",
        "Objectives: better test efficiency; broader/deeper coverage; better SUT quality; lower total cost and time to market; tests manual testers can't do; shorter execution time; higher test frequency.",
        "Agile and cloud delivery need earlier, quicker feedback → automation is more relevant than ever."
      ],
      examInsights: [
        "A-Q1 KEY (select TWO) — Automated tests are consistent and repeatable; automation can run tests that can't be done manually. Distractors claim no maintenance or that resources only affect automation.",
        "ASTQB-Q1 — To automate what the user sees and interacts with, target the GUI."
      ]
    },
    {
      id: '1.1.2', title: 'Technical Success Factors of a Test Automation Project', level: 'K2', type: 'deep',
      deepPoints: [
        "A PILOT project helps confirm tools and technologies.",
        "Success factors: SUT TESTABILITY (access to SUT interfaces); a DEFINED STRATEGY (applicable, customizable, achievable within time/cost, kept current); a clear TAA; a TAF that is easy to use, documented, maintainable and supports a consistent approach — with defined reporting, easy troubleshooting, appropriate environment, documented and TRACEABLE automated tests, easy maintenance, up-to-date tests, clear deployment and execution plans, tests RETIRED as needed, effective exception handling.",
        "Assess the chance of success from factors present vs missing — rarely are all met."
      ],
      examInsights: [
        "A-Q2 KEY — Important success factor: automated scripts can be isolated and retired easily when no longer needed.",
        "A-Q3 / A-Q4 KEY — NOT recommended: automation that is sensitive to UI changes; NOT a success factor: 'target the automation challenges of the SUT first'.",
        "ASTQB-Q2–Q4 — Access to the SUT's interfaces is vital; the TAF supports a consistent approach and the execution plan."
      ]
    },
    {
      id: '1.1.3', title: 'Investment Criteria for Selecting Candidate Projects', level: 'K2', type: 'deep',
      deepPoints: [
        "Four criteria: COST OF INTRODUCTION (TAEs, hardware, training); CURRENT SDLC PHASE (start early for value sooner); EXPECTED PROJECT DURATION (short projects may not recoup it); MAINTENANCE COST of the TAS.",
        "If the investment is acceptable, preparation starts (approach, tools) — a strategic responsibility of a TEST ARCHITECT or TEST MANAGER."
      ],
      examInsights: [
        "A-Q5 KEY — Pilot on a mature, standard, long-lived project (not a short or unusual one) to judge effectiveness.",
        "ASTQB-Q5 — Before a large automation project, have an accepted expected return on investment."
      ]
    }
  ]
};
