// ASTQB CT-SS (Soft Skills for Testers) v1.0 — Official sample exam, parsed from the PDFs in trainings/.
// Answers, LOs, K-levels, points, and rationales come from the ASTQB Sample Exam Answers PDF.
// 40 questions, 45 points (five 2-point questions: 11, 14, 27, 34, 38), 30 points needed to pass.
export const questions = [
  {
    id: 1,
    lo: "SS-1.1.a",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "What is the goal of effective communication?",
    options: [
      { id: "a", text: "To get the message to the recipient as quickly as possible" },
      { id: "b", text: "To include all the details in the message so there are no questions" },
      { id: "c", text: "To ensure the recipient receives the message the sender intended" },
      { id: "d", text: "To create a record of the transmission of information" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): This is the goal of effective communication — the recipient receives what the sender intended.\n\nWRONG (a), (b), (d): Speed, exhaustive detail, and record-keeping are not the goal; the received meaning is."
  },
  {
    id: 2,
    lo: "SS-1.1.c",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Why should a busy tester pause before sending an email containing a response to a developer's questions about a defect report?",
    options: [
      { id: "a", text: "Because the developer should do their own research and not rely on the busy tester" },
      { id: "b", text: "Because the busy tester might be answering the wrong questions" },
      { id: "c", text: "Because the developer should only interact with the tester via the defect tracking system" },
      { id: "d", text: "Because the busy tester might not have been as objective as they should be" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): The biggest risk with a quick email is that it might contain something negative or subjective — not as objective or well researched as it should be. Pausing and checking saves later apologies and rework.\n\nWRONG (a), (b), (c): These miss the point — the pause is about objectivity, not research duties or channel rules."
  },
  {
    id: 3,
    lo: "SS-1.2.a",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Whose viewpoint of a project is often characterized as “negative”?",
    options: [
      { id: "a", text: "Project Manager" },
      { id: "b", text: "Business Analyst" },
      { id: "c", text: "Developer" },
      { id: "d", text: "Tester" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): The tester's viewpoint is usually the one classified as negative — even though it is probably just realistic, while everyone else is being overly optimistic about quality and schedule."
  },
  {
    id: 4,
    lo: "SS-1.2.c",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is an effective use of a Business Analyst's time for reviewing test cases?",
    options: [
      { id: "a", text: "Provide the BA with all the test cases as they are developed to allow them the most time possible for review" },
      { id: "b", text: "Limit their review to only the output when the tests are executed" },
      { id: "c", text: "Have a review meeting with the BA where sets of test cases are walked through by the testers" },
      { id: "d", text: "Require the acceptance criteria to be defined by the BA prior to developing test cases so the test cases will not need a review" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Grouping test cases into related sets and walking through them in a meeting reviews more test cases in a shorter time span, and questions get answered right in the meeting — reducing the need for multiple emails later.\n\nWRONG (a), (b), (d): Dumping all cases on the BA, reviewing only outputs, or skipping review entirely are not effective uses of BA time."
  },
  {
    id: 5,
    lo: "SS-1.2.d",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is a good set of metrics to present to a project manager to support schedule slippage due to quality issues?",
    options: [
      { id: "a", text: "Hours worked per day and number of testers available" },
      { id: "b", text: "Testing hours and developer hours available per week" },
      { id: "c", text: "Root cause analysis and a list of which developers will address which root causes" },
      { id: "d", text: "Defect trends and regression rates over time" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Defect trends and regression rates over time are the most effective metrics to explain quality issues to a PM.\n\nWRONG (a), (b), (c): Interesting, but they do not particularly highlight the quality issues being experienced."
  },
  {
    id: 6,
    lo: "SS-1.2.f",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "What is the benefit of having clear service level agreements between the test and development teams?",
    options: [
      { id: "a", text: "It helps to set the priority of defects to be fixed" },
      { id: "b", text: "It ensures that all the necessary information is included in the defect report" },
      { id: "c", text: "It reduces frustration by setting expectations for response times from the developers and testers" },
      { id: "d", text: "It defines the backlog schedule and determines which items will be stored in the backlog" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): SLAs set the expectation of how fast a developer will respond to a defect report and provide a fix — and how quickly testers must respond to developer questions. That reduces frustration.\n\nWRONG (a), (b), (d): SLAs do not set defect priorities, report contents, or backlog scheduling."
  },
  {
    id: 7,
    lo: "SS-1.2.g",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Who is responsible to ensure a defect report is not a duplicate?",
    options: [
      { id: "a", text: "The developer who is fixing the defect" },
      { id: "b", text: "The tester who is writing the defect report" },
      { id: "c", text: "The project manager" },
      { id: "d", text: "The business analyst who is responsible for that area of the software" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Every tester is responsible for ensuring that the defect report they are writing is not a duplicate of an existing report."
  },
  {
    id: 8,
    lo: "SS-1.2.h",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "What is a good rule to follow when presenting an issue to your manager?",
    options: [
      { id: "a", text: "Always be professional" },
      { id: "b", text: "Always be subjective" },
      { id: "c", text: "Always present your feelings about this issue" },
      { id: "d", text: "Always ensure your manager understands how much the issue bothers you" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): You will never go wrong by being professional and objective.\n\nWRONG (b), (c), (d): Subjectivity and emotion force the manager to sort through feelings before finding the real problem."
  },
  {
    id: 9,
    lo: "SS-1.3.a",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is a good use for a chat/video conferencing tool?",
    options: [
      { id: "a", text: "To demonstrate a defect to a developer who has questions about a defect report" },
      { id: "b", text: "To replace the formal defect report and save time for both the tester and developer" },
      { id: "c", text: "To air grievances about other team members in a confidential way" },
      { id: "d", text: "To provide a channel for executive management to see the technical discussions" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Demonstrating a defect via screen sharing is the best use of the tool.\n\nWRONG (b): Defects must still be logged in the defect management system.\n\nWRONG (c): Chats are easy to screenshot and forward — never confidential.\n\nWRONG (d): Management should have their own higher-level channel so they do not get bogged down in technical discussions."
  },
  {
    id: 10,
    lo: "SS-1.3.d",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is a true statement regarding in-person communication between a tester and a developer?",
    options: [
      { id: "a", text: "It should only occur in the office environment" },
      { id: "b", text: "It should be recorded for future reference" },
      { id: "c", text: "There should always be three people involved, two to communicate and one to be a witness" },
      { id: "d", text: "It should occur in the most suitable environment, which could include a coffee shop" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): The environment should suit the communication — outside the office, such as in a café or coffee shop, is acceptable.\n\nWRONG (a), (b), (c): Office-only, recording, and witnesses are not requirements of in-person communication."
  },
  {
    id: 11,
    lo: "SS-1.3.e",
    level: "K3",
    points: 2,
    chapter: 1,
    multi: false,
    text: "You have noticed that one of your co-workers seems unhappy with work and their career trajectory. You feel like they have great potential and just need some encouragement. How should you communicate with this person?",
    options: [
      { id: "a", text: "You should avoid any communication and send them to a professional" },
      { id: "b", text: "You should send them happy chat messages and funny videos" },
      { id: "c", text: "You should email them with self-help links" },
      { id: "d", text: "You should offer to have an in-person chat outside of the office environment" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Offer an in-person chat outside the office — assuming you have some type of relationship with this person.\n\nWRONG (a): Referring them to a professional is probably not the FIRST step — reach out personally first.\n\nWRONG (b): Funny videos might help after you have chatted with them, not before.\n\nWRONG (c): Emailing self-help links might be offensive."
  },
  {
    id: 12,
    lo: "SS-1.4.a",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is a common cause of frustration for testers in a software project?",
    options: [
      { id: "a", text: "Frequent communication with the developers regarding quality issues" },
      { id: "b", text: "A complex system with multiple integrations" },
      { id: "c", text: "Code that is delivered via a DevOps pipeline" },
      { id: "d", text: "A schedule that is not realistic and does not allow enough time to test" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): An unrealistic schedule that does not allow enough time to test is a common cause of tester frustration.\n\nWRONG (a), (b), (c): Communication, complex systems, and DevOps pipelines are normal parts of the job, not frustration causes."
  },
  {
    id: 13,
    lo: "SS-1.4.c",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "The test team has been given a schedule that is about half of what they have estimated. Which of the following is a good approach to increasing the fairness of the schedule?",
    options: [
      { id: "a", text: "Rework the schedule to ensure the test team has as much time as the development team" },
      { id: "b", text: "Discuss testing and risk mitigation with the whole team so they understand which risks can be covered in the allotted time and which risks will not be addressed" },
      { id: "c", text: "Move one-third of the developers into the testing team to slow down the development effort and help to build test automation that can be used for faster testing" },
      { id: "d", text: "Do not start testing until all the software is delivered to remove the need to perform regression testing" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): By sharing the risk ownership, the entire team understands what can and cannot be accomplished with the limited schedule.\n\nWRONG (a), (c), (d): Schedule horse-trading, raiding the development team, and delaying testing do not establish fairness."
  },
  {
    id: 14,
    lo: "SS-2.1.a",
    level: "K3",
    points: 2,
    chapter: 2,
    multi: false,
    text: "You just received the following message in a chat regarding meeting a colleague for lunch:\n\n“Anywhere between here and the mall, might not get away with that amount of time out of wk!”\n\nWhich of the following would have been a more professional and informative message?",
    options: [
      { id: "a", text: "I can meet anywhere within two miles of the office. Must be back for a meeting at 2:00." },
      { id: "b", text: "The mall is too far." },
      { id: "c", text: "Lunch would be good. Mall is too far. Meeting at 2:00." },
      { id: "d", text: "Pick a place and time and I'll let you know if I can make it." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): This provides clear parameters for where to meet and explains why there is a deadline.\n\nWRONG (b), (c), (d): The other options are missing information and will require more follow-up."
  },
  {
    id: 15,
    lo: "SS-2.1.b",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You have been noticing that you are not receiving defect fixes in a timely manner. You know you have had some high priority defects that should have been addressed by now. You look back at the defect reports and find that someone has lowered the priority, but you do not know who did it, or when. What should the defect management system be tracking to help you find out this information?",
    options: [
      { id: "a", text: "All users who have access to the change capabilities" },
      { id: "b", text: "All valid priorities in use" },
      { id: "c", text: "All versions of the defect reports so you can track the changes" },
      { id: "d", text: "All developers who have accessed any defect report over the last six months" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): If the defect management system tracks versions, it records any changes made, when they were made, and who made them.\n\nWRONG (a), (b), (d): Access lists and priority catalogs do not show what changed, when, and by whom."
  },
  {
    id: 16,
    lo: "SS-2.1.d",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following documents describes in detail the testing approach for a particular project?",
    options: [
      { id: "a", text: "The test strategy" },
      { id: "b", text: "The test plan" },
      { id: "c", text: "The test policy" },
      { id: "d", text: "The test cases" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The test plan describes the testing approach for a particular project.\n\nWRONG (a): The strategy covers testing across all projects.\n\nWRONG (d): Test cases detail how to test a particular requirement, not the overall project approach."
  },
  {
    id: 17,
    lo: "SS-2.2.a",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Should test management tool generated charts be included in test reports?",
    options: [
      { id: "a", text: "No" },
      { id: "b", text: "Yes, but only charts about defects reported and tests executed" },
      { id: "c", text: "Yes, but only trend charts should be included, particularly those for defect trends" },
      { id: "d", text: "Yes, but they must be information needed by the recipients and must include words explaining the information" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Sticking in charts for the sake of charts accomplishes nothing — charts must convey information the readers need and be accompanied by words of explanation.\n\nWRONG (a), (b), (c): Charts are valuable, and no chart type is banned — the requirement is relevance plus explanation."
  },
  {
    id: 18,
    lo: "SS-2.2.b",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "When tracking risk mitigation during testing, what information is needed?",
    options: [
      { id: "a", text: "Defects reported, sorted by severity and priority" },
      { id: "b", text: "Test cases traced to risk items" },
      { id: "c", text: "Test execution information regarding tests passed, failed and blocked" },
      { id: "d", text: "Tester hours spent using the various test environments" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): To track risk mitigation, you need execution of test cases TRACED TO RISK ITEMS — showing which risk items have been addressed by testing.\n\nWRONG (a), (c), (d): Defect sorts, raw execution counts, and hours do not connect testing to risks."
  },
  {
    id: 19,
    lo: "SS-2.2.d",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You have just recorded a defect that occurs only when you enter more than 500 characters in the username of the login for a mobile application. The summary line is: “System crashes when username is entered”. You have given this defect a severity of 1 (highest) and a priority of 4 (lowest). You have included the steps to reproduce the issue and screenshots.\n\nWhat have you done wrong?",
    options: [
      { id: "a", text: "This should have been a low severity because the impact to the system does not matter because the scenario probably will not happen in production" },
      { id: "b", text: "This should have been a higher priority because it is causing a system crash" },
      { id: "c", text: "The summary line indicates a catastrophic problem, which is not accurate as this is an edge case" },
      { id: "d", text: "The developer will not need the steps to reproduce so those should not have been included" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): The summary line sounds like a huge problem, but in truth it is unlikely to happen — it misrepresents an edge case.\n\nWRONG (a), (b): Severity 1 is right (it causes a crash) and priority 4 is right (it is not likely to happen).\n\nWRONG (d): Steps to reproduce should ALWAYS be included."
  },
  {
    id: 20,
    lo: "SS-2.3.a",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Your project's defect triage meetings focus only on the priority 1 (highest priority) issues. As a result, the backlog of priority 2 and 3 defects is growing fast and you do not think there will be time to address the backlog. What should you do?",
    options: [
      { id: "a", text: "Re-prioritize the 2's and 3's to 1's so they get on the agenda" },
      { id: "b", text: "Work with the meeting lead to update the agenda to include the lower priority defects as well as the priority 1 defects" },
      { id: "c", text: "Use your allocated time in the meeting to review as many 2's and 3's as possible" },
      { id: "d", text: "Complain to your manager that your defects are being ignored by the developers, and you must see that those defects are addressed in the next week" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The agenda needs to expand to include the lower-priority defects, or the backlog becomes impossible.\n\nWRONG (a): Re-labeling dilutes the value of P1.\n\nWRONG (c): You will not get through them, and the meeting will be confused about what you are doing.\n\nWRONG (d): Making demands of your manager is rarely the right approach."
  },
  {
    id: 21,
    lo: "SS-2.3.b",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "How can team standup meetings help to increase the perceived value of the testing team?",
    options: [
      { id: "a", text: "By providing an opportunity to review all outstanding defects" },
      { id: "b", text: "By highlighting what each team member has done and is planning to do on a daily basis" },
      { id: "c", text: "By providing a forum for the latest test results to be reviewed by the team" },
      { id: "d", text: "By highlighting the cumulative accomplishments of the testing team to the rest of the team" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The purpose of the standup is for each member to state what they did yesterday and plan today. Test team members presenting this information makes them more a part of the team — equal time, equal attention.\n\nWRONG (a), (c), (d): Standups are not defect reviews, test-result forums, or showcases."
  },
  {
    id: 22,
    lo: "SS-2.3.c",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "There is a building backlog of defects that are not being fixed. What is the best way to present this problem to the larger team in the weekly project status meeting?",
    options: [
      { id: "a", text: "Show a summary of the defect count, sorted by severity" },
      { id: "b", text: "Show a summary of the defect count, sorted by priority" },
      { id: "c", text: "Show a trend chart showing how the backlog has grown" },
      { id: "d", text: "Show a trend chart showing test case execution actual vs planned" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): A trend chart is the best way to show how the backlog has grown — optionally also split by priority to show how the backlog is balanced.\n\nWRONG (a), (b), (d): Static counts are point-in-time; execution charts show a different problem."
  },
  {
    id: 23,
    lo: "SS-2.3.d",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "When presenting an issue at a retrospective, what else should you present?",
    options: [
      { id: "a", text: "A chart supporting your issue" },
      { id: "b", text: "An up-to-date trend diagram" },
      { id: "c", text: "A possible solution to the problem" },
      { id: "d", text: "An ultimatum" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): When presenting a problem in a retrospective, always try to present a possible solution as well."
  },
  {
    id: 24,
    lo: "SS-3.1.a",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "What is the purpose of assessing a risk as part of risk management?",
    options: [
      { id: "a", text: "To ensure the risk has been properly mitigated" },
      { id: "b", text: "To assign the likelihood and impact" },
      { id: "c", text: "To prevent the risk so it cannot happen" },
      { id: "d", text: "To identify the cause of the risk" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Assessing a risk assigns the likelihood of it becoming an actual event and the impact if it does — setting the priority for mitigation.\n\nWRONG (a), (c), (d): Mitigation and identification are the other two steps of risk management."
  },
  {
    id: 25,
    lo: "SS-3.1.b",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Currently your test cases are mapped to steps in the business process. When a test is completed, the associated business process is checked off a list, showing which processes have been approved for release. What is missing with this approach?",
    options: [
      { id: "a", text: "The business processes should be assigned risk so that testing can proceed in an order that will help mitigate the highest risk processes first" },
      { id: "b", text: "The business processes should be tested from the bottom up, ensuring all the steps are working before the overall process is tested" },
      { id: "c", text: "This type of testing should be conducted by the business users rather than by testers as only they know how it should work" },
      { id: "d", text: "Business processes should never be fully checked off because there will be many data variables that will not be tested" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Risk should be assigned to the business processes so testing proceeds in risk order — the riskiest areas are addressed first.\n\nWRONG (b), (c), (d): Ordering, ownership, and never-done arguments miss the missing element: risk."
  },
  {
    id: 26,
    lo: "SS-3.1.c",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is one of the ISO 25010 quality characteristics?",
    options: [
      { id: "a", text: "Explainability" },
      { id: "b", text: "Precision" },
      { id: "c", text: "Transparency" },
      { id: "d", text: "Functional suitability" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Functional suitability is one of the eight ISO 25010 quality characteristics.\n\nWRONG (a): Explainability is a quality characteristic in AI, not one defined in ISO 25010.\n\nWRONG (b), (c): Precision and Transparency are not ISO 25010 characteristics."
  },
  {
    id: 27,
    lo: "SS-3.1.d",
    level: "K3",
    points: 2,
    chapter: 3,
    multi: false,
    text: "Your organization has developed the following table for Cost of Quality. They are only interested in the cost of defects.\n\nRequirements $1\nUnit Testing $10\nIntegration Testing $50\nSystem Testing $100\nUser Acceptance Testing $500\nProduction $1000\n\nIf you have a defect that was introduced during coding and should have been caught in unit testing, but was not found until production, how much more did the defect cost the organization than it should have cost?",
    options: [
      { id: "a", text: "$10" },
      { id: "b", text: "$990" },
      { id: "c", text: "$1000" },
      { id: "d", text: "$1010" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The defect should have cost $10 (unit testing), but instead cost $1000 (production) — $990 more than it should have.\n\nWRONG (a), (c), (d): $10 is what it should have cost; $1000 is the total, not the delta; $1010 adds instead of subtracting."
  },
  {
    id: 28,
    lo: "SS-3.1.e",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You have been assigned to a project that has a very tight schedule. The developers are running behind schedule. According to the test team's estimates, only about half of the planned testing can be accomplished. There is a good risk matrix, and the test cases have been traced to the risks. The schedule will not change, and additional people cannot be added due to budget restrictions.\n\nWhat should you do as a lead tester?",
    options: [
      { id: "a", text: "Refuse to test because the project will be a failure and testing should not be associated with it" },
      { id: "b", text: "Borrow developers to do half of the testing and put the test team to work building test automation" },
      { id: "c", text: "Execute the test cases in risk priority order and track residual risks and unresolved defects to highlight quality risks" },
      { id: "d", text: "Delete half the test cases so the team can reach 100% execution by the end of the project" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Executing tests in risk order mitigates the biggest risks first; accurate reporting of unmitigated risks and unresolved defects helps the team understand the quality issues with the release.\n\nWRONG (a): Refusing brands the testers uncooperative and helps no one.\n\nWRONG (b): Borrowing developers slows the delayed development further, and they may not be good testers; automation will not speed up this test effort.\n\nWRONG (d): Deleting test cases leaves an unknown amount of testing undone."
  },
  {
    id: 29,
    lo: "SS-3.2.a",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Your project has a good set of requirements, no risk analysis, and no prioritization of test cases. Which of the following would be useful to help guide the testing and close gaps?",
    options: [
      { id: "a", text: "A security review of the system" },
      { id: "b", text: "A detailed review of the test environments and test data" },
      { id: "c", text: "A full review of the regression test suite" },
      { id: "d", text: "A review of the required quality characteristics" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Using the quality characteristics, such as those specified in ISO 25010, helps ensure better coverage and reduce gaps.\n\nWRONG (a), (b), (c): Security reviews, environment reviews, and regression-suite reviews are narrower and do not systematically close coverage gaps."
  },
  {
    id: 30,
    lo: "SS-3.2.c",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is the best use of a SME's time?",
    options: [
      { id: "a", text: "Writing and executing test cases" },
      { id: "b", text: "Participating in code reviews" },
      { id: "c", text: "Configuring test environments" },
      { id: "d", text: "Prioritizing defect reports" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Prioritizing defect reports is the best use of a SME's time — only they fully know the business impact of a defect, so their input on priority is very helpful.\n\nWRONG (a), (b), (c): Time-consuming or technical tasks that do not leverage the SME's unique business knowledge."
  },
  {
    id: 31,
    lo: "SS-3.2.d",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "How do production defects help to promote testing?",
    options: [
      { id: "a", text: "They can highlight that testing was not sufficient" },
      { id: "b", text: "They can prove that more resources would have eliminated any production issues" },
      { id: "c", text: "They can show that the project manager was wrong about the go-live decision" },
      { id: "d", text: "They can prove that time spent on unit testing was wasted" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Production defects show that testing was not sufficient — due to time or resource constraints.\n\nWRONG (b): You cannot eliminate all production issues.\n\nWRONG (c): The PM may have been wrong, but that does not promote testing.\n\nWRONG (d): Escapes do not prove unit testing was wasted time."
  },
  {
    id: 32,
    lo: "SS-3.2.e",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "How does an Agile lifecycle affect quality ownership?",
    options: [
      { id: "a", text: "The developers own it" },
      { id: "b", text: "The testers own it" },
      { id: "c", text: "The whole team owns it" },
      { id: "d", text: "The project manager owns it" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): In Agile, the entire team is responsible for quality."
  },
  {
    id: 33,
    lo: "SS-3.2.f",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Why do PMs need to be involved in test automation decisions?",
    options: [
      { id: "a", text: "To get buy in from the development management" },
      { id: "b", text: "To supervise the automation development effort" },
      { id: "c", text: "To determine the best tools to use" },
      { id: "d", text: "To allocate the cost of the effort" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): The PM is responsible for allocating the cost of the automation development effort — to the current development team or the maintenance team.\n\nWRONG (a): Development buy-in is usually a test-manager-to-development-manager discussion.\n\nWRONG (b): Supervision is the test manager's responsibility.\n\nWRONG (c): Tool choice is a technical decision for the technical teams."
  },
  {
    id: 34,
    lo: "SS-3.3.a",
    level: "K3",
    points: 2,
    chapter: 3,
    multi: false,
    text: "You have been testing a mobile application and have determined that it meets the requirements for ease of use, user directions, efficient workflow, and helpful UI. Despite all of this, it failed UAT due to missing critical reports. What usability question should have been asked to find the issue?",
    options: [
      { id: "a", text: "Are the colors/layouts/workflow as expected by the user?" },
      { id: "b", text: "Is there help text or some other assistance for the user?" },
      { id: "c", text: "Does the software do what the user needs it to do?" },
      { id: "d", text: "Are there extra steps that are not needed or are not logical?" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Critical functionality is missing, so the software does not do what the user NEEDS it to do — the question that would have caught it.\n\nWRONG (a), (b), (d): Cosmetics, help text, and workflow steps were already covered and passed."
  },
  {
    id: 35,
    lo: "SS-3.3.b",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are testing web software that will be used internationally. What is the best standard to use to guide your accessibility testing?",
    options: [
      { id: "a", text: "ISO 25010" },
      { id: "b", text: "IEEE 9003-2021" },
      { id: "c", text: "GDPR" },
      { id: "d", text: "WCAG" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): WCAG (Web Content Accessibility Guidelines) is the most widely accepted standard for accessibility.\n\nWRONG (a): ISO 25010 defines quality characteristics.\n\nWRONG (c): GDPR is a privacy regulation.\n\nWRONG (b): A distractor."
  },
  {
    id: 36,
    lo: "SS-4.1.a",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "When you approach your manager for a promotion, what should you present?",
    options: [
      { id: "a", text: "Your updated resume and job ads that match your skills" },
      { id: "b", text: "Your skills matrix showing your level of expertise in all assessed areas" },
      { id: "c", text: "Your understanding of the requirements for the new role compared to your skills and goals" },
      { id: "d", text: "Your training plan for the next two years to show your commitment to learning" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Show you understand the new role and have assessed your fit — that proves you are serious about the role and able to identify any gaps. Having a plan for addressing the gaps is also a good idea.\n\nWRONG (a), (b), (d): Resumes with job ads, skills matrices, and training plans by themselves do not demonstrate role understanding."
  },
  {
    id: 37,
    lo: "SS-4.2.b",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "You are interviewing for a new job. How can you help the hiring manager picture you in the new position?",
    options: [
      { id: "a", text: "Walk through the training you have taken to prove you are a continuous learner" },
      { id: "b", text: "Talk about your experience and how that experience can help you succeed in the new job" },
      { id: "c", text: "Ask the interviewer personal questions about their family" },
      { id: "d", text: "Walk through samples of your work to show your ability as a tester" }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Aligning your experience with the requirements of the new job helps the manager see how you could fit in.\n\nWRONG (a): Worth mentioning, but it does not help the manager see the fit.\n\nWRONG (c): Personal questions do not help with the fit.\n\nWRONG (d): Only if requested — anyone can bring in a document and claim they wrote it."
  },
  {
    id: 38,
    lo: "SS-4.2.c",
    level: "K3",
    points: 2,
    chapter: 4,
    multi: false,
    text: "You are going to interview for a new role that will challenge your current skills. How can you help the interviewer determine you are a good fit?",
    options: [
      { id: "a", text: "Show interest, enthusiasm, flexibility, and a willingness to learn" },
      { id: "b", text: "Explain ways the interviewer could improve their performance" },
      { id: "c", text: "Lead the conversation and explain all your accomplishments" },
      { id: "d", text: "Wear a suit to prove you deserve a senior position" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Interest, enthusiasm, flexibility, and a willingness to learn are the best way to position yourself for a challenging job.\n\nWRONG (b), (c), (d): Critiquing the interviewer, dominating the conversation, and dressing for the title do not demonstrate fit."
  },
  {
    id: 39,
    lo: "SS-4.2.e",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "You are interviewing for a new job. The description of the job sounds like testers are expected to fill many roles on the team with a wide range of responsibilities. You are concerned this is unrealistic. You have also heard that there are expectations for testers to work long hours. Which of the following questions should help explore the expectations?",
    options: [
      { id: "a", text: "What is the reporting structure of the test team?" },
      { id: "b", text: "Which skills are particularly valued by the team?" },
      { id: "c", text: "What should a tester expect to do in a “normal” day?" },
      { id: "d", text: "What are the usual tradeoffs between features, schedule, and quality?" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Investigate what is expected in a “normal” day — and maybe ask about the abnormal days too!\n\nWRONG (a), (b), (d): Reporting structure, valued skills, and trade-offs do not expose the day-to-day workload reality."
  },
  {
    id: 40,
    lo: "SS-4.2.f",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Why are software testing careers interesting?",
    options: [
      { id: "a", text: "There is always a need to learn and grow as technology changes" },
      { id: "b", text: "Regression testing always finds new and interesting defects" },
      { id: "c", text: "Once tools are mastered, a tester is considered to be an expert and can speak at conferences" },
      { id: "d", text: "Most testers move on to roles in other areas such as development, project management, or business analysis so they do not get bored" }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Technology and tools are always changing — there is always something new to learn.\n\nWRONG (b): Regression testing should NOT be continually finding new defects.\n\nWRONG (c), (d): Not common outcomes, although they occur now and then."
  }
];

export const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
