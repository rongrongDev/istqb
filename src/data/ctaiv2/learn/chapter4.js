// CT-AI v2.0 — Chapter 4 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 38-45.

export default {
  intro:
    "Why testing AI differs from testing conventional software: the locked-vs-adaptive distinction, why statistics replace single pass/fail runs, and the test oracle problem with its solutions. Then GenAI-specific testing (black-box evaluation, benchmarks, and red teaming — a K3 objective you must be able to IMPLEMENT), and finally how classic test levels extend to ML systems and how risk-based testing applies.",
  keywords: {
    general: ["attack", "exploratory testing", "risk-based testing", "test oracle"],
    aiSpecific: ["adaptive AI-based system", "AI-based system", "generative AI", "large language model", "locked AI-based system"],
  },
  objectives: [
    { id: "AI-4.1.1", level: "K2", text: "Compare the testability of locked and adaptive AI-based systems" },
    { id: "AI-4.1.2", level: "K2", text: "Explain why a statistical approach is often needed when testing AI-based systems" },
    { id: "AI-4.1.3", level: "K2", text: "Explain the challenges and solutions relating to test oracles for AI-based systems" },
    { id: "AI-4.2.1", level: "K2", text: "Explain how generative AI can be tested" },
    { id: "AI-4.2.2", level: "K3", text: "Implement red teaming for GenAI systems" },
    { id: "HO-4.2.3", level: "H2", text: "Hands-on: Apply exploratory testing to an LLM performing boundary value analysis" },
    { id: "AI-4.3.1", level: "K2", text: "Summarize the test levels used to develop machine learning systems" },
    { id: "AI-4.3.2", level: "K2", text: "Explain how risk-based testing is applied to machine learning systems" },
  ],
  sections: {
    "4.1.1": {
      objective: "AI-4.1.1",
      body: [
        { type: "p", text: "Locked AI-based systems do not change behavior after deployment — e.g. a deployed DNN whose weights and biases are fixed and only change through retraining. Safety-related self-driving functions (lane detection, traffic-sign recognition) typically use locked systems. Adaptive AI-based systems — e.g. reinforcement learning systems — change behavior post-deployment, driven by a reward function or a new operational environment, in ways that cannot be predicted in advance (e.g. e-commerce recommendations evolving with user behavior)." },
        { type: "p", text: "Many GenAI systems (LLM chatbots) sit in between: locked at runtime but updated periodically. In practice AI systems span a continuum from fully deterministic locked systems to deliberately non-deterministic, self-learning ones." },
        { type: "list", intro: "Testability comparison:", items: [
          "Locked systems are far easier to test — largely deterministic, expected results don't change. An UPDATED locked system counts as a NEW system requiring a fresh round of testing.",
          "Even locked systems aren't perfectly deterministic: large neural networks can behave non-deterministically due to floating-point precision limits and hardware execution variations (parallel computation, GPUs).",
          "Adaptive systems can be rigorously tested pre-deployment (simulating environmental changes, testing the learning mechanism, testing adaptation in controlled scenarios) — but the system may change its behavior DURING or AS A RESULT OF testing.",
          "Unpredictable new behaviors can't be tested in advance. Mitigations: an automated test suite over core functionality re-run at significant changes to verify adaptations are safe, plus threshold checks that performance hasn't degraded (triggered by changes or ongoing monitoring).",
        ]},
      ],
    },
    "4.1.2": {
      objective: "AI-4.1.2",
      body: [
        { type: "p", text: "AI-based systems are data-driven and probabilistic, so single-example testing can't establish quality. Four reasons a statistical approach is needed:" },
        { type: "list", items: [
          "Non-determinism — same inputs may not yield the same outputs (stochastic architecture elements, probabilistic mappings learned from data). One misclassified cat says nothing about overall AI functional correctness; the test suite must be large enough for statistically significant results.",
          "Distributional performance evaluation — training distributions never exactly match the operational environment; a statistically significant sample of scenarios from relevant operational data distributions must be tested to capture real-world variability.",
          "Handling uncertainty and bias — models produce confident-but-wrong predictions and inherit data biases. Statistical testing quantifies accuracy, fairness, and AI robustness via confidence intervals, hypothesis testing, and error analysis.",
          "Regulatory and safety context — regulated industries (healthcare, transport) demand demonstrating safety/fairness thresholds with high confidence across broad scenario ranges, not just specific examples.",
        ]},
        { type: "note", text: "The statistical approach to testing probabilistic ML systems is detailed in 6.1.3." },
      ],
    },
    "4.1.3": {
      objective: "AI-4.1.3",
      body: [
        { type: "p", text: "The test oracle problem: determining whether the system's output is correct for a given input. Conventional software has well-defined specifications; AI often doesn't." },
        { type: "list", intro: "Why oracles are hard for AI (challenges):", items: [
          "Probabilistic & non-deterministic nature — outputs vary even for identical inputs; pass/fail oracles need thresholds or tolerance ranges.",
          "Exploratory development & incomplete specifications — requirements evolve, are incomplete, or missing.",
          "Complexity of tasks — outputs too complex for practical human verification.",
          "Subjectivity of behavior — 'correct' can be a matter of opinion (e.g. virtual assistant answers).",
          "Self-learning systems — the definition of 'correct' itself evolves post-deployment; initial expected results quickly become invalid.",
        ]},
        { type: "list", intro: "Solutions:", items: [
          "Defining output boundaries — agreed acceptable ranges, distributions, limits, tolerances (e.g. autonomous car stops within a maximum distance).",
          "Defining environmental boundaries — pin down test environment conditions (lighting, temperature, network latency) so outputs are predictable and repeatable.",
          "Expert consultation — domain experts define expected results (but may disagree or be fallible).",
          "Specialized testing — A/B testing, back-to-back testing, metamorphic testing: compare behaviors or verify properties without explicit expected outputs per case.",
          "Proxy oracles — secondary systems/models (including other AI) validate outputs, e.g. a proxy model trained on labeled data predicts for unlabeled tests.",
        ]},
      ],
    },
    "4.2.1": {
      objective: "AI-4.2.1",
      body: [
        { type: "p", text: "Testing GenAI means evaluating correctness, coherence, and creativity — including originality and novelty — plus verifying functional and non-functional requirements. Since output spans text, images, video, and audio, strategies must adapt per content type." },
        { type: "p", text: "The common approach is black-box testing: feed varied inputs (prompts, images, partial data) and assess results for clarity, originality, and adherence to domain-specific rules — manually or automated. Especially useful for end-user applications (chatbots, design tools) where satisfaction depends on usefulness and plausibility of the content." },
        { type: "note", title: "Input explosion problem", text: "GenAI inputs are highly diverse and hard to control: optional system prompts + user prompts carrying enormous disparate data, API access, tunable parameters (temperature, maximum tokens), and the context window retaining earlier conversation — all affect the output." },
        { type: "p", text: "Output assessment often needs manual review against qualitative evaluation criteria from the requirements. Alternatively a second GenAI system can judge automatically (e.g. an image recognition system checks a generated image) — use carefully, as the judge may reproduce similar biases or errors." },
        { type: "p", text: "Non-functional testing matters as much as functional: resource utilization during inference AND training (CPU/GPU usage, memory, network bandwidth, response times) for efficiency and cost-effectiveness. Benchmark suites — curated datasets with associated tasks — give standardized, reproducible comparison across models for language understanding, reasoning, and coding." },
      ],
    },
    "4.2.2": {
      objective: "AI-4.2.2",
      body: [
        { type: "p", text: "Red teaming (RT) is a systematic, often black-box fault attack that probes an AI-based system to find harmful capabilities in its outputs — privacy violations, racist views, CBRN guidance. Findings are used to update and strengthen the system. Inspired by military wargaming and NASA tiger teams. RT applies to any AI system but is critical for GenAI because the vast input/output space creates an extensive 'attack space'. It usually covers the end-to-end system but can target just the model." },
        { type: "p", text: "Scope is broader than security: reliability, privacy, fairness, bias, misinformation. RT is increasingly a regulatory expectation (EU AI Act). As an adaptive, dynamic evaluation — prompts updated immediately in response to outputs — it complements static benchmarking by testing extreme and unexpected conditions." },
        { type: "p", text: "Security RT hunts vulnerabilities to external attack, including AI-specific vectors like indirect prompt injection and malicious content hidden in RAG documents. Safety RT instead looks for harmful outputs under ORDINARY use (e.g. unsafe medical advice) with no adversarial user intent." },
        { type: "list", intro: "The K3 procedure — RT is done before deployment, after initial internal quality assessments, typically via multi-turn interactive prompting (15–20 turns):", items: [
          "1. Assemble a diverse team of testers covering a wide range of perspectives and attack vectors.",
          "2. Provide access to the AI-based system in a safe test environment.",
          "3. Prompt the system to identify vulnerabilities — open-ended exploration or checklists.",
          "4. Analyze the identified failures to understand threats.",
          "5. Create datasets from these threats to support mitigations and system improvements.",
        ]},
        { type: "p", text: "Scaling coverage beyond small expert teams: crowd-sourced prompt generation (manual), LLM-generated attack prompts checked by another LLM (automated), or hybrid combining human creativity with automation's scalability." },
        { type: "note", title: "Red vs. Blue", text: "Red teaming = proactive, pre-deployment attack-based discovery. Blue teaming = ongoing real-time defensive monitoring and input filtering of the operational system. RT insights feed Blue-team monitors and filters." },
      ],
    },
    "4.3.1": {
      objective: "AI-4.3.1",
      body: [
        { type: "p", text: "ML systems need two specialized test levels for ML-specific risks, on top of the conventional levels for everything else." },
        { type: "table", headers: ["Test level", "Focus for an ML system"], rows: [
          ["Input data testing (NEW — Ch. 5)", "Training data used to train the model AND production data used operationally to generate predictions"],
          ["ML model testing (NEW — Ch. 6)", "The ML models themselves — the ultimate output of the ML workflow"],
          ["Component testing", "Non-AI components: user interface, data pipeline, communication components"],
          ["Component integration testing", "Data pipeline inputs received correctly by the model; predictions exchanged/used correctly by system components. AIaaS → API testing of the service happens here"],
          ["System testing", "Confirmation that ML functional performance survives embedding in the complete system — especially after deliberate model changes (e.g. DNN compression). Plus non-functional testing (e.g. prediction latency of the whole system)"],
          ["System integration testing", "Interfaces and data exchange with external systems/services, in an operationally representative environment"],
          ["Acceptance testing", "For AIaaS: suitability of the service for the intended system; whether ML functional performance criteria are achieved"],
        ]},
      ],
    },
    "4.3.2": {
      objective: "AI-4.3.2",
      body: [
        { type: "p", text: "Risk-based testing applies to every system, AI or not — and most regulatory frameworks require a risk-based approach for AI-based systems. AI's unique risks change what testing looks like. There is no standard ML risk categorization; the syllabus offers two." },
        { type: "list", intro: "Categorization 1 — by ML workflow area:", items: [
          "Development (Ch. 7) — algorithm, model development, framework. Project risks: sub-optimal algorithm selection, poor evaluation-approach selection, framework security vulnerabilities.",
          "Input data (Ch. 5) — training data and operational production data. Product risks: biased training data, data-pipeline defects, unrepresentative training data.",
          "Model (Ch. 6) — the generated model. Product risks: missing required ML functional performance, overfitting, susceptibility to adversarial examples.",
        ]},
        { type: "p", text: "Categorization 2 — by the ISO/IEC 25059 quality characteristics (Chapter 2). Testing forms designed for these risks include data pipeline testing, adversarial testing, and review of algorithm/model suitability — covered in Chapters 5, 6, and 7." },
        { type: "note", text: "ML risks split into PROJECT risks (about developing the MLS) and PRODUCT risks (about the MLS itself) — e.g. sub-optimal algorithm selection is a project risk; a biased model is a product risk." },
      ],
    },
  },
};
