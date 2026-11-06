// CT-TAS v1.0 — Chapter 3: Preparing for Test Automation
// summary/deepPoints from syllabus v1.0 (2024-05-03); examInsights from ISTQB Sample Exam v1.2 and the ASTQB TAS sample exam (2024)
export default {
  id: 3,
  title: 'Preparing for Test Automation',
  time: '225 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "The biggest chapter (225 min) — 9 questions per sample exam. Know the four test DISTRIBUTIONS (pyramid, ice cream cone, hourglass, umbrella) and their consequences, how SUT architecture (mainframe vs microservices) shapes the target shape, the bottom-up route to shift left plus contract testing and shift right goals, automation in waterfall / V-model / Agile (in-sprint) / DevOps (continuous testing), the selection criteria for automating a test, what ONLY automation can do, and what is hard to automate.",
  sections: [
    {
      id: '3.1.1', title: 'Test Automation Distributions', level: 'K2', type: 'deep',
      deepPoints: [
        "Mike Cohn's pyramid: unit (= component), service, UI. Service level splits into component integration testing (with test doubles), contract testing (contracts between services) and API testing (real services, real data); UI = end-to-end through the GUI.",
        "Draw the CURRENT state as baseline and a TARGET state (achievable in the timeline).",
        "PYRAMID: balanced — most tests low, few high; stable and quick → usual target. ICE CREAM CONE: inverted — most defects found at costly UI level, little component testing → late defects. HOURGLASS: heavy top and bottom, service level missing → integration defects; move UI tests down if logic is in APIs. UMBRELLA: almost only UI tests → slow defect turnaround, costly maintenance; if lower levels are impossible, optimize the UI suite (time, stability)."
      ],
      examInsights: [
        "A-Q10 KEY — Matching shapes to descriptions: hourglass = little/no integration testing, heavy highest and lowest levels → integration issues undetected.",
        "ASTQB-Q10 — Umbrella model focus = UI testing."
      ]
    },
    {
      id: '3.1.2', title: 'Choosing an Approach Based on SUT Architecture', level: 'K2', type: 'deep',
      deepPoints: [
        "Choice depends on culture, engineering maturity, the SDLC and the architecture (mainframe vs microservices).",
        "The pyramid is ideal but not always reachable — aim for a realistic intermediate target (e.g. umbrella → hourglass), then set the next one.",
        "MAINFRAMES: terminal emulation (green screens), limited batch validation, hard component testing, few APIs → testing via batch jobs, databases and GUI. Modernizing toward microservices → add API and contract testing to the modernized parts."
      ],
      examInsights: [
        "A-Q11 KEY (2 pts) — Pick the correct statements about component tests (fast, pinpoint defects to the code line, etc.); 'the more complicated the functionality, the less important component tests' is false.",
        "ASTQB-Q11 — The ideal distribution is the pyramid."
      ]
    },
    {
      id: '3.1.3', title: 'Optimizing the Distribution: Shift Left and Shift Right', level: 'K3', type: 'deep',
      deepPoints: [
        "From current and target states → roadmap: scope (what to automate), strategy (how), prioritized backlog, entry criteria.",
        "Unbalanced distribution → BOTTOM-UP: low code coverage signals missing component tests → add them, then improve their quality (best practices, TDD, test technique workshops).",
        "SHIFT LEFT: component tests for UI and API with TEST DOUBLES (mocks, stubs) replace slow, unreliable tests; no reliance on real services/data → consistent, early feedback in CI/CD. CONTRACT TESTING finds root causes earlier and reduces API/UI tests; an API CALL GRAPH shows consumers and producers.",
        "SHIFT RIGHT: test after release in preproduction/production, monitor performance, user feedback; with observability, automation speeds go/rollback decisions. Aims: understand user preferences; support canary releases and dark launches; find production defects early; expand automation scope; increase coverage."
      ],
      examInsights: [
        "A-Q12 KEY (select TWO) — Reasons for shift right: expand the scope of automation and coverage; identify problems in production early.",
        "ASTQB-Q12 — End-to-end automation in production/preproduction shifts testing to the RIGHT."
      ]
    },
    {
      id: '3.2.1', title: 'Test Automation in Legacy SDLC Models', level: 'K2', type: 'deep',
      deepPoints: [
        "WATERFALL: testing after requirements, design, implementation → automation starts late, long cycles, feedback too late → lowest ROI.",
        "V-MODEL: test planning and design early (architecture design → integration test design), but TAS implementation still late → better ROI than waterfall, behind Agile."
      ],
      examInsights: [
        "A-Q13 KEY (select TWO) — Legacy project: e.g. increase coverage at the system integration test level to detect integration defects.",
        "ASTQB-Q13 — In a V-model, automation starts later than in an Agile project."
      ]
    },
    {
      id: '3.2.2', title: 'Test Automation in Agile Development', level: 'K2', type: 'deep',
      deepPoints: [
        "Ideal: IN-SPRINT TEST AUTOMATION — automation activities (test definitions, automated tests, TAF updates, CI/CD integration) are part of each user story's EXIT CRITERIA and estimates.",
        "Anti-pattern: no test effort estimate, separate tickets or no tracking.",
        "Immature teams: first reach in-sprint TESTING with automation one sprint behind, then work toward in-sprint automation."
      ],
      examInsights: [
        "A-Q14 KEY — Agile promotes sustainable development and fits automation completed within the sprint.",
        "ASTQB-Q14 — Automated tests for a sprint are integrated into CI/CD before the end of the sprint."
      ]
    },
    {
      id: '3.2.3', title: 'DevOps and Continuous Testing', level: 'K3', type: 'deep',
      deepPoints: [
        "Agile organizes work; DevOps delivers end to end by automating build, integration, test, deployment and production activities → CONTINUOUS TESTING with feedback loops.",
        "Emphasis on LOWER-LEVEL tests (component, component integration, contract) without real data/services → fast; run in the SAME PIPELINE that builds the SUT; suites triggered per phase (local, pull request, merge, deploy).",
        "Larger UI/API suites run separately for extra value; manual effort → exploratory testing and end-user feedback."
      ],
      examInsights: [
        "A-Q15 KEY (K3) — NOT to recommend when helping DevOps teams: replacing the existing test automation tool.",
        "ASTQB-Q15 — Unit tests run only on developers' machines → deploy them into the DevOps pipeline."
      ]
    },
    {
      id: '3.3.1', title: 'Criteria for Choosing Tests to Automate', level: 'K2', type: 'deep',
      deepPoints: [
        "Selected by a test analyst who knows what is automatable, or a TAE with domain knowledge.",
        "Questions: technically possible? technical challenges, team ready and trained? adequate ROI? value in running FREQUENTLY? functional or non-functional; smoke, regression or confirmation suite? REPEATABLE? easy to maintain when the SUT changes? covers frequently used business workflows? functional overlap allowing reuse of steps and data?"
      ],
      examInsights: [
        "A-Q16 KEY — Ask 'is it highly repeatable?' because a highly repeatable test has potential for good ROI.",
        "ASTQB-Q16 — Best candidate: a calculation needing many data combinations (e.g. mortgage rate from multiple tables)."
      ]
    },
    {
      id: '3.3.2', title: 'Challenges Only Test Automation Can Address', level: 'K2', type: 'skim',
      summary: "Eight categories: (1) manual execution takes too long; (2) test cases must be SYNCHRONIZED; (3) results must be available IN A PIPELINE; (4) LARGE LOG FILES must be parsed for defects; (5) PRECISE TIMING is required; (6) PERMUTATIONS across OSs, browsers, devices, locations, configurations; (7) large VOLUMES of executions or data input to maximize coverage; (8) non-functional testing needing automated monitoring/analysis or huge numbers of users (stress, reliability).",
      examInsights: [
        "A-Q17 KEY — Only automation: integrating test results into a development pipeline.",
        "ASTQB-Q17 — Best practice: include the test automation in the pipeline that deploys to the test environment."
      ]
    },
    {
      id: '3.3.3', title: 'Test Conditions That Are Difficult to Automate', level: 'K2', type: 'skim',
      summary: "Design/look-and-feel requirements, e.g. UI CONSISTENCY across platforms (subjective, needs human review); too much HUMAN INTERACTION (e.g. loan applications where agents decide or call customers); TECHNICAL/OS RESTRICTIONS (e.g. native OS text messages a UI tool can't reach); LENGTHY TIME DEPENDENCY (e.g. a 2-hour session timeout) unless time can be manipulated (mocks, server responses, OS time).",
      examInsights: [
        "A-Q18 KEY — Difficult to automate: 'the UI must be consistent across different platforms'.",
        "ASTQB-Q18 — A 1-hour idle timeout CAN be automated, but check it doesn't block other tests (or manipulate time)."
      ]
    }
  ]
};
