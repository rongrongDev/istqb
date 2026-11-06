// CT-UT (syllabus 2018) — Chapter 5: Usability Testing
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 5,
  title: 'Usability Testing',
  time: '270 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "The core chapter — 13 LO questions plus the think-aloud keyword question. Know the three steps (prepare, conduct sessions, communicate results), roles (MODERATOR — the only one who talks to the participant; note-taker; observers; participant), what goes in the TEST PLAN vs the TEST SCRIPT, how to write and order TEST TASKS (simple first and last, meaningful to the participant), location and lab pros/cons (observers come and go; lab = artificial, expensive), session activities, the analysis procedure (20–30 problems + 5–10 positive findings), classifications and severity ratings, selling findings, the report (max 25 findings, max 20 pages, one-page executive summary), quality control, and the ten frequent mistakes.",
  sections: [
    {
      id: '5.2', title: 'Step-By-Step Approach to Usability Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY TESTING evaluates how far specified users can use the system with effectiveness, efficiency and satisfaction in a specified context of use.",
        "STEP 1 PREPARE: test plan, recruit participants, test scripts, test tasks, PILOT session. STEP 2 CONDUCT SESSIONS: prepare, briefing, pre-session interview, MODERATE, post-session interview. STEP 3 COMMUNICATE: analyze findings, write report, SELL findings.",
        "A test = a series of SESSIONS; in each a representative PARTICIPANT performs representative tasks on the product or a prototype; a neutral MODERATOR runs it, OBSERVERS watch — ideally from a neighboring room — under conditions as close to real use as possible (mock office, living room)."
      ],
      examInsights: ["A-Q17 — Gathering comments from users belongs to the step \"conducting the usability test session\"."]
    },
    {
      id: '5.3.1', title: 'Usability Test Plan', level: 'K2', type: 'deep',
      deepPoints: [
        "Short (1–2 pages) description of purpose and extent, reviewed and approved by stakeholders and management.",
        "Contents: GOALS (assess requirements, uncover problems, and — unique to testing — CONVINCINGLY DEMONSTRATE serious problems to stakeholders); user groups and attendees (MODERATOR — neutral usability expert and the ONLY person who talks to the participant; PARTICIPANT; NOTE-TAKER; OBSERVERS — optional stakeholders); reference to usability requirements; techniques (THINK ALOUD); number of participants; schedule and session length; NAME OF THE MODERATOR; resource and cost estimate incl. incentives; LOCATION (face-to-face, REMOTE, UNMODERATED); how findings are communicated."
      ],
      examInsights: ["A-Q18 — Selecting the moderator for the tests is part of test planning."]
    },
    {
      id: '5.3.2', title: 'Usability Test Script', level: 'K2', type: 'skim',
      summary: "A USABILITY TEST SCRIPT specifies the sequence of actions for executing a usability test — the moderator's CHECKLIST: preparation activities before the participant arrives, briefing instructions, PRE-SESSION interview questions, usability test tasks, POST-SESSION interview questions.",
      examInsights: ["A-Q19 — Questions asked at the end of the session live in the usability test script."]
    },
    {
      id: '5.3.3', title: 'Usability Test Tasks', level: 'K3', type: 'deep',
      deepPoints: [
        "A TEST TASK is an activity specified by the moderator that the participant must accomplish within a given time; prepare enough to fill the session.",
        "Good tasks match the plan's goals and are relevant to the PARTICIPANT (ordering a product — not system-oriented chores like logging in, changing a password, finding the webmaster) and to stakeholders.",
        "Each task states: exact scenario wording, preconditions and resources, justification (what it evaluates), data given (e.g. delivery address), completion/ABANDONMENT criteria (e.g. no answer within 10 minutes).",
        "ORDER: FIRST task simple (quick success, calms stress); essential tasks before less important ones; logical order (order before cancel); avoid dependent tasks; LAST task simple too (no frustrating ending)."
      ],
      examInsights: ["A-Q20 (K3) — A good first task is simple, e.g. entering name and address, before harder insurance questions."]
    },
    {
      id: '5.3.4', title: 'Test Location', level: 'K2', type: 'deep',
      deepPoints: [
        "Options: dedicated LAB; two offices linked by video; an office; the participant's home or workplace; a PUBLIC PLACE such as a café (quick sessions ≤ 10 minutes).",
        "The OBSERVERS are the primary users of a session: they must be able to discuss freely without disturbing the test and COME AND GO as they please. Rules restricting observers signal an unusable setup.",
        "Screen sharing to desks is possible but less desirable — observers lose the discussion with other stakeholders."
      ],
      examInsights: ["A-Q21 — Observers should be able to come and go as needed."]
    },
    {
      id: '5.3.5', title: 'Usability Test Lab and Pilot Session', level: 'K2', type: 'deep',
      deepPoints: [
        "LAB: a TEST ROOM and an OBSERVATION ROOM, often with a ONE-WAY MIRROR, cameras and monitors showing face, screen and desk.",
        "ADVANTAGES: observe together; easy to observe and record; similar conditions every session; observers can enter and leave; shows visitors the organization's commitment. DISADVANTAGES: ARTIFICIAL context; EXPENSIVE to set up and maintain.",
        "PILOT SESSION: run per the script to check the script and setup; fix and re-pilot if serious problems appear. Use real users if possible, else colleagues — never the product's designers. Pilot findings may count (an over-qualified pilot participant still hitting a serious problem)."
      ],
      examInsights: ["A-Q22 — A disadvantage of a usability lab: the room may feel unrealistic to the user."]
    },
    {
      id: '5.4', title: 'Conducting Usability Test Sessions', level: 'K2', type: 'deep',
      deepPoints: [
        "PREPARATION: moderator sets up hardware, software and tasks before the participant arrives. BRIEFING: purpose of the test and the participant's role. PRE-SESSION INTERVIEW: background and experience with this or related products.",
        "MODERATION: participant solves tasks handed out by the moderator, encouraged to THINK ALOUD; the moderator QUIETLY OBSERVES and only guides when the participant is COMPLETELY STUCK — usually by moving on to the next task.",
        "POST-SESSION INTERVIEW: overall impression — \"which 2–3 things did you like most?\" and \"which 2–3 things most need improvement?\"",
        "THINK ALOUD: participants voice their thoughts while working, revealing their thinking and vocabulary to moderator, note-taker and observers."
      ],
      examInsights: ["A-Q23 — A confused, frustrated participant: wait until they are blocked before helping them move to the next task.", "A-Q35 (keyword) — Think aloud = encouraging users to voice their thoughts as they perform the tasks."]
    },
    {
      id: '5.5', title: 'Analysis of Findings', level: 'K2', type: 'deep',
      deepPoints: [
        "(1) NOTE-TAKER records observations (problems and positive effects) during sessions; (2) after EACH session, note-taker and moderator candidly discuss; (3) after all sessions, each SEPARATELY extracts 20–30 usability problems and 5–10 POSITIVE findings; (4) they merge into one common list of 20–30 problems + 5–10 positives; (5) moderator LOGS problems in the tracking tool (ideally the defect tracker); (6) moderator TRACKS to resolution and reviews fixes — risky fixes get retested.",
        "Discussions must be honest and based on OBSERVATIONS, not opinions. Limit reported findings — dumping 70 problems on stakeholders is unacceptable; the moderator must PRIORITIZE. Compare with previous reports to spot trends."
      ],
      examInsights: []
    },
    {
      id: '5.6.2', title: 'Results, Findings, Classification and Severity', level: 'K2', type: 'deep',
      deepPoints: [
        "Results show what representative users CAN ACCOMPLISH with representative tasks — not their opinions (\"is the home page design appropriate?\" is not a valid task). Opinions are reportable only if expressed SPONTANEOUSLY by a MAJORITY; follow up remarks with \"why do you think so?\".",
        "USABILITY FINDING = an important issue, problem or opportunity. POSITIVE findings give a balanced view (easier to sell fixes), show what NOT to change, complete the picture.",
        "Each finding: classification and severity, header, description (general claims backed by ≥ 2 examples), optional quotes, recommendations, screenshots.",
        "CLASSIFICATIONS: usability problem (needs severity) · positive finding · GOOD IDEA (participant suggestion) · functional problem (defect). SEVERITY: MINOR (minor dissatisfaction, noticeable delay) · MAJOR (substantial delays, moderate dissatisfaction) · CRITICAL (participants gave up, showstopper, minor financial damage) · CATASTROPHIC (life-threatening, bodily harm, substantial financial damage). Severity depends on FREQUENCY, IMPACT, PERSISTENCE; rated from the participant's view by moderator and note-taker."
      ],
      examInsights: ["A-Q24 — A user complimenting the easy-to-use help feature = a positive usability finding."]
    },
    {
      id: '5.6.3', title: 'Selling Findings to Stakeholders', level: 'K2', type: 'deep',
      deepPoints: [
        "Skeptical stakeholders — some developers see \"their\" UI as part of themselves. Unaccepted findings → little change. Low usability maturity → only usability TESTING makes the consequences visible.",
        "In reviews and heuristic evaluations, strong arguers can make opinions dominate facts — manage the exchange.",
        "Get BUY-IN by involving stakeholders (especially those who decide on and implement changes): risk assessment; writing/reviewing plan, scripts and tasks; recruitment profile and screener; OBSERVING sessions (convenient times like Friday afternoons, partial attendance welcome, near their workplace, as a group); reviewing the report.",
        "AGILE helps: the Product Owner takes part in evaluations, supplies usability requirements and settles disputes; the WHOLE-TEAM approach fosters open exchange and shared ownership."
      ],
      examInsights: ["A-Q26 — Agile's whole-team approach means the team is used to exchanging views freely.", "A-Q27 (K3) — Developers deny a problem → have them observe a usability session."]
    },
    {
      id: '5.6.4', title: 'Usability Test Report', level: 'K3', type: 'deep',
      deepPoints: [
        "MANDATORY for a usability test; written by the usability tester or moderator; must be effective and efficient for the development team and decision makers.",
        "Sections: (1) EXECUTIVE SUMMARY — object, techniques, most important findings, recommendations; (2) table of contents; (3) findings and recommendations; (4) objectives; (5) purpose incl. usability requirements; (6) evaluation method — approach, environment, test script, ANONYMIZED participant list; (7) contacts of moderators and note-takers."
      ],
      examInsights: ["A-Q25 (K3) — Reviewing a report: cut the less important defects to keep no more than 25 findings."]
    },
    {
      id: '5.6.5', title: 'Best Practices in Usability Test Reporting', level: 'K3', type: 'deep',
      deepPoints: [
        "Most important: communicate POSITIVELY and productively with the development team and stakeholders.",
        "INVOLVE AND RESPECT stakeholders (co-write, include their findings, partners, no jargon); SHORT main report — MAX 25 FINDINGS, MAX 20 PAGES; ONE-PAGE executive summary at the start with only the key findings; keep to the point (crisp descriptions, no lectures on usability or session transcripts — 1–2 line quotes are fine); RATE severity of all findings; include POSITIVE findings; ensure all sections are present; respect privacy (no recruitment screener or confirmations).",
        "Agile: less documentation — verbal briefings, findings straight into backlog items or bug reports, discussed daily or in retrospectives; brevity matters even more."
      ],
      examInsights: []
    },
    {
      id: '5.7', title: 'Quality Control of a Usability Test', level: 'K2', type: 'deep',
      deepPoints: [
        "Check the plan's content and its review/approval; check script and TASKS match the plan's purpose; check actual participant PROFILES match.",
        "OBSERVE THE FIRST TWO OR THREE SESSIONS to ensure they follow the script; compare moderator and note-taker notes with your own; raise issues for missed problems or positives.",
        "If directed, compare time and resources with estimates; check findings are communicated as planned; check the report against best practices and discuss it with representative stakeholders; attend presentations; ensure two-way, constructive discussion."
      ],
      examInsights: ["A-Q28 — Observe the first two or three sessions to ensure they follow the usability test script."]
    },
    {
      id: '5.8', title: 'Challenges and Frequent Mistakes', level: 'K2', type: 'deep',
      deepPoints: [
        "The ten most frequent and serious mistakes: purpose not clear; SCHEDULING TOO LATE (no time to fix — less likely in agile); critical results ignored by management; INCORRECT FOCUS on minor details instead of effectiveness/efficiency; MODERATOR TOO ACTIVE (interviewing, entertaining, demonstrating instead of passively observing); no post-session interview; no stakeholder involvement; UNUSABLE REPORT (too long, too many findings, no one-page summary); no POSITIVE findings; findings NOT CATEGORIZED (can't tell critical from minor)."
      ],
      examInsights: ["A-Q29 — Testing too late: results arrive when the team has no time to address them."]
    }
  ]
};
