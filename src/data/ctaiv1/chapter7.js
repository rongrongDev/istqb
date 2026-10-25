// CT-AI v1.0 — Chapter 7: Testing AI-Based Systems Overview
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 7,
  title: 'Testing AI-Based Systems Overview',
  time: '115 min',
  color: '#1D4ED8',
  bg: '#EFF6FF',
  overview: 'Bridge between AI fundamentals and AI testing. Section 7.2 (test levels) introduces two NEW levels specific to AI. Section 7.7 is K4 — you must apply risk analysis to select a test approach. Concept drift (7.6) and automation bias (7.4) are uniquely AI-specific and exam-relevant. AI component documentation (7.5) is lower priority.',
  sections: [
    {
      id: '7.1',
      title: 'Specification of AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Six reasons specifications are challenging for AI: (1) Requirements often only state high-level goals/predictions — not specific logic. (2) Accuracy is unknown until independent testing — leads to inadequate specs written before desired criteria are determined. (3) Probabilistic nature requires specifying tolerances for expected quality requirements. (4) Human-behavior replication leads to poorly specified requirements (e.g., 'as good as a human') — makes test oracle definition hard. (5) AI-based user interfaces (NLP, computer vision) require flexibility that makes full documentation of all interaction modes difficult. (6) AI-specific quality characteristics (adaptability, flexibility, evolution, autonomy) are novel and hard to specify and test."
      ]
    },
    {
      id: '7.2',
      title: 'Test Levels for AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Six test levels — two are NEW for AI: Input Data Testing and ML Model Testing. The remaining four are conventional but extended for AI.',
        'Input Data Testing (NEW): Ensure training and prediction data quality. Includes: reviews, statistical bias testing, EDA of training data, static and dynamic testing of the data pipeline (including component + integration testing of pipeline).',
        'ML Model Testing (NEW): Ensure model meets functional performance criteria AND non-functional criteria (training speed, prediction speed, adaptability, transparency). Includes hyperparameter optimization and optionally white-box coverage (Section 6.2).',
        'Component Testing: Conventional — for non-model components (UI, communications).',
        'Component Integration Testing: Ensures AI and non-AI components interact correctly. For AIaaS: includes API testing of the service.',
        'System Testing: Complete integrated system — functional and non-functional. Re-tests ML functional performance in the full system context. Includes adversarial testing, explainability testing, hardware interface testing.',
        'Acceptance Testing: Determines if the complete system is acceptable to the customer. For AIaaS: tests suitability of the service for the intended system.'
      ]
    },
    {
      id: '7.3',
      title: 'Test Data for Testing AI-Based Systems',
      level: 'K1',
      type: 'skim',
      summary: "Just recall these challenges: Big data (high-volume/velocity/variety) is hard to create and manage. Input data may need to change over time (e.g., 'age' photographs in a facial recognition test). Personal/confidential data needs sanitization, encryption, or redaction — may need legal approval. Testers using the same data pipeline as data scientists may mask defects in that pipeline."
    },
    {
      id: '7.4',
      title: 'Testing for Automation Bias in AI-Based Systems',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Automation/complacency bias: humans over-trust AI recommendations. Two forms:',
        "Form 1: Human blindly accepts AI's recommendation without cross-checking other sources. Research shows this typically reduces decision quality by 5% (or more, depending on context). Example: auto-correct on mobile phones — users often don't notice wrong corrections.",
        'Form 2: Human fails to adequately monitor the system and misses a failure. Example: semi-autonomous vehicles — occupant becomes too trusting and is unprepared to take over in an emergency.',
        "Testing implication: testers must test BOTH the quality of the AI's recommendations AND the quality of representative human decision-making when using the system."
      ]
    },
    {
      id: '7.5',
      title: 'Documenting an AI Component',
      level: 'K2',
      type: 'skim',
      summary: 'AI component documentation covers: General (identifiers, version, license). Design (assumptions, decisions). Usage (use cases, self-learning approach, known bias, ethics, safety, concept drift). Datasets (features, collection, pre-processing, labelling, bias/fairness, privacy/security). Testing (test dataset description, independence, results, robustness, explainability). Training & ML Performance (algorithm, weights, validation dataset, metrics and thresholds). Good documentation reduces testing effort and improves transparency.'
    },
    {
      id: '7.6',
      title: 'Testing for Concept Drift',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Concept drift: the operational environment changes over time but the trained model doesn't change with it → predictions become less accurate and less useful.",
        'Types of change: seasonal, or abrupt (cultural/societal/external). Classic example: COVID-19 abruptly made pre-pandemic sales prediction models inaccurate.',
        'Testing approach: systems prone to concept drift must be REGULARLY tested against their agreed ML functional performance criteria — to detect drift early enough to mitigate.',
        'Mitigation: retire the system, or retrain with up-to-date data followed by confirmation testing, regression testing, and possibly A/B testing (updated B-system must outperform original A-system).'
      ]
    },
    {
      id: '7.7',
      title: 'Selecting a Test Approach for an ML System',
      level: 'K4',
      type: 'deep',
      deepPoints: [
        'K4 = Analyze — given a scenario, determine the full test approach based on risk analysis. Includes conventional + AI-specific testing.',
        'Key risk → mitigation pairs to know: Data quality issues → reviews, EDA, dynamic testing. Faulty data pipeline → dynamic testing of components + integration testing. Sub-optimal ML workflow → expert reviews + audits. Sub-optimal algorithm/model/hyperparameters → expert reviews + ensure proper evaluation/tuning steps. ML performance not met operationally → expert review of datasets for representativeness. Users unhappy despite metrics met → wrong metrics selected, or concept drift (more frequent testing), or missing non-functional quality. Self-learning system not meeting expectations → expert review of data, automated regression testing, experience-based testing. Poor explainability → see Section 8.6. Overfitting → test with independent dataset, experience-based testing.'
      ]
    }
  ]
};
