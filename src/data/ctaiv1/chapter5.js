// CT-AI v1.0 — Chapter 5: ML Functional Performance Metrics
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 5,
  title: 'ML Functional Performance Metrics',
  time: '120 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: 'One of the most calculation-heavy chapters. Section 5.1 is K3 (Calculate!) — you MUST be able to derive all metrics from a confusion matrix. Section 5.4 is K4 (Analyze!) — you must select the right metric for a given scenario. These two sections are the highest exam priority. 5.3 and 5.5 can be skimmed.',
  sections: [
    {
      id: '5.1',
      title: 'Confusion Matrix',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Four outcomes: True Positive (TP) — predicted positive, was positive. True Negative (TN) — predicted negative, was negative. False Positive (FP) — predicted positive, was negative (Type I error). False Negative (FN) — predicted negative, was positive (Type II error).',
        'Accuracy = (TP + TN) / (TP + TN + FP + FN) × 100% — proportion of all correct predictions.',
        'Precision = TP / (TP + FP) × 100% — of all predicted positives, how many were actually positive? (Confidence in positive predictions)',
        'Recall = TP / (TP + FN) × 100% — of all actual positives, how many did we catch? (Sensitivity / ability to not miss positives)',
        'F1-score = 2 × (Precision × Recall) / (Precision + Recall) — harmonic mean of precision and recall. Range: 0 to 1. Score near 1 = good, score near 0 = poor at detecting positives.'
      ]
    },
    {
      id: '5.2',
      title: 'Additional ML Functional Performance Metrics',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Classification: ROC Curve — plots True Positive Rate (recall) vs False Positive Rate (FP/(TN+FP)) as the decision threshold varies. AUC (Area Under Curve) — higher = better class separation. AUC = 0.5 means random guessing.',
        'Regression: MSE (Mean Square Error) = average squared difference between actual and predicted. Always positive — closer to 0 = better. Squaring prevents positive/negative errors cancelling. R-squared (coefficient of determination) = how well the regression line fits the data.',
        'Clustering (Unsupervised): Intra-cluster metrics — similarity within clusters (higher = better). Inter-cluster metrics — similarity between clusters (lower = better). Silhouette coefficient — ranges -1 to +1. +1 = well-separated clusters. 0 = random clustering. -1 = wrongly assigned.'
      ]
    },
    {
      id: '5.3',
      title: 'Limitations of ML Functional Performance Metrics',
      level: 'K2',
      type: 'skim',
      summary: 'ML metrics ONLY measure functional performance — not non-functional quality like performance efficiency, explainability, flexibility, or autonomy. Additional constraints: metrics depend on correctly labeled data; data used may be biased; metrics apply only to the ML model, not the full system (e.g., the data pipeline); most metrics require tool support to calculate.'
    },
    {
      id: '5.4',
      title: 'Selecting ML Functional Performance Metrics',
      level: 'K4',
      type: 'deep',
      deepPoints: [
        'K4 = Analyze — given a scenario, SELECT the appropriate metric:',
        'Accuracy: Use when classes are roughly balanced and FP/FN costs are similar. Poor choice when one class dominates.',
        'Precision: Use when false positives are costly — e.g., spam filters (wrongly marking good email as spam is unacceptable). When most cases are positive, precision alone is insufficient.',
        'Recall: Use when missing positives is unacceptable — e.g., cancer detection (a false negative means a missed cancer diagnosis). Critical safety contexts.',
        'F1-score: Use when classes are imbalanced AND precision and recall are roughly equally important.',
        'AUC: For supervised classification problems with threshold optimization. MSE/R-squared: For supervised regression. Silhouette/Intra-/Inter-cluster: For unsupervised clustering.'
      ]
    },
    {
      id: '5.5',
      title: 'Benchmark Suites for ML',
      level: 'K2',
      type: 'skim',
      summary: 'ML benchmark suites provide objective comparisons of hardware, frameworks, and cloud platforms. They measure training times and inference times. Know these three: MLCommons (formerly ML Perf — not-for-profit, most prominent), DAWNBench (Stanford University), MLMark (Embedded Microprocessor Benchmark Consortium, for embedded inference).'
    }
  ]
};
