// CT-TAS v1.0 — Chapter 4: Organizational Deployment and Release Strategies for Test Automation
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 4,
  title: 'Organizational Deployment and Release Strategies',
  time: '135 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "10 questions per sample exam, all K2. Know how automation shortens time to market (quality gates, parallel execution, shift left), why confirmation tests are good automation candidates, the operational acceptance approaches (static analysis, E2E, failover, backup/restore, performance, documentation review, security, SLA monitoring), the five deployment-strategy items, technical/project risks and failure points, first-time vs maintenance deployment, and the components and dependencies of the test environment.",
  sections: [
    {
      id: '4.1.1', title: 'How Test Automation Supports Shorter Time to Market', level: 'K2', type: 'skim',
      summary: "Automation cuts test cycle time — especially in regression testing (reuse, lower cost, consistency) — reduces manual effort with quick developer feedback for the same scope, and enables earlier testing via automated component and component integration tests. QUALITY GATES (enforced criteria before the next phase) based on automation accelerate deployment to preproduction/production and find defects earlier. Reduce execution time with PARALLEL EXECUTION and a SHIFT LEFT culture (independent tests, cross-browser).",
      examInsights: [
        "A-Q19 KEY — Timely market delivery: follow a shift-left approach and enable parallel test execution.",
        "ASTQB-Q19 — Urgent time to market → shift testing to the left."
      ]
    },
    {
      id: '4.1.2', title: 'Verifying Reported Defects with Test Automation', level: 'K2', type: 'skim',
      summary: "Confirmation testing after a fix repeats the steps that reproduced the defect. Defects tend to REINTRODUCE themselves (e.g. configuration or repository management problems), so automated confirmation tests are good candidates and are ADDED TO THE REGRESSION SUITE. They have narrow scope, can be written as soon as the reproduction steps are known, allow reporting time and cycles spent on defects, and verify fixes quickly across platforms, devices, browsers and OS versions.",
      examInsights: [
        "A-Q20 KEY — Automate confirmation tests to ensure the fix works AND continues to work.",
        "ASTQB-Q20 — A test checking a defect is fixed and stays fixed = confirmation test."
      ]
    },
    {
      id: '4.1.3', title: 'Operationally Relevant Scenarios for Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "OPERATIONAL ACCEPTANCE TESTING right before release validates systems, components and infrastructure for production readiness (reliability, fault tolerance, integrity, maintainability).",
        "Automation approaches: STATIC CODE ANALYSIS (security, vulnerabilities, trends); END-TO-END scenarios; FAILOVER testing (recovery when servers, networks, disks fail — key for chaos engineering); BACKUP AND RESTORE (back up, roll back to an older version); PERFORMANCE EFFICIENCY (load, trended); OPERATIONAL DOCUMENTATION REVIEW (compare doc versions, flag needed updates for new features); SECURITY testing with industry tools; SLA MONITORING (repurpose SDLC tests to monitor production and alert before users notice).",
        "Dedicated, repeatable suites across environments, compared with previous runs → consistency and lower cost."
      ],
      examInsights: [
        "A-Q21 KEY — Operational scenario 'update of the software' → operational documentation review.",
        "ASTQB-Q21 — Of particular interest to the operations team: failover testing."
      ]
    },
    {
      id: '4.2.1', title: 'Defining a Test Automation Deployment Strategy', level: 'K2', type: 'deep',
      deepPoints: [
        "Five considerations: TEST ENVIRONMENT (scripts run in test and preproduction with minimal change, e.g. only the URL); TOOLS (commercial license servers may not be reachable from every environment); SOFTWARE ACCESS (parameterized users/credentials/end points; biometrics, smart cards); TEST SCRIPT STORAGE (central source code repository with configuration management, versions per SUT version, configs and dependencies alongside); DATA PROVISIONING (avoid static data; preloaded by an admin = convenient but dependent, or SETUP SCRIPTS = self-sufficient but more to maintain)."
      ],
      examInsights: [
        "A-Q22 / A-Q23 KEY — The full list: test environment, tools, application access, test script storage, test data provisioning; NOT a consideration: manual test case design techniques.",
        "ASTQB-Q22/Q23 — Licensing affects access from multiple test environments; version the automation because environments may need different versions."
      ]
    },
    {
      id: '4.2.2', title: 'Test Automation Risks in Deployment', level: 'K2', type: 'deep',
      deepPoints: [
        "Technical issues: too many ABSTRACTIONS (e.g. keywords — unclear what code does); test data tables too large/complex to migrate → inconsistent results; dependency on OS libraries/components not in every environment.",
        "Project risks: STAFFING; unplanned TAS maintenance after SUT updates; delays introducing automation; delays updating the TAS; TAS can't capture NONSTANDARD UI OBJECTS; OUTDATED test cases wasting execution time.",
        "Failure points: migration to another test environment; deployment to production; forgetting that automation is software that must be TESTED."
      ],
      examInsights: [
        "A-Q24 KEY — Technical issue leading to risk: wrongly defined keywords (too much abstraction).",
        "ASTQB-Q24 — Vendor product updated regularly → risk: hard to keep the test automation maintained in step."
      ]
    },
    {
      id: '4.2.3', title: 'Mitigating Deployment Risks', level: 'K2', type: 'deep',
      deepPoints: [
        "The TAS has its own SDLC: keep it under CONFIGURATION MANAGEMENT with documented features, and a documented, clear, VERSION-DEPENDENT deployment procedure (also under CM).",
        "FIRST-TIME deployment risks: total suite time longer than the planned cycle (plan enough time); installation/configuration issues (DB setup, initial load, services) → a TEST FIXTURE (predefined dataset) for preconditions.",
        "MAINTENANCE deployment: TEST the updated TAS before production — new functions, suites still run, reports sent, no performance defects; sometimes the suite must be adapted."
      ],
      examInsights: [
        "A-Q25 KEY — Important mitigation: the TAS must be under configuration management.",
        "ASTQB-Q25 — Running the regression suite on a new release detects whether anything that used to work no longer works."
      ]
    },
    {
      id: '4.3.1', title: 'Test Automation Components in the Test Environment', level: 'K2', type: 'deep',
      deepPoints: [
        "Components: the SUT (whole or subcomponents: API, web UI, database); PLATFORM (cloud, network, VMs, containers); TEST CASES AND SUITES (suites = logical grouping for efficient execution); TOOLS (UI, API, data generation, monitoring, requirements, defects, logging, reporting, trends); TAF (driver scripts, common libraries, test templates, data provisioning scripts, documentation, tutorials).",
        "Don't overcomplicate — find a reusable, portable blend of tools, configuration and platform."
      ],
      examInsights: [
        "A-Q26 KEY — NOT a component of the test automation environment: the TAA (it's a design).",
        "ASTQB-Q26 — A test suite logically groups related test cases."
      ]
    },
    {
      id: '4.3.2', title: 'Infrastructure Components and Dependencies', level: 'K2', type: 'skim',
      summary: "Prerequisites to run a TAS: HOST MACHINES (VMs, servers, laptops, tablets, phones where tests are built and run); NETWORK (access to the SUT; hosts on the SAME network for parallel execution); PLATFORM (cloud or containers with OS-level permissions); SOFTWARE DEPENDENCIES (e.g. a required language version — check before and after tool selection); SUT ACCESS and interface (e.g. the right browser type and version).",
      examInsights: [
        "A-Q27 KEY — Major infrastructure components: network, interface with the SUT, host machines.",
        "ASTQB-Q27 — Parallel execution on multiple machines → they must be on the same network."
      ]
    },
    {
      id: '4.3.3', title: 'Test Automation Data and Interface Requirements', level: 'K2', type: 'skim',
      summary: "Decide how to interface with the SUT and what data each test depends on. API: test at end-point level (web APIs/web services) — know the call order and correlate data across calls. DATABASE INTERFACE: verify rows/columns, stored procedures and rules directly (may need preexisting data). INTERFACE COMPATIBILITY: contract testing — consumer-driven, producer-driven or bidirectional (see CTAL-TAE 5.1.3).",
      examInsights: [
        "A-Q28 KEY — NOT correct: 'the TAA must be used…' as a data/interface requirement statement.",
        "ASTQB-Q28 — Verifying data directly in the database is good practice — it confirms the expected data changes."
      ]
    }
  ]
};
