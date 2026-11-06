// CT-GenAI v1.1 — Chapter 1 learn content, authored from ISTQB CT-GenAI Syllabus v1.1.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Before you can prompt an LLM well, you need a working mental model of what it is. This chapter places generative AI on the wider AI spectrum, explains how large language models turn text into tokens and vectors and predict the next token, distinguishes the three families of LLMs and multimodal models, and surveys what LLMs can do across the test process — via chatbots or LLM-powered applications.",
  keywords: [
    "AI chatbot", "context window", "deep learning", "embedding", "feature", "foundation LLM", "generative AI",
    "generative pre-trained transformer", "instruction-tuned LLM", "large language model", "machine learning",
    "multimodal model", "reasoning LLM", "symbolic AI", "tokenization", "transformer",
  ],
  objectives: [
    { id: "GenAI-1.1.1", level: "K1", text: "Recall different types of AI: symbolic AI, classical machine learning, deep learning, and generative AI" },
    { id: "GenAI-1.1.2", level: "K2", text: "Explain the basics of generative AI and large language models" },
    { id: "GenAI-1.1.3", level: "K2", text: "Distinguish between foundation, instruction-tuned and reasoning LLMs" },
    { id: "GenAI-1.1.4", level: "K2", text: "Write and execute a given prompt addressing a test task using a multimodal LLM model" },
    { id: "GenAI-1.2.1", level: "K2", text: "Give examples of key LLM capabilities for test tasks" },
    { id: "GenAI-1.2.2", level: "K2", text: "Compare interaction models when using GenAI for software testing" },
  ],
  sections: {
    "1.1.1": {
      objective: "GenAI-1.1.1",
      body: [
        { type: "p", text: "Generative AI is one branch of a much wider field. The syllabus asks you to tell four kinds of AI apart by how they solve problems:" },
        { type: "table", headers: ["Type", "How it works", "Typical use in testing"], rows: [
          ["Symbolic AI", "Rule-based: knowledge is encoded as symbols and logical rules that imitate human decisions", "Expert systems, rule engines"],
          ["Classical machine learning", "Data-driven: needs data preparation, feature selection by people, then model training", "Categorizing defects, predicting problem areas"],
          ["Deep learning", "Neural networks learn the features themselves from large, complex data (images, audio, text)", "Image recognition; still needs humans to annotate, tune and validate"],
          ["Generative AI", "Uses deep learning to create new content — text, images, code — by mimicking patterns in its training data", "LLMs writing test cases, scripts, reports"],
        ]},
        { type: "note", title: "Why GenAI matters for testers", text: "Its models are pre-trained, so you can apply them to a test task immediately without training a model first. That convenience comes with risks — hallucinations, bias, privacy — covered in Chapter 3." },
        { type: "seealso", label: "CT-AI v2 Learn — Chapter 1", href: "/ctaiv2-learn", text: "types of AI technologies and generative AI from the AI-testing perspective (1.1.3–1.1.4)" },
      ],
    },
    "1.1.2": {
      objective: "GenAI-1.1.2",
      body: [
        { type: "p", text: "Large language models are built on the generative pre-trained transformer (GPT) architecture and trained on enormous text collections such as books, articles and websites. Small language models (SLMs) follow the same idea with far fewer parameters, giving lighter, more focused solutions." },
        { type: "list", intro: "Two mechanisms turn language into something a model can compute with:", items: [
          "Tokenization splits text into tokens — a single character, part of a word, or a whole word. Every input is tokenized first; tokens are the building blocks for understanding and generating text.",
          "Embeddings convert each token into a vector in a high-dimensional space that captures its meaning, grammar role and context. Tokens with similar meanings end up close together, which lets the model relate words and stay coherent.",
        ]},
        { type: "p", text: "The transformer learns how tokens relate across long sequences. When answering, the model repeatedly predicts the most likely next token. The result is statistically plausible text — and plausible does not mean correct." },
        { type: "p", text: "Two practical consequences follow. LLMs are non-deterministic: because inference is probabilistic and depends on hyperparameter settings, the same prompt can produce different outputs. And they have a context window — a maximum number of tokens they can consider at once. A larger window helps with long inputs such as big test logs, but raises computation and response time; anything beyond the window is effectively forgotten." },
        { type: "example", title: "Token counting", text: "Pasting a 200-page test log into a chatbot may silently exceed the context window: the model then 'forgets' the start of the log and can miss the first failure. Measuring token counts before prompting avoids this." },
      ],
    },
    "1.1.3": {
      objective: "GenAI-1.1.3",
      body: [
        { type: "p", text: "LLMs are produced through progressively more specialized training, giving three families:" },
        { type: "table", headers: ["Family", "How it is built", "Strength in testing"], rows: [
          ["Foundation LLM", "General-purpose pretraining on vast, diverse data (text, code, images…)", "Flexible starting point; usually needs adaptation for a specific task"],
          ["Instruction-tuned LLM", "Foundation model fine-tuned on prompt → expected-response pairs", "Follows instructions and formats precisely — e.g. test cases in strict Gherkin syntax or a fixed template"],
          ["Reasoning LLM", "Instruction-tuned model further trained on tasks needing logical inference and multi-step, chain-of-thought reasoning", "High-cognitive-load tasks — e.g. synthesizing defect reports to find trends and prioritize testing"],
        ]},
        { type: "note", title: "Exam favorite", text: "Testing uses both instruction-tuned (non-reasoning) and reasoning LLMs. Match the model to the task: format-following → instruction-tuned; inference and synthesis → reasoning." },
      ],
    },
    "1.1.4": {
      objective: "GenAI-1.1.4",
      body: [
        { type: "p", text: "Multimodal LLMs extend the transformer to several kinds of data — text, images, sound and video — learning the relationships between them. Tokenization is adapted per modality; for example images are turned into embeddings by a vision-language model before entering the transformer." },
        { type: "p", text: "Vision-language models are a subset of multimodal LLMs, specialized in combining visual and textual information: captioning images, answering questions about an image, or checking whether a picture and a description agree." },
        { type: "list", intro: "Why testers care:", items: [
          "Analyze screenshots and GUI wireframes together with user stories or defect reports.",
          "Spot discrepancies between the expected result and what is actually shown on screen.",
          "Generate richer test cases that combine textual data with visual cues, increasing coverage.",
        ]},
        { type: "example", title: "Hands-on idea", text: "Give a multimodal LLM a login-page screenshot plus the user story, and ask it to list every acceptance criterion the screen does not visibly support. Then verify its answer yourself." },
      ],
    },
    "1.2.1": {
      objective: "GenAI-1.2.1",
      body: [
        { type: "p", text: "LLMs are strong at processing and producing natural language and code, answering questions, summarizing, translating and — when multimodal — analyzing images. Applied to testing, they can read requirements, specifications, screenshots, code, test cases and defect reports. The syllabus lists seven key capabilities:" },
        { type: "list", items: [
          "Requirements analysis and improvement — flag ambiguities, inconsistencies and missing information; draft clarifying questions for stakeholders.",
          "Test case creation support — propose test cases and test objectives from requirements, user stories or other test basis.",
          "Test oracle generation — propose expected results.",
          "Test data generation — build datasets, boundary values and combinations.",
          "Test automation support — generate scripts from test case descriptions, improve existing scripts, suggest suitable test techniques.",
          "Test result analysis — summarize results and classify anomalies by severity and priority.",
          "Testware creation — draft and maintain test plans, test reports and defect reports.",
        ]},
        { type: "note", title: "Watch the overclaims", text: "LLMs support testing; they do not autonomously run every test, ship production code, or replace exploratory testers. Exam distractors often overstate what an LLM does." },
      ],
    },
    "1.2.2": {
      objective: "GenAI-1.2.2",
      body: [
        { type: "p", text: "Testers interact with LLMs in two complementary ways:" },
        { type: "table", headers: ["", "AI chatbot", "LLM-powered testing application"], rows: [
          ["Interface", "Conversational, natural language", "LLM called through APIs inside a test tool or framework"],
          ["Best for", "Ad hoc and routine tasks, exploratory testing, quick clarification, onboarding new testers", "Well-defined, repeatable, often automated tasks — test case generation, defect analysis, test data synthesis"],
          ["Strengths", "Fast feedback, iterative refinement via prompt chaining, usable by non-technical stakeholders", "Customization, scalability, embedding into existing pipelines; can evolve into AI agents (Chapter 4)"],
        ]},
        { type: "p", text: "Whichever route you take, results depend on prompt engineering: clear, specific prompts make accurate, relevant output much more likely. That is the subject of Chapter 2." },
      ],
    },
  },
};
