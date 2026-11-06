// CT-SEC (Advanced Security Tester 2016) — Chapter 1 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Security testing starts from risk. This chapter explains how security risk assessments feed test planning, how to identify and value the assets worth protecting, how to run a risk assessment, what security policies, procedures and controls are and how to evaluate them, and how security auditing relates to security testing.",
  keywords: [
    "data privacy", "ethical hacker", "information security", "penetration testing", "risk assessment", "risk exposure",
    "risk mitigation", "security attack", "security audit", "security policy", "security procedure", "security risk",
  ],
  objectives: [
    { id: "AS-1.1.1", level: "K2", text: "Understand the role of risk assessment in supplying information for security test planning and design and aligning security testing with business needs" },
    { id: "AS-1.1.2", level: "K4", text: "Identify the significant assets to be protected, the value of each asset and the data required to assess the level of security needed for each asset" },
    { id: "AS-1.1.3", level: "K4", text: "Analyze the effective use of risk assessment techniques in a given situation to identify current and future security threats" },
    { id: "AS-1.2.1", level: "K2", text: "Understand the concept of security policies and procedures and how they are applied in information systems" },
    { id: "AS-1.2.2", level: "K4", text: "Analyze a given set of security policies and procedures along with security test results to determine effectiveness" },
    { id: "AS-1.3.1", level: "K2", text: "Understand the purpose of a security audit" },
  ],
  sections: {
    "1.1.1": {
      objective: "AS-1.1.1",
      body: [
        { type: "p", text: "Security test objectives are derived from security risks, which a security risk assessment identifies. Risk combines the adverse impact of an event with its likelihood; information security risks come from losing the confidentiality, integrity or availability of information or systems (NIST 800-30)." },
        { type: "p", text: "The assessment shows which areas and assets are at risk and how badly — a rich source for planning and designing security tests, and for prioritizing them so the most rigor goes where risk exposure is greatest. That aligns testing with business security objectives, provided the assessment reflects real threats, stakeholders and assets." },
        { type: "note", title: "A snapshot", text: "Every risk assessment is a snapshot with limited information, and new threats appear daily — repeat it regularly (some organizations every 3–6 months, others yearly). Avoid missed risks by using an established methodology as a checklist and gathering input from many people." },
      ],
    },
    "1.1.2": {
      objective: "AS-1.1.2",
      body: [
        { type: "p", text: "Assets aren't only digital: printed contracts, written passwords, physical prototypes, the ability to deliver services and the company's reputation can all be valuable." },
        { type: "table", headers: ["Question", "Considerations"], rows: [
          ["Which assets are valuable?", "Customer data, business plans, proprietary software, documentation, intellectual property, financial spreadsheets, emails, employee records, tax statements…"],
          ["How valuable?", "Future revenue, value to a competitor, effort to recreate, fines for not producing data (audit, lawsuit), fines for losing customer data"],
          ["Where are they?", "Secure encrypted servers — or old CDs, USB drives, laptops, phones and cloud storage, each with its own concerns"],
          ["How are they accessed?", "LAN/Wi-Fi, VPN or cloud drives, physical media passed between people, email"],
          ["How are they secured?", "Encryption (type, strength, key holders), authentication and tokens (certificates, password policies), authorization (privilege levels)"],
        ]},
      ],
    },
    "1.1.3": {
      objective: "AS-1.1.3",
      body: [
        { type: "p", text: "A security risk assessment works like any risk assessment but focuses on security, and must include external stakeholders: customers and users (perspective and input), the public and society (security as a shared responsibility) and regulatory agencies (legal compliance)." },
        { type: "table", headers: ["NIST 800-30 step", "Tasks"], rows: [
          ["Prepare", "Purpose, scope, assumptions and constraints, information sources, risk model and analytic approach"],
          ["Conduct", "Identify threat sources and the threat events they could cause; identify vulnerabilities and predisposing conditions; determine the likelihood of events being initiated and succeeding; determine adverse impacts"],
          ["Communicate and share", "Communicate the results; share information to support other risk management activities"],
        ]},
      ],
    },
    "1.2.1": {
      objective: "AS-1.2.1",
      body: [
        { type: "p", text: "Security policies vary by business model, industry and risk, but their goals are similar and all should rest on a security risk assessment." },
        { type: "table", headers: ["Policy", "Covers"], rows: [
          ["Acceptable use", "Acceptable, unacceptable and required behavior for internal and external users of digital resources"],
          ["Minimum access", "Only the access rights needed for a task"],
          ["Network / remote / Internet access", "Criteria for LAN and wireless access (no unauthorized routers or hot spots); VPN and remote access; permissible Internet use"],
          ["User account management", "Creating, maintaining, auditing and deleting accounts"],
          ["Data classification", "Public, confidential (default for internal documents), highly confidential, private, secret — controls based on value"],
          ["Configuration and change management", "Standard configurations, approval and rollback, so unauthorized changes don't open vulnerabilities"],
          ["Server security, mobile devices, guest access, physical security", "Baselines and owner responsibilities; encryption and anti-malware on mobiles; guests accept the acceptable use policy; physical controls"],
          ["Password, malware protection, incident response, audit", "Strong passwords and handling; malware defenses (e.g. USB restrictions); predefined incident responses incl. media and law enforcement; auditors' access rights"],
          ["Software licensing, electronic monitoring and privacy", "Licensed, approved software only; what communications are monitored (legal counsel needed)"],
        ]},
        { type: "p", text: "Security procedures give the step-by-step specifics for implementing a policy or control, or for responding to an incident. Policies, standards and guidelines say which controls should exist; procedures say how to implement them." },
      ],
    },
    "1.2.2": {
      objective: "AS-1.2.2",
      body: [
        { type: "p", text: "Before evaluating policies and procedures, define the objectives and adequacy criteria (possibly from COBIT, ISO 27001 or PCI), the skills needed, how and what to measure (effectiveness, efficiency, usability, adoption), where the documents are, and a checklist for consistency." },
        { type: "list", intro: "The auditor:", items: [
          "Reviews system documentation; surveys and interviews people involved.",
          "Witnesses systems and processes in action.",
          "Analyzes previous audit results, logs and reports.",
          "Reviews technical control configurations such as firewalls and intrusion detection.",
          "Samples transactions for anomalies.",
        ]},
        { type: "p", text: "Controls are safeguards against loss. They are administrative, technical or physical, and each can be preventive, detective, corrective or recovery — effective protection needs controls from each category." },
        { type: "note", title: "Why test as well", text: "A policy can exist and be followed yet still be ineffective — a reasonable password policy may fall to a password cracking tool. Security tests prove effectiveness, and since attacks keep evolving they must be designed with an attacker's mindset." },
      ],
    },
    "1.3.1": {
      objective: "AS-1.3.1",
      body: [
        { type: "p", text: "A security audit is a manual examination that finds weaknesses in security processes and infrastructure — procedural audits by hand, architectural ones with audit tools. Its scope is wider than testing (procedures, policies and controls that are hard to test directly), while security testing focuses on technology such as firewall configuration, authentication, encryption and user rights." },
        { type: "table", headers: ["Audit pillar", "Meaning"], rows: [
          ["Assessment", "Document threats, assets, policies and risk tolerance — regularly"],
          ["Prevention", "Administrative, operational and technical controls plus awareness"],
          ["Detection", "Knowing whether a breach or intrusion has happened"],
          ["Reaction", "Fast incident response to limit exposure"],
          ["Recovery", "Restore without recreating the vulnerability, and fix the root cause"],
        ]},
        { type: "list", intro: "Typical audit findings:", items: [
          "Inadequate physical security (e.g. confidential printouts in the trash — 'dumpster diving').",
          "Inadequate password maintenance (users alternating two passwords).",
          "Excess user rights or wrongly shared files.",
          "Inadequate server security — ports, data, accounts.",
          "Inadequate application of vendor security updates (patches).",
          "Inadequate intrusion detection or breach response plans.",
        ]},
      ],
    },
    "1.3.2": {
      objective: "AS-1.3.1",
      body: [
        { type: "p", text: "After an audit, risks are identified (documented), assessed (valued) and mitigated, using security-specific models such as NIST 800-30 or the OWASP Risk Rating Methodology." },
        { type: "note", title: "Risk exposure", text: "Risk exposure = potential impact (loss) × likelihood of that loss." },
        { type: "table", headers: ["Risk factor", "Meaning"], rows: [
          ["Threat", "A circumstance or event that could harm operations, assets or people through unauthorized access, destruction, disclosure, modification or denial of service; sources: hostile attacks, human errors, structural failures, disasters"],
          ["Vulnerability", "A weakness a threat source could exploit — in systems, controls, governance, external relationships, processes or architecture; controls degrade over time, so monitor continuously"],
          ["Impact", "The magnitude of harm; document the process, assumptions, sources and rationale"],
          ["Likelihood", "Probability that a threat event results in harm within a time frame — for adversaries based on intent, capability and targeting"],
        ]},
        { type: "p", text: "Combine likelihood and impact (e.g. scored 0–9 against defined criteria) in a risk matrix to get severity — for example medium likelihood with high impact is high severity. Prefer business impact information over technical, flag ongoing risks, and respond faster to higher severity." },
      ],
    },
    "1.3.3": {
      objective: "AS-1.3.1",
      body: [
        { type: "p", text: "Security incidents can usually be traced to a deficiency in people, process or technology — an 'iron triangle'. People (users, admins, owners, managers) make controls useless if they don't follow them; processes must be defined, current and consistent; technology used incorrectly helps people make mistakes faster." },
        { type: "p", text: "The only way to know a defense really works is to test from the attacker's perspective — ethical hacking or penetration testing. Auditing identifies deficiencies and what to test; testing proves whether controls are in place and effective." },
        { type: "example", title: "Liability", text: "An audit, confirmed by testing, shows criminals can file fraudulent tax returns; the agency rates the risk critical but postpones the fix. Defrauded taxpayers who followed every procedure can hold the agency liable." },
      ],
    },
  },
};
