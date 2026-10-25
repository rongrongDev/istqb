// CT-AI v2.0 sample exam v2.1 — 40 questions with per-option explanations
export const questions = [
  {
    id: 1,
    lo: 'AI-1.1.1',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: false,
    text: 'Which of the following statements BEST highlights the difference between conventional and AI-based systems?',
    options: [
      {
        id: 'a',
        text: 'AI-based systems tend to learn from patterns in data and can adapt to new scenarios, while conventional systems follow predefined rules and produce consistent outputs for the same inputs'
      },
      {
        id: 'b',
        text: 'AI-based systems tend to be faster than conventional systems because they do not rely on explicit programming, while conventional systems are slower due to rigid rule-based processing'
      },
      {
        id: 'c',
        text: 'AI-based systems tend to be deterministic and explainable, while conventional systems are probabilistic and often difficult to interpret'
      },
      {
        id: 'd',
        text: 'AI-based systems tend to be more suitable for critical tasks where explainability is crucial, while conventional systems are better at handling complex tasks in unregulated areas'
      }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) AI-based/ML systems learn patterns from data and can adapt through self-learning; conventional systems use predefined logic and produce predictable outputs.\n' +
      '\n' +
      'WRONG (b): AI is not necessarily faster — its advantage is adaptability and handling complexity, not speed.\n' +
      '\n' +
      'WRONG (c): This REVERSES the characteristics. AI systems are PROBABILISTIC and hard to explain; conventional systems ARE deterministic and explainable.\n' +
      '\n' +
      'WRONG (d): This is also reversed. CONVENTIONAL systems are more suitable for safety-critical tasks where explainability is required. AI is currently better for complex tasks in unregulated areas.'
  },
  {
    id: 2,
    lo: 'AI-1.1.2',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: true,
    text: 'Which TWO of the following statements BEST distinguish between narrow AI, general AI, and super AI?',
    options: [
      {
        id: 'a',
        text: 'Narrow AI is self-learning, general AI focuses on solving specialized problems, and super AI is limited to tasks defined during its development'
      },
      {
        id: 'b',
        text: 'Narrow AI operates independently of human input, general AI is used only in advanced robotics, and super AI improves human decision-making in specialized fields'
      },
      {
        id: 'c',
        text: 'Narrow AI performs specific tasks efficiently, general AI can handle a wide range of intellectual tasks like a human, and super AI surpasses human intelligence'
      },
      {
        id: 'd',
        text: 'Narrow AI is task-specific, general AI is a concept with limited real-world applications, and super AI describes cutting-edge generative AI models'
      },
      {
        id: 'e',
        text: 'Narrow AI is the current state of AI, achievement of general AI is uncertain, but once general AI is achieved, super AI is likely to happen'
      }
    ],
    correct: [ 'c', 'e' ],
    explanation: 'CORRECT (c): Accurately describes all three types — narrow=task-specific, general=human-like versatility, super=surpasses human intelligence.\n' +
      '\n' +
      'CORRECT (e): All current AI is narrow AI. When general AI will be achieved is uncertain. Once we have general AI, given knowledge available on the internet, super AI is almost certain to follow.\n' +
      '\n' +
      'WRONG (a): Narrow AI is NOT always self-learning (some are rule-based).\n' +
      '\n' +
      "WRONG (b): Narrow AI does not operate independently of human input; super AI does not merely 'improve' human decision-making — it surpasses it.\n" +
      '\n' +
      'WRONG (d): TRAP — super AI is NOT just cutting-edge generative AI models. Super AI is a theoretical concept of intelligence exceeding all human capabilities.'
  },
  {
    id: 3,
    lo: 'AI-1.1.3',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: false,
    text: 'Which of the following statements BEST describes the relationship between AI, ML, and DL?',
    options: [
      {
        id: 'a',
        text: 'ML is a subset of AI, and DL is a further subset of ML, representing a hierarchy of specialized technologies'
      },
      {
        id: 'b',
        text: 'DL is the foundational technology, and both ML and AI are specialized applications built upon its principles'
      },
      {
        id: 'c',
        text: 'DL and ML are essentially interchangeable terms, while AI represents a separate approach to problem-solving'
      },
      {
        id: 'd',
        text: 'AI encompasses both ML and DL as distinct but important methodologies, working in parallel to solve complex problems'
      }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) ML⊂AI, DL⊂ML — this is a strict hierarchy. AI is broadest, ML is a subset, DL is a specialized subset of ML using deep neural networks.\n' +
      '\n' +
      'WRONG (b): AI and ML existed LONG BEFORE deep learning became prominent. DL is a recent advancement within ML, not a foundation for it.\n' +
      '\n' +
      'WRONG (c): DL and ML are NOT interchangeable. DL IS a specific TYPE of ML.\n' +
      '\n' +
      "WRONG (d): ML and DL are NOT 'parallel' methodologies — DL is a subtype of ML, not a peer."
  },
  {
    id: 4,
    lo: 'AI-1.1.4',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: false,
    text: 'Which of the following statements BEST explains generative AI?',
    options: [
      {
        id: 'a',
        text: 'It is designed to analyze and understand existing data, such as text or images, allowing machines to categorize information and extract key insights'
      },
      {
        id: 'b',
        text: 'It creates new content, such as text, images, or audio, by learning patterns from training data and generating outputs similar in nature'
      },
      {
        id: 'c',
        text: 'It focuses mainly on improving existing content, such as text, images, or audio, by optimizing it for classification or prediction tasks'
      },
      {
        id: 'd',
        text: 'It creates models that are limited to generating text and images and cannot be used for creative tasks like drug discovery or data simulation'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) GenAI creates NEW content by learning patterns from training data. This is its defining characteristic.\n' +
      '\n' +
      'WRONG (a): Describes traditional AI analysis/classification, NOT generative AI.\n' +
      '\n' +
      "WRONG (c): GenAI creates new content — it does not just 'improve existing content' for classification tasks.\n" +
      '\n' +
      'WRONG (d): TRAP — GenAI is NOT limited to text and images. Applications include drug discovery, protein folding, data simulation, materials science, and other fields.'
  },
  {
    id: 5,
    lo: 'AI-1.1.5',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: false,
    text: 'Which of the following statements BEST compares the hardware options available for implementing machine learning systems?',
    options: [
      {
        id: 'a',
        text: 'GPUs are well-suited for training and running ML models due to their ability to handle massively parallel processing, while CPUs are better for general-purpose computing'
      },
      {
        id: 'b',
        text: 'CPUs are more efficient than GPUs for ML tasks because they have faster clock speeds and can handle complex operations'
      },
      {
        id: 'c',
        text: 'AI-specific hardware, such as ASICs, is primarily used for training ML models, while GPUs are better suited for edge computing'
      },
      {
        id: 'd',
        text: 'Neuromorphic processors are a form of AI hardware specifically optimized for running on the von Neumann architecture'
      }
    ],
    correct: [ 'a' ],
    explanation: "CORRECT: (a) GPUs' massively parallel processing capability (thousands of cores) makes them ideal for ML training. CPUs excel at general-purpose computing.\n" +
      '\n' +
      'WRONG (b): CPUs have faster clock speeds but fewer cores — they are LESS efficient for the parallel matrix operations required in ML.\n' +
      '\n' +
      'WRONG (c): TRAP — ASICs are purpose-built for EDGE INFERENCE (deployment), NOT for training. GPUs handle training in the cloud.\n' +
      '\n' +
      'WRONG (d): TRAP — Neuromorphic processors are specifically NON-von Neumann architecture — they mimic brain structure which is fundamentally different from traditional CPU design.'
  },
  {
    id: 6,
    lo: 'AI-1.1.6',
    level: 'K2',
    points: 1,
    chapter: 1,
    multi: false,
    text: 'Given the following statements about AI model development and hosting:\n' +
      '\n' +
      'i. It achieves lower development costs by using public cloud resources, eliminating the need for local hardware investment\n' +
      'ii. It uses local development of data preparation components for sensitive data for increased security before moving to the cloud for training of the full system\n' +
      'iii. It results in lower costs because laptops are used for local development and there are low upfront hardware costs by hosting AI models on public clouds\n' +
      'iv. It simplifies development and hosting by standardizing processes on local servers, removing the need for complex cloud-based configurations\n' +
      'v. It guarantees the highest security by hosting AI models on private clouds, thereby avoiding the risks associated with local hardware vulnerabilities\n' +
      '\n' +
      'Which of the following BEST reflects advantages of using a HYBRID approach for this development and hosting?',
    options: [
      { id: 'a', text: 'i, ii and v' },
      { id: 'b', text: 'ii and iii' },
      { id: 'c', text: 'iii and iv' },
      { id: 'd', text: 'i, iv and v' }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) ii and iii are both hybrid approaches.\n' +
      '\n' +
      'Statement ii: local development for data preparation + cloud for training = HYBRID ✓\n' +
      'Statement iii: local dev on laptops + hosting on public clouds = HYBRID ✓\n' +
      '\n' +
      'NOT hybrid:\n' +
      'Statement i: cloud only (no local component)\n' +
      'Statement iv: local servers only (no cloud component)\n' +
      'Statement v: private cloud only (no local component)\n' +
      '\n' +
      'Key: Hybrid = COMBINES local AND cloud. A single environment (cloud-only, local-only, private-cloud-only) is NOT hybrid.'
  },
  {
    id: 7,
    lo: 'AI-2.1.1',
    level: 'K2',
    points: 1,
    chapter: 2,
    multi: false,
    text: 'Given the following ISO/IEC 25059 quality characteristics:\n' +
      '1. AI Robustness  2. User Controllability  3. Functional Adaptability  4. Intervenability\n' +
      '\n' +
      'And the following examples of quality characteristic measures:\n' +
      'A. The success rate of a remote operator in forcing a drone into the safe-landing protocol when its AI navigation system exhibits hazardous behavior\n' +
      "B. The average time required to successfully override a fraud management system's automated decision to block a customer's transaction\n" +
      'C. The F1-score of an object detection model in an autonomous car in heavy rain\n' +
      'D. The time required for an e-commerce recommendation engine to update its suggestions to reflect a new, rapidly emerging fashion trend\n' +
      '\n' +
      'Which of the following BEST matches the quality characteristics with the example measures?',
    options: [
      { id: 'a', text: '1D – 2A – 3C – 4B' },
      { id: 'b', text: '1C – 2D – 3B – 4A' },
      { id: 'c', text: '1C – 2B – 3D – 4A' },
      { id: 'd', text: '1A – 2D – 3C – 4B' }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) 1C – 2B – 3D – 4A\n' +
      '\n' +
      'AI Robustness (1) = F1-score in heavy rain (C) — measures performance under ADVERSE CONDITIONS (robustness sub-characteristic of reliability).\n' +
      '\n' +
      'User Controllability (2) = time to override fraud decision (B) — measures how quickly a USER can OVERRIDE an automated decision (usability/interaction sub-characteristic).\n' +
      '\n' +
      'Functional Adaptability (3) = time for e-commerce to update recommendations (D) — measures how quickly system ADAPTS to changing environment after deployment.\n' +
      '\n' +
      'Intervenability (4) = success rate forcing drone into safe-landing (A) — measures PREVENTING HARM/HAZARD (security sub-characteristic).\n' +
      '\n' +
      'CRITICAL TRAP: Intervenability ≠ User Controllability. Intervenability = SECURITY (prevent hazard). User Controllability = USABILITY (user overrides AI decision).'
  },
  {
    id: 8,
    lo: 'AI-2.1.2',
    level: 'K2',
    points: 1,
    chapter: 2,
    multi: false,
    text: 'Which of the following statements BEST describes a key challenge when AI is used in safety-related systems?',
    options: [
      {
        id: 'a',
        text: 'When the requirements are too detailed, it leaves little room for the ML system to learn from the implicit goals contained within the training data'
      },
      {
        id: 'b',
        text: 'The potential for non-determinism and self-learning makes some AI-based systems unpredictable as they diverge from their original tested state'
      },
      {
        id: 'c',
        text: 'Because self-learning safety-related systems stop adapting after deployment, safety is often compromised by the need for manual updates of the operational AI-based system'
      },
      {
        id: 'd',
        text: 'The mature safety-related standards tend to be out-of-date and require the use of outdated AI technologies, which hinders innovative AI solutions in AI-based systems'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) Non-determinism + self-learning = unpredictable divergence from originally tested state. This is the core safety challenge.\n' +
      '\n' +
      'WRONG (a): TRAP — The ACTUAL specifications challenge is the OPPOSITE: AI requirements are TOO VAGUE (expressed implicitly through data), not too detailed.\n' +
      '\n' +
      'WRONG (c): TRAP — Self-learning systems do NOT stop adapting after deployment — they CONTINUE to move away from their originally tested behavior.\n' +
      '\n' +
      "WRONG (d): Mature safety-related standards currently LACK provisions for AI (some explicitly PROHIBIT it). The problem is they DON'T include AI yet, not that they use outdated AI technologies."
  },
  {
    id: 9,
    lo: 'AI-2.2.1',
    level: 'K2',
    points: 1,
    chapter: 2,
    multi: false,
    text: 'Which of the following examples is LEAST likely to be a valid acceptance criterion for AI-specific quality characteristics defined in the ISO 25059 standard for an AI-based system?',
    options: [
      {
        id: 'a',
        text: "The security guard in the museum control room can trigger an immediate 'all-stop' command that causes the patrol robot to cease all motion within 0.5 seconds to prevent collision with a sculpture"
      },
      {
        id: 'b',
        text: 'A greenhouse control system reacts within 20 minutes when the measured humidity is greater than 10% from the optimum humidity'
      },
      {
        id: 'c',
        text: 'The spam alert control system is easy for the user to set up and requires minimal technical expertise to maintain'
      },
      {
        id: 'd',
        text: 'When the analysis tool flags a retinal scan for severe diabetic retinopathy, it shall display a visual heatmap overlay on the image, highlighting the key features'
      }
    ],
    correct: [ 'c' ],
    explanation: "CORRECT (LEAST LIKELY): (c) 'Easy for the user to set up and requires minimal technical expertise' — this describes GENERIC USABILITY (learnability, operability) which applies to ALL software systems. It is NOT specific to AI characteristics defined in ISO 25059. It is also subjective and not measurable.\n" +
      '\n' +
      'VALID acceptance criteria:\n' +
      '(a) = Intervenability — measurable threshold (0.5 seconds) for preventing hazard ✓\n' +
      '(b) = Functional Adaptability — measurable threshold (20 minutes, 10% humidity deviation) ✓\n' +
      '(d) = Transparency — specific, verifiable behavior (heatmap display) ✓\n' +
      '\n' +
      'A valid AI-specific acceptance criterion must: be tied to an ISO 25059 characteristic AND be measurable/quantifiable.'
  },
  {
    id: 10,
    lo: 'AI-3.1.1',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'Given the following forms of ML:\n' +
      '1. Clustering  2. Reinforcement learning  3. Classification  4. Regression\n' +
      '\n' +
      'And the following examples:\n' +
      'A. The mobile game app updates its feedback, response timing, and the number of user options it provides based on how much the players spend\n' +
      'B. The language translation app searches the internet to find text provided in multiple languages to improve its translation function\n' +
      'C. A manufacturing company predicts when equipment is likely to fail based on sensor data and historical maintenance records\n' +
      'D. A social network platform groups its users into communities based on their interactions with each other and their stated interests\n' +
      '\n' +
      'Which of the following BEST matches the examples with the forms of ML?',
    options: [
      { id: 'a', text: '1B – 2D – 3A – 4C' },
      { id: 'b', text: '1C – 2A – 3D – 4B' },
      { id: 'c', text: '1D – 2A – 3B – 4C' },
      { id: 'd', text: '1D – 2C – 3B – 4A' }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) 1D – 2A – 3B – 4C\n' +
      '\n' +
      'Clustering (1) = social network groups users by interactions/interests (D) — no labels, finds groups ✓\n' +
      '\n' +
      'Reinforcement Learning (2) = mobile game adjusts based on how much players SPEND (A) — spending amount = reward function ✓\n' +
      '\n' +
      'Classification (3) = language translation app (B) — uses labeled parallel text pairs (supervised learning, discrete output: correct translation) ✓\n' +
      '\n' +
      'Regression (4) = predicts when equipment will FAIL (C) — continuous output (time until failure) ✓\n' +
      '\n' +
      'TRAP: Translation apps use CLASSIFICATION (labeled pairs), not reinforcement learning — there is no explicit reward/penalty loop.'
  },
  {
    id: 11,
    lo: 'AI-3.1.2',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'Given the following activities from the ML workflow:\n' +
      '1. Deploy the Model  2. Prepare & Test Data  3. Test the Model  4. Evaluate the Model\n' +
      '\n' +
      'And the following descriptions:\n' +
      'A. Model performance is tested using validation data\n' +
      'B. The origin of the test data used to test the model is identified\n' +
      'C. Test data are used to verify the agreed performance criteria are met\n' +
      'D. The model is tested on the target platform\n' +
      '\n' +
      'Which of the following BEST matches the descriptions with the activities in the ML workflow?',
    options: [
      { id: 'a', text: '1A – 2C – 3B – 4D' },
      { id: 'b', text: '1C – 2D – 3B – 4A' },
      { id: 'c', text: '1D – 2B – 3A – 4C' },
      { id: 'd', text: '1D – 2B – 3C – 4A' }
    ],
    correct: [ 'd' ],
    explanation: 'CORRECT: (d) 1D – 2B – 3C – 4A\n' +
      '\n' +
      'Deploy the Model (1) = model is tested on the TARGET PLATFORM (D) — deployment re-engineers the model for the target environment and tests it there ✓\n' +
      '\n' +
      'Prepare & Test Data (2) = the ORIGIN of the test data is identified (B) — data provenance is part of data preparation ✓\n' +
      '\n' +
      'Test the Model (3) = test data used to verify AGREED PERFORMANCE CRITERIA are met (C) — this is the independent holdout test ✓\n' +
      '\n' +
      'Evaluate the Model (4) = model performance tested using VALIDATION DATA (A) — evaluation uses validation data during the iterative training loop ✓\n' +
      '\n' +
      'TRAP: Evaluate (uses validation data) vs Test (uses independent test data to verify agreed criteria) — these two activities are frequently confused.'
  },
  {
    id: 12,
    lo: 'AI-3.1.4',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'Which of the following statements about the use of pre-trained models is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'When applied to a neural network, the RAG approach works by adding additional layers that hold documentation specifically related to the prompt'
      },
      {
        id: 'b',
        text: 'Fine-tuning a biased LLM with high-quality, task-specific data prevents unfair outputs based on sensitive attributes'
      },
      {
        id: 'c',
        text: 'To successfully adapt a pre-trained neural network, fine-tuning requires that additional training with new data is applied to all layers of the network'
      },
      {
        id: 'd',
        text: 'The RAG approach requires the identification and acquisition of data relevant to the task up front, but requires no changes to the pre-trained model'
      }
    ],
    correct: [ 'd' ],
    explanation: "CORRECT: (d) RAG curates and indexes relevant external data upfront, then retrieves and augments the model's INPUT at inference time. The pretrained model's parameters remain UNCHANGED.\n" +
      '\n' +
      'WRONG (a): RAG does NOT add new layers to the neural network. It retrieves external data and augments the PROMPT/INPUT, not the model architecture.\n' +
      '\n' +
      'WRONG (b): Fine-tuning CANNOT GUARANTEE prevention of unfair outputs — bias can PERSIST or even be INTRODUCED during fine-tuning.\n' +
      '\n' +
      'WRONG (c): Fine-tuning can be applied to ALL layers OR just a SUBSET — often only some layers are updated while others are kept frozen, depending on the task and available data.'
  },
  {
    id: 13,
    lo: 'AI-3.2.1',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'Which of the following statements BEST describes a key activity in data preparation for machine learning?',
    options: [
      {
        id: 'a',
        text: 'Data preparation comprises the identification and gathering of data from various sources, providing the algorithm with raw data to learn from'
      },
      {
        id: 'b',
        text: 'Feature engineering of the data is performed after an ML model has been trained to optimize its performance for real-world deployment'
      },
      {
        id: 'c',
        text: 'Data pre-processing includes augmentation and sampling, which either add or reduce the number of examples in the training data respectively'
      },
      {
        id: 'd',
        text: 'Exploratory data analysis (EDA) is a form of exploratory testing applied to the data preparation activities of acquisition, pre-processing and labelling'
      }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) Data pre-processing includes AUGMENTATION (increases examples by creating modified versions) AND SAMPLING (reduces data by selecting subsets). Both are preprocessing activities.\n' +
      '\n' +
      'WRONG (a): Data preparation is NOT just gathering raw data — it also includes cleaning, transforming, augmenting, and labeling.\n' +
      '\n' +
      'WRONG (b): Feature engineering is performed BEFORE model training (to prepare data for learning), NOT after. Its purpose is to improve model performance DURING training.\n' +
      '\n' +
      "WRONG (d): EDA is NOT 'exploratory testing.' EDA is an analytical process (visualization, statistics) to understand data characteristics. Exploratory testing is a software testing technique — completely different concepts."
  },
  {
    id: 14,
    lo: 'AI-3.2.3',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'Which of the following statements BEST contrasts the roles of training, validation, and test datasets in ML model development?',
    options: [
      {
        id: 'a',
        text: 'The training dataset is used to optimize hyperparameters, the validation dataset is used to tune predictions, and the test dataset is used to generate training data'
      },
      {
        id: 'b',
        text: 'The training dataset is used to create the model, the validation dataset is used to tune the model, and the test dataset evaluates its performance on unseen data'
      },
      {
        id: 'c',
        text: 'The training dataset is used for final model evaluation, the validation dataset ensures the model does not overfit, and the test dataset is used for tuning hyperparameters'
      },
      {
        id: 'd',
        text: 'The training dataset ensures the model generalizes well, the validation dataset is used to deploy the model, and the test dataset is used for initial evaluation'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) Training = FIT/CREATE model. Validation = TUNE model (hyperparameter optimization, prevent overfitting). Test = EVALUATE on UNSEEN data (final, never used during development).\n' +
      '\n' +
      "WRONG (a): Training dataset is NOT for optimizing hyperparameters (that's validation). Test dataset is NEVER for generating training data.\n" +
      '\n' +
      'WRONG (c): Training dataset is NOT for final model evaluation. Test dataset is NOT for tuning hyperparameters — using it for tuning would contaminate it.\n' +
      '\n' +
      'WRONG (d): Validation dataset is NOT for deployment. Test dataset is for FINAL assessment, not initial evaluation.\n' +
      '\n' +
      'CRITICAL RULE: The test dataset must NEVER influence any development decision. Any dataset used during development can no longer serve as an unbiased final test.'
  },
  {
    id: 15,
    lo: 'AI-3.3.1',
    level: 'K3',
    points: 2,
    chapter: 3,
    multi: false,
    text: 'Consider the following confusion matrix for an image classifier:\n' +
      '\n' +
      '          Predicted Positive  |  Predicted Negative\n' +
      'Actual Positive:   TP = 78    |    FN = 6\n' +
      'Actual Negative:   FP = 22    |    TN = 14\n' +
      '\n' +
      'Which of the following options represents the CORRECT formula for calculating the PRECISION of the classifier?',
    options: [
      { id: 'a', text: '(20/120) × 100' },
      { id: 'b', text: '(78/120) × 100' },
      { id: 'c', text: '(78/100) × 100' },
      { id: 'd', text: '(22/100) × 100' }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) Precision = TP / (TP + FP) × 100 = 78 / (78 + 22) × 100 = 78/100 × 100 = 78%\n' +
      '\n' +
      'TP=78, TN=14, FP=22, FN=6. Total=120.\n' +
      '\n' +
      'Precision denominator = TP + FP = all PREDICTED positives = 78 + 22 = 100\n' +
      '\n' +
      'WRONG (a): 20/120 is not a standard metric formula.\n' +
      '\n' +
      'WRONG (b): 78/120 would be TP/Total — not precision. This is close to overall positive rate.\n' +
      '\n' +
      'WRONG (d): 22/100 = FP/(TP+FP) = false discovery rate, not precision.\n' +
      '\n' +
      'FORMULAS TO KNOW:\n' +
      'Accuracy = (TP+TN)/(TP+TN+FP+FN) = (78+14)/120 = 76.7%\n' +
      'Precision = TP/(TP+FP) = 78/100 = 78%\n' +
      'Recall = TP/(TP+FN) = 78/84 = 92.9%\n' +
      'F1 = 2×(Precision×Recall)/(Precision+Recall)'
  },
  {
    id: 16,
    lo: 'AI-3.4.1',
    level: 'K2',
    points: 1,
    chapter: 3,
    multi: false,
    text: 'During the training of a deep neural network, the network produces an output, and the loss is calculated. Which of the following CORRECTLY describes the next step in the training process?',
    options: [
      {
        id: 'a',
        text: 'The weights and biases across the network are adjusted to reduce the calculated loss'
      },
      {
        id: 'b',
        text: 'The same training data is passed through the network again to confirm the loss value'
      },
      {
        id: 'c',
        text: 'The activation functions are altered to different non-linear formulas to find a better fit'
      },
      {
        id: 'd',
        text: "The network's hidden layers are reset with new random weight values"
      }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) After loss calculation → BACKPROPAGATION → the loss is fed back through the network to adjust ALL weights and biases to minimize the error. This is the core training loop.\n' +
      '\n' +
      'WRONG (b): Training does NOT re-run the same data just to confirm the loss value. It moves to the next batch or completes the epoch.\n' +
      '\n' +
      'WRONG (c): Activation functions are chosen during MODEL DESIGN and are NOT changed during a training run. They remain constant throughout training.\n' +
      '\n' +
      'WRONG (d): Resetting weights to random values happens only at the START of training (initialization), not during the ongoing training loop after each loss calculation.'
  },
  {
    id: 17,
    lo: 'AI-4.1.1',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: 'Given the following examples of AI-based systems:\n' +
      '\n' +
      'i. A system that learns from real-time data to improve its failure predictions and automatically updates maintenance schedules\n' +
      'ii. A spam filter for an email app, which identifies spam based on predefined rules\n' +
      "iii. A recommendation engine on a streaming service that updates its suggestions based on a user's changing viewing habits and preferences\n" +
      'iv. A personal assistant that learns continuously from its user\n' +
      'v. A rule-based system for medical diagnosis\n' +
      '\n' +
      'Which of the following BEST describes the systems which can be considered to be LOCKED AI-based systems?',
    options: [
      { id: 'a', text: 'ii and v' },
      { id: 'b', text: 'i, iii, and iv' },
      { id: 'c', text: 'i, and iii' },
      { id: 'd', text: 'ii, iv, and v' }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) ii and v are LOCKED systems.\n' +
      '\n' +
      'ii (spam filter with PREDEFINED RULES) = LOCKED — the rules are fixed until the model is rebuilt. Predictable, deterministic.\n' +
      "v (rule-based medical diagnosis) = LOCKED — domain rules don't change during operation until the model is rebuilt.\n" +
      '\n' +
      'ADAPTIVE systems:\n' +
      "i = 'learns from real-time data and automatically updates' = ADAPTIVE\n" +
      "iii = 'updates its suggestions based on changing habits' = ADAPTIVE\n" +
      "iv = 'learns continuously from its user' = ADAPTIVE\n" +
      '\n' +
      "KEY RULE: If a system's behavior changes during OPERATION based on new data = ADAPTIVE. If it only changes when a developer explicitly retrains/rebuilds it = LOCKED."
  },
  {
    id: 18,
    lo: 'AI-4.1.2',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: 'Which of the following options BEST explains why a statistical approach is necessary when testing an AI-based system?',
    options: [
      {
        id: 'a',
        text: 'The system is typically large and complex, making test automation impractical without the use of statistical sampling'
      },
      {
        id: 'b',
        text: 'The system exhibits non-deterministic behavior, requiring large and representative test datasets to draw meaningful conclusions'
      },
      {
        id: 'c',
        text: 'A single test case is sufficient to determine if a model is well-calibrated, but only statistical methods can verify accuracy'
      },
      {
        id: 'd',
        text: 'The system is trained on real-world data and therefore does not require a separate test dataset; instead, it requires statistical validation'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) AI systems exhibit NON-DETERMINISTIC BEHAVIOR — same inputs may produce different outputs. A single test run cannot reliably reflect overall model quality. Large, representative test datasets are needed to draw statistically meaningful conclusions.\n' +
      '\n' +
      'WRONG (a): The rationale for statistical testing is NON-DETERMINISM, not system size/complexity. Even small AI models need statistical testing.\n' +
      '\n' +
      'WRONG (c): A SINGLE test case is NEVER sufficient to assess AI model quality. Statistical evaluation over MANY predictions is necessary.\n' +
      '\n' +
      'WRONG (d): A separate test dataset is ESSENTIAL, not optional. Training data CANNOT replace a test dataset — this contradicts fundamental ML practice.'
  },
  {
    id: 19,
    lo: 'AI-4.1.3',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: "Why is setting a 'seed' only a LIMITED solution for addressing the test oracle problem in AI systems?",
    options: [
      {
        id: 'a',
        text: 'It is a method that only functions for AI systems built from complete and detailed technical specifications'
      },
      {
        id: 'b',
        text: "It ensures reproducibility for individual test runs but cannot alter the model's inherent probabilistic nature in production"
      },
      {
        id: 'c',
        text: 'Its success depends upon extensive consultation with domain experts to select the most appropriate seed value for the tests'
      },
      {
        id: 'd',
        text: "It introduces a high degree of subjectivity into the model's behavior, which complicates the test evaluation process"
      }
    ],
    correct: [ 'b' ],
    explanation: "CORRECT: (b) Setting a 'seed' forces a specific test run to be reproducible, but this does NOT change the model's fundamental probabilistic nature when it operates in production. It's a workaround for a single test execution, not a solution to the underlying problem.\n" +
      '\n' +
      'WRONG (a): Seed setting is a programming implementation detail that is INDEPENDENT of the quality or completeness of system specifications.\n' +
      '\n' +
      'WRONG (c): Choosing a seed is a simple programming step — it does NOT require domain expert consultation.\n' +
      '\n' +
      "WRONG (d): TRAP — Setting a seed makes behavior MORE OBJECTIVE and REPEATABLE for a specific test run. It's the OPPOSITE of introducing subjectivity."
  },
  {
    id: 20,
    lo: 'AI-4.2.1',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: 'Which of the following statements BEST describes a common approach to testing GenAI models?',
    options: [
      {
        id: 'a',
        text: 'GenAI models are tested by verifying that their outputs exactly match predefined expected results'
      },
      {
        id: 'b',
        text: "It involves manipulating diverse inputs and parameters and then assessing the output's adherence to rules, because a direct input-to-output match is not feasible"
      },
      {
        id: 'c',
        text: 'Since GenAI models are probabilistic, formal testing is unnecessary because outputs will always vary and cannot be evaluated effectively'
      },
      {
        id: 'd',
        text: 'GenAI models are mainly tested through manual review, as automated testing does not apply to creative AI outputs'
      }
    ],
    correct: [ 'b' ],
    explanation: "CORRECT: (b) Because of GenAI's variability and complexity, testing focuses on coherence, rule compliance, and plausibility — not exact output matching. Diverse inputs, system prompts, and parameters all influence results.\n" +
      '\n' +
      'WRONG (a): GenAI is non-deterministic — EXACT OUTPUT MATCHING is not a viable test approach.\n' +
      '\n' +
      'WRONG (c): Formal testing IS possible and necessary for GenAI. Exploratory testing, metamorphic testing, adversarial testing, and benchmark suites can all be applied.\n' +
      '\n' +
      'WRONG (d): AUTOMATED testing (using other AI tools, image recognition systems, automated rule checkers) IS applicable to GenAI testing. Manual review alone is not the standard.'
  },
  {
    id: 21,
    lo: 'AI-4.2.2',
    level: 'K3',
    points: 2,
    chapter: 4,
    multi: false,
    text: 'Your organization plans to deploy a GenAI-powered legal document generator. During implementation planning, the security team argues for focusing red teaming efforts on preventing prompt injection attacks, while the compliance team wants to prioritize bias detection in legal advice generation. The development team suggests running red teaming after the system goes live to save time.\n' +
      '\n' +
      'Which of the following is the MOST effective red teaming implementation strategy for this scenario?',
    options: [
      {
        id: 'a',
        text: 'Prioritize security vulnerabilities first, then address bias issues in a separate phase after deployment'
      },
      {
        id: 'b',
        text: 'Focus on bias detection since legal advice accuracy is more critical than security concerns'
      },
      {
        id: 'c',
        text: 'Deploy immediately and conduct red teaming reactively based on incidents and user feedback'
      },
      {
        id: 'd',
        text: 'Use attack scenarios covering both security and bias vulnerabilities before deployment'
      }
    ],
    correct: [ 'd' ],
    explanation: 'CORRECT: (d) Red teaming must be conducted BEFORE DEPLOYMENT (proactively), and should cover BOTH security AND bias vulnerabilities simultaneously.\n' +
      '\n' +
      "WRONG (a): Red teaming should be BEFORE deployment, not split across phases with bias 'after deployment.'\n" +
      '\n' +
      'WRONG (b): There is no basis given to prioritize one vulnerability type over another. Both security and bias are legitimate concerns for a legal AI system.\n' +
      '\n' +
      "WRONG (c): TRAP — 'Deploy immediately and conduct reactively' completely VIOLATES the definition of red teaming. Red teaming is PROACTIVE and happens BEFORE deployment, not reactively after incidents.\n" +
      '\n' +
      'KEY PRINCIPLE: Red teaming = proactive, pre-deployment attack simulation covering all vulnerability types.'
  },
  {
    id: 22,
    lo: 'AI-4.3.1',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: 'An ML-based weather prediction system provides excellent results for most locations; however, it has been noticed that the predictions for areas in the UK with an altitude greater than 1250 meters are regularly inaccurate. Which of the following test levels should have been performed MORE thoroughly?',
    options: [
      { id: 'a', text: 'System testing' },
      { id: 'b', text: 'Input data testing' },
      { id: 'c', text: 'Component integration testing' },
      { id: 'd', text: 'ML model testing' }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) Input Data Testing — poor performance for a specific geographic subset (UK high-altitude areas) indicates those areas were NOT ADEQUATELY REPRESENTED in the training data. This is a data representativeness issue caught by INPUT DATA TESTING.\n' +
      '\n' +
      'Input data testing would have caught this EARLIER in the ML pipeline (before training) by identifying the underrepresentation of high-altitude UK data.\n' +
      '\n' +
      'WRONG (a): System testing might eventually detect this, but Input Data testing catches it EARLIER (before training even begins).\n' +
      '\n' +
      'WRONG (c): Component integration testing focuses on INTERFACE DEFECTS between components, not on data value characteristics or coverage gaps.\n' +
      '\n' +
      'WRONG (d): ML model testing may identify the poor performance, but input data testing is more EFFECTIVE because it would catch the root cause earlier.'
  },
  {
    id: 23,
    lo: 'AI-4.3.2',
    level: 'K2',
    points: 1,
    chapter: 4,
    multi: false,
    text: 'Which of the following statements about applying risk-based testing to ML systems is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'Security and usability risks can apply to any system, while risks associated with data bias and ML model performance are specific to ML systems'
      },
      {
        id: 'b',
        text: 'Conventional systems handle risks related to data bias, whereas ML systems focus on risks related to algorithmic bias'
      },
      {
        id: 'c',
        text: 'Risk management in conventional systems is a static approach, while in a self-learning system risk needs to be adjusted dynamically'
      },
      {
        id: 'd',
        text: 'In conventional systems, functional correctness is the primary risk factor, whereas functional adaptability is the primary risk factor for an ML system'
      }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) Security and usability are GENERIC quality characteristics that apply to ANY system (ML or conventional). Data bias and ML model performance are SPECIFIC TO ML SYSTEMS.\n' +
      '\n' +
      'WRONG (b): Conventional systems do NOT deal with data bias — data bias arises from the ML training data and algorithm. It is exclusively an ML risk.\n' +
      '\n' +
      'WRONG (c): BOTH conventional and ML systems should use DYNAMIC risk management. Self-learning systems are not the only type that needs dynamic risk adjustment.\n' +
      '\n' +
      'WRONG (d): Functional correctness is important for BOTH conventional and ML systems — it depends on context. Functional adaptability is an AI-specific characteristic but is not necessarily THE PRIMARY risk factor.'
  },
  {
    id: 24,
    lo: 'AI-5.1.1',
    level: 'K2',
    points: 1,
    chapter: 5,
    multi: false,
    text: 'The team developing a new machine learning model has received a dataset from a new, unverified third-party vendor. They are uncertain about the origin of this dataset and concerned that the raw data may have been tampered with. Which of the following test approaches is MOST suitable for addressing this specific risk?',
    options: [
      { id: 'a', text: 'Data provenance testing' },
      { id: 'b', text: 'Data representativeness testing' },
      { id: 'c', text: 'Feature testing' },
      { id: 'd', text: 'Dataset constraint testing' }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) Data PROVENANCE testing — verifies the ORIGIN and INTEGRITY of data. The scenario describes uncertainty about where the data came from and whether it was tampered with — both provenance concerns.\n' +
      '\n' +
      "WRONG (b): Data representativeness testing checks whether the data DISTRIBUTION matches real-world operational data. It does NOT address whether the data's origin is legitimate or whether it was altered.\n" +
      '\n' +
      'WRONG (c): Feature testing evaluates the PREDICTIVE POWER and relevance of features. Different concern from data origin/integrity.\n' +
      '\n' +
      'WRONG (d): Dataset constraint testing checks INTERNAL CONSISTENCY (ranges, data types, counts). It can find anomalies but CANNOT verify where data came from or whether it was illegitimately altered.'
  },
  {
    id: 25,
    lo: 'AI-5.1.2',
    level: 'K2',
    points: 1,
    chapter: 5,
    multi: false,
    text: 'A financial services company has developed an ML system for loan approval. A tester responsible for testing this system wants to determine if there is potential bias in the system related to factors such as gender and age attributes. Which of the following approaches would be MOST suitable for detecting bias in the training data EARLY?',
    options: [
      {
        id: 'a',
        text: "Conducting static analysis of the model's source code to identify how its operations on the age and gender related attributes could lead to bias"
      },
      {
        id: 'b',
        text: 'Testing using a dataset that is representative and analyzing the predictions for statistically significant differences in outcomes across age and gender'
      },
      {
        id: 'c',
        text: 'Reviewing the overall ML workflow and data preparation processes to identify potential sources of bias introduction'
      },
      {
        id: 'd',
        text: 'Performing disparate impact analysis using counterfactuals based on gender, age or both'
      }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) Reviewing the ML WORKFLOW and DATA PREPARATION PROCESSES is the EARLIEST approach — it examines how data is collected, labeled, and processed BEFORE the model is trained. This process-level review can identify potential bias introduction points early.\n' +
      '\n' +
      'WRONG (a): Static analysis of model source code examines MODEL LOGIC, not the training data characteristics. Requires a model to already exist.\n' +
      '\n' +
      'WRONG (b): Testing with a representative dataset and analyzing PREDICTIONS examines MODEL OUTPUTS. This requires a trained model — it is not an EARLY approach to training data bias.\n' +
      '\n' +
      'WRONG (d): Disparate impact analysis with counterfactuals evaluates MODEL OUTCOMES under hypothetical input changes. Requires a trained model to generate predictions.\n' +
      '\n' +
      "KEY: 'EARLY detection in training data' → workflow/process review. All other options require a trained model."
  },
  {
    id: 26,
    lo: 'AI-5.1.3',
    level: 'K2',
    points: 1,
    chapter: 5,
    multi: false,
    text: 'What is a KEY difference in the test strategy for a data pipeline built for training versus one designed for an operational system?',
    options: [
      {
        id: 'a',
        text: "Testing an operational pipeline would focus mainly on validating individual transformation scripts, whereas a training pipeline's testing would prioritize end-to-end system testing"
      },
      {
        id: 'b',
        text: 'A training pipeline would rely almost exclusively on fault injection and back-to-back tests, while an operational pipeline would be limited to unit and component integration testing'
      },
      {
        id: 'c',
        text: 'Configuration management reviews would be critical for operational pipelines but are considered unnecessary for the less formal nature of exploratory training pipelines'
      },
      {
        id: 'd',
        text: "Testing a training pipeline would primarily focus on determining that data is handled correctly, while an operational pipeline's testing would emphasize high performance and reliability under load"
      }
    ],
    correct: [ 'd' ],
    explanation: 'CORRECT: (d) Training pipeline = DATA QUALITY focus (is data handled, processed, labeled correctly?). Operational pipeline = PERFORMANCE, RELIABILITY, SCALABILITY focus (can it handle production load?).\n' +
      '\n' +
      'WRONG (a): Both pipeline types benefit from a full layered approach. An operational pipeline also needs end-to-end system testing — not just individual script validation.\n' +
      '\n' +
      'WRONG (b): Both pipelines use a range of tests. Neither is limited to only one or two test approaches.\n' +
      '\n' +
      'WRONG (c): Configuration management reviews are important for BOTH training AND operational pipelines. They ensure correct versions are used across training, testing, and production environments — consistency is needed everywhere.'
  },
  {
    id: 27,
    lo: 'AI-5.1.4',
    level: 'K2',
    points: 1,
    chapter: 5,
    multi: false,
    text: "What is the purpose of creating a 'reference dataset' during data representativeness testing?",
    options: [
      {
        id: 'a',
        text: 'It serves as a universally applicable dataset derived from trusted industry benchmarks'
      },
      {
        id: 'b',
        text: 'It functions as a quantitative baseline for formally comparing the statistical properties of the training data'
      },
      {
        id: 'c',
        text: 'It is used to apply stratified sampling directly to the training data to verify that all subgroups are covered'
      },
      {
        id: 'd',
        text: 'It serves as the primary dataset for performing the final model validation and testing with high independence'
      }
    ],
    correct: [ 'b' ],
    explanation: "CORRECT: (b) The reference dataset's core purpose is to provide a STATISTICAL BASELINE — allowing practitioners to objectively compare the distributions, feature correlations, and coverage of training data against what is expected in real-world operational environments.\n" +
      '\n' +
      'WRONG (a): A reference dataset is NOT necessarily universal or derived solely from industry benchmarks. It is TAILORED to match the operational context and target population of the specific AI system.\n' +
      '\n' +
      'WRONG (c): TRAP — Stratified sampling is applied to CREATE the reference dataset (to ensure all relevant subgroups are represented within it), NOT applied to the training data itself.\n' +
      '\n' +
      'WRONG (d): The reference dataset is NOT intended for final model testing or validation. The independent TEST DATASET serves that role.'
  },
  {
    id: 28,
    lo: 'AI-5.1.5',
    level: 'K3',
    points: 2,
    chapter: 5,
    multi: false,
    text: 'You are testing an ML dataset for a banking loan approval system. The dataset contains the following attributes:\n' +
      '• applicant_id (integer, unique)\n' +
      '• annual_income (decimal, in USD)\n' +
      '• loan_amount (decimal, in USD)\n' +
      '• credit_score (integer, 300–850)\n' +
      '• employment_years (integer, 0–50)\n' +
      '• monthly_payment (decimal, in USD)\n' +
      '\n' +
      'The following business rules apply:\n' +
      '• Loan amount cannot exceed 5 times annual income\n' +
      '• Monthly payment = loan_amount / 324 (for 30-year loans)\n' +
      '• Credit scores must be within the standard range\n' +
      '• All monetary values must be positive\n' +
      '\n' +
      "When applying dataset constraint testing to validate the 'monthly_payment' for 30-year loans, which type of constraint would be MOST appropriate?",
    options: [
      { id: 'a', text: 'Single-value range constraint' },
      { id: 'b', text: 'Multi-value count constraint' },
      { id: 'c', text: 'Comparison correlate constraint' },
      { id: 'd', text: 'Multi-value duplicate constraint' }
    ],
    correct: [ 'c' ],
    explanation: "CORRECT: (c) COMPARISON CORRELATE CONSTRAINT — validates a mathematical RELATIONSHIP between two attributes: monthly_payment must equal loan_amount / 324. The 'correlate' constraint checks that values of one attribute correlate with values of another according to a defined rule.\n" +
      '\n' +
      "WRONG (a): Single-value range constraint only validates that ONE attribute's values fall within specified bounds. It cannot check mathematical relationships between TWO attributes.\n" +
      '\n' +
      'WRONG (b): Multi-value count constraint checks the QUANTITY of non-null values — completely unrelated to the mathematical formula.\n' +
      '\n' +
      'WRONG (d): Multi-value duplicate constraint identifies IDENTICAL values. Different applicants could legitimately have identical monthly payments (same loan amount = same payment), so this is not the right constraint.\n' +
      '\n' +
      'KEY: Any time you need to validate that two attributes have a mathematical relationship, use COMPARISON CORRELATE CONSTRAINT.'
  },
  {
    id: 29,
    lo: 'AI-5.1.7',
    level: 'K2',
    points: 1,
    chapter: 5,
    multi: false,
    text: 'Which of the following BEST explains the role of multiple annotations in data label correctness testing?',
    options: [
      {
        id: 'a',
        text: 'Multiple annotations can be used to automate label verification to ensure consistency'
      },
      {
        id: 'b',
        text: 'Multiple annotations can point to label defects based on the comparison of annotations'
      },
      {
        id: 'c',
        text: 'Multiple annotations compare label distributions across datasets to detect potential defects'
      },
      {
        id: 'd',
        text: 'Multiple annotations point to defects in data points with high model loss'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) Multiple annotations = independent labeling of the same data points by MULTIPLE HUMAN ANNOTATORS → comparing labels reveals DISAGREEMENTS → potential LABEL DEFECTS identified. It highlights INCONSISTENCY, not consistency.\n' +
      '\n' +
      'WRONG (a): Multiple annotations are NOT automated — they rely on HUMAN annotators working independently. The process highlights inconsistency (disagreements), not guarantees consistency.\n' +
      '\n' +
      'WRONG (c): Comparing LABEL DISTRIBUTIONS across datasets is DATA DISTRIBUTION ANALYSIS — a different approach (#4 in the label correctness testing methods). Multiple annotations is about individual data point disagreements.\n' +
      '\n' +
      'WRONG (d): Flagging data points with HIGH MODEL LOSS is MODEL LOSS ANALYSIS — another separate approach (#6). Not multiple annotations.\n' +
      '\n' +
      "Note: This section's official LO is AI-5.1.7 (sometimes incorrectly cited as 5.1.6 in older guides)."
  },
  {
    id: 30,
    lo: 'AI-6.1.1',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Given the following test techniques and test types:\n' +
      '1. ML functional performance testing\n' +
      '2. Testing for bias\n' +
      '3. Adversarial testing\n' +
      '4. Drift testing\n' +
      '\n' +
      'And the following risks:\n' +
      'A. The ML model might perform differently for different demographic groups\n' +
      'B. Slightly modified inputs to the ML model might cause quite different and unexpected responses\n' +
      'C. Predictions made by the ML model might be inaccurate in some cases\n' +
      'D. ML model accuracy might have significantly decreased since it was deployed\n' +
      '\n' +
      'Which of the following options BEST matches the test techniques and test types with the risks?',
    options: [
      { id: 'a', text: '1A – 2D – 3C – 4B' },
      { id: 'b', text: '1C – 2A – 3B – 4D' },
      { id: 'c', text: '1B – 2A – 3C – 4D' },
      { id: 'd', text: '1A – 2C – 3D – 4B' }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) 1C – 2A – 3B – 4D\n' +
      '\n' +
      'ML Functional Performance Testing (1) → Predictions INACCURATE in some cases (C) — functional performance testing directly evaluates whether predictions are accurate ✓\n' +
      '\n' +
      'Testing for Bias (2) → Model performs differently for DIFFERENT DEMOGRAPHIC GROUPS (A) — bias testing examines fairness across populations ✓\n' +
      '\n' +
      'Adversarial Testing (3) → SLIGHTLY MODIFIED inputs cause different and unexpected responses (B) — adversarial testing deliberately uses minimally perturbed inputs ✓\n' +
      '\n' +
      'Drift Testing (4) → Accuracy DECREASED SINCE DEPLOYMENT (D) — drift testing monitors performance changes over time in production ✓'
  },
  {
    id: 31,
    lo: 'AI-6.1.2',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Which of the following statements about the documentation of ML models is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'Information related to the speed of model prediction is a part of the documentation of an AI component'
      },
      {
        id: 'b',
        text: 'Interaction of AI and non-AI components is within the scope of the model documentation'
      },
      {
        id: 'c',
        text: "Bias-related characteristics of input data are challenging to assess as the model documentation doesn't contain the source of the training data"
      },
      {
        id: 'd',
        text: 'Changes made by self-learning ML systems are fully documented at the time of the update to ensure up-to-date documentation'
      }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) Speed of model prediction (inference latency) is a NON-FUNCTIONAL REQUIREMENT and is part of AI component documentation. Model documentation covers both functional and non-functional performance characteristics.\n' +
      '\n' +
      'WRONG (b): INTERACTION OF AI AND NON-AI COMPONENTS is NOT in scope of MODEL documentation. It belongs at the SYSTEM-LEVEL documentation.\n' +
      '\n' +
      "WRONG (c): Model documentation SHOULD contain the SOURCE OF TRAINING DATA — testers and regulators need this for bias assessment. The claim that it 'doesn't contain' the source is incorrect.\n" +
      '\n' +
      "WRONG (d): Self-learning system changes can only be documented by the system itself AT THE TIME OF UPDATE — there is no guarantee they are 'fully' documented proactively. Documentation of adaptive changes is a known challenge."
  },
  {
    id: 32,
    lo: 'AI-6.1.3',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Upon release, an ML model provided correct predictions fewer times than expected. Additional tests have been conducted, and the level of accuracy for these tests was measured at 83%. Previously, the ML model had achieved an accuracy of 83% ± 4% at a confidence level of 94%.\n' +
      '\n' +
      'Which of the following options is MOST likely to represent the current situation?',
    options: [
      { id: 'a', text: 'Accuracy of 83% ± 2% at 94% confidence level' },
      { id: 'b', text: 'Accuracy of 83% ± 4% at 92% confidence level' },
      { id: 'c', text: 'Accuracy of 83% ± 6% at 94% confidence level' },
      { id: 'd', text: 'Accuracy of 85% ± 4% at 94% confidence level' }
    ],
    correct: [ 'a' ],
    explanation: 'CORRECT: (a) 83% ± 2% at 94% CL — When MORE tests are run and accuracy stays at 83%, the MARGIN OF ERROR DECREASES (improves precision) while the confidence level stays the same.\n' +
      '\n' +
      'More tests + same measured accuracy + same CL → smaller MoE. So ±4% becomes ±2%.\n' +
      '\n' +
      'WRONG (b): 92% CL (lower) — More tests should INCREASE confidence or decrease MoE, not DECREASE confidence.\n' +
      '\n' +
      'WRONG (c): ±6% MoE (larger) — More tests should DECREASE MoE, not INCREASE it.\n' +
      '\n' +
      'WRONG (d): 85% accuracy — The scenario states additional tests measured accuracy AT 83%, not 85%.\n' +
      '\n' +
      'RULE: More tests → either (a) MoE decreases with same CL, or (b) CL increases with same MoE. Both metrics never get WORSE with more tests.'
  },
  {
    id: 33,
    lo: 'AI-6.1.4',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Which of the following statements BEST summarizes adversarial testing of machine learning systems?',
    options: [
      {
        id: 'a',
        text: 'It is a form of black-box testing, ignoring knowledge of the internals of the machine learning system to create adversarial examples'
      },
      {
        id: 'b',
        text: 'It focuses on generating manual adversarial examples, without automation, to test the vulnerability of machine learning systems'
      },
      {
        id: 'c',
        text: 'It identifies model vulnerabilities through adversarial examples, which are minimally perturbed inputs that induce misclassification'
      },
      {
        id: 'd',
        text: "It verifies the machine learning system's functionality by using previously working tests to avoid ML model failures during evaluation and tuning"
      }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) Adversarial testing identifies model vulnerabilities through ADVERSARIAL EXAMPLES — inputs that have been MINIMALLY PERTURBED (often imperceptible to humans) in ways that cause MISCLASSIFICATION.\n' +
      '\n' +
      'WRONG (a): Adversarial testing can be BOTH black-box AND white-box. White-box adversarial testing uses knowledge of model internals to craft more targeted examples.\n' +
      '\n' +
      'WRONG (b): Adversarial testing can use AUTOMATED techniques (algorithms that generate large numbers of variations). It is NOT limited to manual methods only.\n' +
      '\n' +
      'WRONG (d): This describes REGRESSION TESTING (using previously working tests), not adversarial testing. Adversarial testing deliberately creates challenging, perturbed inputs to find vulnerabilities.'
  },
  {
    id: 34,
    lo: 'AI-6.1.5',
    level: 'K3',
    points: 2,
    chapter: 6,
    multi: false,
    text: 'An AI-based mobile phone search system provides phones it believes are most suitable based on user history and preferences.\n' +
      '\n' +
      'Metamorphic testing is used with this source test case:\n' +
      "Inputs: Price range $200-$300, 3D camera: Don't care, Screen size: mid to large, OS: Android or iOS, Battery Life: Don't care\n" +
      'Outputs — Recommended phones: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs\n' +
      '\n' +
      'And this test data for two corresponding follow-up test cases:\n' +
      'Input T1: Same as source but 3D camera: YES\n' +
      'Input T2: Same as source but 3D camera: NO\n' +
      '\n' +
      'Which of the following options is MOST likely to be a valid list of recommended phones for the follow-up test cases?',
    options: [
      {
        id: 'a',
        text: 'T1: SnapHappy_X1, SnapHappy_M2\nT2: ClickNow_1000x, ClickNow_1000xs'
      },
      {
        id: 'b',
        text: 'T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000xs\nT2: SnapHappy_X1, ClickNow_1000x'
      },
      {
        id: 'c',
        text: 'T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs\n' +
          'T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3'
      },
      {
        id: 'd',
        text: 'T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs\n' +
          'T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs'
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) T1 = M2, M3, 1000xs; T2 = X1, 1000x\n' +
      '\n' +
      'METAMORPHIC RELATION (Monotonicity): Adding a more specific constraint (must have 3D camera / must NOT have 3D camera) can only REDUCE or maintain the original result set.\n' +
      '\n' +
      'The MR requires:\n' +
      '1. T1 + T2 combined must contain ALL 5 source phones (nothing lost)\n' +
      "2. T1 and T2 must have NO OVERLAP (can't have 3D camera AND no 3D camera)\n" +
      '3. T1 phones = subset with 3D camera; T2 phones = subset without 3D camera\n' +
      '\n' +
      'Option (b): T1(M2,M3,1000xs) + T2(X1,1000x) = all 5, no overlap ✓\n' +
      '\n' +
      'WRONG (a): T1+T2 = X1,M2,1000x,1000xs — M3 is MISSING ✗\n' +
      'WRONG (c): SnapHappy phones appear in BOTH T1 and T2 — OVERLAP violates MR ✗\n' +
      'WRONG (d): T1 and T2 are IDENTICAL despite different constraints — violates MR ✗'
  },
  {
    id: 35,
    lo: 'AI-6.1.7',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'An organization uses an ML model to predict customer churn but has no mechanism to get direct user feedback or track when customers leave. They want to test for drift by analyzing the data being fed into the live ML model. Which test type would be MOST appropriate in this situation and why?',
    options: [
      {
        id: 'a',
        text: "Dynamic drift testing, because it can infer the current ground truth by analyzing the input data's statistical properties"
      },
      {
        id: 'b',
        text: 'Static drift testing, because it identifies drift by detecting changes in the data distributions without requiring ground truth'
      },
      {
        id: 'c',
        text: 'Dynamic drift testing, because comparing ML model predictions to actual results is the most direct way to measure performance degradation'
      },
      {
        id: 'd',
        text: "Static drift testing, because it compares the ML model's live performance metrics against a predefined acceptance threshold"
      }
    ],
    correct: [ 'b' ],
    explanation: 'CORRECT: (b) STATIC drift testing — because no ground truth is available (no mechanism to track whether customers actually leave), static drift testing detects drift by analyzing CHANGES IN DATA DISTRIBUTIONS without needing actual current outcomes.\n' +
      '\n' +
      "WRONG (a): Dynamic drift testing CANNOT 'infer' ground truth from statistical properties. Dynamic testing REQUIRES actual current outcomes (ground truth) to compare against predictions.\n" +
      '\n' +
      "WRONG (c): The organization has 'no mechanism to track when customers leave' — so comparing predictions to actual results (dynamic testing) is IMPOSSIBLE in this scenario.\n" +
      '\n' +
      'WRONG (d): The description (comparing performance metrics against threshold) describes DYNAMIC drift testing behavior, not static.\n' +
      '\n' +
      'RULE: No ground truth available = STATIC drift testing only. Have ground truth = either static or dynamic drift testing.'
  },
  {
    id: 36,
    lo: 'AI-6.1.8',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'When testing a trained ML model, the development team found that the model was highly accurate when evaluated using validation data but performed poorly with independent test data. Which of the following options is MOST likely to cause this situation?',
    options: [
      { id: 'a', text: 'Underfitting' },
      { id: 'b', text: 'Concept drift' },
      { id: 'c', text: 'Overfitting' },
      { id: 'd', text: 'Low acceptance criteria' }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) OVERFITTING — The model performs WELL on validation data but POORLY on independent test data. This is the signature pattern of overfitting: the model has memorized the training/validation data too well and fails to generalize to truly unseen data.\n' +
      '\n' +
      "WRONG (a): Underfitting = poor performance on BOTH training AND test/validation data. If validation accuracy is HIGH, it's not underfitting.\n" +
      '\n' +
      'WRONG (b): Concept drift occurs AFTER deployment in production OVER TIME as the real-world relationship between inputs and outputs changes. This scenario is during initial model evaluation, not post-deployment.\n' +
      '\n' +
      'WRONG (d): Low acceptance criteria would affect BOTH validation and test results similarly. It would not cause a gap between the two.\n' +
      '\n' +
      'SUMMARY: Overfitting = GAP between validation (good) and test (poor). Underfitting = uniformly poor on both.'
  },
  {
    id: 37,
    lo: 'AI-6.1.9',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Which of the following statements BEST describes how A/B testing is used in the context of a machine learning system (MLS)?',
    options: [
      {
        id: 'a',
        text: 'A/B testing is primarily used to generate diverse test cases that cover all possible inputs for an MLS'
      },
      {
        id: 'b',
        text: 'A/B testing is used to verify that all components within an MLS interact correctly with each other'
      },
      {
        id: 'c',
        text: 'A/B testing determines if an updated version of an MLS performs better than the previous version'
      },
      {
        id: 'd',
        text: 'A/B testing focuses on analyzing the internal algorithm structure of an MLS to identify potential defects'
      }
    ],
    correct: [ 'c' ],
    explanation: 'CORRECT: (c) A/B testing compares two variants (A=original, B=updated) to determine which PERFORMS BETTER. In ML: when the system is updated, A/B testing verifies the updated variant performs as well as or better than the previous version.\n' +
      '\n' +
      'WRONG (a): A/B testing does NOT generate test cases and provides NO GUIDANCE on test design. Operational inputs are often used but not generated by A/B testing.\n' +
      '\n' +
      'WRONG (b): A/B testing is NOT about verifying component interactions within a single system. It compares two DIFFERENT VERSIONS of the system.\n' +
      '\n' +
      'WRONG (d): A/B testing does NOT analyze internal algorithm structure. It is a statistical comparison of OUTPUTS from two variants — it is a black-box comparison.'
  },
  {
    id: 38,
    lo: 'AI-6.1.10',
    level: 'K2',
    points: 1,
    chapter: 6,
    multi: false,
    text: 'Which of the following descriptions of the creation of a pseudo-oracle used to support the back-to-back testing of an ML model is MOST likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'By varying the hyperparameters used for training the ML model that is being tested'
      },
      { id: 'b', text: 'By fine-tuning the ML model that is being tested' },
      {
        id: 'c',
        text: 'By supplementing the ML model that is being tested with retrieval-augmented generation'
      },
      {
        id: 'd',
        text: 'By using a different ML development framework than the ML model that is being tested'
      }
    ],
    correct: [ 'd' ],
    explanation: 'CORRECT: (d) Using a DIFFERENT ML DEVELOPMENT FRAMEWORK maximizes INDEPENDENCE of the pseudo-oracle from the SUT. Different framework = different libraries, potentially different underlying algorithm implementations, different development environment = minimum shared code = minimum shared defects.\n' +
      '\n' +
      'WRONG (a): Varying hyperparameters is a MINOR ADJUSTMENT to the SAME model. Same underlying code, same framework = high risk of shared defects defeating the purpose.\n' +
      '\n' +
      'WRONG (b): Fine-tuning is further training on the SAME BASE MODEL with the same framework. Not sufficiently independent.\n' +
      '\n' +
      'WRONG (c): RAG AUGMENTS the SAME underlying model at inference time. The base model architecture and framework remain the same = shared defects possible.\n' +
      '\n' +
      'KEY PRINCIPLE: The more independent the pseudo-oracle (different team, different framework, different algorithms), the more effective back-to-back testing is at finding defects.'
  },
  {
    id: 39,
    lo: 'AI-7.1.1',
    level: 'K2',
    points: 1,
    chapter: 7,
    multi: true,
    text: 'Which TWO of the following scenarios describe ML development risks that can be EFFECTIVELY mitigated by performing ML functional performance testing?',
    options: [
      {
        id: 'a',
        text: 'A team notices that their ML development framework becomes slow and even unresponsive when processing large batches of data'
      },
      {
        id: 'b',
        text: 'A new version of a core library used by the ML development framework appears to be causing the ML model to produce unexpected and inaccurate results'
      },
      {
        id: 'c',
        text: "After a new installation, the development team needs a quick test to determine if the ML development framework's essential services are running correctly"
      },
      {
        id: 'd',
        text: 'A single test result is difficult to reproduce during evaluation, showing slight variations in ML functional performance with each execution'
      },
      {
        id: 'e',
        text: "A project leader needs to decide between two potential algorithms based on their suitability for the project's goals"
      }
    ],
    correct: [ 'b', 'd' ],
    explanation: 'CORRECT (b): New library version causing INACCURATE RESULTS → ML functional performance testing reveals behavioral anomalies by evaluating accuracy, precision, recall, F1 against expected criteria. ✓\n' +
      '\n' +
      'CORRECT (d): STOCHASTIC VARIATION in test results → ML functional performance testing with MULTIPLE RUNS and STATISTICAL ANALYSIS quantifies non-determinism and provides meaningful confidence intervals. ✓\n' +
      '\n' +
      'WRONG (a): Framework SLOW/UNRESPONSIVE = performance EFFICIENCY issue → mitigated by PERFORMANCE TESTING (speed, throughput), NOT ML functional performance testing.\n' +
      '\n' +
      "WRONG (c): 'Quick test if essential services are running' = SMOKE TESTING after installation. Not full ML functional performance testing.\n" +
      '\n' +
      'WRONG (e): Deciding between two algorithms = ALGORITHM SUITABILITY REVIEW or A/B TESTING between candidates. ML functional performance testing evaluates a specific algorithm, not selects between candidates.\n' +
      '\n' +
      'DISTINCTION: ML functional performance testing = evaluates FUNCTIONAL CORRECTNESS (accuracy metrics). Performance testing = evaluates SPEED/EFFICIENCY.'
  },
  {
    id: 40,
    lo: 'AI-7.1.2',
    level: 'K2',
    points: 1,
    chapter: 7,
    multi: false,
    text: 'Which of the following statements CORRECTLY describes how shadow testing differs from canary testing in the deployment of ML models?',
    options: [
      {
        id: 'a',
        text: 'Shadow testing affects the responses from real users, while canary testing does not involve real users'
      },
      {
        id: 'b',
        text: 'Shadow testing mirrors traffic without impacting users, while canary testing provides responses from the new ML model to a subset of real users'
      },
      {
        id: 'c',
        text: 'Canary testing is used for performance testing, while shadow testing is mainly used for component integration testing'
      },
      {
        id: 'd',
        text: 'Canary testing compares ML models running offline, while shadow testing is based on the use of live user data'
      }
    ],
    correct: [ 'b' ],
    explanation: "CORRECT: (b) Shadow testing = mirrors live traffic in PARALLEL, processes requests using new model WITHOUT affecting user responses (users always get old model's output). Canary testing = releases new model to a SMALL SUBSET (e.g., 5%) of REAL USERS who receive actual responses from the new model.\n" +
      '\n' +
      'WRONG (a): REVERSED — Shadow testing has NO impact on users. Canary testing DOES affect a small percentage of real users.\n' +
      '\n' +
      'WRONG (c): Both canary and shadow testing are used to validate ML model performance and correctness on live traffic — neither is exclusively for performance testing or component integration testing.\n' +
      '\n' +
      'WRONG (d): WRONG on both counts — canary testing IS online with live users (not offline). Both methods use live production data.\n' +
      '\n' +
      'MEMORY AID: SHADOW = like a shadow, follows silently without being noticed (zero user impact). CANARY = like a canary in a mine sent ahead first (small group of real users go first).'
  }
];

export const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
