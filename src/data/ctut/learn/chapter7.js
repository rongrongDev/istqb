// CT-UT — Chapter 7 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "No single method fits every project. This chapter gives the criteria for choosing usability, user experience and accessibility evaluation methods — and recommends mixing several.",
  keywords: [],
  objectives: [
    { id: "UTFL-7.1.1", level: "K4", text: "Select appropriate method(s) for verifying and validating usability, user experience and accessibility in a given project" },
  ],
  sections: {
    "7.1.1": {
      objective: "UTFL-7.1.1",
      body: [
        { type: "table", headers: ["Criterion", "Guidance"], rows: [
          ["1. Purpose", "Effectiveness → usability testing or review. Efficiency requirements or measurable improvement → quantitative usability test. Satisfaction requirements → user survey. Raise usability awareness or maturity → a usability test to convince skeptics"],
          ["2. Usability maturity", "Low or very low maturity → prefer usability testing over reviews, whose controversial results get dismissed as opinions"],
          ["3. Completion time", "Reviews are fastest (a few days); unmoderated tests are also quick"],
          ["4. Project stage", "Early design with only prototypes → formative methods: usability review, quantitative evaluation, user survey"],
          ["5. Resources", "Limited time, money or specialists → a short usability test, unmoderated testing, or RITE"],
          ["6. Availability of end users", "Representative users unavailable or too costly to recruit → usability reviews"],
          ["7. Lifecycle model", "All methods work in sequential models; agile needs fast results — RITE and short tests work well"],
        ]},
        { type: "table", headers: ["Usability maturity", "Description"], rows: [
          ["High", "A human-centered design process with multiple activities and milestones is implemented"],
          ["Medium", "Quality, time and resource requirements of the HCD process are known and controlled"],
          ["Low", "Individuals follow human-centered practices, but unsystematically"],
          ["Very low", "Indifference or outright hostility towards usability"],
        ]},
        { type: "list", intro: "Low-resource options:", items: [
          "Short usability test — the moderator also takes notes, no lab (e.g. a meeting room), 3–5 participants, a short report with about 15 findings.",
          "Unmoderated testing — participants solve tasks without a moderator while being video-recorded; fast recruitment and cheaper, but analysis takes the same effort.",
          "RITE — fix the UI as soon as a problem and its solution are clear, even after one participant.",
        ]},
        { type: "p", text: "Mixing recognized methods suited to each stage is highly recommended — reviews early, testing later. Examples: five or six ten-minute café sessions on a mobile app followed by formal in-depth sessions; or a quick review to remove the worst problems before an expensive usability test." },
        { type: "example", title: "Ignored review feedback", text: "Developers ignored part of a usability review's feedback when implementing the code. The best next step is a usability test, so the findings can't be dismissed as opinion." },
      ],
    },
    "7.1.3": {
      objective: "UTFL-7.1.1",
      body: [
        { type: "p", text: "User experience evaluation methods are chosen using the same criteria as usability methods. Accessibility evaluation methods depend on legal requirements, organizational requirements, and the number of users with disabilities in the product's target groups." },
      ],
    },
  },
};
