// CT-AI v2.0 — Chapter 3 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17), pp. 26-37.
// Hands-on objectives (HO-3.1.3, HO-3.2.2, HO-3.3.2, HO-3.3.3, HO-3.4.2) are practical
// exercises and not examinable as written questions; they are listed for completeness.

export default {
  intro:
    "The largest chapter of the syllabus (375 minutes). It covers the three forms of ML, the end-to-end ML workflow (the backbone that Chapters 5–7 hang their testing activities on), pretrained models / fine-tuning / RAG, data preparation, the three dataset roles, the K3 confusion-matrix metrics you must be able to CALCULATE, and neural networks with their coverage measures.",
  keywords: {
    general: [
      "K-multisection neuron coverage",
      "ML functional performance criteria",
      "ML functional performance metric",
      "ML model",
      "neuron boundary coverage",
      "neuron coverage",
      "perceptron",
    ],
    aiSpecific: [
      "association",
      "classification",
      "clustering",
      "data preparation",
      "machine learning",
      "ML algorithm",
      "ML development framework",
      "ML workflow",
      "pretrained model",
      "ML regression",
      "reinforcement learning",
      "supervised learning",
      "unsupervised learning",
    ],
  },
  objectives: [
    { id: "AI-3.1.1", level: "K2", text: "Distinguish between the different forms of ML" },
    { id: "AI-3.1.2", level: "K2", text: "Summarize the workflow used to create an ML system" },
    { id: "HO-3.1.3", level: "H2", text: "Hands-on: Create an ML model" },
    { id: "AI-3.1.4", level: "K2", text: "Summarize the use of pretrained models, fine-tuning, and retrieval-augmented generation" },
    { id: "AI-3.2.1", level: "K2", text: "Explain the activities related to data preparation" },
    { id: "HO-3.2.2", level: "H2", text: "Hands-on: Perform data preparation to support the creation of an ML model" },
    { id: "AI-3.2.3", level: "K2", text: "Contrast the use of training, validation, and test datasets in the development of an ML model" },
    { id: "AI-3.3.1", level: "K3", text: "Calculate common ML functional performance metrics from a given set of confusion matrix data" },
    { id: "HO-3.3.2", level: "H2", text: "Hands-on: Evaluate an ML model using selected ML functional performance metrics" },
    { id: "HO-3.3.3", level: "H2", text: "Hands-on: Show the impact of different ML models and dataset combinations" },
    { id: "AI-3.4.1", level: "K2", text: "Explain the structure and working of a deep neural network" },
    { id: "HO-3.4.2", level: "H1", text: "Hands-on: Experience the implementation of a perceptron" },
    { id: "AI-3.4.3", level: "K2", text: "Describe the different coverage measures for neural networks" },
  ],
  sections: {
    "3.1.1": {
      objective: "AI-3.1.1",
      body: [
        { type: "p", text: "ML algorithms fall into three categories, distinguished by the kind of data and feedback they learn from." },
        { type: "table", headers: ["Form", "Learns from", "Sub-types", "Typical applications"], rows: [
          ["Supervised learning", "Labeled data (each input has an output label)", "Classification (assign predefined classes) · ML regression (predict continuous values)", "Spam vs. not-spam, image recognition; age estimation, stock forecasting"],
          ["Unsupervised learning", "Unlabeled data — infers patterns without output labels", "Clustering (group by similarity) · Association (find relationships among attributes)", "Customer segmentation; product recommendations from purchasing patterns"],
          ["Reinforcement learning", "Interaction with an environment — rewards and penalties, no dataset", "—", "Robotics, autonomous vehicles, adaptive chatbots"],
        ]},
        { type: "note", title: "Terminology trap", text: "'ML regression' predicts continuous numerical values. It is NOT the 'regression' of other ISTQB syllabi (change-related defects after modifications). The exam likes this distinction." },
        { type: "p", text: "Reinforcement learning's specific challenges: setting up the environment, designing the reward function, and selecting the best strategy for the goal. The agent learns from experience, not from a dataset." },
        { type: "example", title: "Choosing the form", text: "Has labeled output? → supervised (categorical label → classification; numeric label → ML regression). Unlabeled data? → unsupervised (grouping similar items → clustering; finding co-occurrence relationships → association). An agent acting in an environment with feedback? → reinforcement learning." },
      ],
    },
    "3.1.2": {
      objective: "AI-3.1.2",
      body: [
        { type: "p", text: "The ML workflow is a logical sequence applied iteratively in practice. Testers need it because different test activities attach to different stages, and failures often originate upstream (data preparation, model selection)." },
        { type: "list", intro: "The activities in order:", items: [
          "Understand the objectives — stakeholders agree the model's purpose; acceptance criteria (including ML functional performance metrics) are defined.",
          "Select a framework — based on objectives, acceptance criteria, and business priorities.",
          "Select & build the algorithm — chosen per objectives, criteria, and available data; often retrieved from a library rather than hand-coded; compiled if required.",
          "Prepare & test data — data acquisition, preprocessing, feature engineering, with exploratory data analysis (EDA) alongside. Data must be representative of operational data. Data and automated preparation steps are themselves tested (Chapter 5).",
          "Train the model — the algorithm trains the model on training data. Model hyperparameters define model structure (e.g. number of layers, tree depth); algorithm hyperparameters control training (e.g. number of iterations).",
          "Evaluate the model — measured against agreed ML functional performance metrics using the VALIDATION dataset. Typically several models (different algorithms/datasets) are compared.",
          "Tune the model — adjust model and algorithm hyperparameters based on evaluation; retrain. Train + evaluate + tune = 'model generation'.",
          "Test the model — an INDEPENDENT test dataset verifies the agreed ML functional performance criteria. If test performance is much lower than evaluation, go back to model generation or even data preparation. Non-functional tests (e.g. prediction time) also run here.",
          "Deploy the model — re-engineered for the target platform (embedded, cloud/web API) with its data pipeline, usually via the framework; the deployed model is re-tested against acceptance criteria.",
          "Use the model — integrated into the larger AI-based system; batch predictions on schedule or real-time on request.",
          "Monitor & tune the model — operational evaluation against acceptance criteria to catch drift (6.1.7); may retrain with new data and/or new hyperparameters, comparing new vs. old with A/B testing (6.1.9).",
        ]},
        { type: "note", title: "Integration is NOT in the workflow", text: "The workflow excludes integrating the ML model with non-ML components (e.g. the data pipeline in vision systems). When the model is part of a larger system, integration, system, and acceptance test levels may apply after model development." },
      ],
    },
    "3.1.4": {
      objective: "AI-3.1.4",
      body: [
        { type: "p", text: "Training from scratch is costly and slow. Fine-tuning takes a pretrained neural network and adapts it to a new task with additional training on task-specific data — needing far less data and effort. Tuning can touch the whole network, only specific layers (typically near the output end), or added layers. After tuning, ML functional performance is evaluated and further fine-tuning applied until acceptance criteria are met." },
        { type: "example", title: "Task similarity decides success", text: "Cat-breed classifier → dog-breed classifier: small difference, fine-tuning works well. Cat-breed classifier → spoken-accent recognition: too different, ineffective. Fine-tuning an LLM for ISTQB-defined boundary value analysis: a small change, readily achievable with good training data." },
        { type: "p", text: "Retrieval-Augmented Generation (RAG) is the alternative: task-specific data sources are transformed into a searchable format, relevant documents are retrieved for a given prompt and incorporated into an enhanced prompt for the LLM. The pretrained model itself is NOT changed. A pretrained model can use RAG, fine-tuning, or both." },
        { type: "note", title: "Inherited risk", text: "Biases and vulnerabilities in the pretrained model carry over to the new model — testing must confirm reliable, fair performance on the new task." },
      ],
    },
    "3.2.1": {
      objective: "AI-3.2.1",
      body: [
        { type: "p", text: "Data preparation is one of the most crucial and resource-intensive ML workflow activities — it typically consumes a significantly larger share of effort than model selection and building. It is intrinsically linked to the data pipeline that transforms raw data for both training and prediction. If operational data differs significantly from training data, performance and safety assumptions may no longer hold." },
        { type: "list", intro: "Three key activity groups:", items: [
          "Data acquisition — identify relevant data types (numerical, categorical, images, text, time series, sensor, geospatial, video, audio); gather from databases, APIs, real-time sensors; label data for supervised tasks, verifying accuracy and consistency.",
          "Data preprocessing — clean (remove defects/duplicates/outliers; impute missing values with mean/median/mode; anonymize personal data for privacy compliance); transform formats, scale, normalize; augment data (increase sample size, add adversarial examples for robustness, generate synthetic data); sample subsets to cut training time and cost.",
          "Feature engineering — select features by their contribution to model performance; extract informative, non-redundant features to reduce training times and computational costs.",
        ]},
        { type: "p", text: "Exploratory data analysis (EDA) runs in parallel: discovering trends, patterns, and anomalies, and visualizing data with plots and charts. Preparation is iterative and often manual; activities may be reordered or omitted per project. Operational data should match training-data characteristics (distributions, feature ranges), though production preparation steps may be adjusted for efficiency and scalability." },
      ],
    },
    "3.2.3": {
      objective: "AI-3.2.3",
      body: [
        { type: "table", headers: ["Dataset", "Used for", "Workflow activity"], rows: [
          ["Training dataset", "Training the model", "Train the model"],
          ["Validation dataset", "Evaluating and then tuning the model", "Evaluate + tune (model generation)"],
          ["Test dataset (holdout)", "Final check of the tuned model", "Test the model"],
        ]},
        { type: "p", text: "The three sets should be logically equivalent — e.g. randomly selected from a single representative dataset. With abundant data, the split depends on: expected model complexity, the training algorithm, available resources (RAM, disk, compute, bandwidth, time), and the desired confidence in the model." },
        { type: "p", text: "With limited data, a three-way split risks underfitting from too little training data. Common strategy: set aside a small final hold-out test set, then run k-fold cross-validation (k commonly 5 or 10) on the remaining training+validation pool. The data is divided into k folds; the model trains on k−1 folds and validates on the held-out fold, repeated k times so each fold validates once. Folds are randomly assigned, often with stratified sampling so each fold is representative (important for imbalanced or small datasets)." },
        { type: "p", text: "Per-fold metrics (accuracy, F1-score) are averaged for a more reliable estimate of generalization. After choosing hyperparameters via cross-validation, a final model is trained on the whole pool (all data except the hold-out set) and evaluated ONCE on the hold-out test set for an unbiased assessment. If no hold-out set is feasible, the average cross-validation performance is optimistically biased — it cannot serve as an unbiased estimate." },
        { type: "p", text: "Other resampling methods for limited data: leave-one-out cross-validation (k = number of samples) and bootstrap techniques." },
      ],
    },
    "3.3.1": {
      objective: "AI-3.3.1",
      body: [
        { type: "p", text: "Classification models rarely get everything right (probabilistic models, noisy data). A confusion matrix categorizes each prediction into one of four cells. The matrix may be drawn with predicted/actual axes swapped, but always yields the same four values." },
        { type: "table", headers: ["", "Actual positive", "Actual negative"], rows: [
          ["Predicted positive", "True Positive (TP)", "False Positive (FP)"],
          ["Predicted negative", "False Negative (FN)", "True Negative (TN)"],
        ]},
        { type: "list", intro: "The four K3 formulas — memorize them:", items: [
          "Accuracy = (TP + TN) / (TP + TN + FP + FN) × 100% — percentage of ALL correct classifications.",
          "Precision = TP / (TP + FP) × 100% — proportion of positive PREDICTIONS that are correct: how sure you can be about a positive prediction.",
          "Recall (sensitivity) = TP / (TP + FN) × 100% — proportion of ACTUAL positives found: how confident you are that no positives are missed.",
          "F1-score = 2 × (Precision × Recall) / (Precision + Recall) — harmonic mean of precision and recall (0–100). High = both precision and recall are high; low = the model misses true cases or raises many false alarms.",
        ]},
        { type: "example", title: "Worked calculation 1", text: "A tumor classifier evaluated on 200 scans: TP = 40, FP = 10, FN = 20, TN = 130. Accuracy = (40+130)/200 = 85%. Precision = 40/(40+10) = 80%. Recall = 40/(40+20) = 66.7%. F1 = 2×(0.8×0.667)/(0.8+0.667) = 2×0.5336/1.467 ≈ 72.7. Interpretation: when it says 'tumor' it's right 80% of the time, but it misses a third of real tumors — recall is the weak spot, which matters most in medical screening." },
        { type: "example", title: "Worked calculation 2 — why accuracy misleads", text: "Fraud detector on 1000 transactions where only 20 are fraud: TP = 5, FN = 15, FP = 10, TN = 970. Accuracy = (5+970)/1000 = 97.5% — looks great. But precision = 5/15 = 33.3% and recall = 5/20 = 25%: it misses 75% of fraud. F1 = 2×(0.333×0.25)/(0.333+0.25) ≈ 28.6. With imbalanced classes, accuracy hides failure; precision/recall/F1 expose it." },
        { type: "note", title: "Exam technique", text: "Write the matrix down, label the four cells, then substitute carefully. Distractors are usually the results of swapping FP↔FN or using the wrong denominator (TP+FN vs TP+FP). Precision = 'of predicted positives'; Recall = 'of actual positives'." },
      ],
    },
    "3.4.1": {
      objective: "AI-3.4.1",
      body: [
        { type: "p", text: "Artificial neural networks were designed to mimic the brain — a network of interconnected neurons. The single-layer perceptron is one of the earliest artificial neural networks: one layer, usable for supervised learning of binary classifiers on linearly separable problems (e.g. spam vs. not-spam separated by a straight line in the input space). Most current networks are deep neural networks — several layers; fully connected networks are effectively multi-layer perceptrons." },
        { type: "list", intro: "Three layer types:", items: [
          "Input layer — receives inputs (e.g. pixel values from a camera).",
          "Hidden layers — artificial neurons (nodes) between input and output; in fully connected architectures every neuron connects to each neuron of the next layer; successive layers may have different neuron counts. They transform the input into increasingly abstract representations.",
          "Output layer — delivers results (e.g. the likelihood that the image is a cat).",
        ]},
        { type: "p", text: "Each neuron (after the input layer) computes an activation value: a weighted sum of the activation values of all connected previous-layer neurons (each connection with its own weight) plus the neuron's individual bias, passed through a non-linear activation function. Note: this 'bias' is unrelated to the fairness bias of 5.1.2." },
        { type: "p", text: "Training: weights (and biases) start as small random values (biases sometimes zero). Training data flows through the network to produce an output, which is compared with the known correct result. The error (loss) is fed back through the network, adjusting weights and biases to minimize the difference. Each full pass through the training dataset is an epoch; over many epochs the network learns until output quality is good enough to stop." },
      ],
    },
    "3.4.3": {
      objective: "AI-3.4.3",
      body: [
        { type: "p", text: "Neural networks don't follow explicitly coded paths — behavior is dictated by learned weights, biases, and activations. Structural coverage measures assess how thoroughly test inputs exercise the network's internal mechanisms." },
        { type: "table", headers: ["Measure", "What it measures"], rows: [
          ["Neuron coverage", "Proportion of neurons whose output exceeds a specified threshold during testing"],
          ["k-Multisection neuron coverage (kMNC)", "Each neuron's possible output range is divided into k sections; kMNC = proportion of sections activated during testing"],
          ["Neuron boundary coverage (NBC)", "Proportion of neurons whose output goes ABOVE the training maximum or BELOW the training minimum during testing"],
        ]},
        { type: "p", text: "Value for testers: revealing untested areas of the model that may hide defects or unlearned behavior — if certain neurons or layers never activate under test, the related decision boundaries are questionable, prompting additional test inputs. Commercial tool support is currently limited." },
        { type: "note", title: "Limits", text: "Structural coverage does not guarantee generalization: networks can learn spurious correlations and activate correctly for wrong reasons. Combine with adversarial testing and metamorphic testing (Chapters 5–7)." },
      ],
    },
  },
};
