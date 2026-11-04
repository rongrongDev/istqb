// CT-UT (syllabus 2018) — Chapter 6: User Surveys
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 6,
  title: 'User Surveys',
  time: '30 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: "Two questions. Know that a USER SURVEY collects users' subjective evaluations — mainly SATISFACTION — the six survey steps, and the three standardized questionnaires: SUS (10 items, 5-point scale), SUMI (50 statements, agree/don't know/disagree), WAMMI (20 statements on websites, 5-point scale), all allowing BENCHMARKING and usable as acceptance criteria.",
  sections: [
    {
      id: '6.2', title: 'Step-By-Step Approach to User Surveys', level: 'K2', type: 'deep',
      deepPoints: [
        "USER SURVEY: a representative sample of users report their SUBJECTIVE evaluation in a questionnaire, based on their experience — used to evaluate SATISFACTION.",
        "Steps: (1) SURVEY PLAN (goals, resources, schedule; reviewed and approved by stakeholders); (2) INTERVIEW users and stakeholders on what to focus on — recent, vivid experience; (3) SELECT A QUESTIONNAIRE (standard vs own — own design is out of scope); (4) DEPLOY — recruit, publish, remind non-responders; (5) ANALYZE responses; (6) COMMUNICATE — useful, usable report and presentation."
      ],
      examInsights: ["A-Q30 — After launching a new app, a survey-type evaluation yields an understanding of users' satisfaction."]
    },
    {
      id: '6.3', title: 'Standardized Questionnaires', level: 'K2', type: 'deep',
      deepPoints: [
        "Standardized, public questionnaires are preferred over self-invented questions; they measure quality from the end user's view, allow BENCHMARKING against databases of earlier measurements, and give concrete numbers usable as completion or ACCEPTANCE CRITERIA.",
        "SUS — System Usability Scale: simple TEN-ITEM attitude scale, global view of subjective usability; five responses Strongly Agree … Strongly Disagree (\"I thought the system was easy to use\").",
        "SUMI — Software Usability Measurement Inventory: FIFTY statements; Agree / Don't Know / Disagree (\"This software responds too slowly to inputs\").",
        "WAMMI — Website Analysis and MeasureMent Inventory: TWENTY statements on WEBSITE usability — attractiveness, controllability, affect, efficiency, helpfulness, learnability; five-point scale."
      ],
      examInsights: ["A-Q31 — A short questionnaire letting users respond subjectively to a small set of statements = SUS."]
    }
  ]
};
