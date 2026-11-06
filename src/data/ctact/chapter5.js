// CT-AcT (syllabus v1.0 2019) — Chapter 5: Collaborative Acceptance Testing
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-AcT Sample Exam A v1.3
export default {
  id: 5,
  title: 'Collaborative Acceptance Testing',
  time: '110 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "Eight questions incl. two K3 workshop scenarios. Know the four collaboration goals (get to know each other, communicate openly, envision common objectives, defuse problems) and match workshop techniques to them, joint defect analysis (tester finds unmet criteria, BA assesses business impact and priority), reporting in business language with the three release outcomes (as is, with reservations, rejected), QA activities for acceptance testing (reviews, traceability, coverage analysis) and the tool types.",
  sections: [
    {
      id: '5.1', title: 'Collaboration', level: 'K3', type: 'deep',
      deepPoints: [
        "Many profiles (BAs, technical analysts, testers, business reps and sponsors, automation specialists) with different objectives and skills → SOCIAL SKILLS are paramount.",
        "With tools such as serious games, role play and workshops, help the team: GET TO KNOW each other (cohesion: who's who, common goals); COMMUNICATE OPENLY with trust and respect (taboo-free, voice doubts and fears); ENVISION common objectives and steps (what if it succeeds/fails, what is success); DEFUSE problems with humor, positive communication or negotiation (principled negotiation, caricature, role play/comics)."
      ],
      examInsights: ["A-Q33/Q34 (K3) — Stagnation and unclear future → a visioning workshop (a staircase of project milestones); a brand-new team needing team spirit → design a team emblem of shared values."]
    },
    {
      id: '5.2.1', title: 'Defect Analysis', level: 'K2', type: 'deep',
      deepPoints: [
        "Testers report discrepancies between actual and expected outcome with all information the BA needs to understand and assess the deviation.",
        "JOINT activity: the tester usually identifies the unmet acceptance criteria; the BA analyzes the IMPACT on business processes and sets the PRIORITY (low/medium/high/critical) by business impact.",
        "Impact analysis: explore the process-model paths where the defect occurs and the wrongly implemented business rules; document the analysis and decision in the defect report."
      ],
      examInsights: ["A-Q35/Q36 — Testers give accurate expected-vs-actual information; identifying the requirements/user stories not satisfied is part of the analysis attributed to the BA in the sample answer."]
    },
    {
      id: '5.2.2', title: 'Reporting', level: 'K2', type: 'deep',
      deepPoints: [
        "Audience: business managers, product managers, domain experts — present progress, results and defects WITHOUT TECHNICAL DETAILS in their language, using metrics.",
        "TEST SUMMARY REPORT: execution and results of all phases + impact analysis of open defects + whether quality criteria are reached — so decision makers can judge release.",
        "Outcomes: release AS IS; release WITH RESERVATIONS (known errors with workarounds communicated; risky features excluded from roll-out); REJECTED until critical defects are fixed and retested (roll-out postponed or alternatives used)."
      ],
      examInsights: ["A-Q37 — An acceptance test summary report contains information to evaluate the level of risk for product release."]
    },
    {
      id: '5.2.3', title: 'QA Activities for Acceptance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "REVIEW ACCEPTANCE CRITERIA (BA + tester): clear, consistent, comprehensive, incl. non-functional, measurable pass/fail.",
        "REVIEW ACCEPTANCE TEST CASES: cover criteria, business processes, rules and risks.",
        "TRACEABILITY between requirements/stories, criteria, test cases and defects; with BI-DIRECTIONAL traceability → systematic COVERAGE ANALYSIS.",
        "REVIEW TEST REPORTS: clear, consistent, comprehensive, supporting the release decision."
      ],
      examInsights: ["A-Q38/Q39 — Verifying that story-to-test traceability is up to date ensures quality; joint criteria reviews give a shared vision that eases test design."]
    },
    {
      id: '5.3', title: 'Tool Support', level: 'K1', type: 'skim',
      summary: "Tools come from both BA and testing domains: REQUIREMENTS MANAGEMENT and AGILE PROJECT MANAGEMENT tools (describe acceptance criteria, traceability to requirements/stories, coverage analysis); BUSINESS PROCESS MANAGEMENT tools (model processes and rules, analyze defect impact on processes); TEST MANAGEMENT AND AUTOMATION tools (manage tests, execution campaigns, results); MODEL-BASED TESTING tools (generate tests from process models, manage traceability); DEFECT/INCIDENT MANAGEMENT tools (defect lifecycle).",
      examInsights: ["A-Q40 (K1) — Modeling business processes and rules → business process management tools."]
    }
  ]
};
