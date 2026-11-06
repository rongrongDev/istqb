// CT-FT v1.0 — Chapter 5: Functional and Non-Functional Testing
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 5,
  title: 'Functional and Non-Functional Testing',
  time: '165 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "The longest chapter, eight questions in the ASTQB sample. Know the black-box techniques applied to finance (BVA at 0.01 precision, decision tables, account state transitions), CALCULATION testing, EXPLORATORY testing and BACK-TO-BACK testing with their pros and cons, the six performance risks (scalability, CONCURRENCY, infrastructure, data integrity, technical debt, third parties), what triggers performance testing and the extra activities (stress up to ~200% failing gracefully, endurance, external system availability, failover, data center availability), security test types and areas, availability metrics (RTO, RPO, MTBF, MTTF, MTTR), and AI assistants per test activity.",
  sections: [
    {
      id: '5.1', title: 'Functional Testing of Financial Systems', level: 'K3', type: 'deep',
      deepPoints: [
        "High cost of failure → comprehensive, compliant, risk-based functional testing of critical flows (account management, transaction processing, reporting), scope and coverage strategy, risk prioritization, regulatory compliance (GDPR, PCI DSS).",
        "Black-box techniques: EQUIVALENCE PARTITIONING (transaction correctness and consistency); BOUNDARY VALUE ANALYSIS (amount limits with currency precision, e.g. 0.01 steps, rounding at the smallest unit, just below/at/above); DECISION TABLES (combinations of business rules); STATE TRANSITION (account states active/inactive/blocked).",
        "CALCULATION TESTING: recalculate with known formulas (cash flows, NPV, option prices), focusing on formalized relationships between variables — reliable and documentable, but limited for complex analytics; needs deep domain expertise.",
        "EXPLORATORY TESTING: find behavioral patterns without explicit calculations — input/output relationships, assumptions, limit values (exceeding a transfer limit) — quick, broad, low overhead, but hard to automate/put in CI/CD; needs qualified domain testers.",
        "BACK-TO-BACK TESTING: run the same inputs through two versions/systems and compare outputs — effective for regression; hard to set up environments and synchronize inputs across versions; analyzing discrepancies needs deep knowledge of both systems.",
        "Choose by time, coverage and skills (ATM: BVA for min/max, back-to-back, fee/currency calculation checks, exploratory for new models). Practices: real user feedback, REAL DEVICES (emulators aren't long-term), production-like data, business experts and testers aligned."
      ],
      examInsights: ["ASTQB-Q28 (K3) — Same inputs into old and new applications, compare outputs → back-to-back testing."]
    },
    {
      id: '5.2', title: 'Performance Risks in Finance', level: 'K2', type: 'deep',
      deepPoints: [
        "Performance risk = unacceptable response times, delays or throughput loss when load exceeds normal levels, while preserving data integrity.",
        "Challenges: SCALABILITY (payment system fails at peaks — holidays, Christmas, Black Friday, market crashes); CONCURRENCY DEFECTS (simultaneous requests, e.g. everyone reloading at once); INFRASTRUCTURE LIMITATIONS (outdated hardware, can't move to cloud quickly); DATA INTEGRITY VIOLATIONS under heavy load (annual regulatory reporting → data loss, sanctions); TECHNICAL DEBT (aging software and hardware); THIRD-PARTY DEPENDENCIES (vendors, cloud, payment gateways).",
        "Consequences: financial loss, reputational harm (social media complaints). Mitigation: continuous monitoring, training, regular audits, static analysis of load metrics vs a baseline with BAs, scheduled performance and availability testing."
      ],
      examInsights: ["ASTQB-Q29/Q30 — Failure during a Christmas sale = scalability; a crash at 8:05 when everyone logs in at once = concurrency defects."]
    },
    {
      id: '5.3', title: 'Load and Stress Testing in Finance Contexts', level: 'K3', type: 'deep',
      deepPoints: [
        "Performance testing should be MANDATORY in regulated environments, ideally in a dedicated, isolated, production-like environment (configuration, versions, data structure and volume); often daily, nightly or continuous monitoring.",
        "Triggers: initial deployment or major release (e.g. new fraud-monitoring integration); significant changes (major DB upgrade, monolith → microservices); EXPECTED LOAD PROFILE CHANGES (new offices, more clients).",
        "Tasks: initiate → gather volumetric historical PEAK metrics → plan and define SLAs → prepare environment, data, tools → execute → analyze and report.",
        "Activities: LOAD (functionality at specified load, TPS); STRESS (beyond peak, e.g. up to 200% — degrade gracefully with meaningful errors and recover; latency, error rate, throughput, CPU/memory); ENDURANCE (stable under sustained load, memory leaks); EXTERNAL SYSTEM AVAILABILITY (slow/timeout/unavailable dependencies — circuit breakers, retries without leaks); FAILOVER (restart, crash resilience, recovery, backup; pods deleted; spike tests); DATA CENTER AVAILABILITY (balancing between data centers during downtime)."
      ],
      examInsights: ["ASTQB-Q31 (K3) — Preparing for at least 30% more transaction volume → load testing."]
    },
    {
      id: '5.4', title: 'Security Testing and Availability Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "SECURITY testing protects confidentiality, integrity and availability against fraud and loss throughout the lifecycle (early standards gaps, THREAT MODELING, expert design reviews). Types: vulnerability scanning, penetration testing, SAST/DAST, dependency and third-party component analysis.",
        "Finance areas: cloud configurations and SECRETS management (payment processing); DATA ENCRYPTION algorithms (accounting, banking); MFA, role-based access, token lifecycles, API traffic through dedicated gateways (mobile/web banking); security LOG integrity, configuration, alerting (insurance). Practices: specialized tools, OWASP, DevSecOps, threat modeling, supply-chain risk, secure test environments and data, alignment with compliance testing.",
        "AVAILABILITY testing: continuous operation during peaks to avoid lost transactions, revenue and trust. Metrics: RTO (IT services), RPO (key transactions); execution/response time, throughput; failure rate, MTBF, MTTF, availability; load balancing, failover, MTTR. Strategies: load/stress with peak-hour scenarios and auto-scaling; systematic failover testing."
      ],
      examInsights: ["ASTQB-Q32/Q33 — Testing encryption algorithms = security testing; continuous service that recovers under adverse conditions = availability testing."]
    },
    {
      id: '5.5', title: 'GenAI in Finance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "With prompt engineering, GenAI supports analysis, design, implementation, monitoring/control and completion in a regulated environment.",
        "AI assistants: DEVELOPMENT (generate unit tests, fix minor defects per coding standards); TEST ANALYSIS (analyze APIs, suggest requirements and TEST CONDITIONS for review); DESIGN AND IMPLEMENTATION (sync test models from code, generate UI/API tests from requirements, upload results, check tests for security-requirement violations, low-code/no-code automation); MONITORING AND CONTROL (analyze logs for anomalies and defects); COMPLETION (create and validate test and defect reports).",
        "Challenges: scarce, costly high-quality labeled data. Prioritize data integrity, regulation, skills, infrastructure; manage economics with pilots; measure with clear metrics (cycle time, defect rates); roles expand to risk mitigation, AI oversight, AI debugging."
      ],
      examInsights: ["ASTQB-Q34/Q35 — AI assistants can analyze an API and determine test conditions; for compliance they can summarize regulations and requirements into test conditions."]
    }
  ]
};
