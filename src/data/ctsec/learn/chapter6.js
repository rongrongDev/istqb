// CT-SEC (Advanced Security Tester 2016) — Chapter 6 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "People are both the biggest threat and the weakest defense. This chapter looks at how attackers gather information and think, why they attack, how incidents are investigated with computer forensics, how social engineering exploits human trust, and how to build lasting security awareness.",
  keywords: ["attacker", "botnet", "computer forensics", "hacker", "reconnaissance", "script kiddies"],
  objectives: [
    { id: "AS-6.1.1", level: "K2", text: "Explain how human behavior can lead to security risks and how it impacts the effectiveness of security testing" },
    { id: "AS-6.1.2", level: "K3", text: "For a given scenario, demonstrate the ability to identify ways in which an attacker could discover key information about a target and apply measures to protect the environment" },
    { id: "AS-6.1.3", level: "K2", text: "Explain the common motivations and sources for performing computer system attacks" },
    { id: "AS-6.1.4", level: "K4", text: "Analyze an attack scenario (attack performed and discovered) and identify possible sources and motivation for the attack" },
    { id: "AS-6.2.1", level: "K2", text: "Explain how security defenses can be compromised by social engineering" },
    { id: "AS-6.3.1", level: "K2", text: "Understand the importance of security awareness throughout the organization" },
    { id: "AS-6.3.2", level: "K3", text: "Given certain test outcomes, apply appropriate actions to increase security awareness" },
  ],
  sections: {
    "6.1.1": {
      objective: "AS-6.1.1",
      body: [
        { type: "p", text: "Every attack starts with reconnaissance — gathering information about the target. Whatever an organization publishes, knowingly or not, and whatever employees post on social networks will be found and used: it's a question of when, not if." },
        { type: "p", text: "Attackers follow no policy; they adapt to what they find and keep updating their knowledge. A security policy reflects the facts known when it was written, but public information keeps changing, so security tests that were adequate can lose coverage." },
      ],
    },
    "6.1.2": {
      objective: "AS-6.1.2",
      body: [
        { type: "table", headers: ["Reconnaissance", "Sources and tools"], rows: [
          ["Passive (no contact with the target)", "Google (incl. the Google Hacking Database, Earth, Street View), Shodan, Facebook, LinkedIn, Whois, RIPE, DNS searches — revealing IP addresses, pages, phone numbers, names and email formats, operating systems and applications"],
          ["Active (touching the system)", "Pinging (fping, hping), TCP/UDP scans (Nmap, Zenmap), OS detection (Nmap, Xprobe2), service fingerprinting"],
        ]},
        { type: "p", text: "Because hacking is illegal — and to stay longer, return later or recruit the system into a botnet — attackers destroy evidence with tools such as NetCat, tunneling, altered log files, hide tools, rootkits and file streaming. Most of these tools are freely available (e.g. in Kali Linux)." },
      ],
    },
    "6.1.3": {
      objective: "AS-6.1.3",
      body: [
        { type: "p", text: "Many attacks come from inside: authorized users acting as insider threats, mostly out of revenge but increasingly for economic espionage or theft. External hackers account for the minority, driven by curiosity, prestige, notoriety, challenge, boredom or revenge (the most dangerous)." },
        { type: "p", text: "Attackers range from script kiddies running other people's attacks to professional, governmental and hacktivist groups (attacking on political, economic or other grounds); motivations from fun to bringing an organization down; abilities from a home PC to labs and proxy networks. Knowing who is likely to attack guides both protection and the security test strategy." },
      ],
    },
    "6.1.4": {
      objective: "AS-6.1.4",
      body: [
        { type: "p", text: "A security incident is an event in which the system's security policy is disobeyed or breached. Computer forensics looks for the digital evidence in three phases: acquire and authenticate, analyze, report." },
        { type: "list", intro: "Typical symptoms that trigger an investigation:", items: [
          "IDS or monitoring alerts; suspicious log entries; unsuccessful login attempts.",
          "Unexplained user accounts; modified files or folders.",
          "Unusual services running or unusual system behavior.",
        ]},
        { type: "list", intro: "Process:", items: [
          "Snapshot or copy the system to collect the evidence.",
          "Authenticate the evidence as a genuine, complete copy and store a copy safely.",
          "Analyze the evidence.",
          "Eradicate the cause, then recover the system to normal — patching vulnerabilities along the way; report the process and tools used.",
        ]},
        { type: "p", text: "Analysis uses log copies, process status and active connections (gather information on an active attacker before locking them out). Any Internet attack can in principle be traced to an IP address — but proxies, Tor and local laws raise the cost. Tools include Netstat, Tracert/traceroute and IP tracer sites; for webmail, look for the X-Originating-IP header and use Whois to contact the ISP. Open relays and botnets make tracing very hard or nearly impossible." },
      ],
    },
    "6.2": {
      objective: "AS-6.2.1",
      body: [
        { type: "p", text: "Technical defenses mean little if people with access are careless — physical office security is pointless if an IT manager's home workspace is easy to compromise. Social engineering exploits our willingness to trust and help, manipulating people into giving up access, credentials or sensitive information." },
        { type: "table", headers: ["Channel", "Techniques"], rows: [
          ["In person", "Tailgating or piggybacking into restricted areas; eavesdropping; shoulder surfing; phone calls posing as a manager or technical support"],
          ["Computer-based", "Malware-infected email; chat and instant messaging (anonymous and sniffable); fake pop-ups asking to re-enter credentials; spam with malicious links; phishing sites — broad or targeted (spear phishing)"],
        ]},
        { type: "note", title: "Defense", text: "No single defense exists. Limit damage with least privilege, separation and rotation of duties — but the main defense is education and awareness at every level." },
      ],
    },
    "6.3": {
      objective: "AS-6.3.2",
      body: [
        { type: "p", text: "The threat model never stops changing — new networks, applications, interfaces and vulnerabilities — and risks that never materialized are easily forgotten and their safeguards withdrawn. Regular awareness training, tailored to developers, operations, management and general staff, keeps everyone alert." },
        { type: "list", intro: "Use real case studies from testing or incidents, answering:", items: [
          "How did they (we) do it?",
          "What were the business consequences?",
          "What did it cost to investigate and process the incident, and to repair the problem?",
          "How could it have been avoided?",
          "Which changes will be implemented?",
        ]},
      ],
    },
  },
};
