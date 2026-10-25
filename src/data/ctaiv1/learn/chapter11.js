// CT-AI v1.0 — Chapter 11 learn content.
// Keywords and learning objectives parsed verbatim from ISTQB CT-AI Syllabus v1.0 (2021);
// section bodies from the syllabus-derived study notes formerly inline in src/pages/ctai.jsx.
export default {
  intro: 'The final chapter flips the perspective: using AI to test software. It categorizes the AI technologies used in testing and covers concrete applications — defect report analysis, test case generation, regression test suite optimization, defect prediction, and AI-driven UI testing.',
  keywords: {
    general: [ 'Visual testing' ],
    aiSpecific: [
      'Bayesian techniques',
      'classification',
      'clustering algorithm',
      'defect prediction',
      'graphical user interface (GUI)'
    ]
  },
  objectives: [
    { id: 'AI-11.1.1', level: 'K2', text: 'Categorize the AI technologies used in software testing' },
    {
      id: 'AI-11.2.1',
      level: 'K2',
      text: 'Explain how AI can assist in supporting the analysis of new defects'
    },
    { id: 'AI-11.3.1', level: 'K2', text: 'Explain how AI can assist in test case generation' },
    {
      id: 'AI-11.4.1',
      level: 'K2',
      text: 'Explain how AI can assist in optimization of regression test suites'
    },
    { id: 'AI-11.5.1', level: 'K2', text: 'Explain how AI can assist in defect prediction' },
    { id: 'AI-11.6.1', level: 'K2', text: 'Explain the use of AI in testing user interfaces' }
  ],
  sections: {
    '11.1': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Three broad categories of AI for testing (Harman's classification):",
            '(1) Fuzzy logic and probabilistic methods: handle real-world probabilistic problems — e.g., Bayesian techniques to estimate probability of component failure or predict potential system failures.',
            '(2) Classification, learning and prediction (ML-based): defect management (11.2), defect prediction (11.5), UI testing (11.6).',
            '(3) Computational search and optimization: solve optimization problems in large/complex search spaces — generating test cases (11.3), minimizing test sets for coverage, optimizing regression test suites (11.4).',
            'AI currently CANNOT do (exam topic — hands-on discussion): specify test oracles; communicate with stakeholders to clarify ambiguities; suggest UX improvements; challenge stakeholder assumptions; understand user needs. These require general AI — not available today.'
          ]
        }
      ]
    },
    '11.2': {
      body: [
        {
          type: 'p',
          text: 'Defect triage/analysis via AI: (1) Categorization — NLP analyzes defect report text to extract topics; clustering algorithms (k-nearest neighbors, SVM) identify categories and highlight duplicates. Especially useful for large projects and automated defect reporting systems (Microsoft Windows, Firefox). (2) Criticality — ML models trained on features of most critical defects to flag high-priority ones. (3) Assignment — ML suggests which developer is best suited to fix a given defect, based on past assignments.'
        }
      ]
    },
    '11.3': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'AI generates tests from: source code, user interface, machine-readable test models, instrumentation, log files.',
            "Key limitation: unless a test model defining required behaviors is used, the tool doesn't know expected results — test oracle problem. Solutions: back-to-back testing with a pseudo-oracle, or simple sanity checks (no crash/unresponsive).",
            'AI-based vs fuzz testing: AI tools achieve equivalent coverage AND find more defects, while reducing the average failure sequence from ~15,000 steps to ~100 steps — making debugging far easier.',
            'Research shows AI-based test generation is significantly more efficient at finding defects than non-AI fuzz testing.'
          ]
        }
      ]
    },
    '11.4': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            'Regression test suites grow over time and become unmanageable. AI tools optimize by selecting, prioritizing, and augmenting test cases.',
            'AI analyzes: previous test results, associated defects, recent code changes, features broken frequently, which tests exercise recently changed code.',
            'Research results: (1) 50% reduction in regression suite size while still detecting most defects. (2) 40% reduction in test execution duration without significant fault detection loss (continuous integration context).',
            'This makes CI/CD pipelines significantly more efficient.'
          ]
        }
      ]
    },
    '11.5': {
      body: [
        { type: 'p', text: undefined },
        {
          type: 'list',
          intro: 'Key points the exam draws on:',
          items: [
            "Defect prediction: predict whether defects are present, how many, or where they're likely to be found — to prioritize testing effort.",
            'Based on: source code metrics, process metrics, people and organizational metrics. So many factors that human analysis is not feasible — AI/ML is necessary.',
            'Most effective when: based on prior experience in a similar context (same codebase, same developers).',
            'Best predictors (research finding): people and organizational measures outperform the commonly used source code metrics (lines of code, cyclomatic complexity).',
            'Use case: components with higher predicted defect density get more testing resources.'
          ]
        }
      ]
    },
    '11.6': {
      body: [
        {
          type: 'p',
          text: 'Two approaches: (1) AI to test THROUGH the GUI: reduces brittleness of scripted automation by using AI to identify correct GUI objects using multiple criteria (XPath, label, id, coordinates) and selecting the most stable one over time. Visual testing uses image recognition to interact directly with the screen — completely non-intrusive, tech-stack independent. (2) AI to test THE GUI: ML models determine if UI screens are acceptable (heuristics + supervised learning). Computer vision compares screenshots to detect unintended changes (layout, position, font, color). Combined: AI regression tools that can flag changes as likely acceptable or requiring human review — useful for cross-browser/platform/device compatibility.'
        }
      ]
    }
  }
};
