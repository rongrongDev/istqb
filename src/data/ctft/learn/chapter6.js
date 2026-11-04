// CT-FT v1.0 — Chapter 6 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Precision and speed make automation valuable in finance — compound interest, credit scores, huge regression suites. This chapter explains how automation improves efficiency, how to shape a strategy across legacy and modern landscapes, the extra challenges regulation brings, and the specific difficulties of automating mobile, frontend, backend and security tests.",
  keywords: ["test automation", "DTO", "privacy"],
  objectives: [
    { id: "FT-6.1", level: "K2", text: "Explain how test automation supports test efficiency in finance" },
    { id: "FT-6.2", level: "K3", text: "Apply test automation strategies in legacy and modern financial IT landscapes" },
    { id: "FT-6.3", level: "K2", text: "Explain the challenges of test automation in regulated environments" },
    { id: "FT-6.4", level: "K2", text: "Explain the challenges of test automation on mobile, frontend and backend components" },
  ],
  sections: {
    "6.1": {
      objective: "FT-6.1",
      body: [
        { type: "list", intro: "Benefits — shorter cycles, better accuracy, better scalability:", items: [
          "Consistent execution and precise results, with no discrepancies from manual input errors.",
          "Quick regression after updates (e.g. credit or payment functions), freeing manual testers for complex scenarios.",
          "Scheduled runs aligned with deployments give fast feedback for iterative delivery.",
          "Simulate peak-load scenarios and run consistently across multiple environments with aligned configurations.",
          "Systematically verify compliance (e.g. PCI DSS, AML/CFT controls) and produce auditable evidence; run in restricted environments through controlled pipelines without manual access.",
          "Create complex end-to-end test data — customers with credit history, invoices, cards, transaction templates.",
        ]},
        { type: "table", headers: ["Obstacle", "Detail"], rows: [
          ["Complexity", "Complex workflows, e.g. mortgage registration with scoring, income checks, payment calculations, external registries"],
          ["Cost", "High upfront and maintenance effort; ROI comes less from cutting manual testing and more from reducing the risk of high-cost failures (outages, failed transactions, penalties)"],
          ["Skill gap", "Few people combine financial business logic with automation skills"],
        ]},
        { type: "p", text: "Address them through strategic planning, training (competency matrices, individual development plans, mentoring), standardized frameworks and tools (e.g. for simulating external APIs), CI/CD integration and collaboration across test levels — all reflected in the test automation strategy." },
        { type: "seealso", label: "CTAL-TAE Learn", href: "/ctaltae-learn", text: "test automation architecture and engineering in depth" },
      ],
    },
    "6.2": {
      objective: "FT-6.2",
      body: [
        { type: "list", intro: "Common strategies:", items: [
          "Test distribution patterns — pyramid, ice cream cone, hourglass, umbrella — to assess the current state and set targets; legacy systems need different strategies from new ones.",
          "Shift left: early automation and compliance in pipelines. Shift right: monitor quality, transaction integrity and fraud detection in production.",
          "Approach by lifecycle model in a mixed landscape (legacy processing + modern mobile payments): agile with automation emphasis, sequential with distinct phases, DevOps with continuous testing via CI/CD.",
        ]},
        { type: "example", title: "Bank", text: "By automating all pyramid layers — component, API/service and UI tests — the bank frees capacity to validate real devices such as ATMs and POS terminals, which are costly and hard to automate. It combines a distribution scheme, an automation focus and early automation." },
        { type: "table", headers: ["Finance factor", "Strategy implication"], rows: [
          ["High accuracy demands", "Currency stored in different data types and precisions — tests must verify more strictly than in other domains"],
          ["Interconnected systems", "End-to-end automation across systems (e.g. accounting with complex billing) is technically complex"],
          ["Real-time data", "Input patterns change (seasons, products) — use anonymized pre-production data or regularly refreshed test data"],
          ["Automated test oracle / pseudo-oracle", "Compare results with a reference application or expected-results table; keeping both aligned is hard"],
          ["Automated regression", "Compare calculations with past versions or reference results, accounting for the cost of dual environments"],
        ]},
        { type: "seealso", label: "CT-TAS Learn", href: "/cttas-learn", text: "test automation strategy approaches (section 3.1.1)" },
      ],
    },
    "6.3": {
      objective: "FT-6.3",
      body: [
        { type: "p", text: "Finance must comply with national and international rules such as GDPR, SOX, PCI DSS and DORA, which add challenges to the automation strategy." },
        { type: "table", headers: ["Challenge", "How to overcome it"], rows: [
          ["Complexity of regulations — strict data protection, privacy and security (e.g. PCI DSS for ATM tests)", "A regulation testing map (impact area, test data needs, critical test conditions per requirement); data anonymization (masking); synthetic test data"],
          ["Maintenance — code changes, scripts and libraries, external integrations, suites", "Use a common data transfer object (DTO) defined by the interaction contract; isolate test logic from resources (UI details, data); run tests automatically on every code change"],
          ["Logging and provability — keep transaction and test logs for auditors; prove efficacy and reproduce transaction paths", "End-to-end test logging with structured testware per run; automated audit reports showing coverage of compliance-critical functions, execution history and proof before release"],
          ["Specific tools — proprietary tools with little market support (biometrics, POS/ATM)", "Inner source: share internal tool code across the organization; integrate via standard protocols such as REST APIs"],
        ]},
      ],
    },
    "6.4": {
      objective: "FT-6.4",
      body: [
        { type: "table", headers: ["Area", "Challenges"], rows: [
          ["Mobile apps", "Security and compliance, usability/UX, network variance, battery life, device fragmentation, encryption-related compliance"],
          ["Frontend web", "Usability, accessibility, compliance; cross-browser compatibility, dynamic content, GUI flakiness, headless browsers"],
          ["Backend", "Data integrity, integration and business logic; API integration complexity, load balancing and scalability defects"],
          ["Automated security testing", "Mandatory masking of sensitive data; many false positives and negatives needing periodic manual verification; encrypted traffic and authentication"],
        ]},
        { type: "list", intro: "Overcoming them:", items: [
          "Adopt a risk-based test pyramid.",
          "Manage test data and isolate environments in CI/CD.",
          "Reduce flakiness with reliable locators, explicit waits and idempotent setup/teardown.",
          "For mobile: a device/network matrix, device clouds and platform frameworks for stability.",
        ]},
        { type: "p", text: "GenAI also promises broader coverage, defect detection, task automation and quick feedback — once these challenges are overcome." },
      ],
    },
  },
};
