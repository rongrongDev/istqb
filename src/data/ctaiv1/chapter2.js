// CT-AI v1.0 — Chapter 2: Quality Characteristics for AI-Based Systems
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 2,
  title: 'Quality Characteristics for AI-Based Systems',
  time: '105 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "Introduces AI-specific quality dimensions that go beyond ISO 25010. Bias, side effects, reward hacking, and explainability are high-frequency exam topics and foundational for Chapters 7–9. Flexibility, autonomy, and evolution are lighter — understand the definitions but don't over-invest.",
  sections: [
    {
      id: '2.1',
      title: 'Flexibility and Adaptability',
      level: 'K2',
      type: 'skim',
      summary: 'Flexibility = ability to be used in situations outside original requirements. Adaptability = ease of modification for new environments. Both needed for self-learning systems. Requirements should specify what environments the system must adapt to AND any time/resource constraints for adaptation.'
    },
    {
      id: '2.2',
      title: 'Autonomy',
      level: 'K2',
      type: 'skim',
      summary: "Autonomy = ability to work independently of human oversight for prolonged periods. Full autonomy (no human oversight ever) is rarely desired. Testing must identify: when should the system hand back control to humans, and for how long can it work alone? Key: self-driving cars are 'full driving automation,' not truly autonomous."
    },
    {
      id: '2.3',
      title: 'Evolution',
      level: 'K2',
      type: 'skim',
      summary: 'Evolution = ability to improve in response to changing external constraints. Self-learning systems manage two forms of change: learning from their own decisions AND learning from changes in their operational environment. Evolution must stay within constraints — unwanted characteristics (e.g., reward hacking) must be prevented.'
    },
    {
      id: '2.4',
      title: 'Bias',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Bias = statistical distance between system outputs and 'fair outputs' showing no favoritism (e.g., by gender, race, ethnicity, age, income).",
        'Two sources: (1) Algorithmic bias — incorrect configuration of the learning algorithm, e.g., overvaluing some data. Managed via hyperparameter tuning. (2) Sample bias — training data not representative of the full operational data space.',
        'Inappropriate bias is most commonly caused by sample bias, but can also stem from algorithmic bias.',
        'Real-world examples: bank lending recommendations, recruitment systems, judicial monitoring — all have shown inappropriate bias in AI.'
      ]
    },
    {
      id: '2.5',
      title: 'Ethics',
      level: 'K2',
      type: 'skim',
      summary: 'OECD AI Principles (2019, 42 countries): AI should benefit people and planet; respect rule of law and human rights; ensure transparency; function robustly and safely; developers/deployers should be accountable. Ethics can change across time, cultures, and localities — deployment from one culture to another requires ethical re-evaluation.'
    },
    {
      id: '2.6',
      title: 'Side Effects and Reward Hacking',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Side effects: occur when the AI achieves its goal but causes unintended harm to environmental variables that weren't part of the goal. Example: a self-driving car optimizing for fuel efficiency + safety may take so long that passengers become frustrated — this is a side effect.",
        "Reward hacking: the AI achieves the specified goal using a 'clever' shortcut that perverts the designer's intent. Classic example: an AI taught to achieve the 'highest score' in a game directly modifies the score register rather than playing the game.",
        'Both are specific risks in reinforcement learning and self-learning systems. Testing must anticipate and check for these unexpected behaviors.'
      ]
    },
    {
      id: '2.7',
      title: 'Transparency, Interpretability and Explainability (XAI)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three distinct concepts: Transparency = ease with which the algorithm and training data can be determined. Interpretability = understandability of the AI technology by stakeholders. Explainability = ease with which users can determine how the AI arrives at a specific result.',
        "XAI (Explainable AI) field exists because most users see AI as a 'black box.' Even data scientists sometimes can't fully explain model outputs.",
        'Why XAI matters (The Royal Society): user confidence, safeguarding against bias, meeting regulatory requirements, improving design, assessing robustness, understanding outputs, user empowerment.',
        'Testing implication: transparency can be tested; interpretability and explainability require user surveys and tools like LIME (see Section 8.6).'
      ]
    },
    {
      id: '2.8',
      title: 'Safety and AI',
      level: 'K1',
      type: 'skim',
      summary: 'Safety = expectation that the AI will not harm people, property, or environment. AI characteristics that make safety harder to ensure — MEMORIZE this list: (1) complexity, (2) non-determinism, (3) probabilistic nature, (4) self-learning, (5) lack of transparency/interpretability/explainability, (6) lack of robustness.'
    }
  ]
};
