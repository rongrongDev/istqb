// CT-AI v2.0 — Chapter 6 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 54-62.

export default {
  intro:
    "ML model testing is the second ML-specific test level: addressing functional risks (bias, overfitting, adversarial vulnerabilities), non-functional risks (AI robustness, performance efficiency), and deployment risks. This 225-minute chapter carries the second-largest exam weight and includes the K3 metamorphic-testing objective — you must be able to DERIVE test cases from metamorphic relations.",
  keywords: {
    general: [
      "A/B testing",
      "adversarial testing",
      "back-to-back testing",
      "concept drift",
      "data drift",
      "drift testing",
      "metamorphic testing",
      "ML functional performance",
      "ML model testing",
      "review",
    ],
    aiSpecific: ["overfitting", "underfitting"],
  },
  objectives: [
    { id: "AI-6.1.1", level: "K2", text: "Give examples of test approaches used for risk mitigation of ML models" },
    { id: "AI-6.1.2", level: "K2", text: "Explain the purpose and focus of reviewing ML model documentation" },
    { id: "AI-6.1.3", level: "K2", text: "Explain how ML functional performance testing is carried out for probabilistic machine learning systems" },
    { id: "AI-6.1.4", level: "K2", text: "Summarize adversarial testing of machine learning systems" },
    { id: "AI-6.1.5", level: "K3", text: "Use metamorphic testing to derive test cases for a given scenario" },
    { id: "HO-6.1.6", level: "H2", text: "Hands-on: Apply metamorphic testing" },
    { id: "AI-6.1.7", level: "K2", text: "Explain how drift testing is used on operational machine learning systems" },
    { id: "AI-6.1.8", level: "K2", text: "Explain how overfitting and underfitting are detected by testing" },
    { id: "AI-6.1.9", level: "K2", text: "Explain how A/B testing is used in the context of machine learning systems" },
    { id: "AI-6.1.10", level: "K2", text: "Explain how back-to-back testing is used in the context of machine learning systems" },
  ],
  sections: {
    "6.1.1": {
      objective: "AI-6.1.1",
      body: [
        { type: "p", text: "As with input data (5.1.1), each ML model risk maps to mitigating test approaches:" },
        { type: "table", headers: ["Potential risk", "Risk mitigation"], rows: [
          ["Biased or unfair model", "Testing for bias (5.1.2)"],
          ["Unethical model", "Ethical system testing"],
          ["Adversarial examples", "Adversarial testing (6.1.4)"],
          ["Overfitted / underfitted model", "Testing for overfitting / underfitting (6.1.8)"],
          ["Unacceptable data or concept drift", "Drift testing (6.1.7)"],
          ["Model causes side-effects", "Side-effects testing"],
          ["Reward hacking", "Reward hacking testing"],
          ["Model API defect", "API testing (7.1.2)"],
          ["Missing required ML performance (accuracy, recall…)", "ML functional performance testing (6.1.3)"],
          ["Functional incorrectness · non-functional defects", "Metamorphic testing (6.1.5)"],
          ["Test oracle problem", "Metamorphic testing (6.1.5) · back-to-back testing (6.1.10) · A/B testing (6.1.9)"],
          ["Poor system requirements", "Requirements review · red teaming (4.2.2) · exploratory testing"],
          ["Lack of AI robustness to unexpected inputs", "Adversarial testing (6.1.4) · fuzz testing"],
          ["Inadequate performance efficiency", "Performance testing"],
          ["Poor model documentation", "Model documentation review (6.1.2)"],
          ["Model updates introduce defects", "Back-to-back testing (6.1.10)"],
          ["Model updates decrease ML functional performance", "A/B testing (6.1.9)"],
          ["Updated model fails immediately on deployment", "Smoke testing"],
          ["Updated model causes regression", "Regression testing"],
          ["Security/safety vulnerabilities · privacy violations · harmful outputs", "Red teaming (4.2.2)"],
        ]},
      ],
    },
    "6.1.2": {
      objective: "AI-6.1.2",
      body: [
        { type: "p", text: "Documentation is critical for ML models — machine-generated 'code' can't be inspected meaningfully, models are black boxes, they depend on data, and they're updated frequently. Documentation becomes the main tool for developers, testers, and regulators to understand, evaluate, and trust the system; transparency enables tracing behavior, decision logic, and data lineage through the AI lifecycle. The EU AI Act makes documentation a compliance matter: for high-risk systems, passing a documentation audit is often a deployment prerequisite." },
        { type: "p", text: "Standard frameworks: Model Cards (concise overview of intended uses, evaluation results, ethical considerations) and Datasheets for Datasets (standardized dataset description: motivation, composition, collection process, uses)." },
        { type: "list", intro: "Comprehensive model documentation checklist (usable by developers and testers):", items: [
          "General — identifiers, description, developer, version, date, contact, license, hardware needs.",
          "Design — assumptions, technical decisions, ML algorithm.",
          "Usage — intended purpose, primary/secondary uses, users, self-learning approach, bias, ethics, safety, transparency, thresholds, platform, data drift, concept drift.",
          "Datasets — features, source, collection, availability, preprocessing, use, content, labels, size, privacy, security, bias/fairness, restrictions.",
          "Testing — test dataset details, independence of testing, results, activities (functional, adversarial…).",
          "Functional — measures, validation dataset, thresholds, actual performance.",
          "Non-functional — scalability, reliability, availability, performance efficiency (latency, resource utilization), maintainability, AI robustness.",
          "Operational — deployment plan/environment, computational resources, monitoring metrics/alerts, retraining strategy, update/rollback plan, deprecation plan, security (adversarial risks), explainability methods.",
        ]},
        { type: "list", intro: "Review goals:", items: [
          "Identify missing information, inaccuracies, inconsistencies.",
          "Improve clarity and readability.",
          "Enhance maintainability by finding where documentation needs improvement.",
          "Provide sufficient information for test and deployment activities.",
          "Verify regulatory requirements are met.",
        ]},
      ],
    },
    "6.1.3": {
      objective: "AI-6.1.3",
      body: [
        { type: "p", text: "ML functional performance testing measures accuracy, precision, recall, F1 (3.3) against acceptance criteria — statistically, not as a single pass/fail, because of ML's non-determinism (4.1.2). Precondition: acceptance criteria stated in statistical terms — a metric plus a margin of error (MoE) plus a confidence level (CL), which together determine the minimum number of tests." },
        { type: "list", intro: "As the number of tests increases, two options:", items: [
          "Fix the CL → the MoE decreases → the result becomes more PRECISE.",
          "Fix the MoE → the CL increases → the result becomes more CERTAIN.",
        ]},
        { type: "example", title: "Syllabus worked example", text: "Criterion: '98% accuracy with MoE ±4% at 95% CL' → 601 test cases required (conservative sample-size formula assuming worst-case variance); at least 589 of 601 must pass to hit 98%. If observed accuracy is 98% after all 601, the actual MoE is narrower (~±1.1%) since variance shrinks at high accuracy. Sequential testing allows EARLY STOPPING: if observed accuracy stays ≥98%, the ±4% MoE at 95% CL is already reached after ~170 tests. Safety-critical example: '99% reliability with 95% confidence' → 299 test cases, ALL of which must pass." },
        { type: "note", text: "The syllabus states you will NOT be asked to derive or compute these statistical formulas in the exam — understand the concepts (MoE, CL, sample size, early stopping), not the math." },
        { type: "p", text: "Requirements: a large test dataset completely independent of training and validation data, representative of the operational input domain (5.1.4); execution in an ML framework capable of statistical analysis; results reported with statistical confidence — e.g. 'accuracy of 94% ±4% at the 95% CL' — so stakeholders can judge deployability from the expected operational range." },
      ],
    },
    "6.1.4": {
      objective: "AI-6.1.4",
      body: [
        { type: "p", text: "Adversarial testing deliberately feeds the model input perturbations, often imperceptible to humans, designed to cause incorrect predictions. Successful ones are adversarial examples — usually slightly modified legitimate inputs that get misclassified. Finding these vulnerabilities lets developers add safeguards and improve robustness against both accidental adversarial examples and adversarial attacks (malicious use). Generating effective adversarial inputs is technically complex, and attack techniques keep evolving." },
        { type: "list", intro: "Approaches:", items: [
          "Black-box — no knowledge of internals. Either build an EQUIVALENT model whose internals are known, craft adversarial inputs from it, and rely on TRANSFERABILITY (equivalent models share classification boundaries) to attack the original; or brute-force with vast numbers of tests hoping some coincide with adversarial examples.",
          "White-box — knowing the architecture, parameters, and training process makes crafting adversarial examples easier.",
          "Manual (hand-crafted specific examples) or automated (algorithms generating large numbers of variations).",
        ]},
      ],
    },
    "6.1.5": {
      objective: "AI-6.1.5",
      body: [
        { type: "p", text: "Metamorphic testing (MT) derives new (follow-up) test cases from a previously PASSED source test case, using a metamorphic relation (MR). The MR is based on a property of a required function and describes how a change in the inputs is reflected in the expected results. MT works for functional and non-functional testing, and shines when an affordable test oracle is unavailable — big-data ML systems, or models whose prediction logic is unclear. Used in practice for image recognition, search engines, route optimization, voice recognition." },
        { type: "list", intro: "Choose MT over oracle-based testing when:", items: [
          "No reliable expected outputs exist (model opacity, data scale).",
          "The system is a black box.",
          "Relational properties — not absolute values — suffice for confidence.",
        ]},
        { type: "list", intro: "MR property types you verify:", items: [
          "Consistency — outputs align across related inputs.",
          "Monotonicity — outputs change directionally with input.",
          "Invariance — outputs remain stable under perturbations.",
        ]},
        { type: "example", title: "K3 worked derivation", text: "Scenario: a risk-assessment MLS predicts age at death. Source test case (passed): non-smoker profile → predicts 82 years. MR (monotonicity): increasing cigarettes smoked must DECREASE the prediction. Follow-up test cases: same profile with 10/day and 20/day → expected results: prediction(20/day) < prediction(10/day) < 82. The follow-up expectations are RELATIONS, not absolute values. Invariance example for an image classifier: slightly rotating or brightening a cat photo must not change the 'cat' classification — each perturbation is a follow-up test whose expected result equals the source result." },
        { type: "p", text: "MRs come from domain knowledge, requirements, or domain properties (e.g. laws of physics). Validate MRs by expert review, running them on reference models, and checking edge-case coverage." },
        { type: "note", title: "Limits", text: "Incorrect MRs (overlooked variable interactions) or incomplete MR sets give false confidence. MT detects relational flaws, not all absolute errors — combine with other techniques." },
      ],
    },
    "6.1.7": {
      objective: "AI-6.1.7",
      body: [
        { type: "table", headers: ["Drift type", "What changes", "Example"], rows: [
          ["Data drift", "Statistical properties of operational INPUT data change over time (user-behavior shifts, seasonality)", "A spam filter meets new phishing attack types that didn't exist during training"],
          ["Concept drift", "The RELATIONSHIP between inputs and correct outputs changes — learned patterns no longer reflect reality", "New financial regulations reclassify a previously 'low-risk' transaction type as 'high-risk'; decision boundaries become outdated and accuracy declines"],
        ]},
        { type: "list", intro: "Two testing approaches:", items: [
          "Dynamic drift testing — needs CURRENT GROUND TRUTH from user feedback; compare it to model output and check the difference against a threshold. Feedback can be direct (user rates a film recommendation) or indirect (derived from which films the user actually watched).",
          "Static drift testing — no ground truth needed; compare statistical properties of input and predicted-output distributions with a test like Kolmogorov-Smirnov. Significant difference in either distribution indicates drift.",
        ]},
      ],
    },
    "6.1.8": {
      objective: "AI-6.1.8",
      body: [
        { type: "p", text: "Three possible fitting outcomes: overfitting, underfitting, and 'right-fitting'. Test for the first two during training, evaluation, and tuning." },
        { type: "table", headers: ["", "Overfitting", "Underfitting"], rows: [
          ["What happens", "Model learns training data TOO well — captures noise instead of the underlying pattern", "Model too simple for the data's structure, or training data lacks features reflecting the input-output relationship"],
          ["Symptom", "Poor generalization: performs significantly worse on the test dataset than on the validation dataset", "Poor ML functional performance on BOTH training and validation datasets (consistently low accuracy/precision/recall/F1)"],
          ["How to detect", "Evaluate on a separate test dataset never used in training — include less common examples unlikely to have been in training", "Metrics consistently low on both sets; learning curves where training and validation errors stay high and close together without improving as training progresses"],
        ]},
        { type: "p", text: "Summary: detection combines evaluating ML functional performance on validation data, analyzing the metrics, and examining learning curves." },
      ],
    },
    "6.1.9": {
      objective: "AI-6.1.9",
      body: [
        { type: "p", text: "A/B testing compares the responses of two variants (A and B) to the same inputs to determine which is better. It's a statistical approach — multiple test runs compared with techniques like the t-test, z-test, chi-squared test, or Mann-Whitney U test. Classic example: emailing promotional offer A to half a marketing list and B to the other half. E-commerce and web companies routinely A/B test in production by routing different consumers to different functionality." },
        { type: "list", intro: "In the ML context:", items: [
          "It's one answer to the test oracle problem — the EXISTING system acts as a partial oracle.",
          "It does NOT generate test cases and gives no test-design guidance (operational inputs are often used).",
          "For system updates: with agreed acceptance criteria (ML functional performance metrics, 3.3), A/B testing verifies the updated variant performs at least as well as the previous one.",
          "Scales from simple classifiers to complex systems — e.g. compare average commute times of two smart-city transport routing variants on consecutive weeks.",
          "For self-learning systems: when the system changes itself, automated tests run and characteristics are compared before/after; improvements are accepted, otherwise the system reverts.",
        ]},
      ],
    },
    "6.1.10": {
      objective: "AI-6.1.10",
      body: [
        { type: "p", text: "Back-to-back testing solves the test oracle problem with a PSEUDO-ORACLE: an alternative version of the system receives the same inputs, and outputs are compared. The pseudo-oracle can be an existing system or one built specifically for testing (at a cost)." },
        { type: "list", intro: "Key points:", items: [
          "Pseudo-oracle and test object should NOT share software components — shared defects would make both wrong in the same way. This matters because reusable open-source AI components are everywhere. Ideally a different, independent team builds it with different frameworks, algorithms, or settings; conventional software can serve if it solves the same problem.",
          "For functional back-to-back testing the pseudo-oracle only needs matching FUNCTIONAL behavior — it can skip the non-functional requirements, making it cheaper to build.",
          "Only test inputs are needed, not expected results. Inputs can come from regression suites or be auto-generated from training data — enabling very large automated runs.",
          "Especially valuable when migrating an MLS to a new environment (development → production) and comparing results across environments; can reveal subtle behavioral defects via edge cases and unusual inputs.",
        ]},
        { type: "note", title: "A/B vs back-to-back", text: "A/B testing compares two variants of the SAME MLS using ML functional performance metrics and statistics to pick the better one. Back-to-back testing compares against a pseudo-oracle to DETECT DEFECTS." },
      ],
    },
  },
};
