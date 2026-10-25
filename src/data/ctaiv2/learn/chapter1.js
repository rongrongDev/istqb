// CT-AI v2.0 — Chapter 1 learn content, authored from ISTQB CT-AI Syllabus v2.0 (2026-04-17).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Block types: p (paragraph), list ({intro?, items}), table ({headers, rows}),
// example ({title, text}), note ({title?, text}).

export default {
  intro:
    "This chapter builds the vocabulary the whole exam relies on. It contrasts conventional and AI-based systems, maps the spectrum from narrow AI to general and super AI, tours the core AI technologies (ML, deep learning, GenAI), and covers the practical context: hardware, development/hosting options, ML frameworks, and the regulations and standards that govern responsible AI.",
  keywords: {
    general: [],
    aiSpecific: [
      "AI-based system",
      "artificial intelligence",
      "general AI",
      "machine learning",
      "ML development framework",
      "narrow AI",
      "super AI",
    ],
  },
  objectives: [
    { id: "AI-1.1.1", level: "K2", text: "Differentiate between AI-based systems and conventional systems" },
    { id: "AI-1.1.2", level: "K2", text: "Distinguish between narrow AI, general AI, and super AI" },
    { id: "AI-1.1.3", level: "K2", text: "Explain the different types of AI technologies" },
    { id: "AI-1.1.4", level: "K2", text: "Explain generative AI" },
    { id: "AI-1.1.5", level: "K2", text: "Compare the choices available for hardware to implement machine learning systems" },
    { id: "AI-1.1.6", level: "K2", text: "Compare the options for the development and hosting of AI models" },
    { id: "AI-1.1.7", level: "K2", text: "Summarize the functionality provided by ML development frameworks" },
    { id: "AI-1.1.8", level: "K2", text: "Explain how regulations and standards affect the development and testing of AI-based systems" },
  ],
  sections: {
    "1.1.1": {
      objective: "AI-1.1.1",
      body: [
        { type: "p", text: "Conventional systems are written in imperative languages: developers spell out step-by-step instructions (if-then-else, loops). Behavior is deterministic — the same input reliably produces the same output — which makes these systems predictable, transparent, and comparatively easy to explain." },
        { type: "p", text: "Most AI-based systems, especially those using machine learning, are not given rules at all. They analyze patterns in data and use what they learned to respond to new inputs. Their problem-solving relies on probabilistic reasoning, statistical inference, and pattern recognition — which lets them handle uncertainty and ambiguity well, but means outputs are not always predictable or reproducible." },
        { type: "example", title: "Cat recognition", text: "An image classifier trained to identify cats has no hand-coded 'whiskers + fur = cat' rules. It extracts patterns from a dataset of labeled cat images and applies those patterns to classify images it has never seen." },
        { type: "p", text: "Explainability is a key AI challenge: deep learning models can contain billions of parameters, making their internal decision process a 'black box'. That matters in healthcare, finance, defence, and transportation, where knowing why a decision was made is crucial — and it is why transparency and explainability are a major focus of AI regulation." },
        { type: "p", text: "Adaptability separates the two worlds as well. Conventional systems are static and need manual updates to handle new knowledge. AI-based systems can be self-learning, improving as they meet new data — powerful in dynamic environments, but demanding continuous monitoring to stay aligned with requirements." },
        { type: "table", headers: ["", "Conventional system", "AI-based system"], rows: [
          ["Programming", "Explicit rules (imperative code)", "Learns patterns from data"],
          ["Behavior", "Deterministic, predictable", "Probabilistic, not always reproducible"],
          ["Explainability", "Transparent, easy to follow", "Black-box (billions of parameters)"],
          ["Adaptation", "Manual updates", "Can self-learn from new data"],
          ["Best suited for", "Safety-critical tasks needing explainability", "Complex/ambiguous tasks in less regulated areas"],
        ]},
      ],
    },
    "1.1.2": {
      objective: "AI-1.1.2",
      body: [
        { type: "p", text: "Narrow AI (weak AI) performs specific tasks and describes every deployed AI system today. Narrow AI can be extremely good inside its limited domain — image recognition, speech processing, translation — but cannot generalize: a face-recognition system cannot translate language unless explicitly retrained." },
        { type: "p", text: "Frontier AI is a subset of narrow AI: the most advanced current systems, pushing the boundary with large GenAI models and highly autonomous decision-making. Despite the sophistication, frontier AI remains task-specific — it has not reached general AI's versatility." },
        { type: "p", text: "General AI (strong AI) would perform most intellectual tasks a human can — understanding, learning, and applying knowledge across domains without retraining for each new task. No system today possesses general intelligence." },
        { type: "p", text: "Super AI (artificial superintelligence) would continuously improve itself without human intervention or control and would surpass both human intelligence and general AI. Internet access is not strictly required for super AI, though it would greatly expand its capabilities. Many consider super AI an existential risk. The hypothetical transition point from general AI to super AI is called the technological singularity." },
        { type: "note", title: "Chain to remember", text: "All current AI = narrow. General AI = uncertain, doesn't exist yet. But once general AI exists, super AI is widely expected to follow — that causal chain is exam-relevant." },
      ],
    },
    "1.1.3": {
      objective: "AI-1.1.3",
      body: [
        { type: "p", text: "AI is an umbrella covering multiple technologies. The core branch is machine learning (ML): systems that learn models from data without explicit programming. Some ML systems keep adapting throughout their lives; others operate on what they initially learned and need explicit retraining to change." },
        { type: "list", intro: "The three ML approaches:", items: [
          "Supervised learning — learns from labeled data using algorithms like linear regression and decision trees, for prediction and classification tasks.",
          "Unsupervised learning — finds patterns in unlabeled data, e.g. clustering with clustering algorithms.",
          "Reinforcement learning — an intelligent agent learns optimal behavior through trial-and-error interaction with its environment (rewards and penalties, no dataset needed).",
        ]},
        { type: "p", text: "Key ML technologies include neural networks, Bayesian models, support vector machines (SVM), and random forests." },
        { type: "list", intro: "Deep learning (DL) is a subset of ML using deep neural networks:", items: [
          "CNN (convolutional neural networks) — image recognition and object detection.",
          "RNN (recurrent neural networks) — sequential data such as text or time series.",
          "Transformers — long-range dependencies in sequences; power NLP models (LLMs) and vision transformers.",
        ]},
        { type: "p", text: "GenAI builds on these to create new content. It is driven by LLMs, which combine deep neural networks (DNN) with natural language processing (NLP) to analyze and generate human-like language. Remember the equation: LLM = DNN + NLP." },
        { type: "list", intro: "Other specialized AI technologies:", items: [
          "NLP — language analysis: sentiment analysis, machine translation.",
          "Computer vision — visual data: facial recognition, robotics.",
          "Fuzzy logic — reasoning under uncertainty.",
          "Search algorithms — optimization problems: navigation, strategic decision-making.",
          "Rule-based reasoning (expert systems) — structured decision support.",
        ]},
        { type: "p", text: "Full integration of these technologies is still limited, but LLMs show the potential of combining them into unified systems. Agentic AI extends them with autonomous agents that plan, reason, and act independently toward goals in dynamic environments." },
      ],
    },
    "1.1.4": {
      objective: "AI-1.1.4",
      body: [
        { type: "p", text: "Generative AI (GenAI) systems specialize in creating new content — text, images, video, music, or complex data — while many also support classification and prediction. They learn from vast datasets to produce outputs resembling their training data." },
        { type: "list", intro: "Three main technologies power GenAI:", items: [
          "GANs (generative adversarial networks) — two neural networks in competition produce highly realistic synthetic data.",
          "Diffusion models — gradually add and then remove noise from data, yielding high-quality outputs (images, video).",
          "Transformers — underpin LLMs, using self-attention to generate coherent, contextually relevant text; increasingly adapted for multimodal tasks.",
        ]},
        { type: "list", intro: "Societal and ethical concerns you must be able to explain:", items: [
          "Misuse — deepfakes, misinformation, convincing fraudulent content undermine trust in digital media (though synthetic content also enables innovation in entertainment, marketing, education, research).",
          "Employment — GenAI automates white-collar tasks (writing, design, coding, legal/medical documentation), raising job displacement and reskilling debates.",
          "Sustainability — training and running large models consumes substantial energy with a significant carbon footprint, prompting calls for efficient designs and greener infrastructure.",
        ]},
        { type: "p", text: "Most practical GenAI tools are foundation models fine-tuned for specific applications, and the field is moving toward multimodal models that handle text, images, and audio together. Regulatory frameworks such as the EU AI Act are emerging to guide responsible development and use." },
      ],
    },
    "1.1.5": {
      objective: "AI-1.1.5",
      body: [
        { type: "p", text: "Different hardware can be used for training versus inference: a speech model may run on a low-end smartphone but need cloud compute for training." },
        { type: "list", intro: "ML benefits from hardware that supports:", items: [
          "Large data structures.",
          "Massively parallel (concurrent) processing — e.g. matrix multiplication.",
          "Low-precision arithmetic (quantization) — fewer bits per computation (e.g. 4 instead of 32) means faster processing, lower power, smaller cheaper chips, less bandwidth.",
        ]},
        { type: "table", headers: ["Hardware", "Characteristics", "Best for"], rows: [
          ["CPU", "Few cores, high precision, high clock speed", "General-purpose computing; less efficient for ML"],
          ["GPU", "Thousands of cores, massively parallel but simple operations", "Training and running ML models; best option for small-scale ML work"],
          ["ASIC / System-on-a-Chip", "Purpose-built for AI: multiple cores, specialized data management, in-memory processing", "Edge computing (inference); training still happens in the cloud"],
          ["Neuromorphic processors", "Brain-inspired, NOT von Neumann architecture", "Emerging AI-specific designs"],
        ]},
        { type: "note", title: "Common pattern", text: "Train in the cloud on GPUs/specialized hardware; deploy for inference on edge devices with ASICs. GPUs beat CPUs for ML even though CPUs run at higher clock speeds — parallelism wins, not clock speed." },
      ],
    },
    "1.1.6": {
      objective: "AI-1.1.6",
      body: [
        { type: "p", text: "AI-based systems can be bought from third-party vendors or developed privately. Third-party systems usually arrive as pretrained models or AI-as-a-Service (AIaaS) — faster deployment and quicker time-to-market. Private systems (on-premises or customized cloud) can be tailored to specific requirements but need specialized skills, in-house or outsourced." },
        { type: "list", intro: "Development options:", items: [
          "Local development — direct control and privacy. Small models (decision trees, compact neural networks) fit on PCs; mid-sized models need dedicated GPUs; large-scale models need on-premises server clusters with energy, cooling, and hardware costs.",
          "Public cloud — pre-configured environments, pay-as-you-go pricing, minimal initial hardware investment, easy scaling.",
          "Private cloud — enhanced security and privacy, but greater upfront infrastructure investment.",
          "Hybrid — prototype locally then scale to cloud; keep sensitive parts (e.g. private data preparation) on-premises while using cloud for compute-intensive tasks.",
        ]},
        { type: "list", intro: "Hosting options mirror the same breakdown:", items: [
          "Local hosting — smaller models on PCs/smartphones: privacy, no cloud licensing costs, limited hardware.",
          "Dedicated servers — significant upfront investment, enhanced control, suits larger models.",
          "Public cloud — scalable powerful infrastructure, no maintenance concerns, ideal for fluctuating workloads.",
          "Private cloud — similar benefits plus security/customization, managed in-house or by dedicated providers, higher cost.",
          "Hybrid — some operations local, cloud elasticity for intensive tasks.",
        ]},
        { type: "p", text: "Development and hosting decisions are typically made separately. Selection factors: model size and complexity, performance requirements, budget, security and data privacy, deployment needs, and regulatory requirements. Some organizations adopt multi-tiered strategies to balance efficiency and control." },
        { type: "note", title: "Hybrid means BOTH", text: "An approach is only 'hybrid' if it combines local AND cloud. Everything-on-public-cloud, everything-local, or private-cloud-only are not hybrid — a favorite exam discriminator." },
      ],
    },
    "1.1.7": {
      objective: "AI-1.1.7",
      body: [
        { type: "list", intro: "ML development frameworks are toolkits for building and training ML models. Five typical functions:", items: [
          "Data handling — load, preprocess, and manage training/test data: cleaning, formatting, transforming into a suitable format.",
          "Model building — libraries of ML algorithms and architecture tools: model type (neural network, decision tree), layers and connections, mathematical operations.",
          "Training and optimization — algorithms that iteratively adjust the model's internal parameters against training data; some support distributed training and fine-tuning pretrained models.",
          "Evaluation — measure performance on unseen data: accuracy, precision, recall for classification; error rates for ML regression.",
          "Deployment — convert/export the trained model for web apps, mobile, edge, or embedded systems.",
        ]},
        { type: "p", text: "Frameworks operate at different abstraction levels: lower-level APIs give more control but require more coding expertise; higher-level APIs simplify model creation with fewer customization options. Some frameworks are general-purpose; others specialize (image recognition, speech, translation)." },
        { type: "list", intro: "Framework selection factors:", items: [
          "Application area",
          "User-friendly interface for rapid prototyping vs. configurability for complex models",
          "Expertise of the users",
          "Deployment considerations (resource-constrained environments)",
          "Level of (community) support and ecosystem maturity",
        ]},
        { type: "note", text: "Frameworks ASSIST with preprocessing — they don't eliminate the need for it. Models built in one framework are generally not locked to it for deployment." },
      ],
    },
    "1.1.8": {
      objective: "AI-1.1.8",
      body: [
        { type: "p", text: "Regulations and standards exist to foster trust in AI: systems should be safe, fair, transparent, sustainable, accountable, ethical, and used responsibly. Three tiers of governance matter for the exam." },
        { type: "table", headers: ["Tier", "Examples", "Force"], rows: [
          ["Soft law", "OECD AI Principles, UN 'Governing AI for Humanity' report", "Non-binding compass for governments; human-centric AI, ethics, international cooperation"],
          ["Hard law", "EU AI Act", "Binding, risk-based; substantial financial penalties as a percentage of global turnover"],
          ["Technical standards", "ISO/IEC (e.g. TR 29119-11), IEEE", "Translate policy into practice; guidance, no penalties"],
        ]},
        { type: "list", intro: "EU AI Act risk-based classification (must know):", items: [
          "Unacceptable risk — prohibited outright (e.g. social scoring, real-time biometric surveillance).",
          "High risk — systems impacting fundamental rights or safety (healthcare, finance, automotive, education): rigorous testing, data governance, human oversight.",
          "Low/minimal risk — lighter-touch requirements.",
        ]},
        { type: "p", text: "Many nations outside the EU take a more permissive, innovation-friendly approach. Technical standards bridge policy and practice: ISO/IEC TR 29119-11 gives detailed guidance on testing AI-based systems (a key element in demonstrating compliance), and the ISO/IEC 42119 series is being developed to cover AI-based system testing. Sector-specific regulations are emerging in healthcare and finance." },
        { type: "p", text: "Because AI evolves rapidly, regulations and standards must be regularly reviewed and updated, with continuous dialogue among governments, industry, academia, and civil society." },
      ],
    },
  },
};
