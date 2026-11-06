// CTAL-TAE v2.0 — Chapter 5: Implementation and Deployment Strategies for Test Automation
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 5,
  title: 'Implementation and Deployment Strategies',
  time: '90 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "6 questions per sample exam. Know which test level runs in which pipeline (component/component integration → build/CI; system → continuous deployment; system integration → continuous delivery), the two ways to run higher-level tests after deployment (inside the deployment phase = quality gate + rollback vs a separate pipeline = no quality gate), nightly regression and non-functional runs, the three configuration items (environment config, test data, suites/cases), feature toggles vs versioned testware, and contract testing (consumer- vs provider-driven).",
  sections: [
    {
      id: '5.1.1', title: 'Test Automation at Different Test Levels within Pipelines', level: 'K3', type: 'deep',
      deepPoints: [
        "CONFIGURATION TESTS of the TAF/TAS run during its build (paths and files exist) — a subspecies of component tests.",
        "COMPONENT tests: build step, quality gate of CI. COMPONENT INTEGRATION tests: in CI together with component tests. SYSTEM tests: CONTINUOUS DEPLOYMENT pipeline, last quality gate. SYSTEM INTEGRATION tests: CONTINUOUS DELIVERY pipeline quality gates.",
        "Build phase (component + component integration) → deploy. For system integration/system/acceptance tests: (1) run inside the DEPLOYMENT PHASE — quality gate, failed deployment rolled back, but rerun needs redeploy; (2) run as a SEPARATE PIPELINE triggered by deployment — flexible suites, but NOT a quality gate; rollback needs manual action; use simple deployment-check scripts.",
        "Other uses: periodic suites (NIGHTLY REGRESSION), non-functional tests (performance) in or beside the pipeline."
      ],
      examInsights: [
        "A-Q19 KEY (K3, select TWO) — Valid pipeline purposes: run a regression suite every night; execute non-functional tests periodically.",
        "A-Q20 KEY (K3) — Tests do NOT act as a quality gate when different automated suites run on each deployment (separate pipeline).",
        "ASTQB-Q19/Q20 — Problem scenarios → system tests in the continuous deployment pipeline; earliest gate for performance of reporting transactions → continuous deployment pipeline."
      ]
    },
    {
      id: '5.1.2', title: 'Configuration Management for Testware', level: 'K2', type: 'deep',
      deepPoints: [
        "Automation runs on many environments and SUT versions → configuration management covers: TEST ENVIRONMENT CONFIGURATION (URLs, credentials — stored with the testware, or in the common core library / shared repo when shared), TEST DATA (environment/release specific; with the TAF or a test data management system), TEST SUITES/CASES (smoke, regression… per level, pipeline, environment).",
        "Release-specific feature sets: FEATURE TOGGLE configuration per release/environment decides which suites run; or RELEASE THE TESTWARE WITH THE SUT under the same version (tags/branches) for an exact match."
      ],
      examInsights: [
        "A-Q21 / A-Q22 KEY — Configuration management manages test data and environment configurations; the common core library is NOT part of the test environment configuration.",
        "ASTQB-Q21/Q22 — Environment configuration and access info can be stored in CM; a feature toggle decides which tests execute."
      ]
    },
    {
      id: '5.1.3', title: 'Test Automation Dependencies for an API Infrastructure', level: 'K2', type: 'deep',
      deepPoints: [
        "Needed for API automation strategy: API CONNECTIONS (business logic testable automatically, relationships between APIs) and API DOCUMENTATION (baseline: parameters, headers, request/response types).",
        "With shift left, split API testing across levels (component integration, system integration) and extend with CONTRACT TESTING.",
        "Contract testing = integration testing that services can communicate and share data consistent with agreed rules; beyond schema validation; the contract records interactions both parties must honor; finds defects from underlying services earlier and pinpoints their source.",
        "CONSUMER-DRIVEN: the consumer sets expectations for the provider's responses. PROVIDER-DRIVEN: the provider writes the contract describing its services."
      ],
      examInsights: [
        "A-Q23 KEY — Contract testing does NOT 'verify whether a system satisfies its contractual requirements' (that's acceptance against a legal contract).",
        "A-Q24 KEY — Needed to build an API TAS: the API specification and the system architecture diagram.",
        "ASTQB-Q23/Q24 — Business logic is controlled through API connections; a contract defines how the provider supplies services to the consumer."
      ]
    }
  ]
};
