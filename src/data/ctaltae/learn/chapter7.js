// CTAL-TAE v2.0 — Chapter 7 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Who tests the tests? This chapter covers verifying the automation environment and tool setup, checking that automated scripts and suites behave correctly, investigating unexpected passes and failures, and using static analysis on the automation code itself.",
  keywords: ["static analysis"],
  objectives: [
    { id: "TAE-7.1.1", level: "K3", text: "Plan to verify the test automation environment including test tool setup" },
    { id: "TAE-7.1.2", level: "K2", text: "Explain the correct behavior for a given automated test script and/or test suite" },
    { id: "TAE-7.1.3", level: "K2", text: "Identify where test automation produces unexpected results" },
    { id: "TAE-7.1.4", level: "K2", text: "Explain how static analysis can aid test automation code quality" },
  ],
  sections: {
    "7.1.1": {
      objective: "TAE-7.1.1",
      body: [
        { type: "list", intro: "Verify the test automation environment, for example before automation starts:", items: [
          "Tool installation, setup, configuration and customization — the TAS has executables, function libraries, data and config files, plus service packs and add-ins. Automated installation or copying from a repository guarantees every SUT is tested with the same TAS version and configuration; upgrades go through the repository like any development tool.",
          "Repeatable setup and teardown — load and unload the TAS systematically so rebuilding it makes no discernible difference in any environment. Configuration management makes a configuration reliably reproducible; documenting the components shows what is affected when the SUT environment changes.",
          "Connectivity — before use, check preconditions: log into servers, launch the tools, confirm they can reach the SUT, inspect configuration, and verify permissions for logging and reporting between systems.",
          "TAF component testing — test framework components like any software, functionally and non-functionally: e.g. object verification across many GUI object classes, accurate logs and reports, performance degradation, memory leaks, interoperability.",
        ]},
      ],
    },
    "7.1.2": {
      objective: "TAE-7.1.2",
      body: [
        { type: "list", intro: "Verify automated suites for completeness, consistency and correct behavior:", items: [
          "Composition — every test has expected results, test data is present, and the TAF and SUT versions are correct.",
          "New TAF features — monitor closely the first time test cases use them.",
          "Repeatability — reruns must give the same result. Tests that don't (e.g. race conditions) leave the active suite and are analyzed separately, otherwise the team keeps re-analyzing the same noise.",
          "Intrusiveness — a TAS tightly coupled with the SUT can change its behavior or performance and produce failures that never occur in production, eroding trust; developers may ask for manual reproduction.",
        ]},
      ],
    },
    "7.1.3": {
      objective: "TAE-7.1.3",
      body: [
        { type: "p", text: "When a script fails or passes unexpectedly, do root cause analysis: inspect test logs, performance data, and the script's setup and teardown, and run a few tests in isolation." },
        { type: "p", text: "Intermittent failures are hardest. The defect could be in the test case, the SUT, the TAF, the hardware or the network. Monitor system resources, analyze test case, SUT and TAF logs, debug, and involve test analysts, business analysts, developers or system engineers as needed." },
        { type: "note", title: "Assertions", text: "Check that every assertion is in place. Missing assertions lead to inconclusive results — a test can pass without verifying anything." },
      ],
    },
    "7.1.4": {
      objective: "TAE-7.1.4",
      body: [
        { type: "p", text: "Static code analysis finds vulnerabilities and defects in both SUT and TAF code. Automated scans early in the pipeline give immediate feedback — a proactive technique central to DevSecOps. Findings are rated critical, high, medium or low; some tools show the offending lines and suggest fixes, measure quality, recommend comments, improve resource handling (try/catch, loops) and flag poor library calls." },
        { type: "example", title: "Plaintext password", text: "A TAE hardcodes a username and password in several test scripts. Even though test code isn't shipped, the password is exposed. A static analysis tool scanning the automation code catches this security violation — so automation code must be scanned too." },
      ],
    },
  },
};
