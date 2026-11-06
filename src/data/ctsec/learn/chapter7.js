// CT-SEC (Advanced Security Tester 2016) — Chapter 7 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Security test results need careful evaluation and even more careful reporting. This chapter covers revising security expectations as projects evolve, keeping results confidential, gathering accurate status data, and structuring and judging interim security test reports.",
  keywords: ["acceptance criteria", "attack vector", "dashboard", "exit criteria"],
  objectives: [
    { id: "AS-7.1.1", level: "K2", text: "Understand the need to revise security expectations and acceptance criteria as the scope and goals of a project evolve" },
    { id: "AS-7.2.1", level: "K2", text: "Understand the importance of keeping security test results confidential and secure" },
    { id: "AS-7.2.2", level: "K2", text: "Understand the need to create proper controls and data-gathering mechanisms to provide the source data for the security test status reports in a timely, accurate, and precise fashion (e.g., a security test dashboard)" },
    { id: "AS-7.2.3", level: "K4", text: "Analyze a given interim security test status report to determine the level of accuracy, understandability, and stakeholder appropriateness" },
  ],
  sections: {
    "7.1": {
      objective: "AS-7.1.1",
      body: [
        { type: "p", text: "Test completion is judged by measuring results against security expectations, exit criteria and acceptance criteria. But not every risk is known at the start, and expectations change — learning of a new threat may raise the security level stakeholders demand. So revisit security risk assessments throughout the project and feed them into test planning and execution." },
      ],
    },
    "7.2.1": {
      objective: "AS-7.2.1",
      body: [
        { type: "p", text: "After testing, testers often know a system's weaknesses better than its designers. Communicating vulnerabilities beyond the direct stakeholders can cause harm, so share security results strictly on a need-to-know basis — being conservative is good practice." },
      ],
    },
    "7.2.2": {
      objective: "AS-7.2.2",
      body: [
        { type: "p", text: "Security vulnerabilities are more sensitive than ordinary defects and usually rated more severe, so management watches them closely. Reports must assess impact carefully, describe nature and risks accurately and precisely, and arrive in a well-defined, timely way. Agree with management how and when they want access — for example through a security test dashboard backed by proper controls and data gathering." },
      ],
    },
    "7.2.3": {
      objective: "AS-7.2.3",
      body: [
        { type: "p", text: "Reports can be produced throughout testing or at the end; reporting early is encouraged because it leaves more time for remediation." },
        { type: "list", intro: "Security test report structure:", items: [
          "Report identifier.",
          "Summary — executive summary and key findings.",
          "Variances — the test process followed, deviations from plan, methods and tools (configurations, policies).",
          "Comprehensive assessment — coverage against the test plan's criteria; untested items and why.",
          "Summary of results — resolved vulnerabilities with their resolutions; unresolved vulnerabilities.",
          "Evaluation — status against exit criteria; risks (classified) and impact of unresolved vulnerabilities.",
          "Summary of activities.",
          "Approvals.",
        ]},
        { type: "p", text: "Effectiveness depends on timing, content, recipients and tailoring the content to them — so several reports may be needed: an executive doesn't need what a system architect needs." },
      ],
    },
  },
};
