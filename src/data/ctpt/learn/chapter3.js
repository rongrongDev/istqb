// CT-PT (2018) — Chapter 3 learn content, authored from ISTQB Performance Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Performance testing isn't a one-off load test at the end. This chapter maps performance work onto the ISTQB test process, lists the typical performance risks of different system architectures, explains how to manage performance risks across the lifecycle, and shows how activities differ in sequential, iterative and COTS/supplier settings.",
  keywords: ["metric", "risk", "software development lifecycle", "test log"],
  objectives: [
    { id: "PTFL-3.1.1", level: "K2", text: "Understand the principal performance testing activities" },
    { id: "PTFL-3.2.1", level: "K2", text: "Explain typical categories of performance risks for different architectures" },
    { id: "PTFL-3.3.1", level: "K4", text: "Analyze performance risks for a given product across the software development lifecycle" },
    { id: "PTFL-3.4.1", level: "K4", text: "Analyze a given project to determine the appropriate performance testing activities for each phase of the software development lifecycle" },
  ],
  sections: {
    "3.1": {
      objective: "PTFL-3.1.1",
      body: [
        { type: "p", text: "Performance testing is iterative: each run's insights are used to tune the system, and the next run shows the effect, until objectives are met. The activities follow the ISTQB test process:" },
        { type: "table", headers: ["Activity", "Performance-specific work"], rows: [
          ["Planning", "Allocate environments, test data, tools and people; set the scope; identify and analyze risks (and revisit them as conditions change)"],
          ["Monitoring and control", "Control measures for issues: more load generation capacity, changed hardware, network components or software; check exit criteria"],
          ["Analysis", "Analyze requirements, objectives, SLAs, IT architecture and process models (spreadsheets, capacity planning tools); identify load levels, timing conditions and transactions; choose test types"],
          ["Design", "Modular test cases usable as building blocks for larger tests"],
          ["Implementation", "Order test cases into procedures reflecting real user steps; set up or reset the environment; create production-like test data in volume and type"],
          ["Execution", "Run the tests (usually with tools), evaluate against requirements, report defects"],
          ["Completion", "Test summary report with aggregated metrics and dashboards for architects, managers and product owners; archive or hand over testware"],
        ]},
        { type: "p", text: "Performance testing is ongoing — performed several times and at all test levels." },
      ],
    },
    "3.2": {
      objective: "PTFL-3.2.1",
      body: [
        { type: "table", headers: ["Architecture", "Typical performance risks"], rows: [
          ["Single computer", "Excessive resource use — memory leaks, background security software, slow storage, disk fragmentation, OS mismanagement; inefficient algorithms"],
          ["Multi-tier", "The single-computer risks on each server, plus poor or non-scalable database design, network bottlenecks, inadequate bandwidth or capacity on one server"],
          ["Distributed", "Multi-tier risks plus workflows and dataflows through unreliable or unpredictable remote servers"],
          ["Virtualized", "Excessive load on shared hardware across VMs; improper host configuration starving VMs of resources"],
          ["Dynamic/cloud", "Self-scaling helps, but misconfiguring it at setup or during updates is a risk"],
          ["Client-server", "Client-side single-computer risks plus server risks; connection speed and reliability; congestion at the client connection point (e.g. public Wi-Fi); firewalls, packet inspection, load balancing"],
          ["Mobile", "Client-server and web risks plus limited, variable resources and connectivity (location, battery, charge, memory, temperature); slow sensor or radio dataflows; interactions with other apps and services"],
          ["Embedded real-time", "Mobile-like risks including connectivity — but slowdowns can be safety-critical (e.g. braking systems)"],
          ["Mainframe", "Predictable and fast as designed, but new access via APIs, web services or the database creates unexpected loads"],
        ]},
        { type: "p", text: "Real systems often combine several architectures, so all their risks apply. Other technical decisions matter too: memory leaks are more common in languages with direct heap management such as C and C++; relational and non-relational databases behave differently; even recursive versus iterative algorithms make a difference." },
      ],
    },
    "3.3": {
      objective: "PTFL-3.3.1",
      body: [
        { type: "list", intro: "The performance risk process:", items: [
          "Identify risks to time behavior, resource utilization and capacity.",
          "Assess them — covering the relevant architectures — by likelihood and impact using clear criteria.",
          "Mitigate each risk according to its nature and level.",
          "Manage risks continuously so they're adequately mitigated before release.",
        ]},
        { type: "p", text: "Business stakeholders bring knowledge of how production performance problems affect customers and the business (usage, criticality, financial or reputational damage, legal liability — the impact). Technical stakeholders bring knowledge of how requirements, architecture, design and implementation affect performance (the likelihood)." },
        { type: "p", text: "Start early and repeat regularly; don't rely only on testing at the end of system and system integration testing. Late discovery of performance defects caused by early decisions can be extremely expensive and even cancel projects." },
        { type: "example", title: "Review beats late discovery", text: "Slow many-to-many joins from a poor relational design would only appear in system test with large datasets — but a technical review with experienced database engineers can predict them before the database is built." },
        { type: "p", text: "If key figures like transaction volumes or concurrent users can't be known early, design for highly variable scalability (e.g. on-demand cloud resources). Residual risk must be reported specifically — e.g. the percentage of customers likely to exceed a delay threshold — not 'delays are still possible'." },
      ],
    },
    "3.4": {
      objective: "PTFL-3.4.1",
      body: [
        { type: "table", headers: ["Sequential phase", "Performance activity"], rows: [
          ["Concept", "Verify performance goals are defined as acceptance criteria"],
          ["Requirements", "Verify performance requirements exist and reflect stakeholder needs"],
          ["Analysis and design", "Verify the design reflects the performance requirements"],
          ["Coding", "Verify the code is efficient and matches requirements and design"],
          ["Component / component integration testing", "Performance testing at those levels"],
          ["System testing", "Production-representative hardware, software, procedures and data; interfaces may be simulated if realistic"],
          ["System integration testing", "The entire production-representative system"],
          ["Acceptance testing", "Validate performance against the original user needs and acceptance criteria"],
        ]},
        { type: "p", text: "In iterative and incremental models such as Agile, performance testing can start in the first iteration or run in a dedicated performance iteration, sometimes by a separate team. In continuous integration, performance tests can run at build level — with extra concerns: an on-demand (often cloud) environment, choosing a subset that fits the short CI window, creating new tests as changes require (the goal is that no change hurts performance), and tools able to test portions of the system quickly." },
        { type: "list", intro: "Agile performance activities:", items: [
          "Release planning — risks across all iterations, mitigation, final pre-release testing.",
          "Iteration planning — risks per user story in more detail.",
          "User stories — 'non-functional' stories whose acceptance criteria state performance criteria.",
          "Test design from those stories; component-level tuning during coding.",
          "Testing/evaluation — a wider scope (the whole iteration) may need a dedicated performance iteration.",
          "Delivery — monitor performance in production.",
        ]},
        { type: "p", text: "With COTS and other supplier/acquirer models, test from both sides. For custom vendor software, put performance requirements and acceptance criteria in the contract; for COTS, the customer alone must test performance in a realistic environment before deployment." },
      ],
    },
  },
};
