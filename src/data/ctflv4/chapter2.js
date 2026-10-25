// CTFL v4.0 — Chapter 2: Testing Throughout the Software Development Lifecycle
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 2,
  title: 'Testing Throughout the SDLC',
  time: '130 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: 'Six of the 40 questions. Know the four good testing practices by heart (asked in every exam set), the three test-first approaches (TDD/ATDD/BDD — one is asked every time), the five test levels with their typical failures, and the confirmation-vs-regression distinction. Maintenance triggers (modification, environment change, retirement) close the chapter.',
  sections: [
    {
      id: '2.1.1',
      title: 'Impact of the SDLC on Testing',
      level: 'K2',
      type: 'skim',
      summary: 'SDLC models: sequential (waterfall, V-model), iterative (spiral, prototyping), incremental (Unified Process); detailed methods/practices include ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, TDD. The chosen SDLC affects scope & timing of test activities, detail of documentation, choice of techniques/approach, extent of automation, and tester roles. Sequential: testers join reviews/analysis/design early but dynamic testing only late (code exists late). Iterative/incremental: every iteration delivers an increment needing static + dynamic testing at all levels; frequent delivery demands fast feedback and extensive regression testing. Agile: lightweight documentation, heavy automation, manual testing mostly experience-based.',
      examInsights: [
        'B-Q9 KEY — In a sequential model, dynamic testing can only happen LATE in the SDLC (executable code arrives late). Distractors claim early dynamic testing or no static testing in sequential models.'
      ]
    },
    {
      id: '2.1.2',
      title: 'SDLC and Good Testing Practices',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Four good practices, valid for EVERY SDLC model: (1) for every development activity there is a corresponding test activity — all development gets quality control; (2) each test level has specific, different test objectives — comprehensive yet non-redundant testing; (3) test analysis & design for a level begins during the corresponding development phase — early testing; (4) testers review work products as soon as drafts exist — shift left.'
      ],
      examInsights: [
        'Asked in ALL FOUR exams (A-Q9, B-Q10, C-Q9, D-Q9) — memorize the four practices verbatim; the correct option is always one of them, restated.',
        'A-Q9 TRAP — The practices apply in sequential AND incremental AND iterative models — not just Agile, not just waterfall.'
      ]
    },
    {
      id: '2.1.3',
      title: 'Testing as a Driver for Software Development',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Test-first approaches: TDD, ATDD, BDD — all define tests BEFORE the code, implementing early testing / shift left, and suit iterative development.',
        'TDD: coding is directed by test cases (instead of extensive design); write tests → write code to satisfy them → refactor both.',
        'ATDD: tests derived from ACCEPTANCE CRITERIA during system design; the application part is developed to satisfy those tests.',
        'BDD: desired behavior expressed as natural-language test cases stakeholders understand — usually Given/When/Then — then automatically translated into executable tests.',
        'In all three, the tests may persist as automated tests guarding future changes and refactoring.'
      ],
      examInsights: [
        'Asked in every exam (A-Q10, B-Q11, C-Q10, D-Q10) — the answer is simply recognizing TDD/ATDD/BDD as a test-first approach or picking its definition.',
        'Match by keyword: acceptance criteria → ATDD; Given/When/Then natural language → BDD; tests direct coding + refactor cycle → TDD.'
      ]
    },
    {
      id: '2.1.4',
      title: 'DevOps and Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'DevOps = organizational approach creating synergy between development (incl. testing) and operations, with common goals, cultural shift, equal value of functions. Promotes team autonomy, fast feedback, integrated toolchains, CI/CD.',
        'Testing benefits: fast feedback on code quality and regressions; CI promotes shift left (developers submit quality code with component tests + static analysis); CI/CD gives stable test environments; more visibility of non-functional characteristics; delivery-pipeline automation reduces repetitive manual testing; regression risk minimized by broad automated regression suites.',
        'Risks/challenges: the delivery pipeline must be defined and established; CI/CD tools must be introduced and maintained; test automation needs extra resources and is hard to establish and maintain.',
        'Manual testing — especially from the user\'s perspective — is STILL needed despite the automation.'
      ],
      examInsights: [
        'B-Q12 — Correct: frequent releases demand extensive automation; manual user-perspective testing remains necessary.',
        'D-Q11 — The typical DevOps CHALLENGE: setting up test automation in the delivery pipeline (benefits like fast feedback are distractors for "challenge" questions).'
      ]
    },
    {
      id: '2.1.5',
      title: 'Shift Left',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Shift left = early testing: performing testing earlier in the SDLC without neglecting later testing. Good practices: review specifications from the tester\'s perspective (finds ambiguity, incompleteness, inconsistency); write test cases before code and run code in a test harness during implementation; use CI/CD for fast feedback and automated component tests with submitted code; complete static analysis before dynamic testing or automate it; do non-functional testing from component level where possible (usually it happens late).',
        'Cost profile: extra training/effort/cost EARLY, expected savings LATER. Stakeholder buy-in is essential.'
      ],
      examInsights: [
        'C-Q11 KEY — Best description: "where cost-effective, test activities are moved earlier in the SDLC".',
        'A-Q11 TRAP — "NOT an example of shift left": distractors are the genuine practices (early reviews, tests before code, static analysis first); the odd one out involves no earlier testing at all.'
      ]
    },
    {
      id: '2.1.6',
      title: 'Retrospectives and Process Improvement',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Held at project/iteration end, at release milestones, or when needed; participants include developers, architects, product owner, business analysts — not only testers. Three questions: what succeeded and should be retained? what could be improved? how to incorporate improvements and keep successes?',
        'Results are recorded and normally part of the TEST COMPLETION REPORT. Critical for continuous improvement — recommended improvements must be followed up.',
        'Benefits for testing: increased test effectiveness/efficiency, higher testware quality (joint review of test processes), team bonding and learning, better test basis quality (requirements deficiencies addressed), better dev–test cooperation.'
      ],
      examInsights: [
        'A-Q12 — Convincing argument: process weaknesses identified in the retrospective can be analyzed and improve testing next iteration.',
        'C-Q12 TRAP ("LEAST likely") — End users are NOT retrospective participants; benefits accrue to the team, not end-user understanding.',
        'D-Q12 — Retrospectives let testers identify what to retain vs improve — grounded in the three standard questions.'
      ]
    },
    {
      id: '2.2.1',
      title: 'Test Levels',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Test level = group of test activities organized and managed together, an instance of the test process at a given development phase. Five levels: COMPONENT (unit) testing — components in isolation, needs test harnesses/unit frameworks, normally done by developers in their environment. COMPONENT INTEGRATION — interfaces/interactions between components; depends on integration strategy (bottom-up, top-down, big-bang). SYSTEM testing — overall behavior of the whole system, end-to-end functional + non-functional; often an independent test team; based on system specifications; simulations of sub-systems possible. SYSTEM INTEGRATION — interfaces to other systems and external services; environment should resemble operational. ACCEPTANCE — validation + readiness for deployment, ideally by intended users; forms: UAT, operational, contractual, regulatory, alpha, beta.',
        'Levels are distinguished by: test object, test objectives, test basis, typical defects/failures, approach & responsibilities. In sequential models exit criteria of one level feed entry criteria of the next; levels may overlap in time in iterative models.'
      ],
      examInsights: [
        'A-Q13 MATCHING — Failures in end-to-end system behavior → system testing; interface/interaction failures between components → component integration; single-component logic failures → component testing; failures against external services → system integration.',
        'B-Q13 — Security testing of the whole system by an independent test team = SYSTEM testing (non-functional at system level).',
        'C-Q13 — "Validating the system fulfills business needs / readiness for release, done by users" = ACCEPTANCE testing.'
      ]
    },
    {
      id: '2.2.2',
      title: 'Test Types',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'FUNCTIONAL testing: evaluates WHAT the test object does; objective = functional completeness, correctness, appropriateness.',
        'NON-FUNCTIONAL testing: "how well" the system behaves; ISO/IEC 25010 characteristics: performance efficiency, compatibility, usability (interaction capability), reliability, security, maintainability, portability (flexibility), safety. Can start early (reviews, component tests); many non-functional tests derive from functional ones (same test, extra constraint); late discovery of non-functional defects is a serious project threat; may need special environments (usability lab).',
        'BLACK-BOX testing: specification-based, from documentation independent of internal structure; objective = behavior vs specification.',
        'WHITE-BOX testing: structure-based, from implementation/internal structure (code, architecture, workflows, data flows); objective = acceptable coverage of the structure.',
        'All four types apply at ALL test levels (focus differs); test techniques derive conditions/cases for all of them.'
      ],
      examInsights: [
        'D-Q13 — "Checks the sort function puts elements in the right order" = FUNCTIONAL (what it does). Timing/how-fast variants = non-functional.',
        'TRAP — Non-functional testing is NOT only late-SDLC: it can and should start at reviews/component level.'
      ]
    },
    {
      id: '2.2.3',
      title: 'Confirmation Testing and Regression Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'CONFIRMATION testing: confirms the original defect is fixed. Ways: re-run all tests that failed because of the defect, and/or add new tests for the fix changes. Minimum (time/money short): just re-run the failure-reproducing steps and check the failure is gone.',
        'REGRESSION testing: confirms a change (even a confirmed fix) caused no adverse consequences elsewhere — same component, other components, or other connected systems; can extend to the environment. Do impact analysis first to scope it. Suites grow every release and are run many times → prime automation candidate, started early; in CI/DevOps include automated regression tests, possibly at several levels.',
        'Order after a fix: confirmation testing first, then regression testing. Both are needed at every test level where defects are fixed or changes made.'
      ],
      examInsights: [
        'C-Q14 KEY — After a fix: confirmation testing THEN regression testing, in that order.',
        'B-Q14 — Regression testing targets UNCHANGED code/parts for side effects; confirmation targets the fix itself.',
        'A-Q14 SCENARIO — Select which tests to re-run: failed tests covering the fixed AC = confirmation; passing tests around changed code = regression. Count carefully which ACs/tests the defect touched.'
      ]
    },
    {
      id: '2.3',
      title: 'Maintenance Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Maintenance categories (ISO/IEC 14764): corrective, adaptive (environment changes), performance/maintainability improvement — via planned releases or unplanned hot fixes. Impact analysis may precede the change decision. Testing changes to an operational system = evaluate the change\'s success + regression-check the unchanged rest (usually most of the system).',
        'Scope of maintenance testing depends on: degree of risk of the change, size of the existing system, size of the change.',
        'Triggers: MODIFICATIONS (planned enhancements, corrective changes, hot fixes); UPGRADES/MIGRATIONS of the environment (platform moves — test the new environment AND changed software; data conversion tests when migrating data); RETIREMENT (end of life — test data archiving for long retention, plus restore/retrieval procedures).'
      ],
      examInsights: [
        'D-Q14 — Removing a feature from an operational system (e.g. a refund option) = a modification trigger for maintenance testing.',
        'TRAP — Retirement still involves testing: archiving, restore and retrieval — "no testing needed when switching off" is always wrong.'
      ]
    },
  ],
};
