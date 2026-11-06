// CT-GenAI v1.1 — Chapter 2 learn content, authored from ISTQB CT-GenAI Syllabus v1.1.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Prompt engineering is the core skill this certification tests. You learn the six-part structure of a good prompt, three core prompting techniques and the difference between system and user prompts; then apply them to test analysis, test design and implementation, regression automation, and test monitoring and control; and finally measure the quality of GenAI output and refine prompts systematically.",
  keywords: [
    "acceptance criteria", "test script", "test case", "test condition", "test data", "test design", "test report",
    "few-shot prompting", "meta prompting", "natural language processing", "one-shot prompting", "prompt",
    "prompt chaining", "prompt engineering", "system prompt", "user prompt", "zero-shot prompting",
  ],
  objectives: [
    { id: "GenAI-2.1.1", level: "K2", text: "Give examples of the structure of prompts used in generative AI for software testing" },
    { id: "GenAI-2.1.2", level: "K2", text: "Differentiate core prompting techniques for software testing" },
    { id: "GenAI-2.1.3", level: "K2", text: "Distinguish between system prompts and user prompts" },
    { id: "GenAI-2.2.1", level: "K3", text: "Apply generative AI to test analysis tasks" },
    { id: "GenAI-2.2.2", level: "K3", text: "Apply generative AI to test design and test implementation tasks" },
    { id: "GenAI-2.2.3", level: "K3", text: "Apply generative AI to automated regression testing" },
    { id: "GenAI-2.2.4", level: "K3", text: "Apply generative AI to test monitoring and control task" },
    { id: "GenAI-2.2.5", level: "K3", text: "Select and apply appropriate prompting techniques for a given context and test task" },
    { id: "GenAI-2.3.1", level: "K2", text: "Understand the metrics for evaluating the results of generative AI on test tasks" },
    { id: "GenAI-2.3.2", level: "K2", text: "Give examples of techniques for evaluating and iteratively refining prompts" },
  ],
  sections: {
    "2.1.1": {
      objective: "GenAI-2.1.1",
      body: [
        { type: "p", text: "A well-structured prompt raises the chance that the LLM does the test task accurately. The syllabus defines six components:" },
        { type: "table", headers: ["Component", "What it does", "Testing example"], rows: [
          ["Role", "Sets the persona and perspective the model adopts", "“Act as a senior test analyst for banking apps.”"],
          ["Context", "Background the model needs: test object, functionality, situation", "“We are testing the password-reset feature of a web shop.”"],
          ["Instruction", "Clear, imperative, concise description of the task", "“Generate boundary-value test cases for the amount field.”"],
          ["Input data", "Material to work on: user stories, acceptance criteria, screenshots, code, existing tests, examples, benchmarks", "The user story and its acceptance criteria"],
          ["Constraints", "Restrictions on how to apply the instruction to the input", "“Only use the 2-value BVA approach; no more than 10 cases.”"],
          ["Output format", "Expected structure of the answer", "“A table with columns ID, input, expected result, requirement ref.”"],
        ]},
        { type: "note", title: "Exam favorite", text: "Questions quote one line from a prompt and ask which component it belongs to. Reference material and benchmarks → input data; columns or fields to return → output format; 'you are a…' → role." },
      ],
    },
    "2.1.2": {
      objective: "GenAI-2.1.2",
      body: [
        { type: "p", text: "Among the many prompting techniques published, three are core for testing and are combined with the six-part structure:" },
        { type: "list", items: [
          "Prompt chaining — split a task into a sequence of prompts. Check and, if needed, correct each intermediate result before feeding it to the next step. Best when the task is complicated and intermediate outputs must be verified.",
          "Few-shot prompting — include several worked examples in the prompt so the model copies the pattern. Zero-shot gives no example and relies on the model's knowledge; one-shot gives exactly one.",
          "Meta prompting — let the LLM write or improve the prompt itself, with the tester evaluating and refining in cycles. Useful when you don't know how to phrase a good prompt: you pair with the AI to co-create it.",
        ]},
        { type: "example", title: "Pairing", text: "“I need a prompt that makes you produce API negative tests from an OpenAPI spec. Ask me questions until you can write that prompt.” — that is meta prompting." },
      ],
    },
    "2.1.3": {
      objective: "GenAI-2.1.3",
      body: [
        { type: "table", headers: ["", "System prompt", "User prompt"], rows: [
          ["Written by", "Developer or tester configuring the assistant", "The person chatting"],
          ["Visibility", "Usually hidden and not editable by the user", "Visible"],
          ["Lifetime", "Constant for the whole session", "Changes with every interaction"],
          ["Purpose", "Behavior, personality, operational parameters (tone, conciseness, domain rules, behaviors to avoid); may hold role, context, constraints", "The specific question or task, with explicit instructions, extra context and output format"],
        ]},
        { type: "p", text: "The model answers by combining the fixed system prompt with the current user prompt. Typical use: set the system prompt once (e.g. “You are a professional testing assistant; answer formally and follow ISTQB terminology”), then send successive user prompts." },
      ],
    },
    "2.2.1": {
      objective: "GenAI-2.2.1",
      body: [
        { type: "p", text: "In test analysis GenAI works on requirements, user stories, specifications and GUI wireframes, producing test analysis work products such as prioritized test conditions or acceptance criteria." },
        { type: "list", intro: "Typical GenAI-supported analysis tasks:", items: [
          "Identify potential defects in the test basis — ambiguity, inconsistency, missing information — using similar requirement patterns or past defect reports.",
          "Generate test conditions by turning requirements into measurable, testable statements.",
          "Prioritize test conditions by risk level, given likelihood and impact data, regulatory relevance, user-facing criticality (login, payment) and defect history.",
          "Support coverage analysis by mapping the test basis to test conditions and revealing gaps.",
          "Suggest suitable test techniques such as boundary value analysis or equivalence partitioning.",
        ]},
        { type: "example", title: "Prompt chain for analysis", text: "Step 1: generate test conditions from the requirements. Step 2: give the conditions plus risk context and ask for prioritization. Step 3: give the prioritized list and ask which requirement aspects are not covered. Verify each output before the next step." },
        { type: "note", title: "Garbage in, garbage out", text: "The quality and relevance of the input you provide directly determines the accuracy of the output." },
      ],
    },
    "2.2.2": {
      objective: "GenAI-2.2.2",
      body: [
        { type: "p", text: "Test design refines test conditions into test cases; test implementation creates the testware to run them. GenAI can help with both, for manual tests and automated scripts alike:" },
        { type: "list", items: [
          "Test case generation — drafts from functional and non-functional requirements with preconditions, inputs, expected results and coverage criteria.",
          "Test data synthesis — realistic, privacy-preserving synthetic data resembling production, including extreme cases.",
          "Automated test script generation — translate structured test cases into scripts for a given framework, and update them when requirements change.",
          "Test execution scheduling and prioritization — order tests using priority, risk, dependencies and available resources.",
        ]},
        { type: "example", title: "Few-shot Gherkin", text: "Give the LLM three examples, each pairing a user story and acceptance criteria with its Given-When-Then scenarios, then a new user story. Constrain it to Given-When-Then syntax aligned with the acceptance criteria and request the same scenario format." },
      ],
    },
    "2.2.3": {
      objective: "GenAI-2.2.3",
      body: [
        { type: "p", text: "Regression suites grow with every release and run constantly in CI/CD pipelines, so they are prime automation candidates. GenAI helps create, maintain and optimize them and, through impact analysis, aim them where recent changes create the most risk." },
        { type: "list", items: [
          "Keyword-driven script implementation — map predefined keywords to test cases and generate scripts.",
          "Impact analysis and test optimization — analyze code changes to find high-risk areas for targeted regression testing.",
          "Self-healing and adaptive tests — adjust scripts automatically to minor UI or API changes so suites stay stable.",
          "Automated test reporting and insights — detailed, timely reports and dashboards with trends and predicted failure points.",
          "Enhanced defect reporting and root cause analysis — compile reports with logs, screenshots and environment data.",
        ]},
        { type: "p", text: "GUI regression tests break when the interface changes; GenAI can adapt dynamic locators and changed interactions. API regression tests break when request/response formats, endpoints or authentication change; GenAI can adapt scripts to the new specification and generate varied data." },
        { type: "note", title: "Check the output", text: "GenAI makes mistakes. Review generated scripts and reports with a rigor matching the risk (see Chapter 3)." },
      ],
    },
    "2.2.4": {
      objective: "GenAI-2.2.4",
      body: [
        { type: "p", text: "Monitoring needs lots of — often unstructured — data that usually already sits in test management tools. GenAI can analyze and synthesize it:" },
        { type: "list", items: [
          "Test monitoring and metrics analysis — automate monitoring, spot trends, predict risks, alert on deviations from plan.",
          "Test control — suggest reprioritizing tests, adjusting schedules, reallocating resources.",
          "Test completion insights — draft completion reports with successes and lessons learned.",
          "Metrics visualization and reporting — dynamic dashboards plus natural-language summaries for every stakeholder.",
        ]},
        { type: "example", title: "Better metrics prompt", text: "Instead of only asking for a table of pass/fail counts, ask for the table plus a plain-language summary interpreting the numbers and recommending next steps for the test manager." },
      ],
    },
    "2.2.5": {
      objective: "GenAI-2.2.5",
      body: [
        { type: "table", headers: ["Technique", "Use it when…", "Typical test tasks"], rows: [
          ["Prompt chaining", "The task is complex and needs precision, with human verification at each step", "Test analysis, test design, test automation"],
          ["Few-shot prompting", "The task is repetitive or needs a specific, constrained output format", "Gherkin scenarios, keyword-driven scripts, formatted test reports"],
          ["Meta prompting", "The task is flexible or new and you need help crafting the prompt", "Test report analysis, anomaly detection, any new complex task"],
        ]},
        { type: "p", text: "You can combine all three in one use case: meta prompting drafts an initial prompt, you add or adapt examples (few-shot), and you split the work into verified subtasks (chaining)." },
      ],
    },
    "2.3.1": {
      objective: "GenAI-2.3.1",
      body: [
        { type: "table", headers: ["Metric", "Measures", "Example"], rows: [
          ["Accuracy", "Overall correctness against expert test cases, requirements or standards", "Generated test cases cover all specified requirements"],
          ["Precision", "Correctness for a specific objective", "Generated tests correctly identify anomalies"],
          ["Recall", "Ability to find all relevant instances", "Tests cover every valid and invalid equivalence partition"],
          ["Relevance & contextual fit", "Output suits the context", "Tests consistent with the test basis and domain rules"],
          ["Diversity", "Range of inputs and scenarios, little repetition", "Varied user behaviors and edge cases"],
          ["Execution success rate", "Share of generated artifacts that run as-is", "Scripts without syntax or format errors"],
          ["Time efficiency", "Time saved versus manual work", "AI generation time vs human authoring time"],
        ]},
        { type: "p", text: "Add task-specific metrics where useful. Evaluate by manual review or automatic comparison against a reference — and because LLMs are non-deterministic, base conclusions on statistically relevant samples, not a single run." },
      ],
    },
    "2.3.2": {
      objective: "GenAI-2.3.2",
      body: [
        { type: "list", intro: "Five techniques to evaluate and refine prompts:", items: [
          "Iterative prompt modification — start from a base prompt and adjust wording, terminology and context based on results.",
          "A/B testing of prompts — run several prompt versions and compare them on predefined metrics.",
          "Output analysis — classify the errors and inconsistencies in the output (e.g. expected results contradicting the requirements) and refine the prompt to prevent them.",
          "Integrate user feedback — ask testers how useful and clear the output is (e.g. level of detail) and adapt.",
          "Adjust prompt length and specificity — sometimes more context helps, sometimes a shorter prompt generalizes better.",
        ]},
        { type: "p", text: "Teams should hold prompt evaluation and optimization sessions and share what works — for example in a shared prompt library — to standardize quality and avoid repeating mistakes." },
      ],
    },
  },
};
