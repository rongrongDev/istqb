// CT-QDO v1.0 — Chapter 2: Quality Assurance (QA) and Testing in DevOps
// summary/deepPoints from syllabus v1.0 (2026-04-17); examInsights derived from the official sample exam v1.0
export default {
  id: 2,
  title: 'Quality Assurance (QA) and Testing in DevOps',
  time: '360 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "The DevOps-loop chapter, with both K3 objectives of the whole syllabus outside chapter 3 (2.1.1 implement QA activities, 2.2.6 implement a CI/CD pipeline). Master the differences between CD and continuous deployment, the four testing-in-production strategies (dark launch, blue-green, canary, A/B), and the six CI/CD pipeline implementation steps in order — all of these are directly examined.",
  sections: [
    {
      id: '2.1.1',
      title: 'QA and Testing in a DevOps Context',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'DevOps strives for built-in quality and a "right first time" approach — a further elaboration of the Agile mindset. Teams implement activities for building in quality AND supplying information about the achieved quality level, supported by a documented quality policy and test policy (may be one document), with a test-first approach and an "automate everything you can" mindset.',
        'Quality of PRODUCTS: business value as the main development goal; architecture enabling team productivity; correctly implementing functional and non-functional quality characteristics (ISO/IEC 25010); QE activities across all lifecycle activities — preventive (collaborative user story writing, pair programming) and detective (static testing, dynamic testing).',
        'Quality of PROCESSES: fully integrated monitoring, controlling, reporting, and alerting on business-value and quality indicators; risk-based estimation and scheduling; infrastructure/tooling for QE integrated into the CI/CD pipeline; continuous improvement practices.',
        'Quality of PEOPLE: hypothesis-driven development ("We believe <action> will result in <goal>. We will have confidence to proceed when <measurement exceeds target>"); a collaborative working environment; focus on continuous improvement.',
        'The quality/test policy describes roles and responsibilities for cross-functional teams and multi-team organization. Implementation can be based on product risk analysis, the testing pyramid, and/or Agile testing quadrants, resulting in a QE strategy.'
      ],
      examInsights: [
        'Q9 (K3, 2pts, select TWO) — For built-in quality + consistent quality reports, prioritize: (a) aligning with the organizational quality policy and test policy (automated testing, static testing, pair programming) and (e) integrated monitoring, reporting, and alerting for business-value and quality indicators.',
        'Q9 TRAP — Exploratory testing in production and relying on testing in production are REACTIVE — they contradict DevOps early-testing focus. A pipeline-runtime dashboard tracks performance, but does not embed QA or built-in quality.'
      ]
    },
    {
      id: '2.1.2',
      title: 'Compare Test Objectives in Different SDLC Models',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Sequential models: testing performed at separate test levels by specialized test teams. Agile: the team tests to confirm a user story is done and acceptance criteria are met; deferring tests to iteration end causes inefficiencies and quality risks. DevOps: flow means every work product is independently finished and delivered — testing is an integral part of development.',
        'Test objectives are SIMILAR in all three (supply information about quality to build confidence); Agile and DevOps ADD early and continuous feedback.',
        'Test automation: sequential teams can succeed without any automated execution; Agile focuses automation mostly on regression testing; DevOps applies automation to ALL test levels and test types — it is essential for flow.',
        'Manual testing remains needed even in DevOps: some quality aspects are hard to automate (e.g., usability), and some stakeholders want to see results for themselves before trusting the quality level.'
      ],
      examInsights: [
        'Q10 KEY — In Agile and DevOps, testing is integrated throughout the development cycles; in sequential models testing is performed in separate test levels (by specialized teams).',
        'Q10 TRAP — DevOps does not test only in production, does not require exclusively automated or manual approaches, and Agile does not rely entirely on automated tests.'
      ]
    },
    {
      id: '2.1.3',
      title: 'Continuous Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Continuous testing integrates test activities throughout the SDLC — from initial concept to production deployment and beyond — rather than as a separate phase.',
        'Five core principles: (1) Test early and often — verify/validate at every phase, reducing cost and impact of defects. (2) Cross-functional collaboration — quality is everyone’s responsibility (like the whole team approach). (3) Automation and tooling integration — automated tests in the CI/CD pipeline for quick feedback. (4) Production monitoring and observability — extend testing into production, tracking performance, anomalies, and real-time user behavior. (5) Adaptive improvement — continuously refine test strategies from gathered data and feedback.',
        'Framework example: holistic testing (Janet Gregory & Lisa Crispin) helps structure and apply continuous testing in real scenarios.'
      ],
      examInsights: [
        'Q11 KEY — Continuous testing = "an approach that embeds testing across all phases to provide continuous quality feedback".',
        'Q11 TRAP — It is NOT just production monitoring, NOT just ongoing regression suites, and NOT just automated tests in the build stage — those are single aspects of the whole.'
      ]
    },
    {
      id: '2.1.4',
      title: 'Pull Requests',
      level: 'K2',
      type: 'skim',
      summary: "A pull request (PR, or merge request) requires the code author to get a review from one or more team members before merging into the main branch. A branch is a separate line of development in a version control system. PRs support quality by: encouraging collaborative development and knowledge sharing; serving as a quality gate that can trigger automated test runs in the CI/CD pipeline; enforcing coding standards via manual review supported by static analysis; improving traceability (history of changes, discussions, decisions → accountability); limiting risk by encouraging small, manageable changes; ensuring only approved changes reach the main branch; and promoting accountability through named reviewers, including reviews by all teams affected.",
      examInsights: [
        'Q12 KEY — Primary role of a PR: "to enforce pre-merge quality checks through collaborative code reviews and automated testing".',
        'Q12 TRAP — PRs are not about seniority gatekeeping, not about speeding up deployment by reducing reviews, and not exclusively manual review by testers.'
      ]
    },
    {
      id: '2.2.1',
      title: 'QA and Testing in Continuous Discovery',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Continuous discovery: frequently discovering and evaluating findings, customer/stakeholder needs, ideas, technologies, and opportunities to decide what value to develop next — customer-centricity and design thinking.',
        'Three activities: DISCOVER — validate stakeholder needs/ideas before defining features (stakeholder interviews, quick UX prototypes); product owners, supported by the team, identify features. PLAN — determine quality characteristics and risks per feature; slice features into smaller user stories; backlog items detailed incrementally on short learning cycles, not everything upfront. UNDERSTAND — build a shared view of user-story details within/across teams.',
        'In Understand, teams apply a test-first approach with ATDD or BDD, including specification by example — collaborative test activity supporting built-in quality.',
        'QA best practice: definition of ready (DoR) and definition of done (DoD) checklists defined, agreed, and followed. DoR = understanding of a backlog item (acceptance criteria defined/understood, items estimated); DoD = drives identification of all work products to deliver.'
      ],
      examInsights: [
        'Q13 KEY — Continuous discovery aligns with customer needs "by discussing new features with the stakeholders and developing UX prototypes".',
        'Q13 TRAP — Finalizing acceptance criteria BEFORE idea exploration contradicts continuous discovery (it is iterative); it is not limited to technical feasibility or functional requirements.'
      ]
    },
    {
      id: '2.2.2',
      title: 'QA and Testing in CI',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'CI: for each merged change, build the entire software and run a comprehensive set of automated tests — static AND dynamic. Style breaches, missed coverage targets, or slow test cycles can break the build. If build/tests fail, everyone stops and fixes immediately ("stop-and-fix" — a lean quality management aspect); the fix may be rolling back to the previous working version.',
        'Goal: software in a working state all the time → potentially shippable. "Potentially shippable" is a statement about QUALITY, not about value or marketability.',
        'Required practices: include everything in configuration management (test scripts, deployment scripts, test data, environment configurations); automation scripts should facilitate investigation of build failures; check in small incremental changes and wait for tests to pass (or stop-and-fix).',
        'Two main CI pipeline parts: COMMIT STAGE — tests that software works at the technical level: compilation, automated low-level tests, static analysis; code review usually happens only after commit-stage actions pass. AUTOMATED ACCEPTANCE STAGE — tests that software conforms to specification and meets user needs; any test types/levels required for acceptance; tests can run in parallel.',
        'With multiple teams, each team usually has its own team-specific CI part connected to a common organizational CD part of the pipeline.'
      ],
      examInsights: [
        "Q14 TRAP (NOT-question) — 'Running manual build verification steps before triggering automated tests' does NOT align with CI: tests must trigger automatically on commit; manual approval is an unnecessary bottleneck.",
        'Q14 KEY — Aligned practices: everything in configuration management, automation scripts that support failure investigation, small incremental check-ins with stop-and-fix.'
      ]
    },
    {
      id: '2.2.3',
      title: 'QA and Testing in CD',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Continuous delivery (CD) ensures software is ALWAYS in a deployable state, including for production. A PERSON decides whether to actually deploy, based on test results and readiness — unlike continuous deployment, which deploys automatically without human intervention.',
        'After CI stages, software is deployed to production-like test environment(s) for further testing — automated, experience-based, or both. Smoke tests run after deployment (before planned tests) to verify the deployment succeeded. Tests can run on multiple environments in parallel for fast feedback if resources allow.',
        'Quality is achieved through testing plus QE practices: deployment automation (consistency, compliance, audit trail); standardized test environment and test data management; IaC for consistent, repeatable infrastructure configuration.',
        'The adopted release strategy guides how often and how to deploy to production and how to release to users.'
      ],
      examInsights: [
        "Q15 TRAP (NOT-question) — 'Allowing deployment processes to vary slightly for different environments' does NOT help CD quality — it introduces inconsistency; CD demands automation, repeatability, and standardization.",
        'KEY DISTINCTION: CD = always deployable, human decides. Continuous deployment = every passing change deploys automatically, no human involvement.'
      ]
    },
    {
      id: '2.2.4',
      title: 'QA and Testing in Continuous Deployment',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Continuous deployment automatically deploys every change that passed its automated tests to production — no human deployment decisions. Deployment to production does NOT necessarily mean release to users. Frequent, reliable deployment reduces the risk of failed deployments during release.',
        'Confidence factors: QE practices building in quality through discovery/CI/CD; automated controlled deployment without humans; trust in the automated test suite; deployment and release strategies controlling exposure (e.g., dark launch); ability to respond rapidly (roll back to a defined previous state, or roll forward deploying a newer fixed version).',
        'Testing in production before release: DARK LAUNCH — new feature runs in production alongside existing functionality without user exposure; monitor, test, observe under real conditions. BLUE-GREEN DEPLOYMENT — two identical environments; test the new version (green) while old (blue) stays live; after tests pass they swap; enables fast rollback. CANARY RELEASE — expose a small user subset first (random %, pre-selected beta users, geography…), then roll out incrementally if no critical defects. A/B TESTING — present variants to different user segments, analyze metrics, keep the best variant and remove the other(s).'
      ],
      examInsights: [
        'Q16 MATCHING — Dark launch = runs in production without exposing to users. Blue-green = two identical environments, test "new" while "current live" serves. Canary = small subset of users first, then expand. A/B = variants to different segments, compare metrics, keep the winner.',
        'TRAP — Canary exposes REAL USERS to the change; dark launch exposes NO users. Blue-green is about environments, canary/AB are about users.'
      ]
    },
    {
      id: '2.2.5',
      title: 'QA and Testing in Release on Demand',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Release on demand: release features immediately or incrementally based on business/customer/stakeholder needs — DECOUPLING deployment and release. Deployed features stay hidden until access is granted via feature management (feature toggles). Business releases when market timing is best (e.g., before holiday season).',
        'Decoupling architecture elements to be releasable separately reduces service interruption risk — building blocks can have different release strategies and frequencies (e.g., backend databases on major release cycles, front-end microservices multiple times per iteration).',
        'Release can involve non-software activities: user manuals, training materials, release notes, operational procedures, legal contracts, marketing/sales.',
        'After release: operations preserve stability and security; continuous monitoring observes quality against objectives and triggers corrective action on degradation; ITSM (service desk) supports users. Observability measures behavior against functional and non-functional requirements; data from other channels (service desk, social media) shows business benefit (subscriptions, sales). Learning identifies the next value to deliver and process/people/product improvements.'
      ],
      examInsights: [
        'Q-A3 KEY — Best release-on-demand practice: "decoupling architectural components to allow independent release strategies and different release frequencies".',
        'Q-A3 TRAP — Not making everything visible on deployment (that ignores decoupling), not mandatory manual approval of all documentation, and not fixed release cycles (release on demand follows business timing).'
      ]
    },
    {
      id: '2.2.6',
      title: 'CI/CD Pipeline Implementation',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Incremental implementation in six steps (Humble & Farley): (1) MODEL THE VALUE STREAM from commit to release (value stream mapping) and create a walking skeleton — mapped steps implemented without detailed content; quality gates trigger the next step; pipeline code usually lives in the same repository as the application.',
        '(2) AUTOMATE BUILD AND DEPLOYMENT — build on every check-in; deploy output automatically to a test environment; environment and test data provisioning fully automated and reproducible (IaC, virtualization, containerization); Ops roles usually involved; test environments deployed the same way as production.',
        '(3) AUTOMATE COMMIT STAGE — static analysis + unit tests + selected component/integration/system tests on every commit; vulnerability and dependency scanning; quality gate stops the build when thresholds fail (coverage too low, execution too slow); split into parallel jobs once the stage exceeds ~5 minutes.',
        '(4) AUTOMATE ACCEPTANCE STAGE — start with a FEW test cases from ALL different test types and grow suites incrementally (not one test type completely before the next); run sequentially or in parallel in dedicated environments; mind resources, cost, sustainability.',
        '(5) AUTOMATE THE RELEASE — understand how the release decision is made; collect the information for it; feature management tools support decisions (feature toggles); follow the deployment/release strategy, support fast rollback, provide an audit trail for compliance.',
        '(6) EVOLVE THE PIPELINE — measure efficiency with agreed metrics (lead time per activity); continuously improve per lean principles and systems thinking (parallelize long test runs, remove non-value-added jobs).'
      ],
      examInsights: [
        'Q17 (K3, 2pts) — Frequent test-environment failures from missing configurations and inconsistent data → "extend automation to provide consistent setup and test data" (fix the root cause). Manual verification steps, skipping deployments on failure, or deploying more frequently do NOT address the root cause.',
        'Q-A4 ORDERING (2pts) — Pipeline implementation order: (1) define the flow of information and materials (VSM), (2) reproducible provisioning of the pre-production environment, (3) contract testing for microservices (commit stage), (4) performance testing (acceptance stage), (5) feature toggles for release decisions (release automation).'
      ]
    }
  ]
};
