// CT-PT (2018) — Chapter 1 learn content, authored from ISTQB Performance Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Performance is a big part of a good user experience. This chapter defines performance efficiency and its three sub-characteristics, the principles that make performance tests trustworthy, the many named types of performance testing, where static and dynamic performance testing fit, how load is generated, and the typical ways systems fail under load.",
  keywords: [
    "capacity testing", "concurrency testing", "efficiency", "endurance testing", "load generation",
    "load testing", "performance testing", "scalability testing", "spike testing", "stress testing",
  ],
  objectives: [
    { id: "PTFL-1.1.1", level: "K2", text: "Understand the principles of performance testing" },
    { id: "PTFL-1.2.1", level: "K2", text: "Understand the different types of performance testing" },
    { id: "PTFL-1.3.1", level: "K1", text: "Recall testing types in performance testing" },
    { id: "PTFL-1.4.1", level: "K2", text: "Understand the concept of load generation" },
    { id: "PTFL-1.5.1", level: "K2", text: "Give examples of common failure modes of performance testing and their causes" },
  ],
  sections: {
    "1.1": {
      objective: "PTFL-1.1.1",
      body: [
        { type: "p", text: "Performance efficiency is a non-functional quality characteristic in the ISO 25010 product quality model. Performance testing is relevant far beyond the web — client-server, distributed and embedded systems too — and running a system under load can also reveal functional, usability and other issues." },
        { type: "table", headers: ["Sub-characteristic", "Question it answers"], rows: [
          ["Time behavior", "Does the system respond within the specified time under specified conditions? (The most common objective — from end-to-end response to CPU cycles of a component.)"],
          ["Resource utilization", "How are limited resources such as RAM used under load?"],
          ["Capacity", "Does the system cope at its required limits — numbers of users, data volumes?"],
        ]},
        { type: "list", intro: "Principles of performance testing:", items: [
          "Align tests with the expectations of stakeholder groups — users, system designers, operations staff.",
          "Make tests reproducible: repeating them on an unchanged system yields statistically identical results within a tolerance.",
          "Produce results that are understandable and easy to compare with stakeholder expectations.",
          "Where resources allow, test complete or partial systems in environments representative of production.",
          "Keep tests affordable and executable within the project's timeframe.",
        ]},
        { type: "p", text: "Performance testing is often experimental and iterative, supporting architecture decisions and shaping stakeholder expectations. All three sub-characteristics affect how well the system scales." },
      ],
    },
    "1.2": {
      objective: "PTFL-1.2.1",
      body: [
        { type: "table", headers: ["Type", "Focus"], rows: [
          ["Performance testing", "Umbrella term: responsiveness under different volumes of load"],
          ["Load testing", "Handling increasing levels of anticipated, realistic load from controlled numbers of concurrent users or processes"],
          ["Stress testing", "Handling peak loads at or beyond specified limits, and reduced resources (computing capacity, bandwidth, memory)"],
          ["Scalability testing", "Meeting future efficiency requirements as users or data grow, without failing; limits become monitoring thresholds in production"],
          ["Spike testing", "Responding correctly to sudden bursts of peak load and returning to a steady state"],
          ["Endurance testing", "Stability over an operational time frame — no memory leaks, exhausted connections or thread pools"],
          ["Concurrency testing", "Effects of actions happening simultaneously, e.g. mass logins — hard to find and reproduce"],
          ["Capacity testing", "How many users and/or transactions (or data volumes) the system supports while meeting its objectives"],
        ]},
        { type: "note", title: "Classic swaps", text: "Load = realistic, increasing load. Stress = at or beyond the peak. Spike = sudden bursts and recovery. Endurance = a long time. Scalability = future growth." },
      ],
    },
    "1.3": {
      objective: "PTFL-1.3.1",
      body: [
        { type: "p", text: "Static testing matters even more for performance than for functionality, because many critical performance defects are designed in — through architects' misunderstandings or requirements that never stated response time, throughput, resource targets, load or constraints." },
        { type: "list", intro: "Static performance activities:", items: [
          "Reviewing requirements for performance aspects and risks.",
          "Reviewing database schemas, entity-relationship diagrams, metadata, stored procedures and queries.",
          "Reviewing system and network architecture.",
          "Reviewing critical code segments such as complex algorithms.",
        ]},
        { type: "table", headers: ["Test level", "Dynamic performance testing"], rows: [
          ["Unit (component)", "Profiling to find bottlenecks; dynamic analysis of resource utilization"],
          ["Component integration", "Key use cases and workflows, especially when integrating features or the workflow backbone"],
          ["System", "End-to-end behavior under various load conditions"],
          ["System integration", "Data flows and workflows across key interfaces — the 'user' may be another system or a sensor"],
          ["Acceptance", "Building user, customer and operator confidence and fine-tuning under real conditions — generally not to find defects"],
        ]},
        { type: "p", text: "Higher levels need realistic environments, data and loads. In Agile, start static and dynamic performance testing in early iterations. Simulators help with new hardware, but move to real hardware as soon as possible." },
      ],
    },
    "1.4": {
      objective: "PTFL-1.4.1",
      body: [
        { type: "p", text: "A load is to performance testing what inputs are to functional testing — but it represents many users, may need dedicated hardware and tools, and depends on the SUT being free of functional defects that would block execution. Generating the specified load efficiently and reliably is a key success factor." },
        { type: "table", headers: ["Option", "Pros", "Cons"], rows: [
          ["Via the user interface", "Most representative for end-to-end; can reuse functional test tools", "Only practical for few users; UI changes hurt repeatability and maintenance"],
          ["Using crowds", "Very large numbers of real users on varied devices worldwide", "Less reproducible and precise; complex to organize"],
          ["Via the API", "Insensitive to UI changes; transactions processed as if entered in the UI; scripts simulate more users", "Bypasses the UI itself"],
          ["Captured communication protocols", "Replays recorded protocol traffic for very large, repeatable, reliable loads", "Requires performance tools and scripting (Chapter 4)"],
        ]},
      ],
    },
    "1.5": {
      objective: "PTFL-1.5.1",
      body: [
        { type: "table", headers: ["Failure mode", "Typical causes"], rows: [
          ["Slow response at all load levels", "Bad database design or implementation, network latency, background loads — often visible in functional and usability testing too"],
          ["Slow response under moderate-to-heavy load (within normal ranges)", "Saturation of one or more resources; varying background loads"],
          ["Response degrading over time", "Memory leaks, disk fragmentation, growing network load, growing file repository, unexpected database growth"],
          ["Inadequate or graceless error handling under heavy or over-limit load", "Insufficient resource pools, undersized queues and stacks, time-outs set too short"],
        ]},
        { type: "list", intro: "Concrete examples:", items: [
          "A company website doesn't respond within about seven seconds (an industry rule of thumb) under certain loads.",
          "A system crashes when ticket sales for a major event open — inadequate capacity for the user burst.",
          "Response degrades when many users download a large report — insufficient data-volume capacity.",
          "Batch processing doesn't finish before online processing must start.",
          "A real-time system runs out of RAM because parallel processes can't release memory in time.",
          "A real-time component can't compute updates fast enough for another component — performance profiling is needed.",
        ]},
      ],
    },
  },
};
