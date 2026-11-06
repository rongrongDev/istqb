// CT-TAS v1.0 — Chapter 2 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Automation costs money and people. This chapter compares ownership models for a test automation solution, explains licensing models, lists the factors that drive a strategy's cost, and describes the roles and skills a successful solution needs.",
  keywords: ["test automation engineer", "test automation solution"],
  objectives: [
    { id: "CT-TAS-2.1.1", level: "K2", text: "Compare alternative technical solutions with regard to cost of ownership" },
    { id: "CT-TAS-2.1.2", level: "K2", text: "Explain licensing model considerations for test automation tools" },
    { id: "CT-TAS-2.1.3", level: "K2", text: "Provide examples of factors to be considered when defining a test automation strategy" },
    { id: "CT-TAS-2.2.1", level: "K2", text: "Summarize the roles and skills necessary for a successful test automation solution" },
  ],
  sections: {
    "2.1.1": {
      objective: "CT-TAS-2.1.1",
      body: [
        { type: "table", headers: ["Ownership model", "Characteristics", "Watch out for"], rows: [
          ["In-house (custom, on open-source or commercial tools)", "All costs, resources, risks and governance stay inside; no vendor contract needed", "Requires the right TAEs, hired or trained"],
          ["Vendor-based", "Ownership shared per contract; easy if a piloted tool already meets every requirement; vendor trains testers; internal SMEs act as product owners", "Defect fixes and new features need negotiation and time, slowing testers"],
          ["Outsourced", "The outsourcer provides staff, hardware, software and tool ownership", "Define measurable expectations and metrics in the contract; best when the organization won't hire TAEs (short timelines, cost)"],
        ]},
      ],
    },
    "2.1.2": {
      objective: "CT-TAS-2.1.2",
      body: [
        { type: "table", headers: ["Licensing model", "How it works", "Best when"], rows: [
          ["Open source", "No license or maintenance fees; community support; may be modified and republished", "Budget is tight and the team can work with community tools"],
          ["Per user / machine", "Commercial license tied to people or machines; volume discounts", "The number of long-term TAEs is known"],
          ["Floating", "A pool shared across people and machines, counted by concurrent use", "Many TAEs on different machines, not all at once"],
          ["Runtime", "Pay only for execution time — cloud-hosted tools, OS/browser matrices, mobile device farms", "Execution capacity is needed on demand"],
        ]},
      ],
    },
    "2.1.3": {
      objective: "CT-TAS-2.1.3",
      body: [
        { type: "list", intro: "The most crucial strategy factors:", items: [
          "Time constraints, expertise and number of TAEs.",
          "Test hardware and tool licenses.",
          "Adaptability and maintenance.",
          "Platform support (web, desktop, mobile).",
          "CI/CD support, test management integration and reporting.",
        ]},
        { type: "p", text: "The timeline is the first and most important cost factor: with a short deadline, hire a few skilled TAEs; with a longer roadmap, size the team in context and grow it as the SUT grows. Budget tools, licenses, hardware and training — and the integrations for non-testing functions such as uploading results to test management or triggering builds." },
        { type: "note", title: "Cloud costs", text: "On-demand cloud hardware and runtime licenses can reduce maintenance and operating costs, but can backfire — machines left running may cost more than owned hardware." },
      ],
    },
    "2.2.1": {
      objective: "CT-TAS-2.2.1",
      body: [
        { type: "p", text: "A successful TAS needs skilled TAEs with strong programming and technical-architecture knowledge, an understanding of SDLCs and of the SUT's architecture and development environment, and the ability to agree automation objectives with test analysts and other stakeholders. Because 100% automation coverage is impossible, TAEs help prioritize the most impactful test conditions through risk assessment." },
        { type: "p", text: "Depending on size and maturity, the team also needs at least one strong subject matter expert (a test lead, architect or business analyst) who knows the domain and test objectives and drives the concept and roadmap — plus team management and soft skills to train and motivate the team." },
      ],
    },
  },
};
