// CT-MAT (2019) — Chapter 1: Mobile World - Business and Technology Drivers
// summary/deepPoints from syllabus v2019; examInsights derived from Sample Exam A v1.1
export default {
  id: 1,
  title: 'Mobile World — Business and Technology Drivers',
  time: '175 min',
  color: '#4F46E5',
  bg: '#EEF2FF',
  overview: "The context chapter — 8 of the 40 exam questions. Learn the five business models, the five device types, the three app types (native/web/hybrid) with their trade-offs, and the architecture vocabulary (thin/fat client, tiers, connection modes, synchronization). The K3 objective here is applying market specifics to a TEST STRATEGY (1.6) — know the single-platform / multi-platform / maximum-coverage approaches cold.",
  sections: [
    {
      id: '1.1',
      title: 'Mobile Analytics Data',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'A mobile tester should know: the business implications of platform distribution, application downloads per platform, quantity and distribution of OS versions, market distribution of device types (varying by geography), differing screen sizes and resolutions, the various input methods, and camera types.',
        'Sources are free and commercial: StatCounter GlobalStats, the OS vendors themselves, third-party sources.',
        'The analytics data is used to SELECT A DEVICE PORTFOLIO for test execution appropriate for the target market — tests run over the portfolio according to each device\'s importance. Device-specific features may also drive device-specific test design (e.g., a heart-beat sensor needs special test cases).'
      ],
      examInsights: [
        'Q1 KEY — Mobile analytics data is used "to select the device portfolio and prioritization for test execution". NOT to define the user base, NOT to derive test levels/cases/data (those come from the application), NOT to pick the app type or development model.'
      ]
    },
    {
      id: '1.2',
      title: 'Business Models for Mobile Apps',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Five monetization models (+ in-app purchases on top): FREEMIUM — free, pay for additional features; must be attractive free AND offer features worth paying for. ADVERTISEMENT-BASED — ads shown during use; works best with long usage periods; ads must be prominent without hiding essential parts or annoying users.',
        'TRANSACTION-BASED — charge per transaction (flat fee or percentage); suits a limited set of apps, usually business/financial (mobile wallets). FEE-BASED (paid) — pay to download/install; needs outstanding features/usability given free alternatives. FREE and ENTERPRISE apps — no charge; enterprise apps serve internal organizational use and drive revenue by directing users to the organization\'s services (banks, e-commerce).',
        'The tester should keep the business model in mind while testing — e.g., is the application behavior a good fit for that model?'
      ],
      examInsights: [
        'Q2 KEY — A free app aggregating publicly available news = ADVERTISEMENT-BASED (users will not pay for public data, but tolerate ads as on news sites). Not freemium (no paid extras hinted), not paid, not transaction-based.'
      ]
    },
    {
      id: '1.3',
      title: 'Mobile Device Types',
      level: 'K1',
      type: 'skim',
      summary: "Five device classes: BASIC PHONES — calls and SMS only, very few built-in apps; no app installation or browsing. FEATURE PHONES — limited support for apps and installation; internet via a built-in browser; may have extra hardware like cameras. SMARTPHONES — several sensors; OS supports app installation, multimedia, browsing. TABLETS — like smartphones but physically larger; larger display, often longer battery life. COMPANION DEVICES and some IoT appliances — computer-powered devices used together with a smartphone/tablet to extend functionality or give more convenient data access; WEARABLES (watches, fitness bands) can be companions or work independently.",
      examInsights: [
        'Q3 KEY — Feature phones "provide limited support for app installation" — they are NOT bigger smartphones, NOT next-generation smartphones, and do not come loaded with GPS and sensors.'
      ]
    },
    {
      id: '1.4',
      title: 'Types of Mobile Applications',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'NATIVE apps: developed with platform-specific SDKs, tools, sensors, features; distributed via supplier stores; may need testing on all supported devices. Best performance, full platform-feature use, platform-conformant look. Higher development cost; multi-platform and many-device installation/testing challenges.',
        'BROWSER-BASED (web) apps: accessed through a mobile browser; standard web technologies → easy multi-platform support, lower cost. Four creation styles: m(dot) sites (mobile versions, facebook.com → m.facebook.com), responsive web apps (design adjusts to form factor/viewport), adaptive web apps (predefined sizes with adjustable features), progressive web apps (home-screen shortcuts that look native, sometimes work offline). Limits: fewer features, limited access to native APIs and sensors; no installability testing needed, but browser compatibility testing IS required.',
        'HYBRID apps: native wrapper containing a web view. Downloaded from stores, can access all device features, easy to develop/update (server-side content updates without reinstalling). Weak points: performance issues from the wrapper, divergences from platform look and feel.',
        'Native and hybrid apps are installed on the device — available without internet; browser-based apps require internet access. Distribution: pre-installed, Apple App Store, Google Play, enterprise app stores (inside the enterprise network), third-party markets.',
        'Test parameters per app type: device types supported, sensors and device features used, availability under various network conditions, installability, compatibility, performance efficiency, usability.'
      ],
      examInsights: [
        'Q4 KEY — Android game needing precise use of many device features (camera, GPS, orientation) = NATIVE app. Hybrid adds a translation layer; web apps cannot utilize device features as well; "desktop app" is a distractor (Android is a mobile OS).'
      ]
    },
    {
      id: '1.5',
      title: 'Mobile Application Architecture',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Architecture considerations: target audience, app type, platform support, connectivity needs, data storage needs, connections to other devices/IoT.',
        'Client side: THIN client — no device-customized code, minimal OS-feature use, browser front-end + JavaScript. THICK/FAT client — multiple layers of app code, uses mobile OS features; typically native or hybrid.',
        'Server side: SINGLE-TIER — monolithic, all servers on one machine; less scalable, harder to secure. MULTI-TIER — components spread across units (two-tier: separate web + database servers; three-tier adds an application server); separation of responsibilities, better flexibility/scalability/security, but more expensive to develop, manage, host.',
        'Connection modes for apps: NEVER-CONNECTED (offline, e.g., calculator), ALWAYS-CONNECTED (permanent connection required — all mobile web apps), PARTIALLY-CONNECTED (connection for data transfer, long offline operation).',
        'Synchronization: CONTINUOUS mode (data transferred as soon as submitted) vs STORE-AND-FORWARD (data stored locally, forwarded when connectivity returns). Transfer: SYNCHRONOUS (caller waits for completion) vs ASYNCHRONOUS (server returns immediately, processes in background, calls back — more user control but handshake complexity).'
      ],
      examInsights: [
        'Q5 (select TWO) — Registration app whose output ships by physical mail: NATIVE APP (iOS, works offline) + STORE-AND-FORWARD (register offline, forward later). Always-connected/cellular data are unnecessary (shipping delay exists anyway); a web app would demand constant connectivity.'
      ]
    },
    {
      id: '1.6',
      title: 'Test Strategy for Mobile Apps',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'The strategy must take in all chapter-1 parameters plus mobile-specific risks/challenges: device variety with device-specific defects, device availability (in-house or external labs), new technologies/devices/platforms mid-lifecycle, install/upgrade via various channels (preserving app data and preferences), platform issues, network coverage globally, testing across service-provider networks, and emulator/simulator vs real-device use per test level.',
        'Typical strategy decisions: use emulators/simulators in EARLY development stages, real devices in LATER stages (some test types cannot run on emulators).',
        'Device-count approaches: SINGLE PLATFORM — one device type, one OS version, one carrier, one network type. MULTI-PLATFORM — representative selection used by the majority of target-market customers, based on mobile traffic/analytics. MAXIMUM COVERAGE — all OS versions, devices, manufacturers, carriers, networks = exhaustive testing, usually not economically viable.',
        'When devices/networks/conditions are unavailable, use external resources: remote device access services (web access to devices you do not own), crowd testing services (huge volunteer group + their devices), personal networks (friends/colleagues), bug hunting (gamified testing event with company or public volunteers).'
      ],
      examInsights: [
        'Q6 (K3) — All users on iPhone + low-risk app → SINGLE PLATFORM strategy. Remote device access adds nothing for a single-platform base; maximum coverage contradicts low risk; simulators alone are never sufficient.'
      ]
    },
    {
      id: '1.7',
      title: 'Challenges of Mobile Application Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Typical challenges: multiple platforms and device fragmentation (OS types/versions, screen sizes, display quality); hardware differences (sensor variety, hard-to-simulate constrained CPU/RAM); variety of development tools; differing UI design and UX expectations per platform; multiple network types and providers; resource-starved devices; various distribution channels; diverse users and user groups; various app types and connection methods.',
        'Plus: HIGH FEEDBACK VISIBILITY (bugs with high user impact quickly become public store reviews); market place publishing needs approval cycles from store owners; newly launched devices may be unavailable → emulators/simulators.',
        'Impact: huge combinations to test; many devices → cost; backward compatibility with older platform versions; new OS features each release; platform guidelines to follow; limited CPU/memory/storage; varying bandwidth and jitter; upload/download speeds varying by data plan.',
        'Examples: each new hardware sensor may require extra backward-compatibility testing; caching/prefetching handles varying network conditions but many open connections hit server-side performance since apps keep users logged in.'
      ],
      examInsights: [
        'Q7 TRAP (NOT-question) — "Unknown command parameters for application startup" is NOT a mobile challenge: mobile apps start by tapping the GUI; users cannot pass startup parameters. The other options (diverse users, multiple networks/providers, unavailable new devices) are all real challenges.'
      ]
    },
    {
      id: '1.8',
      title: 'Risks in Mobile Application Testing',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Challenges appearing alone or combined create product risks; the tester contributes to product risk analysis. Common risk analysis and mitigation methods from CTFL ch. 5.5 also apply.',
        'Mobile-specific risk → mitigation pairs: MARKET FRAGMENTATION → choose an appropriate device selection (test the most commonly used devices). COST OF SUPPORTING MULTIPLE PLATFORMS → analyze which platforms are actually used; drop out-of-scope ones. NEW TECHNOLOGIES/PLATFORMS/DEVICES → use pre-production versions. LACK OF DEVICE AVAILABILITY → remote device access services or crowd testing services. ON-THE-GO USAGE PATTERNS → field testing.'
      ],
      examInsights: [
        'Q8 KEY — Crowd testing mitigates "non-availability of important devices during testing" (the crowd owns many different devices). It does not fix stakeholder availability (project risk) or multi-platform support cost, and good store reviews are not a risk.'
      ]
    }
  ]
};
