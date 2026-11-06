// CT-SEC (Advanced Security Tester 2016) — Chapter 3: Security Testing Processes
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 3,
  title: 'Security Testing Processes',
  time: '140 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "The security test process mapped onto the ISTQB test process, aligned with sequential, iterative, COTS and open-source lifecycles; the key test plan elements (scope, who, schedule, tasks, environment, AUTHORIZATIONS); security test design by control type (functional security controls, functional/structural access controls, secure coding, OS access, language/platform vulnerabilities, external threats incl. DoS/DDoS, internal threats); designing tests from policies; an ISOLATED, COMPLETE, RESTORABLE environment; why APPROVALS are mandatory; incident reports and confidentiality.",
  sections: [
    {
      id: '3.1.1', title: 'The ISTQB Security Testing Process', level: 'K3', type: 'deep',
      deepPoints: [
        "PLANNING AND CONTROL: scope matching security risks — objectives, scope, resources, estimates/schedule, metrics and entry/exit criteria, monitor and act.",
        "ANALYSIS AND DESIGN: understand threats and risks from assessments, audits and known-vulnerability sources; review the basis (risk assessments, security requirements, policies); test conditions from objectives, risks, standards/known vulnerabilities, implemented defenses, scope, tool applicability.",
        "IMPLEMENTATION AND EXECUTION: turn conceptual tests into executable ones (manual or tools) from several perspectives — internal, external, MALICIOUS user; functional security tests, penetration based on knowledge/intuition, model-based; set up the environment.",
        "EVALUATING AND REPORTING: alongside execution — determine vulnerabilities, evaluate risk levels, report interim and final results to management and AUTHORIZED parties.",
        "CLOSURE: all planned tests done, reports delivered, ARCHIVE results and sensitive data SECURELY, analyze results to improve development.",
        "Not necessarily sequential — aligned with the lifecycle. Hierarchy: security test POLICY → STRATEGY (organization) → APPROACH (project) → tasks."
      ],
      examInsights: ["Q11 KEY (2 pts) — Turning conceptual tests into manual tests executed from an external perspective = security test IMPLEMENTATION (and execution)."]
    },
    {
      id: '3.1.2', title: 'Aligning the Process to the Lifecycle Model', level: 'K3', type: 'deep',
      deepPoints: [
        "SEQUENTIAL: needs/risks defined early in requirements but may change without updates; tests often late; results hard to address at the end.",
        "ITERATIVE/INCREMENTAL: needs emerge per iteration (stories, models, acceptance criteria) and should be handled in that iteration; continuous testing; some risks can't be fully mitigated in one short cycle.",
        "COTS: black box, frequent patches, no code → no structural testing. OPEN SOURCE: code public → once a vulnerability is published, that version and earlier are at risk → keep patches current.",
        "Sequential example: requirements (security requirements + test approach) → analysis & design (major objectives) → detailed design (model-based tests) → coding (static analysis, code reviews, buffer overflow, SQL injection field edits, component and integration tests) → system (transaction security, authentication, storage, firewall, procedures) → UAT (business-process scenarios) → deployment (no new vulnerabilities from wrong configs, e.g. DB access rights) → maintenance (regression, keep firewalls current, monitoring).",
        "Iterative example: first sprint builds login, SSL, reset lost password, lockout after three tries; tester works beside the developer and checks controls and new vulnerabilities each iteration."
      ]
    },
    {
      id: '3.2', title: 'Security Test Planning', level: 'K4', type: 'deep',
      deepPoints: [
        "Two focuses: verify designed DEFENSES are implemented and work; verify NO VULNERABILITIES were introduced (assess dev practices first).",
        "Plan elements: SCOPE (in/out, achievable); WHO tests (skills, outsourcing, vendor vs customer responsibility, tool training); SCHEDULE (security items needed first, availability, duration); TASKS and time (design, evaluate and report, regression, environment setup); ENVIRONMENT (extent, new?, tools); AUTHORIZATIONS AND APPROVALS (who, when, budget).",
        "Review the plan (technical review, walkthrough, inspection) with a checklist and people from all affected areas — IT auditors and security administrators are especially helpful."
      ],
      examInsights: ["Q12 KEY (3 pts) — A plan with scope, people, environment and approvals still needs the schedule/time to design, run and evaluate the tests."]
    },
    {
      id: '3.3.1', title: 'Security Test Design', level: 'K3', type: 'deep',
      deepPoints: [
        "Start from a risk analysis, a THREAT MODEL or an ad hoc origin categorization. Tests are functional (SQL injection, ACCOUNT HARVESTING, password cracking) and structural (buffer overflow).",
        "Attributes: prioritized by risks/threat models, TRACED to security requirements, defined for the audience, based on defect profiles, automatable where applicable. Flow: approach → risks/threat models/requirements → design techniques → cases and scenarios.",
        "FUNCTIONAL SECURITY CONTROLS (e.g. teller needs head teller approval). FUNCTIONAL ACCESS CONTROLS (password policies, access level vs risk, resistance to cracking; error message must NOT reveal whether user name or password was wrong). STRUCTURAL ACCESS CONTROLS (test accounts per access level; minimal user can't do manager tasks).",
        "SECURE CODING (mostly static): random session IDs, server-side authorization, no secrets/stack traces in errors, log validation failures, no sensitive data in GET or clear-text cookies, no direct OS commands, TLS for transmission, sanitize and validate input, strong typing, trusted code, LEAST PRIVILEGE (never root). OWASP, CERT, SANS Top 25; dynamic memory tools find buffer overflows.",
        "OS ACCESS (rootkits), LANGUAGE vulnerabilities (no language is inherently safer — it's how it's coded), PLATFORM vulnerabilities (apply updates promptly everywhere).",
        "EXTERNAL threats: DoS, DDoS (botnets, AMPLIFICATION/reflection via DNS/NTP with spoofed victim address), resource exhaustion (SSL renegotiation), LOGICAL DoS (lock out many accounts). Four DDoS test levels: no known malware; IDS spots many requests from one source; abusable configurations (SSL, web server, DNS); logic defects. Intrusions: social engineering, injection, account compromise, known vulnerabilities, malware, insecure configuration, authorization defects, application logic attacks.",
        "INTERNAL threats (often greatest): espionage, outsourced staff, stolen drives, disgruntled employees (fake invoices).",
        "Format: test cases for single conditions; test procedures/scripts when SEQUENCE matters (e.g. recover lost password); record conditions and results of exploratory tests."
      ]
    },
    {
      id: '3.3.2', title: 'Test Design Based on Policies and Procedures', level: 'K3', type: 'deep',
      deepPoints: [
        "Testing policies/procedures is almost auditing — but not the only basis. Goals: understand purpose and scope, ASSESS TESTABILITY, create tests directly related.",
        "Testable example (3-attempt lockout): three failed logins → lockout message and further attempts blocked; contact IT support and verify identity → temporary password by email; log in with it; create a new policy-conforming password (tests password policy too); log out; log in with the new password.",
        "Less testable: 'audit records contain all audited events, traceable to individuals' → trigger a sample of events and verify user ID and timestamps."
      ],
      examInsights: ["Q13 KEY (2 pts) — Testing a security PROCEDURE: three unsuccessful logins produce a lockout message, then the procedure to regain access."]
    },
    {
      id: '3.4.1', title: 'An Effective Security Test Environment', level: 'K2', type: 'deep',
      deepPoints: [
        "Security testing (especially untrusted third-party or open-source code) needs a SEGREGATED environment — functional controls and session management may be fine in an integrated one.",
        "ISOLATED (per malware risk); COMPLETE — mirrors production: systems, OS version and configuration, network, middleware, desktops, mobile devices, databases, ACCESS RIGHTS, browsers/plug-ins, co-existing apps, data (engineered or OBFUSCATED production data); RESTORABLE (repeat tests, recover from corruption)."
      ],
      examInsights: ["Q14 KEY — A main characteristic: mimics production, e.g. in terms of access rights."]
    },
    {
      id: '3.4.2', title: 'Planning and Approvals Before Security Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Why approval: accessing systems is illegal in almost all countries (some even prohibit owning SECURITY TESTING TOOLS) → need a waiver from the owner and management approval; tests can trigger IDS alerts (tester looks like a malicious insider — especially PEN TESTING); tests can cause major failures/blackouts. Without authorization a tester risks termination or prosecution.",
        "Authorization form: authorizing entity, testers, statement of work, dates, IPs/accounts; attestations (customer owns the system, has authority, has BACKED UP and tested RESTORE, understands risks); HOLD HARMLESS clause; signatures (OWASP sample)."
      ],
      examInsights: ["Q15 KEY — A significant concern when seeking tool approval: some countries prohibit certain security testing tools."]
    },
    {
      id: '3.5', title: 'Security Test Evaluation', level: 'K4', type: 'deep',
      deepPoints: [
        "Evaluate during execution; for each vulnerability file an incident report with at least: tester, environment, STEPS to recreate, nature, extent, potential impact, suggested remediation.",
        "Same incident tool is fine, but use a special category and SECURE the reports — e.g. independent testers in a loosely restricted tool, vulnerabilities not yet fixed, insiders as potential threats; the IT AUDITOR decides whether to restrict access. Final reports may be confidential depending on resolution status."
      ],
      examInsights: ["Q16 KEY (3 pts) — XSS found in the tested e-commerce release → check whether production has it too, document it securely and get it remediated."]
    },
    {
      id: '3.6', title: 'Security Test Maintenance', level: 'K2', type: 'skim',
      summary: "Targets and threats change DAILY, so the security test process must be easy to change — often just adding new tests for new threats. Keep up with new security testing tools and evaluate whether they add power and flexibility."
    }
  ]
};
