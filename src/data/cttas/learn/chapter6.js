// CT-TAS v1.0 — Chapter 6 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The final chapter is about moving forward: converting manual regression testing to automation, evolving automation into continuous testing, and periodically evaluating the test automation assets and practices across the organization to find improvements.",
  keywords: ["coverage", "precondition", "test suite"],
  objectives: [
    { id: "CT-TAS-6.1.1", level: "K2", text: "Describe the factors and planning activities in transitioning from manual testing to test automation" },
    { id: "CT-TAS-6.1.2", level: "K2", text: "Describe the factors and planning activities in transitioning from test automation to continuous testing" },
    { id: "CT-TAS-6.2.1", level: "K3", text: "Conduct an evaluation of the test automation assets and practices to identify improvement areas" },
  ],
  sections: {
    "6.1.1": {
      objective: "CT-TAS-6.1.1",
      body: [
        { type: "p", text: "Regression testing is the easiest place to start: today's functional and non-functional tests become tomorrow's regression tests, and the suite soon outgrows a manual team." },
        { type: "table", headers: ["Factor", "What to plan"], rows: [
          ["Transitioning costs", "Costs rise while manual and automated testing run in parallel; afterwards effort shifts to exploratory testing and new automated tests"],
          ["Functional overlap", "Steps repeated in many tests (e.g. login) become one reusable component (flow model pattern)"],
          ["Data sharing", "Tests using the same records (e.g. one employee for vacation and training checks) read from a single data source"],
          ["Test interdependency", "Values created by one test (e.g. a new Order ID) must be captured for the tests that depend on it"],
          ["Execution preconditions", "Analyze required users, roles and data values first; automate their creation (UI scripts or batch loads)"],
          ["Functional coverage", "Automating 100% of manual tests isn't 100% of what can be automated; freed time finds more tests"],
          ["Executable tests", "Confirm the manual test works before automating it — otherwise you automate a broken test; show equivalence to build confidence"],
        ]},
      ],
    },
    "6.1.2": {
      objective: "CT-TAS-6.1.2",
      body: [
        { type: "p", text: "Continuous testing runs test suites as soon as code changes reach the test environment, giving immediate feedback and catching defects when they are cheapest." },
        { type: "list", intro: "Adapting the TAS for continuous testing:", items: [
          "Change the test suites to run on the updated TAS — and test them before deploying.",
          "Change stubs, drivers and interfaces in the test harness — and test them before deploying.",
          "Assess which infrastructure components must change.",
          "If the updated TAS brings defects or performance problems, weigh risks against benefits: skip or wait for the next version, or update if the issues are negligible.",
          "Publish release notes of known defects with fix estimates.",
        ]},
        { type: "p", text: "In CI/CD, extend the build pipeline with automated tests that verify the SUT right after deployment — the tool must be configured to reach the SUT, the code repository and the data provisioning scripts." },
      ],
    },
    "6.2.1": {
      objective: "CT-TAS-6.2.1",
      body: [
        { type: "p", text: "Like any development, automation needs pauses to refactor. Track hours spent building the TAS, hours spent fixing it and time saved versus manual testing. A warning sign: TAS maintenance takes longer than manual testing would." },
        { type: "list", intro: "For a first deployment (TAS isolated in its own environment, tests manageable):", items: [
          "Use code coverage tools to find component-test gaps.",
          "Build a requirements traceability matrix to find untested functionality.",
          "Define consistent TAS infrastructure usage across projects and a consistent configuration management strategy for suites.",
          "Create common TAS development guidelines (CTAL-TAE 3.1.4).",
          "Automate the preconditions (database, data, initial values) so they can't be missed.",
        ]},
        { type: "list", intro: "For incremental updates:", items: [
          "Evaluate new or updated tools; optimize features and performance.",
          "Decompose and modularize scripts; make sure people know and use the reusable components.",
          "Collect evidence for improvements with their benefits; remove functional overlap.",
          "Add suitable manual tests to the automation backlog; improve test design and test data management.",
          "Adapt all suites to the latest TAS version.",
          "If automation is queuing the pipeline, run only a smoke suite of critical tests there and trigger the full regression separately or on demand.",
        ]},
      ],
    },
  },
};
