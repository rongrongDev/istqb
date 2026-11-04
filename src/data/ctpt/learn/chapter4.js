// CT-PT (2018) — Chapter 4 learn content, authored from ISTQB Performance Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The practical core of the syllabus, from plan to report: deriving objectives and writing the performance test plan, communicating it, understanding protocols and transactions, modeling operational and load profiles, reasoning about throughput and concurrency, building and correlating scripts, preparing the environment, running tests and analyzing and reporting results.",
  keywords: [
    "concurrency", "load profile", "load generation", "operational profile", "ramp-down", "ramp-up",
    "system of systems", "system throughput", "test plan", "think time", "virtual user",
  ],
  objectives: [
    { id: "PTFL-4.1.1", level: "K4", text: "Derive performance test objectives from relevant information" },
    { id: "PTFL-4.1.2", level: "K4", text: "Outline a performance test plan which considers the performance objectives for a given project" },
    { id: "PTFL-4.1.3", level: "K4", text: "Create a presentation that enables various stakeholders to understand the rationale behind the planned performance testing" },
    { id: "PTFL-4.2.1", level: "K2", text: "Give examples of typical protocols encountered in performance testing" },
    { id: "PTFL-4.2.2", level: "K2", text: "Understand the concept of transactions in performance testing" },
    { id: "PTFL-4.2.3", level: "K4", text: "Analyze operational profiles for system usage" },
    { id: "PTFL-4.2.4", level: "K4", text: "Create load profiles derived from operational profiles for given performance objectives" },
    { id: "PTFL-4.2.5", level: "K4", text: "Analyze throughput and concurrency when developing performance tests" },
    { id: "PTFL-4.2.6", level: "K2", text: "Understand the basic structure of a performance test script" },
    { id: "PTFL-4.2.7", level: "K3", text: "Implement performance test scripts consistent with the plan and load profiles" },
    { id: "PTFL-4.2.8", level: "K2", text: "Understand the activities involved in preparing for performance test execution" },
    { id: "PTFL-4.3.1", level: "K2", text: "Understand the principal activities in running performance test scripts" },
    { id: "PTFL-4.4.1", level: "K4", text: "Analyze and report performance test results and implications" },
  ],
  sections: {
    "4.1.1": {
      objective: "PTFL-4.1.1",
      body: [
        { type: "p", text: "Stakeholders — users and people with business or technical backgrounds — set the objectives, the terminology and the criteria for success. Distinguish two kinds of objective:" },
        { type: "table", headers: ["Objective type", "Focus", "Example"], rows: [
          ["User-based", "End-user satisfaction and business goals — users just want to get their work done", "Search results appear within 2 seconds for 90% of requests"],
          ["Technical", "Operational aspects: can the system scale, and when does performance degrade?", "The system handles growth to 10 million records without breaching requirements"],
        ]},
        { type: "list", intro: "Questions to answer with stakeholders:", items: [
          "Which transactions will be tested, and what average response time is expected?",
          "Which system metrics (memory usage, network throughput…) are captured, with what expected values?",
          "What improvement is expected compared with previous cycles?",
        ]},
      ],
    },
    "4.1.2": {
      objective: "PTFL-4.1.2",
      body: [
        { type: "p", text: "The performance test plan (PTP) is written before any performance testing, referenced from the overall test plan (which holds the schedule), and kept up to date." },
        { type: "table", headers: ["PTP section", "Content"], rows: [
          ["Objective", "Goals, strategies and methods — a quantifiable answer to whether the system is ready to perform under load"],
          ["Test objectives", "Performance objectives per stakeholder type"],
          ["System overview", "The SUT and the functionality tested under load"],
          ["Types of performance testing", "Which types (Chapter 1) and why"],
          ["Acceptance criteria", "For all relevant measures — response time is a user concern, throughput a business concern, resource utilization a system concern — tied to objectives, SLAs and baselines"],
          ["Test data", "User accounts, user input data, pre-populated databases; extraction, import, creation, backups for restoring, masking/anonymizing (required for personal data under GDPR, but it can change data characteristics)"],
          ["System configuration", "Architecture and servers, tiers, hardware and software with versions, external systems, SUT build"],
          ["Test environment", "Usually a smaller copy of production — explain how results are extrapolated; risks if production is the only option; tool access rights; component-only testing as a cheaper early option"],
          ["Test tools", "Tools for simulating transactions, generating load from several points of presence, and monitoring"],
          ["Profiles", "Operational profiles and the load profile (scenario) built from them"],
          ["Relevant metrics", "Only what serves the objectives: virtual user status, response time (min, max, average, 90th percentile), transactions/s, hits/s, throughput, HTTP responses, CPU and memory usage"],
          ["Risks", "Unmeasured areas, interfaces that can't be simulated, insufficient load, unmonitorable servers, environment limitations"],
        ]},
      ],
    },
    "4.1.3": {
      objective: "PTFL-4.1.3",
      body: [
        { type: "table", headers: ["Business-focused stakeholders", "Technology-focused stakeholders"], rows: [
          ["Care little about functional vs non-functional distinctions or tooling details", "Need the planned approach to generating load profiles and their own involvement"],
          ["Need the link between product risks and test objectives", "Need detailed setup and execution steps related to architectural risks"],
          ["Need the trade-off between cost and how representative the results will be", "Need the steps that make tests repeatable (staff and technical)"],
          ["Need to know how repeatable the tests are", "Need the schedule when environments are shared"],
          ["Need project risks: setup constraints, infrastructure, key staff", "Need mitigations if tests must run in production"],
          ["Need high-level activities with costs, schedule and milestones", "Need to know their tasks and when"],
        ]},
      ],
    },
    "4.2.1": {
      objective: "PTFL-4.2.1",
      body: [
        { type: "p", text: "Protocols define the rules of communication between systems; targeting the right part of a system requires knowing them. Performance testing mostly works at OSI layers 5–7 (session to application); low-level embedded work focuses on lower layers." },
        { type: "table", headers: ["Area", "Protocols"], rows: [
          ["Database", "ODBC, JDBC, vendor-specific"],
          ["Web", "HTTP, HTTPS, HTML"],
          ["Web services", "SOAP, REST"],
          ["Network", "DNS, FTP, IMAP, LDAP, POP3, SMTP, Windows Sockets, CORBA"],
          ["Mobile", "TruClient, SMP, MMS"],
          ["Remote access", "Citrix ICA, RTE"],
          ["SOA", "MQSeries, JSON, WSCL"],
        ]},
        { type: "p", text: "A classic two-tier client-server app talks to its database via ODBC; to emulate browser users end to end, use HTTP/HTTPS — bypassing the GUI and focusing on the backend servers." },
      ],
    },
    "4.2.2": {
      objective: "PTFL-4.2.2",
      body: [
        { type: "p", text: "A transaction covers everything the system does from initiation until one or more processes complete. Its response time shows which components need correcting or optimizing, and ramping up load while measuring transactions shows which ones cause degradation." },
        { type: "note", title: "Think time", text: "Think time simulates a real user pausing — reading, typing, pressing 'Send'. Transaction response time + think time = elapsed time." },
        { type: "example", title: "Nested transactions", text: "Measure 'search item', 'add to cart', 'pay' and 'confirm order' individually and the whole ordering process as one — all in a single test." },
      ],
    },
    "4.2.3": {
      objective: "PTFL-4.2.3",
      body: [
        { type: "p", text: "An operational profile is a distinct, repeatable pattern of interaction with the system, by users or other components. Several profiles are combined into a load profile." },
        { type: "list", intro: "1. Identify the data:", items: [
          "User personas and roles (standard user, member, administrator…).",
          "Generic tasks per role, at business-process or major-user-story level.",
          "Estimated numbers of users per role and task per time unit.",
        ]},
        { type: "list", intro: "2. Gather it from:", items: [
          "Interviews and workshops with product owners, sales managers and (potential) end users.",
          "Specifications and user stories ('As a <type of user>…'), UML use case actors.",
          "Usage data and monitoring logs from similar or current systems.",
          "Observing users perform tasks — ideally alongside usability testing.",
        ]},
        { type: "list", intro: "3. Construct the profiles:", items: [
          "Top-down: start broad, refine only when the objectives need it.",
          "Single out profiles with frequent tasks, critical or high-risk transactions, or large data transfers.",
          "Review them with the main stakeholders before building load profiles.",
        ]},
        { type: "p", text: "Not all load comes from users: off-line batch systems need profiles for the types of processing (focus on throughput within the batch window), and systems of systems need profiles for the inputs from supplier systems, often with analysis of buffers and queues together with architects." },
      ],
    },
    "4.2.4": {
      objective: "PTFL-4.2.4",
      body: [
        { type: "p", text: "A load profile (scenario) defines how many instances — usually virtual users — execute which operational profiles over what time. It needs the test objective, accurate operational profiles, known throughput and concurrency issues, and the quantity and timing of execution:" },
        { type: "list", items: [
          "Ramp-up — steadily increasing load (e.g. one more virtual user per minute).",
          "Ramp-down — steadily decreasing load.",
          "Steps — sudden changes (e.g. 100 more virtual users every five minutes).",
          "Predefined distributions — mimicking daily or seasonal business cycles.",
        ]},
        { type: "example", title: "Building a stress profile", text: "100 virtual users run operational profile 1 for the whole test as background load; another set ramps up to 220 virtual users running profile 2, holds for two hours, then ramps down. Combined, the system faces a three-hour stress period." },
      ],
    },
    "4.2.5": {
      objective: "PTFL-4.2.5",
      body: [
        { type: "p", text: "System throughput is the number of transactions of a type processed per time unit (orders per hour, HTTP requests per second) — distinct from network throughput (data moved). Throughput, not the number of users, defines load." },
        { type: "example", title: "Same users, 60× the load", text: "500 users each running a short query every minute = 30,000 queries per hour. The same 500 users running one query per hour = 500 queries per hour — a 60-fold difference in load and hardware needs." },
        { type: "note", title: "Formula", text: "System throughput = number of virtual users / (processing time + think time). If processing time grows under load, throughput falls even when nothing else changes." },
        { type: "p", text: "For batch systems, throughput is the number of transactions completed within the window (e.g. overnight). Concurrency is the number of simultaneous threads or sessions — set via the number of virtual users. The same throughput can consume different resources at different concurrency. Test setups are usually closed systems (fixed population; nobody new arrives while everyone waits); many public systems are open (users keep arriving)." },
      ],
    },
    "4.2.6": {
      objective: "PTFL-4.2.6",
      body: [
        { type: "list", intro: "Ways to create a script:", items: [
          "Record client-system communication at protocol level, then parameterize and document — scalable (the client is bypassed) but parameterizing takes time.",
          "Record GUI actions of one client with a test execution tool and replay it as many clients.",
          "Program protocol requests, GUI actions or API calls — you must know the exact request sequence.",
        ]},
        { type: "table", headers: ["Script part", "Purpose"], rows: [
          ["Initialization", "Prepare everything for the main part"],
          ["Main section(s)", "The repeated work that generates load"],
          ["Clean-up", "Finish properly and reset so the script can run again"],
          ["Timers", "Measure meaningful units of work (business transactions); protocol scripts measure server + network time, GUI scripts measure end-to-end time"],
          ["Verification and error handling", "Default checks are minimal (HTTP return code) — add checks of what requests return, error clean-up, and indirect verification (e.g. query the database)"],
          ["Synchronization points", "Wait for an event to make actions concurrent or coordinate scripts"],
        ]},
        { type: "p", text: "Performance scripts are software: test them across the whole range of input data." },
      ],
    },
    "4.2.7": {
      objective: "PTFL-4.2.7",
      body: [
        { type: "p", text: "Scripts implement the PTP and load profiles, usually one per operational profile. Recording reproduces the real system exactly; programming relies on knowing the request sequence." },
        { type: "note", title: "Correlation", text: "After protocol-level recording, replace recorded context identifiers (e.g. a user or session ID issued at login) with variables extracted from responses. Missing or incorrect correlation is the main reason recorded scripts fail to play back." },
        { type: "p", text: "Parameterize data so each virtual user uses its own suitable data. If all virtual users share one user and data set, caching makes results unrealistically good, while locking makes them unrealistically bad. Unique values such as order names must also be parameterized or the second run fails." },
        { type: "p", text: "Insert or adjust think times to hit the throughput of the operational profiles, then combine the scripts into a scenario that controls how many virtual users run each script, when, and with what parameters." },
      ],
    },
    "4.2.8": {
      objective: "PTFL-4.2.8",
      body: [
        { type: "p", text: "Preparation means setting up the SUT, deploying the environment and setting up load generation and monitoring tools. Keep the environment as close to production as possible; otherwise understand the differences and how to project results. Performance is non-linear in the environment — the less it resembles production, the less reliable the projection." },
        { type: "list", items: [
          "Data size and structure affect results dramatically — use production-like data and restore it between cycles.",
          "Replace unavailable parts with stubs or service virtualization (e.g. a third-party card processor).",
          "Choose the deployment: internal or external labs, cloud IaaS, or cloud SaaS load testing — an isolated lab to see small optimization effects, the cloud for end-to-end production load or short, cheap campaigns.",
          "Configure hardware and software for the objective; compensate for differences (e.g. adjust Java heap size if test machines have less RAM).",
          "Emulate networks for mobile systems; place load generators near users for global systems.",
          "Deploy enough load generators and monitor them too — a slow generator silently fails to deliver the load; configure browser emulation or IP spoofing as needed.",
          "Validate the setup with a controlled run, checking logs, database content and that monitoring captures what's needed.",
        ]},
      ],
    },
    "4.3": {
      objective: "PTFL-4.3.1",
      body: [
        { type: "p", text: "Execution generates load according to the scenario, monitors every part of the environment and keeps all results. Tools automate most of this and offer a console for live adjustments." },
        { type: "list", items: [
          "Measure in the steady state. Ramp-up reaches it (use incremental load states and allow enough time); ramp-down ends the test. In steady state, check load and responses are stable.",
          "Transient states — mass logins, spike tests — need careful analysis; averages can be very misleading.",
          "Define failure handling, e.g. log out on failure to release resources.",
          "Start stand-alone monitoring and log analysis separately and time-synchronize all tools.",
          "Watch the console and real-time logs so expensive runs can be stopped or adjusted early.",
          "Verify protocol-level tests by running GUI scripts or manual profiles in parallel — the difference should be only client-side time.",
          "In CI, checks and alerts must be automated — easier for regression than for exploratory performance tests.",
        ]},
      ],
    },
    "4.4": {
      objective: "PTFL-4.4.1",
      body: [
        { type: "p", text: "Compare the data with the test objectives, understand the behavior and recommend actions — hardware, software and database calls, or network changes such as load balancing." },
        { type: "table", headers: ["Data", "How to read it"], rows: [
          ["Virtual user status", "Check first — did all virtual users complete their operational profiles? Errors affect all other data"],
          ["Transaction response time", "Min and max show extremes; the average can be skewed by outliers; the 90th percentile is a common goal — don't demand 100% compliance"],
          ["Transactions per second", "Work done — system throughput"],
          ["Transaction failures", "Always root-cause them; failed transactions are fast and distort transactions per second"],
          ["Hits per second", "Requests to the server per second"],
          ["Network throughput", "Bits per second received by virtual users"],
          ["HTTP responses", "Per second, by code (200, 302, 304, 404…)"],
        ]},
        { type: "p", text: "Analysis techniques: compare with requirements, expected results and prior runs; observe trends; statistical quality control; identify errors; verify component health. Correlate metrics — e.g. how many transactions per second were processed when CPU reached 90% and the system slowed. Confirmation tests check fixes." },
        { type: "list", intro: "A typical performance test report:", items: [
          "Executive summary — concise, actionable conclusions and recommendations for management.",
          "Test results — summary, a baseline snapshot, an architecture diagram, and detailed analysis showing where a stable system became unstable and why.",
          "Test logs per run — start time, duration, scripts and mix, data files, configuration and changes, average and peak CPU/RAM, notes, defects.",
          "Recommendations — technical changes, areas for further analysis, additional monitoring.",
        ]},
      ],
    },
  },
};
