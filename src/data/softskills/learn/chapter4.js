// ASTQB CT-SS v1.0 — Chapter 4 learn content, authored from the Soft Skills for Testers syllabus (2025-10-01).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "A tester should always be planning for their next position — whether changing roles within the current organization or moving to a new one. This chapter covers rising in the organization (preparing for and receiving a promotion) and interviewing for a new position: preparation, promoting your skills, asking your own questions, ensuring a good fit, and why testing remains an interesting career.",
  keywords: [],
  objectives: [
    { id: "SS-4.1.a", level: "K2", text: "Summarize how to prepare for a promotion" },
    { id: "SS-4.1.b", level: "K2", text: "Summarize approaches that can help smooth transition to a new position" },
    { id: "SS-4.2.a", level: "K2", text: "Explain the purpose of a cover letter" },
    { id: "SS-4.2.b", level: "K2", text: "Summarize ways a tester can align with a potential job" },
    { id: "SS-4.2.c", level: "K3", text: "Prepare for an interview for a job that will stretch current capabilities" },
    { id: "SS-4.2.d", level: "K2", text: "Summarize interview questions the interviewee should ask" },
    { id: "SS-4.2.e", level: "K2", text: "Explain areas to be explored to ensure a good fit" },
    { id: "SS-4.2.f", level: "K2", text: "Explain how the testing industry continues to offer opportunities" },
  ],
  sections: {
    "4.1.1": {
      objective: "SS-4.1.a",
      body: [
        { type: "p", text: "Testing generally offers two promotion paths: TECHNICAL and MANAGEMENT. Ideally an organization maintains two distinct promotion lines so technically inclined people are not forced into management roles just to be promoted — strong technical and strong management skills are frequently not shared in a single person. A manager can be technical and a technical person can manage; they just should not be forced to be experts in both if not interested." },
        { type: "list", intro: "The first step in preparing for promotion is understanding the requirements for the desired position:", items: [
          "Education/training requirements",
          "Responsibilities",
          "Alignment with skills",
          "Alignment with career goals",
          "Availability of support for the new role",
          "Changes in reporting structure",
        ]},
        { type: "p", text: "Compare the job description with current capabilities — a significant delta may need additional training, experience, and time, giving a REALISTIC timeline. Then talk to management: presenting your understanding of the role's requirements matched with your current skills and career plans makes a good impression and paves the way for an open discussion of what is needed." },
        { type: "p", text: "Deserved promotions are not always available — budget constraints, position limits, no openings. Keep developing skills anyway, to be ready when a position opens. If the path requires managing people, explore COACHING/MENTORING responsibilities without full administrative management (hiring, firing) — building leadership skills and testing whether the path fits." },
      ],
    },
    "4.1.2": {
      objective: "SS-4.1.b",
      body: [
        { type: "p", text: "Sometimes a promotion changes very little — the tester was already performing most of the duties. But it can be a substantial change, particularly with new responsibilities for LEADING PEOPLE: former peers become direct reports." },
        { type: "list", intro: "Approaches that smooth the transition:", items: [
          "Do not assert authority — respect is earned",
          "Do not try to be a buddy — the role is different now; being 'one of the gang' is probably not possible",
          "Maintain good relationships and friendships — those are real and will be needed",
          "Remember that some information can be shared, and some cannot",
        ]},
        { type: "p", text: "Peers take time to adjust. Senior test analyst to principal test analyst brings greater but not substantially different responsibilities; a move to management is a significant transition for everyone. In the end, a title is just a title: performing the job well, earning respect from peers and co-workers, and demonstrating consistent professionalism determine a tester's success regardless of the role." },
      ],
    },
    "4.2.1": {
      objective: "SS-4.2.a",
      body: [
        { type: "p", text: "A new position may be inside or outside the current organization — prepare the same way for either, with the same interest, preparation, and enthusiasm. First: the RESUME must be correct — up to date, using industry terminology, accurately representing job responsibilities. Some organizations use unusual titles ('programmer analyst'): replace them with industry-accepted terms like 'senior test analyst' — good interviewers review resumes beforehand, and unusual titles get resumes rejected." },
        { type: "p", text: "Present yourself in the best possible light — highlight relevant experience and noteworthy accomplishments — but stay ACCURATE. Claims of 'expert' status are usually disregarded (the term is everywhere and usually unfounded), and any inaccuracy detected during an interview leads to distrust." },
        { type: "p", text: "A targeted COVER LETTER differentiates between similar resumes — in a competitive market, just getting the interview is difficult, and the letter helps open the door. Research the company and role to target it; the letter also demonstrates verbal communication skills, a significant differentiator. Write it PERSONALLY: many managers routinely screen for AI-generated text, and detected AI writing is usually a negative. If the hiring manager is known, research them too — researched interest plus a well-constructed letter makes a resume stand out." },
      ],
    },
    "4.2.2": {
      objective: "SS-4.2.c",
      body: [
        { type: "p", text: "The better the skills match, the more important it is to HIGHLIGHT those skills. Demonstrate curiosity about the role and discuss how you fit it TO THE BENEFIT OF THE ORGANIZATION — interviewees often concentrate on how the position benefits them rather than how their hiring benefits the manager and organization. Keeping the right focus shows strong interest in the position and long-term interest in the organization." },
        { type: "p", text: "Recount situations from your experience RELEVANT to the new position — it aligns you with the role in the manager's mind and helps them PICTURE you in it. If your skills are not a perfect match, demonstrate how you can flexibly fulfill the responsibilities." },
        { type: "p", text: "Fit is not all skills — it is also PERSONALITY fit with the team and the manager's organization. Show interest and curiosity; enthusiasm is critical but must be MATURE enthusiasm, not silliness; be engaging throughout and connect with the manager. Above all, show FLEXIBILITY: expect some irregular hours, on-site/off-site work, occasional weekends, and the peaks and valleys of project work. Maturity about these realities tells the interviewer you accept the requirements of a testing job." },
        { type: "example", title: "K3 scenario (Q38)", text: "Interviewing for a role that will challenge your current skills: show interest, enthusiasm, flexibility, and a willingness to learn. Do not critique the interviewer, dominate the conversation, or count on the suit." },
      ],
    },
    "4.2.3": {
      objective: "SS-4.2.d",
      body: [
        { type: "list", intro: "Even after reading everything about a position, the tester should still have questions:", items: [
          "Reporting structure",
          "A 'normal' day",
          "Project schedules",
          "Team size and structure",
          "Management/lead structure",
          "Normal team composition and software development lifecycle",
          "Project constraints",
          "Feature vs schedule vs quality trade-offs",
          "Documentation expectations",
          "Good and bad features of the job",
          "Which skills are particularly valued",
        ]},
        { type: "p", text: "Asking questions shows interest in how you will fit into the job and the organization — and answers spawn more questions. Remember the interview works BOTH ways: the manager wants the best person for the position, and the tester wants to be sure the move is good for their career and well-being." },
        { type: "note", title: "Q39 anchor", text: "Worried about unrealistic multi-role expectations and long hours? Ask what a tester should expect to do in a 'NORMAL' day — and maybe about the abnormal days too." },
      ],
    },
    "4.2.4": {
      objective: "SS-4.2.e",
      body: [
        { type: "p", text: "Deciding whether a new position is the right fit is hard — changing jobs is stressful, and the change should be a positive career move. New jobs should come with new challenges, but be realistic about which skills will be needed and how they can be acquired (training, on-the-job experience, self-education). Where you are particularly weak, the new job must provide SUPPORT while skills are learned; new tools may or may not be documented." },
        { type: "p", text: "Neither oversell nor undersell. Everyone must learn, and the software industry changes rapidly — the ability to learn and adapt is critical, not just when changing jobs. With the advent of AI in software testing, everyone is learning again." },
        { type: "p", text: "Consider location and hours: longer hours immediately before a release are normal, balanced by shorter hours at other times. Understand where the project team is located — on-site testers with a remote team creates communication challenges worth asking about. Work-from-home expectations should be clearly stated; employment agreements should be documented. Testers always need flexibility, but understand the expectations UP FRONT." },
      ],
    },
    "4.2.5": {
      objective: "SS-4.2.f",
      body: [
        { type: "p", text: "Testing is an ever-changing field that will always provide technical and personal opportunities for learning and growth. As the software industry evolves, testers evolve too — industry changes have created new positions for mentors, coaches, managers, and technical leaders." },
        { type: "p", text: "Testing offers an interesting and satisfying career, though it will always have challenges. Mastering soft skills — communicating effectively, skillfully advocating for the value of testing, and planning and making career transitions — goes far in building long-term satisfaction in a testing career." },
      ],
    },
  },
};
