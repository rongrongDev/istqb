// ASTQB CT-SS v1.0 — Chapter 2 learn content, authored from the Soft Skills for Testers syllabus (2025-10-01).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A big part of a tester's effective communication is writing clear, concise, professional documentation — plans, strategies, reports, test cases, and defect reports. The professionalism of the test team is strongly reflected in the professionalism of its documentation. This chapter covers the general business-writing rules, applies them to each testing document type, and finishes with how to communicate in the meetings testers attend.",
  keywords: ["priority", "severity", "standup meetings", "tags", "test management tools", "urgency"],
  objectives: [
    { id: "SS-2.1.a", level: "K3", text: "For a given passage of text, apply good business writing practices to find errors" },
    { id: "SS-2.1.b", level: "K2", text: "Explain how versioning can be important for test artifacts" },
    { id: "SS-2.1.c", level: "K2", text: "Explain the differences in purpose and level of detail between a test strategy and a test plan" },
    { id: "SS-2.1.d", level: "K2", text: "Explain the purpose of a test strategy and a test plan" },
    { id: "SS-2.2.a", level: "K2", text: "Summarize the important characteristics of test reports" },
    { id: "SS-2.2.b", level: "K2", text: "Give examples of how traceability is important in test cases" },
    { id: "SS-2.2.c", level: "K2", text: "Summarize the important characteristics of test cases" },
    { id: "SS-2.2.d", level: "K2", text: "Summarize the important characteristics of defect reports" },
    { id: "SS-2.3.a", level: "K2", text: "Summarize ways to make defect triage meetings effective" },
    { id: "SS-2.3.b", level: "K2", text: "Explain how daily standups can help improve the perceived value of the testing team" },
    { id: "SS-2.3.c", level: "K2", text: "Explain how the test team should present status in project status meetings" },
    { id: "SS-2.3.d", level: "K2", text: "Summarize the opportunities for testers to communicate in retrospectives" },
  ],
  sections: {
    "2.1.1": {
      objective: "SS-2.1.a",
      body: [
        { type: "p", text: "Anything written is a record that may be kept for a long time and read by multiple people beyond the intended recipient. Written business communication should be professional, not casual — even when the relationship is friendly." },
        { type: "list", intro: "The business-writing checklist:", items: [
          "USE COMPLETE SENTENCES — no texting abbreviations. Rule of thumb: 15–20 words per sentence, never more than 25; paragraphs of 3–8 lines, six on average.",
          "CHECK GRAMMAR AND SPELLING — checkers and AI make it quick; releasing a document with such errors implies proofreading was too much trouble and the recipient's time is not valued.",
          "PROOFREAD — removes obvious errors that checkers miss, identifies gaps in the information, and helps adjust tone. Text will never be perfect, but the obvious problems must go.",
          "FORMAT CORRECTLY — provide consistent formatting even if the template must be created; then reuse it for all test plans, reports, defect reports, and test cases.",
          "COMPLETE THE DOCUMENT — update the Table of Contents, index, and history each release; out-of-date front matter confuses.",
          "VERSIONING — put the version in the document name; drafts number from .01, first release is 1.0. Test case/defect versioning is often handled by the test management system — know whether older versions are maintained or overwritten. Defect reports track comments and status changes with who/when.",
          "PEER REVIEWS — for formal documents (test strategies, plans, reports): authors cannot review their own work; peer reviews also educate the wider team — just as testers want code peer reviewed.",
        ]},
        { type: "example", title: "K3 rewrite pattern (Q14)", text: "Unprofessional chat: 'Anywhere between here and the mall, might not get away with that amount of time out of wk!' Professional rewrite: 'I can meet anywhere within two miles of the office. Must be back for a meeting at 2:00.' — clear parameters plus the reason for the constraint; no follow-up needed." },
      ],
    },
    "2.1.2": {
      objective: "SS-2.1.c",
      body: [
        { type: "p", text: "In general, a TEST STRATEGY describes why and how testing is conducted across ALL projects; a TEST PLAN describes the testing approach for a PARTICULAR project, highlighting where it will vary from the strategy (e.g., no test automation for a short-lived product). Without a real plan, the 'planning' aspect is lost and the test plan is just an execution schedule." },
        { type: "list", intro: "When to introduce a true strategy and plan depends on:", items: [
          "Criticality of the project — more critical projects need formal, team-agreed documents",
          "Precedent — some organizations resist perceived excessive documentation",
          "Need for guidance and agreement — previous projects may have suffered without a unified plan",
          "Purpose — a strategy that is only a checkbox on someone's schedule is meaningless",
          "Commitment to good testing practices",
        ]},
        { type: "p", text: "These documents are only effective when reviewed, accepted, and FOLLOWED by the wider project team. Pairing the test plan with test reporting helps win senior stakeholders who want to track progress. If the wider team will not accept the documents, still develop at least the test plan for the test team's own use — but forcing unwanted documents onto the team is counterproductive." },
        { type: "p", text: "Route a MOSTLY COMPLETE plan for review — an outline full of TBDs annoys reviewers; note what is missing and who must supply it. The plan should align with the test summary report, stay current, and changes should be reviewed with the project team. Check it like any professional document: project-focused content, grammar/spelling, template consistency, business-writing rules (sentence length, paragraph size, consistent bullets, complete and accurate links), and readability by NON-testers." },
      ],
    },
    "2.2.1": {
      objective: "SS-2.2.a",
      body: [
        { type: "p", text: "Test reports are likely to be routed beyond the intended audience, so they must contain enough explanation that the data is clear. Dashboards alone usually cannot explain the numbers: if progress is below expectations, the reader may need their attention drawn to the critical environment-blockage defects. Publishing numbers WITHOUT explanation is dangerous and can create a negative impression of the team." },
        { type: "p", text: "Test management tools chart well — trend charts particularly show progress toward the goal. Ensure the words MATCH the charts: all tests executed but not passed (open defects) presented as raw execution numbers gives the wrong impression. The recipient may not know testing — explain why a P1 defect is more impactful than a P4. Always include DEFECT metrics with coverage/execution metrics for balance; risk mitigation metrics show testing is accomplishing its goals." },
        { type: "p", text: "Always VERIFY the charts and numbers — query mistakes produce invalid reports; sanity-check before publishing, and thoroughly test any query changes. Keep the report OBJECTIVE, clearly labeling any subjective impressions. Go-live decisions are business decisions: the test team's job is to objectively report status and supply the evidence to the decision makers." },
        { type: "p", text: "The key is understanding the message that will be RECEIVED — think like the recipient; if needed, work with the PM or development manager to tailor the reports. Effective reporting — analyzing the data and capturing that analysis clearly and concisely — is a key capability for advancement in testing organizations." },
      ],
    },
    "2.2.2": {
      objective: "SS-2.2.c",
      body: [
        { type: "list", intro: "Debates rage about the right level of test case detail, but there are three MINIMUM characteristics of a good test case:", items: [
          "TRACEABLE to its origin — a requirement, a test condition, an acceptance criterion, or an identified risk.",
          "REPEATABLE by the target tester — sufficient detail that the person who will execute it gets the same results as another target tester.",
          "Defined EXPECTED RESULTS — clarifies expectations and helps the team agree on what should happen.",
        ]},
        { type: "list", intro: "Traceability is threefold:", items: [
          "Tracing to a requirement → coverage can be determined, and priority INHERITED so the highest-priority tests cover the highest-priority requirements",
          "Tracing to a risk item → risk mitigation can be tracked as testing proceeds against the highest-priority risks",
          "Tracing to a requirement → when the requirement changes, the tests needing re-execution or modification are easy to identify",
        ]},
        { type: "p", text: "Test management tools support FIELDS (stable identifying data, e.g., priority) and TAGS (temporary labels, e.g., automation status: can be automated / in progress / completed) plus folder structures by software area (finance vs supply chain in an ERP). Creating test cases as tasks INSIDE a requirement/story (plain Jira) is a trap: when the story closes, the test case goes with it — hard to find later, hard to build regression suites from. The solution: build test cases as INDEPENDENT entities linked back to the requirement — traceability preserved, and the cases can be exported, reused, and reorganized. Most test management systems (or Jira plug-in modules) support this." },
        { type: "p", text: "Repeatability and maintainability are a trade-off: checklists are quick to write and easy to maintain but hard for others to follow; mind maps suit their author; detailed step-by-step cases suit anyone but cost creation and maintenance. Audited or automation-bound test cases have their own detail requirements. Test cases need proper grammar and punctuation too — developers, other testers, users, and PMs read them, and review by others is a proven quality lever. Agree the detail level, fields, and labels as a team BEFORE creation: test cases live beyond the project and must be retrievable — they are the artifacts representing the core of what testers do." },
      ],
    },
    "2.2.3": {
      objective: "SS-2.2.d",
      body: [
        { type: "list", intro: "Objectivity and accuracy are critical: an effective defect report leads to quick resolution — a fix, an explanation, or a requirements adjustment. Characteristics:", items: [
          "Record what happened COMPARED TO what was expected — quickly surfaces misunderstandings on either side",
          "Include the steps to reproduce — clarifies the defect, proves reproducibility, gives the developer an easy path to see it",
          "Include screenshots — locates the defect and shows how it manifests",
          "Avoid indicating the developer made a mistake — the tester, environment, data, or requirements may be at fault",
          "Write a clear SUMMARY indicating the nature AND severity — it shows up in defect summary reports and drives treatment",
          "Get priority/severity right — follow published guidelines; neither under- nor over-prioritize",
          "Be clear, concise, concrete, and correct — all necessary information at first writing",
        ]},
        { type: "note", title: "The severity / priority / urgency trio", text: "SEVERITY = impact on the system. PRIORITY = importance to the business. URGENCY (if used) = how quickly it should be fixed — often flags defects blocking testing. The tester determines severity and can estimate priority; sometimes a business representative (SME or product owner) must assign priority, so a preliminary tester-assigned value avoids lag." },
        { type: "p", text: "High-priority/severity counts are often project exit criteria — inspiring pressure to downgrade defects to meet deadlines. Stand strong per the published guidelines, but stay flexible: some bad-looking defects have easy workarounds; some benign-looking defects signal serious problems. Change priority/severity for a compelling argument, never for political reasons. Good communication, understanding, and a lack of blame get the right values assigned." },
        { type: "example", title: "Q19 pattern", text: "Crash only with a >500-character username. Severity 1 (it crashes) and priority 4 (will not realistically happen) are BOTH correct — the error is the alarmist summary 'System crashes when username is entered', which misrepresents an edge case as a catastrophe." },
      ],
    },
    "2.3.1": {
      objective: "SS-2.3.a",
      body: [
        { type: "p", text: "Hold defect triage sessions only when needed — nearing a production release, or when the backlog is becoming unmanageable. Triage is not an excuse for people to stop managing and updating the defect tracking system." },
        { type: "list", intro: "Criteria for effective triage meetings:", items: [
          "Limit attendees to those who need to be there",
          "Constrain the meeting time to avoid excess re-discussion",
          "Establish guidelines for which defects will be discussed",
          "Present each qualified defect objectively — environment, configuration, data, reproducibility",
          "Agree on fixing, timeline, retesting requirements, and (if pertinent) release-to-production plans",
        ]},
        { type: "p", text: "Not all defects will be fixed — that is a BUSINESS decision. Testers advocate and lobby for the fixes they consider important, but business relevance takes priority; it is not personal. Feeling ignored about a defect? Triage is not the place to air it — handle it tester-to-developer, or escalate test manager to development manager with PM and business input. Compromises exist: a status meaning 'skip now, must fix next release' (e.g., the urgency field) or a published accepted workaround. A tester's responsibility ends when the defect has been presented objectively and factually, all information for a fix supplied, and proper priority and severity assigned — after that, stakeholders decide." },
      ],
    },
    "2.3.2": {
      objective: "SS-2.3.b",
      body: [
        { type: "p", text: "Standup meetings come from Agile but are commonly used with other lifecycles. Each team member communicates: what was done yesterday, what is planned for today, and any blocking issues. The simple format guarantees everyone gets time to speak and to ask for help — and the whole team understands what everyone else is doing." },
        { type: "p", text: "Communicating openly and honestly in standups ELEVATES TESTERS to the same level as everyone else — equal time, equal attention — bringing testing into everyone's view as an important project component. Standups also compensate for testers being left out of development planning: they reveal what is planned, when software will likely arrive, and what developers are working on — helping testers plan and opening communication between the teams." },
      ],
    },
    "2.3.3": {
      objective: "SS-2.3.c",
      body: [
        { type: "p", text: "Weekly project status meetings review schedule, budget, milestones, and issues — run by the PM with test and development management and other stakeholders. Whether attending or supplying information to a manager who attends, the tester must report ACCURATE and CURRENT testing status, supported by metrics, reflecting what the test team is reporting." },
        { type: "p", text: "Status meetings are the right forum for SYSTEMIC problems — slow defect turnaround, lack of documentation — anything likely to cause significant testing delays affecting the whole project. TREND information works best: 'defect fixes are taking longer and longer' is much more effective than complaining about one defect that took four weeks. Show empathy to other team members, offer help where there is time — status meetings are an opportunity to work productively with the rest of the project and build the relationships that help the testing effort." },
      ],
    },
    "2.3.4": {
      objective: "SS-2.3.d",
      body: [
        { type: "p", text: "Retrospectives run at the end of project periods — a sprint, a release cycle, or the project itself — to discuss what went well and what should improve. Testers often see clearly what could be improved: be honest, but be PRODUCTIVE. Criticizing is easy; will it help the next phase?" },
        { type: "p", text: "As with managers, bring suggestions, not just complaints: 'please put expected fix dates on defects' beats 'testing never knows what is coming and is forced to react'. If testing itself gets improvement feedback, take it back to the test team, discuss it constructively after the meeting, and REPORT BACK when changes are made — so everyone knows the feedback was received and acted upon." },
        { type: "p", text: "Provide POSITIVE feedback too, particularly to developers and business analysts — the people testers work with daily and the primary sources of information. Positive feedback reinforces the relationship and softens any requests for changes. A retrospective should be a positive focus on improvement; supplying good, constructive feedback is part of effective communication." },
      ],
    },
  },
};
