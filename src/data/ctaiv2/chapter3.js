// CT-AI v2.0 — Chapter 3: Machine Learning
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 3,
  title: 'Machine Learning',
  time: '375 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: 'The largest chapter — 375 minutes. Section 3.3.1 is K3 (Calculate!) and is the highest exam priority for calculations. The ML Workflow (3.1.2) is the backbone of Chapters 5, 6, and 7. Dataset roles (3.2.3) and data preparation (3.2.1) are foundational for input data testing. Neural network coverage measures (3.4.3) are lighter — skim.',
  sections: [
    {
      id: '3.1.1',
      title: 'Different Forms of Machine Learning',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Supervised Learning — uses labeled data. Two types: Classification (predict discrete categories — spam/not spam, cat/dog image recognition) and ML Regression (predict continuous values — age estimation, stock prices). IMPORTANT: 'ML regression' ≠ regression testing in software quality.",
        'Unsupervised Learning — uses unlabeled data, discovers hidden patterns. Two types: Clustering (group similar data — customer segmentation) and Association (identify relationships — product recommendation patterns based on purchasing behavior).',
        'Reinforcement Learning — an intelligent agent learns via rewards (positive feedback) and penalties (negative feedback) from environment interactions. No dataset required — learns from experience. Challenges: designing reward function, setting up environment, selecting best strategy. Applications: robotics, autonomous vehicles, adaptive chatbots.',
        'Decision rule for selecting ML type: Has output label? → Supervised. Label is categorical? → Classification. Label is numeric? → ML Regression. No output label? → Unsupervised. Group similar items? → Clustering. Find relationships? → Association. Agent in environment with decisions? → Reinforcement Learning.'
      ],
      examInsights: [
        'Q10 TRAP — Language translation apps (French → Spanish) = CLASSIFICATION, NOT reinforcement. They use labeled parallel text pairs (supervised), not a reward function. No rewards/penalties involved.',
        "Q10 TRAP — When a system 'adjusts based on how much users spend,' the spending amount is the REWARD FUNCTION → Reinforcement Learning.",
        "Q10 KEY — Regression predicts a CONTINUOUS VALUE (time until failure, temperature). If the output is a number on a scale, it's regression.",
        'Q-A4: Association = mining unlabeled patient records to find dependencies between attributes (gene and disease). No discrete labels or reward function.'
      ]
    },
    {
      id: '3.1.2',
      title: 'Machine Learning Workflow',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        '11-step logical workflow (applied iteratively in practice): Understand Objectives → Select Framework → Select & Build Algorithm → Prepare & Test Data → Train the Model → Evaluate the Model → Tune the Model → Test the Model → Deploy the Model → Use the Model → Monitor & Tune.',
        'Model Generation = Train + Evaluate + Tune (the iterative inner loop). Key distinction: Evaluation uses the VALIDATION dataset; Testing uses the independent TEST dataset (holdout).',
        'Hyperparameters: Model hyperparameters = define model structure (e.g., number of neural network layers, depth of decision tree). Algorithm hyperparameters = control training (e.g., number of epochs, learning rate).',
        'Deployment step: re-engineer model for target platform (cloud, embedded, edge) via ML development framework. Target platforms include embedded systems and cloud APIs. The re-engineered deployed model must be retested to verify it still meets acceptance criteria.',
        'Monitoring step: evaluate for drift (see 6.1.7), retrain if needed, use A/B testing to compare updated model vs original version. Workflow is iterative — failures in testing often trace back to data preparation.'
      ],
      examInsights: [
        'Q11 CRITICAL MATCHING: Deploy the Model = tested on TARGET PLATFORM (A → D). Prepare & Test Data = IDENTIFY ORIGIN of test data (B). Test the Model = verify AGREED PERFORMANCE CRITERIA are met (C). Evaluate the Model = model performance tested using VALIDATION DATA (D → A). Correct: 1D-2B-3C-4A.',
        "Q11 TRAP — 'Evaluate the Model' uses VALIDATION data; 'Test the Model' uses independent TEST data. These two activities are often confused.",
        "Q11 TRAP — 'Deploy the Model' involves testing the model on the TARGET PLATFORM — not just installing it. The deployment step has its own testing.",
        'Q-A5: Correct workflow order starts with data preparation activities before training, followed by evaluation and tuning, then testing, then deployment.'
      ]
    },
    {
      id: '3.1.4',
      title: 'Pretrained Models, Fine-Tuning, and RAG',
      level: 'K2',
      type: 'skim',
      summary: 'Fine-tuning: take a pretrained neural network and adapt it to a new task with additional training on task-specific data. Requires much less training data/effort than building from scratch. Works best when original and new tasks are similar (cat breed classifier → dog breed classifier: good. cat breed classifier → accent detection: poor). RAG (Retrieval-Augmented Generation): provide external data sources to an LLM at query time — relevant documents are embedded into the prompt. NO CHANGE to the pretrained model itself. A pretrained model can use RAG, fine-tuning, or both. Critical: biases and vulnerabilities in pretrained models CARRY OVER — testing is essential when adapting.',
      examInsights: [
        "Q12 TRAP — RAG does NOT add new layers to the neural network. It retrieves relevant external data at inference time and augments the MODEL'S INPUT (the prompt), not the model architecture.",
        'Q12 TRAP — Fine-tuning CANNOT GUARANTEE prevention of unfair outputs. Bias can persist or even be INTRODUCED during fine-tuning.',
        'Q12 TRAP — Fine-tuning does NOT require updating ALL layers. Only some layers are updated while others remain frozen.',
        "Q12 KEY (correct answer d): RAG requires curating/indexing relevant external data upfront but requires NO CHANGES to the pre-trained model itself. The model's parameters stay frozen."
      ]
    },
    {
      id: '3.2.1',
      title: 'Activities in Data Preparation',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Data preparation consumes the LARGEST proportion of ML workflow effort. Three main activities: Data Acquisition, Data Preprocessing, Feature Engineering — plus EDA in parallel.',
        'Data Acquisition: Identify data types (numerical, categorical, images, text, time series, sensor, geospatial, video, audio). Gather from databases, APIs, sensors. Label data for supervised learning — verify accuracy and consistency.',
        'Data Preprocessing: Cleaning (remove defects, duplicates, outliers; impute missing values using mean/median/mode; anonymize personal data). Transforming (scale and normalize for consistency). Augmenting (increase sample size; add adversarial examples for robustness; generate synthetic data). Sampling (reduce training times/costs).',
        'Feature Engineering: Selection (identify most relevant features — reduces overfitting, improves speed and accuracy). Extraction (derive informative, non-redundant features from existing ones — reduces dimensionality).',
        'EDA (Exploratory Data Analysis) — done in parallel: discover trends, patterns, anomalies; visualize data using plots and charts. Operational data must MATCH the characteristics of training data (distributions, feature ranges) for production performance.'
      ],
      examInsights: [
        'Q13 KEY (correct): Data pre-processing includes AUGMENTATION (increases examples by adding modified versions) AND SAMPLING (reduces data by selecting subsets). These are BOTH part of preprocessing.',
        'Q13 TRAP — Feature engineering is performed BEFORE model training (to prepare data), NOT after training. Its purpose is to improve performance DURING training.',
        "Q13 TRAP — EDA is NOT 'exploratory testing.' EDA is an analytical process (visualization, statistics) to understand data. Exploratory testing is a software testing technique — these are entirely different.",
        'Q13 TRAP — Option (a) is incomplete: data preparation is NOT just gathering raw data. It also includes cleaning, transforming, and organizing.'
      ]
    },
    {
      id: '3.2.3',
      title: 'Training, Validation, and Test Datasets',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three distinct datasets — MUST know all three roles: Training Dataset (used to TRAIN/FIT the model). Validation Dataset (used to EVALUATE and TUNE — hyperparameter optimization). Test Dataset / Holdout Dataset (used ONLY for FINAL testing of the tuned model — NEVER used during training or tuning).',
        "Confusing validation and test datasets is a common exam trap. The test dataset must never influence model development — otherwise results won't reflect real-world quality.",
        'K-Fold Cross-Validation (for limited data): Divide data into k folds (typically 5 or 10). For each fold: train on k-1 folds, validate on the held-out fold. Repeat k times. Average performance metrics across all folds for reliable generalization estimate. Use stratified sampling for imbalanced data.',
        'After cross-validation tuning: train final model on ALL training+validation data, then evaluate ONCE on the holdout test set. If no holdout is feasible due to extreme data scarcity → cross-validation performance is OPTIMISTICALLY BIASED (not an unbiased estimate).',
        'Other resampling methods: leave-one-out cross-validation (k = number of samples) and bootstrap techniques.'
      ],
      examInsights: [
        'Q14 KEY (correct): Training = CREATE/FIT model. Validation = TUNE model (hyperparameters). Test = EVALUATE on UNSEEN data. This three-way split is fundamental.',
        "Q14 TRAP — The training dataset's primary role is to FIT the model, NOT to ensure generalization. The validation dataset prevents overfitting by providing independent feedback during development.",
        'Q14 TRAP — The test dataset is for FINAL assessment AFTER development is complete. It is NEVER used for initial evaluation or for any development activity.',
        'CRITICAL RULE: Any dataset used during development (training or tuning) can no longer serve as an unbiased final test. Test dataset = completely untouched until the very end.'
      ]
    },
    {
      id: '3.3.1',
      title: 'ML Functional Performance Metrics',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'K3 = APPLY — you WILL calculate these from a confusion matrix. Master all four formulas. The confusion matrix: TP (predicted positive, was positive), TN (predicted negative, was negative), FP (predicted positive, was negative — Type I error), FN (predicted negative, was positive — Type II error).',
        'Accuracy = (TP + TN) / (TP + TN + FP + FN) × 100% → overall proportion of correct predictions. Use when classes are balanced and FP/FN costs are similar.',
        'Precision = TP / (TP + FP) × 100% → of all predicted positives, how many were actually positive? Use when FALSE POSITIVES are costly (e.g., spam filter wrongly blocking real emails).',
        'Recall = TP / (TP + FN) × 100% → of all actual positives, how many did we catch? Use when FALSE NEGATIVES are costly (e.g., missing a cancer diagnosis is catastrophic).',
        'F1-Score = 2 × (Precision × Recall) / (Precision + Recall) → harmonic mean. Range 0–100. High F1 = both high precision AND high recall. Use when classes are imbalanced AND both metrics matter equally.',
        'Example: TP=90, TN=80, FP=10, FN=20 → Accuracy = 170/200 = 85%. Precision = 90/100 = 90%. Recall = 90/110 ≈ 81.8%. F1 = 2×(90×81.8)/(90+81.8) ≈ 85.7.'
      ],
      examInsights: [
        'Q15 EXAM CONFUSION MATRIX: TP=78, TN=14, FP=22, FN=6. Total=120. Precision = TP/(TP+FP) = 78/(78+22) = 78/100 = 78%. Answer: (78/100) × 100.',
        "Q15 TRAP — Option (b) 78/120 is Recall's denominator-like form but wrong. Option (a) 20/120 = TN-ish calculation. Only option (c) 78/100 uses the correct Precision formula: TP÷(TP+FP).",
        'DENOMINATOR CHEAT SHEET: Precision denominator = TP + FP = all PREDICTED positives (your positive predictions). Recall denominator = TP + FN = all ACTUAL positives (ground truth positives). Accuracy denominator = ALL FOUR cells.',
        'WHEN TO USE: Use Precision when false positives are expensive. Use Recall when false negatives are dangerous (medical, security). F1 when you need balance on imbalanced data.'
      ]
    },
    {
      id: '3.4.1',
      title: 'Structure and Working of a Deep Neural Network',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three layer types: Input Layer (receives raw inputs — e.g., pixel values from camera). Hidden Layers (artificial neurons/nodes — perform computations, gradually transform input into abstract representations). Output Layer (provides predictions — e.g., probability that image contains a cat).',
        "Each neuron computes its activation value in two steps: (1) Compute weighted sum of activation values from all connected neurons in previous layer (each connection has its own weight) + the neuron's individual bias. (2) Pass that sum through a non-linear activation function.",
        'Training process: Weights initialized to small random values; biases to zero or small values. Training data passes forward through network (forward pass) → output generated. Output compared to correct label → error/loss calculated. Backpropagation: loss fed back to adjust all weights and biases to minimize error. One complete pass through ALL training data = one EPOCH.',
        'Perceptron: earliest neural network — ONE layer, ONE neuron. Used for supervised binary classification of linearly separable problems (e.g., spam vs not spam with a linear decision boundary).',
        "Deep Neural Network (DNN) = multi-layer perceptron. 'Deep' because it has multiple hidden layers. Note: neuron 'bias' here ≠ statistical bias (the discriminatory kind from Section 5.1.2)."
      ],
      examInsights: [
        'Q16 KEY: After calculating loss, the NEXT step is BACKPROPAGATION — adjusting weights and biases to reduce the loss. This is the core training loop.',
        'Q16 TRAP — Option (b) is wrong: training does NOT re-run the same data just to confirm the loss value. It moves to the next batch or completes the epoch.',
        'Q16 TRAP — Option (c) is wrong: activation functions are chosen during MODEL DESIGN and are NOT changed during a training run.',
        'Q16 TRAP — Option (d) is wrong: resetting weights to random values happens at the START of training (initialization), not after calculating loss.'
      ]
    },
    {
      id: '3.4.3',
      title: 'Coverage Measures for Neural Networks',
      level: 'K2',
      type: 'skim',
      summary: "Neural networks don't follow explicitly coded paths — behavior is dictated by weights, biases, and activations. Need specialized coverage metrics. Three types: Neuron Coverage (proportion of neurons where output exceeds a threshold during testing). k-Multisection Neuron Coverage/kMNC (possible output range of each neuron divided into k sections; proportion of sections activated). Neuron Boundary Coverage/NBC (proportion of neurons exceeding max or falling below min activation achieved during training). Key limitation: structural coverage alone does NOT guarantee good generalization — networks can learn spurious correlations. Combine with adversarial and metamorphic testing. Commercial tools are currently LIMITED.",
      examInsights: [
        'Q-A6 KEY (correct answer c): Coverage alone is insufficient because a neural network can achieve HIGH STRUCTURAL COVERAGE while still RELYING ON MISLEADING OR IRRELEVANT FEATURES. The network activates neurons but for the wrong reasons.',
        'Q-A6 TRAP — Option (a) is wrong: the limitation is about internal reasoning quality, not specifically tasks involving human feedback.',
        'Q-A6 TRAP — Coverage metrics are NOT for comparing different model sizes — they are percentages that normalize for size.',
        'PRINCIPLE: High neuron coverage ≠ high-quality predictions. Always combine coverage with functional testing.'
      ]
    }
  ]
};
