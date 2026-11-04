// CT-GenAI v1.1 — Chapter 3: Managing Risks of Generative AI in Software Testing
// summary/deepPoints from syllabus v1.1; examInsights derived from ISTQB Sample Exam A v1.1 and the ASTQB v1.1 sample exam
export default {
  id: 3,
  title: 'Managing Risks of Generative AI in Software Testing',
  time: '160 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "10 questions per sample exam. Know the three defect types (hallucination, reasoning error, bias) and how to DETECT each, the five mitigation techniques, the two non-determinism levers (temperature, seed), the privacy concerns and the four attack vectors (context manipulation, request manipulation, data poisoning, malicious code generation), the privacy/security mitigations, energy use (images ≫ text), and the four regulations/standards in the 3.4.1 table.",
  sections: [
    {
      id: '3.1.1',
      title: 'Hallucinations, Reasoning Errors and Biases',
      level: 'K1',
      type: 'skim',
      summary: "HALLUCINATION = output that is factually incorrect or irrelevant to the task (fictitious test cases, non-working scripts, tests for acceptance criteria that don't exist). REASONING ERROR = misinterpreting logical structures — cause/effect, conditions, step-by-step problem solving — because LLMs pattern-match rather than truly reason (e.g. test planning, prioritization, estimation). BIAS = output favoring certain information/approaches, originating in the TRAINING DATA (e.g. English-heavy data underrepresents other perspectives; affects test data and acceptance criteria). Non-determinism makes them hard to fix: they reappear in another conversation.",
      examInsights: [
        "A-Q19 KEY — Hallucination = irrelevant or factually incorrect output for a given task.",
        "ASTQB-Q19 — Output based on misinterpreted logical structures = reasoning error."
      ]
    },
    {
      id: '3.1.2',
      title: 'Identifying Hallucinations, Reasoning Errors and Biases',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "Hallucination detection: CROSS-VERIFICATION against documentation, requirements, known behavior; DOMAIN EXPERT consultation; CONSISTENCY CHECKS between outputs and known information.",
        "Reasoning error detection: LOGICAL VALIDATION of the flow/coherence in review cycles; OUTPUT TESTING — actually run the generated tests/scripts against the test object.",
        "Bias detection: review whether generated testware (code, synthetic data) fairly represents the test strategy and coverage requirements; check for biases in test types (e.g. non-functional tests underrepresented).",
        "Apply detection effort according to the estimated risk of the task."
      ],
      examInsights: [
        "A-Q20 KEY (K3, 2 pts) — A generated test for a feature not in the spec (e.g. 'create a wishlist' for a checkout story) is a HALLUCINATION.",
        "ASTQB-Q20 — Official answer: an AI plan that 'adds' a non-existent team member to fit the timeline is likely a hallucination; tell the model it is incorrect."
      ]
    },
    {
      id: '3.1.3',
      title: 'Mitigating Hallucinations, Reasoning Errors and Biases',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "These defects are more likely with poorly designed prompts or missing context. Five mitigations: (1) PROVIDE COMPLETE CONTEXT; (2) DIVIDE PROMPTS into manageable segments (prompt chaining, verify each step); (3) use CLEAR, INTERPRETABLE DATA FORMATS (structured, unambiguous); (4) SELECT THE APPROPRIATE MODEL for the task; (5) COMPARE RESULTS ACROSS MODELS.",
        "RAG and fine-tuning (Chapter 4) are two further complementary techniques."
      ],
      examInsights: [
        "A-Q21 KEY — Clear, structured input formats help LLMs generate LESS AMBIGUOUS outputs.",
        "ASTQB-Q21 — Comparing models: compare outputs from the same prompt to detect errors and judge reliability."
      ]
    },
    {
      id: '3.1.4',
      title: 'Mitigating Non-Deterministic Behavior',
      level: 'K1',
      type: 'skim',
      summary: "Variability comes from probabilistic sampling at inference and grows with long outputs; full reproducibility can't be guaranteed. Two levers: LOWER THE TEMPERATURE (narrows the probability distribution → more consistent, but less creative/diverse), and SET A RANDOM SEED (same pseudo-random sequence → better reproducibility). Also automate parts of output verification for a consistent evaluation process.",
      examInsights: [
        "A-Q22 KEY — Narrowing the probability distribution during inference = lowering the temperature.",
        "ASTQB-Q22 — A seed gives the random number generator the same starting point → same pseudo-random sequence → reproducibility."
      ]
    },
    {
      id: '3.2.1',
      title: 'Data Privacy and Security Risks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Privacy concerns: UNINTENTIONAL DATA EXPOSURE (output reveals sensitive info), LACK OF CONTROL over data usage (stored/processed without consent), COMPLIANCE RISKS (e.g. GDPR violations → legal disputes).",
        "Security risks: LLM-powered test infrastructure can be breached or accessed without authorization; attackers exploit LLM vulnerabilities (manipulative attacks) to alter behavior or extract data; malicious input data misleads LLMs."
      ],
      examInsights: [
        "A-Q23 KEY (asks for the INCORRECT statement) — 'An LLM is likely to expose real sensitive data if it hallucinates while generating synthetic data, regardless…' is the incorrect one.",
        "ASTQB-Q23 — Processing sensitive customer data: the tool must not store data where unauthorized users (incl. other GenAI tools) can access it."
      ]
    },
    {
      id: '3.2.2',
      title: 'Attack Vectors in GenAI Test Processes and Tools',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "CONTEXT MANIPULATION — requests designed to extract confidential training data (e.g. overflowing the context window with long prompts so it leaks training snippets).",
        "REQUEST MANIPULATION — input that disrupts the output (e.g. images luring the AI into another context → hallucinated acceptance criteria).",
        "DATA POISONING — manipulating training data (e.g. fake ratings when evaluating an AI-generated test report).",
        "MALICIOUS CODE GENERATION — manipulating the LLM into generating backdoors (e.g. code opening a channel to a malicious IP)."
      ],
      examInsights: [
        "A-Q24 KEY — Corrupting the training dataset of an LLM that recommends coverage strategies = data poisoning.",
        "A-Q25 KEY — Matching question on all four vectors; e.g. tricking a visual-comparison LLM into ignoring real UI issues = request manipulation.",
        "ASTQB-Q24/Q25 — Real birthdates reappearing in generated data = unintentional data exposure; intentionally wrong ratings of AI output = data poisoning."
      ]
    },
    {
      id: '3.2.3',
      title: 'Mitigation Strategies for Privacy and Security',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "GDPR doesn't forbid GenAI but limits lawfulness and purposes of collecting, processing and storing data.",
        "Data privacy measures: DATA MINIMIZATION; ANONYMIZATION/PSEUDONYMIZATION (mask or replace with non-identifiable data); SECURE STORAGE & TRANSMISSION (encryption, access control); RESOURCES TRAINING (policies for responsible use).",
        "Additional: systematic human review of output; evaluation by comparison with another LLM; choose a secure operational environment (commercial secure offering, secure cloud, or on-premises); regular security audits and vulnerability assessments; stay up to date with security best practices.",
        "Combine strategies; involve senior security engineers, legal counsel, CTO/CISO."
      ],
      examInsights: [
        "A-Q26 KEY — Best privacy strategy: replace sensitive test data with an anonymized version.",
        "ASTQB-Q26 — Anonymization = mask or replace private information with non-identifiable data."
      ]
    },
    {
      id: '3.3.1',
      title: 'Energy Consumption and CO₂ Emissions',
      level: 'K2',
      type: 'skim',
      summary: "Training and running LLMs uses many specialized computing resources; usage loads devices, networks and data centers. Energy rises with task complexity and computational resources: generating ONE image with a powerful model can use as much energy as fully charging a smartphone, while generating text uses only a small percentage of a charge. Single requests look negligible, but across millions of users the cumulative CO₂ is substantial. Mitigate by limiting unnecessary model interactions.",
      examInsights: [
        "A-Q27 KEY — Image generation consumes substantially more energy than text generation (higher computational demand).",
        "ASTQB-Q27 — 'About as much power as charging a smartphone' = creating one image."
      ]
    },
    {
      id: '3.4.1',
      title: 'AI Regulations, Standards and Frameworks',
      level: 'K1',
      type: 'skim',
      summary: "ISO/IEC 42001:2023 (standard) — requirements for an AI MANAGEMENT SYSTEM in an organization → GenAI in testing follows recommended practices, consistency, reliability. ISO/IEC 23053:2022 (standard) — framework for AI systems using ML, AI LIFECYCLE processes, safety and transparency → data quality, transparency, safety. EU AI Act (regulation) — legal framework classifying applications BY RISK LEVEL → transparency, accountability, bias mitigation. NIST AI Risk Management Framework (US framework) — managing AI risks: fairness, transparency, security → prevents biased test results. Keep up with evolving regulations.",
      examInsights: [
        "A-Q28 KEY (select TWO) — The STANDARDS most relevant to GenAI in testing: ISO/IEC 23053:2022 and ISO/IEC 42001:2023.",
        "ASTQB-Q28 — Legal framework classifying applications by risk level = EU AI Act."
      ]
    }
  ]
};
