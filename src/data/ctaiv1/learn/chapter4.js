// CT-AI v1.0 — Chapter 4 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'Data is where most ML effort — and most ML risk — lives. This chapter walks through data preparation (acquisition, pre-processing, feature engineering), the distinct roles of training, validation and test datasets, typical dataset quality issues, how poor data corrupts the resulting model, and how data labelling for supervised learning is done and goes wrong.',
  keywords: {
    general: [],
    aiSpecific: [
      'Annotation',
      'augmentation',
      'classification model',
      'data labelling',
      'data preparation',
      'ML training data',
      'supervised learning',
      'test dataset',
      'validation dataset'
    ]
  },
  objectives: [
    {
      id: 'AI-4.1.1',
      level: 'K2',
      text: 'Describe the activities and challenges related to data preparation'
    },
    {
      id: 'AI-4.2.1',
      level: 'K2',
      text: 'Contrast the use of training, validation and test datasets in the development of an ML model'
    },
    { id: 'AI-4.3.1', level: 'K2', text: 'Describe typical dataset quality issues' },
    {
      id: 'AI-4.4.1',
      level: 'K2',
      text: 'Recognize how poor data quality can cause problems with the resultant ML model'
    },
    {
      id: 'AI-4.5.1',
      level: 'K1',
      text: 'Recall the different approaches to the labelling of data in datasets for supervised learning'
    },
    { id: 'AI-4.5.2', level: 'K1', text: 'Recall reasons for the data in datasets being mislabeled' }
  ],
  sections: {
    '4.1': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Data preparation uses ~43% of ML workflow effort. Three main stages:',
            'Data Acquisition: (a) Identification — what types of data are needed. (b) Gathering — finding sources and collection channels. (c) Labelling — see Section 4.5. Data forms: numerical, categorical, image, tabular, text, time-series, sensor, geospatial, video, audio.',
            'Data Pre-processing: (a) Cleaning — remove/correct wrong data, duplicates, outliers; data imputation for missing values; remove personal data. (b) Transformation — format changes, standardization (mean=0, SD=1), normalization (range 0-1), converting categoricals to numericals. (c) Augmentation — increase sample count; also used to add adversarial examples for robustness. (d) Sampling — select a representative subset to reduce cost/time.',
            'Feature Engineering: (a) Feature selection — select most relevant features, remove irrelevant ones (reduces overfitting, improves speed and accuracy). (b) Feature extraction — derive informative, non-redundant features from existing ones.',
            'EDA (Exploratory Data Analysis) runs alongside all these activities — data analysis + visualization to discover trends.',
            'Key challenges: domain knowledge needed, poor data from multiple sources, automating the pipeline, costs, bias introduction, ignoring defects in the pipeline itself.'
          ]
        }
      ]
    },
    '4.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Three datasets required: (1) Training dataset — used to train the model. (2) Validation dataset — used to evaluate and tune (hyperparameter tuning). (3) Test dataset (holdout dataset) — used ONLY for final testing of the tuned model; NEVER used during training.',
            'Typical split ratios: 60:20:20 to 80:10:10 (training:validation:test). Splitting is often random unless the dataset is small or representative sampling is needed.',
            'If data is limited: combine training+validation into one pool, use cross-validation techniques (K-fold cross-validation, leave-one-out, bootstrap, split-test) to create multiple train/val splits — average across all runs.',
            "Key principle: the test dataset must never influence the model during development — otherwise the test results won't reflect real-world quality."
          ]
        }
      ]
    },
    '4.3': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Memorize this table of quality issues: Wrong data (faulty sensor, copy-paste errors). Incomplete data (missing fields/records — hardware, security, human error). Mislabeled data. Insufficient data (not enough for pattern recognition). Data not pre-processed (unclean, inconsistent, outliers present). Obsolete data (outdated for predictions). Unbalanced data (bias by race/gender, poor sensor placement). Unfair data (subjectively skewed, though may not be unbalanced). Duplicate data (unduly influences model). Irrelevant data (wastes resources, reduces accuracy). Privacy issues (GDPR compliance). Security issues (deliberately inserted fraudulent data).'
          ]
        }
      ]
    },
    '4.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Poor data quality → poor model quality + poor predictions. Three categories of defects from data quality issues:',
            '(1) Reduced accuracy: caused by wrong, incomplete, mislabeled, insufficient, obsolete, irrelevant, or non-preprocessed data.',
            '(2) Biased model: caused by incomplete, unbalanced, unfair, or duplicated data. E.g., medical data from one gender → biased health predictions.',
            '(3) Compromised model: caused by data privacy/security issues. Privacy issues can create security vulnerabilities, enabling attackers to reverse-engineer personal information from the model.'
          ]
        }
      ]
    },
    '4.5': {
      body: [
        {
          type: 'p',
          text: 'Labelling uses ~25% of ML project time. Approaches (just recall): Internal, Outsourced, Crowdsourced (multiple annotators for quality), AI-Assisted (AI labels, human confirms), Hybrid. Mislabeling causes: random errors, systemic errors (wrong instructions), deliberate malicious errors, translation errors, subjective disagreements, lack of domain knowledge, complex classification, tool defects, ML-based labeling is probabilistic.'
        }
      ]
    }
  }
};
