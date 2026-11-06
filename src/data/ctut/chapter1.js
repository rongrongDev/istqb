// CT-UT (Usability Testing Specialist, Foundation Level syllabus 2018) — Chapter 1: Basic Concepts
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2 (2021-06-15)
export default {
  id: 1,
  title: 'Basic Concepts',
  time: '200 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "The foundation chapter — 8 LO questions plus most of the 6 keyword questions in Sample Exam A. Know the exact definitions of USABILITY (specified users, goals, effectiveness, efficiency, satisfaction, context of use), USER EXPERIENCE (perceptions and responses before, during and after use) and ACCESSIBILITY, the user interface and usability problems, how usability vs UX vs accessibility evaluation differ (UX also covers services before and after use), the three approaches (review, testing, surveys), FORMATIVE vs SUMMATIVE evaluation, the human-centered design loop, usability requirements and agile approaches (RITE, informal/quick, weekly testing).",
  sections: [
    {
      id: '1.1.1', title: 'Usability', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY [ISO 9241-210]: the extent to which a product can be used by SPECIFIED USERS to achieve SPECIFIED GOALS with EFFECTIVENESS, EFFICIENCY and SATISFACTION in a specified CONTEXT OF USE.",
        "USER INTERFACE: all components of a product that provide information and controls for the user to accomplish tasks. Usability evaluation = usability reviews (ch 4), usability testing (ch 5), user surveys (ch 6).",
        "USABILITY PROBLEM: a defect causing difficulty performing tasks via the UI — confusion, error, delay, failure; in safety-critical systems even injury or death. A product can meet its specification and still have usability problems (complicated cancellation = efficiency; looks unprofessional = satisfaction).",
        "CONTEXT OF USE components: users, tasks, equipment (hardware, software, materials), environment (physical, social/organizational, technical)."
      ],
      examInsights: ["A-Q1 — Usability = specified users achieving specified goals in a specified context of use.", "A-Q39/Q40 (keywords) — UI = all components providing information and controls; users feeling uncomfortable = a SATISFACTION issue."]
    },
    {
      id: '1.1.2', title: 'User Experience Concepts', level: 'K2', type: 'deep',
      deepPoints: [
        "USER EXPERIENCE [ISO 9241-210]: a person's perceptions and responses from the use and/or ANTICIPATED use of a product, system or service — emotions, beliefs, preferences, perceptions, physical/psychological responses, behaviors — BEFORE, DURING and AFTER use.",
        "Influenced by brand image, presentation (incl. packaging and documentation), functionality, performance, interactive behavior, helpfulness (help, support, training), learnability, the user's internal state and prior experience, and context of use.",
        "Usability criteria assess UX aspects: brand image/presentation → satisfaction, functionality → effectiveness, performance → efficiency."
      ],
      examInsights: ["A-Q38 (keyword) — Evaluating the services a user receives before using the software = user experience evaluation."]
    },
    {
      id: '1.1.3', title: 'Accessibility', level: 'K2', type: 'skim',
      summary: "ACCESSIBILITY: the degree to which a product or system can be used by people with the WIDEST RANGE OF CHARACTERISTICS AND CAPABILITIES to achieve a specified goal in a specified context of use. In practice it targets users with disabilities — limited vision, hearing, dexterity, cognition or physical mobility.",
      examInsights: ["A-Q37 (keyword) — Accessibility = usability for people with limited vision, hearing, dexterity, cognition or mobility (not localization, not \"everyone\")."]
    },
    {
      id: '1.2', title: 'Comparing Usability, UX and Accessibility Evaluation', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY evaluation — all users — the DIRECT INTERACTION with the product. UX evaluation — all users — services BEFORE use + direct interaction + services AFTER use. ACCESSIBILITY evaluation — users with disabilities — direct interaction, focusing on ACCESSIBILITY BARRIERS rather than efficiency or satisfaction.",
        "Three approaches: USABILITY REVIEW (experts and optionally users judge the UI from experience — informal review, expert review, heuristic evaluation; qualitative; NO USERS NEEDED); USABILITY TESTING (users observed doing typical tasks, think aloud; qualitative and quantitative); USER SURVEYS (users fill in satisfaction questionnaires; qualitative and quantitative)."
      ],
      examInsights: ["A-Q3 — Covering purchase, installation, use AND call-center support = user experience evaluation.", "A-Q4 — No users available → a usability review (testing and surveys need users)."]
    },
    {
      id: '1.2.1', title: 'Usability Evaluation: Formative and Summative', level: 'K2', type: 'deep',
      deepPoints: [
        "FORMATIVE (exploratory) evaluation: EARLY, during design and prototyping, QUALITATIVE — identify and understand usability problems to guide (form) the design.",
        "SUMMATIVE evaluation: LATE, shortly before or after implementation, QUANTITATIVE — measure effectiveness, efficiency or satisfaction, e.g. against usability requirements to establish acceptability. Both can be iterative.",
        "Objectives: check usability requirements are met, uncover problems to fix, measure usability. EFFECTIVENESS — \"does it do what I want?\"; EFFICIENCY — \"does it solve my tasks quickly?\"; SATISFACTION — \"do I feel comfortable?\" (freedom from discomfort, positive attitude).",
        "Can be based on the application, design documents or prototypes; involve disabled users early if they'll use the product."
      ],
      examInsights: ["A-Q5 — Formative testing comes first (design stage); summative measures near or after release."]
    },
    {
      id: '1.2.2', title: 'User Experience Evaluation', level: 'K2', type: 'skim',
      summary: "Usability is part of UX, so usability evaluation is part of UX evaluation and uses the same techniques. UX evaluation covers the WHOLE experience: advertisements, training, touchpoints other than the screen (support, letters, goods received) and problems outside the UI (delay notices, complaint handling, unsolicited calls). Time gaps can be bridged within a test session.",
      examInsights: ["A-Q3 — Support from the call center is part of the user experience."]
    },
    {
      id: '1.2.3', title: 'Accessibility Evaluation', level: 'K2', type: 'deep',
      deepPoints: [
        "A usability evaluation focused on the interaction of users with disabilities or limitations with the product.",
        "Advice: (1) define the AMBITION LEVEL — WCAG A, AA, AAA; AA recommended; (2) create or adapt ACCESSIBLE DESIGN GUIDELINES complying with law and the ambition level, reviewed for accuracy, with an accessibility HOTLINE for developers; (3) TRAIN development teams (law, guidelines, tools, usability vs accessibility); (4) TEST with think aloud, focus on mistakes caused by ACCESSIBILITY BARRIERS, and tasks targeting likely problem areas.",
        "Consider the relevant accessibility standards (section 3.2)."
      ],
      examInsights: ["A-Q2 — A reasonable goal of accessibility evaluation: verify the software is usable by people with specific disabilities."]
    },
    {
      id: '1.3', title: 'Usability Evaluation in Human-Centered Design', level: 'K2', type: 'deep',
      deepPoints: [
        "HUMAN-CENTERED DESIGN [ISO 9241-210]: making products more usable by focusing on their use and applying human factors, ergonomics and usability knowledge. Loop: plan → understand and specify CONTEXT OF USE → specify USER REQUIREMENTS → produce DESIGN SOLUTIONS (prototypes of increasing fidelity) → EVALUATE against requirements → iterate until met. In short: analyze, design, evaluate, iterate.",
        "Three KEY ELEMENTS: USERS (observe and interview in their environment, involve them throughout — in agile often the product owner as representative), EVALUATION (any time, on prototypes or the product — early is cost-effective), ITERATIONS (mostly between producing and evaluating design solutions).",
        "Iterating prototypes (paper sketches to working software) gives users a realistic impression and reduces forgotten usability issues. Usability testing typically runs from system integration through system and acceptance testing."
      ],
      examInsights: ["A-Q6 — Interview users, iteratively develop prototypes, and evaluate = all three key elements.", "A-Q7 — The evaluation step lets users see and use versions of the software as it evolves."]
    },
    {
      id: '1.3.1', title: 'Usability Requirements', level: 'K2', type: 'skim',
      summary: "A USABILITY REQUIREMENT is a requirement on the usability of a component or system — the basis for evaluating whether user needs are met. Sources: EXPLICIT (requirements documents, user stories), IMPLICIT expectations (e.g. shortcut keys), and adopted STANDARDS. Example: booked flights shown right after logon (effectiveness); logging a customer request in no more than two steps (efficiency).",
      examInsights: []
    },
    {
      id: '1.3.2', title: 'Agile Usability Evaluation', level: 'K2', type: 'deep',
      deepPoints: [
        "RITE (Rapid Iterative Testing and Evaluation): qualitative; fix the UI as soon as a problem and solution are clear — even after ONE participant — and confirm with the next participants.",
        "INFORMAL AND QUICK (discount) sessions where many users are available (café, conference, trade show): under 15 minutes, think aloud and heuristic evaluation.",
        "WEEKLY TESTING: participants recruited in advance for a fixed day (e.g. each Tuesday) to test that week's build; tasks prepared shortly before, may include exploratory sessions with heuristic checklists.",
        "Usability reviews also fit agile."
      ],
      examInsights: ["A-Q8 — RITE, discount (informal, quick) and weekly testing suit agile; RAD/RUP/REST are not usability evaluation approaches.", "A-Q36 (keyword) — 10–15 minutes with users in a café → an informal test session where they try the product."]
    }
  ]
};
