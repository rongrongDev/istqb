// CT-AI v2.0 — Chapter 6: Model Testing for Machine Learning Systems
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 6,
  title: 'Model Testing for Machine Learning Systems',
  time: '225 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: 'Second largest exam chapter. Metamorphic Testing (6.1.5) is K3 Apply — must practice deriving test cases. Statistical performance testing (6.1.3) requires understanding MoE and CL conceptually. Adversarial testing (6.1.4) and drift testing (6.1.7) are uniquely AI-specific. A/B and back-to-back testing (6.1.9, 6.1.10) are well-known concepts — skim the AI-specific application.',
  sections: [
    {
      id: '6.1.1',
      title: 'ML Model Risks and Mitigations',
      level: 'K2',
      type: 'skim',
      summary: 'Reference risk table — know the key mappings: Biased/unfair model → Testing for bias (5.1.2). Adversarial examples → Adversarial testing (6.1.4). Overfitting → Testing for overfitting (6.1.8). Underfitting → Testing for underfitting (6.1.8). Unacceptable drift (data or concept) → Drift testing (6.1.7). Failure to achieve ML performance → ML functional performance testing (6.1.3). Test oracle problem → Metamorphic testing (6.1.5), Back-to-back (6.1.10), A/B testing (6.1.9). Poor documentation → Model documentation review (6.1.2). Harmful/undesirable outputs → Red teaming (4.2.2). Model API defects → API testing (7.1.2).',
      examInsights: [
        'Q30 MATCHING: ML functional performance testing → predictions INACCURATE in some cases (C). Testing for bias → model performs differently for DIFFERENT DEMOGRAPHIC GROUPS (A). Adversarial testing → SLIGHTLY MODIFIED INPUTS cause different responses (B). Drift testing → ACCURACY DECREASED SINCE DEPLOYMENT (D).',
        'Q30 KEY: 1C-2A-3B-4D = option (b).',
        "MNEMONIC for adversarial testing: 'slightly perturbed input → unexpected output.' For drift: 'performance changes OVER TIME in production.'"
      ]
    },
    {
      id: '6.1.2',
      title: 'ML Model Documentation and Review',
      level: 'K2',
      type: 'skim',
      summary: "ML model documentation is critical because model internals aren't directly inspectable — documentation is the PRIMARY TOOL for testers, developers, and regulators. Required for EU AI Act transparency obligations. High-risk systems must pass documentation audits before deployment. Two key frameworks: Model Cards (concise overview of intended uses, evaluation results, ethical considerations) and Datasheets for Datasets (standardized format for dataset motivation, composition, collection, and uses). Comprehensive documentation covers: General info, Design (assumptions, ML algorithm), Usage (intended purpose, bias, ethics, safety, drift), Datasets (features, source, labels, privacy, fairness), Testing results, Functional/Non-functional performance, Operational deployment/monitoring/rollback plan.",
      examInsights: [
        "Q31 KEY (correct answer a): Information about SPEED OF MODEL PREDICTION is part of model documentation — it's a non-functional requirement/performance characteristic.",
        "Q31 TRAP — Option (b) is wrong: INTERACTION OF AI AND NON-AI COMPONENTS is NOT in scope of model documentation. It's documented at the system level.",
        'Q31 TRAP — Option (c) is wrong: model documentation SHOULD contain the SOURCE OF TRAINING DATA — bias characteristics CAN be assessed from documentation.',
        "Q31 TRAP — Option (d) is wrong: self-learning changes can only be documented by the system itself at time of update — they are NOT 'fully documented' in any proactive sense."
      ]
    },
    {
      id: '6.1.3',
      title: 'ML Functional Performance Testing of Probabilistic MLS',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'ML functional performance testing evaluates how well an ML model performs its intended functions by measuring accuracy, recall, precision, F1-score against defined acceptance criteria. For PROBABILISTIC MLS, this goes beyond a simple pass/fail to statistically measure performance.',
        "Acceptance criteria must be defined in STATISTICAL TERMS: performance metric + margin of error (MoE) + confidence level (CL). Example: '98% accuracy with MoE of ±4% at 95% CL'.",
        'Two options as number of tests increases: (a) Fix the CL → MoE decreases (result becomes more PRECISE). (b) Fix the MoE → CL increases (result becomes more CERTAIN). Note: formulae and numerical calculations are for illustration only — candidates will NOT be required to derive or compute statistical formulae in the exam.',
        "Conceptual example: '98% accuracy ±4% MoE at 95% CL' → approximately 601 test cases required. Sequential testing allows EARLY STOPPING — if accuracy stays consistently at 98%, the required MoE might be reached after only ~170 test cases.",
        "Test dataset requirements: completely INDEPENDENT of training and validation datasets. Must be a REPRESENTATIVE SAMPLE of the operational input domain. Final test report format: 'The model achieved an accuracy of 94% ±4% at the 95% CL' — NOT just '94% accuracy'."
      ],
      examInsights: [
        "Q32 SCENARIO: Previously 83% ±4% at 94% CL. Additional tests run, still 83% accuracy. What's MOST LIKELY the new result?",
        'Q32 KEY: More tests + same accuracy → MARGIN OF ERROR DECREASES with same confidence level. So ±4% becomes ±2% at 94% CL. Answer: 83% ±2% at 94% CL.',
        'Q32 TRAP — Option (b) is wrong: more tests should INCREASE confidence (or decrease MoE), NOT decrease confidence from 94% to 92%.',
        'Q32 TRAP — Option (c) is wrong: more tests should DECREASE MoE, not INCREASE it from ±4% to ±6%.',
        'RULE: More tests → smaller MoE (if CL fixed) OR higher CL (if MoE fixed). Never both get worse with more tests.'
      ]
    },
    {
      id: '6.1.4',
      title: 'Adversarial Testing of Machine Learning Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Adversarial testing = deliberately providing the model with slightly modified inputs (often IMPERCEPTIBLE to humans) designed to cause incorrect predictions. Successful adversarial inputs = adversarial examples. Goal: identify vulnerabilities so developers can incorporate safeguards and improve AI robustness.',
        'Black-Box Adversarial Testing: no knowledge of model internals. Approach 1: Create an EQUIVALENT MODEL (white-box accessible), generate adversarial examples from it using knowledge of its internals, then apply to the original model based on TRANSFERABILITY (equivalent models share classification boundaries). Approach 2: Brute force — vast number of random tests hoping some coincide with adversarial examples.',
        'White-Box Adversarial Testing: requires knowledge of model architecture, parameters, training process. Easier to craft targeted adversarial examples. Can be done manually (crafting specific examples) or automated (algorithms generating large numbers of variations).',
        'Key challenges: generating effective adversarial inputs is technically complex; staying current with evolving attack techniques is an ongoing challenge. Adversarial examples may be accidental OR deliberate adversarial attacks (malicious use).'
      ],
      examInsights: [
        'Q33 KEY (correct answer c): Adversarial testing identifies model vulnerabilities through MINIMALLY PERTURBED INPUTS that INDUCE MISCLASSIFICATION. The key is that changes are imperceptible to humans.',
        'Q33 TRAP — Option (a) is wrong: adversarial testing can be BOTH black-box AND white-box — it is NOT exclusively black-box.',
        'Q33 TRAP — Option (b) is wrong: adversarial testing can use AUTOMATED techniques — it is NOT limited to manual methods.',
        'Q33 TRAP — Option (d) confuses adversarial testing with regression testing (using previously working tests).'
      ]
    },
    {
      id: '6.1.5',
      title: 'Metamorphic Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = APPLY — you must DERIVE test cases using metamorphic testing. Definition: new (follow-up) test cases derived from a previously passed source test case by applying a METAMORPHIC RELATION (MR). MR = a property of a required function describing how a change in test inputs is reflected in expected results.',
        'Three types of metamorphic relations: Consistency (outputs align across related inputs — e.g., shuffling input order → same output). Monotonicity (outputs change directionally with input — e.g., more cigarettes smoked → lower predicted age at death). Invariance (outputs remain stable under perturbations — e.g., rotating an image should not change the recognized object).',
        'When to use MT: no reliable expected outputs exist (model opacity or data scale), system is a black box, relational properties (not absolute values) suffice for confidence, test oracle is unavailable or unaffordable.',
        'MT Process: (1) Create source test case (must have passed). (2) Derive MR from domain knowledge, requirements, or physical laws. (3) Apply MR to source test case → create follow-up test case. (4) Run both source and follow-up. (5) Verify the RELATIONSHIP between outputs holds (not the absolute values).',
        'Applications in AI: image recognition, search engines, route optimization, voice recognition. Limitations: incorrect MRs → false confidence; MT detects relational flaws but NOT all absolute errors → combine with other techniques. Validate MRs via expert review, reference models, and edge case coverage.'
      ],
      examInsights: [
        "Q34 SCENARIO: Phone search source test (3D camera=Don't care) → 5 phones: X1, M2, M3, 1000x, 1000xs. Follow-up T1 adds constraint (3D camera=YES). Follow-up T2 adds constraint (3D camera=NO).",
        'Q34 KEY — MONOTONICITY MR: Adding a more specific constraint can only REDUCE or maintain the result set. T1 (must have 3D camera) = subset of source. T2 (no 3D camera) = complementary subset. T1 + T2 must contain ALL 5 phones with NO OVERLAP.',
        'Q34 ANSWER (b): T1 = M2, M3, 1000xs (phones with 3D camera). T2 = X1, 1000x (phones without 3D camera). Combined = all 5, no overlap. ✓',
        'Q34 TRAP — Option (c): SnapHappy phones appear in BOTH T1 AND T2 = overlap = violates the MR. Option (d): T1 and T2 identical = violates MR (different constraints should give different results).',
        'Q34 TRAP — Option (a): M3 is missing from the combined T1+T2 = violates MR (all source phones must be covered).'
      ]
    },
    {
      id: '6.1.7',
      title: 'Drift Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Two types of drift — MUST distinguish them clearly: Data Drift = statistical properties of OPERATIONAL INPUT DATA change over time (input data is now significantly different from training data — e.g., spam filter encounters new phishing types not seen during training). Concept Drift = the RELATIONSHIP between input data and correct output changes over time (model's learned patterns no longer reflect current reality — e.g., new financial regulations reclassify previously 'low-risk' transactions as 'high-risk').",
        'Dynamic Drift Testing (requires user feedback = current ground truth): Direct feedback (user explicitly rates a recommendation). Indirect feedback (inferred from user behavior — e.g., films actually watched vs recommended). Compare model output against current ground truth → measure difference against a THRESHOLD. When threshold exceeded → drift detected.',
        'Static Drift Testing (does NOT require current ground truth): Compare statistical properties of INPUT DATA distributions and PREDICTED OUTPUT distributions using statistical tests (e.g., Kolmogorov-Smirnov test). Significant difference in distributions → INDICATOR that drift has occurred.',
        'After deployment: the characteristics of operational input data should be CONTINUOUSLY MONITORED for drift.'
      ],
      examInsights: [
        'Q35 SCENARIO: Customer churn prediction system — no mechanism to get user feedback or track if customers actually leave. Want to test for drift by analyzing live input data.',
        'Q35 KEY: No ground truth available → STATIC drift testing ONLY. Static drift testing detects drift by detecting changes in DATA DISTRIBUTIONS without requiring current actual results.',
        "Q35 TRAP — Option (a) is wrong: dynamic drift testing cannot 'infer' ground truth from input data statistics — it REQUIRES actual current outcomes.",
        'Q35 TRAP — Option (c) is wrong: the organization has no mechanism to compare predictions to actual results → dynamic testing is IMPOSSIBLE.',
        "Q35 TRAP — Option (d) description is wrong: static testing looks at DATA DISTRIBUTIONS, NOT 'performance metrics against an acceptance threshold' (that's dynamic testing).",
        'RULE: No ground truth = static drift testing. Have ground truth (user feedback, actual outcomes) = dynamic drift testing.'
      ]
    },
    {
      id: '6.1.8',
      title: 'Testing for Overfitting and Underfitting',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three possible outcomes: Right-fitting (ideal), Overfitting (poor generalization), Underfitting (poor performance everywhere). Testing should occur during training, evaluation, and tuning.',
        'Overfitting: model learns training data TOO WELL — captures noise rather than underlying pattern → poor generalization on new, unseen data. Detection: model performs SIGNIFICANTLY WORSE on TEST dataset than on VALIDATION dataset. Learning curves: training error low, but validation/test error high (large gap between them). Tip: test dataset should include LESS COMMON examples unlikely to have been used during training.',
        'Underfitting: model TOO SIMPLE to capture the data structure, OR training data lacks important features → poor performance on BOTH training AND validation datasets. Detection: ML functional performance metrics (accuracy, precision, recall, F1-score) CONSISTENTLY LOW on BOTH training and validation sets. Learning curves: both training and validation errors remain HIGH and CLOSE TOGETHER without significant improvement as training progresses.',
        'Summary: overfitting = gap between training and test performance. Underfitting = uniformly poor performance across all datasets.'
      ],
      examInsights: [
        "Q36 SCENARIO: Model highly accurate on VALIDATION data but performed POORLY with independent TEST data. What's MOST LIKELY?",
        'Q36 KEY: GOOD validation + POOR independent test = OVERFITTING. The model memorized training/validation patterns but failed to generalize.',
        "Q36 TRAP — Option (a) underfitting is wrong: underfitting = poor on BOTH training AND test. If validation performance is HIGH, it's not underfitting.",
        'Q36 TRAP — Option (b) concept drift is wrong: concept drift happens AFTER deployment in production over time — not during initial evaluation with a test dataset.',
        'Q36 TRAP — Option (d) low acceptance criteria is wrong: acceptance criteria should be consistent across different datasets.'
      ]
    },
    {
      id: '6.1.9',
      title: 'A/B Testing',
      level: 'K2',
      type: 'skim',
      summary: 'A/B testing compares two variants (A and B) of the same program against the SAME INPUTS to determine which is BETTER. A statistical approach — requires multiple test runs for statistically significant conclusions. Does NOT generate test cases; uses operational inputs. Addresses the test oracle problem by using the existing system as a PARTIAL ORACLE. AI uses: (1) Testing updates — verify updated variant (B) performs as well as or better than original (A) per agreed ML functional performance metrics. (2) Self-learning systems — automated A/B tests when system changes; revert if performance drops. (3) Concept drift mitigation — updated model must outperform original. Statistical techniques: t-test, z-test, chi-squared test, Mann-Whitney U test.',
      examInsights: [
        'Q37 KEY: A/B testing determines if an UPDATED VERSION of an MLS PERFORMS BETTER than the previous version.',
        'Q37 TRAP — Option (a) is wrong: A/B testing does NOT generate test cases and provides NO GUIDANCE on test design. Operational inputs are often used but not generated.',
        'Q37 TRAP — Option (b) is wrong: A/B testing is NOT about verifying component interactions within a system — it compares two versions of the whole system.',
        'Q37 TRAP — Option (d) is wrong: A/B testing does NOT analyze internal algorithm structure. It compares OUTPUTS of two variants.'
      ]
    },
    {
      id: '6.1.10',
      title: 'Back-to-Back Testing',
      level: 'K2',
      type: 'skim',
      summary: 'Uses an alternative version (PSEUDO-ORACLE) to compare outputs against the system under test. Pseudo-oracle can be: existing system, dedicated test implementation, or conventional software solving the same problem. CRITICAL: pseudo-oracle and system under test must NOT share common software components (shared defects would cause both to produce the same wrong output — a major risk given widespread open-source AI component reuse). Ideally developed by a different, independent team using different frameworks/algorithms. Only requires generating TEST INPUTS (not expected results). Key difference from A/B testing: A/B = compare two variants to find the BETTER one using statistical analysis. Back-to-back = use independent reference implementation to DETECT DEFECTS. Best value when: migrating MLS to a new environment, comparing across environments, revealing subtle edge-case defects.',
      examInsights: [
        'Q38 KEY: Best pseudo-oracle = uses a DIFFERENT ML DEVELOPMENT FRAMEWORK than the SUT. Different framework = different libraries, algorithms, implementation = MAXIMUM INDEPENDENCE = minimum shared defects.',
        'Q38 TRAP — Option (a) varying hyperparameters is wrong: minor adjustment to the SAME model = not independent enough = same underlying code = shared defects possible.',
        'Q38 TRAP — Option (b) fine-tuning is wrong: still the SAME BASE MODEL = still same architecture and framework = not sufficiently independent.',
        'Q38 TRAP — Option (c) RAG is wrong: augments the SAME underlying model = same base framework = shared defects possible.',
        'KEY PRINCIPLE: The more independent the pseudo-oracle (different team, different framework, different algorithm), the more effective back-to-back testing is.'
      ]
    }
  ]
};
