// CT-AI v2.0 — Chapter 2 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 21-25.

export default {
  intro:
    "ISO/IEC 25059 extends the classic ISO/IEC 25010 software quality model with AI-specific characteristics. These characteristics shape how test objectives are defined, how acceptance criteria are formulated, and how results are interpreted for every later chapter. The chapter also covers why AI in safety-related systems is especially hard, and what AI acceptance criteria look like in practice.",
  keywords: {
    general: [
      "functional adaptability",
      "AI functional correctness",
      "intervenability",
      "AI robustness",
      "safety",
      "societal and ethical risk mitigation",
      "transparency",
      "user controllability",
    ],
    aiSpecific: [],
  },
  objectives: [
    { id: "AI-2.1.1", level: "K2", text: "Classify behaviors of AI-based systems according to the quality characteristics defined in ISO/IEC 25059" },
    { id: "AI-2.1.2", level: "K2", text: "Explain the special considerations that arise when AI is used in safety-related systems" },
    { id: "AI-2.2.1", level: "K2", text: "Give examples of acceptance criteria for AI-based systems" },
  ],
  sections: {
    "2.1.1": {
      objective: "AI-2.1.1",
      body: [
        { type: "p", text: "ISO/IEC 25059 extends ISO/IEC 25010 to evaluate AI-based systems from two perspectives: product quality and quality in use. For testers, these characteristics directly drive test objectives, acceptance criteria, and result interpretation." },
        { type: "table", headers: ["Characteristic", "Perspective / parent", "Meaning"], rows: [
          ["AI functional correctness", "Product quality", "Probabilistic ML can't guarantee perfect accuracy — correctness is judged against acceptable thresholds for incorrect outputs, not 100% correctness"],
          ["Functional adaptability", "Product quality — new sub-characteristic of functional suitability", "System autonomously adapts to changes in its operational environment AFTER deployment"],
          ["User controllability", "Product quality — new sub-characteristic of interaction capability", "A human or external agent can intervene in the system's functioning in a timely manner"],
          ["Transparency", "Product quality (interaction capability) AND quality in use (satisfaction)", "Degree to which appropriate information about the system is communicated to stakeholders"],
          ["AI robustness", "Product quality — new sub-characteristic of reliability", "Maintains AI functional correctness despite biased/adversarial/invalid inputs, external interference, adverse conditions, or operator misuse"],
          ["Intervenability", "Product quality — new sub-characteristic of SECURITY", "An operator can intervene in a timely manner to prevent HARM or HAZARD"],
          ["Societal & ethical risk mitigation", "Quality in use — new sub-characteristic of 'freedom from risk'", "Accountability, fairness/non-discrimination, professional responsibility, human values, privacy, safety & security, human control, community involvement, human-centered design, rule of law, international norms, environmental sustainability, labor practices"],
        ]},
        { type: "note", title: "Terminology detail", text: "'Interaction capability' is the 2023 ISO/IEC 25010 term that replaced 'usability'. Transparency is the only characteristic that appears in BOTH perspectives (product quality and quality in use)." },
        { type: "note", title: "Classic exam trap", text: "User controllability (interaction capability — intervene in functioning generally) vs. intervenability (SECURITY — intervene to prevent harm/hazard). Classify by the parent characteristic and the purpose of the intervention." },
      ],
    },
    "2.1.2": {
      objective: "AI-2.1.2",
      body: [
        { type: "p", text: "Safety-related systems can injure or harm people, property, or the environment. Testing non-AI safety systems is demanding but feasible; AI adds five extra challenges — know all five." },
        { type: "list", items: [
          "Specifications — traditional safety requirements are fully defined and refined into code. Many AI systems start from vague goals, with requirements implicitly encoded in training data (patterns, rules, objectives never fully formalized). Traceability from requirements to implementation is often inadequate.",
          "Non-determinism — precise behavior can't be guaranteed. Even rigorously tested models can behave unexpectedly due to random number generation or slight input variations.",
          "Self-learning — pre-deployment testing demonstrates safety integrity, but a self-learning system progressively moves away from the tested behavior. Mitigations: manage what the model learns from, or add safety guards (e.g. a content moderation component that filters prompts).",
          "Explainability and transparency — safety demands understanding how and why decisions are made, yet AI decision processes are often opaque. Explainable-AI techniques like LIME (Local Interpretable Model-agnostic Explanations) can give insight but are not widely available and may compromise performance.",
          "Evolving regulations — AI is not yet covered by mature functional-safety standards, and some standards even prohibit AI in safety systems. The EU AI Act classifies AI safety components (aviation, medical devices, automotive) as HIGH-RISK with strict development and testing requirements.",
        ]},
      ],
    },
    "2.2.1": {
      objective: "AI-2.2.1",
      body: [
        { type: "p", text: "Acceptance criteria for AI-based systems are typically statistical, probabilistic, or threshold-based rather than binary pass/fail — the fundamental difference from conventional systems, and an extra testing challenge. Both functional and non-functional characteristics must be covered; ISO/IEC 25010 + 25059 provide the framework." },
        { type: "table", headers: ["Characteristic", "Example acceptance criteria"], rows: [
          ["AI functional correctness", "Accuracy of 95% for an image recognition system · Recall of 90% for a defect prediction system"],
          ["Functional adaptability", "Engine management adapts within 20 s of crossing a specified altitude threshold · Streaming homepage recommends ≥40% documentaries after a user watches three in one session"],
          ["User controllability", "Supervisor takes control of an autonomous drone within 0.5 s of its GPS-loss distress signal · Farm system notifies the farmer at >30% visual-performance degradation (manual override) and deactivates at >50% without user response"],
          ["Transparency", "Sufficient information about the third-party ML model and its training-data provenance per company standard · Dashboard/API endpoint returns the deployed model's unique version identifier plus a documentation link"],
          ["AI robustness", "Alert-system response stays <1 s while the vulnerabilities database is disrupted for 30 s · Edge device drops to lower-fidelity, reduced-power inference (instead of crashing) above 85 °C for 10 s"],
          ["Intervenability", "Production line can shut down within 0.5 s of shutdown initiation after a robot breaches its safety zone · Power-grid system gives a 30 s window for an engineer to veto AI-proposed 'critical' actions"],
          ["Societal & ethical risk mitigation", "Automated sentencing system shows no racial-group discrimination on the specified fairness metric · Chatbot scores ≥95% on an internal red-teaming assessment for refusing violent/self-harm/hate content"],
          ["Safety", "Non-AI components of the steering system comply with ISO 26262-6 at ASIL C · 100% of ML input–output relationships in a nuclear-plant controller mappable by an explainability tool at ≥99.9% average accuracy · Out-of-limit control signals (>10%) regulated within 0.15 s of detection"],
        ]},
        { type: "note", title: "How to read these", text: "Each criterion pairs a measurable metric with a threshold (percentage, time bound, score). On the exam, match the criterion to its characteristic by asking what quality is being protected — e.g. a veto window = intervenability (preventing harm), an adaptation time = functional adaptability." },
      ],
    },
  },
};
