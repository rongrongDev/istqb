// CT-AI v2.0 — Chapter 5: Input Data Testing for Machine Learning Systems
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 5,
  title: 'Input Data Testing for Machine Learning Systems',
  time: '180 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: 'Data quality is foundational to ML quality. Dataset Constraint Testing (5.1.5) is K3 Apply — the highest exam priority here. Bias testing (5.1.2) with disparate impact analysis and label correctness testing (5.1.6) are uniquely AI-specific and exam-heavy. Data pipeline testing (5.1.3) and risks table (5.1.1) can be reviewed more quickly.',
  sections: [
    {
      id: '5.1.1',
      title: 'Input Data Risks and Mitigations',
      level: 'K2',
      type: 'skim',
      summary: 'Risk-to-mitigation reference table. Key mappings: Defects in training data or algorithmic bias → Testing for Bias (5.1.2). Untrustworthy/poisoned data → Data provenance testing, A/B testing, Red Teaming. Internally inconsistent dataset, out-of-range data, wrong data types → Dataset Constraint Testing (5.1.5). Imbalanced/skewed dataset, missing data → Data Representativeness Testing (5.1.4). Poor/ambiguous labelling, inaccurate annotations → Label Correctness Testing (5.1.6). Data pipeline failures, security breaches → Data Pipeline Testing (5.1.3).',
      examInsights: [
        'Q24 KEY: Data PROVENANCE testing = verifying data ORIGIN and INTEGRITY — specifically for unverified third-party data or suspected tampering.',
        'Q24 TRAP — Dataset Constraint testing ≠ provenance testing. Constraint testing checks INTERNAL CONSISTENCY (ranges, types, counts) but CANNOT verify where data came from or if it was altered.',
        'Q24 TRAP — Data Representativeness testing checks if data DISTRIBUTIONS match real-world operational data — not whether it was tampered with.',
        'MAPPING: Unverified origin / tampering concern → Data Provenance Testing. Internal consistency issues → Dataset Constraint Testing. Distribution mismatch → Representativeness Testing.'
      ]
    },
    {
      id: '5.1.1+',
      title: 'Data Provenance Testing (supplement to 5.1.1)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Data provenance testing: verifies the ORIGIN, LINEAGE, and INTEGRITY of datasets throughout the ML pipeline. Critical when using data from unverified, third-party, or external sources.',
        "Key concerns addressed: Where did this data come from? Has it been tampered with or poisoned? Is the documented source accurate? Can we trace the data's transformation history?",
        'Test approaches: Source verification (confirm data originates from claimed legitimate sources). Integrity checks (cryptographic hashing to detect tampering or corruption). Lineage auditing (trace data transformations from collection to training). Chain of custody documentation review (verify documented ownership, consent, licensing).',
        'Key distinction from constraint testing: Constraint testing checks INTERNAL CONSISTENCY (ranges, types). Provenance testing checks EXTERNAL VALIDITY (origin, integrity, trustworthiness).',
        'Risks it addresses: Data poisoning attacks (malicious actors insert corrupted training examples). Supply chain attacks on training data. Regulatory compliance (GDPR data origin documentation).'
      ],
      examInsights: [
        'Q24 maps to AI-5.1.1 (Input Data Risks) because data provenance testing is listed there as a mitigation. This section provides the full details.',
        'DISTINGUISH FROM CONSTRAINT TESTING: Constraints = is the data internally consistent? Provenance = where did this data come from and was it tampered with?',
        'REAL EXAM SCENARIO (Q24): Third-party dataset, uncertain origin, possible tampering → Data Provenance Testing is the correct answer.',
        'REGULATORY ANGLE: Data provenance is increasingly required for EU AI Act compliance — high-risk AI systems must document training data sources.'
      ]
    },
    {
      id: '5.1.2',
      title: 'Testing for Bias',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Bias in MLS = non-random, UNFAIR differences in treatment based on SENSITIVE ATTRIBUTES (gender, age, race) — often unlawful and discriminatory. Two primary sources: Data Bias (unrepresentativeness, historical skews, deliberate poisoning in training data) and Algorithmic Bias (defects within the algorithm, model, or framework that introduce systemic unfairness — e.g., a decision threshold in a loan approval algorithm).',
        'Test approaches for detecting bias (all testable): Reviews of ML workflow and dataset documentation. Static analysis of data preparation code and model implementation code. EDA to reveal imbalanced distributions or anomalous groupings across sensitive attributes. Dynamic testing with a known unbiased and representative dataset — analyze predictions for statistically significant differences across sensitive groups.',
        'Disparate Impact Analysis — KEY technique: (1) Identify sensitive attributes for the model (e.g., gender, race). (2) Generate counterfactuals for sensitive attributes — change only the sensitive attribute while keeping everything else identical (e.g., change gender from male to female in a loan application). (3) Present counterfactuals to the model — generate outputs. (4) Analyze results statistically — if changing a sensitive attribute changes model results significantly → BIAS DETECTED.',
        'Can apply disparate impact analysis to COMBINATIONS of sensitive attributes to find hidden intersection bias. Warning: ensure counterfactuals are realistic — unrealistic examples may cause the model to respond to the unrealism rather than any underlying bias.'
      ],
      examInsights: [
        'Q25 CRITICAL TRAP: The question asks about detecting bias in TRAINING DATA EARLY. Answer = reviewing ML WORKFLOW and DATA PREPARATION PROCESSES. This is an early-stage PROCESS check before the model exists.',
        'Q25 TRAP — Option (d) disparate impact analysis requires a TRAINED MODEL to generate outputs — it cannot detect bias in training data BEFORE training begins.',
        "Q25 TRAP — Option (b) analyzing model predictions also requires a TRAINED MODEL. These approaches test the model's outputs for bias, not the training data itself.",
        'Q25 TRAP — Option (a) static analysis of model source code examines MODEL LOGIC, not training data characteristics.',
        'EARLY vs LATE bias detection: Workflow review (process check, EARLY). Static analysis of data prep code (EARLY). EDA on data (EARLY). Dynamic testing with predictions (LATE — requires model).'
      ]
    },
    {
      id: '5.1.3',
      title: 'Data Pipeline Testing',
      level: 'K2',
      type: 'skim',
      summary: 'Layered testing approach: Design phase (pipeline design reviews). Component testing (data ingestion, transformation scripts, sensor interfaces — code reviews, static analysis, security vulnerability testing). Component integration testing (verifies seamless data flow across interfaces, detects mismatched interface bugs). System testing (smoke test → functional test → non-functional: performance, scalability, security → fault injection testing to test robustness with corrupted inputs → back-to-back testing comparing operational vs training pipeline). System integration testing (interaction with external data sources, storage, ML models). Testing in production (back-to-back + A/B testing, real-time monitoring). Configuration management reviews (verify correct versions/configs across training, testing, production). Key distinction: Training pipelines focus on data integrity; operational pipelines prioritize reliability, performance, and maintainability.',
      examInsights: [
        'Q26 KEY: Training pipeline = focus on DATA QUALITY (is the data handled correctly?). Operational pipeline = focus on PERFORMANCE, RELIABILITY, SCALABILITY (non-functional aspects under load).',
        'Q26 TRAP — Option (c) is wrong: configuration management reviews are important for BOTH training AND operational pipelines — they ensure consistency across training, testing, and production environments.',
        'Q26 TRAP — Options (a) and (b) suggest one pipeline type only uses one level of testing — both pipelines use a FULL LAYERED APPROACH.',
        'PRINCIPLE: The PURPOSE of the pipeline dictates the test strategy focus, not the testing approach itself.'
      ]
    },
    {
      id: '5.1.4',
      title: 'Testing for Data Representativeness',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Data representativeness testing: determines how closely dataset characteristics match the REAL-WORLD OPERATIONAL DATA the model will encounter. Addresses: skewed datasets, missing data, disproportionate feature distributions, inadequate scenario coverage, imbalanced class representation.',
        'Step 1 — Define the Target Population: Understand use cases and operational context. Analyze end user and environment characteristics. Identify expected operational distributions and edge cases (consult domain experts, analyze similar applications, use benchmark datasets like NIST). Apply STRATIFIED SAMPLING to create a baseline covering all relevant subgroups.',
        'Step 2 — Analyze Data Characteristics: Apply EDA on both the training/test datasets AND a reference dataset representing expected operational data. Visualize distributions (histograms, scatter plots). Examine feature correlations — identify patterns to preserve. Identify anomalies, gaps, unusual concentrations.',
        'Step 3 — Statistical Assessment: Use formal statistical tests: Chi-squared test and Kolmogorov-Smirnov test. Check for class imbalances — especially in classification. Verify coverage of both typical AND edge/boundary cases.',
        'Timing: perform BEFORE model training (prevent building on unrepresentative data). After deployment: CONTINUOUSLY MONITOR for data drift from original training distributions.'
      ],
      examInsights: [
        "Q27 KEY: The REFERENCE DATASET's purpose is to serve as a QUANTITATIVE STATISTICAL BASELINE for formally comparing the statistical properties of training data against expected operational data.",
        'Q27 TRAP — Option (a) is wrong: a reference dataset is NOT universal or derived solely from industry benchmarks. It is TAILORED to match the target operational environment.',
        'Q27 TRAP — Option (c) is wrong: stratified sampling is applied to CREATE the reference dataset (to ensure all subgroups are covered), not applied directly to the training data.',
        'Q27 TRAP — Option (d) is wrong: the reference dataset is NOT for final model testing. The TEST DATASET serves final validation.'
      ]
    },
    {
      id: '5.1.5',
      title: 'Dataset Constraint Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = APPLY — you must apply dataset constraint testing to a given scenario. Definition: verifies whether data in a dataset adheres to predefined rules or constraints — confirms integrity and consistency. Similar to database schema validation but for ML datasets.',
        'Single-Value Constraints (apply to ONE value for one attribute): Missing (tests for missing values or attributes). Range (tests that a value falls within a specified range). Type (tests that an attribute value matches the specified type — e.g., integer ≠ string).',
        'Multi-Value Constraints (apply across multiple values for an attribute): Sum (total of all values must equal/exceed/not exceed a specified value). Count (count of non-null values meets specified limits). Duplicate (tests for identical/near-identical instances; enforces a limit — often zero). Useful (tests that an attribute is NOT entirely unique values — if every entry is unique like an ID, it provides no learnable pattern). Outlier (identifies statistical outliers).',
        "Comparison Constraints (special multi-value type comparing ACROSS attributes): Greater Than (value of attribute A > value of attribute B — e.g., total lines of code > lines with defects). Correlate (values of one attribute correlate with another — e.g., marks ≥1.33 std devs above mean → grade 'A').",
        'Implementation: can be done manually but the scale of ML datasets REQUIRES AUTOMATION as part of the data pipeline. Automated tool reports to: data scientists (training data anomalies) OR operations staff (production data problems).'
      ],
      examInsights: [
        'Q28 SCENARIO: Validate that monthly_payment = loan_amount / 324 (mathematical relationship between TWO attributes). Which constraint type?',
        "Q28 KEY: A mathematical relationship between two attributes = COMPARISON CORRELATE CONSTRAINT. 'Correlate' checks that values of one attribute correlate with values of another according to a defined rule.",
        "Q28 TRAP — Range constraint only validates that a SINGLE attribute's values fall within bounds — it cannot check relationships between attributes.",
        'Q28 TRAP — Count constraint checks the QUANTITY of non-null values, not mathematical correctness of calculated fields.',
        'Q28 TRAP — Duplicate constraint identifies IDENTICAL values — but different applicants could legitimately have the same monthly payment.'
      ]
    },
    {
      id: '5.1.6',
      title: 'Label Correctness Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'In supervised learning, INACCURATE or INCONSISTENT labels directly undermine model performance and generalization. Label correctness testing addresses this.',
        "Six testing approaches — know them all: (1) Expert Review: domain experts manually review a sample of labeled data using domain knowledge and guidelines. (2) Multiple Annotation: multiple annotators independently label the same data points → compare using Inter-Annotator Agreement (IAA) metrics (Cohen's Kappa or percentage agreement). LOW IAA = poor guidelines, ambiguous data, or poor annotation.",
        '(3) Risk-Based Prioritization: focus reviews on (a) ambiguous data points near class boundaries, and (b) data most likely to impact application success or safety. (4) Data Distribution Analysis: compare label distribution against similar datasets — anomalies may indicate incorrect labels.',
        '(5) Automated Rule-Based Tests: automated checks for predefined label rules (e.g., bounding boxes must not overlap or extend beyond image boundaries). (6) Model Loss Analysis: data points with HIGH LOSS during training indicate the model struggles with the assigned label → potential mislabeling. (7) Model Confidence Score Analysis: data points with LOW PREDICTION CONFIDENCE may be mislabeled, ambiguous, or out-of-distribution.',
        'Best practice: combine approaches. Expert reviews establish guidelines early → IAA from multiple annotations refines the process → model-based approaches identify further defects as the model develops.'
      ],
      examInsights: [
        'Q29 KEY: Multiple annotations = independent labeling by multiple annotators → COMPARISON of annotations reveals DISAGREEMENTS → potential LABEL DEFECTS. It highlights INCONSISTENCY, not consistency.',
        'Q29 TRAP — Option (a) is wrong: multiple annotations are NOT automated. They involve HUMAN annotators working independently.',
        'Q29 TRAP — Option (c) is wrong: COMPARING LABEL DISTRIBUTIONS across datasets is DATA DISTRIBUTION ANALYSIS (approach #4), NOT multiple annotations.',
        'Q29 TRAP — Option (d) is wrong: flagging data points with HIGH MODEL LOSS is MODEL LOSS ANALYSIS (approach #6), NOT multiple annotations.',
        'MEMORY AID: Each approach identifies label defects through a different mechanism. Multiple annotation = disagreement between people. Model loss = model struggles. Confidence score = model uncertain.'
      ]
    }
  ]
};
