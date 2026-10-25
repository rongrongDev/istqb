// ASTQB CT-SS v1.0 — Chapter 1 learn content, authored from the Soft Skills for Testers syllabus (2025-10-01).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Block types: p (paragraph), list ({intro?, items}), table ({headers, rows}),
// example ({title, text}), note ({title?, text}).

export default {
  intro:
    "Testers spend a good part of their time communicating — email, text, meetings, face-to-face. Each communication is an opportunity to promote the value of testing, and a potential pitfall for testing to be regarded as unnecessary or unprofessional. This chapter covers staying professional, showing empathy for every role on the team, choosing between communication modes, and deflecting anger and frustration.",
  keywords: ["acceptance criteria", "Service Level Agreement (SLA)", "Subject Matter Expert (SME)", "User Acceptance Test (UAT)"],
  objectives: [
    { id: "SS-1.1.a", level: "K2", text: "Summarize the characteristics of effective communication" },
    { id: "SS-1.1.b", level: "K2", text: "Differentiate between professional and unprofessional communication" },
    { id: "SS-1.1.c", level: "K2", text: "Explain why it is important to pause before sending an email" },
    { id: "SS-1.2.a", level: "K2", text: "Explain how viewpoint affects the receipt of a message" },
    { id: "SS-1.2.b", level: "K2", text: "Describe the value provided by Business Analysts" },
    { id: "SS-1.2.c", level: "K2", text: "Explain how a tester can facilitate Business Analyst review of test cases" },
    { id: "SS-1.2.d", level: "K2", text: "Give examples of how PM focus differs from testing" },
    { id: "SS-1.2.e", level: "K2", text: "Explain how schedule-impacting events can be tracked and presented" },
    { id: "SS-1.2.f", level: "K2", text: "Summarize the considerations when working with developers on defect resolution" },
    { id: "SS-1.2.g", level: "K2", text: "Explain how testers can improve efficiency and teamwork with other testers" },
    { id: "SS-1.2.h", level: "K2", text: "Explain how problems should be presented to management" },
    { id: "SS-1.3.a", level: "K2", text: "Summarize potential issues with video conferencing" },
    { id: "SS-1.3.b", level: "K2", text: "Summarize potential issues with using chat tools" },
    { id: "SS-1.3.c", level: "K2", text: "Summarize potential issues with email" },
    { id: "SS-1.3.d", level: "K2", text: "Explain the benefits of face-to-face communication" },
    { id: "SS-1.3.e", level: "K3", text: "Select and use the best environment to convey a particular type of message" },
    { id: "SS-1.4.a", level: "K2", text: "Summarize causes of frustration in a work environment" },
    { id: "SS-1.4.b", level: "K2", text: "Explain good techniques to defuse anger in a business situation" },
    { id: "SS-1.4.c", level: "K2", text: "Explain how fairness can be established" },
  ],
  sections: {
    "1.1.1": {
      objective: "SS-1.1.a",
      body: [
        { type: "p", text: "A professional approach is always best, even when communicating with a close colleague — because the intended recipient may not be the only recipient. Email gets forwarded, defect reports get shared, meetings get recorded, and context gets lost along the way. 'The code is broken again' may be understood by the developer familiar with the issues, but not appreciated by their manager working to improve quality, or the project manager worried about the schedule." },
        { type: "p", text: "Effective communication gets the message to the recipient accurately, quickly, and concisely. Everyone is busy: with defect reports, no one appreciates wading through 25 steps to find the one that failed — but 'concise' fails if the developer has to request more information. Getting the right information communicated clearly, at the right level of detail, on the first attempt, is a learned skill." },
        { type: "list", intro: "Two keys to having a message received as intended:", items: [
          "Keep the tone OBJECTIVE — report observations, not opinions. This avoids slanting the information, particularly toward the negative.",
          "Concentrate on INFORMING rather than guiding — it makes it easier to review the message and confirm all necessary information is included, saving frustration and clarification rounds.",
        ]},
        { type: "note", title: "Exam anchor (Q1)", text: "The goal of effective communication: the recipient receives the message the sender intended." },
      ],
    },
    "1.1.2": {
      objective: "SS-1.1.b",
      body: [
        { type: "p", text: "A common mistake in business communication is assuming the recipient is a buddy. Working closely with a team is normal, and in-person communication may be informal — but ALL written communication should be professional. Written and recorded communication has a long life and can easily be reviewed by someone other than the intended recipient; when that happens, misinterpretation is easy, and a joke can be read as an insult." },
        { type: "p", text: "Professional does not mean sterile. Communication can be informal, but it must be professional and not open to interpretation — one reason objective statements are preferred." },
        { type: "example", title: "Objective beats subjective", text: "A developer would rather see: 'I expected the software to do xxx based on the requirements, but it did xxx. Is that correct?' than 'The software isn't working right'. And 'The software doesn't work, and apparently neither does the developer!' — even as an inside joke — is simply unacceptable; test managers spend significant time doing damage control over exactly this." },
      ],
    },
    "1.1.3": {
      objective: "SS-1.1.c",
      body: [
        { type: "p", text: "Testing is a frustrating job, and sometimes emotions cloud judgment — sometimes without the tester even noticing. That is when it pays to pause before hitting send. It is easy to dash off a quick, less-than-professional message, defect report, or weekly status; the best approach is to review, re-write, and maybe not send at all." },
        { type: "p", text: "A negative comment in a status report can be incorporated into a larger status report undetected by the busy manager compiling it. A subjective comment in a defect report can end up reviewed by the entire triage team. Review before sending — it reduces the time needed for apologizing later." },
      ],
    },
    "1.2.1": {
      objective: "SS-1.2.a",
      body: [
        { type: "p", text: "Testers have a different viewpoint from most other project team members. They are not paid to be optimistic about schedules or miracles — they deal with software that does not work, environments that are broken, and schedules that are impossible. The resulting outlook can be considered negative, even though it is only realistic, and it can get the tester classified as negative, uncooperative, not a team player, or resistant." },
        { type: "p", text: "'Read the room': others may operate from unrealistic optimism or from a different set of information. When the development team reports 'on schedule', an announcement from the test team that no progress has been made for six weeks will not be expected — and will not be received positively. People also react differently depending on who is present: a developer honest about quality with a tester alone may change their voice when their manager is in the room; a whole team may agree the schedule is unrealistic but leave the tester as the lone voice of dissent." },
        { type: "p", text: "When presenting information that will likely be interpreted as negative, present the BACKGROUND as well — the reasons for the six-week blockage. Without adequate background, denial or message dismissal follows. Testers often find themselves in the trainer role, familiarizing the team with how testing works; well-rounded testers with development, BA, and PM experience can help others see the other viewpoints." },
      ],
    },
    "1.2.2": {
      objective: "SS-1.2.b",
      body: [
        { type: "p", text: "BAs have a difficult role: translating nebulous business SME explanations into technical requirements, while being pelted with questions from users, developers, data analysts, PMs, and testers. That can make them impatient — and if they do not understand the tester role, insulted that their requirements are being 'questioned'." },
        { type: "p", text: "Any experienced tester values a good BA: they know what users need, how they will use the software, and their expectations and concerns — precious knowledge for valid test cases, focused prioritization, and a successful UAT. Acceptance criteria define the requirements; ideally they are captured and reviewed by the team, but if the BA has not and will not, the tester can capture them — often as test conditions later used to build test cases." },
        { type: "list", intro: "Approach acceptance-criteria work as a task NEEDED FOR TESTING (not something the BA should have done), and agree communication preferences:", items: [
          "Approach the BA directly with questions (email, phone, in person)",
          "Approach the users or SMEs directly",
          "Create a question register with a Service Level Agreement (SLA) for responses",
          "Any other approach the BA prefers — multiple paths make the BA feel less bombarded, though a response expectation must exist or the tester gets blocked",
        ]},
        { type: "p", text: "Ideally the BA reviews all test cases before execution — but that is very time-consuming and rare. It is usually better to hold a REVIEW MEETING where the tester walks through sets of test cases: the review gets done, and questions get answered in the room." },
      ],
    },
    "1.2.3": {
      objective: "SS-1.2.d",
      body: [
        { type: "p", text: "Project managers care primarily about getting the work done within budget and on schedule — which makes them resistant to information indicating problems with either. Quality issues usually hurt both. Many schedules are built assuming NO quality issues: developers develop, testers 'do something', users accept, everyone is happy. In reality, quality issues get through to testing and impact schedules — and testers get blamed." },
        { type: "p", text: "Track the data. If the test environment slipped five weeks 'one day at a time', every outage and delay must have been tracked (some teams record a defect per delay, prioritized by the team) and reported in every weekly status — so the cumulative slip is never a surprise." },
        { type: "p", text: "Present WORKAROUNDS along with problems — a fine line between showing willingness and letting issues be minimized. Use a measure of EFFECTIVE PROGRESS during blockage: with the environment down, the team preps data, writes test cases, follows up on defects — not idle, but perhaps only 45% effective versus a working environment. Testers timeshare tasks; that may be invisible to the PM." },
        { type: "p", text: "Be factual: show defect trends and regression rates compared to expected trends so the PM understands why the schedule is slipping. And treat good news with caveats too: a project 50% complete and ahead of schedule may have delivered only 25% of the high-risk items — the PM needs the residual risk, and supplying it is the test team's job." },
      ],
    },
    "1.2.4": {
      objective: "SS-1.2.f",
      body: [
        { type: "p", text: "Developers may say they focus on creation while testers focus on criticizing — a negative framing, but one to keep in mind. Developers are often driven by unrealistic deadlines and assessed on code completed; defects are seen as impacting forward progress, and schedules rarely allow time for defect research and fixing." },
        { type: "list", intro: "Considerations when working with developers on defect resolution:", items: [
          "Schedule constraints",
          "Agreed SLAs for defect fixing, to set the expectation",
          "Communication preferences (email, conference call, in-person)",
          "Additional data needed (data, screenshots)",
          "Use of the backlog to store defect reports",
          "Prioritization and scheduling",
        ]},
        { type: "p", text: "The tester's goal with a defect report: make the defect EASY TO FIX — supply everything the developer needs when the report is written, and answer questions quickly. Early triage saves everyone time. Discuss priority and fix expectations: backlogged defect reports tend to rank below scheduled work, so blocking defects need explicit visibility (some teams use an 'urgency' setting). Understanding the SLAs sets expectations for turnaround and reduces frustration. If developers cannot or will not communicate, escalate to the test manager and project manager — but ideally solve communication issues one-to-one." },
      ],
    },
    "1.2.5": {
      objective: "SS-1.2.g",
      body: [
        { type: "p", text: "Territorial testers — wanting no one else in 'their' area — show ownership but constrain the flow of work. Testers need to share what they are doing and avoid duplication; daily standups help everyone know who is doing what." },
        { type: "p", text: "Every tester is responsible for knowing what is being tested, what defects are already reported, and who is assigned where. Redundant testing, duplicate defects, and data destruction hurt team efficiency: the test manager assigns areas, but each tester must ensure every defect report they write is NOT a duplicate, and that the test data they use is theirs to use — destroying data someone else painstakingly created causes resentment." },
        { type: "p", text: "Areas overlap, data moves between modules, interfacing systems touch multiple areas — clear communication within the team is vital. A conferencing tool (e.g., Microsoft Teams) lets the team quickly post plans and check whether a defect has already been seen. And mistakes WILL happen: defects get missed, tests turn out not to be executable. If someone catches a defect someone else missed, the correct comment is 'thank you', not 'why were you testing in my area?'." },
      ],
    },
    "1.2.6": {
      objective: "SS-1.2.h",
      body: [
        { type: "p", text: "The tester–manager relationship is critical for job happiness: the manager creates a supportive environment; the tester is honest, does the best work possible, and grows. Anytime a tester brings a problem, they should also bring a POSSIBLE SOLUTION — even imperfect, it shows thought and willingness. This is particularly true for interpersonal problems: no one likes a complainer, particularly someone busy." },
        { type: "example", title: "Complaint vs solution", text: "'The developer is ignoring me. Every time I bring him a problem, he says he's too busy. I think he hates me.' — a complaint. 'I think the developer is too busy. When I bring him a problem, he says he doesn't have time. Could we start a short daily triage meeting for the high-priority problems?' — a possible solution." },
        { type: "p", text: "Word problems in professional, objective terms so the manager does not have to sort through emotion first. A tester needs to be productive, not destructive. Professionalism is always respected, even when the tester is wrong — and professionalism grows careers: hot heads rarely progress, and business people have long memories for emotional outbursts, even justified ones. There is always a professional way to deal with a situation." },
      ],
    },
    "1.2.7": {
      objective: "SS-1.2.a",
      body: [
        { type: "p", text: "Communication issues between roles get further complicated in cross-cultural teams. People from different cultures have different expectations for the format AND content of communication: an email that seems straightforward and factual to one culture may be confronting and impolite to another." },
        { type: "list", intro: "Examples of cultural effects — both the media and the content matter:", items: [
          "A phone call may be seen as more confronting than an email, because it is more disruptive",
          "An email may be misunderstood because of language issues",
          "Negative feedback may be hard to obtain where giving it to a manager is considered disrespectful",
          "A request for overtime may be taken as a requirement, an inquiry, or a suggestion depending on background",
        ]},
        { type: "p", text: "The best approach: follow up to be sure the message was understood as intended, and keep an open dialog so any potential bad feeling is immediately addressed and resolved." },
      ],
    },
    "1.3.1": {
      objective: "SS-1.3.a",
      body: [
        { type: "p", text: "Video conferencing — particularly cameras-on — offers a more personal connection than email. It is used for meetings but also works for a quick catch-up with a team member or developer. Screen sharing means the developer sees exactly what the tester sees — far more efficient than multiple emails and screenshots." },
        { type: "p", text: "For mostly-remote teams, video conferences keep everyone connected, so some interpersonal chatter is usually helpful. But before getting too comfortable: most video conferencing tools can RECORD and TRANSCRIBE what is said, and recordings are sometimes saved for reference. Keep it professional, even when talking with friends." },
      ],
    },
    "1.3.2": {
      objective: "SS-1.3.b",
      body: [
        { type: "p", text: "Chat is the least formal communication mode — individual chats or group chats for a project team — and works well to keep everyone informed about project matters and personal notes like birthdays. Organizations differ on what belongs in which chat; understand and comply with the expected usage per channel." },
        { type: "p", text: "Know WHO IS IN A CHAT GROUP before posting: groups can include project sponsors and management alongside developers, testers, and BAs. Some information does not suit sponsors or does not warrant management escalation — most teams keep at least one management group and one technical-team group, quelling noise for management while letting the technical team communicate freely." },
        { type: "p", text: "Chat is great for quick information, questions and answers, and opinions — and for quickly checking whether a defect was already reported. But chat content is easily copied to unanticipated recipients (do not assume privacy), scrolling back to find a thread is hard (email records better), and a chat discussion about a possible defect is NOT a substitute for a formal defect report. Use chat for discussion, not as replacement for formal documentation needed for further processing or reference." },
      ],
    },
    "1.3.3": {
      objective: "SS-1.3.c",
      body: [
        { type: "p", text: "Think before hitting send. Will the message sent be the message received? If it were re-routed to the whole team, would that be a problem? Email is a PERMANENT RECORD — most testers, natural packrats, keep everything sent and received. Did you really mean Reply-All? If there are doubts, do not send: stopping and rewriting is much easier than recalling." },
        { type: "list", intro: "Techniques for building in the pause:", items: [
          "A two-minute send delay — a recall window for the wave of regret just after pressing send",
          "A second opinion on controversial messages, preferably from someone not immediately involved — removes emotion, ensures objectivity",
          "Write the email and send it TO YOURSELF first — review it as the recipient would see it, then send or edit",
        ]},
        { type: "p", text: "The rule: if the message is controversial, do not send it without further consideration. Remember the recipient may lack full context — omitting background invites misinterpretation or being ignored. Busy readers glance through email; make the gist easy to discern and the priority of action clear. Some people respond without reading everything: two questions may get one answer, so NUMBER multiple items. Including the original message in a reply is usually more convenient and efficient, and clear, concise presentation is simply polite." },
      ],
    },
    "1.3.4": {
      objective: "SS-1.3.e",
      body: [
        { type: "p", text: "In-person communication is still a core part of being human. Some conversations are better had in person: the reaction can be judged, the message adjusted, and a more casual tone used. In-person is particularly good for casual chats AND for difficult conversations. When it is not an option, camera-on video conferencing is the next best alternative — seeing the recipient's reaction reduces misinterpretation and offense." },
        { type: "list", intro: "It does not have to happen in the office — coffee, a quick snack, lunch, or (if appropriate) after-work drinks remove distractions and formality. Picking the right environment depends on:", items: [
          "The relationship between the participants",
          "The nature of the message",
          "Time constraints",
          "Personal circumstances",
          "Location",
          "Accepted norms",
        ]},
        { type: "p", text: "Allow the other person to propose another time or place, or to refuse: if a developer declines lunch, a meeting at the office during work hours may be more appropriate. Flexibility creates the best environment, particularly for controversial topics. For test managers, team lunches and activities keep a team working together across projects — informal, non-work conversation builds a supportive environment." },
        { type: "example", title: "K3 scenario (Q11)", text: "A co-worker seems unhappy with work and their career, and you think they just need encouragement: offer an in-person chat OUTSIDE the office environment (given an existing relationship). Referring them straight to a professional skips the personal reach-out; funny videos and self-help links miss the mark or offend." },
      ],
    },
    "1.4.1": {
      objective: "SS-1.4.b",
      body: [
        { type: "p", text: "Tight schedules and project pressures sometimes boil over into anger — usually a manifestation of frustration. Whenever frustration is involved: take some time, create some space, and exercise empathy. Anger resolves nothing; it generates bad feelings and resentment." },
        { type: "p", text: "When a tester is the TARGET of anger: exhibit empathy to defuse; if that is not enough, EXIT the situation and catch up after everyone has cooled down. Frustration can sometimes be challenged with OBJECTIVE INFORMATION — turning something personal into a problem the team can solve together." },
        { type: "p", text: "People lose jobs over angry outbursts and harm careers by being branded immature. Posting frustrations to public forums has career repercussions: public professionalism in social media matters as much as in the workplace. Testers become targets when quality issues impact schedules — developers pressured to deliver, PMs facing delays and overruns. Respect everyone's time, present objective and factual information, demonstrate empathy. If a PATTERN of abuse and disrespect for testers develops that individuals cannot turn around, raise it to management — all workplaces, virtual or physical, should be safe." },
      ],
    },
    "1.4.2": {
      objective: "SS-1.4.c",
      body: [
        { type: "p", text: "Deadlines and slips can make an entire team unhappy; bickering can become the norm when defects are reported and environments are faulty. This is when the tester rises above. Respect within the team is earned over time; not all teams will be compatible, but working professionally and providing consistently objective information establishes a working platform of FAIRNESS." },
        { type: "p", text: "Everyone has triggers — know yours and watch for situations that may cause an angry response. When testers feel targeted, talking together as a test team (including management as needed) re-establishes the dedication to testing as a profession and the commitment to reporting objectively, regardless of whether the information is happily accepted." },
        { type: "example", title: "Fairness in practice (Q13)", text: "Given a schedule half the estimate, fairness is increased by discussing testing and risk mitigation with the whole team — so everyone understands which risks can be covered in the allotted time and which risks will NOT be addressed. Shared risk ownership beats schedule arguments." },
      ],
    },
  },
};
