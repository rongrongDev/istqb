// CT-PT (2018) — Chapter 5: Tools
// summary/deepPoints from syllabus v2018; examInsights from ISTQB Sample Exam A v1.3 and the ASTQB 2019 sample exam
export default {
  id: 5,
  title: 'Tools',
  time: '90 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "3 questions per sample exam. Know the three tool types (LOAD GENERATOR — simulates users per operational profiles and collects metrics; LOAD MANAGEMENT CONSOLE — start/stop, aggregate, report; MONITORING TOOL — supervise components, root cause, production), the three license models (seat/site, cloud pay-as-you-go, open source) and the four suitability factors (compatibility, scalability, understandability, monitoring).",
  sections: [
    {
      id: '5.1', title: 'Tool Support', level: 'K2', type: 'deep',
      deepPoints: [
        "LOAD GENERATORS: via IDE/script editor create and execute many client instances simulating users per the OPERATIONAL PROFILES, causing load and collecting metrics; mimic reality with multiple POINTS OF PRESENCE (distributed origins) — realistic, though extra network hops can skew results.",
        "LOAD MANAGEMENT CONSOLE: START and STOP load generators, AGGREGATE metrics from transactions, view reports and graphs, support analysis.",
        "MONITORING TOOLS: run concurrently, supervise/record/analyze behavior (web server queues, memory, disk) → ROOT CAUSE analysis; usable in production after release and on the load generator itself.",
        "License models: traditional SEAT/SITE (full ownership), cloud PAY-AS-YOU-GO, OPEN SOURCE (free in a defined environment or via cloud offerings) — different cost structures and maintenance; any tool needs training time and budget."
      ],
      examInsights: [
        "A-Q38 / A-Q39 KEY — A load generator simulates user behavior according to the operational profiles; pay-as-you-go = pay only for the virtual users and instances you use.",
        "ASTQB-Q38/Q39 — Load generator scripts are based on the operational profiles; the load management console starts and stops tests."
      ]
    },
    {
      id: '5.2', title: 'Tool Suitability', level: 'K4', type: 'deep',
      deepPoints: [
        "Tools are chosen for the ORGANIZATION, not just one project.",
        "COMPATIBILITY: PROTOCOLS used and tested; interfaces to external components/tools (e.g. CI integration); PLATFORMS and versions hosting the tool and those it monitors or loads.",
        "SCALABILITY: total concurrent user simulations — max licenses, load generator workstation/server requirements, load from multiple points of presence.",
        "UNDERSTANDABILITY: technical knowledge needed — unskilled testers misconfigure tests and get inaccurate results; complex scenarios need skills and training.",
        "MONITORING: is the tool's monitoring sufficient, supplemented by others, CORRELATED to the defined transactions? Separate monitoring stacks can monitor production later."
      ],
      examInsights: [
        "A-Q40 KEY (K4) — Even with good monitoring offered, verify the tool meets your requirements for protocols/compatibility (and the other factors) before selecting.",
        "ASTQB-Q40 — Cloud simulators suit the phone load, but emulators or real devices are still needed for some testing — not 'all performance testing' in cloud simulators."
      ]
    }
  ]
};
