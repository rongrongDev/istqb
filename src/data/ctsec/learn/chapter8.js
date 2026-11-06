// CT-SEC (Advanced Security Tester 2016) — Chapter 8 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Security testing relies heavily on tools — many born in the hacker community. This chapter covers the types and purposes of security testing tools, how to work out what you need from them, the particular issues of open-source tools, and what to look for in a tool vendor.",
  keywords: [],
  objectives: [
    { id: "AS-8.1.1", level: "K2", text: "Explain the role of static and dynamic analysis tools in security testing" },
    { id: "AS-8.2.1", level: "K4", text: "Analyze and document security testing needs to be addressed by one or more tools" },
    { id: "AS-8.2.2", level: "K2", text: "Understand the issues with open source tools" },
    { id: "AS-8.2.3", level: "K2", text: "Understand the need to evaluate the vendor's capabilities to update tools on a frequent basis to stay current with security threats" },
  ],
  sections: {
    "8.1": {
      objective: "AS-8.1.1",
      body: [
        { type: "p", text: "Hacker exploits drove the creation of security tools, and effective hacker tools often became legitimate ones — John the Ripper once cracked Unix passwords for attackers and is now used to find weak ones. Vendors broadened functionality and usability, at the cost of more complex configuration; open-source frameworks like Nessus and Metasploit added easier GUIs." },
        { type: "p", text: "Today there are tools for almost every task — far more open source than commercial — but they run non-standardized tests with different data, implementations and interpretations of results, which makes selection hard. Lists exist (WASC, OWASP, Kali/Backtrack, sectools.org), but advanced security testers should keep their own up to date." },
        { type: "p", text: "Tools automate the evaluation of defenses and detect known vulnerability types. Static analysis can run very early and covers most languages. Dynamic security tools often probe the system rather than the application — for example statically scanning a database — so from the application's point of view they act almost like static tools; if the whole system is the test object, they are truly dynamic." },
      ],
    },
    "8.2.1": {
      objective: "AS-8.2.1",
      body: [
        { type: "list", intro: "The test basis for security tool needs:", items: [
          "Security policy and test policy; security (test) strategy.",
          "Threat and risk analysis results.",
          "Requirements, specifications, architecture and design.",
          "The system under test itself; known threats, exploits and vulnerabilities; user profiles.",
        ]},
        { type: "list", intro: "From how requirements and design protect data, derive:", items: [
          "The interfaces to test, including the GUI.",
          "The protocols and standards to verify.",
          "The web coding guidelines that promote secure coding.",
          "The component configurations to verify (hardening).",
        ]},
        { type: "p", text: "Also decide whether security testing is a development or a maintenance/operations activity. Together this yields the requirements for the tool set." },
      ],
    },
    "8.2.2": {
      objective: "AS-8.2.2",
      body: [
        { type: "p", text: "Many security tools are open source under licenses that allow free use and modification — but regulatory compliance may force an organization to use only commercial or certified tools. Open-source tools are often free to obtain, yet need in-house technical capacity for support and configuration (or paid help from the developers); manuals tend to be technical and incomplete." },
        { type: "list", intro: "ROI considerations for an open-source tool:", items: [
          "Its limited scope.",
          "Time to learn to administer, configure and use it, and time spent in forums and user groups.",
          "Time for updates and upgrades, and the internal upgrade policy.",
          "Its future direction — it may disappear or go commercial.",
          "How responsive the support community is.",
        ]},
        { type: "p", text: "Most organizations need only one or a few licenses, depending on functional areas (web applications, web services, code analysis…), frequency of use and number of security testers." },
      ],
    },
    "8.2.3": {
      objective: "AS-8.2.3",
      body: [
        { type: "list", intro: "Evaluate a vendor on:", items: [
          "License types (fixed, desk, floating, token) and scalability (per functional area, number of licenses).",
          "Helpdesk and support hours; forum and user community.",
          "Update frequency — essential to keep pace with new threats.",
          "Administration and user manuals; support and maintenance contracts.",
        ]},
      ],
    },
  },
};
