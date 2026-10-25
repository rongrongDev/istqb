// CT-QDO v1.0 — Chapter 2 learn content, authored from ISTQB CT-QDO Syllabus v1.0 (2026-04-17).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "This chapter is the heart of the syllabus: how QA and testing contribute across the whole value stream, and how they show up in every group of activities of the DevOps loop — continuous discovery, continuous integration, continuous delivery, continuous deployment, and release on demand. It ends with the six incremental steps for implementing a CI/CD pipeline, one of the two K3 learning objectives here.",
  keywords: [
    "A/B testing", "acceptance test-driven development", "Agile software development", "automated testing",
    "behavior-driven development", "canary release", "continuous integration", "continuous testing",
    "holistic testing", "quality engineering", "quality policy", "sequential development model",
    "static analysis", "static testing", "test policy",
    "blue-green deployment", "CI/CD pipeline", "continuous delivery", "continuous deployment",
    "continuous discovery", "continuous learning and experimentation", "continuous monitoring",
    "dark launch", "pull request", "release on demand", "value stream",
  ],
  objectives: [
    { id: "QDO-2.1.1", level: "K3", text: "Implement quality assurance activities in a DevOps context" },
    { id: "QDO-2.1.2", level: "K2", text: "Compare test objectives that support DevOps with sequential development models and Agile software development" },
    { id: "QDO-2.1.3", level: "K2", text: "Explain continuous testing in a DevOps context" },
    { id: "QDO-2.1.4", level: "K2", text: "Explain how pull requests support quality" },
    { id: "QDO-2.2.1", level: "K2", text: "Explain quality assurance and testing in continuous discovery and its practices" },
    { id: "QDO-2.2.2", level: "K2", text: "Explain quality assurance and testing in continuous integration and its practices" },
    { id: "QDO-2.2.3", level: "K2", text: "Explain quality assurance and testing in continuous delivery and its practices" },
    { id: "QDO-2.2.4", level: "K2", text: "Explain quality assurance and testing in continuous deployment and its practices" },
    { id: "QDO-2.2.5", level: "K2", text: "Explain quality assurance and testing in release on demand and its practices" },
    { id: "QDO-2.2.6", level: "K3", text: "Apply quality assurance and testing knowledge to implement a CI/CD pipeline" },
  ],
  sections: {
    "2.1.1": {
      objective: "QDO-2.1.1",
      body: [
        { type: "p", text: "A value stream is a series of interconnected processes, activities, and workflows that deliver value to customers through a product, service, or experience. QA and testing matter throughout it — but quality engineering (QE) is broader than QA and testing: it covers ALL activities that contribute to creating the software the customer needs." },
        { type: "p", text: "DevOps practitioners strive to build in quality from the start — a 'right first time' approach — as a further elaboration of the Agile mindset. Teams implement activities for achieving built-in quality and for supplying information about the achieved quality level, supported by a documented quality policy and test policy. The syllabus groups the principles, activities, and practices by the three aspects of quality: products, processes, and people." },
        { type: "list", intro: "Quality of PRODUCTS depends on principles like:", items: [
          "Achieving business value as the main goal of development",
          "Implementing an architecture that enables the DevOps team's productivity",
          "Correctly implementing functional and non-functional quality characteristics (ISO/IEC 25010)",
          "Applying QE activities during all DevOps lifecycle activities — preventive (collaborative user story writing, pair programming) and detective (static testing and dynamic testing)",
        ]},
        { type: "list", intro: "Quality of PROCESSES consists of activities like:", items: [
          "Fully integrated monitoring, controlling, reporting, and alerting on measured indicators for business value and quality level",
          "A risk-based approach to estimating effort and scheduling tasks",
          "Establishing infrastructure and tooling for QE activities integrated into a CI/CD pipeline",
          "Implementing continuous improvement practices",
        ]},
        { type: "list", intro: "Quality of PEOPLE — practices from the Agile mindset:", items: [
          "Hypothesis-driven development: 'We believe <a certain action> will result in <an intended goal>. We will have confidence to proceed when <a measurement exceeds a certain target>.'",
          "A collaborative working environment",
          "A focus on continuous improvement",
        ]},
        { type: "p", text: "To implement all this, the organization arranges overarching guidelines for all DevOps teams: the quality policy and the test policy (possibly one document), with a test-first approach for built-in quality and an 'automate everything you can' mindset. The policies describe roles and responsibilities for cross-functional teams and the organization of multiple teams. Implementation can be based on product risk analysis, the testing pyramid, and/or the Agile testing quadrants, and results in a QE strategy." },
        { type: "example", title: "K3 scenario (Q9)", text: "A team wants built-in quality and consistent quality reports. The two priority actions: align with the organizational quality policy and test policy (automated testing, static testing, pair programming) AND implement integrated monitoring, reporting, and alerting on business-value and quality indicators. Reactive testing in production is the wrong direction." },
      ],
    },
    "2.1.2": {
      objective: "QDO-2.1.2",
      body: [
        { type: "p", text: "The three ways of DevOps require a fully integrated approach to QA and testing: quality is built in from the start, and testing supplies information about whether the right quality level is delivered at the right moment." },
        { type: "table", headers: ["Aspect", "Sequential models", "Agile", "DevOps"], rows: [
          ["Where testing happens", "Separate test levels, specialized test teams", "The team tests to confirm a story is done and acceptance criteria met", "Testing is an integral part of development; every work product independently finished and delivered (flow)"],
          ["Test objectives", "Supply information about quality, build confidence", "Same + early and continuous feedback", "Same + early and continuous feedback"],
          ["Test automation", "Teams can succeed without any automated execution", "Often focused on regression testing", "Applied to ALL test levels and test types — essential for flow"],
        ]},
        { type: "p", text: "Even in DevOps with automated CI/CD pipelines, manual testing remains necessary — especially exploratory testing. Some quality aspects are hard to assess automatically (e.g., usability), and some stakeholders only trust the quality level after viewing test results for themselves. Deferring test tasks to the end of an iteration (an Agile anti-pattern) leads to inefficiencies and quality risks." },
      ],
    },
    "2.1.3": {
      objective: "QDO-2.1.3",
      body: [
        { type: "p", text: "Continuous testing integrates test activities throughout the SDLC, so testing runs from the initial concept through production deployment and beyond — not as a separate phase." },
        { type: "list", intro: "Five core principles:", items: [
          "Test early and often — initiate test activities as early as possible and maintain them throughout the SDLC; verifying and validating at every phase lets teams assess and report quality early, sharply reducing the cost and impact of defects.",
          "Cross-functional collaboration — quality is everyone's responsibility; active participation from all team members, not just dedicated testers (compare the whole team approach).",
          "Automation and tooling integration — automated tests in the CI/CD pipeline give quick feedback and consistent quality; tools for various test types provide comprehensive coverage.",
          "Production monitoring and observability — continuous testing extends into production: tracking performance, detecting anomalies, and gathering real-time user-behavior data extend the test phase into production.",
          "Adaptive improvement — continuously gather data and feedback from test activities and use the insights to adapt test strategies over time.",
        ]},
        { type: "p", text: "A framework that exemplifies continuous testing is holistic testing, developed by Janet Gregory and Lisa Crispin. It helps DevOps teams structure and apply continuous testing in real development scenarios." },
        { type: "note", title: "Definition to remember", text: "Continuous testing = an approach that embeds testing across ALL phases to provide continuous quality feedback. Answers reducing it to regression suites, build-stage automation, or production monitoring alone are incomplete." },
      ],
    },
    "2.1.4": {
      objective: "QDO-2.1.4",
      body: [
        { type: "p", text: "A pull request (PR, sometimes merge request) is an agreement that the author of code must request a review by one or more team members before the code can be merged into the main branch. A branch is a separate line of development in a version control system (VCS) where changes occur before integration. The concept evolved from early VCS practice: other developers would 'pull' new code to help determine its quality." },
        { type: "list", intro: "How PRs support quality:", items: [
          "Encourage collaborative development and knowledge sharing — better coding practices and higher awareness of potential issues",
          "Serve as a quality gate that can start an automated test run in the CI/CD pipeline",
          "Enforce coding standards, style guides, and best practices via manual code review supported by static analysis in the pipeline",
          "Improve traceability with a clear history of changes, discussions, and decisions — fostering accountability",
          "Encourage small, manageable code changes, limiting change size and risk",
          "Ensure only approved changes reach the main branch",
          "Promote accountability through named reviewers — including reviews by all teams affected by the change",
        ]},
        { type: "note", title: "One-line summary", text: "The primary role of a PR is enforcing pre-merge quality checks through collaborative code reviews and automated testing — not gatekeeping juniors, not reducing reviews, not manual tester sign-off." },
      ],
    },
    "2.2.1": {
      objective: "QDO-2.2.1",
      body: [
        { type: "p", text: "The value stream — idea capture to releasing value — is illustrated as the DevOps infinity loop. Different loop drawings exist, but the main activity groups are the same: continuous discovery, CI, CD, continuous deployment, release on demand, and continuous monitoring. QE happens in ALL of them. The CI/CD pipeline is the automation related to the code (including outcome reporting) but does not cover the whole value stream — task management tools cover other activities and are usually tightly connected." },
        { type: "p", text: "Continuous discovery is the practice of frequently discovering and evaluating findings, customer and stakeholder needs, innovative ideas, modern technologies, and other opportunities to decide what value to develop next — engaging stakeholders continuously with customer-centricity and design thinking." },
        { type: "list", intro: "Three activities usually take place:", items: [
          "DISCOVER — find features and changes that help stakeholders solve their problems; stakeholders validate needs and ideas before features are defined, e.g., through stakeholder interviews or quick UX prototypes. Product owners, supported by the team, identify the features.",
          "PLAN — determine quality characteristics and identify risks important for the feature while detailing features and slicing them into smaller user stories. Backlog items are identified and detailed incrementally on short learning cycles, not everything upfront.",
          "UNDERSTAND — build a shared view of user story details within the team or across teams. Members apply a test-first approach using ATDD or BDD, including specification by example: example scenarios help developers understand and test the solution. Fulfilling the definition of ready (DoR) addresses understanding (acceptance criteria defined and understood, items estimated); a common definition of done (DoD) drives identification of all work products to deliver.",
        ]},
        { type: "note", title: "QA best practice", text: "Have DoR and DoD checklists in place — defined, agreed upon, and followed by the DevOps team members." },
      ],
    },
    "2.2.2": {
      objective: "QDO-2.2.2",
      body: [
        { type: "p", text: "For each merged change, CI requires building the entire software and running a comprehensive set of automated tests against it — both static and dynamic. Coding-style breaches, missed coverage targets, or slow test cycles can break the build. When the build or tests fail, team members stop everything and fix the build immediately — the 'stop-and-fix' approach, a lean quality management practice. The fix may be rolling back to the previous working version." },
        { type: "p", text: "The goal of CI is software in a working state all the time — potentially shippable. 'Potentially shippable' is a statement about software QUALITY, not about the value or marketability of the software." },
        { type: "list", intro: "Practices DevOps teams need for CI:", items: [
          "Include everything in configuration management: automated test scripts, automated deployment scripts, test data, and environment configurations.",
          "Automation scripts for build/test steps should facilitate investigation in case of build failures.",
          "Check in small, incremental changes, and wait for tests to pass — or stop-and-fix when a test fails.",
        ]},
        { type: "list", intro: "The CI pipeline usually consists of two main parts:", items: [
          "COMMIT STAGE — tests that the software works at the technical level: compilation, automated low-level test execution, and static analysis. Code review by other team members usually happens only after commit-stage actions pass.",
          "AUTOMATED ACCEPTANCE STAGE — tests that the software works, conforms to specification, and meets user needs; any test types or levels required for acceptance, with test activities running in parallel.",
        ]},
        { type: "p", text: "When multiple DevOps teams contribute, each team usually has its own team-specific CI part of the pipeline, connected to a common organizational-level CD part." },
        { type: "note", title: "Exam trap", text: "Manual build verification steps before automated tests contradict CI — tests must trigger automatically on commit. Everything else (config management, investigable scripts, small increments + stop-and-fix) is canonical CI practice." },
      ],
    },
    "2.2.3": {
      objective: "QDO-2.2.3",
      body: [
        { type: "p", text: "Continuous delivery (CD) ensures the software is always in a deployable state, including for production environments. Whether it is actually deployed to production is up to A PERSON, deciding on test results and readiness assessments. This is the key contrast with continuous deployment, where deployment happens automatically when all tests pass, without human intervention." },
        { type: "p", text: "After the CI stages, the software is deployed to production-like test environment(s) for further testing — with test automation, experience-based techniques, or both. It is common to run smoke tests right after deploying to an environment, before any planned tests, to check that the deployment itself succeeded. Tests can run on multiple environments in parallel for fast feedback, resources permitting." },
        { type: "list", intro: "Quality is achieved through testing plus these QE practices:", items: [
          "Deployment automation with automation tools — consistency, compliance, and an audit trail",
          "Standardized test environment and test data management",
          "IaC managing infrastructure configuration as code — consistency and repeatability",
        ]},
        { type: "p", text: "The team's adopted release strategy provides guidelines on how often and how to deploy to production, and how to release to users." },
        { type: "note", title: "Exam trap", text: "Letting deployment processes 'vary slightly per environment to meet specific requirements' does NOT help quality — CD demands standardized, repeatable, automated deployment everywhere." },
      ],
    },
    "2.2.4": {
      objective: "QDO-2.2.4",
      body: [
        { type: "p", text: "Continuous deployment builds on the pipeline and the practices of CI and CD, but automatically deploys every change that passed its automated tests to production — no human involvement in deployment decisions. Deployment to production does not necessarily mean release to users. The frequently repeated, reliable deployment procedure reduces the risk of failed deployments during release." },
        { type: "list", intro: "Confidence to always deploy to production rests on:", items: [
          "QE practices building in quality throughout continuous discovery, CI, and CD",
          "An automated, controlled deployment process without human involvement",
          "Trust in the automated test suite to achieve agreed, acceptable quality levels",
          "Deployment and release strategies controlling how to deploy and provide user access (e.g., dark launch)",
          "Ability to respond rapidly to undesired consequences — roll BACK to a previously defined system state, or roll FORWARD by deploying a newer version that fixes the defects",
        ]},
        { type: "list", intro: "Testing in production before releasing to users:", items: [
          "DARK LAUNCH — the new feature runs in production alongside existing functionality without being exposed to users; the team monitors performance and behavior, tests, and observes under real-world conditions.",
          "BLUE-GREEN DEPLOYMENT — two identical environments: 'blue' (current live) and 'green' (new version). Testing happens on green while blue stays live; after all tests pass, green becomes live and blue awaits the next change — they swap roles. Two environments enable fast rollback.",
          "CANARY RELEASE — a small subset of users is exposed to the change first to validate quality, then it rolls out incrementally to everyone if no critical defects appear. The subset can be a random percentage, pre-selected known users (beta testers), a geographic area, or any other grouping.",
          "A/B TESTING — two or more variants of a feature/interface are presented to different user segments; performance metrics decide which variant achieves the desired outcome best; the winner stays in production and the others are removed.",
        ]},
        { type: "note", title: "Matching-question favorite", text: "Dark launch = in production, users can't see it. Blue-green = two environments swap. Canary = few real users first. A/B = variants compete on metrics." },
      ],
    },
    "2.2.5": {
      objective: "QDO-2.2.5",
      body: [
        { type: "p", text: "Release on demand releases new features immediately or incrementally based on business, customer, and stakeholder needs — decoupling deployment from release. A feature deployed to production stays hidden until access is granted in a controlled way using feature management practices and tools (feature toggles). The business can release when market timing is best (e.g., a set date before the holiday season), supporting business agility and delivering the highest value when users need it, for as long as they need it." },
        { type: "p", text: "Decoupling architecture elements so they are releasable separately reduces the risk of service interruptions during deployment and release. Each identified building block can be released independently and have its own release strategy and frequency — e.g., an open-source backend database follows major release cycles while front-end microservices update multiple times per iteration." },
        { type: "p", text: "A release can involve non-software activities: updating user manuals, training materials, release notes, operational procedures, legal contracts, or marketing and sales activities." },
        { type: "p", text: "After release, operations focus on preserving stability and security. Continuous monitoring observes the software in its environment, reports whether quality meets agreed objectives, and enables corrective action when alerted to degradation. IT service management (ITSM) supports quality too — e.g., a service desk for customers and users. Observability measures system behavior against functional and non-functional requirements; information also arrives via other channels (service desk feedback, social media). Collected data shows how the change delivers business benefit (subscriptions, sales), and the organization applies the learning to pick the next value to deliver and to improve processes, practices, people, and product architecture." },
      ],
    },
    "2.2.6": {
      objective: "QDO-2.2.6",
      body: [
        { type: "p", text: "Implementing a CI/CD pipeline should follow an incremental approach with six steps (Humble & Farley). The sample exam tests the ORDER of these steps, so learn the sequence." },
        { type: "list", intro: "The six steps:", items: [
          "1. Model the value stream and create a walking skeleton — value stream mapping (VSM) maps the flow from code check-in to release; the mapped steps are implemented without detailed content. Quality gates trigger the next step; a step's output becomes another's input (build artifacts, test databases). Pipeline code usually lives in the same repository as the application source; complex projects can reuse workflows across repositories. The walking skeleton shows the flow and connects the steps before details are added.",
          "2. Automate build and deployment — the CI toolset triggers a build on every check-in (source code in → programs out); the output deploys automatically to a test environment where tests execute. Environment and test data provisioning must be fully automated and reproducible — IaC, virtualization, and containerization support this; operations roles are usually involved. Test environments are deployed the same way as production.",
          "3. Automate the commit stage — static analysis and unit tests plus a selection of component, integration, and system tests on every commit; vulnerability scanning and dependency scanning implement security practices. A quality gate stops the build when agreed thresholds fail (insufficient coverage, test execution too long). Once the commit stage exceeds ~5 minutes, split it into parallel jobs.",
          "4. Automate the acceptance stage — start by automating a FEW test cases from ALL the different test types and grow the suites incrementally — do not finish automating one test type before starting the next. Run tests sequentially or in parallel, each in its own environment, considering resource availability, cost, and sustainability.",
          "5. Automate the release — understand how the release decision is made and collect the information for it (automated or manual). Feature management tools support decision makers (updating feature toggles in code). Follow the agreed deployment and release strategy, support fast rollback, and provide an audit trail for compliance.",
          "6. Evolve the CI/CD pipeline — as the project grows, the value stream evolves; measure pipeline efficiency with agreed metrics (lead time of activities) and continuously improve per lean principles and systems thinking — split long test executions into parallel jobs, remove non-value-added jobs.",
        ]},
        { type: "example", title: "K3 scenario (Q17)", text: "Frequent test-environment failures caused by missing configurations and inconsistent data: the right recommendation is to EXTEND AUTOMATION to provide consistent setup and test data — fixing the root cause. Manual verification steps, skipping deployments after failed tests, or deploying more often are reactive and don't fix the configuration problem." },
        { type: "example", title: "Ordering exercise (Q-A4)", text: "Chronological pipeline implementation: define the flow of information and materials (VSM, step 1) → reproducible provisioning of the pre-production environment (step 2) → contract testing for microservices (commit stage, step 3) → performance testing to validate system behavior (acceptance stage, step 4) → feature toggles to manage release decisions (step 5)." },
      ],
    },
  },
};
