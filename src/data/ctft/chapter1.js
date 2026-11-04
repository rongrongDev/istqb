// CT-FT v1.0 — Chapter 1: Introduction to the Financial Services Industry
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 1,
  title: 'Introduction to the Financial Services Industry',
  time: '50 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "Six questions in the ASTQB sample. Know the six finance testing objectives, the five financial test environments by their typical systems, the three architecture layers and five workflow families (incl. KYC/AML), and the five testing challenges where domain knowledge helps (oracle problem, translating regulations, data dependencies, end-to-end lifecycles, risk prioritization).",
  sections: [
    {
      id: '1.1.1', title: 'Definition and Objectives of Finance Testing', level: 'K1', type: 'skim',
      summary: "Finance testing = verifying and validating software in financial services — banking, fintech, NBFIs (insurance, pension funds, leasing) — for correct, secure, business-logic- and regulation-compliant behavior across internal processes, external interfaces and third-party integrations. Objectives: FUNCTIONAL CORRECTNESS (transactions, interest/amortization calculations, balances with defined precision and tolerance), REGULATORY COMPLIANCE, DATA INTEGRITY (consistent, accurate, uncorrupted across systems), SECURITY ASSURANCE (protect customer data and assets from cyber threats, fraud, unauthorized access), OPERATIONAL RESILIENCE AND PERFORMANCE (throughput, response time, failover, continuity), CUSTOMER TRUST.",
      examInsights: ["ASTQB-Q1 — Protecting customer data and financial assets from unauthorized access = security assurance."]
    },
    {
      id: '1.1.2', title: 'Types of Financial Test Environments', level: 'K2', type: 'deep',
      deepPoints: [
        "OMNICHANNEL CONSUMER (retail/commercial banking): seamless journey across mobile, web, branches, ATMs, IVR — brand consistency, data synchronization, front-end ↔ legacy core interoperability.",
        "HIGH-THROUGHPUT, LOW-LATENCY (investment/trading): millions of transactions per second, sub-millisecond — PERFORMANCE is the primary concern (throughput, latency, execution determinism).",
        "LOGIC-DENSE, RESILIENT API (fintech): microservices with complex high-dimensional logic — resilience, failure isolation; model-based testing, service virtualization, AI-driven orchestration.",
        "SCHEMA-DRIVEN MESSAGING (inter-bank): ISO 20022, FIX — schema validation of PAIN (payment initiation), PACS (credit transfers), CAMT (cash management) messages.",
        "TIME-DEPENDENT, ACTUARIAL (insurance/mortgages): long policy/loan lifecycles, premium and compound-interest models — precision and TIME TRAVEL TESTING (modifying the system or simulated clock)."
      ],
      examInsights: ["ASTQB-Q2/Q3 — User-facing banking via mobile apps and branches = omnichannel consumer environment; fintech with complex business logic = logic-dense and resilient API environment."]
    },
    {
      id: '1.1.3', title: 'Financial System Architectures and Testable Workflows', level: 'K2', type: 'deep',
      deepPoints: [
        "Layers: CORE BANKING SYSTEMS (central backend for transactions, customer records, accounts); INTEGRATION AND MIDDLEWARE (reliable data exchange, integrity, failure isolation); DIGITAL FRONT-END AND CHANNELS (mobile, web, ATM/POS — cross-device, biometrics, offline stability, routing, consistent rendering).",
        "Workflows: TRANSACTIONAL (payment lifecycle, state transitions, settlement, rollback); COMPLIANCE AND IDENTITY (KYC onboarding — document and biometric checks; AML detection and SANCTIONS screening while controlling false positives); INVESTMENT AND TREASURY (trade lifecycle OMS/EMS → settlement, derivative pricing, kill switches, latency); OPERATIONAL AND BACK-OFFICE (reconciliation to the General Ledger, End-of-Day/Month/Year cycles, tax reporting, audit trails); SPECIALIZED INSURANCE (policy lifecycle, premiums, claims adjudication, fraud detection)."
      ],
      examInsights: ["ASTQB-Q4 — Compliance and identity workflows are governed by Know Your Customer (KYC) standards."]
    },
    {
      id: '1.2', title: 'Challenges and the Role of Domain Knowledge', level: 'K2', type: 'deep',
      deepPoints: [
        "Generic testing skills aren't enough (complex test basis, precision, regulation). Domain knowledge mitigates: (1) the TEST ORACLE PROBLEM — derive expected results of derivatives pricing, actuarial calculations, yield curves independently; (2) TRANSLATING REGULATORY MANDATES — abstract, interpretable legal text → precise testable acceptance criteria; (3) DATA DEPENDENCIES — e.g. a transaction type requiring a specific tax code, to generate valid test data; (4) END-TO-END TRANSACTION LIFECYCLES — correct capture at entry, consistency through clearing, settlement, currency conversion, final state in accounting, audit trails and reports; (5) RISK-BASED PRIORITIZATION — tell cosmetic defects from failures causing financial loss, fines or reputational damage."
      ],
      examInsights: ["ASTQB-Q5/Q6 — Domain knowledge is needed because regulations are abstract and open to interpretation; data dependencies are one challenge it mitigates."]
    }
  ]
};
