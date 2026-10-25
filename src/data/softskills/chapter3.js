// ASTQB CT-SS (Soft Skills for Testers) v1.0 — Chapter 3: Promoting the Value of Testing
// summary/deepPoints from syllabus v1.0 (2025-10-01); examInsights derived from the official sample exam
export default {
  id: 3,
  title: 'Promoting the Value of Testing',
  time: '4 hrs 45 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "12 of the 40 exam questions (14 of 45 points, incl. two 2-point K3s: the Cost of Quality calculation and the usability questions). Memorize the three risk-management steps, the eight ISO 25010 quality characteristics, the CoQ phase-cost table and its delta arithmetic, the six testing opportunities, the SME task list, and the six informal usability questions — every one of these is directly examined.",
  sections: [
    {
      id: '3.1.1',
      title: 'Risk',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Testing is often unvalued because: the risk of not testing is not understood; the complexity of testing is not understood; quality characteristics were never analyzed; cost of quality is not tracked; and schedule outweighs long-term cost of ownership.',
        'Risk management in three steps: IDENTIFY the risk (whole team; risk = a factor that could result in future negative consequences — e.g., an invoice calculated incorrectly); ASSESS the risk (impact if it becomes an event × likelihood — sets mitigation priority); MITIGATE the risk (monitor, reduce, or eliminate — testing commonly reduces or eliminates risk items).',
        'Organizations that do not value testing usually skip product-level risk identification. A tester can run a PRELIMINARY risk analysis (testing-viewpoint-only) and share it — a starting point proving risk exists and must be addressed. Once risk is recognized, it becomes clear a user acceptance test alone cannot deliver the mitigation level needed.',
        'Teams assume the software will just work — history proves otherwise. Identifying and highlighting risk introduces reality into planning; reality highlights the need for professional testers.'
      ],
      examInsights: [
        'Q24 KEY — The purpose of ASSESSING a risk = "to assign the likelihood and impact". Identification finds it; mitigation handles it.',
        'Q25 KEY — Business-process checklists without risk: "the business processes should be assigned risk so that testing can proceed in an order that mitigates the highest risk processes first".'
      ]
    },
    {
      id: '3.1.2',
      title: 'Testing is Hard',
      level: 'K2',
      type: 'skim',
      summary: "Good testing requires discipline, technical knowledge, creative thought, excellent communication, and perseverance — people who are truly good at it AND want it as a career are rare. The ISTQB professionalized testing, but universities lag; good testers self-train via seminars, courses, online learning, and books. Combat the undervaluing daily: test managers set hiring criteria requiring training/experience/certification; individual testers highlight difficulty by finding interesting, unexpected defects — testing beyond the 'happy path' proves value. Aligning coverage and findings with the risk assessment makes the value undeniable (risk mitigation in tests passed + defects found). SMEs still add value testing end-to-end business flows with business nuance — valuable testing, but it should not be ALL the testing.",
      examInsights: [
        'KEY — Value proof = risk-aligned coverage + beyond-happy-path defects. SMEs complement, never replace, professional testers.'
      ]
    },
    {
      id: '3.1.3',
      title: 'Testing the Quality Characteristics',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'The eight ISO 25010 quality characteristics: Functional Suitability, Reliability, Performance Efficiency, Usability, Security, Compatibility, Maintainability, Portability.',
        'Professional testers include the quality characteristics in the risk assessment — no major area gets missed, and usability/performance testing gets visibility. Teams assume these areas "will just work"; professionals know better and target testing to mitigate the risks.',
        'Testing them can need special environments, configurations, and skills: performance needs a production-representative environment and operational profiles for realistic load; security needs production-equivalent security characteristics (difficult, expensive); formal usability may need labs, scripting/recording, selected usability testers; accessibility may need certification testing.',
        'Because of the extra cost and schedule, the team must know EARLY in planning; external specialists may be required (e.g., security). Highlighting these areas shows testing cannot be an afterthought done by users — it must be planned, budgeted, scheduled, and done by professionals.'
      ],
      examInsights: [
        'Q26 KEY — ISO 25010 characteristic: FUNCTIONAL SUITABILITY. Traps: "Explainability" is an AI quality characteristic, not ISO 25010; Precision and Transparency are made up.'
      ]
    },
    {
      id: '3.1.4',
      title: 'Cost of Quality',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Cost of quality = total cost of all quality activities (cost of CONFORMANCE) + cost of defects (cost of NON-CONFORMANCE). A simple model tracks only the cost of defects found, with cost rising the later a defect is found.',
        'Example phase costs: Requirements $1 · Unit Testing $10 · Integration Testing $50 · System Testing $100 · UAT $500 · Production $1000 (calibrate to actual organizational costs). Defect cost covers finding, reproducing, documenting, fixing, retesting, regression updates, and closing; production adds help desk, fix deployment, and loss of goodwill.',
        'The promotion argument: compare what a defect COULD have cost (caught at the level where it was introduced) vs its ACTUAL cost. A requirements defect caught in UAT cost $499 more than it should have. Track where introduced + where caught → compute the value the test team provides in dollars.',
        'Without a test team, all defects land in UAT or production — every defect caught earlier is money saved. Fuller models add prevention costs: the test team itself, tools, developer preventative actions like test-first development.'
      ],
      examInsights: [
        'Q27 (K3, 2pts) — Defect introduced in coding, should have been caught in unit testing ($10), found in production ($1000) → it cost $990 MORE than it should have. The trap answers forget to subtract the $10.'
      ]
    },
    {
      id: '3.1.5',
      title: 'Schedule Over Quality',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Some projects are driven purely by schedule — typically when the PM\'s goal is on-time delivery and support is someone else\'s problem. Quality takes a back seat; the cost of quality lands on the maintenance team.',
        'Selling testing is hardest here: the project\'s motivation does not support quality, and testers look like obstruction. Best approach: remain professional, apply good practices, and DUTIFULLY REPORT ALL DEFECTS FOUND. They may be downgraded and never fixed — but the testing job is accurate reporting, and that job has still been done.',
        'Schedule-first projects are usually followed by projects with a much better quality focus. Sometimes testers just do their job, unappreciated at the time; in the long run the work is respected and valued.'
      ],
      examInsights: [
        'Q28 KEY — Half the needed schedule, risks traced, nothing changeable → "execute the test cases in risk priority order and track residual risks and unresolved defects to highlight quality risks". Refusing to test, borrowing developers, or deleting test cases all fail.'
      ]
    },
    {
      id: '3.2.1',
      title: 'Testing Gaps',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Gaps appear when the test team missed the initial test analysis. If available, trace risks → test conditions → coverage. Without that, combine the REQUIREMENTS and the QUALITY CHARACTERISTICS to determine what needs covering; reviewing requirements with the author (BA) helps capture acceptance criteria → test conditions → targeted test cases.',
        'Joining a project mid-flight forces reactive mode — and reactive mode leaves gaps. The trace-back process eliminates redundant testing and focuses on the highest-risk areas.',
        'Some areas were skipped because environment or data was unavailable — work with system administrators and data analysts using the chapter-1 soft skills. Maybe a smaller data set works; maybe an analyst builds fresh data instead of importing production data.',
        'Gaps happen through missing knowledge, missing skills (e.g., security testing), or missing time. Gaps may be ACCEPTABLE — if the lack of coverage is acknowledged and the resulting risk is consciously accepted by the team.'
      ],
      examInsights: [
        'Q29 KEY — Good requirements, no risk analysis, no prioritization → review the REQUIRED QUALITY CHARACTERISTICS (ISO 25010) to guide testing and close gaps.'
      ]
    },
    {
      id: '3.2.2',
      title: 'Right Testing, Wrong People',
      level: 'K2',
      type: 'skim',
      summary: "Sometimes testing happens but the wrong people do it: developers doing all integration testing lack objectivity and a TESTING MINDSET; well-intentioned users emphasize the positive path and end-to-end flows, missing error scenarios and background processing. Recognize the good intentions — review WHAT has been tested with them, ask thoughtful questions (why no batch processing?), and build a gap list. Redirect skills: a willing developer → unit and unit-integration testing, pipeline automation; a business user → UAT and acceptance criteria advice; functional testing → professional testers where possible. Non-testers also need instruction on tools, documentation standards, and follow-up expectations — train and focus them, do not discourage them.",
      examInsights: [
        'KEY — Developers testing their own work = no objectivity; users = happy-path bias. Redirect, train, and keep functional testing with professionals.'
      ]
    },
    {
      id: '3.2.3',
      title: 'Busy SMEs',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'SMEs assigned to testing still have their day job — have a frank discussion about how much time they can devote and how their schedule works (one day a week, afternoons only). That sets expectations for what and how much they can do.',
        'SMEs hold business insight testers lack — leverage it with LOW-TIME tasks: reviewing and prioritizing test conditions; reviewing test cases; validating test data; explaining roles and access rights; reviewing test case results for accuracy; PRIORITIZING DEFECT REPORTS.',
        'These tasks use the SME\'s unique knowledge, are less time-consuming, and can happen at times convenient to the SME. Leverage their knowledge while respecting their time — appreciated SMEs stay amenable to helping.'
      ],
      examInsights: [
        'Q30 KEY — Best use of an SME\'s time: PRIORITIZING DEFECT REPORTS — only they fully know the business impact of a defect. Not writing/executing tests, not code reviews, not environment configuration.'
      ]
    },
    {
      id: '3.2.4',
      title: 'Production Escapes',
      level: 'K2',
      type: 'skim',
      summary: "Defects reaching production are costly AND highlight that testing was not sufficient — an opportunity for forensic analysis: how was each issue missed, and how could testing close the gap next time? Resist the 'I told you so' moment (unprofessional); the test team must be part of the immediate AND long-term solution. Production escapes also let you update the Cost of Quality figures with ACTUAL data — pointing at a real issue and its real cost makes everyone respect the defect-cost numbers. Use escapes to promote testing's role in risk reduction so the organization learns.",
      examInsights: [
        'Q31 KEY — Production defects promote testing because "they can highlight that testing was not sufficient" (time or resource constraints). They do not prove resources would have eliminated all issues, that the PM was wrong, or that unit testing was wasted.'
      ]
    },
    {
      id: '3.2.5',
      title: 'Inefficient Product Lifecycle',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Lifecycles serve goals (faster releases, lower cost, business inclusion) — but a badly implemented lifecycle is chaos. Agile de-emphasizes the tester role and says the WHOLE TEAM owns quality; in practice, removing the test organization can mean NO ONE focuses on quality.',
        'Test-driven development and some DevOps forms shift testing early — great, IF implemented correctly with time budgeted for early test-asset development, because there is no time for after-development testing.',
        'Any lifecycle works if implemented correctly and embraced. Lifecycle changes made because "the old one didn\'t work" usually fail for the same root causes: wrong implementation, missing participation.',
        'Less system-level testing ≠ no testers: testers AUDIT that upstream testing actually happens with sufficient coverage. Unit tests decay if not updated with new code; in-pipeline tests go stale as integrations grow. Automation-required lifecycles shift the balance toward test engineers, but manual testing always remains. Efficiency requires open tester–developer communication and possibly shared automation frameworks.'
      ],
      examInsights: [
        'Q32 KEY — In an Agile lifecycle, quality is owned by THE WHOLE TEAM — not developers, testers, or the PM alone.'
      ]
    },
    {
      id: '3.2.6',
      title: 'Test Automation Use',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Automation is critical for early and repeated testing (continuous testing models) but is time-consuming and costly — communicate clearly so everyone is on board.',
        'Who must be involved: DEVELOPERS agree on tool selection and integration with their own automation; PROJECT MANAGERS agree on WHO BEARS THE COST (current project vs long-term maintenance); OTHER TESTERS understand how manual testing works with the automation; the MAINTENANCE TEAM supports long-term usage (especially SaaS with forced releases); the BUSINESS supports automating critical processes to reduce repeated UAT burden.',
        'Treat any automation effort as a FULL DEVELOPMENT PROJECT with its own design, implementation, and testing phases — involving the team in each phase builds buy-in and long-term usage.'
      ],
      examInsights: [
        'Q33 KEY — PMs are involved in automation decisions "to allocate the cost of the effort" (current project vs maintenance). Tool choice is technical; supervision is the test manager\'s job.'
      ]
    },
    {
      id: '3.3.1',
      title: 'Usability',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Usability requirements are rarely documented beyond "must be user-friendly" — only USERS can define "friendly", usually aligned with their normal usage. Working with users on test cases, usage, and defect priorities builds the relationship that reveals usability needs.',
        'The six informal usability questions: Can the user figure out what to do? Is there help text or other assistance? Does the software do what the user NEEDS it to do? Are there extra steps that are not needed or not logical? Does the UI help the user? Are the colors/layouts/workflow as expected by the user?',
        'Working with users builds trust ("the tester is on our side"); improvement suggestions get filed into the defect tracking system; functional testing benefits from knowing real usage.',
        'Usability defects are contentious — developers may call usability "opinion". Absent clear requirements, trust professional judgment and user input; when in doubt, DOCUMENT usability issues as defects or improvement suggestions — even if unfixed this release, they feed future ones.'
      ],
      examInsights: [
        'Q34 (K3, 2pts) — App passes ease-of-use checks but fails UAT over MISSING CRITICAL REPORTS → the unasked question was "does the software do what the user NEEDS it to do?" — missing functionality, not cosmetics.'
      ]
    },
    {
      id: '3.3.2',
      title: 'Accessibility',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Accessibility is a component of usability with the goal that software be usable by ALL potential users. Requirements are often driven by LEGISLATION, frequently via a Web Content Accessibility Guidelines (WCAG) assessment — the widely accepted international standard, with conformance levels A, AA, AAA. Local requirements may also apply.',
        'Accessibility testing mitigates the risk of violations that can result in LAWSUITS. Because accessibility requirements are stated more clearly than usability requirements, less interaction is needed to know what to test; interaction with developers happens when issues are found, and since defects are often high-risk and clearly specified, resolutions are less contested.',
        'State each defect clearly WITH a reference to the part of the standard not being met.',
        'Accessibility is a selling opportunity: some products cannot go live without the right conformance level — making testing a critical component of release.'
      ],
      examInsights: [
        'Q35 KEY — Best standard to guide accessibility testing for international web software = WCAG. ISO 25010 is quality characteristics; GDPR is privacy; "IEEE 9003-2021" is a distractor.'
      ]
    }
  ]
};
