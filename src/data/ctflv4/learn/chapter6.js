// CTFL v4.0 — Chapter 6 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A short, focused chapter: the categories of tools that support testing, and a sober look at test automation — what it genuinely buys you, and the ways tool adoption goes wrong.",
  keywords: ["test automation"],
  objectives: [
    { id: "FL-6.1.1", level: "K2", text: "Explain how different types of test tools support testing" },
    { id: "FL-6.2.1", level: "K1", text: "Recall the benefits and risks of test automation" },
  ],
  sections: {
    "6.1": {
      objective: "FL-6.1.1",
      body: [
        { type: "list", intro: "Test tools support and facilitate many test activities. Categories include:", items: [
          "Test management tools — increase test process efficiency by facilitating management of the SDLC, requirements, tests, defects, and configuration",
          "Static testing tools — support the tester in performing reviews and static analysis",
          "Test design and test implementation tools — facilitate generation of test cases, test data, and test procedures",
          "Test execution and test coverage tools — facilitate automated test execution and coverage measurement",
          "Non-functional testing tools — enable non-functional testing that is difficult or impossible to perform manually",
          "DevOps tools — support the delivery pipeline, workflow tracking, automated build processes, CI/CD",
          "Collaboration tools — facilitate communication",
          "Tools supporting scalability and deployment standardization — virtual machines, containerization tools",
          "Any other tool that assists in testing — even a spreadsheet is a test tool in a testing context",
        ]},
      ],
    },
    "6.2": {
      objective: "FL-6.2.1",
      body: [
        { type: "p", text: "Simply acquiring a tool does not guarantee success: every new tool costs effort to achieve real, lasting benefits — introduction, maintenance, and training — and carries risks that need analysis and mitigation." },
        { type: "list", intro: "Potential benefits of test automation:", items: [
          "Time saved by reducing repetitive manual work — executing regression tests, re-entering the same test data, comparing expected vs actual results, checking against coding standards",
          "Prevention of simple human errors through greater consistency and repeatability — tests consistently derived from requirements, test data created systematically, tests executed in the same order with the same frequency",
          "More objective assessment (e.g. coverage) and measures too complicated for humans to determine",
          "Easier access to information about testing — statistics, graphs, aggregated data on progress, failure rates, execution duration",
          "Reduced test execution times — earlier defect detection, faster feedback, faster time to market",
          "More time for testers to design new, deeper, more effective tests",
        ]},
        { type: "list", intro: "Potential risks of test automation:", items: [
          "Unrealistic expectations about the tool's benefits, functionality, and ease of use",
          "Inaccurate estimates of the time, cost, and effort to introduce the tool, maintain test scripts, and change the existing manual test process",
          "Using a test tool when manual testing is more appropriate",
          "Relying on the tool too much — ignoring the need for human critical thinking",
          "Dependency on the tool vendor — which may go out of business, retire or sell the tool, or provide poor support",
          "Open-source software that gets abandoned (no further updates) or requires frequent internal-component updates",
          "The automation tool being incompatible with the development platform",
          "Choosing an unsuitable tool that fails regulatory requirements or safety standards",
        ]},
      ],
    },
  },
};
