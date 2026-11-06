// CT-UT — Chapter 6 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "User surveys ask a representative sample of users to rate their experience in a questionnaire — the main way to measure satisfaction. This chapter covers how to run a survey and the three standardized questionnaires you should know.",
  keywords: [
    "Software Usability Measurement Inventory", "SUMI", "SUS", "System Usability Scale", "user survey", "WAMMI",
    "Website Analysis and MeasureMent Inventory",
  ],
  objectives: [
    { id: "UTFL-6.2.1", level: "K2", text: "Understand the purpose and approach adopted in user surveys" },
    { id: "UTFL-6.3.1", level: "K2", text: "Understand the principal content and objectives of the public user questionnaires SUS, SUMI and WAMMI" },
  ],
  sections: {
    "6.2": {
      objective: "UTFL-6.2.1",
      body: [
        { type: "p", text: "A user survey is a usability evaluation in which a representative sample of users report their subjective evaluation of a component or system in a questionnaire, based on their experience using it. Surveys are used to evaluate user satisfaction." },
        { type: "table", headers: ["Step", "What to do"], rows: [
          ["1. Write a survey plan", "Like a test plan: goals, resources, schedule — reviewed and approved by stakeholders"],
          ["2. Interview users and stakeholders", "Find out what the survey should focus on; concentrate on recent, vivid experience"],
          ["3. Select a questionnaire", "Choose a standard usability questionnaire (designing your own is outside this syllabus)"],
          ["4. Deploy it", "Recruit participants, publish the survey, remind those who haven't responded"],
          ["5. Analyze the responses", ""],
          ["6. Communicate the results", "A useful, usable report answering stakeholders' questions, plus a presentation"],
        ]},
      ],
    },
    "6.3": {
      objective: "UTFL-6.3.1",
      body: [
        { type: "p", text: "Standardized questionnaires are preferred over self-invented questions. The three below are public, measure quality from the end user's point of view, allow benchmarking against databases of previous measurements, and give concrete numbers that can serve as completion or acceptance criteria." },
        { type: "table", headers: ["Questionnaire", "Size and scale", "Focus and sample statements"], rows: [
          ["SUS — System Usability Scale", "10 items; five responses from Strongly Agree to Strongly Disagree", "A quick, global view of subjective usability: \"I thought the system was easy to use\", \"I found the system unnecessarily complex\""],
          ["SUMI — Software Usability Measurement Inventory", "50 statements; Agree / Don't Know / Disagree", "Software usability: \"This software responds too slowly to inputs\", \"The instructions and prompts are helpful\""],
          ["WAMMI — Website Analysis and MeasureMent Inventory", "20 statements; five responses from Strongly Agree to Strongly Disagree", "Website usability: attractiveness, controllability, affect, efficiency, helpfulness, learnability"],
        ]},
      ],
    },
  },
};
