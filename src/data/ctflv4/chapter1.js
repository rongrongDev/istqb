// CTFL v4.0 — Chapter 1: Fundamentals of Testing
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 1,
  title: 'Fundamentals of Testing',
  time: '180 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: 'The vocabulary chapter — 8 of the 40 exam questions come from here. Learn the nine test objectives, the error→defect→failure chain, and the seven testing principles word-for-word. The five test activities (planning, monitoring/control, analysis, design, implementation, execution, completion) and which testware belongs to each are matching-question favorites.',
  sections: [
    {
      id: '1.1.1',
      title: 'Test Objectives',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Nine typical test objectives: evaluating work products (requirements, user stories, designs, code); causing failures and finding defects; ensuring required coverage; reducing the risk of inadequate quality; verifying specified requirements are fulfilled; verifying compliance with contractual, legal and regulatory requirements; providing information for stakeholder decisions; building confidence in the quality of the test object; validating that it works as stakeholders expect.',
        'Objectives vary with context: the work product tested, test level, risks, SDLC, and business factors (corporate structure, competition, time-to-market).'
      ],
      examInsights: [
        'A-Q1 TRAP — "Prove there are no unfixed defects" and "prove there will be no failures" are NEVER valid objectives (principle 1: testing shows presence, not absence). Valid: reduce risk + build confidence.',
        'C-Q1 / D-Q1 — "Causing failures and identifying defects" and "building confidence in the quality of the test object" are verbatim valid objectives. Distractors reword impossible goals (prove correctness, test all combinations).'
      ]
    },
    {
      id: '1.1.2',
      title: 'Testing and Debugging',
      level: 'K2',
      type: 'skim',
      summary: 'Testing finds defects (static) or triggers failures (dynamic); debugging is the separate, non-testing activity of finding, analyzing and eliminating the causes. Dynamic-testing debugging = reproduce failure → diagnose (find defect) → fix. Then confirmation testing (ideally by the same person who found it) checks the fix, regression testing checks nothing else broke. After static testing there is no reproduction/diagnosis — the defect was found directly, debugging just removes it.',
      examInsights: [
        'C-Q2 KEY — "Testing determines that defects exist; debugging removes them" is the canonical distinction. Debugging is NOT a testing activity.',
        'TRAP — After static testing, debugging needs NO failure reproduction or diagnosis: static testing finds defects directly, it cannot cause failures.'
      ]
    },
    {
      id: '1.2.1',
      title: "Testing's Contributions to Success",
      level: 'K2',
      type: 'skim',
      summary: 'Testing is a cost-effective way to detect defects (removal itself is debugging, not testing — so the quality contribution is indirect). It directly evaluates quality at various SDLC phases, feeding decisions like the release decision. Testers give users indirect representation on the project (cheaper than involving real users throughout). Testing may also be required for contractual, legal, or regulatory compliance.',
      examInsights: [
        'A-Q2 — "Testers involved throughout the SDLC" is the success-contributing pattern; distractors put testing only at the end.',
        'B-Q1 — Reviews improving requirements quality is a valid "why testing is necessary" example — remember static testing counts as testing.'
      ]
    },
    {
      id: '1.2.2',
      title: 'Testing and Quality Assurance (QA)',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Testing = product-oriented, corrective, a major form of quality control (QC). Other QC forms: formal methods (model checking, proof of correctness), simulation, prototyping.',
        'QA = process-oriented, preventive: good processes, followed correctly, yield good products. QA applies to development AND testing processes, and is everyone\'s responsibility on the project.',
        'Test results are used by both: testing uses them to fix defects; QA uses them as feedback on how well processes perform.'
      ],
      examInsights: [
        'B-Q2 KEY — "Testing is performed as part of QC" is the correct pairing. TRAP: swapping the definitions (QA=corrective/product, QC=preventive/process) is the standard distractor.'
      ]
    },
    {
      id: '1.2.3',
      title: 'Errors, Defects, Failures, and Root Causes',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Chain: humans make ERRORS (mistakes) → which produce DEFECTS (faults, bugs) in work products → which, if executed, may cause FAILURES. Causes of errors: time pressure, complexity, tiredness, lack of training.',
        'Defects live in documentation (requirements, test scripts), source code, or supporting work products (build files). Early undetected defects breed later ones. Some defects always fail when executed, some only in specific circumstances, some never.',
        'Failures can also come from environmental conditions (radiation, electromagnetic fields) — not every failure traces to a human error.',
        'ROOT CAUSE = the fundamental reason for a problem (e.g. the situation that led to the error), found via root cause analysis; addressing it prevents recurrence.'
      ],
      examInsights: [
        'D-Q2 SCENARIO — Work backwards: root cause (why the error happened, e.g. time pressure) → error (the mistake) → defect (the flawed design/code) → failure (runtime effect). The root cause is the earliest link, not the defect.',
        'TRAP — Failures are NOT always caused by defects: environmental conditions (radiation, EM fields) can cause failures directly.'
      ]
    },
    {
      id: '1.3',
      title: 'Testing Principles',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        '1. Testing shows the presence, not the absence, of defects — no defects found ≠ correctness proven.',
        '2. Exhaustive testing is impossible — use test techniques, prioritization, and risk-based testing to focus effort instead.',
        '3. Early testing saves time and money — early defect removal prevents derived defects; start static AND dynamic testing early.',
        '4. Defects cluster together — a few components hold most defects (Pareto principle); clusters feed risk-based testing.',
        '5. Tests wear out — repeated tests stop finding new defects; modify tests/data or write new ones. Exception: automated regression testing usefully repeats.',
        '6. Testing is context dependent — no universal approach.',
        '7. Absence-of-defects fallacy — verifying all requirements and fixing all found defects can still yield a system that fails users\' needs. Do validation, not just verification.'
      ],
      examInsights: [
        'A-Q3 / D-Q3 — Scenario "same regression tests run every iteration, find fewer and fewer defects" = TESTS WEAR OUT (not "defects cluster").',
        'B-Q3 — Equivalence partitioning / BVA as the answer to "can\'t test everything" = exhaustive testing is impossible.',
        'C-Q3 — Involving end users in acceptance testing to check the system meets their needs = countering the absence-of-defects fallacy (validation over verification).'
      ]
    },
    {
      id: '1.4.1',
      title: 'Test Activities and Tasks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Seven activity groups, often iterative/parallel: PLANNING (define objectives, pick approach), MONITORING & CONTROL (progress vs. plan; corrective actions), ANALYSIS ("what to test" — testable features → prioritized test conditions), DESIGN ("how to test" — test conditions → test cases, coverage items, test data requirements, environment design), IMPLEMENTATION (create/acquire testware, procedures → suites → execution schedule, build environment), EXECUTION (run per schedule, compare actual vs. expected, log, analyze anomalies), COMPLETION (at milestones: unresolved defects → change requests/backlog items, archive testware, shut down environment, lessons learned, completion report).',
        'Analysis answers WHAT to test (measurable coverage criteria); design answers HOW to test.'
      ],
      examInsights: [
        'B-Q4 KEY — Test data requirements, test conditions elaboration, environment DESIGN, coverage items = TEST DESIGN. Building the environment = implementation; defining objectives = planning.',
        'C-Q4 — Test techniques like BVA are applied in test ANALYSIS and DESIGN (two answers).',
        'D-Q4 MATCHING — "Derive test cases from test conditions"=design; "identify reusable testware at milestone"=completion; "compare actual vs expected results"=execution; "prioritize test conditions"=analysis.',
        'A-Q4 — Checking feasibility/testability of a user story during refinement = test analysis contribution.'
      ]
    },
    {
      id: '1.4.2',
      title: 'Test Process in Context',
      level: 'K2',
      type: 'skim',
      summary: 'Testing is never isolated — contextual factors shape it: stakeholders (needs, cooperation), team members (skills, availability), business domain (criticality, risks, regulations), technical factors (type of software, architecture), project constraints (scope, time, budget), organizational factors (structure, policies), SDLC (practices, methods), and tools. These drive test strategy, techniques, automation degree, coverage level, testware detail, and reporting.',
      examInsights: [
        'A-Q5 / B-Q5 — SDLC, team experience/skills, and regulations DO significantly influence testing. Distractors offer trivia (office layout, brand of laptop) or claim "nothing outside the test team matters".'
      ]
    },
    {
      id: '1.4.3',
      title: 'Testware',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Testware = output work products of each activity. PLANNING → test plan, schedule, risk register, entry/exit criteria. MONITORING & CONTROL → progress reports, control directives, risk info. ANALYSIS → (prioritized) test conditions (e.g. acceptance criteria), defect reports on the test basis. DESIGN → (prioritized) test cases, test charters, coverage items, test data requirements, environment requirements. IMPLEMENTATION → test procedures, manual/automated scripts, suites, test data, execution schedule, environment items (stubs, drivers, simulators, service virtualizations). EXECUTION → test logs, defect reports. COMPLETION → completion report, improvement actions, lessons learned, change requests.',
        'Watch the pairs: coverage items & test data REQUIREMENTS = design, but actual test DATA & execution schedule = implementation; defect reports appear in analysis (test basis) and execution (test object).'
      ],
      examInsights: [
        'C-Q5 / D-Q5 MATCHING — Classic pairing question. Coverage items→design; change requests→completion; test execution schedule→implementation; prioritized test conditions→analysis; test completion report→completion; DB test data→implementation; test log→execution.',
        'TRAP — "Test data requirements" (design) vs "test data" (implementation) — the word "requirements" moves it one activity earlier.'
      ]
    },
    {
      id: '1.4.4',
      title: 'Traceability between the Test Basis and Testware',
      level: 'K2',
      type: 'skim',
      summary: 'Maintain traceability between test basis elements ↔ testware (conditions, cases), test results, and defects. It enables coverage evaluation (coverage criteria as KPIs), impact analysis of changes, audits, IT governance, more understandable reports (status per test basis element), and assessing product quality/process capability/progress against business goals. Examples: cases↔requirements verifies requirement coverage; results↔risks evaluates residual risk.',
      examInsights: [
        'B-Q6 — Correct value statement: traceability from user requirements to test results measures whether requirements are met. Distractors credit traceability with things it cannot do (making testing faster, replacing test planning).'
      ]
    },
    {
      id: '1.4.5',
      title: 'Roles in Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'TEST MANAGEMENT role: overall responsibility for test process, team, leadership. Focus: planning, monitoring & control, completion. In Agile, some tasks sit with the team; cross-team tasks may go to test managers outside it.',
        'TESTING role: overall responsibility for the engineering/technical side. Focus: analysis, design, implementation, execution.',
        'Roles ≠ people: one person can hold both; the management role may be a team leader, test manager, development manager, etc.'
      ],
      examInsights: [
        'A-Q6 — Testing-role tasks: configure test environments, analyze the test basis, design/execute tests. Management-role tasks: plan, monitor, control, report, complete.',
        'D-Q6 — "Create the test completion report" = test MANAGEMENT role (completion is a management-focused activity).',
        'C-Q6 — In Agile, test management tasks spanning multiple teams may be performed by test managers OUTSIDE the development team.'
      ]
    },
    {
      id: '1.5.1',
      title: 'Generic Skills Required for Testing',
      level: 'K2',
      type: 'skim',
      summary: 'Key tester skills: testing knowledge (effectiveness via techniques); thoroughness/carefulness/curiosity/attention to detail/methodical work (hard-to-find defects); communication + active listening + team play (interact with stakeholders, report defects constructively); analytical/critical/creative thinking; technical knowledge (efficiency via tools); domain knowledge (talk to end users). Testers bear bad news — confirmation bias makes results hard to accept, so communicate defects constructively.',
      examInsights: [
        'B-Q7 — A tester with prior DOMAIN experience (e.g. ex-pilot testing avionics) exemplifies domain knowledge as a generic tester skill.',
        'A-Q7 — Domain knowledge, attention to detail, and communication rank as MOST important; "ability to write production code fast" is the classic distractor.'
      ]
    },
    {
      id: '1.5.2',
      title: 'Whole Team Approach',
      level: 'K1',
      type: 'skim',
      summary: 'From Extreme Programming: any team member with the needed skills can perform any task; everyone is responsible for quality; shared (physical or virtual) workspace aids communication. Benefits: better team dynamics, enhanced communication/collaboration, synergy from leveraging all skill sets. Testers collaborate with business representatives on acceptance tests and with developers on test strategy/automation, transferring testing knowledge. Not always appropriate — e.g. safety-critical contexts may need high test independence.',
      examInsights: [
        'B-Q8 / C-Q7 / D-Q7 — The advantage is always one of: team synergy, improved team dynamics, improved communication/collaboration. Appears in every exam set.',
        'A-Q8 — Whole-team interaction example: testers HELP business representatives create suitable acceptance tests.',
        'TRAP — "Everyone can do any task" does NOT mean testers are unnecessary, and the approach is NOT recommended where high independence is needed (safety-critical).'
      ]
    },
    {
      id: '1.5.3',
      title: 'Independence of Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Independence levels: author (none) → author\'s peers, same team (some) → testers outside the team, same organization (high) → testers outside the organization (very high). Best practice: multiple levels at once (developers do component (+integration) testing, test team does system (+integration) testing, business reps do acceptance).',
        'Benefit: independent testers see different failures/defects thanks to different backgrounds and cognitive biases; they can verify, challenge, or disprove stakeholder assumptions. Independence is NOT a replacement for familiarity — developers efficiently find many defects in their own code.',
        'Drawbacks: isolation from the dev team, communication problems, adversarial dynamics; developers may lose their sense of responsibility for quality; independent testers may be seen as a bottleneck or blamed for delays.'
      ],
      examInsights: [
        'C-Q8 — Correct: independent testers find defects BECAUSE of their different technical perspectives and biases.',
        'D-Q8 — Sorting benefits vs drawbacks: "recognize different kinds of failures" = benefit; "may be seen as a bottleneck / lose collaboration" = drawback; "developers lose responsibility for quality" = drawback.'
      ]
    },
  ],
};
