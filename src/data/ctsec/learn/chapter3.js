// CT-SEC (Advanced Security Tester 2016) — Chapter 3 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "This chapter turns security testing into a process: how it maps onto the ISTQB test process and different lifecycles, what a security test plan must contain, how to design security tests for many kinds of controls and threats, what a security test environment needs, why written authorization is essential, and how results are evaluated, reported and kept current.",
  keywords: ["account harvesting", "password cracking", "social engineering", "test approach", "test plan", "test process"],
  objectives: [
    { id: "AS-3.1.1", level: "K3", text: "For a given project, demonstrate the ability to define the elements of an effective security test process" },
    { id: "AS-3.2.1", level: "K4", text: "Analyze a given security test plan, giving feedback on strengths and weaknesses of the plan" },
    { id: "AS-3.3.1", level: "K3", text: "For a given project, implement conceptual (abstract) security tests, based on a given security test approach, along with identified functional and structural security risks" },
    { id: "AS-3.3.2", level: "K3", text: "Implement test cases to validate security policies and procedures" },
    { id: "AS-3.4.1", level: "K2", text: "Understand the key elements and characteristics of an effective security test environment" },
    { id: "AS-3.4.2", level: "K2", text: "Understand the importance of planning and obtaining approvals before performing any security test" },
    { id: "AS-3.5.1", level: "K4", text: "Analyze security test results to determine the nature, extent and potential impact of security vulnerabilities, suggested remediation and optimal test reporting methods" },
    { id: "AS-3.6.1", level: "K2", text: "Understand the importance of maintaining security testing processes given the evolving nature of technology and threats" },
  ],
  sections: {
    "3.1.1": {
      objective: "AS-3.1.1",
      body: [
        { type: "p", text: "Security testing is a lifecycle activity aligned with development; the process is defined in the context of each organization's risks, environments and business." },
        { type: "table", headers: ["ISTQB activity", "Security testing tasks"], rows: [
          ["Planning and control", "Define objectives and a scope matching the security risks; resources, estimates, schedule, metrics, entry/exit criteria; monitor and act"],
          ["Analysis and design", "Review the basis — risk assessments, security requirements, policies; define conditions from objectives, risks, standards and known vulnerabilities, implemented defenses, scope and tool applicability"],
          ["Implementation and execution", "Turn conceptual tests into executable ones; test from internal, external and malicious-user perspectives; functional security tests, knowledge-based penetration tests, model-based tests; ready the environment"],
          ["Evaluating and reporting", "Done alongside execution: determine vulnerabilities, evaluate risk levels, report to management and authorized parties"],
          ["Closure", "Confirm all planned tests ran and reports were delivered; archive results and sensitive data securely; feed lessons back into development"],
        ]},
        { type: "p", text: "The process isn't necessarily sequential. The planning hierarchy runs from the security test policy and strategy (organization) to the security test approach (project) to the concrete tasks." },
      ],
    },
    "3.1.2": {
      objective: "AS-3.1.1",
      body: [
        { type: "table", headers: ["Lifecycle", "What the security tester should know"], rows: [
          ["Sequential", "Needs and risks are set early in requirements but may change without updates; tests often happen late, when results are hard to act on"],
          ["Iterative/incremental (Agile)", "Needs emerge per iteration in stories, models and acceptance criteria and should be handled there; testing is continuous; some risks can't be fully addressed in one short cycle"],
          ["COTS", "Black box; frequent security patches; no code, so no structural testing"],
          ["Open source", "Code is public — once a vulnerability is published, that version and earlier are exposed, so keep patches current"],
        ]},
        { type: "list", intro: "Sequential example, phase by phase:", items: [
          "Requirements — define and review security requirements; develop the security test approach.",
          "Analysis and design — understand the architecture; define the major security test objectives.",
          "Detailed design — detailed test design; first model-based tests.",
          "Coding — static analysis and code reviews from a security viewpoint; component tests for buffer overflows and input checks against SQL injection; early integration tests.",
          "System testing — transaction security, authentication, data storage, firewalls and procedural controls.",
          "Acceptance — business-process security scenarios.",
          "Deployment — no new vulnerabilities from wrong configurations (e.g. database access rights).",
          "Maintenance — regression, current firewalls, continuous monitoring.",
        ]},
        { type: "example", title: "Iterative example", text: "The first four-week iteration builds user login, SSL, lost-password reset and lockout after three failed attempts. The security tester ensures the right policies are coded and tests beside the developer; each iteration re-checks controls and looks for newly introduced vulnerabilities." },
      ],
    },
    "3.2": {
      objective: "AS-3.2.1",
      body: [
        { type: "p", text: "Security testing has two aims: verify that designed defenses are implemented and work, and verify that no vulnerabilities were introduced during development (starting with an assessment of the team's practices). Defenses themselves come from risk analysis." },
        { type: "table", headers: ["Plan element", "Questions"], rows: [
          ["Scope", "What's in and out? What's achievable with the resources, risks and time?"],
          ["Who tests", "Do we have the skills? Outsource? Which tests does a vendor own? Is tool training needed?"],
          ["Schedule", "Which security items must work before other testing (logins, access rights)? When are features available? How long will it take?"],
          ["Tasks and time", "Time to design, to evaluate and report, for security regression, to build the environment"],
          ["Environment", "Extent (platform, technology, size, location), new or existing, which tools to install"],
          ["Authorizations and approvals", "Who must approve, when, and is the budget sufficient?"],
        ]},
        { type: "p", text: "Review the plan — technical reviews suit it, walkthroughs and inspections work too — with a checklist and people from every affected area. IT auditors and security administrators know the policies and procedures best." },
      ],
    },
    "3.3.1": {
      objective: "AS-3.3.1",
      body: [
        { type: "p", text: "Design can start from a risk analysis, a threat model or an ad hoc categorization of risk origins, with security tests in every applicable phase. Detailed tests are prioritized by risks and threat models, traced to security requirements, written for their audience, based on defect profiles and automated where sensible." },
        { type: "table", headers: ["Target", "Example tests"], rows: [
          ["Functional security controls", "A teller can't authorize a large withdrawal without the head teller's approval"],
          ["Functional access controls", "Password policies enforced, access level fits the risk, resistance to cracking; against account harvesting, a wrong password must not reveal whether the user name was valid"],
          ["Structural access controls", "Test accounts per access level; a minimal user can't perform manager actions"],
          ["Secure coding practices", "Mostly static checks: random session IDs, server-side authorization, no secrets or stack traces in errors, logged validation failures, no sensitive data in GET requests or clear-text cookies, TLS, sanitized and validated input, strong typing, least privilege (never root); OWASP, CERT and SANS Top 25 lists; dynamic memory tools for buffer overflows"],
          ["OS, language and platform", "Planting rootkits; no language is inherently safer — it's how the code is written; apply platform updates promptly everywhere"],
          ["External threats", "DoS and DDoS (botnets, amplification/reflection via DNS or NTP, resource exhaustion such as SSL renegotiation, logical DoS such as locking many accounts); intrusions via social engineering, injection, account compromise, known vulnerabilities, malware, insecure configuration, authorization defects, application logic abuse"],
          ["Internal threats", "Often the greatest: espionage, outsourced staff leaving with knowledge, stolen drives, disgruntled employees"],
        ]},
        { type: "list", intro: "Four levels of DDoS testing:", items: [
          "Computers aren't infected with known malware.",
          "Intrusion detection quickly spots many requests from one source.",
          "Configurations that allow abuse (SSL, web server, DNS) are found.",
          "Logic defects that enable DoS are found.",
        ]},
        { type: "p", text: "Use test cases for single conditions (e.g. password format), test procedures or scripts when sequence matters (e.g. recovering a lost password), and record conditions and results of exploratory tests." },
      ],
    },
    "3.3.2": {
      objective: "AS-3.3.2",
      body: [
        { type: "p", text: "Tests of policies and procedures are almost a form of auditing — useful, but never the only basis. Understand the policy's purpose and scope, assess its testability, then create tests directly related to it." },
        { type: "example", title: "A testable lockout procedure", text: "1) Fail three logins — a lockout message appears and further attempts are blocked. 2) Contact IT support and verify identity — a temporary password is sent to a known email. 3) Log in with it. 4) Create a new password that meets the policy (testing the password policy too). 5) Log out. 6) Log in with the new password." },
        { type: "p", text: "Some policies are harder to test — 'audit records contain all events, traceable to individuals' needs a sample of triggered events whose user IDs and timestamps are checked." },
      ],
    },
    "3.4.1": {
      objective: "AS-3.4.1",
      body: [
        { type: "p", text: "Functional controls and session management can be tested in an ordinary integrated environment, but untrusted third-party or open-source code can carry malware, so it needs a segregated, isolated or virtual environment." },
        { type: "list", items: [
          "Isolated from other systems, according to the malware risk.",
          "Complete — reflecting production: applications, exact OS versions and configuration, network, middleware, desktops, mobile devices, databases, access rights, browsers and plug-ins, co-existing applications, and engineered or obfuscated data.",
          "Restorable — to repeat tests and recover from corruption.",
        ]},
      ],
    },
    "3.4.2": {
      objective: "AS-3.4.2",
      body: [
        { type: "list", intro: "Why written approval comes first:", items: [
          "Accessing systems is illegal almost everywhere — some countries even ban possessing security testing tools — so testers need a waiver from the owner and management approval.",
          "Tests can trigger intrusion detection, making the tester look like a malicious insider (especially in penetration testing).",
          "Tests can cause major failures or outages.",
        ]},
        { type: "p", text: "Testing without specific authorization can violate policies and lead to termination or prosecution. An authorization form names the authorizing entity and testers, the statement of work, dates, IP addresses and accounts, and attestations that the customer owns the system, has authority to approve, has backed up and tested restoring the systems, and understands the risks — plus a hold-harmless clause and authorized signatures." },
      ],
    },
    "3.5": {
      objective: "AS-3.5.1",
      body: [
        { type: "list", intro: "Evaluation happens during execution. Each vulnerability gets an incident report with at least:", items: [
          "The tester and the test environment.",
          "The steps performed, so it can be recreated.",
          "The nature, extent and potential impact of the vulnerability.",
          "A suggested remediation.",
        ]},
        { type: "p", text: "The normal incident tool can be used, with a special category and restricted access — especially when external testers report in an open tool, vulnerabilities stay unresolved for a while, or insiders could exploit them. The IT auditor decides whether to restrict access; a final security test report may also be confidential until vulnerabilities are resolved." },
      ],
    },
    "3.6": {
      objective: "AS-3.6.1",
      body: [
        { type: "p", text: "Security targets and threats change daily, so the process must be easy to adapt — often by adding new kinds of tests for new threats. Keep track of new security testing tools and evaluate whether they add power and flexibility." },
      ],
    },
  },
};
