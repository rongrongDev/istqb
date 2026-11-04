// CTAL-TAE v2.0 — Chapter 1 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Why automate, and where does automation fit? This short chapter weighs the advantages of test automation against its disadvantages and inherent limitations, shows how automation looks in waterfall, V-model and Agile development, and explains how to start selecting tools for a given system under test.",
  keywords: ["system under test", "test automation", "test automation engineer"],
  objectives: [
    { id: "TAE-1.1.1", level: "K2", text: "Explain the advantages and disadvantages of test automation" },
    { id: "TAE-1.2.1", level: "K2", text: "Explain how test automation is applied across different software development lifecycle models" },
    { id: "TAE-1.2.2", level: "K2", text: "Select suitable test automation tools for a given system under test" },
  ],
  sections: {
    "1.1.1": {
      objective: "TAE-1.1.1",
      body: [
        { type: "p", text: "Test automation means using purpose-built tools to control and set up test suites, executing tests automatically, and comparing actual with expected results. It can target almost any software: UIs, systems without a UI, mobile apps, network protocols and connections." },
        { type: "table", headers: ["Advantages", "Disadvantages", "Limitations"], rows: [
          ["More tests per build", "Extra cost: TAE hires, hardware, training", "Not every manual test can be automated"],
          ["Tests that can't be run manually (real-time, remote, parallel)", "Initial investment in a test automation solution", "Checks only what it was programmed to check"],
          ["More complex tests; faster execution", "Time to develop and maintain the solution", "Only machine-interpretable results can be checked"],
          ["Less human error; efficient use of resources", "Needs clear automation objectives", "Only results an automated test oracle can verify"],
          ["Quicker feedback; better reliability; consistent runs across cycles", "Rigid tests that adapt poorly to SUT changes; can introduce defects of its own", ""],
        ]},
        { type: "note", title: "Three different lists", text: "Exam questions ask specifically for an advantage, a disadvantage or a limitation. A limitation is something automation fundamentally cannot do; a disadvantage is a cost or risk of doing it." },
      ],
    },
    "1.2.1": {
      objective: "TAE-1.2.1",
      body: [
        { type: "list", items: [
          "Waterfall — linear phases (requirements, design, implementation, verification, maintenance), each closed with approved documents. Automation is built during or after implementation and runs in the verification phase, because components aren't ready earlier.",
          "V-model — every requirement level has a matching test level: component, component integration, system, system integration and acceptance. A test automation framework (TAF) per test level is possible and recommended.",
          "Agile — TAEs and business representatives agree the automation roadmap and timeline together. Code reviews, pair programming and frequent automated execution are common. Eliminating silos between developers, testers and other stakeholders lets the team automate every test level to the right depth — the goal called in-sprint automation.",
        ]},
        { type: "seealso", label: "CT-TAS Learn — Chapter 3", href: "/cttas-learn", text: "test automation in waterfall, V-model, Agile (in-sprint automation) and DevOps from the strategy side (3.2)" },
      ],
    },
    "1.2.2": {
      objective: "TAE-1.2.2",
      body: [
        { type: "p", text: "Tool selection starts with analyzing the SUT and identifying project requirements as the baseline. Know what the project wants to achieve over time — UI testing and web-service testing need different features. Any number of tools may be used, but cost always counts; a commercial off-the-shelf tool or a custom open-source solution can both be complex to introduce." },
        { type: "list", intro: "Then consider the team:", items: [
          "Little or no programming experience → low-code or no-code tools can be viable.",
          "Programmers → tools in the same language as the SUT, so testers and developers can debug automation defects together and cross-train.",
        ]},
      ],
    },
  },
};
