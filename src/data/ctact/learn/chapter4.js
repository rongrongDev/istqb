// CT-AcT — Chapter 4 learn content, authored from the ISTQB Acceptance Testing Syllabus v1.0 (2019).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Acceptance covers how well the system works, not only what it does. With software in everyday life and complex systems of systems, non-functional requirements matter more and more. This chapter covers the ISO 25010 quality models, usability and user experience, performance efficiency and security from the acceptance testing point of view.",
  keywords: ["performance efficiency", "security", "usability", "user experience"],
  objectives: [
    { id: "AcT-4.1.1", level: "K2", text: "Give examples of ISO 25010 non-functional sub-characteristics that should be considered in acceptance tests" },
    { id: "AcT-4.1.2", level: "K1", text: "Recall quality in use characteristics according to the ISO 25010 standard" },
    { id: "AcT-4.2.1", level: "K2", text: "Relate different types of usage scenarios to the four pillars of UX requirements analysis" },
    { id: "AcT-4.2.2", level: "K2", text: "Summarize different methods for testing usability within the respective domains of application" },
    { id: "AcT-4.3.1", level: "K2", text: "Explain high-level performance tests according to given efficiency requirements" },
    { id: "AcT-4.3.2", level: "K2", text: "Recognize the impact of different perspectives on performance acceptance criteria" },
    { id: "AcT-4.4.1", level: "K2", text: "Explain why security acceptance criteria and related high-level security tests are required for a project in accordance with a given security requirement" },
  ],
  sections: {
    "4.1.1": {
      objective: "AcT-4.1.1",
      body: [
        { type: "p", text: "Meeting non-functional expectations strongly affects whether users accept a solution. Getting them wrong can mean dissatisfied customers, lost sales, rejection, liability and public embarrassment. ISO 25010 groups product quality into characteristics with sub-characteristics; the seven non-functional ones are:" },
        { type: "table", headers: ["Characteristic", "Sub-characteristics"], rows: [
          ["Performance efficiency", "Time behavior, resource utilization, capacity"],
          ["Compatibility", "Co-existence, interoperability"],
          ["Usability", "Appropriateness recognizability, learnability, operability, user error protection, user interface aesthetics, accessibility"],
          ["Reliability", "Maturity, availability, fault tolerance, recoverability"],
          ["Security", "Confidentiality, integrity, non-repudiation, accountability, authenticity"],
          ["Maintainability", "Modularity, reusability, analyzability, modifiability, testability"],
          ["Portability", "Adaptability, installability, replaceability"],
        ]},
        { type: "p", text: "All should be considered; the acceptance test strategy chooses and prioritizes those that matter in the context. (Functional suitability is the eighth, functional, characteristic of the model.)" },
      ],
    },
    "4.1.2": {
      objective: "AcT-4.1.2",
      body: [
        { type: "p", text: "ISO 25010 also has a quality in use model describing the outcomes of interacting with a system, with five characteristics: effectiveness, efficiency, satisfaction, freedom from risk, and context coverage. They're especially useful in acceptance testing because they reflect the user's real experience." },
      ],
    },
    "4.2.1": {
      objective: "AcT-4.2.1",
      body: [
        { type: "p", text: "Usability is the degree to which specified users can achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use. It is usually assessed against heuristics such as learnability, efficiency, memorability, satisfaction and error prevention. Poor usability leads to frustration, refusal to use the software and, in critical cases, injury or death." },
        { type: "p", text: "User experience (UX) widens usability to aesthetic and emotional factors — an appealing design, confidence, pleasure, comfort — and depends heavily on context: where the user is (desk, car, hiking), weather, health and age, and a stressful or noisy environment." },
        { type: "table", headers: ["UX analysis pillar", "What is analyzed"], rows: [
          ["User analysis", "User categories — physical and intellectual traits, technical skills, business knowledge, socio-economic and cultural background; personas and user profiles"],
          ["Task analysis", "Functionality formalized through use cases and scenarios; user behavior and expectations"],
          ["Context analysis", "External (light, temperature, movement, dust), physical (sitting, moving, hands-free) and psychological conditions (stress, motivation, private vs professional use); devices, platforms, form factors"],
          ["Competition analysis", "Successful solutions of competitors — or other sectors — to retain and attract users"],
        ]},
        { type: "p", text: "Human limitations and biases (cognitive, perceptual, visual impairment, inexperience) mean BAs and testers should check that products are accessible to all users when designing acceptance criteria and tests." },
      ],
    },
    "4.2.2": {
      objective: "AcT-4.2.2",
      body: [
        { type: "table", headers: ["Usability test method", "How it works"], rows: [
          ["Checklist-based evaluation", "Users assess the product against checklists to evaluate, compare and qualify their experience"],
          ["Expert review", "Usability experts evaluate against heuristics or criteria to find strong and weak points"],
          ["Walkthrough / think-aloud", "Users explore the product, often with set tasks, and say aloud what they do and think — revealing difficulties and expectations"],
          ["Biometrics-based evaluation", "Devices such as eye tracking show what attracts attention and what is (not) visible"],
          ["Log file analysis", "Retrospective review of how users actually interacted, compared with the intended use"],
        ]},
        { type: "seealso", label: "CT-UT Learn", href: "/ctut-learn", text: "usability testing in depth (ISTQB Usability Testing syllabus)" },
      ],
    },
    "4.3.1": {
      objective: "AcT-4.3.1",
      body: [
        { type: "p", text: "Performance is part of a good experience on fixed and mobile platforms and is tested at all levels. In acceptance testing it is mostly handled in operational acceptance testing (OAT) by operations teams, but BAs and testers help write acceptance criteria — which must be objective and measurable, not subjective impressions." },
        { type: "p", text: "A typical test uses tools to simulate concurrent users or transactions with a workload as close as possible to real conditions, measures the response times of key elements (web server, application server, database) and resource use (memory, I/O, CPU, security devices), and compares them with the requirements. Architecture is then tuned (e.g. more server capacity) and the test–analyze–improve cycle repeats until targets are met." },
        { type: "p", text: "Test types include load, stress and endurance/stability testing; workloads can be steady state, increasing, scenario-based or artificial." },
        { type: "seealso", label: "CT-PT Learn", href: "/ctpt-learn", text: "performance testing in depth" },
      ],
    },
    "4.3.2": {
      objective: "AcT-4.3.2",
      body: [
        { type: "table", headers: ["Perspective", "What shapes the criteria"], rows: [
          ["User", "Perceived response time — e.g. users leave a website after about 10 seconds; no feedback while a request is processed feels broken"],
          ["Business", "Number of concurrent users, scenario and transaction types, expected response times; location, time of day and time zone"],
          ["Technical", "Available resources (bandwidth, CPU, RAM) and architecture (load balancing, caching) — e.g. limited bandwidth hurts under heavy, traffic-intensive load"],
        ]},
        { type: "p", text: "Performance acceptance criteria and tests must address all three perspectives." },
      ],
    },
    "4.4": {
      objective: "AcT-4.4.1",
      body: [
        { type: "p", text: "Security requirements should come from the organization's security policy (see ISO/IEC 27005), which BAs and testers use for guidance and as the basis for managing security risks on their projects." },
        { type: "list", intro: "Security throughout business analysis and acceptance testing:", items: [
          "Make information security part of risk management and non-functional requirements: assess the value of the information, then evaluate and prioritize security risks.",
          "Define measurable acceptance criteria — e.g. authentication, authorization and accounting, input sanitization, cryptography, data privacy constraints (\"normal users shall have restricted access to private data\").",
          "Define high-level security test cases from the requirements and criteria: test context, main steps, expected results.",
          "Run simpler security acceptance tests yourself; leave technically complex ones to specialized security testers.",
        ]},
        { type: "seealso", label: "CT-SEC Learn", href: "/ctsec-learn", text: "security testing in depth" },
      ],
    },
  },
};
