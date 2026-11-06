// CTAL-TAE v2.0 — Chapter 8 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A deployed test automation solution is never finished. This chapter covers using data to improve test cases, the many technical levers for improving a TAS — from scripting and waits to execution, libraries and the TAF itself — how to restructure testware safely when the SUT changes, and other useful jobs for automation tools.",
  keywords: ["schema validation", "test histogram"],
  objectives: [
    { id: "TAE-8.1.1", level: "K3", text: "Discover opportunities for improving test cases through data collection and analysis" },
    { id: "TAE-8.1.2", level: "K4", text: "Analyze the technical aspects of a deployed test automation solution and provide recommendations for improvement" },
    { id: "TAE-8.1.3", level: "K3", text: "Restructure the automated testware to align with SUT updates" },
    { id: "TAE-8.1.4", level: "K2", text: "Summarize opportunities for use of test automation tools" },
  ],
  sections: {
    "8.1.1": {
      objective: "TAE-8.1.1",
      body: [
        { type: "list", items: [
          "Test histogram — a visual report of results and their data (exception logs, error messages, screenshots), available in many CI/CD and reporting tools, showing trends and fragile tests worth refactoring.",
          "Artificial intelligence — tools using ML and image recognition notice when a UI locator has changed, find the new selector, self-heal the test and report the change, speeding up maintenance.",
          "Schema validation — for APIs and databases: check that mandatory elements are present with the defined types and value ranges. On failure the validation output points to the cause.",
        ]},
        { type: "example", title: "Schema validation", text: "An API returns six mandatory string fields. Instead of writing assertions that each is a non-null string, one schema validation does it all — shorter code and faster detection of backend defects." },
      ],
    },
    "8.1.2": {
      objective: "TAE-8.1.2",
      body: [
        { type: "p", text: "Beyond keeping the TAS in step with the SUT, improve it for efficiency, ease of use, new capabilities and better test support — prioritizing what adds most value." },
        { type: "table", headers: ["Area", "Improvement ideas"], rows: [
          ["Scripting", "Move to a stronger technique (linear → data-driven → keyword-driven) for new tests and the most maintenance-heavy old ones; consolidate repeated steps into parameterized library functions; add failure recovery for TAS and SUT (continue with the next test, reboot the SUT)"],
          ["Waits", "Hard-coded waits cause many defects; polling for a state change is better; subscribing to SUT events is most reliable — both need a timeout so a defect can't hang the test"],
          ["Test execution", "Run concurrently on several environments; with one expensive target, split the suite into parts that each fit a night; remove duplicate coverage; parallel batch jobs and scheduled pipelines"],
          ["Verification", "A standard set of (parameterized) verification methods used by all tests"],
          ["TAA", "Change SUT or TAA for testability (e.g. dedicated test APIs) — far cheaper if planned early"],
          ["TAF core libraries", "Pilot the new version → impact analysis → adoption plan → teams update in their business logic layer → finally update the core libraries dependency"],
          ["Setup and teardown", "Move repeated actions there, e.g. web service calls for user registration and cleanup before UI tests"],
          ["Documentation and features", "Keep automation, user and report documentation current; add only features that will actually be used"],
          ["TAF updates/upgrades", "Try new tool versions on representative sample tests across SUTs, test types and environments before rollout"],
        ]},
      ],
    },
    "8.1.3": {
      objective: "TAE-8.1.3",
      body: [
        { type: "p", text: "Any SUT change, however small, can affect TAS reliability and performance. Identify which changes the environment needs — testware, custom libraries, operating system — and apply them incrementally with a minimum-viable-product mindset: measure the impact on a limited run, then roll out fully, and finish with a full regression run, root-causing any failures." },
        { type: "list", intro: "Restructuring opportunities:", items: [
          "Fold new, more efficient techniques into the core function libraries.",
          "Consolidate many functions that act on the same control type (visible, enabled, value…) into fewer, more general ones.",
          "Refactor the TAA for SUT changes instead of bolting features on.",
          "Keep naming conventions consistent with existing standards.",
          "Review scripts for revision or elimination — split slow complex tests, drop ones that rarely or never run.",
        ]},
      ],
    },
    "8.1.4": {
      objective: "TAE-8.1.4",
      body: [
        { type: "list", items: [
          "Environment setup and control — scripts create test data (e.g. register users with different profiles through a web service endpoint) and clean up logs and testware afterwards.",
          "Data aging — keep date fields in test databases current.",
          "Screenshot and video generation — produce real usage material for release documentation or marketing.",
        ]},
      ],
    },
  },
};
