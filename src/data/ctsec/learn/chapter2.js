// CT-SEC (Advanced Security Tester 2016) — Chapter 2 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Why does an organization need security testing, how does it fit, and what should it aim for? This chapter covers the purpose of security testing, its organizational context, aligning and defining security test objectives and their scope, choosing approaches and analyzing why they fail, the stakeholders and their benefits, and how to improve security testing practices.",
  keywords: [
    "cross-site scripting", "data obfuscation", "denial of service", "information assurance", "security policy",
    "security testing", "security vulnerability", "software lifecycle", "test strategy",
  ],
  objectives: [
    { id: "AS-2.2.1", level: "K2", text: "Understand why security testing is needed in an organization, including benefits to the organization such as risk reduction and higher levels of confidence and trust" },
    { id: "AS-2.3.1", level: "K2", text: "Understand how project realities, business constraints, software development lifecycle, and other considerations affect the mission of the security testing team" },
    { id: "AS-2.4.1", level: "K2", text: "Explain why security testing goals and objectives must align with the organization's security policy and other test objectives in the organization" },
    { id: "AS-2.4.2", level: "K3", text: "For a given project scenario, demonstrate the ability to identify security test objectives based on functionality, technology attributes and known vulnerabilities" },
    { id: "AS-2.4.3", level: "K2", text: "Understand the relationship between information assurance and security testing" },
    { id: "AS-2.5.1", level: "K3", text: "For a given project, demonstrate the ability to define the relationship between security test objectives and the need for strength of integrity of sensitive digital and physical assets" },
    { id: "AS-2.6.1", level: "K4", text: "Analyze a given situation and determine which security testing approaches are most likely to succeed" },
    { id: "AS-2.6.2", level: "K4", text: "Analyze a situation in which a given security testing approach failed, identifying the likely causes of failure" },
    { id: "AS-2.6.3", level: "K3", text: "For a given scenario, demonstrate the ability to identify the various stakeholders and illustrate the benefits of security testing for each stakeholder group" },
    { id: "AS-2.7.1", level: "K4", text: "Analyze KPIs (key performance indicators) to identify security testing practices needing improvement and elements not needing improvement" },
  ],
  sections: {
    "2.1": {
      body: [
        { type: "p", text: "Security testing differs from functional testing in two ways: standard techniques for choosing input data can miss security issues, and security defects show very different symptoms. It assesses vulnerability by trying to compromise the system's security policy." },
        { type: "list", intro: "Threats to explore:", items: [
          "Unauthorized copying of applications or data; unauthorized access (doing things beyond one's rights).",
          "Unintended side effects — e.g. a media player that writes unencrypted temporary files pirates can exploit.",
          "Cross-site scripting (XSS) — code inserted into a page and run by later users.",
          "Buffer overflow — over-long input that lets malicious code run.",
          "Denial of service — e.g. overloading a web server with nuisance requests.",
          "Man in the middle — intercepting, altering and relaying communications unnoticed.",
          "Breaking encryption; logic bombs that activate under certain conditions.",
        ]},
        { type: "p", text: "Integrate security testing with all development and testing, considering existing policies, skills and test strategies." },
      ],
    },
    "2.2": {
      objective: "AS-2.2.1",
      body: [
        { type: "p", text: "Security testing can't guarantee safety from attack, but it identifies risks and evaluates whether defenses work, alongside audits and reviews. It also demonstrates due diligence: after a breach and legal action, evidence of reasonable steps such as vulnerability testing can be a legal defense — and it reassures customers that their data is protected." },
      ],
    },
    "2.3": {
      objective: "AS-2.3.1",
      body: [
        { type: "p", text: "Security testing competes for limited test time, is often a specialist role, and is frequently outsourced. Its extent is driven by the organization's security-related business risks." },
        { type: "note", title: "Built in, not tested in", text: "Security is a lifecycle activity: defined in requirements, expressed in design, implemented in code, then verified and validated by testing. Security can't be patched or tested into code — only built in through secure design and coding." },
      ],
    },
    "2.4.1": {
      objective: "AS-2.4.1",
      body: [
        { type: "p", text: "The security testing policy is written after senior management approves the organization's security policy, and its goals must align with it. Otherwise unauthorized security tests are performed, or the tests miss their purpose." },
      ],
    },
    "2.4.2": {
      objective: "AS-2.4.2",
      body: [
        { type: "p", text: "Security test objectives work like functional ones but target security goals: at least one per security feature, also based on the technology (web, mobile, cloud, LAN) and on known application and generic vulnerabilities." },
        { type: "list", intro: "Examples:", items: [
          "Verify password authentication applies the correct strength rule.",
          "Verify all input fields are validated to prevent SQL injection.",
          "Verify customer data files are encrypted at the correct strength.",
        ]},
      ],
    },
    "2.4.3": {
      objective: "AS-2.4.3",
      body: [
        { type: "p", text: "Information assurance (IA) protects and defends information and systems by ensuring availability, integrity, authentication, confidentiality and non-repudiation, including restoration through protection, detection and reaction. Security testing determines that security features are implemented as designed and adequate for their environment. IA is the wider term — security testing is part of IA, as software testing is part of quality assurance." },
      ],
    },
    "2.5": {
      objective: "AS-2.5.1",
      body: [
        { type: "p", text: "The more integrity sensitive assets need, the more coverage the security test objectives need. The objectives define the scope: too small and you won't gain confidence; too large and resources run out before testing finishes. Tie objectives directly to specific assets, protective measures, risks and vulnerability identification." },
      ],
    },
    "2.6.1": {
      objective: "AS-2.6.1",
      body: [
        { type: "p", text: "The organization's security testing strategy sets the overall direction; project-level approaches implement it, combining techniques, tools and skills for the project's objectives." },
        { type: "list", intro: "When defining an approach, consider:", items: [
          "Where the systems come from, previous security testing, existing risk assessments.",
          "The security policy and the security testing policy.",
          "The technical environment — software versions, frameworks, languages, operating systems.",
          "Team skills and tool experience, test and project organization, common security risks.",
          "Constraints (resources, time, environment access) and assumptions (e.g. other testing already done).",
        ]},
        { type: "p", text: "Technologies differ — web apps have different vulnerabilities than mainframes — but some issues are common: buffer overflows occur in client-server, web and mobile apps, and data must be encrypted everywhere, plus protected in transit for web and mobile (lost unencrypted backup tapes have exposed millions of records)." },
      ],
    },
    "2.6.2": {
      objective: "AS-2.6.2",
      body: [
        { type: "p", text: "There are degrees of failure — missing one vulnerability doesn't mean the approach failed, given how many exist. When an approach clearly was inadequate, root cause analysis typically finds:" },
        { type: "list", items: [
          "Lack of executive leadership or of resources (funding, time, people).",
          "Ineffective implementation of the approach, lack of skills or tools.",
          "Lack of organizational or stakeholder understanding and support.",
          "Poor understanding of the security risks or the system's purpose; missing technical information leading to wrong assumptions.",
          "Misalignment with the security policy or the security testing policy and strategy.",
        ]},
      ],
    },
    "2.6.3": {
      objective: "AS-2.6.3",
      body: [
        { type: "p", text: "Management needs a business case that states the risks of security lapses and the benefits of effective security testing. Each stakeholder sees a different benefit:" },
        { type: "table", headers: ["Stakeholder", "Benefit"], rows: [
          ["Executive management", "Business protection"],
          ["Senior management", "Due diligence"],
          ["Business customers", "Protection from fraud"],
          ["Compliance officers", "Compliance with legal obligations (internal policies)"],
          ["Regulatory officers", "External security regulations are followed"],
          ["Privacy officers", "Private data kept secure; due diligence shown"],
        ]},
      ],
    },
    "2.7": {
      objective: "AS-2.7.1",
      body: [
        { type: "p", text: "Improvement starts with an objective evaluation of current practices, short- and long-term, covering process and organization as well as people, tools, systems and techniques. Key metrics: how well tests cover security risks, policies and practices, and security requirements, and how effective past security testing was, based on when and where vulnerabilities were found — before and after release." },
      ],
    },
  },
};
