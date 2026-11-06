// CT-AcT (syllabus v1.0 2019) — Chapter 4: Acceptance Testing for Non-Functional Requirements
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-AcT Sample Exam A v1.3
export default {
  id: 4,
  title: 'Acceptance Testing for Non-Functional Requirements',
  time: '95 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Eight questions, all K1/K2. Know the ISO 25010 non-functional characteristics and sub-characteristics, the five QUALITY IN USE characteristics (effectiveness, efficiency, satisfaction, freedom from risk, context coverage), the four pillars of UX requirements analysis (user, task, context, competition), the usability testing methods, high-level performance tests and the user/business/technical perspectives on performance criteria, and why measurable security acceptance criteria are needed.",
  sections: [
    {
      id: '4.1.1', title: 'Non-functional Quality Characteristics and Sub-characteristics', level: 'K2', type: 'deep',
      deepPoints: [
        "Non-functional quality strongly drives user acceptance; neglect → dissatisfaction, lost sales, rejection, liability, public exposure.",
        "ISO 25010 (2011) — PERFORMANCE EFFICIENCY: time behavior, resource utilization, capacity · COMPATIBILITY: co-existence, interoperability · USABILITY: appropriateness recognizability, learnability, operability, user error protection, UI aesthetics, accessibility · RELIABILITY: maturity, availability, fault tolerance, recoverability · SECURITY: confidentiality, integrity, non-repudiation, accountability, authenticity · MAINTAINABILITY: modularity, reusability, analyzability, modifiability, testability · PORTABILITY: adaptability, installability, replaceability.",
        "All should be considered; the acceptance test strategy selects and prioritizes them for the context."
      ],
      examInsights: ["A-Q25 — From a mixed list, pick the real ISO 25010 characteristics (functional suitability, security, maintainability); distractors like commercializability, viability, cognitive ability aren't quality characteristics."]
    },
    {
      id: '4.1.2', title: 'Quality in Use', level: 'K1', type: 'skim',
      summary: "ISO 25010 also defines a QUALITY IN USE model — outcomes of interacting with the system: effectiveness, efficiency, satisfaction, freedom from risk, and context coverage. Especially useful in acceptance testing because it reflects the user's experience.",
      examInsights: ["A-Q26 (K1) — \"Efficiency\" is a quality-in-use characteristic."]
    },
    {
      id: '4.2.1', title: 'UX Requirements Analysis', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY (ISO 25010): specified users achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use; assessed mostly via heuristics (learnability, efficiency, memorability, satisfaction, error prevention). Poor usability → frustration, refusal, even injury.",
        "UX adds aesthetic and emotional factors (appeal, confidence, pleasure, comfort); strongly shaped by context (location, weather, health, environment).",
        "Four pillars: USER analysis (physical/intellectual traits, skills, business knowledge, culture — personas, user profiles); TASK analysis (functionality formalized via use cases and scenarios, behavior and expectations); CONTEXT analysis (external, physical, psychological conditions; devices, platforms, form factors); COMPETITION analysis (learn from competitors and other sectors). Consider accessibility and human limitations in criteria and tests."
      ],
      examInsights: ["A-Q27/Q28 — User profiles for levels of business knowledge = user analysis; analyzing use cases represented in business process models = task analysis."]
    },
    {
      id: '4.2.2', title: 'Usability Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "CHECKLIST-BASED evaluations: users rate the product against checklists to evaluate and compare their experience.",
        "EXPERT REVIEWS: usability experts apply heuristics/criteria to find strong and weak points.",
        "WALKTHROUGH and THINK-ALOUD: users explore (possibly with given tasks) and verbalize actions and impressions — reveals difficulties and expectations.",
        "BIOMETRICS-based: eye tracking, mouse-eye movement — what attracts attention, what is (not) visible.",
        "LOG FILE analysis: retrospective review of real use vs the intended profile."
      ],
      examInsights: ["A-Q29 — Walkthrough and thinking-aloud methods reveal difficulties users experience with certain tasks."]
    },
    {
      id: '4.3.1', title: 'High-level Performance Acceptance Tests', level: 'K2', type: 'deep',
      deepPoints: [
        "Performance tests belong at all levels; in acceptance testing mainly in OPERATIONAL ACCEPTANCE TESTING (OAT) by operations teams — but BAs and testers help define OBJECTIVE, measurable criteria (no subjective judgments).",
        "Tools simulate concurrent users/transactions with a workload that mimics REAL CONDITIONS; response times of key elements (web/app server, DB) and resources (memory, I/O, CPU, security devices) are measured against requirements; tune and repeat until targets are met.",
        "Types: load, stress, endurance/stability. Workload models: steady state, increasing, scenario-based, artificial."
      ],
      examInsights: ["A-Q30 — Performance is measured in a context reflecting representative operational conditions as far as possible."]
    },
    {
      id: '4.3.2', title: 'Acceptance Criteria for Performance Acceptance Tests', level: 'K2', type: 'deep',
      deepPoints: [
        "USER perspective: perceived response time — e.g. users abandon a site after ~10 s; lack of feedback while processing is a problem.",
        "BUSINESS perspective: number of concurrent users, scenario/transaction types, expected response times; location, time and time zone matter.",
        "TECHNICAL perspective: resources (bandwidth, CPU, RAM) and architecture (load balancing, caching). Criteria and tests must address all three perspectives."
      ],
      examInsights: ["A-Q31 — \"Missing feedback from the system while processing a request\" is a USER-perspective issue."]
    },
    {
      id: '4.4', title: 'Security', level: 'K2', type: 'deep',
      deepPoints: [
        "Security requirements derive from the organization's SECURITY POLICY (ISO/IEC 27005), which guides risk management on projects.",
        "Consider security throughout BA, RE and acceptance testing: information security in risk management and NFR elicitation (value of information, prioritized security risks); MEASURABLE acceptance criteria (authentication, authorization, accounting, input sanitization, cryptography, data privacy); HIGH-LEVEL security test cases (context, main steps, expected results).",
        "Some security acceptance tests are run by the acceptance tester, more technical ones by specialized security testers."
      ],
      examInsights: ["A-Q32 — \"Normal users shall have restricted access to private data\" is a security acceptance criterion."]
    }
  ]
};
