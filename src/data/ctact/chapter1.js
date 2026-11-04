// CT-AcT (Acceptance Testing Specialist, syllabus v1.0 2019) — Chapter 1: Introduction and Foundations
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-AcT Sample Exam A v1.3 (2023-10-26)
export default {
  id: 1,
  title: 'Introduction and Foundations',
  time: '80 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "Six questions in Sample Exam A, one per objective. Know the chain business goals → business needs → requirements (same intent, different abstraction), that ACCEPTANCE CRITERIA are measurable true/false statements saying WHAT to test (not the procedure) while acceptance TESTS say HOW, why vague requirements produce invalid tests, how business analysis activities map onto the test process, and ATDD vs BDD (Gherkin, living documentation).",
  sections: [
    {
      id: '1.1.1', title: 'Business Goals, Business Needs and Requirements', level: 'K1', type: 'skim',
      summary: "Business analysts first understand the organization's business goals, processes and stakeholders, then describe business needs and a business case, and only then elicit requirements. Goals, needs, business requirements and product requirements describe WHAT shall be achieved at different levels of abstraction (Agile: features and user stories).",
      examInsights: ["A-Q1 (K1) — They describe what shall be achieved at different levels of abstraction."]
    },
    {
      id: '1.1.2', title: 'Requirements / User Stories, Acceptance Criteria and Acceptance Tests', level: 'K2', type: 'deep',
      deepPoints: [
        "BAs and testers (possibly with developers) should create acceptance criteria and acceptance tests JOINTLY during requirements elicitation — shared understanding of \"acceptable\" from the start.",
        "ACCEPTANCE CRITERIA belong to one requirement or user story (part of its description or an attribute; for stories they extend the story). They are MEASURABLE statements that are either TRUE or FALSE.",
        "Acceptance criteria are the test conditions — WHAT to test; they contain no detailed test procedures. ACCEPTANCE TEST CASES are derived from them and specify HOW to verify them."
      ],
      examInsights: ["A-Q2 — Acceptance criteria specify what shall be tested to verify that a requirement or user story has been implemented as expected."]
    },
    {
      id: '1.1.3', title: 'The Importance of the Quality of the Requirements', level: 'K2', type: 'deep',
      deepPoints: [
        "Vague or ambiguous requirements/criteria → testers make ASSUMPTIONS about stakeholder expectations → flawed tests, rework, or invalid tests: unnecessary cost, risk and uncertainty about quality.",
        "Testers work closely with BAs to resolve ambiguities and clarify assumptions so tests are valid indicators of release readiness.",
        "Quality aids: INVEST criteria for user stories (Agile); ISO/IEC/IEEE 29148 good practices for requirements engineering."
      ],
      examInsights: ["A-Q3 — Vague or ambiguous requirements may lead to misunderstandings both during implementation AND testing."]
    },
    {
      id: '1.2.1', title: 'Relationship between Business Analysis and Testing Activities', level: 'K2', type: 'deep',
      deepPoints: [
        "IQBBA business analysis: strategy definition, management of BA processes, REQUIREMENTS ENGINEERING, SOLUTION EVALUATION and optimization. The BA identifies stakeholder needs and builds consensus across roles.",
        "Requirements engineering ↔ test planning, analysis, design: requirements are the test basis; testers help define and verify acceptance criteria (test analysis/design may CHANGE acceptance criteria); both assess the impact of requirement changes.",
        "Solution evaluation ↔ test implementation, execution, completion: BAs review test procedures/scripts, clarify issues, help create business test data, help execute tests, evaluate results and support completion."
      ],
      examInsights: ["A-Q4 — Test analysis and test design activities may result in changes of acceptance criteria."]
    },
    {
      id: '1.2.2', title: 'Collaboration between Business Analysts and Testers', level: 'K2', type: 'deep',
      deepPoints: [
        "Common goal: products with the highest possible value for the customer. Beyond joint discussions and reviews, they collaborate on TEST PLANNING BASED ON RISK ANALYSIS so the right test cases are developed and prioritized.",
        "CROSS-TRAINING: testers learn business needs, BAs learn structured testing — better mutual understanding and collaboration."
      ],
      examInsights: ["A-Q5 — BAs collaborate on test planning and risk analysis so appropriate test cases are developed and prioritized."]
    },
    {
      id: '1.2.3', title: 'ATDD and BDD', level: 'K2', type: 'deep',
      deepPoints: [
        "Sequential models: acceptance test analysis/design after requirements are final. Agile: acceptance criteria and tests are created during requirements analysis and backlog refinement — EARLY TESTING.",
        "ATDD: acceptance tests produced COLLABORATIVELY during requirements analysis by BAs, product owners, testers and developers — any textual or graphical form (e.g. visual ATDD with workflow models).",
        "BDD: requirements written in GHERKIN (Given–When–Then) natural-language statements that become the acceptance test cases and the basis for automation.",
        "Both engage the whole team, focus development on business goals, and make acceptance tests LIVING DOCUMENTATION readable by stakeholders (usage scenarios). The terms are sometimes used interchangeably."
      ],
      examInsights: ["A-Q6 — In both ATDD and BDD, test cases provide examples of usage that serve as living documentation."]
    }
  ]
};
