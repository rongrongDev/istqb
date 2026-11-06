// CT-GenAI v1.1 — Chapter 1: Introduction to Generative AI for Software Testing
// summary/deepPoints from syllabus v1.1; examInsights derived from ISTQB Sample Exam A v1.1 and the ASTQB v1.1 sample exam
export default {
  id: 1,
  title: 'Introduction to Generative AI for Software Testing',
  time: '100 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "The vocabulary chapter: 7 questions in each sample exam. Know the four types of AI apart (symbolic, classical ML, deep learning, GenAI), what tokenization, embeddings and the context window do, the foundation vs instruction-tuned vs reasoning split, the fact that vision-language models are a SUBSET of multimodal LLMs, the seven key LLM capabilities for testing, and when to use a chatbot vs an LLM-powered application.",
  sections: [
    {
      id: '1.1.1',
      title: 'AI Spectrum: Symbolic AI, Classical ML, Deep Learning, GenAI',
      level: 'K1',
      type: 'skim',
      summary: "Symbolic AI = rule-based, knowledge as symbols + logical rules, mimics human decision-making. Classical ML = data-driven, needs data preparation, FEATURE SELECTION and model training (e.g. defect categorization, predicting problems). Deep learning = neural networks learn features AUTOMATICALLY from large complex data (images, audio, text) — humans may still annotate, tune, validate. Generative AI = uses deep learning to CREATE new content (text, images, code) by mimicking patterns in training data. Key GenAI advantage for testing: pre-trained models apply directly to test tasks with no extra training phase (but with risks, see 3.1).",
      examInsights: [
        "A-Q1 KEY — Matching question: symbolic = rule-based (1B), classical ML = needs feature selection (2D), deep learning = neural networks learn features (3A), GenAI = deep learning that creates new data (4C).",
        "ASTQB-Q1 — 'Uses deep learning techniques to create new content' = Generative AI (not deep learning itself)."
      ]
    },
    {
      id: '1.1.2',
      title: 'Basics of Generative AI and LLMs',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "LLMs are based on the generative pre-trained transformer (GPT) model and trained on huge datasets (books, articles, websites). Small language models (SLMs) have fewer parameters — lightweight, focused solutions.",
        "TOKENIZATION breaks text into tokens (a character, sub-word or word) — the building blocks the model understands and generates. EMBEDDINGS turn each token into a high-dimensional vector capturing semantic, syntactic and contextual relationships; similar meanings sit close together.",
        "The transformer predicts the NEXT TOKEN during inference — output is statistically plausible, and plausible is not necessarily correct.",
        "NON-DETERMINISM comes from probabilistic inference and hyperparameter settings: the same prompt can give different outputs.",
        "CONTEXT WINDOW = how much preceding text (in tokens) the model can consider. Bigger windows keep coherence over long inputs (e.g. large test logs) but cost more computation and time; text beyond the window is effectively forgotten."
      ],
      examInsights: [
        "A-Q2 KEY — Context window limits matter because the LLM must discard earlier information that may be needed for later content. Distractors talk about 'temporal sequencing', 'cross-document referencing' or 'parsing granularity'.",
        "A-Q3 KEY — Tokenization 'creates the building blocks used to understand and generate text'. TRAP: 'converts tokens into vectors' is EMBEDDINGS; 'predicts the next token' is generation.",
        "ASTQB-Q2/Q3 — Same prompt, different answers = non-deterministic behavior. Tokens = characters/sub-words/words; embeddings capture their relationships."
      ]
    },
    {
      id: '1.1.3',
      title: 'Foundation, Instruction-Tuned and Reasoning LLMs',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Foundation LLMs: general purpose, trained on vast diverse data (text, code, images…); flexible but usually need adaptation for specific tasks.",
        "Instruction-tuned LLMs: foundation models fine-tuned on prompt/response pairs → better at FOLLOWING INSTRUCTIONS, task adherence and coherent responses (e.g. generating test cases in strict Gherkin syntax or following a template).",
        "Reasoning LLMs: extend instruction-tuned models with logical inference, multi-step problem solving and chain-of-thought → suited to high-cognitive-load tasks (e.g. synthesizing defect report data to detect trends and prioritize).",
        "Testing uses both instruction-tuned ('non-reasoning') and reasoning LLMs; choose by the complexity and reasoning demands of the task."
      ],
      examInsights: [
        "A-Q4 KEY — Correct statements: reasoning LLMs excel at synthesizing defect data to detect trends and prioritize (iv); instruction-tuned LLMs excel at Gherkin-compliant test cases (v). TRAP: template adherence is instruction-tuned, not reasoning; autonomous prioritization is not instruction-tuned.",
        "ASTQB-Q4 — Decision-making similar to human logic → reasoning LLM."
      ]
    },
    {
      id: '1.1.4',
      title: 'Multimodal LLMs and Vision-Language Models',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Multimodal LLMs extend the transformer to several modalities (text, images, sound, video); tokenization is adapted per data type — images become embeddings via vision-language models.",
        "Vision-language models are a SUBSET of multimodal LLMs that integrate visual and textual information (image captioning, visual Q&A, checking text/visual consistency).",
        "In testing: analyze screenshots and GUI wireframes alongside defect reports or user stories, spot differences between expected results and what's on screen, and generate test cases mixing textual data with visual cues → higher coverage."
      ],
      examInsights: [
        "A-Q5 KEY — Vision-language models are a subset of multimodal LLMs focusing on visual + textual data. Not the reverse, not unrelated, not interchangeable.",
        "ASTQB-Q5 — Advantage for test design: test cases that include both text and visual cues."
      ]
    },
    {
      id: '1.2.1',
      title: 'Key LLM Capabilities for Test Tasks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Seven capabilities across the whole test process: (1) requirements analysis and improvement — find ambiguities, inconsistencies, missing info, generate clarifying questions; (2) test case creation support; (3) test oracle generation (expected results); (4) test data generation — datasets, boundary values, combinations; (5) test automation support — scripts from test case descriptions, improving scripts; (6) test result analysis — summaries, classifying anomalies by severity/priority; (7) testware creation — test plans, test reports, defect reports kept up to date."
      ],
      examInsights: [
        "A-Q6 KEY (select TWO) — Identifying ambiguities/inconsistencies in requirements, and creating diverse test data with combinations and boundary values. TRAPS: 'complete application code for deployment', 'executing ALL test scripts without human intervention', 'performing exploratory testing' are not listed capabilities.",
        "ASTQB-Q6 — Too much test data to use → the LLM can break existing data into smaller sets that keep the interesting variances."
      ]
    },
    {
      id: '1.2.2',
      title: 'AI Chatbots vs LLM-Powered Testing Applications',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "AI chatbots: conversational, natural-language interface; immediate context-aware answers; iterate via prompt chaining. Good for routine tasks, exploratory testing, onboarding, fast feedback, clarifying concepts; accessible to non-technical stakeholders.",
        "LLM-powered testing applications: LLM capabilities integrated via APIs into test tools/frameworks for well-defined, often automated tasks (test case generation, defect analysis, test data synthesis); more customization and scalability; can grow into AI agents (Chapter 4).",
        "Either way, success depends on strong prompt engineering (Chapter 2)."
      ],
      examInsights: [
        "A-Q7 KEY — Chatbots = conversational interface for ad hoc tasks; LLM-powered applications = API integration for automated, scalable workflows.",
        "ASTQB-Q7 — Recurring automated generation from requirements, knowledge and past issues → use the LLM's APIs so data flows in and out of the test tooling."
      ]
    }
  ]
};
