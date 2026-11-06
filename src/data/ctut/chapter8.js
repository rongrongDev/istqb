// CT-UT (syllabus 2018) — Chapter 8: Summary of Roles and Responsibilities
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 8,
  title: 'Summary of Roles and Responsibilities',
  time: '30 min',
  color: '#9333EA',
  bg: '#FAF5FF',
  overview: "Two questions. Know who does what: the USABILITY TESTER organizes risk assessment, writes the plan, prepares sessions, reviews and surveys (and stands in as moderator or note-taker); the MODERATOR runs sessions incl. briefing and post-session interview, analyzes, logs and tracks problems; the NOTE-TAKER records findings and helps analyze them.",
  sections: [
    {
      id: '8.1', title: 'Usability Tester', level: 'K2', type: 'deep',
      deepPoints: [
        "Organize and take part in USABILITY RISK assessment; write the USABILITY TEST PLAN.",
        "Prepare test sessions: scripts, briefing instructions, pre- and post-session interview questions, test tasks.",
        "Prepare USABILITY REVIEWS: goals, method, reviewers. Conduct USER SURVEYS: survey plan, questionnaire choice, analysis, reporting.",
        "Act as MODERATOR and/or NOTE-TAKER when no separate person is assigned."
      ],
      examInsights: ["A-Q33 — Planning and running a user survey to evaluate and improve usability is the usability tester's job."]
    },
    {
      id: '8.2', title: 'Moderator and Note-Taker', level: 'K2', type: 'deep',
      deepPoints: [
        "MODERATOR: take part in risk assessment; CONDUCT sessions — pre-session briefing, run per the script, communicate with the participant, POST-SESSION INTERVIEW; analyze and discuss findings; LOG usability problems, TRACK them to resolution, REVIEW implemented solutions; act as note-taker if none is defined.",
        "NOTE-TAKER: RECORD important usability findings; analyze and discuss findings with the moderator."
      ],
      examInsights: ["A-Q34 — The end-of-session interview on what worked and what didn't is conducted by the usability test moderator."]
    }
  ]
};
