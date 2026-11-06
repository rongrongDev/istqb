// CT-GenAI v1.1 — Chapter 5 learn content, authored from ISTQB CT-GenAI Syllabus v1.1.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Adopting GenAI is an organizational change, not just a tool install. This chapter covers the risk of unmanaged 'shadow AI', what a GenAI test strategy must address, how to choose LLMs or SLMs, the three phases of adoption, and how skills, training and roles change for testers and test managers.",
  keywords: ["shadow AI"],
  objectives: [
    { id: "GenAI-5.1.1", level: "K1", text: "Recall the risks of shadow AI" },
    { id: "GenAI-5.1.2", level: "K2", text: "Explain the key aspects to consider when defining a Generative AI strategy for software testing" },
    { id: "GenAI-5.1.3", level: "K2", text: "Summarize key criteria for selecting LLMs/SLMs for software test tasks in a given context" },
    { id: "GenAI-5.1.4", level: "K1", text: "Recall key phases in the adoption of Generative AI in a test organization" },
    { id: "GenAI-5.2.1", level: "K2", text: "Explain the essential skills and knowledge areas required for testers to work effectively with generative AI in test processes" },
    { id: "GenAI-5.2.2", level: "K1", text: "Recall strategies for cultivating AI skills within test teams to support the adoption of Generative AI in test activities" },
    { id: "GenAI-5.2.3", level: "K1", text: "Recognize how test processes and responsibilities shift within a test organization when adopting Generative AI" },
  ],
  sections: {
    "5.1.1": {
      objective: "GenAI-5.1.1",
      body: [
        { type: "p", text: "Shadow AI is the use of AI tools that the organization has not approved — typically personal accounts on public services. Three risks:" },
        { type: "list", items: [
          "Information security and data privacy weaknesses — personal tools may lack robust security, leading to breaches and unauthorized access to sensitive data.",
          "Compliance and regulatory issues — unapproved tools can breach standards and regulations, with legal consequences.",
          "Vague intellectual property — unclear licensing can lead to IP disputes, especially when copyrighted data is processed without authorization.",
        ]},
        { type: "p", text: "A clear strategy and a managed rollout of approved GenAI tools is the remedy." },
      ],
    },
    "5.1.2": {
      objective: "GenAI-5.1.2",
      body: [
        { type: "list", intro: "A GenAI strategy for testing should cover:", items: [
          "Measurable test objectives — e.g. higher productivity, shorter test cycles, better quality.",
          "LLM selection aligned with those objectives, compatible with the existing test infrastructure and tools, and scalable.",
          "Data quality — accurate, relevant, securely protected input data, because output can only be trusted if input is good.",
          "Training programs for technical and ethical skills, and metrics to measure GenAI effectiveness (see 2.3.1).",
          "Process guidelines — rules for sensitive data, transparency about what was AI-generated, and quality gates that review generated testware.",
        ]},
      ],
    },
    "5.1.3": {
      objective: "GenAI-5.1.3",
      body: [
        { type: "p", text: "Models differ in capabilities (multimodal input, reasoning), technical features (context window size) and licensing (commercial or open source). General benchmarks exist, but few target testing, so organizations need their own criteria:" },
        { type: "table", headers: ["Criterion", "Question to ask"], rows: [
          ["Model performance", "How well does it do our test tasks against our own benchmarks and metrics?"],
          ["Fine-tuning potential", "Can we usefully fine-tune it with our domain data?"],
          ["Recurring cost", "What will licensing and operation cost — tokens in and out × how often we run the task?"],
          ["Community and support", "Is there active community support and good documentation?"],
        ]},
        { type: "p", text: "Organizations may select several models for different tasks." },
      ],
    },
    "5.1.4": {
      objective: "GenAI-5.1.4",
      body: [
        { type: "list", intro: "Three adoption phases:", items: [
          "Discovery — build awareness and capability: train teams, give access to LLMs/SLMs, experiment with first use cases.",
          "Initiation and usage definition — identify and prioritize practical use cases, evaluate LLM-powered test infrastructure, build expertise, align with organizational needs.",
          "Utilization and iteration — fully integrate GenAI into test processes, with continuous monitoring and measurement of the transformation for lasting, scalable benefits.",
        ]},
        { type: "p", text: "Different use cases can be in different phases at once — test report analysis may be in utilization while test automation is still in discovery. Address concerns such as fear of job loss early; they affect adoption and morale." },
      ],
    },
    "5.2.1": {
      objective: "GenAI-5.2.1",
      body: [
        { type: "list", intro: "What testers need:", items: [
          "Prompt engineering and understanding of context windows; methods to review AI output.",
          "Domain and test expertise combined with AI skills to judge LLM-generated test cases, defect analyses and test data.",
          "Competencies: assessing LLM capabilities, refining prompts, evaluating AI-generated testware.",
          "Knowledge of GenAI risks and mitigations, the security implications of sharing testware, data sanitization (removing or masking sensitive data) and privacy-preserving prompting.",
          "Environmental awareness: right-sized models, efficient usage, balancing automation gains against cost and energy.",
        ]},
      ],
    },
    "5.2.2": {
      objective: "GenAI-5.2.2",
      body: [
        { type: "p", text: "Training must be hands-on and gradual: practice with several LLMs/SLMs, follow structured learning paths, use guided exercises and peer learning, and bring AI into daily tasks step by step rather than all at once." },
        { type: "p", text: "Testers progress from basic prompts to test-specific prompts and prompt patterns — reusable templates that yield consistent output. Internal communities of practice meet regularly to show successful uses, discuss challenges and how they were solved, refine best practices, and share prompt pattern libraries and lessons learned." },
      ],
    },
    "5.2.3": {
      objective: "GenAI-5.2.3",
      body: [
        { type: "table", headers: ["Role", "How it changes"], rows: [
          ["Tester", "From test design and execution specialist to AI-assisted test specialist: guides and verifies AI-generated testware, reviews AI output, refines prompts and maintains test-specific prompt libraries"],
          ["Test manager", "Adds an AI-based test strategy, AI-based risk management, and monitoring and control of AI-based test processes; balances human and AI capabilities; sets up AI governance; keeps both traditional competencies and AI literacy in the team; leads hybrid teams of people and GenAI agents"],
        ]},
      ],
    },
  },
};
