// CT-FT v1.0 — Chapter 1 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Financial software is the infrastructure of the economy, so testing it is a safeguard against systemic failure. This chapter defines finance testing and its objectives, describes the typical financial test environments, architectures and testable workflows, and explains why domain knowledge is essential to overcome the sector's testing challenges.",
  keywords: ["financial institution", "regulatory standard"],
  objectives: [
    { id: "FT-1.1.1", level: "K1", text: "Recall the primary objectives of finance testing" },
    { id: "FT-1.1.2", level: "K2", text: "Summarize the unique characteristics and technical requirements of various financial test environments" },
    { id: "FT-1.1.3", level: "K2", text: "Identify key financial systems and typical testable workflows associated with them" },
    { id: "FT-1.2", level: "K2", text: "Explain how domain knowledge is applied to mitigate common testing challenges in the financial sector" },
  ],
  sections: {
    "1.1.1": {
      objective: "FT-1.1.1",
      body: [
        { type: "p", text: "Finance testing verifies and validates software used in financial services — banking, fintech, and non-banking financial institutions such as insurers, pension funds and leasing companies. It checks that systems work correctly and securely, follow business logic and meet regulations across internal processes, user interfaces and third-party integrations." },
        { type: "table", headers: ["Objective", "Meaning"], rows: [
          ["Functional correctness", "Transactions, calculations (interest, amortization) and balances processed with defined precision and tolerance"],
          ["Regulatory compliance", "Meeting global and regional legal standards to avoid liability and penalties"],
          ["Data integrity", "Transaction records stay consistent, accurate and uncorrupted across databases and systems"],
          ["Security assurance", "Controls protect customer data and assets from cyber threats, fraud and unauthorized access"],
          ["Operational resilience and performance", "Stability and speed under high load; failover for business continuity"],
          ["Customer trust", "Reliable operation that protects users and the institution's reputation"],
        ]},
      ],
    },
    "1.1.2": {
      objective: "FT-1.1.2",
      body: [
        { type: "table", headers: ["Environment", "Typical domain", "Test focus"], rows: [
          ["Omnichannel consumer", "Retail and commercial banking", "Consistent experience and data synchronization across mobile, web, branches, ATMs and IVR; interoperability with legacy core banking"],
          ["High-throughput, low-latency", "Investment and trading", "Performance first — millions of transactions per second, sub-millisecond latency, deterministic execution"],
          ["Logic-dense, resilient API", "Fintech microservices", "Complex business logic and resilience — failures isolated; model-based testing, service virtualization, AI-driven orchestration"],
          ["Schema-driven messaging", "Inter-bank systems", "Schema validation of ISO 20022 / FIX messages such as PAIN, PACS and CAMT"],
          ["Time-dependent, actuarial", "Insurance and mortgages", "Precision of long-term calculations; time travel testing by shifting the system or simulated clock"],
        ]},
      ],
    },
    "1.1.3": {
      objective: "FT-1.1.3",
      body: [
        { type: "list", intro: "Architecture layers, each with its own concerns:", items: [
          "Core banking systems — the central backend for transactions, customer records and accounts.",
          "Integration and middleware — reliable data exchange, integrity across subsystems, isolation of failures.",
          "Digital front-ends and channels — mobile, web, ATM and POS: cross-device behavior, biometric authentication, offline stability, routing, consistent rendering.",
        ]},
        { type: "table", headers: ["Workflow family", "What to test"], rows: [
          ["Transactional", "The full payment lifecycle across subsystems — state transitions, settlement, rollback under normal and failure conditions"],
          ["Compliance and identity", "KYC onboarding (document and biometric checks); AML detection and sanctions screening with controlled false positives"],
          ["Investment and treasury", "Trade lifecycle from OMS/EMS order routing to settlement; derivative pricing, kill switches, latency"],
          ["Operational and back-office", "Reconciliation to the General Ledger; End-of-Day/Month/Year cycles; tax reporting; audit trails"],
          ["Specialized insurance", "Policy lifecycle and premium calculation; claims adjudication, fraud detection, settlement"],
        ]},
      ],
    },
    "1.2": {
      objective: "FT-1.2",
      body: [
        { type: "p", text: "Generic testing skills fall short in finance: the test basis is complex, precision matters and regulation is strict. Domain knowledge helps with five challenges:" },
        { type: "list", items: [
          "The test oracle problem — expected results of derivatives pricing, actuarial models or yield curves aren't obvious; domain experts can derive them independently.",
          "Translating regulation into tests — legal text is abstract and open to interpretation; domain fluency turns it into precise, testable acceptance criteria.",
          "Data dependencies — fields constrain each other (a transaction type needs a specific tax code), so valid test data needs domain rules.",
          "End-to-end lifecycles — transactions cross front, middle and back office; testers confirm correct capture, consistency through clearing, settlement and currency conversion, and an accurate final state in accounts, audit trails and reports.",
          "Risk-based prioritization — telling cosmetic defects from failures that cause financial loss, fines or reputational damage.",
        ]},
      ],
    },
  },
};
