// CT-SEC (Advanced Security Tester 2016) — Chapter 5: Testing Security Mechanisms
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 5,
  title: 'Testing Security Mechanisms',
  time: '240 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "The longest chapter: for each defense mechanism know WHAT it is and HOW to test it — system hardening, authentication vs authorization, encryption (symmetric/asymmetric; design, construction, configuration, aging tests), firewalls and network zones (DMZ; port scans, malformed packets, fragmentation), intrusion detection (negative/signature vs positive/behavior models; evasion; false negatives), malware scanning (signatures + heuristics; EICAR; pilot before rollout), data obfuscation (brute force, reverse engineering) and security training (social engineering, sticky notes, password audits).",
  sections: [
    {
      id: '5.1', title: 'System Hardening', level: 'K3', type: 'deep',
      deepPoints: [
        "Attack surfaces grow; vulnerabilities come BY DESIGN, BY CONSTRUCTION (code defects) or BY CONFIGURATION. Hardening = step-by-step REDUCING THE ATTACK SURFACE via a security policy and layers of protection — at component, product, system or system-of-systems level.",
        "Defenses: remove unnecessary software, libraries/dev tools, accounts, applications and NETWORK SERVICES, peripherals/ports (USB, card readers); patch promptly (automatic updates); update configurations; follow coding rules; REMOTE LOGGING server so attackers can't delete all logs.",
        "Mechanisms: strong authentication and role-based authorization; encryption; firewalls and zones (sandboxing); IDS; anti-malware; obfuscation. Balance with usability — over-restrictive protections get disabled.",
        "TESTS: are hardening efforts working, in the right places, in the right ways — and not EXCESSIVE? Audit DB/app server configs for changed DEFAULT PASSWORDS; audit for unnecessary services and PORTS; verify components/libraries aren't OBSOLETE; VULNERABILITY SCANNERS for complex multi-site systems; static analysis for coding-rule violations."
      ],
      examInsights: ["Q25 KEY (2 pts) — To confirm hardening works as expected, closely monitor security performance reports and metrics after applying it."]
    },
    {
      id: '5.2', title: 'Authentication and Authorization', level: 'K3', type: 'deep',
      deepPoints: [
        "AUTHENTICATION = verify identifier + token: who is the user (login) and are they really who they claim (password). Options: weak-password detection, ONE-TIME PASSWORDS, fingerprints, software certificates, hard tokens; local, server, network authentication, SINGLE SIGN-ON.",
        "AUTHORIZATION = does the authenticated user have the right to an action, and which access level to resources. Non-authenticated users have no or restricted rights (browse products, but must create an account to buy; customers can't do admin functions).",
        "Attackers exploit coding errors (no input filtering), old vulnerable libraries, configuration errors (DEFAULT passwords/rights), WEAK passwords ('123456'). Rules don't help if users aren't diligent; follow current guidance (SANS).",
        "TESTS: BRUTE FORCE and DICTIONARY attacks; SQL injection to authenticate without credentials; unauthorized URI/URL (../../, /admin); exploit unpatched vulnerabilities → PRIVILEGE ESCALATION."
      ],
      examInsights: ["Q26 KEY — Authentication of a medium-complexity system verifies that the user entering the system is legitimate."]
    },
    {
      id: '5.3', title: 'Encryption', level: 'K3', type: 'deep',
      deepPoints: [
        "Encoding plain text into cypher text with an algorithm and secrets so only authorized parties can decrypt; HASHING and SALTING are related methods. Protects data AT REST (DB passwords, encrypted drives) and IN TRANSIT (email, SSL/TLS). SYMMETRIC (shared secret key) vs ASYMMETRIC (private/public key).",
        "Weakness: short or static keys, poor implementation, coding defects.",
        "DESIGN tests: correct MODES in symmetric encryption; key size (RSA < 2048 bit insecure as of 2015); certificate validity and alerts on SELF-SIGNED certs (MITM); REPLAY attacks (WEP); protocol strength attacks.",
        "CONSTRUCTION tests: code reviews (no default random() for seeds), fuzzing, TIMING attacks, POWER analysis (hardware). CONFIGURATION tests: TLS server/client configuration, cipher order (downgrade/renegotiation). AGING tests: mechanisms that have become weak."
      ],
      examInsights: ["Q27 KEY (2 pts) — Gain confidence in encryption by testing that symmetric encryption uses the right modes (and keys are long enough)."]
    },
    {
      id: '5.4', title: 'Firewalls and Network Zones', level: 'K3', type: 'deep',
      deepPoints: [
        "FIREWALL: components restricting access between a protected network and the Internet or other networks, enforcing a policy of authorized/forbidden communications; HOST-based or NETWORK-based; filters by addresses, protocols, ports, protocol options (fragmentation, TTL), data size. WEB APPLICATION FIREWALLS also filter by user connections and data patterns.",
        "NETWORK ZONE: a sub-network with a defined trust level — Internet/public (untrusted), DMZs (demilitarized zones, varying trust), private/internal (most trusted); zones define authorized flows; everything else blocked.",
        "TESTS: PORT SCANNING (policy correctly implemented); MALFORMED PACKETS and network FUZZING (unexpected behavior, DoS); FRAGMENTATION attacks to bypass filtering; for WAFs, encode/compress/obfuscate payloads."
      ],
      examInsights: ["Q28 KEY — A sub-network can be a network zone, and a firewall controls traffic between zones."]
    },
    {
      id: '5.5', title: 'Intrusion Detection', level: 'K3', type: 'deep',
      deepPoints: [
        "IDS monitors activities from network to application (OSI layers) to detect POLICY VIOLATIONS and raise alerts (then block traffic, virtual patching). Unlike a firewall (looks outward and stops traffic), an IDS ANALYZES suspicious activity and ALERTS.",
        "NEGATIVE model (signature/blacklist): 'all not explicitly forbidden is allowed' — known attacks only. POSITIVE model (behavior/whitelist): 'all not explicitly allowed is rejected' — deviations from specified normal behavior.",
        "TESTS: signature detection is easy to bypass → EVASION: character encoding/whitespace, IP fragmentation, TCP segmentation, encryption, obfuscation, URL encoding. Behavior detection → many FALSE POSITIVES and FALSE NEGATIVES (missed alerts, e.g. new attacks); attackers can shift 'normal' behavior → use MALICIOUS TRAFFIC to try to get intrusive patterns accepted as authorized. Inputs: PP-IDS, WAFEC."
      ],
      examInsights: ["Q29 KEY (2 pts) — Test an IDS with malicious traffic that tries to add intrusive specifications as authorized (and with evasion techniques)."]
    },
    {
      id: '5.6', title: 'Malware Scanning', level: 'K3', type: 'deep',
      deepPoints: [
        "Malware arrives via malicious attachments, fake URLs, client-side code. Anti-malware analyzes, detects and removes it — targets malware, PHISHING, PHARMING.",
        "Main strategy: SIGNATURES (known patterns) — NEW/unknown malware is missed; HEURISTICS catch slight variations.",
        "Evasion by malware authors: abusing system library functions (FindWindow to close the scanner), STRING OBFUSCATION/encryption (JavaScript in PDF, UPX packing), dynamic loading, automatic updates (Skype Trojan), GPU-based unpacking (can't analyze before execution).",
        "TESTS: use the EICAR test file instead of real malware; PILOT new or upgraded anti-malware on a representative platform — false positives have quarantined OS files and shut organizations down."
      ],
      examInsights: ["Q30 KEY — Main disadvantage: malware scanning tools only detect malware known to the tool."]
    },
    {
      id: '5.7', title: 'Data Obfuscation', level: 'K3', type: 'deep',
      deepPoints: [
        "OBFUSCATION (data MASKING) makes data or code non-understandable for humans — against copying (license bypass) and REVERSE ENGINEERING; lets support staff and testers work with non-sensitive data (ANONYMIZATION); protects critical HTML pages from script injection reconnaissance.",
        "Techniques: base64, XORing, random renaming, method overriding, whitespace deletion, shuffling; encryption too (but viewable with keys). Attackers also obfuscate malicious code.",
        "Tight configuration control of obfuscated data and keys. Obfuscated production data in test environments (e.g. health data must not reach testers).",
        "TESTS: BRUTE FORCE or dictionary attacks to recover plain data; reverse-engineer byte code (Java Decompiler, .NET Reflector); brute force weak schemes (unXOR). Code can't fully protect itself — debugging always works."
      ],
      examInsights: ["Q31 KEY (2 pts) — Most effective check of masking: design a brute force attack on the obfuscated data."]
    },
    {
      id: '5.8', title: 'Security Training', level: 'K3', type: 'deep',
      deepPoints: [
        "Humans are often the WEAKEST LINK → consistent, continuous training throughout the lifecycle, updated for new policies and threats, covering SOCIAL ENGINEERING and INSIDER threats.",
        "TESTS of training effectiveness: social engineering calls from fake tech support asking for passwords; looking for STICKY NOTES with passwords (under keyboards); PASSWORD AUDIT tools for weak passwords (risk: tester sees passwords); SQL injection succeeding → developer needs secure coding training (check other developers too → process improvement); attempting unauthorized PHYSICAL access to read documents left out."
      ]
    }
  ]
};
