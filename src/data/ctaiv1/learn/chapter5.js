// CT-AI v1.0 — Chapter 5 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'When an ML model predicts, how do you score it? This chapter covers the confusion matrix and the metrics computed from it (accuracy, precision, recall, F1 — a K3 calculation skill), metrics for regression (MSE, R-squared) and clustering (silhouette coefficient), the limitations of all these metrics, how to select metrics for a scenario (K4), and standard benchmark suites.',
  keywords: {
    general: [],
    aiSpecific: [
      'Accuracy',
      'area under curve (AUC)',
      'confusion matrix',
      'F1-score',
      'inter-cluster metrics',
      'intra-cluster metrics',
      'mean square error (MSE)',
      'ML benchmark suites',
      'ML functional performance metrics',
      'precision',
      'recall',
      'receiver operating characteristic (ROC) curve',
      'regression model',
      'R-squared',
      'silhouette coefficient'
    ]
  },
  objectives: [
    {
      id: 'AI-5.1.1',
      level: 'K3',
      text: 'Calculate the ML functional performance metrics from a given set of confusion matrix data'
    },
    {
      id: 'AI-5.2.1',
      level: 'K2',
      text: 'Contrast and compare the concepts behind the ML functional performance metrics for classification, regression and clustering methods'
    },
    {
      id: 'AI-5.3.1',
      level: 'K2',
      text: 'Summarize the limitations of using ML functional performance metrics to determine the quality of the ML system'
    },
    {
      id: 'AI-5.4.1',
      level: 'K4',
      text: 'Select appropriate ML functional performance metrics and/or their values for a given ML model and scenario'
    },
    { id: 'AI-5.5.1', level: 'K2', text: 'Explain the use of benchmark suites in the context of ML' }
  ],
  sections: {
    '5.1': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Four outcomes: True Positive (TP) — predicted positive, was positive. True Negative (TN) — predicted negative, was negative. False Positive (FP) — predicted positive, was negative (Type I error). False Negative (FN) — predicted negative, was positive (Type II error).',
            'Accuracy = (TP + TN) / (TP + TN + FP + FN) × 100% — proportion of all correct predictions.',
            'Precision = TP / (TP + FP) × 100% — of all predicted positives, how many were actually positive? (Confidence in positive predictions)',
            'Recall = TP / (TP + FN) × 100% — of all actual positives, how many did we catch? (Sensitivity / ability to not miss positives)',
            'F1-score = 2 × (Precision × Recall) / (Precision + Recall) — harmonic mean of precision and recall. Range: 0 to 1. Score near 1 = good, score near 0 = poor at detecting positives.'
          ]
        },
        {
          type: 'note',
          title: 'Know the formulas cold',
          text: 'Accuracy = (TP+TN)/(TP+TN+FP+FN) · Precision = TP/(TP+FP) — of everything predicted positive, how much was right · Recall = TP/(TP+FN) — of everything actually positive, how much was found · F1 = 2·(Precision·Recall)/(Precision+Recall). The exam gives confusion-matrix numbers and expects you to calculate (K3).'
        }
      ]
    },
    '5.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Classification: ROC Curve — plots True Positive Rate (recall) vs False Positive Rate (FP/(TN+FP)) as the decision threshold varies. AUC (Area Under Curve) — higher = better class separation. AUC = 0.5 means random guessing.',
            'Regression: MSE (Mean Square Error) = average squared difference between actual and predicted. Always positive — closer to 0 = better. Squaring prevents positive/negative errors cancelling. R-squared (coefficient of determination) = how well the regression line fits the data.',
            'Clustering (Unsupervised): Intra-cluster metrics — similarity within clusters (higher = better). Inter-cluster metrics — similarity between clusters (lower = better). Silhouette coefficient — ranges -1 to +1. +1 = well-separated clusters. 0 = random clustering. -1 = wrongly assigned.'
          ]
        }
      ]
    },
    '5.3': {
      body: [
        {
          type: 'p',
          text: 'ML metrics ONLY measure functional performance — not non-functional quality like performance efficiency, explainability, flexibility, or autonomy. Additional constraints: metrics depend on correctly labeled data; data used may be biased; metrics apply only to the ML model, not the full system (e.g., the data pipeline); most metrics require tool support to calculate.'
        }
      ]
    },
    '5.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'K4 = Analyze — given a scenario, SELECT the appropriate metric:',
            'Accuracy: Use when classes are roughly balanced and FP/FN costs are similar. Poor choice when one class dominates.',
            'Precision: Use when false positives are costly — e.g., spam filters (wrongly marking good email as spam is unacceptable). When most cases are positive, precision alone is insufficient.',
            'Recall: Use when missing positives is unacceptable — e.g., cancer detection (a false negative means a missed cancer diagnosis). Critical safety contexts.',
            'F1-score: Use when classes are imbalanced AND precision and recall are roughly equally important.',
            'AUC: For supervised classification problems with threshold optimization. MSE/R-squared: For supervised regression. Silhouette/Intra-/Inter-cluster: For unsupervised clustering.'
          ]
        }
      ]
    },
    '5.5': {
      body: [
        {
          type: 'p',
          text: 'ML benchmark suites provide objective comparisons of hardware, frameworks, and cloud platforms. They measure training times and inference times. Know these three: MLCommons (formerly ML Perf — not-for-profit, most prominent), DAWNBench (Stanford University), MLMark (Embedded Microprocessor Benchmark Consortium, for embedded inference).'
        }
      ]
    }
  }
};
