// CT-PT (2018) — Chapter 3: Performance Testing in the Software Lifecycle
// summary/deepPoints from syllabus v2018; examInsights from ISTQB Sample Exam A v1.3 and the ASTQB 2019 sample exam
export default {
  id: 3,
  title: 'Performance Testing in the Software Lifecycle',
  time: '195 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "7 questions per sample exam incl. two K4 scenarios. Map performance work onto the ISTQB test process (risk analysis in PLANNING; ordering into procedures in IMPLEMENTATION), memorize the performance RISKS PER ARCHITECTURE (single computer, multi-tier, distributed, virtualized, cloud, client-server, mobile, embedded, mainframe — memory leaks in C/C++), the 4-step performance risk process started EARLY and repeated, and performance activities per lifecycle (sequential, iterative/Agile incl. CI, COTS/supplier).",
  sections: [
    {
      id: '3.1', title: 'Principal Performance Testing Activities', level: 'K2', type: 'deep',
      deepPoints: [
        "Iterative: each test's insights optimize parameters for the next until objectives are met; aligned with the ISTQB test process.",
        "PLANNING: allocate environments, data, tools, people; set SCOPE; RISK IDENTIFICATION AND ANALYSIS (revisited as conditions change).",
        "MONITORING AND CONTROL: control measures for issues — more load generation capacity, changed hardware, network components or software; evaluate exit criteria.",
        "ANALYSIS: from performance requirements, objectives, SLAs, IT architecture, process models (spreadsheets, capacity planning tools); identify load levels, timing conditions, transactions; choose test types (load, stress, scalability…).",
        "DESIGN: modular performance test cases as building blocks. IMPLEMENTATION: order test cases into PROCEDURES reflecting user steps; set up/reset the environment; representative production-like test data. EXECUTION: run (tools), evaluate against requirements, report defects.",
        "COMPLETION: test summary report with aggregated metrics and dashboards for architects, managers, POs; performance testing is ONGOING at all levels; archive or hand over testware."
      ],
      examInsights: [
        "A-Q11 / A-Q12 KEY — Risk identification and analysis happen in test PLANNING; ordering test cases into performance test procedures happens in test IMPLEMENTATION (and execution).",
        "ASTQB-Q11/Q12 — Monitoring & control matter because environment changes can invalidate results; performance testing runs multiple times at all levels."
      ]
    },
    {
      id: '3.2', title: 'Performance Risks for Different Architectures', level: 'K2', type: 'deep',
      deepPoints: [
        "SINGLE COMPUTER: excessive resource use (MEMORY LEAKS, background security software, slow storage/fragmentation, OS mismanagement); inefficient algorithms.",
        "MULTI-TIER: all of the above per server + poor/non-scalable DB design, network bottlenecks, inadequate bandwidth/capacity on any server.",
        "DISTRIBUTED: + critical workflows/dataflows to/from/through unreliable or unpredictable REMOTE SERVERS (connection problems, intermittent load).",
        "VIRTUALIZED: excessive load on the hardware across VMs; improper host VM configuration → inadequate resources.",
        "DYNAMIC/CLOUD: self-scaling mitigates risks, but misconfiguring scaling at setup or updates is a risk.",
        "CLIENT-SERVER: client code has single-computer risks + server risks + connection speed/reliability, CONGESTION AT THE CLIENT CONNECTION POINT (public Wi-Fi), firewalls, packet inspection, load balancing.",
        "MOBILE: client-server/web risks + limited, variable resources and CONNECTIVITY (location, battery, charge, memory, temperature), slow sensor/radio dataflows, interactions with other apps/services.",
        "EMBEDDED REAL-TIME: mobile-like risks incl. connectivity — but slowdowns can be SAFETY-critical (braking).",
        "MAINFRAME: predictable and fast as designed, but new access via APIs/web services/DB causes unexpected loads.",
        "Systems combine architectures → all relevant risks apply. Other technical choices matter: memory leaks more common in C/C++ (direct heap management); relational vs non-relational DBs; recursive vs iterative algorithms."
      ],
      examInsights: [
        "A-Q13 / A-Q14 KEY — Connectivity risks: mobile and embedded; memory leak risks: single computer, client-server/browser, mobile, embedded.",
        "A-Q15 KEY — Software in C++ (vs Python): monitor memory use (manual heap management → leaks).",
        "ASTQB-Q13–Q15 — Distributed: dataflows to/from remote servers; client-server: network at the client connection point; virtualized: excessive hardware load from improper host VM configuration."
      ]
    },
    {
      id: '3.3', title: 'Performance Risks Across the Lifecycle', level: 'K4', type: 'deep',
      deepPoints: [
        "Process: (1) IDENTIFY risks (time behavior, resource utilization, capacity); (2) ASSESS — cover relevant architectures, likelihood × impact with clear criteria; (3) MITIGATE per risk level; (4) MANAGE continuously until release.",
        "Participants: BUSINESS stakeholders who know how production performance problems hit customers/business (usage, criticality, financial/reputational damage, liability → impact) and TECHNICAL stakeholders who understand performance implications of requirements, architecture, design, implementation (→ likelihood).",
        "Start EARLY and REPEAT — don't rely on late system/system integration testing; e.g. many-to-many joins in a poor DB design surface only with large data in system test, but a technical review with DB engineers predicts them.",
        "Mitigation spans the whole process — if load can't be specified early, design for highly variable scalability (on-demand cloud).",
        "Residual risk must be stated realistically and specifically (e.g. % of customers likely to exceed a delay threshold, not 'delays are still possible')."
      ],
      examInsights: [
        "A-Q16 KEY (K4) — Best time to analyze/assess performance risks: repeatedly throughout requirements, development and testing.",
        "ASTQB-Q16 — Business stakeholders in a short session best analyze user-facing risks such as the time needed to get a result to a user."
      ]
    },
    {
      id: '3.4', title: 'Performance Testing Activities per Lifecycle', level: 'K4', type: 'deep',
      deepPoints: [
        "SEQUENTIAL: performance criteria in the ACCEPTANCE CRITERIA from the outset; each activity builds on the previous: concept (goals as acceptance criteria) → requirements (defined, correct) → analysis & design (design reflects requirements) → coding (efficient code) → component → component integration → system (production-representative; interfaces may be simulated if realistic) → system integration (entire system) → acceptance (meets original needs).",
        "ITERATIVE/INCREMENTAL (Agile): in the first iteration or a DEDICATED performance iteration; possibly a separate performance team. CI: performance tests at build level, concerns = on-demand (cloud) environment, which subset to automate, new tests per change (main objective: change doesn't hurt performance), rapid subset execution.",
        "Agile lifecycle: release planning (risks across iterations, final testing), iteration planning (risks per story), user stories ('non-functional' stories with performance acceptance criteria), test design, coding (component-level tuning), testing/evaluation (wider scope may need a dedicated iteration), delivery (monitor in production).",
        "COTS/SUPPLIER-ACQUIRER: test from both perspectives; customer usually validates; custom vendor software → performance requirements in the CONTRACT; COTS → customer alone tests in a realistic environment before deployment."
      ],
      examInsights: [
        "A-Q17 KEY (K4) — Response-time risk from database design → conduct a technical review of the database (early), not just late load tests.",
        "ASTQB-Q17 — Agile mobile project: run the full performance test as part of a separate (dedicated) iteration."
      ]
    }
  ]
};
