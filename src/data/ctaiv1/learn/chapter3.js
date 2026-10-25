// CT-AI v1.0 — Chapter 3 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'A tester needs a working mental model of machine learning before testing it. This chapter covers the three forms of ML (supervised, unsupervised, reinforcement), the six-stage ML workflow, how to select a form of ML for a scenario (a K3 skill), the factors driving algorithm selection, and the twin failure modes of underfitting and overfitting.',
  keywords: {
    general: [],
    aiSpecific: [
      'Association',
      'classification',
      'clustering',
      'data preparation',
      'ML algorithm',
      'ML framework',
      'ML functional performance criteria',
      'ML model',
      'ML training data',
      'ML workflow',
      'model evaluation',
      'model tuning',
      'outlier',
      'overfitting',
      'regression',
      'reinforcement learning',
      'supervised learning',
      'underfitting',
      'unsupervised learning'
    ]
  },
  objectives: [
    {
      id: 'AI-3.1.1',
      level: 'K2',
      text: 'Describe classification and regression as part of supervised learning'
    },
    {
      id: 'AI-3.1.2',
      level: 'K2',
      text: 'Describe clustering and association as part of unsupervised learning'
    },
    { id: 'AI-3.1.3', level: 'K2', text: 'Describe reinforcement learning' },
    { id: 'AI-3.2.1', level: 'K2', text: 'Summarize the workflow used to create an ML system' },
    {
      id: 'AI-3.3.1',
      level: 'K3',
      text: 'Given a project scenario, identify an appropriate form of ML (from classification, regression, clustering, association, or reinforcement learning)'
    },
    {
      id: 'AI-3.4.1',
      level: 'K2',
      text: 'Explain the factors involved in the selection of ML algorithms'
    },
    { id: 'AI-3.5.1', level: 'K2', text: 'Summarize the concepts of underfitting and overfitting' }
  ],
  sections: {
    '3.1': {
      body: [
        {
          type: 'p',
          text: 'Supervised: learns from labeled data. Types: Classification (discrete output, e.g., is this a cat?) and Regression (numeric output, e.g., predict house price). Unsupervised: learns from unlabeled data. Types: Clustering (group similar items, e.g., customer segments) and Association (find relationships, e.g., product recommendations). Reinforcement: agent learns by trial-and-error with rewards/penalties — no training data. Used for robotics, autonomous vehicles, chatbots.'
        }
      ]
    },
    '3.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            '10-step logical sequence: (1) Understand Objectives — align with business, define acceptance criteria including ML performance metrics. (2) Select Framework. (3) Select & Build Algorithm. (4) Prepare & Test Data — acquisition, pre-processing, feature engineering + EDA. (5) Train the Model — uses training data, each pass = one epoch. (6) Evaluate the Model — use validation dataset vs acceptance criteria. (7) Tune the Model — hyperparameter tuning to improve performance. (8) Test the Model — independent test dataset, compare with evaluation metrics. (9) Deploy the Model. (10) Use & Monitor — detect concept drift, retrain if needed.',
            'Model generation = Train + Evaluate + Tune (iterative loop).',
            'Hyperparameters: Model hyperparameters = define model structure (e.g., number of layers). Algorithm hyperparameters = control training (e.g., number of epochs).',
            'The workflow is iterative — evaluation often sends you back to training or even data preparation.',
            'A/B testing used when comparing updated model vs original during monitoring phase.'
          ]
        }
      ]
    },
    '3.3': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'K3 = Apply — given a scenario, you must SELECT the right ML form. Use these decision rules:',
            '→ Output label present → Supervised learning. → Output is discrete/categorical → Classification. → Output is numeric/continuous → Regression.',
            '→ No output label in dataset → Unsupervised learning. → Grouping similar data → Clustering. → Finding co-occurring items (relationships) → Association.',
            '→ Interaction with environment + multiple states + decisions at each state → Reinforcement Learning.',
            'Always check: is there sufficient training and test data? For supervised learning, is the data properly labeled?'
          ]
        }
      ]
    },
    '3.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'No single best approach — selection is a mix of factors: (1) Required functionality (classification vs regression). (2) Required quality characteristics: accuracy, memory constraints, training speed, prediction speed, explainability requirements. (3) Type and amount of available data. (4) Number of input features. (5) Expected number of clusters. (6) Previous experience. (7) Trial and error.',
            'Some models overfit more with limited data; some require specific data types (e.g., image-only). Speed, accuracy, and memory often trade off against each other.'
          ]
        }
      ]
    },
    '3.5': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Overfitting: model fits training data too closely — memorizes noise/outliers, fails on new data. Causes: too little training data, or model trying to fit every data point. Sign: high training accuracy, low test accuracy.',
            'Underfitting: model too simplistic — fails on both training and new data. Causes: dataset lacks important features, or wrong algorithm type (e.g., linear model for non-linear data). Sign: poor accuracy everywhere.',
            'Both are detected by comparing training vs validation/test dataset performance. Cross-validation helps detect overfitting with limited data.'
          ]
        },
        {
          type: 'note',
          title: 'Classic exam trap',
          text: 'Underfitting = model too simple, fails even on training data (high bias). Overfitting = model memorizes training data including noise, fails to generalize to new data (high variance). Detect overfitting by comparing training vs. validation/test performance — good on training but poor on test data means overfitting.'
        }
      ]
    }
  }
};
