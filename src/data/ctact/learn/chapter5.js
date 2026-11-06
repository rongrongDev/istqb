// CT-AcT — Chapter 5 learn content, authored from the ISTQB Acceptance Testing Syllabus v1.0 (2019).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Acceptance testing brings together people with very different roles and goals. This chapter covers the social skills and workshop techniques that make that collaboration work, the joint activities of defect analysis, reporting and quality assurance, and the tools that support acceptance testing.",
  keywords: ["defect", "quality assurance"],
  objectives: [
    { id: "AcT-5.1.1", level: "K3", text: "For a given situation, apply social and communication skills relevant for collaborative acceptance testing activities" },
    { id: "AcT-5.2.1", level: "K2", text: "Explain how to analyze discrepancies between actual and expected outcomes at the business level in a given context" },
    { id: "AcT-5.2.2", level: "K2", text: "Summarize reporting activities for acceptance testing for stakeholders" },
    { id: "AcT-5.2.3", level: "K2", text: "Explain different QA techniques for acceptance testing activities" },
    { id: "AcT-5.3.1", level: "K1", text: "Recall scope and objectives of tool support for acceptance testing activities" },
  ],
  sections: {
    "5.1": {
      objective: "AcT-5.1.1",
      body: [
        { type: "p", text: "Business analysts, technical analysts, testers, business representatives and sponsors, automation specialists… all have different objectives, skills and views. Social skills are essential to gather expectations, turn them into valuable solutions and keep everyone working together. Serious games, role play and dedicated workshops help." },
        { type: "table", headers: ["Team goal", "Examples"], rows: [
          ["Get to know and understand each other", "Who's who, common goals and achievements, areas in common — keeps cohesion high (e.g. designing a team emblem of shared values, beliefs and a motto for a brand-new team)"],
          ["Communicate openly with trust and respect", "Taboo-free talk about doubts, concerns and fears to find and fix problems"],
          ["Envision common objectives and steps", "What if it succeeds or fails, what people and means are needed, what success means (e.g. a staircase of milestones from day one to release, showing what's achieved and what's left)"],
          ["Defuse major problems", "Humor, positive communication, negotiation — principled negotiation, caricature, role play or comics"],
        ]},
      ],
    },
    "5.2.1": {
      objective: "AcT-5.2.1",
      body: [
        { type: "p", text: "Testers report discrepancies between actual and expected outcomes in defect reports, giving all the information the business analyst needs to understand and assess the deviation." },
        { type: "p", text: "Defect analysis is a joint activity. The unmet acceptance criteria — and so the requirements or stories not satisfied — are identified, and the BA analyzes the impact on business processes and sets the priority (low, medium, high, critical) by business impact. Debugging and judging the impact of fixes on the implementation stay with developers." },
        { type: "list", intro: "To analyze business impact, the BA and tester:", items: [
          "Explore the paths in the business process models where the defect was found.",
          "Explore the business rules implemented incorrectly and judge the priority from a usage point of view.",
          "Record the impact analysis and the resulting decision in the defect report.",
        ]},
      ],
    },
    "5.2.2": {
      objective: "AcT-5.2.2",
      body: [
        { type: "p", text: "Acceptance reporting targets business managers, product managers and domain experts — experts in the domain but not the implementation. Report progress, results and defects without technical detail, in their language, using metrics." },
        { type: "p", text: "The test summary report gives the overall result: execution and results of all test phases, the impact analysis of open defects, and whether the quality criteria are met — the information decision makers need to judge the release risk." },
        { type: "table", headers: ["Release decision", "Meaning"], rows: [
          ["Release as is", "Rolled out without restrictions"],
          ["Release with reservations", "Known errors with workarounds are communicated to users and support; features with important risks may be excluded from roll-out"],
          ["Reject", "Not released until critical defects are fixed and retested; roll-out postponed or replaced by alternatives"],
        ]},
      ],
    },
    "5.2.3": {
      objective: "AcT-5.2.3",
      body: [
        { type: "p", text: "High-quality acceptance tests protect against defects escaping to production, so quality assurance applies to acceptance testing itself." },
        { type: "table", headers: ["QA activity", "What it checks"], rows: [
          ["Review of acceptance criteria", "BA and tester check criteria are clear, consistent, comprehensive, cover non-functional aspects and give measurable pass/fail — and build a shared vision that eases test design"],
          ["Review of acceptance test cases", "Tests cover the criteria plus business processes, rules and risks"],
          ["Traceability", "Links between requirements/stories, criteria, test cases and defects — kept up to date — clarify dependencies"],
          ["Coverage analysis", "With bi-directional traceability, coverage can be analyzed systematically"],
          ["Review of test reports", "Reports are clear, consistent, comprehensive and support the release decision"],
        ]},
      ],
    },
    "5.3": {
      objective: "AcT-5.3.1",
      body: [
        { type: "table", headers: ["Tool type", "Use in acceptance testing"], rows: [
          ["Requirements management tool", "Describe acceptance criteria; traceability between tests and requirements; coverage analysis"],
          ["Agile project management tool", "Describe acceptance criteria; traceability between tests and user stories; coverage analysis"],
          ["Business process management tool", "Model business processes and rules; analyze defect impact on business processes"],
          ["Test management and automation tool", "Manage acceptance tests and execution campaigns; manage results"],
          ["Model-based testing tool", "Generate test cases from process models; traceability between models, rules, requirements and tests"],
          ["Defect / incident management tool", "Manage the defect or incident lifecycle"],
        ]},
      ],
    },
  },
};
