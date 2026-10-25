// CT-QDO v1.0 — Chapter 1 learn content, authored from ISTQB CT-QDO Syllabus v1.0 (2026-04-17).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Block types: p (paragraph), list ({intro?, items}), table ({headers, rows}),
// example ({title, text}), note ({title?, text}).

export default {
  intro:
    "This chapter builds the DevOps vocabulary the whole exam relies on. It defines DevOps as a culture, explains the wall of confusion between development and operations, and introduces the measurement frameworks — DORA metrics, CALMS, and the three ways of DevOps — through a QA lens. It closes with how DevOps is implemented in organizations: team roles, site reliability engineering, and team topologies with their anti-patterns.",
  keywords: [
    "quality assurance", "testing",
    "CALMS", "change fail percentage", "change lead time", "cross-functional DevOps team",
    "deployment frequency", "DevOps", "failed deployment recovery time", "feedback loop",
    "flow", "service level agreement", "service level indicator", "service level objective",
    "site reliability engineering", "value stream", "wall of confusion",
  ],
  objectives: [
    { id: "QDO-1.1.1", level: "K1", text: "Recall key concepts of DevOps" },
    { id: "QDO-1.1.2", level: "K1", text: "Recall the wall of confusion concepts in DevOps" },
    { id: "QDO-1.1.3", level: "K2", text: "Explain DORA metrics of delivery performance and operational performance" },
    { id: "QDO-1.1.4", level: "K2", text: "Differentiate the elements of CALMS in terms of quality assurance" },
    { id: "QDO-1.1.5", level: "K2", text: "Explain how quality assurance supports the three ways of DevOps" },
    { id: "QDO-1.1.6", level: "K2", text: "Explain the benefits, risks, and pitfalls of DevOps" },
    { id: "QDO-1.2.1", level: "K2", text: "Distinguish the DevOps team roles" },
    { id: "QDO-1.2.2", level: "K2", text: "Explain the concept of site reliability engineering (SRE) related to DevOps" },
    { id: "QDO-1.2.3", level: "K2", text: "Distinguish the different DevOps team patterns and anti-patterns" },
  ],
  sections: {
    "1.1.1": {
      objective: "QDO-1.1.1",
      body: [
        { type: "p", text: "DevOps stands for “Development and Operations”: people working together to build, deliver, and run software. It emerged around 2008–2009, when Patrick Debois and like-minded practitioners started applying Agile ideas to the delivery of software and infrastructure. Beyond writing code, a DevOps software development process considers analysis, continuous integration (CI), functional and non-functional testing (especially security), deployment, delivery, release, infrastructure management, maintenance, and production monitoring. Success is measured by delivery outcomes and by users getting the right-quality software." },
        { type: "note", title: "What DevOps is — and is not", text: "DevOps is a CULTURE promoting collaboration, communication, and continuous improvement. It is NOT a framework, standard, role, function, separate team, tool, or goal. Exam distractors love turning DevOps into a team or a toolset." },
        { type: "list", intro: "DevOps practices rest on six DASA principles:", items: [
          "Customer-centric action — short feedback loops with real customers.",
          "Create with the end in mind — explicit focus on working products delivered to customers.",
          "End-to-end responsibility — DevOps teams design, build, test, AND run software.",
          "Cross-functional autonomous teams — a variety of skills, including testing, so the team is autonomous.",
          "Continuous improvement — improve the product, process, and people's skills every day, adapting to feedback from experimentation.",
          "Automate everything you can — strive for an automated CI/CD pipeline delivering with short cycle times.",
        ]},
        { type: "p", text: "DevOps strongly advocates automation and monitoring at all phases of software delivery, usually in the form of CI/CD pipelines. It promotes autonomy, leadership, collaboration, and innovation while driving business success through shorter delivery cycles, increased deployment frequency, and reliable high-quality releases. DevOps is often drawn as an infinity loop whose steps group into continuous discovery, CI, CD, continuous deployment, and release on demand (covered in chapter 2)." },
      ],
    },
    "1.1.2": {
      objective: "QDO-1.1.2",
      body: [
        { type: "p", text: "The wall of confusion is a metaphor for the separation between development and operations teams in sequential development models. Traditionally, QA and testing sit on the development side of the wall. The development team wants to change the software continuously to ship new features; operations prefers stability and as few production changes as possible. The result is silos with conflicting goals, lack of communication, manual processes, and inconsistent environments — different mindsets (motivation and goals), processes, and tools. The more siloed the teams, the stronger the differences." },
        { type: "p", text: "In DevOps, the wall of confusion is broken down by integrating the teams to work together, improving communication, and increasing collaboration. Leadership is needed to improve or remove inefficient processes and practices — for example, preventing a blame culture by emphasizing shared responsibility." },
        { type: "note", title: "Testing breaks the wall", text: "QA and testing should be performed throughout the process, across both Dev and Ops — that makes testing a key factor in breaking down the wall. Adopting DevOps can also break down walls with other siloed teams: security, business analysis, or usability." },
      ],
    },
    "1.1.3": {
      objective: "QDO-1.1.3",
      body: [
        { type: "p", text: "The DevOps Research & Assessment (DORA) program publishes the annual State of DevOps Report. Its research identifies four delivery-performance metrics that measure the software delivery process effectively. Two relate to throughput (the velocity of making changes) and two to stability (the quality of delivered changes and the team's ability to fix failures)." },
        { type: "table", headers: ["Metric", "Group", "Meaning", "High performers"], rows: [
          ["Change lead time", "Throughput", "Duration from code commit to successful production deployment — efficiency of the delivery process", "Short"],
          ["Deployment frequency", "Throughput", "How often software changes are deployed to production — agility/responsiveness", "High"],
          ["Change fail percentage", "Stability", "% of deployments causing production failures needing hotfix or rollback — reliability", "Small"],
          ["Failed deployment recovery time", "Stability", "Time to recover from a failed deployment — resilience and responsiveness", "Short"],
        ]},
        { type: "p", text: "High performing DevOps teams tend to score well on all four metrics. Getting there requires good quality engineering practices: test automation, CI/CD automation, collaboration, test-first approaches, a whole-team approach, well-selected deployment strategies, and continuous monitoring. The faster the value stream, the better." },
        { type: "p", text: "DORA added reliability as an indicator of operational performance: availability, latency, performance efficiency, and scalability. Teams achieve better delivery outcomes (including less personnel burnout) by focusing on reliability. Remember the distinction: the four delivery metrics relate to the PROCESS, while reliability relates to the software IN USE. QA and testing contribute directly to reliability through test-first approaches, non-functional testing, chaos engineering, and quality hunting." },
        { type: "note", title: "Memory aid", text: "Lead time + frequency = throughput (how fast changes move). Fail percentage + recovery time = stability (how good and fixable the changes are). The sample exam asks you to group them exactly this way." },
      ],
    },
    "1.1.4": {
      objective: "QDO-1.1.4",
      body: [
        { type: "p", text: "CALMS stands for Culture, Automation, Lean, Measurement, and Sharing. It is a framework for assessing an organization's ability to adopt DevOps processes and for measuring success during a DevOps transformation." },
        { type: "list", items: [
          "CULTURE — changing processes and technology alone is not enough; a collaborative, problem-solving culture is essential. DevOps culture extends Agile: teams have the autonomy to deliver value while collaborating with other teams. That autonomy includes testing and a whole-team approach to ownership of quality — testing is not outside the DevOps team.",
          "AUTOMATION — automate as much as possible in the CI/CD pipeline: build, deployment, provisioning, process automation, static analysis, and test automation — 'everything as code'. This lets the team push small changes continuously while maintaining quality and speeding up the feedback loop.",
          "LEAN — streamline processes and remove waste (unnecessary process steps) so the process is as efficient as possible. Continuous improvement is part of lean and applies to test activities too: testing must not become a bottleneck for the flow of work, so rethink when and how testing is done.",
          "MEASUREMENT — data for decisions on how the software is used and how the SDLC works, using actionable metrics on quality and efficiency to improve the product and the SDLC continuously.",
          "SHARING — an open culture of discussing challenges and successes, and sharing good practices and ideas for learning and continuous improvement. QA and testing create information worth sharing, such as automated-testing feedback on functionality and testability.",
        ]},
        { type: "p", text: "Each CALMS element strengthens the role of QA and testing in building quality into every SDLC phase, enabling faster delivery of high-quality software with lower risk. Variants exist — SAFe uses CALMR, where R stands for recovery." },
        { type: "example", title: "Classifying practices (exam pattern)", text: "A cross-functional team delivering a fully tested feature = Culture (autonomy + quality ownership). Pipeline stages for all test types = Automation. Shifting testing left to avoid late regression delays = Lean (removing a bottleneck). Consolidating test reports into product-quality insights = Measurement." },
      ],
    },
    "1.1.5": {
      objective: "QDO-1.1.5",
      body: [
        { type: "p", text: "The three ways of DevOps (from “The Phoenix Project”) are the principles that help organizations transform software delivery while keeping quality high — and they show exactly where QA fits." },
        { type: "list", items: [
          "The first way: FLOW — smooth movement of work from development to operations. Minimize handover moments, reduce batch sizes, and remove bottlenecks for a streamlined, predictable process.",
          "The second way: FEEDBACK LOOP — fast, continuous feedback loops enabling early detection and resolution of issues before they escalate, plus a culture where everyone learns from mistakes.",
          "The third way: CONTINUOUS LEARNING AND EXPERIMENTATION — a culture of improvement and experimentation: innovation, calculated risk-taking, and learning from both successes and failures.",
        ]},
        { type: "table", headers: ["Way", "How QA contributes"], rows: [
          ["Flow", "Test-first approaches enable smooth code progression; automated testing supports predictable value delivery"],
          ["Feedback", "Continuous test automation, standardized pre-production environments, static analysis for early code feedback, and monitoring for real-world usage data"],
          ["Continuous learning", "Targeted testing of new features, organized quality events such as quality hunting, and comprehensive regression testing"],
        ]},
        { type: "note", title: "Exam pattern", text: "The sample exam accepts two different valid mappings (test-first→flow / automation→feedback / quality hunting→learning, AND automation→flow / static analysis→feedback / regression→learning). Reject any answer describing a separate test phase, manual-only testing, or minimizing tests." },
      ],
    },
    "1.1.6": {
      objective: "QDO-1.1.6",
      body: [
        { type: "list", intro: "DevOps can return significant benefits:", items: [
          "Empowering teams to assess quality at every phase of development, deployment, and production",
          "Capturing feedback early and often to improve both the software and the SDLC",
          "Delivering on time with lower costs thanks to higher quality and more efficient processes",
          "Responding to changing needs faster, and recovering from production failures faster",
          "Improving time to market through efficient processes and communication",
          "Scaling software faster with growing user numbers thanks to infrastructure as code (IaC)",
          "Improving collaboration throughout the SDLC and reducing employee stress via frequent small releases",
          "Reducing vendor and third-party issues through collaboration and transparency",
          "Improving test automation return on investment",
        ]},
        { type: "list", intro: "Typical risks and pitfalls to anticipate:", items: [
          "Lacking management support",
          "Removing or replacing Ops instead of transforming it",
          "Replacing Agile software development instead of extending it",
          "Believing there is just one way to do DevOps",
          "Using DevOps as a job title only",
          "Creating a DevOps team but ignoring the need for change in other teams and the organization",
          "Reducing headcount by increasing automation instead of making people more efficient",
          "Introducing CI/CD pipeline tools only and forgetting the DevOps cultural change",
          "Implementing a CI/CD pipeline with little or no test automation",
          "Using only automated testing where manual testing would be beneficial",
        ]},
        { type: "note", title: "Two classic false statements", text: "DevOps does NOT create silos of self-organized teams — it enhances collaboration throughout the SDLC. And the goal of DevOps is NOT a flow that transfers the product from the Dev team to the Ops team — it unifies Dev and Ops rather than formalizing a handover." },
      ],
    },
    "1.2.1": {
      objective: "QDO-1.2.1",
      body: [
        { type: "p", text: "A role is a set of responsibilities and tasks — not necessarily a job title. The core roles in a cross-functional DevOps team are business analyst, developer, tester, and operations engineer, often supported by a product owner and a scrum master. All team members together are responsible for quality engineering." },
        { type: "p", text: "Members of a cross-functional team can select any task that matches their knowledge and skills: a person can hold various roles over time, perform multiple roles in parallel, and pair with a colleague on a task. Crucially, the team has all the knowledge and skills needed for its common tasks, and no knowledge or skill should live with just one member — that way the team keeps functioning when someone is temporarily unavailable." },
        { type: "p", text: "Some specialized tasks may exceed the team's skills (e.g., setting up and maintaining the platform). Organizations may create platform teams providing self-service tools and reliable infrastructure that abstract complex operational tasks — reducing the operational burden on DevOps teams and enabling quicker, safer, more reliable deployments." },
        { type: "p", text: "Work-product quality is maintained through collaboration, continuous learning, and improvement: every work product is handled by at least two team members, guaranteed by the review process (e.g., pull requests). If a work product is not accepted, the reviewer gives feedback so the author can improve it. Any member may be an author, contributor, or reviewer." },
      ],
    },
    "1.2.2": {
      objective: "QDO-1.2.2",
      body: [
        { type: "p", text: "Site reliability engineering (SRE) is a set of practices applying software engineering to IT operations and infrastructure, originating at Google. SRE focuses on keeping a system continuously compliant with functional and non-functional requirements. Its primary goal is maintaining service reliability by balancing release velocity with stability — typically through automation, monitoring, and proactive capacity planning. By creating automated feedback loops and using the feedback for improvements, SRE keeps systems within defined service levels, minimizes outages, and bridges the Dev–Ops gap in production." },
        { type: "table", headers: ["Concept", "Definition", "Role"], rows: [
          ["SLA — service level agreement", "A binding agreement with a customer that a service level objective will be met over a period", "Prioritizes Dev and Ops efforts; supports designing relevant test cases"],
          ["SLO — service level objective", "A reliability target: what the system must comply with, including target value or range", "Needed to meet the SLAs"],
          ["SLI — service level indicator", "A well-defined quantitative measure of the service level provided", "One or more SLIs determine whether the SLOs are met"],
        ]},
        { type: "p", text: "SLIs are measured during development through testing, and during operations by monitoring (observability and telemetry). Automated regression test execution is important for measuring SLIs at various CI/CD pipeline stages." },
        { type: "list", intro: "SRE follows three phases for systems and services:", items: [
          "Planning and designing the required infrastructure — covering reliability, scalability, and security.",
          "Implementing and deploying the infrastructure — setup, deployment, and verifying the system works to the agreed service level.",
          "Ongoing operation, maintenance, and optimization — keeping it reliable and efficient over time.",
        ]},
      ],
    },
    "1.2.3": {
      objective: "QDO-1.2.3",
      body: [
        { type: "list", intro: "The organization's team structure depends on:", items: [
          "The complexity of the software — higher complexity encourages silos",
          "Technical leadership and its ability to create a shared goal for Dev and Ops",
          "The readiness of the IT operations department to change to a DevOps model",
          "The skills needed to lead the transformation",
        ]},
        { type: "list", intro: "Three team topologies (patterns — independent, no preference order):", items: [
          "Dev and Ops collaboration — smooth cooperation between Dev and Ops teams; each learns the basics of the other's work. Requires a clearly defined shared goal and significant cultural change.",
          "Fully shared ops responsibilities — operations people fully integrated into Dev teams (popularized by Facebook and Netflix in the early 2010s). Everyone focuses on the same purpose: the teams that build a feature also run it.",
          "SRE team — the Google model: an SRE team collaborates with Dev teams. Dev teams must provide test evidence that their work products meet the SRE team's standards, without being directly involved in operations. This pattern can easily slip into anti-patterns and silos.",
        ]},
        { type: "list", intro: "Three anti-patterns:", items: [
          "Dev and Ops silos — an 'over the wall' mentality; 'done' means feature complete, not released into production.",
          "Dev does not need Ops — new Dev teams using cloud services believe they don't need operations at all.",
          "DevOps as a tools team — a separate DevOps team implements the tooling. It may improve the Dev department's tooling but lacks integration into everyday development practices, where the real DevOps benefits live.",
        ]},
        { type: "example", title: "Spotting anti-patterns in a scenario", text: "Developers define 'done' as code complete and leave deployment and maintenance entirely to Ops → Dev and Ops silos. Another department builds CI/CD pipelines with no coordination with Dev or Ops → DevOps as a tools team. Fully shared ops responsibilities and SRE teams are valid patterns, not anti-patterns." },
      ],
    },
  },
};
