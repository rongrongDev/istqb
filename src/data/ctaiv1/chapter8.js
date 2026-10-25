// CT-AI v1.0 — Chapter 8: Testing AI-Specific Quality Characteristics
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 8,
  title: 'Testing AI-Specific Quality Characteristics',
  time: '150 min',
  color: '#B45309',
  bg: '#FFFBEB',
  overview: 'Heavily exam-weighted. Section 8.8 is K4 (analyze acceptance criteria). Section 8.6 (LIME method for explainability) and 8.7 (test oracle problem) are uniquely AI-specific and appear frequently. Self-learning challenges (8.1) and bias testing (8.3) are dense but important. 8.2, 8.4, and 8.5 can be read more lightly.',
  sections: [
    {
      id: '8.1',
      title: 'Challenges Testing Self-Learning Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Seven key challenges: (1) Unexpected change — system modifies itself in ways not reflected in original requirements; tests that once passed may fail after the system changes. Solution: design tests that remain relevant as the system evolves, write new tests based on new observed behaviors.',
        "(2) Complex acceptance criteria — defining what 'improvement' means quantitatively (e.g., minimum 10% improvement if environmental factor F changes by more than Y). Solution: specify complex acceptance criteria up front + maintain a current baseline.",
        '(3) Insufficient testing time — fast-adapting systems may not give testers time for manual testing after each change. Solution: continuous automated testing.',
        '(4) Resource requirements — specify limits on processing time and memory that self-learning may use. Link to measurable functional improvement.',
        '(5) Insufficient specifications of operational environment — full range of environmental inputs (including poisoning attacks) may be hard to predict.',
        '(6) Complex test environment — mimicking all high-risk operational changes requires tools (e.g., fault injection).',
        "(7) Undesirable behavior modifications — repeated tests may 'train' the self-learning system to respond better to those tests, distorting its long-term behavior. Design tests carefully to avoid this."
      ]
    },
    {
      id: '8.2',
      title: 'Testing Autonomous AI-Based Systems',
      level: 'K2',
      type: 'skim',
      summary: 'Autonomous systems must know when to operate alone vs. hand back control. Testing requires: (1) Does it request human intervention when it should? (2) Does it request intervention after a specified autonomous period? (3) Does it UNNECESSARILY request intervention when it should keep going? Boundary value analysis on the operational environment parameters is useful for generating these test scenarios.'
    },
    {
      id: '8.3',
      title: 'Testing for Algorithmic, Sample and Inappropriate Bias',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Testing with an independent dataset can often detect bias — but identifying all bias-causing data is difficult because ML can use combinations of seemingly unrelated features to create bias.',
        'Approach for algorithmic bias: analyze the model during training, evaluation, and tuning to identify if the algorithm disproportionately weights certain data.',
        'Approach for sample bias: review the source of training data and acquisition processes to identify representativeness issues. Review pre-processing steps that may introduce sample bias.',
        'Approach for inappropriate bias: measure how changes in inputs affect outputs across a large number of interactions, examining results grouped by potentially biased attributes. Similar to LIME method (Section 8.6). Can be done in production AND pre-release.',
        'Obtain external demographic data (e.g., census data) to correlate with system outputs and detect hidden bias on inferred variables — even variables not explicitly in the input data.'
      ]
    },
    {
      id: '8.4',
      title: 'Challenges Testing Probabilistic and Non-Deterministic Systems',
      level: 'K2',
      type: 'skim',
      summary: "Three challenges: (1) Multiple valid outcomes for the same inputs — makes expected result definition hard, complicates confirmation testing, regression testing, reproducibility, and automation. (2) Testers need deeper behavioral knowledge to define reasonable checks (e.g., 'within 2% of optimal' rather than an exact value). (3) Must run tests multiple times to generate statistically valid results — single test runs are insufficient."
    },
    {
      id: '8.5',
      title: 'Challenges Testing Complex AI-Based Systems',
      level: 'K2',
      type: 'skim',
      summary: "AI is used for tasks too complex for humans to perform — so testers can't manually derive expected results (test oracle problem). AI-generated internal structures are too complex to be useful for white-box testing. Complexity increases with probabilistic + non-deterministic nature. Multi-component AI systems (e.g., face detection model + face recognition model interacting) multiply the complexity and the challenge of identifying all risks."
    },
    {
      id: '8.6',
      title: 'Testing Transparency, Interpretability and Explainability',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Transparency testing: compare documented information (algorithm, training data) against the actual implementation — how closely do they match?',
        'Explainability testing: dynamically test the model by applying perturbations to test data. Methods exist for quantifying and visualizing explainability. Exploratory testing helps understand input-output relationships.',
        'LIME (Local Interpretable Model-Agnostic Explanations): key method to know. Injects input perturbations dynamically and analyzes outputs to show the relationship between inputs and outputs. Model-agnostic (works with any model). Limitation: provides POSSIBLE reasons for outputs, not definitive reasons. Not applicable to all algorithm types.',
        'Interpretability and explainability testing is challenging because: different stakeholders have different understanding needs; measuring understanding requires user surveys and questionnaires; identifying a representative stakeholder profile is difficult.'
      ]
    },
    {
      id: '8.7',
      title: 'Test Oracles for AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Test oracle = source used to determine the expected result. Test oracle problem = difficulty in establishing what the correct expected result is.',
        "AI oracle challenges: (1) Complex/non-deterministic systems make 'ground truth' hard to know. (2) Self-learning systems may change their behavior, requiring frequent updates to expected results. (3) Correctness may be subjective (e.g., virtual assistants — different users, different expectations).",
        'Where possible: define results with limits/tolerances (e.g., autonomous car stops within X meters). Consult domain experts — but be aware: experts vary in competence, may disagree, may not approve of automation of their judgement (use double-blind evaluation), and may caveat answers in ways AI cannot.',
        'Techniques that alleviate the oracle problem: A/B testing (Section 9.4), Back-to-back testing (Section 9.3), Metamorphic testing (Section 9.5).'
      ]
    },
    {
      id: '8.8',
      title: 'Test Objectives and Acceptance Criteria',
      level: 'K4',
      type: 'deep',
      deepPoints: [
        'K4 = Analyze — given an AI system, select appropriate acceptance criteria for each AI-specific quality characteristic:',
        'Adaptability: (a) System still meets requirements after adapting to environmental change. (b) Time to adapt. (c) Resources used during adaptation.',
        'Flexibility: (a) System copes in contexts outside initial spec — automated regression testing in changed environment. (b) Time and resources needed.',
        'Evolution: (a) How well system learns from experience. (b) How well it copes with changing data profiles (concept drift).',
        "Autonomy: (a) Response when pushed outside autonomous operational envelope. (b) Cannot be 'persuaded' to request human intervention unnecessarily.",
        'Transparency/Interpretability/Explainability: (a) Transparency — ease of accessing algorithm and dataset. (b) Interpretability/Explainability — user questionnaires.',
        'Bias: Independent bias-free test suite, expert reviewers, external data (census) for inferred variables.',
        'Ethics: Check against EC Assessment List for Trustworthy AI.',
        'Probabilistic/Non-deterministic: Cannot use precise acceptance criteria — system may return slightly different results for the same tests.',
        'Side-effects: Identify potentially harmful side-effects, design tests to trigger them.',
        'Reward Hacking: Use independent tests that measure success differently than the agent does.',
        'Safety: Test in virtual environment — try to force the system to cause harm.'
      ]
    }
  ]
};
