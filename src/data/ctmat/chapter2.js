// CT-MAT (2019) — Chapter 2: Mobile Application Test Types
// summary/deepPoints from syllabus v2019; examInsights derived from Sample Exam A v1.1
export default {
  id: 2,
  title: 'Mobile Application Test Types',
  time: '265 min',
  color: '#7C3AED',
  bg: '#F5F3FF',
  overview: "The biggest chapter — 13 of the 40 exam questions and five K3 'prepare tests' objectives (displays 2.1.2, interrupts 2.1.7, permissions 2.1.8, power 2.1.9, notifications 2.2.1, OS preferences 2.2.3). Think in three layers: compatibility with device HARDWARE (2.1), interactions with device SOFTWARE (2.2), and CONNECTIVITY (2.3). For every topic, know the concrete test conditions listed in the syllabus — the exam quotes them nearly verbatim.",
  sections: [
    {
      id: '2.1.1',
      title: 'Testing for Device Features',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Differing device capabilities force compatibility testing on many devices → prioritize using market data (section 1.1) to build a device portfolio balancing market coverage, cost, and risk.',
        'Feature variations to consider: different switch-off methods, navigation styles, hard and soft keyboards, and hardware such as radio, USB, Bluetooth, cameras, speakers, microphone, headphone access — none should interfere negatively with the app.',
        'Features vary even between models of the same manufacturer, differentiate market segments, and change quickly over time (e.g., fingerprint sensors moving down from high-end).',
        'Test BOTH directions: the app works correctly WITH the expected features, AND still works as expected when a feature is ABSENT (an app supporting front+rear cameras must not crash with one or no camera).'
      ],
      examInsights: [
        'Q9 KEY — For a NATIVE app using device features, the WLAN module is the LEAST critical hardware to focus on: native apps can work without an internet connection. Speakers, camera, headphone access are direct device features.'
      ]
    },
    {
      id: '2.1.2',
      title: 'Testing for Different Displays',
      level: 'K3',
      type: 'skim',
      summary: "Displays vary in screen size, viewport size, aspect ratio, and resolution (ppi/dpi); device fragmentation requires prioritization. Create tests exercising the UI on devices with the sizes/resolutions/aspect ratios most common in the target market. Check that: the app scales all UI elements to the current screen density and size; UI elements do not overlap; no usability or touch issues occur; and no problematic image shrinkage happens because of high dpi/ppi.",
      examInsights: [
        'HO pattern — the official hands-on runs the app on several (virtual or physical) devices to show resolution/screen-size impact on the UI. Expect scenario questions listing overlap/scaling checks.'
      ]
    },
    {
      id: '2.1.3',
      title: 'Testing for Device Temperature',
      level: 'K2',
      type: 'skim',
      summary: "Mobile devices react to temperature increases unlike desktops. Overheating causes (battery charging, intense workload, background apps, continuous cellular/Wi-Fi/GPS use) lead the device to protect itself: dropping CPU frequency, freeing memory, turning off parts of the system — which can impact app functionality. Design tests that consume a lot of energy over a long uninterrupted period to generate heat; the software under test must then show no unexpected behavior.",
      examInsights: [
        'Q10 TRAP (NOT-question) — Overheating does NOT cause "de-installation of the app". It can make the app slow (CPU drop), stop features (system parts turned off), or cause incorrect functionality.'
      ]
    },
    {
      id: '2.1.4',
      title: 'Testing for Device Input Sensors',
      level: 'K1',
      type: 'skim',
      summary: "Sensors include GPS, accelerometers, gyroscopes, 3-axis magnetometers, and sensors reacting to pressure, temperature, humidity, heartbeat, light, or touchless inputs. Check that: the app works as intended for each available sensor (test various motions — circular, back-and-forth as in walking); light-reactive features respond correctly under various lighting; sound input/output works with soft/hard volume buttons, microphones, wired and wireless speakers, and ambient sound; and location stays accurate when switching GPS on/off, with different GPS signal quality, and when falling back to Wi-Fi, cell-tower location, or manual entry.",
      examInsights: [
        'Q11 TRAP (NOT-question) — "Correct screen size in landscape and portrait modes" is NOT an input-sensor test (that is display/orientation testing). GPS signal, gyroscope, and motion-sensor checks ARE input-sensor scenarios.'
      ]
    },
    {
      id: '2.1.5',
      title: 'Testing Various Input Methods',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Soft keyboards: the app must work with at least the major manufacturers\' keyboards and widely used ones; the right keyboard layout/keys must pop up by default when required.',
        'Gestures: press/touch, double touch, multi-touch, swipe, tap, double tap, drag, pinch open/close. Every screen must respond correctly to appropriate gestures and IGNORE all non-supported gestures or inputs.',
        'Cameras: capture images and videos, scan barcodes, QR codes, documents, measure distances. With front and back cameras, the appropriate one turns on by default (video chat → front). Test with camera in use and not in use, and with only one or no camera present — especially if the app uses the specific missing camera.'
      ],
      examInsights: [
        'Q12 KEY — Tests relating ONLY to input methods: swiping, double tapping, scanning a QR code, recording audio. TRAPS: printing a screen, sending an SMS, using a TV remote app = OUTPUT methods.'
      ]
    },
    {
      id: '2.1.6',
      title: 'Testing for Screen Orientation Change',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Motion sensors detect orientation changes and switch landscape/portrait with UI layout changes.',
        'After a change check: correct usability and functional behavior in both modes; the app maintains its state; input fields retain captured data; output fields display the same data while keeping the current session.',
        'Do NOT test a single switch only — rendering or state issues may only appear after several uninterrupted switches. Design tests switching several times across various UI states, with and without data; the app must persist state without loss or change.'
      ],
      examInsights: [
        'Q13 KEY — Best aspects for orientation-change verification: usability issues, retaining input data, maintenance of current state. Security, performance, WLAN interrupts are not orientation-change concerns.'
      ]
    },
    {
      id: '2.1.7',
      title: 'Testing for Typical Interrupts',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'DEVICE interrupts: voice calls, messages, charger switched on, low memory, other notifications. USER-INITIATED interrupts: app switching, setting the device into standby while the app runs.',
        'Tests check: the app handles all interrupts without negative impact; it continues correctly, preserving state, data, and sessions regardless of the interrupt; with "do-not-disturb" blocking mode, conditions are used correctly — including turning DND off after a long active period, releasing many notifications at once.',
        'Design tests receiving interrupts DURING app usage — e.g., answering a phone call while using the app and returning to the exact pre-interrupt state.'
      ],
      examInsights: [
        'Q14 (K3) — USER-INITIATED interrupts = standby mode, accepting incoming voice calls, do-not-disturb mode. TRAPS: low battery warnings and low memory notifications are DEVICE interrupts, not user-initiated.'
      ]
    },
    {
      id: '2.1.8',
      title: 'Testing for Access Permissions to Device Features',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'Apps need access to folders (contacts, pictures) and sensors (camera, microphone); denial at installation or later change can impact behavior.',
        'Tests check: the app works with reduced permissions — asks the user to grant them, never fails unexplained; permissions are requested ONLY for resources relevant to functionality (no broad unrelated permissions); functionality responds correctly when a permission is withdrawn or rejected during installation; every permission request is correct and justified.',
        'The tester must know WHY the app needs each permission and how functionality should degrade when it is missing. Design tests for rejecting permissions during installation AND granting permissions after installation.'
      ],
      examInsights: [
        'Q15 (K3) — Camera cannot be invoked after an update was fixed → the MOST important test is ACCESS PERMISSION testing (missing/incorrect permissions are the likely root cause). Installation succeeded per the scenario; nothing hints at performance or accessibility.'
      ]
    },
    {
      id: '2.1.9',
      title: 'Testing for Power Consumption and State',
      level: 'K3',
      type: 'skim',
      summary: "Check: battery power state and drainage-related defects; data integrity under low-power and dead-battery conditions; power consumption while the app is active under heavy and low use; and power consumption while the app is in the background. Plan carefully — these tests run uninterrupted over extended periods (device left unattended with the app in foreground/background), and tools such as log analyzers are needed to extract battery-drain patterns.",
      examInsights: [
        'HO pattern — test under varying battery levels to discover consumption data and behavior under low and dead battery states. Data integrity at dead battery is the classic check.'
      ]
    },
    {
      id: '2.2.1',
      title: 'Testing for Notifications',
      level: 'K3',
      type: 'deep',
      deepPoints: [
        'The OS may delay notifications or fail to display them to optimize power consumption.',
        'Test conditions: correct handling of notifications received in FOREGROUND and BACKGROUND, especially under low battery; if notifications allow direct interaction with app content (without opening the app), the interaction must be accessible from within the app later (e.g., a reply from the notification is visible in the app); if a notification deep-links into the app, the CORRESPONDING PAGE must open — not the home screen.'
      ],
      examInsights: [
        'Q16 (K3) — After fixing delayed/missing news notifications, the FUNCTIONAL validation tests are: correct display when the app is in the background, running under low battery conditions, and deep linking to the correct news page. TRAPS: performance and usability tests are NON-functional — wrong for this question.'
      ]
    },
    {
      id: '2.2.2',
      title: 'Testing for Quick-access Links',
      level: 'K2',
      type: 'skim',
      summary: "Quick-access links — app shortcuts on Android, Force-touch/3D-touch on iOS — perform a subset of app functionality from the home screen without launching the whole app. Test that: where features exist only on particular OS versions, the app behaves correctly on versions that offer AND do not offer them; and actions performed via quick-access links are reflected correctly in the app when opened.",
      examInsights: [
        'Q17 KEY — Verifying quick-access links of a hybrid app: "verify the correct behavior of force-touch functionality of an iOS app". Browser bookmarks, hardware keys, and broken-link tools are unrelated to quick-access links.'
      ]
    },
    {
      id: '2.2.3',
      title: 'Testing for User Preferences Provided by the Operating System',
      level: 'K3',
      type: 'skim',
      summary: "OS-provided preferences (settings) must be respected — a muted device means the app plays no sounds. Test that users can amend typical preference options — sound, brightness, network, power save mode, date and time, time zone, languages, access type, notifications — and that the app adheres to the set preferences by behaving accordingly.",
      examInsights: [
        'HO pattern — change OS preference input values while the app runs and verify the app honors each setting. Muted device + app sound is the canonical violation.'
      ]
    },
    {
      id: '2.2.4',
      title: 'Testing for Different Types of Apps',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'NATIVE apps: device compatibility; utilization of device features.',
        'HYBRID apps: interaction with native device features; potential performance issues from the abstraction layer; usability (look and feel) versus native apps on the platform.',
        'WEB apps: cross-browser compatibility across common mobile browsers; functionality unaffected by different JavaScript engines; utilization of OS features (date picker, appropriate keyboard); usability versus native apps.'
      ],
      examInsights: [
        'Q18 TRAP (NOT-question) — For a NATIVE iOS app, CROSS-BROWSER testing does NOT apply (native apps do not run in browsers). Performance, device-feature utilization, and device compatibility all apply.'
      ]
    },
    {
      id: '2.2.5',
      title: 'Testing for Interoperability with Multiple Platforms and OS Versions',
      level: 'K1',
      type: 'skim',
      summary: "Each mobile OS has its own limitations; the app must work as intended while conforming to each platform's look and feel. Test conditions: handling of interrupts, notifications, and optimizations (energy saving) per platform; correct functionality where multi-platform apps share code or use cross-platform frameworks (if no code is shared, it is like testing two different applications — everything needs testing); BACKWARD COMPATIBILITY where a platform has multiple OS versions; and new/changed platform features (e.g., Android's Doze framework needed testing on versions with and without it).",
      examInsights: [
        'Q19 KEY — The typical test type for interoperability with OS versions = BACKWARD COMPATIBILITY testing. Security, performance, accessibility are not the focus.'
      ]
    },
    {
      id: '2.2.6',
      title: 'Testing for Interoperability and Co-existence with Other Apps',
      level: 'K1',
      type: 'skim',
      summary: "Apps commonly interact with other apps on the device (contacts, email). Test that: data transfer between the system under test and the utilized app is correct; no harm is done to user data stored within a utilized app; and conflicting behaviors are caught (one app turns GPS off to save energy while another turns it on). With millions of apps, co-existence cannot be tested exhaustively — consider and test according to RISK.",
      examInsights: [
        'Q20 KEY — PRIMARY co-existence test goal: "verifying that the SUT does not harm any user data". Security issues, usability, accessibility are different test objectives.'
      ]
    },
    {
      id: '2.3',
      title: 'Testing for Various Connectivity Methods',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Connection methods: cellular (2G/3G/4G/5G), Wi-Fi, NFC, Bluetooth. Test alternatives: emulators/simulators can simulate network connections (limited value); building your own mobile network with bandwidth manipulation (very costly); field testing (more cost-effective but hard to reproduce).',
        'Real-world connectivity varies: continuous connection in one mode, switching modes (Wi-Fi → cellular when leaving home), switching between Wi-Fi/cellular networks and versions and between GSM cells, dead spots with no network, and deliberate disconnects (flight mode).',
        'Test conditions: correct app functionality in different connectivity modes; switching modes causes no unexpected behavior or DATA LOSS; the user gets clear information when functionality is restricted by limited/no network or low bandwidth — the message states the limitations and their reasons.'
      ],
      examInsights: [
        'Q21 TRAP (NOT-question) — "Connecting a USB cable with a power supply" is NOT connectivity testing (it suits INTERRUPT testing). GSM↔flight-mode switching, NFC payment, Bluetooth pairing are connectivity scenarios.'
      ]
    }
  ]
};
