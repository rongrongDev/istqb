// CT-AI v1.0 — Chapter 6: ML – Neural Networks and Testing
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 6,
  title: 'ML – Neural Networks and Testing',
  time: '65 min',
  color: '#BE185D',
  bg: '#FDF2F8',
  overview: "Short but important chapter. Both sections need deep study. Neural network structure underpins everything in deep learning, and coverage measures are uniquely important for AI system testing — they're an active research area with distinct differences from traditional code coverage.",
  sections: [
    {
      id: '6.1',
      title: 'Neural Networks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Perceptron: simplest neural network — single layer, single neuron. Used for supervised binary classification.',
        "Deep Neural Network (DNN) = multi-layer perceptron. Three layer types: Input layer (receives raw inputs, e.g., pixel values). Hidden layers (artificial neurons/nodes — perform computations). Output layer (produces results, e.g., probability of 'cat').",
        'Each neuron computes an activation value using: an activation function applied to (activation values from previous layer × connection weights) + individual neuron bias. Activation values typically range from -1 (disinterested) to +1 (very interested).',
        'Training process: (1) Pass training data forward through network → generate output. (2) Compare output to labeled correct result. (3) Backpropagate the error to modify connection weights (minimize difference). (4) Repeat for many epochs. Gradually weights converge to produce good predictions.',
        "Note: neuron 'bias' here is a preset constant per neuron — NOT the same as statistical bias (Section 2.4)."
      ]
    },
    {
      id: '6.2',
      title: 'Coverage Measures for Neural Networks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Traditional white-box coverage (statement, branch, MC/DC) is meaningless for neural networks — the same code runs every time. Instead, coverage is measured based on the neural network's own structure — specifically the activation values of neurons.",
        'Five coverage types: (1) Neuron coverage — each neuron achieves activation > 0. Easiest to achieve (~100% with few tests). Only useful as an alarm when NOT achieved. (2) Threshold coverage — each neuron achieves activation > specified threshold (e.g., 0.75). Used in DeepXplore framework. (3) Sign-Change coverage — each neuron achieves BOTH positive AND negative activation values across test cases. (4) Value-Change coverage — each neuron achieves two activation values where the difference exceeds a chosen value. (5) Sign-Sign coverage — a change in sign of one neuron (in layer N) causes a change in sign of a neuron in layer N+1, while other signs remain unchanged. Analogous to MC/DC for neural networks.',
        'This is a new research area (papers only since 2017). Limited objective evidence of effectiveness — but note that even traditional coverage metrics (50+ years old) have limited objective evidence too.'
      ]
    }
  ]
};
