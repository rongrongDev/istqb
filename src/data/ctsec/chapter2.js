// CT-SEC (Advanced Security Tester 2016) — Chapter 2: Security Testing Purposes, Goals and Strategies
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 2,
  title: 'Security Testing Purposes, Goals and Strategies',
  time: '130 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "Why and how an organization tests security. Know the threats to explore (XSS, buffer overflow, DoS, man-in-the-middle, logic bombs…), that security testing shows DUE DILIGENCE, that security must be BUILT IN (can't be tested in), that the security testing policy follows the approved security policy, IA ⊃ security testing, scope too small vs too large, what to consider when defining an approach, the root causes of failed approaches, which stakeholder sees which benefit, and the KPIs for improvement.",
  sections: [
    {
      id: '2.1', title: 'Introduction: Why Security Testing Is Different', level: 'K2', type: 'skim',
      summary: "Security testing differs from functional testing because standard input-selection techniques may miss security issues and security defect symptoms are very different. It assesses vulnerability by trying to compromise the security policy. Threats to explore: unauthorized copying; unauthorized access control (user rights); unintended SIDE EFFECTS (media player writing unencrypted temp files); CROSS-SITE SCRIPTING (code inserted into a page for later users); BUFFER OVERFLOW (over-long input → malicious code); DENIAL OF SERVICE; MAN IN THE MIDDLE (intercept/alter/relay communications unnoticed); breaking encryption; LOGIC BOMBS (activate under conditions, e.g. a date). Integrate security testing with all development and testing activities."
    },
    {
      id: '2.2', title: 'The Purpose of Security Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "Cannot guarantee safety from attack, but identifies risks and evaluates the effectiveness of defenses (supplemented by audits and reviews).",
        "Shows DUE DILIGENCE — after a breach and legal action, evidence of reasonable protective steps can be a legal defense; also assures clients that sensitive data is protected."
      ],
      examInsights: ["Q5 KEY — After a breach with legal action, prior security testing shows the organization did due diligence to try to prevent it."]
    },
    {
      id: '2.3', title: 'The Organizational Context', level: 'K2', type: 'skim',
      summary: "Security testing competes for limited test time (test manager decides) and is often a specialist, OUTSOURCED role; its extent is driven by security-based business risks — more risks, more testing. Security is a LIFECYCLE activity: defined in requirements, expressed in design, implemented in code, then verified and validated by testing. Security can't be patched or TESTED INTO code — only built in through secure coding and design. Time, resources, scope, risk levels, skills and lifecycle approach drive success."
    },
    {
      id: '2.4.1', title: 'Aligning Security Testing Goals', level: 'K2', type: 'deep',
      deepPoints: [
        "Write the SECURITY TESTING POLICY after senior management approves the organization's SECURITY POLICY; its goals must ALIGN with the security policy — otherwise unauthorized tests are run or tests miss their purpose."
      ],
      examInsights: ["Q9 KEY (3 pts) — Executives unaligned and no plan → first create a security policy and a security testing policy and show how they fit together."]
    },
    {
      id: '2.4.2', title: 'Identifying Security Test Objectives', level: 'K3', type: 'deep',
      deepPoints: [
        "Like functional objectives but security-focused: at least one per SECURITY FEATURE; also based on technology attributes (web, mobile, cloud, LAN) and known (application and generic) vulnerabilities.",
        "Examples: password authentication applies the correct strength rule; all input fields are validated against SQL injection; customer files are encrypted at the correct strength."
      ],
      examInsights: ["Q7 KEY (2 pts) — Pick the objectives that are SECURITY rules (lock-out, strength, expiry…), excluding purely functional checks like an admin resetting a password."]
    },
    {
      id: '2.4.3', title: 'Information Assurance vs Security Testing', level: 'K2', type: 'skim',
      summary: "INFORMATION ASSURANCE = measures protecting and defending information and systems by ensuring availability, integrity, authentication, confidentiality and non-repudiation, incl. restoration via protection, detection and reaction (NISTIR 7298). SECURITY TESTING = determining that security features are implemented as designed and adequate for the environment. IA is WIDER — security testing is part of IA, like testing is part of QA.",
      examInsights: ["Q6 KEY — Correct statement: security testing is a part of information assurance."]
    },
    {
      id: '2.5', title: 'Scope and Coverage of Security Test Objectives', level: 'K3', type: 'deep',
      deepPoints: [
        "The greater the need for integrity of sensitive assets, the greater the needed coverage. Objectives describe the SCOPE: too SMALL → no confidence; too LARGE → resources run out before finishing.",
        "Objectives should relate directly to specific assets, protective measures, risks and vulnerability identification."
      ],
      examInsights: ["Q8 KEY (2 pts) — Reactive, wide initiatives risk a test scope that's too large for the available resources."]
    },
    {
      id: '2.6.1', title: 'Analysis of Security Test Approaches', level: 'K4', type: 'deep',
      deepPoints: [
        "Strategy (organization) → approaches (project level), consistent with test policy/strategy; a unique blend of techniques, tools and skills.",
        "Consider: source of the systems, previous security testing, security policy, security testing policy, existing risk assessments, technical environment, team skills, common risks, test and project organization, tool experience, CONSTRAINTS, ASSUMPTIONS.",
        "Different technologies need different approaches (code reviews, test data obfuscation, web vs mainframe); some vulnerabilities are common (buffer overflows; inadequate data protection — but web/mobile data must also be protected IN TRANSIT; unencrypted backup tapes lost)."
      ]
    },
    {
      id: '2.6.2', title: 'Analysis of Failures in Security Test Approaches', level: 'K4', type: 'deep',
      deepPoints: [
        "Degrees of failure — a missed vulnerability doesn't automatically mean the approach failed. Use ROOT CAUSE ANALYSIS.",
        "Typical causes: lack of executive leadership; lack of resources (funding, time, people); ineffective implementation (skills); lack of organizational or stakeholder understanding/support; poor understanding of risks; misalignment with the security policy or security testing policy/strategy; poor understanding of the system's purpose; missing technical information (wrong assumptions); lack of effective tools; lack of security testing skills."
      ]
    },
    {
      id: '2.6.3', title: 'Stakeholder Identification', level: 'K3', type: 'deep',
      deepPoints: [
        "Make a BUSINESS CASE (risks of lapses, benefits of testing) to management.",
        "Benefits by stakeholder: executive management → BUSINESS PROTECTION; senior management → DUE DILIGENCE; business customers → PROTECTION FROM FRAUD; compliance officers → compliance with legal obligations; regulatory officers → external regulations followed; privacy officers → private data kept secure."
      ],
      examInsights: ["Q10 KEY (2 pts) — Protection from fraud is a benefit most visible to business customers."]
    },
    {
      id: '2.7', title: 'Improving Security Testing Practices', level: 'K4', type: 'skim',
      summary: "Evaluate existing practices objectively with key metrics — short- and long-term, process and organization, people/tools/systems/techniques. KPIs: COVERAGE of security RISKS, of security POLICIES and practices, of security REQUIREMENTS by tests; EFFECTIVENESS of past security testing based on when and where vulnerabilities were found (pre- and POST-release)."
    }
  ]
};
