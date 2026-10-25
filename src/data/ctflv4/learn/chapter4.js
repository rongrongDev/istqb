// CTFL v4.0 — Chapter 4 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The apply-it chapter: the only one with K3 objectives, meaning the exam makes you derive test cases. It covers the three technique families (black-box, white-box, experience-based), the four black-box techniques in full mechanical detail (equivalence partitioning, boundary value analysis, decision tables, state transitions), statement and branch coverage, error guessing, exploratory and checklist-based testing, and the collaboration-based approaches around user stories and ATDD.",
  keywords: [
    "acceptance criteria", "acceptance test-driven development", "black-box test technique",
    "boundary value analysis", "branch coverage", "checklist-based testing",
    "collaboration-based test approach", "coverage", "coverage item", "decision table testing",
    "equivalence partitioning", "error guessing", "experience-based test technique",
    "exploratory testing", "state transition testing", "statement coverage", "test technique",
    "white-box test technique",
  ],
  objectives: [
    { id: "FL-4.1.1", level: "K2", text: "Distinguish black-box test techniques, white-box test techniques and experience-based test techniques" },
    { id: "FL-4.2.1", level: "K3", text: "Use equivalence partitioning to derive test cases" },
    { id: "FL-4.2.2", level: "K3", text: "Use boundary value analysis to derive test cases" },
    { id: "FL-4.2.3", level: "K3", text: "Use decision table testing to derive test cases" },
    { id: "FL-4.2.4", level: "K3", text: "Use state transition testing to derive test cases" },
    { id: "FL-4.3.1", level: "K2", text: "Explain statement testing" },
    { id: "FL-4.3.2", level: "K2", text: "Explain branch testing" },
    { id: "FL-4.3.3", level: "K2", text: "Explain the value of white-box testing" },
    { id: "FL-4.4.1", level: "K2", text: "Explain error guessing" },
    { id: "FL-4.4.2", level: "K2", text: "Explain exploratory testing" },
    { id: "FL-4.4.3", level: "K2", text: "Explain checklist-based testing" },
    { id: "FL-4.5.1", level: "K2", text: "Explain how to write user stories in collaboration with developers and business representatives" },
    { id: "FL-4.5.2", level: "K2", text: "Classify the different options for writing acceptance criteria" },
    { id: "FL-4.5.3", level: "K3", text: "Use acceptance test-driven development (ATDD) to derive test cases" },
  ],
  sections: {
    "4.1": {
      objective: "FL-4.1.1",
      body: [
        { type: "p", text: "Test techniques support test analysis (what to test) and test design (how to test): they help develop a relatively small but sufficient set of test cases systematically, and help define test conditions, identify coverage items, and identify test data." },
        { type: "list", intro: "The syllabus classifies techniques into three families:", items: [
          "Black-box (specification-based) techniques — based on analysis of specified behavior, without reference to internal structure. Test cases are implementation-independent: if the implementation changes but required behavior stays the same, the tests remain useful.",
          "White-box (structure-based) techniques — based on analysis of the test object's internal structure and processing. Test cases depend on the design, so they can only be created after design or implementation exists.",
          "Experience-based techniques — leverage the tester's knowledge and experience; effectiveness depends heavily on tester skill. They find defects the systematic families miss, making them complementary to black-box and white-box techniques.",
        ]},
        { type: "note", title: "The discriminator", text: "What separates the families is the test basis: specification (black-box), structure (white-box), or the tester's knowledge (experience-based)." },
      ],
    },
    "4.2.1": {
      objective: "FL-4.2.1",
      body: [
        { type: "p", text: "Equivalence partitioning (EP) divides data into equivalence partitions on the expectation that all elements of a partition are processed the same way. If a test on one value of the partition finds a defect, any other value of that partition should find it too — so one test per partition suffices." },
        { type: "p", text: "Partitions can be identified for any data element: inputs, outputs, configuration items, internal values, time-related values, interface parameters. They may be continuous or discrete, ordered or unordered, finite or infinite — but they must not overlap and must be non-empty. A partition of valid values is a valid partition; of invalid values, an invalid partition (exact definitions of valid/invalid vary by team)." },
        { type: "p", text: "Coverage items are the partitions. 100% coverage requires exercising every identified partition — including the invalid ones — at least once. Coverage = exercised partitions ÷ total identified partitions, as a percentage." },
        { type: "p", text: "With multiple sets of partitions (e.g. several input parameters), a single test case covers one partition from each set. The simplest criterion is Each Choice coverage: every partition from every set exercised at least once — combinations of partitions are not required." },
        { type: "example", title: "Each Choice in practice", text: "Parameter A has 4 partitions, parameter B has 3. Each Choice needs only max(4, 3) = 4 test cases — each test picks one partition of A and one of B, reusing B partitions as needed." },
      ],
    },
    "4.2.2": {
      objective: "FL-4.2.2",
      body: [
        { type: "p", text: "Boundary value analysis (BVA) exercises the boundaries of equivalence partitions, so it only works for ordered partitions. The minimum and maximum of a partition are its boundary values. Developers are more likely to err at boundaries — typical defects are implemented boundaries misplaced above or below the intended position, or omitted entirely." },
        { type: "list", intro: "The two versions differ in coverage items per boundary:", items: [
          "2-value BVA: for each boundary value — the boundary value itself and its closest neighbor in the adjacent partition. For a partition [a..b]: test a−1, a, b, b+1.",
          "3-value BVA: for each boundary value — the boundary value and both its neighbors. For [a..b]: a−1, a, a+1, b−1, b, b+1. Some coverage items are not boundary values themselves.",
        ]},
        { type: "p", text: "Coverage = exercised coverage items ÷ total identified coverage items, as a percentage. 3-value BVA is more rigorous: if 'if (x ≤ 10)' is wrongly implemented as 'if (x = 10)', 2-value data (10, 11) cannot detect the defect, but 3-value's x = 9 likely does." },
      ],
    },
    "4.2.3": {
      objective: "FL-4.2.3",
      body: [
        { type: "p", text: "Decision tables test requirements where combinations of conditions produce different outcomes — an effective record of complex business rules. Conditions and resulting actions form the rows; each column is a decision rule: a unique combination of conditions with its actions." },
        { type: "p", text: "Limited-entry tables use Boolean values everywhere; extended-entry tables let conditions/actions take multiple values (ranges, partitions, discrete values). Notation: 'T' condition satisfied, 'F' not satisfied, '–' irrelevant to the outcome, 'N/A' infeasible for that rule; for actions, 'X' means the action occurs, blank means it does not." },
        { type: "p", text: "A full table has a column for every combination of conditions (2ⁿ for n Boolean conditions). It can be simplified by deleting infeasible columns, and minimized by merging columns where some conditions don't affect the outcome (minimization algorithms are out of scope)." },
        { type: "p", text: "Coverage items are the columns with feasible condition combinations; 100% coverage exercises all of them. Coverage = exercised columns ÷ feasible columns, as a percentage." },
        { type: "p", text: "Strengths: a systematic sweep of all condition combinations that would otherwise be overlooked, plus discovery of gaps or contradictions in requirements. Weakness: rules grow exponentially with conditions — use a minimized table or a risk-based approach to trim them." },
      ],
    },
    "4.2.4": {
      objective: "FL-4.2.4",
      body: [
        { type: "p", text: "A state diagram models a system's states and valid transitions. A transition is initiated by an event, optionally qualified by a guard condition, and may trigger an action — labeled 'event [guard condition] / action'. A state table is the equivalent model: rows = states, columns = events (with guards), cells = transitions (target state + actions). Unlike the diagram, the table shows invalid transitions explicitly — the empty cells." },
        { type: "p", text: "A test case is a sequence of events producing a sequence of state changes (and actions); one test usually covers several transitions." },
        { type: "list", intro: "Three coverage criteria:", items: [
          "All states coverage — items are the states; exercised states ÷ total states. Weakest: achievable without exercising all transitions.",
          "Valid transitions coverage (0-switch) — items are single valid transitions; the most widely used criterion. Full valid-transitions coverage guarantees full all-states coverage.",
          "All transitions coverage — items are everything in the state table: exercise all valid transitions AND attempt invalid ones. Test only one invalid transition per test case to avoid defect masking. Guarantees the other two coverages; should be the minimum for mission- and safety-critical software.",
        ]},
      ],
    },
    "4.3.1": {
      objective: "FL-4.3.1",
      body: [
        { type: "p", text: "In statement testing the coverage items are executable statements; the aim is to exercise statements until an acceptable coverage level is reached. Coverage = statements exercised ÷ total executable statements, as a percentage." },
        { type: "p", text: "100% statement coverage means every executable statement ran at least once — so every statement containing a defect was executed, which may cause a failure revealing it. But it will not detect every defect: data-dependent defects (a division by zero that only fails when the denominator is zero) can survive, and 100% statement coverage does not guarantee the decision logic was tested — branches may remain unexercised." },
      ],
    },
    "4.3.2": {
      objective: "FL-4.3.2",
      body: [
        { type: "p", text: "A branch is a transfer of control between two nodes in the control flow graph (the possible execution sequences of the code). Transfers are unconditional (straight-line code) or conditional (a decision outcome: an if-then true/false, a switch case, a loop's exit-or-continue)." },
        { type: "p", text: "In branch testing the coverage items are branches; coverage = branches exercised ÷ total branches, as a percentage. 100% branch coverage exercises all branches, unconditional and conditional. It still won't catch everything — defects requiring a specific path can escape." },
        { type: "note", title: "Subsumption", text: "Branch coverage subsumes statement coverage: any test set achieving 100% branch coverage also achieves 100% statement coverage — never the other way around." },
      ],
    },
    "4.3.3": {
      objective: "FL-4.3.3",
      body: [
        { type: "p", text: "The shared strength of all white-box techniques: the entire software implementation is taken into account, so defects can be found even when the specification is vague, outdated, or incomplete. The corresponding weakness: if the software fails to implement a requirement, white-box testing may not detect that defect of omission — there is no code to cover." },
        { type: "p", text: "White-box techniques also work in static testing — dry runs of code, reviewing code not yet ready for execution, pseudocode, and other high-level logic that can be modeled with a control flow graph." },
        { type: "p", text: "Black-box testing alone gives no measure of actual code coverage. White-box coverage measures provide an objective measurement and the information needed to generate additional tests that increase coverage — and with it, confidence in the code." },
      ],
    },
    "4.4.1": {
      objective: "FL-4.4.1",
      body: [
        { type: "list", intro: "Error guessing anticipates errors, defects, and failures from the tester's knowledge of:", items: [
          "How the application has worked in the past",
          "The types of errors developers tend to make, and the defects that result",
          "The types of failures seen in other, similar applications",
        ]},
        { type: "p", text: "Errors, defects, and failures typically relate to: input (correct input not accepted; wrong or missing parameters), output (wrong format; wrong result), logic (missing cases; wrong operator), computation (incorrect operand; wrong computation), interfaces (parameter mismatch; incompatible types), or data (incorrect initialization; wrong type)." },
        { type: "p", text: "Fault attacks implement error guessing methodically: the tester creates or acquires a list of possible errors, defects, and failures — from experience, defect and failure data, or common knowledge of why software fails — and designs tests to identify the defects, expose them, or cause the failures." },
      ],
    },
    "4.4.2": {
      objective: "FL-4.4.2",
      body: [
        { type: "p", text: "In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns the test object — learning it, exploring it more deeply with focused tests, and creating tests for untested areas." },
        { type: "p", text: "Session-based testing gives it structure: a defined time box; a test charter with test objectives to guide the session (objectives may be treated as high-level test conditions); coverage items identified and exercised during the session; test session sheets documenting steps and discoveries; then a debriefing between tester and interested stakeholders." },
        { type: "p", text: "Exploratory testing shines when specifications are few or inadequate, or testing faces significant time pressure — and as a complement to more formal techniques. It is more effective when the tester is experienced, has domain knowledge, and strong analytical skills, curiosity, and creativity. Other techniques (e.g. equivalence partitioning) can be used within it." },
      ],
    },
    "4.4.3": {
      objective: "FL-4.4.3",
      body: [
        { type: "p", text: "In checklist-based testing, the tester designs, implements, and executes tests covering test conditions from a checklist built from experience, knowledge of what matters to users, or an understanding of why and how software fails." },
        { type: "p", text: "Checklists should not contain items that can be checked automatically, items better suited as entry/exit criteria, or items that are too general. Items are often phrased as questions, each separately and directly checkable; they may refer to requirements, GUI properties, quality characteristics, or other test conditions — supporting functional and non-functional testing alike (e.g. Nielsen's 10 usability heuristics)." },
        { type: "p", text: "Checklists age: some entries lose effect as developers stop making those errors; new entries arrive from newly found high-severity defects. Update regularly from defect analysis, but don't let the list grow too long." },
        { type: "p", text: "Without detailed test cases, checklist-based testing gives guidelines and some consistency. With high-level checklists, actual testing varies between testers — potentially greater coverage, but less repeatability." },
      ],
    },
    "4.5.1": {
      objective: "FL-4.5.1",
      body: [
        { type: "p", text: "Collaboration-based approaches target defect avoidance through collaboration and communication, not just defect detection. A user story represents a feature valuable to a user or purchaser." },
        { type: "list", intro: "The 3 C's of a user story:", items: [
          "Card — the medium describing the story (index card, electronic board entry)",
          "Conversation — explains how the software will be used (documented or verbal)",
          "Confirmation — the acceptance criteria",
        ]},
        { type: "p", text: "Common format: 'As a [role], I want [goal], so that I can [business value]', followed by acceptance criteria. Collaborative authorship (brainstorming, mind mapping) gives the team a shared vision across the business, development, and testing perspectives." },
        { type: "p", text: "Good stories are INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. If a stakeholder doesn't know how to test a story, the story may be unclear, may not reflect something valuable to them — or they may simply need help testing." },
      ],
    },
    "4.5.2": {
      objective: "FL-4.5.2",
      body: [
        { type: "p", text: "Acceptance criteria are the conditions an implementation of a user story must meet to be accepted by stakeholders — effectively the test conditions to exercise. They usually emerge from the Conversation." },
        { type: "list", intro: "Acceptance criteria are used to:", items: [
          "Define the scope of the user story",
          "Reach consensus among stakeholders",
          "Describe both positive and negative scenarios",
          "Serve as the basis for user story acceptance testing (ATDD)",
          "Allow accurate planning and estimation",
        ]},
        { type: "list", intro: "The two most common documentation formats:", items: [
          "Scenario-oriented — e.g. the Given/When/Then format used in BDD",
          "Rule-oriented — e.g. a bullet-point verification list, or a tabulated input–output mapping",
        ]},
        { type: "p", text: "Custom formats are acceptable as long as the criteria stay well-defined and unambiguous." },
      ],
    },
    "4.5.3": {
      objective: "FL-4.5.3",
      body: [
        { type: "p", text: "ATDD is a test-first approach: test cases are created before implementing the user story, by team members with different perspectives — customers, developers, testers. Tests may be executed manually or automated." },
        { type: "p", text: "Step one is a specification workshop: the user story and (if missing) its acceptance criteria are analyzed, discussed, and written by the team; incompleteness, ambiguities, and defects are resolved. Step two is creating the test cases — by the whole team or a tester individually — based on the acceptance criteria. Tests double as examples of how the software works ('examples' and 'tests' are used interchangeably); the techniques of sections 4.2–4.4 may be applied during design." },
        { type: "p", text: "Typically positive test cases come first (correct behavior without exceptions, the expected sequence of activities), then negative testing, and finally non-functional characteristics (performance efficiency, usability). Test cases should be expressed so stakeholders understand them: natural-language sentences with preconditions (if any), inputs, and postconditions." },
        { type: "p", text: "Tests must cover all characteristics of the story and must not go beyond it; no two test cases should describe the same characteristics. Captured in a format supported by a test automation framework, developers automate them while implementing the story — the acceptance tests become executable requirements." },
      ],
    },
  },
};
