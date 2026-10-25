// CTFL v4.0 — Chapter 6: Test Tools
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 6,
  title: 'Test Tools',
  time: '20 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: 'The shortest chapter — exactly 2 of the 40 questions, one per section. Learn the eight tool categories well enough to match a description to a category, and the benefit/risk lists of test automation well enough to spot which is which. Easy points if you skim this right before the exam.',
  sections: [
    {
      id: '6.1',
      title: 'Tool Support for Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'TEST MANAGEMENT tools — process efficiency: manage the SDLC, requirements, tests, defects, configuration.',
        'STATIC TESTING tools — support reviews and static analysis.',
        'TEST DESIGN AND IMPLEMENTATION tools — generate test cases, test data, test procedures.',
        'TEST EXECUTION AND COVERAGE tools — automated execution + coverage measurement.',
        'NON-FUNCTIONAL TESTING tools — non-functional testing that is difficult/impossible manually (performance, load).',
        'DEVOPS tools — delivery pipeline, workflow tracking, automated builds, CI/CD.',
        'COLLABORATION tools — facilitate communication.',
        'SCALABILITY/DEPLOYMENT-STANDARDIZATION tools — virtual machines, containerization.',
        'ANY tool assisting testing counts — even a spreadsheet.'
      ],
      examInsights: [
        'A-Q39 — A test DATA preparation tool supports test design and test implementation.',
        'B-Q39 / D-Q39 MATCHING — "Workflow tracking + CI/CD" = DevOps tools; "communication" = collaboration; "manage requirements/tests/defects" = test management; "VMs/containers" = scalability & deployment standardization.',
        'C-Q39 — Organizing test cases, tracking defect status, requirements traceability = test MANAGEMENT tools.'
      ]
    },
    {
      id: '6.2',
      title: 'Benefits and Risks of Test Automation',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Acquiring a tool ≠ success: introduction, maintenance, and training effort is required; risks need analysis and mitigation.',
        'BENEFITS: time saved on repetitive manual work (regression runs, re-entering data, comparing expected vs actual, coding-standard checks); prevention of simple human errors via consistency/repeatability; more objective assessment (coverage) and measures too complicated for humans; easier access to testing information (statistics, graphs, aggregated progress/failure/duration data); reduced execution times → earlier defect detection, faster feedback, faster time to market; more tester time for designing new, deeper, more effective tests.',
        'RISKS: unrealistic expectations (functionality, ease of use); inaccurate estimates of introduction/maintenance/process-change costs; using a tool when manual testing is more appropriate; over-reliance (ignoring human critical thinking); vendor dependency (bankruptcy, retirement, sale, poor support); abandoned open-source or frequent forced updates; tool incompatible with the development platform; unsuitable tool violating regulatory requirements/safety standards.'
      ],
      examInsights: [
        'One question per exam (A-Q40, B-Q40, C-Q40, D-Q40) — always "which is a benefit?" or "which is a risk?". The trap options flip a benefit into the wrong list.',
        'BENEFITS to recognize: consistency/repeatability preventing human error; coverage measures too complicated for humans; reduced execution time.',
        'RISKS to recognize: maintenance effort underestimated; platform incompatibility; vendor dependency; over-reliance on the tool.'
      ]
    },
  ],
};
