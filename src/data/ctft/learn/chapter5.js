// CT-FT v1.0 — Chapter 5 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Financial software must be correct, fast under peak load, secure and always available. This chapter applies functional test techniques to finance, explains the performance risks of peak periods and how to load and stress test financial systems, covers security and availability testing needs, and shows how GenAI can support finance testing.",
  keywords: [
    "availability", "back-to-back testing", "calculation testing", "exploratory testing", "functional testing", "load testing",
    "non-functional testing", "performance testing", "security testing", "stress testing", "GenAI",
  ],
  objectives: [
    { id: "FT-5.1", level: "K3", text: "Apply functional testing to validate financial systems" },
    { id: "FT-5.2", level: "K2", text: "Explain the performance risks in financial systems during peak periods" },
    { id: "FT-5.3", level: "K3", text: "Apply load testing and stress testing in finance-specific contexts" },
    { id: "FT-5.4", level: "K2", text: "Explain security testing and availability testing needs in financial systems" },
    { id: "FT-5.5", level: "K2", text: "Explain how GenAI can support and improve finance testing" },
  ],
  sections: {
    "5.1": {
      objective: "FT-5.1",
      body: [
        { type: "p", text: "Failures involve real money and sensitive data, so functional testing must be comprehensive, compliant and risk-based: verify core functions (accounts, transactions, reporting), define scope and coverage, prioritize by risk, and confirm regulatory compliance." },
        { type: "table", headers: ["Technique", "Finance use"], rows: [
          ["Equivalence partitioning", "Transaction correctness and consistency"],
          ["Boundary value analysis", "Amount limits at currency precision (e.g. 0.01 steps), rounding at the smallest unit, just below/at/above limits"],
          ["Decision table testing", "Combinations of business rules and conditions"],
          ["State transition testing", "Account states such as active, inactive, blocked"],
        ]},
        { type: "table", headers: ["Approach", "How it works", "Pros", "Cons / challenges"], rows: [
          ["Calculation testing", "Recalculate with known formulas (cash flows, net present value, option prices), checking relationships between variables", "Reliable, formalized, documentable", "Limited for complex analytics; needs deep domain expertise"],
          ["Exploratory testing", "Explore behavioral patterns without explicit calculations — input/output relationships, assumptions, limit values", "Quick, broad, low overhead", "Hard to automate or put in CI/CD; needs skilled domain testers"],
          ["Back-to-back testing", "Run the same inputs through two versions or systems and compare the outputs", "Effective for regression", "Environments and input synchronization are hard to set up; analyzing differences needs knowledge of both systems"],
        ]},
        { type: "example", title: "ATM", text: "Boundary values for minimum and maximum amounts, back-to-back tests against the old version, calculation checks of fees and currency conversion, and exploratory testing of a new ATM model." },
        { type: "list", intro: "Best practices:", items: [
          "Collect real user feedback.",
          "Use real devices — emulators and simulators aren't a long-term solution.",
          "Test with production-like data (anonymized real or realistic synthetic).",
          "Align business experts and testers for shared understanding and accountability.",
        ]},
      ],
    },
    "5.2": {
      objective: "FT-5.2",
      body: [
        { type: "p", text: "Performance risk is the chance of unacceptable response times, delays or throughput loss when load rises above normal — while data integrity must still be preserved." },
        { type: "table", headers: ["Challenge", "Example"], rows: [
          ["Scalability", "A payment system fails at peaks: public holidays, Christmas, Black Friday, market crashes"],
          ["Concurrency defects", "After an outage, all trading staff reload the application at once"],
          ["Infrastructure limitations", "Outdated hardware; no quick move to cloud solutions"],
          ["Data integrity violations", "Data lost under heavy load during annual regulatory reporting — leading to sanctions"],
          ["Technical debt", "Aging software and hardware fail early, raise costs and cause outages"],
          ["Third-party dependencies", "Vendors, cloud services or payment gateways become unavailable"],
        ]},
        { type: "p", text: "Ignoring these risks brings financial loss and reputational harm. Counter them with continuous monitoring, training, regular audits, static analysis of load metrics against an agreed baseline with business analysts, and regularly scheduled performance and availability testing." },
      ],
    },
    "5.3": {
      objective: "FT-5.3",
      body: [
        { type: "p", text: "Performance testing should be mandatory in regulated environments, ideally in a dedicated, isolated environment closely matching production in configuration, versions, external services and data volume — run daily, nightly or as continuous monitoring." },
        { type: "list", intro: "Triggers:", items: [
          "First production deployment or a major release (e.g. adding a fraud-monitoring integration).",
          "Significant changes — a major database upgrade, a move from monolith to microservices.",
          "Expected load profile changes — e.g. new offices bringing more clients.",
        ]},
        { type: "p", text: "Typical steps: initiate; gather and analyze historical peak volumes; plan and define acceptable metrics (SLAs); prepare environment, data and tools; execute; analyze and report." },
        { type: "table", headers: ["Activity", "Purpose"], rows: [
          ["Load testing", "Functionality at specified load levels (e.g. transactions per second)"],
          ["Stress testing", "Load beyond the expected peak (e.g. up to 200%) — degrade gracefully with meaningful errors, then recover; watch latency, error rate, throughput, CPU and memory"],
          ["Endurance testing", "Stability under sustained load; catch degradation such as memory leaks"],
          ["External system availability", "Behavior when dependencies are slow, time out or fail — circuit breakers and retries must not cause degradation or leaks"],
          ["Failover testing", "Restart and crash resilience, recovery speed, backups (e.g. deleting cloud pods); spike resilience"],
          ["Data center availability", "Correct request balancing between data centers during downtime"],
        ]},
      ],
    },
    "5.4": {
      objective: "FT-5.4",
      body: [
        { type: "p", text: "Security testing verifies that confidentiality, integrity and availability are protected, preventing fraud and loss — integrated throughout the lifecycle via early standards checks, threat modeling and expert design reviews. Test types include vulnerability scanning, penetration testing, SAST/DAST, and dependency and third-party component analysis." },
        { type: "list", intro: "Key finance areas:", items: [
          "Cloud configurations and secrets management (e.g. payment processing).",
          "Data encryption algorithms (accounting, banking).",
          "Multi-factor authentication, role-based access, token lifecycles, and routing API traffic through dedicated gateways (mobile and web banking).",
          "Security log integrity, configuration and alerting (e.g. protecting insurance policyholders' data).",
        ]},
        { type: "p", text: "Good practice: specialized tools, standards such as OWASP, DevSecOps, threat modeling, managing third-party and supply-chain risk, secure test environments and data, and alignment with compliance testing." },
        { type: "table", headers: ["Availability objective", "Metrics"], rows: [
          ["Recovery targets", "Recovery Time Objective (RTO) for IT services; Recovery Point Objective (RPO) for key transactions"],
          ["Performance under load", "Execution time, response time, throughput of key transactions"],
          ["System reliability", "Failure rate, MTBF, MTTF, availability"],
          ["Resilience", "Load balancing, failover tests, MTTR"],
        ]},
        { type: "p", text: "Strategies: load and stress tests with peak-hour scenarios that also validate automatic scaling, and systematic failover tests. Security testing defends against attacks; availability testing proves continuity and recovery under adverse conditions." },
      ],
    },
    "5.5": {
      objective: "FT-5.5",
      body: [
        { type: "p", text: "Using prompt engineering, GenAI can make testing in this regulated environment more efficient and consistent across the whole test process." },
        { type: "table", headers: ["Activity", "How an AI assistant helps"], rows: [
          ["Development", "Generates unit tests and fixes minor defects following the organization's coding standards"],
          ["Test analysis", "Analyzes APIs and suggests requirements and test conditions for review"],
          ["Design and implementation", "Builds test models from code, generates UI and API tests from requirements, uploads results, checks tests against security requirements, enables low-code/no-code automation"],
          ["Monitoring and control", "Analyzes test logs to spot anomalies and defects"],
          ["Completion", "Helps create and validate test and defect reports"],
        ]},
        { type: "p", text: "Challenges include scarce, expensive high-quality labeled data. Prioritize data integrity, regulation, skills and infrastructure; manage economic risk with pilots; measure success with clear metrics such as test cycle time and defect rates. Quality roles will grow to include AI oversight, risk mitigation and AI debugging skills." },
        { type: "seealso", label: "CT-GenAI Learn", href: "/ctgenai-learn", text: "prompt engineering for test tasks and managing GenAI risks in depth" },
      ],
    },
  },
};
