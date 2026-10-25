// CT-QDO v1.0 — Chapter 3: Automated and Manual Tasks in DevOps
// summary/deepPoints from syllabus v1.0 (2026-04-17); examInsights derived from the official sample exam v1.0
export default {
  id: 3,
  title: 'Automated and Manual Tasks in DevOps',
  time: '510 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "The biggest chapter (510 minutes, 15 of the 48 sample questions incl. appendix) with three K3 objectives: quality reporting (3.1.3), API testing preparation (3.2.2), and quality hunting (3.3.4). Learn the four SSOT system types with what they store, contract testing end-to-end, and the precise differences between exploratory testing, crowd testing, and quality hunting — the exam loves to swap their definitions.",
  sections: [
    {
      id: '3.1.1',
      title: 'Single Source of Truth (SSOT) for Testware',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Fragmented, inconsistent, duplicated information across teams/tools causes errors, poor collaboration, and broken traceability. SSOT: one information type is stored in only one storage location, organization-wide — accurate, consistent, up-to-date data for all teams.',
        'Four SSOT system types: INFORMATION MANAGEMENT systems — information lifecycle management; store backlog items (requirements, defect reports, tasks) and project/product documentation. VERSION CONTROL systems — controlled change management; store source code, build/deployment scripts, IaC configurations, CI/CD pipeline definitions, test cases, test automation code, text-format test data. ARTIFACT MANAGEMENT systems — reusability of build artifacts; store dependencies, software binaries, binary test data. OBSERVABILITY systems — traceability and access management; store traces, logs, metrics.',
        'SSOT benefits: centralization (sole location for critical data), consistency (same up-to-date info for all teams), automation (integrates with the DevOps toolchain), collaboration (shared understanding), auditability (clear change history for compliance).'
      ],
      examInsights: [
        'Q18 MATCHING — Information management = lifecycle management for backlog items (requirements, defect reports). VCS = controlled change management for source code, test automation code, pipeline definitions. Artifact management = reusability of built executables, dependencies, test data. Observability = traceability and access management for traces, logs, metrics.',
        'TRAP — Test data appears TWICE: text-format test data in the VCS, binary test data in artifact management.'
      ]
    },
    {
      id: '3.1.2',
      title: 'Traceability between the Test Basis and Testware',
      level: 'K2',
      type: 'skim',
      summary: "Register relationships between related work products (requirements, user stories, code, testware). Traceability verifies every requirement is implemented, tested, delivered, deployed, released; bi-directional traceability also supports maintenance — a requirement change points to where to implement it, and a code defect's root cause is quickly found in a story/requirement. The test policy describes the need for traceability. Automation tools give dynamic updates to traceability matrices and reduce manual-tracking risk; configuration management and task management tools register relationships and report on work products and their usage. Traceability fosters collaboration (transparent, auditable relationships), improves defect tracking, supports compliance, and enables all the 'continuous' practices.",
      examInsights: [
        'Q19 KEY — Automation supports traceability "by providing accurate, up-to-date links between work products".',
        'Q19 TRAP — Generating test cases is NOT traceability; automation does not shift traceability responsibility to developers (shared across roles) and does not make collaboration less important (it enhances it).'
      ]
    },
    {
      id: '3.1.3',
      title: 'Quality Reporting for a CI/CD Pipeline',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Quality reporting gives the team feedback on code quality and product management feedback on release readiness. Every CI/CD pipeline stage creates information: some automatic (build success, test pass/fail), some from MANUAL testing (UAT, exploratory testing, coverage in a test management tool). Both together give the comprehensive quality view.',
        'Reporting should run for each pipeline cycle → automated. Manual test results are included via test management tool integration. Delivery: dashboard on a wiki, shared tool, templated email/report, or combinations.',
        'Automated reporting integrates several tools: CI/CD logging/monitoring/reporting; task and test management tools (manual results); production monitoring (telemetry); report generators combining everything — a single source of truth for metrics in one accessible location.',
        'Eight implementation steps: (1) determine KPIs and metrics (code quality, coverage, performance, build stability/success rate, deployment frequency, failed deployment recovery time, security vulnerabilities); (2) collect data; (3) automate data gathering from all pipeline stages; (4) clean and normalize data; (5) store centrally if tools do not; (6) visualize via dashboards per pipeline stage; (7) enable continuous monitoring / real-time updates; (8) ensure stakeholder accessibility.',
        'Dashboard benefits: continuous tracking for quick response; trend analysis to find bottlenecks; proactive security compliance review; transparency and collaboration through shared dashboards; data-driven retrospectives.'
      ],
      examInsights: [
        'Q20 (K3, 2pts) — Outdated dashboard missing manual results → "ensure automated scripts collect data from all CI/CD stages, integrate manual test results immediately, and enable real-time updates".',
        'Q20 TRAP — Storing manual results in a separate system fragments reporting (violates SSOT); automated-only results are incomplete; static scheduled reports lack real-time trend tracking.'
      ]
    },
    {
      id: '3.1.4',
      title: 'Test Data Management Automation',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Manual test data management reduces flow and slows feedback. Automated test data management (create, update, manage within the CI/CD pipeline) accelerates test cycles, improves coverage, reduces errors and result inconsistency, improves data security, and supports privacy regulations. Needs collaboration across all team roles.',
        'Key aspects: data design (define needed data for a test objective), data generation (valid + invalid data, edge cases, boundary values), data validation (accuracy + compliance), data organization (structured storage in a VCS, on-demand availability), anonymization (mask production data first), data refresh and cleanup (automatic reset as part of automation).',
        'Practices: SYNTHETIC data creation (formatting rules, structure analysis, or pre-trained GenAI models — no production data used); test data CLONING (high-volume valid data for performance/load testing); test data SUBSETTING (smaller representative subset, references preserved → less storage, faster provisioning); test data MASKING (mask personally identifiable information — name, address, email, phone, IP, location).',
        'Risks: incomplete coverage (generated data may miss real-world complexity), resource utilization (generating/storing/distributing large data costs resources), breach of security/compliance rules (improper masking can expose sensitive data → fines).'
      ],
      examInsights: [
        'Q21 TRAP (NOT-question) — Test data management automation does NOT "eliminate" security concerns: masking REDUCES risk but improper masking can still expose sensitive data.',
        'Q21 KEY — Real benefits: subsetting reduces storage and speeds provisioning; generation improves coverage (valid/invalid/edge/boundary); organization in version control gives on-demand availability.'
      ]
    },
    {
      id: '3.1.5',
      title: 'Statistical Analysis of Test Results',
      level: 'K2',
      type: 'skim',
      summary: "Short-term use of test results: inform stakeholders about quality and risks so they can build confidence in business value. Long-term use: a broader picture of the quality of the software, the processes, AND the people. Statistical analysis identifies trends and patterns supporting decision-making — metrics like requirements coverage, code coverage, defect density, mean time between failures. AI-based predictive analytics can predict future results and trigger process improvement or resource reallocation. Other uses: A/B testing (compare variants shown to separate user groups), evaluating non-functional test results (performance testing load profiles), detecting inconsistent (flaky) tests, and finding automation keywords with long execution times to optimize cost. Tools should be integrated into the CI/CD pipeline; dashboards display the outcomes.",
      examInsights: [
        'Q22 TRAP (NOT-question) — Statistical analysis does NOT remove the need for human interpretation: humans still validate findings, assess behavior, and detect defective tests and process inefficiencies.',
        'Q22 KEY — Real benefits: trend identification + prediction, decision-support metrics (defect density, coverage, MTBF), and the broader picture including processes and people.'
      ]
    },
    {
      id: '3.1.6',
      title: 'Standardized, Controlled, and Automated Test Environment Management',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'STANDARDIZED environments eliminate variability from inconsistent configurations → reliable, reproducible test results; less time troubleshooting environment-caused "defects", more focus on real code defects.',
        'AUTOMATED provisioning replaces manual setup with rapid repeatable setups — environments spun up and torn down as needed (including test data management) → faster test cycles and delivery.',
        'CONTROLLED environments are right-sized per test needs: prevents over-provisioning (excessive resources allocated unnecessarily) and under-provisioning (performance bottlenecks). On-demand provisioning lowers cost and uses resources only as needed.',
        'IaC creates replicable environments (blueprints) that scale in the cloud, removes configuration ambiguity, improves tester/developer/operations collaboration, and supports removing the wall of confusion.'
      ],
      examInsights: [
        'Q23 KEY — Best resource utilization in a controlled test environment: "resources are provisioned dynamically based on actual testing needs, preventing both over- and under-provisioning".',
        'Q23 TRAP — Always-allocated resources, fixed amounts for all environments, or maximum allocation are all wasteful or inflexible.'
      ]
    },
    {
      id: '3.2.1',
      title: 'Regression Testing in CI/CD Pipeline',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Regression testing determines that code changes do not adversely affect existing functionality — the critical safety net with frequent changes/deployments. Practically ALL pipeline test automation first covers new functionality, then becomes regression testing.',
        'Regression tests usually use multiple test environments of the same type in parallel for shorter execution; each environment sized per test type with needed integrations.',
        'Running ALL tests on every pipeline execution is bad for business viability and sustainability (time, cost, energy). Instead: multiple regression suites with different coverage levels, run for different purposes/frequencies or based on changes — some before merge, some after, some overnight. Selection is risk-based (e.g., component tests chosen via heat maps of changed code areas); tags and filters enable dynamic selection; also run tests for existing features affected by a change.',
        'A FULL regression suite should run before releasing. Balance optimizing the number of tests vs. coverage needs; some suites run only occasionally (e.g., for a security test report). Regression testing should be as automated as possible and part of pipeline design.'
      ],
      examInsights: [
        'Q24 KEY — Best integration: "regression testing scope is set dynamically based on file changes in a feature branch, but risk-based selection of regression tests runs before the release".',
        'Q24 TRAP — Running ALL regression tests in EVERY pipeline is wasteful; excluding regression tests from feature-branch pipelines or skipping regression entirely ("new code is well tested") misses change impact on existing code.'
      ]
    },
    {
      id: '3.2.2',
      title: 'Key Points of API Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'API testing focuses on interfaces between systems: verifying functional suitability, reliability, performance efficiency, security, and other quality characteristics — is the data exchange consistent, correct, timely, and secure? Testing APIs early prevents costly defects.',
        'Key aspects: functional testing (expected behavior for all inputs), reliability testing (works under different scenarios), performance testing (response times, throughput, scalability), security testing (authentication, authorization, data protection).',
        'Benefits: faster feedback than GUI testing, easy CI/CD integration, early testing (shift left). Challenges: thorough coverage for complex APIs, keeping tests updated with evolving contracts, handling external API/service dependencies.',
        'CONTRACT TESTING: integration testing that tests each application in isolation, checking that messages sent/received conform to a documented shared "contract" between provider and consumers. It validates API structure, format, and expectations for request/response payloads, headers, status codes, and data types — not the business logic behind the API. Vital in microservices architectures; supports fast feedback with fast, isolated checks.',
        'Implementing contract testing: (1) define the contract (request formats, response fields, status codes, data types); (2) write contract tests — consumers specify intended interactions; both provider and consumer verify against the same contract; (3) run in the CI/CD pipeline for early detection of breaking changes; (4) version and manage contracts in version control across teams.',
        'Trade-offs: contract tests do not cover all functional aspects (they supplement other test types); contract changes need cross-team coordination; investment in tooling and shared standards.'
      ],
      examInsights: [
        'Q25 (K3, 2pts) — Third-party payment API, avoid mismatched expectations → "define and validate a contract that specifies expected request and response formats" (contract testing works without deploying components).',
        'Q25 TRAP — Performance benchmarks assume the contract already works; acceptance testing is late and high-level; integration testing after connecting all components is later and less isolated than contract testing.'
      ]
    },
    {
      id: '3.2.3',
      title: 'Compare Test Automation in Different SDLC Models',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'SEQUENTIAL models: automation beyond unit testing happens in the test phase after development completes — limited feedback loop, detailed upfront planning, distinct test phase.',
        'AGILE: automation integrated throughout the SDLC; tests beyond unit testing designed/implemented collaboratively by developers, testers, and product owners; strong focus (broad coverage) on lower test levels — unit, component, component integration.',
        'DEVOPS: automation is a core CI/CD enabler with broader scope across all test levels and types; heavy reliance on IaC for environment provisioning; testing in production via blue-green deployments and canary releases; fast automated feedback via pre-merge testing, testing in production, and monitoring.',
        'Main DevOps automation challenge: managing complexity of different requirements per test level (fully integrated components for end-to-end vs. mocked services for component testing) — containerization helps with isolated, reproducible environments.',
        'Culture: sequential sees testing as a distinct phase; Agile promotes developer/tester/PO collaboration; DevOps blurs roles further — testers join code reviews and monitoring/observability setup, developers join testing and monitoring.'
      ],
      examInsights: [
        'Q26 KEY — Specific to SEQUENTIAL: limited feedback loop beyond unit testing; detailed planning in earlier phases; automation in a distinct test phase. Specific to AGILE: collaborative test design (dev + tester + PO); broader coverage on lower test levels.',
        'Q-A5 — Same mapping as an assignment exercise: statements 1, 2, 4 → sequential; 3, 5 → Agile.'
      ]
    },
    {
      id: '3.3.1',
      title: 'Examples of Manual Testing',
      level: 'K2',
      type: 'skim',
      summary: "Automation-first thinking suggests no room for manual testing — but testing is about giving stakeholders the information they need, and manual testing remains vital: (1) it yields information automation cannot easily provide (usability is hard to automate, easy manually); (2) some stakeholders gain extra confidence seeing the software with their own eyes; (3) it is flexible, uses human judgment, and can be more cost-efficient depending on the situation. Manual testing happens during pipeline activities AND in live operation (A/B testing; features deployed but not yet released, controlled by feature toggles). The INITIAL manual testing is static testing of requirements/user stories — e.g., refinements using 4-amigos sessions (business analysis + development + testing + operations) — and code reviews in PRs. Other approaches: exploratory testing, crowd testing, quality hunting.",
      examInsights: [
        'Q27 TRAP (LEAST-value question) — "Manually reproducing automated tests during acceptance testing" gives the LEAST value: exploratory testing achieves more validation with less effort.',
        'Q27 KEY — Valuable manual testing: exploratory testing before release, code reviews on PRs (static testing preventing defects), accessibility testing (automatable only to a limited extent).'
      ]
    },
    {
      id: '3.3.2',
      title: 'Exploratory Testing within CI/CD Pipeline',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Exploratory testing is more than testing without pre-documented test cases — exploring is rigorous, analytical investigation. Exploration is the counterpart to automation: automated feedback comes from tools, exploratory feedback comes from PEOPLE.',
        'Tests are simultaneously designed, executed, and evaluated while the tester learns the test object — can be done by a user representative paired with a team member to investigate specific situations and gain confidence.',
        'Though manually executed, exploratory tests CAN be triggered from the CI/CD pipeline. Tools support test case creation DURING exploration (not beforehand), execution, result recording, and evidence storage (screenshots). Results should be registered in the pipeline to feed quality gates and test reporting alongside automated results.',
        'Test charters can be defined early (during story refinement → backlog of testing work items) or when a need arises (e.g., unexpected automated results). Execution environments range from temporary pipeline-created environments to staging or even production (controlled by feature toggles).',
        'IaC can be used to explore software impact across infrastructure versions — documented compatibility evidence, tracing infrastructure-specific defects to root causes before deployment.'
      ],
      examInsights: [
        'Q28 KEY — TRUE: "exploratory tests allow the use of tools to support test execution and test reporting" (charter design, result recording, defect reporting, artifact storage).',
        'Q28 TRAP — Exploratory tests ARE part of the pipeline (can be triggered from it), run in ANY environment, and design/execution/evaluation happen in ONE session — not spread across SDLC phases.'
      ]
    },
    {
      id: '3.3.3',
      title: 'Crowd Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Crowd testing: a virtual group of people, usually EXTERNAL to the organization and possibly geographically distributed, representing real users on real devices, individually executing tests simultaneously. Used in beta testing after a canary release, A/B testing, post-release feedback collection, and real-world device testing.',
        'Approach is exploratory-like: crowd members get a TEST CHARTER to guide testing without detailed upfront test cases. Success = designing and executing MANY tests quickly to gather extensive quality information. Focus is BREADTH FIRST — many personas and software/hardware combinations (like beta testing of games or mobile apps).',
        'Specialized organizations manage crowd selection, charter distribution, and result gathering. Disadvantages: more preparation effort for the team (ordering of tests, defining personas); reporting can be challenged by large data volume in a short time; teams must review defect reports to prevent unjustified feedback; crowd testers need good registration instructions.',
        'Risks: CONFIDENTIALITY (larger, more external crowd = harder to manage), KNOWLEDGE (many internal applications require product/process knowledge), MOTIVATION (pay-per-bug rewards push testers toward easy finds rather than critical ones).'
      ],
      examInsights: [
        'Q29 KEY — Crowd testing feedback = "product compatibility with different versions of the operating system in real-world usage" (breadth, real devices, real users).',
        'Q-A6 KEY — Crowd testing example: "a large group of independent testers tests the software in a time-boxed session with no test case definition" (charter-guided, no upfront test cases).',
        'TRAP — Several independent teams testing quality aspects in a limited time frame = QUALITY HUNTING, not crowd testing. Acceptance-test coverage info = traceability/automation. Security compliance = security testing.'
      ]
    },
    {
      id: '3.3.4',
      title: 'Quality Hunting Events',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Quality hunting: a collaborative, GAMIFIED event where quality hunting teams (about HALF the size of an Agile team) compete to give the MOST VALUABLE ASSESSMENT of the test object quality level in a limited time. Main goal: a SHARED VIEW of the quality level — supporting stakeholders’ personal experience of quality.',
        'Competition pushes teams to create fresh, innovative ways to assess quality. Findings are recorded like exploratory-testing debriefing information; defects follow the normal defect management process; multi-team information usually complements each other and extends other QE information.',
        'The game element: a (usually small) reward for the team with the most informative report and/or most specific angle on the quality level.',
        'Quality hunting ≠ BUG HUNTING: bug hunting gamifies FINDING DEFECTS, which can drive testers to hunt irrelevant defects without giving a view of quality and risk. Quality hunting is broader — most valuable information about the quality level.',
        'It is a manual testing activity integrated into the CI/CD pipeline step to test the overall business process; the inter-team discussion of results feeds the DevOps culture of collaboration and learning.'
      ],
      examInsights: [
        'Q30 (K3, 2pts) — Best implementation: "small teams of various roles using fresh test approaches assess the test object quality level while competing to bring the most valuable quality insights for stakeholders".',
        'Q30 TRAP — Not stakeholders assigned test conditions; not testers confirming automated results; and NOT teams competing to find as many defects as possible — that is bug hunting.'
      ]
    }
  ]
};
