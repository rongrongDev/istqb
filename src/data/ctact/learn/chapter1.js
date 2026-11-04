// CT-AcT — Chapter 1 learn content, authored from the ISTQB Acceptance Testing Syllabus v1.0 (2019).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Acceptance testing checks whether a system is ready to be deployed and used by its customers. It sits where testing meets business analysis, so this chapter starts with how business goals become requirements and acceptance criteria, why requirement quality matters, how the business analyst and tester roles fit together, and how ATDD and BDD let acceptance tests drive development.",
  keywords: ["acceptance criteria", "acceptance testing", "requirement", "user story"],
  objectives: [
    { id: "AcT-1.1.1", level: "K1", text: "Recall the relationship between business goals, business needs and requirements" },
    { id: "AcT-1.1.2", level: "K2", text: "Explain the relationship between requirements / user stories, acceptance criteria and acceptance tests" },
    { id: "AcT-1.1.3", level: "K2", text: "Explain how the quality of requirements / user stories and acceptance criteria affects acceptance testing" },
    { id: "AcT-1.2.1", level: "K2", text: "Summarize the relationship between acceptance testing activities and business analysis activities" },
    { id: "AcT-1.2.2", level: "K2", text: "Explain how testers and business analysts collaborate in acceptance testing activities" },
    { id: "AcT-1.2.3", level: "K2", text: "Describe Acceptance Test-Driven Development (ATDD) and Behavior-Driven Development (BDD)" },
  ],
  sections: {
    "1.1.1": {
      objective: "AcT-1.1.1",
      body: [
        { type: "p", text: "Business analysts begin by understanding the organization's overall business goals, its current processes and its stakeholders. From that they describe concrete business needs and a business case to address them — and only then elicit requirements for the solution to be built." },
        { type: "p", text: "Business goals, business needs, business requirements and product requirements all describe what should be achieved, just at different levels of abstraction. Agile teams follow the same idea with different words, such as features and user stories. In this syllabus, \"requirements\" means both business and product requirements." },
      ],
    },
    "1.1.2": {
      objective: "AcT-1.1.2",
      body: [
        { type: "p", text: "Acceptance criteria and acceptance tests should be created jointly by business analysts and testers (often with developers) already during requirements elicitation, so that business, development and testing share one understanding of what \"acceptable\" means from day one." },
        { type: "table", headers: ["Artifact", "What it is"], rows: [
          ["Requirement / user story", "What the solution must do or be; a user story is extended by its acceptance criteria"],
          ["Acceptance criteria", "Measurable statements, each either true or false, attached to one requirement or story — they are the test conditions: WHAT to test, without detailed procedures"],
          ["Acceptance test cases", "Derived from the acceptance criteria — they specify HOW the criteria are verified"],
        ]},
      ],
    },
    "1.1.3": {
      objective: "AcT-1.1.3",
      body: [
        { type: "p", text: "When requirements, stories or acceptance criteria are vague or ambiguous, testers fill the gaps with assumptions about what stakeholders want. The resulting tests may be flawed, causing rework or — worse — running invalid tests, which adds cost, risk and uncertainty about the product's quality. Vague requirements also mislead the developers implementing them." },
        { type: "p", text: "So testers work closely with business analysts to remove ambiguities and clarify assumptions, making acceptance tests a valid measure of release readiness. The INVEST criteria help check user story quality in Agile teams, and ISO/IEC/IEEE 29148 describes good requirements engineering practice." },
      ],
    },
    "1.2.1": {
      objective: "AcT-1.2.1",
      body: [
        { type: "p", text: "Business analysts and testers too often work in silos, so misunderstandings about customer expectations stay hidden until release. Considering acceptance early and coordinating their work avoids this." },
        { type: "list", intro: "IQBBA business analysis activities:", items: ["Strategy definition", "Management of the business analysis processes", "Requirements engineering in business analysis", "Solution evaluation and optimization"] },
        { type: "table", headers: ["Business analysis", "Testing", "How they connect"], rows: [
          ["Requirements engineering", "Test planning, analysis and design", "Requirements are the test basis; testers help define and verify acceptance criteria (test analysis and design may change them); both assess the impact of requirement changes"],
          ["Solution evaluation", "Test implementation, execution and completion", "BAs review test procedures/scripts, clarify issues, help create business test data, help run tests, evaluate results and support test completion"],
        ]},
      ],
    },
    "1.2.2": {
      objective: "AcT-1.2.2",
      body: [
        { type: "p", text: "Both roles aim for the product with the highest value for the customer. Besides joint discussions and reviews of each other's work, a valuable area of collaboration is test planning based on risk analysis — it makes sure the right test cases are developed and prioritized." },
        { type: "p", text: "Working together is also a chance to cross-train: the more testers know about business needs and the more BAs know about structured testing, the better they understand and appreciate each other's work." },
      ],
    },
    "1.2.3": {
      objective: "AcT-1.2.3",
      body: [
        { type: "p", text: "In sequential lifecycles, testers analyze and design acceptance tests after the requirements are finished. In Agile, acceptance criteria and tests are created during requirements analysis and backlog refinement — the early testing principle in action." },
        { type: "table", headers: ["Approach", "How acceptance tests are produced"], rows: [
          ["ATDD — Acceptance Test-Driven Development", "Collaboratively during requirements analysis by BAs, product owners, testers and developers; any textual or graphical form (e.g. visual ATDD with workflow models)"],
          ["BDD — Behavior-Driven Development", "Requirements written in Gherkin (Given–When–Then) natural-language statements that become the acceptance tests and the basis for automation"],
        ]},
        { type: "p", text: "Both involve the whole team, keep development focused on business goals, and treat acceptance tests as living documentation — usage scenarios stakeholders can read. The terms are often used interchangeably." },
        { type: "seealso", label: "CTFL v4.0 Learn — section 2.1.3", href: "/ctflv4-learn", text: "test-first approaches (TDD, ATDD, BDD) at Foundation Level" },
        { type: "seealso", label: "CTFL v4.0 Learn — section 2.2.1", href: "/ctflv4-learn", text: "acceptance testing as a test level and its forms (UAT, OAT, contractual, regulatory, alpha, beta)" },
      ],
    },
  },
};
