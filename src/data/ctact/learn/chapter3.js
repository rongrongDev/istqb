// CT-AcT — Chapter 3 learn content, authored from the ISTQB Acceptance Testing Syllabus v1.0 (2019).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Critical business processes must work without disruption. This chapter shows how to model business processes with BPMN and business rules with DMN decision tables, how to derive acceptance tests from those models using coverage criteria, which modeling practices help, and how models support a visual form of ATDD.",
  keywords: ["coverage", "model-based testing"],
  objectives: [
    { id: "AcT-3.1.1", level: "K3", text: "Construct a simple business process/rule model using BPMN and/or DMN notations" },
    { id: "AcT-3.2.1", level: "K3", text: "Derive a set of acceptance tests covering a given coverage criterion from a given, simple business process/rule model (in BPMN or DMN)" },
    { id: "AcT-3.3.1", level: "K2", text: "Summarize the good practices of business process and business rule modeling for acceptance testing" },
    { id: "AcT-3.3.2", level: "K2", text: "Explain how business process and business rule modeling can be used for ATDD" },
  ],
  sections: {
    "3.1": {
      objective: "AcT-3.1.1",
      body: [
        { type: "p", text: "Business process assurance — confidence that processes such as order-to-cash, HR onboarding or production planning run without disruption — is a key aim of acceptance testing. Two OMG standards give BAs and testers a shared graphical language: BPMN for workflows and DMN for decisions and business rules. A business process is a flow of tasks, alternative paths and events; business rules are explicit criteria that guide behavior and decisions." },
        { type: "table", headers: ["BPMN element (syllabus subset)", "Meaning"], rows: [
          ["Events: start, intermediate, end", "Where a process starts, something happens during it, or it ends (an end event can mark an error/rejection)"],
          ["Task (undefined, service, user, business rule)", "A unit of work; a business rule task links to a DMN decision table"],
          ["Sub-process (task with a + marker)", "A task that is itself a process, detailed elsewhere"],
          ["Exclusive gateway (X)", "A decision: exactly one outgoing path is taken, depending on a condition"],
          ["Parallel gateway (+)", "All outgoing branches run in parallel; a matching gateway joins them — it is not a decision"],
          ["Sequence flow", "Order in which flow objects run"],
          ["Pool and lane", "Participants and their responsibilities (only private, internal processes in this syllabus)"],
          ["Data object, annotation", "Data used or produced; free-text notes such as links to stories or risks"],
        ]},
        { type: "p", text: "A DMN decision table has an information item name, input clauses (zero or more), output clauses (one or more), and rules — each row maps one combination of input values to the output values — plus optional annotations and a hit policy (e.g. U = unique)." },
        { type: "example", title: "Exam entitlements", text: "Inputs Exam #1 and Exam #2 (0 or 1 point each), one output Entitlements. Rules: 0,0 → No; 0,1 → Partial; 1,0 → Partial; 1,1 → Full. A table without input columns, with a separate yes/no output column per outcome, or with a calculated \"result\" column is not a correct DMN table." },
      ],
    },
    "3.2": {
      objective: "AcT-3.2.1",
      body: [
        { type: "p", text: "A BPMN model with DMN rules precisely defines the scenarios to test, including the rule cases — an ideal base for coverage-based test selection as in model-based testing. The BA and tester first agree which coverage items must be fully tested." },
        { type: "list", intro: "Typical coverage items:", items: [
          "User stories, requirements and risks annotated in the model",
          "Decisions (rules) in the DMN decision tables",
          "User scenarios — specific paths through the model",
          "All paths through the model (usually without loops)",
        ]},
        { type: "p", text: "The tester then selects test cases covering those items; full coverage means every occurrence of an item is exercised at least once. Criteria can be combined — e.g. all paths of the main scenario but just one path per alternative scenario." },
        { type: "example", title: "$100 withdrawal", text: "Model: select \"withdraw $100\" → X gateway: balance < $100 → \"Remove card (withdrawal rejected)\" → end; balance ≥ $100 → \"Select receipt\" → X gateway: YES → parallel \"Take receipt\" + \"Withdraw $100, remove card\"; NO → \"Withdraw $100, remove card\".\nAll tasks: two tests — (balance $100, receipt YES) runs every task on the accepted path including both parallel branches, plus (balance $85) for the rejection task.\nDecision coverage: every outcome of both X gateways — (≥$100, YES), (<$100), (≥$100, NO) — three tests. The parallel gateway is not a decision." },
      ],
    },
    "3.3.1": {
      objective: "AcT-3.3.1",
      body: [
        { type: "list", intro: "Good practices when modeling for acceptance testing:", items: [
          "Don't model everything — focus on the requirements and user workflows to be tested; partial workflows are acceptable.",
          "Use DMN decision tables to manage dependencies in rule-heavy processes.",
          "Keep diagrams as simple as possible and split them into sub-processes to limit elements per diagram — easier to read and review.",
          "Model collaboratively: BAs and testers share and review each other's models.",
          "Add annotations — links to user stories, requirements, risks, priorities — so everything relevant is in one place and decisions are documented.",
        ]},
      ],
    },
    "3.3.2": {
      objective: "AcT-3.3.2",
      body: [
        { type: "p", text: "In refinement sessions, BPMN and DMN models help the team work out the detailed expected behavior and acceptance criteria, and testers can design the tests that verify them directly from the models." },
        { type: "list", intro: "Principles of model-based ATDD:", items: [
          "BAs and testers model workflows and rules together.",
          "Models are reviewed with stakeholders, helping validate requirements and acceptance criteria.",
          "Testers derive tests from the models and demonstrate the required coverage of paths and rules.",
          "Models show which changes need test maintenance and help select regression tests.",
          "Maintained models act as living documentation of the system's actual behavior.",
          "Automated test generation can produce and maintain scripts, combined with keyword- and data-driven testing.",
        ]},
        { type: "p", text: "The main difference from BDD: model-based ATDD visualizes the workflows, while BDD expresses them as Gherkin text. Note that models help validate requirements and design tests — they don't make it easier to find defects in the code itself." },
        { type: "seealso", label: "CTFL v4.0 Learn — section 2.1.3", href: "/ctflv4-learn", text: "how ATDD and BDD fit the test-first approaches" },
      ],
    },
  },
};
