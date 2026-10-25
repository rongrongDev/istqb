// CT-MAT (2019) — Chapter 5: Automating the Test Execution
// summary/deepPoints from syllabus v2019; examInsights derived from Sample Exam A v1.1
export default {
  id: 5,
  title: 'Automating the Test Execution',
  time: '55 min',
  color: '#D97706',
  bg: '#FFFBEB',
  overview: "The shortest chapter — 4 of the 40 exam questions. Two automation approaches (user-agent based vs device-based), three object-identification methods with their trade-off table (object identification vs image/OCR comparison), tool evaluation split into organizational vs technical fit, and the on-premise vs remote automation lab decision. The comparison table in 5.2 is the most-quoted content.",
  sections: [
    {
      id: '5.1',
      title: 'Automation Approaches',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'USER-AGENT BASED testing: uses the user-agent identifier string sent by the browser to SPOOF a particular browser on a particular device — usable for MOBILE WEB applications. DEVICE-BASED testing: runs the application under test directly ON the device — usable for ALL types of mobile applications.',
        'App type determines the framework: mobile web can use the usual desktop web-automation tools; NATIVE apps might need specific tools; platform providers may offer dedicated automation tools.',
        'Conventional approaches often apply to mobile too: capture/playback, data-driven, keyword-driven, behavior-driven testing.',
        'Key capabilities a mobile testing framework should include: object identification, object operations, test reports, APIs and extendable capabilities, adequate documentation, integrations with other tools, independence of test development practice.'
      ],
      examInsights: [
        'Q37 TRAP (NOT-question) — WRONG statement: "native apps are best tested using general web application automation tools, whereas mobile apps need specific tools" — it is REVERSED: mobile WEB apps use general web tools; NATIVE apps need specific tools. The agent-based = spoofing / device-based = on-device distinctions are correct statements.'
      ]
    },
    {
      id: '5.2',
      title: 'Automation Methods',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'To automate, the tester must understand script recording/creation and how to access the app\'s graphical objects (buttons, list boxes, input fields). Identification methods: IMAGE RECOGNITION, OCR/TEXT RECOGNITION, and OBJECT RECOGNITION (web or native per app type). Choose the method that keeps tests running on a large device variety, in parallel, continuously.',
        'Comparison — RELIABILITY: object identification survives layout changes while the identifier is constant (risk: interacting with objects hidden from the user → false negatives); image/OCR scales with screen size but fails as soon as the layout changes.',
        'USER EXPERIENCE: object identification usually needs manual scripting (readability/maintainability); image/OCR allows full GUI-based testing without scripting. EXECUTION SPEED: object identification tends to be faster (especially native manufacturer tools); image/OCR is slower (pixel-by-pixel comparison with a baseline image).',
        'MAINTENANCE: object identification depends on script quality; image/OCR mainly means providing changed baseline images. AUTHORING: object identification needs scripting-language and software-design knowledge; image/OCR needs baseline-image generation, painful when the app changes often.'
      ],
      examInsights: [
        'Q38 KEY — TRUE: "object based scripting is the more reliable method of authoring test automation code". TRAPS: object identification is FASTER but that is not what makes it reliable as stated in (a) — (a) mixes claims; baseline images belong to image/OCR maintenance, not object identification; OCR/object learning DOES pose reliability risks.'
      ]
    },
    {
      id: '5.3',
      title: 'Automation Tools Evaluation',
      level: 'K1',
      type: 'deep',
      deepPoints: [
        'Evaluation parameters split into ORGANIZATIONAL FIT (see CTFL ch. 6.2 — includes the testers\' skill set) and TECHNICAL FIT.',
        'Technical fit parameters: test automation requirements and complexities (new features like FaceID, fingerprint, chatbots); test environment requirements (varying network conditions, importing/creating test data, server-side virtualization); test reporting and feedback-loop capabilities; ability to manage and drive large-scale execution locally or in a cloud test lab; INTEGRATION of the framework with other tools used in the organization; support and documentation availability for current and future upgrades.'
      ],
      examInsights: [
        'Q39 TRAP (NOT-question) — "Ability to operate INDEPENDENTLY of other existing tools" is NOT a consideration — the requirement is the opposite: INTEGRATION with other tools. Tester skill set, automation requirements/complexities are real considerations.'
      ]
    },
    {
      id: '5.4',
      title: 'Approaches for Setting up an Automation Test Lab',
      level: 'K2',
      type: 'deep',
      deepPoints: [
        'Choices: on-premise device test lab, remote device test lab, or combinations (characteristics compared in 4.4).',
        'On-premise labs are generally difficult and time-consuming to maintain. Local devices plus emulators/simulators best serve the EARLY development and testing phases.',
        'Advanced stages need full regression, functional, and non-functional tests — best executed on a full device lab: a REMOTE device test lab managed, continuously updated, and maintained in the cloud. Remote labs complement on-premise labs, ensure sufficient device/OS combinations, and bring richer test reports and advanced automation capabilities.',
        'At scale (automation framework or CI job), overall lab STABILITY is key for efficiency and reliability — remote labs are designed for constant device/OS availability. But remote labs are not always necessary later on: well designed and maintained on-premise labs can be as good or better.'
      ],
      examInsights: [
        'Q40 TRAP (LEAST-question) — The statement LEAST supporting remote labs: "a remote device lab will most likely cover a small set of the latest device/OS configurations for early design validation" — that describes a LOCAL lab\'s role; remote labs offer wide variety, full-lab late-stage testing, and large-scale stability.'
      ]
    }
  ]
};
