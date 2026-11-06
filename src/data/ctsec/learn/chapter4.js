// CT-SEC (Advanced Security Tester 2016) — Chapter 4 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Security can't be tested into a finished product — it is built in and verified throughout development. This chapter covers why a lifecycle view matters and the security activities in each phase, then the tester's role in requirements, design, component and integration testing, system and acceptance testing, and maintenance.",
  keywords: ["abuse case", "fuzz testing"],
  objectives: [
    { id: "AS-4.1.1", level: "K2", text: "Explain why security is best achieved within a lifecycle process" },
    { id: "AS-4.1.2", level: "K3", text: "Implement the appropriate security-related activities for a given software lifecycle (e.g., iterative, sequential)" },
    { id: "AS-4.2.1", level: "K4", text: "Analyze a given set of requirements from the security perspective to identify deficiencies" },
    { id: "AS-4.3.1", level: "K4", text: "Analyze a given design document from the security perspective to identify deficiencies" },
    { id: "AS-4.4.1", level: "K2", text: "Understand the role of security testing during component testing" },
    { id: "AS-4.4.2", level: "K3", text: "Implement component level security tests (abstract) given a defined coding specification" },
    { id: "AS-4.4.3", level: "K4", text: "Analyze the results from a given component level test to determine the adequacy of code from the security perspective" },
    { id: "AS-4.4.4", level: "K2", text: "Understand the role of security testing during component integration testing" },
    { id: "AS-4.4.5", level: "K3", text: "Implement component integration security tests (abstract) given a defined system specification" },
    { id: "AS-4.5.1", level: "K3", text: "Implement an end-to-end test scenario for security testing which verifies one or more given security requirements and tests a described functional process" },
    { id: "AS-4.5.2", level: "K3", text: "Demonstrate the ability to define a set of acceptance criteria for the security aspects of a given acceptance test" },
    { id: "AS-4.6.1", level: "K3", text: "Implement an end-to-end security retest/regression test approach based on a given scenario" },
  ],
  sections: {
    "4.1.1": {
      objective: "AS-4.1.1",
      body: [
        { type: "p", text: "Security comes from security-oriented design and verification throughout construction — not from testing or patching an already-built application. The concepts apply to sequential and iterative lifecycles alike." },
        { type: "table", headers: ["Benefit of a lifecycle view", "Example"], rows: [
          ["A prescribed time for security activities", "Analysts ask about access levels, assets needing special defenses, openness and risks while capturing needs; developers apply secure coding while coding — fixing SQL injection or buffer overflows later is far costlier"],
          ["Checkpoints for review", "Review security requirements and user stories; review code changes for malicious code planted by insiders or contractors"],
          ["Checkpoints for testing", "Documented component tests verify secure coding practices"],
          ["Entry and exit criteria", "No component enters the integrated test environment until its security development and testing activities are complete"],
        ]},
      ],
    },
    "4.1.2": {
      objective: "AS-4.1.2",
      body: [
        { type: "table", headers: ["Phase", "Security objectives and activities"], rows: [
          ["Requirements (incl. regulatory, technical, business)", "Identify security needs from all perspectives inside and outside the organization; document them in a detailed, unambiguous, traceable way; involve all knowledgeable people via interviews and workshops; review for correctness, completeness, understandability and non-ambiguity"],
          ["Design", "Turn the security needs into the most workable secure solution, documented appropriately (whiteboard or models)"],
          ["Implementation", "Write secure code and implement needed procedures and technology (firewalls, tokens); component testing and component reviews"],
          ["System testing", "End-to-end test of hardware, software, data, people and procedures in an approximation of the target environment"],
          ["Acceptance testing", "Users test against security acceptance criteria in the operational environment and decide acceptance"],
          ["Maintenance (corrective, adaptive, perfective)", "Confirmation and regression testing so changes, upgrades, data conversions and migrations introduce no new vulnerabilities and defenses still work"],
        ]},
        { type: "p", text: "System and acceptance tests are black-box; earlier component and integration tests complement them by exploiting knowledge of the internal structure. Treat maintenance with the same care as original development." },
      ],
    },
    "4.2": {
      objective: "AS-4.2.1",
      body: [
        { type: "p", text: "Requirements are often unclear and changing, need special skills to write, contain gaps (so both verification and validation are needed), and tend to overlook quality characteristics such as security. A security checklist helps:" },
        { type: "table", headers: ["Area", "Checklist questions"], rows: [
          ["Privacy", "Are all user groups and their data privacy needs, all affected data types, and user access rights identified?"],
          ["Compliance", "Are relevant security policies — and any exceptions — identified and documented?"],
          ["Common vulnerabilities", "Are common, known vulnerabilities for the feature documented as risks (and thus a basis for tests)?"],
          ["Testability", "Can tests be written from it? Are vague phrases like 'processing must be secure' clarified?"],
          ["Usability", "Is the security process proportionate? Are procedures clear? Are remedies specified for locked-out legitimate users?"],
          ["Performance", "Is the security level efficient enough (heavy encryption can slow things down)?"],
        ]},
      ],
    },
    "4.3": {
      objective: "AS-4.3.1",
      body: [
        { type: "p", text: "Testers help recognize designs likely to be compromised and steer toward strong, identifiable security properties. Key principles from the IEEE Center for Secure Design:" },
        { type: "list", items: [
          "Earn or give, but never assume, trust.",
          "Use authentication that can't be bypassed or tampered with — and authorize only after authenticating.",
          "Strictly separate data from control instructions; never process control instructions from untrusted sources.",
          "Explicitly validate all data.",
          "Use cryptography correctly; identify sensitive data and how to handle it.",
          "Always consider the users.",
          "Understand how integrating external components changes the attack surface.",
          "Stay flexible for future changes to objects and actors.",
        ]},
      ],
    },
    "4.4.1": {
      objective: "AS-4.4.1",
      body: [
        { type: "p", text: "After static evaluation, component testing examines dynamic behavior with valid and invalid inputs." },
        { type: "p", text: "White-box (structural) tests use visibility into the code to target specific controls and measure coverage. Automated static analysis and security scanners help, and fuzz testing — feeding massive amounts of random data — finds vulnerabilities; white-box fuzzing of small blocks gets results faster and, with instrumentation, detects memory corruption and buffer overflows." },
        { type: "list", intro: "Structural testing can find:", items: [
          "Memory buffer overflows.",
          "Malicious code inserted by an employee or contractor.",
          "Backdoors — undocumented interfaces intentionally built to bypass security controls.",
        ]},
        { type: "p", text: "Functionally, adequacy means the specified security requirements are satisfied — plus observing responses to stresses nobody specified. Creativity is essential: testers probe what developers overlooked." },
      ],
    },
    "4.4.2": {
      objective: "AS-4.4.2",
      body: [
        { type: "list", intro: "Test components for violations of the CERT Top 10 Secure Coding Practices:", items: [
          "Validate input.",
          "Heed compiler warnings.",
          "Architect and design for security policies.",
          "Keep it simple.",
          "Default deny.",
          "Adhere to the principle of least privilege.",
          "Sanitize data sent to other systems.",
          "Practice defense in depth.",
          "Use effective quality assurance techniques.",
          "Adopt a secure coding standard.",
        ]},
        { type: "p", text: "Base these tests on a documented risk analysis with realistic threat modeling, focusing on what is most likely to be attacked and most damaging if compromised." },
      ],
    },
    "4.4.3": {
      objective: "AS-4.4.3",
      body: [
        { type: "table", headers: ["Test basis", "Coverage measures"], rows: [
          ["Requirements-based (black-box)", "% of requirements tested; % of use and abuse cases; % of critical functions, scenarios or mission threads"],
          ["Data-driven", "Equivalence classes with one representative each; pairwise and N-wise combinations"],
          ["Model-based", "Cause-effect and postcondition coverage; axioms; for transition models, % of states, transitions, transition pairs, cycles"],
          ["Structural", "% of packages, classes, methods, decisions or lines (statement coverage); path coverage is strongest but infeasible with loops, so critical-path or branch coverage instead; cyclomatic complexity counts independent paths"],
        ]},
      ],
    },
    "4.4.4": {
      objective: "AS-4.4.4",
      body: [
        { type: "p", text: "When components are integrated, the security risk is more than the sum of their individual vulnerabilities: interactions between components and with the wider system and organization create new attack vectors (while some interactions may block attacks). Testers must be creative. The integration approach — top-down or bottom-up — affects when security problems surface and which additional tests are needed." },
      ],
    },
    "4.4.5": {
      objective: "AS-4.4.5",
      body: [
        { type: "p", text: "Design integration security tests from a documented risk analysis with realistic threat modeling. Stubs and drivers let you test incomplete paths; as they're replaced by real components, you can assess fuller functionality — and the new paths to vulnerabilities that appear." },
      ],
    },
    "4.5.1": {
      objective: "AS-4.5.1",
      body: [
        { type: "p", text: "System testing is the first end-to-end exercise of the fully integrated system and reveals emergent properties. Security requirements usually accompany functional ones — 'while doing x, the system must not allow y' — so probe for violations during functional testing. Use cases, abuse cases, process models and state transition models supply procedures for end-to-end security scenarios." },
      ],
    },
    "4.5.2": {
      objective: "AS-4.5.2",
      body: [
        { type: "p", text: "Acceptance testing runs in a realistic operational environment, through external interfaces, where real threat agents will probe the system. It validates the original goals through acceptance criteria — which must include security needs and are best agreed before development or purchase, then re-analyzed if they change." },
        { type: "table", headers: ["Criteria type", "Example"], rows: [
          ["Global", "Requirements for authentication, user rights, encryption levels and audit trails across all functions"],
          ["Specific", "Payments above a set amount require approval by two people"],
        ]},
      ],
    },
    "4.6": {
      objective: "AS-4.6.1",
      body: [
        { type: "p", text: "Security regression testing confirms the system still resists attempts to defeat its controls after changes — usability and efficiency enhancements are notorious for weakening security. It must check all security requirements and look for newly introduced vulnerabilities." },
        { type: "p", text: "Function-level regression cases often miss security regressions; end-to-end security scenarios, run after every change to hardware, configuration, OS, DBMS, network or software, give more confidence." },
        { type: "example", title: "Regression scenarios", text: "Users can log in and complete a purchase without exposing personal data. Users can only perform actions within their rights — a payroll clerk can add an employee but can't see their banking details." },
      ],
    },
  },
};
