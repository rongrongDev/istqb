// CT-SEC (Advanced Security Tester 2016) — Chapter 1: The Basis of Security Testing
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 1,
  title: 'The Basis of Security Testing',
  time: '105 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "Foundation of the whole syllabus — security testing is driven by RISK. Know the risk assessment role (snapshot, repeat regularly, many inputs, NIST 800-30), the asset questions (which, how valuable, where, how accessed, how secured), external stakeholders (customers, public, REGULATORY agencies), the many policy types, controls (administrative/technical/physical × preventive/detective/corrective/recovery), the five audit pillars, risk exposure = impact × likelihood, and people–process–technology.",
  sections: [
    {
      id: '1.1.1', title: 'The Role of Risk Assessment in Security Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Security test objectives come from SECURITY RISKS identified in a security risk assessment. Risk = f(adverse impact, likelihood); information security risk = loss of CONFIDENTIALITY, INTEGRITY or AVAILABILITY (NIST 800-30).",
        "The assessment shows which areas/assets are at risk and how much → plan, design and PRIORITIZE security tests (most rigor on greatest exposure), aligning tests with business security objectives.",
        "Any assessment is a SNAPSHOT based on limited information — repeat regularly (every 3–6 months to annually); risks are missed through lack of detail or security knowledge → use an established methodology as a checklist and get input from MANY people."
      ]
    },
    {
      id: '1.1.2', title: 'Asset Identification', level: 'K4', type: 'deep',
      deepPoints: [
        "Assets may be digital, physical (printed contracts, written passwords, prototypes) or intangible (ability to deliver services, reputation and trust).",
        "Ask: WHICH assets are valuable (customer data, business plans, proprietary software, IP, financials, employee records…)? HOW VALUABLE (future revenue, value to a competitor, recreation effort, fines for not producing data, fines for losing customer data)? WHERE are they (servers, old CDs/USB, mobile devices, cloud)? HOW ACCESSED (LAN/Wi-Fi, VPN/cloud drives, physical media passed around, email)? HOW SECURED (encryption type/strength/keys, authentication and tokens, authorization/privileges)?"
      ]
    },
    {
      id: '1.1.3', title: 'Analysis of Risk Assessment Techniques', level: 'K4', type: 'deep',
      deepPoints: [
        "Like a standard risk assessment but security-focused; include EXTERNAL stakeholders: customers/users (perspective, input), public/society (community responsibility), REGULATORY AGENCIES (legal compliance).",
        "NIST 800-30 — PREPARE: purpose, scope, assumptions and constraints, information sources, risk model and analytic approach. CONDUCT: threat sources, threat events, vulnerabilities and predisposing conditions, likelihood of initiation and success, adverse impacts. COMMUNICATE and SHARE results."
      ],
      examInsights: [
        "Q2 KEY (3 pts) — Outside vendors must keep following government-mandated guidelines → focus on the federal and local agencies that communicate those guidelines."
      ]
    },
    {
      id: '1.2.1', title: 'Security Policies and Procedures', level: 'K2', type: 'deep',
      deepPoints: [
        "Policies vary by business, industry and risks, but all should be based on a security RISK ASSESSMENT.",
        "Examples: ACCEPTABLE USE; MINIMUM ACCESS (no more rights than needed); NETWORK ACCESS (no unauthorized routers/hot spots); REMOTE ACCESS (VPN); INTERNET ACCESS; USER ACCOUNT MANAGEMENT; DATA CLASSIFICATION (public → confidential (default for internal docs) → highly confidential → private → secret); CONFIGURATION AND CHANGE MANAGEMENT; SERVER SECURITY; MOBILE DEVICES; GUEST ACCESS; PHYSICAL SECURITY; PASSWORD; MALWARE PROTECTION; INCIDENT RESPONSE; AUDIT; SOFTWARE LICENSING; ELECTRONIC MONITORING AND PRIVACY.",
        "PROCEDURES are the step-by-step specifics to implement a policy/control or respond to an incident (policies, standards, guidelines say WHAT controls; procedures say HOW)."
      ],
      examInsights: [
        "Q3 KEY — A minimum/controlled access policy for devices means non-conforming devices are removed from the network until they conform."
      ]
    },
    {
      id: '1.2.2', title: 'Analysis of Security Policies and Procedures', level: 'K4', type: 'deep',
      deepPoints: [
        "First define evaluation objectives and adequacy criteria (possibly from COBIT, ISO 27001, PCI), resources/skills, how and what to measure (effectiveness, efficiency, usability, adoption), where policies live, and a CHECKLIST.",
        "Auditor tasks (static and dynamic): review documentation, survey and interview people, witness processes, analyze previous audits, logs and reports, review technical control configuration (firewall, IDS), sample transactions for anomalies.",
        "CONTROLS = safeguards/countermeasures: ADMINISTRATIVE, TECHNICAL, PHYSICAL, each PREVENTIVE, DETECTIVE, CORRECTIVE or RECOVERY — needed from each category (SANS Top 20).",
        "SECURITY TESTS add proof: a policy may exist and be followed yet be INEFFECTIVE (e.g. a password policy that a cracking tool beats); attacks evolve → test with the attacker mindset."
      ],
      examInsights: [
        "Q4 KEY (3 pts) — To report policy effectiveness to senior management: analyze the results of a security test to validate effectiveness."
      ]
    },
    {
      id: '1.3.1', title: 'Security Auditing and the Purpose of a Security Audit', level: 'K2', type: 'deep',
      deepPoints: [
        "Security audit = manual examination identifying weaknesses in security processes and infrastructure (procedural audits manual; architectural audits with tools). Wider scope than testing (procedures, policies, controls hard to test directly); testing focuses on technology (firewalls, authentication, encryption, user rights).",
        "Five pillars: ASSESSMENT (threats, assets, policies, risk tolerance — regularly), PREVENTION (administrative, operational, technical + awareness), DETECTION (know if compromised), REACTION (fast incident response), RECOVERY (restore without recreating the vulnerability + root cause analysis).",
        "Audits may find: inadequate physical security (dumpster diving), password maintenance (alternating two passwords), user rights and sharing, server-level security (ports, data, accounts), vendor security updates (PATCHES), intrusion detection, breach response plans."
      ],
      examInsights: [
        "Q1 KEY — A purpose of a security audit: reveal insufficient application of vendor patch updates."
      ]
    },
    {
      id: '1.3.2', title: 'Risk Identification, Assessment and Mitigation', level: 'K2', type: 'deep',
      deepPoints: [
        "After an audit, identify (document), assess (assign value) and mitigate risks; use security-specific models (NIST 800-30, OWASP Risk Rating).",
        "RISK EXPOSURE = potential impact/loss × likelihood. Risk factors: THREAT (circumstance/event with adverse potential; sources = hostile attacks, human errors, structural failures, disasters), VULNERABILITY (weakness that a threat source can exploit — incl. governance, external relationships, processes, architecture; controls degrade over time → continuous monitoring), IMPACT (magnitude of harm; document process, assumptions, sources, rationale), LIKELIHOOD (adversarial: intent, capability, targeting; otherwise historical data; within a time frame), predisposing conditions.",
        "Combine likelihood and impact (e.g. 0–9 scales) in a RISK MATRIX → severity (e.g. medium likelihood + high impact = HIGH); prefer business impact over technical; flag ongoing risks; higher severity = more immediate response."
      ]
    },
    {
      id: '1.3.3', title: 'People, Process and Technology', level: 'K2', type: 'skim',
      summary: "All security incidents trace back to a deficiency in PEOPLE (end users, admins, owners, managers — controls fail if not followed → awareness training, penalties), PROCESS (defined, current, consistent procedures and standards with roles and controls) or TECHNOLOGY (facilities, hardware, software — misused, it helps people make mistakes faster). Together an 'iron triangle'. Look at the system as an attacker: only testing from the attacker perspective (ETHICAL HACKING / PENETRATION TESTING) proves defenses work. Auditing identifies deficiencies; testing proves whether controls work. Example: a tax agency that knows of a critical fraud defect and delays the fix can be LIABLE."
    }
  ]
};
