// CT-MAT (2019) — Official ISTQB Sample Exam A v1.1 (2020-01-24), parsed from the PDFs in trainings/.
// Answers, LOs, K-levels, points, and per-option rationales come from the Sample-Exam-A-Answers PDF.
// Note on Q31: the answer-key TABLE in the answers PDF lists "c", but the official per-option
// rationale marks (a) correct ("Tours are used to explore an application…"), matching syllabus
// §3.3.3 ("Tours provide an effective method for field testing"). This file follows the rationale.
export const questions = [
  {
    id: 1,
    lo: "MAT-1.1.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "You are the quality specialist in a mobile application development team. For which of the following would mobile analytics data be used in the test strategy or test plan?",
    options: [
      { id: "a", text: "To define the expected user base of the application." },
      { id: "b", text: "To derive test levels, test cases and test data." },
      { id: "c", text: "To select the device portfolio and prioritization for test execution." },
      { id: "d", text: "To select the application type and development model to follow." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): As tests cannot be executed on all possible devices, the selected device portfolio and prioritization should be based on the devices and platforms most commonly found in the target market — information provided by mobile analytics data.\n\nWRONG (a): The expected user base is not part of the test strategy or test plan.\n\nWRONG (b): Test levels, test cases, and test data are derived from the application, not from analytical data.\n\nWRONG (d): Application type and development model are not selected within the test strategy or test plan."
  },
  {
    id: 2,
    lo: "MAT-1.2.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Your team is developing a free-use application that collects publicly available news from user selected sources so that the user has a single place to read all the news from his/her favorite sources. Based on this information, which of the following business models is MOST appropriate?",
    options: [
      { id: "a", text: "Freemium application." },
      { id: "b", text: "Advertisement-based application." },
      { id: "c", text: "Paid application." },
      { id: "d", text: "Transaction-based application." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The data shown is publicly available, so users are unlikely to pay to read it in the app — but users are used to seeing advertisements on news sites.\n\nWRONG (a): The scenario contains no hint of additional paid features.\n\nWRONG (c): It is a free-to-use app.\n\nWRONG (d): No transactions are managed in this app."
  },
  {
    id: 3,
    lo: "MAT-1.3.1",
    level: "K1",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following statements is true for feature phones?",
    options: [
      { id: "a", text: "Feature phones provide limited support for app installation." },
      { id: "b", text: "Feature phones are similar to smart phones but bigger." },
      { id: "c", text: "Feature phones are the next generation smartphones, with extended functionality." },
      { id: "d", text: "Feature phones have cameras, GPS and other sensors built in." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Feature phones come with some apps installed, like browsers, but user options to install additional apps are usually limited to a small set provided by the device manufacturer.\n\nWRONG (b), (c), (d): Feature phones are not larger smartphones, not next-generation smartphones, and are not equipped with the full sensor set of smartphones."
  },
  {
    id: 4,
    lo: "MAT-1.4.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Your team develops an Android game utilizing many device features such as camera, GPS and device orientation. Which of the following types of application is MOST suitable, if the precise use of device specific features is essential?",
    options: [
      { id: "a", text: "Hybrid app." },
      { id: "b", text: "Mobile web app." },
      { id: "c", text: "Native app." },
      { id: "d", text: "Desktop app." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): The game targets one platform and utilizes many device features — best served by a native app.\n\nWRONG (a): Hybrid apps are less suitable — they need an additional layer translating between web content and the device runtime.\n\nWRONG (b): Web apps do not utilize device features as well as native apps.\n\nWRONG (d): Android is a mobile OS, not a desktop OS."
  },
  {
    id: 5,
    lo: "MAT-1.5.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: true,
    text: "Your team develops an iOS app that is used to register users, their e-mail and street addresses. The data is transferred to a server and provides registered users with samples of physical products, shipped via normal mail. Which TWO of the following are the MOST appropriate architectural decisions to consider for this app?",
    options: [
      { id: "a", text: "Always Connected." },
      { id: "b", text: "Native app." },
      { id: "c", text: "Store and forward." },
      { id: "d", text: "Cellular data." },
      { id: "e", text: "Web app." }
    ],
    correct: ["b", "c"],
    explanation: "CORRECT (b): A native app is appropriate since it is iOS-only and lets the user work offline.\n\nCORRECT (c): The store-and-forward model lets the user register even while offline.\n\nWRONG (a): Always-connected is unnecessary — physical shipping means a delay between registration and sample arrival exists anyway.\n\nWRONG (d): Cellular data is not the most important consideration since the user can work offline.\n\nWRONG (e): A web app would require constant connectivity to operate."
  },
  {
    id: 6,
    lo: "MAT-1.6.1",
    level: "K3",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Your analytics data shows that all your users use iPhone. Which of the following decisions is MOST appropriate for your test strategy if you have a low risk app?",
    options: [
      { id: "a", text: "Use remote device access service." },
      { id: "b", text: "Use single platform strategy." },
      { id: "c", text: "Use maximum coverage strategy." },
      { id: "d", text: "Use iOS simulators only." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The user base is single-platform and the app is low-risk — the single platform strategy fits.\n\nWRONG (a): A remote device access service brings no advantage for a single-platform user base.\n\nWRONG (c): Maximum coverage does not go together with low risk.\n\nWRONG (d): Testing should not be based on simulated devices alone."
  },
  {
    id: 7,
    lo: "MAT-1.7.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "Which of the following is NOT a challenge when testing mobile apps?",
    options: [
      { id: "a", text: "Unknown command parameters for application startup altering the app's behavior." },
      { id: "b", text: "Diverse users and user groups." },
      { id: "c", text: "Multiple network types and network providers." },
      { id: "d", text: "Non-availability of newly launched devices necessitating the use of emulators/simulators." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Mobile apps are usually started by tapping in the GUI — the user has no option to provide additional parameters during startup, so this is not a mobile testing challenge.\n\nWRONG (b), (c), (d): Diverse users, multiple networks/providers, and unavailable newly launched devices are all real challenges listed in the syllabus."
  },
  {
    id: 8,
    lo: "MAT-1.8.1",
    level: "K2",
    points: 1,
    chapter: 1,
    multi: false,
    text: "A company has decided to use crowd testing. Which of the following risks is mitigated by this decision?",
    options: [
      { id: "a", text: "Non-availability of important stakeholders during development." },
      { id: "b", text: "Cost of supporting multiple platforms." },
      { id: "c", text: "Non-availability of important devices during testing." },
      { id: "d", text: "Good reviews in the platform provider's app store." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): The crowd has a lot of different devices — crowd testing mitigates device non-availability.\n\nWRONG (a): Stakeholder availability is a project risk, not mitigated by crowd testing.\n\nWRONG (b): Crowd testing has no impact on maintenance cost per platform.\n\nWRONG (d): Good reviews are not a risk."
  },
  {
    id: 9,
    lo: "MAT-2.1.1",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "When testing a native app using different device features, which of the following hardware devices is LEAST needed to be in focus when performing the tests?",
    options: [
      { id: "a", text: "WLAN module." },
      { id: "b", text: "Integrated speakers." },
      { id: "c", text: "Built-in camera." },
      { id: "d", text: "Headphone access." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): The SUT is a native app, and common native apps can work without an internet connection — testing the WLAN module has the lowest priority compared with the other hardware features.\n\nWRONG (b), (c), (d): Speakers, camera, and headphone access are direct device features a native app uses."
  },
  {
    id: 10,
    lo: "MAT-2.1.3",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following is NOT a potential effect of overheating of a mobile device when testing it?",
    options: [
      { id: "a", text: "Application becomes slow." },
      { id: "b", text: "Features of the application stop working." },
      { id: "c", text: "De-installation of the app." },
      { id: "d", text: "Incorrect functionality of apps." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Apps are not de-installed due to overheating.\n\nWRONG (a): A drop in CPU frequency (to reduce power consumption) slows the app.\n\nWRONG (b): Shutting down parts of the system can stop features.\n\nWRONG (d): Malfunctioning can occur when the device throttles."
  },
  {
    id: 11,
    lo: "MAT-2.1.4",
    level: "K1",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following statements is NOT a valid scenario for testing a mobile device regarding input sensors?",
    options: [
      { id: "a", text: "Verifying the quality of the received GPS signal." },
      { id: "b", text: "Testing for correct functionality of the gyroscope." },
      { id: "c", text: "Validating data provided by the motion sensor." },
      { id: "d", text: "Correct screen size in landscape and portrait modes." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Screen size in landscape/portrait modes is not an input-sensor test — it belongs to display and orientation testing.\n\nWRONG (a), (b), (c): GPS signal, gyroscope, and motion sensor all belong to input sensors."
  },
  {
    id: 12,
    lo: "MAT-2.1.5",
    level: "K1",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following options contains tests that ONLY relate to different input methods?",
    options: [
      { id: "a", text: "Swiping to the next screen, double tapping on a button, scanning a QR code, recording audio." },
      { id: "b", text: "Taking a photo with the camera, using a soft keyboard, printing the content of a screen, using GPS coordinates." },
      { id: "c", text: "Dragging an object on the screen, opening another application, capturing of images, sending an SMS to a friend." },
      { id: "d", text: "Displaying geo location data, performing distance measurements, using a TV remote app, capturing videos from the internet." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): This is the only list covering exclusively input methods — gestures (swipe, double tap), camera scanning, audio recording.\n\nWRONG (b): Printing the content of a screen tests an OUTPUT method.\n\nWRONG (c): Sending an SMS is an output method.\n\nWRONG (d): Using a TV remote app tests an output, not an input method."
  },
  {
    id: 13,
    lo: "MAT-2.1.6",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You are working as a mobile tester for a company which is developing a navigation app. One of the requirements is that the app should run in both portrait and landscape modes whilst providing the same features to the user in an accurate way. Which of the following lists the BEST aspects to take into account for verifying correct functionality when switching screen orientation?",
    options: [
      { id: "a", text: "Motion sensor, security issues, correctness of output data." },
      { id: "b", text: "Usability issues, retaining input data, maintenance of current state." },
      { id: "c", text: "Various switches in screen orientation, performance issues, user interface features." },
      { id: "d", text: "WLAN interrupts, rendering issues in the graphical user interface, loss of entered data." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): This list contains only aspects the syllabus names for screen orientation change: usability, retained input data, maintained state.\n\nWRONG (a): Security aspects are not tested during orientation-change testing.\n\nWRONG (c): Performance testing is not part of orientation-change testing.\n\nWRONG (d): WLAN interrupts are not part of orientation-change testing."
  },
  {
    id: 14,
    lo: "MAT-2.1.7",
    level: "K3",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You are working as a test manager for a bank which is developing a new release of its online banking software. This software is realized as a web application. During the preparation of suitable tests, you are focusing on the app's fault tolerance according to user-initiated interrupts. Which of the following test scenarios would you choose at BEST for this purpose?\n\ni. Displaying low battery warnings.\nii. Setting mobile devices in standby mode.\niii. Accepting incoming voice calls.\niv. Low memory notification.\nv. Setting device in do-not-disturb mode.",
    options: [
      { id: "a", text: "i – ii – iii" },
      { id: "b", text: "i – ii – iv" },
      { id: "c", text: "ii – iii – iv" },
      { id: "d", text: "ii – iii – v" }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Statements ii, iii, and v are all USER-INITIATED interrupts — standby mode, accepting voice calls, do-not-disturb mode.\n\nWRONG (a), (b), (c): Low battery warnings (i) and low memory notifications (iv) are DEVICE interrupts, not user-initiated."
  },
  {
    id: 15,
    lo: "MAT-2.1.8",
    level: "K3",
    points: 1,
    chapter: 2,
    multi: false,
    text: "A health insurance company released an updated version of its customer app. The update includes a feature which scans a pharmacy bill and sends it directly to the health insurance company for payment. However, when the customers installed the update, they found that the camera couldn't be invoked to scan the bills. This bug was reported and fixed. Now new tests need to be prepared and executed, and retesting needs to be performed.\n\nWhich of the following tests will you execute as the MOST IMPORTANT test in the given scenario?",
    options: [
      { id: "a", text: "Test for performance." },
      { id: "b", text: "Test for accessibility." },
      { id: "c", text: "Test for access permission." },
      { id: "d", text: "Test for installation." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Missing or incorrect access permissions may be the possible root cause for the fixed problem — access permission testing is the most important test here.\n\nWRONG (a): Nothing in the text hints at performance problems.\n\nWRONG (b): Nothing suggests the scanning feature malfunction was accessibility-related.\n\nWRONG (d): Users installed the update successfully, as stated in the scenario."
  },
  {
    id: 16,
    lo: "MAT-2.2.1",
    level: "K3",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Your company provides a news messaging app that includes a notification feature for displaying breaking news. The notifications have deep linking to the relevant online news pages. Recently, some users of the app complained about experiencing delays with the display of the news notifications, while at other times, the expected notifications were not displayed at all. The root cause of this defect was identified by the developers and fixed. In your role as a mobile tester, which functional tests would you undertake in order to validate that the fixed version of the app is correctly working?\n\ni. Correct displaying of the notification when the app is in the background.\nii. Running the application under low battery conditions.\niii. Testing the performance of the app whilst displaying the notification.\niv. Performing of usability tests related to the fixed version of the app.\nv. Testing the deep linking to the correct news page of the app.",
    options: [
      { id: "a", text: "i – iv – v" },
      { id: "b", text: "i – ii – iv" },
      { id: "c", text: "i – ii – v" },
      { id: "d", text: "ii – iii – iv" }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Statements i, ii, and v are FUNCTIONAL tests matching the notification test conditions in the syllabus (background handling, low battery behavior, deep linking to the correct page).\n\nWRONG (a), (b), (d): Statements iii and iv are NON-functional tests (performance, usability) — and their execution makes no sense in this context."
  },
  {
    id: 17,
    lo: "MAT-2.2.2",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Your company is developing a new version of a hybrid app for price comparison. This app consists of feature-rich functionalities in quick-access links. As a mobile tester, it is your task to verify the failure-free working of these quick-access links. Which of the following is the BEST approach to take?",
    options: [
      { id: "a", text: "Verifying the correct behavior of force-touch functionality of an iOS app." },
      { id: "b", text: "Assuring the presence of favorite bookmarks in Mobile Chrome on Android OS." },
      { id: "c", text: "Verifying that all hardware keys of a mobile device work as expected." },
      { id: "d", text: "Using a suitable tool for identifying broken links in the mobile web app." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Per the syllabus, testing force-touch functionality is an example in the context of testing quick-access links.\n\nWRONG (b): Browser bookmarks are not quick-access links.\n\nWRONG (c): Hardware keys are device-hardware interactions, not quick-access links.\n\nWRONG (d): Broken-link tools address unavailable resources, not quick-access links."
  },
  {
    id: 18,
    lo: "MAT-2.2.4",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You are testing a native iOS app that uses various sensors. Which of the following test types do NOT apply?",
    options: [
      { id: "a", text: "Performance testing." },
      { id: "b", text: "Testing for utilization of device features." },
      { id: "c", text: "Cross-browser testing." },
      { id: "d", text: "Device compatibility testing." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): A native app does not use various browsers — cross-browser testing does not apply.\n\nWRONG (a): Performance is important for any app.\n\nWRONG (b): Testing device-feature utilization is important for a sensor-using native app.\n\nWRONG (d): The app should be compatible with the users' various devices."
  },
  {
    id: 19,
    lo: "MAT-2.2.5",
    level: "K1",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following is a typical test type for testing interoperability with OS versions?",
    options: [
      { id: "a", text: "Testing for security issues." },
      { id: "b", text: "Testing for performance problems." },
      { id: "c", text: "Testing for accessibility standards." },
      { id: "d", text: "Testing for backward compatibility." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Backward compatibility testing verifies correct interoperability with different OS versions, as stated in the syllabus.\n\nWRONG (a), (b), (c): Security, performance, and accessibility are not the focus of OS-version interoperability."
  },
  {
    id: 20,
    lo: "MAT-2.2.6",
    level: "K1",
    points: 1,
    chapter: 2,
    multi: false,
    text: "Which of the following is a PRIMARY test goal when performing tests for co-existence of a system under test (SUT) with other apps on the device?",
    options: [
      { id: "a", text: "Verifying that the SUT does not harm any user data." },
      { id: "b", text: "Identifying existing security issues on the device." },
      { id: "c", text: "Assessing usability problems in the SUT." },
      { id: "d", text: "Testing if the SUT meets accessibility standards." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Not harming user data stored within a utilized app is an accurate test goal for co-existence testing.\n\nWRONG (b), (c), (d): Security issues on the device, usability, and accessibility are different test objectives — not co-existence goals."
  },
  {
    id: 21,
    lo: "MAT-2.3.1",
    level: "K2",
    points: 1,
    chapter: 2,
    multi: false,
    text: "You are developing a test approach for performing connectivity tests on different types of mobile devices. Which of the following should NOT be in scope for this approach?",
    options: [
      { id: "a", text: "Switching from GSM to flight mode and back to GSM." },
      { id: "b", text: "Initiating a payment transaction via NFC." },
      { id: "c", text: "Using Bluetooth for pairing with a wearable device." },
      { id: "d", text: "Connecting a USB cable with a power supply." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Plugging in a power supply via USB does not focus on connectivity — it is a suitable scenario for INTERRUPT testing.\n\nWRONG (a), (b), (c): Flight-mode switching, NFC transactions, and Bluetooth pairing are all appropriate connectivity test aspects."
  },
  {
    id: 22,
    lo: "MAT-3.1.1",
    level: "K3",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are assigned the task of installation testing for an Android application. Which of the following installation tests should NOT be used?",
    options: [
      { id: "a", text: "Executing App-Installer.exe." },
      { id: "b", text: "Install by connecting the device to a PC and running commands for installation." },
      { id: "c", text: "Installation from Google Play Beta Program." },
      { id: "d", text: "Sideloading by providing the installation package on an SD-Card and executing from within the device file system." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): .exe is an executable file format for Windows only — it won't work on Android.\n\nWRONG (b): Connecting the device to a PC and running installation commands is valid Android installation testing.\n\nWRONG (c): Installing from the Google Play Beta Program works on Android.\n\nWRONG (d): SD-card sideloading is also a valid Android installation test."
  },
  {
    id: 23,
    lo: "MAT-3.1.3",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: true,
    text: "Which TWO of the following are potential security issues for mobile apps?",
    options: [
      { id: "a", text: "Code injection via input fields." },
      { id: "b", text: "Data being transferred unencrypted." },
      { id: "c", text: "App not responding after interruption." },
      { id: "d", text: "Rendering issues after changing device orientation." },
      { id: "e", text: "Overlap of screen elements on small screens." }
    ],
    correct: ["a", "b"],
    explanation: "CORRECT (a): Code injection is a security-related concern.\n\nCORRECT (b): Encryption of transferred data is a security-related concern.\n\nWRONG (c): An app not responding after interruption is an operational concern, not security.\n\nWRONG (d): Rendering issues are not directly security-related.\n\nWRONG (e): Overlapping screen elements are not directly a security concern."
  },
  {
    id: 24,
    lo: "MAT-3.1.4",
    level: "K1",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following are you likely to use to carry out a performance test of the time behavior of an app?",
    options: [
      { id: "a", text: "An instrumented build to get exact chronometric numbers." },
      { id: "b", text: "A load generator to observe the server behavior under heavy load." },
      { id: "c", text: "Running the app on an emulator/simulator." },
      { id: "d", text: "A device and a stopwatch to check the performance of the device." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Only an instrumented build gives exact chronometric numbers for how long a processing step actually lasted — and it differentiates between time taken by the app, the backend, and network communication.\n\nWRONG (b): Server-side performance is not app performance.\n\nWRONG (c): An emulator/simulator can never provide correct app performance.\n\nWRONG (d): A stopwatch is not sufficient in the millisecond range."
  },
  {
    id: 25,
    lo: "MAT-3.1.5",
    level: "K3",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are tasked with carrying out a usability test for a mobile app. Which of the following is a step that you will NOT perform?",
    options: [
      { id: "a", text: "Ask the manager to order a usability lab session." },
      { id: "b", text: "Test the app to check compliance with platforms user interface guidelines." },
      { id: "c", text: "Activate the voice-over feature of the device." },
      { id: "d", text: "Learn about the look and feel expectations of the platform." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): Activating the voice-over feature belongs to ACCESSIBILITY testing, not usability testing.\n\nWRONG (a), (b), (d): Usability lab sessions, platform UI-guideline compliance, and learning platform look-and-feel expectations are all usability-testing steps."
  },
  {
    id: 26,
    lo: "MAT-3.1.6",
    level: "K1",
    points: 1,
    chapter: 3,
    multi: false,
    text: "What does the mnemonic 'CRUD' stand for in the context of data validation testing?",
    options: [
      { id: "a", text: "Copy, Rename, Update, Delete." },
      { id: "b", text: "Create, Read, Undo, Delete." },
      { id: "c", text: "Create, Read, Update, Delete." },
      { id: "d", text: "Create, Read, Undo, Deploy." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): CRUD = Create, Read, Update, Delete — as per the syllabus and glossary.\n\nWRONG (a), (b), (d): Copy, Rename, Undo, and Deploy are not part of CRUD."
  },
  {
    id: 27,
    lo: "MAT-3.1.7",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are conducting internationalization testing. While you execute the tests you partly see pseudo-strings and partly English strings. Which of the following is the most likely cause?",
    options: [
      { id: "a", text: "Missing translations." },
      { id: "b", text: "Hard-coded English strings." },
      { id: "c", text: "Wrong language settings of the device." },
      { id: "d", text: "Something went wrong during build." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Internationalization testing wants all strings sourced from a resource. If the app shows real language instead of the pseudo-strings, those texts are not sourced from the pseudo-string resource — they are hard-coded.\n\nWRONG (a), (c), (d): Missing translations, device language settings, or build problems would not produce this specific mixed pattern."
  },
  {
    id: 28,
    lo: "MAT-3.1.8",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Why should accessibility testing be conducted?",
    options: [
      { id: "a", text: "To determine if the app is usable by users with differing needs." },
      { id: "b", text: "Because it is required by the W3C and the platform providers." },
      { id: "c", text: "To completely test the application." },
      { id: "d", text: "As generic test cases exist that must be executed for every application." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): The syllabus states accessibility testing is performed to determine the ease by which users with differing needs can use a component or system.\n\nWRONG (b), (c), (d): W3C/vendor guidelines assist but do not mandate; accessibility testing is not about completeness or generic mandatory test cases."
  },
  {
    id: 29,
    lo: "MAT-3.2.2",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are a tester in a team developing a mobile app. Your team has finished the current version of the app and has released it to the application store. Which of the following is your next activity?",
    options: [
      { id: "a", text: "Archiving testware." },
      { id: "b", text: "Post-release testing." },
      { id: "c", text: "Application store approval testing." },
      { id: "d", text: "Test closure." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): When the app is available in the application store, test that it can be installed from there and works like the build that was tested.\n\nWRONG (a): Archiving testware is a test closure activity done after post-release testing.\n\nWRONG (c): Application store approval testing should be done prior to submission.\n\nWRONG (d): Test closure follows post-release testing."
  },
  {
    id: 30,
    lo: "MAT-3.3.1",
    level: "K1",
    points: 1,
    chapter: 3,
    multi: false,
    text: "You are a new member in a team which is testing mobile applications. Your team lead asks you to test the app's inputs for a duration of 1 hour, functions for 1 hour, interrupts for 1 hour, and so on. Which of the following is the team lead applying?",
    options: [
      { id: "a", text: "Risk-Based Test Management." },
      { id: "b", text: "Delegating the responsibility of his job to you." },
      { id: "c", text: "Managing Performance Testing." },
      { id: "d", text: "Session-Based Test Management." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): The team lead uses Session-Based Test Management: testing divided into 1-hour sessions, each with a defined focus.\n\nWRONG (a): No risk information is provided, and all sessions get the same time frame — not risk-adjusted.\n\nWRONG (b): No delegation of responsibilities is happening.\n\nWRONG (c): No performance testing is done in the scenario."
  },
  {
    id: 31,
    lo: "MAT-3.3.2",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Which of the following is an effective method for field testing?",
    options: [
      { id: "a", text: "Using tours as a kind of exploratory test technique." },
      { id: "b", text: "Using an in-house device lab for executing tests on different smartphones." },
      { id: "c", text: "Using a cloud-based approach." },
      { id: "d", text: "Using a test tool for executing automated tests on mobile browsers." }
    ],
    correct: ["a"],
    explanation: "CORRECT (a): Tours are used to explore an application and understand how it works — in this context very effective for field testing (syllabus: 'Tours provide an effective method for field testing').\n\nWRONG (b): Field testing is not limited to device labs — it should be performed in the real world.\n\nWRONG (c): Field testing is not limited to cloud solutions.\n\nWRONG (d): A test automation tool is not suitable for exploratory field testing.\n\nNOTE: The official answer-key table lists 'c', but the official per-option rationale and the syllabus text both support 'a' — this app follows the rationale."
  },
  {
    id: 32,
    lo: "MAT-3.4.2",
    level: "K2",
    points: 1,
    chapter: 3,
    multi: false,
    text: "Why is it common for mobile app projects to flip the Test Pyramid?",
    options: [
      { id: "a", text: "Unit tests are much more complicated on mobile apps. As a result, it is convenient to only have a few unit tests." },
      { id: "b", text: "Missing tool support for unit and integration testing for mobile apps." },
      { id: "c", text: "Mobile apps are always monolithic. As a result, everything can be tested at system level and there is no need to test at lower levels." },
      { id: "d", text: "Mobile apps require a lot of manual testing, like usability or field testing." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Market and device fragmentation, user expectations regarding usability, and the variability of usage scenarios create test conditions that can only be tested manually — hence many manual tests.\n\nWRONG (a), (b), (c): These statements are simply wrong — unit tests are not inherently harder, tooling exists, and mobile apps are not always monolithic."
  },
  {
    id: 33,
    lo: "MAT-4.1.1",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Which of the following statements is correct for the development environments used for mobile application development?",
    options: [
      { id: "a", text: "iOS developers use Visual Studio IDE as their development environment." },
      { id: "b", text: "Android developers use the Universal Studio IDE while iOS developers use Xcode as their development environment." },
      { id: "c", text: "Android developers use the Xcode IDE as their development environment." },
      { id: "d", text: "iOS developers use the Xcode IDE as their development environment." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Per the syllabus examples, Android Studio may be used for Android development and Xcode for iOS development.\n\nWRONG (a): Visual Studio is not the iOS IDE.\n\nWRONG (b): 'Universal Studio' is not an Android IDE.\n\nWRONG (c): Xcode is not used for Android development."
  },
  {
    id: 34,
    lo: "MAT-4.2.1",
    level: "K1",
    points: 1,
    chapter: 4,
    multi: false,
    text: "Which of the following is NOT a task that can be typically performed by using a software development kit (SDK) for mobile applications?",
    options: [
      { id: "a", text: "Taking screenshots." },
      { id: "b", text: "Designing test cases." },
      { id: "c", text: "Pushing random events to the application." },
      { id: "d", text: "Creating virtual devices." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Designing test cases is not among the SDK utility examples in the syllabus.\n\nWRONG (a), (c), (d): Taking screenshots, pushing random events, and creating virtual devices are all listed SDK utilities."
  },
  {
    id: 35,
    lo: "MAT-4.3.1",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "You are assigned as a tester for a mobile app with a client-server architecture. In order to better utilize available equipment, the company decides to use the employee's PC without the application being connected to a real server, in order to test the basic features in early test stages. Which of the following architectures would you recommend that the developer of the Android app should use in the early test stages of the development to verify the functional suitability of the basic features?",
    options: [
      { id: "a", text: "Have the server emulator installed on the developer's PC and the simulator of the mobile application installed on a real device." },
      { id: "b", text: "Have the simulator of the mobile application installed on one of the Android Virtual Device's (AVD's) device emulators and the server emulator installed on the developer's PC." },
      { id: "c", text: "Have the server simulator installed on the developer's PC and the mobile application installed on one of the AVD's device emulators." },
      { id: "d", text: "Have the server simulator and the emulated mobile application installed directly on the developer's PC." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): A simulator can represent the server side while the application is installed on the AVD emulator — all on one PC, better utilizing the early test environment. Simulating the server side for basic functionality testing is a good alternative when the real server is unavailable.\n\nWRONG (a), (b), (d): These combinations misuse simulator/emulator roles — the app should run as real byte-code on the AVD emulator, and only the server needs simulating."
  },
  {
    id: 36,
    lo: "MAT-4.4.1",
    level: "K2",
    points: 1,
    chapter: 4,
    multi: false,
    text: "You are the test manager in a digital banking division at a Fintech company that is upgrading the Android-based mobile banking application of a mid-level financial institution. The upgrade incorporates an innovative security mechanism that uses fingerprint and face recognition features for enhanced app security. Which of the following represents the BEST approach to use in order to setup your test lab for this enhancement?",
    options: [
      { id: "a", text: "Setup a remote test lab in order to test the new innovative mobile banking application on as many types of devices as possible." },
      { id: "b", text: "Setup an on-premise lab in order to effectively test the new unique device-related features of the innovative mobile banking application." },
      { id: "c", text: "Setup a remote test lab in order to test the mobile banking application on many types of different devices and an on-premise lab to cover the maximum of possible devices." },
      { id: "d", text: "Setup a remote test lab in order to test the new innovative mobile banking application on many types of Android devices from different device manufacturers and save money for the company." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): The on-premise lab's main advantage is enabling specific tests for sensors, battery, and unique device-related features — exactly what fingerprint and face recognition require.\n\nWRONG (a), (c), (d): Remote labs excel at device variety, not sensor fidelity — sensor scenarios are often hard to test in the cloud."
  },
  {
    id: 37,
    lo: "MAT-5.1.1",
    level: "K2",
    points: 1,
    chapter: 5,
    multi: false,
    text: "Which of the following statements does NOT correctly distinguish between the common mobile testing automation approaches?",
    options: [
      { id: "a", text: "Agent-based testing approach is best used for executing mobile web applications, whereas device-based testing are best used for all types of mobile applications." },
      { id: "b", text: "Agent-based testing approach utilizes a string sent by the browser to spoof a particular browser, whereas device-based testing approach has to be executed on a particular mobile gadget." },
      { id: "c", text: "Native apps are best tested using the general web application automation tools, whereas mobile apps need specific tools." },
      { id: "d", text: "The mode of operation for the agent-based testing approach is to mimic the browser characteristics, whereas that of the device-based testing approach is to operate on the actual browser." }
    ],
    correct: ["c"],
    explanation: "CORRECT (c): This statement is REVERSED — mobile (web) apps are tested using general web application tools, whereas NATIVE apps are best tested using specific tools.\n\nWRONG (a), (b), (d): These statements correctly describe agent-based (user-agent spoofing, mobile web) vs device-based (on the actual device, all app types) approaches."
  },
  {
    id: 38,
    lo: "MAT-5.2.1",
    level: "K2",
    points: 1,
    chapter: 5,
    multi: false,
    text: "Which of the following statements is TRUE regarding the scripting methods used in automation of mobile testing?",
    options: [
      { id: "a", text: "Scripting using object identification is faster than using visual based (OCR/Text recognition), and therefore reduces the overall time needed for test execution." },
      { id: "b", text: "Object based scripting is the more reliable method of authoring test automation code because it allows the test framework to match the right mobile application object agnostically to the device under test." },
      { id: "c", text: "The scripting method using object identification increases the ongoing maintenance effort when there are frequent software code changes to the app that affect the baseline images." },
      { id: "d", text: "Relying on OCR/Text recognition and object learning does not pose a risk to the test automation reliability or robustness." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): Object-based scripting is the most reliable method of authoring test automation code.\n\nWRONG (a): Object-based scripting requires manual scripting not needed in image/OCR scripting — the claim mixes speed with overall effort.\n\nWRONG (c): Baseline images belong to image/OCR — its maintenance and authoring challenges rise with app changes, not object identification's.\n\nWRONG (d): Image/OCR is the LESS reliable method — it does pose risks."
  },
  {
    id: 39,
    lo: "MAT-5.3.1",
    level: "K1",
    points: 1,
    chapter: 5,
    multi: false,
    text: "Which of the following is NOT a major consideration during the evaluation of mobile automation test tools?",
    options: [
      { id: "a", text: "The test automation skill set of the testers who will be using the tool." },
      { id: "b", text: "Test automation requirements and complexities such as the use of new features such as FaceID, Fingerprint, Chatbots by the app." },
      { id: "c", text: "It is important to consider automation requirements and complexities." },
      { id: "d", text: "Ability of the test framework to operate independently of other existing tools used in the organization." }
    ],
    correct: ["d"],
    explanation: "CORRECT (d): Independent operation is NOT a consideration — the technical-fit parameter is INTEGRATION of the framework with the organization's other tools.\n\nWRONG (a): Tester skill set matters (organizational fit).\n\nWRONG (b), (c): Automation requirements and complexities are important technical-fit considerations."
  },
  {
    id: 40,
    lo: "MAT-5.4.1",
    level: "K2",
    points: 1,
    chapter: 5,
    multi: false,
    text: "Which of the following statements LEAST supports the use of a remote test lab?",
    options: [
      { id: "a", text: "Testing during later stages of the app development and which need to run on the full device lab, is best done on a remote device lab." },
      { id: "b", text: "A remote device lab will most likely cover a small set of the latest device/OS configurations to allow developers and testers to quickly validate early design stages of the app." },
      { id: "c", text: "Remote device labs will ensure sufficient variety of device and OS to enable teams to get a larger variety of test gadgets for their testing." },
      { id: "d", text: "Remote labs are better when executing at large-scale because they are typically designed to ensure that stability concerns are in most cases removed from the overall process." }
    ],
    correct: ["b"],
    explanation: "CORRECT (b): A small set of latest devices for early design validation describes the LOCAL (on-premise) lab's typical role — this statement least supports remote labs.\n\nWRONG (a): Later-stage full-device-lab testing is a genuine remote-lab strength.\n\nWRONG (c): Remote labs do offer wide device/OS variety.\n\nWRONG (d): Remote labs are designed for stability at large scale."
  }
];

export const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
