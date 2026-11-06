// CTAL-TAE v2.0 — Chapter 8: Continuous Improvement
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 8,
  title: 'Continuous Improvement',
  time: '210 min',
  color: '#9333EA',
  bg: '#FAF5FF',
  overview: "6 questions per sample exam incl. K3/K4 scenarios. Know the three data-analysis aids (test histogram, AI self-healing locators, schema validation), the TAS improvement areas (scripting incl. consolidation into library functions, failure recovery and WAITS: hard-coded < polling with timeout < event subscription with timeout; test execution splitting/parallelism; standard verification methods; TAA; TAF core library upgrades via pilot → impact → adoption plan → update; setup/teardown; features), restructuring after SUT changes, and side uses of automation tools.",
  sections: [
    {
      id: '8.1.1', title: 'Improving Test Cases through Data Collection and Analysis', level: 'K3', type: 'deep',
      deepPoints: [
        "TEST HISTOGRAM: visual report of results and data (exceptions, error messages, screenshots) → spot trends and FRAGILE tests to refactor.",
        "AI: ML + image recognition detect changed UI locators, find the new selectors and SELF-HEAL the test, reporting the changes.",
        "SCHEMA VALIDATION for APIs and databases: checks mandatory elements are present with the defined types/ranges — replaces many individual assertions, shorter code, earlier backend defect detection; the validation output points to the root cause."
      ],
      examInsights: [
        "A-Q35 KEY (K3) — Frequently changing UI identifiers make maintenance expensive → AI algorithms that detect and self-heal changed locators.",
        "A-Q36 KEY (K3) — Many API tests broke after service changes → AI algorithms plus API schema validation tools.",
        "ASTQB-Q35/Q36 — Changing API response elements → schema validation tool; code reused >2 times → put it in a framework library."
      ]
    },
    {
      id: '8.1.2', title: 'Analyzing a Deployed TAS and Recommending Improvements', level: 'K4', type: 'deep',
      deepPoints: [
        "Improve for efficiency, ease of use, capabilities, support — choose by value to the project.",
        "SCRIPTING: upgrade technique (linear → data-driven → keyword-driven) for new tests, retrofit to high-maintenance ones; consolidate overlapping steps into reusable, parameterized LIBRARY FUNCTIONS; FAILURE RECOVERY for TAS and SUT (continue with next test, reboot SUT); WAITS: hard-coded (root cause of many defects) < dynamic POLLING (+timeout) < EVENT SUBSCRIPTION (most reliable, +timeout).",
        "TEST EXECUTION: run concurrently on several environments; single expensive target → SPLIT the suite into parts each fitting a night; remove duplicated coverage; parallel batch jobs; scheduled pipelines.",
        "VERIFICATION: standard, parameterized verification methods for all tests. TAA: change SUT/TAA for testability (e.g. new test APIs) — cheaper if planned early.",
        "TAF core library upgrades: PILOT → IMPACT ANALYSIS → ADOPTION PLAN → teams update in business logic layer → finally update core libraries dependency.",
        "SETUP/TEARDOWN: move repeated actions there (e.g. web service calls to register/clean up users). DOCUMENTATION. TAS FEATURES: only add what will be used. TAF updates: test new tool versions with representative sample tests first."
      ],
      examInsights: [
        "A-Q37 KEY (K4, 3 pts) — Expensive single target system, suite must finish overnight → split the suite into parts each executed in a defined period.",
        "A-Q38 KEY (K4, 3 pts) — New core library versions: perform pilot → determine impact → create adoption plan → update dependencies.",
        "ASTQB-Q37/Q38 — Scripts stuck waiting for values → add waits AND timeouts; the same check coded into every script → a reusable function."
      ]
    },
    {
      id: '8.1.3', title: 'Restructuring Testware to Align with SUT Updates', level: 'K3', type: 'deep',
      deepPoints: [
        "Any SUT change, however small, can hurt TAS reliability and performance.",
        "Identify changes in environment components (testware, custom libraries, OS); change INCREMENTALLY with an MVP mindset, measure on a limited run, then implement fully; finish with a FULL REGRESSION run and root-cause any failures.",
        "Improve core function libraries with new techniques; CONSOLIDATE multiple functions acting on the SAME CONTROL TYPE into fewer general ones (e.g. a function taking the action as a parameter); refactor the TAA rather than bolting on features; keep naming conventions; review scripts for revision or ELIMINATION (decompose slow complex tests, remove rarely run ones)."
      ],
      examInsights: [
        "A-Q39 KEY (K3, 2 pts) — Many specialized functions query controls (visible, enabled…) → check whether functions that work with several control types can replace them.",
        "ASTQB-Q39 — A shared function for a control available to every script is good practice (reuse, less maintenance)."
      ]
    },
    {
      id: '8.1.4', title: 'Other Opportunities for Test Automation Tools', level: 'K2', type: 'skim',
      summary: "Beyond testing: ENVIRONMENT SETUP AND CONTROL (scripts create test data/users via web service endpoints in setup, clean up logs and testware in teardown → efficient housekeeping); DATA AGING (keep date fields in test databases current); SCREENSHOT AND VIDEO GENERATION for release documentation or marketing.",
      examInsights: [
        "A-Q40 KEY — Many customers with varied profiles needed in a new environment → a test automation tool invokes a web service API to register them.",
        "ASTQB-Q40 — Business users can use record/playback to show what they do, helping decide what to automate."
      ]
    }
  ]
};
