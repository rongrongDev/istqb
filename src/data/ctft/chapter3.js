// CT-FT v1.0 — Chapter 3: Risk-Based Testing
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 3,
  title: 'Risk-Based Testing',
  time: '35 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "Short chapter, five questions in the ASTQB sample. Know the three risk dimensions (business/financial, technical/operational, regulatory/compliance), project vs product risks and the ISO 25010 model (security and privacy are critical), risk level = likelihood × impact on a RISK MATRIX with dynamic reassessment, the four reasons for RBT, the prioritization techniques (FMEA, FTA, PRISMA), and the four mitigation strategies (avoidance, mitigation by testing, transfer, ACCEPTANCE).",
  sections: [
    {
      id: '3.1', title: 'Categories of Risk in Financial Systems', level: 'K1', type: 'skim',
      summary: "Risk-based testing prioritizes effort by risk = probability of failure × business impact (e.g. failing GDPR, PSD2, PCI DSS, MiCA; defective risk calculations or models). Three dimensions: BUSINESS AND FINANCIAL (sensitive data migration, data handling defects, incorrect calculations, wrongly applied rules); TECHNICAL AND OPERATIONAL (scope creep, inadequate tool support, over-reliance on specific tools, AUTOMATION FRAMEWORKS or APIs); REGULATORY AND COMPLIANCE (third-party providers failing obligations — esp. under DORA; delays or misunderstandings implementing new rules). PROJECT risks affect schedule, budget, scope; PRODUCT risks affect quality (defective loan calculations, non-compliant EFT protocols). ISO/IEC 25010 product quality model — SECURITY and PRIVACY are critical in finance (breaches → exposure, reputation, losses, lawsuits, paying for credit monitoring).",
      examInsights: ["ASTQB-Q17 — A technical or operational risk: lack of an adequate automation framework."]
    },
    {
      id: '3.2', title: 'Principles of Risk-Based Testing in Finance', level: 'K2', type: 'deep',
      deepPoints: [
        "Defects are extremely costly in finance (loss, penalties, reputation) → prioritize the highest compliance or business risk.",
        "Assess each risk's LIKELIHOOD and IMPACT → RISK LEVEL (e.g. likelihood × impact), quantitative (20% chance) or qualitative (low/medium/high).",
        "RISK MATRIX (likelihood-impact matrix): likelihood on one axis, impact on the other; highest of both = top test priority.",
        "DYNAMIC RISK ASSESSMENT: levels change with new features, integrations, regulations → periodic reassessment.",
        "Reasons: efficient RESOURCE ALLOCATION; EARLY DEFECT DETECTION (shift left, fix in the current sprint); OPTIMIZED COVERAGE of critical functions; improved BUSINESS VALUE."
      ],
      examInsights: ["ASTQB-Q18/Q19 — The risk matrix uses probability and impact; tests for the highest-risk elements execute first."]
    },
    {
      id: '3.3', title: 'Test Activities Related to Risk-Based Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Consider functional (defective interest calculations) and non-functional (poor performance under load) risks; involve business analysts, compliance officers, technical team, risk managers; decide what needs immediate attention vs monitoring.",
        "PRIORITIZE: FMEA (systematic, proactive — identify, prioritize, mitigate potential failures before they occur), FTA (top-down, deductive; root causes of a system-level event via AND/OR logic gates), PRISMA (product risk management — areas of highest business or technical risk).",
        "DEFINE TEST CONDITIONS covering high-risk areas; TRACEABILITY MATRICES link risks → test conditions → results. EXECUTE AND MONITOR. REPORT AND MITIGATE.",
        "Mitigation strategies: RISK AVOIDANCE (don't do the risky activity), RISK MITIGATION BY TESTING (reduce likelihood/impact), RISK TRANSFER (third party, e.g. insurance), RISK ACCEPTANCE (acknowledge and accept). ISO 31000 principles: integrated, structured and comprehensive, customized, inclusive, dynamic, best available information, human and cultural factors, continual improvement."
      ],
      examInsights: ["ASTQB-Q20/Q21 — Under RBT, high-risk areas get high-priority test conditions; deciding not to fix a known risk = risk acceptance."]
    }
  ]
};
