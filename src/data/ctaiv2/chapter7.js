// CT-AI v2.0 — Chapter 7: Machine Learning Development Testing
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 7,
  title: 'Machine Learning Development Testing',
  time: '30 min',
  color: '#475569',
  bg: '#E9EDF2',
  overview: 'Shortest chapter — 30 minutes, 2 learning objectives both K2. Section 7.1.2 on deployment testing has seven distinct test types that are likely to appear in exam questions as scenarios. The risks table (7.1.1) can be skimmed — know the key risk-to-mitigation mappings. Focus is on development TOOL and DEPLOYMENT risks, not the model itself.',
  sections: [
    {
      id: '7.1.1',
      title: 'Machine Learning Development Risks and Mitigations',
      level: 'K2',
      type: 'skim',
      summary: 'This chapter covers risks from ML development TOOLS, CONFIGURATION, and DEPLOYMENT — not the model itself. Key risk-to-mitigation mappings: Incorrect/unintended use of framework APIs (TensorFlow, PyTorch) → API testing. Sub-optimal framework selection → Framework suitability review. Defective framework installation/build → Smoke testing. Poor performance efficiency → Performance testing. Security vulnerabilities in framework → Security testing. Sub-optimal algorithm/hyperparameter selection → ML functional performance testing, A/B testing. Defective data allocation → Data allocation review. Poor evaluation approach (e.g., k-fold cross-validation) → ML functional performance testing. Deployment defects → Smoke testing, ML functional performance testing, A/B testing. Deployed model no better than current → Shadow testing.',
      examInsights: [
        'Q39 (select TWO) KEY: ML functional performance testing mitigates: (b) new library version causing INACCURATE RESULTS — functional testing reveals behavioral anomalies. (d) STOCHASTIC VARIATION in single test results — multiple runs + statistical analysis quantify non-determinism.',
        'Q39 TRAP — Option (a) is wrong: framework SLOW/UNRESPONSIVE when processing large batches = PERFORMANCE EFFICIENCY issue → mitigated by PERFORMANCE TESTING, not ML functional performance testing.',
        'Q39 TRAP — Option (c) is wrong: checking if essential services are running after installation = SMOKE TESTING (quick sanity check), not full ML functional performance testing.',
        "Q39 TRAP — Option (e) is wrong: deciding between two algorithms = ALGORITHM SUITABILITY REVIEW or A/B TESTING between candidates — you can't do ML functional performance testing before selecting the algorithm.",
        'DISTINCTION: ML functional performance testing = evaluates FUNCTIONAL CORRECTNESS (accuracy, precision, recall). Performance testing = evaluates SPEED/EFFICIENCY/SCALABILITY.'
      ]
    },
    {
      id: '7.1.2',
      title: 'ML System Deployment Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Seven deployment test types — know all seven and what each verifies:',
        'Installability Testing: verifies MLS can be successfully installed, configured, AND uninstalled across all supported environments. Tests: system dependencies (GPU drivers), framework compatibility, installation scripts.',
        'Rollback Testing: verifies system can revert to a previously stable state after a failed/degraded deployment. May cover model only OR complete system including data pipeline. MUST be performed BEFORE deployment to confirm rollback readiness.',
        'Canary Testing: releases updated model to a SMALL SUBSET of production traffic (e.g., 5% of users). Monitors real-time metrics (latency, accuracy, error rates) BEFORE full rollout. Real users are affected (5% go to new version).',
        'Shadow Testing: runs new model IN PARALLEL with current production model using SAME live requests WITHOUT affecting live responses. Compares new vs old using live data in a controlled, low-risk environment. Can uncover performance regressions and data drift before full deployment. NO users are affected.',
        'Model Conversion Testing: verifies ML model retains acceptable predictive accuracy, consistent behavior, and operational efficiency (inference speed, memory usage) after being CONVERTED from training format to deployment format.',
        'Cross-Device Testing: verifies MLS performs correctly across its full intended range of deployment targets — mobile, edge devices, cloud servers. API Testing: verifies MLS exposes well-defined, standards-compliant interfaces; validates input/output handling, error messages, and integration workflows.',
        'Key distinction: Canary (REAL users affected, small %) vs Shadow (NO users affected, runs in parallel silently).'
      ],
      examInsights: [
        'Q40 CRITICAL DISTINCTION: SHADOW testing = mirrors traffic WITHOUT impacting users (processes in background silently). CANARY testing = REAL users get responses from new model (small percentage).',
        'Q40 KEY (correct answer b): Shadow testing mirrors traffic without impacting users; canary testing provides responses FROM THE NEW MODEL to real users.',
        "Q40 TRAP — Option (a) REVERSES the two: it says 'shadow testing affects real users' — wrong! Shadow = no user impact.",
        'Q40 TRAP — Option (c) is wrong: both canary and shadow are performance/correctness tests using live data — neither is for component integration testing.',
        "Q40 TRAP — Option (d) is wrong: canary testing is NOT offline. Both are ONLINE methods using live production data. The key difference is whether the new model's RESPONSE IS SENT TO THE USER.",
        "MEMORY AID: SHADOW = like a shadow, follows without being seen (users don't see it). CANARY = like a canary in a mine, a small sample sent ahead to test safety."
      ]
    }
  ]
};
