// CT-QDO v1.0 — Chapter 4 learn content, authored from ISTQB CT-QDO Syllabus v1.0 (2026-04-17).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The tools-and-practices chapter, dominated by K1 recall objectives. Part 4.1 catalogs the DevOps tool categories and which ones support QA and testing. Part 4.2 walks through the technologies and practices that keep quality high: non-testing pipeline activities, release strategies, infrastructure as code, feature toggles, branching strategies, chaos engineering, telemetry and observability, the software bill of materials, and containerization.",
  keywords: [
    "fault injection", "fault tolerance", "hotfix", "performance testing", "security testing", "unit testing",
    "build artifact", "branching", "branching strategy", "CI/CD pipeline", "chaos engineering",
    "containerization", "dependency scanning", "feature toggle", "infrastructure as code", "merging",
    "observability", "release management", "release strategy", "software bill of materials",
    "source code management", "version control", "virtualization",
  ],
  objectives: [
    { id: "QDO-4.1.1", level: "K1", text: "Recall the capabilities of tools in DevOps" },
    { id: "QDO-4.1.2", level: "K2", text: "Explain the tools supporting quality assurance and testing in DevOps" },
    { id: "QDO-4.2.1", level: "K1", text: "Recall the non-testing activities within the CI/CD pipeline" },
    { id: "QDO-4.2.2", level: "K2", text: "Explain the different key release strategies in DevOps" },
    { id: "QDO-4.2.3", level: "K2", text: "Summarize the concepts of infrastructure as code" },
    { id: "QDO-4.2.4", level: "K1", text: "Recall feature toggles as a way to separate deployment from release" },
    { id: "QDO-4.2.5", level: "K1", text: "Recall branching strategies" },
    { id: "QDO-4.2.6", level: "K1", text: "Recall chaos engineering" },
    { id: "QDO-4.2.7", level: "K1", text: "Recall telemetry and observability" },
    { id: "QDO-4.2.8", level: "K1", text: "Recall software bill of materials to support configuration management" },
    { id: "QDO-4.2.9", level: "K1", text: "Recall containerization" },
  ],
  sections: {
    "4.1.1": {
      objective: "QDO-4.1.1",
      body: [
        { type: "p", text: "DevOps tools enable continuous discovery, CI, continuous testing, CD, continuous deployment, and continuous monitoring by automating workflows, enhancing collaboration, and improving delivery reliability. The syllabus lists fifteen categories, each with signature capabilities — the K1 exam questions ask which capability belongs to which category." },
        { type: "table", headers: ["Category", "Purpose", "Key capabilities"], rows: [
          ["Information management", "SSOT for documents & backlog items", "Version control, traceability, transparency, change control"],
          ["Source code management", "SSOT for codebases", "Version control, branching, merging, conflict resolution"],
          ["Continuous integration", "Automate integration of code changes", "CI servers, automated build pipelines, integration testing"],
          ["Continuous deployment", "Automate releasing validated code", "Deployment pipelines, deployment automation, roll forward, rollback"],
          ["Environment & infrastructure management", "Consistent environments everywhere", "IaC, environment provisioning, configuration management"],
          ["Build artifact management", "Store & distribute build artifacts", "Artifact storage, dependency management, dependency scanning, scanning for vulnerabilities, secure distribution"],
          ["Code quality & security", "Detect defects/vulnerabilities early", "Static analysis, SAST/DAST, software composition analysis, supply-chain security validation, unit testing, code coverage"],
          ["Integration & test automation", "Validate component interactions", "Contract testing, API testing, component integration testing, UI testing, reusable frameworks"],
          ["Performance & security testing", "Scalability, fault tolerance, security", "Load/stress/spike/volume/endurance testing, vulnerability scanning, penetration testing"],
          ["Telemetry (monitoring & observability)", "Real-time health insights", "Performance monitoring, log aggregation & analysis, distributed tracing, alerting"],
          ["Chaos engineering & fault injection", "Test resilience under failure", "Fault injection, resilience testing, fault tolerance validation"],
          ["Test data", "Reliable, compliant test data", "Synthetic generation, anonymization, masking, subsetting/cloning, on-demand provisioning, GDPR compliance"],
          ["Test management", "Organize & control the test process", "Test case authoring & version control, planning/scheduling, traceability, real-time reporting, CI/CD & defect-tracking integration"],
          ["Collaboration & communication", "Team productivity & alignment", "Real-time messaging, project management, document sharing, versioning"],
          ["Operations quality & reliability", "Production reliability", "Backup, recovery, incident management, vulnerability scanning"],
        ]},
        { type: "example", title: "Recall questions (Q31 / Q-A7)", text: "Build artifact management tools provide SCANNING FOR VULNERABILITIES — not test data generation (test data tools), not build pipelines (CI tools), not document sharing (collaboration tools). And when environments have inconsistent configurations, prioritize environment & infrastructure management: automated environment creation, standardized configuration files, IaC tools." },
      ],
    },
    "4.1.2": {
      objective: "QDO-4.1.2",
      body: [
        { type: "p", text: "In a DevOps environment, QA and testing tools integrate seamlessly into the CI/CD pipeline, embedding quality into every SDLC phase. Automating and streamlining test activities lets teams detect defects early, maintain code quality, and provide information about software quality. Group the tools by where in the flow they act." },
        { type: "list", intro: "During coding and integration — controlling codebase integrity:", items: [
          "Static analysis and code quality tools — evaluate source code WITHOUT execution: enforce coding standards, detect potential defects, identify code smells and security vulnerabilities",
          "Unit testing tools — verify individual units of code, fast developer feedback",
          "Dependency scanning tools — analyze third-party libraries for security risks, outdated packages, license issues",
          "Integration testing and API testing tools — verify connected components/services work together and meet interface expectations",
        ]},
        { type: "list", intro: "Closer to deployment:", items: [
          "Functional and UI testing tools — simulate user behavior to validate functional requirements from the end-user perspective",
          "Performance testing tools — behavior under load, bottlenecks, scalability",
          "Security testing tools — proactively detect vulnerabilities (injection defects, misconfigurations)",
          "Test data management tools — realistic, anonymized, or synthetic data reflecting real-world conditions without privacy violations",
        ]},
        { type: "list", intro: "Enabling frameworks and tooling:", items: [
          "Environment provisioning tools — automated creation of test environments mirroring production configurations",
          "Configuration management tools — consistent environment settings and application configurations across development, testing, and production; fewer errors and repeatable test processes",
        ]},
        { type: "note", title: "Matching pattern (Q32)", text: "Static analysis = deviations found BEFORE test execution. Continuous testing tools = automated tests at every phase/level. Configuration management = consistent environments. Continuous monitoring = real-time system health and user behavior." },
      ],
    },
    "4.2.1": {
      objective: "QDO-4.2.1",
      body: [
        { type: "p", text: "A CI/CD pipeline automates several SDLC processes, broken into sequential stages. Each stage has specific tasks involving NON-testing activities critical to pipeline success." },
        { type: "list", intro: "The seven non-testing activity groups:", items: [
          "Source code management — overseeing code commits and version control in a shared repository for collaboration and organization",
          "Branching and merging — branching, merging, and creating pull requests to organize and review code changes efficiently",
          "Build artifacts and dependency management — resolving dependencies, compiling code, generating versioned build artifacts stored for later pipeline stages",
          "Conflict resolution and coding standards — resolving code conflicts, provisioning integration environments, running static analysis to enforce standards",
          "CI/CD pipeline configuration — setting up pipelines, automating provisioning of isolated consistent environments (often via containerization), managing environment-specific configurations and feature toggles via command-line arguments or environment variables",
          "Release management — coordinating and approving releases, managing rollback strategies, tagging/labeling versions, implementing deployment strategies such as blue-green or canary",
          "Monitoring and feedback — monitoring system health, configuring logging and telemetry, analyzing metrics for performance and trends, alerting on critical events",
        ]},
        { type: "note", title: "Recall question (Q33)", text: "The activities that help developers manage feature development and code integration with minimal risk = BRANCHING AND MERGING (feature branches + PR review per change)." },
      ],
    },
    "4.2.2": {
      objective: "QDO-4.2.2",
      body: [
        { type: "list", intro: "Release strategies focus on three goals:", items: [
          "Minimize risks — reduce downtime, enable gradual exposure to changes, proactively detect incidents",
          "Optimize deployment processes — increase release velocity, eliminate repetitive tasks, shorten development-to-production time",
          "Deliver seamless customer value — uninterrupted UX and rapid incident resolution by operational teams",
        ]},
        { type: "table", headers: ["Strategy", "Description"], rows: [
          ["Canary release", "Expose a small subset of users first, then roll out incrementally if no critical defects"],
          ["Blue-green deployment", "Two identical environments; test the new version while the current stays live, then swap"],
          ["Rolling release", "Gradually replace system instances with updated versions — continuous availability; common in large-scale systems"],
          ["Phased rollout", "Deploy incrementally by region, user group, or other segmentation criteria; monitor and resolve per phase"],
          ["Progressive delivery", "Canary + phased rollout combined: incremental release to targeted users or regions for precise validation and feedback"],
          ["Hotfix deployment", "Urgent release resolving critical production defects — prioritizes speed over thorough testing"],
          ["Dark launching", "Deploy features marked inaccessible to users; test and monitor under real-world conditions without affecting UX"],
        ]},
        { type: "p", text: "Strategies vary with the organization's needs and context, and organizations often COMBINE them — e.g., releasing a hotfix using a phased rollout." },
      ],
    },
    "4.2.3": {
      objective: "QDO-4.2.3",
      body: [
        { type: "p", text: "Infrastructure as code (IaC) manages and provisions infrastructure through machine-readable definition files — treating infrastructure as software, with descriptive models and version-controlled code for consistency and repeatability. Instead of modifying the target environment, teams edit the IaC source code. QA in IaC involves automated static testing, peer reviews, and configuration validation to assess reliability, security, and compliance before deployment." },
        { type: "list", intro: "Core concepts:", items: [
          "DECLARATIVE approach — specify the DESIRED STATE of infrastructure (e.g., three servers always running).",
          "IMPERATIVE approach — detailed INSTRUCTIONS on how to achieve that state (install software, configure settings).",
          "IDEMPOTENCY — IaC scripts produce the same results even when applied multiple times, preventing configuration drift.",
        ]},
        { type: "p", text: "IaC integrates with configuration management systems — track changes, collaborate, roll back to earlier configurations. It eliminates repetitive manual tasks through automation, ensuring consistency and reducing human error. It supports ENVIRONMENT PARITY: identical configurations across development, testing, and production — fewer 'it works on my machine' situations and smoother transitions between test levels. IaC supports CD by enabling reproducible, predictable infrastructure environments." },
        { type: "note", title: "Select-TWO pattern (Q35)", text: "True: idempotency → consistent repeated deployment; declarative + imperative define state and steps. False: IaC uses GUIs (no — code), relies on manual configuration (no — automation), eliminates version control (no — it leverages it)." },
      ],
    },
    "4.2.4": {
      objective: "QDO-4.2.4",
      body: [
        { type: "p", text: "Feature toggles let DevOps teams modify system behavior to deliver new functionality rapidly but safely WITHOUT changing the code. They provide a structured approach to feature rollout: incremental releases, risk mitigation, and controlled experimentation. In production, a toggle defines which users or environments can access a feature — e.g., disabled for most users but activated for testers, giving controlled validation before broader deployment. Feature toggles support the separation of deployment from release." },
        { type: "list", intro: "Toggle categories by intended use:", items: [
          "Release toggles — enable new features in line with release-on-demand goals (e.g., a canary release)",
          "Operational toggles — real-time control over system behavior",
          "Experiment toggles — support A/B testing by exposing distinctive features to user segments",
          "Permission toggles — control feature access for specific users or roles",
        ]},
        { type: "p", text: "Toggles introduce complexity: they add conditional logic to the codebase and accumulate over time. Track them systematically; monitor, document, and retire obsolete toggles to maintain clarity. Test toggle implementations with both ON and OFF settings, and test interdependent features to reduce risk." },
        { type: "note", title: "Definition (Q36)", text: "Feature toggles = an approach that allows teams to modify system behavior WITHOUT changing code. Not permanent enablement, and not a replacement for branching strategies." },
      ],
    },
    "4.2.5": {
      objective: "QDO-4.2.5",
      body: [
        { type: "p", text: "Branching allows parallel development within and between DevOps teams — multiple simultaneous work streams with minimal conflicts and integration defects. Integrating changes from one branch into another is MERGING. A MERGE CONFLICT occurs when both branches modify the same section of code; the likelihood depends on factors like the size of changes and the number of developers, and resolving conflicts can take much time and effort." },
        { type: "p", text: "VCSs support branching, merging, and conflict detection, but teams must implement proper branching strategies to reduce conflict risk while ensuring collaboration and quality. Since ALL code and testware lives in the VCS, branching strategies apply to testware too and must be understood by every team member." },
        { type: "list", intro: "The two strategies DevOps teams usually apply to achieve CD capability:", items: [
          "TRUNK-BASED DEVELOPMENT — after successful commit-stage tests, every change is pushed directly to the main branch (formerly 'trunk' or 'master'). Requires a mature team and a high level of test automation in the pipeline.",
          "FEATURE BRANCHES — created for specific changes and deleted after merging. A PR merges changes to main or gathers feedback during development. Feature branches should live short — a couple of days maximum, aiming for a few hours.",
        ]},
        { type: "note", title: "Matching pattern (Q37)", text: "Trunk-based = direct push to main after commit-stage tests. Feature branch = created per change, deleted after merge. PR = merge + feedback mechanism. Merge conflict = same code section changed in both branches." },
      ],
    },
    "4.2.6": {
      objective: "QDO-4.2.6",
      body: [
        { type: "p", text: "Chaos engineering is the discipline of experimenting on a system to build confidence in its ability to withstand turbulent production conditions. It intentionally INJECTS FAILURES and observes the response — determining the resilience and reliability of software systems." },
        { type: "p", text: "Failures are simulated at various levels: from individual computing instances (virtual machines or containers) up to entire geographic regions of cloud infrastructure with multiple data centers. Experiments show how services behave during disruptions and whether service continuity holds; insights improve system design, operational practices, and incident response strategies." },
        { type: "p", text: "By studying behavior under stress, teams uncover HIDDEN DEFECTS that are not apparent during normal operation or in a test environment — proactively identifying weaknesses before they impact users. Chaos engineering is made possible by a highly effective, fast, reliable CI/CD pipeline that supports painless production deployment and rollback, minimizing user impact. Public cloud providers usually offer fault injection tools for controlled chaos experiments." },
        { type: "note", title: "Select-TWO pattern (Q38)", text: "True: determines fault tolerance and reliability; uncovers hidden defects. False: it optimizes cloud usage (no), needs no reliable pipeline (it requires one), avoids real failures (it injects them)." },
      ],
    },
    "4.2.7": {
      objective: "QDO-4.2.7",
      body: [
        { type: "p", text: "When software is released to production, CONTINUOUS MONITORING gathers information on software quality, and when quality is not progressing as expected, control actions are initiated. It observes the software in its environment — other software, hardware, and the people involved. Most organizations start with production, but it is relevant for any environment, especially test environments." },
        { type: "note", title: "The key distinction", text: "TELEMETRY = gathering data. OBSERVABILITY = analyzing data. Continuous monitoring (which checks against KPIs) is enabled by both. The exam separates these precisely." },
        { type: "p", text: "Observability uses logging, tracing, and metrics to create a coherent view of the software's state — used for reactive and proactive maintenance, auditability, controllability, and debugging. The information is gathered automatically through telemetry, which collects measurements for functional AND non-functional quality characteristics." },
        { type: "list", intro: "Telemetry examples:", items: [
          "Production telemetry — how the software runs, especially on cloud infrastructure: memory usage, CPU load, latency, request counts",
          "User telemetry — user interaction, essential for judging the software's success: click tracking for feature usage, form completion rates, navigation flow analysis, session duration",
          "Endpoint telemetry and security monitoring — threat detection, forensic analysis, compliance reporting",
        ]},
        { type: "p", text: "Monitoring can apply AI (e.g., machine learning) to log data to understand behavior and notice anomalies more easily. Team telemetry can measure DevOps team maturity (DORA metrics) and suggest team improvements." },
      ],
    },
    "4.2.8": {
      objective: "QDO-4.2.8",
      body: [
        { type: "p", text: "DevOps teams often use third-party components — frameworks, middleware, libraries — and code from other teams. Reuse speeds up development and brings consistency; reusability (part of maintainability in ISO/IEC 25010) is an important quality characteristic. When reusing components, SDLC management, future maintenance, and transparency require information about each component, including self-built ones, and the relationships between them." },
        { type: "list", intro: "Information required in an SBOM:", items: [
          "Component identification (name or number)",
          "The current component version",
          "The component's author and/or owner",
          "The component functionality",
          "Consistency of the component with other components",
          "Dependencies of the component on other components",
          "Conflicts of the current version with previous versions",
          "Cryptographic hash(es) to authenticate the component(s)",
          "Component licensing conditions",
        ]},
        { type: "p", text: "Teams should maintain the SBOM using tooling integrated into the CI/CD pipeline, and keeping it up to date should be part of the definition of done. Beyond maintainability, an SBOM supports vulnerability management (security) by associating known vulnerabilities with the components used: when a vulnerability is detected, the pipeline STOPS to prevent insecure software deployment, and the team then resolves it." },
        { type: "note", title: "Recall trap (Q39)", text: "The SBOM records PER-COMPONENT licensing conditions and dependencies — not system-wide licensing, not CPU/memory statistics (telemetry), not deployment/rollback configurations (CD)." },
      ],
    },
    "4.2.9": {
      objective: "QDO-4.2.9",
      body: [
        { type: "p", text: "Containerization is a lightweight form of virtualization that packages an application and its dependencies into a single executable unit — a container." },
        { type: "list", intro: "Benefits for DevOps teams:", items: [
          "Consistent environments for every test level — eliminating the pitfalls of local testing ('it works on my machine')",
          "Multiple tests run in parallel without interfering with one another, keeping test data clean",
          "Containers deploy on demand and are removed when the test run finishes — environments exist only while actively used, and more can be provided quickly when demand rises",
          "Containers are defined and stored AS CODE in a shared codebase: central environment changes automatically apply to future environments with the same configuration",
        ]},
        { type: "p", text: "Known challenges: because each container is a clean representation of the environment, STATEFUL application testing is difficult and requires extra setup steps. Security can be a concern through third-party components and needs diligent dependency management (see SBOM)." },
        { type: "note", title: "Recall trap (Q40)", text: "Containerization supports consistent environments across development phases and test levels. It does NOT remove the need for security measures, does NOT fully replace traditional virtualization, and does NOT guarantee zero resource usage when inactive." },
      ],
    },
  },
};
