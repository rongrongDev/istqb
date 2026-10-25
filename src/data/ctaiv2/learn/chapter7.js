// CT-AI v2.0 — Chapter 7 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 63-66.

export default {
  intro:
    "The shortest chapter (30 minutes): risks introduced by ML development TOOLS, configuration choices, and deployment mechanisms — not the model itself. Covers API testing, ML functional performance testing, A/B testing, back-to-back testing, and reviews, plus the four MLS deployment test types.",
  keywords: {
    general: ["ML development testing", "ML functional performance", "shadow testing"],
    aiSpecific: [],
  },
  objectives: [
    { id: "AI-7.1.1", level: "K2", text: "Give examples of test approaches used for risk mitigation of ML development" },
    { id: "AI-7.1.2", level: "K2", text: "Explain the various forms of ML system deployment testing" },
  ],
  sections: {
    "7.1.1": {
      objective: "AI-7.1.1",
      body: [
        { type: "p", text: "Development risks concern the framework, libraries, algorithm choices, and deployment mechanics:" },
        { type: "table", headers: ["Potential risk", "Risk mitigation"], rows: [
          ["Incorrect/unintended use of library or framework APIs (TensorFlow, PyTorch)", "API testing (7.1.2)"],
          ["Sub-optimal framework selection", "Framework suitability review"],
          ["Algorithm/model/framework problems introducing systemic unfairness", "Testing for bias (5.1.2)"],
          ["Defective framework installation or build", "Smoke testing"],
          ["Defective implementation of the evaluation by the framework", "Reviews of framework evaluation code · cross-check results against manual benchmarks"],
          ["Poor performance efficiency (slow framework)", "Performance testing"],
          ["Poor framework usability", "Usability testing"],
          ["Defect in a library used by the framework · defective algorithm implementation", "ML functional performance testing (6.1.3) · back-to-back testing (6.1.10)"],
          ["Security vulnerabilities in the framework", "Security testing"],
          ["Poor framework user documentation", "Framework documentation review"],
          ["Sub-optimal algorithm selection", "Algorithm suitability review · A/B testing (6.1.9)"],
          ["Sub-optimal hyperparameter selection (network structure, learning rate)", "ML functional performance testing (6.1.3) · A/B testing (6.1.9)"],
          ["Defective allocation of data to training/validation/test datasets", "Data allocation review"],
          ["Poor selection of evaluation approach (e.g. k-fold cross-validation)", "ML functional performance testing (6.1.3)"],
          ["Misinterpreting test results due to stochastic learning", "ML functional performance testing (6.1.3)"],
          ["Deployment defect (e.g. generating a modified version for a target platform)", "Smoke testing · ML functional performance testing (6.1.3) · A/B testing (6.1.9)"],
          ["Deployed model incompatible with the operational environment", "Smoke testing · MLS deployment testing (7.1.2)"],
          ["Deployed model is no improvement over the current model", "Shadow testing (7.1.2)"],
        ]},
      ],
    },
    "7.1.2": {
      objective: "AI-7.1.2",
      body: [
        { type: "p", text: "Deployment testing verifies the AI-based system functions correctly and reliably in its target environment (cloud, edge device, mobile). Four test types, each addressing specific deployment risks:" },
        { type: "table", headers: ["Test type", "What it does"], rows: [
          ["Installability testing", "MLS can be installed, configured, and uninstalled across all supported environments — system dependencies (GPU drivers), framework compatibility, installation scripts"],
          ["Rollback testing", "System can revert to a previously stable, operational state after a degraded/failed deployment. Scope: model only, or complete system incl. data pipeline. Must be performed BEFORE deployment to confirm rollback readiness"],
          ["Canary testing", "Release the updated model to a small subset of production traffic (e.g. 5% of users); monitor real-time metrics (latency, accuracy, error rates) to catch regressions before full rollout"],
          ["Shadow testing", "Run the new model IN PARALLEL with the production model, routing the same requests to both without affecting live responses — compare new vs old on live data, low-risk; uncovers performance regressions and data drift before full deployment"],
        ]},
        { type: "note", title: "Canary vs shadow", text: "Canary serves REAL responses to a small user subset. Shadow serves NO live responses from the new model — it only mirrors traffic for comparison. Rollback is the only one required strictly pre-deployment." },
      ],
    },
  },
};
