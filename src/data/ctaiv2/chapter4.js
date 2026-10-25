// CT-AI v2.0 — Chapter 4: Testing AI-Based Systems
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 4,
  title: 'Testing AI-Based Systems',
  time: '195 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: 'Critical chapter — introduces concepts that are foundational for the entire exam. The test oracle problem (4.1.3), locked vs adaptive systems (4.1.1), and the rationale for statistical testing (4.1.2) appear across many questions. Red Teaming (4.2.2) is K3 Apply — you must implement it. ML test levels (4.3.1) set up Chapters 5, 6, and 7.',
  sections: [
    {
      id: '4.1.1',
      title: 'Locked and Adaptive AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Locked AI-Based System: fixed behavior post-deployment — model weights frozen after training. Examples: DNN-based lane detection in self-driving cars, most deployed ML classifiers. An UPDATED locked system = a NEW system requiring a fresh round of testing.',
        'Adaptive AI-Based System: can adapt behavior once deployed based on reward function or new operational environment. The specific changes CANNOT be predicted in advance. Example: e-commerce recommendation system that continuously updates based on user behavior.',
        'GenAI nuance: most LLM-based chatbots are deployed as LOCKED models at runtime but updated periodically — placing them BETWEEN fully locked and fully adaptive systems.',
        "Testability difference: Locked = largely deterministic, expected results don't change → easier to test. Adaptive = behavior can change unpredictably during and BECAUSE OF testing → significantly harder.",
        "Adaptive system testing strategies: (1) Test before deployment with simulated environmental changes. (2) Build automated test suites covering core functionality; run on significant changes. (3) Test that performance hasn't degraded beyond a threshold. New behaviors cannot be predicted, so cannot be tested in advance."
      ],
      examInsights: [
        "Q17 KEY: Locked = rule-based systems with PREDEFINED, UNCHANGING rules. Spam filter with predefined rules = LOCKED. Rule-based medical diagnosis = LOCKED. These are 'locked' because the rules don't change during operation.",
        "Q17 TRAP — Systems that 'learn from real-time data,' 'update based on viewing habits,' or 'learn continuously from user' = ALL ADAPTIVE. The key word is 'learns' or 'adapts' or 'updates'.",
        "Q17 TRAP — Option (d) includes 'personal assistant that learns continuously' — that is ADAPTIVE, not locked.",
        "RULE: If a system's behavior changes during operation based on new data = ADAPTIVE. If it only changes when a developer rebuilds/retrains it = LOCKED."
      ]
    },
    {
      id: '4.1.2',
      title: 'Rationale for a Statistical Approach to Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Four reasons why statistical testing is needed for AI — know all four for the exam:',
        'Non-Determinism: AI outputs are probabilistic — same inputs may not always yield the same output. A single test result cannot accurately reflect overall model quality. Need a statistically significant test suite to overcome this uncertainty.',
        "Distributional Performance Evaluation: AI is trained on specific data distributions that don't exactly match the operational environment. Must test across a statistically significant sample of operational scenarios to assess real-world performance.",
        'Handling Uncertainty and Bias: Statistical testing allows practitioners to quantify model accuracy, fairness, and AI robustness through confidence intervals, hypothesis testing, and error analysis.',
        'Regulatory and Safety Context: In regulated industries (healthcare, transport), demonstrating that an AI system meets safety or fairness thresholds with HIGH STATISTICAL CONFIDENCE is often REQUIRED by regulators. Statistical methods support broad reliability claims.'
      ],
      examInsights: [
        'Q18 KEY: Statistical approach is needed primarily because of NON-DETERMINISTIC BEHAVIOR, not because systems are large/complex or because automation is impractical.',
        'Q18 TRAP — Option (c) is wrong: a SINGLE test case is NEVER sufficient to assess AI model quality. Statistical evaluation over many predictions is necessary.',
        'Q18 TRAP — Option (d) is wrong: a separate test dataset (from training and validation) is ESSENTIAL, not optional. Training data can NEVER replace a test dataset.',
        'EXAM SHORTCUT: If a question asks why statistical testing is needed for AI, the answer almost always comes back to NON-DETERMINISM.'
      ]
    },
    {
      id: '4.1.3',
      title: 'Test Oracles for AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Test Oracle Problem = the challenge of determining whether a test has PASSED or FAILED for a given set of test inputs and state. This is a central challenge for AI testing.',
        "Five reasons AI makes the oracle problem harder: (1) Probabilistic & Non-deterministic nature (outputs vary; need thresholds/tolerance ranges). (2) Incomplete Specifications (AI development is exploratory; requirements often missing or evolving). (3) Complexity of tasks (too complex for human manual verification). (4) Subjectivity of behavior ('correct' output is subjective — e.g., virtual assistant expectations vary by user). (5) Self-learning systems ('correct' behavior changes over time as the model updates).",
        'Solutions to the test oracle problem (all testable): Output Boundaries (define acceptable ranges, distributions, specified limits). Environmental Boundaries (specify test environment conditions — lighting, temperature, latency). Expert Consultation (domain experts define expected results — but may differ or be fallible). A/B Testing (compare two variants). Back-to-Back Testing (compare against a pseudo-oracle). Metamorphic Testing (verify relational properties without requiring exact expected outputs). Proxy Oracles (secondary AI system validates primary AI outputs).'
      ],
      examInsights: [
        "Q19 KEY: Setting a 'seed' ensures REPRODUCIBILITY for individual test runs but does NOT change the model's inherent probabilistic nature in production. It's a workaround, not a solution.",
        'Q19 TRAP — Option (a) is wrong: seed setting is independent of specification quality/completeness.',
        'Q19 TRAP — Option (c) is wrong: choosing a seed is a simple programming step that does NOT require domain experts.',
        'Q19 TRAP — Option (d) is wrong: setting a seed makes behavior MORE OBJECTIVE and repeatable for a specific run — the opposite of subjective.',
        'PRINCIPLE: The oracle problem is about not knowing what the CORRECT OUTPUT should be, not just about reproducibility.'
      ]
    },
    {
      id: '4.2.1',
      title: 'Testing Generative AI',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Testing GenAI means evaluating correctness, coherence, creativity, originality, and novelty of outputs — AND verifying functional and non-functional requirements are met. Test strategies must be adapted for text, image, video, and audio outputs.',
        "The 'Input Explosion Problem': GenAI testing challenge — inputs can be highly diverse and complex. System prompts (optional) + user prompts (can contain enormous varied data) + API parameters (temperature, max_tokens) + context window (previous conversation history) — all affect output. Controlling inputs is uniquely difficult.",
        'Evaluating outputs: Manual review based on qualitative criteria from requirements. OR a second GenAI system to automatically judge results (e.g., image recognition system checking generated images). Use the second-system approach carefully — it may reproduce the SAME BIASES or errors.',
        'Benchmark suites: standardized evaluation frameworks for consistent model comparison — measure language understanding, reasoning, coding abilities. Enable systematic, reproducible identification of improvement areas.',
        'Non-functional testing equally important: CPU/GPU usage, memory consumption, network bandwidth, response times — especially resource utilization during training AND inference.'
      ],
      examInsights: [
        "Q20 KEY: GenAI testing = manipulate DIVERSE INPUTS and PARAMETERS, then assess output's adherence to RULES — because direct input-to-output matching is NOT feasible.",
        'Q20 TRAP — Option (a) is wrong: GenAI is non-deterministic, so EXACT OUTPUT MATCHING is not a suitable test approach.',
        'Q20 TRAP — Option (c) is wrong: formal testing IS possible and necessary for GenAI. Metamorphic testing, adversarial testing, exploratory testing can all be applied.',
        'Q20 TRAP — Option (d) is wrong: AUTOMATED testing (using AI tools, image recognition systems) IS applicable to GenAI testing, not just manual review.'
      ]
    },
    {
      id: '4.2.2',
      title: 'Red Teaming',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = APPLY — you must be able to IMPLEMENT red teaming, not just describe it. Definition: a systematic, often black-box form of fault attack that probes an AI system to identify HARMFUL CAPABILITIES in its outputs. Inspired by military wargaming and NASA tiger teams.',
        "Goal: deliberately cause the system to produce harmful results — privacy violations, racist views, CBRN attack guidance, misinformation. Once found → update and strengthen the system. Especially critical for GenAI due to the vast 'attack space'.",
        '5-Step Red Teaming Process: (1) Assemble a diverse team — wide range of perspectives and attack vectors. (2) Provide access to the AI system in a safe test environment. (3) Prompt to identify vulnerabilities — open-ended exploration or checklists. (4) Analyze identified failures — understand threats. (5) Create datasets from threats to support mitigations and improvements.',
        'Core activity: interactive multi-turn prompting (e.g., 15–20 dialogue turns) to elicit policy-violating behaviors. Coverage approaches: Manual (crowd-sourced prompts), Automated (LLM generates attack prompts; another LLM checks outputs), Hybrid (best of both).',
        'Red Teaming vs Blue Teaming: Red = proactive, pre-deployment attack simulation. Blue = ongoing, post-deployment real-time defensive monitoring and input filtering. RT insights improve BT monitoring and filters. RT is becoming a REGULATORY EXPECTATION under the EU AI Act.',
        'Two RT focus areas: Security RT (vulnerabilities to malicious inputs — indirect prompt injection, RAG poisoning). Safety RT (harmful outputs under ORDINARY USE — no adversarial intent — e.g., generating unsafe medical advice).'
      ],
      examInsights: [
        'Q21 KEY: Red teaming must be done BEFORE deployment (proactively), NOT reactively after incidents. This is the most important exam rule for red teaming.',
        'Q21 KEY: Red teaming should cover BOTH security AND bias vulnerabilities simultaneously — not prioritize one over the other without good reason.',
        'Q21 TRAP — Option (a) is wrong: suggests doing bias after deployment — red teaming is always BEFORE deployment.',
        "Q21 TRAP — Option (c) is wrong: 'deploy immediately and conduct reactively' completely violates the definition of red teaming (proactive).",
        'EU AI ACT: Red teaming is becoming a regulatory expectation for high-risk AI systems under the EU AI Act.'
      ]
    },
    {
      id: '4.3.1',
      title: 'Test Levels for Machine Learning Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Two ML-SPECIFIC test levels (NEW for ML): Input Data Testing (Chapter 5 — concerned with training data quality AND production data quality). ML Model Testing (Chapter 6 — concerned with the ML model itself, the ultimate output of the ML workflow).',
        'Conventional test levels also required: Component Testing (non-AI components: UI, data pipeline, communication). Component Integration Testing (includes API testing of AIaaS services). System Testing (confirm ML functional performance is not degraded in full system; critical when model has been COMPRESSED/modified; includes non-functional testing of prediction response time). System Integration Testing (verify interfaces with external systems in representative environment). Acceptance Testing (verify AIaaS suitability for intended system and ML functional performance criteria).',
        "System Testing special case: when the ML model has been deliberately changed for deployment (e.g., DNN compressed to reduce size), system testing is ESPECIALLY IMPORTANT to verify functional performance isn't adversely affected by the change."
      ],
      examInsights: [
        'Q22 SCENARIO: ML weather prediction performs well overall but poorly for UK high-altitude areas (>1250m). Which test level should have been MORE thorough? Answer: INPUT DATA TESTING.',
        'Q22 REASONING: Poor performance for a specific geographic subset = those areas were NOT ADEQUATELY REPRESENTED in training data = data representativeness issue = INPUT DATA TESTING would catch this EARLIER.',
        'Q22 TRAP — System testing (option a) might eventually catch this defect, but Input Data testing catches it EARLIER in the process (before training).',
        'Q22 TRAP — Component integration testing (option c) focuses on interface defects between components, NOT on data characteristics.'
      ]
    },
    {
      id: '4.3.2',
      title: 'Risk-Based Testing of Machine Learning Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three ML-specific risk areas — know all three and which chapter covers each:',
        'Development Risks: concerned with ML algorithm, model development, and ML development framework. Examples: sub-optimal algorithm selection, poor evaluation approach, framework security vulnerabilities. → Chapter 7.',
        'Input Data Risks: concerned with training data and production data. Examples: biased training data, data-pipeline defects, unrepresentative training data. → Chapter 5.',
        'Model Risks: concerned with the generated ML model. Examples: failure to achieve required ML functional performance, overfitting, susceptibility to adversarial examples. → Chapter 6.',
        'Alternative classification: risks can also be categorized by ISO/IEC 25059 quality characteristics. Most regulatory frameworks require a risk-based approach to AI development and management.'
      ],
      examInsights: [
        'Q23 KEY: Security and usability risks can apply to ANY system (generic risks). Data bias and ML model performance are SPECIFIC TO ML SYSTEMS.',
        'Q23 TRAP — Option (b) is wrong: conventional systems do NOT deal with data bias — that is exclusive to ML systems.',
        'Q23 TRAP — Option (c) is wrong: BOTH conventional and ML systems should use DYNAMIC risk management (not just self-learning systems).',
        'Q23 TRAP — Option (d) is wrong: functional correctness is the primary risk for BOTH conventional and ML systems (context dependent).'
      ]
    }
  ]
};
