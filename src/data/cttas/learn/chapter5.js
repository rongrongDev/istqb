// CT-TAS v1.0 — Chapter 5 learn content, authored from ISTQB CT-TAS Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Is automation paying off, and is it pointed at the right things? This chapter teaches a simple time-based ROI model, the metrics that describe a test automation solution, the organizational and project factors that shape automation objectives, and the decisions automation reports can drive.",
  keywords: ["coverage", "test report"],
  objectives: [
    { id: "CT-TAS-5.1.1", level: "K3", text: "Show the return on investment of building a test automation solution" },
    { id: "CT-TAS-5.2.1", level: "K2", text: "Classify metrics for test automation" },
    { id: "CT-TAS-5.3.1", level: "K3", text: "Identify organizational considerations for use of test automation" },
    { id: "CT-TAS-5.3.2", level: "K3", text: "Analyze project characteristics that help determine optimal implementation of test automation test objectives" },
    { id: "CT-TAS-5.4.1", level: "K2", text: "Analyze test report data to inform decision making" },
  ],
  sections: {
    "5.1.1": {
      objective: "CT-TAS-5.1.1",
      body: [
        { type: "p", text: "Estimate setup and maintenance costs before starting. The syllabus uses a simple model in time units (convert money to time with a project rate, or multiply time by labor rates to get money):" },
        { type: "note", title: "Formula", text: "ROI = Savings / Investment. Automation saves because the same tests run far faster than manually — and can therefore run more often." },
        { type: "table", headers: ["Savings inputs", "Investment inputs"], rows: [
          ["Time to run a test case manually", "Time to set up test automation"],
          ["Time to run an automated test case", "Average time to develop an automated script"],
          ["Number of test cases", "Number of automated scripts implemented"],
          ["Number of test runs", "Average maintenance time per automated script"],
          ["", "Time to run an automated script; % of failed automated scripts"],
          ["", "Number of test cases defined; number of test runs"],
        ]},
        { type: "p", text: "Plotting cumulative savings against cumulative investment per sprint shows the turning point where automation has paid for itself. If the project ends before that point, running tests manually is cheaper. Because investment depends heavily on automated execution time, following the test pyramid (tests at the right level) improves ROI." },
        { type: "example", title: "Savings", text: "Manual run 15 min, automated run 3 min, 250 tests, 10 runs: savings = (15 − 3) × 250 × 10 = 30,000 minutes. Compare that with setup + development + maintenance + automated run time to get the ROI." },
      ],
    },
    "5.2.1": {
      objective: "CT-TAS-5.2.1",
      body: [
        { type: "p", text: "Metrics support decisions about the TAS's suitability for the project, its adaptability to new test conditions (changed user flows or ways of testing) and its maintainability. Keep measurement cheap by automating collection and reporting." },
        { type: "table", headers: ["Metric", "What it shows"], rows: [
          ["Pass-fail ratio", "Passed automated tests ÷ failed automated tests"],
          ["Ratio of failures to defects", "How many tests fail for one SUT defect; track the cause (subsystem, system, test data, infrastructure)"],
          ["Test automation execution time", "Time to run the suite, including TAS build time — matters more as suites grow"],
          ["Number of automated test cases", "Progress of the automation effort — says nothing about coverage"],
          ["Functional coverage", "Percentage of functional requirements covered by automated tests"],
          ["Code coverage", "Lines exercised by component tests; no absolute target, 100% rarely achievable, more increases confidence"],
        ]},
      ],
    },
    "5.3.1": {
      objective: "CT-TAS-5.3.1",
      body: [
        { type: "list", intro: "Before starting, find out about the organization's:", items: [
          "Development policies and practices — technical specs, tools, code review guidelines, coding standards, merge processes — to hook automation into team processes.",
          "Existing active automation projects — can one be reused, or is a new TAS needed?",
          "Automation SMEs — their lessons learned reveal risks to avoid.",
          "Test environment availability — avoid disrupting other teams; use existing environments as a baseline for new ones.",
          "Existing test tools and licenses — reuse them (e.g. the same cloud provider) to cut cost and time.",
        ]},
        { type: "example", title: "A missed consideration", text: "Your new TAS starts using the same test data and environment as another team's suite, and both start failing. You didn't check the availability of separate test data and environments." },
      ],
    },
    "5.3.2": {
      objective: "CT-TAS-5.3.2",
      body: [
        { type: "table", headers: ["Characteristic", "Influence on automation objectives"], rows: [
          ["Domain", "Regulations and standards differ (tourism vs finance vs healthcare) — objectives must comply"],
          ["Platforms", "Multi-platform may need several solutions; plan for reuse (mobile and web can often share tools)"],
          ["Language and tech stack", "Use the developers' language for collaboration and joint code reviews"],
          ["Project maturity", "Number of tests, CI/CD, testers and TAEs; automate high-priority, long-running manual tests first; short project → no big TAS; greenfield → incremental MVP roadmap"],
          ["Stakeholder buy-in", "Counter fears (velocity, deadlines, budget) with product risks, benefits, milestones and needed testability improvements"],
          ["Team knowledge and experience", "The most important factor; use a competency and skill matrix to find gaps (training, assignments)"],
          ["Test management support and budget", "Set achievable objectives; propose concisely with gaps, costs and business value"],
          ["Quality characteristics", "ISO/IEC 25010 characteristics to evaluate the TAS or choose its metrics"],
        ]},
      ],
    },
    "5.4.1": {
      objective: "CT-TAS-5.4.1",
      body: [
        { type: "p", text: "Automation reports are tailored to management, operational or technical stakeholders, can feed a broader test report or be consolidated and escalated. Emphasize the metrics each audience cares about." },
        { type: "list", intro: "Report data can help you:", items: [
          "Identify trends and perform root cause analysis.",
          "Shift effort to maintenance, or to improving the TAF and adding TAS capabilities.",
          "Increase shift-left and shift-right testing; expand functional coverage in coming sprints.",
          "Focus on defect clusters; advise developers where code needs improvement; advise on SDLC processes.",
          "Change the content and format of future reports.",
        ]},
        { type: "seealso", label: "CTAL-TAE Learn — Chapter 6", href: "/ctaltae-learn", text: "constructing and publishing test progress reports per stakeholder group (6.1.3)" },
      ],
    },
  },
};
