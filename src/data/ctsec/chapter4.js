// CT-SEC (Advanced Security Tester 2016) — Chapter 4: Security Testing Throughout the Software Lifecycle
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 4,
  title: 'Security Testing Throughout the Software Lifecycle',
  time: '225 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Security is achieved by design and verification throughout construction, not patched or tested in. Know why the lifecycle view matters (prescribed times, review and test checkpoints, entry/exit criteria), the security activities per phase, the requirements CHECKLIST (privacy, compliance, common vulnerabilities, testability, usability and performance trade-offs), the IEEE secure design principles, component testing (white-box, FUZZ testing, backdoors, CERT top 10 incl. heed compiler warnings, coverage measures), integration (new attack vectors), system/acceptance testing (end-to-end, abuse cases, security acceptance criteria) and end-to-end security regression.",
  sections: [
    {
      id: '4.1.1', title: 'The Lifecycle View of Security Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Security is NOT tested or patched into a built application — it comes from security-oriented design and verification throughout construction; applicable to any lifecycle (IEEE 12207).",
        "Integration into the lifecycle gives: a PRESCRIBED TIME for security activities (ask about access levels, assets, openness, risks when capturing needs; apply secure coding during coding — finding SQL injection/buffer overflows later is costly); CHECKPOINTS FOR REVIEW (security requirements/stories; code changes for MALICIOUS code by insiders); CHECKPOINTS FOR TESTING (documented component tests verifying secure coding); ENTRY/EXIT CRITERIA (no component enters integration until its security activities are complete)."
      ],
      examInsights: ["Q17 KEY — Checking that secure coding practices were followed belongs in COMPONENT testing."]
    },
    {
      id: '4.1.2', title: 'Security-Related Activities in the Lifecycle', level: 'K3', type: 'deep',
      deepPoints: [
        "REQUIREMENTS (incl. regulatory, technical, business): identify needs from all perspectives inside and outside (e.g. customers' privacy); document them DETAILED and UNAMBIGUOUS for traceability; involve all knowledgeable people; interviews/workshops; review for correctness, completeness, understandability, non-ambiguity.",
        "DESIGN: a design meeting the security requirements (analyze, choose the most workable secure approach, document — whiteboard or models).",
        "IMPLEMENTATION: secure code plus needed procedures/technology (firewalls, tokens); component testing and component REVIEWS.",
        "SYSTEM TESTING: end-to-end (hardware, software, data, people, procedures) in an approximation of the target environment. ACCEPTANCE: users test against security-related acceptance criteria in the operational environment. Both are black-box; component/integration tests complement them structurally.",
        "MAINTENANCE (corrective, adaptive, perfective — upgrades, code changes, data conversions, migrations): confirmation + regression to ensure NO NEW VULNERABILITIES and defenses still work — with the same care as original development."
      ]
    },
    {
      id: '4.2', title: 'The Role of Security Testing in Requirements', level: 'K4', type: 'deep',
      deepPoints: [
        "Requirements are often unclear, changing, need special skills, contain gaps (verify AND validate), and overlook quality characteristics like security.",
        "Security CHECKLIST: PRIVACY (user groups and their data privacy needs, data types, access rights); COMPLIANCE (relevant policies and exceptions); COMMON VULNERABILITIES documented as known risks (basis for tests); TESTABILITY (clarify vague terms like 'processing must be secure', 'only authorized personnel'); USABILITY trade-off (security level appropriate, clear procedures, remedies for legitimate users locked out); PERFORMANCE trade-off (e.g. heavy encryption slows the system)."
      ],
      examInsights: ["Q18 KEY (2 pts) — Security requirements belong in the requirements phase, documented in a detailed, unambiguous way."]
    },
    {
      id: '4.3', title: 'The Role of Security Testing in Design', level: 'K4', type: 'deep',
      deepPoints: [
        "Identify and avoid security-degrading designs; steer toward strong, identifiable security properties.",
        "IEEE Center for Secure Design: earn or give, never ASSUME, trust; authentication that can't be bypassed or tampered with; AUTHORIZE AFTER AUTHENTICATE; strictly separate data and control instructions, never execute control instructions from untrusted sources; explicitly VALIDATE ALL DATA; use cryptography correctly; identify sensitive data and its handling; always consider the users; understand how external components change the ATTACK SURFACE; be flexible for future changes."
      ],
      examInsights: ["Q19 KEY (3 pts) — Checking session ID and user ID on every URL closes the gap, but performance may suffer (security–performance trade-off)."]
    },
    {
      id: '4.4.1', title: 'Security Testing During Component Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "After static evaluation, dynamic testing with valid and INVALID inputs.",
        "WHITE-BOX: target specific controls; measure coverage (statements, decisions, paths); automated static analysis and security scanners; FUZZ TESTING (massive random 'fuzz' input) — white-box fuzzing of small blocks is faster and, with instrumentation, detects memory corruption and buffer overflows.",
        "Found in structural testing: memory BUFFER OVERFLOWS, MALICIOUS CODE by insiders/contractors, BACKDOORS (undocumented interfaces bypassing controls).",
        "FUNCTIONAL: adequacy = specified security requirements satisfied + responses to unspecified stresses; creativity — probe what developers overlooked."
      ],
      examInsights: ["Q20 KEY — Review compiler warnings because they indicate potential issues to investigate."]
    },
    {
      id: '4.4.2', title: 'Security Test Design at the Component Level', level: 'K3', type: 'deep',
      deepPoints: [
        "CERT Top 10 secure coding practices — test for violations: VALIDATE INPUT; HEED COMPILER WARNINGS; architect and design for security policies; KEEP IT SIMPLE; DEFAULT DENY; LEAST PRIVILEGE; SANITIZE data sent to other systems; DEFENSE IN DEPTH; effective QA techniques; adopt a secure coding standard.",
        "Base the tests on a documented risk analysis with realistic THREAT MODELING — focus on the highest probability of attack × consequence."
      ],
      examInsights: ["Q22 KEY (3 pts) — Minimum inputs to test a field's security: e.g. a quote character (injection probe) plus a valid value (‘, ab123)."]
    },
    {
      id: '4.4.3', title: 'Analysis of Component-Level Security Tests', level: 'K4', type: 'deep',
      deepPoints: [
        "Adequacy is judged by COVERAGE. Requirements-based (black-box): % requirements, % use/ABUSE cases, % critical functions/scenarios/mission threads.",
        "Data-driven: equivalence classes, pairwise and N-wise. Model-based: cause-effect, postcondition disjuncts, axioms; transition models — % states, transitions, transition pairs, cycles.",
        "Structural: % packages, classes, methods, decisions, lines (STATEMENT coverage); cyclomatic complexity; PATH coverage strongest but infeasible with loops → critical path or BRANCH coverage."
      ]
    },
    {
      id: '4.4.4', title: 'Security Testing During Component Integration Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Integrated vulnerabilities are not just the sum of component ones — NEW ATTACK VECTORS arise from interactions between components and with larger system/organizational elements; some interactions may also block attack sequences.",
        "Integration testing reveals design complexity and behavioral stability; the approach (top-down, bottom-up) affects when security concerns appear."
      ],
      examInsights: ["Q21 KEY (2 pts) — Even after thorough component security testing, integrated components likely bring new vulnerabilities → test the interactions."]
    },
    {
      id: '4.4.5', title: 'Security Test Design at the Component Integration Level', level: 'K3', type: 'skim',
      summary: "Design integration tests from a documented risk analysis with realistic threat modeling. STUBS and DRIVERS (scaffolding) test partial paths; as real components replace them, fuller functionality — and new paths to vulnerabilities — can be assessed."
    },
    {
      id: '4.5.1', title: 'Security Testing in System Testing', level: 'K3', type: 'deep',
      deepPoints: [
        "First END-TO-END exercise of all integrated components (usually in a development environment) — reveals EMERGENT properties.",
        "Security requirements usually accompany functional ones ('while doing x the system must not allow y') — probe for violations during functional tests.",
        "Use cases, ABUSE CASES, process models and state transition models describe procedures for end-to-end security scenarios."
      ],
      examInsights: ["Q23 KEY (2 pts) — Minimum test conditions for a lockout/security question requirement: invalid user, valid user, correct and incorrect answers, good and bad paths."]
    },
    {
      id: '4.5.2', title: 'Security Testing in Acceptance Testing', level: 'K3', type: 'deep',
      deepPoints: [
        "Performed in a realistic OPERATIONAL environment — interactions via external interfaces; real external threat agents.",
        "Validates initial goals via ACCEPTANCE CRITERIA, which must include security needs — best defined BEFORE development or purchase (supplier/acquirer understanding); analyze emerging/changed criteria.",
        "Criteria may be GLOBAL (authentication, user rights, encryption levels, audit trails for all functions) or SPECIFIC (payments above an amount need two approvers)."
      ],
      examInsights: ["Q24 KEY (2 pts) — Pick the acceptance criteria that state observable security behavior of the reset-password requirement."]
    },
    {
      id: '4.6', title: 'Security Testing in Maintenance', level: 'K3', type: 'deep',
      deepPoints: [
        "Regression confirms the system still RESISTS attempts to defeat controls after changes — usability/efficiency enhancements are especially prone to weakening security.",
        "Function-level regression cases are often insufficient → END-TO-END security regression SCENARIOS run on every change (hardware, configuration files, OS, DBMS, networking, software), e.g. login and complete a purchase without exposing personal data; users can do only what their rights allow (payroll can add an employee but not see banking details)."
      ]
    }
  ]
};
