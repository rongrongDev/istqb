// CT-AI v1.0 — Chapter 11: Using AI for Testing
// Extracted from the former inline data in src/pages/ctai.jsx (authored from ISTQB CT-AI Syllabus v1.0)
export default {
  id: 11,
  title: 'Using AI for Testing',
  time: '195 min',
  color: '#1E40AF',
  bg: '#EFF6FF',
  overview: 'Covers how AI improves the testing process itself. Three AI categories for testing (11.1) form the organizing framework. Test case generation (11.3), regression optimization (11.4), and defect prediction (11.5) are the most exam-important. Defect analysis (11.2) and UI testing (11.6) can be reviewed more quickly.',
  sections: [
    {
      id: '11.1',
      title: 'AI Technologies for Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Three broad categories of AI for testing (Harman's classification):",
        '(1) Fuzzy logic and probabilistic methods: handle real-world probabilistic problems — e.g., Bayesian techniques to estimate probability of component failure or predict potential system failures.',
        '(2) Classification, learning and prediction (ML-based): defect management (11.2), defect prediction (11.5), UI testing (11.6).',
        '(3) Computational search and optimization: solve optimization problems in large/complex search spaces — generating test cases (11.3), minimizing test sets for coverage, optimizing regression test suites (11.4).',
        'AI currently CANNOT do (exam topic — hands-on discussion): specify test oracles; communicate with stakeholders to clarify ambiguities; suggest UX improvements; challenge stakeholder assumptions; understand user needs. These require general AI — not available today.'
      ]
    },
    {
      id: '11.2',
      title: 'Using AI to Analyze Reported Defects',
      level: 'K2',
      type: 'skim',
      summary: 'Defect triage/analysis via AI: (1) Categorization — NLP analyzes defect report text to extract topics; clustering algorithms (k-nearest neighbors, SVM) identify categories and highlight duplicates. Especially useful for large projects and automated defect reporting systems (Microsoft Windows, Firefox). (2) Criticality — ML models trained on features of most critical defects to flag high-priority ones. (3) Assignment — ML suggests which developer is best suited to fix a given defect, based on past assignments.'
    },
    {
      id: '11.3',
      title: 'Using AI for Test Case Generation',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'AI generates tests from: source code, user interface, machine-readable test models, instrumentation, log files.',
        "Key limitation: unless a test model defining required behaviors is used, the tool doesn't know expected results — test oracle problem. Solutions: back-to-back testing with a pseudo-oracle, or simple sanity checks (no crash/unresponsive).",
        'AI-based vs fuzz testing: AI tools achieve equivalent coverage AND find more defects, while reducing the average failure sequence from ~15,000 steps to ~100 steps — making debugging far easier.',
        'Research shows AI-based test generation is significantly more efficient at finding defects than non-AI fuzz testing.'
      ]
    },
    {
      id: '11.4',
      title: 'Using AI for Optimization of Regression Test Suites',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Regression test suites grow over time and become unmanageable. AI tools optimize by selecting, prioritizing, and augmenting test cases.',
        'AI analyzes: previous test results, associated defects, recent code changes, features broken frequently, which tests exercise recently changed code.',
        'Research results: (1) 50% reduction in regression suite size while still detecting most defects. (2) 40% reduction in test execution duration without significant fault detection loss (continuous integration context).',
        'This makes CI/CD pipelines significantly more efficient.'
      ]
    },
    {
      id: '11.5',
      title: 'Using AI for Defect Prediction',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        "Defect prediction: predict whether defects are present, how many, or where they're likely to be found — to prioritize testing effort.",
        'Based on: source code metrics, process metrics, people and organizational metrics. So many factors that human analysis is not feasible — AI/ML is necessary.',
        'Most effective when: based on prior experience in a similar context (same codebase, same developers).',
        'Best predictors (research finding): people and organizational measures outperform the commonly used source code metrics (lines of code, cyclomatic complexity).',
        'Use case: components with higher predicted defect density get more testing resources.'
      ]
    },
    {
      id: '11.6',
      title: 'Using AI for Testing User Interfaces',
      level: 'K2',
      type: 'skim',
      summary: 'Two approaches: (1) AI to test THROUGH the GUI: reduces brittleness of scripted automation by using AI to identify correct GUI objects using multiple criteria (XPath, label, id, coordinates) and selecting the most stable one over time. Visual testing uses image recognition to interact directly with the screen — completely non-intrusive, tech-stack independent. (2) AI to test THE GUI: ML models determine if UI screens are acceptable (heuristics + supervised learning). Computer vision compares screenshots to detect unintended changes (layout, position, font, color). Combined: AI regression tools that can flag changes as likely acceptable or requiring human review — useful for cross-browser/platform/device compatibility.'
    }
  ]
};
