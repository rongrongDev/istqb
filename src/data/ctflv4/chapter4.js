// CTFL v4.0 — Chapter 4: Test Analysis and Design
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 4,
  title: 'Test Analysis and Design',
  time: '390 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: 'The biggest chapter: 11 of the 40 questions, and the only chapter with K3 (apply) objectives. You WILL have to derive test cases: equivalence partitions, 2-value and 3-value BVA, decision tables, state transition coverage, and ATDD. Practice the technique mechanics until they are automatic — every exam has one calculation question per black-box technique.',
  sections: [
    {
      id: '4.1',
      title: 'Test Techniques Overview',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Test techniques support test analysis (what to test) and test design (how to test); they build a small but sufficient set of test cases systematically, help define test conditions, identify coverage items, and identify test data.',
        'BLACK-BOX (specification-based): based on specified behavior, no reference to internal structure → test cases are implementation-independent; they survive implementation changes if required behavior stays the same.',
        'WHITE-BOX (structure-based): based on internal structure and processing → test cases depend on the design/implementation and can only be created after design or implementation exists.',
        'EXPERIENCE-BASED: use testers\' knowledge and experience; effectiveness depends heavily on tester skill; find defects the systematic techniques miss — COMPLEMENTARY to black-box and white-box.'
      ],
      examInsights: [
        'C-Q19 KEY — The MAIN difference between technique categories is the TEST BASIS (specification vs structure vs experience).',
        'D-Q19 — Given only requirements/specs at system level → black-box techniques.',
        'A-Q19 — Experience-based hallmark: heavy reliance on the tester\'s knowledge of the software and its environment.'
      ]
    },
    {
      id: '4.2.1',
      title: 'Equivalence Partitioning',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'EP divides data into partitions whose elements the test object is expected to process identically — one test per partition suffices (if one value finds a defect, any value in that partition should).',
        'Partitions can be identified for inputs, outputs, configuration items, internal values, time-related values, interface parameters; continuous or discrete, ordered or unordered, finite or infinite. Partitions must NOT overlap and must be NON-EMPTY.',
        'Valid partition = valid values; invalid partition = invalid values (definitions vary by team: "should be processed" vs "spec defines processing").',
        'Coverage items = the partitions. 100% coverage = every partition (including invalid ones) exercised at least once. Coverage = exercised partitions / total partitions × 100%.',
        'Multiple parameter sets → EACH CHOICE coverage: each partition from each set exercised at least once — combinations are NOT required. Minimum number of test cases = size of the largest partition set (valid partitions can be combined in one test; invalid ones usually tested one at a time).'
      ],
      examInsights: [
        'A-Q20 / D-Q20 CALCULATION — Each Choice: min tests = max(#partitions per parameter). E.g. 4 floor-count partitions × 3 price partitions → 4 tests.',
        'C-Q20 — PIN validator: pick one value per partition (too short, too long, valid, non-numeric...). Check the option set covers every partition exactly.',
        'B-Q20 — Identify which values fall in the SAME partition (they add no coverage) vs different partitions.',
        'TRAP — Combining multiple INVALID values in one test can mask defects; standard practice pairs each invalid partition with valid values for the other parameters.'
      ]
    },
    {
      id: '4.2.2',
      title: 'Boundary Value Analysis',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'BVA exercises the boundaries of ORDERED partitions only (min and max of each partition are the boundary values; between two same-partition elements everything must be in that partition). Developers err at boundaries: misplaced above/below intended position, or omitted.',
        '2-VALUE BVA: per boundary, coverage items = the boundary value + its closest neighbor in the ADJACENT partition. 100% = all identified boundary values (and neighbors) exercised. For a partition [a..b]: test a-1, a, b, b+1.',
        '3-VALUE BVA: per boundary, coverage items = the boundary value + BOTH neighbors. Some coverage items are not boundary values. For [a..b]: a-1, a, a+1, b-1, b, b+1.',
        '3-value is more rigorous: "if (x ≤ 10)" implemented as "if (x = 10)" — 2-value data (10, 11) misses it; 3-value\'s x=9 catches it.',
        'Coverage = exercised coverage items / total coverage items × 100%.'
      ],
      examInsights: [
        'B-Q21 — Password length 1–14 with partitions: enumerate boundaries of each partition, apply 2-value BVA, list the distinct values.',
        'A-Q21 / B-Q22 COVERAGE % — Count total coverage items first, then which ones the given tests exercise. Wrong answers come from forgetting neighbors or double-counting shared values.',
        'D-Q21 — 3-value BVA around a single boundary (e.g. threshold 1°C): values –1, 0, 2, 3 pattern — both neighbors of each boundary.',
        'C-Q21 — 2-value BVA for [100..199]: 99? No — read which range is implemented: values 101, 150, 199, 200 style options test whether you derive boundaries from the RULE, not the code.'
      ]
    },
    {
      id: '4.2.3',
      title: 'Decision Table Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Decision tables record complex logic (business rules): rows = conditions and resulting actions; each column = a decision rule = unique combination of conditions with associated actions.',
        'Limited-entry tables: Boolean values only. Extended-entry: conditions/actions take multiple values (ranges, partitions, discrete values). Notation: T = satisfied, F = not satisfied, "–" = irrelevant for the outcome, N/A = infeasible for this rule; actions: X = occurs, blank = does not.',
        'Full table = every combination of conditions (2^n columns for n Boolean conditions); simplify by deleting infeasible columns; minimize by merging columns where a condition doesn\'t affect the outcome.',
        'Coverage items = columns with FEASIBLE condition combinations. 100% = all such columns exercised. Coverage = exercised columns / feasible columns × 100%.',
        'Strengths: systematically finds ALL condition combinations, exposes gaps and contradictions in requirements. Weakness: rules grow exponentially with conditions → use minimized tables or risk-based selection.'
      ],
      examInsights: [
        'A-Q22 / C-Q22 — Given inputs, find the matching rule/column (evaluate each condition, respect "–" entries), or find which rule a test exercises.',
        'B-Q22 COVERAGE % — Coverage counts FEASIBLE columns only; tests hitting the same column twice count once.',
        'D-Q22 — Derive the expected ACTION for a described person from the table — translate the scenario into T/F per condition first, then read the column.'
      ]
    },
    {
      id: '4.2.4',
      title: 'State Transition Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'State diagram: states + valid transitions; transition = event [guard condition] / action — instantaneous, may trigger actions. State table: rows = states, columns = events(+guards), cells = transitions (target state + actions); EMPTY CELLS = invalid transitions (the table shows them explicitly, the diagram does not).',
        'Test case = sequence of events → sequence of state changes; one test usually covers several transitions.',
        'ALL STATES coverage: items = states; weakest — achievable without exercising all transitions.',
        'VALID TRANSITIONS coverage (0-switch): items = single valid transitions; the MOST WIDELY USED criterion. Full valid-transitions coverage guarantees full all-states coverage.',
        'ALL TRANSITIONS coverage: items = everything in the state table — exercise all valid transitions AND attempt invalid ones; test only ONE invalid transition per test case (avoids defect masking). Guarantees both weaker coverages; minimum requirement for mission- and safety-critical software.'
      ],
      examInsights: [
        'A-Q23 / C-Q23 CALCULATION — "Minimum number of test cases for 100% valid transitions coverage" — trace the diagram; the answer is how many event-sequences you need to walk every arrow (often fewer than the number of transitions).',
        'B-Q23 / D-Q23 — Given a sequence of events, determine the resulting states, or pick the sequence achieving a coverage goal. Simulate cell by cell — guard conditions gate transitions.',
        'TRAP — All-states coverage %: exercised STATES / total states — a single clever path can hit 100% states while leaving transitions uncovered.'
      ]
    },
    {
      id: '4.3.1',
      title: 'Statement Testing and Statement Coverage',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Coverage items = EXECUTABLE statements. Coverage = exercised statements / total executable statements × 100%.',
        '100% statement coverage: every executable statement runs at least once → every statement CONTAINING a defect has been executed, which MAY cause a failure demonstrating it.',
        'But it does NOT detect all defects: data-dependent ones survive (division by zero only fails when denominator = 0), and it does NOT guarantee all decision logic/branches are tested.'
      ],
      examInsights: [
        'A-Q24 / D-Q24 KEY — What 100% statement coverage guarantees: each defective statement was EXECUTED (not: each defect found, not: all branches covered).',
        'B-Q24 — T1 = 40%, T2 = 80% coverage of the same code → they must share at least one statement (40+80 > 100). Set-logic questions about overlapping coverage appear.'
      ]
    },
    {
      id: '4.3.2',
      title: 'Branch Testing and Branch Coverage',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Branch = transfer of control between two nodes of the control flow graph — unconditional (straight-line code) or conditional (decision outcome: if true/false, switch case, loop exit/continue).',
        'Coverage items = branches. Coverage = exercised branches / total branches × 100%. 100% = ALL branches, unconditional AND conditional, exercised.',
        'Doesn\'t catch everything: defects needing a SPECIFIC PATH may survive.',
        'BRANCH COVERAGE SUBSUMES STATEMENT COVERAGE: 100% branch ⇒ 100% statement, never vice versa.'
      ],
      examInsights: [
        'B-Q25 — Branch coverage formula: X = branches exercised, Y = TOTAL branches (not decisions, not statements).',
        'C-Q24 CALCULATION — Count branches (edges) in a control flow graph carefully: every edge counts, including the unconditional ones.',
        'KEY — "100% branch coverage implies 100% statement coverage" is true and tested; the reverse is the trap.'
      ]
    },
    {
      id: '4.3.3',
      title: 'The Value of White-Box Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Fundamental strength: the ENTIRE IMPLEMENTATION is considered → finds defects even when the specification is vague, outdated, or incomplete.',
        'Corresponding weakness: cannot detect DEFECTS OF OMISSION — unimplemented requirements have no code to cover.',
        'Usable in static testing too: dry runs of code, reviewing not-yet-executable code, pseudocode, top-down logic modeled as control flow graphs.',
        'Black-box testing alone gives NO measure of actual code coverage; white-box coverage measures are objective, and show where to add tests to raise coverage and confidence.'
      ],
      examInsights: [
        'A-Q25 ("NOT true") — White-box CANNOT identify gaps in requirements implementation (defects of omission) — that claim is the false option.',
        'C-Q25 — Support for black-box: white-box coverage measures objectively evaluate how much code the black-box tests actually reached.',
        'D-Q25 — Why it works with poor specs: test cases are derived from the STRUCTURE, not the specification.'
      ]
    },
    {
      id: '4.4.1',
      title: 'Error Guessing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Anticipates errors, defects, and failures based on the tester\'s knowledge of: how the application worked in the past; typical developer errors and resulting defects; failures seen in similar applications.',
        'Typical targets: input (correct input not accepted, wrong/missing parameters), output (wrong format/result), logic (missing cases, wrong operator), computation (incorrect operand, wrong computation), interfaces (parameter mismatch, incompatible types), data (incorrect initialization, wrong type).',
        'FAULT ATTACKS implement error guessing systematically: create/acquire a list of possible errors, defects, and failures, then design tests to expose them — lists built from experience, defect/failure data, common knowledge of why software fails.'
      ],
      examInsights: [
        'C-Q26 — A LIST of common defects used to design tests = fault attack.',
        'A-Q26 — Error guessing = using knowledge/experience of past failures and typical developer mistakes to anticipate where defects hide.',
        'D-Q26 ("NOT anticipated") — Error guessing anticipates errors/defects/failures, not the ROOT CAUSES of developer behavior (e.g. missing a seminar).'
      ]
    },
    {
      id: '4.4.2',
      title: 'Exploratory Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Tests are SIMULTANEOUSLY designed, executed, and evaluated while the tester LEARNS the test object — used to learn it, probe deeper with focused tests, and cover untested areas.',
        'SESSION-BASED structure: defined time box; TEST CHARTER with test objectives guides the session (objectives ≈ high-level test conditions); coverage items identified and exercised during the session; test session sheets document steps and discoveries; DEBRIEFING with stakeholders afterwards.',
        'Most useful when: specifications are few or inadequate, or testing is under significant time pressure; also complements formal techniques. More effective with experienced, domain-knowledgeable testers with analytical skills, curiosity, creativity.',
        'Can incorporate other test techniques (e.g. equivalence partitioning) within the exploration.'
      ],
      examInsights: [
        'A-Q27 — Scenario: delayed release, little documentation, tight deadline → exploratory testing.',
        'B-Q26 (TWO answers) — Best rationale: not enough time for design+execution separately, AND testers are experienced/domain-savvy.',
        'D-Q27 — TRUE statement: the tester MAY use black-box techniques during exploratory testing — it is not "no techniques allowed".'
      ]
    },
    {
      id: '4.4.3',
      title: 'Checklist-Based Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Design, implement, and execute tests to cover test conditions from a CHECKLIST built from experience, knowledge of what matters to users, or understanding of why/how software fails.',
        'Checklist hygiene: no items checkable automatically; no items better suited as entry/exit criteria; nothing too general. Items are often QUESTIONS, each separately and directly checkable; may reference requirements, GUI properties, quality characteristics; support functional AND non-functional testing (e.g. Nielsen\'s 10 usability heuristics).',
        'Maintenance: entries lose effectiveness as developers learn; add entries for new high-severity defects; update regularly from defect analysis — but keep the list from growing too long.',
        'Without detailed test cases, checklists give guidelines + a degree of consistency; high-level lists → variability in execution → potentially GREATER coverage but LESS repeatability.'
      ],
      examInsights: [
        'B-Q27 — A good checklist item is a specific, directly checkable QUESTION ("Are error messages understandable to the user?"), not a vague goal.',
        'C-Q27 KEY — Two testers, same checklist, different tests → greater coverage, less repeatability. This trade-off is the tested fact.'
      ]
    },
    {
      id: '4.5.1',
      title: 'Collaborative User Story Writing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'User story = a feature valuable to a user or purchaser. The 3 C\'s: CARD (the medium — index card, board entry), CONVERSATION (how the software will be used — documented or verbal), CONFIRMATION (the acceptance criteria).',
        'Standard format: "As a [role], I want [goal], so that I can [business value]" + acceptance criteria.',
        'Collaborative authorship (brainstorming, mind mapping) creates a shared vision across the three perspectives: business, development, testing.',
        'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. If a stakeholder can\'t test a story → it is unclear, not valuable to them, or they just need help testing.'
      ],
      examInsights: [
        'D-Q28 — Collective understanding of HOW the software will be used comes from the CONVERSATION (not the card, not the confirmation).',
        'TRAP — Map the 3 C\'s precisely: card = medium, conversation = usage discussion, confirmation = acceptance criteria.'
      ]
    },
    {
      id: '4.5.2',
      title: 'Acceptance Criteria',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Acceptance criteria = conditions an implementation of the user story must meet to be accepted — effectively the TEST CONDITIONS for the story; usually a product of the Conversation.',
        'Uses: define story scope, reach stakeholder consensus, describe positive AND negative scenarios, serve as the basis for acceptance testing (ATDD), enable accurate planning and estimation.',
        'Two most common formats: SCENARIO-ORIENTED (Given/When/Then, as in BDD) and RULE-ORIENTED (bullet-point verification list, or tabulated input–output mapping). Custom formats are fine if well-defined and unambiguous.'
      ],
      examInsights: [
        'B-Q28 / C-Q28 — Classify the format: Given/When/Then = scenario-oriented; bullet list or input/output table = rule-oriented.',
        'A-Q28 — "Given/When/Then describing an example test" is the scenario-oriented documentation answer.'
      ]
    },
    {
      id: '4.5.3',
      title: 'Acceptance Test-Driven Development (ATDD)',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'ATDD is test-first: test cases BEFORE implementing the user story, created by team members with different perspectives (customers, developers, testers); manual or automated.',
        'Process: (1) SPECIFICATION WORKSHOP — story + acceptance criteria analyzed, discussed, written; incompleteness, ambiguities, defects resolved. (2) CREATE TEST CASES — by the whole team or a tester, based on acceptance criteria; tests = examples of how the software works ("examples" and "tests" interchangeable); techniques from 4.2–4.4 may apply.',
        'Order of tests: positive first (correct behavior, no exceptions, expected activity sequence), then negative testing, then non-functional characteristics (performance efficiency, usability).',
        'Test cases must be stakeholder-understandable (natural-language sentences: preconditions, inputs, postconditions), must cover ALL characteristics of the story, must NOT go beyond the story, and no two tests should cover the same characteristics.',
        'Captured in an automation-framework format, developers automate them while implementing — acceptance tests become EXECUTABLE REQUIREMENTS.'
      ],
      examInsights: [
        'A-Q29 / C-Q29 / D-Q29 APPLICATION — Pick the test that (a) derives from the story\'s acceptance criteria, (b) stays INSIDE story scope, (c) doesn\'t duplicate another test. Options exceeding the story ("also test admin login") are wrong.',
        'B-Q29 — Valid ATDD test = input + expected outcome traceable to an acceptance criterion, phrased so stakeholders understand it.'
      ]
    },
  ],
};
