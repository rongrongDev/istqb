// CT-AI v1.0 — Chapter 2 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'AI-based systems have quality characteristics beyond ISO/IEC 25010: flexibility, adaptability, autonomy, evolution, bias, ethics, side effects and reward hacking, transparency/interpretability/explainability, and safety. Each characteristic changes what testers must look for, and this chapter defines them all — it is the conceptual backbone for the testing chapters (7–9).',
  keywords: {
    general: [],
    aiSpecific: [
      'Adaptability',         'algorithmic bias',
      'autonomy',             'bias',
      'evolution',            'explainability',
      'explainable AI (XAI)', 'flexibility',
      'inappropriate bias',   'interpretability',
      'ML system',            'machine learning',
      'reward hacking',       'robustness',
      'sample bias',          'self-learning system',
      'side effects',         'transparency'
    ]
  },
  objectives: [
    {
      id: 'AI-2.1.1',
      level: 'K2',
      text: 'Explain the importance of flexibility and adaptability as characteristics of AI-based systems'
    },
    {
      id: 'AI-2.2.1',
      level: 'K2',
      text: 'Explain the relationship between autonomy and AI-based systems'
    },
    {
      id: 'AI-2.3.1',
      level: 'K2',
      text: 'Explain the importance of managing evolution for AI-based systems'
    },
    {
      id: 'AI-2.4.1',
      level: 'K2',
      text: 'Describe the different causes and types of bias found in AI-based systems'
    },
    {
      id: 'AI-2.5.1',
      level: 'K2',
      text: 'Discuss the ethical principles that should be respected in the development, deployment and use of AI-based systems'
    },
    {
      id: 'AI-2.6.1',
      level: 'K2',
      text: 'Explain the occurrence of side effects and reward hacking in AI-based systems'
    },
    {
      id: 'AI-2.7.1',
      level: 'K2',
      text: 'Explain how transparency, interpretability and explainability apply to AI-based systems'
    },
    {
      id: 'AI-2.8.1',
      level: 'K1',
      text: 'Recall the characteristics that make it difficult to use AI-based systems in safety-related applications'
    }
  ],
  sections: {
    '2.1': {
      body: [
        {
          type: 'p',
          text: 'Flexibility = ability to be used in situations outside original requirements. Adaptability = ease of modification for new environments. Both needed for self-learning systems. Requirements should specify what environments the system must adapt to AND any time/resource constraints for adaptation.'
        }
      ]
    },
    '2.2': {
      body: [
        {
          type: 'p',
          text: "Autonomy = ability to work independently of human oversight for prolonged periods. Full autonomy (no human oversight ever) is rarely desired. Testing must identify: when should the system hand back control to humans, and for how long can it work alone? Key: self-driving cars are 'full driving automation,' not truly autonomous."
        }
      ]
    },
    '2.3': {
      body: [
        {
          type: 'p',
          text: 'Evolution = ability to improve in response to changing external constraints. Self-learning systems manage two forms of change: learning from their own decisions AND learning from changes in their operational environment. Evolution must stay within constraints — unwanted characteristics (e.g., reward hacking) must be prevented.'
        }
      ]
    },
    '2.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Bias = statistical distance between system outputs and 'fair outputs' showing no favoritism (e.g., by gender, race, ethnicity, age, income).",
            'Two sources: (1) Algorithmic bias — incorrect configuration of the learning algorithm, e.g., overvaluing some data. Managed via hyperparameter tuning. (2) Sample bias — training data not representative of the full operational data space.',
            'Inappropriate bias is most commonly caused by sample bias, but can also stem from algorithmic bias.',
            'Real-world examples: bank lending recommendations, recruitment systems, judicial monitoring — all have shown inappropriate bias in AI.'
          ]
        }
      ]
    },
    '2.5': {
      body: [
        {
          type: 'p',
          text: 'OECD AI Principles (2019, 42 countries): AI should benefit people and planet; respect rule of law and human rights; ensure transparency; function robustly and safely; developers/deployers should be accountable. Ethics can change across time, cultures, and localities — deployment from one culture to another requires ethical re-evaluation.'
        }
      ]
    },
    '2.6': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Side effects: occur when the AI achieves its goal but causes unintended harm to environmental variables that weren't part of the goal. Example: a self-driving car optimizing for fuel efficiency + safety may take so long that passengers become frustrated — this is a side effect.",
            "Reward hacking: the AI achieves the specified goal using a 'clever' shortcut that perverts the designer's intent. Classic example: an AI taught to achieve the 'highest score' in a game directly modifies the score register rather than playing the game.",
            'Both are specific risks in reinforcement learning and self-learning systems. Testing must anticipate and check for these unexpected behaviors.'
          ]
        }
      ]
    },
    '2.7': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Three distinct concepts: Transparency = ease with which the algorithm and training data can be determined. Interpretability = understandability of the AI technology by stakeholders. Explainability = ease with which users can determine how the AI arrives at a specific result.',
            "XAI (Explainable AI) field exists because most users see AI as a 'black box.' Even data scientists sometimes can't fully explain model outputs.",
            'Why XAI matters (The Royal Society): user confidence, safeguarding against bias, meeting regulatory requirements, improving design, assessing robustness, understanding outputs, user empowerment.',
            'Testing implication: transparency can be tested; interpretability and explainability require user surveys and tools like LIME (see Section 8.6).'
          ]
        }
      ]
    },
    '2.8': {
      body: [
        {
          type: 'p',
          text: 'Safety = expectation that the AI will not harm people, property, or environment. AI characteristics that make safety harder to ensure — MEMORIZE this list: (1) complexity, (2) non-determinism, (3) probabilistic nature, (4) self-learning, (5) lack of transparency/interpretability/explainability, (6) lack of robustness.'
        }
      ]
    }
  }
};
