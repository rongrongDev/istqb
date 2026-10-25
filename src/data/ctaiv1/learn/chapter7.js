// CT-AI v1.0 — Chapter 7 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'Now testing proper begins. This chapter maps AI-based systems onto the familiar test levels, explains why their specifications make test basis problematic, what makes test data hard, automation bias, ML model documentation, concept drift, and how to select a test approach for an ML system (K4).',
  keywords: {
    general: [ 'Input data testing', 'ML model testing' ],
    aiSpecific: [
      'AI component',
      'automation bias',
      'big data',
      'concept drift',
      'data pipeline',
      'ML functional performance metrics',
      'training data'
    ]
  },
  objectives: [
    {
      id: 'AI-7.1.1',
      level: 'K2',
      text: 'Explain how system specifications for AI-based systems can create challenges in testing'
    },
    {
      id: 'AI-7.2.1',
      level: 'K2',
      text: 'Describe how AI-based systems are tested at each test level'
    },
    {
      id: 'AI-7.3.1',
      level: 'K1',
      text: 'Recall those factors associated with test data that can make testing AI-based systems difficult'
    },
    { id: 'AI-7.4.1', level: 'K2', text: 'Explain automation bias and how this affects testing' },
    {
      id: 'AI-7.5.1',
      level: 'K2',
      text: 'Describe the documentation of an AI component and understand how documentation supports the testing of AI-based systems'
    },
    {
      id: 'AI-7.6.1',
      level: 'K2',
      text: 'Explain the need for frequently testing the trained model to handle concept drift'
    },
    {
      id: 'AI-7.7.1',
      level: 'K4',
      text: 'For a given scenario determine a test approach to be followed when developing an ML system'
    }
  ],
  sections: {
    '7.1': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Six reasons specifications are challenging for AI: (1) Requirements often only state high-level goals/predictions — not specific logic. (2) Accuracy is unknown until independent testing — leads to inadequate specs written before desired criteria are determined. (3) Probabilistic nature requires specifying tolerances for expected quality requirements. (4) Human-behavior replication leads to poorly specified requirements (e.g., 'as good as a human') — makes test oracle definition hard. (5) AI-based user interfaces (NLP, computer vision) require flexibility that makes full documentation of all interaction modes difficult. (6) AI-specific quality characteristics (adaptability, flexibility, evolution, autonomy) are novel and hard to specify and test."
          ]
        }
      ]
    },
    '7.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Six test levels — two are NEW for AI: Input Data Testing and ML Model Testing. The remaining four are conventional but extended for AI.',
            'Input Data Testing (NEW): Ensure training and prediction data quality. Includes: reviews, statistical bias testing, EDA of training data, static and dynamic testing of the data pipeline (including component + integration testing of pipeline).',
            'ML Model Testing (NEW): Ensure model meets functional performance criteria AND non-functional criteria (training speed, prediction speed, adaptability, transparency). Includes hyperparameter optimization and optionally white-box coverage (Section 6.2).',
            'Component Testing: Conventional — for non-model components (UI, communications).',
            'Component Integration Testing: Ensures AI and non-AI components interact correctly. For AIaaS: includes API testing of the service.',
            'System Testing: Complete integrated system — functional and non-functional. Re-tests ML functional performance in the full system context. Includes adversarial testing, explainability testing, hardware interface testing.',
            'Acceptance Testing: Determines if the complete system is acceptable to the customer. For AIaaS: tests suitability of the service for the intended system.'
          ]
        }
      ]
    },
    '7.3': {
      body: [
        {
          type: 'p',
          text: "Just recall these challenges: Big data (high-volume/velocity/variety) is hard to create and manage. Input data may need to change over time (e.g., 'age' photographs in a facial recognition test). Personal/confidential data needs sanitization, encryption, or redaction — may need legal approval. Testers using the same data pipeline as data scientists may mask defects in that pipeline."
        }
      ]
    },
    '7.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Automation/complacency bias: humans over-trust AI recommendations. Two forms:',
            "Form 1: Human blindly accepts AI's recommendation without cross-checking other sources. Research shows this typically reduces decision quality by 5% (or more, depending on context). Example: auto-correct on mobile phones — users often don't notice wrong corrections.",
            'Form 2: Human fails to adequately monitor the system and misses a failure. Example: semi-autonomous vehicles — occupant becomes too trusting and is unprepared to take over in an emergency.',
            "Testing implication: testers must test BOTH the quality of the AI's recommendations AND the quality of representative human decision-making when using the system."
          ]
        }
      ]
    },
    '7.5': {
      body: [
        {
          type: 'p',
          text: 'AI component documentation covers: General (identifiers, version, license). Design (assumptions, decisions). Usage (use cases, self-learning approach, known bias, ethics, safety, concept drift). Datasets (features, collection, pre-processing, labelling, bias/fairness, privacy/security). Testing (test dataset description, independence, results, robustness, explainability). Training & ML Performance (algorithm, weights, validation dataset, metrics and thresholds). Good documentation reduces testing effort and improves transparency.'
        }
      ]
    },
    '7.6': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Concept drift: the operational environment changes over time but the trained model doesn't change with it → predictions become less accurate and less useful.",
            'Types of change: seasonal, or abrupt (cultural/societal/external). Classic example: COVID-19 abruptly made pre-pandemic sales prediction models inaccurate.',
            'Testing approach: systems prone to concept drift must be REGULARLY tested against their agreed ML functional performance criteria — to detect drift early enough to mitigate.',
            'Mitigation: retire the system, or retrain with up-to-date data followed by confirmation testing, regression testing, and possibly A/B testing (updated B-system must outperform original A-system).'
          ]
        }
      ]
    },
    '7.7': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'K4 = Analyze — given a scenario, determine the full test approach based on risk analysis. Includes conventional + AI-specific testing.',
            'Key risk → mitigation pairs to know: Data quality issues → reviews, EDA, dynamic testing. Faulty data pipeline → dynamic testing of components + integration testing. Sub-optimal ML workflow → expert reviews + audits. Sub-optimal algorithm/model/hyperparameters → expert reviews + ensure proper evaluation/tuning steps. ML performance not met operationally → expert review of datasets for representativeness. Users unhappy despite metrics met → wrong metrics selected, or concept drift (more frequent testing), or missing non-functional quality. Self-learning system not meeting expectations → expert review of data, automated regression testing, experience-based testing. Poor explainability → see Section 8.6. Overfitting → test with independent dataset, experience-based testing.'
          ]
        }
      ]
    }
  }
};
