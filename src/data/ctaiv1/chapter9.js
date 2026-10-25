// CT-AI v1.0 — Chapter 9: Methods and Techniques for Testing AI-Based Systems
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 9,
  title: 'Methods and Techniques for Testing AI-Based Systems',
  time: '245 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: 'Longest chapter. Metamorphic testing (K3-Apply) and technique selection (9.7, K4-Analyze) are the highest exam priorities. Adversarial attacks and A/B testing are AI-specific must-knows. Pairwise and back-to-back testing are important concepts but lighter on AI-specific nuance. Experience-based testing can be reviewed more quickly.',
  sections: [
    {
      id: '9.1',
      title: 'Adversarial Attacks and Data Poisoning',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Adversarial Attack: attacker subtly perturbs valid inputs to cause the trained model to produce incorrect predictions. First noticed in spam filters. Now most associated with image classifiers — a few invisible pixel changes can completely change image classification with high confidence.',
        'Adversarial examples are transferable: an example that fools model A often fools model B trained for the same task — even with different data and different architecture.',
        'White-box adversarial attack: attacker knows the algorithm, model settings, and parameters. Generates examples by making small input perturbations and monitoring which cause large output changes.',
        'Black-box adversarial attack: attacker builds a duplicate model, uses white-box approach on the duplicate, then exploits transferability on the original. Alternatively, uses high-volume automated testing to discover adversarial examples.',
        'Adversarial testing: performing adversarial attacks intentionally to find vulnerabilities. Identified adversarial examples are added to training data so the model learns to handle them.',
        'Data Poisoning: attacker manipulates TRAINING data (not inference-time inputs). Two goals: (a) insert backdoors/trojans for future intrusions, or (b) corrupt data (e.g., mislabeled) to cause wrong predictions. Can be targeted (misclassify specific inputs) or indiscriminate (denial of service).',
        'Classic example: Microsoft Tay chatbot poisoned by harmful Twitter conversations that trained it to produce offensive responses. Detection: EDA can identify poisoned data as outliers; review data acquisition policies; A/B testing or regression testing of updated systems.'
      ]
    },
    {
      id: '9.2',
      title: 'Pairwise Testing',
      level: 'K2',
      type: 'skim',
      summary: 'AI systems often have huge parameter spaces. Exhaustive testing is impossible. Pairwise (combinatorial) testing selects a subset of parameter combinations covering all pairs of parameter values at least once — significantly reduces test cases without major loss of defect detection capability. Research shows most defects are caused by interactions involving few parameters. In AI, pairwise testing may still generate extensive suites requiring automation and virtual environments. Example: self-driving cars with road types × weather × traffic × sensor degradation levels.'
    },
    {
      id: '9.3',
      title: 'Back-to-Back Testing',
      level: 'K2',
      type: 'skim',
      summary: 'Also called differential testing. Uses an alternative version of the system as a pseudo-oracle — compare outputs of the pseudo-oracle and the SUT. Pseudo-oracle can be: an existing system, a different-team implementation, or (for ML) a different framework/algorithm/model. Critical: no shared code between the SUT and pseudo-oracle (shared defects would make both produce same wrong output). Open-source AI code reuse is a risk here. Main use case: regression testing and detecting functional defects when no formal oracle is available.'
    },
    {
      id: '9.4',
      title: 'A/B Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Compares two variants (A and B) of the same program against the same inputs to determine which is better. Statistical approach — requires multiple test runs for valid conclusions.',
        'Use cases for AI: (1) Testing updates — whenever an AI system is updated, A/B testing ensures the updated variant (B) performs as well as or better than the original (A) per agreed ML functional performance metrics. (2) Self-learning systems — when the system changes itself, run A/B tests automatically; revert if performance drops. (3) Concept drift — after retraining, B must outperform A. (4) Data poisoning detection — check that an updated system still aligns with the previous version.',
        'Key difference from back-to-back testing: A/B testing compares two VARIANTS of the same system (to find the better one). Back-to-back testing uses an independent pseudo-oracle to DETECT DEFECTS.',
        'A/B testing is a partial solution to the test oracle problem — the existing system serves as a partial oracle.'
      ]
    },
    {
      id: '9.5',
      title: 'Metamorphic Testing (MT)',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = Apply — you must apply MT to derive test cases for a given scenario.',
        'Concept: instead of defining exact expected results, define metamorphic relations (MRs) — properties of the required function that describe how a change in test inputs maps to a predictable change (or no change) in outputs.',
        'Process: (1) Create a source test case (or use any test case, even without confirmed correct output). (2) Define an MR based on a known property of the function. (3) Generate follow-up test cases by transforming the source test case per the MR. (4) Run source and follow-up tests; check that the RELATIONSHIP between outputs holds (not the absolute value).',
        'Example: for an average function. MR1: changing order of numbers → expected output stays the same. MR2: multiplying each element by 2 → expected output also doubles.',
        'When even the source test case cannot be verified as correct: MT still works by checking consistency of relationships among outputs. Example: an AI actuarial model — if cigarettes smoked increases, predicted age of death should decrease or stay the same.',
        'Research: only 3-6 diverse MRs detect over 90% of detectable defects.',
        'Key properties: suitable when test oracle is expensive or unavailable; applicable to functional and non-functional testing; easy to use with domain knowledge but no MT experience needed; applied in AI for image recognition, search engines, route optimization, voice recognition.',
        "Limitation: expected results are relative, not absolute — cannot prove correctness, only find inconsistencies. No commercial tools yet (Google's GraphicsFuzz is open-source)."
      ]
    },
    {
      id: '9.6',
      title: 'Experience-Based Testing of AI-Based Systems',
      level: 'K2',
      type: 'skim',
      summary: "Includes: Error guessing (based on knowledge of past ML failures, e.g., biased training data). Exploratory testing (iterative test design based on results — especially useful with poor specs or oracle problems). Tours (structured strategies: e.g., a 'data tour' that systematically explores data types, distributions, formats, ranges). EDA (Exploratory Data Analysis) = closely related: hypothesis-driven data exploration for patterns, outliers, trends. Google ML Test Checklist: 28 tests across Data, Model Development, ML Infrastructure, and Monitoring — a practical checklist approach for ML systems."
    },
    {
      id: '9.7',
      title: 'Selecting Test Techniques for AI-Based Systems',
      level: 'K4',
      type: 'deep',
      deepPoints: [
        'K4 = Analyze — given a scenario, select appropriate technique(s):',
        'When test oracle problem exists: Back-to-back testing (needs an equivalent system as pseudo-oracle; independently developed = better defect detection). A/B testing (uses operational inputs; statistical analysis; good for regression of self-learning systems and data poisoning detection). Metamorphic testing (domain knowledge needed, inexperienced testers can apply it, relative expected results, no commercial tools).',
        'For ML model security: Adversarial testing (when mishandling adversarial examples has significant impact). Data poisoning testing (when system may be attacked through training data).',
        'For complex multi-parameter systems: Pairwise testing (many parameters, each with many discrete values).',
        'For AI-specific insights: Experience-based testing + EDA (validate algorithm, identify efficiency improvements, leverage domain expertise). Google ML checklist is effective.',
        'For neural networks in mission-critical systems: Neural network coverage measures — stricter criteria (e.g., sign-sign) for higher assurance.'
      ]
    }
  ]
};
