// CT-UT (syllabus 2018) — Chapter 4: Usability Reviews
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 4,
  title: 'Usability Reviews',
  time: '90 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Three questions incl. a K4 heuristic-evaluation scenario. Know what a usability review is based on and why a VISIBLE UI matters, the six review steps (reviewers evaluate ALONE, then reach CONSENSUS), the risks of opinion-based reviews, informal vs expert reviews (experts = recognized by independent peers) and heuristic evaluation with Nielsen's ten heuristics — and the correct approach: heuristics drive the evaluation.",
  sections: [
    {
      id: '4.1', title: 'Usability Reviews: Introduction and Approach', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY REVIEW: evaluation based on the judgment of reviewers who examine or use the product to find potential usability problems and deviations from criteria — by usability experts and professionals, SMEs, designers, (acceptance) testers, customer reps, potential users.",
        "Based on usability requirements, UI guidelines, usability standards, prior experience of user problems. More effective when the UI is VISIBLE (screenshots beat narrative descriptions).",
        "Six steps: (1) PREPARE — goals with stakeholders, method, reviewers; (2) optional author presentation — information only, avoid biasing; (3) reviewers evaluate IN SOLITUDE — who uses it, why, with what goals, from what perspective; (4) CONSENSUS meeting — only agreed findings go in the report; (5) present majority-agreed findings to author and stakeholders; (6) one reviewer writes the REPORT (like a usability test report)."
      ],
      examInsights: ["A-Q14 — An important component of an effective usability review: a visible user interface, real or simulated."]
    },
    {
      id: '4.1.2', title: 'Risks and Challenges of Usability Reviews', level: 'K2', type: 'skim',
      summary: "Reviews are OPINION-BASED; clashes of opinion signal an organization lacking usability understanding or inexperienced professionals. Risks: no candid discussion → a single reviewer's wrong finding is accepted (reviewers must reject questionable findings and accept good single-reviewer ones); reviewers unfamiliar with the product and its constraints; reviewers not respected → valid findings dismissed; focus on minor details (guideline violations, graphics) → serious effectiveness/efficiency problems missed.",
      examInsights: []
    },
    {
      id: '4.2', title: 'Informal and Expert Usability Reviews', level: 'K2', type: 'deep',
      deepPoints: [
        "INFORMAL USABILITY REVIEW: anyone can do it; based on opinion, personal experience and common sense; no formal qualification — though usability experience or domain knowledge helps; a professional with one or two years' experience can do a valuable one.",
        "EXPERT USABILITY REVIEW: an informal review by EXPERTS — people recognized as experts by INDEPENDENT PEERS (usability and/or subject matter); based on extensive experience (mainly from usability tests) and introspection.",
        "Often combined with heuristic evaluation: expert review first, then go back over the heuristics to avoid missing something."
      ],
      examInsights: ["A-Q15 — Most experienced reviewer has six months of usability testing experience → an informal usability review."]
    },
    {
      id: '4.2.3', title: 'Heuristic Evaluation', level: 'K4', type: 'deep',
      deepPoints: [
        "Reviewers (preferably experts) compare the UI against a list of HEURISTICS — generally recognized, comprehensible rules of thumb, usually in sets of about ten.",
        "Nielsen's ten: (1) visibility of system status; (2) match between system and real world; (3) user control and freedom (emergency exit, undo/redo); (4) consistency and standards; (5) error prevention; (6) RECOGNITION RATHER THAN RECALL; (7) flexibility and efficiency of use (accelerators); (8) aesthetic and minimalist design; (9) help users recognize, diagnose and recover from errors; (10) help and documentation.",
        "Risks: complex issues don't fit a limited set; heuristics ignore context of use; WRONG APPROACH = find issues by intuition and map them to heuristics afterwards — heuristics must DRIVE the evaluation (unlinked findings belong to an informal/expert review); interpretation needs experience; don't invent your own set."
      ],
      examInsights: ["A-Q16 (K4) — Making users re-enter a number they saw on a previous screen (e.g. a new driver's license number) violates RECOGNITION RATHER THAN RECALL."]
    }
  ]
};
