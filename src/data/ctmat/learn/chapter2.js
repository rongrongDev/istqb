// CT-MAT (2019) — Chapter 2 learn content, authored from the ISTQB Mobile Application Testing Syllabus v2019 (2019-05-03).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The core testing chapter, organized in three layers: compatibility with device HARDWARE (features, displays, temperature, sensors, input methods, orientation, interrupts, permissions, power), app interactions with device SOFTWARE (notifications, quick-access links, OS preferences, app types, platform interoperability, co-existence), and CONNECTIVITY. Six of its objectives are K3 'prepare tests' — the exam gives scenarios and asks which test conditions apply.",
  keywords: [
    "co-existence", "compatibility", "connectivity", "cross-browser compatibility",
    "interoperability", "system under test (SUT)", "test type", "usability",
  ],
  objectives: [
    { id: "MAT-2.1.1", level: "K2", text: "Describe device-specific features and hardware which should be considered for testing" },
    { id: "MAT-2.1.2", level: "K3", text: "Prepare tests for the app's compatibility with screen sizes, aspect ratio, and screen density" },
    { id: "MAT-2.1.3", level: "K2", text: "Describe how tests can show the potential effects of device overheating on the system under test" },
    { id: "MAT-2.1.4", level: "K1", text: "Recall different test types for testing of the various input sensors used in mobile devices" },
    { id: "MAT-2.1.5", level: "K1", text: "Recall tests to be run for various input methods" },
    { id: "MAT-2.1.6", level: "K2", text: "Describe how tests can reveal user interface issues when changing screen orientation" },
    { id: "MAT-2.1.7", level: "K3", text: "Prepare tests for an app using typical mobile device interrupts" },
    { id: "MAT-2.1.8", level: "K3", text: "Prepare tests for changing the access permissions to the device features requested by the app" },
    { id: "MAT-2.1.9", level: "K3", text: "Prepare tests to verify the impact of an app on a device's power consumption and the impact of its power state on the app" },
    { id: "MAT-2.2.1", level: "K3", text: "Prepare tests for the handling of notifications by the system under test" },
    { id: "MAT-2.2.2", level: "K2", text: "Describe how tests can verify correct functionality of quick-access links" },
    { id: "MAT-2.2.3", level: "K3", text: "Prepare tests for the impact on an app of the user preference settings provided by an operating system" },
    { id: "MAT-2.2.4", level: "K2", text: "Distinguish between different tests required for native, web and hybrid applications" },
    { id: "MAT-2.2.5", level: "K1", text: "Recall tests required for apps which are available on multiple platforms or operating system versions" },
    { id: "MAT-2.2.6", level: "K1", text: "Recall tests required for co-existence and interoperability with other apps" },
    { id: "MAT-2.3.1", level: "K2", text: "Summarize the tests for connectivity testing, including those across networks, when using Bluetooth and when switching to flight mode" },
  ],
  sections: {
    "2.1.1": {
      objective: "MAT-2.1.1",
      body: [
        { type: "p", text: "Different device types with differing capabilities force compatibility testing on a large number of devices, requiring prioritization: use market data (section 1.1) to select the device portfolio most appropriate for the target market. Portfolio selection is a compromise between market coverage, cost, and risk." },
        { type: "list", intro: "Devices differ in features that must not interfere with the app:", items: [
          "Different methods for switching off, and different ways to navigate",
          "Hard and soft keyboards",
          "Hardware such as radio, USB, Bluetooth, cameras, speakers, microphone, and headphone access",
        ]},
        { type: "p", text: "Device features vary even between models of the same manufacturer, differentiate market segments, and change quickly (fingerprint sensors moved from high-end to mid-range over a few years). The tester needs a clear understanding of the devices and features users expect, builds the portfolio, and designs tests accordingly." },
        { type: "note", title: "Test both presence AND absence", text: "It is not enough to test that the app works with expected features — test that it still works when a feature is ABSENT. An app supporting front and rear cameras must not crash on a device with multiple, one, or no cameras." },
      ],
    },
    "2.1.2": {
      objective: "MAT-2.1.2",
      body: [
        { type: "p", text: "Displays vary in screen size, viewport size, aspect ratio, and resolution measured in pixels per inch (ppi) and dots per inch (dpi). Device fragmentation requires prioritization: create tests exercising the UI on devices with the screen sizes, resolutions, and aspect ratios most common in the target market." },
        { type: "list", intro: "Testing for different displays checks that:", items: [
          "The app scales all user interface elements according to current screen density and size",
          "User interface elements do not overlap",
          "Usability or touch issues do not occur",
          "There is no problematic shrinkage of images because of high dpi/ppi",
        ]},
      ],
    },
    "2.1.3": {
      objective: "MAT-2.1.3",
      body: [
        { type: "p", text: "Unlike desktop computers, mobile devices react to temperature increases. Overheating can be caused by battery charging, intense workload, apps running in the background, and continuous cellular data, Wi-Fi, or GPS use. The device protects itself by dropping CPU frequency, freeing memory, and turning off parts of the system — which can impact app functionality and must be considered when planning testing." },
        { type: "p", text: "Design tests that consume a lot of energy so heat is generated over a long uninterrupted period; the software under test must then show no unexpected behavior." },
        { type: "note", title: "Q10 trap", text: "Overheating can slow the app, stop features, and cause incorrect functionality — but it does NOT de-install the app." },
      ],
    },
    "2.1.4": {
      objective: "MAT-2.1.4",
      body: [
        { type: "p", text: "Mobile devices receive inputs from sensors: GPS, accelerometers, gyroscopes, 3-axis magnetometers, and sensors reacting to pressure, temperature, humidity, heartbeat, light, or touchless inputs." },
        { type: "list", intro: "Input-sensor testing checks:", items: [
          "The app works as intended for each available sensor — e.g., test various motion types such as circular motion and back-and-forth motion (as in walking)",
          "Features reacting to external lighting react correctly under various lighting conditions",
          "Sound inputs and outputs respond correctly with soft and hard volume buttons, microphones, wired and wireless speakers, and various ambient sound conditions",
          "Location position is accurate when switching GPS on/off, under different GPS signal quality, and when the app must fall back to Wi-Fi, cell tower location, or manual location entry",
        ]},
        { type: "note", title: "Q11 trap", text: "Screen size in landscape/portrait is NOT an input-sensor test — it belongs to display and orientation testing." },
      ],
    },
    "2.1.5": {
      objective: "MAT-2.1.5",
      body: [
        { type: "list", intro: "Testing for different input methods checks:", items: [
          "Soft keyboards — the app works with at least the major manufacturers' keyboards and widely used ones; the keyboard pops up by default with the appropriate layout and keys when required",
          "Gestures — placing one or more fingers is interpreted as the right gesture/command: press/touch, double touch, multi-touch, swipe, tap, double tap, drag, pinch open/close; each app screen responds correctly to appropriate gestures and IGNORES non-supported gestures or inputs",
          "Cameras — capture images and videos, scan barcodes, QR codes and documents, and measure distances; with front and back cameras the appropriate one turns on by default (video chat → front camera); test with the camera used and not used, and with only one or no camera present — especially if the app uses the specific missing camera",
        ]},
        { type: "note", title: "Q12 anchor", text: "Input methods only: swiping, double tapping, QR scanning, audio recording. Printing a screen, sending an SMS, or using a TV remote app are OUTPUT methods — classic distractors." },
      ],
    },
    "2.1.6": {
      objective: "MAT-2.1.6",
      body: [
        { type: "p", text: "Motion sensors detect orientation changes and trigger a switch between landscape and portrait modes with UI layout changes as necessary." },
        { type: "list", intro: "Tests after a change of screen orientation check:", items: [
          "Correct usability and functional behavior after switching to either portrait or landscape",
          "The app maintains its state",
          "Input data fields retain already captured data",
          "Output data fields display the same data while maintaining the current session",
        ]},
        { type: "p", text: "Do not focus on a single switch — rendering or state issues may not show after one change. Perform several uninterrupted switches between portrait and landscape, across various UI states, with and without data. The app must behave as expected, persisting state without loss or change of data." },
      ],
    },
    "2.1.7": {
      objective: "MAT-2.1.7",
      body: [
        { type: "p", text: "Common DEVICE interrupts: voice calls, messages, charger switched on, low memory, and other notifications. USER-INITIATED interrupts result from actions such as app switching or setting the device into standby while the app is running." },
        { type: "list", intro: "Tests for interrupts check:", items: [
          "The app handles all these interrupts correctly without negative impact on behavior",
          "The app continues functioning correctly, preserving state, data, and sessions regardless of which interrupt occurs",
          "With a blocking 'do-not-disturb' mode suppressing notifications, conditions are used correctly — including turning DND off after a long active period, when many notifications arrive at once",
          "Interrupts received DURING app usage have no negative impact — e.g., answering a phone call while using the app returns the user to the exact state at interrupt time",
        ]},
        { type: "example", title: "Q14 (K3)", text: "User-initiated interrupts = standby mode, accepting incoming voice calls, do-not-disturb mode. Low battery warnings and low memory notifications are device interrupts." },
      ],
    },
    "2.1.8": {
      objective: "MAT-2.1.8",
      body: [
        { type: "p", text: "Apps need access to folders (contacts, pictures) and sensors (camera, microphone). Access denied at installation or changed afterwards can impact app behavior." },
        { type: "list", intro: "Tests for access permissions check:", items: [
          "The app works with reduced permissions: it asks the user to grant them and does not fail in an unexplained manner",
          "Permissions are only requested for resources relevant to the app's functionality — no broad permissions for unrelated resources",
          "App functionality responds correctly if a permission is withdrawn or rejected during installation",
          "Any permission request issued by the app is correct and justified",
        ]},
        { type: "p", text: "The tester needs to know WHY the app needs each permission and how functionality should be impacted when it is withdrawn or rejected. Design tests both for rejecting permissions during installation and for granting permissions after installation." },
        { type: "example", title: "Q15 (K3)", text: "After an update, the camera can't be invoked to scan bills; the defect was fixed. The MOST important test now: ACCESS PERMISSION testing — missing/incorrect permissions are the plausible root cause. Installation clearly worked; nothing suggests performance or accessibility." },
      ],
    },
    "2.1.9": {
      objective: "MAT-2.1.9",
      body: [
        { type: "list", intro: "Tests for power consumption and state check:", items: [
          "Battery power state and drainage-related defects",
          "Data integrity under low power and dead battery conditions",
          "Power consumption while the app is active under heavy and low use",
          "Power consumption while the app is in the background",
        ]},
        { type: "p", text: "Plan these tests carefully: they run uninterrupted over an extended period — e.g., the device left unattended with the app in the background or foreground while unused. Tools such as log analyzers are needed to extract battery-drain patterns." },
      ],
    },
    "2.2.1": {
      objective: "MAT-2.2.1",
      body: [
        { type: "p", text: "The operating system displays notifications through various mechanisms — and sometimes delays or drops them to optimize power consumption." },
        { type: "list", intro: "Test conditions:", items: [
          "Correct handling of notifications received when the app is in the FOREGROUND or BACKGROUND, especially under low battery conditions",
          "If notifications allow direct interaction with app content (without opening the app), the interaction must be available from within the app later — a response given in the notification must be accessible in the app",
          "If a notification contains a deep link, the CORRESPONDING PAGE of the app must open — not the home screen",
        ]},
        { type: "example", title: "Q16 (K3)", text: "Fixed defect: delayed/missing breaking-news notifications. FUNCTIONAL validation = display correctness with the app in background + behavior under low battery + deep linking to the correct news page. Performance and usability tests are non-functional — excluded by the question." },
      ],
    },
    "2.2.2": {
      objective: "MAT-2.2.2",
      body: [
        { type: "p", text: "Quick-access links — app shortcuts in Android, Force-touch/3D-touch in iOS — perform a subset of the application functionality from the home screen without launching the entire app." },
        { type: "list", intro: "Test conditions:", items: [
          "Where features exist only on particular OS versions, the system under test behaves correctly when installed on versions that offer AND that do not offer such features",
          "Actions performed in quick-access links are reflected correctly in the app when opened",
        ]},
        { type: "note", title: "Q17 anchor", text: "Verifying quick-access links = verifying force-touch functionality on iOS. Bookmarks, hardware keys, and broken-link scanners are unrelated." },
      ],
    },
    "2.2.3": {
      objective: "MAT-2.2.3",
      body: [
        { type: "p", text: "Any preferences (settings) the operating system provides to users must be tested — it creates a negative experience when a preference is not respected. If the device is set to mute, the app should not play sounds." },
        { type: "list", intro: "Test conditions:", items: [
          "Users can amend typical preference options: sound, brightness, network, power save mode, date and time, time zone, languages, access type, and notifications",
          "The app adheres to the set preferences by behaving accordingly",
        ]},
      ],
    },
    "2.2.4": {
      objective: "MAT-2.2.4",
      body: [
        { type: "table", headers: ["App type", "Specific tests"], rows: [
          ["Native", "Device compatibility; utilization of device features"],
          ["Hybrid", "Interaction with native device features; potential performance issues from the abstraction layer; usability (look and feel) vs native apps on the platform"],
          ["Web", "Cross-browser compatibility on common mobile browsers; functionality unaffected by different JavaScript engines; utilization of OS features (date picker, appropriate keyboard); usability vs native apps"],
        ]},
        { type: "note", title: "Q18 trap", text: "Cross-browser testing does NOT apply to a native app — native apps do not run in browsers." },
      ],
    },
    "2.2.5": {
      objective: "MAT-2.2.5",
      body: [
        { type: "p", text: "Companies often support apps on multiple operating systems, and each mobile OS has its own limitations. Testers must know each platform's specifics so the app works as intended while conforming to the platform's look and feel." },
        { type: "list", intro: "Test conditions:", items: [
          "Handling of interrupts, notifications, and optimizations (e.g., energy saving) per platform",
          "Correct functionality where multi-platform apps share code or use cross-platform development frameworks — if no code is shared, it is like testing two different applications: everything needs testing",
          "BACKWARD COMPATIBILITY when a platform runs different operating system versions",
          "New or changed platform features — Android's Doze framework required testing on OS versions that support it and those that don't",
        ]},
        { type: "note", title: "Q19 anchor", text: "Interoperability with OS versions → backward compatibility testing." },
      ],
    },
    "2.2.6": {
      objective: "MAT-2.2.6",
      body: [
        { type: "p", text: "Apps commonly interact with other apps installed on the device — contacts and email apps are typical examples." },
        { type: "list", intro: "Test conditions:", items: [
          "Data transfer between the system under test and the utilized app is correct",
          "No harm is done to any user data stored within a utilized app",
          "Conflicting behaviors are caught — one app turns GPS off to save energy while another turns it on automatically",
        ]},
        { type: "p", text: "With millions of apps on the market, co-existence cannot realistically be tested for all — consider and test potential issues according to their RISK." },
      ],
    },
    "2.3": {
      objective: "MAT-2.3.1",
      body: [
        { type: "p", text: "Mobile devices connect via cellular networks (2G, 3G, 4G, 5G), Wi-Fi, and other wireless types such as NFC or Bluetooth." },
        { type: "list", intro: "Alternatives for performing connectivity tests:", items: [
          "Device emulators/simulators can simulate various network connections (some remote device access providers include this) — but they are of limited value",
          "Setting up your own mobile network with bandwidth manipulation — very costly",
          "Field testing — potentially more cost-effective, but limited in test reproducibility",
        ]},
        { type: "p", text: "Real-world connectivity varies: users stay on one mode or switch (Wi-Fi → cellular when leaving home), move between Wi-Fi/cellular networks and versions and between GSM cells, hit dead spots with no network, or deliberately disconnect via flight mode." },
        { type: "list", intro: "Connectivity testing must ensure:", items: [
          "Correct app functionality with different connectivity modes",
          "Switching between modes causes no unexpected behavior or data loss",
          "Clear information is given to the user when functionality is restricted by limited/no network or low bandwidth — the message states the limitations and their reasons",
        ]},
        { type: "note", title: "Q21 trap", text: "Connecting a USB power cable is NOT connectivity testing — it is a scenario for INTERRUPT testing. Flight-mode switching, NFC payments, and Bluetooth pairing are connectivity." },
      ],
    },
  },
};
