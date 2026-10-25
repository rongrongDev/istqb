// CT-AI v1.0 — Chapter 10: Test Environments for AI-Based Systems
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 10,
  title: 'Test Environments for AI-Based Systems',
  time: '30 min',
  color: '#0F766E',
  bg: '#F0FDFA',
  overview: 'Short chapter — 30 minutes only. Know the six differentiating factors for AI test environments, and the six benefits of virtual test environments. The benefits of virtual environments are exam-testable and appear in scenario questions.',
  sections: [
    {
      id: '10.1',
      title: 'Test Environments for AI-Based Systems',
      level: 'K2',
      type: 'skim',
      summary: 'Six characteristics that make AI test environments differ from conventional: (1) Self-learning — environments must mimic undefined future conditions, requiring creativity and randomness. (2) Autonomy — environments must push systems to boundaries and simulate edge cases for handover scenarios. (3) Multi-agency — must incorporate non-determinism to mimic interactions with other AI agents. (4) Explainability — may need tools embedded in the environment to capture decision explanations. (5) Hardware — AI-specific processors may need to be included. (6) Big data — high-volume/velocity/variety data pipeline setup requires careful planning.'
    },
    {
      id: '10.2',
      title: 'Virtual Test Environments',
      level: 'K2',
      type: 'deep',
      deepPoints: [
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
};
