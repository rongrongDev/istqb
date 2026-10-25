// CT-AI v1.0 — Chapter 6 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'A short but technical chapter: how a neural network actually works — perceptrons, layers, activation values, forward propagation — and the white-box coverage measures defined for neural networks (neuron coverage, threshold coverage, sign change, value change, sign-sign coverage).',
  keywords: {
    general: [],
    aiSpecific: [
      'Activation value',
      'deep neural network (DNN)',
      'ML training data',
      'multi-layer perceptron',
      'neural network',
      'neuron coverage',
      'perceptron',
      'sign change coverage',
      'sign-sign coverage',
      'supervised learning',
      'threshold coverage',
      'training data',
      'value change coverage'
    ]
  },
  objectives: [
    {
      id: 'AI-6.1.1',
      level: 'K2',
      text: 'Explain the structure and function of a neural network including a DNN'
    },
    {
      id: 'AI-6.2.1',
      level: 'K2',
      text: 'Describe the different coverage measures for neural networks'
    }
  ],
  sections: {
    '6.1': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Perceptron: simplest neural network — single layer, single neuron. Used for supervised binary classification.',
            "Deep Neural Network (DNN) = multi-layer perceptron. Three layer types: Input layer (receives raw inputs, e.g., pixel values). Hidden layers (artificial neurons/nodes — perform computations). Output layer (produces results, e.g., probability of 'cat').",
            'Each neuron computes an activation value using: an activation function applied to (activation values from previous layer × connection weights) + individual neuron bias. Activation values typically range from -1 (disinterested) to +1 (very interested).',
            'Training process: (1) Pass training data forward through network → generate output. (2) Compare output to labeled correct result. (3) Backpropagate the error to modify connection weights (minimize difference). (4) Repeat for many epochs. Gradually weights converge to produce good predictions.',
            "Note: neuron 'bias' here is a preset constant per neuron — NOT the same as statistical bias (Section 2.4)."
          ]
        }
      ]
    },
    '6.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Traditional white-box coverage (statement, branch, MC/DC) is meaningless for neural networks — the same code runs every time. Instead, coverage is measured based on the neural network's own structure — specifically the activation values of neurons.",
            'Five coverage types: (1) Neuron coverage — each neuron achieves activation > 0. Easiest to achieve (~100% with few tests). Only useful as an alarm when NOT achieved. (2) Threshold coverage — each neuron achieves activation > specified threshold (e.g., 0.75). Used in DeepXplore framework. (3) Sign-Change coverage — each neuron achieves BOTH positive AND negative activation values across test cases. (4) Value-Change coverage — each neuron achieves two activation values where the difference exceeds a chosen value. (5) Sign-Sign coverage — a change in sign of one neuron (in layer N) causes a change in sign of a neuron in layer N+1, while other signs remain unchanged. Analogous to MC/DC for neural networks.',
            'This is a new research area (papers only since 2017). Limited objective evidence of effectiveness — but note that even traditional coverage metrics (50+ years old) have limited objective evidence too.'
          ]
        }
      ]
    }
  }
};
