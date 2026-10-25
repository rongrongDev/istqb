// CTFL v4.0 — Chapter 5 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The management chapter: planning testing (test plan, iteration/release planning, entry and exit criteria, estimation, prioritization, test pyramid, testing quadrants), managing risk (project vs product risks, risk analysis and control), monitoring and reporting testing, and the two supporting disciplines — configuration management and defect management.",
  keywords: [
    "defect management", "defect report", "entry criteria", "exit criteria", "product risk",
    "project risk", "risk", "risk analysis", "risk assessment", "risk control", "risk identification",
    "risk level", "risk management", "risk mitigation", "risk monitoring", "risk-based testing",
    "test approach", "test completion report", "test control", "test monitoring", "test plan",
    "test planning", "test progress report", "test pyramid", "test strategy", "testing quadrants",
  ],
  objectives: [
    { id: "FL-5.1.1", level: "K2", text: "Exemplify the purpose and content of a test plan" },
    { id: "FL-5.1.2", level: "K1", text: "Recognize how a tester adds value to iteration and release planning" },
    { id: "FL-5.1.3", level: "K2", text: "Compare and contrast entry criteria and exit criteria" },
    { id: "FL-5.1.4", level: "K3", text: "Use estimation techniques to calculate the required test effort" },
    { id: "FL-5.1.5", level: "K3", text: "Apply test case prioritization" },
    { id: "FL-5.1.6", level: "K1", text: "Recall the concepts of the test pyramid" },
    { id: "FL-5.1.7", level: "K2", text: "Summarize the testing quadrants and their relationships with test levels and test types" },
    { id: "FL-5.2.1", level: "K1", text: "Identify risk level by using risk likelihood and risk impact" },
    { id: "FL-5.2.2", level: "K2", text: "Distinguish between project risks and product risks" },
    { id: "FL-5.2.3", level: "K2", text: "Explain how product risk analysis may influence thoroughness and test scope" },
    { id: "FL-5.2.4", level: "K2", text: "Explain what measures can be taken in response to analyzed product risks" },
    { id: "FL-5.3.1", level: "K1", text: "Recall metrics used for testing" },
    { id: "FL-5.3.2", level: "K2", text: "Summarize the purposes, content, and audiences for test reports" },
    { id: "FL-5.3.3", level: "K2", text: "Exemplify how to communicate the status of testing" },
    { id: "FL-5.4.1", level: "K2", text: "Summarize how configuration management supports testing" },
    { id: "FL-5.5.1", level: "K3", text: "Prepare a defect report" },
  ],
  sections: {
    "5.1.1": {
      objective: "FL-5.1.1",
      body: [
        { type: "p", text: "A test plan describes the test objectives, resources, and processes for a test project. It documents the means and schedule for achieving test objectives, helps ensure performed activities meet the established criteria, serves as communication with team members and stakeholders, and demonstrates that testing will adhere to the test policy and test strategy — or explains deviations." },
        { type: "p", text: "Test planning guides the testers' thinking, forcing them to confront future challenges: risks, schedules, people, tools, costs, effort. Preparing the plan is itself a useful way to think through the work needed." },
        { type: "list", intro: "Typical test plan content:", items: [
          "Context of testing — test scope, test objectives, test basis",
          "Assumptions and constraints of the test project",
          "Stakeholders — roles, responsibilities, relevance to testing, hiring and training needs",
          "Communication — forms and frequency, documentation templates",
          "Risk register — product risks and project risks",
          "Test approach — test levels, test types, test techniques, deliverables, entry/exit criteria, independence of testing, metrics, test data requirements, test environment requirements, deviations from policy and strategy",
          "Budget and schedule",
        ]},
      ],
    },
    "5.1.2": {
      objective: "FL-5.1.2",
      body: [
        { type: "p", text: "Iterative SDLCs plan at two horizons. Release planning looks ahead to the product release: it defines and re-defines the product backlog and may split larger user stories into smaller ones; it also grounds the test approach and test plan across all iterations. Testers here: write testable user stories and acceptance criteria, participate in project and quality risk analyses, estimate test effort per story, determine the test approach, plan the release testing." },
        { type: "p", text: "Iteration planning looks to the end of a single iteration and concerns the iteration backlog. Testers here: perform detailed risk analysis of user stories, determine story testability, break stories down into tasks (particularly testing tasks), estimate test effort for all testing tasks, identify and refine functional and non-functional aspects of the test object." },
      ],
    },
    "5.1.3": {
      objective: "FL-5.1.3",
      body: [
        { type: "p", text: "Entry criteria define the preconditions for undertaking an activity; starting without them makes the activity more difficult, time-consuming, costly, and risky. Exit criteria define what must be achieved to declare an activity complete. Both should be defined per test level, varying with test objectives." },
        { type: "list", intro: "Typical entry criteria:", items: [
          "Availability of resources — people, tools, environments, test data, budget, time",
          "Availability of testware — test basis, testable requirements, user stories, test cases",
          "Initial quality level of the test object — e.g. all smoke tests have passed",
        ]},
        { type: "list", intro: "Typical exit criteria:", items: [
          "Measures of thoroughness — achieved coverage, number of unresolved defects, defect density, number of failed test cases",
          "Binary yes/no criteria — planned tests executed, static testing performed, all found defects reported, all regression tests automated",
        ]},
        { type: "p", text: "Running out of time or budget can be a valid exit criterion — acceptable if stakeholders reviewed and accepted the risk of going live without further testing. In Agile: exit criteria are often the Definition of Done (objective metrics for a releasable item); entry criteria for starting development/testing of a story are the Definition of Ready." },
      ],
    },
    "5.1.4": {
      objective: "FL-5.1.4",
      body: [
        { type: "p", text: "Test effort estimation predicts the test-related work needed to meet test objectives. Estimates rest on assumptions and always carry estimation error; small tasks estimate more accurately, so decompose large tasks before estimating." },
        { type: "list", intro: "Four estimation techniques:", items: [
          "Estimation based on ratios (metrics-based) — derive standard ratios from the organization's previous projects (own history is the best source). Example: dev-to-test ratio was 3:2; new project dev effort 600 person-days → test effort 400 person-days.",
          "Extrapolation (metrics-based) — measure as early as possible in the current project, then extrapolate the remaining effort with a mathematical model. Suits iterative SDLCs: e.g. next iteration's effort = the average of the last three.",
          "Wideband Delphi (expert-based, iterative) — experts estimate in isolation; out-of-range estimates are discussed; experts re-estimate in isolation; repeat until consensus. Planning Poker is the Agile variant using numbered cards.",
          "Three-point estimation (expert-based) — optimistic (a), most likely (m), pessimistic (b): E = (a + 4m + b) / 6, with standard deviation SD = (b − a) / 6.",
        ]},
        { type: "example", title: "Three-point worked example", text: "a=6, m=9, b=18 person-hours → E = (6 + 36 + 18)/6 = 10, SD = (18−6)/6 = 2 → estimate 10±2 person-hours (8 to 12)." },
      ],
    },
    "5.1.5": {
      objective: "FL-5.1.5",
      body: [
        { type: "list", intro: "The most common test case prioritization strategies:", items: [
          "Risk-based prioritization — execution order follows risk analysis results: test cases covering the most important risks first.",
          "Coverage-based prioritization — order by coverage (e.g. statement coverage): highest coverage first. Variant: additional coverage prioritization — first the highest-coverage test, then each next test is the one adding the most extra coverage.",
          "Requirements-based prioritization — order by the stakeholder-defined priorities of the requirements traced to the test cases: tests for the most important requirements first.",
        ]},
        { type: "p", text: "Pure priority order can break on dependencies: if a higher-priority test depends on a lower-priority one, the lower-priority test must run first. Execution order must also respect resource availability — tools, environments, or people only available in certain time windows." },
      ],
    },
    "5.1.6": {
      objective: "FL-5.1.6",
      body: [
        { type: "p", text: "The test pyramid shows that tests may have different granularity, supporting automation and effort allocation. The higher the layer: the lower the granularity, the lower the isolation (more dependency on other system elements), and the higher the execution time." },
        { type: "p", text: "Bottom layer: small, isolated, fast tests checking small pieces of functionality — you need many for reasonable coverage. Top layer: complex, high-level, end-to-end tests — slower, checking large functionality, so few are needed. Layer counts and names vary: Cohn's original pyramid is unit / service / UI; another popular version is unit (component) / integration (component integration) / end-to-end; other test levels can be used." },
      ],
    },
    "5.1.7": {
      objective: "FL-5.1.7",
      body: [
        { type: "p", text: "The testing quadrants (Marick; Crispin & Gregory) group test levels with appropriate test types, activities, techniques, and work products in Agile development. They help test management visualize that all appropriate test types and levels are included in the SDLC, and give all stakeholders — developers, testers, business representatives — a shared vocabulary for test types." },
        { type: "p", text: "Two axes: tests are business facing or technology facing; tests support the team (guide development) or critique the product (measure behavior against expectations)." },
        { type: "table", headers: ["Quadrant", "Axes", "Contents"], rows: [
          ["Q1", "Technology facing / support the team", "Component tests, component integration tests — automated, in CI"],
          ["Q2", "Business facing / support the team", "Functional tests, examples, user story tests, UX prototypes, API testing, simulations — check acceptance criteria; manual or automated"],
          ["Q3", "Business facing / critique the product", "Exploratory testing, usability testing, user acceptance testing — user-oriented, often manual"],
          ["Q4", "Technology facing / critique the product", "Smoke tests and non-functional tests except usability — often automated"],
        ]},
        { type: "note", title: "Watch usability", text: "Usability testing sits in Q3 with the business-facing tests — while every other non-functional test type lands in Q4. This asymmetry is the exam's favorite trap." },
      ],
    },
    "5.2.1": {
      objective: "FL-5.2.1",
      body: [
        { type: "p", text: "Risk is a potential event, hazard, threat, or situation whose occurrence causes an adverse effect. Two factors characterize it: risk likelihood — the probability of occurrence (greater than zero, less than one) — and risk impact (harm) — the consequences of occurrence. Together they express the risk level, the measure of the risk: the higher the level, the more important its treatment. Quantitatively, risk level = likelihood × impact." },
        { type: "p", text: "Risk management increases the likelihood of achieving objectives, improves product quality, and increases stakeholder confidence and trust. Its main activities: risk analysis (risk identification + risk assessment) and risk control (risk mitigation + risk monitoring). A test approach where test activities are selected, prioritized, and managed based on risk analysis and control is risk-based testing." },
      ],
    },
    "5.2.2": {
      objective: "FL-5.2.2",
      body: [
        { type: "list", intro: "Project risks relate to management and control of the project:", items: [
          "Organizational issues — delays in work product deliveries, inaccurate estimates, cost cutting",
          "People issues — insufficient skills, conflicts, communication problems, staff shortage",
          "Technical issues — scope creep, poor tool support",
          "Supplier issues — third-party delivery failure, bankruptcy of the supporting company",
        ]},
        { type: "p", text: "When project risks occur, they impact schedule, budget, or scope — the project's ability to achieve its objectives." },
        { type: "p", text: "Product risks relate to the product's quality characteristics (ISO 25010): missing or wrong functionality, incorrect calculations, runtime errors, poor architecture, inefficient algorithms, inadequate response time, poor user experience, security vulnerabilities. Consequences when they occur: user dissatisfaction; loss of revenue, trust, reputation; damage to third parties; high maintenance costs and help-desk overload; criminal penalties; in extreme cases physical damage, injuries, or death." },
      ],
    },
    "5.2.3": {
      objective: "FL-5.2.3",
      body: [
        { type: "p", text: "From a testing perspective, product risk analysis creates awareness of product risk so test effort can be focused to minimize the residual level of product risk. Ideally it begins early in the SDLC." },
        { type: "p", text: "It consists of risk identification — generating a comprehensive risk list via brainstorming, workshops, interviews, cause-effect diagrams — and risk assessment: categorizing identified risks, determining likelihood, impact, and level, prioritizing, and proposing handling. Categorization helps assign mitigation, since same-category risks often mitigate similarly. Assessment can be quantitative (risk level = likelihood × impact), qualitative (risk matrix), or mixed." },
        { type: "list", intro: "Results of product risk analysis are used to:", items: [
          "Determine the test scope to be carried out",
          "Determine the test levels and propose the test types to perform",
          "Determine the test techniques to employ and the coverage to achieve",
          "Estimate the test effort for each task",
          "Prioritize testing to find critical defects as early as possible",
          "Determine whether non-testing activities could also reduce risk",
        ]},
      ],
    },
    "5.2.4": {
      objective: "FL-5.2.4",
      body: [
        { type: "p", text: "Product risk control comprises all measures taken in response to identified and assessed product risks: risk mitigation (implementing the actions proposed in risk assessment to reduce the risk level) and risk monitoring (checking mitigation effectiveness, gathering information to improve assessment, identifying emerging risks)." },
        { type: "p", text: "Once a risk is analyzed, the response options are: risk mitigation by testing, risk acceptance, risk transfer, or a contingency plan." },
        { type: "list", intro: "Mitigating product risks by testing:", items: [
          "Select testers with the right experience and skills for the risk type",
          "Apply an appropriate level of independence of testing",
          "Perform reviews and static analysis",
          "Apply appropriate test techniques and coverage levels",
          "Apply appropriate test types addressing the affected quality characteristics",
          "Perform dynamic testing, including regression testing",
        ]},
      ],
    },
    "5.3.1": {
      objective: "FL-5.3.1",
      body: [
        { type: "p", text: "Test monitoring gathers information to assess test progress and whether exit criteria (or their associated tasks) are satisfied — such as coverage targets for product risks, requirements, or acceptance criteria. Test control turns that information into control directives: reprioritizing tests when a risk becomes an issue, re-evaluating entry/exit criteria after rework, adjusting the schedule for a delayed environment, adding resources. Test completion consolidates data at milestones: a test level completed, an iteration finished, a project completed or cancelled, a release, or a maintenance release." },
        { type: "list", intro: "Common metric groups (learn one example each):", items: [
          "Project progress metrics — task completion, resource usage, test effort",
          "Test progress metrics — test case implementation progress, environment preparation progress, cases run/not run, passed/failed, execution time",
          "Product quality metrics — availability, response time, mean time to failure",
          "Defect metrics — number and priorities of defects found/fixed, defect density, defect detection percentage",
          "Risk metrics — residual risk level",
          "Coverage metrics — requirements coverage, code coverage",
          "Cost metrics — cost of testing, organizational cost of quality",
        ]},
      ],
    },
    "5.3.2": {
      objective: "FL-5.3.2",
      body: [
        { type: "p", text: "Test reporting summarizes and communicates test information during and after testing. Test progress reports support ongoing test control and must carry enough information to modify the schedule, resources, or plan when deviations or changed circumstances demand it. Test completion reports summarize a specific finished activity (test level, cycle, iteration) and inform subsequent testing." },
        { type: "list", intro: "A test progress report (regular: daily/weekly) typically includes:", items: [
          "Testing period",
          "Test progress vs plan (ahead/behind), including notable deviations",
          "Impediments for testing and their workarounds",
          "Test metrics",
          "New and changed risks within the period",
          "Testing planned for the next period",
        ]},
        { type: "list", intro: "A test completion report (once, ideally when exit criteria are met) typically includes:", items: [
          "Test summary",
          "Evaluation of testing and product quality against the original test plan (objectives, exit criteria)",
          "Deviations from the plan (schedule, duration, effort)",
          "Testing impediments and workarounds",
          "Test metrics based on the progress reports",
          "Unmitigated risks and unfixed defects",
          "Lessons learned relevant to testing",
        ]},
        { type: "p", text: "Audience determines formality and frequency: progress reporting within the team is frequent and informal; completion reporting follows a set template and happens once. ISO/IEC/IEEE 29119-3 provides templates (progress reports are called test status reports there)." },
      ],
    },
    "5.3.3": {
      objective: "FL-5.3.3",
      body: [
        { type: "list", intro: "Options for communicating test status:", items: [
          "Verbal communication with team members and stakeholders",
          "Dashboards — CI/CD dashboards, task boards, burn-down charts",
          "Electronic communication channels — email, chat",
          "Online documentation",
          "Formal test reports",
        ]},
        { type: "p", text: "The best means depends on test management concerns, organizational test strategies, regulatory standards, or — for self-organizing teams — the team itself. More formal communication suits distributed teams where face-to-face isn't possible across geography and time zones. Different stakeholders want different information, so tailor the communication." },
      ],
    },
    "5.4": {
      objective: "FL-5.4.1",
      body: [
        { type: "p", text: "Configuration management (CM) identifies, controls, and tracks work products — test plans, strategies, conditions, cases, scripts, results, logs, reports — as configuration items. For a complex item like a test environment, CM records its constituent items, their relationships, and versions. Once approved for testing, an item becomes a baseline, changeable only through formal change control." },
        { type: "p", text: "CM records changed items whenever a new baseline is created, and allows reverting to a previous baseline to reproduce earlier test results." },
        { type: "list", intro: "To support testing properly, CM ensures:", items: [
          "All configuration items (including test items — individual parts of the test object) are uniquely identified, version controlled, tracked for changes, and related to other items, maintaining traceability through the test process",
          "All identified documentation and software items are referenced unambiguously in testware",
        ]},
        { type: "p", text: "In DevOps, CI/CD/continuous deployment and the associated testing typically run in an automated pipeline that includes automated CM." },
      ],
    },
    "5.5": {
      objective: "FL-5.5.1",
      body: [
        { type: "p", text: "Since finding defects is a major test objective, an established defect management process is essential. Reported anomalies may turn out to be real defects or something else (false positives, change requests) — resolved while processing the report. The minimum process: a workflow from discovery to closure plus classification rules — log the anomaly, analyze and classify it, decide the response (fix or keep as is), close the report. All stakeholders follow the process; handle static testing findings (especially static analysis) similarly." },
        { type: "list", intro: "Defect report objectives:", items: [
          "Give those responsible for handling and resolving defects sufficient information to resolve the issue",
          "Provide a means of tracking work product quality",
          "Provide ideas for improving the development and test process",
        ]},
        { type: "list", intro: "A dynamic-testing defect report typically includes:", items: [
          "Unique identifier; title with a short summary of the anomaly",
          "Date observed, issuing organization, author and their role",
          "Identification of the test object and the test environment",
          "Context — test case being run, test activity, SDLC phase, technique/checklist/test data used",
          "Description of the failure enabling reproduction and resolution — steps, test logs, database dumps, screenshots, recordings",
          "Expected results and actual results",
          "Severity (degree of impact on stakeholder interests or requirements)",
          "Priority to fix",
          "Status — open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected",
          "References — e.g. to the test case",
        ]},
        { type: "p", text: "Defect management tools auto-fill some fields (identifier, date, author, initial status). ISO/IEC/IEEE 29119-3 provides templates — it calls defect reports incident reports." },
      ],
    },
  },
};
