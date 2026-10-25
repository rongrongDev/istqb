// CTFL v4.0 — Chapter 2 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Testing never happens in a vacuum: this chapter places it inside the software development lifecycle. It covers how the chosen SDLC shapes testing, universally good practices, test-first development (TDD/ATDD/BDD), DevOps, shift left, and retrospectives — then organizes dynamic testing into five test levels and four test types, and finishes with confirmation, regression, and maintenance testing.",
  keywords: [
    "acceptance testing", "black-box testing", "component integration testing", "component testing",
    "confirmation testing", "functional testing", "integration testing", "maintenance testing",
    "non-functional testing", "regression testing", "shift left", "system integration testing",
    "system testing", "test level", "test object", "test type", "white-box testing",
  ],
  objectives: [
    { id: "FL-2.1.1", level: "K2", text: "Explain the impact of the chosen software development lifecycle on testing" },
    { id: "FL-2.1.2", level: "K1", text: "Recall good testing practices that apply to all software development lifecycles" },
    { id: "FL-2.1.3", level: "K1", text: "Recall the examples of test-first approaches to development" },
    { id: "FL-2.1.4", level: "K2", text: "Summarize how DevOps might have an impact on testing" },
    { id: "FL-2.1.5", level: "K2", text: "Explain shift left" },
    { id: "FL-2.1.6", level: "K2", text: "Explain how retrospectives can be used as a mechanism for process improvement" },
    { id: "FL-2.2.1", level: "K2", text: "Distinguish the different test levels" },
    { id: "FL-2.2.2", level: "K2", text: "Distinguish the different test types" },
    { id: "FL-2.2.3", level: "K2", text: "Distinguish confirmation testing from regression testing" },
    { id: "FL-2.3.1", level: "K2", text: "Summarize maintenance testing and its triggers" },
  ],
  sections: {
    "2.1.1": {
      objective: "FL-2.1.1",
      body: [
        { type: "p", text: "An SDLC model is an abstract, high-level representation of the software development process, defining how phases and activities relate logically and chronologically. Examples: sequential models (waterfall, V-model), iterative models (spiral, prototyping), incremental models (Unified Process). More detailed methods and Agile practices include ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, and TDD." },
        { type: "list", intro: "The choice of SDLC impacts the:", items: [
          "Scope and timing of test activities (test levels and test types)",
          "Level of detail of test documentation",
          "Choice of test techniques and test approach",
          "Extent of test automation",
          "Role and responsibilities of a tester",
        ]},
        { type: "p", text: "In sequential models, testers participate early in requirement reviews, test analysis, and test design — but executable code arrives late, so dynamic testing typically cannot happen early. In iterative and incremental models, each iteration delivers a working prototype or increment, so static and dynamic testing can happen at all test levels in every iteration; frequent delivery requires fast feedback and extensive regression testing." },
        { type: "p", text: "Agile development assumes change throughout the project: it favors lightweight work product documentation and extensive test automation to ease regression testing, with most manual testing done using experience-based techniques that need little prior analysis and design." },
      ],
    },
    "2.1.2": {
      objective: "FL-2.1.2",
      body: [
        { type: "list", intro: "Good testing practices that hold in every SDLC model:", items: [
          "For every software development activity, there is a corresponding test activity — so all development activities are subject to quality control.",
          "Different test levels have specific and different test objectives — comprehensive testing without redundancy.",
          "Test analysis and design for a given test level begins during the corresponding development phase — honoring the early-testing principle.",
          "Testers are involved in reviewing work products as soon as drafts are available — early defect detection supporting shift left.",
        ]},
        { type: "note", title: "Exam favorite", text: "One of these four practices, restated, is the correct answer in every sample exam. They apply to sequential, iterative, and incremental models alike." },
      ],
    },
    "2.1.3": {
      objective: "FL-2.1.3",
      body: [
        { type: "p", text: "TDD, ATDD, and BDD are test-first approaches: tests are defined before the code as a means of directing development. All three implement early testing and shift left, and support iterative development." },
        { type: "list", items: [
          "Test-Driven Development (TDD): coding is directed by test cases rather than extensive software design. Tests are written first, code is written to satisfy them, then tests and code are refactored.",
          "Acceptance Test-Driven Development (ATDD): tests are derived from acceptance criteria as part of the system design process; the application is developed to satisfy those tests.",
          "Behavior-Driven Development (BDD): desired behavior is expressed as test cases in simple natural language that stakeholders understand — usually the Given/When/Then format — then automatically translated into executable tests.",
        ]},
        { type: "p", text: "In all three approaches, the tests may persist as automated tests to guard code quality during future adaptations and refactoring." },
      ],
    },
    "2.1.4": {
      objective: "FL-2.1.4",
      body: [
        { type: "p", text: "DevOps is an organizational approach that creates synergy by getting development (including testing) and operations to work toward common goals. It requires a cultural shift that bridges the dev–ops gap while valuing both functions equally, and promotes team autonomy, fast feedback, integrated toolchains, and technical practices like continuous integration (CI) and continuous delivery (CD) — enabling teams to build, test, and release high-quality code faster through a delivery pipeline." },
        { type: "list", intro: "Testing benefits of DevOps:", items: [
          "Fast feedback on code quality and on whether changes adversely affect existing code",
          "CI promotes shift left: developers submit high-quality code with component tests and static analysis",
          "Automated CI/CD processes facilitate stable test environments",
          "Increased visibility of non-functional quality characteristics (performance efficiency, reliability)",
          "Pipeline automation reduces repetitive manual testing",
          "Regression risk is minimized by the scale and range of automated regression tests",
        ]},
        { type: "list", intro: "Risks and challenges:", items: [
          "The DevOps delivery pipeline must be defined and established",
          "CI/CD tools must be introduced and maintained",
          "Test automation requires additional resources and may be difficult to establish and maintain",
        ]},
        { type: "note", text: "Despite the high level of automation, manual testing — especially from the user's perspective — is still needed." },
      ],
    },
    "2.1.5": {
      objective: "FL-2.1.5",
      body: [
        { type: "p", text: "Shift left is the early-testing principle in action: testing performed earlier in the SDLC — not waiting for code to be implemented or components to be integrated — without neglecting testing later in the SDLC." },
        { type: "list", intro: "Practices that achieve shift left:", items: [
          "Reviewing specifications from the testers' perspective — often exposes ambiguities, incompleteness, and inconsistencies",
          "Writing test cases before the code is written, and running the code in a test harness during implementation",
          "Using CI (better: CD) — fast feedback plus automated component tests accompanying submitted code",
          "Completing static analysis of source code before dynamic testing, or as part of an automated process",
          "Performing non-functional testing from the component test level where possible — these test types otherwise tend to run late, when a complete system and representative environment exist",
        ]},
        { type: "p", text: "Shift left can mean extra training, effort, and cost early in the process, but is expected to save effort and cost later. Stakeholder buy-in to the concept is important." },
      ],
    },
    "2.1.6": {
      objective: "FL-2.1.6",
      body: [
        { type: "p", text: "Retrospectives are held at the end of a project or iteration, at a release milestone, or when needed — timing depends on the SDLC model. Participants go beyond testers: developers, architects, product owner, business analysts. They discuss: what was successful and should be retained? What was not and could be improved? How to incorporate improvements and retain successes?" },
        { type: "p", text: "Results should be recorded, and are normally part of the test completion report. Retrospectives are critical for continuous improvement — recommended improvements must be followed up." },
        { type: "list", intro: "Typical benefits for testing:", items: [
          "Increased test effectiveness and efficiency (implementing process-improvement suggestions)",
          "Increased quality of testware (jointly reviewing the test processes)",
          "Team bonding and learning (a forum to raise issues and propose improvements)",
          "Improved quality of the test basis (requirements deficiencies addressed)",
          "Better cooperation between development and testing (collaboration reviewed regularly)",
        ]},
      ],
    },
    "2.2.1": {
      objective: "FL-2.2.1",
      body: [
        { type: "p", text: "Test levels are groups of test activities organized and managed together; each is an instance of the test process for software at a given development phase. In sequential models, one level's exit criteria often form the next level's entry criteria; in iterative models this may not apply, and levels may overlap in time." },
        { type: "list", intro: "The five test levels:", items: [
          "Component testing (unit testing) — components in isolation; often needs test harnesses or unit test frameworks; normally performed by developers in their development environments.",
          "Component integration testing (unit integration testing) — interfaces and interactions between components; heavily dependent on the integration strategy: bottom-up, top-down, or big-bang.",
          "System testing — overall behavior and capabilities of the entire system: end-to-end functional testing and non-functional testing; some characteristics (e.g. usability) are best tested on a complete system in a representative environment; sub-system simulations possible; often an independent test team; based on system specifications.",
          "System integration testing — interfaces between the system under test and other systems/external services; needs environments preferably similar to the operational environment.",
          "Acceptance testing — validation and demonstrating readiness for deployment: the system fulfills the user's business needs; ideally performed by intended users. Forms: user acceptance testing (UAT), operational, contractual, and regulatory acceptance testing, alpha and beta testing.",
        ]},
        { type: "p", text: "Levels are distinguished by: test object, test objectives, test basis, typical defects and failures, and approach and responsibilities." },
      ],
    },
    "2.2.2": {
      objective: "FL-2.2.2",
      body: [
        { type: "list", intro: "The four test types in this syllabus:", items: [
          "Functional testing — evaluates the functions a component or system should perform ('what' it should do): functional completeness, correctness, and appropriateness.",
          "Non-functional testing — evaluates 'how well the system behaves': the non-functional quality characteristics.",
          "Black-box testing — specification-based: derives tests from documentation unrelated to internal structure; objective is checking behavior against specifications.",
          "White-box testing — structure-based: derives tests from the implementation or internal structure (code, architecture, workflows, data flows); objective is acceptable coverage of the underlying structure.",
        ]},
        { type: "list", intro: "ISO/IEC 25010 non-functional quality characteristics:", items: [
          "Performance efficiency", "Compatibility", "Usability (interaction capability)", "Reliability",
          "Security", "Maintainability", "Portability (flexibility)", "Safety",
        ]},
        { type: "p", text: "Non-functional testing can appropriately start early (reviews, component testing). Many non-functional tests are derived from functional tests — same function, checking a non-functional constraint (performs within a time limit, ports to a new platform). Late discovery of non-functional defects seriously threatens a project; some non-functional testing needs special environments such as a usability lab." },
        { type: "p", text: "All four test types apply at every test level (with different focus), and test techniques can derive conditions and cases for all of them." },
      ],
    },
    "2.2.3": {
      objective: "FL-2.2.3",
      body: [
        { type: "p", text: "Changes — new features or defect fixes — call for two extra kinds of testing. Confirmation testing confirms the original defect was successfully fixed: depending on risk, re-run all tests that failed due to the defect and/or add new tests covering the fix. When time or money is short, it may be reduced to re-running the failure-reproducing steps and checking the failure is gone." },
        { type: "p", text: "Regression testing confirms a change (including an already-confirmed fix) causes no adverse consequences — in the changed component, other components of the same system, or even other connected systems, and possibly the environment. Impact analysis beforehand shows which parts of the software could be affected and scopes the regression testing." },
        { type: "p", text: "Regression suites run many times and grow with each iteration or release, making regression testing a strong automation candidate — start automation early. In CI/DevOps, include automated regression tests, potentially at several test levels. Confirmation and/or regression testing are needed at all test levels where defects are fixed or changes made." },
        { type: "note", title: "Order matters", text: "After a fix: confirmation testing first (is the defect gone?), then regression testing (did the fix break anything else?)." },
      ],
    },
    "2.3": {
      objective: "FL-2.3.1",
      body: [
        { type: "p", text: "Maintenance can be corrective, adaptive to environment changes, or aimed at improving performance or maintainability (ISO/IEC 14764) — through planned releases/deployments or unplanned ones (hot fixes). Impact analysis may be done before making a change, to decide whether to make it at all based on consequences elsewhere. Testing changes to an operational system evaluates both the success of the change and possible regressions in the (usually much larger) unchanged remainder." },
        { type: "list", intro: "Scope of maintenance testing depends on:", items: [
          "The degree of risk of the change",
          "The size of the existing system",
          "The size of the change",
        ]},
        { type: "list", intro: "Triggers for maintenance (and maintenance testing):", items: [
          "Modifications — planned enhancements (release-based), corrective changes, hot fixes",
          "Upgrades or migrations of the operational environment (platform to platform) — may require tests of the new environment, the changed software, and data conversion when migrating data from another application",
          "Retirement — end-of-life systems may need testing of data archiving (long retention periods) and of restore/retrieval procedures after archiving",
        ]},
      ],
    },
  },
};
