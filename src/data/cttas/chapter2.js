// CT-TAS v1.0 — Chapter 2: Test Automation Resources
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 2,
  title: 'Test Automation Resources',
  time: '60 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "4 questions per sample exam. Compare in-house vs vendor vs outsourced ownership, the four licensing models (open source, per user/machine, floating, runtime), the cost factors of a strategy (timeline first, then tools/licenses, hardware, integrations, cloud resources) and who needs which skills (TAE = programming + architecture; an SME drives the concept).",
  sections: [
    {
      id: '2.1.1', title: 'Cost of Ownership of Alternative Technical Solutions', level: 'K2', type: 'deep',
      deepPoints: [
        "IN-HOUSE (custom solution on open-source or commercial tools): all costs, resources, risks and governance inside the organization; no vendor contract — but you need the right TAEs, hired or trained.",
        "VENDOR-BASED: ownership shared per contract; easy if a piloted tool already meets all needs; vendor trains testers, internal SMEs act as product owners. Risk: defect fixes and feature requests need negotiation and time.",
        "OUTSOURCED: the outsourcer owns tools, hardware, staff and costs; define MEASURABLE expectations and metrics in the contract; suits organizations not planning to hire TAEs (short timelines, cost)."
      ],
      examInsights: [
        "A-Q6 KEY — NOT a good argument for outsourcing: your software is very specialized (domain knowledge needed in-house).",
        "ASTQB-Q6 — Organization won't invest in TAEs or tools but needs automation → outsource."
      ]
    },
    {
      id: '2.1.2', title: 'Licensing Model Considerations', level: 'K2', type: 'deep',
      deepPoints: [
        "OPEN SOURCE: no license or maintenance fees, community support, can be modified and republished.",
        "PER USER/MACHINE: commercial; efficient when the number of long-term TAEs is known; volume discounts.",
        "FLOATING: shared among many people at different times on different machines — counted by CONCURRENT use.",
        "RUNTIME: pay only for execution time — cloud-hosted tools, OS/browser matrices, mobile device farms."
      ],
      examInsights: [
        "A-Q7 KEY — Floating license: used by many employees on different systems (concurrency counts).",
        "ASTQB-Q7 — Paying for 10 licenses for 10 TAEs although only 5 use the tool at once = per user/machine (floating would be cheaper)."
      ]
    },
    {
      id: '2.1.3', title: 'Factors When Defining a Test Automation Strategy', level: 'K2', type: 'deep',
      deepPoints: [
        "Crucial factors: time constraints; expertise and number of TAEs; test hardware; tool licenses; adaptability; maintenance; platform support (web, desktop, mobile); CI/CD support; test management integration and reporting.",
        "TIMELINE is the first and most important cost factor (short deadline → a few skilled TAEs; grow the team as the SUT grows).",
        "Budget tools, licenses, hardware, training AND integrations (uploading results to test management, triggering builds).",
        "Cloud on-demand hardware and runtime licenses can cut costs but can backfire (machines left running)."
      ],
      examInsights: [
        "A-Q8 KEY — NOT a cost factor for the strategy: 'number of TASs'.",
        "ASTQB-Q8 — Test management system: budget its interface with the automation tools to update execution results."
      ]
    },
    {
      id: '2.2.1', title: 'Roles and Skills for a Successful TAS', level: 'K2', type: 'deep',
      deepPoints: [
        "TAEs: strong programming and technical architecture knowledge, SDLC knowledge, SUT architecture and dev environment; cooperate with test analysts and stakeholders; prioritize the most impactful test conditions via risk assessment — 100% automation coverage is not achievable.",
        "At least one strong SME (test lead, architect, BA) who knows the business domain and test objectives drives the concept and roadmap; team management and soft skills to train and motivate."
      ],
      examInsights: [
        "A-Q9 KEY — Strengthen the team with candidates who have strong technical knowledge of different SDLCs (and SUT architecture).",
        "ASTQB-Q9 — Programming and technical architecture knowledge is expected of the TAE."
      ]
    }
  ]
};
