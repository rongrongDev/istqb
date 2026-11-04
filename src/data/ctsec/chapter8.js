// CT-SEC (Advanced Security Tester 2016) — Chapter 8: Security Testing Tools
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 8,
  title: 'Security Testing Tools',
  time: '55 min',
  color: '#9333EA',
  bg: '#FAF5FF',
  overview: "Know where security tools came from (hacker tools like John the Ripper turned legitimate; Nessus, Metasploit), that tools differ in test data, implementation and interpretation, static vs dynamic tools (security 'dynamic' tools often PROBE THE SYSTEM, acting almost like static tools), the test basis that drives tool needs, open-source issues and ROI factors (incl. GPL/licenses, compliance forcing certified tools), and vendor evaluation attributes.",
  sections: [
    {
      id: '8.1', title: 'Types and Purposes of Security Testing Tools', level: 'K2', type: 'deep',
      deepPoints: [
        "Hacker exploits drove tool development; effective hacker tools became legitimate ones (JOHN THE RIPPER: once cracking Unix passwords, now detecting weak ones). Vendors added breadth and usability — and complex configuration. Open-source frameworks: NESSUS, METASPLOIT.",
        "Massive tool choice (open source ≫ commercial), but tools are intelligent systems with NON-STANDARDIZED tests — different test data, implementations and interpretation of results. Lists: WASC, OWASP, Backtrack/Kali, sectools.org; keep your own updated list.",
        "Tools automate evaluation of defenses and detect KNOWN vulnerability types.",
        "STATIC analysis: very early in the lifecycle, most languages, security reporting. DYNAMIC security tools often PROBE THE SYSTEM rather than the application (e.g. statically scanning a database) — static-like from the application's viewpoint, truly dynamic if the whole system is the test object."
      ],
      examInsights: ["Q41 KEY — Dynamic security analysis tools differ from general dynamic analysis tools: they probe the system rather than just the application under test."]
    },
    {
      id: '8.2.1', title: 'Analyzing and Documenting Security Testing Needs', level: 'K4', type: 'deep',
      deepPoints: [
        "Test basis: security policy, test policy, threat and risk analysis results, requirements/specifications, architecture and design, security (test) strategy, the system itself, known threats/exploits/vulnerabilities, user profiles.",
        "From requirements and design (how data is protected) derive: INTERFACES to test (incl. GUI), PROTOCOLS and standards to verify, web coding guidelines, component CONFIGURATIONS to verify (hardened). Decide whether security testing is a development or maintenance/operations activity → requirements for the tool set."
      ],
      examInsights: ["Q42 KEY (3 pts) — Detect unexpected behavior exploitable by DoS after a firewall change → tests sending malformed network packets or fuzzed data."]
    },
    {
      id: '8.2.2', title: 'Issues with Open Source Tools', level: 'K2', type: 'deep',
      deepPoints: [
        "Many licenses allow free use and modification; REGULATORY compliance may force commercial or CERTIFIED tools only.",
        "Free to obtain, but needs in-house TECHNICAL CAPACITY for support and configuration (or paid help from the developer); manuals are technical and incomplete (YouTube helps).",
        "ROI factors: limited scope; time to learn administering/configuring/using; time in forums; time for updates/upgrades (and policy); FUTURE DIRECTION (may disappear or go commercial); RESPONSIVENESS of the support community.",
        "License count usually small — driven by functional areas (web apps, web services, code analysis), frequency/time of use and number of testers."
      ],
      examInsights: ["Q43 KEY — GNU GPL tool: an important maintenance consideration is your team's technical capability to support and customize it."]
    },
    {
      id: '8.2.3', title: "Evaluating a Tool Vendor's Capabilities", level: 'K2', type: 'skim',
      summary: "A vendor should help the security testing service start and grow. Evaluate: license types (fixed, desk, floating, token); license scalability (per functional area, count); helpdesk/support hours; forum/user community; UPDATE FREQUENCY (vital to stay current with threats); administration and user manuals; support and maintenance contracts."
    }
  ]
};
