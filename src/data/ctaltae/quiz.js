// CTAL-TAE v2.0 — two official sample exams, parsed from the PDFs in trainings/:
//   exam "A"     = ISTQB CTAL-TAE Sample Exam v2.4: 40 questions, 66 points. Correct answers, LOs, K-levels,
//                  points and per-option rationales from the matching Sample-Exam-Answers PDF; the answer-key
//                  table and the per-question answers were cross-checked on import.
//   exam "ASTQB" = ASTQB Test Automation Engineering sample exam (2024): 40 questions. The answer sheet header
//                  states "63 points possible. 41 points to pass. 90 minutes"; its per-question points sum to 64
//                  (Q36, a K3 item, is marked 3 points). Points are kept as published; the pass mark uses the
//                  stated 41.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "TAE-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a limitation of test automation?",
    "options": [
      {
        "id": "a",
        "text": "Only usability tests can be automated effectively"
      },
      {
        "id": "b",
        "text": "Test automation can be executed only after system testing is done"
      },
      {
        "id": "c",
        "text": "Test automation can only check results that can be verified visually"
      },
      {
        "id": "d",
        "text": "Test automation can only check results that can be verified by code"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Test automation can be performed before and after system testing.\n\nWRONG (b): It refers to non-existing limitation.\n\nWRONG (c): Test automation is not limited to check only the results that can be verified visually.\n\nCORRECT (d): As in syllabus: \"Test automation can only check test results that can be verified by an automated test oracle\". This is a limitation and means that results of the automated scripts are verified by the machine which is programmed to do so (code)."
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "TAE-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is true about test automation and the SDLC?",
    "options": [
      {
        "id": "a",
        "text": "In Agile software development automated tests focus more on acceptance tests than on component tests"
      },
      {
        "id": "b",
        "text": "In Agile software development automated tests focus more on component tests than on acceptance tests"
      },
      {
        "id": "c",
        "text": "In the V-model automated test execution must be performed after manual test execution"
      },
      {
        "id": "d",
        "text": "In the V-model implementation of test automation is performed throughout the whole software development cycle"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): In Agile software development, automated component tests are higher in volume compared to automated acceptance tests.\n\nCORRECT (b): In Agile software development, automated component tests are higher in volume compared to automated acceptance tests.\n\nWRONG (c): There is no such rule in the V-model.\n\nWRONG (d): V-model test planning, including planning of test automation, is performed in the early phase of the software development lifecycle."
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "TAE-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following factors is NOT necessary to consider when selecting suitable test tools?",
    "options": [
      {
        "id": "a",
        "text": "SUT architecture"
      },
      {
        "id": "b",
        "text": "Actual composition and experience of the test team"
      },
      {
        "id": "c",
        "text": "Licensing and support of the test tool"
      },
      {
        "id": "d",
        "text": "Quality of the SUT requirements"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): The SUT architecture should be considered.\n\nWRONG (b): The actual composition and experience of the test team needs to be evaluated.\n\nWRONG (c): It is necessary to have knowledge about the licensing and support of the tool.\n\nCORRECT (d): The quality of the SUT requirements is not directly related to selecting the tool itself."
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "TAE-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "When a system is designed for testability, one of the characteristics is that the test automation framework (TAF) can access interfaces to perform actions on the system. What is this characteristic called?",
    "options": [
      {
        "id": "a",
        "text": "Observability"
      },
      {
        "id": "b",
        "text": "Controllability"
      },
      {
        "id": "c",
        "text": "Maintainability"
      },
      {
        "id": "d",
        "text": "Interoperability"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Observability means to give insight into the system.\n\nCORRECT (b): See Chapter 2.1.1 of the syllabus.\n\nWRONG (c): Maintainability is a quality characteristic.\n\nWRONG (e): Interoperability is also a quality characteristic."
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "TAE-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What type of test automation is mainly performed in the Preproduction environment?",
    "options": [
      {
        "id": "a",
        "text": "Component testing"
      },
      {
        "id": "b",
        "text": "Performance efficiency testing and user acceptance testing"
      },
      {
        "id": "c",
        "text": "Static analysis"
      },
      {
        "id": "d",
        "text": "Component Integration testing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Component testing is performed in a build and development environment.\n\nCORRECT (b): It is necessary to perform performance efficiency testing and user acceptance testing in a preproduction environment to test real world scenarios.\n\nWRONG (c): Static analysis is usually done at the development environment.\n\nWRONG (d): Component integration testing is done at the development environment."
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "TAE-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "In which environment is a fully automated test suite typically executed against a release candidate for the first time?",
    "options": [
      {
        "id": "a",
        "text": "Preproduction/staging environment"
      },
      {
        "id": "b",
        "text": "Build environment"
      },
      {
        "id": "c",
        "text": "Production/operational environment"
      },
      {
        "id": "d",
        "text": "Integration/test environment"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Preproduction or staging environment testing has less focus on functional aspects.\n\nWRONG (b): A build environment is not ready for more robust test execution.\n\nWRONG (c): Full functional test suites are not typically executed against products in production.\n\nCORRECT (d): Robust user interface (UI), and application programming interface (API) test suites are typically executed against fully integrated systems."
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "TAE-2.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 2,
    "multi": true,
    "text": "You are working for an IT company which is developing a built-in Android-based car multimedia system. The software contains several components working together. Developers are following the test-driven development approach. After the development of the software, it is delivered to another IT company which integrates the software with the hardware elements and sells them together to car manufacturers.\n\nWhich of the following should be considered during capturing the test automation requirements by the IT company you are working for?",
    "options": [
      {
        "id": "a",
        "text": "Is it important for the test automation approach to support component testing?"
      },
      {
        "id": "b",
        "text": "Should the test automation approach support beta testing?"
      },
      {
        "id": "c",
        "text": "Is it important for the test automation approach to support the testing of the software in as many different types of cars as possible?"
      },
      {
        "id": "d",
        "text": "Which tester roles should be supported by the test automation approach?"
      },
      {
        "id": "e",
        "text": "Is it important for the test automation approach to support the mobile application store approval?"
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "explanation": "CORRECT (a): Component testing is performed by the developing IT company.\n\nWRONG (b): Beta testing is not performed.\n\nWRONG (c): The testing of as many different types of cars as possible is performed by the integrator IT company.\n\nCORRECT (d): Automated component tests are designed and executed by the developers.\n\nWRONG (e): The test automation approach to support the mobile application store approval is not performed."
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "TAE-2.2.2",
    "level": "K4",
    "points": 3,
    "chapter": 2,
    "multi": false,
    "text": "You are evaluating test automation tools. The following is a list of findings for one of the tools that were evaluated against the selection requirements:\n\n• The tool has a very informative dashboard which shows all the relevant test information about the SUT.\n• The tool includes a test logging component which logs all the necessary information that follows test execution and to troubleshoot problems found during the tests.\n• The tool includes a customizable test reporting component.\n• During the proof of concept, the tool performed very slowly against the SUT, compared to the other tools that were evaluated.\n• The current test environment is valid according to the release notes of the tool which means it fulfills the hardware and software requirements.\n\nWhat should be your next step regarding the selection of this tool?",
    "options": [
      {
        "id": "a",
        "text": "Acquire more hardware resources for the SUT to decrease the performance degradation"
      },
      {
        "id": "b",
        "text": "Turn off test logging to improve performance of the tool"
      },
      {
        "id": "c",
        "text": "Recommend not selecting this tool"
      },
      {
        "id": "d",
        "text": "Plan to migrate the SUT to another hardware/software environment where there is a possibility for the elimination of the tool overhead"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): The test environment is valid according to the release notes.\n\nWRONG (b): The test logging component is essential for troubleshooting.\n\nCORRECT (c): The tool does not meet selection requirements.\n\nWRONG (d): It is completely wrong to migrate the SUT."
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "TAE-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Match the list of tasks in the Test Automation Architecture Capabilities below with its correct role name below.\n\n1. Mapping the abstract test cases to concrete test cases suitable for execution.\n2. Implementation of test cases and/or test suites.\n3. Test logging with detailed information about the test steps and actions.\n4. Mechanism for connecting to the SUT via protocols, and services.\n\nA. Test Definition\nB. Test Adaptation\nC. Test Generation\nD. Test Execution",
    "options": [
      {
        "id": "a",
        "text": "1D, 2A, 3C, 4B"
      },
      {
        "id": "b",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "c",
        "text": "1A, 2B, 3D, 4C"
      },
      {
        "id": "d",
        "text": "1C, 2A, 3D, 4B"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "1-C. Test Generation. mapping the abstract test cases to concrete test cases suitable for execution. This is where model based testing tools support the automated design of test cases based on a test model.\n\n2-A. Test Definition. Implementation of test cases and/or test suites. This layer supports the definition and implementation of test cases and/or test suites.\n\n3-D. Test Execution. Test logging with detailed information about the test steps and actions. This layer provides a test execution tool to run the selected tests automatically, and a test logging and test reporting component.\n\n4-B. Test Adaptation. Mechanism for connecting to the SUT via protocols, and services. This layer provides functionality to adapt the automated tests for the various components or interfaces of the SUT. It provides different adaptors for integration mechanism.\n\na) 1D, 2A, 3C, 4B INCORRECT\n\nb) 1C, 2A, 3B, 4D INCORRECT\n\nc) 1A, 2B, 3D, 4C INCORRECT\n\nd) 1C, 2A, 3D, 4B CORRECT"
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "TAE-3.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "As a Test Automation engineer You have encountered a problem during initial implementation of the test automation solution (TAS). The output from the system tests could not be translated back to the automated test cases to determine the test results.\n\nWhich option may have MOST LIKELY been a cause of the problem?",
    "options": [
      {
        "id": "a",
        "text": "The test tool libraries were NOT designed to be updated upon each SUT version release."
      },
      {
        "id": "b",
        "text": "The integration to the SUT system under test was NOT setup via APIs."
      },
      {
        "id": "c",
        "text": "The SUT-Specific adaptors for the selected tool were NOT implemented."
      },
      {
        "id": "d",
        "text": "The SUT and the test management tool were NOT compatible."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a)\n\nWRONG (a): The problem was found in the initial implementation and no updates were introduced yet.\n\nWRONG (b): The integration method used does not matter whether it is via APIs or other mechanism.\n\nCORRECT (c): The adaptors are necessary for the translation of the test results.\n\nWRONG (d): The question does not mention test management tool incompatibility."
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "TAE-3.1.3",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are working in an Android development team and have been maintaining a test automation framework. An additional development team has formed to build a new application. Your project manager asks you to build a test automation framework for this newly formed team. At first, you identify the components that could be reused in building that new framework, then start implementing the additional libraries based on the new application.\n\nIn which layer do you configure the connection to the new app?",
    "options": [
      {
        "id": "a",
        "text": "Core libraries layer"
      },
      {
        "id": "b",
        "text": "Test scripts layer"
      },
      {
        "id": "c",
        "text": "Feature files layer"
      },
      {
        "id": "d",
        "text": "Business logic layer"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Core libraries should be application independent and generic.\n\nWRONG (b): Test scripts should only contain test scripts and no configuration.\n\nWRONG (c): Feature files contain scenarios written in the Gherkin language.\n\nCORRECT (d): The business logic layer is used to set up the TAF to run against the SUT."
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "TAE-3.1.4",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are working on a test automation project that is used to automate GUI testing of a web-based public transport service. The project has a limited timescale. There are manual test cases which can be automated first. One of the goals is to implement test cases directly into the automated test scripts.\n\nWhich technique or approach should be used for automating test cases to meet the goals?",
    "options": [
      {
        "id": "a",
        "text": "Using the keyword-driven test technique"
      },
      {
        "id": "b",
        "text": "Using the behavior-driven development approach"
      },
      {
        "id": "c",
        "text": "Using the capture/playback test automation approach"
      },
      {
        "id": "d",
        "text": "Using the data-driven test automation technique"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Keyword-driven testing is too complex for this solution.\n\nWRONG (b): Behavior-driven development is too complex and is not necessary.\n\nCORRECT (c): Capture/playback test automation is easy to set up.\n\nWRONG (d): Data-driven test automation is too complex and is not necessary."
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "TAE-3.1.4",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You join a company where manual testing is mature, but test automation has been abandoned for a while now. The testers have generated a massive amount of test data and are typically using 10 to 20 variations per scenario. After your initial review, you see that the TAF (Test Automation Framework) can easily be fixed, but the test cases need to be completely revamped.\n\nWhich of the following test automation approaches should you choose to achieve great results quickly?",
    "options": [
      {
        "id": "a",
        "text": "Data-driven testing"
      },
      {
        "id": "b",
        "text": "Behavior-driven development"
      },
      {
        "id": "c",
        "text": "Capture/playback"
      },
      {
        "id": "d",
        "text": "Acceptance test-driven development"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The test data is already available and can be reused to increase the test case count.\n\nWRONG (b): Behavior-driven development requires involvement from business representatives, and in this case, there is no specific mention whether the business is involved.\n\nWRONG (c): Capture/playback would be a slow and costly solution, while the test data is already present.\n\nWRONG (d): Acceptance test-driven development is not an automation approach."
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "TAE-3.1.5",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are working on a test automation project that is used to automate GUI testing of an e-commerce site. The site contains a digital assistant which helps users to set up their accounts, their name, billing address, shipping address, and security credentials. Currently, the development of the software is in a phase where usability testers check the digital assistant and give recommendations on necessary changes. This is done iteratively; the developers modify the graphical user interface (GUI), and the usability testers check the modifications, and do usability testing again.\n\nWhich design pattern is the best implemented in this case?",
    "options": [
      {
        "id": "a",
        "text": "Implement the page object pattern and store all the user actions associated with the GUI elements in the relevant page models"
      },
      {
        "id": "b",
        "text": "Implement the flow model pattern, store all the web elements in the relevant page models, and store all the user actions associated with the GUI elements in the relevant flow models"
      },
      {
        "id": "c",
        "text": "Implement the facade design pattern and provide interfaces for the GUI elements to hide the used internal locator mechanism"
      },
      {
        "id": "d",
        "text": "Implement the singleton design pattern and create a single piece of code to handle the locating of elements"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Storing the user actions in the page model class files will not allow easy reuse and maintainability of complex user flows.\n\nCORRECT (b): The flow model pattern combines usage of page models and flow models, storing the structure and logic of the application in class files with different purposes, and is typically used when the SUT’s structure changes frequently.\n\nWRONG (c): Facades provide a simplified interface to a larger body of code.\n\nWRONG (d): The singleton design pattern does not solve the problem in this case."
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "TAE-4.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "The senior management wants to implement a TAS in your organization and asks you to lead this initiative. You have been given directions to start a pilot project.\n\nWhich of the following statements best describes the objective of this pilot project?\n\ni. Document the SUT parts which have not been documented during the development\nii. Identify the metrics and the measurement methods to monitor the SUT in the production environment\niii. Analyze defects found during the testing of the TAS\niv. Evaluate licensing options and corporation rules\nv. Select the most suitable commercial off-the-shelf or open-source tool",
    "options": [
      {
        "id": "a",
        "text": "i, ii and iii are valid objectives of the pilot project"
      },
      {
        "id": "b",
        "text": "ii and iv are valid objectives of the pilot project"
      },
      {
        "id": "c",
        "text": "i, ii and v are valid objectives of the pilot project"
      },
      {
        "id": "d",
        "text": "iv and v are valid objectives of the pilot project"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): i, ii and iii are not valid objectives of the pilot project.\n\nWRONG (b): ii is not a valid objective of the pilot project.\n\nWRONG (c): i and ii are not valid objectives of the pilot project.\n\nCORRECT (d): iv and v are valid objectives of the pilot project."
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "TAE-4.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 4,
    "multi": false,
    "text": "You are tasked with implementing a Test Automation Solution (TAS) for functional suitability tests that must be executed automatically after each daily build. The TAS needs to integrate seamlessly with the existing CI/CD pipeline and provide quick feedback on the software's quality. However, you've identified several potential risks that could impact the successful deployment and operation of the TAS.\n\nAs the test automation engineer, you need to analyze the deployment risks associated with implementing the TAS and determine the BEST mitigation strategies for each risk. Your goal is to ensure a smooth integration of the TAS into the existing development process while maintaining the quality and reliability of the testing process.\n\nWhich of the following BEST matches the deployment risks with their appropriate mitigation strategies?\n\n1. Test execution not triggered by the build\n\n2. Only the full test suite can be executed\n\n3. Test data unavailable when starting the test\n\n4. Difficulty in troubleshooting failed tests\n\nA. Log detailed information during test execution\n\nB. Integrate test automation into the CI/CD pipeline\n\nC. Use third-party tools to generate test data\n\nD. Utilize test harnesses and test fixtures",
    "options": [
      {
        "id": "a",
        "text": "1-B, 2-A, 3-D, 4-C"
      },
      {
        "id": "b",
        "text": "1-A, 2-B, 3-C, 4-D"
      },
      {
        "id": "c",
        "text": "1-B, 2-D, 3-C, 4-A"
      },
      {
        "id": "d",
        "text": "1-D, 2-B, 3-C, 4-A"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) 1-B: Integrating test automation into the CI/CD pipeline ensures test execution is triggered by the build.\n\nb) 2-D: Test harnesses and fixtures allow for more flexible test execution, not limited to full suite runs.\n\nc) 3-C: Third-party tools can help generate test data when it's not readily available.\n\nd) 4-A: Detailed logging during test execution aids in troubleshooting failed tests.\n\nCorrect answer is c)"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "TAE-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following is an important factor to improve code maintainability?",
    "options": [
      {
        "id": "a",
        "text": "Define generic functions with all the necessary parameters"
      },
      {
        "id": "b",
        "text": "Let developers uniquely name code variables"
      },
      {
        "id": "c",
        "text": "Use static analyzers to keep the code clean"
      },
      {
        "id": "d",
        "text": "Hardcode values to easily understand their meaning"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This answer does not improve code maintainability.\n\nWRONG (b): Uniquely naming code variables does not improve code maintainability.\n\nCORRECT (c): Using static analyzers improves code maintainability.\n\nWRONG (d): Hard coding values does not improve code maintainability."
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "TAE-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the most effective way to reduce the maintenance time for test automation code?",
    "options": [
      {
        "id": "a",
        "text": "Keep the code outside of a version control system"
      },
      {
        "id": "b",
        "text": "Embed static data directly within the test scripts for easier access"
      },
      {
        "id": "c",
        "text": "Apply design patterns in your test automation framework"
      },
      {
        "id": "d",
        "text": "Regularly rewrite test scripts from scratch instead of reusing existing components"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Storing the code outside of a version control system makes it more difficult for test automation engineers (TAEs) to manage, track, and collaborate on code effectively.\n\nWRONG (b): Hardcoding data in test scripts is not recommended, as it makes the scripts inflexible and difficult to maintain when changes are required.\n\nCORRECT (c): Structuring the test automation code using design patterns improves reusability and scalability, reducing the time needed for maintenance.\n\nWRONG (d): Regularly rewriting test scripts from scratch is inefficient and leads to unnecessary work. Reusing existing components is more effective in reducing maintenance time."
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "TAE-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": true,
    "text": "There is an IT company which develops an often-changing financial software product using the Agile software development model. The development, the integration and the deployment processes are highly automated. There is a CI/CD pipeline currently established. You are working on a TAS. The goal is to create a TAS which can be used for as many test automation purposes as possible.\n\nWhich of the following options are valid purposes for test automation in this case?",
    "options": [
      {
        "id": "a",
        "text": "Run a regression test suite every night"
      },
      {
        "id": "b",
        "text": "Execute a build of a component"
      },
      {
        "id": "c",
        "text": "Run a static code analysis"
      },
      {
        "id": "d",
        "text": "Execute an automated performance efficiency test in the CI/CD pipeline"
      },
      {
        "id": "e",
        "text": "Package and deploy the application as part of the deployment phase"
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "explanation": "CORRECT (a): Regression testing is necessary, and it can be incorporated into the CI/CD pipeline.\n\nWRONG (b): Executing a build is not a test automation task.\n\nWRONG (c): Static code analysis is not a test automation task.\n\nCORRECT (d): Performance efficiency tests can be automated.\n\nWRONG (e): Packaging and deployment are not test automation tasks."
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "TAE-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "Which statement is correct?",
    "options": [
      {
        "id": "a",
        "text": "Tests are not executed as part of the deployment phase"
      },
      {
        "id": "b",
        "text": "Tests are not executed as a separate pipeline, triggered by the successful deployment"
      },
      {
        "id": "c",
        "text": "Test cases do not act as a quality gate when different automated test suites will run on each deployment"
      },
      {
        "id": "d",
        "text": "Pipelines are not recommended for regression testing due to the extensive scope and size of these tests"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Tests are executed during deployment.\n\nWRONG (b): Tests are triggered to execute after successful deployment.\n\nCORRECT (c): It is not a correct statement since tests do not act as quality gates for deployment.\n\nWRONG (d): Pipelines are an excellent solution for periodic testing, such as regression tests, and the size of these tests does not impact their effectiveness."
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "TAE-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How is configuration management used in test automation?",
    "options": [
      {
        "id": "a",
        "text": "It enables the management of test data and test environment configurations"
      },
      {
        "id": "b",
        "text": "The SUT configuration can be stored and easily removed"
      },
      {
        "id": "c",
        "text": "It enables management of user rights for accessing test automation"
      },
      {
        "id": "d",
        "text": "Test automation results can easily be analyzed"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Test data and test environment configurations can be under configuration management.\n\nWRONG (b): The SUT configuration can be under configuration management, but it is not related to test automation.\n\nWRONG (c): User rights management is not related to configuration management.\n\nWRONG (d): Configuration management does not support test automation results analysis."
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "TAE-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which item below is NOT part of the test environment configuration?",
    "options": [
      {
        "id": "a",
        "text": "Uniform resource locators (URLs)"
      },
      {
        "id": "b",
        "text": "Credentials"
      },
      {
        "id": "c",
        "text": "Test data"
      },
      {
        "id": "d",
        "text": "Common core library"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): URLs are part of the test environment configuration.\n\nWRONG (b): Credentials are part of the test environment configuration.\n\nWRONG (c): Test data is part of the test environment configuration.\n\nCORRECT (d): The test environment configuration is a part of the common core library, not vice versa."
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "TAE-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How does contract testing NOT contribute to API test automation dependencies in an infrastructure?",
    "options": [
      {
        "id": "a",
        "text": "Ensures that APIs adhere to predefined contracts for communication"
      },
      {
        "id": "b",
        "text": "Can be used to test the communication of microservices"
      },
      {
        "id": "c",
        "text": "Validates the compatibility of two separate systems"
      },
      {
        "id": "d",
        "text": "Verifies whether a system satisfies its contractual requirements"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Contract testing ensures APIs follow predefined communication agreements, helping manage API dependencies.\n\nWRONG (b): Contract testing can be used to test communication between microservices.\n\nWRONG (c): Contract testing can validate the compatibility of two separate systems.\n\nCORRECT (d): Contract testing has no relation to the contractual requirements."
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "TAE-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are on a project where the teams are working on breaking down an old monolithic web service into several microservices. Which of the following documents can assist you in identifying dependencies and developing your Test Automation Solution (TAS) for API testing?\n\ni. Application programming interface (API) specification\nii. System architecture diagram\niii. Test strategy\niv. Release notes",
    "options": [
      {
        "id": "a",
        "text": "i, ii, and iv"
      },
      {
        "id": "b",
        "text": "i and ii"
      },
      {
        "id": "c",
        "text": "ii, iii, and iv"
      },
      {
        "id": "d",
        "text": "i"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Release notes do not help to learn the API connections and details.\n\nCORRECT (b): - API specification provides details about endpoints, and the system architecture diagram shows the relationships between different components.\n\nWRONG (c): - The test strategy and release notes don't provide specific information about API dependencies needed for building a TAS.\n\nWRONG (d): - The API specification alone is not sufficient; the system architecture diagram is also needed to understand the relationships between different services."
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "TAE-6.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": true,
    "text": "You are working on a test automation project that is used to automate GUI testing of an online web shop. The web shop contains a wizard which helps users to set up their accounts, their name, billing address, shipping address, and security credentials. During the test automation, the steps of the wizard are recorded first. Screenshots are taken and stored during these steps. We consider these as the baseline. The baseline was then rerun with no change to the SUT and all tests passed.\n\nAfter the developers submit a change to the wizard, the recorded test scripts are played back, and the screenshots of each step are compared with the baseline screenshots. During a playback, all test cases failed, even though the visible content seems unchanged.\n\nWhat could be the cause?",
    "options": [
      {
        "id": "a",
        "text": "An internally used technical session ID is also recorded, which changes during the playback. This should be substituted with variables to avoid failures."
      },
      {
        "id": "b",
        "text": "Screenshots are not correctly associated with the test steps, leading to comparisons being made in the wrong order."
      },
      {
        "id": "c",
        "text": "The failure occurred because relying solely on screenshot comparisons led to inaccurate results."
      },
      {
        "id": "d",
        "text": "The date in the GUI header is different from the date when it was recorded. This date field should be excluded from the comparison"
      },
      {
        "id": "e",
        "text": "Screenshots were captured in low resolution, causing details to be blurred, making the comparison unreliable."
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "explanation": "CORRECT (a): Session IDs change with each session, causing screenshot differences even when content looks the same.\n\nWRONG (b): Order isn’t relevant, as all screenshots fail, which wouldn’t happen if only order was the issue.\n\nWRONG (c): This doesn’t explain why all comparisons fail when content appears unchanged.\n\nCORRECT (d): Dynamic elements like dates in GUI can cause false negatives and should be excluded from comparisons.\n\nWRONG (e): Browser zoom changes are unlikely to cause all failures if content appears identical to the human eye."
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "TAE-6.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You are working on a project where you are responsible to extend the current TAF that is used for web service testing, with additional test logging capabilities. The TAF uses a third-party tool to create file logs and an HTML report to quickly visualize the test results. In the test implementation, various dynamic values are used to generate the actual test data, and the SUT, a web service without a UI, connects to multiple legacy test systems. Unfortunately, the tests are very unstable, and you need to add meaningful information to the test logging to better analyze the reasons for the failures.\n\nWhat additional information should not be included in the test logging to make it more useful and why?",
    "options": [
      {
        "id": "a",
        "text": "Timestamps should be included in the test logs to see if the failure connects to a given legacy system outage"
      },
      {
        "id": "b",
        "text": "Screenshots should be included to see actual request-response pairs"
      },
      {
        "id": "c",
        "text": "Randomly generated values should be logged to allow for analysis of the actual results occured during test executions"
      },
      {
        "id": "d",
        "text": "In case of assertion failures meaningful information like actual results versus expected results should be logged instead of stack traces"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): The timestamps can help see when there are problems and if they are connected to a legacy service outage that affects the functionality of the SUT.\n\nCORRECT (b): The SUT is a web service without a UI, so screenshots are irrelevant. Logging request and response data is more useful for analyzing web service interactions.\n\nWRONG (c): The randomly generated values will not be visible for later investigation.\n\nWRONG (d): Focused assertion messages can aid the investigation of the failures."
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "TAE-6.1.2",
    "level": "K4",
    "points": 3,
    "chapter": 6,
    "multi": false,
    "text": "During the design phase of a performance critical software product, management decides to create a TAS to do load testing on the software to measure its performance. The product contains different architectural components, including a browser-based front end, microservices implemented in the back end, and a relational database. It is important to measure all individual transactions in the entire architectural stack.\n\nHow can you automatically provide this information from the test automation software?",
    "options": [
      {
        "id": "a",
        "text": "You cannot. This information has to be gathered manually at the end of every transaction"
      },
      {
        "id": "b",
        "text": "The test automation engineer (TAE) can record the timing information during the execution of all transactions"
      },
      {
        "id": "c",
        "text": "Trace IDs should be populated across the software components and measured time values should be associated with these IDs to correlate the performance data."
      },
      {
        "id": "d",
        "text": "Third-party tools should be inserted into the different layers of the architecture and these agents should log the collected data into a database"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Manual data collection is too time-consuming and error-prone; automation is essential.\n\nWRONG (b): This doesn’t explain how data can be correlated across different components.\n\nCORRECT (c): Trace ID is the appropriate way to associate the performance data across the different architectural components, enabling system-wide performance analysis.\n\nWRONG (d): Third-party tools can collect data but don’t provide necessary correlation for complete analysis."
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "TAE-6.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "As a test automation engineer, you are tasked with demonstrating to management whether the test success rate is improving over a series of test runs.\n\nWhat is the right approach to fulfill this requirement?",
    "options": [
      {
        "id": "a",
        "text": "Compare the test results with the expected results"
      },
      {
        "id": "b",
        "text": "Use traffic light indicators to show test execution progress"
      },
      {
        "id": "c",
        "text": "Detailed test reports with percentages of test completion"
      },
      {
        "id": "d",
        "text": "Implement an analysis feature that compares previous test results and highlights trends"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): The comparison of the test results and the expected results only gives us the pass/fail rate for one test run only.\n\nf) Is not correct. The traffic lights are only for showing the summary of progress of test cases execution and completion within one test run cycle only. g) Is not correct. Detailed reports with Percentages of test completion are only for showing the outcome of test cases execution and completion within one test run cycle only. h) Is correct. This is the correct implementation whereby the analysis feature is able to compare pass rate of previous test run cycles and compare with latest and plot in a trend analysis display"
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "TAE-7.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 7,
    "multi": false,
    "text": "Your team has developed a Test Automation Solution (TAS) for a computer-aided design (CAD) software program. This software has several different versions in production and has been ported to different languages and platforms. Manual testers have been using the TAS on their local computers with different language settings, versions, and platforms. Before proceeding with further automated testing, you need to verify the test automation environment. What is an important consideration when verifying the environment for this TAS?",
    "options": [
      {
        "id": "a",
        "text": "Establish a central repository to verify that all testers are using the same version of the capture/playback tool and can access it correctly"
      },
      {
        "id": "b",
        "text": "Create and document a procedure to verify the proper installation of the CAD software on each tester's machine"
      },
      {
        "id": "c",
        "text": "Set up a central test environment where the CAD software is installed and verify that automation scripts can interact with it from each local computer"
      },
      {
        "id": "d",
        "text": "Use configuration management to verify the consistency of test data and scripts across different environments"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Correct - This option focuses on verifying that all testers can access and use the same version of the capture/playback tool, which is crucial for ensuring consistency in the test automation environment.\n\nb) Incorrect - While documenting installation procedures is important, it's not specifically about verifying the test automation environment.\n\nc) Incorrect - This approach doesn't address the need for different environments as specified in the scenario.\n\nd) Incorrect - While configuration management is important, this option doesn't specifically address verifying the test automation environment."
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "TAE-7.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 7,
    "multi": true,
    "text": "You work in a software development team that requires testing to occur in many different test environments. Your manager has expressed that the team is spending a significant amount of time overcoming false-positive results because the test automation solution (TAS) is not configured correctly when using it in a new test environment. Additionally, there appear to be version differences when comparing the TAS in each test environment. Even new test environments sometimes are set up with very old TAS components.\n\nWhich TWO options would help address this situation?",
    "options": [
      {
        "id": "a",
        "text": "Create an automated installation script for the tools and configurations that make up the TAS"
      },
      {
        "id": "b",
        "text": "Limit the TAS to only be used in the most important test environments"
      },
      {
        "id": "c",
        "text": "Utilize a repository to store the TAS that is accessible to all test environments"
      },
      {
        "id": "d",
        "text": "Leverage manual testing to verify that the TAS has been configured properly in all test environments"
      },
      {
        "id": "e",
        "text": "Due to time constraints skip the implementation of components tests for the TAS"
      }
    ],
    "correct": [
      "a",
      "c"
    ],
    "explanation": "CORRECT (a): Automated installation and configuration scripts ensure consistency and repeatability during TAS setup.\n\nWRONG (b): The TAS should be designed for portability in multiple test environments.\n\nCORRECT (c): Repositories can be used to verify consistent TAS versions across all test environments.\n\nWRONG (d): Manual testing is not a scalable solution.\n\nWRONG (e): By omitting component tests, potential issues could go undetected"
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "TAE-7.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "You are about to verify an automated test suite. During the verification process you have found that some test scripts pass one time and fail at another, therefore not providing reliable test results.\n\nWhat should you do to verify the validity of your test scripts?",
    "options": [
      {
        "id": "a",
        "text": "This is due to the parallel execution of the test scripts; synchronization would solve the problem"
      },
      {
        "id": "b",
        "text": "Re-execute the automated test suite and analyze the test results again"
      },
      {
        "id": "c",
        "text": "Remove the test scripts from the automated test suite and analyze them separately"
      },
      {
        "id": "d",
        "text": "This happens because several test scripts are using the same test data, so the separation of test data for each test script would resolve the problem"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): The issue should be analyzed closely since the root cause is not yet known.\n\nWRONG (b): This answer does not suggest any solution.\n\nCORRECT (c): This should be the first task in this case.\n\nWRONG (d): The issue should be analyzed closely since the root cause is not yet known."
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "TAE-7.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "You have a test suite containing 25 automated tests that verify the login functionality of an application’s home page. The test suite is executed at the end of each two-week sprint cycle for regression test purposes. You notice that two test cases out of the 25 may sometimes cause a race condition in the application or receive a random error.\n\nWhat action should you take for these two test cases?",
    "options": [
      {
        "id": "a",
        "text": "Take no action because sometimes they execute successfully"
      },
      {
        "id": "b",
        "text": "Reduce the amount of test cases in the test suite from 25 to 15 and see if the test suite passes with the smaller amount"
      },
      {
        "id": "c",
        "text": "Remove the two test cases from the active test suite and analyze them separately to find the root cause"
      },
      {
        "id": "d",
        "text": "Replace the two test cases with ones that pass repeatedly so that the test suite still has 25 automated test cases"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): The goal is to have repeatable tests that give consistent test results.\n\nWRONG (b): Eliminating coverage is not a good response to the situation.\n\nCORRECT (c): This allows the test suite to continue to be used for repeatable test results while providing time to triage problem test cases. They will be re-added to the test suite once corrected.\n\nWRONG (d): This does not address the random errors that the application is experiencing."
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "TAE-7.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "You are working on a project to automate a regression test suite. When the regression test suite was executed manually last time, all the tests passed. But when you execute them via the test automation solution (TAS), you find there are some failed tests.\n\nWhat should you do to handle this situation?",
    "options": [
      {
        "id": "a",
        "text": "Analyze log files to identify the root cause of the problem"
      },
      {
        "id": "b",
        "text": "Eliminate these test cases from the automated test suite, so the remaining tests can pass"
      },
      {
        "id": "c",
        "text": "Open a defect for the SUT as the failed tests are indicating an SUT problem"
      },
      {
        "id": "d",
        "text": "This is normal because automated tests behave differently than manual tests"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Log file analysis can identify the root cause of the problem.\n\nWRONG (b): This process will not help solve the original issue.\n\nWRONG (c): These tests do not directly indicate a problem in the SUT; they should be analyzed first.\n\nWRONG (d): The statement is false."
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "TAE-7.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "You are preparing to execute a test automation suite for a security-critical application which has to fulfill the highest security requirements.\n\nWhich approach should you follow to verify the test automation code?",
    "options": [
      {
        "id": "a",
        "text": "Search the test logs for possible credential data"
      },
      {
        "id": "b",
        "text": "Eliminate test cases using sensitive test data"
      },
      {
        "id": "c",
        "text": "Execute the test suite slowly and methodically to check if there are any security vulnerabilities"
      },
      {
        "id": "d",
        "text": "Use a static analysis tool to identify security vulnerabilities"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Test logs may not contain credential data present in the automation code.\n\nWRONG (b): It does not make sense to eliminate test cases as it will affect code coverage.\n\nWRONG (c): Slower test execution does not necessarily reveal security vulnerabilities.\n\nCORRECT (d): Static analysis tools support identification of security vulnerabilities."
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "TAE-8.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "You are working on a test automation project that is used to automate graphical user interface (GUI) testing of an online web shop. The web shop contains a wizard which helps users set up their accounts: their names, billing address, shipping address and security credentials. Currently, the development of the software is in a phase when usability testers check the wizard and give recommendations about the necessary changes. This is done iteratively; the developers modify the GUI, the usability testers check the modifications and repeat the usability testing. The test automation is mainly focusing on maintenance testing. In these UI-based test cases, data also includes UI locator values. An existing problem is that developers often change the internal identifiers of UI elements, so maintaining tests requires a lot of effort.\n\nWhich of the following could be an important opportunity for improvement?",
    "options": [
      {
        "id": "a",
        "text": "Apply schema validation, which checks if mandatory response elements are present on the GUI"
      },
      {
        "id": "b",
        "text": "Improve test logging to include information about UI elements and their locators to easily identify the broken test cases"
      },
      {
        "id": "c",
        "text": "Create a test histogram, which enables the TAEs to identify and select test cases that are fragile"
      },
      {
        "id": "d",
        "text": "Use an artificial intelligence (AI) algorithm - which is based on machine learning and image recognition - to identify the new selectors and use self-healing to fix the test cases"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Schema validation can be applied in API testing, not GUI testing.\n\nWRONG (b): This is a manual and slow process.\n\nWRONG (c): A test histogram enables identification of fragile test cases, but it does not solve the underlying problem.\n\nCORRECT (d): Using an AI based algorithm supports identification of broken locators and self-healing of the test cases."
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "TAE-8.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "Your organization maintains a regression test suite of over 1000 automated test cases that has been extremely reliable over the years. Recently the development team has decided to modernize their technology stack and are currently refactoring how their front end operates. You notice that the application is far more API-driven than the previous version and this has an impact on how UI elements render. You anticipate this is going to impact the success rate of 75% of your automated test cases.\n\nWhat data analysis approaches should you use to determine how to fix your impacted automated test cases?",
    "options": [
      {
        "id": "a",
        "text": "Run the test cases several times in a CI/CD pipeline, perform visual report analysis, and draw conclusions from a test histogram"
      },
      {
        "id": "b",
        "text": "Use AI algorithms and API schema validation tools"
      },
      {
        "id": "c",
        "text": "Recreate automated test cases to replace the ones that are not working properly and will execute on the new application"
      },
      {
        "id": "d",
        "text": "Avoid automating certain test cases after analyzing exception logs, screenshots, and error messages"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Analyzing test histograms for 1000 test cases will be time consuming. Plus, we can already anticipate the impact on test cases without generating histogram data.\n\nCORRECT (b): AI algorithms can be used to self-heal the test cases against UI locator value changes, and schema validation tools can be used to quickly assess API schema updates.\n\nWRONG (c): Recreating 75% of the test harness is not feasible when other options are available.\n\nWRONG (d): Although logs, screenshots, and error messages are valid data sources to verify, eliminating test cases is not a viable strategy."
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "TAE-8.1.2",
    "level": "K4",
    "points": 3,
    "chapter": 8,
    "multi": true,
    "text": "You are working on an automated regression test suite that takes too long a time to execute, and its execution does not finish overnight. The test environment is only available for regression testing during the night. Running multiple suites in parallel is not an option, as the target system is expensive and exists only as a single instance. What should be your next steps to ensure the test suite execution finishes overnight?",
    "options": [
      {
        "id": "a",
        "text": "Split the test suite into multiple parts, executing the parts on different nights of the week"
      },
      {
        "id": "b",
        "text": "Isolate test result verification from the test execution and start the verification process after the test execution during morning hours"
      },
      {
        "id": "c",
        "text": "Rewrite the tests using the keyword-driven technique as that will be executed faster"
      },
      {
        "id": "d",
        "text": "Remove some tests from the test suite to reduce overall execution time"
      },
      {
        "id": "e",
        "text": "Remove any duplicate tests from the test suite"
      }
    ],
    "correct": [
      "a",
      "e"
    ],
    "explanation": "CORRECT (a): Splitting up the test suite helps to ensure that the test execution is finished overnight.\n\nWRONG (b): Test result verification cannot be isolated from the test execution process.\n\nWRONG (c): It is not stated generally that the keyword-driven technique executes faster.\n\nWRONG (d): It would reduce the scope to a high-level regression, which in the long term, could potentially result in defects propagating into production.\n\nCORRECT (e): Removing duplications can reduce test execution time."
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "TAE-8.1.2",
    "level": "K4",
    "points": 3,
    "chapter": 8,
    "multi": false,
    "text": "As a TAE, you are evaluating new versions of core libraries.\n\nWhich is the correct order that can help you achieve these results?",
    "options": [
      {
        "id": "a",
        "text": "Create adoption plan; determine impact; update dependencies; perform pilot"
      },
      {
        "id": "b",
        "text": "Perform pilot; determine impact; create adoption plan; update dependencies"
      },
      {
        "id": "c",
        "text": "Update dependencies; determine impact; perform pilot; create adoption plan"
      },
      {
        "id": "d",
        "text": "Determine impact; update dependencies; create adoption plan; perform pilot"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): The adoption plan needs to occur after impact is determined.\n\nCORRECT (b): This is the correct order of the activities.\n\nWRONG (c): Updating of dependencies needs to occur after the creation of the adoption plan.\n\nWRONG (d): Determining impact needs to occur after performing a pilot."
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "TAE-8.1.3",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "You have been performing a quality review of a TAS to optimize the interaction of controls within the GUI. The GUI includes several types of controls (e.g., dropdown list, checkbox, text field). There are also separate functions in the test scripts which act upon the different types of GUI controls to gather information and to set them (e.g., visible/not visible, enabled/not enabled). Which of the following steps should you consider to increase the efficiency of the TAS?",
    "options": [
      {
        "id": "a",
        "text": "Separate the testing of the controls based on their types into different test suites"
      },
      {
        "id": "b",
        "text": "Research if there is a test automation tool which can replace the current solution"
      },
      {
        "id": "c",
        "text": "Check if there are any functions that can work with several types of controls, and consolidate the test scripts using these functions"
      },
      {
        "id": "d",
        "text": "Use the new operating system functions in the test scripts to handle the GUI controls"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Separating the testing of controls should be implemented within the core libraries.\n\nWRONG (b): It is not a direct improvement.\n\nCORRECT (c): It is an improvement to consolidate test scripts in this case.\n\nWRONG (d): It is not a direct improvement."
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "TAE-8.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "As a test automation engineer, you have automated the performance test of a customer management system. In order to effectively test the performance of this system, you need to create diverse test data that includes customers with varying profiles based on different input criteria.\n\nWhat is the best way to implement such a solution?",
    "options": [
      {
        "id": "a",
        "text": "Employ a test automation tool to invoke a web service API that creates new user accounts and populates their profiles with the specified data."
      },
      {
        "id": "b",
        "text": "Register these users manually via the GUI, so the GUI functionality can also be tested"
      },
      {
        "id": "c",
        "text": "Use the production database during the test as it has the real volume and type of data"
      },
      {
        "id": "d",
        "text": "Implement a test automation script to anonymize customer data before using it during the performance test"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): It offers an automated and quick solution to the problem.\n\nWRONG (b): This is not a TAS.\n\nWRONG (c): Using a production database directly as the source of the test data holds high risk.\n\nWRONG (d): Anonymization of test data is important, but it is out of the scope of this solution."
  },
  {
    "id": 41,
    "exam": "ASTQB",
    "num": "1",
    "lo": "TAE-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a disadvantage of test automation?",
    "options": [
      {
        "id": "a",
        "text": "They are less subject to human error during execution"
      },
      {
        "id": "b",
        "text": "They execute faster than manual tests"
      },
      {
        "id": "c",
        "text": "They always verify exactly what they were programmed to verify"
      },
      {
        "id": "d",
        "text": "They can execute more complex tests more reliably"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is a disadvantage because the test coverage can’t be expanded by varying the tests. A, B and D are all advantages to using test automation."
  },
  {
    "id": 42,
    "exam": "ASTQB",
    "num": "2",
    "lo": "TAE-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following characteristics of Agile software development allows the team to cover all test levels with the appropriate amount and depth of automation?",
    "options": [
      {
        "id": "a",
        "text": "The right tools"
      },
      {
        "id": "b",
        "text": "The right training for the test automation engineers"
      },
      {
        "id": "c",
        "text": "The elimination of silos within the team"
      },
      {
        "id": "d",
        "text": "The early publishing of completed requirements"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Per the syllabus. Eliminating the silos between developers, testers and other stakeholders helps ensure the proper test automation is built at the right time. A and B are needed for all SDLCs. D is not correct because in Agile the requirements are changing."
  },
  {
    "id": 43,
    "exam": "ASTQB",
    "num": "3",
    "lo": "TAE-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You have a highly technical test automation team with all engineers being adept at coding in a wide set of languages. Which of the following would be the best tool to use for implementing test automation for the SUT?",
    "options": [
      {
        "id": "a",
        "text": "Full code"
      },
      {
        "id": "b",
        "text": "Commercial off-the-shelf (COTS)"
      },
      {
        "id": "c",
        "text": "Open-source"
      },
      {
        "id": "d",
        "text": "A tool based on the same code as the SUT"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This would be the best choice if possible. This will allow easier integration into the CI/CD pipeline and the developers can also provide some support to the engineers if needed."
  },
  {
    "id": 44,
    "exam": "ASTQB",
    "num": "4",
    "lo": "TAE-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "How does observability in the SUT help with test automation development?",
    "options": [
      {
        "id": "a",
        "text": "a. The TAE can watch the code while it executes"
      },
      {
        "id": "b",
        "text": "The automation software can access interfaces that will let it determine if the expected results have been achieved"
      },
      {
        "id": "c",
        "text": "The automation software can access controls such as function calls, to drive the software and verify results"
      },
      {
        "id": "d",
        "text": "It makes the components and their interfaces more clear and easier to understand"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): By accessing these interfaces, the software can verify if the actual result matches the expected result."
  },
  {
    "id": 45,
    "exam": "ASTQB",
    "num": "5",
    "lo": "TAE-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which environment should be used to run performance testing in order to obtain the most accurate results?",
    "options": [
      {
        "id": "a",
        "text": "Local dev"
      },
      {
        "id": "b",
        "text": "Build"
      },
      {
        "id": "c",
        "text": "Integration"
      },
      {
        "id": "d",
        "text": "Staging"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This system should be the closest replication of production. Performance tests can be run in all environments, but until you have everything integrated and a system that is representative of production, the results may not be indicative of production performance."
  },
  {
    "id": 46,
    "exam": "ASTQB",
    "num": "6",
    "lo": "TAE-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which environment is best suited for running automated API tests?",
    "options": [
      {
        "id": "a",
        "text": "Local dev"
      },
      {
        "id": "b",
        "text": "Build"
      },
      {
        "id": "c",
        "text": "Integration"
      },
      {
        "id": "d",
        "text": "Staging"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The integration environment is the best place to run these automated tests. They can be run earlier, but stubs and mocks will likely be required because the integrations are not in place."
  },
  {
    "id": 47,
    "exam": "ASTQB",
    "num": "7",
    "lo": "TAE-2.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 2,
    "multi": false,
    "text": "You are working on a new test automation project. The developers have implemented a CI/CD pipeline with automatic generation of environments as needed. Everyone agrees that it would be best if the test automation code was executed automatically as the code passes through the pipeline. How does this affect your approach to the automation implementation?",
    "options": [
      {
        "id": "a",
        "text": "Automated reporting will be critical"
      },
      {
        "id": "b",
        "text": "You will need a tool that integrates easily and uses similar technology to the SUT"
      },
      {
        "id": "c",
        "text": "Environment setups will need to be tested prior to the execution of any test automation as they are being generated from code"
      },
      {
        "id": "d",
        "text": "There will be no need for a test architect since the developers have already implemented CI/CD and the automation code just needs to comply with the pipeline rules"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): In this environment, you will need a tool that allows you to develop code that will work with the SUT code – allowing automated execution within the CI/CD and simplifying the tool landscape. A may be true, but that isn’t necessarily indicated by the question. C is less likely to be needed than if the environments were manually configured. D is unlikely because test architects are needed with any test automation solution that is complex."
  },
  {
    "id": 48,
    "exam": "ASTQB",
    "num": "8",
    "lo": "TAE-2.2.2",
    "level": "K4",
    "points": 3,
    "chapter": 2,
    "multi": false,
    "text": "You have done the following tool comparison: Tool A Tool B Tool C Tool D Record/Playback capability O O O X Integrates with CI/CD pipeline O P P O API automation O X P O Mobile capability X O O P Source COTS COTS Open Source Open Source O = out of the box functionality P = functionality can be implemented with programming X = functionality is not available You have assigned the following importance to these areas: Record/Playback – nice to have Integrates with CI/CD – nice to have API automation – must have Mobile – nice to have Source – open source preferred The team who will use this tool has strong programming skills. Given this information, which is the best tool for your organization?",
    "options": [
      {
        "id": "a",
        "text": "Tool A"
      },
      {
        "id": "b",
        "text": "Tool B"
      },
      {
        "id": "c",
        "text": "Tool C"
      },
      {
        "id": "d",
        "text": "Tool D"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): The best choice in this case. They don’t need the record/playback capability since they are experienced programmers. D is better than C because it has built in API testing capability."
  },
  {
    "id": 49,
    "exam": "ASTQB",
    "num": "9",
    "lo": "TAE-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "In which part of the test automation design should you find the interface to the test management software?",
    "options": [
      {
        "id": "a",
        "text": "In the gTAA"
      },
      {
        "id": "b",
        "text": "In the TAA"
      },
      {
        "id": "c",
        "text": "In the TAS"
      },
      {
        "id": "d",
        "text": "In the SUT"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The interface to the test management software is described in the gTAA."
  },
  {
    "id": 50,
    "exam": "ASTQB",
    "num": "10",
    "lo": "TAE-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which is the correct ecosystem in which the test automation runs?",
    "options": [
      {
        "id": "a",
        "text": "TAF"
      },
      {
        "id": "b",
        "text": "TAS"
      },
      {
        "id": "c",
        "text": "TAA"
      },
      {
        "id": "d",
        "text": "gTAA"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The test automation runs within the ecosystem of the Test Automation Solution."
  },
  {
    "id": 51,
    "exam": "ASTQB",
    "num": "11",
    "lo": "TAE-3.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following elements of the TAA support connecting to the SUT via APIs?",
    "options": [
      {
        "id": "a",
        "text": "Test generation"
      },
      {
        "id": "b",
        "text": "Test definition"
      },
      {
        "id": "c",
        "text": "Test adaptation"
      },
      {
        "id": "d",
        "text": "Test execution"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Test adaptation. (The ASTQB answer sheet gives no further rationale — see syllabus section 3.1.2 for TAE-3.1.2.)"
  },
  {
    "id": 52,
    "exam": "ASTQB",
    "num": "12",
    "lo": "TAE-3.1.3",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You have inherited a set of test automation that was developed over several years by multiple test automation engineers. You have found that the framework is very complicated with the same page and flow models incorporated into multiple scripts. Scripts that access page models for different SUTs are all mixed together in one directory. It also appears that generic user actions have been implemented into multiple scripts. What is the proper pairing between these items and the TAF layers?",
    "options": [
      {
        "id": "a",
        "text": "Page and Flow models to the Business Logic Layer, generic user actions to Core Libraries Layer, the remaining script code to Test Scripts Layer"
      },
      {
        "id": "b",
        "text": "Page Models and generic user actions to Core Libraries Layer, Flow Models to Business Logic Layer"
      },
      {
        "id": "c",
        "text": "Test Scripts to the Test Script Layer, SUT specific code to the Test Adaptation Layer, anything called multiple times to the Core Libraries layer"
      },
      {
        "id": "d",
        "text": "Logging and Reporting to the Business Logic Layer, API and Database tests to the Core Libraries, Core Library calls to the Test Script Layer"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Page and Flow models to the Business Logic Layer, generic user actions to Core Libraries Layer, the remaining script code to Test Scripts Layer. (The ASTQB answer sheet gives no further rationale — see syllabus section 3.1.3 for TAE-3.1.3.)"
  },
  {
    "id": 53,
    "exam": "ASTQB",
    "num": "13",
    "lo": "TAE-3.1.4",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You have just started a new job with a company that builds application software. Your manager knows nothing about test automation but likes the idea. He has requested a demo of some test automation on one of their applications in production. He would like to have the demo at the end of this week. You have explained to him that you can put together a quick demo, but that developing real maintainable test automation will take longer. Given this information, what approach would be the most cost effective and expedient to create the demo?",
    "options": [
      {
        "id": "a",
        "text": "Capture/playback"
      },
      {
        "id": "b",
        "text": "Structured scripting"
      },
      {
        "id": "c",
        "text": "Data-driven testing"
      },
      {
        "id": "d",
        "text": "Behavior-driven development"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This will be fastest way to create a demo. The code won’t be maintainable, but you’ve already made that clear to your manager."
  },
  {
    "id": 54,
    "exam": "ASTQB",
    "num": "14",
    "lo": "TAE-3.1.5",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": ". You have been maintaining a Test Automation Solution (TAS) and you are finding that you are frequently needing to change the test cases when one of the objects on a page in the UI changes. Because the objects are used by multiple tests, one changed object can result in needing to modify multiple tests. This is taking a considerable amount of time each time the team receives a new code drop from the developers. What design principle should you apply when refactoring the code to make it more maintainable?",
    "options": [
      {
        "id": "a",
        "text": "The SOLID principles"
      },
      {
        "id": "b",
        "text": "Design patterns"
      },
      {
        "id": "c",
        "text": "Page object pattern"
      },
      {
        "id": "d",
        "text": "Flow model pattern"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): In this case, capturing all the UI elements in a page model and then having the tests interact with the page model will save considerable maintenance time. In this way, when an element changes on the page, only the model needs to be updated rather than having to update each test script."
  },
  {
    "id": 55,
    "exam": "ASTQB",
    "num": "15",
    "lo": "TAE-4.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You have been assigned to a new test automation project. The developers are using Java with Spring Boot in their deployment pipeline. They would like to see the automation using the same tools, particularly for the deployment and execution of the tests. Given this information, what is a primary consideration you need to have when building the team?",
    "options": [
      {
        "id": "a",
        "text": "How many people will you need"
      },
      {
        "id": "b",
        "text": "Can you find the people you need with the specific programming skills"
      },
      {
        "id": "c",
        "text": "Which test levels will be targeted by the automation"
      },
      {
        "id": "d",
        "text": "Where should the team members be located"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Because there are specific skills required, you need to know if you can find people with those skills."
  },
  {
    "id": 56,
    "exam": "ASTQB",
    "num": "16",
    "lo": "TAE-4.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 4,
    "multi": false,
    "text": "You have developed a full suite of test automation for a new mobile application. This involves using physical devices for the tests. This has worked well, but you are concerned with future maintenance requirements. Which of the following is an area that should be considered with this approach?",
    "options": [
      {
        "id": "a",
        "text": "License cost of the devices"
      },
      {
        "id": "b",
        "text": "Simulator installation responsibility"
      },
      {
        "id": "c",
        "text": "OS upgrades for the physical devices and retesting/test updates as needed"
      },
      {
        "id": "d",
        "text": "Acceptance testing using the physical devices versus using simulated devices to gain user approval"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is an area to be considered since OSs update frequently and across a large set of physical devices this could take a prohibitive amount of time to install the updates and perform the retesting. This may lead you to conclude that simulators might be better and more flexible."
  },
  {
    "id": 57,
    "exam": "ASTQB",
    "num": "17",
    "lo": "TAE-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is a maintainability issue with some record/playback tools?",
    "options": [
      {
        "id": "a",
        "text": "The user interface is difficult to use"
      },
      {
        "id": "b",
        "text": "The logging is burdensome"
      },
      {
        "id": "c",
        "text": "The coverage is usually inappropriate"
      },
      {
        "id": "d",
        "text": "The data is hardcoded"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): A common problem with record/playback tools. They record the inputs and sometimes put them into the code rather than parameterizing these variables."
  },
  {
    "id": 58,
    "exam": "ASTQB",
    "num": "18",
    "lo": "TAE-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the purpose of using static analyzers on test automation code?",
    "options": [
      {
        "id": "a",
        "text": "They shouldn’t be used for test automation code"
      },
      {
        "id": "b",
        "text": "To ensure a higher quality of the code by checking for coding standards"
      },
      {
        "id": "c",
        "text": "To optimize the code for faster execution"
      },
      {
        "id": "d",
        "text": "To find and eliminate any global variables"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is what static analyzers do."
  },
  {
    "id": 59,
    "exam": "ASTQB",
    "num": "19",
    "lo": "TAE-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "Your organization is using a modern continuous integration system which differentiates between the build and deployment phases of the continuous delivery pipelines. The developers have implemented some testing in the build pipeline and that seems to be working, but you are seeing frequent issues with transaction workflows that are either missing or not implemented correctly. You have now developed tests to cover the problem scenarios. How should this testing be implemented in the pipeline?",
    "options": [
      {
        "id": "a",
        "text": "It should be implemented as integration tests in the continuous integration pipeline"
      },
      {
        "id": "b",
        "text": "It should be implemented as component integration tests in the continuous deployment pipeline"
      },
      {
        "id": "c",
        "text": "It should be implemented as system tests in the continuous deployment pipeline"
      },
      {
        "id": "d",
        "text": "It should be implemented as component tests in the continuous integration pipeline"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): These are system level tests and should be implemented in the continuous deployment pipeline."
  },
  {
    "id": 60,
    "exam": "ASTQB",
    "num": "20",
    "lo": "TAE-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are developing performance efficiency tests to combat production issues with slow performance, particularly with any reporting transactions. Where should these be implemented in a CI/CD environment to provide the earliest quality gate?",
    "options": [
      {
        "id": "a",
        "text": "In the continuous integration pipeline"
      },
      {
        "id": "b",
        "text": "In the continuous deployment pipeline"
      },
      {
        "id": "c",
        "text": "After the deployment, in the test environment"
      },
      {
        "id": "d",
        "text": "After the deployment, in the production environment"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This would give the earliest feedback possible. A is not correct because reports won’t be executable this early in the build cycle. C may be possible, but it is later than would be idea. D is probably not an acceptable approach because it’s very late and it could take down the production environment."
  },
  {
    "id": 61,
    "exam": "ASTQB",
    "num": "21",
    "lo": "TAE-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How are test environments influenced by configuration management?",
    "options": [
      {
        "id": "a",
        "text": "Environments are only accessed through the configuration management software"
      },
      {
        "id": "b",
        "text": "Environments are secured and security tested when added to configuration management"
      },
      {
        "id": "c",
        "text": "Environment configuration and access information can be stored in configuration management"
      },
      {
        "id": "d",
        "text": "Environment access is controlled by the configuration management system and software"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): In the case of multiple environments being used, the configuration and URLs of specific environments can be tracked under configuration management to ensure changes are recorded and versions are clearly saved and reusable."
  },
  {
    "id": 62,
    "exam": "ASTQB",
    "num": "22",
    "lo": "TAE-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the primary purpose of using a feature toggle in testware?",
    "options": [
      {
        "id": "a",
        "text": "To reduce cost of maintaining the test cases"
      },
      {
        "id": "b",
        "text": "To allow execution of certain tests depending on the setting of the toggle"
      },
      {
        "id": "c",
        "text": "To be able to bypass tests that are failing due to a defect"
      },
      {
        "id": "d",
        "text": "To provide more explicit test reporting information based on the toggle setting"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The point of a toggle is to determine which test cases or suites will be executed. These toggles usually align with toggles in the SUT."
  },
  {
    "id": 63,
    "exam": "ASTQB",
    "num": "23",
    "lo": "TAE-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Why is it important to understand the APIs connections?",
    "options": [
      {
        "id": "a",
        "text": "Developers will be coding according to these requirements"
      },
      {
        "id": "b",
        "text": "Performance testing is dependent on understanding each API connection"
      },
      {
        "id": "c",
        "text": "This is where the tester will find the documentation regarding the required parameters"
      },
      {
        "id": "d",
        "text": "The business logic is controlled through the API connections and their relationships"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Test automation should ensure it is automating realistic transactions and this requires understanding the business logic that underlies the various APIs and how they relate to each other."
  },
  {
    "id": 64,
    "exam": "ASTQB",
    "num": "24",
    "lo": "TAE-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the purpose of a contract between services?",
    "options": [
      {
        "id": "a",
        "text": "It defines how the provider will supply services to the consumer"
      },
      {
        "id": "b",
        "text": "It defines who has access to which data for security purposes"
      },
      {
        "id": "c",
        "text": "It defines how a service signs on and off the system"
      },
      {
        "id": "d",
        "text": "It defines the expected speed of transactions and allows that to be tuned up or down as needed"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): It defines how the provider will supply services to the consumer. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.1.3 for TAE-5.1.3.)"
  },
  {
    "id": 65,
    "exam": "ASTQB",
    "num": "25",
    "lo": "TAE-6.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You have created a test automation suite that is testing critical functionality in a new system. It is finding a significant number of defects. You have repeatedly shown your output logs to your manager, but he is not understanding that most of the test cases are failing. What should you do to enhance your logs to make them more understandable?",
    "options": [
      {
        "id": "a",
        "text": "Nothing. Get a new manager."
      },
      {
        "id": "b",
        "text": "Ensure the start and end of every test is logged and presented in bold font"
      },
      {
        "id": "c",
        "text": "Add color to the results showing red for failures and green for passes"
      },
      {
        "id": "d",
        "text": "Add screen shots for all the failures"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This will help make it obvious to your manager that there is a lot of red on the report. Putting together a summary at the beginning would also be helpful. A might also be a good, if not practical, solution. B should already be done but that won’t help your manager understand the logs. D should also already be done, but would help the developers, not your manager."
  },
  {
    "id": 66,
    "exam": "ASTQB",
    "num": "26",
    "lo": "TAE-6.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You have a test automation suite that is encountering a failure. You have investigated the logs, but you can’t see where it’s failing. You’ve tried running the tests manually and they work without a problem. What other information should you capture in your scripts to help debug the problem?",
    "options": [
      {
        "id": "a",
        "text": "Screen shots at the point of the failure"
      },
      {
        "id": "b",
        "text": "Lines of code executed"
      },
      {
        "id": "c",
        "text": "Equivalent manual testing hours saved"
      },
      {
        "id": "d",
        "text": "Number of executions with pass/fail information"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): At this point you want to focus on the one failure that is occurring. Screen shots will likely help. If the point of failure screens aren’t enough, you may need to capture more, but at least it will give a good starting point."
  },
  {
    "id": 67,
    "exam": "ASTQB",
    "num": "27",
    "lo": "TAE-6.1.2",
    "level": "K4",
    "points": 3,
    "chapter": 6,
    "multi": false,
    "text": "You are working on a Customer Relationship Management (CRM) system that uses a third-party address lookup to help the user when they enter an address. This also ensures that only valid addresses are entered into the system. Unfortunately, you are finding that addresses in one state are always failing – Kansas. You can’t see any problems in the test automation code, and you have determined that there are no data or formatting errors in the failing addresses. You have tried the same test manually and you get the same failure. Given this information, what should you do next?",
    "options": [
      {
        "id": "a",
        "text": "You should run the code under the debugger to be sure there are no errors occurring"
      },
      {
        "id": "b",
        "text": "You should contact the third-party vendor and log an incident with information regarding the failed addresses"
      },
      {
        "id": "c",
        "text": "You should capture screen shots of the failure"
      },
      {
        "id": "d",
        "text": "You should ensure that the addresses being entered are valid addresses"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You’ve already made sure that the TAS and SUT are working correctly, and that the data being passed is correct, so it’s likely the problem is with the third party. C might be something you do as part of B, but just the screen shots alone wouldn’t be helpful."
  },
  {
    "id": 68,
    "exam": "ASTQB",
    "num": "28",
    "lo": "TAE-6.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Who should receive a copy of a test progress report?",
    "options": [
      {
        "id": "a",
        "text": "Only the testers until the software is ready to release"
      },
      {
        "id": "b",
        "text": "Management, but only if there is an issue they need to resolve"
      },
      {
        "id": "c",
        "text": "All stakeholders who have a need and/or interest in the testing"
      },
      {
        "id": "d",
        "text": "No one – this information should only be tracked in a dashboard that is accessible to the technical team members"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The test progress report should be published for any stakeholders who have a need or desire to know about the test progress."
  },
  {
    "id": 69,
    "exam": "ASTQB",
    "num": "29",
    "lo": "TAE-7.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 7,
    "multi": false,
    "text": "You have found that the TAS requires different components depending on the deployment environment. This includes such items as URLs being different, different test data and the use of mocks and stubs. What should you do to make the TAS easily installed in the different environments?",
    "options": [
      {
        "id": "a",
        "text": "Ensure all the components are under configuration management with clear versioning and environment requirements"
      },
      {
        "id": "b",
        "text": "Create a different TAS for each unique environment and maintain each of them as separate entities to avoid deployment issues"
      },
      {
        "id": "c",
        "text": "Provide the developers with links to the different environments so they can deploy the TAS for you in the various environments making whatever changes are required during the deployment effort"
      },
      {
        "id": "d",
        "text": "Reduce the use of different test environments and instead just use different versions of the TAS to simulate different environments"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): All components of the TAS should be under configuration management and that includes anything that has to be altered based on environment or even the version of the SUT. B is not correct because this would be a maintenance nightmare as soon as the TAS itself needed to be updated. C is not correct because the developers should not be deploying the TAS – that should be the configuration management team or the test automation team. D is not correct because that doesn’t even make sense."
  },
  {
    "id": 70,
    "exam": "ASTQB",
    "num": "30",
    "lo": "TAE-7.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 7,
    "multi": false,
    "text": "You are working on a new TAF, and you are getting some interesting results. When the tests are run under the TAF, they are noticeably slower than when they are run manually. This happens right from the beginning of execution and stays slow throughout. What is a likely cause of this problem?",
    "options": [
      {
        "id": "a",
        "text": "There is not enough logging, more should be added for better troubleshooting"
      },
      {
        "id": "b",
        "text": "The SUT is not adequately provisioned for the proper performance level"
      },
      {
        "id": "c",
        "text": "The data being used by the test automation is making the tests take too long and should be reduced in size"
      },
      {
        "id": "d",
        "text": "The TAF is affecting the performance for some reason, more timing information may be needed, but there may be too much logging already occurring"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): It sounds like the TAF is affecting the SUT. Excessive logging is a common cause of issues like this. It’s unlikely that it’s a memory leak since it’s happening right from the start. A is not correct because that may exacerbate the problem. B is not correct because it’s OK when the tests are run manually. C is not correct because it’s the same system, so if it’s a database size issue, the results would be seen with manual or automated tests."
  },
  {
    "id": 71,
    "exam": "ASTQB",
    "num": "31",
    "lo": "TAE-7.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "You have been running a set of 10 tests, but you are getting inconsistent results from the tests. What type of “correct” behavior is missing?",
    "options": [
      {
        "id": "a",
        "text": "Repeatability"
      },
      {
        "id": "b",
        "text": "Intrusion"
      },
      {
        "id": "c",
        "text": "Composition"
      },
      {
        "id": "d",
        "text": "Visibility"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): You are not getting the same results, so these tests are not repeatable."
  },
  {
    "id": 72,
    "exam": "ASTQB",
    "num": "32",
    "lo": "TAE-7.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "What do you check when you are checking for completeness of a test automation suite?",
    "options": [
      {
        "id": "a",
        "text": "All tests pass"
      },
      {
        "id": "b",
        "text": "Approximately 10% of the tests fail consistently"
      },
      {
        "id": "c",
        "text": "The test data is correct and available"
      },
      {
        "id": "d",
        "text": "The tests are repeatable across different SUT versions"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Per the syllabus. A and B are not feasible. D is more related to repeatability than to composition/completeness."
  },
  {
    "id": 73,
    "exam": "ASTQB",
    "num": "33",
    "lo": "TAE-7.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "Which of the following would be sufficient to determine that an action has actually occurred?",
    "options": [
      {
        "id": "a",
        "text": "Add a user and verify that the user can no longer log in"
      },
      {
        "id": "b",
        "text": "Add a user and then delete that user"
      },
      {
        "id": "c",
        "text": "Add a user, delete the user, add the user again"
      },
      {
        "id": "d",
        "text": "Add a user and verify in the database that the user exists"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): The only one that actually validates that the action occurred. The others could be masking false positives caused by other failures (such as the delete actually failing)."
  },
  {
    "id": 74,
    "exam": "ASTQB",
    "num": "34",
    "lo": "TAE-7.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "Which of the following is a benefit from using a static analysis tool?",
    "options": [
      {
        "id": "a",
        "text": "The code will run faster"
      },
      {
        "id": "b",
        "text": "The code will have extensive logging"
      },
      {
        "id": "c",
        "text": "The developer will be given suggestions for fixes to problems"
      },
      {
        "id": "d",
        "text": "The tool will automatically generate defect reports for any found problems"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): You often can turn on defect generation, but that’s not a recommended practice as it may flood the defect tracking system with problems that won’t be fixed – such as code formatting."
  },
  {
    "id": 75,
    "exam": "ASTQB",
    "num": "35",
    "lo": "TAE-8.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "You are having repeated failures with the automation every time a new version of the SUT is released. You have done analysis and discovered that the majority of problems are due to issues with the API response elements changing. What is a cost-effective and time-saving approach that you can implement to deal with this issue?",
    "options": [
      {
        "id": "a",
        "text": "Implement mocks and stubs for the services being called via the APIs and use those in your test automation"
      },
      {
        "id": "b",
        "text": "Develop your own APIs to call the services and code your automation to use your own controlled APIs"
      },
      {
        "id": "c",
        "text": "Implement contracts for the APIs and test via the contracts"
      },
      {
        "id": "d",
        "text": "Get a schema validation tool that will check that the APIs comply to the requirements"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): That would be the easiest way to quickly check before executing the tests. A would not help because it would mask the problem. B would not be a valid test. C is what should be done, but that has to be initiated by the developers."
  },
  {
    "id": 76,
    "exam": "ASTQB",
    "num": "36",
    "lo": "TAE-8.1.1",
    "level": "K3",
    "points": 3,
    "chapter": 8,
    "multi": false,
    "text": "You have been reviewing the test automation suite and have found that at least 40% of the code is reused more than twice. What should you do to improve the maintainability of the test suite?",
    "options": [
      {
        "id": "a",
        "text": "Delete the duplicated code"
      },
      {
        "id": "b",
        "text": "Create a library in the framework and store the common code there, then update the individual scripts to call the library code modules as needed"
      },
      {
        "id": "c",
        "text": "Run a schema validation to ensure the code is accurate and the data is being handled correctly"
      },
      {
        "id": "d",
        "text": "Use static analysis to ensure the re-used code is clean and efficient"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Since the code is re-used multiple times, it should be removed from the scripts and put into a library in the framework where it can be called by multiple scripts and maintained only in one place. A is not correct because the code is needed. C is not correct as this is not the problem. There is no indication that the code is not current. D is also not correct although it might be a good idea to run the static analyzer after the code is made into a callable module in the TAF."
  },
  {
    "id": 77,
    "exam": "ASTQB",
    "num": "37",
    "lo": "TAE-8.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "You have a test automation suite for a health care application. This application interfaces with a number of external systems via APIs. You have found that the APIs don’t necessarily return the right codes when a request times out and you’re finding that your automation is getting stuck as you are checking for specific values. In addition to reporting this as a defect, what should you do to make your automation more robust?",
    "options": [
      {
        "id": "a",
        "text": "Ensure that there are waits and timeouts coded in your automation to avoid an eternal wait"
      },
      {
        "id": "b",
        "text": "Stop testing as this is a fundamental defect and invalidates any further tests"
      },
      {
        "id": "c",
        "text": "Terminate your test when the wait exceeds five seconds as this is adequate time for a response"
      },
      {
        "id": "d",
        "text": "Wait until you get a response because continuing on would not make sense for the test"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Anytime waits are used, there should be a timeout to ensure you get out of the wait in the case of an error. B and C might not be warranted as there is nothing to indicate you couldn’t continue without the data being retrieved by the call (you might be able to use default values, etc.). D is not valid as this could become an eternal wait."
  },
  {
    "id": 78,
    "exam": "ASTQB",
    "num": "38",
    "lo": "TAE-8.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "You have a need for your test automation scripts to comb through the SUT system logs looking for specific values. Currently that check is coded into each script because each script is seeking different information. How should this be implemented to reduce maintenance?",
    "options": [
      {
        "id": "a",
        "text": "The logs should be checked manually because that will be more flexible and will require no maintenance"
      },
      {
        "id": "b",
        "text": "The values checked should be compiled together so the search will always be for all values"
      },
      {
        "id": "c",
        "text": "A new reusable function should be developed that can accept data values passed from the test script which will search the log for those specific values"
      },
      {
        "id": "d",
        "text": "A unique function should be developed for each value so that the precise function can be called by the appropriate test script"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): One function should be developed that can take in variables regarding the values to be searched."
  },
  {
    "id": 79,
    "exam": "ASTQB",
    "num": "39",
    "lo": "TAE-8.1.3",
    "level": "K3",
    "points": 2,
    "chapter": 8,
    "multi": false,
    "text": "One of the test automation engineers has built a function for handling GUI components. This function takes the control ID, control type and the action as input parameters and then it executes the action on the specified control. The TAE says all common controls (buttons, check boxes, text boxes, drop downs, etc.) have already been added, but more controls can be added easily to this function. He also pointed out that it will be available for any test automation script that needs to access a particular control. Is this a good approach?",
    "options": [
      {
        "id": "a",
        "text": "No, it is better for a function to deal with only one type of control at a time, such as one for buttons and another for drop down lists"
      },
      {
        "id": "b",
        "text": "No, this function will require considerable maintenance as the GUI adds more pages"
      },
      {
        "id": "c",
        "text": "Yes, this is an example of a good practice that will put common code into one function that can be maintained in one place but used by many test automation scripts"
      },
      {
        "id": "d",
        "text": "Yes, this function will be easy to extend as more individual buttons, dropdowns and text boxes are added to the GUI assuming these will all behave in an expected manner for their control type"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is a good practice and will improve maintenance and reusability. A is to correct as this approach is fine – there is no need to separate this into multiple modules. B is not correct. If anything, adding more pages to the GUI will just reuse the existing controls so will actually reduce maintenance. D is not correct because there would be no need to extend this function as new instances of the controls are added to the SUT."
  },
  {
    "id": 80,
    "exam": "ASTQB",
    "num": "40",
    "lo": "TAE-8.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "You have been asked to develop test automation for a system that has no documented requirements and no existing test cases. You do have access to the business users of the system. How could test automation be used to help you determine what you need to automate?",
    "options": [
      {
        "id": "a",
        "text": "a. The business users could use the record/playback capability to record what they do, and you could then use those recordings as examples to develop maintainable test automation code."
      },
      {
        "id": "b",
        "text": "You could use the tools to prepare test data for the users"
      },
      {
        "id": "c",
        "text": "A test automation script could be used to configure the test environment"
      },
      {
        "id": "d",
        "text": "The developers could use the TAS to define their solution and could implement their code in the TAF which would let you develop the test automation solution from the SUT source code"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This could be done by turning on the record/playback capability to see what the users are doing and then using this information to write good test automation code. B and C can both be done, but that doesn’t help you determine what to automate. D is just crazy!"
  }
];
