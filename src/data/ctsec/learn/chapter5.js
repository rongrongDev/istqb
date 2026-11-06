// CT-SEC (Advanced Security Tester 2016) — Chapter 5 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "No single defense is enough, and each has strengths and weaknesses. For each common security mechanism — hardening, authentication and authorization, encryption, firewalls and network zones, intrusion detection, malware scanning, data obfuscation and training — this chapter explains what it does and how a security tester checks that it is effective.",
  keywords: [
    "anti-malware", "authentication", "authorization", "demilitarized zone", "encryption", "firewall", "hashing",
    "insider threat", "intrusion detection system", "malware", "malware scanning", "network zone", "pharming",
    "phishing", "salting", "system hardening", "vulnerability scanner",
  ],
  objectives: [
    { id: "AS-5.1.1", level: "K2", text: "Understand the concept of system hardening and its role in enhancing security" },
    { id: "AS-5.1.2", level: "K3", text: "Demonstrate how to test the effectiveness of common system hardening mechanisms" },
    { id: "AS-5.2.1", level: "K2", text: "Understand the relationship between authentication and authorization and how they are applied in securing information systems" },
    { id: "AS-5.2.2", level: "K3", text: "Demonstrate how to test the effectiveness of common authentication and authorization mechanisms" },
    { id: "AS-5.3.1", level: "K2", text: "Understand the concept of encryption and how it is applied in securing information systems" },
    { id: "AS-5.3.2", level: "K3", text: "Demonstrate how to test the effectiveness of common encryption mechanisms" },
    { id: "AS-5.4.1", level: "K2", text: "Understand the concept of firewalls and the use of network zones and how they are applied in securing information systems" },
    { id: "AS-5.4.2", level: "K3", text: "Demonstrate how to test the effectiveness of existing firewall implementations and network zones" },
    { id: "AS-5.5.1", level: "K2", text: "Understand the concept of intrusion detection tools and how they are applied in securing information systems" },
    { id: "AS-5.5.2", level: "K3", text: "Demonstrate how to test the effectiveness of existing intrusion detection tool implementations" },
    { id: "AS-5.6.1", level: "K2", text: "Understand the concept of malware scanning tools and how they are applied in securing information systems" },
    { id: "AS-5.6.2", level: "K3", text: "Demonstrate how to test the effectiveness of existing malware scanning tool implementations" },
    { id: "AS-5.7.1", level: "K2", text: "Understand the concept of data obfuscation tools and how they are applied in securing information systems" },
    { id: "AS-5.7.2", level: "K3", text: "Demonstrate how to test the effectiveness of data obfuscation approaches" },
    { id: "AS-5.8.1", level: "K2", text: "Understand the concept of security training as a software lifecycle activity and why it is needed in securing information systems" },
    { id: "AS-5.8.2", level: "K3", text: "Demonstrate how to test the effectiveness of security training" },
  ],
  sections: {
    "5.1": {
      objective: "AS-5.1.2",
      body: [
        { type: "p", text: "As systems grow more complex, their attack surface grows. Vulnerabilities arise by design, by construction (code defects) or by configuration. System hardening reduces the attack surface step by step by applying a security policy and layers of protection — to a component, a product, a system or a system of systems." },
        { type: "list", intro: "Hardening defenses:", items: [
          "Remove unnecessary software, libraries, developer tools, accounts, applications, network services, peripherals and ports (USB, card readers).",
          "Patch promptly (automatic updates) and keep configurations current; follow coding rules.",
          "Send logs to a remote logging server so an attacker can't erase them all.",
          "Use strong authentication with role-based authorization, encryption, firewalls and security zones (sandboxing), intrusion detection, anti-malware and obfuscation.",
        ]},
        { type: "note", title: "Balance", text: "Hardening must be balanced against usability — protections that block productivity end up switched off." },
        { type: "list", intro: "Testing hardening — is it working, applied in the right places and ways, and not excessive?", items: [
          "Audit database and application server configurations for unchanged default passwords.",
          "Audit system configuration for unnecessary services and open ports.",
          "Check components, libraries and application versions aren't obsolete and vulnerable.",
          "Use vulnerability scanners for complex (e.g. multi-site) systems and static analysis for coding-rule violations.",
        ]},
      ],
    },
    "5.2": {
      objective: "AS-5.2.2",
      body: [
        { type: "table", headers: ["", "Authentication", "Authorization"], rows: [
          ["Question", "Who is the user, and are they really who they claim to be?", "May this authenticated user perform this action, and at what access level?"],
          ["Means", "Login plus token — passwords with weak-password checks, one-time passwords, fingerprints, software or hardware certificates; local, server, network or single sign-on", "Rights per role and resource (e.g. log into a server but not modify data; FTP only in one's own space)"],
        ]},
        { type: "p", text: "The two are tightly linked: unauthenticated users have no or restricted rights — a shop visitor can browse but must create an account to buy, and a customer still can't perform administrative functions." },
        { type: "p", text: "Attackers steal passwords or bypass controls by exploiting missing input filtering, old vulnerable libraries, configuration errors such as default passwords, and weak passwords like '123456'. Password rules only help if users are diligent and the rules follow current guidance (e.g. SANS)." },
        { type: "list", intro: "Tests:", items: [
          "Brute force and dictionary attacks — start with '123456', '111111', birthdays, pet names.",
          "SQL injection through unfiltered input to authenticate without credentials.",
          "Unauthorized URIs or URLs ('../../' in FTP, '/admin') to reach sensitive data.",
          "Exploiting unpatched vulnerabilities to gain control and escalate privileges.",
        ]},
      ],
    },
    "5.3": {
      objective: "AS-5.3.2",
      body: [
        { type: "p", text: "Encryption turns plain text into cypher text with an algorithm and secrets so that only authorized people can decrypt it — even if attackers steal the data. Hashing and salting are related methods. It protects data at rest (encrypted passwords in a database, encrypted drives) and in transit (encrypted email, SSL/TLS). Symmetric encryption uses a shared secret key; asymmetric uses a private/public key pair." },
        { type: "table", headers: ["Vulnerability type", "Tests"], rows: [
          ["Design", "Correct modes in symmetric encryption; keys not too short (RSA under 2048 bits considered insecure as of 2015); valid certificates and alerts on self-signed ones (against man-in-the-middle); replay attacks (e.g. on WEP); attacks on protocol strength"],
          ["Construction", "Code reviews (e.g. no default random() for seeds); fuzzing; timing attacks; power analysis of encrypting hardware"],
          ["Configuration", "TLS server- and client-side configuration; server cipher order — can the cipher be downgraded or renegotiated?"],
          ["Aging", "Mechanisms that have become weak and crackable over time"],
        ]},
      ],
    },
    "5.4": {
      objective: "AS-5.4.2",
      body: [
        { type: "p", text: "A firewall restricts access between a protected network and the Internet or other networks, enforcing a policy of authorized and forbidden communication. It can be host-based or network-based and filters on addresses, protocols and ports, protocol options (fragmentation, TTL) and data size; web application firewalls also filter by user connection and data patterns." },
        { type: "table", headers: ["Network zone", "Trust"], rows: [
          ["Internet / public", "Untrusted"],
          ["Demilitarized zones (DMZs)", "Several, with different levels of trust"],
          ["Private / internal networks", "Most trusted"],
        ]},
        { type: "p", text: "Zones are part of the firewall configuration and define the authorized flows; everything else is blocked." },
        { type: "list", intro: "Firewall tests:", items: [
          "Port scanning to check the policy is implemented as intended.",
          "Malformed packets and network fuzzing to provoke unexpected behavior such as DoS.",
          "Fragmentation attacks to slip past filtering.",
          "For WAFs: encode, compress or obfuscate payloads to hide malicious content.",
        ]},
      ],
    },
    "5.5": {
      objective: "AS-5.5.2",
      body: [
        { type: "p", text: "An intrusion detection system monitors activity from network to application level for security policy violations and raises alerts for further action (blocking traffic, virtual patching). A firewall looks outward and stops traffic; an IDS analyzes suspicious activity and alerts when an intrusion is confirmed." },
        { type: "table", headers: ["Model", "Rule", "Weakness"], rows: [
          ["Negative (signature, blacklist)", "Everything not explicitly forbidden is allowed — detects known attacks/patterns", "Easy to evade; new attacks go unnoticed"],
          ["Positive (behavior, whitelist)", "Everything not explicitly allowed is rejected — detects deviation from specified normal behavior", "Many false positives and false negatives; attackers can shift what counts as 'normal'"],
        ]},
        { type: "list", intro: "Tests:", items: [
          "Evasion against signatures: character encoding and modified data (whitespace, line ends), IP fragmentation, TCP segmentation, encryption, obfuscation, URL encoding.",
          "Malicious traffic that tries to get intrusive behavior accepted into the 'normal' specification.",
          "Use references such as the IDS protection profile and WAF evaluation criteria.",
        ]},
      ],
    },
    "5.6": {
      objective: "AS-5.6.2",
      body: [
        { type: "p", text: "Malware reaches servers and users through malicious attachments, fake URLs and client-side code. Anti-malware analyzes, detects and removes it — including phishing and pharming. It relies mainly on signatures of known malicious patterns, so new or unknown malware slips through; heuristics help catch slight variations." },
        { type: "list", intro: "How malware evades detection:", items: [
          "Abusing system library functions (e.g. FindWindow to close the scanner).",
          "String obfuscation and encryption (JavaScript hidden in a PDF, UPX packing).",
          "Dynamic loading of functions and libraries; malicious automatic updates.",
          "Unpacking on the GPU so it can't be analyzed before execution.",
        ]},
        { type: "p", text: "Test effectiveness with the EICAR test file rather than real malware. Before rolling out new or upgraded anti-malware, test it on a representative platform — false positives have quarantined operating system files and shut down entire organizations." },
      ],
    },
    "5.7": {
      objective: "AS-5.7.2",
      body: [
        { type: "p", text: "Obfuscation (data masking) makes data or code unintelligible to humans — protecting against copying to bypass licenses and against reverse engineering. It lets support staff and testers work with anonymized data, and can hide the structure of critical HTML pages from script-injection attackers. Techniques include base64 encoding, XORing, random renaming, method overriding, whitespace removal and shuffling; encryption also works but remains readable to key holders. Attackers obfuscate their own code too." },
        { type: "list", intro: "Testing obfuscation:", items: [
          "Keep tight configuration control of obfuscated data and keys, or data can't be recovered.",
          "Use obfuscated production data in test environments — e.g. health records must not be exposed to testers.",
          "Brute force or dictionary attacks to recover plain data.",
          "Reverse-engineer byte code (Java decompilers, .NET Reflector); brute-force weak schemes (unXOR).",
        ]},
        { type: "note", title: "Limits", text: "Code can't fully protect itself from de-obfuscation, because debugging is always possible." },
      ],
    },
    "5.8": {
      objective: "AS-5.8.2",
      body: [
        { type: "p", text: "People are often the weakest link, so training must be consistent and continuous throughout the lifecycle, updated for new policies and threats, and cover social engineering and insider threats." },
        { type: "list", intro: "Testing training effectiveness:", items: [
          "A fake technical support call trying to get users to reveal passwords.",
          "Looking for sticky notes with passwords, especially under keyboards.",
          "Running password audit tools to find weak passwords (the tester may see the passwords — a risk).",
          "A successful SQL injection shows a developer needs secure coding training — check other developers too; it may call for process improvement.",
          "Attempting unauthorized physical access to read documents left in the open.",
        ]},
      ],
    },
  },
};
