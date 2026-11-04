// CT-AcT (syllabus v1.0 2019) — Chapter 2: Acceptance Criteria, Acceptance Tests and Experience-Based Practices
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-AcT Sample Exam A v1.3
export default {
  id: 2,
  title: 'Acceptance Criteria, Acceptance Tests and Experience-Based Practices',
  time: '165 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "The biggest chapter: ten questions incl. four K3s. Be able to judge well-written acceptance criteria (precise, measurable, concise, WHAT not HOW, functional + non-functional), pick techniques for acceptance testing (black-box such as EP/BVA, plus business-process, experience-, risk- and model-based), write and recognize correct GHERKIN (Given state, When user action, Then observable result — no UI elements), and explain exploratory testing (sessions, charters, time-boxing) and beta testing (real users, own location, not systematic).",
  sections: [
    {
      id: '2.1', title: 'Writing Acceptance Criteria', level: 'K3', type: 'deep',
      deepPoints: [
        "Specifying criteria refines requirements/stories and is the basis for acceptance tests; BAs and testers collaborate closely. Thinking from a stakeholder/usage perspective finds inconsistencies, contradictions and gaps early.",
        "Good practices [Cohn]: PRECISE, MEASURABLE, CONCISE — a tester can decide pass/fail; NO TECHNICAL SOLUTION details (\"what\", not \"how\"); cover NON-FUNCTIONAL as well as functional requirements.",
        "Review criteria like requirements: walkthroughs, technical reviews, iteration planning meetings."
      ],
      examInsights: ["A-Q7/Q8 (K3) — The best criterion states an observable, checkable outcome (e.g. incomplete data is not recorded and a message is shown); vague wording (\"user-friendly\", \"fast\") or implementation details disqualify a criterion."]
    },
    {
      id: '2.2.1', title: 'Test Techniques for Acceptance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Requirements-based approach: derive test cases from the acceptance criteria of each requirement/story with BLACK-BOX techniques such as equivalence partitioning and boundary value analysis.",
        "Augment with: BUSINESS PROCESS-BASED testing (with decision tables for rules); EXPERIENCE-BASED testing; RISK-BASED testing (priority and thoroughness from product risks); MODEL-BASED testing (tests generated from graphical/textual models).",
        "Every acceptance criterion should be verified by tests, and TRACEABILITY between requirements/stories and test cases managed."
      ],
      examInsights: ["A-Q9/Q10 — In model-based testing, acceptance tests are generated from models; equivalence partitioning fits acceptance testing best among the offered techniques."]
    },
    {
      id: '2.2.2', title: 'Using the Gherkin Language to Write Test Cases', level: 'K3', type: 'deep',
      deepPoints: [
        "GIVEN [a situation] — puts the test object in a state; WHEN [an action on the system] — the user action; THEN [the expected result] — observable consequences. AND extends any clause.",
        "Declarative, structured natural language shareable with stakeholders; refers to USER ACTIONS, not UI elements (no \"click the OK button\").",
        "Parseable → automated scripts via KEYWORD-DRIVEN testing. Gherkin began as BDD tool syntax; now synonymous with the Given–When–Then pattern."
      ],
      examInsights: ["A-Q11/Q12 (K3) — Given = precondition/state (e.g. balances on accounts), When = the action (transfer), Then = the checkable result (new balances); avoid UI-level steps."]
    },
    {
      id: '2.3.1', title: 'Exploratory Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Experience-based, without detailed predefined procedures, done in uninterrupted SESSIONS by DOMAIN EXPERTS (know users, requirements, processes — not necessarily the product). The tester learns the product, designs, performs and interprets tests.",
        "TEST CHARTER prepared beforehand (possibly by BA and tester): purpose, target, scope, setup, duration, and tactics — e.g. the type of user to simulate. TIME-BOXED sessions control effort; pairs or teams work well.",
        "Agile: sessions by the product owner and/or testers for stories in the iteration. Complements formal techniques — e.g. rapid feedback on new features before methodical testing."
      ],
      examInsights: ["A-Q13/Q14 — Time boxing applies to Agile exploratory sessions; a charter can tell the tester to act as a novice user."]
    },
    {
      id: '2.3.2', title: 'Beta Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "A form of acceptance testing, typical for COTS and SaaS, to get MARKET FEEDBACK after development and in-house testing.",
        "Performed by potential or existing USERS AT THEIR OWN LOCATION; no predefined procedures or charter; little documentation beyond findings. Realistic configurations and business contexts → finds defects that escaped earlier levels, avoiding costly hotfixes or recalls.",
        "Not sufficient alone: not systematic or measurable, no guarantee of requirement coverage, and LATE — criteria-based tests support early testing."
      ],
      examInsights: ["A-Q15/Q16 — Beta testing tests the product in realistic business configurations and contexts and finds defects that escaped development."]
    }
  ]
};
