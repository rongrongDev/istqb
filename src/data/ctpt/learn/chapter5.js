// CT-PT (2018) — Chapter 5 learn content, authored from ISTQB Performance Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Performance testing is impossible without tools. This short chapter covers the three main kinds of performance tooling, their license models, and the factors that decide whether a tool suits your organization.",
  keywords: ["load generator", "load management", "monitoring tool", "performance testing tool"],
  objectives: [
    { id: "PTFL-5.1.1", level: "K2", text: "Understand how tools support performance testing" },
    { id: "PTFL-5.2.1", level: "K4", text: "Evaluate the suitability of performance testing tools in a given project scenario" },
  ],
  sections: {
    "5.1": {
      objective: "PTFL-5.1.1",
      body: [
        { type: "table", headers: ["Tool type", "What it does"], rows: [
          ["Load generator", "Creates and runs many client instances that simulate users according to the operational profiles, producing load and collecting metrics. Multiple points of presence spread the load's origin for realism — though extra network hops can skew results"],
          ["Load management console", "Starts and stops the load generators, aggregates transaction metrics, shows reports and graphs and supports analysis"],
          ["Monitoring tool", "Runs alongside the SUT to supervise, record and analyze behavior (web server queues, memory, disk); supports root cause analysis; can monitor production after release and the load generators themselves"],
        ]},
        { type: "list", intro: "License models:", items: [
          "Traditional seat or site license with full ownership.",
          "Cloud-based pay-as-you-go — pay for the virtual users and instances used.",
          "Open source — free in a defined environment or through cloud offerings.",
        ]},
        { type: "p", text: "Each model has a different cost structure, possibly with ongoing maintenance. Whatever you choose, learning the tool takes time and budget." },
      ],
    },
    "5.2": {
      objective: "PTFL-5.2.1",
      body: [
        { type: "p", text: "A performance tool is usually selected for the whole organization, not one project. Evaluate:" },
        { type: "table", headers: ["Factor", "Questions"], rows: [
          ["Compatibility", "Does it support the protocols the systems use? Can it interface with other components and tools (e.g. CI)? Does it run on — and work with — the organization's platforms and versions?"],
          ["Scalability", "How many concurrent users can it simulate — licenses needed, load generator hardware, load from multiple points of presence?"],
          ["Understandability", "How much technical skill does it need? Unskilled testers misconfigure tests and get inaccurate results; complex, programmable scenarios need trained testers"],
          ["Monitoring", "Is its monitoring sufficient, can other monitoring supplement it, and can monitoring be correlated with the defined transactions?"],
        ]},
        { type: "p", text: "Monitoring that is a separate tool or stack can continue to watch the production environment after release." },
      ],
    },
  },
};
