// CT-UT (syllabus 2018) — Chapter 7: Selecting Appropriate Methods
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 7,
  title: 'Selecting Appropriate Methods',
  time: '40 min',
  color: '#0D9488',
  bg: '#F0FDFA',
  overview: "One K4 question. Know the seven criteria for choosing a usability evaluation method — purpose, USABILITY MATURITY (low → prefer testing over reviews), completion time, project stage, resources (short tests, unmoderated tests, RITE), availability of end users, lifecycle model — and that mixing methods is recommended. Accessibility method choice depends on legal and organizational requirements and the number of users with disabilities.",
  sections: [
    {
      id: '7.1.1', title: 'Selecting a Usability Evaluation Method', level: 'K4', type: 'deep',
      deepPoints: [
        "PURPOSE: effectiveness → testing or review; efficiency requirements or measurable improvement → QUANTITATIVE test; satisfaction requirements → USER SURVEY; raise awareness/maturity → run a usability TEST to convince skeptics.",
        "USABILITY MATURITY (high: HCD process with milestones; medium: HCD quality, time, resources known and controlled; low: individuals follow HCD unsystematically; very low: indifference or hostility). Low/very low → favor TESTING over REVIEWS, whose outcomes get dismissed as opinions.",
        "COMPLETION TIME: reviews fastest (a few days); unmoderated tests also quick. PROJECT STAGE: early prototypes → formative methods (review, quantitative evaluation, survey).",
        "RESOURCES limited → SHORT usability test (moderator takes notes, no lab, 3–5 participants, ~15 findings), UNMODERATED testing (no moderator, video recorded — fast recruitment, cheaper, same analysis effort), RITE. END USERS unavailable → reviews. LIFECYCLE: all methods fit sequential; agile needs fast results — RITE, short tests.",
        "MIX methods suited to the stage — reviews early, testing later; e.g. quick café tests then formal sessions, or a quick review to remove serious problems before an expensive test."
      ],
      examInsights: ["A-Q32 (K4) — Developers ignored review feedback → run a usability test so the feedback can't be dismissed as opinion."]
    },
    {
      id: '7.1.3', title: 'Selecting UX and Accessibility Evaluation Methods', level: 'K4', type: 'skim',
      summary: "UX evaluation methods are chosen with the same criteria as usability methods. ACCESSIBILITY evaluation methods depend on LEGAL requirements, ORGANIZATIONAL requirements, and the NUMBER OF USERS WITH DISABILITIES in the product's target groups.",
      examInsights: []
    }
  ]
};
