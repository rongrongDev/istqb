// CT-FT v1.0 — Chapter 2: Compliance Testing
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 2,
  title: 'Compliance Testing',
  time: '80 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "Ten questions in the ASTQB sample — the heaviest chapter. Know the four compliance testing objectives, CONTROL testing (how processing is done) vs SUBSTANTIVE testing (what the system produces), the regulation table (GDPR, SOX, PCI DSS, DORA, PSD2, Basel III/IV, AMLD5/6, MiCA) with what each means for testing, the consequences of non-compliance, the six distinctive characteristics of regulated finance testing, the four auditability components and CACV (Compliance as Code, pipeline gates, continuous control monitoring for drift).",
  sections: [
    {
      id: '2.1', title: 'Compliance Testing Objectives and Approaches', level: 'K2', type: 'deep',
      deepPoints: [
        "COMPLIANCE TESTING (conformance/regulatory testing) checks compliance with standards, laws, regulations and contracts; often non-functional but in finance also validates functional logic and data against mandates.",
        "Objectives: VERIFICATION OF ADHERENCE (regulations and internal policies); RISK IDENTIFICATION (detect material non-compliance early); CONTROL VALIDATION (internal controls prevent, detect, correct); EVIDENCE PROVISION (sufficient, relevant, reliable audit evidence of due diligence).",
        "CONTROL TESTING: are internal controls designed appropriately and operating effectively, consistently, over the period — approval workflows, segregation of duties, access controls, automated validation rules (HOW processing is done).",
        "SUBSTANTIVE TESTING: directly examine transactions, balances, outputs for accuracy, completeness and validity (WHAT the system produces), regardless of controls."
      ],
      examInsights: ["ASTQB-Q7–Q9 — Complying with regulations AND internal policies = verification of adherence; supporting an audit = evidence provision; examining outputs for accuracy, completeness, validity = substantive testing."]
    },
    {
      id: '2.2.1', title: 'Key Financial Regulations and Their Testing Relevance', level: 'K2', type: 'deep',
      deepPoints: [
        "GDPR (data protection, privacy): lawful processing, consent, data-subject rights, access controls, privacy by design; masked/synthetic PII; retention and jurisdiction limits.",
        "SOX (financial transparency): internal controls — segregation of duties, approval workflows, IMMUTABLE AUDIT LOGS, preserved financial history.",
        "PCI DSS (payment security): ENCRYPTION of cardholder data, strong authentication, secure flows; tokenized PANs, masked logs.",
        "DORA (operational resilience): ICT resilience — DR/BCP, failover, scenario-based testing.",
        "PSD2 (payments, open banking): STRONG CUSTOMER AUTHENTICATION (SCA), MFA, API security, consent lifecycle.",
        "BASEL III/IV (bank capital and risk): credit, market and liquidity RISK MODELS via stress and scenario testing.",
        "AMLD5/AMLD6 (anti-money laundering): KYC flows, sanctions screening, alerts and risk flagging.",
        "MiCA (crypto assets): custody safeguards, order integrity, market-abuse detection.",
        "Regulations vary by region and jurisdiction → adapt frameworks, controls and reporting."
      ],
      examInsights: ["ASTQB-Q10/Q11 — PCI DSS → encryption of cardholder data, strong authentication; Basel III/IV → credit, market and liquidity risk models via stress and scenario testing."]
    },
    {
      id: '2.2.2', title: 'Consequences of Non-Compliance', level: 'K1', type: 'skim',
      summary: "FINANCIAL PENALTIES imposed by REGULATORY BODIES (AML, privacy, misreporting); LEGAL AND REGULATORY SANCTIONS (lawsuits, criminal liability, mandatory restructuring, external management); REPUTATIONAL DAMAGE (media, investors, customer attrition); BUSINESS DISRUPTION (service suspension, license restrictions, revenue and market-share loss); OPERATIONAL RISKS AND TECHNICAL DEBT (unstable, unmaintainable systems; missing security controls → breaches and fraud). Hence integrate compliance validation into development and testing.",
      examInsights: ["ASTQB-Q12 — Fines for non-compliance are imposed by the regulatory body."]
    },
    {
      id: '2.3', title: 'Distinctive Characteristics of Regulated Finance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "REGULATORY CHANGE-DRIVEN testing — triggered by legislation, not market feedback → continuous adaptation, impact analysis, rapid response.",
        "REGULATORY-AWARE REQUIREMENT ANALYSIS — map legal and compliance mandates into testable specifications (adherence over business utility).",
        "NEGATIVE TESTING as a regulatory necessity — valid-looking but prohibited inputs; block unauthorized access, limit breaches, sanctions violations; find fraud paths.",
        "COMPLIANCE-CRITICAL TEST DATA MANAGEMENT — legally constrained; production data can't simply be copied.",
        "EVIDENCE-DRIVEN testing — systematic collection, retention and management of testware for auditors; goal shifts to demonstrating DUE DILIGENCE.",
        "MANDATORY NON-FUNCTIONAL testing — statutory security, performance, reliability, DR/BCP validation."
      ],
      examInsights: ["ASTQB-Q13/Q14 — Compliance-critical test data management handles data per applicable regulations; evidence-driven testing systematically collects, retains and manages testware to prove due diligence."]
    },
    {
      id: '2.4.1', title: 'Auditability', level: 'K2', type: 'deep',
      deepPoints: [
        "Auditability = being able to independently reconstruct, review and verify test activities and SUT behavior, with rigorous documentation as evidence for regulators.",
        "Components: BIDIRECTIONAL TRACEABILITY (regulation → test cases forward; defects/results → rule or control objective backward); IMMUTABLE EVIDENCE RETENTION (plans, signed-off requirements, execution logs, screenshots in tamper-proof form); EVIDENCE INTEGRITY AND PRIVACY (secure timestamped audit trails, protected from alteration, with MASKING of sensitive data); REPRODUCIBILITY (capture configuration and inputs so an auditor can re-execute or replay with the same result)."
      ],
      examInsights: ["ASTQB-Q15 — Capturing steps, configuration, preconditions and inputs so tests can be re-executed = reproducibility."]
    },
    {
      id: '2.4.2', title: 'Continuous Automated Compliance Validation (CACV)', level: 'K2', type: 'deep',
      deepPoints: [
        "CACV embeds regulatory and security controls programmatically throughout delivery — real-time, continuous assurance instead of periodic point-in-time audits; compliance becomes a built-in feature.",
        "Mechanisms: COMPLIANCE AS CODE (machine-readable, version-controlled rules); PIPELINE INTEGRATION AND QUALITY GATES (compliance gates block non-compliant code); CONTINUOUS CONTROL MONITORING (detect configuration DRIFT in production, e.g. a manually opened firewall port).",
        "Workflow: ELABORATION AND DEFINITION (testable requirements, compliance profiles) → DEVELOPMENT (requirements as code, tests mapped to rules, bidirectional traceability) → AUTOMATED EXECUTION AND INSPECTION (in CI/CD with gates) → EVALUATION AND REPORTING (immutable evidence, violation reports, drift remediation)."
      ],
      examInsights: ["ASTQB-Q16 — Continuous Control Monitoring determines whether configuration drift has occurred in a deployed system."]
    }
  ]
};
