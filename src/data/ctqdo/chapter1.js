// CT-QDO v1.0 — Chapter 1: Fundamentals of DevOps
// summary/deepPoints from syllabus v1.0 (2026-04-17); examInsights derived from the official sample exam v1.0
export default {
  id: 1,
  title: 'Fundamentals of DevOps',
  time: '140 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "The vocabulary chapter — 10 of the 48 sample questions (incl. appendix) come from here. Memorize the four DORA metrics with their throughput/stability grouping, the CALMS elements, the three ways of DevOps, and the team topologies vs. anti-patterns. These reappear as matching questions and in scenario stems throughout the exam.",
  sections: [
    {
      id: '1.1.1',
      title: 'Key Concepts of DevOps',
      level: 'K1',
      type: 'skim',
      summary: "DevOps = Development and Operations working together to build, deliver, and run software. It is a CULTURE promoting collaboration, communication, and continuous improvement — NOT a framework, standard, role, function, separate team, tool, or goal (DASA). It strongly advocates automation and monitoring at all phases (CI/CD pipelines). Six DASA principles: (1) customer-centric action (short feedback loops with real customers), (2) create with the end in mind (working products delivered to customers), (3) end-to-end responsibility (teams design, build, test, AND run), (4) cross-functional autonomous teams (variety of skills incl. testing), (5) continuous improvement (product, process, people), (6) automate everything you can. Often drawn as an infinity loop: continuous discovery, CI, CD, continuous deployment, release on demand.",
      examInsights: [
        "Q1 KEY — The core principle of DevOps is 'to promote collaboration, communication, and continuous improvement among teams'. Not individual effort, not one team owning the whole SDLC, not business goals over customer needs.",
        "TRAP — DevOps is a culture, not a job title, tool, separate team, or framework. Several risk/pitfall questions build on this."
      ]
    },
    {
      id: '1.1.2',
      title: 'Breaking the Wall of Confusion',
      level: 'K1',
      type: 'skim',
      summary: "The wall of confusion is the metaphorical separation between Dev and Ops in sequential models: Dev wants continuous change (new features), Ops wants stability (few changes). Result: silos with conflicting goals, poor communication, manual processes, inconsistent environments — different mindsets, processes, and tools. DevOps breaks the wall by INTEGRATING the teams to work together, improving communication and collaboration. Leadership must remove inefficient processes and prevent a blame culture via shared responsibility. QA and testing run across both Dev and Ops, making testing a key factor in breaking down the wall. DevOps can also break walls with other silos (security, business analysis, usability).",
      examInsights: [
        "Q2 KEY — The wall is broken by 'integrating teams to work together and increase communication' — NOT by creating a separate QA team (that adds a silo), not by automation alone, and not merely by defining clear roles."
      ]
    },
    {
      id: '1.1.3',
      title: "DORA's Performance Metrics",
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Four DORA delivery-performance metrics in two groups. THROUGHPUT (velocity of making changes): Change lead time — duration from code commit to successful production deployment (short for high performers, reflects delivery-process efficiency); Deployment frequency — how often changes are deployed to production (high for high performers, reflects agility/responsiveness).',
        'STABILITY (quality of changes delivered + ability to fix failures): Change fail percentage — % of deployments causing production failures needing hotfix/rollback (small for high performers, reflects reliability); Failed deployment recovery time — time to recover from a failed deployment (short for high performers, reflects resilience).',
        'High performing teams score well on ALL four — enabled by good QE practices: test automation, CI/CD automation, collaboration, test-first approaches, whole-team approach, well-selected deployment strategies, continuous monitoring.',
        'DORA added RELIABILITY as an indicator of operational performance: availability, latency, performance efficiency, scalability. The four delivery metrics relate to the PROCESS; reliability relates to the software IN USE. QA contributes to reliability via test-first approaches, non-functional testing, chaos engineering, and quality hunting.'
      ],
      examInsights: [
        "Q3 KEY — 'Improve efficiency and reduce delays in successful deployment to production' → CHANGE LEAD TIME (commit → production duration). Don't confuse with deployment frequency (how often) or the two stability metrics.",
        'Q-A1 MATCHING — Group the four metrics: failed deployment recovery time + change fail percentage = stability (quality of changes delivered); deployment frequency + change lead time = throughput (velocity of making changes).',
        'KEY TAKEAWAY: lead time & frequency = throughput/velocity; fail % & recovery time = stability/quality.'
      ]
    },
    {
      id: '1.1.4',
      title: 'Elements of CALMS in the Context of QA',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'CALMS = Culture, Automation, Lean, Measurement, Sharing — a framework to assess an organization’s ability to adopt DevOps and measure transformation success.',
        'Culture: process/technology change alone is not enough — a collaborative, problem-solving culture is essential. Extends Agile: autonomous teams own quality (whole-team approach); testing is NOT outside the DevOps team.',
        'Automation: automate as much as possible in the CI/CD pipeline — build, deployment, provisioning, process automation, static analysis, test automation ("everything as code"). Enables pushing small changes continuously with fast feedback.',
        'Lean: streamline processes and remove waste; continuous improvement is part of lean; test activities must not become bottlenecks for flow — rethink when and how testing is done.',
        'Measurement: actionable metrics on quality and efficiency for decisions about how software is used and how the SDLC works.',
        'Sharing: open culture of discussing challenges/successes, sharing good practices for learning. QA creates information to share (e.g., automated-testing feedback on functionality and testability).',
        'Variant: CALMR in SAFe, where R = recovery.'
      ],
      examInsights: [
        'Q4 MATCHING — Culture = cross-functional team delivers the fully tested feature (team autonomy + ownership of quality). Automation = pipeline stages for all test types in CI/CD. Lean = shift left to prevent release delays from late regression testing (removing bottlenecks/waste). Measurement = consolidated test reports providing insights on product quality.',
        'TRAP — "Shift left to prevent delays" is LEAN (waste removal), not automation. Consolidated reports = MEASUREMENT, not sharing.'
      ]
    },
    {
      id: '1.1.5',
      title: 'The Three Ways of DevOps',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'From "The Phoenix Project": (1) FLOW — smooth movement of work from Dev to Ops; minimize handovers, reduce batch sizes, remove bottlenecks. (2) FEEDBACK LOOP — fast, continuous feedback for early detection/resolution; learn from mistakes. (3) CONTINUOUS LEARNING AND EXPERIMENTATION — culture of improvement, innovation, calculated risk-taking, learning from successes AND failures.',
        'QA in flow: enables smooth code progression through test-first approaches.',
        'QA in feedback: rapid feedback loops via continuous test automation, standardized pre-production environments, and monitoring for real-world usage data.',
        'QA in continuous learning: targeted testing of new features, organized quality events (quality hunting), and comprehensive regression testing.'
      ],
      examInsights: [
        'Q5 (select TWO) — Correct combos: (b) test-first approach → flow, automated tests → feedback, quality hunting → learning; AND (d) automated testing → flow, static analysis → feedback, continuous regression testing → learning.',
        'Q5 TRAP — Wrong options describe sequential thinking: detailed documentation + separate test phase + post-release analysis; manual-only testing; or minimizing tests and relying on developer-only testing.'
      ]
    },
    {
      id: '1.1.6',
      title: 'Benefits, Risks, and Pitfalls of DevOps',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Benefits: assess quality at every phase; capture feedback early and often; deliver on time at lower cost; respond to change faster; recover from production failures faster; better time to market; faster scaling via IaC; better collaboration; less employee stress (frequent small releases); fewer vendor/third-party issues; improved test automation ROI.',
        'Risks/pitfalls: lacking management support; removing/replacing Ops instead of transforming it; REPLACING Agile instead of extending it; believing there is one way to do DevOps; DevOps as a job title only; creating a DevOps team while ignoring change elsewhere; reducing headcount via automation instead of making people more efficient; introducing CI/CD tools only and forgetting cultural change; CI/CD pipeline with little or no test automation; using only automated testing where manual testing would help.',
        'DevOps EXTENDS Agile (autonomy, frequent delivery, early customer feedback) — it does not replace it, and its goal is to unify Dev and Ops, not to define a handover flow between them.'
      ],
      examInsights: [
        'Q6 KEY — True statements: DevOps culture is an extension of Agile; DevOps leads to faster recovery from production failures; focusing only on CI/CD tools neglects the cultural change.',
        "Q6 TRAP — False: 'DevOps may create silos of self-organized teams' (it enhances collaboration) and 'the goal is a flow transferring the product from Dev team to Ops team' (the goal is unifying them, not a handover)."
      ]
    },
    {
      id: '1.2.1',
      title: 'Roles in a DevOps Team',
      level: 'K2',
      type: 'skim',
      summary: "A role is a set of responsibilities and tasks, not necessarily a job title. Core roles in a cross-functional DevOps team: business analyst, developer, tester, operations engineer — often supported by product owner and scrum master. ALL members are responsible for QE. Members pick any task matching their skills, can hold several roles in parallel, and may pair up. Crucially, no knowledge/skill should live with just one member — sharing knowledge lets the team keep functioning when someone is temporarily unavailable. Specialized tasks beyond the team's skills (e.g., platform setup/maintenance) may go to platform teams providing self-service tools and reliable infrastructure. Every work product is handled by at least two members, guaranteed by the review process (e.g., pull requests).",
      examInsights: [
        'Q7 KEY — A cross-functional team minimizes the impact of an unavailable member by SHARING KNOWLEDGE AND SKILLS among members — not by documentation tools, not by assigning specialized tasks to specific members (that creates single points of failure).'
      ]
    },
    {
      id: '1.2.2',
      title: 'Site Reliability Engineering (SRE)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'SRE applies software engineering to IT operations and infrastructure (originates from Google). Primary goal: maintain service reliability by balancing release velocity with stability — via automation, monitoring, and proactive capacity planning. Creates automated feedback loops and uses the feedback to improve.',
        'SLA (service level agreement): binding commitment between customer and supplier on required service levels; helps prioritize efforts and design relevant test cases.',
        'SLO (service level objective): what the system must comply with — target value or range for a service level. SLI (service level indicator): well-defined quantitative measure used to determine whether SLOs are met.',
        'SLIs are measured during development through TESTING and during operations by MONITORING (observability + telemetry). Automated regression test execution measures SLIs at various CI/CD pipeline stages.',
        'Three SRE phases: (1) plan & design the infrastructure (reliability, scalability, security), (2) implement & deploy it (per agreed service level), (3) ongoing operation, maintenance, optimization.'
      ],
      examInsights: [
        "Q8 KEY — SRE contribution example: 'the team creates an automated feedback loop of the system's behaviour in production'. SRE complements DevOps (bridges Dev and Ops); it does not replace DevOps practices, and it prefers automation over exploratory testing in pipelines.",
        'MEMORY AID: SLA = the Agreement, SLO = the Objective/target, SLI = the Indicator/measurement. SLIs prove SLOs, SLOs fulfill SLAs.'
      ]
    },
    {
      id: '1.2.3',
      title: 'DevOps Team Patterns and Anti-patterns',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Team structure depends on: software complexity (higher complexity encourages silos), technical leadership creating a shared Dev+Ops goal, readiness of IT operations to change, and skills to lead the transformation.',
        'Three topologies (patterns, no preference order): (1) Dev and Ops collaboration — smooth cooperation, each team learns the basics of the other, needs a clear shared goal and significant cultural change. (2) Fully shared ops responsibilities — Ops people fully integrated in Dev teams (Facebook/Netflix style); teams that build a feature also run it. (3) SRE team — Google style; Dev teams provide test evidence meeting the SRE team’s standards without direct operational involvement; can easily slip into anti-patterns and silos.',
        'Anti-patterns: (1) Dev and Ops silos — "over the wall" mentality; "done" = feature complete, not released to production. (2) Dev does not need Ops — cloud-era teams believing Ops is unnecessary. (3) DevOps as a tools team — a separate team implements DevOps tooling; lacks integration into everyday development practices.'
      ],
      examInsights: [
        "Q-A2 (select TWO) — Scenario with Dev defining 'done' as code complete and leaving deployment to Ops = DEV AND OPS SILOS; a separate department building CI/CD pipelines without coordination = DEVOPS AS A TOOLS TEAM.",
        'Q-A2 TRAP — Fully shared ops responsibilities and SRE team are valid PATTERNS, not anti-patterns.'
      ]
    }
  ]
};
