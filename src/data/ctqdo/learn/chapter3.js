// CT-QDO v1.0 — Chapter 3 learn content, authored from ISTQB CT-QDO Syllabus v1.0 (2026-04-17).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The largest chapter (510 minutes). Part 3.1 shows how automation supports QA: single source of truth, traceability, quality reporting, test data management, statistical analysis, and test environment management. Part 3.2 covers automated testing — regression testing in the pipeline, API and contract testing, and how automation differs per SDLC model. Part 3.3 restores the balance with manual testing: exploratory testing, crowd testing, and quality hunting.",
  keywords: [
    "API testing", "automated testing", "contract testing", "crowd testing", "exploratory testing",
    "quality hunting", "quality report", "quality reporting", "regression testing", "test automation",
    "test data", "test data management", "test result", "traceability",
    "build artifact", "CI/CD pipeline", "failed deployment recovery time",
    "personally identifiable information", "single source of truth", "software binary", "statistical analysis",
  ],
  objectives: [
    { id: "QDO-3.1.1", level: "K2", text: "Explain how a single source of truth for testware supports quality assurance" },
    { id: "QDO-3.1.2", level: "K2", text: "Explain how automation supports traceability between the test basis and testware" },
    { id: "QDO-3.1.3", level: "K3", text: "Implement uniform quality reporting practices in the CI/CD pipeline with information from both automated testing and manual testing" },
    { id: "QDO-3.1.4", level: "K2", text: "Explain the benefits of test data management automation" },
    { id: "QDO-3.1.5", level: "K2", text: "Explain the benefits of statistical analysis of test results over long periods of time" },
    { id: "QDO-3.1.6", level: "K2", text: "Explain the benefits of standardized, controlled, and automated test environment management" },
    { id: "QDO-3.2.1", level: "K2", text: "Explain how regression testing integrates into various CI/CD pipeline activities" },
    { id: "QDO-3.2.2", level: "K3", text: "Prepare API testing" },
    { id: "QDO-3.2.3", level: "K2", text: "Compare the extent of test automation in DevOps to Agile software development and sequential development models" },
    { id: "QDO-3.3.1", level: "K2", text: "Give examples of manual testing for a DevOps organization" },
    { id: "QDO-3.3.2", level: "K2", text: "Explain how exploratory testing can work with a CI/CD pipeline" },
    { id: "QDO-3.3.3", level: "K2", text: "Explain how crowd testing can support the culture of feedback" },
    { id: "QDO-3.3.4", level: "K3", text: "Apply quality hunting events to support the culture of learning" },
  ],
  sections: {
    "3.1.1": {
      objective: "QDO-3.1.1",
      body: [
        { type: "p", text: "As DevOps organizations grow, fragmented, inconsistent, and duplicated information across teams and tools leads to errors, poor collaboration, and difficulty maintaining transparency and traceability between configuration items. A single source of truth (SSOT) architecture, applied at organizational level, centralizes and standardizes information: one information type is stored in only one location, so all teams access accurate, consistent, up-to-date data." },
        { type: "table", headers: ["SSOT system", "Provides", "Stores"], rows: [
          ["Information management systems", "Information lifecycle management", "Backlog items (requirements, defect reports, tasks), project and product documentation"],
          ["Version control systems (VCS)", "Controlled change management", "Source code, build & deployment scripts, IaC configurations, CI/CD pipeline definitions, test cases, test automation code, text-format test data"],
          ["Artifact management systems", "Reusability of build artifacts", "Dependencies, software binaries, binary test data"],
          ["Observability systems", "Traceability and access management", "Traces, logs, metrics"],
        ]},
        { type: "list", intro: "SSOT benefits for DevOps teams:", items: [
          "Centralization — the sole location where critical data is stored, updated, and retrieved",
          "Consistency — all teams work with the same up-to-date information, avoiding discrepancies",
          "Automation — facilitates automated workflows by integrating with tools across the DevOps toolchain",
          "Collaboration — cross-team alignment through a shared understanding of information",
          "Auditability — a clear history of changes for tracking and compliance",
        ]},
        { type: "note", title: "Watch the test data", text: "Test data appears in TWO SSOT systems: text-format test data in the VCS, binary test data in artifact management. The matching question (Q18) hinges on knowing which system stores what." },
      ],
    },
    "3.1.2": {
      objective: "QDO-3.1.2",
      body: [
        { type: "p", text: "DevOps teams should register the relationships between related work products: requirements, user stories, code, and testware. Traceability ensures all SDLC work products are connected, so teams can verify every requirement has been implemented, tested, delivered, deployed, and released. Bi-directional traceability also supports maintenance: when a requirement changes, it is easy to find where to implement the change, and the root cause of a code defect can quickly be traced to a user story or requirement. The organization's test policy describes the need for traceability." },
        { type: "p", text: "Tools register and monitor traceability efficiently. Automation is fundamental for dynamic updates to traceability matrices, reducing the risks of manual tracking. Configuration management and/or task management tools capable of registering relationships between work products provide the automation, plus reports and overviews of the work products and their usage." },
        { type: "p", text: "Traceability fosters collaboration between development, testing, and operations roles by making work-product relationships transparent and auditable. It improves defect tracking and resolution, supports compliance with standards and regulations, and is a key enabler of continuous discovery, integration, delivery, deployment, testing, and monitoring." },
      ],
    },
    "3.1.3": {
      objective: "QDO-3.1.3",
      body: [
        { type: "p", text: "At any moment it is important to understand the software quality level throughout the SDLC — feedback to the team on code quality and to product management on release readiness. Integrating quality reporting into the CI/CD pipeline provides the latest status: every stage creates information. Some data is generated automatically (build success, test pass/fail); other data comes from MANUAL testing (user acceptance testing, exploratory testing, coverage recorded in a test management tool). Together they create the comprehensive quality view." },
        { type: "p", text: "Quality reporting should occur consistently for each pipeline cycle and therefore be automated. Manual test results are included via integration with a test management tool. Information is collected into metrics and combined into a quality report, delivered as a dashboard on a wiki, in a shared tool, as templated emails/reports, or combinations. Report generators must integrate with the CI/CD tools' logging/monitoring/reporting, task and test management tools, and production monitoring (telemetry) — combining metrics from all sources into a single accessible location (SSOT)." },
        { type: "list", intro: "The implementation process:", items: [
          "Determine the KPIs and related metrics to track: code quality, coverage, performance, build stability, build success rate, deployment frequency, failed deployment recovery time, security vulnerabilities",
          "Collect data using the chosen metrics",
          "Automate data gathering from the various CI/CD pipeline stages",
          "Clean and normalize the data with data preparation tools",
          "Store collected data in a centralized database if the tools do not provide one",
          "Visualize metrics using dashboards — charts, graphs, tables, with sections per pipeline stage",
          "Enable continuous monitoring in the dashboard for real-time updates",
          "Ensure dashboard accessibility for relevant stakeholders — developers, testers, product owners, scrum masters, managers",
        ]},
        { type: "list", intro: "Dashboard benefits:", items: [
          "Continuous tracking of key metrics for quick response and resolution",
          "Trend analysis of pipeline performance to find bottlenecks and optimize efficiency",
          "Proactive review of security compliance status",
          "Transparency and collaboration through dashboards shared with stakeholders",
          "Data-driven insights supporting retrospectives",
        ]},
        { type: "example", title: "K3 scenario (Q20)", text: "Stakeholders complain the dashboard is outdated, misses manual test results, and gives an incomplete quality view. Correct next steps: ensure automated scripts collect data from ALL pipeline stages, integrate manual test results immediately, and enable real-time dashboard updates. Splitting manual results into a separate system fragments the single source of truth." },
      ],
    },
    "3.1.4": {
      objective: "QDO-3.1.4",
      body: [
        { type: "p", text: "Managing test data manually reduces flow and slows feedback cycles. Test data management automation creates, updates, and manages test data within the CI/CD pipeline. Standardized test data accelerates test cycles, improves coverage, reduces errors and result inconsistency, improves data security, and supports privacy regulations. Effective automation needs collaboration between all team roles to identify what data to focus on and which practices to use." },
        { type: "list", intro: "Key aspects of test data management:", items: [
          "Data design — analyze and define the data needed for a test objective (types, sizes, complexity)",
          "Data generation — create/update data for comprehensive coverage and input variety (valid and invalid data, edge cases, boundary values)",
          "Data validation — automated checks for accuracy and compliance with standards and regulations",
          "Data organization — structured storage in a VCS, available on demand in the pipeline or for manual testing",
          "Anonymization — mask or anonymize production data before using it as test data",
          "Data refresh and cleanup — automatically refresh or reset test data as part of test automation",
        ]},
        { type: "list", intro: "Practices:", items: [
          "Synthetic test data creation — data formatting rules, analysis of production data structure, or pre-trained GenAI models generate artificial data matching test conditions without using actual production data",
          "Test data cloning — create high-volume, valid data for performance and load testing by cloning existing data",
          "Test data subsetting — select a smaller, representative subset of production data (keeping references between data items) to reduce storage needs and accelerate provisioning",
          "Test data masking — mask or modify personally identifiable information (PII: name, address, email, phone number, IP address, location data) to protect identity",
        ]},
        { type: "list", intro: "Risks to manage:", items: [
          "Incomplete coverage — generated data may not reflect real-world complexity",
          "Resource utilization issues — generating, storing, and distributing large amounts of data consumes significant resources",
          "Breach of security and compliance rules — improper masking can expose sensitive information and result in fines",
        ]},
        { type: "note", title: "Exam trap (Q21)", text: "Masking REDUCES security risk — it does not ELIMINATE security concerns. Improper masking can still expose sensitive data." },
      ],
    },
    "3.1.5": {
      objective: "QDO-3.1.5",
      body: [
        { type: "p", text: "Test execution produces various kinds of test results. Short-term use: inform stakeholders about quality and related risks so they can establish confidence in the software's business value. Long-term use: a broader picture of the quality of the software, the processes applied, AND the people involved. Statistical analysis identifies trends and patterns related to quality and residual risks, supporting decision-making. Stakeholder-confidence metrics include requirements coverage, code coverage, defect density, and mean time between failures (MTBF)." },
        { type: "p", text: "AI-based predictive analytics can predict future results. When the predicted situation misses the desired one, that supports improving the process and the people — process improvement based on measured test effectiveness, or allocating more or different resources." },
        { type: "list", intro: "Further uses of statistical analysis:", items: [
          "A/B testing — comparing variants shown to separate user groups to find the most valuable one",
          "Evaluating non-functional test results, e.g., performance testing based on load profiles",
          "Analyzing single or multiple test runs — quality trends across iterations",
          "Test process improvement — detecting inconsistent (flaky) tests and finding automation keywords with long execution times, to optimize execution time and cost",
        ]},
        { type: "p", text: "The statistical analysis tools should be integrated into the CI/CD pipeline, with outcomes displayed on a dashboard." },
        { type: "note", title: "Exam trap (Q22)", text: "Statistical analysis does NOT remove the need for human interpretation — humans still validate findings, assess behavior, and spot defective tests and process inefficiencies." },
      ],
    },
    "3.1.6": {
      objective: "QDO-3.1.6",
      body: [
        { type: "p", text: "Standardized, controlled, and automated test environment management is a cornerstone of software development. STANDARDIZING environments eliminates the variability of inconsistent configurations, so tests yield reliable, reproducible results — less time troubleshooting environment-caused defects, more focus on actual code defects." },
        { type: "p", text: "AUTOMATION streamlines provisioning: rapid, repeatable setups replace time-consuming manual processes. Environments are spun up and torn down as needed (including test data management), enabling faster test cycles and more frequent iteration." },
        { type: "p", text: "CONTROLLED environments are right-sized for specific tests: no over-provisioning (excessive resources allocated unnecessarily) and no under-provisioning (performance bottlenecks). On-demand provisioning lowers operational costs and uses resources only when needed." },
        { type: "p", text: "Using IaC to create replicable environments removes configuration ambiguity, improves collaboration among testers, developers, and operations (supporting removal of the wall of confusion), and provides blueprints easily replicated and scaled in the cloud for growing testing demands or team sizes." },
        { type: "note", title: "Best practice (Q23)", text: "The best resource approach in a controlled test environment: provision resources DYNAMICALLY based on actual testing needs — preventing both over- and under-provisioning." },
      ],
    },
    "3.2.1": {
      objective: "QDO-3.2.1",
      body: [
        { type: "p", text: "Regression testing determines that code changes do not adversely affect existing functionality — a critical safety net given frequent changes and deployments. Practically all test automation in the pipeline first covers new functionality and then becomes regression testing. Regression tests usually run on multiple test environments of the same type in parallel, shortening execution time, with each environment sized per test type." },
        { type: "p", text: "All tests could theoretically run on every pipeline execution — but even if fast enough, that harms business viability and sustainability (time, cost, energy). In practice teams create multiple regression suites with different coverage levels, run for different purposes and frequencies, or based on what changed: some before merging into the codebase, some after, some overnight. Selection is usually risk-based — e.g., running component tests chosen via heat maps showing changed code areas in the latest commit. Tags and filters enable dynamic selection; another approach is running tests for existing features affected by a change." },
        { type: "p", text: "The pipeline should run a FULL regression suite before releasing software, balancing test-count optimization against coverage needs. Depending on the targeted quality level, some regression tests run only occasionally (e.g., for a security test report). Regression testing should be as automated as possible and part of the pipeline design." },
        { type: "note", title: "Best answer pattern (Q24)", text: "Dynamic scope based on file changes in the feature branch + risk-based selection before release. 'Run everything every time' is wasteful; 'skip regression, new code is well tested' misses impact on existing code." },
      ],
    },
    "3.2.2": {
      objective: "QDO-3.2.2",
      body: [
        { type: "p", text: "API testing focuses on the interfaces between systems and how they communicate: verifying functional suitability, reliability, performance efficiency, security, and other API quality characteristics. APIs are the backbone of modern applications; testing them as early as possible prevents costly defects. API testing determines whether the data exchange is consistent, correct, timely, and secure." },
        { type: "list", intro: "Key aspects:", items: [
          "Functional testing — the API behaves as expected for all inputs and produces correct outputs",
          "Reliability testing — the API functions as expected under different scenarios",
          "Performance testing — response times, throughput, scalability",
          "Security testing — authentication, authorization, data protection mechanisms",
        ]},
        { type: "p", text: "Benefits: faster feedback than GUI testing, easy CI/CD integration, early testing (shift left). Challenges: thorough coverage for complex APIs, keeping tests updated as contracts evolve, handling dependencies on external APIs or services. Many tools exist, and most programming languages provide usable libraries." },
        { type: "p", text: "CONTRACT TESTING is a type of integration testing that tests each application in isolation, checking that the messages it sends or receives conform to a shared understanding documented in a 'contract'. It validates the agreement between a provider (accessed through an API) and its consumers — not the implementation or business logic, but adherence to a defined structure, format, and expectations for request/response payloads, headers, status codes, and data types. It is especially important in microservices architectures, and it supports the DevOps fast feedback loop with fast, isolated checks that changes won't break downstream systems." },
        { type: "list", intro: "Implementing contract testing:", items: [
          "Define the contract — expected API structure and behavior: request formats, response fields, status codes, data types",
          "Write contract tests — consumers specify how they intend to interact; both consumer and provider verify against the SAME contract",
          "Run in the CI/CD pipeline — early feedback, detect breaking changes before deployment",
          "Version and manage contracts — store in version control so changes are tracked, reviewed, and coordinated across services",
        ]},
        { type: "p", text: "Trade-offs: contract tests do not cover all functional aspects of API testing (they supplement other test types); contract changes require careful cross-team coordination; and the team must invest in tooling and shared standards." },
        { type: "example", title: "K3 scenario (Q25)", text: "Testing a third-party payment API where the risk is mismatched expectations between the two applications: define and validate a CONTRACT specifying expected request and response formats. Contract testing works without deploying all components — earlier and more isolated than integration or acceptance testing." },
      ],
    },
    "3.2.3": {
      objective: "QDO-3.2.3",
      body: [
        { type: "p", text: "Test automation applies to any SDLC, but its timing and emphasis vary." },
        { type: "table", headers: ["Aspect", "Sequential models", "Agile", "DevOps"], rows: [
          ["When automation happens", "In the test phase, after development completes", "Throughout the SDLC, within iterations", "In all CI/CD pipeline stages — a core enabler of CI/CD"],
          ["Feedback loop", "Limited, between development and testing phases", "Fast, within the iteration", "Fast + automated: pre-merge testing, testing in production, monitoring"],
          ["Coverage emphasis", "Beyond unit testing, limited to late phases; upfront planning required", "High focus on unit, component, and component integration testing", "Broad scope across all test levels and test types; heavy reliance on IaC; testing in production (blue-green, canary)"],
          ["Culture", "Testing is a distinct phase", "Collaboration of developers, testers, product owners", "Roles blur further: testers join code reviews and monitoring/observability setup, developers join testing and monitoring"],
        ]},
        { type: "p", text: "The main test automation challenge in DevOps is managing the complexity of different requirements per test level — fully integrated system components for end-to-end testing versus mocked services for component testing. Containerization helps by providing isolated, reproducible environments." },
        { type: "note", title: "Exam mapping (Q26 / Q-A5)", text: "Sequential-specific: limited feedback loop beyond unit testing; detailed planning in earlier phases; automation in a distinct test phase. Agile-specific: tests designed collaboratively by developers, testers, and product owners; broad coverage on lower test levels." },
      ],
    },
    "3.3.1": {
      objective: "QDO-3.3.1",
      body: [
        { type: "p", text: "The DevOps principle 'automate as much as possible' leads some to believe there is no room for manual testing in the ultimate CI/CD pipeline. But testing is about gathering information about the test object's quality so stakeholders can establish confidence — and stakeholders need various kinds of information." },
        { type: "list", intro: "Why manual testing remains vital:", items: [
          "It provides kinds of information automation cannot easily give — usability is difficult to automate but easy to assess manually.",
          "Some stakeholders gain extra confidence when they see the software quality with their own eyes.",
          "It is flexible, uses human judgment, and can be more cost-efficient than automated testing, depending on the situation.",
        ]},
        { type: "p", text: "Manual testing happens during pipeline activities and possibly during live operation — in A/B testing, or when software is deployed to production but not yet released to users (feature toggles). The INITIAL manual testing is static testing of requirements and user stories — e.g., refinements using 4-amigos sessions with representation from business analysis, development, testing, and operations — and reviews of code and related work products in pull requests. Other relevant manual approaches: exploratory testing, crowd testing, and quality hunting — early dynamic testing complementing pipeline automation." },
        { type: "note", title: "LEAST-value pattern (Q27)", text: "Manually reproducing automated tests during acceptance testing gives the least information value — exploratory testing achieves greater validation with less effort. Code reviews, exploratory testing, and accessibility testing are all high-value manual activities." },
      ],
    },
    "3.3.2": {
      objective: "QDO-3.3.2",
      body: [
        { type: "p", text: "Exploratory testing is more than testing without pre-documented test cases — exploring involves rigorous, analytical investigation. Exploration is the counterpart to automation: automated feedback comes from tools, feedback from exploration comes from people. In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object. It can be performed as dynamic testing by a user representative together with a team member to investigate behavior in specific situations and gain confidence." },
        { type: "p", text: "Although exploratory tests are manually executed, they can be TRIGGERED from the CI/CD pipeline. Tools may support test case creation during exploration (not beforehand), execution, result recording, and storing evidence such as screenshots. Exploratory results should be registered in the pipeline so they feed quality gates and test reporting together with automated results." },
        { type: "p", text: "Test charters can be defined early (during user story refinement — creating a backlog of testing work items) or when a need arises (e.g., unexpected automated test results). Exploratory tests can run in various environments: a temporary environment created from the pipeline, staging, or even production for specific purposes controlled by feature toggles." },
        { type: "p", text: "IaC may be used to explore the impact of various infrastructure versions on the software — documented evidence of compatibility across platforms, letting teams identify and trace infrastructure-specific defects to root causes before deployment." },
        { type: "note", title: "True statement (Q28)", text: "Exploratory tests allow TOOLS to support execution and reporting. False claims: 'not part of the pipeline', 'only in fully deployed test environments', 'design/execution/evaluation spread across SDLC phases' (they happen in one session)." },
      ],
    },
    "3.3.3": {
      objective: "QDO-3.3.3",
      body: [
        { type: "p", text: "Crowd testing uses a virtual group of people — usually external to the organization, possibly geographically distributed — who represent real users, use real devices, and individually execute tests simultaneously. It is used in beta testing after a canary release, in A/B testing, in post-release feedback collection, and in real-world device testing. The approach resembles exploratory testing: crowd members receive a test charter to guide their testing without detailed upfront test cases." },
        { type: "p", text: "The key to success is designing and executing MANY tests, quickly gathering extensive quality information. The focus is breadth first — covering many personas and software/hardware combinations (like beta testing of games or mobile apps). A main advantage: many different situations and configurations can be tested quickly. Specialized organizations manage crowd-tester selection, distribute the charters, and gather results." },
        { type: "p", text: "Disadvantages: preparation takes more effort from the team (especially when tests need a certain order) and may need more depth (defining specific personas) than testing in-team. Reporting can be challenging due to the large data volume gathered in a short timeframe; teams should review defect reports to prevent unjustified feedback, and crowd testers need good instructions on what to gather and how to register results." },
        { type: "list", intro: "Risks and challenges:", items: [
          "Confidentiality — the larger and more external the crowd, the harder confidentiality becomes to manage",
          "Knowledge — many internal applications require specific product/process knowledge; not every application suits crowd testing",
          "Motivation — the rewards method influences effectiveness: testers paid 'by the bug' often chase easy finds instead of the most critical ones",
        ]},
        { type: "note", title: "Definitions the exam swaps (Q29 / Q-A6)", text: "Crowd testing = a large group of independent external testers, time-boxed session, charter-guided, no upfront test cases — yielding feedback like OS-version compatibility in real-world usage. 'Several independent teams testing specific quality aspects in a limited time frame' is QUALITY HUNTING, not crowd testing." },
      ],
    },
    "3.3.4": {
      objective: "QDO-3.3.4",
      body: [
        { type: "p", text: "Software can only be delivered with the right quality at the right moment if there is a clear view of the required quality level — and of the current one. Static and dynamic testing together determine the current quality level, but the image of quality also depends on stakeholders' personal experience. To build that experience, a DevOps team can organize QUALITY HUNTING: a collaborative activity with a gamification approach (different from bug hunting)." },
        { type: "p", text: "Quality hunting is an event where quality hunting teams (about half the size of an Agile team) COMPETE to give the most valuable assessment of the test object's quality level in a limited time. The main goal is a SHARED VIEW of the quality level. Competition challenges teams to create fresh and innovative ways to assess quality and illuminate one or more quality aspects. Findings are recorded like exploratory-testing debriefing information; defects found are handled through the organization's normal defect management process. Information from multiple teams usually complements each other and extends what testing and other QE activities produced." },
        { type: "p", text: "Stakeholders benefit because, in a short time, many ideas and new angles on relevant quality aspects are investigated — a broad and varied overview of system quality. The game element is a (usually small) reward for the team with the most informative report and/or the most specific angle on the quality level." },
        { type: "p", text: "Quality hunting is different from and broader than BUG HUNTING — a gamified approach that motivates finding defects, which may lead testers to chase irrelevant defects without producing a view of quality and risk. Quality hunting is a manual testing activity integrated into the CI/CD pipeline step that tests the overall business process, and the discussion between quality hunting teams feeds the DevOps culture of collaboration and learning." },
        { type: "example", title: "K3 scenario (Q30)", text: "Best implementation of a quality hunting event: small teams of various roles use fresh test approaches to assess the test object's quality level, competing to bring the most valuable quality insights for stakeholders. 'Find as many defects as possible for a prize' describes bug hunting — the classic wrong answer." },
      ],
    },
  },
};
