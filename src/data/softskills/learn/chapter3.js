// ASTQB CT-SS v1.0 — Chapter 3 learn content, authored from the Soft Skills for Testers syllabus (2025-10-01).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Counterintuitive but true: software testing often has to be SOLD to the project team and management. There is an industry trend to regard testing as a 'nice to have' that users could do. This chapter equips the tester to promote testing's value: understanding risk, the difficulty of testing, quality characteristics, and cost of quality; spotting the opportunities where testing should expand; and building empathy with the user through usability and accessibility.",
  keywords: ["acceptance criteria", "accessibility", "Cost of Quality (CoQ)", "quality characteristics", "testing mindset", "usability", "Web Content Accessibility Guideline (WCAG)"],
  objectives: [
    { id: "SS-3.1.a", level: "K2", text: "Explain the three steps of risk management" },
    { id: "SS-3.1.b", level: "K2", text: "Explain how aligning testing with risk promotes the value of testing" },
    { id: "SS-3.1.c", level: "K2", text: "Summarize the ISO 25010 quality characteristics" },
    { id: "SS-3.1.d", level: "K3", text: "Apply the Cost of Quality formula to a set of defects" },
    { id: "SS-3.1.e", level: "K2", text: "Explain how schedule-driven projects can impact the test effort" },
    { id: "SS-3.2.a", level: "K2", text: "Summarize ways in which testers can close testing gaps" },
    { id: "SS-3.2.b", level: "K2", text: "Explain approaches that can be used when the 'wrong' people are doing the testing" },
    { id: "SS-3.2.c", level: "K2", text: "Explain how SMEs can contribute to a testing effort" },
    { id: "SS-3.2.d", level: "K2", text: "Give examples of how production escapes can highlight the value of testing" },
    { id: "SS-3.2.e", level: "K2", text: "Explain how lifecycles can impact testing" },
    { id: "SS-3.2.f", level: "K2", text: "Summarize the list of people who will need to be involved in an automation solution" },
    { id: "SS-3.3.a", level: "K3", text: "Using the questions in the syllabus, determine the informal usability requirements for a project" },
    { id: "SS-3.3.b", level: "K2", text: "Explain why accessibility is an important requirement" },
  ],
  sections: {
    "3.1.1": {
      objective: "SS-3.1.a",
      body: [
        { type: "list", intro: "Testing is usually not valued because:", items: [
          "The risk of not testing is not understood",
          "The complexity and technical aspects of testing are not understood",
          "The quality characteristics of the software have not been analyzed",
          "The cost of quality is not tracked",
          "The schedule is more important than the long-term cost of ownership",
        ]},
        { type: "list", intro: "All software deployments have risk. Risk should be managed in three steps:", items: [
          "IDENTIFY the risk — all project team members identify risk items. Risk = a factor that could result in future negative consequences (e.g., an invoice calculated incorrectly in an accounting system).",
          "ASSESS the risk — determine the IMPACT if the risk becomes an actual event and the LIKELIHOOD of it happening. This sets the priority for mitigating the risk.",
          "MITIGATE the risk — depending on the assessment, monitor, reduce, or eliminate it. Testing is often used to reduce, if not eliminate, risk items.",
        ]},
        { type: "p", text: "Organizations that do not recognize testing's value usually skip product-level risk identification. A tester can conduct a PRELIMINARY risk analysis (from the testing viewpoint only) and share it — not thorough, but a good starting point proving risk exists and must be addressed. Once risk is recognized, the mitigation approach can be reviewed: individual risks quickly show that a user acceptance test alone cannot accomplish the mitigation needed. Perfect requirements, perfect code, and perfect implementations rarely occur — identifying and highlighting risk introduces reality into the planning, and reality highlights the need for professional testers." },
      ],
    },
    "3.1.2": {
      objective: "SS-3.1.b",
      body: [
        { type: "p", text: "Good software testing requires discipline, technical knowledge, creative thought, excellent communication, and perseverance — the mix makes people who are truly good at it AND want it as a career hard to find. The ISTQB has professionalized testing and provided solid practices and training; universities still lag, so good testers seek their own training via seminars, courses, online learning, and books." },
        { type: "p", text: "Combat the undervaluing daily. Test managers: specify hiring criteria requiring training, experience, and (if appropriate) certification; work with the wider community and host test-practice gatherings. Individual testers: highlight the difficulty by finding interesting, unexpected defects — testing beyond the 'happy path' proves the value of testing." },
        { type: "p", text: "When coverage and findings ALIGN WITH THE RISK ASSESSMENT, the value is highlighted: if the organization agrees risk exists and testing proves risk mitigation in test cases passed and defects found, the value is undeniable. SMEs still add their viewpoint — testing end-to-end business flows with business-process nuance, uncovering defects professionals miss because of the different approach. Valuable testing, but it should not be ALL the testing." },
      ],
    },
    "3.1.3": {
      objective: "SS-3.1.c",
      body: [
        { type: "list", intro: "ISO 25010 defines the quality characteristics used to evaluate software product quality:", items: [
          "Functional Suitability", "Reliability", "Performance Efficiency", "Usability",
          "Security", "Compatibility", "Maintainability", "Portability",
        ]},
        { type: "p", text: "Professional testers include the quality characteristics in the risk assessment — ensuring no major area is missed and highlighting the importance of testing characteristics like usability and performance. Project teams easily assume these areas will 'just work'; professional testers know better and target the testing to mitigate the risks." },
        { type: "p", text: "Testing these characteristics can require special environments, configurations, and skill sets: performance needs a dedicated, production-representative environment with operational profiles for realistic load; security needs an environment with production-equivalent security characteristics (difficult and expensive); formal usability may need labs, scripting and recording, and selected usability testers; accessibility-regulated websites may require certification testing. Because of the added cost and schedule, the team must know EARLY in planning — external specialists may be required (e.g., security). Highlighting these areas shows that testing cannot be an afterthought done by users: it must be planned, budgeted, scheduled, and conducted by professional testers." },
      ],
    },
    "3.1.4": {
      objective: "SS-3.1.d",
      body: [
        { type: "p", text: "One of the easiest ways to justify testing: track and report the COST OF QUALITY. Quality has a cost — it is never free — and testing early is more cost-effective than testing late (such as having only UAT). Cost of quality = the total cost of all quality activities (cost of conformance) + the cost of defects (cost of non-conformance). A simple model tracks only the cost of defects found, with the cost assigned per defect depending on when it was discovered — higher the later it is found." },
        { type: "table", headers: ["Phase found", "Cost assigned per defect"], rows: [
          ["Requirements", "$1"],
          ["Unit Testing", "$10"],
          ["Integration Testing", "$50"],
          ["System Testing", "$100"],
          ["User Acceptance Testing", "$500"],
          ["Production", "$1000"],
        ]},
        { type: "p", text: "Vary the numbers by actual organizational costs. A defect's cost includes finding, reproducing, documenting, fixing, retesting, updating regression tests, and closing it; production defects add help desk cost, fix deployment, and intangibles like loss of goodwill." },
        { type: "p", text: "The promotion argument: show what a defect COULD have cost (caught at the level where it was introduced) versus its ACTUAL cost by when it was found. A defect introduced in requirements but caught in UAT cost $499 more than it should have. Tracking where defects were introduced and caught computes the test team's value in easy-to-understand dollars. With no test team, ALL defects land in UAT or production — every defect caught earlier is money saved. Fuller models add prevention costs: the test team itself, tools, and developer preventative actions such as test-first development." },
        { type: "example", title: "K3 calculation (Q27)", text: "Defect introduced during coding, should have been caught in unit testing ($10), found in production ($1000): it cost $1000 − $10 = $990 MORE than it should have." },
      ],
    },
    "3.1.5": {
      objective: "SS-3.1.e",
      body: [
        { type: "p", text: "Some projects are driven primarily by schedule — particularly when the PM's goal is on-time delivery and subsequent product support is someone else's problem. The motivation is not a quality product but an on-time product; quality takes a back seat, and the cost of quality is borne by the support and maintenance team." },
        { type: "p", text: "Selling testing is hardest here: the project's motivation does not support delivering quality, and testers are likely seen as obstructing progress. The best approach: remain professional, apply good practices, and DUTIFULLY REPORT ALL DEFECTS FOUND. They may not get fixed — they may even be downgraded in priority — but the testing job is to accurately report defects. If they do not get fixed, the job has still been done, and the testers can be proud of their work." },
        { type: "p", text: "Projects with this motivation are usually followed by projects with a much better quality focus. There are times when testers just have to do their job, even unappreciated at the time — in the long run, the work will be respected and valued." },
      ],
    },
    "3.2.1": {
      objective: "SS-3.2.a",
      body: [
        { type: "p", text: "Testers should always be ready to champion opportunities for more testing — rare is the project with enough time and money for testing. The opportunity list: testing not happening at all in some areas; the wrong people doing the testing; busy business SMEs expected to do the bulk of it; production escapes; an inefficient product lifecycle; test automation not used effectively." },
        { type: "p", text: "Testing gaps commonly appear when the test team missed the initial test analysis. If available, trace back through identified risks and test conditions to check coverage. Otherwise, combine the REQUIREMENTS and the QUALITY CHARACTERISTICS to determine what needs covering — and review the requirements with their author (the BA) to identify and document acceptance criteria, which convert to test conditions and targeted test cases." },
        { type: "p", text: "Joining a project already in progress is one of the hardest environments — inadequate planning forces reactive mode, and reactive mode leaves gaps. The trace-back process feels like backward progress but saves significant time by eliminating redundant testing and focusing on the highest-risk areas. Some areas were skipped because environments or data were unavailable: work with system administrators and data analysts (using chapter-1 soft skills) — maybe a smaller data set works; maybe an analyst builds new data rather than importing production data." },
        { type: "p", text: "No one intends to leave gaps — they arise from insufficient knowledge of the software, missing skills (e.g., security testing), or lack of time. Gaps may be ACCEPTABLE as long as the lack of coverage is acknowledged and the resulting risk is consciously accepted by the team." },
      ],
    },
    "3.2.2": {
      objective: "SS-3.2.b",
      body: [
        { type: "p", text: "Sometimes the testing happens, but not by the right people. Expecting developers to do all the integration testing is rarely best: it is difficult for a developer to test their own work — they lack objectivity and a TESTING MINDSET. A well-intentioned user still emphasizes the positive path and end-to-end flows rather than exploring error scenarios and background processing." },
        { type: "p", text: "Recognize that the current testing is being done with the best intentions — people are often forced into a testing role with little experience beyond using the software. Their testing has value; it just leaves gaps. Review WHAT has been tested with the person doing it, asking thoughtful questions about unconsidered areas (batch processing?) to build a gap list." },
        { type: "p", text: "Redirect skills to best use: a willing developer → unit testing, unit integration testing, and building test automation into the release pipeline for continuous testing; a business user → UAT and advising on acceptance criteria; FUNCTIONAL testing → professional testers where possible. Non-testers also produce non-standard documentation: defect reports missing information, wrong priorities. Instruct them on the tools, correct documentation, and expected follow-up — do not discourage willing non-testers; train and focus them where they contribute best." },
      ],
    },
    "3.2.3": {
      objective: "SS-3.2.c",
      body: [
        { type: "p", text: "SMEs assigned to help with testing usually still have their day job — significant time pressure. Have a FRANK discussion about how much time they can devote and how their schedule works (one day a week? afternoons only?) to set expectations about what and how much they can do." },
        { type: "list", intro: "SMEs hold business insight testers lack. When time is tight, they may not be able to write test cases or defect reports or execute tests — but they can still be well employed:", items: [
          "Reviewing and prioritizing test conditions",
          "Reviewing test cases",
          "Validating test data",
          "Explaining roles and access rights",
          "Reviewing test case results for accuracy",
          "Prioritizing defect reports",
        ]},
        { type: "p", text: "These tasks leverage the SME's unique business knowledge, take less time, and can be done at a time (and pace) convenient to the SME. Leveraging their knowledge while respecting their time keeps SMEs amenable to helping — they lend their knowledge when they know it is appreciated." },
      ],
    },
    "3.2.4": {
      objective: "SS-3.2.d",
      body: [
        { type: "p", text: "Defects reaching production are one of the most effective awareness-raisers for insufficient testing. Beyond the cost, an escape invites FORENSIC ANALYSIS: how was each issue missed, and how could testing be enhanced to close the gap in the future?" },
        { type: "p", text: "Testers may crave an 'I told you so' moment — particularly when the team was warned about exactly this risk — but that is an unprofessional response to an already problematic situation. The test team needs to be seen as part of the immediate solution AND the long-term solution." },
        { type: "p", text: "Production escapes also let you update the Cost of Quality figures with ACTUAL data: everyone knows a production defect is bad, but pointing at a particular issue and its actual cost makes everyone understand and respect the defect-cost numbers. Use the information to promote testing's role in risk reduction — the organization learns, and testing becomes an important part of every project." },
      ],
    },
    "3.2.5": {
      objective: "SS-3.2.e",
      body: [
        { type: "p", text: "Organizations embrace lifecycles to meet goals — faster releases, lower costs, better business inclusion — but a lifecycle implemented incorrectly produces chaos. Agile de-emphasizes the tester role and encourages the whole team to own quality; good in theory, but removing the test organization can mean NO ONE focuses on quality." },
        { type: "p", text: "Test-driven development and some DevOps forms emphasize testing as early as possible — a great approach that significantly reduces late-pipeline defects, but it must be implemented correctly with time allowed for developing test assets early, because there is not sufficient time budgeted for testing after development completes." },
        { type: "p", text: "Any lifecycle can work if implemented correctly and embraced by the team. Lifecycle changes are often made because the old one 'was not working' — but that is usually incorrect implementation or missing participation, and the change will not magically fix it. Less system-level testing does NOT mean testers are unneeded: testers AUDIT that upstream testing actually occurs with sufficient coverage. Developers writing unit tests first will see coverage drop if they stop updating tests as code grows; in-pipeline tests in continuous models go stale as integrations accumulate. Where automation is required, the team balance shifts toward test engineers who develop and maintain it — but manual testing always remains. Whatever the lifecycle: efficiency needs good communication — testers talking freely with developers about who tests what, possibly sharing automation frameworks for a fluid pipeline." },
      ],
    },
    "3.2.6": {
      objective: "SS-3.2.f",
      body: [
        { type: "p", text: "Test automation can be critical for early and repeated testing, particularly in continuous testing models — but development and implementation are time-consuming and costly, so communicate clearly with the wider team to get everyone on board. Developers must agree with tool selection and integration into automation they may have built; project managers must agree WHO BEARS THE COST (the current project or long-term maintenance); other testers must understand how manual testing will work with the automation." },
        { type: "list", intro: "Support to build when planning an automation effort:", items: [
          "Other testers and the maintenance team — to reduce repetitive testing",
          "Developers — to automate the release pipeline and quality gates",
          "The maintenance team — for long-term usage and maintenance, particularly for SaaS products with forced releases",
          "The business — for automated testing of critical business processes to reduce the repeated UAT burden",
        ]},
        { type: "p", text: "Treat any test automation effort as a FULL DEVELOPMENT PROJECT with its own design, implementation, and testing phases. Involving the team during each phase ensures buy-in and long-term usage." },
      ],
    },
    "3.3.1": {
      objective: "SS-3.3.a",
      body: [
        { type: "p", text: "Users expect software to work reliably and have little interest in testing beyond basic end-to-end checks. Usability requirements are rarely clearly documented — usually vague references like 'must be user-friendly'. Only the USERS can define 'friendly', usually aligned with their normal usage. Working closely with users on test cases, usage, and defect priorities builds the relationship that reveals usability needs." },
        { type: "list", intro: "The informal usability questions:", items: [
          "Can the user figure out what to do?",
          "Is there help text or some other assistance for the user?",
          "Does the software do what the user NEEDS it to do?",
          "Are there extra steps that are not needed or are not logical?",
          "Does the UI help the user?",
          "Are the colors/layouts/workflow as expected by the user?",
        ]},
        { type: "p", text: "Working with users builds trust — they understand the tester is on their side. Improvement suggestions get filed in the defect tracking system to improve overall usability; functional testing also benefits from knowing how users actually use the system. Usability defects are often contentious — developers may consider usability an opinion rather than a requirement. In the absence of clear requirements, trust professional judgment and user input; when in doubt, DOCUMENT usability issues as defects or improvement suggestions — even if not fixed this release, fixes can land in future ones." },
      ],
    },
    "3.3.2": {
      objective: "SS-3.3.b",
      body: [
        { type: "p", text: "Accessibility is a component of usability with the goal that software be usable by ALL potential users. Accessibility requirements are often driven by LEGISLATION stating that a certain level of accessibility must be achieved — frequently dependent on a Web Content Accessibility Guidelines (WCAG) assessment: the widely accepted international standard, with conformance levels (A, AA, AAA). Local accessibility requirements may also apply." },
        { type: "p", text: "Accessibility testing mitigates the risk of violations that may result in LAWSUITS when software is not compliant with applicable standards and regulations. Because accessibility requirements are usually stated more clearly than usability requirements, less interaction is needed to know what to test; interaction with developers happens when issues are found — and since the testing is clearly specified and defects often classified as high-risk, there are fewer issues with resolutions. State each defect clearly WITH a reference to the part of the standard not being met." },
        { type: "p", text: "Accessibility testing is an opportunity to sell the value of testing: some products cannot go live without the right conformance level, making testing a critical component of product release. Every opportunity to highlight testing's importance helps 'sell' testing." },
      ],
    },
  },
};
