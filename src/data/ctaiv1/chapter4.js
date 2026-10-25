// CT-AI v1.0 — Chapter 4: ML – Data
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 4,
  title: 'ML – Data',
  time: '230 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: 'The largest chapter by time allocation — data quality is foundational to ML quality. Data preparation (4.1), the three datasets (4.2), quality issues table (4.3), and the effect on model quality (4.4) all need deep study. Data labeling (4.5) is K1 only — just recall the approaches and reasons for mislabeling.',
  sections: [
    {
      id: '4.1',
      title: 'Data Preparation as Part of the ML Workflow',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Data preparation uses ~43% of ML workflow effort. Three main stages:',
        'Data Acquisition: (a) Identification — what types of data are needed. (b) Gathering — finding sources and collection channels. (c) Labelling — see Section 4.5. Data forms: numerical, categorical, image, tabular, text, time-series, sensor, geospatial, video, audio.',
        'Data Pre-processing: (a) Cleaning — remove/correct wrong data, duplicates, outliers; data imputation for missing values; remove personal data. (b) Transformation — format changes, standardization (mean=0, SD=1), normalization (range 0-1), converting categoricals to numericals. (c) Augmentation — increase sample count; also used to add adversarial examples for robustness. (d) Sampling — select a representative subset to reduce cost/time.',
        'Feature Engineering: (a) Feature selection — select most relevant features, remove irrelevant ones (reduces overfitting, improves speed and accuracy). (b) Feature extraction — derive informative, non-redundant features from existing ones.',
        'EDA (Exploratory Data Analysis) runs alongside all these activities — data analysis + visualization to discover trends.',
        'Key challenges: domain knowledge needed, poor data from multiple sources, automating the pipeline, costs, bias introduction, ignoring defects in the pipeline itself.'
      ]
    },
    {
      id: '4.2',
      title: 'Training, Validation and Test Datasets',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three datasets required: (1) Training dataset — used to train the model. (2) Validation dataset — used to evaluate and tune (hyperparameter tuning). (3) Test dataset (holdout dataset) — used ONLY for final testing of the tuned model; NEVER used during training.',
        'Typical split ratios: 60:20:20 to 80:10:10 (training:validation:test). Splitting is often random unless the dataset is small or representative sampling is needed.',
        'If data is limited: combine training+validation into one pool, use cross-validation techniques (K-fold cross-validation, leave-one-out, bootstrap, split-test) to create multiple train/val splits — average across all runs.',
        "Key principle: the test dataset must never influence the model during development — otherwise the test results won't reflect real-world quality."
      ]
    },
    {
      id: '4.3',
      title: 'Dataset Quality Issues',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Memorize this table of quality issues: Wrong data (faulty sensor, copy-paste errors). Incomplete data (missing fields/records — hardware, security, human error). Mislabeled data. Insufficient data (not enough for pattern recognition). Data not pre-processed (unclean, inconsistent, outliers present). Obsolete data (outdated for predictions). Unbalanced data (bias by race/gender, poor sensor placement). Unfair data (subjectively skewed, though may not be unbalanced). Duplicate data (unduly influences model). Irrelevant data (wastes resources, reduces accuracy). Privacy issues (GDPR compliance). Security issues (deliberately inserted fraudulent data).'
      ]
    },
    {
      id: '4.4',
      title: 'Data Quality and its Effect on the ML Model',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Poor data quality → poor model quality + poor predictions. Three categories of defects from data quality issues:',
        '(1) Reduced accuracy: caused by wrong, incomplete, mislabeled, insufficient, obsolete, irrelevant, or non-preprocessed data.',
        '(2) Biased model: caused by incomplete, unbalanced, unfair, or duplicated data. E.g., medical data from one gender → biased health predictions.',
        '(3) Compromised model: caused by data privacy/security issues. Privacy issues can create security vulnerabilities, enabling attackers to reverse-engineer personal information from the model.'
      ]
    },
    {
      id: '4.5',
      title: 'Data Labelling for Supervised Learning',
      level: 'K1',
      type: 'skim',
      summary: 'Labelling uses ~25% of ML project time. Approaches (just recall): Internal, Outsourced, Crowdsourced (multiple annotators for quality), AI-Assisted (AI labels, human confirms), Hybrid. Mislabeling causes: random errors, systemic errors (wrong instructions), deliberate malicious errors, translation errors, subjective disagreements, lack of domain knowledge, complex classification, tool defects, ML-based labeling is probabilistic.'
    }
  ]
};
