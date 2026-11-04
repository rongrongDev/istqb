// CT-PT (2018) — Chapter 4: Performance Testing Tasks
// summary/deepPoints from syllabus v2018; examInsights from ISTQB Sample Exam A v1.3 and the ASTQB 2019 sample exam
export default {
  id: 4,
  title: 'Performance Testing Tasks',
  time: '475 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Half the syllabus time and 20 questions per sample exam, many K4 scenarios. Know user-based vs technical objectives, every section of the Performance Test Plan, business- vs technology-focused communication, protocols (ODBC/JDBC, HTTP(S), SOAP/REST; OSI layers 5–7), transactions and THINK TIME, operational profiles → load profiles (ramp-up/down, steps), THROUGHPUT = users / (processing + think time) vs CONCURRENCY, script structure, CORRELATION and parameterization (caching!), environment preparation, steady state vs transient states, and the analysis metrics (90th percentile).",
  sections: [
    {
      id: '4.1.1', title: 'Deriving Performance Test Objectives', level: 'K4', type: 'deep',
      deepPoints: [
        "Stakeholders (users, business, technical) set objectives, terminology and success criteria.",
        "USER-BASED objectives: end-user satisfaction and business goals — users just want to do their job. TECHNICAL objectives: operational aspects — ability to SCALE, conditions under which performance degrades.",
        "Key objectives: identify risks, find improvement opportunities, identify necessary changes.",
        "Ask: which transactions and expected average response time? Which system metrics (memory, network throughput) and expected values? What improvement vs previous cycles?"
      ],
      examInsights: [
        "A-Q18 KEY (K4) — A TECHNICAL objective: 'the system must be able to scale to 10 million patient records' (scalability), not a user-facing response time.",
        "ASTQB-Q18 — Given response time targets, you still need the list of system resources to be tracked (and their thresholds)."
      ]
    },
    {
      id: '4.1.2', title: 'The Performance Test Plan', level: 'K4', type: 'deep',
      deepPoints: [
        "PTP: created BEFORE testing, referenced by the test plan, updated as testing proceeds.",
        "Contents: OBJECTIVE (goals, strategies, methods — is the system ready under load?); TEST OBJECTIVES per stakeholder; SYSTEM OVERVIEW; TYPES of performance testing and purpose; ACCEPTANCE CRITERIA (response time = USER concern, throughput = BUSINESS concern, resource utilization = SYSTEM concern) tied to objectives, SLAs and BASELINES; TEST DATA (user accounts, user input, pre-populated DB; extraction, import, creation, backups for restore, MASKING — mandatory under GDPR but changes data characteristics → risk); SYSTEM CONFIGURATION (architecture, tiers, hardware incl. versions, software versions, external systems, build ID); TEST ENVIRONMENT (usually scaled-down → how to EXTRAPOLATE; production-only testing risks; tools outside need access rights; component-only testing is cheaper/earlier); TEST TOOLS (transaction simulation, load from points of presence, monitoring); PROFILES (operational → load profile/scenario); RELEVANT METRICS (virtual user status, response time min/max/avg/90th percentile, TPS, hits/s, throughput bits/s, HTTP responses, CPU %, memory %); RISKS (unmeasured areas, unsimulatable interfaces, insufficient load, scaled-down environment)."
      ],
      examInsights: [
        "A-Q19 KEY (K4) — For the most critical objective you need: who can access what data and how often (usage → load).",
        "ASTQB-Q19 — With bursts of activity around events, the most important type is spike testing."
      ]
    },
    {
      id: '4.1.3', title: 'Communicating about Performance Testing', level: 'K4', type: 'deep',
      deepPoints: [
        "BUSINESS focus: less interested in functional vs non-functional distinctions; tooling/scripting secondary; state the link between PRODUCT RISKS and objectives; balance COST vs how REPRESENTATIVE results will be; REPEATABILITY; project risks (setup constraints, infrastructure, key staff); high-level activities with COSTS, SCHEDULE, MILESTONES.",
        "TECHNOLOGY focus: approach to generating load profiles and their involvement; detailed setup/execution steps linked to ARCHITECTURAL risks; steps for repeatability; SCHEDULING on shared environments; mitigations if testing in PRODUCTION; their tasks and timing."
      ],
      examInsights: [
        "A-Q20 / A-Q21 KEY (K4) — Business stakeholders: costs and how representative the test system is; technical stakeholders: configuration/repeatability details of the test system.",
        "ASTQB-Q20/Q21 — A met/not-met summary suits business stakeholders; technical stakeholders want to know what caused the 3% of failing transactions."
      ]
    },
    {
      id: '4.2.1', title: 'Typical Communication Protocols', level: 'K2', type: 'skim',
      summary: "Protocols define communication rules; OSI layers 5 (session) – 7 (application) are most used in performance testing (lower layers for low-level/embedded). Common: DATABASE — ODBC, JDBC, vendor protocols; WEB — HTTP, HTTPS, HTML; WEB SERVICE — SOAP, REST. Others: network (DNS, FTP, IMAP, LDAP, POP3, SMTP, Windows Sockets, CORBA), mobile (TruClient, SMP, MMS), remote access (Citrix ICA, RTE), SOA (MQSeries, JSON, WSCL). Choose by the part of the system targeted: 2-tier client-server DB access → ODBC; end-to-end browser emulation → HTTP/HTTPS (bypassing the GUI to focus on backend servers).",
      examInsights: [
        "A-Q22 / A-Q23 KEY — Web service speed → REST; database requests → ODBC.",
        "ASTQB-Q22/Q23 — OSI layers 5–7 are most commonly used; database emphasis → ODBC."
      ]
    },
    {
      id: '4.2.2', title: 'Transactions', level: 'K2', type: 'skim',
      summary: "A transaction = activities from initiation until one or more processes complete; its response time is measured to find components needing optimization. THINK TIME simulates a real user pausing (reading, entering data, pressing SEND): response time + think time = ELAPSED time. Ramping up load while measuring transaction times correlates degradation with specific transactions. NESTED transactions measure discrete steps (search, add to cart, pay, confirm) and the whole process in one test.",
      examInsights: [
        "A-Q24 / A-Q25 KEY — Simulating a user reading and entering data → think time; nesting lets you measure a series of discrete transactions (and the whole).",
        "ASTQB-Q24/Q25 — Receiving and viewing an individual result is a transaction; include think time because users pause to read and navigate."
      ]
    },
    {
      id: '4.2.3', title: 'Identifying Operational Profiles', level: 'K4', type: 'deep',
      deepPoints: [
        "Operational profile = a distinct, repeatable pattern of interaction (users or other components); combined into load profiles.",
        "Steps: (1) IDENTIFY data — user personas/roles, generic tasks (business-process level), estimated NUMBERS of users per role/task per time unit; (2) GATHER from interviews/workshops (POs, sales, end users), specifications/user stories ('As a <type of user>…'), UML use case actors, usage data/monitoring logs of similar or current systems, observing users (combine with usability tests); (3) CONSTRUCT top-down — broad profiles first, refine only if needed; single out frequent, critical/high-risk, or data-heavy profiles; review with stakeholders.",
        "Non-user loads: OFF-LINE BATCH (throughput within a window; processing types, e.g. payments, credential checks, compliance) and SYSTEMS OF SYSTEMS (inputs from supplier systems; buffers and queues analyzed with architects)."
      ],
      examInsights: [
        "A-Q26 KEY (K4) — Missing to construct the operational profile: the number of users across the system for this role.",
        "ASTQB-Q26 — Don't forget non-human 'users': the display board pulling data is an operational profile too."
      ]
    },
    {
      id: '4.2.4', title: 'Creating Load Profiles', level: 'K4', type: 'deep',
      deepPoints: [
        "Load profile (scenario) = number of instances (VIRTUAL USERS) executing operational profiles over time.",
        "Inputs: the test objective (e.g. stress), accurate operational profiles, known throughput/concurrency issues, quantity and time distribution: RAMP-UP (e.g. +1 VU/minute), RAMP-DOWN, STEPS (e.g. +100 VUs every 5 minutes), predefined distributions (daily/seasonal cycles).",
        "Profiles combine, e.g. a constant background of 100 VUs (profile 1) + a ramp-up to 220 VUs held 2 hours (profile 2) → a 3-hour stress period."
      ],
      examInsights: [
        "A-Q27 KEY (K4) — Shift-based access evenly distributed → a stepped ramp-up with the right transaction volume per hour of the shift.",
        "ASTQB-Q27 — Pick the chart whose ramp/steps match the described race-day load."
      ]
    },
    {
      id: '4.2.5', title: 'Analyzing Throughput and Concurrency', level: 'K4', type: 'deep',
      deepPoints: [
        "SYSTEM THROUGHPUT = transactions of a type per time unit (orders/hour, HTTP requests/s) — not network throughput (data volume). It DEFINES LOAD; number of users alone does not (500 users × 1 query/min = 30,000/h vs 1 query/h = 500/h → 60× difference).",
        "System throughput = virtual users / (processing time + think time) — throughput can fall when processing time grows.",
        "Batch: throughput = transactions completed within the window.",
        "CONCURRENCY = simultaneous threads/sessions (set as number of VUs); same throughput can use different resources. CLOSED systems (fixed population; no new users while all wait) vs OPEN systems (users keep arriving — many public systems)."
      ],
      examInsights: [
        "A-Q28 KEY (K4) — Compute peak concurrent accesses from users, shift length and access frequency (answer: 2,000).",
        "ASTQB-Q28 — Compute throughput per device from the scenario's update frequency (answer: 43)."
      ]
    },
    {
      id: '4.2.6', title: 'Basic Structure of a Performance Test Script', level: 'K2', type: 'deep',
      deepPoints: [
        "A script simulates user/component activity, sending requests in order and at pace. Creation: RECORD at PROTOCOL level then parameterize (scalable — client bypassed — but parameterization takes time); record at GUI level and replay many clients; or PROGRAM protocol requests, GUI actions or API calls (must know the exact request sequence).",
        "Structure: INITIALIZATION, MAIN sections (repeated), CLEAN-UP (reset so it can run again).",
        "Data collection: TIMERS around meaningful units of work (business transactions); protocol-level = server + network time only, GUI-level = end-to-end.",
        "Result verification and error handling: default checks are minimal (HTTP code) — add checks; implement cleanup on error; verify INDIRECTLY (query the database). Synchronization points coordinate concurrent actions. Scripts are software — test them."
      ],
      examInsights: [
        "A-Q29 / A-Q30 KEY — Protocol-level advantage: scalable because the client is bypassed; verify users were added by checking they exist in the database.",
        "ASTQB-Q29/Q30 — Clean-up resets the system so the script can run again; verify transactions by querying the database."
      ]
    },
    {
      id: '4.2.7', title: 'Implementing Performance Test Scripts', level: 'K3', type: 'deep',
      deepPoints: [
        "Based on the PTP and load profiles; usually one script per operational profile (can combine with conditions); recorded (exact) or programmed (needs request knowledge).",
        "CORRELATION: replace recorded context identifiers (session/user IDs from login) with variables extracted from responses — missing/incorrect correlation is the MAIN reason recorded scripts fail to play back.",
        "PARAMETERIZATION: same user/data for all VUs is misleading — CACHING makes results too good, LOCKING/concurrency makes them too bad; give each VU proper, different data; unique values (e.g. order names) must be parameterized.",
        "Insert/adjust THINK TIMES to reach the profile's throughput; combine scripts into a SCENARIO implementing the load profile (how many VUs per script, when, with what parameters)."
      ],
      examInsights: [
        "A-Q31 KEY (K3) — 'User not known to the system' on playback → the script isn't capturing and re-using the system ID (correlation).",
        "A-Q32 KEY (K3) — First query slow, repeats 0.01 s → caching; vary the data/clear the cache.",
        "ASTQB-Q31/Q32 — Expensive VU licenses: use the minimum VUs that still create the expected throughput; correlation keeps each judge's session context."
      ]
    },
    {
      id: '4.2.8', title: 'Preparing for Performance Test Execution', level: 'K2', type: 'deep',
      deepPoints: [
        "Set up the SUT, deploy the environment, set up load generation and monitoring tools.",
        "Environment as close to production as possible; otherwise understand differences and how to PROJECT results. Performance is NON-LINEAR in the environment — the further from production, the less reliable the projection and the higher the risk.",
        "Most important: DATA (size and structure — small/different samples mislead), hardware/software configuration, network configuration; restore data between cycles.",
        "Unavailable parts → stubs / SERVICE VIRTUALIZATION (e.g. credit card processing).",
        "Deployment options: internal/external labs; cloud IaaS; cloud SaaS load testing services — isolated lab for small optimization effects, cloud for end-to-end production load, cloud to cut cost for short campaigns.",
        "Configure to match (e.g. adjust Java heap if less RAM); network emulation for mobile, distributed load generators for global systems; deploy enough LOAD GENERATORS and MONITOR THEM (a slow generator won't hold the load); browser emulation, IP spoofing; validate the setup with a controlled test run."
      ],
      examInsights: [
        "A-Q33 / A-Q34 KEY — Non-equivalent test system → projections less reliable and risk increases; concern with load generators: they may hit their own performance limits and fail to produce the load.",
        "ASTQB-Q33/Q34 — Best environment: a complete replica of production; service virtualization when a needed service isn't available."
      ]
    },
    {
      id: '4.3', title: 'Execution', level: 'K2', type: 'deep',
      deepPoints: [
        "Generate load per the profile/scenario, monitor all parts of the environment, collect and keep all results (tools automate, with a console for live adjustments).",
        "Measure in the STEADY STATE; RAMP-UP gets there, RAMP-DOWN ends the test; use incremental load states during ramp-up; check load and responses are stable at steady state.",
        "TRANSIENT states (mass logins, SPIKE tests) need careful analysis — averages mislead.",
        "Define failure handling (e.g. log out to release resources). Start stand-alone monitoring separately and TIME-SYNCHRONIZE all tools.",
        "Watch the console and real-time logs to stop or adjust expensive runs early.",
        "Verify protocol-level load by running GUI scripts or MANUAL operational profiles in parallel — times should differ only by client-side time.",
        "In CI, checks and alerts must be automatic (easier for regression than exploratory tests)."
      ],
      examInsights: [
        "A-Q35 / A-Q36 KEY — Ramp-up lets the system reach a steady state before measuring; transient states are tested with spike testing.",
        "ASTQB-Q35/Q36 — After ramp-up wait for the steady state; manual tests in parallel verify the tool's recorded performance."
      ]
    },
    {
      id: '4.4', title: 'Analyzing Results and Reporting', level: 'K4', type: 'deep',
      deepPoints: [
        "Compare data with the objectives, understand behavior, conclude with recommended actions (hardware, software/DB calls, network/load balancing).",
        "Analyze: VIRTUAL USER STATUS first (did all complete?); TRANSACTION RESPONSE TIME — min, max, average (skewed by outliers), 90TH PERCENTILE (common goal; don't demand 100% compliance); TRANSACTIONS PER SECOND (system throughput); TRANSACTION FAILURES (root-cause them; failed transactions distort TPS); HITS PER SECOND; NETWORK THROUGHPUT (bits/s); HTTP RESPONSES per second (200, 302, 304, 404).",
        "Techniques: compare to requirements, trends, statistical quality control, identify errors, expected vs actual, prior results, component health; CORRELATE metrics (TPS when CPU hit 90%); confirmation testing after fixes.",
        "Report: EXECUTIVE SUMMARY (concise, actionable); TEST RESULTS (summary, BASELINE snapshot, architecture diagram, detailed analysis — where it became unstable and why); TEST LOGS per run (start, duration, scripts/mix, data files, configuration and changes, avg/peak CPU and RAM, notes, defects); RECOMMENDATIONS (technical changes, further analysis, additional monitoring)."
      ],
      examInsights: [
        "A-Q37 KEY (K4) — With a 90th-percentile requirement, present that 90% of responses are probably acceptable rather than insisting on 100% compliance.",
        "ASTQB-Q37 — Scenarios where all times exceed the 90%-transaction target need tuning and retesting."
      ]
    }
  ]
};
