// CT-QDO v1.0 — Official ISTQB Sample Exam v1.0 (2026-04-17), parsed from the PDFs in trainings/.
// Answers, LOs, K-levels, points, and per-option rationales come from the Sample-Exam-Answers PDF.
// Questions 1-40 form the main exam; 41-48 are Appendix A additional questions (appendix: true).
// A1, A4, and A5 are drag-and-drop / ordering questions in the official PDF, converted here to
// single-choice combination options; the official rationale is preserved in the explanation.
export const questions = [
  {
    id: 1,
    lo: "QDO-1.1.1",
    level: "K1",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is a core principle of DevOps?",
    options: [
      { id: "a", text: "To create software through the individual effort of professionals" },
      { id: "b", text: "To promote collaboration, communication, and continuous improvement among teams" },
      { id: "c", text: "To ensure that one team works on the entire software development lifecycle (SDLC)" },
      { id: "d", text: "To prioritize business goals over customer needs" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): This accurately reflects the core principles of DevOps: collaboration, communication, and continuous improvement among teams.\n\nWRONG (a): While individual effort is part of software development, DevOps emphasizes teamwork and collaboration.\n\nWRONG (c): DevOps encourages cross-functional autonomous teams, but it does not emphasize that only one team works on the entire SDLC.\n\nWRONG (d): Customer needs are a crucial aspect of DevOps — prioritizing business goals over them is not its focus."
  },
  {
    id: 2,
    lo: "QDO-1.1.2",
    level: "K1",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following ways may DevOps use to break down the wall of confusion between development (Dev) and operations (Ops) teams?",
    options: [
      { id: "a", text: "Creating a separate team responsible for quality assurance (QA)" },
      { id: "b", text: "Integrating teams to work together and increase communication" },
      { id: "c", text: "Automating everything the team could automate" },
      { id: "d", text: "Defining clear roles to improve collaboration and prevent the blame game" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The syllabus states that DevOps breaks down the wall of confusion by integrating teams to work together and increase communication.\n\nWRONG (a): DevOps aims to integrate teams, not create separate ones for QA.\n\nWRONG (c): Automation is important in DevOps, but the wall of confusion is broken through integration and communication, not just automation.\n\nWRONG (d): Defining clear roles matters, but the primary way DevOps breaks down the wall is integrating teams and improving communication."
  },
  {
    id: 3,
    lo: "QDO-1.1.3",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "A DevOps team wants to improve their efficiency and reduce delays in successful deployment to production.\n\nWhich metric is MOST suitable to achieve these goals?",
    options: [
      { id: "a", text: "Failed deployment recovery time" },
      { id: "b", text: "Deployment frequency" },
      { id: "c", text: "Change fail percentage" },
      { id: "d", text: "Change lead time" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Change lead time measures the duration from a code commit to a successful deployment to production, reflecting the efficiency of the delivery pipeline.\n\nWRONG (a): Failed deployment recovery time measures the time to recover from a failed deployment (fault tolerance and responsiveness).\n\nWRONG (b): Deployment frequency is how often changes are deployed to production (agility/responsiveness), not delay reduction.\n\nWRONG (c): Change fail percentage measures the reliability of the delivery process (percentage of deployments causing production failures)."
  },
  {
    id: 4,
    lo: "QDO-1.1.4",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Match each CALMS framework element (1-4) to its appropriate example (A-D):\n\n1. Culture\n2. Automation\n3. Lean\n4. Measurement\n\nA. Pipeline stages for all types of tests are created in a continuous integration/continuous delivery (CI/CD) pipeline.\nB. Various test reports for different test types are consolidated to provide insights on specific aspects of product quality.\nC. A cross-functional team delivers the fully tested feature to extend product potential for customers.\nD. Shift left is performed to prevent release delays caused by late regression testing.",
    options: [
      { id: "a", text: "1B, 2A, 3C, 4D" },
      { id: "b", text: "1C, 2B, 3D, 4A" },
      { id: "c", text: "1D, 2C, 3A, 4B" },
      { id: "d", text: "1C, 2A, 3D, 4B" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Culture is about team autonomy with ownership of quality — testing is not done outside the DevOps team, so a cross-functional team delivering the fully tested feature = 1C. Automation means automating as much as possible in the CI/CD pipeline = 2A. Lean means streamlining processes and removing waste (e.g., removing bottlenecks in test activities) — shift left preventing late-regression delays = 3D. Measurement provides data for decisions on how software is used and how the SDLC works — consolidated test reports = 4B."
  },
  {
    id: 5,
    lo: "QDO-1.1.5",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: true,
    text: "How can QA contribute to the principles in 'three ways of DevOps'?",
    options: [
      { id: "a", text: "QA should focus on detailed documentation, a separate test phase, and post-release defect analysis." },
      { id: "b", text: "QA can enhance flow with a test-first approach, enable getting faster feedback by automating tests, and foster learning by implementing quality hunting." },
      { id: "c", text: "QA's role is to ensure all code meets requirements via manual testing, which improves flow, gives feedback after development, and learns from defects found in operation." },
      { id: "d", text: "QA can contribute to flow with automated testing, provide feedback through static analysis, and learn from continuous regression testing." },
      { id: "e", text: "QA supports flow by minimizing the number of tests, providing fast feedback by relying on tests done by a developer, and promoting learning by collecting user feedback after release." }
    ],
    correct: ["b", "d"],
    explanation: "CORRECT (b): Flow — a test-first approach contributes to a smooth, efficient process. Feedback — automated testing in the CI/CD pipeline supports rapid feedback loops. Continuous learning — quality hunting encourages teams to explore new ways to test and improve.\n\nCORRECT (d): Flow — automated testing supports predictable value delivery. Feedback — static analysis provides early feedback about code quality. Continuous learning — continuous regression testing provides assurance of the system's quality.\n\nWRONG (a): Describes a sequential development model, not the continuous, integrated nature of QA in DevOps.\n\nWRONG (c): Manual testing cannot cover all code — this statement is wrong.\n\nWRONG (e): Minimizing testing and relying solely on developer tests is not sufficient."
  },
  {
    id: 6,
    lo: "QDO-1.1.6",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following statements about the benefits, risks, and pitfalls of DevOps are true?\n\ni. DevOps culture is implemented as an extension to Agile software development.\nii. DevOps may create silos of self-organized teams throughout the software development lifecycle (SDLC).\niii. DevOps can lead to faster recovery from failures in production.\niv. Focusing only on CI/CD pipeline tools may lead to neglecting the DevOps cultural change.\nv. The goal of DevOps is to define a flow transferring the product from the development team to the operations team.",
    options: [
      { id: "a", text: "i, iii, and v" },
      { id: "b", text: "i, iii, and iv" },
      { id: "c", text: "ii, iii, and iv" },
      { id: "d", text: "i, ii, and iv" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): i is true — there is a risk that DevOps replaces Agile instead of extending it; DevOps culture extends Agile. iii is true — faster recovery from production failures is a listed benefit. iv is true — implementing CI/CD tools alone is not enough; a cultural change is needed.\n\nii is false — DevOps enhances collaboration within teams throughout the SDLC rather than creating silos.\n\nv is false — the primary goal of DevOps is to unify Dev and Ops, not to maintain a strict separation with a handover flow."
  },
  {
    id: 7,
    lo: "QDO-1.2.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following describes how a cross-functional DevOps team minimizes the impact of a temporarily unavailable team member?",
    options: [
      { id: "a", text: "Assigning tasks that require specialized skills to a platform team" },
      { id: "b", text: "Sharing knowledge and skills among team members" },
      { id: "c", text: "Documenting all tasks in an internal task management tool" },
      { id: "d", text: "Assigning specialized tasks to specific team members" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Knowledge and responsibilities are shared so that no part of the knowledge and skills lives with just one team member.\n\nWRONG (a): Cross-functional teams have all knowledge and skills needed for common tasks; only specialized tasks beyond team skills go to specialized teams.\n\nWRONG (c): Internal documentation supports task tracking but is not sufficient to minimize the impact of an unavailable member.\n\nWRONG (d): Members may hold multiple roles simultaneously and take on any task they have the knowledge for — pinning specialized tasks to specific members creates single points of failure."
  },
  {
    id: 8,
    lo: "QDO-1.2.2",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which activity exemplifies how site reliability engineering (SRE) contributes to a DevOps team?",
    options: [
      { id: "a", text: "The team dedicates a sprint to improving the system aesthetics to be more appealing to users." },
      { id: "b", text: "The team prioritizes exploratory testing over automation in CI/CD pipelines." },
      { id: "c", text: "The team creates an automated feedback loop of the system's behaviour in production." },
      { id: "d", text: "The team replaces DevOps practices with new ones." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): SRE contributes to DevOps by implementing automated feedback loops to optimize efficiency.\n\nWRONG (a): Improving system aesthetics is not a goal of SRE.\n\nWRONG (b): SRE emphasizes automation and continuous monitoring rather than prioritizing exploratory testing.\n\nWRONG (d): SRE complements DevOps by bridging the gap between development and operations — it does not replace DevOps practices."
  },
  {
    id: 9,
    lo: "QDO-2.1.1",
    level: "K3",
    points: 2,
    chapter: 2,
    multi: true,
    text: "You are a tester in a DevOps team that plans to follow a test-first approach in a new project, thus leveraging a CI/CD pipeline for frequent deployments. Analyzing the retrospectives from a previous project, the team identifies inefficiencies in providing built-in quality and consistent quality reports.\n\nWhich TWO actions should you prioritize to effectively implement quality assurance (QA) activities in this DevOps environment?",
    options: [
      { id: "a", text: "Align with the organizational quality policy and test policy that includes automated testing, static testing, and collaborative practices like pair programming." },
      { id: "b", text: "Perform exploratory testing in production environments to identify and fix critical defects that will impact user experience (UX)." },
      { id: "c", text: "Set up a dashboard to monitor CI/CD pipeline runtimes, build durations, and resource utilization to support continuous improvement." },
      { id: "d", text: "Rely on testing in production to measure system quality and determine software reliability after production releases." },
      { id: "e", text: "Implement integrated monitoring, reporting, and alerting for indicators related to business value and software quality." }
    ],
    correct: ["a", "e"],
    explanation: "CORRECT (a): A quality policy and test policy are the major work products promoting consistent implementation of preventive measures like static testing, automation, and pair programming to achieve built-in quality.\n\nCORRECT (e): Integrated monitoring and reporting provide visibility into key quality and business metrics, ensuring consistent quality reports and supporting continuous improvement in line with DevOps principles.\n\nWRONG (b): Relying on exploratory testing in production delays defect detection and contradicts the DevOps focus on early testing.\n\nWRONG (c): Useful for tracking pipeline performance, but it does not directly embed QA or improve built-in quality.\n\nWRONG (d): Testing in production is reactive; DevOps emphasizes proactive test activities earlier in the SDLC."
  },
  {
    id: 10,
    lo: "QDO-2.1.2",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which statement correctly compares the test objectives in DevOps, Agile software development, and sequential development models?",
    options: [
      { id: "a", text: "Sequential development models use exploratory testing to detect late phase defects, while Agile and DevOps focus exclusively on automated test execution." },
      { id: "b", text: "DevOps focuses on automating testing in production, while Agile and sequential development models prioritize manual regression testing." },
      { id: "c", text: "In Agile and DevOps, testing is integrated throughout software development cycles, while testing in sequential models is performed in separate test levels." },
      { id: "d", text: "Testing in DevOps requires manual effort to adapt to deployment needs, whereas Agile and sequential models rely entirely on automated tests for quality." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): In DevOps, testing is integrated into every phase of development and deployment with continuous feedback; Agile similarly integrates testing throughout the cycle. Sequential models organize testing in distinct test levels handled by specialized teams.\n\nWRONG (a): There is no correlation between an SDLC and the exclusive use of exploratory testing or automation.\n\nWRONG (b): DevOps emphasizes continuous testing during development, not just in production; sequential models do not prioritize early manual regression testing.\n\nWRONG (d): DevOps leverages extensive automation while allowing manual testing where valuable; Agile does not rely only on automated tests."
  },
  {
    id: 11,
    lo: "QDO-2.1.3",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "A DevOps team is adopting continuous testing to improve software quality and increase delivery speed.\n\nWhich of the following BEST describes the concept of continuous testing in this context?",
    options: [
      { id: "a", text: "An activity focused on monitoring systems for defects in production" },
      { id: "b", text: "The ongoing execution of regression test suites during the development process" },
      { id: "c", text: "An approach that embeds testing across all phases to provide continuous quality feedback" },
      { id: "d", text: "A practice of running automated tests during the build stage of the CI/CD pipeline" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Directly reflects the syllabus: continuous testing integrates test activities throughout the SDLC, verifying and validating the software at every phase.\n\nWRONG (a): Describes only the production-monitoring aspect — continuous testing spans the entire SDLC.\n\nWRONG (b): Partially true, but continuous testing also involves early testing, collaboration, adaptive improvement, and production monitoring — not just regression.\n\nWRONG (d): Automated tests in the build stage are only one aspect; continuous testing spans planning, coding, deployment, and production."
  },
  {
    id: 12,
    lo: "QDO-2.1.4",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "What is the primary role of a pull request (PR) in maintaining quality in a DevOps workflow?",
    options: [
      { id: "a", text: "To prevent junior developers from making changes to the codebase without senior approval" },
      { id: "b", text: "To enforce pre-merge quality checks through collaborative code reviews and automated testing" },
      { id: "c", text: "To speed up deployments by reducing code reviews and relying on testing in production" },
      { id: "d", text: "To enforce testers to manually review the code changes before merging them into the main branch" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): A PR enforces pre-merge quality checks by enabling collaborative reviews, triggering automated tests, and incorporating feedback before integrating code changes.\n\nWRONG (a): PRs are not about seniority restrictions — they provide consistent quality through structured reviews and automated tests for all developers.\n\nWRONG (c): PRs prevent low-quality code from merging by enforcing tests, not by reducing reviews or relying on production testing.\n\nWRONG (d): PRs do not rely exclusively on manual tester reviews — they involve team collaboration and automation."
  },
  {
    id: 13,
    lo: "QDO-2.2.1",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "How does continuous discovery help support alignment with customer needs and business goals?",
    options: [
      { id: "a", text: "By discussing new features with the stakeholders and developing UX prototypes." },
      { id: "b", text: "By requiring acceptance criteria to be finalized before idea exploration." },
      { id: "c", text: "By focusing test efforts on the technical feasibility of features." },
      { id: "d", text: "By focusing on validating functional requirements during the design phase." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Continuous discovery focuses on communicating with stakeholders to get a shared understanding of new features; UX prototypes help clarify stakeholder needs.\n\nWRONG (b): Finalizing acceptance criteria before idea exploration contradicts continuous discovery — the practice is iterative and dynamic, adjusting to experiments and feedback.\n\nWRONG (c): Continuous discovery is not just technical feasibility — it also evaluates customer value, usability, and business alignment.\n\nWRONG (d): It validates a wide range of assumptions (non-functional requirements, customer value, business impact), not just functional requirements in a design phase."
  },
  {
    id: 14,
    lo: "QDO-2.2.2",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following does NOT align with continuous integration (CI) practices?",
    options: [
      { id: "a", text: "Including the necessary work product assets in configuration management to support consistency" },
      { id: "b", text: "Automating build and test steps in the CI/CD pipeline to enable auditing in case of failures" },
      { id: "c", text: "Running manual build verification steps before triggering automated tests in the CI/CD pipeline" },
      { id: "d", text: "Committing small, incremental code changes and stopping to fix defects when tests fail" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Tests should automatically trigger on a commit to the shared codebase. Requiring manual approval before running tests creates an unnecessary bottleneck and contradicts CI practices of rapid feedback and automation.\n\nWRONG (a): Per the syllabus: include everything in configuration management (test scripts, deployment scripts, test data, environment configurations).\n\nWRONG (b): Automation scripts for build/test steps should facilitate investigation in case of build failures.\n\nWRONG (d): Teams check in small, incremental changes and follow a stop-and-fix approach when a test fails."
  },
  {
    id: 15,
    lo: "QDO-2.2.3",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following does NOT help achieve quality in continuous delivery (CD)?",
    options: [
      { id: "a", text: "Using deployment automation tools to ensure consistency and provide an audit trail for compliance" },
      { id: "b", text: "Maintaining a standardized test environment and test data to support reliable and repeatable testing" },
      { id: "c", text: "Implementing infrastructure as code (IaC) to standardize configurations for consistency and repeatability" },
      { id: "d", text: "Allowing deployment processes to vary slightly for different environments to meet specific requirements" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Allowing deployment processes to vary introduces inconsistencies and risks, contradicting CD's emphasis on automation, repeatability, and standardization across environments.\n\nWRONG (a): Deployment automation for consistency, compliance, and an audit trail is exactly how CD achieves quality.\n\nWRONG (b): Standardized test environment and test data management is a listed CD quality practice.\n\nWRONG (c): IaC managing infrastructure configuration as code for consistency and repeatability is a listed CD quality practice."
  },
  {
    id: 16,
    lo: "QDO-2.2.4",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Match each testing term (1-4) to its BEST matching description (A-D):\n\n1. Dark launch\n2. Blue-green deployment\n3. Canary release\n4. A/B testing\n\nA. A small subset of users is exposed to a software change to validate quality before expanding to the entire user base.\nB. Two identical environments - 'current live' and 'new version' - are used to minimize downtime and risk, allowing additional testing on the 'new version' while the 'current live' remains live.\nC. A new feature runs in production alongside existing functionalities, enabling monitoring, testing, and system impact analysis without exposing it to users.\nD. Variants of a feature are presented to different user segments to compare performance metrics and determine the most effective version to keep.",
    options: [
      { id: "a", text: "1C, 2B, 3A, 4D" },
      { id: "b", text: "1A, 2C, 3B, 4D" },
      { id: "c", text: "1D, 2B, 3C, 4A" },
      { id: "d", text: "1C, 2D, 3A, 4B" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Dark launch = a new feature runs in production alongside existing functionality without exposing it to users (1C). Blue-green deployment = two identical environments minimizing downtime and risk, testing the new version while current live serves (2B). Canary release = a small subset of users exposed first to validate quality (3A). A/B testing = variants presented to different user segments, comparing metrics to pick the winner (4D)."
  },
  {
    id: 17,
    lo: "QDO-2.2.6",
    level: "K3",
    points: 2,
    chapter: 2,
    multi: false,
    text: "You are reviewing a CI/CD pipeline where the build, test, and deployment processes are automated. When the build and test pipeline ends, deployment is triggered. Developers are reporting frequent failures in the test environment due to missing configurations and inconsistent data.\n\nWhich action should you recommend for improving the reliability of the test environment?",
    options: [
      { id: "a", text: "Add a manual verification step after each deployment" },
      { id: "b", text: "Extend automation to provide consistent setup and test data" },
      { id: "c", text: "Configure the pipeline to skip deployments when tests failed" },
      { id: "d", text: "Increase the frequency of deployments to catch defects earlier" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): This directly addresses the root cause — inconsistent environments and test data — by enhancing the existing automation. Automated, reproducible environments and test data provisioning are essential for reliability and QA.\n\nWRONG (a): Manual steps reduce the speed, consistency, and scalability of the pipeline, against the principle of full automation.\n\nWRONG (c): A good safeguard, but reactive — it does not prevent failures caused by misconfigured or inconsistent environments.\n\nWRONG (d): Redeploying the same build artifacts more often does not fix configuration and test data defects in the environment."
  },
  {
    id: 18,
    lo: "QDO-3.1.1",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Match each single source of truth system (1-4) to the benefit (A-D) it provides for DevOps teams.\n\n1. Information management system\n2. Version control system\n3. Artifact management system\n4. Observability system\n\nA. Supports controlled change management for source code, test automation code, and CI/CD pipeline definitions.\nB. Provides lifecycle management for backlog items, such as requirements and defect reports.\nC. Enables traceability and access management for monitoring, traces, and logs.\nD. Facilitates the reusability of built executables, dependencies, and test data.",
    options: [
      { id: "a", text: "1D, 2B, 3C, 4A" },
      { id: "b", text: "1A, 2C, 3B, 4D" },
      { id: "c", text: "1B, 2A, 3D, 4C" },
      { id: "d", text: "1A, 2B, 3D, 4C" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Information management system = lifecycle management for backlog items such as requirements and defect reports (1B). Version control system = controlled change management for source code, test automation code, and CI/CD pipeline definitions (2A). Artifact management system = reusability of build artifacts, dependencies, and test data (3D). Observability system = traceability and access management for monitoring, traces, and logs (4C)."
  },
  {
    id: 19,
    lo: "QDO-3.1.2",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following explains how automation supports traceability between the test basis and testware in a DevOps environment?",
    options: [
      { id: "a", text: "Automation tools reduce the need for traceability effort by generating test cases and linking them to requirements." },
      { id: "b", text: "Automation improves traceability by providing accurate, up-to-date links between work products." },
      { id: "c", text: "Automation transfers the responsibility for maintaining traceability to developers." },
      { id: "d", text: "Automation simplifies communication, making collaboration between teams less important." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Automation helps maintain accurate and current relationships between requirements, code, and testware — essential for traceability.\n\nWRONG (a): Test case generation is not part of traceability and does not substitute for maintaining traceable links.\n\nWRONG (c): Traceability is a shared responsibility across DevOps roles; automation does not change that.\n\nWRONG (d): Automation enhances collaboration by making work-product relationships transparent and auditable — it does not make collaboration less important."
  },
  {
    id: 20,
    lo: "QDO-3.1.3",
    level: "K3",
    points: 2,
    chapter: 3,
    multi: false,
    text: "A DevOps team has implemented an automated quality reporting system in the CI/CD pipeline. However, stakeholders have reported that the dashboard is frequently outdated, missing manual test results, and does not provide a complete view of software quality.\n\nWhat should be the NEXT steps to improve the reporting process?",
    options: [
      { id: "a", text: "Ensure automated scripts collect data from all CI/CD stages, integrate test results from manual test execution immediately, and enable the dashboard's real-time updates." },
      { id: "b", text: "Reconfigure the dashboard to focus on key deployment metrics while collecting manual test results separately in a different system to avoid delays." },
      { id: "c", text: "Focus on automated test results, as manual test data is difficult to track in real-time, and use production monitoring tools for quality assessment instead." },
      { id: "d", text: "Rely on static reports instead of a CI/CD pipeline dashboard to provide quality insights at scheduled intervals, so that stakeholders receive structured updates." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): The dashboard must integrate automated AND manual test results for a complete quality view. Automating data gathering and enabling real-time updates improve visibility and decision-making.\n\nWRONG (b): Storing manual results separately fragments quality reporting and reduces transparency — the syllabus says to combine metrics from various sources into a single accessible location (SSOT).\n\nWRONG (c): Automated tests alone do not completely capture software quality; production monitoring alone is insufficient.\n\nWRONG (d): Static reports lack real-time updates, making them ineffective for tracking trends; dashboards enable continuous monitoring and better alignment."
  },
  {
    id: 21,
    lo: "QDO-3.1.4",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is NOT a benefit of test data management automation?",
    options: [
      { id: "a", text: "It reduces storage needs and accelerates test data provisioning by selecting a smaller, representative subset of production data." },
      { id: "b", text: "It improves coverage by generating diverse sets of data, including valid and invalid data, edge cases, and boundary values." },
      { id: "c", text: "It organizes and stores test data in a structured way in version control, making it available on demand within the CI/CD pipeline or for manual testing." },
      { id: "d", text: "It eliminates security concerns by masking test data and protect the identity and personal details of individuals." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): While test data masking REDUCES risk, it does not completely ELIMINATE the risk of security breaches — improper masking can still expose sensitive data.\n\nWRONG (a): Test data subsetting: a smaller, representative subset of production data reduces storage needs and accelerates provisioning.\n\nWRONG (b): Data generation creates comprehensive coverage with a variety of inputs (valid/invalid data, edge cases, boundary values).\n\nWRONG (c): Data organization: structured storage in a VCS, available on demand in the pipeline or for manual testing."
  },
  {
    id: 22,
    lo: "QDO-3.1.5",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is NOT a benefit of statistical analysis in software testing?",
    options: [
      { id: "a", text: "It helps identify trends in software quality by analyzing the current state and predicting potential future defects." },
      { id: "b", text: "It automates test results analysis, removing the need for human interpretation and reviews of test results." },
      { id: "c", text: "It supports decision-making by providing key metrics like defect density, code coverage, and mean time between failures (MTBF)." },
      { id: "d", text: "It provides a broader picture of software quality, including insights into processes and team performance." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Statistical analysis enhances automation, but human interpretation remains necessary to validate findings, assess software behavior, and detect issues such as defective tests and process inefficiencies.\n\nWRONG (a): Statistical analysis identifies trends and patterns in quality and residual risks; AI-based tools can predict future results.\n\nWRONG (c): Metrics like defect density, code coverage, and MTBF help stakeholders establish confidence and make decisions.\n\nWRONG (d): Statistical analysis gives a broader picture of software quality, and also of the processes applied and the people involved."
  },
  {
    id: 23,
    lo: "QDO-3.1.6",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which approach is the BEST to utilize resources in a controlled test environment?",
    options: [
      { id: "a", text: "Resources are kept allocated at all times so that test environments are always available when needed." },
      { id: "b", text: "A fixed amount of resources is assigned to all test environments to maintain consistency across different test cases." },
      { id: "c", text: "Resources are provisioned dynamically based on actual testing needs, preventing both over- and under-provisioning." },
      { id: "d", text: "The maximum available resources are allocated to every test environment to avoid potential performance issues." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Controlled test environments allocate resources dynamically, ensuring each test gets exactly what it needs — optimizing costs and performance.\n\nWRONG (a): Always-allocated resources cause unnecessary consumption and higher costs.\n\nWRONG (b): Fixed amounts for all environments are inefficient — different tests have different requirements, wasting resources or causing performance issues.\n\nWRONG (d): Allocating the maximum to every environment is wasteful; controlled environments optimize usage per testing requirement."
  },
  {
    id: 24,
    lo: "QDO-3.2.1",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is THE BEST example of integrating regression tests into the CI/CD pipeline?",
    options: [
      { id: "a", text: "All tests are regression tests after their first use as tests that cover new functionality, and all tests are run in every CI/CD pipeline." },
      { id: "b", text: "Regression testing scope is set dynamically based on the file changes in a feature branch, but risk-based selection of regression tests are run before the release." },
      { id: "c", text: "Regression tests are excluded from the feature branch CI/CD pipelines due to complexity, but they are run before every release." },
      { id: "d", text: "CI/CD pipelines primarily rely on feature specific tests, and there is no need to run regression tests when newly added code is well tested." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Regression test scope should be optimized for file changes and risks. Ideally all regression tests run before a release, but that is often bad for business viability and sustainability (unnecessary resources), so a risk-based selection runs instead.\n\nWRONG (a): Running all regression tests in every pipeline is wasteful — scope should be optimized based on code changes and risks.\n\nWRONG (c): Regression tests should follow feature-specific tests to confirm no new defects are introduced — excluding them from feature-branch pipelines loses that safety net.\n\nWRONG (d): Testing only new code will not reveal its impact on existing code."
  },
  {
    id: 25,
    lo: "QDO-3.2.2",
    level: "K3",
    points: 2,
    chapter: 3,
    multi: false,
    text: "You are joining a DevOps team that is preparing to test a third-party payment API. The team wants to avoid production failures caused by mismatched expectations between the third-party application's API and your application.\n\nWhich of the following steps would help you prepare for this test effort?",
    options: [
      { id: "a", text: "Set up performance benchmarks to measure API response times under load." },
      { id: "b", text: "Define and validate a contract that specifies expected request and response formats." },
      { id: "c", text: "Focus on acceptance testing to simulate user interactions with the payment system." },
      { id: "d", text: "Use integration testing to verify the API behavior after connecting all components." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Contract testing determines that both provider and consumer adhere to a defined API structure, format, and set of expectations for request/response payloads, headers, status codes, and data types. It can be done without deploying the components.\n\nWRONG (a): Performance testing is non-functional — it builds on contracts, assuming they already work correctly.\n\nWRONG (c): Acceptance testing validates high-level requirements late in the process; it does not prevent API defects.\n\nWRONG (d): Integration testing is useful but occurs later — it lacks the early, isolated validation contract testing offers."
  },
  {
    id: 26,
    lo: "QDO-3.2.3",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following statements about test automation are specific to Agile software development, and which to sequential development models?\n\ni. Test automation, beyond unit testing, provides a limited feedback loop between development and testing\nii. Test automation, beyond unit testing, requires detailed planning in earlier phases before actual test implementation\niii. Tests, beyond unit testing, are designed and implemented as a collaboration of developers, testers, and product owners\niv. Automated testing is done in a distinct test phase of the software development lifecycle (SDLC)\nv. Automated tests have broader coverage on lower test levels",
    options: [
      { id: "a", text: "i, iv, v are specific to sequential; ii, iii are specific to Agile" },
      { id: "b", text: "ii, iii are specific to sequential; i, iv, v are specific to Agile" },
      { id: "c", text: "i, ii, iv are specific to sequential; iii, v are specific to Agile" },
      { id: "d", text: "iv, v are specific to sequential; i, ii, iii are specific to Agile" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): i, ii, and iv are specific to sequential development models, where automated testing is done in a test phase after development is complete — providing limited feedback and requiring upfront planning.\n\niii and v are specific to Agile software development, where tests are developed throughout the SDLC phases in collaboration (developers, testers, product owners), staying close to development with focus on lower-level unit and component integration tests."
  },
  {
    id: 27,
    lo: "QDO-3.3.1",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following manual tests gives the LEAST value of information for stakeholders on the overall quality of the software?",
    options: [
      { id: "a", text: "Manually reproducing automated tests during acceptance testing to increase validation scope." },
      { id: "b", text: "Exploratory testing on specific features before the release to increase confidence in quality." },
      { id: "c", text: "Code reviews on pull requests (PRs) to assess code quality and design defects." },
      { id: "d", text: "Accessibility testing validating fulfillment of desired standards and requirements." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Manually reproducing automated test scripts is the least valuable — exploratory testing can achieve greater validation with less effort.\n\nWRONG (b): Exploratory testing significantly extends coverage and increases overall confidence.\n\nWRONG (c): Code reviews are static testing — an important type of manual testing that prevents defects.\n\nWRONG (d): Accessibility testing can be automated only to a limited extent, so manual testing is usually required."
  },
  {
    id: 28,
    lo: "QDO-3.3.2",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which statement is TRUE regarding exploratory testing in the CI/CD pipeline?",
    options: [
      { id: "a", text: "Exploratory tests are not part of the CI/CD pipeline." },
      { id: "b", text: "Exploratory tests are executed only in test environments where the software is fully deployed." },
      { id: "c", text: "Exploratory tests allow the use of tools to support test execution and test reporting." },
      { id: "d", text: "Exploratory tests have their design, execution, and evaluation spread across different SDLC phases." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Tools can support exploratory testing in designing test charters, recording test results, reporting defects, and storing test artifacts.\n\nWRONG (a): Although manually executed, exploratory tests can be triggered from the CI/CD pipeline.\n\nWRONG (b): Exploratory tests can be executed in any test environment.\n\nWRONG (d): Exploratory tests are designed, executed, and evaluated in one test session (except planning and preparing the test charter beforehand)."
  },
  {
    id: 29,
    lo: "QDO-3.3.3",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "What feedback on quality can crowd testing bring to the DevOps team?",
    options: [
      { id: "a", text: "Information obtained during acceptance testing and requirements coverage by automated tests" },
      { id: "b", text: "The security level of a product's component and its compliance with required security standards" },
      { id: "c", text: "Adoption rate of the beta release version across users who are part of the beta program." },
      { id: "d", text: "Product compatibility with different versions of the operating system in real-world usage." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Crowd testing focuses on breadth first (e.g., beta testing after a canary release), collecting feedback from production and real-world device testing — like OS-version compatibility.\n\nWRONG (a): That is a benefit of test automation and traceability, not crowd testing.\n\nWRONG (b): That is security testing — crowd testing does not focus on low-level testing.\n\nWRONG (c): Adoption rate is part of release management and quality monitoring, not crowd testing."
  },
  {
    id: 30,
    lo: "QDO-3.3.4",
    level: "K3",
    points: 2,
    chapter: 3,
    multi: false,
    text: "You are about to organize a quality hunting event.\n\nWhat is the BEST way to implement a good quality hunting event?",
    options: [
      { id: "a", text: "Stakeholders are assigned different test conditions to gain personal experience with the test object while competing for the best assessment of the test object's quality level from a business perspective." },
      { id: "b", text: "Small teams of various roles using fresh test approaches assess the test object's quality level while competing to bring the most valuable quality insights for stakeholders." },
      { id: "c", text: "A group of testers executes automated and manual tests to confirm the test results and assess the scope of the tests according to the business requirements that are important to the stakeholders." },
      { id: "d", text: "Teams of internal and external people use innovative ways to find as many defects in the software as possible in the pre-release or beta version of the software, and the best team is awarded." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Quality hunting is an event where teams (about half the size of an Agile team) compete to give the most valuable assessment of the test object's quality level, challenged to create fresh and innovative approaches. Stakeholders benefit from many ideas and new angles on relevant quality aspects.\n\nWRONG (a): A wider variety of roles participates, extending beyond business requirements — stakeholders are not simply assigned test conditions.\n\nWRONG (c): Not only testers participate; the point is extending information with innovative approaches, not confirming automated results.\n\nWRONG (d): Competing to find as many defects as possible is BUG hunting — quality hunting is about assessing the overall quality level."
  },
  {
    id: 31,
    lo: "QDO-4.1.1",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "What capability does a build artifact management tools provide?",
    options: [
      { id: "a", text: "Test data generation" },
      { id: "b", text: "Scanning for vulnerabilities" },
      { id: "c", text: "Automated build pipelines" },
      { id: "d", text: "Project document sharing" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Scanning for vulnerabilities is a key capability of build artifact management tools.\n\nWRONG (a): Test data generation belongs to test data and test management tools — artifact managers can store test data but not generate it.\n\nWRONG (c): Automated build pipelines are a capability of CI/CD tools — their outputs can be uploaded to the artifact management tool.\n\nWRONG (d): Document sharing is a capability of collaboration and communication tools; artifact management handles build executables, libraries, and deliverables."
  },
  {
    id: 32,
    lo: "QDO-4.1.2",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Match each tool type (1-4) to its corresponding quality assurance (QA) and testing function (A-D).\n\n1. Static analysis tools\n2. Continuous testing tools\n3. Configuration management tools\n4. Continuous monitoring tools\n\nA. Detect defects early by enabling automated testing at every SDLC phase and test level\nB. Ensure consistent environments across development, testing, and production\nC. Identify deviations from coding standards, vulnerabilities, and potential defects before test execution\nD. Provide real-time feedback on system health and user behavior",
    options: [
      { id: "a", text: "1C, 2A, 3B, 4D" },
      { id: "b", text: "1A, 2D, 3C, 4B" },
      { id: "c", text: "1C, 2A, 3D, 4B" },
      { id: "d", text: "1D, 2B, 3A, 4C" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Static analysis tools evaluate source code without execution — coding standards, potential defects, code smells, vulnerabilities, BEFORE test execution (1C). Continuous testing tools enable automated tests at every SDLC phase and test level, catching defects early (2A). Configuration management tools provide consistent environments across development, testing, and production (3B). Continuous monitoring tools give real-time insights into system health and user behavior (4D)."
  },
  {
    id: 33,
    lo: "QDO-4.2.1",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Which activities in a CI/CD pipeline support developers to effectively manage feature development and code integration with minimal risks?",
    options: [
      { id: "a", text: "Source code management" },
      { id: "b", text: "Branching and merging" },
      { id: "c", text: "Monitoring and feedback" },
      { id: "d", text: "Release management" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Branching and merging support efficient feature development and code integration — feature branches and code reviews for specific changes reduce integration issues.\n\nWRONG (a): Source code management organizes commits and version control, but does not directly manage feature development and integration risk.\n\nWRONG (c): Monitoring and feedback observe application health and performance in production.\n\nWRONG (d): Release management coordinates releases and deployment strategies, not code integration during feature development."
  },
  {
    id: 34,
    lo: "QDO-4.2.2",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Match following DevOps release strategies (1-4) to its correct descriptions (A-D).\n\n1. Rolling release\n2. Hotfix deployment\n3. Dark launching\n4. Phased rollout\n\nA. Features are deployed but inaccessible to users.\nB. Gradually replaces system instances with updated versions.\nC. Urgent release to resolve critical defects.\nD. Updates are deployed incrementally by region or user group.",
    options: [
      { id: "a", text: "1B, 2C, 3D, 4A" },
      { id: "b", text: "1C, 2B, 3D, 4A" },
      { id: "c", text: "1A, 2D, 3C, 4B" },
      { id: "d", text: "1B, 2C, 3A, 4D" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Rolling releases gradually replace system instances with updated versions, supporting continuous availability (1B). Hotfix deployment is an urgent release to resolve critical production defects, prioritizing speed over thorough testing (2C). Dark launching deploys features to production but keeps them inaccessible to users (3A). Phased rollout deploys updates incrementally by region, user group, or other segmentation (4D)."
  },
  {
    id: 35,
    lo: "QDO-4.2.3",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: true,
    text: "Which of the following are key principles of infrastructure as code (IaC)?",
    options: [
      { id: "a", text: "Idempotency ensures a consistent environment when a product is deployed repeatedly." },
      { id: "b", text: "IaC primarily relies on graphical user interfaces to configure infrastructure efficiently." },
      { id: "c", text: "Declarative and imperative approaches define the state of the infrastructure and steps to achieve it." },
      { id: "d", text: "IaC depends on manual configuration to support infrastructure stability over time." },
      { id: "e", text: "IaC eliminates the need for version control in infrastructure management." }
    ],
    correct: ["a", "c"],
    explanation: "CORRECT (a): Idempotency ensures IaC scripts produce the same results even when applied multiple times, preventing configuration deviations.\n\nCORRECT (c): The declarative approach focuses on the desired state; the imperative approach specifies the steps to achieve it.\n\nWRONG (b): IaC is managed through code (a descriptive model), not graphical user interfaces.\n\nWRONG (d): IaC reduces manual intervention by automating infrastructure changes — eliminating repetitive manual tasks.\n\nWRONG (e): IaC does not eliminate version control — it integrates with configuration management, letting teams track changes and roll back."
  },
  {
    id: 36,
    lo: "QDO-4.2.4",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Which of the following BEST describes feature toggles?",
    options: [
      { id: "a", text: "A technique to modify system behavior by changing code dynamically" },
      { id: "b", text: "A method to manage features by permanently enabling or disabling them in production" },
      { id: "c", text: "An approach that allows teams to modify system behavior without changing code" },
      { id: "d", text: "A strategy that replaces the need for branching in version control" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Feature toggles are an approach that allows teams to modify system behavior WITHOUT changing code.\n\nWRONG (a): Feature toggles work without changing code — not by changing it dynamically.\n\nWRONG (b): Feature toggles provide temporary control rather than permanent enablement.\n\nWRONG (d): Feature toggles do not replace branching strategies."
  },
  {
    id: 37,
    lo: "QDO-4.2.5",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Match each DevOps term (1-4) to its correct description (A-D):\n\n1. Trunk-based development\n2. Feature branches\n3. Pull request\n4. Merge conflict\n\nA. Used to merge code changes from one branch to any other branch, while providing feedback on code changes by other team members.\nB. When the same section of the code is modified in both branches.\nC. Every code change is pushed directly to the main branch after successful tests during the commit stage.\nD. Code changes are developed on branches created specifically for these changes and deleted after merging.",
    options: [
      { id: "a", text: "1C, 2D, 3A, 4B" },
      { id: "b", text: "1A, 2C, 3D, 4B" },
      { id: "c", text: "1C, 2D, 3B, 4A" },
      { id: "d", text: "1B, 2A, 3D, 4C" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Trunk-based development = every code change pushed directly to the main branch after successful commit-stage tests (1C). Feature branches = created for specific code changes and deleted after merging (2D). Pull request = merges code changes from one branch to another and gathers feedback from the team (3A). Merge conflict = the same part of the code changed in both branches during merging (4B)."
  },
  {
    id: 38,
    lo: "QDO-4.2.6",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: true,
    text: "Which TWO of the following describe aspects of chaos engineering?",
    options: [
      { id: "a", text: "A method for optimizing cloud usage" },
      { id: "b", text: "A practice that does not require a reliable CI/CD pipeline" },
      { id: "c", text: "A practice to determine fault tolerance and reliability" },
      { id: "d", text: "A way to experiment without triggering real failures" },
      { id: "e", text: "A technique to uncover hidden defects" }
    ],
    correct: ["c", "e"],
    explanation: "CORRECT (c): Chaos engineering is crucial for determining the fault tolerance and reliability of software systems by intentionally injecting failures and observing the response.\n\nCORRECT (e): DevOps teams use chaos engineering to uncover hidden defects not apparent during normal operation or in a test environment.\n\nWRONG (a): Chaos engineering focuses on fault tolerance, not cloud efficiency.\n\nWRONG (b): It is made possible BY a reliable CI/CD pipeline that supports painless deployment and rollback.\n\nWRONG (d): Chaos engineering involves intentionally injecting real failures and observing the response."
  },
  {
    id: 39,
    lo: "QDO-4.2.8",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "What information is required by the software bill of materials (SBoM)?",
    options: [
      { id: "a", text: "Licensing information for the whole system" },
      { id: "b", text: "CPU and memory usage statistics for production environments" },
      { id: "c", text: "Deployment automation configurations and rollback mechanisms" },
      { id: "d", text: "Component dependencies on other components" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): An SBOM requires the dependencies of each component on other components.\n\nWRONG (a): An SBOM includes per-component licensing conditions, not licensing for the whole software system.\n\nWRONG (b): CPU and memory usage statistics belong to telemetry for production monitoring, not the SBOM.\n\nWRONG (c): Deployment automation and rollback mechanisms are CD/continuous deployment activities, not SBOM contents."
  },
  {
    id: 40,
    lo: "QDO-4.2.9",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Which of the following is a benefit of using containerization in software development?",
    options: [
      { id: "a", text: "It eliminates the need for security measures when using third-party components." },
      { id: "b", text: "It support consistent environments across all development phases and test levels." },
      { id: "c", text: "It replaces traditional virtualization technologies." },
      { id: "d", text: "It guarantees zero resource usage when containers are inactive." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Containerization allows consistent environments across development, testing, and production — solving issues like 'it works on my machine'.\n\nWRONG (a): Security measures remain necessary — diligent dependency management is still needed with third-party components.\n\nWRONG (c): Containerization does not entirely replace traditional virtualization — it is a lightweight alternative for specific conditions.\n\nWRONG (d): Containers are efficient and removable after use, but they do not guarantee zero resource usage when inactive."
  },

  // ——— Appendix A — additional questions ———
  {
    id: 41,
    label: "A1",
    appendix: true,
    lo: "QDO-1.1.3",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Assign the following specified measurements (1-4) to ONE of the metric groups (A-B) while not leaving any group empty.\n\n1. Time between a failed deployment back to a working environment\n2. Frequency of deployment to production\n3. Percentage of unsuccessful deployments to production\n4. Time between a code commit and a successful deployment to production\n\nA. Velocity of making code changes\nB. Quality of code changes delivered\n\n(The official exam presents this as an assignment question; pick the matching combination.)",
    options: [
      { id: "a", text: "1A, 2B, 3A, 4B" },
      { id: "b", text: "1B, 2A, 3B, 4A" },
      { id: "c", text: "1B, 2B, 3A, 4A" },
      { id: "d", text: "1A, 2A, 3B, 4B" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): (1) Time from a failed deployment back to a working environment = failed deployment recovery time. (3) Percentage of unsuccessful deployments = change fail percentage. Both relate to the QUALITY of changes delivered — stability (group B).\n\n(2) Frequency of deployment to production = deployment frequency. (4) Duration from a code commit to successful production deployment = change lead time. Both relate to the VELOCITY of making changes — throughput (group A).\n\nTherefore 1 & 3 match B, and 2 & 4 match A."
  },
  {
    id: 42,
    label: "A2",
    appendix: true,
    lo: "QDO-1.2.3",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: true,
    text: "A development team builds features without engaging with the operations team. Developers define 'done' as completing the code, leaving the deployment and maintenance tasks entirely to Ops. At the same time, another department has created a separate DevOps team solely focused on implementing CI/CD pipelines, without coordination between the Dev and Ops teams.\n\nWhich of the following are anti-patterns present in this situation?",
    options: [
      { id: "a", text: "DevOps as a tools team" },
      { id: "b", text: "Dev does not need Ops" },
      { id: "c", text: "Fully shared Ops responsibilities" },
      { id: "d", text: "Site reliability engineering (SRE) team" },
      { id: "e", text: "Dev and Ops silos" }
    ],
    correct: ["a", "e"],
    explanation: "CORRECT (a): 'DevOps as a tools team' — a separate team working only on the tooling needed for DevOps, without coordination.\n\nCORRECT (e): 'Dev and Ops silos' — development and operations function in isolation without direct collaboration; 'done' means feature complete, not released.\n\nWRONG (b): 'Dev does not need Ops' is not present — developers still rely on Ops, leaving deployment and maintenance entirely to them.\n\nWRONG (c): Fully shared Ops responsibilities promotes Dev/Ops cooperation — a pattern, not an anti-pattern.\n\nWRONG (d): The SRE team is a valid collaboration model and is not present in this case."
  },
  {
    id: 43,
    label: "A3",
    appendix: true,
    lo: "QDO-2.2.5",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following practices BEST aligns with the principles of release on demand?",
    options: [
      { id: "a", text: "Deploying all features to production immediately and making them visible to all users upon deployment." },
      { id: "b", text: "Decoupling architectural components to allow independent release strategies and different release frequencies." },
      { id: "c", text: "Releasing features to users only after manual approval of all supporting documentation and marketing materials." },
      { id: "d", text: "Using fixed release cycles to provide consistent delivery schedules regardless of market conditions." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Decoupling architectural components allows different components to be released independently and at different frequencies, reducing risk and supporting the flexibility of release on demand.\n\nWRONG (a): In release on demand, deployed features are not automatically visible to all users — controlled release mechanisms (feature management tools) allow selective visibility per business needs.\n\nWRONG (c): Non-software work products (manuals, marketing) can be part of a release, but manual approval of all of them is not mandatory — the emphasis is agility and incremental value.\n\nWRONG (d): Release on demand aligns releases with business and customer needs (market timing), not fixed schedules."
  },
  {
    id: 44,
    label: "A4",
    appendix: true,
    lo: "QDO-2.2.6",
    level: "K3",
    points: 2,
    chapter: 2,
    multi: false,
    text: "Sort the following activities in chronological order to simulate an incremental approach to implementing a CI/CD pipeline for a software development project. The list of activities is not complete, but each represents a step in the CI/CD pipeline implementation.\n\na. Implement feature toggles to manage stakeholders' decisions on release\nb. Define contract testing for microservices as they talk to each other\nc. Define the flow of information and materials for the CI/CD pipeline\nd. Implement reproducible provisioning of the pre-production environment\ne. Include performance testing to validate the system's behavior\n\n(The official exam presents this as a sorting question; pick the correct order.)",
    options: [
      { id: "a", text: "c → d → b → e → a" },
      { id: "b", text: "c → b → d → a → e" },
      { id: "c", text: "d → c → b → e → a" },
      { id: "d", text: "c → d → e → b → a" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Per syllabus section 2.2.6:\n\n(c) Defining the flow of information and materials is part of modeling the value stream (value stream mapping) — step 1.\n\n(d) Reproducible provisioning of environments is part of build and deployment automation — step 2.\n\n(b) Contract testing is part of the commit stage — step 3.\n\n(e) Performance testing validating system behavior belongs to acceptance stage automation — step 4.\n\n(a) Feature toggles are part of release automation — step 5."
  },
  {
    id: 45,
    label: "A5",
    appendix: true,
    lo: "QDO-3.2.3",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Assign each test automation characteristic (1-5) to the respective software development lifecycle (SDLC) models (A-B), while not leaving any model group empty.\n\n1. Test automation, beyond unit testing, provides a limited feedback loop between development and testing.\n2. Test automation, beyond unit testing, requires detailed planning in earlier phases before actual test implementation.\n3. Tests, beyond unit testing, are designed and implemented as a collaboration of developers, testers, and product owners.\n4. Automated testing is done in a distinct test level of the SDLC.\n5. Automated tests have good coverage in lower test levels.\n\nA. Agile software development\nB. Sequential development models\n\n(The official exam presents this as an assignment question; pick the matching combination.)",
    options: [
      { id: "a", text: "1B, 2B, 3A, 4B, 5A" },
      { id: "b", text: "1A, 2A, 3B, 4A, 5B" },
      { id: "c", text: "1B, 2A, 3A, 4B, 5B" },
      { id: "d", text: "1A, 2B, 3B, 4A, 5A" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Statements 1, 2, and 4 are specific to SEQUENTIAL development models, where automated testing is done in a test phase after development — limited feedback and upfront planning.\n\nStatements 3 and 5 are specific to AGILE software development, where tests are developed throughout the SDLC phases in collaboration, staying close to development and focusing on lower-level unit and component integration tests."
  },
  {
    id: 46,
    label: "A6",
    appendix: true,
    lo: "QDO-3.3.3",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "What is an example of crowd testing?",
    options: [
      { id: "a", text: "The DevOps team executes tests triggered from the CI/CD pipeline before the release to validate the main user scenarios." },
      { id: "b", text: "Several independent teams test specific aspects of the quality in a limited time frame." },
      { id: "c", text: "A large group of independent testers tests the software in a time-boxed session with no test case definition." },
      { id: "d", text: "Automated API tests are implemented for the CI/CD pipeline by an independent test team." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Crowd testing is a session where a group of people (crowd testers), usually external to the development organization and possibly geographically distributed, use a test charter to guide their testing without preparing detailed test cases upfront.\n\nWRONG (a): Crowd testing is done by people usually external to the organization, not by the DevOps team itself.\n\nWRONG (b): Several independent teams testing quality aspects in a limited time frame describes a QUALITY HUNTING event.\n\nWRONG (d): Crowd testing is a manual test activity — it does not necessarily involve automated tests."
  },
  {
    id: 47,
    label: "A7",
    appendix: true,
    lo: "QDO-4.1.1",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "A development team is facing multiple issues, including inconsistent configurations between development, testing, and production environments. These inconsistencies often lead to deployment failures, extended debugging times, and delays in delivery.\n\nConsidering the different DevOps tool capabilities, what should the team prioritize to address this challenge effectively?",
    options: [
      { id: "a", text: "Use a centralized repository to store build artifacts and dependencies for easy retrieval and distribution." },
      { id: "b", text: "Automate the creation of environments, standardize configuration files, and use infrastructure as code (IaC) tools." },
      { id: "c", text: "Set up automated CI/CD pipelines to integrate code changes into a shared repository and run tests automatically." },
      { id: "d", text: "Perform load testing and simulate high-traffic scenarios to assess system performance under stress." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Automating environment creation, standardizing configurations, and using IaC tools addresses the root cause — inconsistent environments — and supports a consistent setup across development, testing, and production.\n\nWRONG (a): Storing artifacts and dependencies improves consistency, but does not fix inconsistent environment configurations.\n\nWRONG (c): Automated CI/CD pipelines focus on code integration and defect detection, not environment configuration defects.\n\nWRONG (d): Load testing assesses performance — it does not resolve configuration inconsistencies."
  },
  {
    id: 48,
    label: "A8",
    appendix: true,
    lo: "QDO-4.2.7",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "What is the role of telemetry in the context of continuous monitoring?",
    options: [
      { id: "a", text: "It collects log data and uses machine learning to detect anomalies." },
      { id: "b", text: "It gathers measurements of functional and non-functional quality characteristics." },
      { id: "c", text: "It automates the initiation of control actions when quality is not progressing as expected." },
      { id: "d", text: "It provides a view of the software quality by using logging, tracing, and metrics of the system's behavior." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Telemetry specifically focuses on collecting measurements of both functional and non-functional quality characteristics, giving insights into software performance and user interaction.\n\nWRONG (a): Applying machine learning to detect anomalies is part of monitoring, not telemetry itself.\n\nWRONG (c): Initiating control actions relates to continuous monitoring as a whole, not specifically to telemetry.\n\nWRONG (d): Logging, tracing, and metrics providing a coherent view of the software's state describes OBSERVABILITY."
  }
];

export const mainQuestions = questions.filter((q) => !q.appendix);
export const totalPoints = mainQuestions.reduce((sum, q) => sum + q.points, 0);
