// CTFL v4.0 — Chapter 3 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Static testing finds defects without running any code — through reviews (manual) and static analysis (tool-supported). This chapter explains what can be examined statically, why it pays off, how static and dynamic testing differ, and then the review process in detail: its activities, roles, the four review types, and what makes reviews succeed.",
  keywords: [
    "anomaly", "dynamic testing", "formal review", "informal review", "inspection", "review",
    "static analysis", "static testing", "technical review", "walkthrough",
  ],
  objectives: [
    { id: "FL-3.1.1", level: "K1", text: "Recognize types of work products that can be examined by static testing" },
    { id: "FL-3.1.2", level: "K2", text: "Explain the value of static testing" },
    { id: "FL-3.1.3", level: "K2", text: "Compare and contrast static testing and dynamic testing" },
    { id: "FL-3.2.1", level: "K1", text: "Identify the benefits of early and frequent stakeholder feedback" },
    { id: "FL-3.2.2", level: "K2", text: "Summarize the activities of the review process" },
    { id: "FL-3.2.3", level: "K1", text: "Recall which responsibilities are assigned to the principal roles when performing reviews" },
    { id: "FL-3.2.4", level: "K2", text: "Compare and contrast the different review types" },
    { id: "FL-3.2.5", level: "K1", text: "Recall the factors that contribute to a successful review" },
  ],
  sections: {
    "3.1.1": {
      objective: "FL-3.1.1",
      body: [
        { type: "p", text: "In static testing the software under test is not executed. Code, process specifications, system architecture specifications and other work products are evaluated through manual examination (reviews) or with tools (static analysis). Objectives include improving quality, detecting defects, and assessing readability, completeness, correctness, testability, and consistency. Static testing serves both verification and validation." },
        { type: "p", text: "Testers, business representatives, and developers collaborate in example mappings, collaborative user story writing, and backlog refinement to ensure user stories meet criteria such as the Definition of Ready. Review techniques check that user stories are complete, understandable, and carry testable acceptance criteria — testers explore, challenge, and improve them by asking the right questions." },
        { type: "p", text: "Static analysis identifies problems before dynamic testing, often with less effort — no test cases needed, tools do the work — and is often part of CI. Beyond code defects it evaluates maintainability and security; spelling checkers and readability tools are also static analysis tools." },
        { type: "list", intro: "What can be examined:", items: [
          "By review: almost any work product that can be read and understood — requirement specifications, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts, models.",
          "By static analysis: work products with a structure to check against — models, code, text with formal syntax.",
          "Not appropriate: work products difficult for humans to interpret, or that must not be tool-analyzed (e.g. third-party executable code, for legal reasons).",
        ]},
      ],
    },
    "3.1.2": {
      objective: "FL-3.1.2",
      body: [
        { type: "p", text: "Static testing can detect defects in the earliest SDLC phases — the early-testing principle in practice — and finds defect types dynamic testing cannot: unreachable code, design patterns not implemented as desired, defects in non-executable work products." },
        { type: "p", text: "It evaluates and builds confidence in work product quality. Verifying documented requirements lets stakeholders confirm the requirements describe their actual needs. Because it happens early, static testing creates shared understanding and improves communication among stakeholders — so involve a wide variety of them." },
        { type: "p", text: "Reviews can be costly, yet overall project costs are usually much lower with them, because far less time and effort is spent fixing defects later. Static analysis detects certain code defects more efficiently than dynamic testing, resulting in fewer defects and lower overall development effort." },
      ],
    },
    "3.1.3": {
      objective: "FL-3.1.3",
      body: [
        { type: "p", text: "Static and dynamic testing complement each other: similar objectives (detecting defects), different mechanics." },
        { type: "list", intro: "Key differences:", items: [
          "Some defect types can only be found by static testing, others only by dynamic testing.",
          "Static testing finds defects directly; dynamic testing causes failures, from which defects are determined by subsequent analysis.",
          "Static testing more easily reaches defects on rarely-executed or hard-to-reach code paths.",
          "Static testing works on non-executable work products; dynamic testing needs executables.",
          "Static testing measures characteristics not dependent on execution (maintainability); dynamic testing measures execution-dependent ones (performance efficiency).",
        ]},
        { type: "list", intro: "Defects easier/cheaper to find statically:", items: [
          "Requirement defects — inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications",
          "Design defects — inefficient database structures, poor modularization",
          "Certain coding defects — variables with undefined values, undeclared variables, unreachable or duplicated code, excessive code complexity",
          "Deviations from standards — e.g. naming conventions in coding standards",
          "Incorrect interface specifications — mismatched number, type, or order of parameters",
          "Specific security vulnerabilities — e.g. buffer overflows",
          "Gaps or inaccuracies in test basis coverage — e.g. missing tests for an acceptance criterion",
        ]},
      ],
    },
    "3.2.1": {
      objective: "FL-3.2.1",
      body: [
        { type: "p", text: "Early and frequent feedback allows early communication of potential quality problems. With little stakeholder involvement, the product may drift from the stakeholders' original or current vision — and failing to deliver what they want means costly rework, missed deadlines, blame games, sometimes complete project failure." },
        { type: "list", intro: "Frequent stakeholder feedback throughout the SDLC:", items: [
          "Prevents misunderstandings about requirements",
          "Ensures changes to requirements are understood and implemented earlier",
          "Improves the development team's understanding of what they are building",
          "Lets the team focus on the features with the most stakeholder value and the most positive impact on identified risks",
        ]},
      ],
    },
    "3.2.2": {
      objective: "FL-3.2.2",
      body: [
        { type: "p", text: "The ISO/IEC 20246 standard defines a generic review process — structured but flexible, tailored to the situation. The more formal the review, the more of the tasks are performed. Work products too large for one review can go through the process multiple times." },
        { type: "list", intro: "The five review activities, in order:", items: [
          "Planning — define the scope: purpose, work product, quality characteristics to evaluate, focus areas, exit criteria, supporting information (standards), effort, and timeframe.",
          "Review initiation — ensure everyone and everything is ready: participants have access to the work product, understand their roles and responsibilities, and have everything they need.",
          "Individual review — every reviewer assesses the work product alone, applying review techniques (checklist-based, scenario-based), and logs anomalies, recommendations, and questions.",
          "Communication and analysis — anomalies are not necessarily defects: each is analyzed and discussed, with decisions on status, ownership, and actions — typically in a review meeting, which also decides the quality level and follow-up actions (a follow-up review may be needed).",
          "Fixing and reporting — create a defect report for every defect so corrective action can be followed up; when exit criteria are met, accept the work product; report the review results.",
        ]},
      ],
    },
    "3.2.3": {
      objective: "FL-3.2.3",
      body: [
        { type: "list", intro: "Principal review roles and responsibilities:", items: [
          "Manager — decides what is to be reviewed; provides resources (staff, time)",
          "Author — creates and fixes the work product under review",
          "Moderator (facilitator) — ensures review meetings run effectively: mediation, time management, a safe environment where everyone can speak freely",
          "Scribe (recorder) — collates anomalies from reviewers; records decisions and new anomalies from the review meeting",
          "Reviewer — performs the review; may be a project member, subject matter expert, or any other stakeholder",
          "Review leader — overall responsibility for the review: decides who will be involved, organizes when and where it takes place",
        ]},
        { type: "note", title: "Manager vs review leader", text: "The manager decides WHAT gets reviewed and funds it; the review leader decides WHO reviews and WHEN/WHERE. Matching questions hinge on this split." },
      ],
    },
    "3.2.4": {
      objective: "FL-3.2.4",
      body: [
        { type: "p", text: "Review types range from informal to formal. The required formality depends on the SDLC, development process maturity, criticality and complexity of the work product, legal or regulatory requirements, and the need for an audit trail. The same work product can be reviewed more than once — informally first, formally later. Type selection follows the objectives, plus project needs, resources, work product type and risks, business domain, and company culture." },
        { type: "list", intro: "The four review types:", items: [
          "Informal review — no defined process, no formal documented output; main objective: detect anomalies.",
          "Walkthrough — led by the author; objectives can include evaluating quality, building confidence, educating reviewers, gaining consensus, generating new ideas, motivating authors, detecting anomalies. Individual review beforehand is optional.",
          "Technical review — performed by technically qualified reviewers, led by a moderator; objectives: gain consensus and decide on technical problems — plus detect anomalies, evaluate quality, build confidence, generate ideas, motivate authors.",
          "Inspection — the most formal review: follows the complete generic process; main objective: find the maximum number of anomalies. Collects metrics to improve the SDLC and the inspection process. The author cannot act as review leader or scribe.",
        ]},
      ],
    },
    "3.2.5": {
      objective: "FL-3.2.5",
      body: [
        { type: "list", intro: "Factors contributing to successful reviews:", items: [
          "Clear objectives and measurable exit criteria — evaluating participants must never be an objective",
          "The appropriate review type for the objectives, work product, participants, project needs, and context",
          "Reviewing small chunks, so reviewers keep concentration during individual review and meetings",
          "Feedback from reviews to stakeholders and authors, so product and activities improve",
          "Adequate time for participants to prepare",
          "Management support for the review process",
          "Reviews as part of the organization's culture, promoting learning and process improvement",
          "Adequate training so all participants know how to fulfil their role",
          "Facilitated meetings",
        ]},
      ],
    },
  },
};
