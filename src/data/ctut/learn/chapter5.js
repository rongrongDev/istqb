// CT-UT — Chapter 5 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Usability testing watches representative users perform representative tasks — the only method that shows what users can actually accomplish. This chapter walks through the whole process: planning, scripts and tasks, locations and labs, running sessions, analyzing and rating findings, getting stakeholders to act on them, reporting, quality control, and the most common mistakes.",
  keywords: [
    "finding", "moderator", "think aloud usability testing", "usability test participant", "usability test script",
    "usability test session", "usability test task", "usability testing",
  ],
  objectives: [
    { id: "UTFL-5.2.1", level: "K2", text: "Understand the principal steps in the usability testing approach" },
    { id: "UTFL-5.3.1", level: "K2", text: "Understand the content of a usability test plan" },
    { id: "UTFL-5.3.2", level: "K2", text: "Understand the content of a usability test script" },
    { id: "UTFL-5.3.3", level: "K3", text: "Define a simple usability test task for a given project" },
    { id: "UTFL-5.3.4", level: "K2", text: "Understand considerations to be applied when deciding on a location for usability tests" },
    { id: "UTFL-5.3.5", level: "K2", text: "Understand the advantages and disadvantages of a usability test lab" },
    { id: "UTFL-5.4.1", level: "K2", text: "Understand the key activities in a usability test session" },
    { id: "UTFL-5.5.1", level: "K2", text: "Understand the procedure to apply for analyzing findings from a usability test" },
    { id: "UTFL-5.5.2", level: "K2", text: "Understand the classifications and ratings for usability findings" },
    { id: "UTFL-5.6.1", level: "K3", text: "Review a usability test report for a given project" },
    { id: "UTFL-5.6.2", level: "K2", text: "Understand how to overcome internal resistance to usability findings" },
    { id: "UTFL-5.6.3", level: "K3", text: "Apply a given list of best practices to report and communicate results" },
    { id: "UTFL-5.7.1", level: "K2", text: "Understand the quality control activities for a usability test" },
    { id: "UTFL-5.8.1", level: "K2", text: "Understand the most frequent and serious mistakes in usability testing" },
  ],
  sections: {
    "5.2": {
      objective: "UTFL-5.2.1",
      body: [
        { type: "p", text: "Usability testing evaluates how well specified users can use the system with effectiveness, efficiency and satisfaction in a specified context of use." },
        { type: "table", headers: ["Step", "Tasks"], rows: [
          ["1. Prepare the usability test", "Write the test plan, recruit participants, write test scripts, define test tasks, run a pilot session"],
          ["2. Conduct test sessions", "Prepare each session, brief the participant, pre-session interview, moderate, post-session interview"],
          ["3. Communicate results and findings", "Analyze findings, write the report, \"sell\" the findings (convince people)"],
        ]},
        { type: "p", text: "A usability test is a series of sessions. In each, a participant performs representative tasks on the product or a prototype while a neutral moderator runs the session and observers watch. Test under conditions as close to real use as possible — even a mock-up office or living room — and let stakeholders watch from a neighboring room so they see the product's effect on real people." },
      ],
    },
    "5.3.1": {
      objective: "UTFL-5.3.1",
      body: [
        { type: "p", text: "The usability test plan is a short (one or two pages) description of the test's purpose and extent that helps management or a client decide on it. Stakeholders and management review it until it is acceptable." },
        { type: "list", intro: "What the plan contains:", items: [
          "Goals — e.g. assess whether usability requirements are met, uncover problems to correct, and convincingly demonstrate to stakeholders that serious problems exist. The last goal is unique to usability testing, which is why testing convinces skeptics.",
          "User groups and who attends: the moderator (a neutral usability expert and the only person allowed to talk to the participant), the participant (a representative user), the note-taker (a usability expert recording findings) and observers (interested stakeholders — users, support, trainers, writers, developers, managers, designers, marketing; attendance optional).",
          "A reference to the usability requirements, if the test evaluates the design against them.",
          "Techniques — e.g. think aloud, where participants share their thoughts while solving tasks, revealing their thinking and vocabulary.",
          "Number of participants, schedule and length of sessions, and the name of the responsible moderator.",
          "Resource and cost estimate, including person-hours and participant incentives.",
          "Location — usually face-to-face; alternatives are remote testing (via messaging, webinar or video) and unmoderated testing.",
          "How the findings will be communicated.",
        ]},
      ],
    },
    "5.3.2": {
      objective: "UTFL-5.3.2",
      body: [
        { type: "p", text: "A usability test script specifies the sequence of actions for running the test — in practice the moderator's checklist for each session. It contains the preparation activities before the participant arrives, the briefing instructions, pre-session interview questions, the test tasks, and post-session interview questions." },
      ],
    },
    "5.3.3": {
      objective: "UTFL-5.3.3",
      body: [
        { type: "p", text: "A usability test task is an activity, set by the moderator, that the participant must accomplish within a given time. Prepare enough tasks to fill the session." },
        { type: "list", intro: "A good task:", items: [
          "Matches the goals in the test plan.",
          "Is meaningful to the participant — e.g. ordering a product — rather than system-oriented chores such as logging in, changing a password or finding the webmaster's name.",
          "Matters to the stakeholders.",
        ]},
        { type: "table", headers: ["Each task specifies", "Example"], rows: [
          ["Exact scenario wording handed to the participant", "\"You want to send flowers to your mother for her birthday…\""],
          ["Preconditions and available resources", "Logged-in account, a credit card"],
          ["Justification — what it evaluates", "Checkout efficiency"],
          ["Data provided", "A delivery address; what's in the database at the start"],
          ["Completion or abandonment criteria and expected outcome", "\"If no answer within 10 minutes, the task is abandoned\""],
        ]},
        { type: "list", intro: "Ordering tasks:", items: [
          "Make the first task simple for a quick success — especially if the participant seems stressed.",
          "Put tasks essential to the product's success before less important ones.",
          "Follow a logical order from the participant's view — order something before cancelling an order.",
          "Avoid tasks that depend on a previous task succeeding.",
          "Make the last task simple too, so the session doesn't end in frustration.",
        ]},
      ],
    },
    "5.3.4": {
      objective: "UTFL-5.3.4",
      body: [
        { type: "p", text: "Possible locations: a dedicated usability lab, two offices connected by video, an ordinary office, a room where the participant lives or works, or a public place such as a café (usually for quick sessions of ten minutes or less)." },
        { type: "p", text: "The observers are the primary users of a session. They must be able to discuss and react freely without disturbing the test, and come and go as they please — rules restricting observers show an unusable setup. Watching from their desks via screen sharing is possible but worse, because discussing with other stakeholders is a key part of observing." },
      ],
    },
    "5.3.5": {
      objective: "UTFL-5.3.5",
      body: [
        { type: "p", text: "A usability lab is two or more specially equipped rooms: a test room for the participant and an observation room for observers and note-takers, often separated by a one-way mirror, with cameras and monitors showing the participant's face, screen and desk." },
        { type: "table", headers: ["Advantages", "Disadvantages"], rows: [
          ["Observers watch together; sessions are easy to observe and video-record", "The context is artificial — it can feel unrealistic to participants"],
          ["Every session runs under similar conditions; observers can enter and leave", "Expensive to set up and maintain"],
          ["Shows visitors the organization's commitment to usability", ""],
        ]},
        { type: "p", text: "A pilot session runs the script in the real setup to check both. If serious script problems show up, fix the script and pilot again. Use real users where possible, otherwise colleagues — but never the product's designers. Pilot findings can count: if an over-qualified pilot participant still hits a serious problem on a valid task, it's a usability problem." },
      ],
    },
    "5.4": {
      objective: "UTFL-5.4.1",
      body: [
        { type: "table", headers: ["Activity", "What happens"], rows: [
          ["Preparation", "The moderator sets up the hardware, product and tasks before the participant arrives"],
          ["Briefing", "The moderator explains the test's purpose and the participant's role and contribution"],
          ["Pre-session interview", "The participant describes their background and experience with this or similar products"],
          ["Moderation", "The participant solves the tasks handed out, thinking aloud; the moderator observes quietly and only steps in when the participant is completely stuck — usually by moving on to the next task"],
          ["Post-session interview", "The participant gives their overall impression — key questions: which 2–3 things did you like most, and which 2–3 most need improvement?"],
        ]},
        { type: "p", text: "Think aloud means encouraging the participant to say what they are thinking as they work, so moderator, note-taker and observers understand their reasoning and vocabulary." },
      ],
    },
    "5.5": {
      objective: "UTFL-5.5.1",
      body: [
        { type: "p", text: "Analysis turns session observations into findings:" },
        { type: "list", items: [
          "During each session the note-taker records observations — events that hurt or help effectiveness, efficiency or satisfaction.",
          "Right after each session, note-taker and moderator candidly discuss what they saw.",
          "After all sessions, each separately extracts the 20–30 most important usability problems and 5–10 positive findings.",
          "They meet again and merge them into one list of 20–30 problems and 5–10 positive findings.",
          "The moderator logs the problems in the usability problem tracker — ideally the defect tracking tool.",
          "The moderator tracks them to resolution and reviews the fixes; a risky fix gets another usability test.",
        ]},
        { type: "p", text: "Discussions must be honest and based on observations, not opinions. Reports must stay usable, so the number of findings is limited — finding 70 problems and passing them all on is unacceptable; the moderator must prioritize. Comparing with earlier reports reveals trends and recurring problems." },
      ],
    },
    "5.6.2": {
      objective: "UTFL-5.5.2",
      body: [
        { type: "p", text: "Usability test results show what representative users can accomplish with representative tasks. Collecting or debating opinions doesn't serve that, so a task like \"Is the home page design appropriate?\" is invalid. Follow up remarks such as \"most others will struggle\" with \"Why do you think so?\". Opinion-based findings (\"the home page is really pretty\") can be reported only if a majority of participants said so spontaneously." },
        { type: "p", text: "A usability finding identifies an important issue, problem or opportunity. Positive findings matter: they give a balanced view that makes fixes easier to sell, tell developers what not to change, and complete the picture of usability. Each finding has a classification and severity, a short header, a description (general claims like \"error messages aren't helpful\" need at least two examples), and optionally participant quotes, recommendations and screenshots." },
        { type: "table", headers: ["Classification", "Meaning"], rows: [
          ["Usability problem", "Must have a severity rating"],
          ["Positive finding", "Works well — recommended"],
          ["Good idea", "A participant's suggestion that could significantly improve the experience"],
          ["Functional problem", "A defect"],
        ]},
        { type: "table", headers: ["Severity", "Meaning"], rows: [
          ["Minor", "Minor dissatisfaction, noticeable delays, superficial difficulties"],
          ["Major", "Substantial delays or moderate dissatisfaction"],
          ["Critical", "Participants gave up; showstopper, substantial dissatisfaction or minor financial damage"],
          ["Catastrophic", "Existential threat — potentially life-threatening, bodily harm, substantial financial damage"],
        ]},
        { type: "p", text: "Moderator and note-taker rate severity from the participant's point of view (sometimes with a domain expert), considering frequency (how often), impact (how badly it hurts) and persistence (how quickly users learn to avoid it)." },
      ],
    },
    "5.6.3": {
      objective: "UTFL-5.6.2",
      body: [
        { type: "p", text: "Stakeholders who aren't usability professionals often need convincing — some developers see \"their\" interface as part of themselves. If findings aren't accepted, little will change, so the usability tester must sell them, understanding each stakeholder's motivation. In organizations with low usability maturity, only a usability test may make the cost of ignoring usability visible. In reviews and heuristic evaluations, beware that strong arguers can make opinions outweigh facts." },
        { type: "list", intro: "Get buy-in by involving stakeholders — especially those who decide on and implement changes:", items: [
          "In the risk assessment.",
          "In writing and reviewing the plan, scripts and especially the tasks.",
          "In recruitment — defining the participant profile and screener.",
          "As observers — schedule sessions at convenient times (e.g. Friday afternoons), advertise widely, welcome partial attendance, test near where they work, and let them watch as a group. Seeing real users struggle convinces skeptics.",
          "In reviewing the report.",
        ]},
        { type: "p", text: "Agile builds much of this in: the Product Owner takes part in planning and running evaluations, supplies usability requirements and settles disagreements (e.g. on severity), and the whole-team approach encourages free exchange of views and shared ownership of quality." },
      ],
    },
    "5.6.4": {
      objective: "UTFL-5.6.1",
      body: [
        { type: "p", text: "A usability test report is mandatory. Written by the usability tester or moderator, it documents and communicates the most important findings and must work for its key readers — the developers and the managers who decide what changes." },
        { type: "table", headers: ["Section", "Contents"], rows: [
          ["1. Executive summary", "Object evaluated, techniques used, most important findings, general recommendations"],
          ["2. Table of contents", ""],
          ["3. Findings and recommendations", "As described in section 5.6.2"],
          ["4. Objectives", "Objective of the evaluation"],
          ["5. Purpose", "Purpose, including the relevant usability requirements"],
          ["6. Evaluation method", "How the test was run and designed, physical and technical environment, the test script, an anonymized participant list"],
          ["7. Contacts", "Names and contact details of moderators and note-takers"],
        ]},
      ],
    },
    "5.6.5": {
      objective: "UTFL-5.6.3",
      body: [
        { type: "p", text: "The single most important practice: communicate positively and productively with the development team and stakeholders." },
        { type: "table", headers: ["Best practice", "In practice"], rows: [
          ["Involve and respect stakeholders", "Let the development team help write the report, consider and include their findings even when they differ, treat them as partners, avoid jargon"],
          ["Keep the main report short and comprehensible", "At most 25 findings and at most 20 pages, whatever the test's size"],
          ["Include a usable executive summary", "About one page, only the key findings, at the start of the report"],
          ["Keep to the point", "Crisp findings; no long explanations of usability, session transcripts or process descriptions — one- or two-line quotes are fine"],
          ["Rate the severity of all findings", "See section 5.6.2"],
          ["Include positive findings", "See section 5.6.3"],
          ["Ensure completeness", "All report sections are present"],
          ["Respect private or sensitive information", "No recruitment screeners or participant confirmations"],
        ]},
        { type: "p", text: "In agile teams, documentation matters less: findings may be a verbal briefing, go straight into backlog items or bug reports, and be discussed daily or in the retrospective — so brevity is even more important when a written report exists." },
      ],
    },
    "5.7": {
      objective: "UTFL-5.7.1",
      body: [
        { type: "list", intro: "Quality control checks that the test was done properly:", items: [
          "The test plan has the required content and was reviewed and approved by all relevant stakeholders.",
          "The script — especially the tasks — and the actual participants' profiles match the purpose in the plan.",
          "Observe the first two or three sessions to make sure they follow the script.",
          "Compare the moderator's and note-taker's notes with your own observations; raise an issue if important problems or positives were missed.",
          "If asked by the project leader or test manager, compare time and resources used with the plan and raise significant discrepancies.",
          "Findings are communicated as planned; the report follows the best practices; representative stakeholders find it understandable and useful.",
          "Attend result presentations and check that discussion is two-way, constructive and professional.",
        ]},
      ],
    },
    "5.8": {
      objective: "UTFL-5.8.1",
      body: [
        { type: "table", headers: ["Frequent mistake", "Why it hurts"], rows: [
          ["Unclear purpose", "The purpose must be in the plan and approved before evaluation starts"],
          ["Scheduling too late", "No time to fix problems before release (less likely in agile)"],
          ["Critical results ignored", "Management overrules them"],
          ["Incorrect focus", "Minor details like guideline violations and graphics instead of serious effectiveness and efficiency problems"],
          ["Moderator too active", "The moderator should passively observe — not interview, entertain or demonstrate the product"],
          ["No post-session interview", "Loses the participant's summary impression"],
          ["No stakeholder involvement", "Findings won't be accepted"],
          ["Unusable report", "Too long, too many findings, no one-page executive summary"],
          ["No positive findings", "Results are harder to accept"],
          ["Findings not categorized", "Readers can't tell critical from minor problems"],
        ]},
      ],
    },
  },
};
