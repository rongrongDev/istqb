// CT-PT (2018) — Chapter 2 learn content, authored from ISTQB Performance Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "You can't judge performance without measuring it well. This chapter covers which metrics performance tests collect and why they must be defined up front, how to choose and aggregate them, where they come from, and why performance results need careful interpretation.",
  keywords: ["measurement", "metric"],
  objectives: [
    { id: "PTFL-2.1.1", level: "K2", text: "Understand the typical metrics collected in performance testing" },
    { id: "PTFL-2.2.1", level: "K2", text: "Explain why results from performance testing are aggregated" },
    { id: "PTFL-2.3.1", level: "K2", text: "Understand the key sources of performance metrics" },
    { id: "PTFL-2.4.1", level: "K1", text: "Recall the typical results of a performance test" },
  ],
  sections: {
    "2.1": {
      objective: "PTFL-2.1.1",
      body: [
        { type: "list", intro: "Never start performance testing without knowing which measurements and metrics you need. Otherwise:", items: [
          "Nobody knows whether performance is acceptable for operational objectives.",
          "Performance requirements aren't measurable.",
          "Trends that predict degradation can't be spotted.",
          "There's no baseline to compare results against.",
          "Results are judged by someone's opinion.",
          "The tool's results aren't understood.",
        ]},
        { type: "p", text: "Define every metric precisely for the context and refine it after initial tests — 'response time' only becomes actionable when tied to time of day, concurrent users and data volume. Metrics differ with the business context, the operational context and the test objectives: an international web shop and an embedded medical controller need different ones." },
        { type: "table", headers: ["Environment", "Typical metrics"], rows: [
          ["Technical (web, mobile, IoT, desktop, server, mainframe, database, network, embedded)", "Response time; resource utilization (CPU, memory, bandwidth, latency, disk, I/O, threads); throughput of key transactions; batch processing times; errors affecting performance; create/read/update/delete times; background load on shared resources; software metrics such as code complexity"],
          ["Business", "Business process efficiency; throughput of work units (orders per hour); SLA compliance or violation rates; scope of usage; concurrency of usage; timing of usage (e.g. orders at peak)"],
          ["Operational (not user-facing)", "Start-up, backup, shutdown and resumption times; time to restore data from backup; time to raise alerts and warnings"],
        ]},
        { type: "p", text: "More metrics isn't better — each needs consistent collection and reporting. Goal-Question-Metric (set goals, ask how you'd know they're met, attach metrics to the questions) helps, though some health metrics don't map to goals. Expect to add metrics once initial measurements show where to dig." },
      ],
    },
    "2.2": {
      objective: "PTFL-2.2.1",
      body: [
        { type: "p", text: "Detailed metrics make it hard to draw conclusions, especially for business stakeholders whose main concern is whether response times are acceptable. Once the details are understood, aggregate them so that:" },
        { type: "list", items: [
          "Business and project stakeholders see the big picture of system performance.",
          "Performance trends can be identified.",
          "Metrics are reported in an understandable way.",
        ]},
      ],
    },
    "2.3": {
      objective: "PTFL-2.3.1",
      body: [
        { type: "p", text: "Collecting metrics should barely affect the system's performance — the 'probe effect'. The volume, accuracy and speed required make tools essential; combining tools is common but can introduce redundancy." },
        { type: "table", headers: ["Source", "What it provides"], rows: [
          ["Performance test tools", "Metrics as the result of every test — differing in number, presentation (text or graphical dashboards), customization and export options"],
          ["Performance monitoring tools", "Supplementary reporting; ongoing monitoring with alerts for degraded performance and rising errors; detection of suspicious behavior such as DoS or DDoS attacks"],
          ["Log analysis tools", "Metrics and charts compiled from server logs"],
        ]},
        { type: "list", intro: "Server logs typically record:", items: [
          "High resource usage — CPU, disk storage, insufficient bandwidth.",
          "Memory errors and warnings, such as memory exhaustion.",
          "Deadlocks and multi-threading problems, especially in database operations.",
          "Database errors such as SQL exceptions and timeouts.",
        ]},
      ],
    },
    "2.4": {
      objective: "PTFL-2.4.1",
      body: [
        { type: "p", text: "Functional tests usually have clear test oracles — a report total is either right or wrong. Performance tests often don't: stakeholders struggle to state performance requirements and analysts struggle to elicit them, so testers get little guidance on expected results." },
        { type: "example", title: "Misleading raw results", text: "Every potential bottleneck resource stays under 75% utilization — yet the throughput or response time of key transactions is ten times too slow. Look beyond the overall picture." },
        { type: "p", text: "Which results to evaluate depends on the test type — for example, whether the system returns to a steady state after a spike." },
      ],
    },
  },
};
