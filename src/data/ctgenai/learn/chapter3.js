// CT-GenAI v1.1 — Chapter 3 learn content, authored from ISTQB CT-GenAI Syllabus v1.1.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "GenAI output can be wrong, unfair, leaky or costly. This chapter covers the three typical LLM defects — hallucinations, reasoning errors and biases — and how to detect and mitigate them; how to tame non-determinism; the privacy and security risks of using GenAI in testing, including concrete attack vectors and countermeasures; the energy footprint of GenAI; and the regulations and standards that frame its use.",
  keywords: [
    "security", "vulnerability", "data privacy",
    "hallucination", "temperature", "reasoning error", "bias", "context manipulation",
  ],
  objectives: [
    { id: "GenAI-3.1.1", level: "K1", text: "Recall the definitions of hallucinations, reasoning errors and biases in Generative AI systems" },
    { id: "GenAI-3.1.2", level: "K3", text: "Identify hallucinations, reasoning errors and biases in LLM output" },
    { id: "GenAI-3.1.3", level: "K2", text: "Summarize mitigation techniques for GenAI hallucinations, reasoning errors and biases in software test tasks" },
    { id: "GenAI-3.1.4", level: "K1", text: "Recall mitigation techniques for non-deterministic behavior of LLMs" },
    { id: "GenAI-3.2.1", level: "K2", text: "Explain key data privacy and security risks associated with using generative AI in software testing" },
    { id: "GenAI-3.2.2", level: "K2", text: "Give examples of data privacy and vulnerabilities in using Generative AI in software testing" },
    { id: "GenAI-3.2.3", level: "K2", text: "Summarize mitigation strategies to protect data privacy and enhance security in Generative AI for software testing" },
    { id: "GenAI-3.3.1", level: "K2", text: "Explain the impact of task characteristics and model usage on the energy consumption of Generative AI in software testing" },
    { id: "GenAI-3.4.1", level: "K1", text: "Recall examples of AI regulations, standards and best practice frameworks relevant to Generative AI in software testing" },
  ],
  sections: {
    "3.1.1": {
      objective: "GenAI-3.1.1",
      body: [
        { type: "table", headers: ["Defect", "What it is", "In testing"], rows: [
          ["Hallucination", "Output that is factually wrong or irrelevant to the task", "Fictitious test cases, scripts that don't run, tests for acceptance criteria that don't exist"],
          ["Reasoning error", "Misreading logical structure — cause and effect, conditions, multi-step problem solving — because the model pattern-matches instead of reasoning", "Wrong effort estimates, illogical test prioritization or planning"],
          ["Bias", "Output skewed toward certain information or assumptions, inherited from the training data", "Test data or acceptance criteria that underrepresent some users, languages or cases"],
        ]},
        { type: "p", text: "All three stem from the training data and the limits of the transformer architecture. Non-determinism makes them slippery: a problem that seems fixed in one conversation can reappear in the next." },
        { type: "seealso", label: "CT-AI v2 Learn — Chapter 5", href: "/ctaiv2-learn", text: "testing AI systems for bias (5.1.2)" },
      ],
    },
    "3.1.2": {
      objective: "GenAI-3.1.2",
      body: [
        { type: "p", text: "Detection uses reviews, sometimes combined with automated checks, and different methods for each defect type:" },
        { type: "list", intro: "Hallucinations", items: [
          "Cross-verification — compare output with requirements, documentation and known system behavior (tools can flag discrepancies).",
          "Domain expertise consultation — subject matter experts validate nuanced content.",
          "Consistency checks — outputs must agree with each other and with known facts.",
        ]},
        { type: "list", intro: "Reasoning errors", items: [
          "Logical validation — review the coherence and structure of the reasoning; complex cases need human judgment.",
          "Output testing — run the generated test cases or scripts against the test object and check the results.",
        ]},
        { type: "list", intro: "Biases", items: [
          "Check that generated testware (code, synthetic data) fairly represents the test strategy and coverage requirements.",
          "Look for skew in test types, such as missing non-functional tests.",
        ]},
        { type: "example", title: "Spot the hallucination", text: "The user story covers cart, payment and confirmation email. Among the generated tests is “Verify the user can create a wishlist.” No requirement mentions wishlists — that test is a hallucination." },
        { type: "note", title: "Proportionate effort", text: "How much detection you do depends on the estimated risk of these defects for the task at hand." },
      ],
    },
    "3.1.3": {
      objective: "GenAI-3.1.3",
      body: [
        { type: "p", text: "Defects become more likely with poorly designed prompts or missing context. Five mitigations:" },
        { type: "list", items: [
          "Provide complete context — include every relevant prompt component (2.1.1).",
          "Divide prompts into manageable segments — use prompt chaining and verify each step, catching reasoning errors early.",
          "Use clear, interpretable data formats — structured, unambiguous inputs keep the model focused and its output less ambiguous.",
          "Select the appropriate model for the task — e.g. a reasoning model for logic-heavy work (see 5.1.3).",
          "Compare results across models — run the same prompt on several LLMs to expose errors and pick the most reliable answer.",
        ]},
        { type: "p", text: "Chapter 4 adds two more: retrieval-augmented generation (RAG) and fine-tuning." },
      ],
    },
    "3.1.4": {
      objective: "GenAI-3.1.4",
      body: [
        { type: "p", text: "Because inference samples from probabilities, outputs vary even for identical inputs — more so for long outputs. Perfect reproducibility is impossible, but two settings help:" },
        { type: "list", items: [
          "Lower the temperature — the probability distribution narrows, so outputs become more consistent; the price is less creativity and diversity.",
          "Set a random seed — where supported, the random number generator starts from the same point, producing the same pseudo-random sequence and more reproducible output.",
        ]},
        { type: "p", text: "Automating parts of output verification also gives a consistent evaluation despite the variability." },
      ],
    },
    "3.2.1": {
      objective: "GenAI-3.2.1",
      body: [
        { type: "list", intro: "GenAI may process sensitive or personally identifiable data. Privacy concerns:", items: [
          "Unintentional data exposure — output accidentally reveals sensitive information.",
          "Lack of control over data usage — the tool stores or processes data without consent or control, risking misuse.",
          "Compliance risks — breaching regulations such as the GDPR can lead to legal disputes.",
        ]},
        { type: "list", intro: "Security risks specific to testing with GenAI:", items: [
          "LLM-powered test infrastructure can suffer data breaches or unauthorized access.",
          "Attackers can exploit LLM vulnerabilities (manipulative attacks) to change behavior or extract data.",
          "Malicious input data can mislead the model and compromise accuracy or security.",
        ]},
      ],
    },
    "3.2.2": {
      objective: "GenAI-3.2.2",
      body: [
        { type: "table", headers: ["Attack vector", "Description", "Example"], rows: [
          ["Context manipulation", "Requests crafted to extract confidential training data", "Overlong prompts overflow the context window so the model leaks snippets of training data"],
          ["Request manipulation", "Input that disrupts the AI's output", "An image that lures the model into another context, provoking hallucinated acceptance criteria"],
          ["Data poisoning", "Manipulating the (training) data", "Deliberately false ratings when evaluating an AI-generated test report"],
          ["Malicious code generation", "Steering the LLM into generating backdoors", "Generated code opening a channel to a specific malicious IP address"],
        ]},
      ],
    },
    "3.2.3": {
      objective: "GenAI-3.2.3",
      body: [
        { type: "p", text: "Regulations such as the GDPR don't ban GenAI but limit what you may do with data — lawfulness and purpose limitation for collection, processing and storage." },
        { type: "list", intro: "Core data privacy measures:", items: [
          "Data minimization — avoid sensitive data unless legally permitted; use only the non-sensitive data you need.",
          "Anonymization and pseudonymization — mask or replace sensitive values with non-identifiable data.",
          "Secure storage and transmission — strong encryption and access controls.",
          "Resources training — policies and training for responsible, ethical use.",
        ]},
        { type: "list", intro: "Further strategies:", items: [
          "Systematic human review of generated output.",
          "Evaluation by comparison with another LLM.",
          "A secure operational environment matching the confidentiality needed: a secure commercial offering, a secure cloud, or an on-premises LLM.",
          "Regular security audits and vulnerability assessments.",
          "Keeping up with security best practices.",
        ]},
        { type: "note", title: "Involve the right people", text: "Combine several measures, and involve senior security engineers, legal counsel, the CTO or the CISO." },
      ],
    },
    "3.3.1": {
      objective: "GenAI-3.3.1",
      body: [
        { type: "p", text: "Training and serving LLMs uses large numbers of specialized processors, and every request loads devices, networks and data centers. Energy use grows with task complexity and the computing power involved." },
        { type: "example", title: "Orders of magnitude", text: "Generating a single image with a powerful model can use about as much energy as fully charging a smartphone; generating text uses only a small fraction of a charge." },
        { type: "p", text: "Exact figures are hard to get, but the cumulative effect across millions of users means significant CO₂ emissions. Good practice: avoid unnecessary model interactions." },
      ],
    },
    "3.4.1": {
      objective: "GenAI-3.4.1",
      body: [
        { type: "table", headers: ["Name", "Type", "What it covers", "Relevance to testing with GenAI"], rows: [
          ["ISO/IEC 42001:2023", "Standard", "Requirements for an AI management system in an organization", "Recommended, consistent and reliable practices"],
          ["ISO/IEC 23053:2022", "Standard", "Framework for AI systems using machine learning; lifecycle, safety, transparency", "Data quality, transparency and safety"],
          ["EU AI Act", "Regulation", "Legal framework classifying AI applications by risk level", "Transparency, accountability and bias mitigation obligations"],
          ["NIST AI Risk Management Framework", "Framework (US)", "Guidelines for managing AI risk: fairness, transparency, security", "Fairness and avoiding biased test results"],
        ]},
        { type: "p", text: "The landscape keeps changing, so test organizations must track new regulations, standards and national laws." },
        { type: "seealso", label: "CT-AI v2 Learn — Chapter 1", href: "/ctaiv2-learn", text: "regulations and standards for AI (1.1.8)" },
      ],
    },
  },
};
