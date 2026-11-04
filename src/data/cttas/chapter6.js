// CT-TAS v1.0 — Chapter 6: Implementation and Improvement Strategies for Test Automation
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 6,
  title: 'Implementation and Improvement Strategies',
  time: '150 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: "5 questions per sample exam incl. two 2-point K3 improvement scenarios. Know the transition factors from manual to automated regression (costs overlap, functional overlap, data sharing, interdependency, preconditions, functional coverage, executable tests), what continuous testing requires of the TAS, and the evaluation checklist for first deployment and incremental updates (TAS maintenance > manual testing time = red flag; pipeline queues → smoke suite).",
  sections: [
    {
      id: '6.1.1', title: 'Transitioning from Manual Testing to Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "Easiest target: REGRESSION testing — today's tests are tomorrow's regression tests and soon exceed manual capacity.",
        "TRANSITIONING COSTS: rise while manual and automated run in parallel; afterwards effort shifts to exploratory testing and new automated tests.",
        "FUNCTIONAL OVERLAP: identical steps (e.g. login) in many tests → make a reusable component (flow model).",
        "DATA SHARING: tests using the same records → store shared data in a SINGLE SOURCE.",
        "TEST INTERDEPENDENCY: e.g. a generated Order ID must be captured for later tests or they fail.",
        "TEST EXECUTION PRECONDITIONS: analyze them first (users, roles, table values); automate their creation (UI scripts or batch loads).",
        "FUNCTIONAL COVERAGE: 100% of manual tests automated ≠ 100% of what could be automated; freed time finds new tests.",
        "EXECUTABLE TESTS: verify the manual test works before automating (badly written, invalid data, outdated, SUT defect); show equivalence to build confidence."
      ],
      examInsights: [
        "A-Q36 / A-Q37 KEY — Avoiding repeated steps across scripts = functional overlap analysis; for a smooth transition from a QA perspective, consider coverage.",
        "ASTQB-Q36/Q37 — Reusable components are built and maintained in one place, used in many; manual testers freed by automation can broaden coverage."
      ]
    },
    {
      id: '6.1.2', title: 'Transitioning from Test Automation to Continuous Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Continuous testing runs suites immediately after code changes reach the test environment → immediate feedback, cheaper defects.",
        "Adapting the TAS: change and TEST the test suites before deploying them on the updated TAS; change and test stubs, drivers and interfaces (test harness); assess infrastructure changes; if the updated TAS has defects or performance issues, weigh risk vs benefit (skip/wait vs update); publish RELEASE NOTES of known defects with fix estimates.",
        "In CI/CD, extend the build PIPELINE with automated tests right after deployment — the tool must reach the SUT, the code repository and data provisioning scripts."
      ],
      examInsights: [
        "A-Q38 KEY — Adding automated UI tests as a step in the build process uses pipelines.",
        "ASTQB-Q38 — New tests must themselves be tested before being deployed into the TAS."
      ]
    },
    {
      id: '6.2.1', title: 'Evaluating Test Automation Assets and Practices', level: 'K3', type: 'deep',
      deepPoints: [
        "Pause periodically to refactor; track hours developing the TAS, hours FIXING it, and time saved vs manual. Red flag: TAS maintenance time > manual testing time.",
        "First deployment: TAS runs in its own isolated environment, tests manageable; use CODE COVERAGE tools (component test gaps); a REQUIREMENTS TRACEABILITY MATRIX (functional gaps); consistent infrastructure usage across projects; consistent configuration management for suites; common development guidelines (CTAL-TAE 3.1.4); AUTOMATE PRECONDITIONS.",
        "Incremental updates: evaluate new/updated tools; optimize features and performance; decompose and modularize scripts for reuse; ensure awareness of reusable components; collect evidence and recommend improvements; fix functional overlap; add manual tests to the automation backlog; improve test design and test data management; adapt all suites to the latest TAS; if automation QUEUES THE PIPELINE, run a SMOKE SUITE of the most critical tests and trigger the full regression separately/on demand."
      ],
      examInsights: [
        "A-Q39 KEY (K3, 2 pts) — CI/CD losing velocity with growing suites: automated precondition scripts, identify the critical tests (smoke suite), run the rest separately.",
        "A-Q40 KEY (K3, 2 pts) — Correct improvement steps include collecting evidence of improvement areas and updating TAS documentation; never change dependencies without investigation.",
        "ASTQB-Q39/Q40 — No unused accounts to delete → programmatically create the preconditions; pipeline too slow → include only the critical tests in it."
      ]
    }
  ]
};
