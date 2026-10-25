// CTFL v4.0 — Chapter 1 learn content, authored from ISTQB CTFL Syllabus v4.0.1 (2024-09-15).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Block types: p (paragraph), list ({intro?, items}), table ({headers, rows}),
// example ({title, text}), note ({title?, text}).

export default {
  intro:
    "This chapter defines what testing is (and is not), why it is necessary, and the seven principles the whole syllabus keeps returning to. It then walks through the test process — seven groups of test activities and the testware each produces — and closes with the human side: tester skills, the whole team approach, and independence of testing.",
  keywords: [
    "coverage", "debugging", "defect", "error", "failure", "quality", "quality assurance",
    "root cause", "test analysis", "test basis", "test case", "test completion", "test condition",
    "test control", "test data", "test design", "test execution", "test implementation",
    "test monitoring", "test object", "test objective", "test planning", "test procedure",
    "test process", "test result", "testing", "testware", "traceability", "validation", "verification",
  ],
  objectives: [
    { id: "FL-1.1.1", level: "K1", text: "Identify typical test objectives" },
    { id: "FL-1.1.2", level: "K2", text: "Differentiate testing from debugging" },
    { id: "FL-1.2.1", level: "K2", text: "Exemplify why testing is necessary" },
    { id: "FL-1.2.2", level: "K1", text: "Recall the relation between testing and quality assurance" },
    { id: "FL-1.2.3", level: "K2", text: "Distinguish between root cause, error, defect, and failure" },
    { id: "FL-1.3.1", level: "K2", text: "Explain the seven testing principles" },
    { id: "FL-1.4.1", level: "K2", text: "Explain the different test activities and related tasks" },
    { id: "FL-1.4.2", level: "K2", text: "Explain the impact of context on the test process" },
    { id: "FL-1.4.3", level: "K2", text: "Differentiate the testware that supports the test activities" },
    { id: "FL-1.4.4", level: "K2", text: "Explain the value of maintaining traceability" },
    { id: "FL-1.4.5", level: "K2", text: "Compare the different roles in testing" },
    { id: "FL-1.5.1", level: "K2", text: "Give examples of the generic skills required for testing" },
    { id: "FL-1.5.2", level: "K1", text: "Recall the advantages of the whole team approach" },
    { id: "FL-1.5.3", level: "K2", text: "Distinguish the benefits and drawbacks of independence of testing" },
  ],
  sections: {
    "1.1.1": {
      objective: "FL-1.1.1",
      body: [
        { type: "p", text: "Software testing is a set of activities to discover defects and evaluate the quality of software work products — the work products under test are called test objects. Two misconceptions to drop immediately: testing is not just executing tests (it includes planning, analysis, design and more, aligned with the SDLC), and it is not only verification (checking specified requirements) — it also covers validation (checking the system meets users' and stakeholders' needs in its operational environment)." },
        { type: "p", text: "Testing may be dynamic (executes the software) or static (does not — reviews and static analysis). It is largely an intellectual activity requiring specialized knowledge, analytical skills, critical thinking and systems thinking." },
        { type: "list", intro: "The typical test objectives:", items: [
          "Evaluating work products such as requirements, user stories, designs, and code",
          "Causing failures and finding defects",
          "Ensuring required coverage of a test object",
          "Reducing the risk level of inadequate software quality",
          "Verifying whether specified requirements have been fulfilled",
          "Verifying that a test object complies with contractual, legal, and regulatory requirements",
          "Providing information to stakeholders to allow them to make informed decisions",
          "Building confidence in the quality of the test object",
          "Validating whether the test object is complete and works as expected by the stakeholders",
        ]},
        { type: "p", text: "Objectives vary with context: the work product being tested, the test level, risks, the SDLC being followed, and business factors such as corporate structure, competitive considerations, or time to market." },
        { type: "note", title: "Never a test objective", text: "Anything phrased as proving the absence of defects or failures. Testing can build confidence and reduce risk; it cannot prove correctness (see principle 1)." },
      ],
    },
    "1.1.2": {
      objective: "FL-1.1.2",
      body: [
        { type: "p", text: "Testing and debugging are separate activities. Testing can trigger failures caused by defects (dynamic testing) or find defects directly in the test object (static testing). Debugging is concerned with the causes: finding the defect behind a failure, analyzing it, and eliminating it." },
        { type: "list", intro: "The typical debugging process after dynamic testing triggers a failure:", items: [
          "Reproduction of the failure",
          "Diagnosis (finding the defect)",
          "Fixing the defect",
        ]},
        { type: "p", text: "Afterwards, confirmation testing checks whether the fix resolved the problem — preferably done by the same person who ran the original test. Regression testing can follow, checking whether the fix broke anything elsewhere (see section 2.2.3)." },
        { type: "p", text: "When static testing identifies a defect, debugging just removes it — there is nothing to reproduce or diagnose, because static testing finds defects directly and cannot cause failures." },
      ],
    },
    "1.2.1": {
      objective: "FL-1.2.1",
      body: [
        { type: "p", text: "Testing, as a form of quality control, helps achieve the agreed test objectives within scope, time, quality and budget constraints. Its contribution is not limited to the test team — any stakeholder can use testing skills to move the project toward success." },
        { type: "list", intro: "How testing contributes to success:", items: [
          "It is a cost-effective means of detecting defects — their removal (by debugging, a non-testing activity) indirectly raises the quality of test objects.",
          "It directly evaluates the quality of a test object at various SDLC phases, informing project decisions such as the release decision.",
          "It gives users indirect representation on the project — testers champion users' needs throughout, which is far cheaper than involving a representative set of actual users.",
          "It may be required to meet contractual or legal requirements or regulatory standards.",
        ]},
      ],
    },
    "1.2.2": {
      objective: "FL-1.2.2",
      body: [
        { type: "p", text: "Testing and quality assurance (QA) are often used interchangeably — wrongly. Testing is product-oriented and corrective: it is a major form of quality control (QC), alongside formal methods (model checking, proof of correctness), simulation and prototyping." },
        { type: "p", text: "QA is process-oriented and preventive: it focuses on implementing and improving processes, on the reasoning that a good process, followed correctly, generates a good product. QA applies to both the development process and the test process, and is the responsibility of everyone on the project." },
        { type: "p", text: "Test results serve both: testing uses them to fix defects; QA uses them as feedback on how well the development and test processes are performing." },
        { type: "table", headers: ["", "QA", "Testing (QC)"], rows: [
          ["Orientation", "Process", "Product"],
          ["Approach", "Preventive", "Corrective"],
          ["Focus", "Implementing and improving processes", "Achieving appropriate quality levels"],
          ["Who", "Everyone on the project", "Primarily testing roles"],
        ]},
      ],
    },
    "1.2.3": {
      objective: "FL-1.2.3",
      body: [
        { type: "p", text: "The causal chain: human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures when executed. People err because of time pressure, complexity of work products/processes/infrastructure, tiredness, or lack of training." },
        { type: "p", text: "Defects can sit in documentation (a requirements specification, a test script), in source code, or in supporting work products such as a build file. Undetected defects in early work products often lead to defective work products later. Some defects always cause a failure when executed, some only in specific circumstances, some never." },
        { type: "p", text: "Failures are not always caused by defects: environmental conditions — radiation, electromagnetic fields — can cause failures too (e.g. by corrupting firmware)." },
        { type: "p", text: "A root cause is the fundamental reason for the occurrence of a problem, e.g. the situation that leads to an error. Root causes are identified through root cause analysis, typically performed when a failure occurs or a defect is found; addressing the root cause prevents (or reduces the frequency of) similar failures and defects." },
        { type: "example", title: "Tracing the chain", text: "A programmer under severe time pressure (root cause) misreads the interest formula (error), writes the wrong calculation (defect); customers are charged the wrong interest (failure)." },
      ],
    },
    "1.3": {
      objective: "FL-1.3.1",
      body: [
        { type: "list", intro: "The seven testing principles — learn number, name, and meaning:", items: [
          "1. Testing shows the presence, not the absence of defects. Testing can show defects are present but cannot prove there are none — even zero findings is no proof of correctness.",
          "2. Exhaustive testing is impossible. Except in trivial cases, testing everything is infeasible; use test techniques, test case prioritization, and risk-based testing to focus effort.",
          "3. Early testing saves time and money. Early defect removal stops defects propagating into derived work products; start static and dynamic testing as early as possible.",
          "4. Defects cluster together. A small number of components usually contains most of the defects — the Pareto principle. Predicted and observed clusters feed risk-based testing.",
          "5. Tests wear out. Repeated tests become ineffective at finding new defects; modify tests and data, or write new ones. Exception: repetition can be beneficial, e.g. automated regression testing.",
          "6. Testing is context dependent. There is no single universally applicable approach to testing.",
          "7. Absence-of-defects fallacy. Verifying every specified requirement and fixing every defect found can still produce a system that fails users' needs, business goals, and the competition. Validation must accompany verification.",
        ]},
        { type: "note", title: "Exam pattern", text: "Principle questions are scenario-based: 'regression suite finds fewer defects each release' → tests wear out; 'we can't test all input combinations' → exhaustive testing is impossible; 'all requirements pass but users reject the product' → absence-of-defects fallacy." },
      ],
    },
    "1.4.1": {
      objective: "FL-1.4.1",
      body: [
        { type: "p", text: "The test process is the set of common test activities without which testing is less likely to achieve its objectives. The activities look sequential but are usually implemented iteratively or in parallel, and are tailored to the system and project during test planning." },
        { type: "list", intro: "The groups of test activities:", items: [
          "Test planning — define test objectives, then select the approach that best achieves them within the context's constraints (section 5.1).",
          "Test monitoring and test control — ongoing checking of all test activities against the plan (monitoring), and taking actions necessary to meet objectives (control) (section 5.3).",
          "Test analysis — 'what to test?' Analyze the test basis to identify testable features; define and prioritize test conditions using risk; evaluate the test basis and test object for defects and testability. Expressed in measurable coverage criteria.",
          "Test design — 'how to test?' Elaborate test conditions into test cases and other testware (e.g. test charters); identify coverage items; define test data requirements; design the test environment; identify infrastructure and tools.",
          "Test implementation — create or acquire the testware needed for execution (e.g. test data); organize test cases into test procedures, assemble test suites, build the test execution schedule; build and verify the test environment.",
          "Test execution — run tests per the schedule (manually or automated; continuous testing, pair testing); compare actual to expected results; log results; analyze anomalies to identify likely causes and report them.",
          "Test completion — at milestones (release, iteration end, test level end): raise change requests / product backlog items for unresolved defects, archive or hand over useful testware, shut down the environment, analyze lessons learned, write and communicate the test completion report.",
        ]},
      ],
    },
    "1.4.2": {
      objective: "FL-1.4.2",
      body: [
        { type: "p", text: "Test activities are an integral part of the organization's development processes, funded by stakeholders and ultimately serving their business needs. How testing is carried out depends on contextual factors:" },
        { type: "list", items: [
          "Stakeholders — needs, expectations, requirements, willingness to cooperate",
          "Team members — skills, knowledge, experience, availability, training needs",
          "Business domain — criticality of the test object, identified risks, market needs, legal regulations",
          "Technical factors — type of software, product architecture, technology",
          "Project constraints — scope, time, budget, resources",
          "Organizational factors — structure, policies, practices",
          "Software development lifecycle — engineering practices, development methods",
          "Tools — availability, usability, compliance",
        ]},
        { type: "p", text: "These factors shape the test strategy, the techniques used, the degree of test automation, the required level of coverage, the level of detail of testware, and test reporting." },
      ],
    },
    "1.4.3": {
      objective: "FL-1.4.3",
      body: [
        { type: "p", text: "Testware is the set of output work products from the test activities. Organizations vary in how they produce, name, and manage them; configuration management (section 5.4) keeps them consistent and integral." },
        { type: "table", headers: ["Activity", "Typical testware"], rows: [
          ["Test planning", "Test plan, test schedule, risk register, entry criteria and exit criteria (often all inside the test plan)"],
          ["Test monitoring and control", "Test progress reports, documentation of control directives, risk information"],
          ["Test analysis", "(Prioritized) test conditions (e.g. acceptance criteria), defect reports on the test basis"],
          ["Test design", "(Prioritized) test cases, test charters, coverage items, test data requirements, test environment requirements"],
          ["Test implementation", "Test procedures, manual and automated test scripts, test suites, test data, test execution schedule, environment items (stubs, drivers, simulators, service virtualizations)"],
          ["Test execution", "Test logs, defect reports"],
          ["Test completion", "Test completion report, improvement action items, lessons learned, change requests (e.g. product backlog items)"],
        ]},
        { type: "note", title: "Requirements vs the thing itself", text: "Test data REQUIREMENTS and environment REQUIREMENTS belong to design; the actual test DATA and the built environment belong to implementation. Matching questions exploit exactly this." },
      ],
    },
    "1.4.4": {
      objective: "FL-1.4.4",
      body: [
        { type: "p", text: "Effective test monitoring and control need traceability maintained throughout the test process: between test basis elements, the testware associated with them (test conditions, risks, test cases), test results, and defects." },
        { type: "list", intro: "What accurate traceability buys you:", items: [
          "Coverage evaluation — measurable coverage criteria in the test basis act as KPIs showing how far test objectives are achieved (cases↔requirements shows requirements coverage; results↔risks shows residual risk).",
          "Impact analysis of changes, easier audits, and meeting IT governance criteria.",
          "More understandable progress and completion reports that include the status of test basis elements — which also helps communicate technical matters to stakeholders.",
          "Information to assess product quality, process capability, and project progress against business goals.",
        ]},
      ],
    },
    "1.4.5": {
      objective: "FL-1.4.5",
      body: [
        { type: "p", text: "The syllabus covers two principal roles. The test management role takes overall responsibility for the test process, the test team, and leadership of test activities — focused on test planning, monitoring and control, and completion. In Agile development some management tasks stay with the team, while tasks spanning multiple teams or the organization may fall to test managers outside the development team." },
        { type: "p", text: "The testing role takes overall responsibility for the engineering (technical) aspect of testing — focused on test analysis, design, implementation, and execution." },
        { type: "p", text: "Roles are not job titles: the test management role can be filled by a team leader, test manager, or development manager, different people can hold a role at different times, and one person can hold both roles simultaneously." },
      ],
    },
    "1.5.1": {
      objective: "FL-1.5.1",
      body: [
        { type: "list", intro: "Generic skills particularly relevant for testers:", items: [
          "Testing knowledge — increases effectiveness, e.g. using test techniques",
          "Thoroughness, carefulness, curiosity, attention to detail, being methodical — finds the hard-to-find defects",
          "Communication skills, active listening, being a team player — interact with stakeholders, convey and discuss defects",
          "Analytical thinking, critical thinking, creativity — increase effectiveness",
          "Technical knowledge — increases efficiency, e.g. using appropriate test tools",
          "Domain knowledge — understand and communicate with end users and business representatives",
        ]},
        { type: "p", text: "Testers are often bearers of bad news, and humans tend to blame the bearer. Confirmation bias can make people reject information that contradicts their beliefs, and some see testing as destructive despite its contribution. Communicate defects and failures constructively." },
      ],
    },
    "1.5.2": {
      objective: "FL-1.5.2",
      body: [
        { type: "p", text: "The whole team approach — a practice from Extreme Programming — has any team member with the necessary knowledge and skills perform any task, with everyone responsible for quality. Team members share the same physical or virtual workspace, since co-location facilitates communication and interaction." },
        { type: "list", intro: "Advantages (recall these for K1 questions):", items: [
          "Improves team dynamics",
          "Enhances communication and collaboration within the team",
          "Creates synergy by leveraging the team's various skill sets for the project's benefit",
        ]},
        { type: "p", text: "Testers in this approach work with business representatives to create suitable acceptance tests, and with developers on test strategy and automation — transferring testing knowledge to the team. The approach is not always appropriate: safety-critical contexts may demand a high level of test independence." },
      ],
    },
    "1.5.3": {
      objective: "FL-1.5.3",
      body: [
        { type: "p", text: "A degree of independence makes testers more effective at finding defects because the author's and the tester's cognitive biases differ. Independence complements, not replaces, familiarity — developers can efficiently find many defects in their own code." },
        { type: "list", intro: "Levels of independence, lowest to highest:", items: [
          "The author tests their own work (no independence)",
          "The author's peers from the same team (some independence)",
          "Testers outside the author's team, within the organization (high independence)",
          "Testers from outside the organization (very high independence)",
        ]},
        { type: "p", text: "Most projects best combine levels: developers do component and component integration testing, the test team does system and system integration testing, business representatives do acceptance testing." },
        { type: "list", intro: "Benefits vs drawbacks:", items: [
          "Benefit: independent testers recognize different kinds of failures and defects thanks to different backgrounds, technical perspectives, and biases.",
          "Benefit: they can verify, challenge, or disprove assumptions made by stakeholders during specification and implementation.",
          "Drawback: isolation from the development team — lack of collaboration, communication problems, adversarial relations.",
          "Drawback: developers may lose their sense of responsibility for quality.",
          "Drawback: independent testers may be seen as a bottleneck or blamed for release delays.",
        ]},
      ],
    },
  },
};
