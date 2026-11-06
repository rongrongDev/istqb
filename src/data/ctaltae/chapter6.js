// CTAL-TAE v2.0 — Chapter 6: Test Automation Reporting and Metrics
// summary/deepPoints from syllabus v2.0 (2024-05-03); examInsights from ISTQB Sample Exam v2.4 and the ASTQB TAE sample exam
export default {
  id: 6,
  title: 'Test Automation Reporting and Metrics',
  time: '150 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: "4 questions per sample exam incl. K3/K4 log-analysis scenarios worth 2–3 points. Know the data sources, what TAS logging must contain (test case + timing, status incl. TAS failure, counters, random seeds, replayable actions, screenshots, crash dumps, color), SUT logging (config at startup, time-synchronized logs), the 5-step failure analysis, TRACE/CORRELATION IDs, and who gets which test progress report.",
  sections: [
    {
      id: '6.1.1', title: 'Data Collection from the TAS and the SUT', level: 'K3', type: 'deep',
      deepPoints: [
        "Sources: SUT logs (UI, APIs, applications, web and database servers), TAF logs (audit trail), build logs, deployment logs, production/monitoring logs and performance test logs, screenshots and screen recordings. Enhance the core testware once (e.g. record start/end time) → all scripts benefit.",
        "Reporting features: record info before/during/after tests and suites; compare with PREVIOUS RUNS to show trends (success rate); verify with ASSERTIONS; on failure add cause information (screenshots); tool comparisons should IGNORE EXPECTED DIFFERENCES (dates, times) and highlight unexpected ones.",
        "TAS logging: test case under execution with start/end time; status = passed / failed / TAS FAILURE (defect not in the SUT) — define inconclusive clearly; significant steps with timing; dynamic SUT info (memory leaks); a COUNTER for reliability/stress cycles; RANDOM values/choices; actions logged so the run can be REPLAYED with same steps and timing; screenshots; crash dumps, stack traces, copies of overwritable (cyclic buffer) logs; COLOR (failures red, progress green).",
        "SUT logging: defect info with timestamps, source location, error messages; CONFIGURATION at startup (software/firmware, SUT and OS config); searchable, TIMESTAMP-SYNCHRONIZED logs so TAS and SUT failures correlate.",
        "Export to third-party tools (spreadsheets, XML, databases, report tools); visualize with charts and traffic lights; management likes visual summaries with drill-down."
      ],
      examInsights: [
        "A-Q25 KEY (K3, select TWO) — Screenshot comparisons all fail with no visible change: a recorded technical session ID changes (use variables) and a date in the header differs (exclude it from comparison).",
        "A-Q26 KEY (K3) — Know what belongs in useful logs; screenshots and request/response details help analysis.",
        "ASTQB-Q25/Q26 — Make logs understandable with color (red failures); capture screenshots at the point of failure."
      ]
    },
    {
      id: '6.1.2', title: 'Analyzing TAS and SUT Data to Understand Results', level: 'K4', type: 'deep',
      deepPoints: [
        "TAS data is PRIMARY, SUT data SECONDARY. Also: analyze environment data for sizing (clusters, CPU/RAM, single vs cross-browser), compare with previous runs, use web logs to monitor usage.",
        "Failure analysis: (1) did it fail before? (known defect in SUT or TAS — keep historical results); (2) identify the test case and what it tests (ID in test management); (3) find the failing TEST STEP; (4) check the SUT state in logs/screenshots/API/network logs vs expected; (5) if the SUT state is wrong, log a DEFECT with evidence.",
        "Actual = expected but test failed → most likely a TAS defect (or an invisible mismatch). Environment unavailable → many tests fail at once; check SUT logs for outages.",
        "Audit logs with a unique CORRELATION ID / TRACE ID per interaction let you trace behavior across the stack — the TAS should log it."
      ],
      examInsights: [
        "A-Q27 KEY (K4, 3 pts) — To trace all transactions across the architecture: populate trace IDs across the software components and log them.",
        "ASTQB-Q27 — Failure reproduces manually and comes from a third-party component → contact the vendor and log a defect."
      ]
    },
    {
      id: '6.1.3', title: 'Constructing and Publishing a Test Progress Report', level: 'K2', type: 'deep',
      deepPoints: [
        "Logs give detail, not overview → after each suite, create and publish a concise TEST PROGRESS REPORT (report generator).",
        "Content: test results, SUT information, test environment documentation — formatted per stakeholder; which tests failed and why, execution history, who is responsible; also diagnoses TAF failures.",
        "Publish to ALL RELEVANT STAKEHOLDERS (website, cloud/on-prem, mailing list, test management tool, chatbot); keep report history for regression trend statistics.",
        "Management (architects, delivery/program/test managers) → trends: tests added, pass-fail ratio change, TAS/SUT reliability. Operational (PO, business, BA) → product use metrics. Technical (team lead, SM, admins, TAE, testers, devs) → lower-level details.",
        "Dashboards aggregate pipeline logs, project management tools and repos → defect clusters, propagation, performance degradation, build reliability. AI/ML log analysis finds broken locators, SUT-vs-TAS failures, groups common defects."
      ],
      examInsights: [
        "A-Q28 KEY — Show management whether the success rate improves over runs → implement an analysis feature comparing with previous runs.",
        "ASTQB-Q28 — The report goes to all stakeholders with a need or interest in the testing."
      ]
    }
  ]
};
