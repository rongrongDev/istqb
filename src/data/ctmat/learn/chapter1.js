// CT-MAT (2019) — Chapter 1 learn content, authored from the ISTQB Mobile Application Testing Syllabus v2019 (2019-05-03).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Block types: p (paragraph), list ({intro?, items}), table ({headers, rows}),
// example ({title, text}), note ({title?, text}).

export default {
  intro:
    "This chapter sets the business and technology context every other chapter builds on: how mobile analytics data feeds the test strategy, the business models behind apps, the device and application types, the architecture options — and then the mobile-specific test strategy, challenges, and risks. Its single K3 objective is applying mobile-market characteristics when preparing a test strategy.",
  keywords: ["risk analysis", "risk mitigation", "risk-based testing", "test strategy"],
  objectives: [
    { id: "MAT-1.1.1", level: "K2", text: "Describe how available mobile analytics data can be used as input for the test strategy and the test plan" },
    { id: "MAT-1.2.1", level: "K2", text: "Distinguish between various business models for mobile applications" },
    { id: "MAT-1.3.1", level: "K1", text: "Recall different types of mobile devices" },
    { id: "MAT-1.4.1", level: "K2", text: "Distinguish between different types of mobile applications" },
    { id: "MAT-1.5.1", level: "K2", text: "Distinguish between general architecture types of mobile applications" },
    { id: "MAT-1.6.1", level: "K3", text: "Apply characteristics and specifics of the mobile market in preparing a test strategy" },
    { id: "MAT-1.7.1", level: "K2", text: "Give examples of the challenges associated with testing mobile applications" },
    { id: "MAT-1.8.1", level: "K2", text: "Describe how risks specific to mobile applications may be mitigated" },
  ],
  sections: {
    "1.1": {
      objective: "MAT-1.1.1",
      body: [
        { type: "p", text: "The mobile world has many stakeholders: manufacturers, platform providers, OS providers, market data providers, tool providers, and of course application developers and testers. To contribute effectively to test planning and test analysis, a mobile application tester should be familiar with: the business implications of platform distribution, application downloads per platform, the quantity and distribution of OS versions, market distribution of device types (including geographic variation), differing screen sizes and resolutions, the various input methods, and camera types." },
        { type: "p", text: "Several free and commercial information sources exist — StatCounter GlobalStats, the OS vendors themselves, and other third parties. The mobile analytics data is used to select a DEVICE PORTFOLIO for test execution appropriate for the target market; tests run over this portfolio according to each device's importance. Data about devices and special features can also drive device-specific test design — a device with a heart-beat sensor may need special test cases." },
        { type: "note", title: "Exam anchor", text: "Analytics data → device portfolio selection and prioritization for test execution. It does not define the user base, derive test cases, or choose the app type." },
      ],
    },
    "1.2": {
      objective: "MAT-1.2.1",
      body: [
        { type: "list", intro: "Models to monetize mobile applications (in-app purchases can be added to several of them):", items: [
          "FREEMIUM — the app is free, users pay for additional features. It must offer enough free features to be attractive while providing advanced features many users would pay for.",
          "ADVERTISEMENT-BASED — ads display while users interact with the app; most effective when the app is used for relatively long periods. UI designers must keep ads prominent without hiding essential parts or making users dislike the app.",
          "TRANSACTION-BASED — users pay per transaction (flat fee, percentage, or similar); suitable for a limited set of apps, usually business and financial apps such as mobile wallets.",
          "FEE-BASED (paid) — users pay to download and install. Choose deliberately: free/freemium alternatives exist for most app types, so buying probability rises only with outstanding features/usability or missing competition.",
          "FREE and ENTERPRISE — no charge. Enterprise apps are developed for internal use and interface to the organization's services (banks, e-commerce); revenue comes from directing users to those services, not the app itself.",
        ]},
        { type: "p", text: "Each model has advantages and disadvantages — keep the business model in mind while testing the application." },
        { type: "example", title: "Q2 pattern", text: "Free app showing publicly available news from user-selected sources: users won't pay for public data, so advertisement-based is the fitting model — users are used to ads on news sites." },
      ],
    },
    "1.3": {
      objective: "MAT-1.3.1",
      body: [
        { type: "table", headers: ["Device type", "Characteristics"], rows: [
          ["Basic phone", "Telephone and SMS only; very few built-in apps and games; no app installation or browsing"],
          ["Feature phone", "Limited support for apps and app installation; internet via built-in browser; possibly extra hardware such as cameras"],
          ["Smartphone", "Several sensors; OS supports app installation, multimedia, and browsing"],
          ["Tablet", "Similar to smartphones but physically larger; larger display, often longer battery life"],
          ["Companion devices / IoT", "Computer-powered devices used with a smartphone/tablet to extend functionality or access data conveniently; wearables (watches, fitness bands) can be companions or independent"],
        ]},
        { type: "p", text: "Each device type has specific features for particular needs — keep this in mind when testing." },
      ],
    },
    "1.4": {
      objective: "MAT-1.4.1",
      body: [
        { type: "p", text: "Three main application types — a business decision made before development starts, each with advantages and disadvantages." },
        { type: "p", text: "NATIVE applications are developed using platform-specific SDKs, development tools, sensors, and features, and are downloaded, installed, and updated from supplier stores. They generally give better performance, fully utilize platform features, and comply with platform expectations — but development cost is higher, and multiple platforms plus installation/testing on many devices add challenges." },
        { type: "list", intro: "BROWSER-BASED applications run in the mobile browser (standard web technologies → easy multi-platform support, lower cost). Four creation styles:", items: [
          "Mobile-specific site versions — 'm(dot)' sites: facebook.com redirects to m.facebook.com on a mobile browser.",
          "Responsive web apps — the design adjusts to form factor and screen size (view ports).",
          "Adaptive web apps — designs for predefined sizes; available features are often adjustable.",
          "Progressive web apps — home-screen shortcuts of specific pages that appear like native apps and sometimes work offline.",
        ]},
        { type: "p", text: "Mobile web apps are easier to develop and manage but may be less feature-rich, with limited access to native APIs and mobile sensors. Installability testing on devices is not needed — but browser compatibility testing IS required." },
        { type: "p", text: "HYBRID applications combine both: a native wrapper contains a web view running a web application inside a native app. Downloaded from stores, they can access all device features and are relatively easy to develop, update, and maintain without reinstalling. Weak points: performance issues from the wrapper and divergences from the platform's expected look and feel." },
        { type: "note", title: "Offline availability", text: "Native and hybrid apps are installed on the device and always available, even without internet. Browser-based applications require internet access. Distribution channels: pre-installed, Apple App Store, Google Play, enterprise app stores (inside the enterprise network), third-party markets." },
        { type: "list", intro: "Testing parameters per app type:", items: [
          "Different device types to be supported",
          "Sensor and device features to be used",
          "Availability under various network conditions",
          "Installability, compatibility, performance efficiency, and usability",
        ]},
      ],
    },
    "1.5": {
      objective: "MAT-1.5.1",
      body: [
        { type: "list", intro: "Architecture/design considerations: target audience, application type, platform support, connectivity needs, data storage needs, and connections to other devices including IoT. The decisions cover:", items: [
          "Client-side architecture — THIN client (no device-customized code, minimal OS-feature use, browser front-end + JavaScript) vs THICK/FAT client (multiple layers of app code, uses mobile OS features; typically native or hybrid).",
          "Server-side architecture — SINGLE-TIER (monolithic, all servers on one machine; less scalable, harder to secure) vs MULTI-TIER (components spread across units: two-tier = separate web and database servers; three-tier adds an application server; better separation, flexibility, scalability, security — but significantly more expensive to develop, manage, host).",
          "Connection type — Wi-Fi, cellular data (2G/3G/4G/5G), NFC, Bluetooth.",
          "Data synchronization — store-and-forward, push and pull, synchronous and asynchronous communications.",
        ]},
        { type: "list", intro: "Apps operate in one of three connection modes:", items: [
          "NEVER-CONNECTED — works offline, no connection needed (a simple calculator).",
          "ALWAYS-CONNECTED — permanent network connection required; all mobile web applications (some operate in a limited way when partially connected).",
          "PARTIALLY-CONNECTED — needs a connection for tasks like data transfer but operates long periods without one.",
        ]},
        { type: "p", text: "Synchronization modes: CONTINUOUS (data transferred as soon as submitted) and STORE-AND-FORWARD (data stored locally, transferred when connectivity is available). Data transfer approaches: SYNCHRONOUS (the calling function waits for completion) and ASYNCHRONOUS (the server function returns immediately, processes in the background, and calls back — more user control, but the handshake adds complexity around client/network availability at callback time)." },
        { type: "example", title: "Q5 pattern (select TWO)", text: "iOS registration app whose result ships by physical mail: choose NATIVE APP + STORE-AND-FORWARD. Users can register offline (mail delay exists anyway) — always-connected, cellular data, or a web app requiring constant connectivity would be over-engineering." },
      ],
    },
    "1.6": {
      objective: "MAT-1.6.1",
      body: [
        { type: "p", text: "Creating a mobile test strategy requires all the parameters of this chapter plus the risks and challenges. Typical risks: without device-proliferation data for a geography you cannot choose devices sustainably; without knowing the business model you cannot test whether app behavior fits it." },
        { type: "list", intro: "Mobile-specific risks and challenges the strategy must consider:", items: [
          "Device variety with device-specific defects on some of them",
          "Device availability in-house or via external test labs",
          "New technologies, devices and/or platforms introduced during the application lifecycle",
          "Installation and upgrade of the app via various channels, including preserving app data and preferences",
          "Platform issues that might impact the application",
          "Network coverage and its impact in a global context; testing on various service providers' networks",
          "Use of emulators, simulators and/or real devices for specific test levels and test types",
        ]},
        { type: "list", intro: "How the strategy responds:", items: [
          "Use emulators/simulators in EARLY development stages, real devices in LATER stages — some test types cannot run on emulators/simulators (see 4.3).",
          "SINGLE PLATFORM approach — reduce scope to one device type, one OS version, one carrier, one network type.",
          "MULTI-PLATFORM approach — a representative selection of devices and OS used by the majority of target-market customers, based on mobile traffic or other analytics.",
          "MAXIMUM COVERAGE approach — all OS versions, devices, manufacturers, carriers, network types: effectively exhaustive testing, usually not economically viable.",
          "For unavailable devices/networks/conditions: remote device access services (web access to devices you don't own), crowd testing services (huge volunteer group with their devices), personal networks (friends and colleagues), bug hunting (gamified testing event with company or public volunteers).",
        ]},
        { type: "example", title: "K3 scenario (Q6)", text: "Analytics show ALL users on iPhone and the app is low-risk → SINGLE PLATFORM strategy. Maximum coverage contradicts low risk; remote device access adds nothing for a one-platform base; never rely on simulators alone." },
      ],
    },
    "1.7": {
      objective: "MAT-1.7.1",
      body: [
        { type: "list", intro: "Typical mobile-world challenges (uncommon or uncritical in desktop/server software):", items: [
          "Multiple platforms and device fragmentation: OS types and versions, screen sizes, display quality",
          "Hardware differences: sensor variety; difficulty simulating constrained CPU and RAM",
          "Variety of software development tools required by the platforms",
          "Differences in UI design and UX expectations per platform",
          "Multiple network types and providers; resource-starved devices",
          "Various distribution channels; diverse users and user groups; various app types and connection methods",
          "High feedback visibility — high-impact bugs quickly become public feedback on market places",
          "Market place publishing — extra approval cycles by store owners (Google Play, Apple App Store)",
          "Unavailability of newly launched devices → use of emulators/simulators",
        ]},
        { type: "list", intro: "Impact of these challenges:", items: [
          "Large numbers of combinations and devices to test — cost",
          "Backward compatibility with older platform versions; new OS features every release; platform guidelines",
          "Resource-starved CPUs, limited memory and storage",
          "Varying bandwidth and jitter; upload/download speeds changing with data plans",
        ]},
        { type: "example", title: "Two syllabus examples", text: "Every new hardware sensor may require additional backward-compatibility testing. Caching/prefetching handle varying network conditions — but many open connections impact server-side performance because most apps keep the user logged in on the server." },
        { type: "note", title: "Q7 trap", text: "'Unknown command parameters for application startup' is NOT a mobile challenge — apps start by tapping the GUI; users cannot pass startup parameters." },
      ],
    },
    "1.8": {
      objective: "MAT-1.8.1",
      body: [
        { type: "p", text: "Challenges appearing in isolation or combination create additional product risks. The tester must be able to contribute to product risk analysis; common risk analysis and mitigation methods from CTFL chapter 5.5 also apply in the mobile context." },
        { type: "table", headers: ["Mobile-specific risk", "Possible mitigation"], rows: [
          ["Market fragmentation", "Choose an appropriate selection of devices for test execution — e.g., testing the most commonly used devices"],
          ["Cost of supporting multiple platforms", "Analyze which platforms are most used; avoid testing platforms no longer in scope"],
          ["Introduction of new technologies, platforms and devices", "Use pre-production versions of those technologies"],
          ["Lack of availability of devices for test execution", "Apply remote device access services or crowd testing services"],
          ["Risks from expected on-the-go usage patterns", "Apply appropriate testing approaches such as field testing"],
        ]},
        { type: "note", title: "Q8 anchor", text: "Crowd testing mitigates the non-availability of important devices during testing — the crowd brings many different real devices." },
      ],
    },
  },
};
