// CT-QDO v1.0 — Chapter 4: Tools and Practices in DevOps
// summary/deepPoints from syllabus v1.0 (2026-04-17); examInsights derived from the official sample exam v1.0
export default {
  id: 4,
  title: 'Tools and Practices in DevOps',
  time: '200 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Mostly K1 recall — 12 of the 48 sample questions (incl. appendix), so easy points if you memorize definitions. Know the 15 tool categories with one signature capability each, the seven release strategies, IaC's two core concepts (declarative/imperative + idempotency), the four feature-toggle types, the two branching strategies, and the telemetry vs. observability vs. continuous monitoring distinction.",
  sections: [
    {
      id: '4.1.1',
      title: 'Capabilities of Tools',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Fifteen tool categories, each with signature capabilities: (1) Information management — version control, traceability, transparency, change control for documents/backlog items. (2) Source code management — version control, branching, merging, conflict resolution. (3) Continuous integration — CI servers, automated build pipelines, integration testing. (4) Continuous deployment — deployment pipelines, deployment automation, roll forward, rollback.',
        '(5) Environment and infrastructure management — IaC, environment provisioning, configuration management. (6) Build artifact management — artifact storage, dependency management, dependency scanning, SCANNING FOR VULNERABILITIES, secure distribution. (7) Code quality and security — static analysis, SAST/DAST, software composition analysis, supply-chain security validation, unit testing, code coverage.',
        '(8) Integration and test automation — contract testing, API testing, component integration testing, UI testing, reusable frameworks. (9) Performance and security testing — load/stress/spike/volume/endurance testing, vulnerability scanning, penetration testing. (10) Telemetry (monitoring and observability) — performance monitoring, log aggregation/analysis, distributed tracing, alerting.',
        '(11) Chaos engineering and fault injection — fault injection, resilience testing, fault tolerance validation. (12) Test data — synthetic generation, anonymization, masking, subsetting/cloning, on-demand provisioning, GDPR compliance. (13) Test management — test case authoring/version control, planning/scheduling, traceability, real-time reporting, CI/CD and defect-tracking integration. (14) Collaboration and communication — real-time messaging, project management, document sharing. (15) Operations quality and reliability — backup, recovery, incident management, vulnerability scanning.'
      ],
      examInsights: [
        'Q31 KEY — Build artifact management tools provide SCANNING FOR VULNERABILITIES (plus storage, dependency management, secure distribution). Test data generation belongs to test data/test management tools; automated build pipelines to CI tools; document sharing to collaboration tools.',
        'Q-A7 — Inconsistent configurations across dev/test/prod environments → prioritize environment & infrastructure management: automate environment creation, standardize configuration files, use IaC tools. Artifact repositories, CI/CD pipelines, or load testing do not fix configuration inconsistency.'
      ]
    },
    {
      id: '4.1.2',
      title: 'Tools Supporting Quality Assurance (QA) and Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Coding/integration phase tools: STATIC ANALYSIS and code quality tools — evaluate source code without execution, enforce coding standards, find potential defects, code smells, security vulnerabilities. UNIT TESTING tools — verify individual units, fast developer feedback. DEPENDENCY SCANNING tools — analyze third-party libraries for security risks, outdated packages, license issues. Integration/API testing tools — verify connected components meet interface expectations.',
        'Closer to deployment: functional/UI testing tools (simulate user behavior against functional requirements), performance testing tools (behavior under load, bottlenecks, scalability), security testing tools (injection defects, misconfigurations), test data management tools (realistic anonymized/synthetic data without privacy violations).',
        'Enablers: environment provisioning tools (test environments mirroring production) and configuration management tools (consistent settings across development, testing, and production — fewer errors, repeatable test processes).'
      ],
      examInsights: [
        'Q32 MATCHING — Static analysis tools = identify coding-standard deviations, vulnerabilities, and potential defects BEFORE test execution. Continuous testing tools = automated testing at every SDLC phase/test level for early defect detection. Configuration management tools = consistent environments across dev/test/prod. Continuous monitoring tools = real-time feedback on system health and user behavior.'
      ]
    },
    {
      id: '4.2.1',
      title: 'Non-testing Activities within a CI/CD Pipeline',
      level: 'K1',
      type: 'skim',
      summary: "Seven non-testing activity groups critical to pipeline success: (1) Source code management — overseeing commits and version control in a shared repository. (2) Branching and merging — branching, merging, creating PRs to organize and review changes. (3) Build artifacts and dependency management — resolving dependencies, compiling, generating versioned artifacts stored for later stages. (4) Conflict resolution and coding standards — resolving code conflicts, provisioning integration environments, static analysis enforcing standards. (5) CI/CD pipeline configuration — pipeline setup, automated provisioning of isolated consistent environments (containerization), environment-specific configuration and feature toggles via CLI arguments or environment variables. (6) Release management — coordinating/approving releases, rollback strategies, tagging versions, deployment strategies (blue-green, canary). (7) Monitoring and feedback — system health monitoring, logging/telemetry configuration, metrics analysis, alerting.",
      examInsights: [
        'Q33 KEY — Activities that help developers manage feature development and code integration with minimal risk = BRANCHING AND MERGING (feature branches + code review per change). Source code management alone just organizes commits; monitoring and release management serve other purposes.'
      ]
    },
    {
      id: '4.2.2',
      title: 'Key Release Strategies',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Release strategies aim to: minimize risk (less downtime, gradual exposure, proactive incident detection), optimize deployment (velocity, less repetition, shorter dev-to-production time), and deliver seamless customer value (uninterrupted UX, rapid incident resolution).',
        'Seven key strategies: (1) Canary release — small user subset first, then expand. (2) Blue-green deployment — two identical environments swap roles. (3) ROLLING RELEASE — gradually replace system instances with updated versions; continuous availability; common in large-scale systems. (4) PHASED ROLLOUT — deploy incrementally by region, user group, or other segmentation; monitor and resolve per phase.',
        '(5) PROGRESSIVE DELIVERY — combines canary + phased rollout; incremental release to targeted users/regions for precise validation and feedback. (6) HOTFIX DEPLOYMENT — urgent release resolving critical production defects; prioritizes SPEED over thorough testing. (7) DARK LAUNCHING — deploy features marked inaccessible to users; test/monitor under real conditions without affecting UX.',
        'Organizations often combine strategies (e.g., releasing a hotfix using phased rollout).'
      ],
      examInsights: [
        'Q34 MATCHING — Rolling release = gradually replaces system instances. Hotfix deployment = urgent release for critical defects. Dark launching = deployed but inaccessible to users. Phased rollout = incremental by region/user group.',
        'TRAP — Phased rollout segments USERS/REGIONS; rolling release replaces INSTANCES. Hotfix trades thorough testing for speed.'
      ]
    },
    {
      id: '4.2.3',
      title: 'Infrastructure as Code (IaC)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'IaC manages and provisions infrastructure through machine-readable definition files — infrastructure treated as software, with descriptive models and version-controlled code for consistency and repeatability. Teams edit IaC source code instead of modifying the target environment directly.',
        'QA in IaC: automated static testing, peer reviews, and configuration validation to assess reliability, security, and compliance before deployment.',
        'Core concept 1 — DECLARATIVE vs IMPERATIVE approaches: declarative specifies the DESIRED STATE (e.g., three servers always running); imperative gives detailed INSTRUCTIONS to achieve it (install software, configure settings).',
        'Core concept 2 — IDEMPOTENCY: IaC scripts produce the same result even when applied multiple times, preventing configuration drift.',
        'IaC integrates with configuration management systems (track changes, collaborate, roll back). It removes repetitive manual tasks, reduces human error, and supports ENVIRONMENT PARITY — identical configurations across development, testing, and production — reducing "it works on my machine" and smoothing transitions between test levels.'
      ],
      examInsights: [
        'Q35 (select TWO) — Correct: idempotency ensures a consistent environment on repeated deployment; declarative + imperative approaches define the state and the steps to achieve it.',
        'Q35 TRAP — IaC does NOT rely on GUIs (it is code), does NOT depend on manual configuration (it automates), and does NOT eliminate version control (it leverages it).'
      ]
    },
    {
      id: '4.2.4',
      title: 'Feature Toggles',
      level: 'K1',
      type: 'skim',
      summary: "Feature toggles modify system behavior to deliver new functionality rapidly but safely WITHOUT CHANGING CODE — structured feature rollout, incremental releases, risk mitigation, controlled experimentation. In production they define which users/environments can access a feature (e.g., disabled for most users, active for testers). They support separating deployment from release. Four categories: RELEASE toggles (enable features per release-on-demand goals, e.g., canary), OPERATIONAL toggles (real-time control over system behavior), EXPERIMENT toggles (A/B testing via distinctive features per user segment), PERMISSION toggles (feature access for specific users/roles). Cost: toggles add conditional logic and complexity — track systematically, monitor, document, and retire obsolete toggles; test implementations with both on AND off settings, and test interdependent features.",
      examInsights: [
        'Q36 KEY — Feature toggles = "an approach that allows teams to modify system behavior without changing code".',
        'Q36 TRAP — Not "changing code dynamically", not PERMANENT enable/disable (temporary control), and they do NOT replace branching strategies.'
      ]
    },
    {
      id: '4.2.5',
      title: 'Branching Strategies',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Branching enables parallel development within/between teams with minimal conflicts. MERGING integrates changes from one branch to another. A MERGE CONFLICT occurs when both branches modify the same section of code — likelihood depends on change size and number of developers; resolving takes time and effort.',
        'Branching strategies also apply to TESTWARE — all code and testware lives in the VCS, so every team member must understand the strategy.',
        'Two strategies DevOps teams usually apply for CD capability: TRUNK-BASED DEVELOPMENT — after successful commit-stage tests, every change is pushed directly to the main branch (trunk); requires a mature team and high automation. FEATURE BRANCHES — created for specific changes, deleted after merging; PR used to merge to main and gather feedback; short life span (max a couple of days, aiming for a few hours).'
      ],
      examInsights: [
        'Q37 MATCHING — Trunk-based development = every change pushed directly to main after successful commit-stage tests. Feature branches = created for specific changes, deleted after merging. Pull request = merges changes between branches with team feedback. Merge conflict = same code section modified in both branches.'
      ]
    },
    {
      id: '4.2.6',
      title: 'Chaos Engineering',
      level: 'K1',
      type: 'skim',
      summary: "Chaos engineering experiments on a system to build confidence in its ability to withstand turbulent production conditions — INTENTIONALLY INJECTING FAILURES and observing the response, to determine resilience and reliability. Failures are simulated at various levels: individual computing instances (VMs, containers) up to entire geographic cloud regions. Insights improve system design, operational practices, and incident response. It uncovers HIDDEN DEFECTS not apparent in normal operation or test environments, proactively finding weaknesses before they hit users. Prerequisite: a highly effective, fast, reliable CI/CD pipeline supporting painless production deployment and rollback. Public cloud providers offer fault injection tools for controlled chaos experiments.",
      examInsights: [
        'Q38 (select TWO) — Correct: chaos engineering determines fault tolerance and reliability; it uncovers hidden defects.',
        'Q38 TRAP — It is NOT cloud-usage optimization, it DOES require a reliable CI/CD pipeline, and it triggers REAL (injected) failures — not simulations without failures.'
      ]
    },
    {
      id: '4.2.7',
      title: 'Telemetry and Observability',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'After release, CONTINUOUS MONITORING gathers information on software quality and initiates control actions when quality does not progress as expected. It observes the software in its environment (other software, hardware, people); starts with production but is relevant to any environment, especially test environments.',
        'Division of labor: TELEMETRY = gathering data (automated collection of measurements for functional and non-functional quality characteristics). OBSERVABILITY = analyzing data (logging, tracing, metrics → coherent view of the software state, used for reactive/proactive maintenance, auditability, controllability, debugging). Continuous monitoring checks against KPIs, enabled by both.',
        'Telemetry examples: PRODUCTION telemetry (memory usage, CPU load, latency, request counts — especially on cloud infrastructure); USER telemetry (click tracking, form completion rate, navigation flow, session duration — success of the software); ENDPOINT telemetry / security monitoring (threat detection, forensic analysis, compliance reporting).',
        'AI/ML can be applied to log data to understand behavior and spot anomalies. Team telemetry can measure DevOps team maturity (DORA metrics) and suggest improvements.'
      ],
      examInsights: [
        'Q-A8 KEY — Telemetry\'s role in continuous monitoring: "it gathers measurements of functional and non-functional quality characteristics".',
        'Q-A8 TRAP — ML anomaly detection = monitoring (not telemetry itself); initiating control actions = continuous monitoring as a whole; logging/tracing/metrics view = OBSERVABILITY.'
      ]
    },
    {
      id: '4.2.8',
      title: 'Software Bill of Materials (SBOM)',
      level: 'K1',
      type: 'skim',
      summary: "Teams reuse third-party components (frameworks, middleware, libraries) and code from other teams — reusability (part of maintainability, ISO/IEC 25010) speeds development. An SBOM registers required information about every component (including self-built): identification (name/number), current version, author/owner, functionality, consistency with other components, DEPENDENCIES on other components, conflicts with previous versions, cryptographic hash(es) for authentication, and licensing conditions. Maintain the SBOM with tooling integrated into the CI/CD pipeline; keeping it up to date should be part of the definition of done. Beyond maintainability, an SBOM supports vulnerability management (security): known vulnerabilities are associated with components used — when one is detected, the pipeline STOPS to prevent insecure deployment, then the team resolves it.",
      examInsights: [
        'Q39 KEY — SBOM requires COMPONENT DEPENDENCIES on other components (and per-component licensing — not licensing for the whole system).',
        'Q39 TRAP — CPU/memory statistics = telemetry; deployment automation/rollback = CD activities. Neither belongs in an SBOM.'
      ]
    },
    {
      id: '4.2.9',
      title: 'Containerization',
      level: 'K1',
      type: 'skim',
      summary: "Containerization is a lightweight form of virtualization that packages an application and its dependencies into a single executable unit — a container. Benefits: consistent environments for every test level (kills 'it works on my machine'); parallel test runs without interference and with clean test data; on-demand deployment and removal (provision only while used, scale up when demand increases); containers are defined and stored as code in a shared codebase, so central changes automatically apply to future environments. Challenges: each container is a clean environment, so STATEFUL application testing is difficult and needs extra setup; security concerns from third-party components require diligent dependency management (see SBOM).",
      examInsights: [
        'Q40 KEY — Containerization benefit: "it supports consistent environments across all development phases and test levels".',
        'Q40 TRAP — It does NOT eliminate security measures (third-party components still need dependency management), does NOT replace traditional virtualization entirely (lightweight alternative), and does NOT guarantee zero resource usage when inactive.'
      ]
    }
  ]
};
