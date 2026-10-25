// CT-AI v2.0 — Chapter 5 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 46-53.

export default {
  intro:
    "Input data testing is one of the two ML-specific test levels (4.3.1). Its objective: confirm that the data used for training, testing, and prediction is of sufficient quality. Techniques include reviews, statistical techniques (bias testing), EDA of training data, and static and dynamic testing of the data pipeline. Section 5.1.5 (dataset constraint testing) is K3 — you must be able to APPLY it.",
  keywords: {
    general: [
      "data pipeline testing",
      "data representativeness testing",
      "dataset constraint testing",
      "input data testing",
      "label correctness testing",
      "review",
      "testing for bias",
    ],
    aiSpecific: ["disparate impact analysis", "multiple annotation"],
  },
  objectives: [
    { id: "AI-5.1.1", level: "K2", text: "Give examples of test approaches used for the risk mitigation of input data for a machine learning system" },
    { id: "AI-5.1.2", level: "K2", text: "Explain how to test for bias" },
    { id: "AI-5.1.3", level: "K2", text: "Summarize the various forms of data pipeline testing" },
    { id: "AI-5.1.4", level: "K2", text: "Explain how to test for data representativeness" },
    { id: "AI-5.1.5", level: "K3", text: "Apply dataset constraint testing" },
    { id: "AI-5.1.6", level: "K2", text: "Explain label correctness testing" },
    { id: "HO-5.1.7", level: "H2", text: "Hands-on: Perform input data testing for ML datasets" },
  ],
  sections: {
    "5.1.1": {
      objective: "AI-5.1.1",
      body: [
        { type: "p", text: "Each input-data risk maps to one or more mitigating test approaches — the exam asks you to match them." },
        { type: "table", headers: ["Potential risk", "Risk mitigation"], rows: [
          ["Training-data defects leading to bias · algorithm/model/framework problems introducing systemic unfairness", "Testing for bias (5.1.2)"],
          ["Data from untrustworthy sources · poorly managed data", "Data provenance testing"],
          ["Poisoned training data", "A/B testing (6.1.9) · data provenance testing · EDA (3.2.1) · red-teaming attacks (4.2.2)"],
          ["Internally inconsistent dataset · out-of-range data · wrong data types", "Dataset constraint testing (5.1.5)"],
          ["Sub-optimal feature selection", "Feature testing"],
          ["Imbalanced dataset (insufficient class coverage) · skew from augmentation · missing data · training data covering only a subset of use cases · full value range not covered", "Data representativeness testing (5.1.4)"],
          ["Poor labelling guidelines · ambiguous data · poor annotation causing inaccurate/inconsistent labels", "Label correctness testing (5.1.6)"],
          ["Pipeline design/integration failures · data-quality defects compromising outputs · operational performance degradation · security breaches or uncontrolled changes", "Data pipeline testing (5.1.3)"],
        ]},
        { type: "note", text: "Data provenance testing is a mitigation named in this table (untrustworthy sources, poisoning) — it is not a separately numbered syllabus section." },
      ],
    },
    "5.1.2": {
      objective: "AI-5.1.2",
      body: [
        { type: "p", text: "Bias in an ML system = non-random, unfair differences in treatment based on sensitive attributes (gender, age, race) — often unlawful, making the system discriminatory. Two primary sources: data bias (unrepresentative data, historical skews, deliberate poisoning) and algorithmic bias (defects in the algorithm, model, or framework — e.g. a decision threshold on credit scores in loan approval)." },
        { type: "list", intro: "Test approaches for detecting bias:", items: [
          "Reviews of the overall ML workflow — especially data preparation — for bias-introduction potential.",
          "Reviews of dataset documentation — how data was collected and annotated, which populations are represented.",
          "Static analysis of data-preparation programs and model code — anti-patterns, mishandled sensitive attributes.",
          "EDA of training data — visualization and clustering reveal imbalance, skewed distributions, anomalous groupings across sensitive attributes.",
          "Dynamic testing — feed a known unbiased, representative dataset through the system and check predictions for statistically significant outcome differences across sensitive groups. Catches bias regardless of whether it came from data or model development.",
          "Label correctness testing (5.1.6) — mislabeling can teach incorrect associations for specific sensitive attributes.",
        ]},
        { type: "list", intro: "Disparate impact analysis — the four-step procedure:", items: [
          "1. Identify the sensitive attributes for the model.",
          "2. Generate counterfactuals for those attributes (e.g. the same loan application with gender changed from male to female).",
          "3. Present the counterfactuals to the model and collect outputs.",
          "4. Analyze results across multiple tests for statistical significance: if changing a sensitive attribute changes the results, bias is present.",
        ]},
        { type: "note", title: "Two subtleties", text: "Disparate impact analysis also works on COMBINATIONS of sensitive attributes, exposing hidden combination bias. But keep counterfactuals realistic — the model may react to an unrealistic example itself rather than to any underlying bias." },
      ],
    },
    "5.1.3": {
      objective: "AI-5.1.3",
      body: [
        { type: "p", text: "The data pipeline feeds both training and prediction, so its quality is critical across the whole ML workflow. Testing is LAYERED — essentially the classic test levels applied to the pipeline:" },
        { type: "list", items: [
          "Design reviews — during the design phase.",
          "Component testing — ingestion components, transformation scripts, sensor interfaces: code reviews, static analysis, hardware-specific tests; validate transformation logic and data-validation rules, confirm error handling, test for vulnerabilities that could introduce malware or poisoned data.",
          "Component integration testing — data flows correctly across internal interfaces; catches mismatched interfaces and wrong assumptions between components.",
          "System testing — smoke testing first, then functional testing (transformations, routing) and non-functional testing (performance under load, scalability, security). Fault injection simulates defective inputs to measure robustness. Back-to-back testing (6.1.10) compares the operational pipeline against the training pipeline for consistency.",
          "System integration testing — pipeline vs. external systems: data sources, storage platforms, monitoring tools, downstream consumers such as ML models.",
          "Testing in production — back-to-back testing against previous versions; A/B testing (6.1.9) of new pipeline iterations against baselines; continuous monitoring/observability tooling for real-time behavior, performance, and defects.",
          "Configuration management reviews — correct pipeline code versions, configurations, and datasets across training, testing, and production.",
        ]},
        { type: "note", title: "Purpose changes priorities", text: "Training pipelines are often exploratory prototypes — testing prioritizes data integrity. Operational pipelines demand reliability, performance, and maintainability." },
      ],
    },
    "5.1.4": {
      objective: "AI-5.1.4",
      body: [
        { type: "p", text: "Data representativeness testing checks how closely training/validation/test datasets match the real-world data the model will meet in operation. It targets skewed datasets, missing data, disproportionate feature distributions, inadequate scenario coverage, and imbalanced classes." },
        { type: "list", intro: "Three-step approach:", items: [
          "1. Define the target population — understand use cases and operational context; analyze end users and environments; identify expected operational distributions and critical edge cases (consult domain experts, analyze existing/similar systems, use trusted benchmark datasets e.g. NIST); apply stratified sampling to build a baseline covering all relevant subgroups.",
          "2. Analyze data characteristics — EDA on both the datasets under evaluation and the reference dataset; visualize distributions (histograms, scatter plots); examine feature relationships and correlations to preserve patterns; find anomalies, gaps, unusual concentrations.",
          "3. Apply statistical assessment — formal tests such as Chi-squared and Kolmogorov-Smirnov to compare distributions; check class imbalances; verify coverage of typical AND edge/boundary cases.",
        ]},
        { type: "note", title: "When", text: "Run BEFORE model training (don't build on unrepresentative data), then continuously monitor operational input data post-deployment for changes indicating data drift (6.1.7)." },
      ],
    },
    "5.1.5": {
      objective: "AI-5.1.5",
      body: [
        { type: "p", text: "Dataset constraint testing verifies data against predefined rules to confirm integrity and consistency. The constraints act like a database schema for the ML dataset — a logical model that correct data must satisfy. K3: given a dataset and constraints, you must APPLY the right constraint types." },
        { type: "table", headers: ["Category", "Constraint", "What it tests"], rows: [
          ["Single-value (one value, one instance)", "Missing", "Missing values or missing attributes"],
          ["", "Range", "Value lies in a given range"],
          ["", "Type", "Value matches the specified type (an 'integer' attribute isn't a string or real)"],
          ["Multi-value (one attribute across instances)", "Sum", "Sum of all values equals / exceeds / stays under a limit (e.g. total F1 race points ≤ 102 and > 50.5)"],
          ["", "Count", "Count of non-null values equals / exceeds / stays under a limit"],
          ["", "Duplicate", "Identical or near-identical values/instances beyond an allowed limit (often zero)"],
          ["", "Useful", "Attribute contains some repeated values — all-unique attributes (IDs, timestamps) provide no learnable patterns"],
          ["", "Outlier", "Values that qualify as statistical outliers"],
          ["Comparison (between attributes)", "Greater Than", "One attribute's value exceeds another's (e.g. lines of code > lines with defects)"],
          ["", "Correlate", "Values of one attribute correlate with another (e.g. marks ≥1.33 SD above mean ⇔ grade 'A')"],
        ]},
        { type: "example", title: "Applying it", text: "Customer dataset with columns age, country, order_total, customer_id: age → Range (0–120) and Type (integer); country → Missing (no empty cells); order_total → Outlier (flag statistical outliers) and Sum (batch total matches ledger); customer_id → Duplicate (zero allowed) — and note customer_id fails the Useful test as a feature since every value is unique." },
        { type: "p", text: "Constraint checks can run manually, but dataset size means they're normally automated inside the data pipeline. The tool reports anomalies to data scientists (training data) or operations staff (operational data)." },
      ],
    },
    "5.1.6": {
      objective: "AI-5.1.6",
      body: [
        { type: "p", text: "Label correctness is essential for supervised learning — inaccurate or inconsistent labels directly undermine model performance and generalization." },
        { type: "list", intro: "Approaches:", items: [
          "Expert review — domain experts/trained annotators manually review a sample against guidelines.",
          "Multiple annotation — several annotators label independently; comparison (a form of back-to-back testing, 6.1.10) exposes disagreements. Inter-annotator agreement (IAA) is measured with Cohen's Kappa or percentage agreement; low IAA signals defective guidelines, ambiguous data, or poor annotation.",
          "Risk-based prioritization — focus review/annotation on likely-mislabeled samples (ambiguous, near class boundaries) and on data most critical to success or safety.",
          "Data distribution analysis — compare label distributions with comparable datasets to spot anomalies.",
          "Automated rule-based tests — predefined label rules, e.g. bounding boxes must not overlap or extend beyond image boundaries.",
          "Model loss analysis — training points with high loss (predictions far from their labels) hint at mislabeling.",
          "Model confidence score analysis — low-confidence predictions may mean mislabeled, ambiguous, or out-of-distribution points.",
        ]},
        { type: "p", text: "Combinations work best: expert reviews establish clear guidelines early; IAA from multiple annotation refines the labelling process; model-based approaches (loss, confidence) catch further defects as the model develops." },
      ],
    },
  },
};
