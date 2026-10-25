// CT-AI v1.0 — Chapter 1: Introduction to AI
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 1,
  title: 'Introduction to AI',
  time: '105 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: 'Lays the foundational vocabulary for the entire exam. Most sections here are background knowledge — skim them for terminology. Focus your effort on AIaaS contracts, pre-trained model risks, and how standards like GDPR affect testing.',
  sections: [
    {
      id: '1.1',
      title: 'Definition of AI and AI Effect',
      level: 'K2',
      type: 'skim',
      summary: "AI originated in the 1950s as the capability of an engineered system to acquire, process and apply knowledge. The 'AI Effect' describes how society continuously redefines what counts as 'true AI' — once a task is solved, it's no longer seen as AI. Any definition today is temporary."
    },
    {
      id: '1.2',
      title: 'Narrow, General and Super AI',
      level: 'K2',
      type: 'skim',
      summary: "Three tiers: Narrow AI (task-specific, widely available today — spam filters, voice assistants). General AI (human-like cognition, not yet realized as of 2021). Super AI (replicates + exceeds human cognition, beyond general AI; the transition point is called the 'technological singularity')."
    },
    {
      id: '1.3',
      title: 'AI-Based vs Conventional Systems',
      level: 'K2',
      type: 'skim',
      summary: "Conventional systems: human-written imperative logic (if-then-else). AI/ML systems: patterns inferred from data, rules are not explicitly programmed. This makes AI outputs less transparent — the system 'learns' what features matter. Understanding this distinction is key to understanding why AI testing is different."
    },
    {
      id: '1.4',
      title: 'AI Technologies',
      level: 'K1',
      type: 'skim',
      summary: 'Just recognize the list: fuzzy logic, search algorithms, reasoning techniques (rule engines, case-based reasoning), and machine learning techniques (neural networks, Bayesian models, decision trees, random forest, SVM, clustering, genetic algorithms, linear/logistic regression). AI systems may combine several.'
    },
    {
      id: '1.5',
      title: 'AI Development Frameworks',
      level: 'K1',
      type: 'skim',
      summary: 'Identify these popular frameworks: TensorFlow (Google), PyTorch (Facebook), Keras (high-level API over TF), Scikit-learn (Python ML), Apache MxNet (AWS), CNTK (Microsoft), IBM Watson Studio. Frameworks evolve constantly — the exam only requires you to identify them, not their internals.'
    },
    {
      id: '1.6',
      title: 'Hardware for AI-Based Systems',
      level: 'K2',
      type: 'skim',
      summary: 'ML benefits from low-precision arithmetic, large data structure support, and massively parallel processing. CPUs are general but slow for ML. GPUs (thousands of cores) outperform CPUs for training. ASICs & SoC are purpose-built for edge AI. Train in the cloud, deploy to device is a common pattern. Key vendors: NVIDIA, Google (TPU/Edge TPU), Intel, Apple (Bionic), Huawei (Kirin).'
    },
    {
      id: '1.7',
      title: 'AI as a Service (AIaaS)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'AIaaS provides ML models and infrastructure over the web — no need to build from scratch. Providers: AWS, Microsoft Azure, Google Cloud, IBM Watson.',
        'SLA for AIaaS: covers uptime (e.g., 99.99%) and response time to fix defects — but RARELY defines ML functional performance metrics (e.g., accuracy). This is a testing gap.',
        'Liability is usually limited to fees paid — only suitable for low-risk applications where losing the service is not critically damaging.',
        'Initial free trial period: the consumer MUST test whether the service meets their functional and performance needs during this window — this is the acceptance testing opportunity.',
        'Testing implication: when using AIaaS, API testing of the provided service must be performed as part of component integration testing.'
      ]
    },
    {
      id: '1.8',
      title: 'Pre-Trained Models & Transfer Learning',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Pre-trained models: already-trained models reused to reduce cost and risk (e.g., ImageNet models — Inception, VGG, AlexNet, MobileNet; BERT for NLP).',
        'Transfer learning: take a pre-trained model and retrain only later layers for a new task. Works best when original and new functions are similar (cat breeds → dog breeds is fine; cat breeds → accent detection is not).',
        'Risks of pre-trained models you MUST know: (1) Lack of transparency — unknown internals. (2) Insufficient similarity between original and new task. (3) Data preparation mismatch — different pre-processing steps. (4) Inherited shortcomings/biases — not documented. (5) Inherited adversarial vulnerabilities — adversarial examples from the original model may also affect your model.',
        'Mitigation: thorough documentation of the pre-trained model (see Section 7.5).'
      ]
    },
    {
      id: '1.9',
      title: 'Standards, Regulations and AI',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'ISO/IEC JTC1/SC42: subcommittee on AI standards since 2017. ISO/IEC JTC1/SC7 published a technical report on testing AI-based systems [S01].',
        "GDPR (EU, since May 2018): obligations for data controllers regarding personal data and automated decision-making. Most important from a testing perspective: personal data (including predictions) should be accurate — not 100% accurate per prediction, but accurate enough for the system's purpose.",
        'DIN (Germany): AI Quality Metamodel. IEEE: ethics and AI standards (ongoing).',
        'Safety-related standards: ISO 26262 and ISO/PAS 21448 (SOTIF) for automotive systems — these are mandatory in some jurisdictions.'
      ]
    }
  ]
};
