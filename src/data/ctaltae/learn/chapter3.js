// CTAL-TAE v2.0 — Chapter 3 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "This is the architecture core of the syllabus: the generic test automation architecture (gTAA) and its capabilities, what a test automation solution's design must cover, how to layer a test automation framework, the main approaches for writing automated tests with their trade-offs, and the design principles and patterns that keep automation code maintainable.",
  keywords: [
    "behavior-driven development", "capture/playback", "data-driven testing", "generic test automation architecture",
    "keyword-driven testing", "linear scripting", "model-based testing", "structured scripting", "test adaptation layer",
    "test automation framework", "test automation solution", "test harness", "test script", "testware", "test step",
    "test-driven development",
  ],
  objectives: [
    { id: "TAE-3.1.1", level: "K2", text: "Explain the major capabilities in a test automation architecture" },
    { id: "TAE-3.1.2", level: "K2", text: "Explain how to design a test automation solution" },
    { id: "TAE-3.1.3", level: "K3", text: "Apply layering of test automation frameworks" },
    { id: "TAE-3.1.4", level: "K3", text: "Apply different approaches for automating test cases" },
    { id: "TAE-3.1.5", level: "K3", text: "Apply design principles and design patterns in test automation" },
  ],
  sections: {
    "3.1.1": {
      objective: "TAE-3.1.1",
      body: [
        { type: "p", text: "The generic test automation architecture (gTAA) is an abstract, high-level view of how test automation communicates with the systems around it, and of the capabilities any concrete test automation architecture (TAA) should cover." },
        { type: "table", headers: ["gTAA interface", "Describes"], rows: [
          ["SUT interface", "The connection between the SUT and the test automation framework (TAF)"],
          ["Project management", "Progress of test automation development"],
          ["Test management", "Mapping between test case definitions and automated test cases"],
          ["Configuration management", "CI/CD pipelines, environments and testware"],
        ]},
        { type: "table", headers: ["Capability", "What it provides"], rows: [
          ["Test generation (optional)", "Automated design of test cases from a test model, e.g. with model-based testing tools"],
          ["Test definition", "Defining and implementing test cases and suites, separated from the SUT and tools — test data, test cases and test library components"],
          ["Test execution", "A tool that runs the selected tests automatically, plus test logging and reporting"],
          ["Test adaptation", "Adaptors that connect the automated tests to the SUT's components and interfaces via APIs, protocols and services"],
        ]},
      ],
    },
    "3.1.2": {
      objective: "TAE-3.1.2",
      body: [
        { type: "p", text: "A test automation solution (TAS) follows from the SUT's functional, non-functional and technical requirements and the tools available or needed. It is built with commercial or open-source tools and may need SUT-specific adaptors on top." },
        { type: "list", intro: "The TAA — the TAS's technical design — should address:", items: [
          "Selecting test automation tools and tool-specific libraries.",
          "Developing plugins and components.",
          "Connectivity and interface requirements: firewalls, databases, URLs/connections, mocks and stubs, message queues, protocols.",
          "Connecting to test management and defect management tools.",
          "Using version control and repositories.",
        ]},
        { type: "example", title: "Missing adaptors", text: "If system test output can't be mapped back to the automated test cases to decide pass/fail, the SUT-specific adaptors for the chosen tool were probably never implemented." },
      ],
    },
    "3.1.3": {
      objective: "TAE-3.1.3",
      body: [
        { type: "p", text: "The test automation framework (TAF) is the foundation of the TAS: a test harness (test runner), test libraries, test scripts and test suites. Layers group classes with a similar purpose, but one layer per purpose makes the design complicated — keep the number of layers low. The syllabus recommends three:" },
        { type: "table", headers: ["Layer", "Contents", "Rule"], rows: [
          ["Test scripts", "Test case repository and suite annotations", "Calls the business logic layer (steps, flows, API calls) — never the core libraries directly"],
          ["Business logic", "All SUT-dependent libraries, e.g. page and flow models; configuration for running against a specific SUT", "Inherits from core library classes or uses their facades"],
          ["Core libraries", "All SUT-independent libraries", "Reusable by any project on the same development stack"],
        ]},
        { type: "example", title: "Scaling", text: "One set of core libraries can underpin two TAFs in project 1 and a third TAF in project 2 — each project only writes its own business logic and test scripts." },
      ],
    },
    "3.1.4": {
      objective: "TAE-3.1.4",
      body: [
        { type: "table", headers: ["Approach", "How it works", "Pros", "Cons"], rows: [
          ["Capture/playback", "Records manual interactions into scripts (no-code if code is hidden, low-code if exposed)", "Easy to set up and use initially", "Hard to maintain and scale; SUT must be available; only for small scope and a stable SUT; tied to the recorded SUT version; recording every test takes time"],
          ["Linear scripting", "Hand-written or edited recorded scripts without custom libraries", "Easy start; easier to modify than recordings", "Same maintenance and scope problems; needs some programming"],
          ["Structured scripting", "Reusable test libraries, steps and user journeys", "Easy to maintain, scale, port and evolve; business logic separate from scripts", "Programming required; initial TAF investment"],
          ["Test-driven development", "Red (failing test) → green (make it pass) → refactor", "Simpler component tests, better code quality, testability and coverage; fewer defects reach later levels; better communication", "Takes time to learn; done badly it gives false confidence"],
          ["Data-driven testing", "Builds on structured scripting; the same scripts run with many data files (CSV, spreadsheets, DB dumps)", "Fast, cheap test expansion; test analysts can specify tests by writing data", "Needs proper test data management"],
          ["Keyword-driven testing", "Tables of user-perspective keywords plus data; often built on DDT", "Test and business analysts can write tests; also usable for manual testing", "Implementing and maintaining keywords is complex as scope grows; large effort for small systems"],
          ["Behavior-driven development", "Given/When/Then acceptance criteria in feature files executed by a BDD tool", "Better communication; scenarios ensure specification coverage; usable on several test levels", "Negative and edge cases still needed; teams often reduce it to 'natural-language tests'; step maintenance is complex; complex steps make debugging costly"],
        ]},
        { type: "note", title: "Picking an approach", text: "Small, quick, non-programmers → capture/playback. Many data variations of the same flow → data-driven. Business people writing tests → keyword-driven or BDD. Long-lived, growing suites → structured scripting." },
      ],
    },
    "3.1.5": {
      objective: "TAE-3.1.5",
      body: [
        { type: "p", text: "Test automation is software development, so the same design discipline applies: the four object-oriented principles (encapsulation, abstraction, inheritance, polymorphism) and the SOLID principles (single responsibility, open-closed, Liskov substitution, interface segregation, dependency inversion) improve readability, maintainability and scalability." },
        { type: "table", headers: ["Pattern", "Purpose in test automation"], rows: [
          ["Facade", "Hides implementation details and exposes only what testers need to write test cases"],
          ["Singleton", "Ensures only one driver instance communicates with the SUT"],
          ["Page object model", "One class (page model) per page holds its locators — a UI change is fixed in one place instead of in every test"],
          ["Flow model", "An extra facade over the page objects that holds user actions — a double facade, so test steps are reusable across scripts"],
        ]},
      ],
    },
  },
};
