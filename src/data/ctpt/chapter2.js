// CT-PT (2018) — Chapter 2: Performance Measurement Fundamentals
// summary/deepPoints from syllabus v2018; examInsights from ISTQB Sample Exam A v1.3 and the ASTQB 2019 sample exam
export default {
  id: 2,
  title: 'Performance Measurement Fundamentals',
  time: '55 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "4 questions per sample exam. Know why metrics must be defined BEFORE testing (the six risks), metrics by TECHNICAL / BUSINESS / OPERATIONAL environment (backup restore time = operational!), GQM, why results are AGGREGATED, the three metric sources (performance test tools, monitoring tools, log analysis tools) and the probe effect, and why raw results can mislead.",
  sections: [
    {
      id: '2.1', title: 'Typical Metrics Collected in Performance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Define measurements/metrics first, otherwise: unknown whether performance meets operational objectives; requirements not measurable; trends invisible; no baseline to compare; subjective evaluation; tool results not understood.",
        "Refine metrics in context (e.g. response time by time of day, concurrent users, data volume); they vary with business context, operational context and test objectives.",
        "TECHNICAL environment (web, mobile, IoT, desktop, server, mainframe, DB, network, embedded): response time, resource utilization (CPU, memory, bandwidth, LATENCY, disk, I/O, threads), throughput of key transactions, batch processing time, errors impacting performance, CRUD completion time, background load, software metrics.",
        "BUSINESS environment: business process efficiency, throughput of work units (orders/hour), SLA compliance/violation rates, scope of usage, CONCURRENCY OF USAGE, timing of usage (peak).",
        "OPERATIONAL environment: operational processes (start-up, BACKUP, shutdown, resumption), SYSTEM RESTORATION from backup, alerts and warnings.",
        "Select an obtainable set — more is not better; GOAL-QUESTION-METRIC helps (but health metrics may not map to goals); add metrics after initial measurements."
      ],
      examInsights: [
        "A-Q7 KEY — High network latency could indicate a bandwidth problem that hurts response time.",
        "ASTQB-Q7 — Time to restore a system from backup is an OPERATIONAL environment metric."
      ]
    },
    {
      id: '2.2', title: 'Aggregating Results from Performance Testing', level: 'K2', type: 'skim',
      summary: "Detailed metrics alone make conclusions hard, especially for business stakeholders whose main concern is acceptable response time. Once understood, AGGREGATE metrics so that business/project stakeholders see the BIG-PICTURE status, TRENDS can be identified, and metrics are reported UNDERSTANDABLY.",
      examInsights: [
        "A-Q8 KEY — Yes, aggregate: a better overall picture of system performance and it helps identify trends.",
        "ASTQB-Q8 — Advantage: easier to see the overall performance of a system."
      ]
    },
    {
      id: '2.3', title: 'Key Sources of Performance Metrics', level: 'K2', type: 'deep',
      deepPoints: [
        "Collection must minimally affect performance (the PROBE EFFECT); volume, accuracy and speed require tools (combining tools can add redundancy, see 4.4).",
        "PERFORMANCE TEST TOOLS: always produce metrics — vary in number, display (text vs graphical dashboards), customization, export.",
        "PERFORMANCE MONITORING TOOLS: supplement test tool reporting; ongoing monitoring with alerts to administrators; can detect suspicious behavior (DoS/DDoS).",
        "LOG ANALYSIS TOOLS: scan server logs and compile metrics/charts — high resource usage (CPU, disk, bandwidth), MEMORY errors/exhaustion, DEADLOCKS and multi-threading problems, DATABASE errors (SQL exceptions, timeouts)."
      ],
      examInsights: [
        "A-Q9 KEY — Log analysis tools scan server logs and compile metrics for occurrences recorded during execution.",
        "ASTQB-Q9 — In server logs check for memory errors and database errors that occurred during the test."
      ]
    },
    {
      id: '2.4', title: 'Typical Results of a Performance Test', level: 'K1', type: 'skim',
      summary: "Functional tests usually have clear oracles (a report total is right or wrong); performance testing often lacks them — stakeholders are bad at stating performance requirements and BAs/POs at eliciting them, so testers get little guidance on expected results. Look closely: raw results can MISLEAD — e.g. all bottleneck resources under 75% utilization while key transactions are an order of magnitude too slow. Results evaluated depend on the test type (spike tests: does the system return to a steady state?).",
      examInsights: [
        "A-Q10 KEY — Typical spike test failure: the system handles a sudden burst but cannot resume a steady state.",
        "ASTQB-Q10 — Many users acting at the same time → concurrency of usage is the result of interest."
      ]
    }
  ]
};
