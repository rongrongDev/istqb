// CT-UT — Chapter 4 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A usability review evaluates usability through the judgment of reviewers rather than by observing users — useful when users aren't available. This chapter explains how to run a review, its risks, and the three review types: informal, expert, and heuristic evaluation.",
  keywords: ["expert usability review", "heuristic"],
  objectives: [
    { id: "UTFL-4.1.1", level: "K2", text: "Understand usability review as a method for evaluating usability, user experience and accessibility" },
    { id: "UTFL-4.2.1", level: "K2", text: "Understand the differences between informal usability review and expert usability review" },
    { id: "UTFL-4.2.2", level: "K4", text: "Analyze the usability aspects of a software application using the usability review method \"heuristic evaluation\" according to a checklist provided in the syllabus" },
  ],
  sections: {
    "4.1": {
      objective: "UTFL-4.1.1",
      body: [
        { type: "p", text: "A usability review is an evaluation based on the judgment of one or more reviewers who examine or use the product to find potential usability problems and deviations from established criteria. Reviewers may be usability experts and professionals, subject matter experts, designers, (acceptance) testers, customer representatives or potential users. Reviews draw on usability requirements, UI guidelines, usability standards, and experience of problems users have had." },
        { type: "p", text: "Reviews work better when the user interface is visible — screenshots are easier to judge than a narrative description of a screen." },
        { type: "table", headers: ["Step", "What happens"], rows: [
          ["1. Prepare", "Agree goals with stakeholders, choose the method (informal, expert, heuristic) and select reviewers"],
          ["2. Presentation (optional)", "The author presents the application for information only — careful not to bias the reviewers"],
          ["3. Individual evaluation", "Each reviewer works alone, first asking who uses the application, why, with what goals and from what perspective, then uses it with those questions in mind and notes findings"],
          ["4. Consensus", "Reviewers meet and agree on positive and negative findings; findings peculiar to one reviewer are removed — only consensus findings go in the report"],
          ["5. Presentation of findings", "Majority-agreed findings are presented to the author and stakeholders (can be combined with step 4)"],
          ["6. Report", "One reviewer writes the usability review report, similar in content to a usability test report"],
        ]},
      ],
    },
    "4.1.2": {
      objective: "UTFL-4.1.1",
      body: [
        { type: "p", text: "Reviews rest on opinions, so they can turn into clashes of views rather than facts — a sign of an organization that doesn't fully understand usability, or of inexperienced professionals." },
        { type: "list", intro: "Risks that reduce a review's value:", items: [
          "No candid discussion, so an incorrect finding from one reviewer is accepted — reviewers must reject questionable findings and still recognize good ones raised by a single person.",
          "Reviewers don't know the product and its constraints well enough for their findings to be useful.",
          "Reviewers aren't respected by their peers, so valuable findings are dismissed.",
          "Reviewers focus on minor details such as guideline violations or graphics, missing serious effectiveness and efficiency problems.",
        ]},
      ],
    },
    "4.2": {
      objective: "UTFL-4.2.1",
      body: [
        { type: "table", headers: ["", "Informal usability review", "Expert usability review"], rows: [
          ["Who", "Anyone; no formal qualification needed, though usability experience or domain knowledge helps — someone with one or two years of usability work can do a valuable review", "Experts — people recognized as experts by independent peers — in usability and/or the subject matter"],
          ["Based on", "Opinion, personal experience and common sense", "Extensive experience (mainly from usability tests) and introspection — experts observe themselves doing tasks"],
        ]},
        { type: "p", text: "An expert review is often combined with a heuristic evaluation: do the expert review first, then walk through the heuristics to reduce the chance of missing something." },
      ],
    },
    "4.2.3": {
      objective: "UTFL-4.2.2",
      body: [
        { type: "p", text: "In heuristic evaluation, reviewers — preferably experts — compare the user interface to a list of heuristics and identify where it doesn't follow them. A usability heuristic is a generally recognized rule of thumb for achieving usability; heuristics must be recognized as valuable and understandable by all reviewers, and are usually grouped in sets of about ten. Jakob Nielsen's set is the best known:" },
        { type: "table", headers: ["Heuristic", "Meaning"], rows: [
          ["1. Visibility of system status", "Keep users informed with timely feedback"],
          ["2. Match between system and real world", "Speak the users' language and follow real-world conventions and order"],
          ["3. User control and freedom", "A clearly marked \"emergency exit\" from unwanted states; undo and redo"],
          ["4. Consistency and standards", "Same words, situations and actions mean the same thing; follow platform conventions"],
          ["5. Error prevention", "Design out error-prone conditions, or confirm before committing"],
          ["6. Recognition rather than recall", "Make objects, actions and options visible; don't make users remember information between parts of the dialogue"],
          ["7. Flexibility and efficiency of use", "Accelerators for experts that novices needn't notice; let users tailor frequent actions"],
          ["8. Aesthetic and minimalist design", "No irrelevant or rarely needed information competing for attention"],
          ["9. Help users recognize, diagnose and recover from errors", "Plain-language messages (no codes) that state the problem precisely and suggest a solution"],
          ["10. Help and documentation", "Easy to search, task-focused, concrete steps, not too large"],
        ]},
        { type: "example", title: "Driver's license registration", text: "The software assigns the user a new license number, then on the next page asks them to type that number in. The system already knows it — this violates recognition rather than recall." },
        { type: "list", intro: "Risks of heuristic evaluation:", items: [
          "Complex usability issues don't always fit a limited set of heuristics.",
          "Heuristics ignore the context of use, which can make judgment hard.",
          "Wrong approach: finding issues by intuition and assigning them to heuristics afterwards. The heuristics must drive the evaluation; findings not tied to a heuristic may still be valuable but belong to an informal or expert review.",
          "Heuristics are compact and need experience to interpret; reviewers must understand them beforehand and not invent their own set.",
        ]},
      ],
    },
  },
};
