// CTAL-TAE v2.0 — Chapter 7: Verifying the Test Automation Solution
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 7,
  title: 'Verifying the Test Automation Solution',
  time: '135 min',
  color: '#0D9488',
  bg: '#F0FDFA',
  overview: "6 questions per sample exam. Verify the ENVIRONMENT (tool installation via automated install/repository, repeatable setup/teardown, connectivity preconditions, TAF component testing) and the SUITE (composition/completeness, new TAF features, REPEATABILITY — move flaky tests out, INTRUSIVENESS), do root cause analysis on unexpected results (missing assertions → inconclusive), and use static analysis on automation code (e.g. plaintext passwords).",
  sections: [
    {
      id: '7.1.1', title: 'Verifying the Test Automation Environment and Tool Setup', level: 'K3', type: 'deep',
      deepPoints: [
        "TOOL INSTALLATION, setup, configuration, customization: executables, function libraries, data and config files; service packs and add-ins. AUTOMATED INSTALLATION or copying from a REPOSITORY guarantees the same TAS version and configuration on every SUT; upgrades via the repository like other dev tools.",
        "REPEATABLE SETUP/TEARDOWN: systematic loading/unloading of the TAS — rebuilding makes no discernible difference across environments; configuration management of TAS components; document components to know what's affected when the SUT environment changes.",
        "CONNECTIVITY: preconditions/checks before use — log into servers, launch tools, confirm tools reach the SUT, inspect config, check logging/reporting permissions.",
        "TAF COMPONENT TESTING: test TAF components functionally and non-functionally (e.g. object verification across many object classes; accurate logs/reports; performance degradation, memory leaks, interoperability)."
      ],
      examInsights: [
        "A-Q29 KEY (K3) — Verifying the environment: establish a central repository so all tested environments use the same TAS version/configuration.",
        "A-Q30 KEY (K3, select TWO) — Old TAS components on new environments → automated installation scripts for the tools and keeping components in a repository/configuration management.",
        "ASTQB-Q29/Q30 — Put all components under configuration management; tests slower from the start than manual runs → the TAF itself is affecting performance (intrusiveness)."
      ]
    },
    {
      id: '7.1.2', title: 'Correct Behavior of Automated Test Scripts and Suites', level: 'K2', type: 'deep',
      deepPoints: [
        "Test the suite for completeness, consistency and correct behavior: (1) COMPOSITION — all tests have expected results, test data present, correct TAF and SUT versions; (2) verify tests using NEW TAF FEATURES closely the first time; (3) REPEATABILITY — same results every run; move unreliable tests (race conditions) OUT of the active suite and analyze separately; (4) INTRUSIVENESS — a TAS tightly coupled to the SUT can change its behavior/performance and show failures not seen in production → developers may ask for manual reproduction."
      ],
      examInsights: [
        "A-Q31 / A-Q32 KEY — Scripts that pass once and fail another time (race conditions/random errors) → remove them from the active suite and analyze separately.",
        "ASTQB-Q31/Q32 — Inconsistent results = missing repeatability; completeness checks include correct and available test data."
      ]
    },
    {
      id: '7.1.3', title: 'Where Test Automation Produces Unexpected Results', level: 'K2', type: 'deep',
      deepPoints: [
        "Unexpected pass or fail → root cause analysis: test logs, performance data, setup and teardown; run a few isolated tests.",
        "Intermittent failures are harder — the defect may be in the test case, SUT, TAF, hardware or network; monitor resources; analyze logs of test case, SUT and TAF; debug; involve test analysts, BAs, developers or system engineers.",
        "Check that all ASSERTIONS are in place — missing assertions give inconclusive results (and false positives)."
      ],
      examInsights: [
        "A-Q33 KEY — Tests pass manually but fail via the TAS → analyze log files to find the root cause.",
        "ASTQB-Q33 — Proof that an action really happened: add a user and verify in the database that the user exists."
      ]
    },
    {
      id: '7.1.4', title: 'Static Analysis for Test Automation Code Quality', level: 'K2', type: 'deep',
      deepPoints: [
        "Static code analysis finds vulnerabilities and defects in SUT AND TAF code; automated scans in pipelines give immediate feedback — proactive defect detection, key in DevSecOps.",
        "Findings categorized critical/high/medium/low; some tools SUGGEST FIXES showing the offending lines; also measure quality, suggest where to comment, improve resource handling (try/catch, loops), remove poor library calls.",
        "Automation code is code: scan it too — e.g. PLAINTEXT PASSWORDS in test scripts are a real vulnerability even if test code isn't deployed."
      ],
      examInsights: [
        "A-Q34 KEY — Security-critical app: use a static analysis tool to find security vulnerabilities in the test automation code.",
        "ASTQB-Q34 — Benefit: the developer is given suggested fixes."
      ]
    }
  ]
};
