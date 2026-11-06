// CT-UT (syllabus 2018) — Chapter 2: Risks in Usability, User Experience and Accessibility
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 2,
  title: 'Risks in Usability, User Experience and Accessibility',
  time: '80 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "Two questions, one at K4 (analyze a project and spot likely usability risks). Know PRODUCT risks vs PROJECT risks, how risks are identified (interviews, workshops, brainstorming, past experience, checklists) and assessed (number and type of users, frequency, damage if tasks fail, business criticality, visibility), the typical usability, UX and accessibility product risks, and the organizational, technical and supplier project risks.",
  sections: [
    {
      id: '2.1', title: 'Introduction to Usability Risks', level: 'K4', type: 'deep',
      deepPoints: [
        "RISK = a factor that could cause future negative consequences — IMPACT × LIKELIHOOD. PRODUCT RISKS affect product quality (test them with usability techniques); PROJECT RISKS affect the ability to meet usability objectives.",
        "Identify via interviews, risk workshops, brainstorming, past experience — supported by CHECKLISTS.",
        "Assess each feature for: number of users, type and background of users, usage frequency, damage if user tasks cannot be completed, business criticality, external visibility.",
        "Involve the broadest sample of stakeholders: domain experts, end users, usability experts and non-expert professionals, user-acceptance testers, designers, customer representatives."
      ],
      examInsights: ["A-Q10 (K4) — A printer whose installation confused users → track the risk that users can't figure out installation and spread dissatisfaction to friends and social media."]
    },
    {
      id: '2.2.1', title: 'Usability Risks', level: 'K2', type: 'deep',
      deepPoints: [
        "Users won't buy or use the product (lacks effectiveness, efficiency or satisfaction).",
        "Users return it — it works as specified but they can't figure out how to use it; or keep calling support.",
        "Users find it hard and tell friends and SOCIAL MEDIA → less consumer trust and brand equity.",
        "Users resist an essential work tool → stress, lower productivity, oppressive atmosphere.",
        "Increased LIABILITY — risk to health or financial loss from a poor or deceptive UI."
      ],
      examInsights: []
    },
    {
      id: '2.2.2', title: 'User Experience Risks', level: 'K2', type: 'deep',
      deepPoints: [
        "Users can't buy because the app lacks functions (effectiveness), is slow or awkward, or unpleasant → shopping cart abandonment, mobile payment drop-off.",
        "The product is usable but the surrounding ARTIFACTS AND PROCEDURES aren't: slow, rude or superficial SUPPORT; deficient documentation; uncommunicated delivery delays; delivered product doesn't match expectations; unattractive or impractical packaging."
      ],
      examInsights: ["A-Q9 — Support telling you to read the manual before calling again = a user experience risk realized."]
    },
    {
      id: '2.2.3', title: 'Accessibility Risks', level: 'K2', type: 'skim',
      summary: "An ACCESSIBILITY RISK is a potential failure relating to accessibility: the product can't be used by people with disabilities (violating regulations), or isn't compatible with the software or hardware they use (e.g. assistive technologies).",
      examInsights: []
    },
    {
      id: '2.2.4', title: 'Project Risks', level: 'K4', type: 'deep',
      deepPoints: [
        "ORGANIZATIONAL: no qualified usability/UX/accessibility specialists; designers lack basic usability knowledge; low USABILITY MATURITY; management ignores results as \"subjective\" or won't postpone a release; insufficient QA independence; evaluators acting as \"police\" exaggerating minor issues; poor or missing usability requirements; usability absent from the test plan.",
        "TECHNICAL: no usability evaluation at all; evaluation TOO LATE to change anything; none after release when experienced users exist; untestable requirements; no written procedures or best practices; late or UNREALISTIC test environment (tiny data set, no interruptions, high-end hardware masking performance); unusable reports (too long, opinion-based); UX tests not covering the full experience; \"taboo\" topics; late repair costs; few trained users.",
        "SUPPLIER: unqualified suppliers, not following agreed guidelines, late or missing results."
      ],
      examInsights: []
    }
  ]
};
