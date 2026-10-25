// CT-MAT (2019) — Chapter 5 learn content, authored from the ISTQB Mobile Application Testing Syllabus v2019 (2019-05-03).
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "The automation chapter: the two automation approaches (user-agent based vs device-based), the object-identification methods and their trade-offs, how to evaluate mobile automation tools (organizational vs technical fit), and how to set up an automation test lab across the development stages.",
  keywords: ["device-based testing", "test report", "user-agent based testing"],
  objectives: [
    { id: "MAT-5.1.1", level: "K2", text: "Distinguish between common automation approaches and frameworks for mobile application testing" },
    { id: "MAT-5.2.1", level: "K2", text: "Describe various automation methods for testing mobile apps" },
    { id: "MAT-5.3.1", level: "K1", text: "Recall the various parameters to be considered during the evaluation of mobile testing automation tools" },
    { id: "MAT-5.4.1", level: "K2", text: "Distinguish between common approaches of creating test labs with advantages and disadvantages with respect to test automation" },
  ],
  sections: {
    "5.1": {
      objective: "MAT-5.1.1",
      body: [
        { type: "p", text: "USER-AGENT BASED testing utilizes the user-agent identifier string sent by the browser to spoof a particular browser on a particular device — usable for executing MOBILE WEB applications. DEVICE-BASED testing runs the application under test directly ON the device — usable for ALL types of mobile applications." },
        { type: "p", text: "The application type also determines the suitable framework: mobile web can be tested using the usual desktop web-automation tools, while NATIVE apps might need specific tools; platform providers may offer automation tools dedicated to their platform. Conventional automation approaches often apply to mobile as well: capture/playback, data-driven, keyword-driven, and behavior-driven testing." },
        { type: "list", intro: "Key capabilities a mobile testing framework should include:", items: [
          "Object identification and object operations",
          "Test reports",
          "APIs and extendable capabilities",
          "Adequate documentation",
          "Integrations with other tools",
          "Independence of test development practice",
        ]},
        { type: "note", title: "Q37 trap", text: "The reversed claim — 'native apps are best tested with general web automation tools' — is the WRONG statement. Mobile WEB apps use general web tools; native apps need specific tools." },
      ],
    },
    "5.2": {
      objective: "MAT-5.2.1",
      body: [
        { type: "p", text: "To develop automated tests, the tester must understand the script recording/creation mechanism and how to access and interact with the app's graphical objects (buttons, list boxes, input fields). Identification methods: IMAGE RECOGNITION, OCR/TEXT RECOGNITION, and OBJECT RECOGNITION (web or native, per app type). Beyond practicing detection, understand which method best enables tests running on a large device variety, in parallel, and continuously." },
        { type: "table", headers: ["Comparison item", "Object identification", "Image/OCR comparison"], rows: [
          ["Reliability", "Layout can change while the identifier stays constant; risk: code can interact with objects hidden from the user → false negatives", "Images scale with screen size, but tests fail as soon as the layout changes"],
          ["User experience", "Usually manual scripting needed, at least to polish recorded scripts for readability/maintainability", "Full GUI-based testing without scripting"],
          ["Execution speed", "Tends to be faster, especially with native manufacturer tools", "Tends to be slower — pixel-by-pixel comparison against a baseline image"],
          ["Maintenance", "Depends on the quality of the test scripts", "Mainly providing changed baseline images"],
          ["Authoring challenge", "Scripting-language knowledge + software design methods for a sustainable solution", "Baseline-image generation, especially when the app changes often"],
        ]},
        { type: "note", title: "Q38 anchor", text: "TRUE statement: object-based scripting is the MORE RELIABLE method of authoring test automation code." },
      ],
    },
    "5.3": {
      objective: "MAT-5.3.1",
      body: [
        { type: "p", text: "Successful automation requires choosing an appropriate toolset — understand the key differences of available tools and their suitability for project requirements. Evaluation parameters fall into two categories: ORGANIZATIONAL FIT (described in CTFL chapter 6.2 — includes the skill set of the testers who will use the tool) and TECHNICAL FIT." },
        { type: "list", intro: "Technical fit parameters:", items: [
          "Test automation requirements and complexities — e.g., the app's use of new features like FaceID, fingerprint, chatbots",
          "Test environment requirements — varying network conditions, importing or creating test data, server-side virtualization",
          "Test reporting and feedback-loop capabilities",
          "Ability of the framework to manage and drive execution at large scale, locally or in a cloud test lab",
          "INTEGRATION of the test framework with other tools used in the organization",
          "Support and documentation availability for current and future upgrades",
        ]},
        { type: "note", title: "Q39 trap", text: "'Ability to operate independently of other existing tools' is NOT an evaluation consideration — integration WITH other tools is what matters." },
      ],
    },
    "5.4": {
      objective: "MAT-5.4.1",
      body: [
        { type: "p", text: "For automation, choose between an on-premise device test lab and a remote device test lab (characteristics compared in section 4.4) — or combine them." },
        { type: "p", text: "On-premise device labs are generally difficult and time-consuming to maintain. Having devices locally, in parallel with emulators and simulators, best serves the EARLY development and testing phases." },
        { type: "p", text: "At more advanced stages, teams need full regression, functional, and non-functional tests — best executed on a full device lab: a REMOTE device test lab that is managed, continuously updated, and maintained in the cloud. Remote labs complement on-premise labs, ensure sufficient and current device/OS combinations, and give access to richer test reports and advanced automation capabilities." },
        { type: "p", text: "When executing at scale through an automation framework or a continuous integration (CI) job, the STABILITY of the overall lab is key for test efficiency and reliability — remote labs are typically designed so devices and OSes are always available and stable. That said, remote labs are not always necessary in later stages: well designed and maintained on-premise labs can be as good as or better than any remote lab." },
        { type: "note", title: "Q40 trap", text: "The statement LEAST supporting remote labs: 'a remote lab covers a small set of the latest device/OS configurations for early validation' — that is the LOCAL lab's role. Remote labs bring variety, late-stage full-lab testing, and large-scale stability." },
      ],
    },
  },
};
