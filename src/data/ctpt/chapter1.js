// CT-PT (2018) — Chapter 1: Basic Concepts
// summary/deepPoints from syllabus v2018; examInsights from ISTQB Sample Exam A v1.3 and the ASTQB 2019 sample exam
export default {
  id: 1,
  title: 'Basic Concepts',
  time: '60 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "6 questions per sample exam. Know the three performance efficiency sub-characteristics (time behavior, resource utilization, capacity), the five principles (aligned to stakeholders, REPRODUCIBLE, understandable/comparable, representative environments, affordable), the definitions of the eight performance test types (load vs stress vs spike vs endurance… are classic swap traps), static vs dynamic performance testing per level, the four load generation options, and the failure modes with their causes.",
  sections: [
    {
      id: '1.1', title: 'Principles of Performance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Performance efficiency (ISO 25010) has three sub-characteristics: TIME BEHAVIOR (most common objective — respond within specified time/conditions, from end-to-end response to CPU cycles), RESOURCE UTILIZATION (e.g. limited RAM), CAPACITY (behavior at required limits — users, data volumes). All three affect SCALABILITY.",
        "Testing under load can also expose functional, usability and other issues; relevant beyond web (client-server, distributed, embedded); often iterative experimentation to support architecture decisions.",
        "Principles: tests ALIGNED to stakeholder expectations (users, designers, operations); REPRODUCIBLE (statistically identical results within tolerance on an unchanged system); results UNDERSTANDABLE and COMPARABLE to expectations; run on complete or partial systems/environments REPRESENTATIVE of production where resources allow; practically AFFORDABLE within the project timeframe."
      ],
      examInsights: [
        "A-Q1 KEY — Principle: test results must be reproducible when the SUT is unchanged. TRAP: 'should match stakeholders' expectations' (they must be COMPARABLE to them, not match).",
        "ASTQB-Q1 — Results must be in a form that allows comparison to user expectations; 'identical to production' is wrong (statistically identical at best)."
      ]
    },
    {
      id: '1.2', title: 'Types of Performance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "PERFORMANCE testing = umbrella term for responsiveness under different loads.",
        "LOAD: increasing levels of anticipated REALISTIC load (controlled numbers of concurrent users/processes).",
        "STRESS: peak loads AT OR BEYOND limits, and reduced resource availability (CPU, bandwidth, memory).",
        "SCALABILITY: ability to meet FUTURE efficiency requirements (grow users/data) without failing → set thresholds to monitor in production.",
        "SPIKE: sudden bursts of peak load and RETURN TO A STEADY STATE.",
        "ENDURANCE: stability over an operational time frame — memory leaks, DB connections, thread pools.",
        "CONCURRENCY: specific actions occurring simultaneously (mass logins) — hard to find and reproduce.",
        "CAPACITY: how many users/transactions (or data volumes) the system supports while meeting objectives."
      ],
      examInsights: [
        "A-Q2 / A-Q3 KEY — Spike = quick and extreme changes in load; load = gradually increased loads up to the expected maximum.",
        "ASTQB-Q2/Q3 — Load (realistic, increasing) vs stress (at/beyond peak); capacity grows as memory is added → scalability testing."
      ]
    },
    {
      id: '1.3', title: 'Testing Types in Performance Testing', level: 'K1', type: 'skim',
      summary: "STATIC testing matters MORE for performance than for functional suitability because many critical performance defects are introduced in architecture and design (or requirements missing response time/throughput/resource targets, load, constraints): reviews of requirements, DB schemas/ERDs/stored procedures/queries, system and network ARCHITECTURE, critical code (complex algorithms). DYNAMIC testing as early as possible: UNIT (profiling for bottlenecks, dynamic analysis of resource utilization), component integration (key use cases/workflows), system (end-to-end under various loads), system integration (data flows across interfaces, 'user' may be another system), ACCEPTANCE (confidence and fine-tuning, generally NOT to find defects). Higher levels need realistic environments, data and loads; in Agile start early; simulators for new hardware but move to real hardware ASAP.",
      examInsights: [
        "A-Q4 KEY — During unit testing: evaluate resource utilization and potential bottlenecks (profiling, dynamic analysis).",
        "ASTQB-Q4 — An important static activity: reviewing the system architecture."
      ]
    },
    {
      id: '1.4', title: 'The Concept of Load Generation', level: 'K2', type: 'deep',
      deepPoints: [
        "A load differs from functional inputs: it represents MANY users, may need dedicated hardware/tools, and depends on the ABSENCE OF FUNCTIONAL DEFECTS that would block execution.",
        "Via the UI: fine for few users; can reuse functional tools; impractical as users grow; UI changes hurt repeatability/maintenance; most representative for end-to-end.",
        "Via CROWDS: many real testers worldwide on varied devices — huge numbers but less reproducible/precise, complex to organize.",
        "Via the API: like the UI but less sensitive to UI changes; transactions processed as if entered via the UI; scripts simulate more users.",
        "Via CAPTURED COMMUNICATION PROTOCOLS: record at protocol level and replay for very large, repeatable, reliable loads (tool-based, 4.2.6–4.2.7)."
      ],
      examInsights: [
        "A-Q5 KEY — Use the API when the UI is likely to change but transactions must be processed as if created through the UI.",
        "ASTQB-Q5 — UI stability matters for UI-generated load because interface changes break repeatability and raise maintenance."
      ]
    },
    {
      id: '1.5', title: 'Common Performance Failure Modes and Their Causes', level: 'K2', type: 'deep',
      deepPoints: [
        "SLOW RESPONSE AT ALL LOAD LEVELS → bad DB design/implementation, network latency, background loads (visible even in functional/usability testing).",
        "SLOW UNDER MODERATE-TO-HEAVY LOAD (within normal range) → SATURATION of one or more resources, varying background loads.",
        "DEGRADED RESPONSE OVER TIME → MEMORY LEAKS, disk fragmentation, growing network load, file repository growth, unexpected DB growth.",
        "INADEQUATE/GRACELESS ERROR HANDLING under heavy or over-limit load → insufficient resource pools, undersized queues and stacks, too-rapid time-outs.",
        "Examples: web page > ~7 s (industry rule of thumb); crash on sudden ticket-sale burst (capacity); slow large downloads (data volume capacity); batch not finished before online hours; real-time RAM exhaustion; real-time component too slow → performance profiling."
      ],
      examInsights: [
        "A-Q6 KEY — A memory leak shows up as response time degrading over time.",
        "ASTQB-Q6 — Slow only under heavy load → saturation or exhaustion of a system resource."
      ]
    }
  ]
};
