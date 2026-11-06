// CTAL-TAE v2.0 — Chapter 4 learn content, authored from ISTQB CTAL-TAE Syllabus v2.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Turning a design into working automation starts with a pilot. This chapter covers how to run a pilot that answers the right questions, the deployment and technical risks you must plan for — including logging levels and test fixtures — and the clean-code habits that keep a test automation solution maintainable.",
  keywords: ["risk", "test fixture"],
  objectives: [
    { id: "TAE-4.1.1", level: "K3", text: "Apply guidelines that support effective test automation pilot and deployment activities" },
    { id: "TAE-4.2.1", level: "K4", text: "Analyze deployment risks and plan mitigation strategies for test automation" },
    { id: "TAE-4.3.1", level: "K2", text: "Explain which factors support and affect test automation solution maintainability" },
  ],
  sections: {
    "4.1.1": {
      objective: "TAE-4.1.1",
      body: [
        { type: "p", text: "A pilot is short, but its outcome can set the direction of the whole automation effort, so first define what it must validate." },
        { type: "list", intro: "Technical questions the pilot should settle:", items: [
          "Which programming language(s)?",
          "Which commercial off-the-shelf or open-source tools?",
          "Which test levels to cover, and which test cases to automate first?",
          "Which test case development approach (see 3.1.4)?",
        ]},
        { type: "p", text: "From these, define an initial approach — possibly several prototypes to compare pros and cons — then pick a path. Set timelines and check progress periodically to catch risks. Integrate the code into CI/CD during the pilot: it surfaces problems in the SUT, the TAS or the tool landscape early. As tests grow, adapt how and when the pipeline runs them." },
        { type: "list", intro: "Non-technical aspects to evaluate:", items: [
          "Team members' knowledge and experience, and the team structure.",
          "Licensing and organizational rules.",
          "The planned types of testing and the target test levels.",
        ]},
        { type: "p", text: "At the end, TAEs and test managers assess success or failure and decide how to proceed." },
      ],
    },
    "4.2.1": {
      objective: "TAE-4.2.1",
      body: [
        { type: "p", text: "Decide how the TAF interfaces with the SUT as part of the architecture, then choose packaging, logging and test harness tools. During the pilot, think ahead to expanding and maintaining the code — these weigh heavily in the final decision." },
        { type: "p", text: "Deployment risks are often not automation-specific — firewall openings, CPU and RAM usage, network connections, reliability — but the TAE must make sure they're handled so quality gates are dependable. Example: real mobile devices must be powered, charged, on the network and able to reach the SUT." },
        { type: "table", headers: ["Technical risk", "What to plan for"], rows: [
          ["Packaging", "Version control testware like product code; share it via on-premises or cloud repositories"],
          ["Logging", "Use the right log levels so results can be understood and failures investigated"],
          ["Test structuring", "A test harness with test fixtures that control environment and data, define pre- and postconditions and group tests into suites — making tests repeatable and atomic"],
          ["Updating", "Automatic updates of harness agents and device OS version changes; mitigate with adequate power supplies, network connections and device configuration plans"],
        ]},
        { type: "table", headers: ["Log level", "Use"], rows: [
          ["Fatal", "Errors that may abort the test execution"],
          ["Error", "A condition or interaction failed, so the test case fails"],
          ["Warn", "Something unexpected happened but the test flow continues"],
          ["Info", "Basic information about the test case and what happens during execution"],
          ["Debug", "Execution details not needed in basic logs but useful when investigating failures"],
          ["Trace", "Like Debug with even more detail"],
        ]},
      ],
    },
    "4.3.1": {
      objective: "TAE-4.3.1",
      body: [
        { type: "p", text: "Maintainability depends on programming standards and what TAEs expect of each other's code. The golden rule is Robert C. Martin's clean code:" },
        { type: "list", items: [
          "Meaningful names following a common convention (e.g. loginButton, resetPasswordButton).",
          "A logical, shared project structure.",
          "No hardcoding — take data from a common source via data-driven testing; use constants for values that rarely change.",
          "Few input parameters per method; short, simple methods.",
          "Use logging.",
          "Use design patterns where they help (3.1.5).",
          "Focus on testability.",
        ]},
        { type: "p", text: "Back this up with static analyzers and IDE code formatters, and an agreed branching strategy in version control — separate branches for features, releases and defect fixes." },
      ],
    },
  },
};
