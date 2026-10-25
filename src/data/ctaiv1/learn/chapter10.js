// CT-AI v1.0 — Chapter 10 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'AI-based systems often cannot be tested in the real operational environment — it is too dangerous, too expensive, or too rare. This short chapter covers what makes AI test environments special (big data, specialized processors, self-learning, autonomy) and the benefits of virtual test environments.',
  keywords: {
    general: [ 'Virtual test environment' ],
    aiSpecific: [
      'AI-specific processor',
      'autonomous system',
      'big data',
      'explainability',
      'multi-agent system',
      'self-learning system'
    ]
  },
  objectives: [
    {
      id: 'AI-10.1.1',
      level: 'K2',
      text: 'Describe the main factors that differentiate the test environments for AI-based systems from those required for conventional systems'
    },
    {
      id: 'AI-10.2.1',
      level: 'K2',
      text: 'Describe the benefits provided by virtual test environments in the testing of AI-based systems'
    }
  ],
  sections: {
    '10.1': {
      body: [
        {
          type: 'p',
          text: 'Six characteristics that make AI test environments differ from conventional: (1) Self-learning — environments must mimic undefined future conditions, requiring creativity and randomness. (2) Autonomy — environments must push systems to boundaries and simulate edge cases for handover scenarios. (3) Multi-agency — must incorporate non-determinism to mimic interactions with other AI agents. (4) Explainability — may need tools embedded in the environment to capture decision explanations. (5) Hardware — AI-specific processors may need to be included. (6) Big data — high-volume/velocity/variety data pipeline setup requires careful planning.'
        }
      ]
    },
    '10.2': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Six benefits of virtual environments for AI testing:',
            '(1) Dangerous scenarios — test without endangering the SUT, humans, or real infrastructure.',
            '(2) Unusual scenarios — test rare events (solar eclipse, four buses at one intersection) easily, repeatedly, and reproducibly.',
            '(3) Extreme scenarios — test impossible/catastrophic real-world conditions (nuclear disaster, deep space).',
            '(4) Time-intensive scenarios — run in compressed time (multiple scenarios per second), multiple virtual environments in parallel in the cloud.',
            '(5) Observability and controllability — far greater control of environment conditions; all digital components can be monitored and recorded continuously.',
            "(6) Availability — simulate hardware that doesn't exist yet or is too expensive.",
            'Examples: MORSE (robot simulation, Blender engine), AI Habitat (Facebook AI, embodied agents), DRIVE Constellation (NVIDIA, self-driving cars, cloud-based, billions of miles), MATLAB/Simulink (training data + model generation + AI system simulation).'
          ]
        }
      ]
    }
  }
};
