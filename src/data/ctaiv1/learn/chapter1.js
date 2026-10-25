// CT-AI v1.0 — Chapter 1 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: "This chapter builds the vocabulary the rest of the syllabus assumes: what AI is (and why its definition keeps moving — the 'AI effect'), the narrow/general/super AI ladder, how AI-based systems differ from conventional ones, and the practical landscape of technologies, frameworks, hardware, AI as a Service, pre-trained models, and the standards and regulations (including GDPR) that shape how AI systems must be tested.",
  keywords: {
    general: [],
    aiSpecific: [
      'AI as a Service (AIaaS)',
      'AI development framework',
      'AI effect',
      'AI-based system',
      'artificial intelligence (AI)',
      'neural network',
      'deep learning (DL)',
      'deep neural network',
      'general AI',
      'General Data Protection Regulation (GDPR)',
      'machine learning (ML)',
      'narrow AI',
      'pre-trained model',
      'super AI',
      'technological singularity',
      'transfer learning'
    ]
  },
  objectives: [
    {
      id: 'AI-1.1.1',
      level: 'K2',
      text: 'Describe the AI effect and how it influences the definition of AI'
    },
    { id: 'AI-1.2.1', level: 'K2', text: 'Distinguish between narrow AI, general AI, and super AI' },
    {
      id: 'AI-1.3.1',
      level: 'K2',
      text: 'Differentiate between AI-based systems and conventional systems'
    },
    {
      id: 'AI-1.4.1',
      level: 'K1',
      text: 'Recognize the different technologies used to implement AI'
    },
    { id: 'AI-1.5.1', level: 'K1', text: 'Identify popular AI development frameworks' },
    {
      id: 'AI-1.6.1',
      level: 'K2',
      text: 'Compare the choices available for hardware to implement AI-based systems'
    },
    { id: 'AI-1.7.1', level: 'K2', text: 'Explain the concept of AI as a Service (AIaaS)' },
    {
      id: 'AI-1.8.1',
      level: 'K2',
      text: 'Explain the use of pre-trained AI models and the risks associated with them'
    },
    { id: 'AI-1.9.1', level: 'K2', text: 'Describe how standards apply to AI-based systems' }
  ],
  sections: {
    '1.1': {
      body: [
        {
          type: 'p',
          text: "AI originated in the 1950s as the capability of an engineered system to acquire, process and apply knowledge. The 'AI Effect' describes how society continuously redefines what counts as 'true AI' — once a task is solved, it's no longer seen as AI. Any definition today is temporary."
        }
      ]
    },
    '1.2': {
      body: [
        {
          type: 'p',
          text: "Three tiers: Narrow AI (task-specific, widely available today — spam filters, voice assistants). General AI (human-like cognition, not yet realized as of 2021). Super AI (replicates + exceeds human cognition, beyond general AI; the transition point is called the 'technological singularity')."
        }
      ]
    },
    '1.3': {
      body: [
        {
          type: 'p',
          text: "Conventional systems: human-written imperative logic (if-then-else). AI/ML systems: patterns inferred from data, rules are not explicitly programmed. This makes AI outputs less transparent — the system 'learns' what features matter. Understanding this distinction is key to understanding why AI testing is different."
        }
      ]
    },
    '1.4': {
      body: [
        {
          type: 'p',
          text: 'Just recognize the list: fuzzy logic, search algorithms, reasoning techniques (rule engines, case-based reasoning), and machine learning techniques (neural networks, Bayesian models, decision trees, random forest, SVM, clustering, genetic algorithms, linear/logistic regression). AI systems may combine several.'
        }
      ]
    },
    '1.5': {
      body: [
        {
          type: 'p',
          text: 'Identify these popular frameworks: TensorFlow (Google), PyTorch (Facebook), Keras (high-level API over TF), Scikit-learn (Python ML), Apache MxNet (AWS), CNTK (Microsoft), IBM Watson Studio. Frameworks evolve constantly — the exam only requires you to identify them, not their internals.'
        }
      ]
    },
    '1.6': {
      body: [
        {
          type: 'p',
          text: 'ML benefits from low-precision arithmetic, large data structure support, and massively parallel processing. CPUs are general but slow for ML. GPUs (thousands of cores) outperform CPUs for training. ASICs & SoC are purpose-built for edge AI. Train in the cloud, deploy to device is a common pattern. Key vendors: NVIDIA, Google (TPU/Edge TPU), Intel, Apple (Bionic), Huawei (Kirin).'
        }
      ]
    },
    '1.7': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'AIaaS provides ML models and infrastructure over the web — no need to build from scratch. Providers: AWS, Microsoft Azure, Google Cloud, IBM Watson.',
            'SLA for AIaaS: covers uptime (e.g., 99.99%) and response time to fix defects — but RARELY defines ML functional performance metrics (e.g., accuracy). This is a testing gap.',
            'Liability is usually limited to fees paid — only suitable for low-risk applications where losing the service is not critically damaging.',
            'Initial free trial period: the consumer MUST test whether the service meets their functional and performance needs during this window — this is the acceptance testing opportunity.',
            'Testing implication: when using AIaaS, API testing of the provided service must be performed as part of component integration testing.'
          ]
        }
      ]
    },
    '1.8': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Pre-trained models: already-trained models reused to reduce cost and risk (e.g., ImageNet models — Inception, VGG, AlexNet, MobileNet; BERT for NLP).',
            'Transfer learning: take a pre-trained model and retrain only later layers for a new task. Works best when original and new functions are similar (cat breeds → dog breeds is fine; cat breeds → accent detection is not).',
            'Risks of pre-trained models you MUST know: (1) Lack of transparency — unknown internals. (2) Insufficient similarity between original and new task. (3) Data preparation mismatch — different pre-processing steps. (4) Inherited shortcomings/biases — not documented. (5) Inherited adversarial vulnerabilities — adversarial examples from the original model may also affect your model.',
            'Mitigation: thorough documentation of the pre-trained model (see Section 7.5).'
          ]
        }
      ]
    },
    '1.9': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'ISO/IEC JTC1/SC42: subcommittee on AI standards since 2017. ISO/IEC JTC1/SC7 published a technical report on testing AI-based systems [S01].',
            "GDPR (EU, since May 2018): obligations for data controllers regarding personal data and automated decision-making. Most important from a testing perspective: personal data (including predictions) should be accurate — not 100% accurate per prediction, but accurate enough for the system's purpose.",
            'DIN (Germany): AI Quality Metamodel. IEEE: ethics and AI standards (ongoing).',
            'Safety-related standards: ISO 26262 and ISO/PAS 21448 (SOTIF) for automotive systems — these are mandatory in some jurisdictions.'
          ]
        }
      ]
    }
  }
};
