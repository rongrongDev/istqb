// CTAL-TAE v2.0 — Chapter 5 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Automated tests run unattended, so they belong in pipelines. This chapter maps test levels onto CI/CD pipelines, explains two ways to run tests after deployment, covers configuration management for testware across environments and releases, and explains the dependencies of API test automation, including contract testing.",
  keywords: ["contract testing"],
  objectives: [
    { id: "TAE-5.1.1", level: "K3", text: "Apply test automation at different test levels within pipelines" },
    { id: "TAE-5.1.2", level: "K2", text: "Explain configuration management for testware" },
    { id: "TAE-5.1.3", level: "K2", text: "Explain test automation dependencies for an API infrastructure" },
  ],
  sections: {
    "5.1.1": {
      objective: "TAE-5.1.1",
      body: [
        { type: "table", headers: ["Test level", "Where it usually runs"], rows: [
          ["Configuration tests of the TAF/TAS", "During the build of the automation project itself — checks that the files used by scripts exist at the specified paths"],
          ["Component tests", "Build step of the CI pipeline; a key quality gate"],
          ["Component integration tests", "CI pipeline, together with component tests, when they test low-level components"],
          ["System tests", "Continuous deployment pipeline — the last quality gate of the delivered SUT"],
          ["System integration tests", "Continuous delivery pipeline quality gates — separately developed components working together"],
        ]},
        { type: "p", text: "Many CI systems separate a build phase (build plus component and component integration tests) from deployment. System integration, system and acceptance tests can then run in one of two ways:" },
        { type: "list", items: [
          "Inside the deployment phase, after components are deployed — the tests are a quality gate and a failed deployment can be rolled back; rerunning tests requires redeploying.",
          "As a separate pipeline triggered by a successful deployment — flexible when different suites run on each deployment, but the tests are not a quality gate, so rolling back needs other (usually manual) action. A few simple deployment-check scripts confirm the SUT is up.",
        ]},
        { type: "list", intro: "Pipelines also serve other purposes:", items: [
          "Periodic suites, such as the nightly regression run so the team sees quality each morning.",
          "Non-functional tests such as performance, in the continuous deployment pipeline or separately on a schedule.",
        ]},
        { type: "seealso", label: "CT-QDO Learn — Chapter 2", href: "/ctqdo-learn", text: "continuous integration, delivery and deployment pipelines in DevOps (2.2)" },
      ],
    },
    "5.1.2": {
      objective: "TAE-5.1.2",
      body: [
        { type: "p", text: "Automation runs against many environments and SUT versions, so configuration management is essential. It covers three things:" },
        { type: "list", items: [
          "Test environment configuration — URLs, credentials and so on, usually stored with the testware; when several projects or TAFs share it, keep it in the common core library or a shared repository.",
          "Test data — may be specific to an environment, release or feature set; stored with small TAFs or in a test data management system.",
          "Test suites and test cases — grouped by purpose (smoke, regression…) and run at different levels, pipelines and environments.",
        ]},
        { type: "list", intro: "Two ways to match testware to each release's feature set:", items: [
          "Feature toggles defined per release or environment decide which test suites to execute.",
          "Release the testware together with the SUT under the same version, using tags or branches, so each SUT version has exactly matching tests.",
        ]},
        { type: "seealso", label: "CT-QDO Learn — Chapter 4", href: "/ctqdo-learn", text: "branching strategies and configuration of testware in DevOps (4.2.5)" },
      ],
    },
    "5.1.3": {
      objective: "TAE-5.1.3",
      body: [
        { type: "list", intro: "An API automation strategy needs to know:", items: [
          "API connections — which business logic can be tested automatically and how the APIs relate to each other.",
          "API documentation — the baseline: parameters, headers, request and response types.",
        ]},
        { type: "p", text: "Developers or TAEs can automate API tests; with shift left, spread them over component integration and system integration testing and add contract testing." },
        { type: "p", text: "Contract testing verifies that two services (e.g. microservices) can communicate and that the data they exchange follows agreed rules. It goes beyond schema validation: both sides agree on the allowed interactions, recorded in a contract that both are verified against, while allowing evolution. Defects from underlying services surface earlier and are easier to locate." },
        { type: "table", headers: ["Variant", "Who writes the contract"], rows: [
          ["Consumer-driven", "The consumer states how it expects the provider to respond to its requests"],
          ["Provider-driven", "The provider describes how its services operate"],
        ]},
        { type: "note", title: "Trap", text: "Contract testing is about service-to-service agreements, not about checking a system against a legal or commercial contract." },
      ],
    },
  },
};
