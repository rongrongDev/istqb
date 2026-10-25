// CT-MAT (2019) — Chapter 4: Mobile Application Platforms, Tools and Environment
// summary/deepPoints from syllabus v2019; examInsights derived from Sample Exam A v1.1
export default {
  id: 4,
  title: 'Mobile Application Platforms, Tools and Environment',
  time: '80 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Short chapter, 4 of the 40 exam questions, easy points. Know the IDEs (Android Studio for Android, Xcode for iOS), the SDK utilities, and above all the EMULATOR vs SIMULATOR distinction — emulator mimics the HARDWARE and runs the real OS byte-code; simulator models the RUNTIME environment with a dedicated app build. Finish with on-premise vs remote test labs and when each wins.",
  sections: [
    {
      id: '4.1',
      title: 'Development Platforms for Mobile Applications',
      level: 'K1',
      type: 'skim',
      summary: "Integrated development environments (IDEs) exist per platform, with tools for designing, coding, compiling, installing, de-installing, monitoring, emulating, logging, and testing apps. ANDROID STUDIO is used for Android development; XCODE for iOS. They differ from normal IDEs through added mobile-platform support. Cross-platform development frameworks also exist — they run on multiple platforms and do not specifically require coding per platform.",
      examInsights: [
        'Q33 KEY — iOS developers use the XCODE IDE. Traps pair the wrong IDE with the platform (Visual Studio for iOS, "Universal Studio" for Android, Xcode for Android).'
      ]
    },
    {
      id: '4.2',
      title: 'Common Development Platform Tools',
      level: 'K1',
      type: 'skim',
      summary: "Software development kits (SDKs) provide utilities helpful for developing AND testing: taking screenshots, extracting logs, sending random events and notifications to the device, monitoring parameters such as memory and CPU utilization, and creating virtual devices. Examples: Android Virtual Device (AVD) Manager, Android Debug Bridge (ADB), Android Device Monitor for Android; Instruments for iOS.",
      examInsights: [
        'Q34 TRAP (NOT-question) — "Designing test cases" is NOT a typical SDK task. Screenshots, pushing random events, and creating virtual devices ARE listed SDK utilities.'
      ]
    },
    {
      id: '4.3.1',
      title: 'Overview of Emulators & Simulators',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'SIMULATOR: models the RUNTIME ENVIRONMENT. Apps tested on a simulator are compiled into a DEDICATED version that works in the simulator but NOT on a real device — independent of the real OS (e.g., the iOS simulator pretends to be iOS but is not).',
        'EMULATOR: models the HARDWARE and uses the SAME runtime environment as the physical hardware. Apps for an emulator are compiled into the ACTUAL BYTE-CODE that also runs on the real device (the Android emulator runs a real Android OS image).',
        'Both are very useful early in development — integrated with IDEs, quick deployment/testing/monitoring. Simulators as device replacements are MORE limited than emulators (byte-code differs from the distributed app). Emulators reduce test-environment cost, but cannot fully replace devices: behavior may differ, and some features may be unsupported ((multi)touch, accelerometer…) due to host-platform limitations.'
      ],
      examInsights: [
        'Q35 KEY — Early client-server test setup on one PC: SERVER SIMULATOR on the developer PC + the mobile application installed on an AVD device EMULATOR. The emulator runs the real app byte-code; the server side only needs simulating for basic functionality.',
        'MEMORY AID: EmulatOr = hardware + real OS byte-code. SimuLator = runtime Lookalike, dedicated build.'
      ]
    },
    {
      id: '4.3.2',
      title: 'Using Emulators and Simulators',
      level: 'K2',
      type: 'skim',
      summary: "Each mobile OS development environment bundles its own emulator/simulator; third-party ones exist too. Launch it, install the app, and test as if on a real device. Usage parameters can usually be set: network emulation at different speeds, signal strengths and packet losses, orientation changes, generating interrupts, GPS location data — very useful because such conditions are difficult or costly to replicate with real devices (global GPS positions, signal strengths). Connecting for installation may need command-line tools (ADB for Android) or the IDE (Xcode, Android Studio).",
      examInsights: [
        'KEY — Emulator/simulator settings shine where real devices are costly: GPS positions around the globe, poor signal, packet loss.'
      ]
    },
    {
      id: '4.4',
      title: 'Setting up a Test Lab',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'ON-PREMISE LAB: all devices, emulators, simulators on site. Device selection by rank in analytics, OS and versions, screen dimensions/density, availability and cost, special features, target-audience importance. Advantages: devices available for PROXIMITY-BASED testing and SENSOR-specific aspects — battery, touch, enhanced security. Challenges: large budgets, timely availability, testing in different locations/environments is hard.',
        'REMOTE TEST LAB: for devices/networks not physically available. Remote device access (RDA) reaches devices in the provider\'s data center; evaluate providers for compliance, especially SECURITY. Extra features can include dedicated physical device versions (e.g., a Samsung lab), generic devices per OS/version, robotic arms for touch/gestures, VPN connections, cellular connections with various providers, automation tools and services.',
        'Remote-lab factors: slow device responsiveness, limited interactions (multi-touch, gestures); cost-effective for sporadic use but pricier for extended wide use; on-demand availability and scalability as the project evolves. Sensor scenarios (NFC/Bluetooth, battery) are hard in the cloud; different geographic locations help network- and GPS-dependent tests.',
        'A test lab can combine both approaches depending on the tests to perform.'
      ],
      examInsights: [
        'Q36 KEY — Fingerprint + face recognition (unique device-related features) → ON-PREMISE lab: its main advantage is testing sensors, battery, and unique device features. Remote labs win on device variety, not sensor fidelity.'
      ]
    }
  ]
};
