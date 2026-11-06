// CT-TAS v1.0 — Chapter 1 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A test automation strategy decides why, where and how an organization automates. This chapter covers what a strategy must define and what automation is meant to achieve, the technical factors that decide long-term success, and how to judge whether a project is worth the investment.",
  keywords: ["test automation architecture", "test automation framework", "test automation strategy"],
  objectives: [
    { id: "CT-TAS-1.1.1", level: "K2", text: "Explain the objectives and relevance of test automation" },
    { id: "CT-TAS-1.1.2", level: "K2", text: "Identify technical success factors of a test automation project" },
    { id: "CT-TAS-1.1.3", level: "K2", text: "Summarize appropriate investment criteria in selecting candidate projects for test automation" },
  ],
  sections: {
    "1.1.1": {
      objective: "CT-TAS-1.1.1",
      body: [
        { type: "list", intro: "A test automation strategy has to address:", items: [
          "The intended purpose, the risks, and the scope.",
          "The stakeholders involved.",
          "The tools to use and the test automation architecture (TAA) to design.",
          "The environments needed.",
        ]},
        { type: "list", intro: "Typical objectives of test automation:", items: [
          "Improved test efficiency and shorter test execution time.",
          "Broader and deeper coverage and better overall SUT quality.",
          "Lower total cost and faster time to market.",
          "Tests that manual testers cannot perform, run more frequently.",
        ]},
        { type: "p", text: "Agile delivery and cloud applications shorten release cycles and demand earlier, faster feedback on quality, which makes automation more central than ever." },
      ],
    },
    "1.1.2": {
      objective: "CT-TAS-1.1.2",
      body: [
        { type: "p", text: "Long-term success depends on technical factors; a pilot project helps confirm the tools and technologies chosen." },
        { type: "table", headers: ["Success factor", "What it means"], rows: [
          ["SUT testability", "Automation can access the SUT's interfaces"],
          ["Defined strategy", "Applicable and customizable, achievable within time and cost, kept up to date"],
          ["TAA", "Clarity about what to implement and how (see CTAL-TAE 3.1.1)"],
          ["TAF", "Easy to use, documented, maintainable, consistent — with defined reporting, easy troubleshooting, a suitable environment, documented tests traceable to test cases and requirements, easy maintenance, up-to-date tests, clear deployment and execution plans, tests retired when no longer needed, effective exception handling"],
        ]},
        { type: "p", text: "Before starting, weigh which factors are present and which are missing, along with the risks of the approach and the project context. In practice not every factor is ever met." },
        { type: "seealso", label: "CTAL-TAE Learn — Chapter 3", href: "/ctaltae-learn", text: "the gTAA, TAA and layered TAF in engineering depth (3.1.1–3.1.3)" },
      ],
    },
    "1.1.3": {
      objective: "CT-TAS-1.1.3",
      body: [
        { type: "list", intro: "Investment criteria for a candidate project:", items: [
          "Cost of introduction — beyond setup work: hiring TAEs, new hardware, training.",
          "Current SDLC phase — the earlier automation starts, the sooner it pays back.",
          "Expected project duration — a short project may lack the resources or time for automation to deliver value.",
          "Maintenance cost — a new TAS takes time to build and must then be maintained.",
        ]},
        { type: "p", text: "If the investment is acceptable, preparation starts: choosing the test approach and the tools. This is a strategic responsibility of a test architect or test manager with automation knowledge." },
        { type: "example", title: "Choosing a pilot", text: "To judge the effectiveness of automation, pilot it on a mature, standard, long-running product rather than a short, one-off project." },
      ],
    },
  },
};
