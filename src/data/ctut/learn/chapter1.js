// CT-UT — Chapter 1 learn content, authored from the ISTQB Usability Testing (Foundation Level Specialist) Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Before testing usability you need precise words for it. This chapter defines usability, user experience and accessibility, compares how each is evaluated, introduces the three evaluation approaches and the formative/summative distinction, and places usability evaluation inside human-centered design — including approaches that suit agile teams.",
  keywords: [
    "accessibility", "context of use", "effectiveness", "efficiency", "formative evaluation", "human-centered design",
    "summative evaluation", "usability", "usability evaluation", "usability requirement", "user experience", "user interface",
  ],
  objectives: [
    { id: "UTFL-1.1.1", level: "K2", text: "Understand the concepts of usability, user experience and accessibility" },
    { id: "UTFL-1.1.2", level: "K2", text: "Understand the objectives of usability, user experience and accessibility evaluation" },
    { id: "UTFL-1.2.1", level: "K2", text: "Compare usability, user experience and accessibility evaluation" },
    { id: "UTFL-1.2.2", level: "K2", text: "Understand the three approaches to usability, user experience and accessibility evaluation: usability review, usability testing and quantitative user surveys for satisfaction measurement" },
    { id: "UTFL-1.2.3", level: "K2", text: "Understand the differences between formative (qualitative) and summative (quantitative) usability evaluation" },
    { id: "UTFL-1.3.1", level: "K2", text: "Understand the key elements of human-centered evaluation" },
    { id: "UTFL-1.3.2", level: "K2", text: "Understand the human-centered design process" },
    { id: "UTFL-1.3.3", level: "K2", text: "Understand the usability evaluation approaches that work well in agile software development lifecycles" },
  ],
  sections: {
    "1.1.1": {
      objective: "UTFL-1.1.1",
      body: [
        { type: "p", text: "Usability (ISO 9241-210) is the extent to which a software product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use. Organizations may use other definitions, so check which one applies." },
        { type: "p", text: "The user interface is every part of the product that gives the user information and controls to carry out tasks. A usability problem is a defect that makes tasks hard to perform through the user interface, hurting effectiveness, efficiency or satisfaction — causing confusion, errors, delays or outright failure, and in safety-critical systems such as medical devices even injury or death." },
        { type: "example", title: "Car rental app", text: "A dead link is a defect that causes a usability problem. A cancellation procedure users find needlessly complicated is a usability problem affecting efficiency. An app that works perfectly but looks unprofessional has a usability problem affecting satisfaction — the product can meet its specification and still have usability problems." },
        { type: "table", headers: ["Context-of-use component", "Meaning"], rows: [
          ["Users", "People who interact with the product by giving input or using its output"],
          ["Tasks", "Activities performed by users or groups of users (e.g. novices, administrators)"],
          ["Equipment", "Hardware, software and materials needed to use the product"],
          ["Environment", "Physical, social (incl. organizational) and technical conditions of use"],
        ]},
        { type: "p", text: "The same product can face very different contexts — office staff writing reports in a word processor versus an elderly person using it for the first time to write a birthday invitation." },
      ],
    },
    "1.1.2": {
      objective: "UTFL-1.1.1",
      body: [
        { type: "p", text: "User experience (ISO 9241-210) is a person's perceptions and responses resulting from the use and/or anticipated use of a product, system or service. It covers emotions, beliefs, preferences, perceptions, physical and psychological responses, and behaviors — before, during and after use." },
        { type: "list", intro: "What shapes user experience:", items: [
          "Brand image — trust in the manufacturer",
          "Presentation — the product's appearance, packaging and documentation",
          "Functionality, performance and interactive behavior",
          "Helpfulness — help system, support and training — and learnability",
          "The user's own state from prior experience, attitudes, skills and personality",
          "The context of use",
        ]},
        { type: "p", text: "Usability criteria can measure parts of UX: brand image and presentation through satisfaction, functionality through effectiveness, performance through efficiency." },
      ],
    },
    "1.1.3": {
      objective: "UTFL-1.1.1",
      body: [
        { type: "p", text: "Accessibility is the degree to which a product or system can be used by people with the widest range of characteristics and capabilities to achieve a specified goal in a specified context of use. Accessibility work focuses on users with disabilities — limited vision, hearing, dexterity, cognition or physical mobility." },
      ],
    },
    "1.2": {
      objective: "UTFL-1.2.1",
      body: [
        { type: "table", headers: ["Evaluation", "Target group", "Key objective"], rows: [
          ["Usability", "All users", "The direct interaction between users and the product"],
          ["User experience", "All users", "Services before use, the direct interaction, and services after use"],
          ["Accessibility", "Users with disabilities", "The direct interaction, focused on accessibility barriers rather than general efficiency or satisfaction"],
        ]},
        { type: "table", headers: ["Approach", "Users involved?", "How it works", "Type"], rows: [
          ["Usability review (ch. 4)", "Optional", "Experts (and possibly users) judge the user interface from experience — informal review, expert review, heuristic evaluation", "Qualitative"],
          ["Usability testing (ch. 5)", "Yes", "Users are observed doing typical tasks, often thinking aloud", "Qualitative and quantitative"],
          ["User surveys (ch. 6)", "Yes", "Users fill in questionnaires about their satisfaction", "Qualitative and quantitative"],
        ]},
        { type: "p", text: "So when no users can take part, a usability review is still possible; testing and surveys need users." },
      ],
    },
    "1.2.1": {
      objective: "UTFL-1.2.3",
      body: [
        { type: "p", text: "Usability evaluation gathers information about a system's usability, either to improve it or to assess its worth. It addresses the direct interaction via screens or other system use, and can be based on the application, design documents or prototypes. It also applies beyond software — user guides, vending machines, cockpits, train stations." },
        { type: "table", headers: ["", "Formative (exploratory)", "Summative"], rows: [
          ["When", "Early — design and prototyping", "Late — shortly before or after implementation"],
          ["Purpose", "Understand usability problems and guide (form) the design", "Measure usability, e.g. against usability requirements to establish acceptability"],
          ["Nature", "Qualitative — understand needs, goals and reasons for behavior", "Quantitative — measurements of effectiveness, efficiency, satisfaction"],
        ]},
        { type: "p", text: "Both can be run iteratively. The objectives of usability evaluation are to check whether usability requirements are met, to uncover problems so they can be fixed, and to measure usability." },
        { type: "table", headers: ["Measure", "Meaning", "User's question"], rows: [
          ["Effectiveness", "Extent to which correct and complete goals are achieved", "Does it do what I want?"],
          ["Efficiency", "Resources spent to achieve the goals", "Does it solve my tasks quickly?"],
          ["Satisfaction", "Freedom from discomfort and a positive attitude to using it", "Do I feel comfortable using it?"],
        ]},
        { type: "p", text: "If disabled people will use the software, include them early — e.g. color-blind users in usability reviews." },
      ],
    },
    "1.2.2": {
      objective: "UTFL-1.2.1",
      body: [
        { type: "p", text: "Because usability is part of user experience, usability evaluation is part of UX evaluation and uses the same techniques. UX evaluation, however, looks at the whole experience, not just the direct interaction:" },
        { type: "list", items: [
          "Advertisements that make users aware of the product",
          "Training in using the product",
          "Touchpoints beyond the screen — support encounters, letters, goods received",
          "Problems the user interface doesn't handle — delay notifications, complaint handling, unsolicited calls",
        ]},
        { type: "p", text: "In a UX test session, time gaps (e.g. waiting for a delivery) can be bridged within the session." },
      ],
    },
    "1.2.3": {
      objective: "UTFL-1.1.2",
      body: [
        { type: "p", text: "Accessibility evaluation is a usability evaluation focused on accessibility: the direct interaction between a user with disabilities or limitations and the product. Its goal is to verify the product is usable by people with specific disabilities." },
        { type: "list", ordered: true, intro: "Advice for accessibility evaluation:", items: [
          "Define the ambition level — WCAG defines conformance levels A, AA and AAA; AA (the most basic requirements and the biggest barriers removed) is recommended.",
          "Create or adapt guidelines for accessible design that comply with the law and the ambition level; review them for accuracy and verify developers can use them; set up an accessibility hotline that answers developers' questions within an agreed time.",
          "Train development teams on the legal requirements, the guidelines, evaluation tools and techniques, and how usability and accessibility relate.",
          "When testing, use think aloud to understand participants' thoughts and vocabulary, focus on mistakes caused by accessibility barriers rather than efficiency or satisfaction, and use tasks targeting likely problem areas.",
        ]},
      ],
    },
    "1.3": {
      objective: "UTFL-1.3.2",
      body: [
        { type: "p", text: "Human-centered design (ISO 9241-210) makes products more usable by focusing on how they are used and applying human factors, ergonomics and usability knowledge. Its activities form a loop:" },
        { type: "list", ordered: true, items: [
          "Plan the human-centered design activities.",
          "Understand and specify the context of use — observe and interview representative users.",
          "Specify the user requirements — turn the insights into testable requirements.",
          "Produce design solutions — prototypes of increasing fidelity.",
          "Evaluate the designs against the requirements — usability reviews, think-aloud testing, user surveys.",
          "Iterate until the user requirements are met.",
        ]},
        { type: "table", headers: ["Key element", "In practice"], rows: [
          ["Users", "Observe and interview users in their environment and involve them throughout design; in agile, the product owner often represents them"],
          ["Evaluation", "Evaluate at any time, on prototypes or the finished product — early evaluation finds problems cheaply"],
          ["Iterations", "Iterate between design and evaluation, mostly between producing and evaluating design solutions"],
        ]},
        { type: "p", text: "Prototypes range from paper sketches and mock-ups to working software. Each is evaluated, then refined with user feedback, until the usability requirements are met — giving users an increasingly realistic view of the product and reducing the chance that usability issues are forgotten. Usability and accessibility must both be considered in design; usability testing usually runs from system integration through system and acceptance testing." },
      ],
    },
    "1.3.1": {
      objective: "UTFL-1.3.1",
      body: [
        { type: "p", text: "A usability requirement is a requirement on the usability of a component or system, and the basis for evaluating whether user needs are met. Usability requirements may be explicit (requirements documents, user stories), implicit (unstated expectations, e.g. shortcut keys) or come from adopted standards." },
        { type: "example", title: "User stories", text: "\"As a frequent flyer, I see an overview of my booked flights right after logging on\" — effectiveness.\n\"As a help-desk assistant, I can log a customer request in no more than two simple steps\" — efficiency." },
        { type: "seealso", label: "CT-AcT Learn — chapter 4", href: "/ctact-learn", text: "UX requirements analysis and usability acceptance criteria from the acceptance-testing side" },
      ],
    },
    "1.3.2": {
      objective: "UTFL-1.3.3",
      body: [
        { type: "p", text: "Agile teams work in short iterations that design, build and test a group of features. These usability evaluation approaches fit that rhythm:" },
        { type: "table", headers: ["Approach", "How it works"], rows: [
          ["RITE — Rapid Iterative Testing and Evaluation", "Qualitative testing where the UI is changed as soon as a problem and its fix are clear — even after one participant — and the fix is confirmed with the next participants"],
          ["Informal and quick (discount) testing", "Short sessions (under 15 minutes) wherever many potential users are — café, conference, trade show — using think aloud and heuristic evaluation"],
          ["Weekly testing", "Participants booked in advance for a fixed weekday to test that week's build; tasks prepared just before, possibly with exploratory sessions guided by heuristic checklists"],
          ["Usability reviews", "Expert-based reviews (chapter 4) fit any iteration"],
        ]},
      ],
    },
  },
};
