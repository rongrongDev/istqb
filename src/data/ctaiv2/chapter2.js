// CT-AI v2.0 — Chapter 2: Quality Characteristics for AI-Based Systems
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 2,
  title: 'Quality Characteristics for AI-Based Systems',
  time: '45 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: 'All three learning objectives are K2 but these quality characteristics appear as context for test objectives in every subsequent chapter. Master the seven ISO/IEC 25059 quality characteristics and their exact definitions — they form the acceptance criteria framework. Safety challenges (2.1.2) drive testing strategies throughout the syllabus.',
  sections: [
    {
      id: '2.1.1',
      title: 'AI-Specific Quality Characteristics (ISO/IEC 25059)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "ISO/IEC 25059 extends ISO/IEC 25010 with AI-specific characteristics. Know each one's exact definition and category: AI Functional Correctness (Product Quality) — AI cannot guarantee perfect accuracy; defines acceptable error rate thresholds rather than requiring 100% correctness.",
        'Functional Adaptability (Product Quality) — new sub-characteristic of functional suitability. AI autonomously adapts to changes in its operational environment AFTER deployment.',
        "User Controllability (Product Quality) — new sub-characteristic of interaction capability. A human or external agent can intervene in the AI's functioning in a timely manner. Transparency (Product Quality + Quality in Use) — degree to which appropriate information about the AI is communicated to stakeholders.",
        'AI Robustness (Product Quality) — new sub-characteristic of reliability. Maintains functional correctness despite biased, adversarial, or invalid inputs, external interference, or adverse environmental conditions.',
        "Intervenability (Product Quality) — new sub-characteristic of SECURITY. Operator can intervene to PREVENT HARM OR HAZARD. Societal and Ethical Risk Mitigation (Quality in Use) — new sub-characteristic of 'Freedom from Risk'. Covers accountability, fairness, non-discrimination, privacy, safety, human values, sustainability, labor practices.",
        'Key exam trap: User Controllability (prevent unwanted actions — usability/interaction) vs Intervenability (prevent harm/hazard — SECURITY sub-characteristic). These are different!'
      ],
      examInsights: [
        'Q7 CRITICAL TRAP — Intervenability vs User Controllability: INTERVENABILITY = SECURITY sub-characteristic = preventing HARM or HAZARD (e.g., drone forced into safe-landing to prevent crash). USER CONTROLLABILITY = INTERACTION CAPABILITY = user overrides AI decision (e.g., override fraud block).',
        'Q7 MATCHING: AI Robustness = F1-score in heavy rain (adverse conditions). User Controllability = time to override fraud decision. Functional Adaptability = e-commerce recommendations update to new fashion trend. Intervenability = success rate of forcing drone into safe-landing protocol.',
        "MEMORY AID: 'Inter-VENability = preVENting harm' (SECURITY). 'User CONTROLlability = user CONTROLs AI behavior' (USABILITY/INTERACTION)."
      ]
    },
    {
      id: '2.1.2',
      title: 'AI and Safety',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Five challenges that make AI safety-related systems harder to test than conventional safety systems — MUST KNOW ALL FIVE:',
        'Specifications: Traditional systems have complete, traceable requirements. AI systems start with vague goals expressed implicitly through training data — traceability from requirements to implementation is often inadequate.',
        'Non-determinism: Even rigorously tested AI can exhibit unexpected behavior due to random number generation or slight input variations. Cannot guarantee precise behavior.',
        'Self-learning: Post-deployment learning moves the system away from the tested behavior. Mitigations: control what data the model learns from, implement safety guards (e.g., content moderation to filter prompts).',
        'Explainability and Transparency: AI decision-making is often opaque. LIME (Local Interpretable Model-Agnostic Explanations) can help but is not widely available and may compromise performance.',
        'Evolving Regulations: AI not yet included in mature functional safety standards — some standards even PROHIBIT AI. EU AI Act classifies AI safety components (aviation, medical, automotive) as HIGH-RISK.'
      ],
      examInsights: [
        'Q8 TRAP — Option (a) reverses the specifications challenge: the ACTUAL problem is requirements are TOO VAGUE (expressed implicitly through data), NOT too detailed.',
        'Q8 TRAP — Option (c) is wrong: self-learning systems do NOT stop adapting after deployment — they CONTINUE to move away from their original tested state.',
        "Q8 TRAP — Option (d) is wrong: mature safety-related standards currently LACK provisions for AI (some explicitly PROHIBIT it). They are not just out-of-date — they actively don't support AI.",
        'Q8 KEY: Correct answer = non-determinism + self-learning = unpredictable divergence from tested state.'
      ]
    },
    {
      id: '2.2.1',
      title: 'Acceptance Criteria for AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'AI acceptance criteria are statistical, probabilistic, or threshold-based — NOT simple binary pass/fail. This is the fundamental difference from conventional systems.',
        "AI Functional Correctness: 'Accuracy of 95% for an image recognition system' / 'Recall of 90% for a defect prediction system'.",
        "Functional Adaptability: 'Engine management system adapts within 20 seconds when crossing a specified altitude threshold' / 'Video streaming service adjusts to recommend ≥40% documentaries after user watches 3 in one session'.",
        "User Controllability: 'Supervisor takes control of autonomous drone within 0.5 seconds of distress signal'. Transparency: 'System API endpoint returns unique version identifier and documentation link of currently deployed model'. Intervenability: 'Production line shuts down within 0.5 seconds after robot breaches safety zone'.",
        "Societal & Ethical: 'Prison sentencing system passes specified fairness metric with no racial group discrimination' / 'Chatbot scores ≥95% on red teaming assessment for refusing harmful content'. Safety: 'Non-AI components comply with ISO 26262-6 ASIL C' / '100% of ML input-output relationships mapped with ≥99.9% accuracy by explainability tool'."
      ],
      examInsights: [
        "Q9 KEY — The LEAST likely valid acceptance criterion is a SUBJECTIVE usability statement: 'The spam alert control system is easy for the user to set up and requires minimal technical expertise.' This describes generic usability (learnability/operability) — not AI-specific characteristics, and it's NOT measurable.",
        'Q9 PRINCIPLE: Valid AI-specific acceptance criteria must be (1) tied to an ISO/IEC 25059 characteristic, (2) measurable/quantifiable (time, rate, score), and (3) not just generic software quality.',
        "Q9 ANALYSIS: (a) 0.5s intervenability threshold ✓. (b) 20-minute functional adaptability threshold ✓. (c) 'easy to set up' — generic usability, no measurement ✗. (d) visual heatmap = transparency ✓."
      ]
    }
  ]
};
