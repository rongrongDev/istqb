// CT-GenAI v1.1 — Chapter 2: Prompt Engineering for Effective Software Testing
// summary/deepPoints from syllabus v1.1; examInsights derived from ISTQB Sample Exam A v1.1 and the ASTQB v1.1 sample exam
export default {
  id: 2,
  title: 'Prompt Engineering for Effective Software Testing',
  time: '365 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "The biggest chapter (365 min) and the heaviest in the exam: 11 questions per sample exam, including all five K3 'apply' questions worth 2 points each in the ISTQB set. Memorize the six prompt components, the three core techniques and WHEN each fits (the 2.2.5 table), system vs user prompts, the GenAI tasks per test activity, and the seven evaluation metrics plus five refinement techniques.",
  sections: [
    {
      id: '2.1.1',
      title: 'Structure of Prompts for Software Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Six components: ROLE (persona — tester, test manager, TAE), CONTEXT (background: test object, functionality, relevant information), INSTRUCTION (clear, imperative, concise task description), INPUT DATA (user stories, acceptance criteria, screenshots, code, existing test cases, examples, benchmarks), CONSTRAINTS (restrictions/special considerations on how to apply instructions to the input), OUTPUT FORMAT (expected format, structure, columns).",
        "The structure is combined with a prompting technique (2.1.2) chosen for the task and the LLM."
      ],
      examInsights: [
        "A-Q8 / A-Q9 KEY — 'Performance benchmarks from previous releases' belongs in INPUT DATA; 'columns: requirement reference, defect type, description, severity' belongs in OUTPUT FORMAT.",
        "ASTQB-Q8/Q9 — The six components are Role, Context, Instruction, Input Data, Constraints, Output Format; a bulleted list of fields to return = Output format."
      ]
    },
    {
      id: '2.1.2',
      title: 'Core Prompting Techniques',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "PROMPT CHAINING: break the task into intermediate steps (several prompts); each result is checked/refined (manually or automatically) before the next → accuracy for complicated tasks needing decomposition.",
        "FEW-SHOT prompting: give the LLM several examples (zero-shot = none, one-shot = one) → consistent output following a pattern.",
        "META PROMPTING: the LLM generates or refines its own prompts, iteratively evaluated by the tester → efficient prompt optimization; a form of PAIRING with the AI when the tester is unsure how to write the prompt.",
        "Techniques can be combined (2.2.5)."
      ],
      examInsights: [
        "A-Q10 KEY — Few-shot = guidance with examples; prompt chaining = multiple prompts in steps; meta prompting = the AI generates/refines prompts.",
        "ASTQB-Q10 — Complex task where intermediate results must be checked before proceeding → prompt chaining."
      ]
    },
    {
      id: '2.1.3',
      title: 'System Prompt and User Prompt',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "SYSTEM PROMPT: defined by the developer/tester, usually not visible or editable by the chatbot user; sets behavior, personality and operational parameters (tone, conciseness, domain rules, behavior to avoid) for the WHOLE conversation; may hold role, context, constraints; stays constant.",
        "USER PROMPT: the user's actual input; changes with each interaction; visible; should be focused and well-structured with explicit instructions, extra context and output format.",
        "The LLM answers using both the unchanging system prompt and the current user prompt."
      ],
      examInsights: [
        "A-Q11 KEY — Primary function of a system prompt: provide a framework for the LLM's behavior for the entire conversation.",
        "ASTQB-Q11 — A user prompt usually changes with each interaction."
      ]
    },
    {
      id: '2.2.1',
      title: 'Test Analysis with Generative AI',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "Inputs: requirements, user stories, specifications, GUI wireframes. Outputs: test analysis work products such as prioritized test conditions (e.g. acceptance criteria).",
        "Tasks: identify potential defects in the test basis (inconsistencies, ambiguities, gaps); generate test conditions from the test basis; prioritize test conditions by risk level (likelihood + impact, regulation, user-facing features, defect history); support coverage analysis (map test basis to test conditions); suggest test techniques (BVA, EP…).",
        "Input quality directly drives output accuracy."
      ],
      examInsights: [
        "A-Q12 KEY (K3, 2 pts) — Prompt chaining for stable, already-reviewed requirements: (i) generate test conditions → (ii) prioritize them with context → (iii) check coverage. TRAP: one big 'do everything' prompt (iv) is not chaining; defect-detection on reviewed requirements (v) isn't the objective.",
        "ASTQB-Q12 — Not enough time to test everything → feed the LLM previous defects, requirements and regulations so it can prioritize the test conditions by risk."
      ]
    },
    {
      id: '2.2.2',
      title: 'Test Design and Test Implementation with Generative AI',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "Test case generation: draft test cases from functional and non-functional requirements — preconditions, inputs, expected results, coverage criteria, from basic checks to end-to-end.",
        "Test data synthesis: representative, privacy-preserving synthetic data resembling production, including extreme situations.",
        "Automated test script generation: manual procedures and automated scripts from structured test cases, for various frameworks; update/extend as requirements change.",
        "Test execution scheduling and prioritization: analyze test cases and interdependencies, optimize the schedule by priority, risk, resources and objectives."
      ],
      examInsights: [
        "A-Q13 KEY (K3, 2 pts) — Best few-shot Gherkin prompt has a specific role, the predefined EXAMPLES, Given-When-Then constraint aligned with the acceptance criterion, and the Gherkin output format (Prompt B). Prompts missing the examples aren't few-shot; vague 'best practices' constraints are weaker.",
        "ASTQB-Q13 — Inputs include wireframes/images and text → apply multimodal prompts to create test conditions."
      ]
    },
    {
      id: '2.2.3',
      title: 'Automated Regression Testing with Generative AI',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "Regression suites grow each release → ideal for automation in CI/CD; GenAI helps create, maintain and optimize them and focus effort via impact analysis.",
        "Tasks: keyword-driven script implementation (map pre-defined keywords to test cases); impact analysis and test optimization (code changes → high-risk areas); SELF-HEALING/adaptive tests for minor UI/API changes; automated test reporting and insights (dashboards, trends, predictive insights); enhanced defect reporting and root cause analysis (logs, screenshots, environment data).",
        "GUI tests: unstable due to UI changes → GenAI adapts dynamic locators and changed interactions. API tests: changing formats, endpoints, authentication → GenAI adapts scripts to evolving specs and generates diverse data.",
        "GenAI makes mistakes — check output according to risk."
      ],
      examInsights: [
        "A-Q14 KEY (K3, 2 pts) — Improve a regression report-analysis prompt by expanding the INSTRUCTION: separate expected vs actual results, cluster issues, highlight what matters.",
        "ASTQB-Q14 — Same high defect counts every release → use AI for root cause analysis across releases."
      ]
    },
    {
      id: '2.2.4',
      title: 'Test Monitoring and Test Control with Generative AI',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "Test monitoring needs large, often unstructured data already in test management tools — GenAI analyzes and synthesizes it.",
        "Tasks: test monitoring and metrics analysis (trends, predicted risks, deviation alerts); test control (insights to reprioritize tests, adjust schedules, reallocate resources); test completion insights (completion reports, lessons learned); metrics visualization and reporting (dynamic dashboards + natural-language summaries for all stakeholders)."
      ],
      examInsights: [
        "A-Q15 KEY (K3, 2 pts) — Best improvement to a metrics prompt: expand the OUTPUT FORMAT with a plain-language summary interpreting the metrics and outlining next steps.",
        "ASTQB-Q15 — Manual trend analysis today → AI can analyze defect and execution data and provide trending and root-cause information."
      ]
    },
    {
      id: '2.2.5',
      title: 'Choosing Prompting Techniques',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        "PROMPT CHAINING → complex tasks needing precision with human verification at each step (test analysis, test design, test automation).",
        "FEW-SHOT → repetitive tasks or a specific/constrained output format (Gherkin scenarios, keyword-driven scripts, formatted test reports).",
        "META PROMPTING → flexible, dynamic tasks; crafting prompts for new tasks (test report analysis, anomaly detection).",
        "Combine them: meta prompting to draft a prompt → add/adapt examples (few-shot) → split into validated subtasks (chaining)."
      ],
      examInsights: [
        "A-Q16 KEY (K3, 2 pts) — You want more test cases 'in line with your expectations' following existing ones → few-shot prompting.",
        "ASTQB-Q16 — High-level requirements, need ideas on how to get started → meta prompting."
      ]
    },
    {
      id: '2.3.1',
      title: 'Metrics for Evaluating GenAI Results',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "ACCURACY (overall correctness vs expert test cases/requirements), PRECISION (correctness for a specific objective, e.g. correctly identified anomalies), RECALL (finds ALL relevant instances, e.g. covers all valid and invalid equivalence partitions), RELEVANCE & CONTEXTUAL FIT (consistent with test basis and domain), DIVERSITY (varied behaviors and edge cases), EXECUTION SUCCESS RATE (scripts runnable as-is without syntax/format errors), TIME EFFICIENCY (time saved vs manual).",
        "Also task-specific metrics. Evaluate by manual review or automated comparison against a reference — and, because GenAI is non-deterministic, on STATISTICALLY RELEVANT data."
      ],
      examInsights: [
        "A-Q17 KEY — Comprehensive assessment: evaluate DIVERSITY of inputs/scenarios and use EXECUTION SUCCESS RATE to verify scripts run.",
        "ASTQB-Q17 — Asked the LLM to cover a decision table fully → measure with RECALL (did it find all relevant cases)."
      ]
    },
    {
      id: '2.3.2',
      title: 'Evaluating and Iteratively Refining Prompts',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Five techniques: ITERATIVE PROMPT MODIFICATION (start from a base prompt, add context/adjust wording); A/B TESTING of prompts (compare versions on predefined metrics); OUTPUT ANALYSIS (study the inaccuracies and inconsistencies to prevent similar errors); INTEGRATE USER FEEDBACK (testers' view on usefulness, detail); ADJUST PROMPT LENGTH AND SPECIFICITY (more context vs shorter for generalization).",
        "Run prompt evaluation/optimization sessions and share practices (e.g. prompt libraries) across the team."
      ],
      examInsights: [
        "A-Q18 / ASTQB-Q18 KEY — Studying the generated errors (e.g. expected results contradicting requirements) to refine the prompt = OUTPUT ANALYSIS. Both exams ask this."
      ]
    }
  ]
};
