// CT-AI v2.0 — Chapter 1: Introduction to Artificial Intelligence
// summary/deepPoints from syllabus study notes; examInsights derived from sample exam v2.1
export default {
  id: 1,
  title: 'Introduction to Artificial Intelligence',
  time: '120 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: 'Foundational vocabulary for the exam. Most sections here are background knowledge — skim them for terminology. Focus your energy on the AI technology taxonomy (1.1.3), GenAI internals (1.1.4), and the EU AI Act risk framework (1.1.8). These three appear in testing context across all chapters.',
  sections: [
    {
      id: '1.1.1',
      title: 'AI-Based vs. Conventional Systems',
      level: 'K2',
      type: 'skim',
      summary: "Conventional systems = explicit imperative programming (if/then/else), deterministic and predictable. AI systems = learn from data patterns, probabilistic, outputs not always reproducible. Key challenge: the 'black-box' nature — billions of parameters make AI decisions hard to explain. Additional distinction: AI is self-learning and adaptable; conventional systems require manual updates. Explainability is a major regulatory focus.",
      examInsights: [
        'Q1 TRAP — Option (c) reverses the characteristics: AI is PROBABILISTIC and hard to explain; conventional systems are DETERMINISTIC and explainable. This is a classic swap trap.',
        "Q1 TRAP — Option (d) is also wrong: it's CONVENTIONAL systems that are more suitable where explainability is crucial (safety-critical tasks). AI is currently more appropriate for complex tasks in less regulated areas.",
        'Q1 TRAP — Option (b) is wrong: AI is NOT necessarily faster than conventional systems. Speed is not the defining advantage.',
        'KEY TAKEAWAY: AI = probabilistic + adaptable + black-box. Conventional = deterministic + rule-based + explainable.'
      ]
    },
    {
      id: '1.1.2',
      title: 'Narrow, General, and Super AI',
      level: 'K2',
      type: 'skim',
      summary: "Narrow AI (weak AI): all deployed AI today — task-specific only (face recognition cannot translate). Frontier AI: a subset of narrow AI representing the most advanced current systems (large GenAI models). General AI (strong AI): human-like cognition across any task — does NOT exist yet. Super AI: self-improving beyond human intelligence; the transition point from General to Super AI is called the 'technological singularity' — considered an existential risk.",
      examInsights: [
        "Q2 TRAP (select TWO) — Option (d) is wrong: super AI is NOT just 'cutting-edge GenAI models.' Super AI is a theoretical concept of intelligence surpassing all human intelligence across every domain.",
        "Q2 — Option (e) is correct and subtle: once General AI is achieved, given knowledge available on the internet, super AI is 'almost certain' to follow. This causal chain matters.",
        'Q2 — Option (c) is correct: narrow=task-specific, general=human-like versatility, super=surpasses human intelligence.',
        'Q-A1 TRAP — Distinguishing the three types in scenario descriptions: systems doing ONE narrow task (tumor detection, translation) = narrow AI. Systems doing diverse cognitive tasks (scheduling, cooking, conversing) = General AI. Systems generating incomprehensible new art/math = Super AI.'
      ]
    },
    {
      id: '1.1.3',
      title: 'Different Types of AI Technologies',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Machine Learning (ML) — the core of AI. Three paradigms: Supervised (labeled data → Classification or ML Regression), Unsupervised (unlabeled data → Clustering or Association), Reinforcement (agent learns via rewards/penalties from environment — no dataset required). Key ML technologies: neural networks, Bayesian models, SVM, random forests.',
        'Deep Learning (DL) — a subset of ML using deep neural networks (DNN). CNN: image recognition, object detection. RNN: sequential data, text, time series. Transformers: long-range dependencies, power LLMs and vision transformers.',
        'LLMs = DNN + NLP combined — this is what powers GenAI text generation. Know this equation.',
        'Other specialized AI technologies: NLP (sentiment analysis, translation), Computer Vision (facial recognition, robotics), Fuzzy Logic (uncertainty reasoning), Search Algorithms (navigation, optimization), Expert Systems (rule-based decision support).',
        'Agentic AI: extends these through autonomous agents that plan, reason, and act independently in dynamic environments — a newer concept in v2.0.'
      ],
      examInsights: [
        'Q3 TRAP — DL and ML are NOT interchangeable. DL⊂ML⊂AI is a strict hierarchy. Option (b) is wrong: DL did NOT come before ML or AI — it is a recent advancement within ML.',
        'Q10 MATCHING — Language translation app with labeled sentence pairs = CLASSIFICATION (supervised, not reinforcement — no reward function). Mobile game adjusts based on spending amount = REINFORCEMENT (spending = reward). Social network groups users by interests = CLUSTERING (unlabeled grouping). Predicting equipment failure time = REGRESSION (continuous value).',
        'Q10 TRAP — Translation apps learn from labeled parallel text pairs. This is supervised classification, NOT reinforcement learning (no explicit reward/penalty loop).'
      ]
    },
    {
      id: '1.1.4',
      title: 'Generative AI (GenAI)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'GenAI creates new content (text, images, video, music, code). Three core technologies: GANs (two competing networks → realistic synthetic data), Diffusion Models (add then remove noise → high-quality images/video), Transformers + LLMs (self-attention mechanisms → coherent text and multimodal content).',
        'Most practical tools use foundation models fine-tuned for specific applications. Field is moving toward multimodal models (text + images + audio combined).',
        'Societal concerns you must know: Deepfakes and misinformation (undermines trust in digital media). Privacy/security risks from synthetic content. Employment impact on white-collar work (writing, design, coding, legal, medical). Sustainability — large models have enormous energy consumption and carbon footprint.',
        'EU AI Act [EU AI Act] is emerging to regulate GenAI — especially high-risk applications. Referenced throughout the syllabus.'
      ],
      examInsights: [
        "Q4 TRAP — Option (a) describes traditional AI analysis/classification, NOT generative AI. GenAI CREATES new content — it doesn't just analyze existing content.",
        'Q4 TRAP — Option (d) is wrong: GenAI is NOT limited to text and images. Applications include drug discovery, protein folding, data simulation, materials science.',
        'Q4 KEY: The defining characteristic of GenAI is generating NEW, ORIGINAL content by learning patterns from training data.'
      ]
    },
    {
      id: '1.1.5',
      title: 'Hardware for Machine Learning',
      level: 'K2',
      type: 'skim',
      summary: 'ML benefits from: massively parallel processing (matrix multiplication), large data structure support, and low-precision arithmetic (quantization — fewer bits → faster, cheaper, lower power). CPU: few cores, high precision — less efficient for ML. GPU: thousands of cores, parallel — best for training. ASICs/System-on-a-Chip: purpose-built for edge AI inference. Neuromorphic processors: brain-inspired, non-von Neumann architecture. Common pattern: train in the cloud, deploy to edge device.',
      examInsights: [
        'Q5 TRAP — Option (c) is wrong: ASICs are primarily used for EDGE INFERENCE (deployment), NOT for training. Cloud GPUs are used for training.',
        'Q5 TRAP — Option (d) is wrong: neuromorphic processors are specifically NON-von Neumann architecture — they mimic brain structure which is fundamentally different from traditional CPU design.',
        'KEY EXAM FACT: GPU = massively parallel = ideal for training. ASIC = purpose-built chip = ideal for edge deployment/inference.'
      ]
    },
    {
      id: '1.1.6',
      title: 'Development and Hosting of AI Models',
      level: 'K2',
      type: 'skim',
      summary: 'Development options: local (full control, privacy, limited to small/mid models), cloud public (scalable, pay-as-you-go), cloud private (enhanced security, higher cost), hybrid (prototype locally, scale to cloud). Hosting options follow the same breakdown. AIaaS (AI as a Service): access AI via cloud API — faster deployment, quicker time-to-market. Key selection factors: model size, performance needs, budget, security requirements, regulatory constraints. Hybrid multi-tiered strategies are common.',
      examInsights: [
        'Q6 KEY — Hybrid = combines BOTH local AND cloud. It is NOT hybrid if everything is on cloud only, local only, or private cloud only.',
        'Q6 ANALYSIS of 5 statements: (i) cloud only = NOT hybrid. (ii) local data prep + cloud training = HYBRID ✓. (iii) local dev + cloud hosting = HYBRID ✓. (iv) local servers only = NOT hybrid. (v) private cloud only = NOT hybrid. Correct answer: ii and iii.',
        "Exam hint: look for 'both local AND cloud' in any description to identify hybrid approaches."
      ]
    },
    {
      id: '1.1.7',
      title: 'ML Development Frameworks',
      level: 'K2',
      type: 'skim',
      summary: 'Frameworks provide a toolkit for building, training, and deploying ML models. Five key functions: (1) Data Handling — load, preprocess, manage data. (2) Model Building — libraries of algorithms and architecture tools. (3) Training and Optimization — iteratively adjust parameters; supports distributed training and fine-tuning. (4) Evaluation — measure accuracy, precision, recall on unseen data. (5) Deployment — convert/export model for web, mobile, embedded. Selection factors: application area, ease of use vs configurability, user expertise, deployment constraints, community support, ecosystem maturity.',
      examInsights: [
        'Q-A2 TRAP — Option (b) is wrong: frameworks do NOT ELIMINATE the need for data preprocessing. They ASSIST with it, but the requirement does not disappear.',
        'Q-A2 TRAP — Option (c) is wrong: frameworks exist at DIFFERENT abstraction levels, including high-level APIs that simplify model creation without deep programming expertise.',
        'Q-A2 TRAP — Option (d) is wrong: ML models developed with a framework are NOT locked to that framework — they can generally be deployed elsewhere.',
        'Q-A2 KEY: Frameworks DO provide support for specifying model architecture design (e.g., decision tree structure).'
      ]
    },
    {
      id: '1.1.8',
      title: 'Regulations and Standards for AI',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three tiers of governance: Soft law (OECD AI Principles, UN Report on Governing AI — human-centric, ethical, cooperative compass for governments), Hard law (EU AI Act — binding, risk-based), Technical standards (ISO/IEC — translate policy to practice).',
        'EU AI Act risk-based classification — MUST KNOW: Unacceptable risk (prohibited — social scoring, real-time biometric surveillance). High risk (strict requirements: healthcare, finance, automotive, education — includes rigorous testing, data governance, human oversight). Low/Minimal risk (lighter touch). Penalties = percentage of global turnover.',
        'Key technical standards: ISO/IEC 25010 (software product quality model — baseline). ISO/IEC 25059 (extends 25010 with AI-specific quality characteristics). ISO/IEC TR 29119-11 (guidance on testing AI-based systems). ISO/IEC 42119 series (in development — covers AI-based system testing).',
        'Sector-specific regulations emerging in healthcare and finance — recognize AI poses unique domain risks. Regulations must be regularly reviewed as AI evolves rapidly.'
      ],
      examInsights: [
        'Q-A3 KEY — Only the EU AI Act has BINDING enforcement with SEVERE PENALTIES. OECD AI Principles and UN reports are non-mandatory guidelines. ISO/IEC standards are technical guidelines, not laws — no penalties for non-compliance.',
        'Q-A3 TRAP — Options (a) ISO/IEC TR 29119-11 and (d) ISO/IEC 25059 provide guidelines only. They do NOT impose penalties.',
        'EXAM FACT: Autonomous driving (AI navigation) without risk-based consideration violates the EU AI Act — classified as HIGH RISK. This is the Q-A3 scenario.'
      ]
    }
  ]
};
