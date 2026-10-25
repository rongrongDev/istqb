// ASTQB CT-SS (Soft Skills for Testers) v1.0 — Chapter 1: Professional Communication
// summary/deepPoints from syllabus v1.0 (2025-10-01); examInsights derived from the official sample exam
export default {
  id: 1,
  title: 'Professional Communication',
  time: '5 hrs 30 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "The biggest chapter — 13 of the 40 exam questions (14 of 45 points, incl. the 2-point K3 on choosing the communication environment). Themes the exam returns to: objective over subjective, informing over guiding, assume every message can be forwarded, pause before sending, and empathy for each role's viewpoint (BA, PM, developer, other testers, manager). Learn the strengths and pitfalls of each communication mode.",
  sections: [
    {
      id: '1.1.1',
      title: 'Safest Approach',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'A professional approach is always best, even with a close colleague — the intended recipient may not be the only recipient. Emails get forwarded, defect reports get shared, meetings get recorded, and context gets lost ("The code is broken again" reads differently to the developer, their manager, and the PM).',
        'Effective communication gets the message to the recipient accurately, quickly, and concisely — concise, but complete enough that the developer does not have to ask for more information.',
        'Two keys to having a message received as intended: keep the tone OBJECTIVE by reporting observations, not opinions; and concentrate on INFORMING rather than guiding. Objectivity avoids slanting (particularly toward the negative); focusing on informing makes it easier to check that all necessary information is included.'
      ],
      examInsights: [
        'Q1 KEY — The goal of effective communication: "to ensure the recipient receives the message the sender intended". Not speed, not exhaustive detail, not creating a record.'
      ]
    },
    {
      id: '1.1.2',
      title: 'Keep it Professional',
      level: 'K2',
      type: 'skim',
      summary: "A common mistake is assuming the recipient is a buddy. In-person chat may be informal, but ALL written communication should be professional — written and recorded communication has a long life and is easily reviewed by someone other than the intended recipient, where jokes read as insults. Professional does not mean sterile: communication can be informal but must not be open to interpretation — another reason objective statements are preferred. Prefer 'I expected the software to do xxx based on the requirements, but it did xxx. Is that correct?' over 'The software isn't working right' — and never 'the software doesn't work, and apparently neither does the developer'.",
      examInsights: [
        'KEY — Written = permanent + forwardable. Objective phrasing ("expected X per requirements, observed Y") is the pattern the exam rewards.'
      ]
    },
    {
      id: '1.1.3',
      title: 'Check Before You Send',
      level: 'K2',
      type: 'skim',
      summary: "Testing is frustrating, and emotions cloud judgment — sometimes without the tester noticing. Pause before hitting send: review, re-write, and maybe do not send at all. A negative comment in a status report can be incorporated unnoticed into a larger report by a busy manager; a subjective comment in a defect report can end up in front of the whole triage team. Reviewing before sending reduces the time needed for apologizing later.",
      examInsights: [
        'Q2 KEY — Why pause before emailing a developer about a defect report? Because the busy tester "might not have been as objective as they should be". Pausing and checking saves later apologies and rework.'
      ]
    },
    {
      id: '1.2.1',
      title: 'Read the Room',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Testers have a different viewpoint from most of the team: they deal with broken software, broken environments, and impossible schedules. The resulting outlook is REALISTIC but is often classified as NEGATIVE — testers get labeled uncooperative, not team players, or resistant.',
        '"Read the room": others may operate from unrealistic optimism or a different information set. If development reports "on schedule" and testing announces six weeks of no progress, the message will not land well without context.',
        'People react differently depending on who is around — a developer honest about quality one-on-one may change their voice when their manager is present; a team that agrees the schedule is unrealistic may leave the tester as the lone voice of dissent.',
        'When presenting information likely to be taken as negative, present the BACKGROUND too (the reasons for the six-week blockage) — otherwise denial or dismissal follows. Testers often end up in the role of trainer, familiarizing the team with how testing works.'
      ],
      examInsights: [
        'Q3 KEY — The viewpoint often characterized as "negative" is the TESTER\'s — even though it is probably just realistic while everyone else is overly optimistic about quality and schedule.'
      ]
    },
    {
      id: '1.2.2',
      title: 'Working with Business Analysts (BAs)',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'BAs translate nebulous SME explanations into implementable requirements, and get pelted with questions from everyone — which can make them impatient, and if they misunderstand the tester role, insulted that requirements are being "questioned".',
        'BAs hold knowledge testers lack: what users need, how they will use the software, their expectations and concerns — precious for valid test cases, prioritization, and a successful UAT.',
        'Acceptance criteria define the requirements. If the BA has not captured them, the tester can — as test conditions later used to build test cases. Approach it as a task NEEDED FOR TESTING, not something the BA should have done; that turns the BA into an ally.',
        'Work out communication preferences: approach the BA directly, approach users/SMEs, a question register with an SLA for responses, or whatever they prefer. Offering multiple paths makes the BA feel less bombarded — but there is an expectation of response, or the tester becomes blocked.',
        'Ideal (rare): the BA reviews all test cases. Practical: a REVIEW MEETING where the tester walks through sets of test cases — the review gets done and questions get answered on the spot.'
      ],
      examInsights: [
        'Q4 KEY — Effective use of BA time for test case review: "have a review meeting with the BA where sets of test cases are walked through by the testers" — more cases reviewed in less time, questions answered immediately, fewer follow-up emails.'
      ]
    },
    {
      id: '1.2.3',
      title: 'Project Managers',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'PMs focus on budget and schedule; quality issues hit both, so they can resist information indicating problems. Many schedules assume NO quality issues — then testing discovers schedule-impacting defects, and testers get blamed.',
        'Track the data: if the environment slipped five weeks "one day at a time", every outage and delay must have been tracked (some teams record a defect per delay) and reported in each weekly status — so the cumulative slip is never a surprise.',
        'Present WORKAROUNDS with problems — willing but not so accommodating that issues get minimized. Use a measure of EFFECTIVE PROGRESS: with the environment down, the team still preps data, writes test cases, follows up defects — not idle, but maybe only 45% effective.',
        'Be factual: show defect trends and regression rates against expected trends so the PM understands why the schedule is slipping.',
        'Good news needs caveats too: 50% complete and ahead of schedule means little if only 25% of the HIGH-RISK items were delivered. The PM needs residual risk to do their job — supplying it is the test team\'s job.'
      ],
      examInsights: [
        'Q5 KEY — Metrics supporting schedule slippage due to quality: "defect trends and regression rates over time". Hours worked, staffing counts, or root-cause assignments do not highlight the quality issues.'
      ]
    },
    {
      id: '1.2.4',
      title: 'Developers',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Developers focus on creation and may see testers as focused on criticizing; they are often measured on code completed against unrealistic deadlines, with defect fixing rarely budgeted.',
        'Considerations for working with developers on defects: schedule constraints; agreed SLAs for defect fixing (sets expectations); communication preferences (email, call, in-person); additional data needed (data, screenshots); use of the backlog for defect reports; prioritization and scheduling.',
        'A tester\'s goal with a defect report: make the defect EASY TO FIX — all needed information up front, quick answers to questions, early triage. Discuss priority and fix expectations; backlogged defects tend to rank below already-scheduled work, so blocking defects need visibility (some teams use an "urgency" setting).',
        'When developers cannot or will not communicate, escalate to the test manager / project manager — but ideally solve communication issues one-to-one first.'
      ],
      examInsights: [
        'Q6 KEY — Clear SLAs between test and development "reduce frustration by setting expectations for response times" — both directions: developer fix turnaround AND tester response to developer questions.'
      ]
    },
    {
      id: '1.2.5',
      title: 'Other Testers',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Territorial testers constrain the flow of work. Testers must share what they are doing and avoid duplication — daily standups help everyone know who is doing what.',
        'Each tester is responsible for knowing what is being tested, what defects exist, and who covers which area. Redundant testing, DUPLICATE DEFECTS, and DATA DESTRUCTION hurt team efficiency: the test manager assigns areas, but each tester must ensure every defect report they write is not a duplicate, and that the test data they use is theirs to use.',
        'Areas overlap and interface — use group tools (e.g., Teams) to post plans, avoid interfering, and check whether a defect was already reported.',
        'Mistakes happen — defects get missed, tests turn out non-executable. When someone catches a defect another missed, the correct response is "thank you", not "why were you testing in my area?". Recognizing each other\'s skills builds team spirit.'
      ],
      examInsights: [
        'Q7 KEY — Ensuring a defect report is not a duplicate is the responsibility of THE TESTER WRITING IT — not the developer, PM, or BA.'
      ]
    },
    {
      id: '1.2.6',
      title: 'Your Manager and Lead',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'The manager creates a supportive environment; the tester is honest, does their best work, and grows. When bringing a problem, ALSO BRING A POSSIBLE SOLUTION — even imperfect, it shows thought and willingness to solve it. Especially true for interpersonal problems.',
        'Compare: "The developer is ignoring me… I think he hates me" (complaint) vs "I think the developer is too busy… could we start a short daily triage meeting for high-priority problems?" (solution).',
        'Word problems in professional, objective terms so the manager does not have to sort through emotion. A tester needs to be productive, not destructive.',
        'Professionalism grows careers: hot heads rarely progress, and business people have long memories for emotional outbursts — even justified ones. There is always a professional way to deal with a situation.'
      ],
      examInsights: [
        'Q8 KEY — The rule when presenting an issue to your manager: "always be professional". Subjectivity and feelings-first presentations are the wrong answers.'
      ]
    },
    {
      id: '1.2.7',
      title: 'Cross-Culture Awareness',
      level: 'K2',
      type: 'skim',
      summary: "Communication issues get more complicated in cross-cultural teams: expectations for format AND content differ. An email that seems straightforward and factual to one culture may be confronting and impolite to another. Examples: a phone call may feel more confronting than email (more disruptive); an email may be misunderstood due to language; negative feedback may be hard to obtain where it is considered disrespectful; a request for overtime may be heard as a requirement, an inquiry, or a suggestion depending on background. Best approach: follow up to confirm the message was understood as intended, and keep an open dialog so any bad feeling is addressed immediately.",
      examInsights: [
        'KEY — Both the MEDIA and the CONTENT matter across cultures; follow up to confirm understanding.'
      ]
    },
    {
      id: '1.3.1',
      title: 'Video Conferencing',
      level: 'K2',
      type: 'skim',
      summary: "Video conferencing — particularly cameras-on — allows a more personal connection than email, and works for quick catch-ups, not just meetings. Screen sharing lets a developer see exactly what the tester sees — far more efficient than multiple emails and screenshots. For mostly-remote teams it keeps people connected, so some interpersonal chatter helps. But remember: most tools can RECORD and TRANSCRIBE, and recordings get saved — keep it professional even among friends.",
      examInsights: [
        'Q9 KEY — Good use of chat/video conferencing: "demonstrate a defect to a developer who has questions about a defect report". It does NOT replace the formal defect report, is NOT confidential for grievances (screenshots travel), and executives should have their own higher-level channel.'
      ]
    },
    {
      id: '1.3.2',
      title: 'Chat',
      level: 'K2',
      type: 'skim',
      summary: "Chat is the least formal mode — good for project info and personal notes (birthdays), quick questions, opinions, and clarity checks. Understand the organization's expected usage per channel; know WHO IS IN THE GROUP before posting (sponsors and management may be present — most teams keep separate management and technical groups). Chat content is easily copied to unanticipated recipients: do not assume privacy. For issues needing follow-up, email is better (scrolling chat threads back is hard), and a chat discussion about a possible defect is NOT a substitute for a formal defect report.",
      examInsights: [
        'KEY — Chat = discussion tool, not documentation. Formal records (defect reports, decisions needing reference) belong in the proper systems.'
      ]
    },
    {
      id: '1.3.3',
      title: 'Email',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Email is a PERMANENT RECORD (testers keep everything). Before sending ask: will the received message be the intended one? What if it is re-routed to the whole team? Did you really mean Reply-All? If in doubt, do not send — rewriting beats recalling.',
        'Pausing techniques: a two-minute send delay (a recall window); getting a second opinion from someone uninvolved (removes emotion, ensures objectivity); or sending the email TO YOURSELF first to review it as the recipient would. Rule: if the message is controversial, do not send without further consideration.',
        'The recipient may lack context — leaving out background invites misinterpretation or being ignored. Busy readers skim: make the gist easy to discern and the priority of action clear. Some respond without reading everything: two questions may get one answer — NUMBER multiple items.',
        'Including the original message in a reply is usually more convenient and efficient (no searching for what was answered); clear, concise presentation is simply polite.'
      ],
      examInsights: [
        'KEY — The pause toolbox: 2-minute delay, second opinion, send-to-self. Numbering multiple questions prevents half-answered emails.'
      ]
    },
    {
      id: '1.3.4',
      title: 'In-Person',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Some conversations are better in person: the reaction can be judged, the message adjusted, and a casual tone used. In-person is particularly good for casual chats AND difficult conversations; when unavailable, camera-on video conferencing is the next best option.',
        'It does not have to happen in the office — coffee, a snack, lunch, or (if appropriate) after-work drinks remove workplace distractions and formality.',
        'Picking the right environment depends on: the relationship between participants, the nature of the message, time constraints, personal circumstances, location, and accepted norms.',
        'Allow the other person to propose another time/place or refuse — if a developer declines lunch, an office meeting during work hours may fit better. Test managers can use team lunches/activities to keep a team connected across projects.'
      ],
      examInsights: [
        'Q10 KEY — In-person communication "should occur in the most suitable environment, which could include a coffee shop" — not office-only, not recorded, no witness needed.',
        'Q11 (K3, 2pts) — Unhappy co-worker with great potential → "offer to have an in-person chat outside of the office environment" (assuming a relationship exists). Sending them to a professional is not the FIRST step; funny videos and self-help links miss or offend.'
      ]
    },
    {
      id: '1.4.1',
      title: 'Anger Targeting',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Tight schedules boil over into anger — usually a manifestation of frustration. Take time, create space, and exercise empathy; anger resolves nothing and generates resentment.',
        'When targeted by anger: exhibit empathy to defuse; if that fails, EXIT the situation and catch up after everyone cools down. Frustration can be challenged with OBJECTIVE INFORMATION, turning a personal conflict into a problem the team solves together.',
        'People lose jobs over angry outbursts and get branded immature. Posting frustrations to public forums or social media has career repercussions — public professionalism matters as much as workplace professionalism.',
        'Testers become targets when quality issues impact schedules (developers pressured to deliver, PMs facing overruns). Respect everyone\'s time, present objective facts, demonstrate empathy. If a PATTERN of abuse toward testers develops, raise it to management — all workplaces, virtual or physical, should be safe.'
      ],
      examInsights: [
        'Q12 KEY — A common cause of tester frustration: "a schedule that is not realistic and does not allow enough time to test". Complex systems and DevOps pipelines are normal work, not frustration causes.'
      ]
    },
    {
      id: '1.4.2',
      title: 'Know Yourself',
      level: 'K2',
      type: 'skim',
      summary: "Deadlines and slips can make a whole team unhappy; bickering can become the norm. This is when the tester rises above: respect within the team is earned over time, and working professionally with consistently objective information establishes a working platform of FAIRNESS. Everyone has triggers — know yours and watch for situations that may cause an angry response. When testers feel targeted, talking together as a test team (including management as needed) re-establishes the dedication to testing as a profession and the commitment to objective reporting, regardless of whether the information is happily received.",
      examInsights: [
        'Q13 KEY — Schedule is half the estimate; increase FAIRNESS by "discussing testing and risk mitigation with the whole team so they understand which risks can be covered in the allotted time and which will not be addressed" — shared risk ownership. Not schedule horse-trading, not raiding developers, not delaying testing.'
      ]
    }
  ]
};
