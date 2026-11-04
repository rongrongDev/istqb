// CT-GenAI v1.1 — Chapter 4 learn content, authored from ISTQB CT-GenAI Syllabus v1.1.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Chatbots are only the start. This chapter looks under the hood of LLM-powered test tools: their front-end/back-end/LLM architecture, retrieval-augmented generation that grounds answers in your own documents, agents that act through tools and can be orchestrated together, fine-tuning models for your domain, and the LLMOps choices involved in running all of this in production.",
  keywords: [
    "test infrastructure",
    "fine-tuning", "LLM-powered agent", "Large Language Model Operations", "retrieval-augmented generation", "vector database",
  ],
  objectives: [
    { id: "GenAI-4.1.1", level: "K2", text: "Explain key architectural components and concepts of LLM-powered test infrastructure" },
    { id: "GenAI-4.1.2", level: "K2", text: "Summarize Retrieval-Augmented Generation" },
    { id: "GenAI-4.1.3", level: "K2", text: "Explain the role and application of LLM-powered agents in automating test processes" },
    { id: "GenAI-4.2.1", level: "K2", text: "Explain the fine-tuning of language models for specific test tasks" },
    { id: "GenAI-4.2.2", level: "K2", text: "Explain LLMOps and its role in deploying and managing LLMs for test tasks" },
  ],
  sections: {
    "4.1.1": {
      objective: "GenAI-4.1.1",
      body: [
        { type: "p", text: "An LLM-powered test infrastructure embeds an LLM in the test process to add automation, reasoning and decision support. Unlike a chatbot, which is about conversation, it is built to process test queries, analyze requirements, generate test cases and evaluate outputs." },
        { type: "table", headers: ["Component", "Responsibility"], rows: [
          ["Front-end", "User interface where testers enter queries or commands"],
          ["Back-end", "Processes input; handles authentication, data retrieval, prompt preparation and the conversation with the LLM; integrates data sources; post-processes the LLM's raw output"],
          ["LLM", "A third-party service called via API or an in-house model that answers structured prompts"],
          ["Data sources", "Relational databases for structured data (e.g. test cases) and vector databases for semantic retrieval via embeddings"],
        ]},
        { type: "list", intro: "What makes it more than a client-server system:", items: [
          "The LLM is an intelligent component that interprets and reasons about testware, not a passive server.",
          "Insights are generated dynamically from context — requirements, code, test results — rather than from scripted replies.",
          "The back-end merges several data sources into the prompt.",
          "The back-end checks and reshapes the answer so it fits the test conditions before the user sees it.",
        ]},
      ],
    },
    "4.1.2": {
      objective: "GenAI-4.1.2",
      body: [
        { type: "p", text: "Retrieval-augmented generation (RAG) grounds an LLM's answers in extra data sources, making them more relevant and accurate." },
        { type: "list", intro: "Preprocessing (done in advance):", items: [
          "Split large documents into chunks (for example 256–512 tokens) that fit the context window and allow focused retrieval.",
          "Clean and process each chunk.",
          "Encode each chunk as an embedding and store it in a vector database.",
        ]},
        { type: "list", intro: "Answering a user prompt — two steps:", items: [
          "Retrieval — encode the query and fetch the chunks whose embeddings are most semantically similar.",
          "Generation — pass those chunks to the LLM, which combines them with its own knowledge to produce a grounded answer.",
        ]},
        { type: "example", title: "RAG in testing", text: "A test tool connected to the company's specification repository retrieves the latest version of the payment spec when you ask for test cases for refunds — so the tests reflect current requirements, not whatever the model learned during training." },
        { type: "seealso", label: "CT-AI v2 Learn — Chapter 3", href: "/ctaiv2-learn", text: "pretrained models, fine-tuning and RAG from the ML side (3.1.4)" },
      ],
    },
    "4.1.3": {
      objective: "GenAI-4.1.3",
      body: [
        { type: "p", text: "LLM-powered agents are GenAI applications that carry out defined tasks semi-autonomously or autonomously. Beyond understanding and generating language, they act: they call a predefined set of functions — “tools” — to interact with and change external systems." },
        { type: "table", headers: ["Agent type", "Human involvement"], rows: [
          ["Autonomous", "Works independently with minimal intervention, using predefined rules, reinforcement learning and adaptive feedback loops"],
          ["Semi-autonomous", "Periodic human oversight checks that output meets the user's goals"],
        ]},
        { type: "p", text: "In multi-agent architectures several specialized agents communicate and coordinate — orchestration — to solve complex problems more efficiently than one agent could." },
        { type: "p", text: "Test tools increasingly expose agents as AI assistants that turn user stories into test artifacts across analysis, design, implementation, execution and reporting. This moves automation from script-based execution to goal-driven, agent-based automation with shorter feedback cycles." },
        { type: "note", title: "Same risks as any LLM", text: "Agents can hallucinate, reason wrongly and be biased. Mitigate with automated verification of their results and by keeping critical tasks semi-autonomous." },
      ],
    },
    "4.2.1": {
      objective: "GenAI-4.2.1",
      body: [
        { type: "p", text: "Fine-tuning continues training a pre-trained language model — an LLM or a small language model — on a targeted dataset so it absorbs domain knowledge, vocabulary and specialized reasoning. It adapts the model; it does not erase its general knowledge." },
        { type: "p", text: "Fine-tuning an SLM can deliver strong performance on a narrow task without the computational overhead of an LLM." },
        { type: "example", title: "Organization-specific test cases", text: "Train a model on your own user stories and the test cases written for them, so it produces new test cases in your house format and terminology." },
        { type: "list", intro: "Challenges:", items: [
          "Training data quality — biased or inaccurate data produces biased or inaccurate models.",
          "Overfitting — the model becomes so specialized to its training data that it performs poorly on new, unseen data.",
          "Opacity — it is hard to see how the model reaches its output, complicating debugging and validation.",
          "Compute — fine-tuning LLMs needs significant computational resources.",
        ]},
        { type: "seealso", label: "CT-AI v2 Learn — Chapter 3", href: "/ctaiv2-learn", text: "pretrained models, fine-tuning and RAG (3.1.4); overfitting is tested in 6.1.8" },
      ],
    },
    "4.2.2": {
      objective: "GenAI-4.2.2",
      body: [
        { type: "p", text: "LLMOps (Large Language Model Operations) covers the practices, tools and processes that streamline developing, deploying and maintaining LLMs in production. The right decisions depend on how GenAI is used:" },
        { type: "table", headers: ["Approach", "Main considerations"], rows: [
          ["AI chatbot", "Data privacy, security and cost; LLM-as-a-Service if the vendor gives enough assurances, or in-house hosting of open-source LLMs for more control"],
          ["Test tool with GenAI capabilities", "As above, plus the tool vendor's data security and performance assurances; cost-benefit analysis and risk assessment"],
          ["In-house GenAI test tool", "Full control of privacy and security; planning compute, storage and staff training; processes to validate and maintain GenAI components; needs specialist expertise"],
        ]},
        { type: "p", text: "These approaches can coexist — a chatbot for some tasks, a custom tool for others — and can be enhanced with RAG and fine-tuning." },
      ],
    },
  },
};
