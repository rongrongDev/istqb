// CT-GenAI v1.1 — Chapter 4: LLM-Powered Test Infrastructure for Software Testing
// summary/deepPoints from syllabus v1.1; examInsights derived from ISTQB Sample Exam A v1.1 and the ASTQB v1.1 sample exam
export default {
  id: 4,
  title: 'LLM-Powered Test Infrastructure for Software Testing',
  time: '110 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "5 questions per sample exam. Know the architecture (front-end / back-end / LLM, with the BACK-END doing authentication, retrieval, prompt preparation, multi-source integration and post-processing), RAG's preprocessing and its two runtime steps (retrieval → generation), autonomous vs semi-autonomous agents and orchestration, fine-tuning and its four challenges (data quality, overfitting, opacity, compute), and the three LLMOps deployment approaches.",
  sections: [
    {
      id: '4.1.1',
      title: 'Architecture of LLM-Powered Test Infrastructure',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "An LLM-powered test infrastructure integrates an LLM into the test process for automation, reasoning and decision-making — unlike a conversational chatbot it processes test queries, analyzes requirements, generates and evaluates test cases.",
        "FRONT-END = user interface for queries/commands. BACK-END = processes input; authentication, data retrieval, PROMPT PREPARATION, LLM interaction. LLM = third-party service via API or in-house model, answering structured prompts.",
        "Beyond client-server: the LLM is a smart component that interprets and reasons on testware; insights are generated dynamically (not scripted); the back-end integrates multiple sources — RELATIONAL databases (structured data like test cases) and VECTOR databases (semantic retrieval via embeddings); the back-end POST-PROCESSES raw LLM output to align with test conditions."
      ],
      examInsights: [
        "A-Q29 KEY — The component that combines user input with structured and semantically similar data to prepare the prompt = BACK-END.",
        "ASTQB-Q29 — Integrating multiple data sources = the back-end."
      ]
    },
    {
      id: '4.1.2',
      title: 'Retrieval-Augmented Generation (RAG)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "RAG adds external data sources to generation → more relevant, accurate, grounded answers.",
        "Preprocessing: break documents into chunks (e.g. 256–512 tokens) → clean/process → encode each chunk as an embedding → store in a VECTOR DATABASE.",
        "Runtime, two steps: (1) RETRIEVAL — encode the query, fetch chunks by semantic similarity; (2) GENERATION — the LLM combines its knowledge with the retrieved chunks.",
        "In testing: real-time access to enterprise databases, documentation and repositories so test analysis and design align with the LATEST specifications, requirements and test data."
      ],
      examInsights: [
        "A-Q30 KEY — Best RAG use: submit a query about one function; RAG retrieves the relevant up-to-date specifications so the LLM generates aligned tests.",
        "ASTQB-Q30 — The two steps of RAG processing: Retrieval, then Generation.",
        "Appendix A1 (drag-and-drop, not in the quiz) orders the RAG pipeline: chunk → clean → embed & store → retrieve → generate."
      ]
    },
    {
      id: '4.1.3',
      title: 'LLM-Powered Agents in Automating Test Processes',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "LLM-powered agents process defined tasks semi-autonomously or autonomously; unlike chatbots they ACT by invoking predefined functions ('tools') that manipulate external systems.",
        "AUTONOMOUS agents: minimal human intervention (rules, reinforcement learning, adaptive feedback loops). SEMI-AUTONOMOUS agents: periodic human oversight.",
        "MULTI-AGENT architectures: specialized agents coordinate — ORCHESTRATION — emulating human reasoning and decision-making.",
        "Exposed as AI assistants covering analysis → design → implementation → execution → reporting; shift from script-based to GOAL-DRIVEN, agent-based test automation.",
        "Same risks as LLMs (hallucinations, reasoning errors, biases) → automated verification of agent results, semi-autonomous agents for critical tasks."
      ],
      examInsights: [
        "A-Q31 KEY — Agents enhance both efficiency AND quality by operating (semi-)autonomously on test tasks.",
        "ASTQB-Q31 — Orchestration = several agents working together in a coordinated way to solve complex problems."
      ]
    },
    {
      id: '4.2.1',
      title: 'Fine-Tuning LLMs for Test Tasks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Fine-tuning = further training a pre-trained LM (LLM or SLM) on a targeted dataset to learn domain knowledge, vocabulary and specialized reasoning — it ADAPTS, it does not replace general knowledge.",
        "Fine-tuned SLMs can reach high task performance without LLM compute overhead.",
        "Example: train on the organization's user stories + test cases so generated tests follow its format and terminology.",
        "Challenges: high-quality task-specific training data (avoid bias/inaccuracy); OVERFITTING (too specialized → poor on new data); OPACITY (hard to see how it decides → debugging/validation); significant compute (for LLMs)."
      ],
      examInsights: [
        "A-Q32 KEY (asks for the INCORRECT statement) — Fine-tuning does NOT 'replace general knowledge with task-specific knowledge'.",
        "ASTQB-Q32 — Overfitting makes the model inaccurate on data that is new to it."
      ]
    },
    {
      id: '4.2.2',
      title: 'LLMOps for Deploying and Managing LLMs',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "LLMOps = practices, tools and processes to streamline development, deployment and maintenance of LLMs in production.",
        "Three approaches: (1) AI CHATBOT — manage privacy/security while optimizing cost; LLM-as-a-Service with assurances, or in-house with open-source LLMs; (2) TEST TOOL WITH GENAI CAPABILITIES — same concerns plus evaluating the vendor's security and performance assurances; cost-benefit and risk assessment; (3) IN-HOUSE DEVELOPMENT — full control of privacy/security, planning compute, storage, staff training, validation and maintenance processes; needs expertise.",
        "Not mutually exclusive; can add RAG and fine-tuning."
      ],
      examInsights: [
        "A-Q33 KEY — LLMOps' primary focus: managing LLMs across their lifecycle, including privacy, security and cost.",
        "ASTQB-Q33 — Which deployment type worries most about data privacy? ALL of them."
      ]
    }
  ]
};
