// CT-MAT (2019) — Chapter 4 learn content, authored from the ISTQB Mobile Application Testing Syllabus v2019 (2019-05-03).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The environment chapter: development platforms (IDEs), the SDK utilities that help testing, the emulator-versus-simulator distinction (the most-examined definition pair in the syllabus), and the two ways to set up a test lab — on-premise and remote — with their trade-offs.",
  keywords: ["emulator", "field testing", "proximity-based testing", "remote test lab", "simulator"],
  objectives: [
    { id: "MAT-4.1.1", level: "K1", text: "Recall the development environments used for mobile application development" },
    { id: "MAT-4.2.1", level: "K1", text: "Recall some of the common tools supplied as part of application development platforms" },
    { id: "MAT-4.3.1", level: "K2", text: "Understand the differences between emulators and simulators" },
    { id: "MAT-4.3.2", level: "K2", text: "Describe the use of emulators and simulators for mobile application testing" },
    { id: "MAT-4.4.1", level: "K2", text: "Distinguish between various approaches to set up a test lab" },
  ],
  sections: {
    "4.1": {
      objective: "MAT-4.1.1",
      body: [
        { type: "p", text: "Integrated development environments (IDEs) are available for the various mobile platforms, with tools for designing, coding, compiling, installing, de-installing, monitoring, emulating, logging, and testing apps. ANDROID STUDIO may be used for Android app development; XCODE for iOS app development. These differ from normal IDEs by their added mobile-platform support. Cross-platform development frameworks also exist, running on multiple platforms without requiring platform-specific coding." },
        { type: "note", title: "Q33 anchor", text: "iOS → Xcode; Android → Android Studio. Distractors pair the wrong IDE with the platform." },
      ],
    },
    "4.2": {
      objective: "MAT-4.2.1",
      body: [
        { type: "p", text: "Software development kits (SDKs) provide utilities helpful for developing and testing applications: taking screenshots, extracting logs, sending random events and notifications to the device, monitoring parameters such as memory and CPU utilization, and creating virtual devices." },
        { type: "p", text: "Examples: Android Virtual Device (AVD) Manager, Android Debug Bridge (ADB), and Android Device Monitor for Android; Instruments for iOS." },
        { type: "note", title: "Q34 trap", text: "Designing test cases is NOT an SDK utility — screenshots, random events, and virtual-device creation are." },
      ],
    },
    "4.3.1": {
      objective: "MAT-4.3.1",
      body: [
        { type: "p", text: "The terms are often used interchangeably — incorrectly. A SIMULATOR models the RUNTIME ENVIRONMENT: apps tested on a simulator are compiled into a dedicated version that works in the simulator but NOT on a real device, independent of the real OS. An EMULATOR models the HARDWARE and utilizes the same runtime environment as the physical hardware: apps deployed to an emulator are compiled into the ACTUAL BYTE-CODE that also runs on the real device." },
        { type: "p", text: "Both are very useful early in development — they integrate with development environments and allow quick deployment, testing, and monitoring. Simulators are sometimes used as replacements for real devices in testing, but this is even more limited than using emulators, because the simulator-tested application differs at byte-code level from the distributed application." },
        { type: "p", text: "Emulators reduce test-environment cost by replacing real devices for some testing — but an emulator cannot fully replace a device: it may behave differently from the device it mimics, and some features may be unsupported ((multi)touch, accelerometer, and others), partly due to limitations of the platform running the emulator." },
        { type: "example", title: "Q35 pattern", text: "Early client-server testing on one PC: install the SERVER SIMULATOR on the developer's PC and the mobile application on an AVD device EMULATOR. The emulator runs the app's real byte-code; simulating the server side suffices for basic functional suitability." },
      ],
    },
    "4.3.2": {
      objective: "MAT-4.3.2",
      body: [
        { type: "p", text: "Each mobile OS development environment typically bundles its own emulator and simulator; third-party ones are also available — use whichever suits the purpose. Usage: launch it, install the necessary app, and test as if on the actual device." },
        { type: "p", text: "Emulators/simulators usually allow setting usage parameters: network emulation at different speeds, signal strengths and packet losses, changing orientation, generating interrupts, and GPS location data. These settings are very useful because they can be difficult or costly to replicate with real devices — global GPS positions or specific signal strengths." },
        { type: "p", text: "Connecting for installation may require command-line tools such as the Android Debug Bridge (ADB), or connecting from within the IDE (Xcode, Android Studio)." },
      ],
    },
    "4.4": {
      objective: "MAT-4.4.1",
      body: [
        { type: "p", text: "ON-PREMISE LAB: all devices, emulators, and simulators are located on site. Select devices by rank in analytics, OS and versions, screen dimensions and density, availability and cost, special features, and importance to the target audience. Advantages: device availability for specific PROXIMITY-BASED testing and SENSOR-specific aspects such as battery, touch, and enhanced security. Challenges: potentially large budgets for procurement and maintenance, timely availability, and difficulty testing in different locations and environments." },
        { type: "list", intro: "REMOTE TEST LAB: important when devices or networks are not physically available on site. Remote device access (RDA) reaches devices hosted in the provider's data center over a network connection; evaluate each provider for compliance — especially security. Additional features some remote labs provide:", items: [
          "Dedicated physical device versions (e.g., a Samsung mobile devices lab)",
          "Generic devices for a particular operating system and version only",
          "Robotic arms performing touch and gesture operations",
          "VPN connections for device access",
          "Cellular connections with various network providers",
          "Automation tools and services",
        ]},
        { type: "p", text: "Remote-lab factors: slow device responsiveness and limited interaction options (multi-touch, gestures); cost-effective for sporadic use but generally more expensive for extended, wide-ranging use; on-demand platform availability versus obtaining missing devices locally; scalability as the project grows and shrinks. Sensor scenarios (NFC/Bluetooth, battery consumption) are often hard to test in the cloud — but the different geographic locations of remote labs help tests needing network and GPS connections. A test lab can use either approach or a combination, depending on the tests to perform." },
        { type: "example", title: "Q36 pattern", text: "Fingerprint + face recognition security features → ON-PREMISE lab: its main advantage is testing sensors, battery, and unique device-related features (especially manufacturer-specific hardware)." },
      ],
    },
  },
};
