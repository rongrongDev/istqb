// CT-AI v1.0 — Chapter 3: Machine Learning (ML) – Overview
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 3,
  title: 'Machine Learning (ML) – Overview',
  time: '145 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: 'Covers the ML workflow and forms of learning. The workflow (Section 3.2) and how to select the right form of ML (3.3 — K3 Apply level!) are the most exam-critical parts. Overfitting/underfitting always appears in exams. Forms of ML are background needed to understand 3.3.',
  sections: [
    {
      id: '3.1',
      title: 'Forms of ML',
      level: 'K2',
      type: 'skim',
      summary: 'Supervised: learns from labeled data. Types: Classification (discrete output, e.g., is this a cat?) and Regression (numeric output, e.g., predict house price). Unsupervised: learns from unlabeled data. Types: Clustering (group similar items, e.g., customer segments) and Association (find relationships, e.g., product recommendations). Reinforcement: agent learns by trial-and-error with rewards/penalties — no training data. Used for robotics, autonomous vehicles, chatbots.'
    },
    {
      id: '3.2',
      title: 'ML Workflow',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        '10-step logical sequence: (1) Understand Objectives — align with business, define acceptance criteria including ML performance metrics. (2) Select Framework. (3) Select & Build Algorithm. (4) Prepare & Test Data — acquisition, pre-processing, feature engineering + EDA. (5) Train the Model — uses training data, each pass = one epoch. (6) Evaluate the Model — use validation dataset vs acceptance criteria. (7) Tune the Model — hyperparameter tuning to improve performance. (8) Test the Model — independent test dataset, compare with evaluation metrics. (9) Deploy the Model. (10) Use & Monitor — detect concept drift, retrain if needed.',
        'Model generation = Train + Evaluate + Tune (iterative loop).',
        'Hyperparameters: Model hyperparameters = define model structure (e.g., number of layers). Algorithm hyperparameters = control training (e.g., number of epochs).',
        'The workflow is iterative — evaluation often sends you back to training or even data preparation.',
        'A/B testing used when comparing updated model vs original during monitoring phase.'
      ]
    },
    {
      id: '3.3',
      title: 'Selecting a Form of ML',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = Apply — given a scenario, you must SELECT the right ML form. Use these decision rules:',
        '→ Output label present → Supervised learning. → Output is discrete/categorical → Classification. → Output is numeric/continuous → Regression.',
        '→ No output label in dataset → Unsupervised learning. → Grouping similar data → Clustering. → Finding co-occurring items (relationships) → Association.',
        '→ Interaction with environment + multiple states + decisions at each state → Reinforcement Learning.',
        'Always check: is there sufficient training and test data? For supervised learning, is the data properly labeled?'
      ]
    },
    {
      id: '3.4',
      title: 'Factors in ML Algorithm Selection',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'No single best approach — selection is a mix of factors: (1) Required functionality (classification vs regression). (2) Required quality characteristics: accuracy, memory constraints, training speed, prediction speed, explainability requirements. (3) Type and amount of available data. (4) Number of input features. (5) Expected number of clusters. (6) Previous experience. (7) Trial and error.',
        'Some models overfit more with limited data; some require specific data types (e.g., image-only). Speed, accuracy, and memory often trade off against each other.'
      ]
    },
    {
      id: '3.5',
      title: 'Overfitting and Underfitting',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Overfitting: model fits training data too closely — memorizes noise/outliers, fails on new data. Causes: too little training data, or model trying to fit every data point. Sign: high training accuracy, low test accuracy.',
        'Underfitting: model too simplistic — fails on both training and new data. Causes: dataset lacks important features, or wrong algorithm type (e.g., linear model for non-linear data). Sign: poor accuracy everywhere.',
        'Both are detected by comparing training vs validation/test dataset performance. Cross-validation helps detect overfitting with limited data.'
      ]
    }
  ]
};
