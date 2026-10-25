// CT-MAT (2019) — Chapter 3: Common Test Types and Test Process for Mobile Applications
// summary/deepPoints from syllabus v2019; examInsights derived from Sample Exam A v1.1
export default {
  id: 3,
  title: 'Common Test Types and Test Process for Mobile Applications',
  time: '200 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "11 of the 40 exam questions. Three K3 objectives: installability (3.1.1), stress testing (3.1.2), and usability (3.1.5), plus the K3 tour objective (3.3.3). Know the installation channels and methods, the security/performance/usability specifics, the two ADDITIONAL mobile test levels (field testing, store approval + post-release), and the experience-based toolkit: personas, mnemonics (SFiDPOT, I SLICED UP FUN), heuristics, tours, and session-based test management.",
  sections: [
    {
      id: '3.1.1',
      title: 'Installability Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Focus on installation, UPDATE, and de-installation. Approaches: application stores (Google Play, Apple App Store; enterprise apps via link or distribution services like HockeyApp/App Center); SIDELOADING (copying the app to the device and installing from the file); desktop applications (Apple iTunes, Android App Installer — download on desktop, install via cable, usually also de-install).',
        'Installation methods: OTA (over-the-air) via Wi-Fi or cellular data, or data cable.',
        'Test conditions: install/de-install/upgrade on internal AND external memory; re-installation with and without the "retain app data" option chosen at previous de-installation; cancelling/interrupting installation or de-installation (shutting the device down, disconnecting from the internet); resuming interrupted install/de-install/upgrade; permissions-related testing (deny address-book access → is there a message?); update the app and verify no data is lost.',
        'Apps requiring jailbroken (iOS) or rooted (Android) devices give administrative rights; platform providers do not support this (legal consequences). An app not requiring jailbreak/root may not need testing on such devices.'
      ],
      examInsights: [
        'Q22 (K3) — For ANDROID installability, "executing App-Installer.exe" is invalid: .exe is Windows-only. Valid: install via PC + commands (ADB), Google Play Beta Program, sideloading from SD card.'
      ]
    },
    {
      id: '3.1.2',
      title: 'Stress Testing',
      level: 'K3',
      type: 'skim',
      summary: "Stress testing determines the app's performance efficiency under conditions beyond normal load — in this syllabus targeted only at the MOBILE DEVICE (backend stress testing belongs to the Performance Testing syllabus). Test conditions: high CPU usage, out-of-memory, low disk space, battery stress, failures, poor bandwidth, very high number of user interactions (may need simulated real-world network conditions). Stressful conditions can be created with tools such as Monkey (a command-line tool over the ADB shell) or manually — big files or other apps hogging CPU/memory.",
      examInsights: [
        'KEY — Stress here = the device, not the server. Monkey over ADB is the tool the syllabus names.'
      ]
    },
    {
      id: '3.1.3',
      title: 'Security Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Principal mobile security issues: access to SENSITIVE DATA on the device; UNENCRYPTED information transfer or unsafe storage.',
        'Test conditions: inputs tested for code injection and overflow; encryption of transferred data; encryption of locally stored data; deletion of temporary data after use or after an abnormal end; clearing text in password fields.',
        'Explore the OWASP top-10 mobile-related vulnerabilities. Security testing has its own specialist syllabus.'
      ],
      examInsights: [
        'Q23 (select TWO) — Security issues: code injection via input fields + data transferred unencrypted. TRAPS: app not responding after interruption (operational), rendering issues after orientation change, overlapping screen elements — not security.'
      ]
    },
    {
      id: '3.1.4',
      title: 'Performance Testing',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'An app that does not appear fast enough (≤ ~3 seconds) may get de-installed in favor of an alternative. Time and resource consumption are key success factors.',
        'Performance efficiency is tested on the DEVICE ITSELF in addition to backend interaction; whole-system performance testing follows the test strategy and the Performance Testing syllabus (not mobile-specific).',
        'The app performance test should contain CHRONOMETRY for the most important workflows (online banking: "Login", "Change address", "Bank transfer with PIN and TAN"), compared against similar apps. Besides chronometric measures, PERCEIVED performance matters — UX strongly affects how long users will wait.'
      ],
      examInsights: [
        'Q24 KEY — To measure time behavior, use an INSTRUMENTED BUILD for exact chronometric numbers (differentiating app vs backend vs network time). A stopwatch cannot do milliseconds; a load generator measures the server, not the app; emulators/simulators never give correct app performance.'
      ]
    },
    {
      id: '3.1.5',
      title: 'Usability Testing',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Usability is critical: large numbers of users de-install apps within minutes over poor usability or performance. UX design should match the platform look and feel — testers must know the platform\'s expectations.',
        'Usability tests use heuristics and test tours; personas help; a usability lab can be used if required.',
        'Usability findings are mostly FINDINGS, not defects — the tester must be able to explain them to the team, product owner, or stakeholders.',
        'A usable app: is self-explanatory and intuitive; allows user mistakes; is consistent in wording and behavior; abides by platform design guidelines; makes needed information visible and reachable in each screen size and type.'
      ],
      examInsights: [
        'Q25 (K3, NOT-question) — A step NOT performed in usability testing: "activate the voice-over feature of the device" — that is ACCESSIBILITY testing. Ordering a usability lab session, checking platform UI-guideline compliance, and learning platform look-and-feel expectations all belong.'
      ]
    },
    {
      id: '3.1.6',
      title: 'Database Testing',
      level: 'K1',
      type: 'skim',
      summary: "Apps store data locally in flat files or databases. Test conditions: validation of data storage issues — synchronization, upload conflicts, data security, constraints on the data, CRUD (Create/Read/Update/Delete) functionality, and search; data integration testing for data provided by the device (contacts) or third-party apps (pictures, videos, messages); and performance of storing data on the device.",
      examInsights: [
        'Q26 KEY — CRUD = Create, Read, Update, Delete. Distractors swap in Copy/Rename/Undo/Deploy.'
      ]
    },
    {
      id: '3.1.7',
      title: 'Globalization and Localization Testing',
      level: 'K2',
      type: 'skim',
      summary: "Internationalization (I18N)/globalization testing: different locations, formats for dates, numbers, currency, and replacing actual strings with PSEUDO-STRINGS. Localization (L10N) testing: localized strings, images, and workflows for a particular region. Russian and German words can be much longer; limited screen sizes cause problems with translated strings — check as standard tests. Date format (YEAR–MONTH–DAY vs DAY–MONTH–YEAR) is a very important check.",
      examInsights: [
        'Q27 KEY — Pseudo-strings partly showing plus partly ENGLISH strings during I18N testing = HARD-CODED English strings (text not sourced from the string resource). Not missing translations, not device language settings, not a broken build.'
      ]
    },
    {
      id: '3.1.8',
      title: 'Accessibility Testing',
      level: 'K2',
      type: 'skim',
      summary: "Accessibility testing determines the ease with which users with disabilities can use a component or system. For mobile: use device accessibility settings and test the app for each setting. Use platform vendors' accessibility guidelines (Google, Apple) and the W3C mobile accessibility guide; taking feedback from people who require accessibility also helps.",
      examInsights: [
        'Q28 KEY — Accessibility testing is conducted "to determine if the app is usable by users with differing needs" — not because W3C requires it, not for complete testing, not as generic mandatory test cases.'
      ]
    },
    {
      id: '3.2.1',
      title: 'Field Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'An ADDITIONAL test level beyond CTFL levels: verify the app functions correctly in the expected real-user usage scenario — various networks and communication technologies (Wi-Fi, cellular), mobile towers, Wi-Fi/cellular switching while the app is in use, varying download speeds and signal strengths, blind spots.',
        'Requires careful planning: device types, Wi-Fi, cellular data plans on various carriers, access to modes of transport for coverage; routes, transport modes, and time of day must be scheduled.',
        'Usability should also be covered during field testing; incorporate environmental factors such as temperature and usage-scenario conditions.'
      ],
      examInsights: [
        'KEY — Field testing = real world, hard to reproduce, carefully planned. Q31 (in 3.3.3) confirms tours as an effective field-testing method.'
      ]
    },
    {
      id: '3.2.2',
      title: 'Testing for Application Store Approval and Post-release Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Before submitting for publication, checklist-based tests must pass to assure store approval; for upgrades, run upgrade-related tests too. Checklists are based on guidelines: OS-specific, UI design, and store-provided libraries/APIs.',
        'The approval process takes time; issues found during approval mean a new submission and more delay — plan for this in project planning and testing.',
        'POST-RELEASE testing is a further level: download and install the application from the application store and verify it works like the tested build.'
      ],
      examInsights: [
        'Q29 KEY — App just released to the store → next activity is POST-RELEASE TESTING (install from the store, verify). Store approval testing happens BEFORE submission; archiving testware/test closure come after post-release testing.'
      ]
    },
    {
      id: '3.3.1',
      title: 'Personas and Mnemonics',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'PERSONAS: fictional characters representing real customers — motivations, expectations, problems, habits, goals; name, gender, age, income, education, location; in mobile also other apps used, device-checking frequency, other devices. Use them to mimic real user behavior.',
        'MNEMONIC: a memory aid — each letter stands for a technique, method, or focal point. SFiDPOT: Structure (UI elements, order, call hierarchy), Function (features work per requirements), Input (all inputs available and processed — keyboard, sensors, camera), Data (stored incl. SD card, modified, added, deleted per requirements), Platform (OS functions per device settings, incl. store), Operations (normal user activities, e.g., moving between carrier networks and Wi-Fi), Time (time zones, time, dates).',
        'Mobile-specific mnemonic/heuristic: I SLICED UP FUN — Inputs, Store, Location, Interactions/interruptions, Communication, Ergonomics, Data, Usability, Platform, Function, User scenarios, Network.'
      ],
      examInsights: [
        'Q30 KEY — "Test inputs for 1 hour, functions for 1 hour, interrupts for 1 hour…" = SESSION-BASED TEST MANAGEMENT (time-boxed sessions with a defined focus). Not risk-based (no risk info, equal time boxes), not delegation, not performance management.'
      ]
    },
    {
      id: '3.3.2',
      title: 'Heuristics',
      level: 'K2',
      type: 'skim',
      summary: "A heuristic is a 'rule of thumb' approach to problem solving, learning, and discovery employing a practical method — not guaranteed optimal or perfect, but sufficient for the immediate goals. Many heuristics exist for mobile testing. Most mnemonics can be used as heuristics, but not every heuristic is a mnemonic.",
      examInsights: [
        'KEY — Remember the direction: mnemonics ⊂ heuristics (usable as), but heuristics need not be mnemonics.'
      ]
    },
    {
      id: '3.3.3',
      title: 'Tours',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Tours enable exploratory testing of an application from a specific point of view and focus — understanding how the app works, creating workflow models. Tours are an effective method for FIELD TESTING.',
        'Landmark tour analogy: historical quarter = legacy code; business district rush hour = business logic at app startup/shutdown; tourist quarter = parts used by newcomers; hotel quarter = parts only active in sleep mode.',
        'Key tours and what they cover: Supermodel — look and feel, usability. Landmark — most important features. Sabotage — robustness. Feature — new features. Scenario — whole workflow with user stories. Connectivity — Wi-Fi, GSM. Location — correct language, dates, numbers. Light — visibility in lighting conditions (dark, outside, red light). Low battery — data losses under low energy.',
        'Further tours: Gesture (use all gestures), Orientation (change orientation), Change your mind (go back), Motion (various movements), Location (move around), Connectivity (change connection types/locations by moving), Comparison (compare device types), Consistency (screens, GUI).',
        'Combining session-based testing with tours, heuristics, and mnemonics enhances mobile testing effectiveness.'
      ],
      examInsights: [
        'Q31 KEY — An effective method for field testing = "using tours as a kind of exploratory test technique". Device labs and cloud approaches are not field testing; automated browser tools do not fit exploratory field testing. (Note: the official answer-key table lists c, but the official per-option rationale and the syllabus both support a — tours.)'
      ]
    },
    {
      id: '3.3.4',
      title: 'Session-Based Test Management (SBTM)',
      level: 'K1',
      type: 'skim',
      summary: "SBTM manages exploratory testing in a time-boxed fashion. A session consists of three tasks: session setup; test design and execution; issue investigation and reporting. SBTM typically uses a SESSION SHEET containing a test charter with test objectives, and documents the executed test activities. Exploratory testing is an experience-based technique that works well for mobile applications.",
      examInsights: [
        'KEY — Session = time-boxed; session sheet = charter + record. Q30 (personas section) tests recognizing SBTM from a scenario.'
      ]
    },
    {
      id: '3.4.1',
      title: 'Test Process',
      level: 'K2',
      type: 'skim',
      summary: "The ISTQB test process applies to mobile testing, with mobile-specific additions per activity group. Test planning: device combinations, emulators/simulators in the environment, mobile challenges, mobile-specific test types. Analysis and design: app store approval testing, field testing, device compatibility, kinds of labs. Implementation and execution: field testing, download/installability post-release testing, experience-based techniques, tests based on platform UI and store guidelines — run them yourself BEFORE handing over to platform providers to avoid rejection.",
      examInsights: [
        'KEY — Map mobile activities to the CTFL process groups; store-guideline tests run before submission (ties to Q29).'
      ]
    },
    {
      id: '3.4.2',
      title: 'Test Approaches',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Mobile testing includes developer AND tester activities. The depth per test level (component, integration, system, field test, store approval, post-release, UAT) depends on app architecture, complexity, and intended audience.',
        'Development platforms provide tools per level: simulators/emulators at COMPONENT level (leveraging platform frameworks and instrumentation APIs) and at SYSTEM level when real devices are unavailable — functionality, limited usability, UI. Early implementation verifies device setup and prerequisites on time.',
        'Mobile apps commonly FLIP THE TEST PYRAMID: many manual tests (usability, field testing), because market/device fragmentation, usability expectations, and variable usage scenarios can only be tested manually.'
      ],
      examInsights: [
        'Q32 KEY — The Test Pyramid flips because "mobile apps require a lot of manual testing, like usability or field testing" — NOT because unit tests are complicated, tools are missing, or apps are monolithic.'
      ]
    }
  ]
};
