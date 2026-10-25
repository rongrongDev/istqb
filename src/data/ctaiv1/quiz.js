// CT-AI v1.x sample exam questions (main set + appendix) with answers/rationales
// Extracted from the former inline data in src/pages/ctai-quiz.jsx (ISTQB CT-AI Sample Exam v1.x)
export const questions = [
  {
    id: 1,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: "Which of the following statements provides the BEST example of the 'AI Effect'?",
    options: [
      {
        id: 'a',
        text: 'People lose their jobs as AI-based systems perform their roles cheaper and better'
      },
      { id: 'b', text: 'Competitive computer games lose popularity as AI-based systems always win' },
      {
        id: 'c',
        text: 'Rule-based expert systems for medical diagnosis are no longer considered to be AI'
      },
      { id: 'd', text: 'People believe AI will take over the world, as shown in films' }
    ],
    correct: [ 'c' ],
    rationale: "The 'AI Effect' is defined as the change in the definition of AI as technology advances. Rule-based systems for medical diagnosis were popular examples of AI in the 1970s and 1980s but are often not considered AI today."
  },
  {
    id: 2,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following options is NOT a technology used to implement AI?',
    options: [
      { id: 'a', text: 'Support vector machine' },
      { id: 'b', text: 'Decision tree' },
      { id: 'c', text: 'Evolutionary reasoning' },
      { id: 'd', text: 'Bayesian optimization' }
    ],
    correct: [ 'c' ],
    rationale: 'There is no such AI technology as evolutionary reasoning. SVMs, Decision trees, and Bayesian optimization are all real ML technologies.'
  },
  {
    id: 3,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements about the hardware used to implement AI-based systems is MOST likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'The processors used to train a mobile recommendation system must be the same as the processors on the mobile phone'
      },
      {
        id: 'b',
        text: 'Graphical processing units (GPUs) are a reasonable choice to implement an AI-based computer vision system'
      },
      {
        id: 'c',
        text: 'Deep learning systems need to be trained, evaluated, and tested using AI-specific chips'
      },
      {
        id: 'd',
        text: 'It is always best to choose processors with more bits to achieve sufficient accuracy for AI-based systems'
      }
    ],
    correct: [ 'b' ],
    rationale: "GPUs are designed for the parallel processing of images using thousands of cores, which is close to what is required for an AI-based computer vision system. Training and inference can use different processors. AI-specific chips are not required but would be faster. Many AI systems don't need high-precision arithmetic."
  },
  {
    id: 4,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'There are a number of good quality pre-trained models available in the market and you want to use one of them for an image-based classifier. You have decided to ask the provider of the model about the data used for training the model and its format. Which of the following statements is the BEST example of a risk that you are trying to mitigate by asking these questions?',
    options: [
      { id: 'a', text: 'Bad classification accuracy of the pre-trained models' },
      { id: 'b', text: 'Differences in the data used to train the model and the operational data' },
      { id: 'c', text: 'Performance efficiency issues of the pre-trained model' },
      {
        id: 'd',
        text: 'Lack of explainability of the pre-trained model compared to that of a model trained by you'
      }
    ],
    correct: [ 'b' ],
    rationale: 'The data used to train the model should be similar to the data used for making predictions. The question mentions good quality models, so accuracy risk is negligible. Explainability cannot be assessed from training data format.'
  },
  {
    id: 5,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements is MOST likely to be specifying a requirement for autonomy in an AI-based system?',
    options: [
      {
        id: 'a',
        text: 'The system shall maintain a safe distance to other vehicles until the brake or accelerator is pushed by the driver'
      },
      {
        id: 'b',
        text: 'The system shall learn the preferred style of response to emails by remotely monitoring the email traffic'
      },
      {
        id: 'c',
        text: 'The system shall compare its predictions of house prices with actual selling prices to determine if it needs to be retrained'
      },
      {
        id: 'd',
        text: "It shall be possible to modify the system's behavior to work with different types of users in less than a day"
      }
    ],
    correct: [ 'a' ],
    rationale: 'This defines when the autonomous system hands back control to the human (brake/accelerator pushed), which is the defining characteristic of an autonomy requirement. Options b and c specify self-learning behavior. Option d specifies an adaptability requirement.'
  },
  {
    id: 6,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements about bias in AI-based systems is NOT correct?',
    options: [
      {
        id: 'a',
        text: 'Bias may be caused by users of a book recommendation system making choices that deliberately cause the system to make poor suggestions'
      },
      {
        id: 'b',
        text: 'Bias may be caused in the employee age of death prediction system by collecting the training data from a dataset of patients who are all retired'
      },
      {
        id: 'c',
        text: 'Bias may be caused in the creditworthiness system by using training data obtained from those who own and use a credit card'
      },
      {
        id: 'd',
        text: 'Bias may be caused in the navigation system by using a route planning algorithm that is too complex to be explained to typical users'
      }
    ],
    correct: [ 'd' ],
    rationale: 'Algorithm complexity and lack of explainability does NOT cause bias. Options a (poisoning), b (unrepresentative training set), and c (sample bias — credit card users are already creditworthy) all correctly describe bias causes.'
  },
  {
    id: 7,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following is MOST likely to be an example of reward hacking?',
    options: [
      {
        id: 'a',
        text: "The programmer's assistant tool optimizes the code to provide reduced response times, while still ensuring that functional requirements are met"
      },
      {
        id: 'b',
        text: 'An anesthetic supply device with a goal of keeping patients stable during surgery supplies too many doses and patients do not wake up as quickly as expected'
      },
      {
        id: 'c',
        text: 'The third-party development organization paid their AI programmers based on the number of lines of code they write'
      },
      {
        id: 'd',
        text: 'A type of AI used to play competitive computer games against humans that is focused on getting the highest score'
      }
    ],
    correct: [ 'b' ],
    rationale: "Reward hacking is when the AI achieves its goal through a shortcut that perverts the designer's intent. The anesthetic device achieves its goal (keeping patients stable) but causes an unintended side effect (patients don't wake up quickly). Option a achieves both goals without harm. Option c is about human incentives, not AI. Option d is just goal-directed play."
  },
  {
    id: 8,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Given the following attributes for an AI-based system (I-V): I. Probabilistic, II. Explicable, III. Unfair, IV. Non-deterministic, V. Deterministic. Which list of attributes below is likely to cause the MOST difficulties if the system is to be used as part of a safety-related system?',
    options: [
      { id: 'a', text: 'I, IV' },
      { id: 'b', text: 'II, IV' },
      { id: 'c', text: 'II, III, V' },
      { id: 'd', text: 'I, III, V' }
    ],
    correct: [ 'a' ],
    rationale: 'Probabilistic and Non-deterministic are the most problematic for safety-related systems, as they prevent reliable, predictable behavior. Explicability is normally NEEDED (good). Deterministic is normally NEEDED (good). Unfair is not ideal but not specifically a safety problem.'
  },
  {
    id: 9,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements BEST describes classification and regression as part of supervised learning?',
    options: [
      {
        id: 'a',
        text: 'Regression is checking that the ML model test results do not change when the same test data is executed'
      },
      { id: 'b', text: 'Classification is the grouping of unlabeled data into separate classes' },
      { id: 'c', text: 'Classification is the labelling of the data for training the ML model' },
      {
        id: 'd',
        text: 'Regression is predicting the number of classes that are output by the ML model'
      }
    ],
    correct: [ 'b' ],
    rationale: 'Classification is when input data is classified into one of a few predefined classes. Option a incorrectly describes regression as a non-regression testing concept. Option c conflates classification with labeling. Option d incorrectly describes regression output.'
  },
  {
    id: 10,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following options BEST describes an example of reinforcement learning?',
    options: [
      {
        id: 'a',
        text: 'The mobile game app updates its feedback, response timing and the number of user options it provides based on how much the players spend'
      },
      {
        id: 'b',
        text: 'The language translation app searches the internet to find text provided in multiple languages to improve its translation function'
      },
      {
        id: 'c',
        text: 'The factory quality control system uses video cameras and audio analysis to identify manufactured items that are faulty based on monitoring a human quality control operative'
      },
      {
        id: 'd',
        text: 'The software component test prediction system uses a range of quality measures to identify which components are likely to contain the most defects'
      }
    ],
    correct: [ 'a' ],
    rationale: 'The amount spent is the reward function; the app optimizes to increase spending. Option b is supervised learning (labeled translation pairs). Option c is supervised learning (human operative as oracle). Option d is supervised learning (defect history as labels).'
  },
  {
    id: 11,
    chapter: 3,
    level: 'K2',
    points: 2,
    multi: false,
    isAppendix: false,
    text: 'You have been asked for your opinion on the ML approach to be used for a new system that is part of the traffic management for a SMART city. The idea is that the new system will control the traffic lights in the city to ensure traffic flows easily through and around the city. Which of the following approaches do you expect MOST likely to succeed?',
    options: [
      {
        id: 'a',
        text: 'Unsupervised learning that is based on identifying clusters around the city where the traffic density is higher than average'
      },
      {
        id: 'b',
        text: 'A supervised learning regression solution based on thousands of journeys labelled with both journey length and duration'
      },
      {
        id: 'c',
        text: 'Reinforcement learning that is based on a reward function that penalizes solutions that result in higher levels of traffic congestion'
      },
      {
        id: 'd',
        text: 'A supervised learning classification solution that is based on drivers and passengers submitting their favorite routes for traversing the city'
      }
    ],
    correct: [ 'c' ],
    rationale: "A continually improving reinforcement learning system with a reward function based on lower congestion is valid for this type of system. Clustering identifies problem areas but doesn't control lights. Regression predicts individual journeys but not citywide solutions. Classification based on subjective route preferences is unreliable."
  },
  {
    id: 12,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'When performing testing of a trained model, an ML engineer found that the model was highly accurate when evaluated with validation data but that it performed poorly with independent test data. Which of the following options is MOST likely to cause this situation?',
    options: [
      { id: 'a', text: 'Underfitting' },
      { id: 'b', text: 'Concept drift' },
      { id: 'c', text: 'Overfitting' },
      { id: 'd', text: 'Poor acceptance criteria' }
    ],
    correct: [ 'c' ],
    rationale: 'Good performance on validation data but poor on independent test data is the classic sign of overfitting — the model memorized the training/validation data rather than learning generalizable patterns. Underfitting would show poor performance everywhere. Concept drift happens after deployment. Poor acceptance criteria would be consistent across datasets.'
  },
  {
    id: 13,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following is an example of a challenge that is likely to be encountered in the course of developing and testing an ML solution?',
    options: [
      {
        id: 'a',
        text: 'Data anonymization operations typically require knowledge of various ML algorithms'
      },
      { id: 'b', text: 'The data used might be unstructured data' },
      { id: 'c', text: 'A large percentage of the budget gets spent just in data preparation' },
      { id: 'd', text: 'The data pipeline scalability is a challenge when training the model' }
    ],
    correct: [ 'c' ],
    rationale: "Up to 43% of ML workflow effort may be spent in data preparation — this is a well-documented challenge. Data anonymization doesn't require ML knowledge. Unstructured data is common and handled by many ML frameworks. Scalability is mainly a deployment challenge, not training."
  },
  {
    id: 14,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'The data scientist has complained that the model cannot be trained with one particular algorithm, although other algorithms work with the same training data. Which of the following options is the MOST likely reason for this?',
    options: [
      { id: 'a', text: 'Wrong data' },
      { id: 'b', text: 'Missing data' },
      { id: 'c', text: 'Badly labelled data' },
      { id: 'd', text: 'Insufficient data' }
    ],
    correct: [ 'd' ],
    rationale: 'Since other algorithms work with the same data, the data is correct, present, and labeled. The most likely reason is that the specific algorithm requires more data than is available — it has a higher data requirement threshold.'
  },
  {
    id: 15,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'DataSure is a start-up with a product that promises to improve the quality of ML models. DataSure claim that this improvement comes from checking if the data has been labeled correctly. Which of the following defects is MOST likely to have been prevented by using this product?',
    options: [
      { id: 'a', text: 'The model will have security vulnerabilities' },
      { id: 'b', text: 'The model will have poor accuracy' },
      { id: 'c', text: 'The model will not fulfill its intended function' },
      { id: 'd', text: 'The model will produce biased outputs' }
    ],
    correct: [ 'b' ],
    rationale: 'Mislabeled data results in reduced accuracy. Security issues are unrelated to label checking. Not fulfilling function would come from incorrect or unfair data, not mislabeling. Bias comes from incomplete/unbalanced/unfair data, not mislabeling specifically.'
  },
  {
    id: 16,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'An ML engineer, upon finding insufficient training data, is rotating labeled images to create additional training data. Which of the following approaches to labeling is being applied in this above example?',
    options: [
      { id: 'a', text: 'Crowdsourcing' },
      { id: 'b', text: 'Augmentation' },
      { id: 'c', text: 'AI-based labeling' },
      { id: 'd', text: 'Outsourcing' }
    ],
    correct: [ 'b' ],
    rationale: 'Augmentation transforms existing labeled data to create additional training samples. Crowdsourcing involves many people labeling. AI-based labeling uses AI to label. Outsourcing assigns the task to a third party.'
  },
  {
    id: 17,
    chapter: 5,
    level: 'K3',
    points: 2,
    multi: false,
    isAppendix: false,
    text: 'The confusion matrix for an image classifier is shown below.\n' +
      '\n' +
      '          Predicted Positive  |  Predicted Negative\n' +
      'Actual Positive:    78        |        6\n' +
      'Actual Negative:    22        |       14\n' +
      '\n' +
      'Which of the following options represents the precision of the classifier?',
    options: [
      { id: 'a', text: '20/120 × 100' },
      { id: 'b', text: '78/120 × 100' },
      { id: 'c', text: '78/100 × 100' },
      { id: 'd', text: '22/100 × 100' }
    ],
    correct: [ 'c' ],
    rationale: 'Precision = TP/(TP+FP) × 100 = 78/(78+22) × 100 = 78/100 × 100 = 78%.\n' +
      'TP=78 (predicted positive, actually positive), FP=22 (predicted positive, actually negative).\n' +
      '\n' +
      'WRONG (a): 20/120 is not a standard metric formula.\n' +
      'WRONG (b): 78/120 would be TP/Total — not precision.\n' +
      'WRONG (d): 22/100 = FP/(TP+FP) = false discovery rate, not precision.'
  },
  {
    id: 18,
    chapter: 5,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'ThermalSpace is a solution provider that helps thermal power plants to optimize their power output. Their solution is based on an ML model created using past data with clearly marked output. The model helps determine the amount of electricity to be generated at a given time of the day. To determine the quality of the model using ML functional performance metrics, which of the following metrics is MOST likely to be used?',
    options: [
      { id: 'a', text: 'R-squared' },
      { id: 'b', text: 'Precision' },
      { id: 'c', text: 'Recall' },
      { id: 'd', text: 'False Positives' }
    ],
    correct: [ 'a' ],
    rationale: 'This is a supervised regression problem — the model outputs a continuous value (amount of electricity). R-squared and MSE/RMSE are metrics for regression. Precision, Recall, and False Positives are classification metrics.'
  },
  {
    id: 19,
    chapter: 5,
    level: 'K3',
    points: 2,
    multi: false,
    isAppendix: false,
    text: 'KnowYourPet is an app utilizing ML to determine whether a pet is hungry or not. It is understood that a dog is likely to be not hungry most of the time, as reflected in the training data. If the dog is mis-diagnosed as hungry then it may lead to overfeeding of the dog and this could lead to serious health issues. Which of the following metrics would you choose for determining the suitability of the model under test?',
    options: [
      { id: 'a', text: 'Accuracy' },
      { id: 'b', text: 'Precision' },
      { id: 'c', text: 'Recall' },
      { id: 'd', text: 'F1-score' }
    ],
    correct: [ 'b' ],
    rationale: 'Precision should be used because the cost of false positives (predicting hungry when not hungry = overfeeding) is very high (serious health issues). Accuracy is poor for imbalanced classes (not hungry dominates). Recall is for when missing positives is the main concern. F1-score is when both precision and recall are equally important, but here precision matters more.'
  },
  {
    id: 20,
    chapter: 6,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following options BEST describes a deep neural net?',
    options: [
      {
        id: 'a',
        text: 'It is comprised of a hierarchical structure of neurons with the lowest (deepest) neurons making most of the decisions'
      },
      {
        id: 'b',
        text: 'It is comprised of connected neurons where each neuron has an associated bias and each connection has an associated weight'
      },
      {
        id: 'c',
        text: 'It is made up several layers with each layer (except input and output layers) connected to each other layer and errors are propagated backwards through the network'
      },
      {
        id: 'd',
        text: 'It is made up of layers of neurons, each of which generates an activation value based on the other neurons in the same layer'
      }
    ],
    correct: [ 'b' ],
    rationale: "Each neuron has a bias and each connection has a weight — this is the fundamental structure of a neural network. Option a: neural networks don't have a hierarchical structure where deepest neurons make decisions. Option c: layers connect to adjacent layers only, not each other. Option d: activation is based on neurons in the preceding layer, not same layer."
  },
  {
    id: 21,
    chapter: 6,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements CORRECTLY describes a test coverage measure for neural networks?',
    options: [
      {
        id: 'a',
        text: 'Value change coverage is based on individual neurons being seen to affect the overall output of the neural network'
      },
      {
        id: 'b',
        text: 'Threshold coverage is based on neurons outputting an activation value greater than a pre-set value between zero and one'
      },
      {
        id: 'c',
        text: 'Neuron coverage is a measure of the proportion of neurons that are activated at any time during the testing'
      },
      {
        id: 'd',
        text: 'Sign change coverage measures the coverage of neurons that output both positive, negative and zero activation values'
      }
    ],
    correct: [ 'b' ],
    rationale: "Threshold coverage measures the proportion of neurons with activation values greater than a preset threshold. Option a: value change coverage measures neurons where activation differs by more than a preset amount (not overall output effect). Option c: neuron coverage measures neurons with activation > 0, not 'at any time.' Option d: sign change coverage covers neurons achieving both positive AND negative values — not zero."
  },
  {
    id: 22,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following requirements for an AI-based system is MOST likely to cause a significant challenge in testing?',
    options: [
      { id: 'a', text: 'The system shall be more accurate than the system it is replacing' },
      { id: 'b', text: 'The AI component in the system shall have 100% accuracy' },
      { id: 'c', text: 'A human operator should be able to override the system in 1 second' },
      { id: 'd', text: 'The system shall mimic the human emotions of a typical game player' }
    ],
    correct: [ 'd' ],
    rationale: "Defining and testing 'human emotions' is extremely complex — would require defining all human emotions and how the system mimics them, making the test oracle extremely difficult. Options a, b, and c are specific measurable requirements with clear test criteria."
  },
  {
    id: 23,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following is a factor associated with the test data that can make the testing of AI-based systems difficult?',
    options: [
      { id: 'a', text: 'Sourcing big data with high velocity' },
      { id: 'b', text: 'Sourcing data from a single source' },
      { id: 'c', text: 'Sourcing data separately from the data scientists' },
      { id: 'd', text: 'Sourcing data from public websites' }
    ],
    correct: [ 'a' ],
    rationale: 'Sourcing large quantities of high-velocity data for AI systems can be difficult to create and manage. Sourcing from a single source is consistent (easier). Separate sourcing from data scientists is good practice (prevents common failure modes). Public website sourcing is straightforward.'
  },
  {
    id: 24,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Why would the accuracy of human decisions be considered in testing as well as the accuracy of AI-based systems?',
    options: [
      {
        id: 'a',
        text: 'Intuitive human decisions can be made faster than a corresponding AI-based system in some situations'
      },
      { id: 'b', text: 'Unethical decisions can be made by humans as well as AI-based systems' },
      {
        id: 'c',
        text: 'The accuracy of human decisions is not relevant to testing AI-based systems'
      },
      {
        id: 'd',
        text: 'Human decisions may be of lower quality when they have been recommended by an AI-based system'
      }
    ],
    correct: [ 'd' ],
    rationale: 'Human decisions supported by AI recommendations may be of lower quality than unaided human decisions — this is automation bias. Testers must consider both the AI quality AND the quality of human decisions influenced by the AI.'
  },
  {
    id: 25,
    chapter: 7,
    level: 'K3',
    points: 2,
    multi: true,
    isAppendix: false,
    text: 'An ML-based toll charging solution determines the type of incoming vehicles from images. Different resolution cameras may be used. Images must be in jpeg format 320×480 pixels for training and prediction. The model must classify vehicle types accurately and be tested against vulnerabilities. Each toll plaza has its own complete system unconnected to others. Which of the following types of testing are the MOST appropriate options for the tests you would choose for system testing? (SELECT TWO)',
    options: [
      { id: 'a', text: 'Testing for concept drift' },
      { id: 'b', text: 'Adversarial testing' },
      { id: 'c', text: 'Scalability testing' },
      { id: 'd', text: 'Fairness testing' },
      { id: 'e', text: 'Data pipeline testing' }
    ],
    correct: [ 'b', 'e' ],
    rationale: 'Adversarial testing is important because the system must be tested against vulnerabilities (stated in requirements). Data pipeline testing is critical because images can come in various formats and resolutions, and the pipeline must normalize them to the required format.\n' +
      '\n' +
      'Concept drift is tested after deployment. Scalability testing is not needed (independent isolated systems). Fairness testing is not relevant (no discrimination concern for vehicles).'
  },
  {
    id: 26,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements BEST describes a testing challenge that specifically applies to a self-learning system?',
    options: [
      {
        id: 'a',
        text: 'The system requires regular retraining and therefore requires regular testing'
      },
      {
        id: 'b',
        text: 'The system is regularly released which means regression testing is required'
      },
      {
        id: 'c',
        text: 'The system changes in such a way that tests that previously passed can fail'
      },
      { id: 'd', text: 'The system requires a human operator, who is also required for testing' }
    ],
    correct: [ 'c' ],
    rationale: "Self-learning systems change themselves, so previously passing tests may fail after the system adapts. Option a: a system requiring regular retraining is not self-learning. Option b: regular releases don't define self-learning. Option d: self-learning systems operate autonomously, not with a required human operator."
  },
  {
    id: 27,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following is NOT likely to be required to test a system for bias?',
    options: [
      { id: 'a', text: 'Involving selected users that are known to be biased' },
      { id: 'b', text: 'Measuring how changes in test inputs change test outputs' },
      { id: 'c', text: 'Observing how production outputs correlate to production inputs' },
      { id: 'd', text: 'Obtaining additional data from other sources' }
    ],
    correct: [ 'a' ],
    rationale: "Biased users don't help determine whether the SYSTEM is biased. Measuring input/output changes (metamorphic-style) is important for bias detection. Production observation helps detect hidden bias. External demographic data helps identify bias on inferred variables."
  },
  {
    id: 28,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following statements BEST describes how system complexity can create challenges when testing an AI-based system?',
    options: [
      { id: 'a', text: 'Testing for bias may require data that the team does not have' },
      { id: 'b', text: 'Manual generation of white-box tests can be difficult' },
      { id: 'c', text: 'Determining whether a system is ethical can be subjective' },
      { id: 'd', text: 'It can be difficult to find representative data to train a model' }
    ],
    correct: [ 'b' ],
    rationale: 'Understanding how a complex AI system works and creating tests to achieve effective coverage is directly caused by AI system complexity. Bias data challenges are not specifically about complexity. Ethical subjectivity is not a complexity challenge. Representative training data difficulty is not about system complexity specifically.'
  },
  {
    id: 29,
    chapter: 8,
    level: 'K3',
    points: 2,
    multi: true,
    isAppendix: false,
    text: 'An AI-based system is being used by the health ministry to identify vulnerable groups of patients. The results will be shared with other government agencies and medical insurance companies. The system is initially trained on data from two surveys: 5,000 men over 50 and 25,000 women over 30. The system will continue to gather information from public social media. Which of the following attributes should be MOST carefully considered when specifying the objectives and acceptance criteria for the system? (SELECT TWO)',
    options: [
      { id: 'a', text: 'Adaptability' },
      { id: 'b', text: 'Bias' },
      { id: 'c', text: 'Explainability' },
      { id: 'd', text: 'Flexibility' },
      { id: 'e', text: 'Autonomy' }
    ],
    correct: [ 'b', 'c' ],
    rationale: 'Bias — training data is clearly imbalanced (25,000 women vs 5,000 men, different age groups). Explainability — results affect patients medically and financially; they need to know why they were identified as vulnerable (also required by data privacy regulations).\n' +
      '\n' +
      'Adaptability is not needed (stable operational environment). Flexibility is not needed (system works within its initial specification). Autonomy is not needed (no requirement for extended unsupervised operation).'
  },
  {
    id: 30,
    chapter: 9,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'An ML engineer is trying to find exploitable inputs and then use these inputs to retrain the models to make them immune to these inputs. Which of the following options BEST describes the approach being used by the ML engineer?',
    options: [
      { id: 'a', text: 'Validation' },
      { id: 'b', text: 'Adversarial testing' },
      { id: 'c', text: 'Data pipeline testing' },
      { id: 'd', text: 'Scalability testing' }
    ],
    correct: [ 'b' ],
    rationale: 'Finding exploitable inputs (adversarial examples) to expose vulnerabilities and then retraining to make the model resistant is the definition of adversarial testing. This is not validation, data pipeline testing, or scalability testing.'
  },
  {
    id: 31,
    chapter: 9,
    level: 'K3',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'A test manager has to select test techniques to be used for testing autonomous vehicle software. There are a large number of environmental conditions (>50) that need to be considered for seven vehicle functions. Which of the following test techniques is MOST likely to be used when testing the variety of vehicle functions (VF) in different environmental conditions (EC)?',
    options: [
      { id: 'a', text: 'A/B testing based on the VF and EC parameters' },
      { id: 'b', text: 'Combination testing of all the parameters of VF and EC' },
      { id: 'c', text: 'Pairwise testing of the relevant values of VF and EC' },
      { id: 'd', text: 'Back-to-back testing of relevant VF and EC values' }
    ],
    correct: [ 'c' ],
    rationale: 'Pairwise testing is best suited to reduce the number of combinations without sacrificing much defect detection capability. Full combinatorial testing would be nearly impossible (>50 conditions × 7 functions). A/B testing and back-to-back testing are not suited for combinatorial parameter testing.'
  },
  {
    id: 32,
    chapter: 9,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'A test manager decides to have a non-AI system with similar functionality to the AI based system under test (SUT) built to support system testing. Which of the following statements is most likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'The test manager has chosen back-to-back testing because it helps solve the test oracle problem by using a pseudo-oracle'
      },
      {
        id: 'b',
        text: 'The test manager has chosen A/B testing because it helps solve the test oracle problem by using a pseudo-oracle'
      },
      {
        id: 'c',
        text: 'The test manager has chosen back-to-back testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle'
      },
      {
        id: 'd',
        text: 'The test manager has chosen A/B testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle'
      }
    ],
    correct: [ 'a' ],
    rationale: 'Building a non-AI system to compare against the AI SUT is back-to-back testing (also called differential testing). It solves the test oracle problem using a pseudo-oracle. A/B testing compares two variants of the same system. Non-functional requirements cannot be verified using the pseudo-oracle since its resource characteristics differ from the AI SUT.'
  },
  {
    id: 33,
    chapter: 9,
    level: 'K3',
    points: 2,
    multi: false,
    isAppendix: false,
    text: 'An AI-based mobile phone search system recommends phones based on usage history and specified preferences.\n' +
      '\n' +
      'Source test case:\n' +
      "Inputs: Price range $200–$300, 3D camera: Don't care, Screen size: mid to large, OS: Android or iOS, Battery life: Don't care\n" +
      'Outputs: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs\n' +
      '\n' +
      'Two follow-up test cases:\n' +
      'T1: all same but 3D camera: YES\n' +
      'T2: all same but 3D camera: NO\n' +
      '\n' +
      'Which option is the MOST likely valid list of recommended phones for the follow-up test cases?',
    options: [
      { id: 'a', text: 'T1: SnapHappy_X1, SnapHappy_M2\nT2: ClickNow_1000x, ClickNow_1000xs' },
      {
        id: 'b',
        text: 'T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000xs\nT2: SnapHappy_X1, ClickNow_1000x'
      },
      { id: 'c', text: 'T1: all 5 phones\nT2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3' },
      { id: 'd', text: 'T1: all 5 phones\nT2: all 5 phones' }
    ],
    correct: [ 'b' ],
    rationale: 'T1 (3D camera = yes) can only contain phones FROM the source results that HAVE a 3D camera. T2 (3D camera = no) can only contain phones FROM the source results WITHOUT a 3D camera. Together T1+T2 must include all source phones with no overlap.\n' +
      '\n' +
      'Option b satisfies this: T1 contains the 3D camera phones (M2, M3, 1000xs), T2 contains the non-3D phones (X1, 1000x).\n' +
      'Option a: M3 is missing from T1+T2.\n' +
      'Options c/d are wrong because T1 shows all phones including those without 3D cameras.'
  },
  {
    id: 34,
    chapter: 9,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'System testing of an AI-based system is being planned. It has been suggested that exploratory testing is used in addition to scripted test techniques. Which of the following scenarios is MOST likely to be an example of exploratory testing being performed?',
    options: [
      {
        id: 'a',
        text: 'Training data is visualized using tools to look at various aspects of the data'
      },
      {
        id: 'b',
        text: 'Tests written using equivalence partitioning during the previous test cycle are being run'
      },
      { id: 'c', text: "The Google 'ML test checklist' is being used" },
      { id: 'd', text: 'ML functional performance metrics are being calculated' }
    ],
    correct: [ 'a' ],
    rationale: 'Visualizing training data to explore various aspects is Exploratory Data Analysis — an exploratory testing method. Option b is scripted testing. Option c is checklist-based testing (structured). Option d is calculating metrics — not exploratory testing.'
  },
  {
    id: 35,
    chapter: 9,
    level: 'K3',
    points: 2,
    multi: true,
    isAppendix: false,
    text: 'LAIgal systems has an AI-based product for extracting relevant favorable judgements similar to a given legal case. Used by judges in courts. System must be safe from malicious inputs. An open-source similar product exists. Not having a suitable test oracle is a challenge. Which of the following test techniques should be selected to test the new version during system testing? (SELECT TWO)',
    options: [
      { id: 'a', text: 'A/B testing' },
      { id: 'b', text: 'Back-to-back testing' },
      { id: 'c', text: 'Adversarial testing' },
      { id: 'd', text: 'State transition testing' },
      { id: 'e', text: 'ML functional performance metrics calculation' }
    ],
    correct: [ 'b', 'c' ],
    rationale: 'Back-to-back testing uses the similar open-source product as a pseudo-oracle to address the test oracle problem. Adversarial testing is important because the system must be safe from malicious inputs.\n' +
      '\n' +
      'A/B testing is for comparing variants, not solving oracle problems. State transition testing is not suggested by the scenario. ML functional performance metrics are for model testing stage, not system testing of non-classification problems.'
  },
  {
    id: 36,
    chapter: 10,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which one of the following statements is an example of a difference between a test environment for AI-based systems and a test environment for conventional systems?',
    options: [
      {
        id: 'a',
        text: 'Test environments for AI-based systems may require some mechanism to determine how a particular decision is made'
      },
      {
        id: 'b',
        text: 'Test environments for AI-based systems need simulators and virtual environments whereas conventional systems do not need these'
      },
      {
        id: 'c',
        text: 'Test environments for AI-based systems need large amounts of data, whereas conventional systems do not need large amount of data'
      },
      {
        id: 'd',
        text: 'GPUs are required for test environments for AI-based systems whereas conventional systems do not need these'
      }
    ],
    correct: [ 'a' ],
    rationale: 'Explainability mechanisms may need to be embedded in AI test environments to capture how decisions are made. Simulators/virtual environments are also used for conventional systems (e.g., embedded). Large data may also be required for conventional systems. GPUs are also used for other systems like games.'
  },
  {
    id: 37,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'In which of the following situations would AI be MOST useful when categorizing new defects?',
    options: [
      { id: 'a', text: 'A small number of defects requires categorization on a new application' },
      { id: 'b', text: 'A large number of defects is reported on a small application' },
      { id: 'c', text: 'Minimal data is provided in typical defect reports' },
      {
        id: 'd',
        text: 'A new development team needs to know the most appropriate developer to fix a defect'
      }
    ],
    correct: [ 'b' ],
    rationale: 'A large number of defects on a small application is where AI is most useful for identifying duplicates and categorizing. For small numbers, AI has insufficient training data. Minimal defect data reduces AI usefulness. A new development team means no historical data for developer assignment.'
  },
  {
    id: 38,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following is an AI tool MOST likely to use as the basis for generating functional test cases?',
    options: [
      { id: 'a', text: 'A test charter' },
      { id: 'b', text: 'A picture of the system as a flow chart' },
      { id: 'c', text: 'Web server logs' },
      { id: 'd', text: 'Crash reports' }
    ],
    correct: [ 'c' ],
    rationale: 'Web server logs reflect production use of the system and provide AI with real usage patterns to generate tests. Test charters focus exploratory testing but are difficult for AI to interpret for test case generation. A picture of a flowchart is not machine-readable. Crash reports describe unexpected failures, not normal functions.'
  },
  {
    id: 39,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following options CORRECTLY states how an AI-based tool can perform optimization of regression test suites?',
    options: [
      { id: 'a', text: 'By analyzing false positive test results' },
      { id: 'b', text: 'By analyzing information from previous testing activities' },
      { id: 'c', text: 'By using genetic algorithms to create new test cases' },
      { id: 'd', text: 'By updating the expected results to counter concept drift' }
    ],
    correct: [ 'b' ],
    rationale: 'AI optimizes regression test suites by analyzing previous test execution data — identifying which tests find defects, which tests are redundant, and which tests cover recently changed code. False positive analysis is not the goal. Genetic algorithms create new tests, not optimize existing suites. Concept drift is unrelated to regression test optimization.'
  },
  {
    id: 40,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: false,
    text: 'Which of the following options CORRECTLY states how an AI-based tool can perform defect prediction?',
    options: [
      {
        id: 'a',
        text: 'Using natural language to ask developers where they predict defects will occur'
      },
      { id: 'b', text: 'By analyzing the causes of defects raised on a similar code base' },
      { id: 'c', text: 'By analyzing false positive defects' },
      { id: 'd', text: 'Scanning code to identify defects using rules' }
    ],
    correct: [ 'b' ],
    rationale: 'Defect prediction analyzes correlations between code/process/people measures and defects found on the same or similar code bases. NLP asking developers is not defect prediction. False positive analysis is not the purpose. Scanning with rules is static analysis, not AI defect prediction.'
  },
  {
    id: 41,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about AI is MOST likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'An autonomous robot that can act as a worker in a house, shop or office is an example of general AI'
      },
      {
        id: 'b',
        text: 'A robot exhibiting similar skill levels as a human is considered to have achieved singularity'
      },
      {
        id: 'c',
        text: 'AI-based systems that support a range of test management functions are considered to possess general AI'
      },
      {
        id: 'd',
        text: 'An AI-based system that cannot access the internet is said to exhibit narrow AI'
      }
    ],
    correct: [ 'a' ],
    rationale: 'An autonomous robot working across different environments (house, shop, office) demonstrates the versatile, human-like cognition that defines general AI. Singularity is when AI SURPASSES humans, not when it reaches similar levels. Test management is a specialized task = narrow AI. Internet access is irrelevant to narrow vs general AI classification.'
  },
  {
    id: 42,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is MOST likely to be describing a conventional system?',
    options: [
      {
        id: 'a',
        text: 'This system assigns customers into groups, based on their historical buying patterns'
      },
      { id: 'b', text: 'This system controls the braking of the car dependent on its speed' },
      {
        id: 'c',
        text: 'This system taught itself to recognize different words by listening to recordings'
      },
      {
        id: 'd',
        text: 'This system detects anomalies from its experience of seeing anomalies in many X-rays'
      }
    ],
    correct: [ 'b' ],
    rationale: 'Controlling braking based on speed is rule-based (if-speed > X then apply-brake). No evidence of AI. Option a describes clustering (unsupervised learning). Option c describes self-learning speech recognition (supervised). Option d describes anomaly detection from experience (supervised learning).'
  },
  {
    id: 43,
    chapter: 1,
    level: 'K1',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following options is NOT a framework used to develop AI-based software?',
    options: [
      { id: 'a', text: 'scikit-learn' },
      { id: 'b', text: 'CNTK' },
      { id: 'c', text: 'MxNet' },
      { id: 'd', text: 'EZPy-AI' }
    ],
    correct: [ 'd' ],
    rationale: 'There is no AI framework called EZPy-AI. scikit-learn (Python ML library), CNTK (Microsoft Cognitive Toolkit), and MxNet (Amazon deep learning framework) are all real AI frameworks.'
  },
  {
    id: 44,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is MOST likely to be describing a system that includes the use of AI as a Service (AIaaS)?',
    options: [
      {
        id: 'a',
        text: 'The image classifier identifies defects in gyroscope casings and was built using transfer learning'
      },
      {
        id: 'b',
        text: 'The underwater AI vehicle steering uses a third-party obstacle avoidance component based on decision trees'
      },
      {
        id: 'c',
        text: 'The contract checker uses an exclusive algorithm for liability, but the pricing part is separately checked by a generic contract pricing AI component'
      },
      {
        id: 'd',
        text: "The car rental pricing system uses AI and is hosted in the cloud made available to all the company's offices"
      }
    ],
    correct: [ 'c' ],
    rationale: "The pricing part is a GENERIC, WIDELY AVAILABLE AI service — this is AIaaS. Option a: highly specialized transfer learning model, unlikely to be AIaaS. Option b: specialized embedded component, unlikely to be made widely available as AIaaS. Option d: an internally-hosted system for the company's own offices is NOT AIaaS (AIaaS is externally provided to consumers)."
  },
  {
    id: 45,
    chapter: 1,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following options is the MOST likely use of a regulatory standard/regulation for an AI-based system?',
    options: [
      { id: 'a', text: 'Use of ISO/PAS 21448 (SOTIF) for an unmanned autonomous submarine' },
      { id: 'b', text: 'Use of GDPR for a bank loan decision-making system' },
      { id: 'c', text: 'Use of ISO 26262 for a fully self-driving car' },
      { id: 'd', text: 'Use of GDPR for a drone collision-avoidance system' }
    ],
    correct: [ 'b' ],
    rationale: 'A bank loan system processes personal financial data — GDPR applies. SOTIF is for road vehicles, not submarines. ISO 26262 requires deterministic systems; fully self-driving cars have non-deterministic AI. GDPR requires personal data; drone collision avoidance handles obstacle data, not personal data.'
  },
  {
    id: 46,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about flexibility and adaptability is MOST likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'Adaptability is important in unsupervised learning as it allows the ML model to learn from data without labels'
      },
      {
        id: 'b',
        text: 'Flexibility is important in supervised learning as it allows the ML model to recognize meaning even when data is poorly labelled'
      },
      {
        id: 'c',
        text: 'Adaptability is important in reinforcement learning systems as such systems must adapt themselves to optimize their reward function'
      },
      {
        id: 'd',
        text: 'Flexibility is important in self-learning systems as it allows them to adapt themselves to unexpected changes in their environment'
      }
    ],
    correct: [ 'd' ],
    rationale: 'Flexibility = ability to be used in contexts outside original requirements. Self-learning systems need this to handle unexpected environmental changes. Adaptability = ease of being changed/modified — it is associated with a system that CAN BE changed, not one that changes itself. Options a, b, c confuse adaptability and flexibility or misapply them.'
  },
  {
    id: 47,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about the evolution of AI-based systems is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'Self-learning AI-based systems that continue to work in the same operational environment are not expected to change their behavior'
      },
      {
        id: 'b',
        text: 'Side effects are not a concern for AI-based systems that change themselves to cope with changes in their environment'
      },
      {
        id: 'c',
        text: 'AI-based systems must change themselves to cope with changes in system requirements during development'
      },
      {
        id: 'd',
        text: 'Self-learning systems that physically interact with people, need to be managed to ensure system changes are not dangerous'
      }
    ],
    correct: [ 'd' ],
    rationale: 'If a self-learning system physically interacts with people, any changes it makes to itself could potentially harm them — so changes must be managed. Self-learning systems can optimize even in static environments. Side effects remain a concern even when adapting. Evolution is about post-deployment behavior, not development changes.'
  },
  {
    id: 48,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following examples of an AI-based system is LEAST likely to require special attention with regard to ethical issues?',
    options: [
      {
        id: 'a',
        text: 'A computer game that teaches children the benefits of democracy by challenging them to become president'
      },
      {
        id: 'b',
        text: 'An application that uses data available on social media to provide a trustworthiness rating for job applicants'
      },
      {
        id: 'c',
        text: 'An autonomous self-powered underwater marine mapping system to create a map of the seabed in international waters'
      },
      {
        id: 'd',
        text: "A mobile app that monitors each employee's daily exercise and rewards them with health insurance benefits"
      }
    ],
    correct: [ 'c' ],
    rationale: "An underwater seabed mapping system in international waters doesn't interact with people or personal data — ethical principles of autonomy, harm prevention, fairness, and explicability are unlikely to be affected. Option a: teaching children political views. Option b: using social media data for employment decisions (privacy and fairness concerns). Option d: monitoring employees and creating health-related incentives (vulnerable groups, privacy)."
  },
  {
    id: 49,
    chapter: 2,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about the transparency, interpretability and explainability for AI-based systems is MOST likely to be CORRECT?',
    options: [
      {
        id: 'a',
        text: 'The search engine algorithm was selected as it was considered to be the most explainable'
      },
      {
        id: 'b',
        text: 'The loan system was considered transparent as for each loan application it was clear to users how it decided'
      },
      {
        id: 'c',
        text: 'The doctors were happy with the level of interpretability of the rule-based oncology system as they could understand how the given rules were implemented in the system'
      },
      {
        id: 'd',
        text: 'The drone operators were happy with the transparency of the control system as they felt that the system responded correctly to their instructions'
      }
    ],
    correct: [ 'c' ],
    rationale: 'Understanding the TECHNOLOGY (how the rules are implemented) is interpretability. Option a describes explainability (how a specific output was reached), not selection criteria. Option b: understanding how a specific loan decision was made is explainability, not transparency. Option d: system responding correctly is functional behavior, not transparency.'
  },
  {
    id: 50,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following BEST describes the unsupervised approach to machine learning?',
    options: [
      { id: 'a', text: 'Data and labels are analyzed to group them into clusters' },
      { id: 'b', text: 'A system automatically learns by satisfying a fitness function' },
      { id: 'c', text: 'A system teaches itself to meet objectives based on rewards' },
      { id: 'd', text: 'Data are analyzed to identify patterns in the data' }
    ],
    correct: [ 'd' ],
    rationale: "Unsupervised learning finds patterns in unlabeled data. Option a: clustering uses unlabeled data but 'labels' are mentioned. Options b/c describe reinforcement learning (fitness function/rewards)."
  },
  {
    id: 51,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Given descriptions I–VI matched to ML workflow activities:\n' +
      'I = Model performance checked with validation data\n' +
      'II = Origin of test data identified\n' +
      'III = Tuned model made ready for target hardware\n' +
      'IV = Test data used to ensure ML performance criteria met\n' +
      'V = Model created from source code\n' +
      'VI = Critical data features identified\n' +
      '\n' +
      'Which option BEST matches activities to descriptions?',
    options: [
      {
        id: 'a',
        text: 'III → Build & Compile Model / II → Prepare the Data / IV → Evaluate the Model'
      },
      { id: 'b', text: 'V → Build & Compile Model / II → Prepare the Data / I → Evaluate the Model' },
      {
        id: 'c',
        text: 'V → Build & Compile Model / VI → Prepare the Data / IV → Evaluate the Model'
      },
      {
        id: 'd',
        text: 'III → Build & Compile Model / VI → Prepare the Data / I → Evaluate the Model'
      }
    ],
    correct: [ 'b' ],
    rationale: 'Build & Compile Model = creating model from source code (V). Prepare Data = identifying origin of test data (II). Evaluate Model = checking model performance using validation data (I).\n' +
      'Option III is deployment (not build). VI (feature identification) is data preparation but II is more appropriate, and I (validation) is evaluate model.'
  },
  {
    id: 52,
    chapter: 3,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is LEAST likely to be used as a rationale for selecting an ML algorithm?',
    options: [
      {
        id: 'a',
        text: 'The amount of memory available for training the translation system in the mobile device'
      },
      {
        id: 'b',
        text: 'The maximum time allowed for retraining the embedded health monitoring system'
      },
      {
        id: 'c',
        text: 'The number of measured characteristics used as the basis for a sports prediction system'
      },
      {
        id: 'd',
        text: 'The number of expected clusters of customer types for a retail marketing system'
      }
    ],
    correct: [ 'a' ],
    rationale: 'Translation model training is unlikely to occur on the mobile device itself — training happens in the cloud. Memory constraints of the MOBILE device are therefore not a rationale for algorithm selection. Options b (retraining time constraint), c (number of input features), and d (number of expected clusters) are all valid algorithm selection factors.'
  },
  {
    id: 53,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about the test dataset is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'The test dataset comes from a source totally different from the validation dataset'
      },
      {
        id: 'b',
        text: 'The format of the test dataset is different from the format of the validation dataset'
      },
      {
        id: 'c',
        text: 'The test dataset can be used as the validation dataset but not as the training dataset'
      },
      {
        id: 'd',
        text: 'The test dataset should not be exposed to the model during the training process'
      }
    ],
    correct: [ 'd' ],
    rationale: 'The test dataset must never be used during training or validation — it is the holdout set for final evaluation only. Test and validation datasets can come from the same source and have the same format. The test dataset cannot be used as validation either (it must remain independent).'
  },
  {
    id: 54,
    chapter: 4,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following options would MOST likely be a reason for poor labeling of data?',
    options: [
      { id: 'a', text: 'Insufficient data' },
      { id: 'b', text: 'Synthetic data' },
      { id: 'c', text: 'Translation errors' },
      { id: 'd', text: 'Algorithm chosen for the ML model' }
    ],
    correct: [ 'c' ],
    rationale: "Translation errors can cause correctly labeled data in one language to be mislabeled in another language. Insufficient data affects quantity, not labeling quality. Synthetic data doesn't inherently lead to poor labeling. The ML algorithm choice is unrelated to data labeling."
  },
  {
    id: 55,
    chapter: 5,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'An ML team asserts that ML functional performance metrics based on validation data from training are sufficient for determining system quality. Which statement shows this may be INCORRECT?',
    options: [
      {
        id: 'a',
        text: 'The ML functional performance metrics may not work well if the ground truth is not correct'
      },
      {
        id: 'b',
        text: 'The ML functional performance metrics cannot be used for measuring quality as these are tool dependent'
      },
      {
        id: 'c',
        text: 'Validation data is biased resulting in skewed functional performance measurements'
      },
      {
        id: 'd',
        text: 'Data may need to be transformed prior to training so the functional performance measurements do not reflect quality'
      }
    ],
    correct: [ 'a' ],
    rationale: "If the ground truth (labels) is incorrect, the model's performance metrics will indicate good quality when the model is actually producing wrong outputs. Metrics are not tool-dependent. Validation data bias is possible but not a valid general reason. Data transformation itself doesn't prevent accurate quality measurement."
  },
  {
    id: 56,
    chapter: 5,
    level: 'K1',
    points: 1,
    multi: false,
    isAppendix: true,
    text: "Which of the following options regarding benchmark suites BEST completes: 'ML benchmark suites help choose a particular model by indicating...'?",
    options: [
      { id: 'a', text: 'the time it takes to train' },
      { id: 'b', text: 'the time it takes to test' },
      { id: 'c', text: 'the time it takes to validate' },
      { id: 'd', text: 'the time it takes to deploy' }
    ],
    correct: [ 'a' ],
    rationale: 'ML benchmark suites (MLCommons, DAWNBench, MLMark) indicate training time, allowing comparison of hardware and framework performance. They do not measure test time, validation time, or deployment time.'
  },
  {
    id: 57,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following test levels provides the BEST choice for performing bias-related testing?',
    options: [
      { id: 'a', text: 'Component testing' },
      { id: 'b', text: 'Input data testing' },
      { id: 'c', text: 'System testing' },
      { id: 'd', text: 'Model testing' }
    ],
    correct: [ 'b' ],
    rationale: "Input data testing is specifically designed for bias testing (among other things) and should be done BEFORE training the model. Component testing handles non-model components (conventional testing). System testing can include bias testing but it's better done earlier. Model testing verifies model against specifications."
  },
  {
    id: 58,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements about the documentation of AI components is CORRECT?',
    options: [
      {
        id: 'a',
        text: 'Because non-functional requirements are not a part of the documentation of an AI component, non-functional testing cannot be performed'
      },
      {
        id: 'b',
        text: 'White-box testing of the interaction of AI and non-AI components is not possible if the interfaces are a part of the documentation'
      },
      {
        id: 'c',
        text: 'Checking for bias in the data is made possible by including the source of the data in the documentation'
      },
      {
        id: 'd',
        text: 'Self-adapting AI systems require each change made by the system to be fully documented'
      }
    ],
    correct: [ 'c' ],
    rationale: 'Data source documentation enables bias testing by identifying where data came from and potential biases introduced. Non-functional requirements CAN be part of documentation. Interface documentation ENABLES white-box testing, not prevents it. Self-adapting systems rarely fully document their own changes.'
  },
  {
    id: 59,
    chapter: 7,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: "An ecommerce app recommends products based on purchase history. You've been asked to measure the current conversion rate of recommendations compared to the original required rate. Which is the MOST likely underlying reason for this request?",
    options: [
      { id: 'a', text: 'AI effect' },
      { id: 'b', text: 'Adversarial attacks' },
      { id: 'c', text: 'Concept drift' },
      { id: 'd', text: 'Lack of fairness' }
    ],
    correct: [ 'c' ],
    rationale: "Declining conversion rate over time suggests the model's accuracy has degraded as customer behavior changed — this is concept drift. AI effect is about perceptions of what counts as AI. Adversarial attacks would cause specific targeted failures, not gradual decline. Lack of fairness relates to bias in recommendations."
  },
  {
    id: 60,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: "Which of the following options is MOST likely to be relevant when testing a system's autonomy?",
    options: [
      { id: 'a', text: 'Testing over a sustained period of time' },
      { id: 'b', text: 'Testing the accuracy of system predictions' },
      { id: 'c', text: 'Testing how quickly the system can adapt' },
      { id: 'd', text: 'Static analysis of training data' }
    ],
    correct: [ 'a' ],
    rationale: "Autonomy testing requires sustained testing to verify the system can operate independently and to check how often it requires human intervention over time. Prediction accuracy is not specific to autonomy. Speed of adaptation relates to adaptability, not autonomy. Static analysis of training data doesn't test autonomous operation."
  },
  {
    id: 61,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements demonstrates how non-deterministic systems can create challenges in testing?',
    options: [
      {
        id: 'a',
        text: 'Non-deterministic systems produce a different result each time, normally preventing the generation of expected results'
      },
      {
        id: 'b',
        text: 'Non-deterministic systems are difficult to test because they are not explainable'
      },
      {
        id: 'c',
        text: 'A system given the same inputs and initial state may produce different outputs, so can require multiple test executions'
      },
      {
        id: 'd',
        text: 'Non-deterministic systems are usually biased and require additional tests to exclude bias'
      }
    ],
    correct: [ 'c' ],
    rationale: "A non-deterministic system may give different outputs for the same inputs, requiring multiple test executions for statistical validity. Expected results CAN be defined (with tolerances), so option a is wrong. Non-determinism doesn't necessarily mean lack of explainability. There is no correlation between non-determinism and bias."
  },
  {
    id: 62,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'When testing a deep neural network, which of the following characteristics can be evaluated without using dynamic testing?',
    options: [
      { id: 'a', text: 'Explainability' },
      { id: 'b', text: 'Transparency' },
      { id: 'c', text: 'Automation bias' },
      { id: 'd', text: 'Accuracy' }
    ],
    correct: [ 'b' ],
    rationale: 'Transparency testing compares documentation to implementation — this can be done statically without executing the system. Explainability requires executing the system and analyzing its decisions. Automation bias requires human interaction with system outputs. Accuracy requires test execution.'
  },
  {
    id: 63,
    chapter: 8,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following characteristics of an example AI-based system might cause a test oracle problem?',
    options: [
      { id: 'a', text: 'It is not known where the training data was obtained' },
      {
        id: 'b',
        text: 'The output of the system is a prediction for which the ground truth is unknown'
      },
      {
        id: 'c',
        text: 'The system runs with no human intervention and is considered to be autonomous'
      },
      { id: 'd', text: 'There is a lack of transparency into how the system was implemented' }
    ],
    correct: [ 'b' ],
    rationale: "If the ground truth of a predicted output is unknown, it's impossible to determine the correct expected result — this IS the test oracle problem. Unknown data origin creates provenance concerns but not an oracle problem. Autonomy is unrelated to test oracles. Lack of transparency makes the system harder to understand but doesn't prevent determining correct outputs."
  },
  {
    id: 64,
    chapter: 9,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is CORRECT with regards to A/B testing?',
    options: [
      {
        id: 'a',
        text: 'A/B testing is also known as differential testing because two different programs are used'
      },
      { id: 'b', text: 'A/B testing is mostly useful for testing simple ML models' },
      {
        id: 'c',
        text: 'A/B testing requires multiple expected results from the same inputs to be compared to identify significant differences in tested models'
      },
      {
        id: 'd',
        text: 'A/B testing is a good technique for writing test cases for various types of ML models, especially self-learning systems'
      }
    ],
    correct: [ 'c' ],
    rationale: "A/B testing requires well-defined acceptance criteria and multiple results for statistical comparison. Option a: back-to-back testing is called differential testing, not A/B testing. Option b: A/B testing works for both simple and complex models. Option d: A/B testing compares results; it doesn't help write test cases."
  },
  {
    id: 65,
    chapter: 10,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is LEAST likely to be an example of a benefit provided by virtual test environments?',
    options: [
      {
        id: 'a',
        text: 'A smart city application tested to allow rarely-occurring scenarios (crowd control at New Year)'
      },
      {
        id: 'b',
        text: 'An AI-based money market trading system tested in virtual environment as real market testing would be impractical'
      },
      {
        id: 'c',
        text: 'A smart fruit picker tested in a virtual environment to run many picking scenarios in accelerated timeframe to check fruit is not damaged'
      },
      {
        id: 'd',
        text: 'An autonomous car tested in a virtual environment to allow potentially dangerous test scenarios to be run safely'
      }
    ],
    correct: [ 'c' ],
    rationale: 'Testing whether fruit is damaged in a virtual environment is LESS useful than testing in the real environment — checking real physical damage to real fruit is far easier than virtual simulation. Options a (rare scenarios), b (financial risk), and d (safety) are all clear benefits of virtual environments.'
  },
  {
    id: 66,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'It is possible to use an AI-assisted test automation tool to recognize objects through image processing, rather than using references to their location. To which type of AI software engineering technology is this example MOST likely referring?',
    options: [
      { id: 'a', text: 'Classification, Learning and Prediction' },
      { id: 'b', text: 'Probabilistic Software Engineering' },
      { id: 'c', text: 'Search-based Software Engineering' },
      { id: 'd', text: 'Clustering' }
    ],
    correct: [ 'a' ],
    rationale: 'Image recognition for GUI objects is classification-based ML — it classifies visual elements into categories. Probabilistic engineering estimates probabilities. Search-based engineering handles large problem spaces. Clustering is an algorithm type, not an AI software engineering technology.'
  },
  {
    id: 67,
    chapter: 11,
    level: 'K2',
    points: 1,
    multi: false,
    isAppendix: true,
    text: 'Which of the following statements is CORRECT with respect to visual testing?',
    options: [
      { id: 'a', text: 'Visual testing makes use of object IDs to determine changes' },
      { id: 'b', text: 'Visual testing uses images to do pixel-by-pixel comparisons' },
      { id: 'c', text: 'Visual testing helps find overlapping user interface elements' },
      { id: 'd', text: 'Visual testing fails when the screen layout changes' }
    ],
    correct: [ 'c' ],
    rationale: 'Visual testing uses AI image recognition to find overlapping UI elements, similar to how a human tester would notice them. Option a: object IDs are used by traditional automation, not visual testing. Option b: visual testing uses AI, not pixel-by-pixel comparison. Option d: visual testing works even when layout changes (unlike traditional automation).'
  }
];
