// CT-AcT — Chapter 2 learn content, authored from the ISTQB Acceptance Testing Syllabus v1.0 (2019).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "This chapter is about the craft: writing acceptance criteria that can really be tested, choosing techniques to design acceptance tests, phrasing tests in Gherkin, and using experience-based practices — exploratory testing and beta testing — alongside them.",
  keywords: ["beta testing", "experience-based test technique", "exploratory testing", "keyword-driven testing", "test case"],
  objectives: [
    { id: "AcT-2.1.1", level: "K3", text: "For a given requirement or user story, develop a set of acceptance criteria that meet good practices" },
    { id: "AcT-2.2.1", level: "K2", text: "Explain test approaches and test techniques for acceptance testing" },
    { id: "AcT-2.2.2", level: "K3", text: "Apply the Gherkin language for designing acceptance tests for a given user story" },
    { id: "AcT-2.3.1", level: "K2", text: "Summarize how exploratory testing can be used for acceptance testing" },
    { id: "AcT-2.3.2", level: "K2", text: "Summarize the relationship between beta testing and acceptance testing" },
  ],
  sections: {
    "2.1": {
      objective: "AcT-2.1.1",
      body: [
        { type: "p", text: "Writing acceptance criteria refines the requirement or story and forms the basis for acceptance tests. Thinking from the stakeholder's point of view about functionality, performance and other qualities exposes inconsistencies, contradictions and missing information early. BAs and testers should write them together." },
        { type: "list", intro: "Good practices:", items: [
          "Precise, measurable and concise — a tester must be able to decide whether the test object meets the criterion.",
          "No technical solution details — describe what must be achieved, not how.",
          "Cover non-functional requirements (quality characteristics) as well as functional ones.",
          "Review criteria like requirements — walkthroughs, technical reviews, iteration planning meetings.",
        ]},
        { type: "example", title: "Loan application data", text: "Requirement: the system records critical credit application data. Good criterion: \"Incomplete data is not recorded and a message is shown.\" Poor: \"Data is stored in the MySQL database\" (technical solution), \"Recording is quick and reversible\" (not measurable), \"Collection meets usability guidelines\" (not about this requirement)." },
      ],
    },
    "2.2.1": {
      objective: "AcT-2.2.1",
      body: [
        { type: "p", text: "In a requirements-based approach, the tester derives test cases from the acceptance criteria of each requirement or story using black-box techniques such as equivalence partitioning and boundary value analysis." },
        { type: "table", headers: ["Complementary approach", "What it adds"], rows: [
          ["Business process-based testing", "Validates business processes and rules, often with decision tables (see chapter 3)"],
          ["Experience-based testing", "Uses the tester's experience, knowledge and intuition"],
          ["Risk-based testing", "Prioritization and thoroughness follow previously identified product risks"],
          ["Model-based testing", "Acceptance tests are generated from graphical or textual models"],
        ]},
        { type: "p", text: "Every acceptance criterion should be verified by acceptance tests, and traceability between requirements/stories and test cases should be maintained." },
      ],
    },
    "2.2.2": {
      objective: "AcT-2.2.2",
      body: [
        { type: "p", text: "ATDD and BDD tests are often written in Gherkin, a structured, declarative pattern that business people, testers and developers can all read and that can be turned into automated tests." },
        { type: "table", headers: ["Clause", "Purpose"], rows: [
          ["Given [a situation]", "Puts the test object into a defined starting state"],
          ["When [an action on the system]", "The user action being tested"],
          ["Then [the expected result]", "The observable consequences of the action"],
        ]},
        { type: "example", title: "Banking transfer", text: "GIVEN I have $5000 on account X AND I have $200 on account Y\nWHEN I transfer $1000 from account X to account Y\nTHEN I have $4000 on account X AND I have $1200 on account Y" },
        { type: "p", text: "Gherkin steps describe user actions, not user interface elements (no \"click the OK button\"). Because the structure can be parsed, it supports automated script creation through keyword-driven testing. Originally the syntax of BDD tools, Gherkin now simply means the Given–When–Then pattern." },
      ],
    },
    "2.3.1": {
      objective: "AcT-2.3.1",
      body: [
        { type: "p", text: "Exploratory testing is experience-based and has no detailed predefined procedures. It happens in uninterrupted sessions led by domain experts who know the users, requirements and business processes, though not necessarily the product. During a session the tester learns the product, designs tests, runs them and interprets the results." },
        { type: "list", intro: "Good practice:", items: [
          "Prepare a test charter beforehand (possibly BA and tester together): purpose, target and scope, setup, duration, and tactics — such as the type of user to simulate (e.g. a novice).",
          "Time-box sessions to control time and effort.",
          "Explore in pairs or as a team.",
        ]},
        { type: "p", text: "In Agile, the product owner and/or testers can run exploratory sessions to accept the stories in an iteration. Exploratory testing complements formal techniques — for example, giving quick feedback on new features before methodical testing starts." },
      ],
    },
    "2.3.2": {
      objective: "AcT-2.3.2",
      body: [
        { type: "p", text: "Beta testing is a form of acceptance testing common for COTS products and SaaS platforms, used to get market feedback after development and in-house testing are done. Potential or existing users test at their own locations, with no predefined procedures or charter, and little is documented beyond the findings." },
        { type: "table", headers: ["Strengths", "Limitations"], rows: [
          ["Realistic configurations and business contexts", "Not systematic or measurable"],
          ["Finds defects that escaped earlier levels", "No guarantee every requirement or story is covered"],
          ["Avoids costly hotfixes or recalls at scale", "Happens late — criteria-based tests support early testing"],
        ]},
        { type: "p", text: "So acceptance testing should never be limited to beta testing." },
      ],
    },
  },
};
