// CT-TAS v1.0 — two official sample exams, parsed from the PDFs in trainings/:
//   exam "A"     = ISTQB CT-TAS Sample Exam set A v1.2 (2024-10-16): 40 questions, 49 points. Correct answers, LOs,
//                  K-levels, points and per-option rationales from the matching Sample-Exam-Answers PDF; answer-key
//                  table and per-question answers cross-checked on import. Q30's rationale has garbled list numbering
//                  in the PDF (printed 9.–20.) and is restored in the intended order.
//   exam "ASTQB" = ASTQB Test Automation Strategy sample exam (2024): 40 questions, 49 points (pass = 32, 60 min).
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "CT-TAS-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": true,
    "text": "You discuss the introduction of test automation with project management. Which statements about the advantages and limitations of test automation are correct?",
    "options": [
      {
        "id": "a",
        "text": "Automated test cases are consistent and can be repeated any number of times on diﬀerent versions of the system under test (SUT) and/or environments"
      },
      {
        "id": "b",
        "text": "Resources limited in their allocation only to test automation are no longer available for manual testing"
      },
      {
        "id": "c",
        "text": "Automated test tools must be continuously maintained to be up to date. This maintenance effort has a negative impact on the costs of the testing"
      },
      {
        "id": "d",
        "text": "With test automation, tests can be performed that cannot be executed manually or only with significant effort"
      },
      {
        "id": "e",
        "text": "Feedback on software quality takes much longer because the test results usually have to be evaluated by a tester"
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "explanation": "CORRECT (a): As with any automation repeatability is a major benefit\n\nWRONG (b): Resources can affect the whole project, not just test automation\n\nWRONG (c): If well implemented there is no continuous maintenance requirement\n\nCORRECT (d): Automated tests cases are able to execute scripts in a way that would be cumbersome or difficult (like if crucial timing is needed) for a human being to perform\n\nWRONG (e): Test automation provides feedback more quickly"
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements describes an important technical success factor for any major test automation project?",
    "options": [
      {
        "id": "a",
        "text": "The test automation strategy must ensure that different areas of the SUT can be tested in the same way"
      },
      {
        "id": "b",
        "text": "In automated GUI testing, test data and interaction controls should be very tightly coupled to the GUI layout"
      },
      {
        "id": "c",
        "text": "Ensure that automated test scripts can be isolated and retired easily when they are no longer useful or necessary in a current test execution"
      },
      {
        "id": "d",
        "text": "The test automation project must support the automation of all manual tests for the test automation to achieve long-term value"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): There is no requirement for test automation to work the same way\n\nWRONG (b): Test data should be independent from controls for flexibility\n\nCORRECT (c): This is explained in Chapter 1.1.2\n\nWRONG (d): There may be manual tests that cannot be automated, or where the test automation effort would exceed the derived value"
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is NOT a recommended approach for establishing an easy to use and maintainable Test Automation Framework (TAF)?",
    "options": [
      {
        "id": "a",
        "text": "Define and implement test reporting facilities"
      },
      {
        "id": "b",
        "text": "Enable easy troubleshooting"
      },
      {
        "id": "c",
        "text": "Include test automation that is sensitive to user interface (UI) changes"
      },
      {
        "id": "d",
        "text": "Keep the automated tests up to date"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) It aligns with the TAF success factor of \"Defined and implemented test reporting\" mentioned in Chapter 1.1.2, which emphasizes the importance of documenting and communicating test results effectively. b) This approach directly corresponds to the \"Easy troubleshooting\" success factor outlined in Chapter 1.1.2. It is crucial for maintainability, as it allows testers to quickly identify and resolve issues with failing tests. c) Correct - Creating test automation that closely mirrors the UI structure is NOT recommended, as it makes the tests sensitive to UI changes, reducing maintainability. A TAF should use more stable interfaces or abstraction layers to interact with the system under test. d) Incorrect - Regularly updating and maintaining automated test scripts is vital for the long-term success of a TAF, ensuring that tests remain relevant and effective as the system under test evolves."
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "What is NOT a success faction for a Test Automation Project?",
    "options": [
      {
        "id": "a",
        "text": "Testing that supports test automation"
      },
      {
        "id": "b",
        "text": "Decoupling of GUI interaction and test data"
      },
      {
        "id": "c",
        "text": "Test automation challenges of the SUT should be targeted first"
      },
      {
        "id": "d",
        "text": "Exposing APIs as public"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This facilitates SUT testability, which is a key success factor mentioned in Chapter 1.1.2.\n\nWRONG (b): A well-documented and easily maintainable test automation framework is listed as a success factor in Chapter 1.1.2.\n\nCORRECT (c): Prioritizing challenges is not mentioned as a success factor. In fact, starting with the most challenging aspects could potentially hinder the project's success.\n\nWRONG (d): Formulating a comprehensive test automation strategy is explicitly mentioned as a success factor in Chapter 1.1.2."
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "CT-TAS-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Your company is planning to introduce test automation and has asked you to lead the test automation project. There are several projects in the company, some of which would benefit from automating test execution. To test the effectiveness of the test automation, which project should you choose to pilot?",
    "options": [
      {
        "id": "a",
        "text": "Project Alpha, which is a very small project and is a minimal functional addition to another project. They hope that the simplicity of the project will result in rapid test automation successes"
      },
      {
        "id": "b",
        "text": "Project Beta, which is your company's mature standard application. With this selection, you hope to be able to try out the test automation solution (TAS) in a realistic scenario"
      },
      {
        "id": "c",
        "text": "Project Gamma, which is still in prototyping. At this early stage, the project is still unstable, and you hope to find many defects with test automation"
      },
      {
        "id": "d",
        "text": "Project Delta, which is already late. By automating, you hope to deliver on time, demonstrating a great test automation success"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): It will likely not provide a high return on investment given its limited nature\n\nCORRECT (b): A mature standard application will likely have a long life and good test automation return on investment (ROI)\n\nWRONG (c): Test automation can be brittle when applied to unstable software\n\nWRONG (d): Project delays are usually not attributed to the lack of test automation"
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "CT-TAS-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Your board of directors gives you the requirement to save costs on your development project. Which of the following is NOT a good argument for outsourcing your test automation?",
    "options": [
      {
        "id": "a",
        "text": "Your company has very specialized software that is not easy to understand, so you would like to outsource test automation so your people can focus on other projects"
      },
      {
        "id": "b",
        "text": "The project is part of a larger project, so that knowledge is already available in the company"
      },
      {
        "id": "c",
        "text": "There are some test automation engineers (TAEs) in your company with the required skills who need a new occupation in the long term but are not yet available in the short term for your organization"
      },
      {
        "id": "d",
        "text": "No additional software or hardware needs to be purchased for test automation"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): A complex software project is a risk to assign to an outsourced vendor if company resources move to other projects\n\nWRONG (b): There is little risk with company resources having the know-how\n\nWRONG (c): Having the skills within the organization allows the work to be done\n\nWRONG (d): The cost of hardware and software is absorbed by the outsourced vendor"
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "CT-TAS-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What is the main advantage of a floating license?",
    "options": [
      {
        "id": "a",
        "text": "Those who use software under this license will only be billed for the time they use the software"
      },
      {
        "id": "b",
        "text": "There are many users of the software which makes it easier to gather information and get support"
      },
      {
        "id": "c",
        "text": "Software under this license can easily be modified if necessary"
      },
      {
        "id": "d",
        "text": "Software under this license can be used by many employees on different systems"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): You pay for the license up front whether you use it or not\n\nWRONG (b): Although there may be many users, only one user can use a floating license at one time\n\nWRONG (c): The license cannot be modified\n\nCORRECT (d): A floating license allows for the flexibility of who runs it and where it is run"
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "CT-TAS-2.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What cost factor should NOT influence your decision about a test automation implementation strategy and a TAS to be used?",
    "options": [
      {
        "id": "a",
        "text": "Hardware and licenses"
      },
      {
        "id": "b",
        "text": "Time constraints"
      },
      {
        "id": "c",
        "text": "Number of TASs"
      },
      {
        "id": "d",
        "text": "Maintenance"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Hardware and licensing costs should influence the implementation strategy and the TAS\n\nWRONG (b): Time constraints strongly influence the implementation strategy and the TAS\n\nCORRECT (c): The number of TASs does not influence the test automation implementation strategy and the TAS\n\nWRONG (d): Maintenance is a cost factor for the implementation strategy. A TAS should be developed with that in mind"
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "CT-TAS-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": true,
    "text": "You are a test leader in a project, and you are looking to strengthen your test team. What skills should you focus on in your search?",
    "options": [
      {
        "id": "a",
        "text": "The applicant has strong technical knowledge about different software development lifecycles (SDLCs)"
      },
      {
        "id": "b",
        "text": "The applicant is knowledgeable and is very self-confident"
      },
      {
        "id": "c",
        "text": "The applicant is a good programmer but prefers to work alone on a challenge"
      },
      {
        "id": "d",
        "text": "The applicant has good team skills and can explain facts well"
      },
      {
        "id": "e",
        "text": "The applicant has often led test teams"
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "explanation": "CORRECT (a): A TAE should have strong technical knowledge about different software development lifecycles.\n\nWRONG (b): People do not need to know everything and be too confident.\n\nWRONG (c): TAEs should be able to work together to make the quality better.\n\nCORRECT (d): Teamplay and communication skills are important for TAEs.\n\nWRONG (e): The project already has a test leader, and the project needs more TAEs not another lead."
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "CT-TAS-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Match the statements to the correct test automation pyramid shape.\n\n1. Pyramid shaped\n2. Ice cream cone shaped\n3. Hourglass shaped\n4. Umbrella shaped\n\nA. Automated tests are performed mainly as application UI tests\nB. Testing relies heavily on API and UI tests. Defects are found late in the SDLC due to the lack of low-level testing such as component testing\nC. Less testing on the upper levels and more testing on the lower levels with stable and faster tests and therefore quick feedback\nD. Little to no integration testing, but extensive testing at the highest and lowest test levels. Integration issues may go undetected.",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "id": "b",
        "text": "1C, 2B, 3D, 4A"
      },
      {
        "id": "c",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "d",
        "text": "1D, 2A, 3D, 4C"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Only 2B has the correct pattern match\nCORRECT (b).\n\nWRONG (c): Only 4A has the correct pattern match\n\nWRONG (d): Only 3D has the correct pattern match"
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "CT-TAS-3.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You define a test strategy and break down the layers in your approach as follows: UI, API, integration, and component. Which statements are true?\n\n1. It is tempting to ignore rare configurations in UI testing, but they can still be relevant to production environments\n2. API testing includes testing APIs directly in isolation with mocks and as part of the end-to-end transactions performed during integration testing\n3. Agile and DevOps teams working with short iterations and fast feedback loops are finding that GUI testing requires very little maintenance, while API testing requires more maintenance\n4. API testing is recommended for the vast majority of test automation efforts and as much boundary value analysis as possible\n5. Component tests are reserved for validating system-level use cases, mobile tests, and usability tests\n6. An integration test determines whether the interaction and the interfaces between the components work as intended\n7. With the help of component tests, errors can be detected at an early stage, and, under certain circumstances, they can even be narrowed down to the line in the code that caused them\n8. The more complicated the functionality the less important the component tests",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 4, 6, 7"
      },
      {
        "id": "b",
        "text": "1, 2, 5, 6, 8"
      },
      {
        "id": "c",
        "text": "1, 3, 5, 7, 8"
      },
      {
        "id": "d",
        "text": "2, 4, 5, 6, 7"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Each statement is correct\n\nWRONG (b): Statements 3,5,8 are negations of the true statements\n\nWRONG (c): Statements 3,5,8 are negations of the true statements\n\nWRONG (d): Statements 3,5,8 are negations of the true statements"
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "CT-TAS-3.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": true,
    "text": "Give TWO reasons why you should consider shift right.",
    "options": [
      {
        "id": "a",
        "text": "To save tester resources for later"
      },
      {
        "id": "b",
        "text": "To expand the scope of test automation and coverage"
      },
      {
        "id": "c",
        "text": "To move the tests forward to the beginning of the SDLC"
      },
      {
        "id": "d",
        "text": "To identify problems in a production system at an early stage"
      },
      {
        "id": "e",
        "text": "To roll out components that have already been thoroughly tested as canary releases"
      }
    ],
    "correct": [
      "b",
      "d"
    ],
    "explanation": "WRONG (a): Saving tester resources is not an advantage of shift right\n\nCORRECT (b): The scope of test automation can be improved by the feedback of the users and the actual performance of the application.\n\nWRONG (c): Moving tests forward is the shift-left approach\n\nCORRECT (d): With shift right the teams can get feedback earlier from the end users and improve the SUT and coverage based on it\n\nWRONG (e): Canary releases are not specifically for test automation"
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "CT-TAS-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": true,
    "text": "As a test leader, you are to take on a project with legacy software. What are TWO important aspects for your test automation project?",
    "options": [
      {
        "id": "a",
        "text": "Convert the architecture of the legacy software to a microservices architecture before writing new tests, to keep the tests compact and efficient."
      },
      {
        "id": "b",
        "text": "Rewrite all tests first. Legacy software TASs tend to be outdated, underperforming, and should not be used again"
      },
      {
        "id": "c",
        "text": "Increase the coverage at the system integration test level to detect possible errors early"
      },
      {
        "id": "d",
        "text": "Focus on system testing. There is no point in writing new component tests for legacy software"
      },
      {
        "id": "e",
        "text": "Introduce more meaningful component tests to expand the possibilities of code refactoring"
      }
    ],
    "correct": [
      "c",
      "e"
    ],
    "explanation": "WRONG (a): Converting the architecture of the SUT for test automation is not a valid decision to make\n\nWRONG (b): It is not recommended to drop the existing tests and reimplement them\n\nCORRECT (c): Increasing the integration tests to detect defects earlier is a best practice for test automation\n\nWRONG (d): Component tests can detect defects much earlier, so it is always recommended to write them\n\nCORRECT (e): Increasing component testing coverage increases confidence in the quality as well. It is a best practice"
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "CT-TAS-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which ONE of the following statements best describes how test automation projects conform with Agile software development best practices?",
    "options": [
      {
        "id": "a",
        "text": "Test automation is more technical than manual functional testing and therefore fits Agile software development that is also more technical than a sequential development model"
      },
      {
        "id": "b",
        "text": "Agile software development promotes sustainable development, and this can be achieved with a proper balance of automated tests among all test levels"
      },
      {
        "id": "c",
        "text": "Typically, Agile teams do not include an estimate of test effort in an Agile software development approach, but as test automation does make it easier, it will be done"
      },
      {
        "id": "d",
        "text": "One principle of Agile software development is “continuous attention to technical excellence and good design enhances agility” and test automation fits this"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): A sequential development model could also be technical\n\nCORRECT (b): See Chapter 3.2.2\n\nWRONG (c): Test automation does not make test effort estimation easier\n\nWRONG (d): Test automation could also be done wrong and then it does not fit this principle"
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "CT-TAS-3.2.3",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "Your company has a mature, disciplined approach to test automation. Teams have implemented test automation on all test levels defined in the organization: UI, API, integration, and component. However, the build pipeline in some of the teams takes a long time to execute all the steps. As the head of test automation architecture (TAA), you are responsible for finding a solution that will help each team. Which of the following should you NOT consider when providing your recommendations?",
    "options": [
      {
        "id": "a",
        "text": "Reduce the scope of UI test automation to a smoke test suite"
      },
      {
        "id": "b",
        "text": "Execute the full regression test suite separately from the build pipeline"
      },
      {
        "id": "c",
        "text": "Perform boundary value analysis manually"
      },
      {
        "id": "d",
        "text": "Replace the existing test automation tool"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a), b) and c) are not correct. All three of these considerations follow DevOps best practices regarding test automation\n\nCORRECT (d): A replacement should only be carried out after a pilot project proves that the benefits are greater than the time invested in replacing the existing tool"
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "CT-TAS-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What is a good reason to ask: “Is the test case highly repeatable?” when selecting and prioritizing test cases for test automation?",
    "options": [
      {
        "id": "a",
        "text": "A highly repeatable test case will be easier to implement"
      },
      {
        "id": "b",
        "text": "A highly repeatable test case should not be automated"
      },
      {
        "id": "c",
        "text": "A highly repeatable test case has potential for a good ROI"
      },
      {
        "id": "d",
        "text": "A highly repeatable test case is already proven to run well"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): A repeatable test case is not easier to implement than any other test case\n\nWRONG (b): This kind of test case is the best to automate due to ROI\n\nCORRECT (c): A test case that will be executed several times will have a high ROI\n\nWRONG (d): It is not certain that this test case has been executed before"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "CT-TAS-3.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a challenge that can only be addressed by test automation?",
    "options": [
      {
        "id": "a",
        "text": "There is a need to integrate test results into a development pipeline"
      },
      {
        "id": "b",
        "text": "There are still licenses for the test automation tool available"
      },
      {
        "id": "c",
        "text": "Manual intervention in executing test cases is needed"
      },
      {
        "id": "d",
        "text": "The specification is unclear, but testing must start now"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): See Chapter 3.3.2, bullet point three\n\nWRONG (b): This is not a real challenge that only test automation can address\n\nWRONG (c): This is not a challenge for test automation. This is a limitation of test automation\n\nWRONG (d): It would not be a good idea to automate things that are not clearly defined"
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "CT-TAS-3.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a test condition that is difficult to automate?",
    "options": [
      {
        "id": "a",
        "text": "It is possible to have many data combinations within the system"
      },
      {
        "id": "b",
        "text": "The UI must be consistent across different platforms"
      },
      {
        "id": "c",
        "text": "The system must work even if thousands of users are online"
      },
      {
        "id": "d",
        "text": "The functional suitability of the system must be tested on different devices"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a), c) and d) are not correct. These situations would not be difficult to automate\n\nCORRECT (b): See Chapter 3.3.3 bullet point 1"
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "CT-TAS-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "How does test automation facilitate getting a product to market in a timely manner?",
    "options": [
      {
        "id": "a",
        "text": "By following a shift-left approach and enabling parallel test execution"
      },
      {
        "id": "b",
        "text": "Test automation facilitates timely product to market by reducing manual effort to develop test cases"
      },
      {
        "id": "c",
        "text": "Test automation helps decrease manual testing time by reducing the effort to cover the scope of testing"
      },
      {
        "id": "d",
        "text": "Test automation can cover more data combinations in the same time as manual testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This option accurately reflects the benefits of test automation as described in Chapter 4.1.1. Parallel test execution reduces overall test execution time, while earlier testing (shift-left approach) helps identify and fix issues sooner in the development process.\n\nWRONG (b): Test automation does not necessarily reduce the effort to develop test cases. In fact, creating automated tests often requires more initial effort than manual test case development.\n\nWRONG (c): While this statement is partially true, it doesn't fully capture the main benefit of test automation in reducing time to market. The decrease in manual testing time is a means to achieve faster market delivery, not the primary mechanism.\n\nWRONG (d): Although test automation can cover more data combinations, this alone does not directly address how it supports getting a product to market faster. The focus should be on time-saving aspects of automation."
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "CT-TAS-4.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is the best reason for automating confirmation testing of a defect?",
    "options": [
      {
        "id": "a",
        "text": "To close a gap in the existing test automation"
      },
      {
        "id": "b",
        "text": "To ensure that the fix to a defect works and continues to work"
      },
      {
        "id": "c",
        "text": "To justify the time spent finding a defect based on its severity"
      },
      {
        "id": "d",
        "text": "To test the configuration management process"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): While there may be gaps in the test automation this is not the primary reason to automate confirmation testing\n\nCORRECT (b): You are trying to ensure that the fix to a defect works and ensure that the fix does not break later or get lost because of a configuration management problem\n\nWRONG (c): The time spent finding a defect should have been justified by the severity of the defect\n\nWRONG (d): This is a side effect and, while it does not test the entire configuration management process, it does ensure that the fix is not lost for some reason"
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "CT-TAS-4.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following approaches is MOST suitable for testing operationally relevant scenario “Update of the software”?",
    "options": [
      {
        "id": "a",
        "text": "Failover testing"
      },
      {
        "id": "b",
        "text": "Backup and restore point testing"
      },
      {
        "id": "c",
        "text": "Security testing"
      },
      {
        "id": "d",
        "text": "Operational documentation review"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "1. Is not correct. Failover testing is primarily used to test system recovery when hardware fails, not specifically for software updates\n2. Is not correct. While backup and restore testing is important for software updates, it's not the MOST suitable approach for testing the update process itself\n3. Is not correct. Security testing is crucial but not the primary focus when testing a software update scenario\n4. Is correct. Operational documentation review is the MOST suitable approach for testing a software update scenario. It ensures that the documentation is updated to reflect the new version, which is crucial for maintaining and operating the software after an update"
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "CT-TAS-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following includes all the items that must be taken into account in a good test automation deployment strategy?",
    "options": [
      {
        "id": "a",
        "text": "Test environment; people; application access; test script storage; test data provisioning"
      },
      {
        "id": "b",
        "text": "Tools; test data; application access; test script storage; software licenses"
      },
      {
        "id": "c",
        "text": "Test environment; tools; requirements; test script storage; test data provisioning"
      },
      {
        "id": "d",
        "text": "Test environment; tools; application access; test script storage; test data provisioning"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "5. Is not correct. This option incorrectly includes \"people\" instead of \"tools\"\n6. Is not correct. This option incorrectly includes \"software licenses\" and omits \"test environment\"\n7. Is not correct. This option incorrectly includes \"requirements\" instead of \"application access\"\n8. Is correct. This option correctly lists all items mentioned in Chapter 4.2.1 for a good test automation deployment strategy"
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "CT-TAS-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is NOT a consideration that a TAE should take into account when developing and deploying a TAS?",
    "options": [
      {
        "id": "a",
        "text": "Test environment configuration"
      },
      {
        "id": "b",
        "text": "Test tool licensing requirements"
      },
      {
        "id": "c",
        "text": "Central storage for test scripts"
      },
      {
        "id": "d",
        "text": "Manual test case design techniques"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Test environment configuration is a crucial consideration for developing and deploying a TAS to ensure automated test scripts can run in multiple environments with minimal changes\n\nWRONG (b): Understanding test tool licensing is important, especially for commercial tools, to ensure proper access in different test environments\n\nWRONG (c): A central location for storing and managing automated test scripts is essential for accessibility from multiple test environments\n\nCORRECT (d): Manual test case design techniques are not directly related to TAS development and deployment. While test case design is important for overall testing, it's not specific to the deployment of automated testing solutions"
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "CT-TAS-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following technical issues can lead to a risk for the project/product?",
    "options": [
      {
        "id": "a",
        "text": "Delays in introducing test automation"
      },
      {
        "id": "b",
        "text": "Wrongly defined keywords"
      },
      {
        "id": "c",
        "text": "Staffing issues"
      },
      {
        "id": "d",
        "text": "Delays in updating the TAS"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a), c) and d) are not correct. They are typical deployment project risks, not technical ones\n\nCORRECT (b): Incorrectly defined keywords may lead to missing or incorrectly verified use cases"
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "CT-TAS-4.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is important when mitigating test automation deployment risks?",
    "options": [
      {
        "id": "a",
        "text": "The right people must be available during the deployment"
      },
      {
        "id": "b",
        "text": "The right time of the day for the deployment must be selected"
      },
      {
        "id": "c",
        "text": "The TAS needs to be controlled under configuration management"
      },
      {
        "id": "d",
        "text": "The SUT must already be installed"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): While having a documented deployment procedure is important, it is not the MOST important factor for mitigating deployment risks. The configuration management of the TAS itself is more crucial for risk mitigation\n\nWRONG (b): Scheduling the deployment during off-peak hours is not explicitly mentioned as a critical factor for mitigating deployment risks. While timing can be important, it's not as fundamental as proper configuration management of the TAS\n\nCORRECT (c): This is the most important factor for mitigating test automation deployment risks. Configuration management ensures version control, traceable changes, and proper documentation, which are crucial for successful deployments and risk mitigation\n\nWRONG (d): This is not the MOST important factor for mitigating deployment risks. It's a necessary step for running tests, but doesn't address the core issues of version control and change management that configuration management provides"
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "CT-TAS-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following would NOT be considered a component of the test automation environment?",
    "options": [
      {
        "id": "a",
        "text": "Tools"
      },
      {
        "id": "b",
        "text": "System Under Test (SUT)"
      },
      {
        "id": "c",
        "text": "Test suites"
      },
      {
        "id": "d",
        "text": "Test Automation Architecture (TAA)"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Tools are a crucial component of the test automation environment, used for various purposes including UI test automation, API testing, and monitoring.\n\nWRONG (b): The System Under Test (SUT) is a major component of the test environment, as stated in the syllabus.\n\nWRONG (c): Test suites are executed in the test environment and are defined as a component in the syllabus.\n\nCORRECT (d): The TAA helps derive requirements for the TAF, which is a component of the test automation environment"
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "CT-TAS-4.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following option contains ALL correct MAJOR infrastructure components of test automation:",
    "options": [
      {
        "id": "a",
        "text": "Network, interface with the SUT, host machines"
      },
      {
        "id": "b",
        "text": "Platform, network, code"
      },
      {
        "id": "c",
        "text": "Host machines, platform, proxy"
      },
      {
        "id": "d",
        "text": "Code, host machines, network"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Network, interface with the SUT (e.g., browser), and host machines are major infrastructure components\n\nWRONG (b): Code is not a major infrastructure component\n\nWRONG (c): A proxy is not a major infrastructure component for test automation, though that does not exclude it from being used\n\nWRONG (d): Code is not a major infrastructure component"
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "CT-TAS-4.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "A Test Automation Engineer (TAE) is designing automated tests for a web application that stores records in a database. Which of the following statements is NOT correct regarding the definition of test automation data and interface requirements for this system?",
    "options": [
      {
        "id": "a",
        "text": "The TAE can use browser automation for UI testing and an API for database interaction testing"
      },
      {
        "id": "b",
        "text": "The Test Automation Architecture (TAA) must be used to define all test conditions"
      },
      {
        "id": "c",
        "text": "Contract testing can be employed to verify compatibility between the web application and the database system"
      },
      {
        "id": "d",
        "text": "User interface testing should be performed on both desktop and mobile devices to ensure cross- platform compatibility"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This is a valid approach. Browser automation can be used for UI testing, while APIs can be used for database interaction testing, aligning with the interface considerations mentioned in Chapter 4.3.3.\n\nCORRECT (b): This statement is incorrect. The TAA is a high-level design and is not used to define test conditions. Test conditions should be derived from requirements and other test basis documents.\n\nWRONG (c): Contract testing is a valid method for verifying compatibility between two systems, such as the web application and the database in this scenario.\n\nWRONG (d): Testing the user interface on different devices and platforms is a valid consideration for defining interface requirements, as mentioned in Chapter 4.3.3"
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "CT-TAS-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "Number of Investment in Savings test cases at Cumulative the sprint Cumulative Cumulative Sprint achieved in the end of savings (implementation investment ROI the sprint the sprint + maintenance) 1 50 900 900 3155 4115 0.22 2 100 1800 2700 3310 7425 0.36 3 150 2700 5400 3465 10890 0.50 4 200 3600 9000 3620 14510 0.62 5 250 4500 13500 3775 18285 0.74 6 300 5400 18900 3930 22215 0.85 7 350 6300 25200 4085 26300 0.96 8 400 7200 32400 4240 30540 1.06 9 450 8100 40500 4395 34935 1.16 10 500 9000 49500 4550 39485 1.25\n\nThe above table shows the progress of and return on the automated test case development. The team has previously defined 500 test cases that were executed manually. The average test case manual execution time is 10 minutes, while with test automation it is decreased to 1 minute. All the savings and investment calculations are found in the table.\n\nWhich sprint is the turning point for the return on investment of the test automation development efforts?",
    "options": [
      {
        "id": "a",
        "text": "Sprint 6"
      },
      {
        "id": "b",
        "text": "Sprint 7"
      },
      {
        "id": "c",
        "text": "Sprint 8"
      },
      {
        "id": "d",
        "text": "Sprint 9"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a), b) and d) are not correct. a) and b) are below 1.00 while d) is past the turning point, which was already reached in c)\n\nCORRECT (c): The turning point is the sprint in which the cumulative ROI reaches 1.00\n\n30 b, d 9. Consider:\n10. This is a saving\n11. This is an investment\n12. This is an investment\n13. This is a saving\n14. This is an investment\n15. This is a saving\n\nThus:\n16. Is not correct\n17. Is correct\n18. Is not correct\n19. Is correct\n20. Is not correct"
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "CT-TAS-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": true,
    "text": "You have recently taken over the leadership of a test team that is responsible for the end-to-end validation of UI testing of a retail store. The team consists of one manual tester and one TAE. There have been constant complaints about testing, primarily highlighting both manual and test automation being time-consuming. There is no opportunity to add more TAEs to the group. The TAF is currently not integrated into the CI/CD pipeline, and there has not been an ROI calculation performed yet. For that, the time numbers are provided in minutes below. Test execution is based on each sprint.\n1. Time to run a test case manually\n2. Number of automated test scripts implemented\n3. Average maintenance time of an automated test script\n4. Number of test cases\n5. Average time to develop automated test scripts\n6. Time to run an automated test case\n\nWhich two options cover the inputs for a Return on Investment calculation?",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 5"
      },
      {
        "id": "b",
        "text": "2, 3, 5"
      },
      {
        "id": "c",
        "text": "4, 5, 6"
      },
      {
        "id": "d",
        "text": "1, 4, 6"
      },
      {
        "id": "e",
        "text": "3, 4, 6"
      }
    ],
    "correct": [
      "b",
      "d"
    ],
    "explanation": "Consider:\n1. Time to run a test case manually — this is a saving\n2. Number of automated test scripts implemented — this is an investment\n3. Average maintenance time of an automated test script — this is an investment\n4. Number of test cases — this is a saving\n5. Average time to develop automated test scripts — this is an investment\n6. Time to run an automated test case — this is a saving\n\nThus:\nWRONG (a).\nCORRECT (b): 2, 3, 5 are the investment inputs.\nWRONG (c).\nCORRECT (d): 1, 4, 6 are the savings inputs.\nWRONG (e).\n\n(The official answer sheet's list numbering is garbled for this question — items printed as 9.–20.; restored here in the intended order.)"
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "CT-TAS-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following metrics is important to collect to track the percentage of requirements covered by automated test cases?",
    "options": [
      {
        "id": "a",
        "text": "Number of automated test cases"
      },
      {
        "id": "b",
        "text": "Functional coverage of test automation"
      },
      {
        "id": "c",
        "text": "Pass-fail ratio"
      },
      {
        "id": "d",
        "text": "Code coverage"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): The number of automated test cases indicates the progress of test case automation, but it is not bound together with the requirements\n\nCORRECT (b): This is the only metric related to requirements coverage\n\nWRONG (c): The test execution pass-fail ratio is not related to requirements\n\nWRONG (d): Code coverage does not indicate the requirements coverage, rather it indicates how much of the production code is covered by component tests"
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "CT-TAS-5.3.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You join a product development team as a new hire and as the only TAE. While developing the automated test cases, you see that some of your test cases are unreliable, not repeatedly providing the same test results due to changing test data. It turns out that other testers are using some of the same testware as your TAS.\n\nWhich of the following organizational considerations did you miss to identify before starting the TAS development work?",
    "options": [
      {
        "id": "a",
        "text": "Policies and practices for software development"
      },
      {
        "id": "b",
        "text": "Existing active test automation projects and their status"
      },
      {
        "id": "c",
        "text": "Test tools and licenses"
      },
      {
        "id": "d",
        "text": "Availability of separate test data and test environments"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Policies and practices focus on the development guidelines and processes followed along with the documentation storing those recommendations\n\nWRONG (b): Existing active test automation projects focus on the TAS components that can be leveraged\n\nWRONG (c): Existing tools and licenses do not focus on project specific test data\n\nCORRECT (d): Using the same test data on a given test environment can cause trouble for testers, and it is advised to either create a dedicated set of data or a dedicated test environment specific to test automation use"
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "CT-TAS-5.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "The CIO of a healthcare company hires you as a consultant for a 6-week assessment. Your responsibility is to provide a list of recommendations on how the company could improve their test automation practices across the organization.\n\nWhich of the following project characteristics will help you define successful test automation goals that will enable you and the CIO to convince the TAEs to follow the recommended changes?",
    "options": [
      {
        "id": "a",
        "text": "Management support and budgeting"
      },
      {
        "id": "b",
        "text": "Maturity of the project"
      },
      {
        "id": "c",
        "text": "Team knowledge and relevant experience"
      },
      {
        "id": "d",
        "text": "Create a new architecture"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Management support addresses the buy-in from management, not from the TAEs\n\nWRONG (b): The maturity of the project focus is on the overall team structure and their practices\n\nCORRECT (c): Team knowledge and relevant experience addresses individual challenges such as learning new technologies through training\n\nWRONG (d): Creating a new architecture is not a project characteristic. It's an engineering activity."
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "CT-TAS-5.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You join a company as a Quality Architect. Your first assignment is evaluating the TAS of a small subdepartment of the IT department. This group is focused on payment solutions. Currently, the TAS is only capable of checking the API’s status and ability to connect to services. Which of the following quality characteristics should you evaluate first?",
    "options": [
      {
        "id": "a",
        "text": "Portability"
      },
      {
        "id": "b",
        "text": "Reliability"
      },
      {
        "id": "c",
        "text": "Maintainability"
      },
      {
        "id": "d",
        "text": "Functional completeness"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a), b) and c) are not correct. These quality characteristics are not discussed in the assignment\n\nCORRECT (d): Functional completeness addresses the functionality that covers all the specified tasks and user objectives"
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "CT-TAS-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which one of the following decisions is NOT typically made by a strategic test automation person during the consolidation of test automation reports?",
    "options": [
      {
        "id": "a",
        "text": "Advise business representatives on new features to be added in future releases"
      },
      {
        "id": "b",
        "text": "Advise developers on areas to improve in the code"
      },
      {
        "id": "c",
        "text": "Identify trends and perform root cause analysis"
      },
      {
        "id": "d",
        "text": "Advise on overall software development processes"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The purpose of test automation does not revolve around the scope of product development b), c) and d) are not correct. All three can be considered by a strategic test automation person upon analysis of a test automation report"
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "CT-TAS-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which describes the analysis needed to ensure that the same test automation steps are not repeated across multiple scripts?",
    "options": [
      {
        "id": "a",
        "text": "Cost transitioning"
      },
      {
        "id": "b",
        "text": "Data sharing"
      },
      {
        "id": "c",
        "text": "Functional overlap"
      },
      {
        "id": "d",
        "text": "Test execution preconditions"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Transitioning costs describe the cost associated with moving from manual to automated test cases\n\nWRONG (b): Data sharing occurs when test cases leverage the same data and data sources\n\nCORRECT (c): Functional overlap occurs when test script developers repeat code within multiple test cases\n\nWRONG (d): Test interdependency describes how some tests rely on execution order. Some tests can only be executed after other tests have executed"
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "CT-TAS-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "What factors should be considered from a quality assurance perspective to provide a smooth and easy transition from manual tests to automated ones?",
    "options": [
      {
        "id": "a",
        "text": "Test tool licenses"
      },
      {
        "id": "b",
        "text": "Component testing coverage"
      },
      {
        "id": "c",
        "text": "Coverage"
      },
      {
        "id": "d",
        "text": "Availability of the CI/CD System"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Test tool licenses may not be required if using open-source tools\n\nWRONG (b): Component testing coverage does not relate to the transition from manual to automated tests\n\nCORRECT (c): Coverage can be used to see where the organization stands in terms of the features covered by tests and where they can enhance this with test automation\n\nWRONG (d): CI/CD systems are not essentially connected to the transition of test cases from manual to automated"
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "CT-TAS-6.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "What CI/CD process is leveraged to include an additional step for automated UI tests within the application build process?",
    "options": [
      {
        "id": "a",
        "text": "Build orchestration tool"
      },
      {
        "id": "b",
        "text": "Pipelines"
      },
      {
        "id": "c",
        "text": "Test harness"
      },
      {
        "id": "d",
        "text": "Code repository"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Build orchestration tools are used for scheduling and executing pipelines\n\nCORRECT (b): Pipelines are a set of procedures that control the build process. A step can be added to the pipeline sequence for UI testing\n\nWRONG (c): A test harness covers the TAF but is not within the CI/CD\n\nWRONG (d): The code repository within CI/CD is typically responsible for storing the application code"
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "CT-TAS-6.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "Your organization has invested in the development of a brand-new TAS. It has been utilized as both a standalone tool for the test team and leveraged within the CI/CD pipeline. You are responsible for evaluating its effectiveness and suggesting areas for improvement. After three sprint cycles, you make the following observations:\n\n1. Although test cases are automated, there is a significant amount of manual hours spent creating initial user accounts and enabling their access within the application database.\n2. The team is spending a significant amount of time updating test automation code related to the application home page in several different automated test cases. This is because developers have been refactoring and renaming object properties.\n3. As the team creates more automated test cases, the CI/CD process seems to be losing its velocity.\n\nWhich of the following set of changes should be made to address these observations?",
    "options": [
      {
        "id": "a",
        "text": "Only use one user account for all test cases, do not automate the home page since it is changing constantly, and add more hardware resources to the CI/CD environment."
      },
      {
        "id": "b",
        "text": "Create automated precondition test scripts, identify opportunities to decompose and modularize test scripts, and decrease the pipeline scope of integrated tests to the most critical ones."
      },
      {
        "id": "c",
        "text": "Virtualize the database with default data, ask the developers to stop changing object properties on the home page, and only use one automated test case in the CI/CD pipeline."
      },
      {
        "id": "d",
        "text": "Ask the development team to create a batch process that will create user accounts for the test team, ask for more TAEs on the team to keep up with changes, and do not include UI tests in the CI/CD pipeline."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): One user account is not sufficient for proper testing. Avoiding pages is not an option. Adding hardware implies increased cost. This should be a last resort\n\nCORRECT (b): These changes would automate the user account steps, make the home page more manageable when the home page changes, and provide the most velocity for builds by only including automated test cases that are necessary\n\nWRONG (c): Virtualized data does not guarantee it will sync with every version of the application. Developers need to be able to change code as needed. One automated test case in the CI/CD pipeline is not sufficient\n\nWRONG (d): The test team should look to be self-sufficient and leveraging other teams as a last resort. Adding TAEs before adjusting test script modularization does not scale. UI tests should be leveraged in CI/CD pipelines"
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "CT-TAS-6.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You join an ongoing project where there is a TAS that needs some refactoring and functional extension due to recent business requests. There is documentation for the TAS which was updated based on the project load and capacity.\n\nWhich of the following steps should be considered during refactoring the existing functionality of the TAS?\n\ni. Ignore the documentation as it was outdated already\nii. Disable the failing test suites\niii. Make a list of additional possible improvements\niv. Update the documentation of the TAS based on the changes\nv. Change the dependencies of the TAS without any investigations",
    "options": [
      {
        "id": "a",
        "text": "i, ii, v"
      },
      {
        "id": "b",
        "text": "ii, iv"
      },
      {
        "id": "c",
        "text": "i, iii, v"
      },
      {
        "id": "d",
        "text": "iii, iv"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Consider:\n21. The documentation should be kept up-to-date based on the recent changes\n22. The failing test suites should be checked and fixed and failing test should be fixed according to the changes\n23. Additional improvements should be also noted for the future\n24. The documentation should be also updated in case of any changes to the TAS\n25. Dependency changes should be investigated before the implementation\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\nCORRECT (d)."
  },
  {
    "id": 41,
    "exam": "ASTQB",
    "num": "1",
    "lo": "CT-TAS-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "If you want to create test automation that will interact with the software the user sees and interacts with, what should be your target?",
    "options": [
      {
        "id": "a",
        "text": "The APIs"
      },
      {
        "id": "b",
        "text": "The libraries of the SUT"
      },
      {
        "id": "c",
        "text": "The protocols used by the SUT"
      },
      {
        "id": "d",
        "text": "The GUI"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Access through the graphical user interface, the GUI, will exercise the software that the user sees and interacts with. A, B and C access software that the SUT uses, but that is not visible to the user."
  },
  {
    "id": 42,
    "exam": "ASTQB",
    "num": "2",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Access to which part of the SUT is vital for successful test automation?",
    "options": [
      {
        "id": "a",
        "text": "The design and implementation plan"
      },
      {
        "id": "b",
        "text": "The data and migration plan"
      },
      {
        "id": "c",
        "text": "The interfaces"
      },
      {
        "id": "d",
        "text": "The test automation architecture (TAA)"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The interfaces of the SUT must be accessible for the test automation if the implementation is going to be successful. A and B might be helpful, but they are not vital. D is not a part of the SUT."
  },
  {
    "id": 43,
    "exam": "ASTQB",
    "num": "3",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following supports a consistent approach to automating tests?",
    "options": [
      {
        "id": "a",
        "text": "The test automation architecture (TAA)"
      },
      {
        "id": "b",
        "text": "The test automation solution (TAS)"
      },
      {
        "id": "c",
        "text": "The system under test (SUT)"
      },
      {
        "id": "d",
        "text": "The test automation framework (TAF)"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Per the syllabus. This is one of the success factors for an automation implementation project."
  },
  {
    "id": 44,
    "exam": "ASTQB",
    "num": "4",
    "lo": "CT-TAS-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following provides the support required for a test automation execution plan?",
    "options": [
      {
        "id": "a",
        "text": "The test automation framework (TAF)"
      },
      {
        "id": "b",
        "text": "The test automation strategy"
      },
      {
        "id": "c",
        "text": "The test automation solution (TAS)"
      },
      {
        "id": "d",
        "text": "The system under test (SUT)"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This information is one of the success factors provided by the TAF."
  },
  {
    "id": 45,
    "exam": "ASTQB",
    "num": "5",
    "lo": "CT-TAS-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is the most important to have in place before preparing to start a large automation project?",
    "options": [
      {
        "id": "a",
        "text": "Data migration"
      },
      {
        "id": "b",
        "text": "An accepted expected return on investment"
      },
      {
        "id": "c",
        "text": "Clearly defined and accurate test cases"
      },
      {
        "id": "d",
        "text": "A signed-off test plan"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): An ROI that has been researched and accepted by the stakeholders is vital before starting an automation project. The tools can be selected and implemented after the ROI is approved. C and D are more pertinent to manual testing although there may be an automation test plan."
  },
  {
    "id": 46,
    "exam": "ASTQB",
    "num": "6",
    "lo": "CT-TAS-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Your organization would like to get some test automation developed for a mobile application. They don’t have the technical people to do the work and are reluctant to invest in tools, but they acknowledge the need for test automation for this particular application. Which of the following is the best solution to pursue?",
    "options": [
      {
        "id": "a",
        "text": "Vendor-based"
      },
      {
        "id": "b",
        "text": "Outsourced"
      },
      {
        "id": "c",
        "text": "In-house"
      },
      {
        "id": "d",
        "text": "Tools-based"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a great example of an organization that should use an outsourcing company to do the implementation of the test automation."
  },
  {
    "id": 47,
    "exam": "ASTQB",
    "num": "7",
    "lo": "CT-TAS-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You have a team of 10 test automation engineers, but only five of them will be using the tool at any one time. You are paying for 10 licenses. What type of model are you using?",
    "options": [
      {
        "id": "a",
        "text": "Open source"
      },
      {
        "id": "b",
        "text": "Per machine/user"
      },
      {
        "id": "c",
        "text": "Floating"
      },
      {
        "id": "d",
        "text": "Runtime"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You are using a per user license. Given the scenario, there could be significant cost savings with a floating license because then you’d only pay for five."
  },
  {
    "id": 48,
    "exam": "ASTQB",
    "num": "8",
    "lo": "CT-TAS-2.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "In what way is the test management system a consideration in the test automation budget?",
    "options": [
      {
        "id": "a",
        "text": "It isn’t a factor"
      },
      {
        "id": "b",
        "text": "Since the test management system will create the defect reports for defects found by the test automation, the defect fields must be clearly defined and that will take time and effort"
      },
      {
        "id": "c",
        "text": "The test management system dashboards and reporting will have to be updated to provide a real-time risk mitigation status to the test automation"
      },
      {
        "id": "d",
        "text": "The test management system will have an interface with the test automation tools to provide updates for test execution"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): The test management system should be able to upload and reporting on the test automation execution results. This will be needed to produce overall coverage reports and current execution status. A is not correct because it definitely is a factor to be considered. B is not correct because, although some systems try to do this, it usually results in a lot of false negatives when defects are reported that are not valid. Either way, the time and effort would not be in defining the fields but rather in building the interface. C is not correct because real-time risk mitigation directions to the test automation would be extremely complicated to implement (but very cool!) and would be difficult to maintain."
  },
  {
    "id": 49,
    "exam": "ASTQB",
    "num": "9",
    "lo": "CT-TAS-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "On the automation team, who is expected to have programming and technical architecture knowledge?",
    "options": [
      {
        "id": "a",
        "text": "The SME"
      },
      {
        "id": "b",
        "text": "The test manager"
      },
      {
        "id": "c",
        "text": "The test analyst"
      },
      {
        "id": "d",
        "text": "The test automation engineer"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): It’s great if the others have some technical knowledge, but the TAE must have it."
  },
  {
    "id": 50,
    "exam": "ASTQB",
    "num": "10",
    "lo": "CT-TAS-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "In the umbrella test model, what is the primary focus of the test automation?",
    "options": [
      {
        "id": "a",
        "text": "UI testing"
      },
      {
        "id": "b",
        "text": "Services testing"
      },
      {
        "id": "c",
        "text": "Unit testing"
      },
      {
        "id": "d",
        "text": "Integration testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): In the umbrella model, the majority of the test automation is conducted at the UI level."
  },
  {
    "id": 51,
    "exam": "ASTQB",
    "num": "11",
    "lo": "CT-TAS-3.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following models of test distribution is usually considered the most ideal?",
    "options": [
      {
        "id": "a",
        "text": "Pyramid"
      },
      {
        "id": "b",
        "text": "Ice-Cone"
      },
      {
        "id": "c",
        "text": "Hourglass"
      },
      {
        "id": "d",
        "text": "Umbrella"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The pyramid, with unit testing at the bottom, is usually considered to be the ideal."
  },
  {
    "id": 52,
    "exam": "ASTQB",
    "num": "12",
    "lo": "CT-TAS-3.1.3",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are working on a project that is having multiple failures in production, particularly in the business workflows. You have been assigned to build test automation that can be executed in the production or pre-production environments to provide end-to-end testing on the completed system. This new automation will affect the testing in what way?",
    "options": [
      {
        "id": "a",
        "text": "It will shift testing to the left"
      },
      {
        "id": "b",
        "text": "It will shift testing to the right"
      },
      {
        "id": "c",
        "text": "It will shift testing up"
      },
      {
        "id": "d",
        "text": "It will shift testing down"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is an example of shift right testing, moving the testing later in the SDLC."
  },
  {
    "id": 53,
    "exam": "ASTQB",
    "num": "13",
    "lo": "CT-TAS-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a true statement regarding test automation in a V-model project?",
    "options": [
      {
        "id": "a",
        "text": "Test automation starts later than in an Agile project"
      },
      {
        "id": "b",
        "text": "Test automation starts earlier than in an Agile project"
      },
      {
        "id": "c",
        "text": "Test automation is not possible due to the long development cycles"
      },
      {
        "id": "d",
        "text": "Test automation will result in a higher ROI than in an Agile project"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Because testing doesn’t get engaged until the coding is done, the test automation starts later as well (although earlier than in a waterfall project) C and D are not correct because, although the ROI will be lower than an Agile project due to the later availability of the automation, it is possible to do the automation. The ROI will come later when the automation is run many times during the life of the software."
  },
  {
    "id": 54,
    "exam": "ASTQB",
    "num": "14",
    "lo": "CT-TAS-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "In the ideal Agile software development project, when should the automated test cases for a sprint be integrated into the CI/CD pipeline?",
    "options": [
      {
        "id": "a",
        "text": "At the beginning of the sprint"
      },
      {
        "id": "b",
        "text": "Before the end of the sprint"
      },
      {
        "id": "c",
        "text": "Immediately before SIT begins"
      },
      {
        "id": "d",
        "text": "Immediately after UAT"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): In the ideal model, the automated test cases for a sprint should be developed and implemented into the CI/CD pipeline before the end of that sprint."
  },
  {
    "id": 55,
    "exam": "ASTQB",
    "num": "15",
    "lo": "CT-TAS-3.2.3",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "Your team is developing a new mobile application. This will be the first time the organization has attempted to implement a DevOps approach. The product is being developed by three Agile teams, one doing the front end, one doing the web services, and one handling the database transactions. The web services developers have developed the automated unit tests which they are running on their own machines prior to deployment. What do they need to do to comply with best practices?",
    "options": [
      {
        "id": "a",
        "text": "They need to ensure another developer has reviewed and can execute the tests"
      },
      {
        "id": "b",
        "text": "They need to deploy the tests into the DevOps pipeline and ensure they are executed in the deployment environment each time code is deployed"
      },
      {
        "id": "c",
        "text": "They need to deploy the tests into the DevOps pipeline and ensure the tests are executed in the test environment each time new code is deployed and built"
      },
      {
        "id": "d",
        "text": "They need to implement infrastructure as code to create the test environment, then deploy the tests into the DevOps pipeline and ensure the tests are executed in the newly built test environment each time new or changed code is deployed and built"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): They need to deploy the tests into the same environment as the normal code deployment environment rather than in a separate environment. This keeps it within the pipeline and is a best practice. A is a good practice but is not a requirement for DevOps and indeed the execution of the tests should be automated. C and D both have the execution in the test environment which is not ideal for unit tests. Those environments would be needed for E2E tests."
  },
  {
    "id": 56,
    "exam": "ASTQB",
    "num": "16",
    "lo": "CT-TAS-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following tests is the best candidate for automation?",
    "options": [
      {
        "id": "a",
        "text": "Error recovery test for a mobile app that requires frequent restarts of the phone"
      },
      {
        "id": "b",
        "text": "UI test that validates that the navigation is suitable to various classes of users"
      },
      {
        "id": "c",
        "text": "Critical workflow test that requires multiple users to provide approvals during the workflow"
      },
      {
        "id": "d",
        "text": "Mortgage calculation test that requires input from multiple tables of data to determine the proper rate"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): The best candidate. This testing will be error prone if done manually where the automation can do it quickly and accurately. If the tables are changing, the automation can have its own mocked tables or hard code the values as needed. A is not correct because it requires manual intervention to restart the phone. B is not correct because it requires a human opinion of usability. C is not correct because it is requiring multiple users to log in and perform functions. This could be automated, potentially, but it would be tricky to get the timing right and logging on and off the target can be difficult for some automation approaches."
  },
  {
    "id": 57,
    "exam": "ASTQB",
    "num": "17",
    "lo": "CT-TAS-3.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Your team is working with a CI/CD pipeline. Up until now, all testing has been done manually with the integrated code being deployed to a test environment. If you want to implement automation, how could this change to incorporate best practices?",
    "options": [
      {
        "id": "a",
        "text": "The test automation could be included in the pipeline and executed there for the early tests (unit, component integration)"
      },
      {
        "id": "b",
        "text": "The test automation could replace the manual end-to-end testing and can be conducted in the test environments"
      },
      {
        "id": "c",
        "text": "Automate some of the easier tests, but keep the cross-browser tests for manual testing"
      },
      {
        "id": "d",
        "text": "Minimize test execution in the pipeline and concentrate on running the test automation in the near-production environment"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Ideally, the test automation becomes integrated with the pipeline and is executed there for the unit and component integration tests. B is not correct because while it is likely to happen, it is not really best practice to just replace the manual tests with automated tests. C is not correct because cross- browser tests are excellent candidates for test automation. D is not correct because the goal is to maximize testing in the pipeline."
  },
  {
    "id": 58,
    "exam": "ASTQB",
    "num": "18",
    "lo": "CT-TAS-3.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "You are automating a new web application. One of the test scenarios is to test the timeout function that times out the login if the application has been idle for more than one hour. Can this test be automated?",
    "options": [
      {
        "id": "a",
        "text": "No, it requires too much time to wait for the timeout"
      },
      {
        "id": "b",
        "text": "No, test automation can’t do timing related tests"
      },
      {
        "id": "c",
        "text": "Yes, but it will require manual intervention to time the timeout and then restart the automation to verify the outcome"
      },
      {
        "id": "d",
        "text": "Yes, but you should check to be sure other tests can run efficiently while this one is waiting for the timeout"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This can be automated but you just need to sure the other tests are paused while waiting on this one as it could significantly lengthen the time required for a test run."
  },
  {
    "id": 59,
    "exam": "ASTQB",
    "num": "19",
    "lo": "CT-TAS-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If there is an urgent need for a product to get to market as soon as possible, how can test automation help?",
    "options": [
      {
        "id": "a",
        "text": "By shifting the testing to the left"
      },
      {
        "id": "b",
        "text": "By shifting the testing to the right"
      },
      {
        "id": "c",
        "text": "By minimizing the number of tests to be executed"
      },
      {
        "id": "d",
        "text": "By limiting the test data that is exercised by the tests"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Shifting testing to the left in the lifecycle means starting testing sooner and that is the best way to save time. B is not correct because that would push testing toward the end of the cycles. C is not correct because automation is likely to maximize the tests to be run. D is not correct because it is usually a wider set of data that is used by the test automation."
  },
  {
    "id": 60,
    "exam": "ASTQB",
    "num": "20",
    "lo": "CT-TAS-4.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is an automated test called when it is used to test that a defect has been fixed and stays fixed?",
    "options": [
      {
        "id": "a",
        "text": "Regression test"
      },
      {
        "id": "b",
        "text": "Confirmation test"
      },
      {
        "id": "c",
        "text": "Defect test"
      },
      {
        "id": "d",
        "text": "Targeted test"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a confirmation test, confirming that the fix works and stays implemented. A is not correct because regression testing is done to ensure that new changes have not introduced issues, not to confirm that fixes work."
  },
  {
    "id": 61,
    "exam": "ASTQB",
    "num": "21",
    "lo": "CT-TAS-4.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "DevOps assumes involvement of the development and operations teams in the creation of a product. Which of the following tests is of particular interest to the operations team?",
    "options": [
      {
        "id": "a",
        "text": "Unit testing"
      },
      {
        "id": "b",
        "text": "Confirmation testing"
      },
      {
        "id": "c",
        "text": "Failover testing"
      },
      {
        "id": "d",
        "text": "System testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): When the hardware fails or there is a critical system failure, the operations team wants to be sure that the system will recover and continue processing. This is the point of failover testing."
  },
  {
    "id": 62,
    "exam": "ASTQB",
    "num": "22",
    "lo": "CT-TAS-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "How does the implementation of the test tool licensing scheme affect the strategic selection of the test automation tool?",
    "options": [
      {
        "id": "a",
        "text": "Cost"
      },
      {
        "id": "b",
        "text": "Expected return on investment"
      },
      {
        "id": "c",
        "text": "Access from multiple test environments"
      },
      {
        "id": "d",
        "text": "Number of licenses that will be available to the developers"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is the item that must be addressed in the test automation strategy. The other items should be considered when the tool is being considered for purchase and the business case is being justified."
  },
  {
    "id": 63,
    "exam": "ASTQB",
    "num": "23",
    "lo": "CT-TAS-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Why is it necessary to track versions of the test automation software?",
    "options": [
      {
        "id": "a",
        "text": "Because different versions may be needed for different configurations of the test environment"
      },
      {
        "id": "b",
        "text": "Because you may need to roll back to a previous version when a defect in the SUT is discovered"
      },
      {
        "id": "c",
        "text": "Because it’s easier to track the productivity of the automation engineers when all changes are versioned"
      },
      {
        "id": "d",
        "text": "Because the developers will be able to see what changes are being made to the automation and will know what defects will be detected by a particular version"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): There may be a need for a version to be altered for a specific environment to have the correct URL, user files, etc. It is also possible that these differences are parameterized, and the appropriate variables are loaded depending on the parameter settings. B is not correct because this is usually done on the SUT to see if the defect is new or existed in a previous release and just wasn’t found. C is not correct because this is not the best way to track productivity. A poor automation engineer may have to make many changes to their code – this doesn’t mean they are more productive. D is not correct because it doesn’t make sense."
  },
  {
    "id": 64,
    "exam": "ASTQB",
    "num": "24",
    "lo": "CT-TAS-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You have developed test automation for a big Enterprise Resource Planning (ERP) system. This is a Software as a Service (SaaS) cloud product that will be updated by the vendor at regular intervals. Which of the following is a risk with the test automation software for this system?",
    "options": [
      {
        "id": "a",
        "text": "It may not migrate cleanly to a new test environment"
      },
      {
        "id": "b",
        "text": "The test data cannot be created prior to the deployment"
      },
      {
        "id": "c",
        "text": "It may be too hard to decipher the test results because it is a cloud implementation"
      },
      {
        "id": "d",
        "text": "If may be difficult to maintain the test engineers who know the system to make future updates"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Because these updates will occur over a long period of time, it is important to keep knowledgeable test automation engineers to make the changes. If the updates aren’t made, the automation becomes out of sync with the SUT and the automation becomes less valuable. A is not correct because there is not necessarily a change in the test environment. B is not correct because the data shouldn’t change. C is not correct because whether or not the system is in the cloud shouldn’t affect the ability to decipher the test results."
  },
  {
    "id": 65,
    "exam": "ASTQB",
    "num": "25",
    "lo": "CT-TAS-4.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the primary purpose of running the test automations suite to regression test a new release of the SUT?",
    "options": [
      {
        "id": "a",
        "text": "To detect if anything has changed"
      },
      {
        "id": "b",
        "text": "To detect if anything that used to work is not working"
      },
      {
        "id": "c",
        "text": "To verify defect fixes and to update the TAS as needed"
      },
      {
        "id": "d",
        "text": "To get practice with running the test automations suite"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You want to know if there are any regressions in the software – meaning that something that used to work no longer works as expected. A is not correct although it often happens and requires an update to the TAS. C is actually confirmation testing, and the maintenance updates may be required with any release. This should show up in regression testing if the regression test suite was working around a defect. D is not correct as that is not the purpose of execution."
  },
  {
    "id": 66,
    "exam": "ASTQB",
    "num": "26",
    "lo": "CT-TAS-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the purpose of a test automation suite?",
    "options": [
      {
        "id": "a",
        "text": "It is a way of logically grouping related test cases together"
      },
      {
        "id": "b",
        "text": "It is a required component of the TAF"
      },
      {
        "id": "c",
        "text": "It is a collection of output files created by the test automation scripts"
      },
      {
        "id": "d",
        "text": "It is a risk traceability matrix used specifically for test automation"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): B is not correct because it is not a required component although it may be a component. C and D are just not correct."
  },
  {
    "id": 67,
    "exam": "ASTQB",
    "num": "27",
    "lo": "CT-TAS-4.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is a consideration when multiple machines will be executing the tests automation in parallel to simulate realistic user scenarios?",
    "options": [
      {
        "id": "a",
        "text": "Real users will need to log into each machine prior to execution"
      },
      {
        "id": "b",
        "text": "Gathering the test results will be difficult"
      },
      {
        "id": "c",
        "text": "The machines will need to be on the same network and may need to be able to communicate with each other"
      },
      {
        "id": "d",
        "text": "The machines will need to be configured identically so as not to skew the test results due to some machines having more memory, etc."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): It is likely that the machines will need to be on the same network and may have to be able to communicate to each other particularly if there are timing aspects to the execution of the test automation steps. A is not correct as this can be automated. B may be true but should be something that can be automated. D would be wonderful but is unlikely to occur and is not a requirement – in fact the differentiation between machines may give more realistic results."
  },
  {
    "id": 68,
    "exam": "ASTQB",
    "num": "28",
    "lo": "CT-TAS-4.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Some test automation scripts verify the data by directly accessing the database and verifying the values there. Is this a good practice?",
    "options": [
      {
        "id": "a",
        "text": "No, it will tend to introduce false negatives due to scripting errors"
      },
      {
        "id": "b",
        "text": "No, it is an unrealistic access of the data"
      },
      {
        "id": "c",
        "text": "Yes, it allows verification of the expected data changes"
      },
      {
        "id": "d",
        "text": "Yes, it’s a good practice for the test automation engineers to understand the database structure and this will make that understanding a requirement"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): By directly accessing the database, the tester can see that the values were updated and stored correctly without having to access the data via a different exposed interface. This access does need to be secure and read only so no data is accidentally altered."
  },
  {
    "id": 69,
    "exam": "ASTQB",
    "num": "29",
    "lo": "CT-TAS-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You have calculated the following expected savings from the test automation: Time to run a test case manually 20 minutes Time to run an automated test case 5 minutes Number of test cases 200 Number of test runs 10 Assuming all test cases are executed for each test run, what is the expected savings (in minutes) from executing with test automation rather than executing the tests manually?",
    "options": [
      {
        "id": "a",
        "text": "3,000,000 minutes"
      },
      {
        "id": "b",
        "text": "300,000 minutes"
      },
      {
        "id": "c",
        "text": "30,000 minutes"
      },
      {
        "id": "d",
        "text": "30 minutes"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): 20-5 = 15 minutes saved each time a test is run using the test automation rather than executing it manually. There are 200 test cases which are each executed 10 times: 15*200*10 = 30,000"
  },
  {
    "id": 70,
    "exam": "ASTQB",
    "num": "30",
    "lo": "CT-TAS-5.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are calculating the expected investment for a test automation project. You have acquired the following data: Time to set up the test automation 2400 minutes Time to implement a test 60 minutes Number of tests to be implemented 250 Average maintenance time per test per execution 10 minutes Time to run an automated test 50 Number of tests to be executed 250 Number of test runs (all test executed each run) 10 Given this information, what is the investment cost for the test automation?",
    "options": [
      {
        "id": "a",
        "text": "1,674,000 minutes"
      },
      {
        "id": "b",
        "text": "167,400 minutes"
      },
      {
        "id": "c",
        "text": "16,740 minutes"
      },
      {
        "id": "d",
        "text": "1,674 minutes"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The investment cost for this example is: 2400 + (60*250) + ((10 + 50) * 250 * 10) = 2400 + 15,000 + 150000 = 167,400 minutes."
  },
  {
    "id": 71,
    "exam": "ASTQB",
    "num": "31",
    "lo": "CT-TAS-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "If you have just run you test automation suite and it reported 50 failures when it normally reports 1 or 2, what should you do?",
    "options": [
      {
        "id": "a",
        "text": "Write a defect report for each failure so the developer sorts it out"
      },
      {
        "id": "b",
        "text": "Write a defect report for each failure so the automation engineer can fix the automation in all the appropriate places"
      },
      {
        "id": "c",
        "text": "Look for a cascading defect where one issue has caused multiple failures"
      },
      {
        "id": "d",
        "text": "Verify that the screen shots are all valid and that there wasn’t an internal failure of the test automation"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is likely a problem where one defect is causing multiple failures. It is probably warranted to see if there is a better way to handle this kind of issue is this becomes a common occurrence (such as exiting the test when certain issues are found)."
  },
  {
    "id": 72,
    "exam": "ASTQB",
    "num": "32",
    "lo": "CT-TAS-5.3.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are working in an organization that always prefers to use commercial test automation tools. The previous project implemented a very expensive tool, but the team wasn’t able to get much automation implemented due to issues with the tool being inflexible. The project was abandoned, and the team quit. You are now picking a tool for your project. What should you do?",
    "options": [
      {
        "id": "a",
        "text": "Avoid using that tool"
      },
      {
        "id": "b",
        "text": "Investigate the technical issues with the tool to see if there were feasible implementation alternatives that the team didn’t consider"
      },
      {
        "id": "c",
        "text": "Ensure your project has adequate time for a tool failure and time to learn a new tool in case the first one doesn’t work"
      },
      {
        "id": "d",
        "text": "Go with an open-source tool that will give you better flexibility and control over implementation"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You first need to understand what happened with the other project and if the technical issues were really insurmountable or if the team just didn’t have the skills/time required. A may be the right answer, but you won’t know that until you investigate. C is not correct as it is highly unlikely someone will let you budget in that kind of time. It’s tantamount to planning to fail. D is not correct because the company wants to use commercial tools – so those options must be investigated first."
  },
  {
    "id": 73,
    "exam": "ASTQB",
    "num": "33",
    "lo": "CT-TAS-5.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are working on a test automation project for an immigration system. There are already a large number of manual test cases that have been used for several years. The coverage of these test cases has been determined to be very good and the test cases are prioritized in terms of criticality to the system and the users. Given just this information, what should be your first priority for test automation?",
    "options": [
      {
        "id": "a",
        "text": "To automate the end-to-end user flows"
      },
      {
        "id": "b",
        "text": "To automate the existing manual tests, in priority order"
      },
      {
        "id": "c",
        "text": "To train your team regarding immigration practices and rules"
      },
      {
        "id": "d",
        "text": "To train the business users in how to generate test automation code from the requirements"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You already know you have a good set of manual tests, and they are already prioritized, so these should be the main focus of the test automation (per the syllabus). A is not correct as these may not be documented and tend to be more brittle than automation that is more functionally focused. C is not correct because the test automation engineers don’t need to know this level of detail as the test cases are already written. D would not be the best use of resources."
  },
  {
    "id": 74,
    "exam": "ASTQB",
    "num": "34",
    "lo": "CT-TAS-5.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are creating a test automation strategy for a new flagship product for your company. You know that management is reluctant to commit to an automation effort. What must you present to them to convince them to back a new automation effort?",
    "options": [
      {
        "id": "a",
        "text": "The backgrounds and experience of the proposed test automation team"
      },
      {
        "id": "b",
        "text": "The business value of the test automation"
      },
      {
        "id": "c",
        "text": "The cost of the automation effort compared to the development effort, including tools"
      },
      {
        "id": "d",
        "text": "The comparison of the current product with competitor products"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You must demonstrate a business value for the test automation product before they will be interested in seeing the makeup of the team and the anticipated costs. D doesn’t make sense."
  },
  {
    "id": 75,
    "exam": "ASTQB",
    "num": "35",
    "lo": "CT-TAS-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How can test automation reporting indicate that there is a need to shift the testing more to the left?",
    "options": [
      {
        "id": "a",
        "text": "By finding significant issues that are occurring at the functional component level"
      },
      {
        "id": "b",
        "text": "By finding significant issues that are occurring in the integration of individual components"
      },
      {
        "id": "c",
        "text": "By finding significant issues that are occurring when testing user transactions"
      },
      {
        "id": "d",
        "text": "By finding significant issues that are occurring in end-to-end workflows"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): As this is the farthest left the testing can be shifted. B may also be correct, but A should be done first and then expanded to B. C and D are both indications for shifting testing more to the right."
  },
  {
    "id": 76,
    "exam": "ASTQB",
    "num": "36",
    "lo": "CT-TAS-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "How does creating re-usable components help the test automation effort?",
    "options": [
      {
        "id": "a",
        "text": "It slows it down, allowing more time for analysis"
      },
      {
        "id": "b",
        "text": "It employs automation architects to define the test automation solution"
      },
      {
        "id": "c",
        "text": "It allows components to be created and maintained in one place, but used in many"
      },
      {
        "id": "d",
        "text": "It supports a distributed execution environment which can allow more automation agents to run concurrently"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Creating re-usable components is more efficient both in terms of development and maintenance time."
  },
  {
    "id": 77,
    "exam": "ASTQB",
    "num": "37",
    "lo": "CT-TAS-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "What happens to manual testers when a test automation suite has automated most of the testing they have historically done?",
    "options": [
      {
        "id": "a",
        "text": "They need to find new jobs"
      },
      {
        "id": "b",
        "text": "They need to become test automation engineers"
      },
      {
        "id": "c",
        "text": "They now have time to broaden the test coverage"
      },
      {
        "id": "d",
        "text": "They now have time to create more test data"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The manual testers should focus their energies on expanding the overall test coverage."
  },
  {
    "id": 78,
    "exam": "ASTQB",
    "num": "38",
    "lo": "CT-TAS-6.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "What should be done prior to deploying a new set of tests into the TAS in a continuous testing environment?",
    "options": [
      {
        "id": "a",
        "text": "The existing tests should be regression tested"
      },
      {
        "id": "b",
        "text": "The new tests should be tested"
      },
      {
        "id": "c",
        "text": "The new tests should undergo performance and security testing"
      },
      {
        "id": "d",
        "text": "The pipeline should be extended to capture test metrics and defect information"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The tests need to be tested to see if they work correctly. This may include C, but not necessarily."
  },
  {
    "id": 79,
    "exam": "ASTQB",
    "num": "39",
    "lo": "CT-TAS-6.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "Your test automation is failing during execution. You have done root cause analysis and have determined that the problems are almost always due to data. In particular, the data is either not there or it is not in the right state. For example, you have a test that is supposed to find and delete unused user accounts, but there are no unused accounts available to delete. What do you need to do to fix this issue?",
    "options": [
      {
        "id": "a",
        "text": "Programmatically create the pre-conditions required by the tests"
      },
      {
        "id": "b",
        "text": "Manually alter the data before you execute the tests"
      },
      {
        "id": "c",
        "text": "Get the database people to search and provide you with a list of valid test data"
      },
      {
        "id": "d",
        "text": "Skip this test until data is available"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): In this case you need test data that is in a particular state – unused – but the database doesn’t have any of this information. You need to have a way to populate the database with known unused users so the test can run. B and C would not be feasible for multiple executions of the tests. D is unlikely to be the right solution because this is a needed test, or you would not have automated it."
  },
  {
    "id": 80,
    "exam": "ASTQB",
    "num": "40",
    "lo": "CT-TAS-6.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "Your automation team has been adding automated tests into the CI/CD pipeline as new features are developed. The developers are now complaining that the pipeline is being slowed by the tests. They think there are too many tests being run. What should you do?",
    "options": [
      {
        "id": "a",
        "text": "Ignore the developers, the tests are needed"
      },
      {
        "id": "b",
        "text": "Conduct performance testing for the tests to see if they are as efficient as possible"
      },
      {
        "id": "c",
        "text": "Review the tests being executed and include only the critical ones in the pipeline and run the rest as a regression test suite overnight"
      },
      {
        "id": "d",
        "text": "Implement batch execution where all the tests are divided into three sets and have only one set at a time be executed for a deployment"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): There are probably a lot of tests that don’t have to be executed each time so reduce the pipeline set to the critical tests and push the rest into a regression test suite that is only run periodically. B might be warranted, but if proper practices have been in place, each test should be executing efficiently already. There might be a need to increase the performance capability of the test system. D is not correct because this can result in critical tests being missed."
  }
];
