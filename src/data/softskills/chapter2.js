// ASTQB CT-SS (Soft Skills for Testers) v1.0 — Chapter 2: Business Writing and Communication
// summary/deepPoints from syllabus v1.0 (2025-10-01); examInsights derived from the official sample exam
export default {
  id: 2,
  title: 'Business Writing and Communication',
  time: '3 hrs 45 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "10 of the 40 exam questions (11 of 45 points, incl. the 2-point K3 on rewriting an unprofessional message). Know the business-writing rules (sentence/paragraph length, versioning, peer reviews), the test strategy vs test plan distinction, the three minimum characteristics of a test case, the severity/priority/urgency trio for defect reports, and the communication pattern for each meeting type (triage, standup, status, retrospective).",
  sections: [
    {
      id: '2.1.1',
      title: 'Be Professional',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Anything written is a record that may be kept a long time and read by people beyond the intended recipient. Written business communication is professional, not casual — even with friendly colleagues.',
        'Use COMPLETE SENTENCES (no texting abbreviations). Rule of thumb: 15–20 words per sentence, never more than 25; paragraphs of 3–8 lines, six on average.',
        'CHECK GRAMMAR AND SPELLING (checkers and AI help; errors imply proofreading was too much trouble and insult the reader\'s time) and PROOFREAD (removes what checkers miss, finds information gaps, adjusts tone).',
        'FORMAT CONSISTENTLY (create a template if none exists; reuse it for all test plans, reports, defect reports, test cases) and COMPLETE THE DOCUMENT (update Table of Contents, index, history on every release).',
        'VERSIONING: include the version in the document name; drafts numbered from .01, release starts at 1.0. Test case/defect versioning is often handled by the test management system — know whether old versions are preserved or overwritten. Defect reports track comments and status changes with who/when.',
        'PEER REVIEWS for formal documents (strategies, plans, reports): authors cannot review their own work; reviews also educate the wider team — just as testers want code peer reviewed.'
      ],
      examInsights: [
        'Q14 (K3, 2pts) — Rewriting "Anywhere between here and the mall, might not get away with that amount of time out of wk!" → "I can meet anywhere within two miles of the office. Must be back for a meeting at 2:00." Clear parameters + the reason for the deadline; the other options force follow-up questions.',
        'Q15 KEY — To find out who lowered a defect\'s priority and when: the defect management system should track ALL VERSIONS of the defect reports — versioning records what changed, when, and by whom.'
      ]
    },
    {
      id: '2.1.2',
      title: 'Test Strategies and Test Plans',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'TEST STRATEGY = why and how testing is conducted ACROSS ALL PROJECTS. TEST PLAN = the testing approach for a PARTICULAR PROJECT, highlighting where it deviates from the strategy (e.g., no automation for a short-lived product).',
        'Without a real plan, the "planning" is lost and the test plan is just an execution schedule. When to introduce real documents depends on: project criticality, precedent (resistance to "excessive documentation"), need for guidance and agreement, purpose (a checkbox strategy is meaningless), and commitment to good practices.',
        'The documents only work if REVIEWED, ACCEPTED, AND FOLLOWED by the wider team. Pairing the test plan with test reporting helps win senior stakeholders. If the team will not accept them, still write at least the test plan for the test team — but forcing unwanted documents is counterproductive.',
        'Route a MOSTLY COMPLETE document for review (an outline full of TBDs annoys reviewers; mark what is missing and who must supply it). The plan should align with the test summary report, stay up to date, and changes should be reviewed with the project team.',
        'Professional checklist: project-focused content, grammar/spelling, consistent template formatting, good business writing (sentence length, paragraph size, consistent bullet lists, working links), and READABILITY BY NON-TESTERS.'
      ],
      examInsights: [
        'Q16 KEY — The document describing in detail the testing approach for a PARTICULAR PROJECT = the TEST PLAN. The strategy is cross-project; test cases cover individual requirements, not the overall approach.'
      ]
    },
    {
      id: '2.2.1',
      title: 'Test Reports',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Test reports travel beyond the intended audience — they must contain enough explanation that the data is clear. Dashboards alone usually cannot explain the numbers (e.g., low progress caused by environment-blockage defects). Publishing numbers WITHOUT explanation is dangerous and can create a negative impression of the team.',
        'Charts from test management tools are great — especially TREND charts — but the words must match the charts (all tests executed ≠ all tests passed).',
        'Recipients may not know testing: explain why a P1 beats a P4. ALWAYS include defect metrics with coverage/execution metrics for a balanced view; risk mitigation metrics show testing is accomplishing its goals.',
        'VERIFY the charts and numbers — query mistakes produce invalid reports; sanity-check before publishing and test any query changes.',
        'Keep reports OBJECTIVE; label subjective impressions as subjective. Go-live decisions are business decisions — the test team objectively reports status and supplies the evidence.',
        'Think like the recipient; tailor reports with the PM or development manager if needed. Effective reporting is a key capability for advancement.'
      ],
      examInsights: [
        'Q17 KEY — Tool-generated charts in reports? Yes — but "they must be information needed by the recipients and must include words explaining the information". Charts for charts\' sake accomplish nothing.'
      ]
    },
    {
      id: '2.2.2',
      title: 'Test Cases',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Three minimum characteristics of a good test case: TRACEABLE to its origin (requirement, test condition, acceptance criterion, or risk); REPEATABLE by the target tester (enough detail that two target testers get the same results); and defined EXPECTED RESULTS (clarifies expectations, aligns the team). Safety-critical/audited projects add detail from there.',
        'Traceability is threefold: to requirements → coverage measurement + inherited priority (highest-priority tests cover highest-priority requirements); to risk items → risk mitigation tracking; to requirements → when a requirement changes, the affected tests are easy to identify for re-execution or modification.',
        'Test management tools support TAGS (temporary labels, e.g., automation status) in addition to fields (stable data, e.g., priority) and folder structures per software area. Building test cases as tasks INSIDE a story (e.g., plain Jira) is a trap: closed story = buried test case, and regression suites become hard to build.',
        'Solution: build test cases INDEPENDENT of requirements, linked back for traceability — exportable, reusable, reorganizable. Most test management systems (or Jira plug-ins) support this.',
        'Repeatability vs maintainability is a trade-off: checklists are fast but hard to follow; mind maps suit their author; detailed steps suit anyone but cost creation and maintenance. Audited or automation-bound test cases have their own detail requirements. Agree as a team on the detail level, fields, and labels BEFORE creation — test cases outlive the project.'
      ],
      examInsights: [
        'Q18 KEY — Tracking risk mitigation needs TEST CASES TRACED TO RISK ITEMS — execution of risk-traced tests shows which risks have been addressed. Defect sorts and raw execution counts do not.'
      ]
    },
    {
      id: '2.2.3',
      title: 'Defect Reports',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'An effective defect report leads to quick resolution — fix, explanation, or requirement adjustment. Characteristics: record what happened VS what was expected; include steps to reproduce; include screenshots; avoid indicating the developer made a mistake (it may be the tester, environment, data, or requirements); write a clear SUMMARY reflecting the nature AND severity (it shows up in summary reports); get priority/severity right per published guidelines; be clear, concise, concrete, correct — complete on first writing.',
        'SEVERITY = impact on the system. PRIORITY = importance to the business. URGENCY (if used) = how quickly it should be fixed — often used to flag defects blocking testing.',
        'The tester determines severity and can make an educated guess at priority; sometimes a business representative (SME/product owner) must assign priority — a preliminary tester-assigned priority avoids lag.',
        'High counts of high-priority/severity defects are often exit criteria, inspiring pressure to downgrade. Stand strong per guidelines but stay flexible: bad-looking defects may have easy workarounds; benign-looking ones may signal serious problems. Change priority/severity for compelling arguments, never for political reasons.'
      ],
      examInsights: [
        'Q19 KEY — Crash with a >500-character username, severity 1 / priority 4, steps + screenshots: the mistake is the SUMMARY LINE "System crashes when username is entered" — it announces a catastrophe when it is an edge case. Severity 1 is right (crash); priority 4 is right (unlikely); steps always belong.'
      ]
    },
    {
      id: '2.3.1',
      title: 'Defect Triage Sessions',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Hold triage only when needed (nearing a release, unmanageable backlog); triage is not an excuse for people to stop maintaining the defect tracking system.',
        'Effectiveness criteria: limit attendees to those needed; constrain the time (avoid re-discussion); establish guidelines for WHICH defects are discussed; present each qualified defect objectively (environment, configuration, data, reproducibility); reach agreement on fixing, timeline, retesting, and release plans.',
        'Not all defects will be fixed — a BUSINESS decision. Testers advocate and lobby for important fixes, but business relevance wins; it is not personal.',
        'Feeling ignored about a defect? Triage is NOT the place to air it — handle tester-to-developer, or escalate test manager to development manager. Compromises: a status meaning "skip now, fix next release" (urgency field) or a published accepted workaround.',
        'A tester\'s responsibility ends when the defect is presented objectively with all information needed for a fix and correct priority/severity — after that, stakeholders decide.'
      ],
      examInsights: [
        'Q20 KEY — Triage covers only P1s while the P2/P3 backlog explodes → "work with the meeting lead to update the agenda to include the lower priority defects". Re-labeling 2s as 1s dilutes P1; hijacking meeting time confuses; demanding via your manager rarely works.'
      ]
    },
    {
      id: '2.3.2',
      title: 'Daily Standups',
      level: 'K2',
      type: 'skim',
      summary: "Standups (Agile-born, now used across lifecycles) have each team member state: what was done yesterday, what is planned for today, and any blocking issues. The format guarantees everyone speaks and can ask for help, and the whole team knows what everyone is doing. Communicating openly here ELEVATES TESTERS TO THE SAME LEVEL as everyone else — equal time, equal attention — bringing testing into view as an important project component. Standups also reveal development plans (when software will arrive), helping testers plan and opening communication between the teams.",
      examInsights: [
        'Q21 KEY — Standups raise the perceived value of testing "by highlighting what each team member has done and is planning to do on a daily basis" — testers present alongside everyone else. Not defect reviews, not test-result forums, not cumulative accomplishment showcases.'
      ]
    },
    {
      id: '2.3.3',
      title: 'Project Status Meetings',
      level: 'K2',
      type: 'skim',
      summary: "Weekly status meetings review schedule, budget, milestones, and issues — run by the PM with test/development management and stakeholders. Whether attending or feeding a manager who attends, report ACCURATE, CURRENT testing status supported by metrics that match what the team reports. This is the right forum for SYSTEMIC problems (slow defect turnaround, missing documentation) — things affecting the whole project. TREND information beats point-in-time complaints: 'defect fixes are taking longer and longer' lands better than one four-week-old defect. Show empathy, offer help where time allows — status meetings build the relationships that help testing.",
      examInsights: [
        'Q22 KEY — Growing unfixed-defect backlog at the status meeting → show a TREND CHART of how the backlog has grown (optionally split by priority). Static counts and execution charts miss the point.'
      ]
    },
    {
      id: '2.3.4',
      title: 'Retrospectives',
      level: 'K2',
      type: 'skim',
      summary: "Retrospectives close each period (sprint, release cycle, project) to discuss what went well and what to improve. Testers usually see clearly what could improve — be honest AND productive: criticism alone does not help the next phase. As with managers, bring SUGGESTIONS, not just complaints ('please put expected fix dates on defects' beats 'testing never knows what is coming'). Take improvement feedback about testing back to the test team, discuss constructively, and report back so people know feedback was acted on. Give POSITIVE feedback too, especially to developers and BAs — it reinforces relationships and softens future change requests.",
      examInsights: [
        'Q23 KEY — When presenting an issue at a retrospective, also present "a possible solution to the problem". Never an ultimatum.'
      ]
    }
  ]
};
