// CT-SEC (Advanced Security Tester 2016) — Chapter 7: Security Test Evaluation and Reporting
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 7,
  title: 'Security Test Evaluation and Reporting',
  time: '70 min',
  color: '#0D9488',
  bg: '#F0FDFA',
  overview: "Short chapter: revise security expectations and acceptance criteria as risks and stakeholder expectations change; keep results CONFIDENTIAL (need to know); security defects get higher severity → precise, accurate, timely reporting agreed with management (e.g. a dashboard); know the eight sections of a security test report and what makes reporting effective (timing, content, recipients, tuning).",
  sections: [
    {
      id: '7.1', title: 'Security Test Evaluation', level: 'K2', type: 'deep',
      deepPoints: [
        "Completion is judged by measuring results against security expectations, EXIT CRITERIA and ACCEPTANCE CRITERIA.",
        "Not all risks are known at the start and expectations change (e.g. awareness of a NEW THREAT raises the required security level) → revisit risk assessments throughout and feed them into planning and execution."
      ],
      examInsights: ["Q38 KEY — Reassess security expectations often because stakeholders make business decisions based on the associated security risks."]
    },
    {
      id: '7.2.1', title: 'Confidentiality of Security Test Results', level: 'K2', type: 'deep',
      deepPoints: [
        "Testers end up knowing the system's weaknesses better than most designers — and communicating vulnerabilities beyond direct stakeholders can do harm.",
        "Share only on a NEED-TO-KNOW basis; being conservative with security results is good practice."
      ],
      examInsights: ["Q39 KEY — An important aspect of security test results: the fewer people that know, the better."]
    },
    {
      id: '7.2.2', title: 'Controls and Data Gathering for Status Reporting', level: 'K2', type: 'skim',
      summary: "Security vulnerabilities are more sensitive than normal defects and usually get HIGHER SEVERITY → management focuses on them. Reporting must carefully assess impact, be ACCURATE and PRECISE about nature and risks, and be available in a well-defined, TIMELY way — agree with management how and when they want access (e.g. a security test DASHBOARD with proper controls and data-gathering mechanisms)."
    },
    {
      id: '7.2.3', title: 'Analyzing Interim Security Test Status Reports', level: 'K4', type: 'deep',
      deepPoints: [
        "Report throughout or at the end — EARLY reporting is encouraged (more time to remediate).",
        "Structure: (1) report identifier; (2) summary — executive summary, key findings; (3) variances — process followed, deviations, methods and tools (configurations, policies); (4) comprehensive assessment — coverage vs test plan criteria, items not tested and why; (5) summary of results — resolved vulnerabilities and resolutions, UNRESOLVED vulnerabilities; (6) evaluation — status vs exit criteria, risks (classifications) and impact of unresolved vulnerabilities; (7) summary of activities; (8) approvals.",
        "Effectiveness depends on TIMING, CONTENT, RECIPIENTS and TUNING content to their needs → multiple reports (executive management ≠ system architect)."
      ],
      examInsights: ["Q40 KEY (3 pts) — With a strong risk emphasis: describe risk impact in the summary, then detail it in terms of specific vulnerabilities later in the report."]
    }
  ]
};
