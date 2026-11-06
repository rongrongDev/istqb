// CT-TAS v1.0 — Chapter 5: Test Automation Impact Analysis
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 5,
  title: 'Test Automation Impact Analysis',
  time: '150 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "7 questions per sample exam incl. 2-point ROI CALCULATIONS. Learn ROI = savings / investment, which metrics feed savings vs investment, how to read the ROI turning point, the six automation metrics (pass-fail ratio, failures-to-defects, execution time, number of automated tests, functional coverage, code coverage), the organizational and project considerations, and what decisions automation report data supports.",
  sections: [
    {
      id: '5.1.1', title: 'Return on Investment of a Test Automation Solution', level: 'K3', type: 'deep',
      deepPoints: [
        "Estimate setup and maintenance costs before starting. ROI = SAVINGS / INVESTMENT (syllabus model uses TIME units; convert costs to time with a project rate; multiply by labor costs for money).",
        "SAVINGS inputs: time to run a test manually; time to run an automated test; number of test cases; number of test runs.",
        "INVESTMENT inputs: time to set up automation; average time to develop an automated script; number of scripts implemented; average maintenance time per script; time to run an automated script; % of failed automated scripts; number of test cases defined; number of test runs.",
        "Plot per sprint → the TURNING POINT where automation has paid back. If the project ends before it, don't automate. Applying the test pyramid (right levels, faster execution) improves ROI."
      ],
      examInsights: [
        "A-Q29 KEY (K3, 2 pts) — Read the ROI table/graph: the turning point is the first sprint where cumulative savings ≥ cumulative investment (Sprint 8 in the sample).",
        "A-Q30 KEY (K3, 2 pts, select TWO) — Investment inputs = scripts implemented, maintenance time, development time (2, 3, 5); savings inputs = manual run time, number of test cases, automated run time (1, 4, 6).",
        "ASTQB-Q29/Q30 — Calculation questions: savings = (manual − automated time) × tests × runs; investment = setup + development + maintenance + automated runs."
      ]
    },
    {
      id: '5.2.1', title: 'Metrics for Test Automation', level: 'K2', type: 'deep',
      deepPoints: [
        "Metrics support decisions on TAS suitability, adaptability to new test conditions (changed user flows or testing methods), and maintainability (defects in the TAS). Keep the cost of measuring low — automate collection.",
        "PASS-FAIL RATIO = passed / failed. RATIO OF FAILURES TO DEFECTS — many tests failing for one SUT defect; track failure reasons (subsystem, system, test data, infrastructure). TEST AUTOMATION EXECUTION TIME (incl. TAS build time) — matters as suites grow. NUMBER OF AUTOMATED TEST CASES — shows progress but not coverage. FUNCTIONAL COVERAGE — % of functional requirements covered by automated tests. CODE COVERAGE — lines exercised by component tests; no absolute target, 100% rarely feasible, more is better."
      ],
      examInsights: [
        "A-Q31 KEY — Percentage of requirements covered by automated tests = functional coverage of test automation.",
        "ASTQB-Q31 — 50 failures instead of the usual 1–2 → look for one cascading defect causing many failures (failures-to-defects)."
      ]
    },
    {
      id: '5.3.1', title: 'Organizational Considerations for Test Automation', level: 'K3', type: 'deep',
      deepPoints: [
        "Before starting, identify: POLICIES AND PRACTICES for development (technical specs, tools, code review guidelines, coding standards, merge processes); EXISTING ACTIVE AUTOMATION PROJECTS (reuse vs build new); the organization's AUTOMATION SMEs (lessons learned, risks); AVAILABILITY OF TEST ENVIRONMENTS (don't disrupt other teams; use existing ones as a baseline); TEST TOOLS AND LICENSES already owned (reuse to cut cost, e.g. the same cloud provider)."
      ],
      examInsights: [
        "A-Q32 KEY (K3, 2 pts) — Another team uses the same testware/environment and you broke each other's runs → you missed the availability of separate test data and test environments.",
        "ASTQB-Q32 — A previous project failed with an inflexible tool → investigate those technical issues before choosing."
      ]
    },
    {
      id: '5.3.2', title: 'Project Characteristics for Optimal Test Automation Objectives', level: 'K3', type: 'deep',
      deepPoints: [
        "DOMAIN (regulations, standards: tourism vs finance vs healthcare); PLATFORMS (multi-platform may need several solutions; plan for reuse); PROGRAMMING LANGUAGE & STACK (use the developers' language → collaboration, joint code reviews); PROJECT MATURITY (test cases, CI/CD, testers/TAEs; automate high-priority long-running manual tests first; short project → no big TAS; greenfield → incremental MVP roadmap).",
        "STAKEHOLDER BUY-IN: address fears (velocity, deadlines, budget) with product risks, benefits, milestones and needed testability improvements. TEAM KNOWLEDGE AND EXPERIENCE — the most important factor; competency/skill matrix to find gaps. TEST MANAGEMENT SUPPORT AND BUDGETING — achievable objectives; concise proposal with gaps, costs and BUSINESS VALUE. QUALITY CHARACTERISTICS (ISO/IEC 25010) to evaluate the TAS or choose its metrics."
      ],
      examInsights: [
        "A-Q33 KEY (K3, 2 pts) — To convince TAEs to follow changes, base goals on team knowledge and relevant experience.",
        "A-Q34 KEY (K3, 2 pts) — Tests only check API status/connectivity → evaluate functional completeness first.",
        "ASTQB-Q33/Q34 — First automate the existing prioritized manual tests; to win reluctant management, present the business value."
      ]
    },
    {
      id: '5.4.1', title: 'Decisions from Test Automation Reports', level: 'K2', type: 'deep',
      deepPoints: [
        "Reports differ for management, operational and technical stakeholders (see CTAL-TAE 6.1.3); can be merged into broader reports and escalated; emphasize each audience's key metrics.",
        "Decisions supported: identify trends and root causes; shift effort to maintenance, or to TAF improvement and new capabilities; increase shift left/right; expand functional coverage in future sprints; focus on defect clusters; advise developers where code needs improving; advise on SDLC processes; change future report content/format."
      ],
      examInsights: [
        "A-Q35 KEY — NOT typically decided from consolidated automation reports: advising business representatives on new features to build.",
        "ASTQB-Q35 — Many significant issues at the component level indicate testing should shift further left."
      ]
    }
  ]
};
