// CT-MAT (2019) — Chapter 3 learn content, authored from the ISTQB Mobile Application Testing Syllabus v2019 (2019-05-03).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "How the classic test types apply in the mobile-specific context — installability, stress, security, performance, usability, database, globalization/localization, and accessibility — plus the two ADDITIONAL mobile test levels (field testing, application store approval and post-release testing), the experience-based toolkit (personas, mnemonics, heuristics, tours, session-based test management), and how the ISTQB test process and approaches adapt to mobile.",
  keywords: [
    "abnormal end", "accessibility", "code injection", "exploratory testing", "field testing",
    "heuristic", "installability", "performance efficiency", "performance testing",
    "post-release testing", "security testing", "session-based test management", "stress testing",
    "test level", "test process", "test pyramid", "tour", "usability lab", "usability testing",
  ],
  objectives: [
    { id: "MAT-3.1.1", level: "K3", text: "Prepare installability tests for mobile apps" },
    { id: "MAT-3.1.2", level: "K3", text: "Prepare stress tests for mobile apps" },
    { id: "MAT-3.1.3", level: "K2", text: "Give examples of security issues related to mobile apps" },
    { id: "MAT-3.1.4", level: "K1", text: "Recall time and resource behavior considerations for mobile apps" },
    { id: "MAT-3.1.5", level: "K3", text: "Prepare usability tests for mobile apps" },
    { id: "MAT-3.1.6", level: "K1", text: "Recognize the type of tests required for database testing of mobile apps" },
    { id: "MAT-3.1.7", level: "K2", text: "Summarize the tests required for internationalization (globalization) and localization testing of mobile apps" },
    { id: "MAT-3.1.8", level: "K2", text: "Summarize the need for accessibility testing in mobile application testing" },
    { id: "MAT-3.2.1", level: "K2", text: "Describe the additional test levels, such as field testing, and the associated extra activities required for effective mobile application testing" },
    { id: "MAT-3.2.2", level: "K2", text: "Describe the tests required for carrying out application store approval for publishing apps" },
    { id: "MAT-3.3.1", level: "K1", text: "Recall session-based test management, personas, and mnemonics in the context of exploratory mobile testing" },
    { id: "MAT-3.3.2", level: "K2", text: "Describe the usage of tours and heuristics as exploratory techniques for mobile application testing" },
    { id: "MAT-3.3.3", level: "K3", text: "Make use of a mobile specific tour (such as the Feature tour) to test a mobile app" },
    { id: "MAT-3.4.1", level: "K2", text: "Match the test process, as described in the CTFL syllabus, to the needs of mobile application testing" },
    { id: "MAT-3.4.2", level: "K2", text: "Describe the approaches to testing at each test level, specific to mobile application testing" },
  ],
  sections: {
    "3.1.1": {
      objective: "MAT-3.1.1",
      body: [
        { type: "list", intro: "Installability testing focuses on installation, update, and de-installation via three approaches:", items: [
          "Application stores — Google Play, Apple App Store; enterprise-app users install via a link or a distribution service (HockeyApp, App Center)",
          "Sideloading — copying the app to the device and installing it from the file (where the OS allows)",
          "Desktop applications — Apple iTunes (iOS) or Android App Installer: download in the desktop app, install via cable; most also de-install",
        ]},
        { type: "p", text: "Installation methods: OTA (over-the-air) via Wi-Fi or cellular data, or via data cable." },
        { type: "list", intro: "Test conditions to consider:", items: [
          "Installation, de-installation, and upgrade on internal AND external memory (if supported)",
          "Re-installation when 'retain app data' WAS chosen at the previous de-installation — and when it was NOT",
          "Cancelling or interrupting installation/de-installation (shut the device down mid-process, disconnect from the internet)",
          "Resuming interrupted installation, de-installation, and upgrade",
          "Permissions-related testing — e.g., the app requests address-book access and the user denies it: is there a corresponding message?",
          "Updating the app and verifying no data is lost",
        ]},
        { type: "p", text: "Some apps require jailbroken (iOS) or rooted (Android) devices, giving administrative rights over the device. Platform providers do not support jailbreaking/rooting (possible legal consequences); an app not requiring it may not need testing on such devices." },
        { type: "example", title: "Q22 (K3)", text: "Android installability: running 'App-Installer.exe' is invalid — .exe is a Windows-only format. PC + install commands (ADB), Google Play Beta Program, and SD-card sideloading are valid Android installation tests." },
      ],
    },
    "3.1.2": {
      objective: "MAT-3.1.2",
      body: [
        { type: "p", text: "Stress testing determines the app's performance efficiency beyond normal load — targeted only at the MOBILE DEVICE in this syllabus (backend stress belongs to the Performance Testing syllabus)." },
        { type: "list", intro: "Test conditions:", items: [
          "High CPU usage", "Out-of-memory", "Low disk space", "Battery stress", "Failures", "Poor bandwidth",
          "Very high number of user interactions (real-world network conditions may need simulating)",
        ]},
        { type: "p", text: "Stressful conditions can be created with tools such as Monkey — a command-line tool running over the ADB shell — or manually, using big files or other apps with high CPU/memory consumption." },
      ],
    },
    "3.1.3": {
      objective: "MAT-3.1.3",
      body: [
        { type: "p", text: "Principal security issues for mobile apps: access to SENSITIVE DATA on the device, and UNENCRYPTED information transfer or unsafe storage. (Security testing has its own specialist syllabus.)" },
        { type: "list", intro: "Test conditions:", items: [
          "Testing inputs for code injection and overflow",
          "Encryption of transferred data",
          "Encryption of locally stored data",
          "Deletion of temporary data after use or after an abnormal end",
          "Clearing text in password fields",
        ]},
        { type: "p", text: "The OWASP top-10 mobile-related vulnerabilities should also be explored." },
        { type: "note", title: "Q23 (select TWO)", text: "Security issues = code injection via input fields + unencrypted data transfer. Non-responding apps, rendering issues, and overlapping elements are NOT security concerns." },
      ],
    },
    "3.1.4": {
      objective: "MAT-3.1.4",
      body: [
        { type: "p", text: "If a freshly installed app does not appear fast enough (roughly ≤ 3 seconds), it may get de-installed in favor of an alternative. Time and resource consumption are important success factors; performance testing measures them. Performance efficiency is tested on the device itself, in addition to interaction with the backend and other devices; whole-system performance testing follows the test strategy and is not mobile-specific." },
        { type: "p", text: "The app performance test should contain CHRONOMETRY for the most important workflows — for an online-banking app: 'Login', 'Change address', 'Bank transfer with PIN and TAN' — compared with similar apps. Besides chronometric measures, consider PERCEIVED performance: UX has a huge impact on how long users will wait for a function to complete." },
        { type: "note", title: "Q24 anchor", text: "Exact time-behavior measurement needs an INSTRUMENTED BUILD — it differentiates app vs backend vs network time; a stopwatch cannot handle milliseconds; emulators never give correct app performance; load generators measure the server." },
      ],
    },
    "3.1.5": {
      objective: "MAT-3.1.5",
      body: [
        { type: "p", text: "Usability is critical: data shows large numbers of users de-install apps within minutes over poor usability or performance. UX design should consider the platform's look and feel — non-conformance with platform expectations has a strong negative impact, so the tester must know the platform's look and feel." },
        { type: "p", text: "Usability tests use available heuristics and test tours; personas are a helpful support; a usability lab can be used if required. Usability findings are mostly FINDINGS, not defects — the tester must be able to explain them to the team, product owner, or similar stakeholders." },
        { type: "list", intro: "A satisfactorily usable app:", items: [
          "Is self-explanatory and intuitive",
          "Allows user mistakes",
          "Is consistent in wording and behavior",
          "Abides by the design guidelines of the platforms",
          "Makes needed information visible and reachable in each screen size and type",
        ]},
        { type: "note", title: "Q25 trap", text: "Activating the device's voice-over feature belongs to ACCESSIBILITY testing, not usability testing — the classic 'step you will NOT perform'." },
      ],
    },
    "3.1.6": {
      objective: "MAT-3.1.6",
      body: [
        { type: "p", text: "Many apps store data locally using flat files or databases." },
        { type: "list", intro: "Test conditions for database testing:", items: [
          "Validation of data storage issues: synchronization, upload conflicts, data security, constraints on the data, CRUD (Create/Read/Update/Delete) functionality, and search",
          "Data integration testing for data provided by the device (contacts) or by third-party apps (pictures, videos, messages)",
          "Performance of storing the data on the device",
        ]},
        { type: "note", title: "Q26 anchor", text: "CRUD = Create, Read, Update, Delete." },
      ],
    },
    "3.1.7": {
      objective: "MAT-3.1.7",
      body: [
        { type: "p", text: "Internationalization (I18N)/globalization testing covers different locations, formats for dates, numbers, and currency, and replacing actual strings with PSEUDO-STRINGS. Localization (L10N) testing covers localized strings, images, and workflows for a particular region." },
        { type: "p", text: "Russian and German words can be much longer than in other languages; with varied and limited screen sizes, translated strings can cause problems — check as standard globalization/localization tests. A very important check is the date format used: YEAR–MONTH–DAY vs DAY–MONTH–YEAR." },
        { type: "note", title: "Q27 anchor", text: "During I18N testing you see pseudo-strings PARTLY, and English strings elsewhere → HARD-CODED English strings: those texts are not sourced from the string resource." },
      ],
    },
    "3.1.8": {
      objective: "MAT-3.1.8",
      body: [
        { type: "p", text: "Accessibility testing determines the ease by which users with disabilities can use a component or system. For mobile apps: use the device accessibility settings and test the app for each setting. Accessibility guidelines are available from platform vendors — Google and Apple both publish them — and the W3C has published a mobile-web accessibility guide. Taking feedback from people who require accessibility is also helpful." },
      ],
    },
    "3.2.1": {
      objective: "MAT-3.2.1",
      body: [
        { type: "p", text: "Beyond the usual CTFL test levels (component through acceptance), mobile testing needs ADDITIONAL levels. FIELD TESTING ensures the app functions correctly in the expected real-user scenario: various networks and communication technologies (Wi-Fi, cellular), mobile towers, and Wi-Fi/cellular-data switching while the app is in use. Test with varying download speeds and signal strengths, including handling of blind spots." },
        { type: "p", text: "Field testing requires careful planning: identify everything needed — appropriate device types, Wi-Fi, cellular data plans on various carriers, access to various modes of transport for adequate coverage. Routes, transport modes, and the time of day must be scheduled. Usability should also be covered during field testing, incorporating environmental factors such as temperature and other usage-scenario conditions." },
      ],
    },
    "3.2.2": {
      objective: "MAT-3.2.2",
      body: [
        { type: "p", text: "Before an app is sent for publishing, checklist-based tests must pass to assure application store approval; for an upgrade, run upgrade-related tests too. Checklists are typically based on guidelines: OS-specific guidelines, UI design guidelines, and guidelines for using store-provided libraries and APIs." },
        { type: "p", text: "The approval process can take time after submission; issues found during approval require a new submission and extra time — consider this carefully during project planning and testing." },
        { type: "p", text: "A further test level is POST-RELEASE testing: downloading and installing the application from the application store and verifying it works like the tested build." },
        { type: "note", title: "Q29 anchor", text: "App just released to the store → NEXT activity is post-release testing. Store-approval testing happens BEFORE submission; archiving testware and test closure come afterwards." },
      ],
    },
    "3.3.1": {
      objective: "MAT-3.3.1",
      body: [
        { type: "p", text: "PERSONAS are fictional characters representing real customers — with motivations, expectations, problems, habits, and goals. A persona can have a name, gender, age, income, education, and location; in a mobile context also the other apps they use, how often they check their device per hour, other devices, and personal traits. Use them when real user behavior needs to be mimicked." },
        { type: "p", text: "A MNEMONIC is a memory aid: every letter stands for a technique, testing method, or focal point." },
        { type: "table", headers: ["SFiDPOT letter", "Focus"], rows: [
          ["S — Structure", "UI elements, other application elements, their order and call hierarchy"],
          ["F — Function", "Desired features are working, available, functioning per requirements"],
          ["i — Input", "All required inputs available and processed correctly: keyboard, sensors, camera"],
          ["D — Data", "Data stored (also on SD card), modified, added, deleted as required"],
          ["P — Platform", "OS-specific functions available per device settings, including the store"],
          ["O — Operations", "Normal user activities, e.g., moving between carrier networks and Wi-Fi"],
          ["T — Time", "Handling and display of time zones, time, and dates"],
        ]},
        { type: "p", text: "A mnemonic and heuristic specifically for mobile is I SLICED UP FUN: Inputs, Store, Location, Interactions and interruptions, Communication, Ergonomics, Data, Usability, Platform, Function, User scenarios, Network." },
      ],
    },
    "3.3.2": {
      objective: "MAT-3.3.2",
      body: [
        { type: "p", text: "A heuristic approach is a 'rule of thumb' approach to problem solving, learning, and discovery employing a practical method — not guaranteed to be optimal or perfect, but sufficient for the immediate goals. Many heuristics exist for mobile testing. Most mnemonics can be used as heuristics, but not every heuristic is a mnemonic." },
      ],
    },
    "3.3.3": {
      objective: "MAT-3.3.3",
      body: [
        { type: "p", text: "Tours enable exploratory testing of an application from a specific point of view and focus. They help understand how an application works and create workflow models — and they provide an effective method for FIELD TESTING." },
        { type: "p", text: "In the Landmark tour, the user mimics a tourist visiting well-known city landmarks: the historical quarter = legacy code; the business district at rush hour = the app's business logic at startup and shutdown; the tourist quarter = parts used by newcomers; the hotel quarter = parts only active in sleep mode." },
        { type: "table", headers: ["Tour", "Subject covered"], rows: [
          ["Supermodel", "Look and feel, usability"],
          ["Landmark", "The most important features in the app"],
          ["Sabotage", "Robustness"],
          ["Feature", "New features"],
          ["Scenario", "Whole workflow combined with user stories"],
          ["Connectivity", "Connectivity used: Wi-Fi, GSM"],
          ["Location", "Correct language, dates, numbers"],
          ["Light", "Visibility in different lighting (dark, outside, red light)"],
          ["Low battery", "Data losses caused by low energy levels"],
        ]},
        { type: "p", text: "Further tours: Gesture (use all gestures wherever possible), Orientation (change orientation), Change your mind (go back), Motion (various movements), Location (move around), Connectivity (change connection types/locations by moving), Comparison (compare with other device types), Consistency (screens, GUI). Combining session-based testing with tours, heuristics, and mnemonics enhances mobile testing effectiveness." },
        { type: "note", title: "Q31 anchor", text: "An effective method for field testing = using TOURS as an exploratory technique. (The official answer key table shows a different letter, but the official rationale and the syllabus text both confirm tours.)" },
      ],
    },
    "3.3.4": {
      objective: "MAT-3.3.1",
      body: [
        { type: "p", text: "Session-based test management (SBTM) manages exploratory testing in a time-boxed fashion. A session consists of three tasks: session setup; test design and execution; issue investigation and reporting." },
        { type: "p", text: "SBTM typically uses a SESSION SHEET containing a test charter that provides the test objectives; the sheet also documents the test execution activities carried out. Exploratory testing is an experience-based technique that can be very effective for mobile applications." },
        { type: "example", title: "Q30 pattern", text: "'Test inputs for 1 hour, functions for 1 hour, interrupts for 1 hour…' — that is SBTM: time-boxed sessions, each with a defined focus. Not risk-based management (equal time-boxes, no risk data)." },
      ],
    },
    "3.4.1": {
      objective: "MAT-3.4.1",
      body: [
        { type: "p", text: "The main activities of the ISTQB test process apply to mobile application testing, with mobile-specific additions:" },
        { type: "table", headers: ["Test process activity group", "Typical mobile considerations"], rows: [
          ["Test planning", "Device combinations to test; emulators and simulators in the test environment; special mobile challenges; mobile-specific test types"],
          ["Analysis and design", "App store approval testing; field testing; device compatibility; kind of labs to use; mobile-specific test types"],
          ["Implementation and execution", "Field testing; download and installability post-release testing; experience-based techniques"],
          ["Implementation and execution (guidelines)", "Tests based on platform UI guidelines and application-store guidelines — platform providers run these for store approval, so run them yourself BEFORE handing over, to avoid rejection"],
        ]},
      ],
    },
    "3.4.2": {
      objective: "MAT-3.4.2",
      body: [
        { type: "p", text: "Mobile application testing includes activities for developers AND testers. Determining the appropriate depth of testing per test level — component, integration, system, field test, application store approval, post-release, and user acceptance testing — is important for good quality. The depth depends on app architecture, app complexity, and the intended user audience." },
        { type: "p", text: "Development platforms provide tools supporting testing at various levels: a simulator and/or emulator can be used at the COMPONENT level to exploit platform frameworks and instrumentation APIs, and at the SYSTEM level when actual devices are unavailable — enabling functionality, limited usability, and UI testing. Early implementation also verifies that devices are set up correctly and execution prerequisites will be met on time." },
        { type: "note", title: "The flipped Test Pyramid", text: "It is very common for mobile apps to FLIP the Test Pyramid — many manual tests. Market and device fragmentation, usability expectations, and variable usage scenarios create test conditions that can only be tested manually (usability, field testing)." },
      ],
    },
  },
};
