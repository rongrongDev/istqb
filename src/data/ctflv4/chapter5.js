// CTFL v4.0 — Chapter 5: Managing the Test Activities
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 5,
  title: 'Managing the Test Activities',
  time: '335 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: 'Nine of the 40 questions, with three K3 skills you must practice: estimation calculations (three-point formula and ratios), test case prioritization under dependencies, and writing/critiquing defect reports. Also memorize the testing quadrants (asked every exam), entry vs exit criteria, and product vs project risks.',
  sections: [
    {
      id: '5.1.1',
      title: 'Purpose and Content of a Test Plan',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'A test plan describes objectives, resources, and processes: documents means and schedule for achieving test objectives; ensures activities meet criteria; communication vehicle for team and stakeholders; demonstrates adherence to (or justified deviation from) test policy and test strategy. Planning forces confronting future challenges: risks, schedules, people, tools, costs, effort.',
        'Typical content: context of testing (scope, objectives, test basis); assumptions & constraints; stakeholders (roles, hiring/training needs); communication (forms, frequency, templates); risk register (product + project risks); test approach (levels, types, techniques, deliverables, entry/exit criteria, independence, metrics, test data requirements, environment requirements, deviations); budget & schedule.'
      ],
      examInsights: [
        'C-Q30 ("NOT a purpose") — A test plan does NOT define individual test data/expected results for component tests — that\'s test design/implementation detail, not planning.'
      ]
    },
    {
      id: '5.1.2',
      title: "Tester's Contribution to Iteration and Release Planning",
      level: 'K1',
      type: 'skim',
      summary: 'RELEASE planning (whole release, product backlog, splitting big stories): testers write testable user stories + acceptance criteria, join project & quality risk analyses, estimate test effort per story, determine the test approach, plan release testing. ITERATION planning (one iteration, iteration backlog): testers do detailed risk analysis of stories, determine story TESTABILITY, break stories into (testing) tasks, estimate effort for all testing tasks, identify/refine functional and non-functional aspects of the test object.',
      examInsights: [
        'A-Q30 — Match activities to the right planning kind: detailed story risk analysis + task breakdown = ITERATION planning; test approach + story writing = RELEASE planning.'
      ]
    },
    {
      id: '5.1.3',
      title: 'Entry Criteria and Exit Criteria',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'ENTRY criteria = preconditions to START an activity (unmet → harder, slower, costlier, riskier). Typical: availability of resources (people, tools, environments, test data, budget, time); availability of testware (test basis, testable requirements, user stories, test cases); initial quality level (all smoke tests passed).',
        'EXIT criteria = what must be achieved to declare an activity COMPLETE. Typical: thoroughness measures (coverage achieved, unresolved defects count, defect density, failed test cases) and binary yes/no criteria (planned tests executed, static testing done, defects reported, regression tests automated).',
        'Running out of TIME or BUDGET is a valid exit criterion — IF stakeholders reviewed and accepted the risk of going live without further testing.',
        'Agile names: exit criteria ≈ Definition of Done; entry criteria for a story to start development/testing ≈ Definition of Ready.'
      ],
      examInsights: [
        'A-Q31 / D-Q30 (TWO answers) — Exit criteria examples: defect density reached, regression automated, coverage %, budget exhausted. Distractors are entry criteria (smoke tests passed, environment ready) in disguise.',
        'B-Q30 — DevOps pipeline gates: "static analysis reports no high-severity warnings" as a criterion before proceeding = exit criterion of that step / entry to the next.'
      ]
    },
    {
      id: '5.1.4',
      title: 'Estimation Techniques',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Estimates rest on assumptions and carry estimation error; small tasks estimate more accurately — decompose large ones.',
        'RATIOS (metrics-based): standard ratios from the organization\'s own historical projects. Dev:test was 3:2 and new dev effort = 600 pd → test = 400 pd.',
        'EXTRAPOLATION (metrics-based): measure early in THIS project, extrapolate the remainder (e.g. average of the last three iterations). Great fit for iterative SDLCs.',
        'WIDEBAND DELPHI (expert-based, iterative): experts estimate IN ISOLATION → results collected → out-of-range estimates discussed → re-estimate in isolation → repeat until consensus. PLANNING POKER is its Agile variant with numbered cards.',
        'THREE-POINT (expert-based): optimistic a, most likely m, pessimistic b. E = (a + 4m + b) / 6; SD = (b − a) / 6. Example: a=6, m=9, b=18 → E = 10, SD = 2 → 10±2 person-hours.'
      ],
      examInsights: [
        'A-Q32 CALCULATION — Apply E = (a+4m+b)/6 exactly; the distractors are the plain average and other mis-weightings.',
        'B-Q31 — Ratios: scale by the historical ratio, watch units (money vs person-days).',
        'C-Q31 — Extrapolation: usually "average of previous iterations" — compute the mean, don\'t overthink.',
        'D-Q31 — Read what\'s being estimated (one tester, four test cases): sum per-case estimates; beware of red-herring numbers.'
      ]
    },
    {
      id: '5.1.5',
      title: 'Test Case Prioritization',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Three strategies: RISK-BASED (order from risk analysis — highest-risk coverage first), COVERAGE-BASED (highest coverage first; variant: ADDITIONAL coverage prioritization — each next test adds the most NEW coverage), REQUIREMENTS-BASED (stakeholder-set requirement priorities, traced to test cases — most important requirements first).',
        'Priority order bends to DEPENDENCIES: if a high-priority test depends on a lower-priority one, the lower-priority test runs first. Also constrained by resource availability (tools, environments, people with time windows).'
      ],
      examInsights: [
        'A-Q33 / C-Q32 — Dependency puzzles: build the dependency chain first, then order by priority within what\'s allowed. The first test to run is often NOT the highest-priority one.',
        'B-Q32 — Requirements-based: trace test cases to requirement priorities and pick the test covering the top requirement.',
        'D-Q32 — Additional coverage prioritization over a traceability matrix: first pick the test covering most requirements, then the test covering the most NOT-YET-covered ones.'
      ]
    },
    {
      id: '5.1.6',
      title: 'Test Pyramid',
      level: 'K1',
      type: 'skim',
      summary: 'The pyramid models test GRANULARITY and supports automation + effort allocation. Higher layer = lower granularity, lower isolation (more dependencies), higher execution time. Bottom: many small, isolated, fast tests of small functionality (unit). Top: few complex, slow, end-to-end tests of large functionality. Layer names vary: Cohn\'s original = unit / service / UI; another popular version = unit (component) / integration (component integration) / end-to-end.',
      examInsights: [
        'C-Q33 KEY — The pyramid shows "tests may have different granularity". Simple recall — don\'t overcomplicate.'
      ]
    },
    {
      id: '5.1.7',
      title: 'Testing Quadrants',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Marick\'s quadrants group test levels with test types/activities/techniques/work products in Agile, along two axes: business-facing vs technology-facing × support the team (guide development) vs critique the product (measure against expectations).',
        'Q1 = technology + support: component tests, component integration tests — automated, in CI.',
        'Q2 = business + support: functional tests, examples, user story tests, UX prototypes, API testing, simulations — check acceptance criteria; manual or automated.',
        'Q3 = business + critique: exploratory testing, usability testing, user acceptance testing — user-oriented, often manual.',
        'Q4 = technology + critique: smoke tests and non-functional tests (EXCEPT usability) — often automated.',
        'Value: management visualization (all types/levels included in the SDLC) and a vocabulary to explain test types to all stakeholders.'
      ],
      examInsights: [
        'Asked EVERY exam (A-Q34, B-Q33, C-Q34, D-Q33). Memorize the grid; usability lives in Q3 (business-facing) even though other non-functional tests sit in Q4.',
        'A-Q34 MATCHING — Usability→Q3, component integration→Q1, functional/story tests→Q2, performance/smoke→Q4.',
        'D-Q33 — Benefit answer: quadrants help NON-TECHNICAL stakeholders understand the different test types.'
      ]
    },
    {
      id: '5.2.1',
      title: 'Risk Definition and Risk Attributes',
      level: 'K1',
      type: 'skim',
      summary: 'Risk = potential event/hazard/threat/situation whose occurrence causes an adverse effect. Two factors: risk LIKELIHOOD (probability, 0 < p < 1) and risk IMPACT (harm — the consequences). Together they express the RISK LEVEL: higher level = more important treatment. Quantitatively, risk level = likelihood × impact.',
      examInsights: [
        'D-Q34 CALCULATION — Given risk level and likelihood, solve impact = level ÷ likelihood ($1,000 ÷ 0.5 = $2,000). The formula works in all directions.'
      ]
    },
    {
      id: '5.2.2',
      title: 'Project Risks and Product Risks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'PROJECT risks — management & control of the project: organizational issues (delivery delays, inaccurate estimates, cost cutting), people issues (skills, conflicts, communication, staffing), technical issues (scope creep, poor tool support), supplier issues (third-party failure, bankruptcy). Impact = schedule, budget, scope.',
        'PRODUCT risks — the product\'s quality characteristics (ISO 25010): missing/wrong functionality, incorrect calculations, runtime errors, poor architecture, inefficient algorithms, inadequate response time, poor UX, security vulnerabilities. Consequences: user dissatisfaction; loss of revenue/trust/reputation; third-party damage; high maintenance costs, help-desk overload; criminal penalties; in extreme cases physical damage, injuries, death.'
      ],
      examInsights: [
        'D-Q35 (TWO answers) — Product risks = quality characteristics of the PRODUCT (poor architecture, slow response time). Staff shortage, supplier bankruptcy, schedule slips = project risks.',
        'RULE OF THUMB — If it materializes in the shipped software → product risk; if it hits schedule/budget/scope → project risk.'
      ]
    },
    {
      id: '5.2.3',
      title: 'Product Risk Analysis',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Goal: awareness of product risk to focus test effort so RESIDUAL product risk is minimized; starts early in the SDLC. Consists of risk IDENTIFICATION (comprehensive risk list — brainstorming, workshops, interviews, cause-effect diagrams) + risk ASSESSMENT (categorize, determine likelihood/impact/level, prioritize, propose handling). Categorization helps assign mitigation (same category ≈ similar mitigation).',
        'Assessment can be quantitative (level = likelihood × impact), qualitative (risk matrix), or mixed.',
        'Results steer testing: determine test scope; determine test levels and propose test types; determine techniques and coverage; estimate test effort per task; prioritize to find critical defects early; identify non-testing activities that reduce risk.'
      ],
      examInsights: [
        'C-Q35 KEY — "The assessed risk level helps select the rigor/thoroughness of testing" — the canonical influence of risk analysis on scope.'
      ]
    },
    {
      id: '5.2.4',
      title: 'Product Risk Control',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Risk control = all measures responding to identified & assessed risks = risk MITIGATION (implement the proposed actions to reduce risk level) + risk MONITORING (check mitigation works, gather info to improve assessment, spot emerging risks).',
        'Response options: mitigation by testing, risk ACCEPTANCE, risk TRANSFER, CONTINGENCY plan.',
        'Mitigation by testing: pick testers with the right experience/skills for the risk type; appropriate level of test independence; reviews and static analysis; appropriate techniques and coverage levels; appropriate test types for the affected quality characteristics; dynamic testing incl. regression testing.'
      ],
      examInsights: [
        'A-Q35 — Performance testing in a production-like environment in response to a response-time risk = risk MITIGATION.',
        'B-Q34 MATCHING — Map each risk to its response: extra testing = mitigation; insurance/outsourcing = transfer; "live with it" = acceptance; fallback procedure = contingency plan.'
      ]
    },
    {
      id: '5.3.1',
      title: 'Metrics Used in Testing',
      level: 'K1',
      type: 'skim',
      summary: 'Monitoring gathers metrics showing progress vs schedule/budget, current quality of the test object, and effectiveness of test activities. Seven groups: PROJECT PROGRESS (task completion, resource usage, test effort); TEST PROGRESS (implementation/environment progress, cases run/not run, passed/failed, execution time); PRODUCT QUALITY (availability, response time, mean time to failure); DEFECT (found/fixed counts + priorities, defect density, defect detection percentage); RISK (residual risk level); COVERAGE (requirements, code); COST (cost of testing, organizational cost of quality).',
      examInsights: [
        'B-Q35 — Mean time to failure = PRODUCT QUALITY metric (not defect, not progress). Learn one example per group; questions ask "which group does X belong to".'
      ]
    },
    {
      id: '5.3.2',
      title: 'Purpose, Content and Audience for Test Reports',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'TEST PROGRESS reports: support ongoing test control DURING testing; regular (daily/weekly); content: testing period, progress vs plan (ahead/behind + deviations), impediments + workarounds, test metrics, new/changed risks, testing planned next period.',
        'TEST COMPLETION reports: summarize a completed activity (level, cycle, iteration) — ideally when exit criteria met; built FROM progress reports + other data; content: test summary, evaluation of testing & product quality vs the plan/objectives/exit criteria, deviations from plan (schedule/duration/effort), impediments + workarounds, metrics from progress reports, unmitigated risks + unfixed defects, lessons learned.',
        'Audience shapes formality and frequency: same-team progress reporting = frequent + informal; completion reporting = templated + once. ISO/IEC/IEEE 29119-3 has templates (progress reports = "test status reports").'
      ],
      examInsights: [
        'C-Q36 — Test COMPLETION makes the most use of test progress reports (it consolidates them).',
        'D-Q36 ("NOT a purpose") — Per-defect reproduction detail belongs in DEFECT reports, not test reports.'
      ]
    },
    {
      id: '5.3.3',
      title: 'Communicating the Status of Testing',
      level: 'K2',
      type: 'skim',
      summary: 'Means vary with management concerns, org strategies, regulations, or (self-organizing teams) team choice: verbal communication, dashboards (CI/CD dashboards, task boards, burn-down charts), electronic channels (email, chat), online documentation, formal test reports — combinable. More formal communication suits DISTRIBUTED teams (geography, time zones). Tailor content per stakeholder interest.',
      examInsights: [
        'A-Q36 — Burn-down chart = the agile work-remaining-over-time visualization.',
        'B-Q36 — Co-located stakeholders + immediate concern → face-to-face/verbal beats formal reports.'
      ]
    },
    {
      id: '5.4',
      title: 'Configuration Management',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'CM identifies, controls, and tracks work products (test plans, strategies, conditions, cases, scripts, results, logs, reports) as CONFIGURATION ITEMS. Complex items (test environment): CM records constituent items, relationships, versions.',
        'Approved for testing → the item becomes a BASELINE, changeable only via formal change control. New baselines record changes; you can REVERT to a previous baseline to reproduce previous test results.',
        'CM guarantees for testing: all configuration items (incl. test items) uniquely identified, version controlled, change-tracked, related to each other (traceability through the test process); documentation and software items unambiguously referenced in testware.',
        'In DevOps pipelines, automated CM is normally included (CI/CD/continuous deployment).'
      ],
      examInsights: [
        'A-Q37 / D-Q37 — Scenario answer: needing the right VERSION of a script/environment/test object to reproduce or update = configuration management.',
        'B-Q37 — CM value: given the environment\'s version number, the CM tool can list its constituent items and versions.',
        'C-Q37 ("NOT an example") — Defect STATUS tracking is defect management, not CM.'
      ]
    },
    {
      id: '5.5',
      title: 'Defect Management',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Reported anomalies may be real defects or something else (false positive, change request) — resolved while processing the report. Minimum process: workflow from discovery to closure + classification rules: log → analyze & classify → decide response (fix / keep as is) → close. All stakeholders follow it; handle static-testing (esp. static analysis) findings similarly.',
        'Defect report objectives: give resolvers sufficient information; track work product quality; feed process improvement ideas.',
        'Dynamic-testing defect report contents: unique identifier; title/short summary; date observed, issuing organization, author + role; test object + test environment identification; context (test case, activity, SDLC phase, technique/checklist/test data); FAILURE DESCRIPTION enabling reproduction (steps, logs, dumps, screenshots, recordings); EXPECTED vs ACTUAL results; SEVERITY (impact degree); PRIORITY to fix; STATUS (open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected); references (e.g. the test case). Tools auto-fill some (id, date, author, initial status). ISO 29119-3 calls them incident reports.'
      ],
      examInsights: [
        'K3 in every exam (A-Q38, B-Q38, C-Q38, D-Q38) — given a defect report, spot what\'s MISSING (usually: test environment/test item identification, version numbers, or reproduction data like which inputs failed).',
        'B-Q38 — A good title summarizes the essence ("duplicates disregarded while sorting"), not just "it fails".',
        'SEVERITY vs PRIORITY — impact on stakeholders vs urgency of fixing; they are separate fields and can diverge.'
      ]
    },
  ],
};
