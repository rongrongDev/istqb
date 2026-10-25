// CTFL v4.0 — Chapter 3: Static Testing
// summary/deepPoints from syllabus v4.0.1; examInsights derived from Sample Exams A-D
export default {
  id: 3,
  title: 'Static Testing',
  time: '80 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: 'Four of the 40 questions. The review process is the heart: five activities in order (planning → initiation → individual review → communication & analysis → fixing & reporting), six roles (manager, author, moderator, scribe, reviewer, review leader), and four review types ordered by formality (informal → walkthrough → technical review → inspection). Also know which defects only static testing finds.',
  sections: [
    {
      id: '3.1.1',
      title: 'Work Products Examinable by Static Testing',
      level: 'K1',
      type: 'skim',
      summary: 'Static testing evaluates work products WITHOUT executing them — manually (reviews) or with tools (static analysis). Almost anything readable and understandable can be reviewed: requirement specs, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts, models. Static ANALYSIS additionally needs a structure to check against (models, code, formal-syntax text). Not suitable: work products hard for humans to interpret or legally barred from tool analysis (e.g. third-party executable code).',
      examInsights: [
        'D-Q15 KEY — Encrypted code CANNOT be statically tested: it cannot be read and understood. Third-party executables are also out (legal reasons).'
      ]
    },
    {
      id: '3.1.2',
      title: 'Value of Static Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Detects defects in the EARLIEST SDLC phases (early-testing principle), including defect types dynamic testing cannot find: unreachable code, design patterns not implemented as desired, defects in non-executable work products.',
        'Evaluates quality of and builds confidence in work products; verifying documented requirements confirms they describe stakeholders\' actual needs; creates shared understanding and better communication — involve a wide variety of stakeholders.',
        'Cost argument: reviews cost, but overall project costs are usually much lower — less time/effort fixing defects later. Static analysis finds certain code defects more efficiently than dynamic testing → fewer defects AND lower development effort.',
        'Also used for maintainability and security evaluation; often built into CI. Spelling checkers and readability tools count as static analysis tools.'
      ],
      examInsights: [
        'A-Q15 ("NOT a benefit") — Static testing finds DEFECTS, not failures; any option about detecting failures or runtime behavior is the odd one out.',
        'D-Q16 — Correct: some defects static testing finds CAN also be found by dynamic testing (the sets overlap); but each also finds defects the other cannot.'
      ]
    },
    {
      id: '3.1.3',
      title: 'Static Testing vs Dynamic Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Complementary, similar objectives (find defects), key differences: static finds defects DIRECTLY; dynamic causes FAILURES and the defect is determined via analysis. Static reaches rarely-executed/hard-to-reach code paths more easily. Static applies to non-executable work products; dynamic only to executables. Static measures non-execution-dependent characteristics (maintainability); dynamic measures execution-dependent ones (performance efficiency).',
        'Defects easier/cheaper via static testing: requirement defects (inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications); design defects (inefficient DB structures, poor modularization); certain coding defects (undefined-value variables, undeclared variables, unreachable/duplicated code, excessive complexity); deviations from standards (naming conventions); incorrect interface specifications (mismatched parameter number/type/order); specific security vulnerabilities (buffer overflows); gaps in test basis coverage (missing tests for an acceptance criterion).'
      ],
      examInsights: [
        'B-Q15 KEY — "Code with no path that reaches it" (unreachable code) is the classic static-only defect: dynamic testing can never execute it.',
        'C-Q15 — Pick the static-catchable set: spec inconsistencies, unreachable code, naming-standard deviations = static; wrong computation result at runtime = dynamic.'
      ]
    },
    {
      id: '3.2.1',
      title: 'Benefits of Early and Frequent Stakeholder Feedback',
      level: 'K1',
      type: 'skim',
      summary: 'Early + frequent feedback: communicates potential quality problems early; prevents requirement misunderstandings; ensures requirement changes are understood and implemented earlier; helps the team understand what they are building; focuses work on the features with most stakeholder value and best risk impact. Low stakeholder involvement risks building the wrong product → costly rework, missed deadlines, blame games, even project failure.',
      examInsights: [
        'Asked in A-Q16, B-Q16, C-Q16 — the answer is always one of: avoid requirement misunderstandings, early communication of quality issues, changes understood/implemented earlier.'
      ]
    },
    {
      id: '3.2.2',
      title: 'Review Process Activities',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'ISO/IEC 20246 generic review process — five activities IN ORDER: (1) PLANNING — define scope: purpose, work product, quality characteristics to evaluate, focus areas, exit criteria, standards, effort, timeframe. (2) REVIEW INITIATION — everyone/everything ready: access to the work product, roles understood, materials distributed. (3) INDIVIDUAL REVIEW — each reviewer assesses alone, applying techniques (checklist-based, scenario-based), logging anomalies, recommendations, questions. (4) COMMUNICATION AND ANALYSIS — anomalies are not necessarily defects: analyze and discuss each, decide status/ownership/actions (typically in a review meeting), decide quality level and follow-up actions. (5) FIXING AND REPORTING — defect reports for defects, fix, accept work product when exit criteria reached, report results.',
        'Large work products: review in chunks — the process may be invoked multiple times. More formality = more of the tasks performed.'
      ],
      examInsights: [
        'D-Q17 ORDERING — Put the five activities in sequence: planning → initiation → individual review → communication & analysis → fixing & reporting. Learn the one-line purpose of each.',
        'B-Q17 MATCHING — "Quality characteristics + exit criteria defined" = planning; "make sure everyone has access and knows their role" = initiation; "reviewers log anomalies individually" = individual review; "anomalies discussed and decided" = communication & analysis.'
      ]
    },
    {
      id: '3.2.3',
      title: 'Roles and Responsibilities in Reviews',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'MANAGER — decides WHAT is reviewed, provides resources (staff, time).',
        'AUTHOR — creates and fixes the work product under review.',
        'MODERATOR (facilitator) — effective review MEETINGS: mediation, time management, safe environment to speak freely.',
        'SCRIBE (recorder) — collates anomalies from reviewers, records decisions and new anomalies from the meeting.',
        'REVIEWER — performs the review; can be a project member, subject matter expert, or any stakeholder.',
        'REVIEW LEADER — overall responsibility: decides WHO is involved, organizes WHEN and WHERE.'
      ],
      examInsights: [
        'B-Q18 / D-Q18 — Matching or direct: "runs meetings effectively / safe environment" = moderator; "records anomalies" = scribe; "decides who/when/where" = review leader; "decides what + resources" = manager.',
        'TRAP — Manager vs review leader: manager owns WHAT + resources; review leader owns WHO/WHEN/WHERE.'
      ]
    },
    {
      id: '3.2.4',
      title: 'Review Types',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'INFORMAL REVIEW — no defined process, no formal documented output; main objective: detect anomalies.',
        'WALKTHROUGH — LED BY THE AUTHOR; many possible objectives (quality evaluation, confidence, educating reviewers, consensus, new ideas, motivating authors, detecting anomalies); individual review before the meeting optional.',
        'TECHNICAL REVIEW — technically qualified reviewers, LED BY A MODERATOR; objectives: consensus and DECISIONS on technical problems, plus anomaly detection, quality evaluation, confidence, new ideas, author improvement.',
        'INSPECTION — MOST FORMAL: follows the complete generic process; main objective: find the MAXIMUM number of anomalies; collects metrics to improve the SDLC and the inspection process itself; the AUTHOR CANNOT be review leader or scribe.',
        'Formality depends on SDLC, process maturity, criticality/complexity, legal/regulatory needs, audit-trail need. Same product can get an informal review first and a formal one later.'
      ],
      examInsights: [
        'A-Q17 — Attribute-set questions: "led by author, individual prep optional, educates reviewers" = walkthrough; "led by moderator, technical decisions" = technical review; "metrics, most formal, author ≠ scribe" = inspection.',
        'C-Q17 MATCHING — Anchor on the discriminators: author-led → walkthrough; moderator-led + decisions → technical review; maximum anomalies + metrics → inspection; no process/no output → informal.'
      ]
    },
    {
      id: '3.2.5',
      title: 'Success Factors for Reviews',
      level: 'K1',
      type: 'skim',
      summary: 'Success factors: clear objectives + measurable exit criteria (NEVER evaluate participants); the right review type for objectives, work product, participants, project; review SMALL CHUNKS (keep concentration); feed results back to stakeholders/authors; adequate PREPARATION TIME; management support; reviews embedded in the culture (learning + process improvement); adequate training for all roles; facilitated meetings.',
      examInsights: [
        'A-Q18 ("NOT a factor") — Anything about judging/evaluating PEOPLE in reviews is wrong by definition; also watch for "failures" — reviews find anomalies/defects, not failures.',
        'C-Q18 — "Split large work products into smaller parts" is a verbatim success factor.'
      ]
    },
  ],
};
