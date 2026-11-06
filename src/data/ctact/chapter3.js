// CT-AcT (syllabus v1.0 2019) — Chapter 3: Business Process and Business Rules Modeling
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-AcT Sample Exam A v1.3
export default {
  id: 3,
  title: 'Business Process and Business Rules Modeling',
  time: '150 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "Eight questions incl. four K3s built on diagrams. Know the BPMN subset (start/intermediate/end events; tasks — undefined, service, user, business rule — and sub-processes; EXCLUSIVE (X) vs PARALLEL (+) gateways; sequence flow; pools/lanes; data objects, annotations) and DMN decision tables (inputs, outputs, rules, hit policy). Derive minimal test sets for coverage criteria (all tasks, all decisions/outcomes, all paths), and know modeling good practices and how models drive visual ATDD.",
  sections: [
    {
      id: '3.1', title: 'Modeling Business Processes and Rules', level: 'K3', type: 'deep',
      deepPoints: [
        "BUSINESS PROCESS ASSURANCE — confidence that critical processes (order-to-cash, HR onboarding, production planning) run without disruption — is an essential acceptance testing objective.",
        "BPMN (OMG, ISO/IEC 19510) models WORKFLOWS as flowcharts: events, tasks (undefined, service, user, business rule), sub-processes (+ marker), exclusive gateways (X, one path by condition) and PARALLEL gateways (+, all branches), sequence flows, pools/lanes, data objects, annotations. Only private (internal) processes.",
        "DMN (OMG) models DECISIONS/BUSINESS RULES as decision tables: information item name, input clauses, output clauses, rules (one row per input combination); linked to BPMN through business rule tasks. A \"simple\" model has < 20 elements."
      ],
      examInsights: ["A-Q17 (K3) — A correct DMN table has input columns (Exam #1, Exam #2) and ONE output column (Entitlements) with one rule per combination.", "A-Q18 (K3) — In the loan model, \"+\" on a task marks a sub-process; a parallel gateway means tasks run in parallel, not sequentially."]
    },
    {
      id: '3.2', title: 'Deriving Acceptance Tests from Business Process/Rule Models', level: 'K3', type: 'deep',
      deepPoints: [
        "A BPMN + DMN model precisely defines the scenarios and rule cases → good basis for COVERAGE-BASED test selection as in model-based testing; BA and tester AGREE on the coverage items.",
        "Typical coverage items: annotated user stories/requirements/risks; decisions in DMN tables; user scenarios (paths); ALL PATHS (usually without loops).",
        "Full coverage = each coverage item exercised at least once. Criteria can be combined (all paths of the main scenario, one path per alternative). Parallel gateways are NOT decisions — both branches execute in one test."
      ],
      examInsights: ["A-Q19/Q20 (K3) — For \"all tasks\" one happy path with receipt (parallel branches both run) + one rejected withdrawal suffices; decision coverage needs each outcome of each exclusive gateway: ≥$100 + YES, <$100, ≥$100 + NO."]
    },
    {
      id: '3.3.1', title: 'Good Practices for Business Process Modeling', level: 'K2', type: 'deep',
      deepPoints: [
        "Don't model everything — focus on the REQUIREMENTS TO BE TESTED; partial workflows are fine.",
        "Use DMN decision tables to manage rule dependencies in rule-based processes.",
        "Keep diagrams SIMPLE; use SUB-PROCESSES to limit elements per diagram (readability, reviews).",
        "Model COLLABORATIVELY (BA + tester), share and review artifacts.",
        "Add ANNOTATIONS linking user stories, requirements, risks and priorities — everything in one place."
      ],
      examInsights: ["A-Q21/Q22 — Models should focus on the user workflows to be tested and carry traceability annotations to user stories."]
    },
    {
      id: '3.3.2', title: 'Using Business Process Models for ATDD', level: 'K2', type: 'deep',
      deepPoints: [
        "In refinement sessions, BPMN/DMN models help the team detail expected behavior and acceptance criteria; testers design tests directly from them.",
        "Principles: BAs + testers model together; models reviewed with stakeholders to VALIDATE requirements and criteria; testers derive tests to demonstrate coverage of paths and rules; models identify changes needing test maintenance and REGRESSION selection; models are LIVING DOCUMENTATION; automated test generation, combinable with keyword- and data-driven testing.",
        "Key difference from BDD: VISUALIZATION of workflows vs Gherkin text."
      ],
      examInsights: ["A-Q23/Q24 — Testers use models to generate acceptance tests; \"easier to detect defects in the application code\" is NOT an argument for model-based ATDD."]
    }
  ]
};
