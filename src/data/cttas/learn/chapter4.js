// CT-TAS v1.0 — Chapter 4 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "How does automation help the organization release faster and more safely, and how do you deploy the automation itself? This chapter covers time to market, automated confirmation tests, operational acceptance scenarios, a test automation deployment strategy and its risks, and the components, infrastructure, data and interfaces the test environment needs.",
  keywords: ["component", "confirmation testing", "quality gate"],
  objectives: [
    { id: "CT-TAS-4.1.1", level: "K2", text: "Identify ways how test automation supports shorter time to market" },
    { id: "CT-TAS-4.1.2", level: "K2", text: "Identify ways in which test automation helps verify reported defects according to requirements" },
    { id: "CT-TAS-4.1.3", level: "K2", text: "Define approaches that allow for the development of operationally relevant scenarios for test automation" },
    { id: "CT-TAS-4.2.1", level: "K2", text: "Define a test automation deployment strategy" },
    { id: "CT-TAS-4.2.2", level: "K2", text: "Identify test automation risks in deployment" },
    { id: "CT-TAS-4.2.3", level: "K2", text: "Define approaches to mitigate test deployment risks" },
    { id: "CT-TAS-4.3.1", level: "K2", text: "Define test automation components in the test environment" },
    { id: "CT-TAS-4.3.2", level: "K2", text: "Identify infrastructure components and dependencies of test automation" },
    { id: "CT-TAS-4.3.3", level: "K2", text: "Define test automation data and interface requirements for integration within the system under test" },
  ],
  sections: {
    "4.1.1": {
      objective: "CT-TAS-4.1.1",
      body: [
        { type: "list", items: [
          "Shorter test cycles — especially regression testing, where reuse lowers cost and keeps runs consistent.",
          "Less manual effort and quick developer feedback for the same scope.",
          "Earlier testing, because component and component integration tests are automated (rarely done manually).",
          "Quality gates — enforced criteria the software must meet before the next phase — based on automation speed up deployment to preproduction and production and catch defects earlier.",
          "Parallel execution and a shift-left culture of quality consciousness (independent tests, cross-browser testing) cut execution time.",
        ]},
      ],
    },
    "4.1.2": {
      objective: "CT-TAS-4.1.2",
      body: [
        { type: "p", text: "After a fix, a confirmation test repeats the steps that reproduced the defect. Defects tend to come back in later releases (often a sign of configuration or repository management problems), so confirmation tests are good automation candidates and belong in the regression suite." },
        { type: "list", items: [
          "Narrow scope; can be implemented as soon as the reproduction steps are known.",
          "Tracking them shows the time and number of cycles spent resolving defects.",
          "Fixes can be verified quickly across platforms, devices, browsers and OS versions.",
        ]},
      ],
    },
    "4.1.3": {
      objective: "CT-TAS-4.1.3",
      body: [
        { type: "p", text: "Operational acceptance testing, just before release, validates that systems, components and infrastructure are ready for production — because the SUT may not behave in production as it did in test. A good operational test plan covers reliability, fault tolerance, integrity and maintainability." },
        { type: "table", headers: ["Automation approach", "Purpose"], rows: [
          ["Static code analysis", "Security and vulnerability checks, trended over time"],
          ["End-to-end testing", "Full user scenarios exercising the whole environment"],
          ["Failover testing", "Recovery when servers, networks, disks or other hardware fail — central to chaos engineering"],
          ["Backup and restore testing", "Back up the current version and roll back to an earlier one"],
          ["Performance efficiency testing", "Simulate many concurrent users; compare and trend results"],
          ["Operational documentation review", "Compare documentation versions and flag needed updates for new features"],
          ["Security testing", "Static and dynamic evaluation with industry-standard tools, trended"],
          ["SLA-based monitoring", "Reuse SDLC tests to monitor production and alert before real users hit an outage"],
        ]},
      ],
    },
    "4.2.1": {
      objective: "CT-TAS-4.2.1",
      body: [
        { type: "table", headers: ["Consideration", "Guidance"], rows: [
          ["Test environment", "Design scripts to run in test and preproduction with minimal change — often just a different URL"],
          ["Tools", "Know the licensing; a license server reachable in test may not be reachable in preproduction"],
          ["Software access", "Parameterize users, credentials and end points; some environments need special access (test accounts, biometrics, smart cards)"],
          ["Test script storage", "A central source code repository under configuration management, versioned per SUT version, with configs and dependencies alongside — TAS, TAF and tests all in repositories"],
          ["Data provisioning", "Avoid static data; either an administrator preloads data (convenient but dependent on someone else) or setup scripts generate it (self-sufficient but more to maintain)"],
        ]},
      ],
    },
    "4.2.2": {
      objective: "CT-TAS-4.2.2",
      body: [
        { type: "list", intro: "Technical issues:", items: [
          "Too many abstractions (e.g. keywords) hide what the automation actually does.",
          "Test data tables grow too large or complex to migrate, giving inconsistent results.",
          "Dependence on OS libraries or components missing in some environments.",
        ]},
        { type: "list", intro: "Project risks:", items: [
          "Staffing — finding people to maintain the automation.",
          "Unplanned TAS maintenance after SUT updates; delays introducing or updating automation.",
          "Nonstandard UI objects the TAS can't capture.",
          "Outdated test cases left in suites, wasting execution time.",
        ]},
        { type: "list", intro: "Failure points:", items: [
          "Migration to a different test environment.",
          "Deployment to production.",
          "Forgetting that automation is software that must itself be tested.",
        ]},
      ],
    },
    "4.2.3": {
      objective: "CT-TAS-4.2.3",
      body: [
        { type: "p", text: "The TAS has its own lifecycle. Keep it under configuration management with documented features, and keep a clear, documented deployment procedure — version-dependent, so also under configuration management." },
        { type: "table", headers: ["Deployment type", "Risks and mitigation"], rows: [
          ["First-time deployment", "The suite may take longer than the planned cycle — schedule enough time; environment installation/configuration issues (DB setup, initial load, services) — use a test fixture (predefined dataset) for preconditions"],
          ["Maintenance deployment", "Test the updated TAS before production: new functions, suites still run, reports are sent, no performance or quality issues; suites may need adapting to the new version"],
        ]},
      ],
    },
    "4.3.1": {
      objective: "CT-TAS-4.3.1",
      body: [
        { type: "table", headers: ["Component", "Includes"], rows: [
          ["SUT", "The whole system or subcomponents such as API, web interface, database"],
          ["Platform", "Cloud infrastructure, network, virtual machines, containers"],
          ["Test cases and suites", "Test steps for automated and manual actions; suites group related test cases for efficient execution"],
          ["Tools", "UI and API automation, data generation, monitoring, requirements and defect management, logging, reporting, trend tools"],
          ["TAF", "Driver scripts, common libraries, test templates, data provisioning scripts, documentation and tutorials"],
        ]},
        { type: "note", title: "Keep it simple", text: "An overcomplicated environment means hours fixing the TAF instead of benefiting from it. Aim for reusable, portable combinations of tools, configuration and platform." },
      ],
    },
    "4.3.2": {
      objective: "CT-TAS-4.3.2",
      body: [
        { type: "list", items: [
          "Host machines — VMs, physical servers, laptops, tablets, phones where automation is installed and run.",
          "Network — gives the TAS access to the SUT and connects hosts for parallel execution (hosts on the same, properly configured network).",
          "Platform — cloud or containers with access to the underlying OS for installing tools.",
          "Software dependencies — e.g. a tool needing a particular programming language version; check before and after choosing a tool.",
          "SUT access — the interface itself, e.g. the right browser type and version for a web app.",
        ]},
      ],
    },
    "4.3.3": {
      objective: "CT-TAS-4.3.3",
      body: [
        { type: "list", intro: "Before writing scripts, decide how to interface with the SUT and what data each test needs:", items: [
          "API — test at the end point level (web APIs/web services); understand call order and correlate data across calls.",
          "Database interface — verify rows, columns, stored procedures and rules directly; may need preexisting data.",
          "Interface compatibility — contract testing (consumer-driven, producer-driven or bidirectional) confirms two systems can communicate.",
        ]},
        { type: "seealso", label: "CTAL-TAE Learn — Chapter 5", href: "/ctaltae-learn", text: "API dependencies and contract testing for automation engineers (5.1.3)" },
      ],
    },
  },
};
