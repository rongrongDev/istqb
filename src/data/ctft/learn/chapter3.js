// CT-FT v1.0 — Chapter 3 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "With defects that can cost money, fines and reputation, finance testing must focus effort where risk is highest. This chapter covers the categories of risk in financial systems, the principles of risk-based testing, and the test activities and mitigation strategies that follow from it.",
  keywords: [
    "risk", "risk mitigation", "risk assessment", "risk-based testing", "traceability matrix",
    "compliance risk", "dynamic risk assessment", "risk acceptance", "risk avoidance", "risk transfer",
  ],
  objectives: [
    { id: "FT-3.1", level: "K1", text: "Recall the main categories of risk in financial systems" },
    { id: "FT-3.2", level: "K2", text: "Explain the principles of risk-based testing in finance" },
    { id: "FT-3.3", level: "K2", text: "Explain how risk-based prioritization affects test activities in financial applications" },
  ],
  sections: {
    "3.1": {
      objective: "FT-3.1",
      body: [
        { type: "p", text: "Risk-based testing prioritizes test effort by risk — the probability of failure multiplied by its business impact, such as failing GDPR, PSD2, PCI DSS or MiCA, or a defective risk model." },
        { type: "table", headers: ["Risk dimension", "Examples"], rows: [
          ["Business and financial", "Sensitive data migration, data handling defects, incorrect calculations, incorrectly applied rules"],
          ["Technical and operational", "Scope creep, inadequate tool support, over-reliance on particular tools, automation frameworks or APIs"],
          ["Regulatory and compliance", "Third-party providers failing compliance, security or performance obligations (especially under DORA); delays or misunderstandings implementing new rules"],
        ]},
        { type: "p", text: "Project risks threaten schedule, budget or scope; product risks threaten quality — a defective commercial loan calculation, non-compliant funds transfer protocols. Of the nine ISO/IEC 25010 quality characteristics, security and privacy are especially critical in finance: breaches expose clients, damage reputation, cause losses and lawsuits, and may oblige the organization to pay for credit monitoring." },
      ],
    },
    "3.2": {
      objective: "FT-3.2",
      body: [
        { type: "p", text: "Because defects are so costly in finance, teams prioritize the areas with the highest compliance or business risk. Each risk is assessed for likelihood and impact to give a risk level (e.g. likelihood × impact), expressed quantitatively or qualitatively." },
        { type: "p", text: "A risk matrix plots likelihood against impact; risks highest in both get top test priority. Risk levels shift as features, integrations and regulations change, so dynamic risk assessment — periodic reassessment — keeps priorities aligned." },
        { type: "list", intro: "Why risk-based testing:", items: [
          "Efficient resource allocation to the riskiest areas.",
          "Early defect detection (shift left) — fixes in the current sprint.",
          "Optimized coverage of critical functionality.",
          "Improved business value and customer satisfaction.",
        ]},
      ],
    },
    "3.3": {
      objective: "FT-3.3",
      body: [
        { type: "p", text: "Consider both functional risks (defective interest calculations) and non-functional ones (poor performance under load), with business analysts, compliance officers, technical staff and risk managers involved." },
        { type: "table", headers: ["Prioritization technique", "How it works"], rows: [
          ["FMEA", "Failure Mode and Effect Analysis — systematically identify, prioritize and mitigate potential failures before they happen"],
          ["FTA", "Fault Tree Analysis — top-down, deductive search for root causes of a system-level event using AND/OR logic gates"],
          ["PRISMA", "Product Risk Management — finds the areas of highest business or technical risk to test"],
        ]},
        { type: "list", intro: "Then:", items: [
          "Define test conditions covering the high-risk areas; use traceability matrices linking risks → test conditions → results.",
          "Execute and monitor the tests.",
          "Report defects and mitigate risks.",
        ]},
        { type: "table", headers: ["Mitigation strategy", "Meaning"], rows: [
          ["Risk avoidance", "Don't do the activity that causes the risk"],
          ["Risk mitigation by testing", "Reduce likelihood or impact through testing"],
          ["Risk transfer", "Shift the risk to a third party, e.g. insurance"],
          ["Risk acceptance", "Acknowledge and accept the risk"],
        ]},
        { type: "p", text: "ISO 31000 adds principles for embedding risk management: integrated, structured and comprehensive, customized, inclusive, dynamic, based on the best information, mindful of human and cultural factors, and continually improving." },
      ],
    },
  },
};
