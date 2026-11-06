// CT-FT v1.0 — Chapter 2 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Compliance testing moves beyond finding defects to proving institutional integrity. This chapter covers its objectives and the control vs substantive approaches, the key financial regulations and what they mean for testing, the consequences of non-compliance, what makes regulated finance testing distinctive, and how auditability and continuous automated compliance validation work.",
  keywords: [
    "auditability", "compliance", "continuous automated compliance validation", "control testing", "negative testing",
    "substantive testing", "traceability", "regulatory compliance", "General Data Protection Regulation (GDPR)",
    "Sarbanes-Oxley Act (SOX)", "Digital Operational Resilience Act (DORA)",
  ],
  objectives: [
    { id: "FT-2.1", level: "K2", text: "Summarize the objectives of compliance testing and the relationship between its primary testing approaches" },
    { id: "FT-2.2.1", level: "K2", text: "Explain the testing relevance of key financial regulations and standards" },
    { id: "FT-2.2.2", level: "K1", text: "Recall consequences of non-compliance to finance regulations" },
    { id: "FT-2.3", level: "K2", text: "Summarize the unique characteristics of finance testing" },
    { id: "FT-2.4.1", level: "K2", text: "Understand the fundamental principles of auditability in compliance testing" },
    { id: "FT-2.4.2", level: "K2", text: "Understand the principles and implementation mechanisms of Continuous Automated Compliance Validation (CACV) within the software delivery lifecycle" },
  ],
  sections: {
    "2.1": {
      objective: "FT-2.1",
      body: [
        { type: "p", text: "Compliance testing (also called conformance or regulatory testing) checks that a component or system complies with standards, laws, regulations and contracts. Often classed as non-functional, in finance it also validates functional business logic and data against mandates." },
        { type: "list", intro: "Objectives:", items: [
          "Verification of adherence — reasonable assurance that the system complies with regulations and internal policies.",
          "Risk identification — detect material non-compliance early to avoid penalties, loss and reputational damage.",
          "Control validation — internal controls effectively prevent, detect and correct non-compliance.",
          "Evidence provision — sufficient, relevant, reliable audit evidence of due diligence.",
        ]},
        { type: "table", headers: ["", "Control testing", "Substantive testing"], rows: [
          ["Question", "Are controls designed well and operating effectively and consistently?", "Are transactions, balances and outputs accurate, complete and valid?"],
          ["Focus", "How processing is done — approval workflows, segregation of duties, access controls, automated validation rules", "What the system produces — regardless of whether controls exist or work"],
        ]},
      ],
    },
    "2.2.1": {
      objective: "FT-2.2.1",
      body: [
        { type: "table", headers: ["Regulation", "Area", "What testing must cover"], rows: [
          ["GDPR", "Data protection and privacy", "Lawful processing, consent, data-subject rights, access controls, privacy by design; masked or synthetic personal data; retention and jurisdiction limits"],
          ["SOX", "Financial transparency", "Internal controls: segregation of duties, approval workflows, immutable audit logs, preserved financial history"],
          ["PCI DSS", "Payment security", "Encrypted cardholder data, strong authentication, secure flows; tokenized card numbers, masked logs"],
          ["DORA", "Operational resilience", "ICT resilience: disaster recovery and business continuity, failover, scenario-based tests"],
          ["PSD2", "Payments and open banking", "Strong customer authentication, multi-factor authentication, API security, consent lifecycle"],
          ["Basel III/IV", "Bank capital and risk", "Credit, market and liquidity risk models via stress and scenario testing on large masked or synthetic portfolios"],
          ["AMLD5/AMLD6", "Anti-money laundering", "KYC flows, sanctions screening, alert generation, risk flagging"],
          ["MiCA", "Crypto assets", "Custody safeguards, order integrity, market-abuse detection"],
        ]},
        { type: "p", text: "Some are legally binding, others guide best practice, and they vary by jurisdiction — so compliance frameworks, controls and reporting must be adapted in the test process." },
      ],
    },
    "2.2.2": {
      objective: "FT-2.2.2",
      body: [
        { type: "list", items: [
          "Financial penalties — fines imposed by regulatory bodies (AML, privacy, misreporting).",
          "Legal and regulatory sanctions — lawsuits, criminal liability, mandatory restructuring, external management.",
          "Reputational damage — negative media, investor concern, customer loss.",
          "Business disruption — suspended services, license restrictions, lost revenue and market share.",
          "Operational risk and technical debt — unstable, hard-to-maintain systems; missing security controls invite breaches and fraud.",
        ]},
      ],
    },
    "2.3": {
      objective: "FT-2.3",
      body: [
        { type: "list", items: [
          "Regulatory change-driven — testing is triggered by a constant stream of legislation rather than market feedback, demanding continuous adaptation and impact analysis.",
          "Regulatory-aware requirement analysis — mapping legal and governance mandates into testable specifications.",
          "Negative testing as a necessity — valid-looking but prohibited inputs must be blocked: unauthorized access, limit breaches, sanctions violations, fraud paths.",
          "Compliance-critical test data management — data handling is legally constrained; production data can't simply be copied (Chapter 4).",
          "Evidence-driven testing — testware is systematically collected, retained and managed for auditors; the aim shifts to demonstrating due diligence.",
          "Mandatory non-functional testing — security, performance, reliability and disaster recovery testing required by statute.",
        ]},
      ],
    },
    "2.4.1": {
      objective: "FT-2.4.1",
      body: [
        { type: "p", text: "Auditability is the ability to independently reconstruct, review and verify test activities and system behavior — with documentation that regulators can rely on." },
        { type: "table", headers: ["Component", "Meaning"], rows: [
          ["Bidirectional traceability", "Forward from each regulatory requirement to its test cases; backward from each result or defect to the rule or control objective"],
          ["Immutable evidence retention", "Plans, signed-off requirements, execution logs and screenshots stored tamper-proof"],
          ["Evidence integrity and privacy", "Secure, timestamped audit trails protected from alteration, with sensitive data masked"],
          ["Reproducibility", "Enough configuration and input data for an auditor to re-run a test or replay a transaction with the same result"],
        ]},
      ],
    },
    "2.4.2": {
      objective: "FT-2.4.2",
      body: [
        { type: "p", text: "Continuous Automated Compliance Validation (CACV) embeds regulatory and security controls programmatically throughout delivery, giving continuous, real-time assurance instead of periodic audits — compliance becomes a built-in feature." },
        { type: "list", intro: "Mechanisms:", items: [
          "Compliance as Code — rules in machine-readable, version-controlled form, executed automatically.",
          "Pipeline integration and quality gates — compliance gates in CI/CD block non-compliant code from production.",
          "Continuous Control Monitoring — watching production for configuration drift, e.g. a firewall port opened manually.",
        ]},
        { type: "list", intro: "Workflow (iterative):", items: [
          "Elaboration and definition — derive testable requirements and compliance profiles.",
          "Development — implement requirements as code; map tests to rules for bidirectional traceability.",
          "Automated execution and inspection — tests run continuously in CI/CD; gates enforce adherence.",
          "Evaluation and reporting — immutable evidence and violation reports; drift triggers remediation.",
        ]},
      ],
    },
  },
};
