// CT-FT v1.0 — Chapter 6: Test Automation
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 6,
  title: 'Test Automation',
  time: '105 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: "Five questions in the ASTQB sample. Know the finance benefits of automation (consistent, precise results without manual input errors, fast regression, scheduled runs, peak-load simulation across environments, auditable compliance evidence, complex E2E test data), the obstacles (complexity, cost — ROI driven by reduced risk of high-cost failures, skill gap), strategy factors for legacy vs modern landscapes (distribution patterns, shift left/right, high accuracy demands, real-time data, automated TEST ORACLE / pseudo-oracle, regression vs past versions), regulated-environment challenges and remedies (regulation testing map, masking, synthetic data, DTO, logging and audit reporting, inner source), and mobile/frontend/backend/security automation challenges.",
  sections: [
    {
      id: '6.1', title: 'Role of Test Automation in Finance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Benefits: CONSISTENT execution and precise results without MANUAL INPUT ERRORS; quick regression after updates (credit, payment) so manual testers focus on complex scenarios; scheduled runs aligned with deployments; SIMULATE PEAK LOAD consistently across multiple environments; compliance and security checks (PCI DSS, AML/CFT) with AUDITABLE EVIDENCE, runnable in restricted environments via controlled pipelines; generate complex end-to-end test data.",
        "Obstacles: COMPLEXITY (e.g. mortgage registration: scoring, income verification, payment calculations, external registries); COST (ROI driven less by reducing manual testing and more by reducing the risk of high-cost failures — outages, failed transactions, regulatory penalties); SKILL GAP (finance logic + automation skills).",
        "Address with strategic planning, training (competency matrices, development plans, mentoring), standardized frameworks and tools (e.g. simulating external APIs), CI/CD integration and stakeholder collaboration — reflected in the test automation strategy."
      ],
      examInsights: ["ASTQB-Q36/Q37 — Automation helps complex calculations by eliminating manual errors; for performance across interrelated systems it simulates peak load consistently across environments."]
    },
    {
      id: '6.2', title: 'Test Automation Strategies', level: 'K3', type: 'deep',
      deepPoints: [
        "Common strategies: TEST DISTRIBUTION patterns (pyramid, ice cream cone, hourglass, umbrella) to assess and set targets — legacy differs from new; SHIFT LEFT (early automation and compliance in pipelines) and SHIFT RIGHT (production monitoring of quality, transaction integrity, fraud detection); approach by SDLC — agile (automation emphasis), legacy sequential (distinct phases), DevOps (continuous testing via CI/CD).",
        "Example: automating all pyramid layers frees capacity to validate real ATMs and POS terminals, which are costly to automate.",
        "Finance factors: HIGH ACCURACY DEMANDS (different data types and precision for currency — stricter verification); E2E across interconnected systems is technically complex (accounting, billing); REAL-TIME DATA as close as possible (anonymized pre-production or regularly updated data — seasonal patterns); AUTOMATED TEST ORACLE / pseudo-oracle (compare with a reference application — hard to keep aligned); automated REGRESSION vs past versions or reference results (cost of dual environments)."
      ],
      examInsights: ["ASTQB-Q38 (K3) — Business provided a table of expected mortgage rates for parameter combinations → use it as the automated test oracle."]
    },
    {
      id: '6.3', title: 'Challenges of Test Automation in Regulated Environments', level: 'K2', type: 'deep',
      deepPoints: [
        "Rules such as GDPR, SOX, PCI DSS and DORA add challenges: COMPLEXITY OF REGULATIONS (data protection, privacy, security — e.g. PCI DSS for ATM tests); MAINTENANCE (code, scripts, libraries, integrations, suites); LOGGING AND PROVABILITY (keep business transaction and test logs for auditors; prove efficacy and reproduce transaction paths); SPECIFIC TOOLS (proprietary tools with little support — biometrics, POS/ATM).",
        "Remedies — regulations: a regulation TESTING MAP (impact area, test data needs, critical conditions per requirement), data anonymization (masking), synthetic test data. Maintenance: a common DTO from the interaction contract, isolate test logic from resources (UI details, data), run tests on every code change.",
        "Logging: end-to-end test logging with structured testware per run; AUTOMATED AUDIT REPORTING (coverage of compliance-critical functions, execution history, proof before release). Tools: INNER SOURCE repositories, integration via standard protocols (REST API)."
      ],
      examInsights: ["ASTQB-Q39 — Automated logging matters because regulators and auditors need proof of testing and reproducible transaction paths."]
    },
    {
      id: '6.4', title: 'Challenges in Different Types of Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "MOBILE: security and compliance, usability/UX, network condition variance, battery life, DEVICE FRAGMENTATION, encryption-related compliance. FRONTEND web: usability, accessibility, compliance; cross-browser compatibility, dynamic content, GUI flakiness, headless browsers. BACKEND: data integrity, integration, business logic — API integration complexity, load balancing and scalability defects.",
        "Automated SECURITY testing: mandatory masking of sensitive data; many false positives/negatives needing periodic manual verification; ENCRYPTED TRAFFIC and authentication.",
        "Remedies: risk-based test pyramid; managed test data and isolated environments in CI/CD; reduce flakiness (reliable locators, explicit waits, idempotent setup/teardown); for mobile a device/network matrix, device clouds and platform frameworks. GenAI promises coverage, defect detection, task automation and quick feedback."
      ],
      examInsights: ["ASTQB-Q40 — Beyond masked data, encryption of traffic between the mobile device and backend makes automation harder."]
    }
  ]
};
