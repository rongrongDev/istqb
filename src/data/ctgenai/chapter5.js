// CT-GenAI v1.1 — Chapter 5: Deploying and Integrating Generative AI in Test Organizations
// summary/deepPoints from syllabus v1.1; examInsights derived from ISTQB Sample Exam A v1.1 and the ASTQB v1.1 sample exam
export default {
  id: 5,
  title: 'Deploying and Integrating GenAI in Test Organizations',
  time: '80 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "7 questions per sample exam, mostly K1/K2 recall. Learn the three shadow-AI risks, the elements of a GenAI test strategy, the four LLM selection criteria, the three adoption phases IN ORDER (discovery → initiation & usage definition → utilization & iteration), the skills testers need, how teams build skills (hands-on, gradual, communities of practice), and how tester and test manager roles shift.",
  sections: [
    {
      id: '5.1.1',
      title: 'Risks of Shadow AI',
      level: 'K1',
      type: 'skim',
      summary: "Shadow AI = using unapproved (personal) AI tools. Risks: INFORMATION SECURITY & DATA PRIVACY weaknesses (personal tools may lack robust security → breaches, unauthorized access to sensitive data); COMPLIANCE & REGULATORY issues (non-compliance with standards/regulations → legal consequences); VAGUE INTELLECTUAL PROPERTY (unclear licensing; copyrighted data processed without authorization → IP disputes). A GenAI strategy and deployment steps avoid shadow AI.",
      examInsights: [
        "A-Q34 KEY — Correct statement: shadow AI may lead to unauthorized access to sensitive information.",
        "ASTQB-Q34 — Copyrighted data used without authorization = 'vague intellectual property' risk."
      ]
    },
    {
      id: '5.1.2',
      title: 'Key Aspects of a GenAI Strategy for Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Measurable test objectives (productivity, shorter test cycles, better quality).",
        "Select LLMs aligned with objectives, COMPATIBLE WITH EXISTING TEST INFRASTRUCTURE and meeting scalability needs.",
        "DATA QUALITY: accurate, relevant, securely protected input data → trustworthy results.",
        "Training programs (technical and ethical skills) + metrics for GenAI effectiveness (2.3.1).",
        "Process guidelines: rules for sensitive data, transparency obligations (what was AI-generated), quality gates with review of generated testware."
      ],
      examInsights: [
        "A-Q35 KEY — Select LLMs that integrate appropriately with existing test environments and tools.",
        "ASTQB-Q35 — High-quality input data matters because it produces reliable results."
      ]
    },
    {
      id: '5.1.3',
      title: 'Selecting LLMs/SLMs for Test Tasks',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Models differ in capabilities (multimodal, reasoning), technical features (context window) and licensing (commercial vs open source); few benchmarks focus on testing.",
        "Four criteria: MODEL PERFORMANCE on the targeted test tasks against the organization's benchmarks (2.3.1 metrics); FINE-TUNING POTENTIAL with domain data; RECURRING COST (licensing + operations, e.g. tokens × frequency); COMMUNITY AND SUPPORT (documentation, active community)."
      ],
      examInsights: [
        "A-Q36 KEY — A key selection criterion: evaluate recurring costs such as computational/operational expenses.",
        "ASTQB-Q36 — To prove the LLM will do the job more accurately, evaluate MODEL PERFORMANCE."
      ]
    },
    {
      id: '5.1.4',
      title: 'Phases of Adopting GenAI',
      level: 'K1',
      type: 'skim',
      summary: "(1) DISCOVERY — awareness and capability building: train teams, give access to LLMs/SLMs, experiment with first use cases. (2) INITIATION AND USAGE DEFINITION — identify and prioritize practical use cases, evaluate LLM-powered test infrastructure, build expertise, align with organizational needs. (3) UTILIZATION AND ITERATION — full integration, continuous monitoring, measuring and managing the transformation for sustainable, scalable benefits. Phases can run in parallel per use case; address early concerns such as fear of job displacement.",
      examInsights: [
        "A-Q37 KEY — Phases: Discovery, Initiation and usage definition, Utilization and iteration.",
        "ASTQB-Q37 — The FIRST phase is Discovery."
      ]
    },
    {
      id: '5.2.1',
      title: 'Essential Skills for Testing with GenAI',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Master prompt engineering, understand context windows, develop review methods; combine domain + test expertise with AI skills.",
        "Key competencies: ASSESSING LLM CAPABILITIES (choosing/adapting models), prompt refinement, evaluating AI-generated testware.",
        "Knowledge: GenAI risks and mitigations; data security of sharing testware; DATA SANITIZATION (remove/mask sensitive info); privacy-preserving prompting.",
        "Environment: right-sized models, efficient usage patterns, balance automation benefit vs cost and energy."
      ],
      examInsights: [
        "A-Q38 KEY — Example skill: choosing the most appropriate LLM based on criteria such as adaptability to test tasks. TRAP: testers can't 'prevent' hallucinations — they mitigate them; LLM training-data quality is a developer skill.",
        "ASTQB-Q38 — Testers need prompt engineering to design and refine the prompts that guide the LLM."
      ]
    },
    {
      id: '5.2.2',
      title: 'Building GenAI Capabilities in Test Teams',
      level: 'K1',
      type: 'skim',
      summary: "HANDS-ON and gradual: practice with various LLMs/SLMs, structured learning paths, guided exercises, peer learning, gradual integration into daily tasks, sharing know-how internally. Progress from basic prompts to test-specific prompts; a PROMPT PATTERN is a reusable template for consistent outputs. Internal COMMUNITIES OF PRACTICE meet regularly to show successes, DISCUSS CHALLENGES, refine best practices, and share prompt pattern libraries and lessons learned.",
      examInsights: [
        "A-Q39 KEY — Best approach: hands-on, gradual learning with guided exercises, peer learning and knowledge-sharing communities. TRAPS: 'big-bang' integration, unstructured experimentation, mainly theoretical courses.",
        "ASTQB-Q39 — Important learning method in team sessions: discussing challenges and their resolutions."
      ]
    },
    {
      id: '5.2.3',
      title: 'Evolving Test Processes and Roles',
      level: 'K1',
      type: 'skim',
      summary: "TESTERS evolve from test design/execution specialists into AI-assisted test specialists: guide and VERIFY AI-generated testware, review AI output, refine prompts, maintain test-specific prompt libraries. TEST MANAGERS add AI-based test strategy, AI-based risk management, monitoring and control of AI-based test processes, balancing human and AI capabilities, AI governance, ensuring teams keep traditional competencies AND AI literacy, and leading hybrid teams of people and GenAI agents.",
      examInsights: [
        "A-Q40 KEY — Testers shift from manually designing test cases to guiding and verifying AI-generated testware. TRAP: overseeing AI-based test processes is the TEST MANAGER's job.",
        "ASTQB-Q40 — Ensuring teams keep traditional competencies and AI literacy = the test manager."
      ]
    }
  ]
};
