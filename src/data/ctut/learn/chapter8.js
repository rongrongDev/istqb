// CT-UT — Chapter 8 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A short summary of who does what in usability evaluation: the usability tester, the moderator and the note-taker.",
  keywords: [],
  objectives: [
    { id: "UTFL-8.1.1", level: "K2", text: "Understand the principal tasks and responsibilities of the Usability Tester" },
    { id: "UTFL-8.2.1", level: "K2", text: "Understand the principal tasks and responsibilities of the Moderator and the Note-Taker" },
  ],
  sections: {
    "8.1": {
      objective: "UTFL-8.1.1",
      body: [
        { type: "table", headers: ["Usability tester task", "See"], rows: [
          ["Organize and take part in the usability risk assessment", "Chapter 2"],
          ["Write the usability test plan", "5.3.1"],
          ["Prepare test sessions — scripts, briefing instructions, pre- and post-session interview questions, test tasks", "5.3"],
          ["Prepare usability reviews — goals, review method(s), reviewers", "4.1"],
          ["Conduct user surveys — survey plan, questionnaire choice, analysis, reporting", "6.2"],
          ["Act as moderator and/or note-taker when no separate person is assigned", "8.2"],
        ]},
      ],
    },
    "8.2": {
      objective: "UTFL-8.2.1",
      body: [
        { type: "table", headers: ["Role", "Principal tasks"], rows: [
          ["Moderator", "Take part in risk assessment; conduct sessions — pre-session briefing, run the session per the script, communicate with the participant, post-session interview; analyze and discuss findings; log usability problems, track them to resolution and review the implemented solutions; act as note-taker if none is assigned"],
          ["Note-taker", "Record important usability findings; analyze and discuss findings with the moderator"],
        ]},
      ],
    },
  },
};
