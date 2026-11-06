// CT-UT — Chapter 2 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Usability problems are business risks. This chapter shows how to identify and assess usability, user experience and accessibility risks, lists the typical product risks in each area, and catalogs the organizational, technical and supplier project risks that stop teams meeting their usability goals.",
  keywords: ["project risk", "product risk"],
  objectives: [
    { id: "UTFL-2.2.1", level: "K2", text: "Understand typical usability, user experience, and accessibility risks" },
    { id: "UTFL-2.2.2", level: "K4", text: "Analyze a given project at the design or evaluation stage, and identify the types of usability risks that are likely to occur" },
  ],
  sections: {
    "2.1": {
      objective: "UTFL-2.2.2",
      body: [
        { type: "p", text: "A risk is a factor that could lead to future negative consequences, usually expressed by its impact and likelihood. Product risks threaten the quality of the product and should be tested with usability techniques; project risks threaten the project's ability to reach its usability objectives." },
        { type: "list", intro: "Identify risks through:", items: ["Interviews", "Risk workshops", "Brainstorming", "Past experience — supported by checklists like those in this chapter"] },
        { type: "p", text: "In a product risk assessment, analyze each feature for the number of users, their type and background, usage frequency, the damage if a user task can't be completed, the task's business criticality, and external visibility. Involve as many kinds of stakeholders as possible — domain experts, end users, usability experts and other usability professionals, user-acceptance testers, designers and customer representatives — to find the most significant risks." },
      ],
    },
    "2.2.1": {
      objective: "UTFL-2.2.1",
      body: [
        { type: "list", intro: "Typical usability product risks:", items: [
          "Users won't buy or use the product because it lacks effectiveness, efficiency or satisfaction.",
          "Users return it and want their money back — it works as specified but they can't work out how to use it.",
          "Users repeatedly call support because they don't understand it.",
          "Users find it hard to use and complain to friends and on social media, eroding trust and brand equity.",
          "Users resist an essential work tool; if forced, stress rises and productivity falls.",
          "Liability increases through risks to health or money from a poorly designed or deceptive interface.",
        ]},
      ],
    },
    "2.2.2": {
      objective: "UTFL-2.2.1",
      body: [
        { type: "p", text: "User experience risks are failures of the product or of its support systems." },
        { type: "list", items: [
          "Users can't complete a purchase because the app lacks needed functions, is slow or awkward, or is unpleasant — leading to shopping cart abandonment or mobile payment drop-off.",
          "The product is usable but the surrounding artifacts and procedures aren't: support answers slowly, rudely, superficially or not at all; documentation is poor; delivery delays aren't communicated; the delivered product doesn't match expectations; packaging is unattractive or impractical.",
        ]},
      ],
    },
    "2.2.3": {
      objective: "UTFL-2.2.1",
      body: [
        { type: "p", text: "An accessibility risk is a potential accessibility failure: people with disabilities can't use the product (which may break regulations), or it isn't compatible with the software or hardware they rely on." },
      ],
    },
    "2.2.4": {
      objective: "UTFL-2.2.2",
      body: [
        { type: "table", headers: ["Category", "Typical project risks"], rows: [
          ["Organizational", "No qualified usability/UX/accessibility specialists or way to select them; designers lack basic usability knowledge; low usability maturity; management ignores results as subjective or won't delay a release; QA not independent; evaluators acting as \"police\" and exaggerating minor issues; poor or missing usability requirements; usability left out of the test plan"],
          ["Technical", "No usability evaluation at all; evaluation too late to make changes; none after release when experienced users exist; untestable usability requirements; no written, reviewed procedures; best practices not followed; test environment late or unrealistic (tiny or inconsistent data, no interruptions, high-end hardware hiding performance problems); reports too long, unclear or opinion-based; UX tests not covering the full experience; \"taboo\" topics like poor architecture; late repair costs; too few trained users"],
          ["Supplier", "Suppliers lack usability testing qualifications, don't follow agreed guidelines, or deliver results late or not at all"],
        ]},
        { type: "example", title: "Printer release", text: "Users of the previous printer couldn't get through installation even though the printer itself worked. For the new release, a sensible usability risk to track: users can't work out installation and voice their dissatisfaction to friends and on social media." },
      ],
    },
  },
};
