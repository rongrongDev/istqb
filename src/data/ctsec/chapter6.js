// CT-SEC (Advanced Security Tester 2016) — Chapter 6: Human Factors in Security Testing
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 6,
  title: 'Human Factors in Security Testing',
  time: '105 min',
  color: '#DC2626',
  bg: '#FEF2F2',
  overview: "Humans are the largest threat and the weakest defense. Know RECONNAISSANCE (passive: search engines, Shodan, social networks, Whois, DNS; active: ping, port scans, OS detection, service fingerprinting), how attackers hide evidence, motivations (insiders: revenge, espionage/theft — external hackers are the MINORITY; script kiddies → professionals/hacktivists), computer FORENSICS (acquire & authenticate → analyze → report; tracing IPs, X-Originating-IP, botnets), social engineering (tailgating, eavesdropping, shoulder surfing, phone, phishing/spear phishing, pop-ups) and security AWARENESS with real case studies.",
  sections: [
    {
      id: '6.1.1', title: 'The Impact of Human Behavior on Security Risks', level: 'K2', type: 'deep',
      deepPoints: [
        "The key attack phase is RECONNAISSANCE (information gathering). Everything published about an organization and its systems — including employees' SOCIAL NETWORK posts — will be found and used: not if, but WHEN.",
        "Attackers follow no policy; they adapt their strategy to the information found. Policies are based on known facts, but public information keeps changing → security tests valid when written may lose coverage."
      ],
      examInsights: ["Q32 KEY — The weakest link in software security is often the behavior of humans."]
    },
    {
      id: '6.1.2', title: 'Understanding the Attacker Mentality', level: 'K3', type: 'deep',
      deepPoints: [
        "PASSIVE reconnaissance/footprinting (no contact with the target): Google (Google Hacking Database, Earth, Street View), SHODAN (e.g. who runs a vulnerable Apache), Facebook, LinkedIn, Whois, RIPE, DNS searches — IPs, pages, phone numbers, names and email structures, OS and applications.",
        "ACTIVE reconnaissance (touching the system): pinging (fping, hping), TCP/UDP scans (Nmap, Zenmap), OS detection (Nmap, Xprobe2), SERVICE FINGERPRINTING.",
        "Hacking is illegal → attackers DESTROY EVIDENCE (also to stay longer, reuse the system, use it in BOTNETS): NetCat, IP tracer sites, tunneling, altering logs, hide tools, ROOTKITS, file streaming — mostly freely available (Kali Linux, OWASP)."
      ],
      examInsights: ["Q33 KEY — Publishing an organization chart (names, roles) on the company website is a potential security risk (reconnaissance, social engineering)."]
    },
    {
      id: '6.1.3', title: 'Common Motivations and Sources of Attacks', level: 'K2', type: 'deep',
      deepPoints: [
        "MANY attacks come from INSIDE: authorized users (insider threats) — mostly REVENGE, increasingly economic ESPIONAGE or theft. External hackers are the MINORITY.",
        "External motivations: curiosity, prestige, notoriety/fame, challenge, boredom, revenge (most dangerous — highest motivation).",
        "Attacker spectrum: SCRIPT KIDDIES (run others' attacks) → professionals (governmental, HACKTIVISM — political, economic, demographic grounds); motivation from fun to taking an organization down (political, ideological, economic, warfare, commercial, terrorism); abilities from a home PC to labs and proxy networks. Knowing likely attackers guides protection and the test strategy."
      ],
      examInsights: ["Q35 KEY — Insider attacks are especially worrisome: the attacker is already inside the firewall as an authorized user."]
    },
    {
      id: '6.1.4', title: 'Attack Scenarios, Motivations and Forensics', level: 'K4', type: 'deep',
      deepPoints: [
        "SECURITY INCIDENT = a security-relevant event in which the security policy is disobeyed or breached (RFC 2828). COMPUTER FORENSICS finds digital evidence: (1) ACQUIRE AND AUTHENTICATE, (2) ANALYZE, (3) REPORT.",
        "Symptoms: IDS/monitoring alerts, suspicious log entries, unexplained accounts, modified files, unusual services or behavior, unsuccessful logins.",
        "Process: snapshot/copy the system → authenticate the evidence (genuine, complete) and store a copy safely → analyze → ERADICATE the cause → RECOVER to normal; patch vulnerabilities; report the process and tools.",
        "Analysis: copy logs, capture process status, active connections (gather attacker info before locking them out). Every Internet attack is traceable to an IP — cost/time/effort vs proxies, Tor, local laws. Tools: Netstat, Tracert/traceroute, IP Tracer; email headers (X-ORIGINATING-IP for webmail), Whois → ISP; open relays make it hard. BOTNETS are nearly impossible to trace (no online link to the bot server; owners may not know)."
      ],
      examInsights: [
        "Q34 KEY (2 pts) — If a hacker didn't reveal how he got in, he can still get back in — you should be concerned.",
        "Q36 KEY (3 pts) — Suspected virus-borne intrusion: check the suspicious email and trace the sender's IP address (e.g. X-Originating-IP, Whois)."
      ]
    },
    {
      id: '6.2', title: 'Social Engineering', level: 'K2', type: 'deep',
      deepPoints: [
        "All technical defenses fail if people with access are careless (e.g. an IT manager's home office). SOCIAL ENGINEERING exploits human trust and helpfulness — manipulating, influencing, persuading to get access, authorization details or sensitive data.",
        "In person: TAILGATING/piggybacking, EAVESDROPPING, SHOULDER SURFING, TELEPHONE pretexting (fake manager or support).",
        "Computer-based: malware-infected emails, chat/instant messaging (anonymous, sniffable), fake POP-UP login prompts, SPAM with malicious links, PHISHING sites (broad) and SPEAR PHISHING (individualized).",
        "No single defense; limit damage with least privilege, separation of duties, rotation of duties — the main defense is EDUCATION AND AWARENESS at all levels."
      ]
    },
    {
      id: '6.3', title: 'Security Awareness', level: 'K3', type: 'deep',
      deepPoints: [
        "Threat models keep changing (networks, applications, interfaces, vulnerabilities); risks that never materialized are forgotten and safeguards withdrawn → REGULAR awareness training for developers, operations, management and general staff.",
        "Keep a 'security aware' mindset with REAL CASE STUDIES from testing or incidents: how did they (we) do it? business consequences? cost to investigate? cost to repair? how could it have been avoided? which changes will be implemented?"
      ],
      examInsights: ["Q37 KEY (2 pts) — A tester changed prices on the e-commerce site: first check whether production has the same vulnerability (then report and raise awareness)."]
    }
  ]
};
