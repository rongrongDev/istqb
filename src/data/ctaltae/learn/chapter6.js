// CTAL-TAE v2.0 — Chapter 6 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Automation is only as useful as what it tells you. This chapter covers which data to collect from the test automation solution and the SUT, what good TAS and SUT logs contain, how to analyze failures to decide whether the SUT or the TAS is at fault, and how to build and publish test progress reports for different stakeholders.",
  keywords: ["measurement", "metric", "test log", "test progress report", "test step"],
  objectives: [
    { id: "TAE-6.1.1", level: "K3", text: "Apply data collection methods from the test automation solution and the system under test" },
    { id: "TAE-6.1.2", level: "K4", text: "Analyze data from the test automation solution and the system under test to better understand results" },
    { id: "TAE-6.1.3", level: "K2", text: "Explain how a test progress report is constructed and published" },
  ],
  sections: {
    "6.1.1": {
      objective: "TAE-6.1.1",
      body: [
        { type: "list", intro: "Data sources:", items: [
          "SUT logs — web/mobile UI, APIs, applications, web servers, database servers.",
          "TAF logs (an audit trail), build logs and deployment logs.",
          "Production and monitoring logs, and performance test logs (load, stress, spike).",
          "Screenshots and screen recordings.",
        ]},
        { type: "p", text: "Because the TAS is built on shared testware, enhancing that core once (e.g. to record start and end time) benefits every test. Reporting should compare each run with previous ones to show trends such as the success rate. Verification is best done with tool assertions; on failure, report enough to explain the cause (screenshots). Comparisons should ignore expected differences such as dates and times while flagging unexpected ones." },
        { type: "list", intro: "Good TAS logging includes:", items: [
          "The test case being executed, with start and end time.",
          "Status — passed, failed or TAS failure (the defect is not in the SUT); define 'inconclusive' clearly; show status on a dashboard.",
          "Significant test steps with timing, and dynamic SUT information such as memory leaks found with third-party tools.",
          "A counter for reliability or stress cycles; the random values or choices used.",
          "All actions, so the run can be replayed with the same steps and timing — also useful for reproducing customer failures.",
          "Screenshots, crash dumps, stack traces and copies of logs that would otherwise be overwritten (cyclic buffers).",
          "Color coding — failures red, progress green.",
        ]},
        { type: "list", intro: "Good SUT logging includes:", items: [
          "For each defect: timestamps, source location and error messages.",
          "Configuration at startup: software/firmware versions, SUT and OS configuration.",
          "Searchable, timestamp-synchronized logs so a failure in the TAS log can be found in the SUT log and vice versa.",
        ]},
        { type: "p", text: "Results can be exported in formats for third-party tools (spreadsheets, XML, databases, report tools) and visualized with charts and traffic lights; management prefers visual summaries with drill-down." },
        { type: "example", title: "Screenshot baselines", text: "All screenshot comparisons fail although nothing visible changed: a recorded technical session ID and the current date in the header differ from the baseline. Replace the session ID with a variable and exclude the date from the comparison." },
      ],
    },
    "6.1.2": {
      objective: "TAE-6.1.2",
      body: [
        { type: "p", text: "After execution, analyze results to find failures in the SUT and in the TAS. TAS data is primary; SUT data is secondary. Also analyze environment data to size the automation (clusters, CPU/RAM, single vs cross-browser), compare with previous runs and use web logs to monitor usage." },
        { type: "list", intro: "Analyzing a failed test:", items: [
          "Did the same failure happen before? It may be a known SUT or TAS defect — keeping historical results helps.",
          "If not, identify the test case and what it tests (via its ID in the test management system).",
          "Find the test step where it failed (the TAS logs this).",
          "Check the SUT state — screenshots, API and network logs — against the expected result.",
          "If the SUT state is wrong, log a defect with all supporting information and logs.",
        ]},
        { type: "p", text: "If actual and expected results match but the test still failed, the TAS probably has a defect (or there is an invisible mismatch). If many tests fail at once, the environment may have been down — SUT logs will show outages." },
        { type: "p", text: "SUT audit logs that tag each interaction with a unique correlation ID (trace ID), carried through every subsequent call, let you trace system behavior end to end. The TAS should log this ID." },
      ],
    },
    "6.1.3": {
      objective: "TAE-6.1.3",
      body: [
        { type: "p", text: "Logs are detailed but give no overview, so after each suite a concise test progress report must be generated and published. It contains the test results, SUT information and test environment details, formatted for each audience: which tests failed and why, execution history and who is responsible for following up. Reports also help diagnose TAF component failures." },
        { type: "p", text: "Publish to all relevant stakeholders — website, cloud or on-premises, mailing list, test management tool, chatbot messages — and keep a history to spot tests or suites with frequent regressions." },
        { type: "table", headers: ["Stakeholders", "Typical roles", "Interest"], rows: [
          ["Management", "Solution/enterprise architect, project/delivery/program manager, test manager/director", "Trends: tests added, pass-fail ratio changes, reliability of TAS and SUT"],
          ["Operational", "Product owner/manager, business representative, business analyst", "Product-use metrics"],
          ["Technical", "Team lead, scrum master, administrators, test lead, TAE, tester, developer", "Lower-level details"],
        ]},
        { type: "p", text: "Dashboards aggregate pipeline logs, project management tools and repositories to show defect clusters, defect propagation, performance degradation and build reliability. AI/ML-based tools analyze large logs to find broken locators, tell SUT failures from TAS failures, and group common defects." },
      ],
    },
  },
};
