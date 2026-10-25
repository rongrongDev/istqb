// CTFL v4.0 — Official ISTQB Sample Exams A-D (questions v1.5-v1.7), parsed from the
// PDFs in trainings/. Answers, LOs, K-levels, points, and per-option rationales come
// from the matching Sample-Exam-Answers PDFs.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": 1,
    "lo": "FL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements describe a valid test objective?",
    "options": [
      {
        "id": "a",
        "text": "To prove that there are no unfixed defects in the system under test"
      },
      {
        "id": "b",
        "text": "To prove that there will be no failures after the implementation of the system into production"
      },
      {
        "id": "c",
        "text": "To reduce the risk level of the test object and to build confidence in the quality level"
      },
      {
        "id": "d",
        "text": "To verify that there are no untested combinations of inputs"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. It is impossible to prove that there are no defects anymore in the system under test. See testing principle 1\nb) Is not correct. See testing principle 7\nc) Is correct. Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object\nd) Is not correct. It is impossible to test all combinations of inputs (see testing principle 2)"
  },
  {
    "id": 2,
    "exam": "A",
    "num": 2,
    "lo": "FL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following options shows an example of test activities that contribute to success?",
    "options": [
      {
        "id": "a",
        "text": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
      },
      {
        "id": "b",
        "text": "Testers try not to disturb the developers while coding, so that the developers write better code"
      },
      {
        "id": "c",
        "text": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
      },
      {
        "id": "d",
        "text": "Certified testers will design much better test cases than non-certified testers"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. It is important that testers are involved from the beginning of the software development lifecycle (SDLC). It will increase understanding of design decisions and will detect defects early.\nb) Is not correct. Both developers and testers will have more understanding of each other's work products and how to test the code\nc) Is not correct. End users will not help the testers in increasing the quality of defect reports; also, users usually do not participate in low-level testing levels like integration testing\nd) Is not correct. Being certified does not automatically mean that the tester will be better in test design"
  },
  {
    "id": 3,
    "exam": "A",
    "num": 3,
    "lo": "FL-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
    "options": [
      {
        "id": "a",
        "text": "Tests wear out"
      },
      {
        "id": "b",
        "text": "Absence-of-defects fallacy"
      },
      {
        "id": "c",
        "text": "Defects cluster together"
      },
      {
        "id": "d",
        "text": "Exhaustive testing is impossible"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well\nb) Is not correct. This principle says about the mistaken belief that just finding and fixing a large number of defects will ensure the success of a system\nc) Is not correct. This principle says that a small number of components usually contain most of the defects\nd) Is not correct. This principle states that testing all combinations of inputs and preconditions is not feasible"
  },
  {
    "id": 4,
    "exam": "A",
    "num": 4,
    "lo": "FL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
    "options": [
      {
        "id": "a",
        "text": "Estimating that testing the integration with the payment service will take 8 person-days"
      },
      {
        "id": "b",
        "text": "Deciding that the team should test if it is possible to properly share payment between many users"
      },
      {
        "id": "c",
        "text": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
      },
      {
        "id": "d",
        "text": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Estimating the test effort is part of test planning\nb) Is correct. This is an example of defining test conditions which is a part of test analysis\nc) Is not correct. Using test techniques to derive coverage items is a part of test design\nd) Is not correct. Reporting defects found during dynamic testing is a part of test execution"
  },
  {
    "id": 5,
    "exam": "A",
    "num": 5,
    "lo": "FL-1.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following factors have a SIGNIFICANT influence on the test approach? i. The SDLC ii. The number of defects detected in previous projects iii. The identified product risks iv. New regulatory requirements forcing formal white-box testing v. The test environment setup",
    "options": [
      {
        "id": "a",
        "text": "i, ii have significant influence"
      },
      {
        "id": "b",
        "text": "i, iii, iv have significant influence"
      },
      {
        "id": "c",
        "text": "ii, iv, v have significant influence"
      },
      {
        "id": "d",
        "text": "iii, v have significant influence"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "i. Is true. The SDLC has an influence on the test approach ii. Is false. The number of defects detected in previous projects may have some influence, but this is not as significant as i, iii and iv iii. Is true. The identified product risks are one of the most important factors influencing the test approach iv. Is true. Regulatory requirements are important factors influencing the test approach v. Is false. The test environment has no significant influence on the test approach Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 6,
    "exam": "A",
    "num": 6,
    "lo": "FL-1.4.5",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": true,
    "text": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "options": [
      {
        "id": "a",
        "text": "Configure test environments"
      },
      {
        "id": "b",
        "text": "Maintain the product backlog"
      },
      {
        "id": "c",
        "text": "Design solutions to new requirements"
      },
      {
        "id": "d",
        "text": "Create the test plan"
      },
      {
        "id": "e",
        "text": "Analyze the test basis"
      }
    ],
    "correct": [
      "a",
      "e"
    ],
    "explanation": "a) Is correct. This is done by the testers\nb) Is not correct. The product backlog is built and maintained by the product owner\nc) Is not correct. This is done by the development team\nd) Is not correct. This is a managerial role\ne) Is correct. This is done by the testers since its technical task done as part of a test analysis."
  },
  {
    "id": 7,
    "exam": "A",
    "num": 7,
    "lo": "FL-1.5.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following skills (i-v) are the MOST important skills of a tester? i. Having domain knowledge ii. Creating a product vision iii. Being a good team player iv. Planning and organizing the work of the team v. Critical thinking",
    "options": [
      {
        "id": "a",
        "text": "ii and iv are important"
      },
      {
        "id": "b",
        "text": "i, iii and v are important"
      },
      {
        "id": "c",
        "text": "i, ii and v are important"
      },
      {
        "id": "d",
        "text": "iii and iv are important"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "i. Is true. Having domain knowledge is an important tester skill ii. Is false. This is a task of the business analyst together with the business representative iii. Is true. Being a good team player is an important skill iv. Is false. Planning and organizing the work of the team is a task of the test manager or, mostly in an Agile software development project, the whole team and not just the tester v. Is true. Critical thinking is one of the most important skills of testers Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 8,
    "exam": "A",
    "num": 8,
    "lo": "FL-1.5.2",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "How is the whole team approach present in the interactions between testers and business representatives?",
    "options": [
      {
        "id": "a",
        "text": "Business representatives decide on test automation approaches"
      },
      {
        "id": "b",
        "text": "Testers help business representatives to define a test strategy"
      },
      {
        "id": "c",
        "text": "Business representatives are not part of the whole team approach"
      },
      {
        "id": "d",
        "text": "Testers help business representatives to create suitable acceptance tests"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The test automation approach is defined by testers with the help of developers and business representatives\nb) Is not correct. The test strategy is decided in collaboration with the developers\nc) Is not correct. Testers, developers, and business representatives are part of the whole team approach\nd) Is correct. Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests"
  },
  {
    "id": 9,
    "exam": "A",
    "num": 9,
    "lo": "FL-2.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Consider the following rule: \"for every SDLC activity there is a corresponding test activity\". In which SDLC models does this rule hold?",
    "options": [
      {
        "id": "a",
        "text": "Only in sequential development models"
      },
      {
        "id": "b",
        "text": "Only in iterative development models"
      },
      {
        "id": "c",
        "text": "Only in iterative and incremental development models"
      },
      {
        "id": "d",
        "text": "In sequential, incremental, and iterative development models"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. This rule holds for all SDLC models"
  },
  {
    "id": 10,
    "exam": "A",
    "num": 10,
    "lo": "FL-2.1.3",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
    "options": [
      {
        "id": "a",
        "text": "In ATDD, acceptance criteria are typically created based on the given/when/then format"
      },
      {
        "id": "b",
        "text": "In ATDD, test cases are mainly created at component testing and are code-oriented"
      },
      {
        "id": "c",
        "text": "In ATDD, tests are created , based on acceptance criteria to drive the development of the related software"
      },
      {
        "id": "d",
        "text": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. It is more often used in behavior-driven development (BDD)\nb) Is not correct. It is the description of test-driven development (TDD)\nc) Is correct. In acceptance test-driven development (ATDD) tests are written from acceptance criteria as part of the design process\nd) Is not correct. It is used in BDD"
  },
  {
    "id": 11,
    "exam": "A",
    "num": 11,
    "lo": "FL-2.1.5",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is NOT an example of the shift-left approach?",
    "options": [
      {
        "id": "a",
        "text": "Reviewing the user requirements before they are formally accepted by the stakeholders"
      },
      {
        "id": "b",
        "text": "Writing a component test before the corresponding code is written"
      },
      {
        "id": "c",
        "text": "Executing a performance efficiency test for a component during component testing"
      },
      {
        "id": "d",
        "text": "Writing a test script before setting up the configuration management process"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Early review is an example of the shift-left approach\nb) Is not correct. TDD is an example of the shift-left approach\nc) Is not correct. Early non-functional testing is an example of the shift-left approach\nd) Is correct. Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
  },
  {
    "id": 12,
    "exam": "A",
    "num": 12,
    "lo": "FL-2.1.6",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
    "options": [
      {
        "id": "a",
        "text": "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
      },
      {
        "id": "b",
        "text": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
      },
      {
        "id": "c",
        "text": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program"
      },
      {
        "id": "d",
        "text": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Retrospectives are more useful for identifying improvement opportunities and have little importance for clients\nb) Is not correct. Retrospectives are not aimed to collect feedback about the product, but about the process. Additionally, retrospectives are internal activity for the team and should not include end user representatives\nc) Is correct. Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing\nd) Is not correct. Courage and respect are values of Extreme Programming and are not closely related to retrospectives"
  },
  {
    "id": 13,
    "exam": "A",
    "num": 13,
    "lo": "FL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which types of failures (1-4) fit which test levels (A-D) BEST? 1. Failures in system behavior as it deviates from the user's business needs 2. Failures in communication between components 3. Failures in logic in the code 4. Failures in not correctly implemented business rules A. Component testing B. Component integration testing C. System testing D. Acceptance testing",
    "options": [
      {
        "id": "a",
        "text": "1D, 2B, 3A, 4C"
      },
      {
        "id": "b",
        "text": "1D, 2B, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "d",
        "text": "1C, 2B, 3A, 4D"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering: • The test basis for acceptance testing is the user's business needs (1D) • Communication between components is tested during component integration testing (2B) • Failures in logic can be found during component testing (3A) • Business rules are the test basis for system testing (4C) Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 14,
    "exam": "A",
    "num": 14,
    "lo": "FL-2.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows: Execution 1 Execution 2 Execution 3 TC1 (1) Failed (4) Passed (7) Passed TC2 (2) Passed (5) Failed (8) Passed TC3 (3) Failed (6) Failed (9) Passed Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?",
    "options": [
      {
        "id": "a",
        "text": "Only 4, 7, 8, 9"
      },
      {
        "id": "b",
        "text": "Only 5, 7"
      },
      {
        "id": "c",
        "text": "Only 4, 6, 8, 9"
      },
      {
        "id": "d",
        "text": "Only 5, 6"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test (4) and test (6) are confirmation tests. Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests. TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test. TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression test. Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 15,
    "exam": "A",
    "num": 15,
    "lo": "FL-3.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is NOT a benefit of static testing?",
    "options": [
      {
        "id": "a",
        "text": "Having less expensive defect management due to the ease of detecting defects later in the SDLC"
      },
      {
        "id": "b",
        "text": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
      },
      {
        "id": "c",
        "text": "Finding coding defects that might not have been found by only performing dynamic testing"
      },
      {
        "id": "d",
        "text": "Detecting gaps and inconsistencies in requirements"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Defect management is no less expensive. Finding and fixing defects later in the SDLC is more costly\nb) Is not correct. This is a benefit of static testing\nc) Is not correct. This is a benefit of static testing\nd) Is not correct. This is a benefit of static testing"
  },
  {
    "id": 16,
    "exam": "A",
    "num": 16,
    "lo": "FL-3.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a benefit of early and frequent feedback?",
    "options": [
      {
        "id": "a",
        "text": "It improves the test process for future projects"
      },
      {
        "id": "b",
        "text": "It forces customers to prioritize their requirements based on agreed risks"
      },
      {
        "id": "c",
        "text": "It provides a measure for the quality of changes"
      },
      {
        "id": "d",
        "text": "It helps avoid requirements misunderstandings"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Feedback can improve the test process, but if one only wants to improve future projects, the feedback does not need to come early or frequently\nb) Is not correct. Feedback is not used to prioritize requirements\nc) Is not correct. There is no one, recommended way to measure quality of changes. Also, this is not one of the benefits of early feedback that are mentioned in section 3.2.1\nd) Is correct. Early and frequent feedback can prevent misunderstandings about requirements"
  },
  {
    "id": 17,
    "exam": "A",
    "num": 17,
    "lo": "FL-3.2.4",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "The reviews being used in your organization have the following attributes: • There is the role of a scribe • The main purpose is to evaluate quality • The meeting is led by the author of the work product • There is individual preparation • A review report is produced Which of the following review types is MOST likely being used?",
    "options": [
      {
        "id": "a",
        "text": "Informal review"
      },
      {
        "id": "b",
        "text": "Walkthrough"
      },
      {
        "id": "c",
        "text": "Technical review"
      },
      {
        "id": "d",
        "text": "Inspection"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Considering the attributes: • Specified for walkthroughs, technical reviews, and inspections; thus, the reviews being performed cannot be informal reviews • The purpose of evaluating quality is one of the most important objectives of a walkthrough • This is not allowed for inspections and is typically not done in technical reviews. A moderator is needed in walkthroughs and is allowed for informal reviews • All types of reviews can include individual preparation (even informal reviews) • All types of reviews can produce a review report, although informal reviews do not require documentation Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 18,
    "exam": "A",
    "num": 18,
    "lo": "FL-3.2.5",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "options": [
      {
        "id": "a",
        "text": "Participants should dedicate adequate time for the review"
      },
      {
        "id": "b",
        "text": "Splitting large work products into small parts to make the required effort less intense"
      },
      {
        "id": "c",
        "text": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
      },
      {
        "id": "d",
        "text": "Failures found should be acknowledged, appreciated, and handled objectively"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Adequate time for individuals is a success factor\nb) Is not correct. Splitting work products into small adequate parts is a success factor\nc) Is not correct. Avoiding behaviors that might indicate boredom, exasperation, etc. is a success factor\nd) Is correct. During reviews one can find defects, not failures"
  },
  {
    "id": 19,
    "exam": "A",
    "num": 19,
    "lo": "FL-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is a characteristic of experience-based test techniques?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are created based on detailed design information"
      },
      {
        "id": "b",
        "text": "Items tested within the interface code section are used to measure coverage"
      },
      {
        "id": "c",
        "text": "The test techniques heavily rely on the tester's knowledge of the software and the business domain"
      },
      {
        "id": "d",
        "text": "The test cases are used to identify deviations from the requirements"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. This is a common characteristic of white-box test techniques. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software.\nb) Is not correct. This is a common characteristic of white-box test techniques. Coverage is measured based on the items tested within a selected structure and the test technique applied to the test basis\nc) Is correct. This is a common characteristic of experience-based test techniques. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests\nd) Is not correct. This is a common characteristic of black-box test techniques. Test cases may be used to detect gaps within requirements and the implementation of the requirements, as well as deviations from the requirements"
  },
  {
    "id": 20,
    "exam": "A",
    "num": 20,
    "lo": "FL-4.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a simplified apartment search form which has only two search criteria: • floor (with three possible options: ground floor; first floor; second or higher floor) • garden type (with three possible options: no garden; small garden; large garden) Each of the apartment on the ground floor has a garden, apartments on higher floors don't. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "6"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The situation presented in the question is described in the syllabus as \"each choice\" coverage. \"Small garden\" and \"large garden\" can go only with \"ground floor\", so we need two test cases with \"ground floor\" which cover these two \"garden type\" partitions. We need two more test cases to cover the two other \"floor\" partitions. The remaining \"garden type\" partition of \"no garden\" is covered by these tests. We need a total of four test cases: TC1 (ground floor, small garden) TC2 (ground floor, large garden) TC3 (first floor, no garden) TC4 (second or higher floor, no garden) Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 21,
    "exam": "A",
    "num": 21,
    "lo": "FL-4.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules: • 0 – 50 points: failed • 51 – 60 points: fair • 61 – 70 points: satisfactory • 71 – 80 points: good • 81 – 90 points: very good • 91 – 100 points: excellent You have prepared the following set of test cases: Final result Final grade TC1 91 excellent TC2 50 failed TC3 81 very good TC4 60 fair TC5 70 satisfactory TC6 80 good What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
    "options": [
      {
        "id": "a",
        "text": "50%"
      },
      {
        "id": "b",
        "text": "60%"
      },
      {
        "id": "c",
        "text": "33.3%"
      },
      {
        "id": "d",
        "text": "100%"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 and TC7 – 51). Therefore, the test cases cover 6/12 = 50%. Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 22,
    "exam": "A",
    "num": 22,
    "lo": "FL-4.2.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. The implemented features are as follows: • Anyone can rent a bicycle, but members receive a 20% discount • However, if the return deadline is missed, the discount is no longer available • After 15 rentals, members get a gift: a T-Shirt Decision table describing the implemented features looks as follows: Conditions R1 R2 R3 R4 R5 R6 R7 R8 Being a member T T T T F F F F Missed deadline T F T F T F F T 15th rental F F T T F F T T Actions 20% discount X X Gift T-Shirt X X X Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
    "options": [
      {
        "id": "a",
        "text": "R4"
      },
      {
        "id": "b",
        "text": "R2"
      },
      {
        "id": "c",
        "text": "R6"
      },
      {
        "id": "d",
        "text": "R8"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. A member without a missed deadline can get a discount and a gift T-Shirt after 15 bicycle rentals\nb) Is not correct. A member without a missed deadline can get a discount but no gift T-Shirt until they rented a bicycle 15 times\nc) Is not correct. Non-members cannot get a discount, even if they did not miss a deadline yet\nd) Is correct. No discount as a non-member that has also missed a deadline, but only members can receive a gift T-Shirt. Hence, the action is not correct"
  },
  {
    "id": 23,
    "exam": "A",
    "num": 23,
    "lo": "FL-4.2.4",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state. What is the MINIMAL number of test cases to achieve valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "7"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "\"test\" and \"error\" transitions cannot occur in one test case. Neither can both \"done\" transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct"
  },
  {
    "id": 24,
    "exam": "A",
    "num": 24,
    "lo": "FL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "options": [
      {
        "id": "a",
        "text": "Each instruction in the code that contains a defect has been executed at least once"
      },
      {
        "id": "b",
        "text": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
      },
      {
        "id": "c",
        "text": "Each path in the code has been executed at least once"
      },
      {
        "id": "d",
        "text": "Every combination of input values has been tested at least once"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Since 100% statement coverage is achieved, every statement, including the ones with defects, must have been executed and evaluated at least once\nb) Is not correct. Coverage depends on what is tested, not on the number of test cases. For example, for code \"if (x==0) y=1\", one test case (x=0) achieves 100% statement coverage, but two test cases (x=1) and (x=2) together achieve only 50% statement coverage\nc) Is not correct. If there is a loop in the code there may be an infinite number of possible paths, so it is not possible to execute all the possible paths in the code\nd) Is not correct. Exhaustive testing is not possible (see the seven testing principles section in the syllabus). For example, for code \"input x; print x\" any single test with arbitrary x achieves 100% statement coverage, but covers one input value"
  },
  {
    "id": 25,
    "exam": "A",
    "num": 25,
    "lo": "FL-4.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is NOT true for white-box testing?",
    "options": [
      {
        "id": "a",
        "text": "During white-box testing the entire software implementation is considered"
      },
      {
        "id": "b",
        "text": "White-box coverage metrics can help identify additional tests to increase code coverage"
      },
      {
        "id": "c",
        "text": "White-box test techniques can be used in static testing"
      },
      {
        "id": "d",
        "text": "White-box testing can help identify gaps in requirements implementation"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The fundamental strength of white-box test techniques is that the entire software implementation is taken into account during testing\nb) Is not correct. White-box coverage measures provide an objective measure of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage\nc) Is not correct. White-box test techniques can be used to perform reviews (static testing)\nd) Is correct. This is the weakness of the white-box test techniques. They are not able to identify the missing implementation, because they are based solely on the test object structure, not on the requirements specification"
  },
  {
    "id": 26,
    "exam": "A",
    "num": 26,
    "lo": "FL-4.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following BEST describes the concept behind error guessing?",
    "options": [
      {
        "id": "a",
        "text": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
      },
      {
        "id": "b",
        "text": "Error guessing involves using your personal experience of development and the errors you made as a developer"
      },
      {
        "id": "c",
        "text": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
      },
      {
        "id": "d",
        "text": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The basic concept behind error guessing is that the tester tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists)\nb) Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the test technique is not based on prior knowledge of development\nc) Is not correct. Error guessing is not a usability technique for guessing how users may fail to interact with the test object\nd) Is not correct. Duplicating the development task has several flaws that make it impractical, such as the tester having equivalent skills to the developer and the time involved to perform the development. It is not error guessing"
  },
  {
    "id": 27,
    "exam": "A",
    "num": 27,
    "lo": "FL-4.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?",
    "options": [
      {
        "id": "a",
        "text": "Checklist-based testing"
      },
      {
        "id": "b",
        "text": "Error guessing"
      },
      {
        "id": "c",
        "text": "Exploratory testing"
      },
      {
        "id": "d",
        "text": "Branch testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. This is a new product. You probably do not have a checklist yet and test conditions might not be known due to missing requirements\nb) Is not correct. This is a new product. You probably do not have enough information to make correct error guesses\nc) Is correct. Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing\nd) Is not correct. Branch testing is time-consuming, and your management is asking about some test results now. Also, branch testing does not involve domain knowledge"
  },
  {
    "id": 28,
    "exam": "A",
    "num": 28,
    "lo": "FL-4.5.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "options": [
      {
        "id": "a",
        "text": "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
      },
      {
        "id": "b",
        "text": "Using the given/when/then format to describe an example test condition related to a given user story"
      },
      {
        "id": "c",
        "text": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
      },
      {
        "id": "d",
        "text": "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Retrospectives are used to capture lessons learned and to improve the development and testing process, not to document the acceptance criteria\nb) Is correct. This is the standard way to document acceptance criteria\nc) Is not correct. Verbal communication does not allow to physically document the acceptance criteria as part of a user story (\"card\" aspect in the 3C's model)\nd) Is not correct. Acceptance criteria are related to a user story, not a test plan. Also, acceptance criteria are the conditions that have to be fulfilled to decide if the user story is complete. Risks are not such conditions"
  },
  {
    "id": 29,
    "exam": "A",
    "num": 29,
    "lo": "FL-4.5.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Consider the following user story: As an Editor I want to review content before it is published so that I can ensure the grammar is correct and its acceptance criteria: • The user can log in to the content management system with \"Editor\" role • The editor can view existing content pages • The editor can edit the page content • The editor can add markup comments • The editor can save changes • The editor can reassign to the \"content owner\" role to make updates Which of the following is the BEST example of an ATDD test for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Test if the editor can save the document after edit the page content"
      },
      {
        "id": "b",
        "text": "Test if the content owner can log in and make updates to the content"
      },
      {
        "id": "c",
        "text": "Test if the editor can schedule the edited content for publication"
      },
      {
        "id": "d",
        "text": "Test if the editor can reassign to another editor to make updates"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This test covers two acceptance criteria: one about editing the document and one about saving changes\nb) Is not correct. Acceptance criteria cover the editor activities, not the content owner activities\nc) Is not correct. Scheduling the edited content for publication may be a nice feature, but it is not covered by the acceptance criteria\nd) Is not correct. Acceptance criteria state about reassigning from an editor to the content owner, not to another editor"
  },
  {
    "id": 30,
    "exam": "A",
    "num": 30,
    "lo": "FL-5.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How do testers add value to iteration and release planning?",
    "options": [
      {
        "id": "a",
        "text": "Testers determine the priority of the user stories to be developed"
      },
      {
        "id": "b",
        "text": "Testers focus only on the functional aspects of the system to be tested"
      },
      {
        "id": "c",
        "text": "Testers participate in the detailed risk identification and risk assessment of user stories"
      },
      {
        "id": "d",
        "text": "Testers guarantee the release of high-quality software through early test design during the release planning"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Priorities for user stories are determined by the business representative together with the development team\nb) Is not correct. Testers focus on both functional and non-functional aspects of the system to be tested\nc) Is correct. According to the syllabus, this is one of the ways testers add value to iteration and release planning\nd) Is not correct. Early test design is not part of release planning. Early test design does not automatically guarantee the release of quality software"
  },
  {
    "id": 31,
    "exam": "A",
    "num": 31,
    "lo": "FL-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": true,
    "text": "Which TWO of the following options are the exit criteria for testing a system?",
    "options": [
      {
        "id": "a",
        "text": "Test environment readiness"
      },
      {
        "id": "b",
        "text": "The ability to log in to the test object by the tester"
      },
      {
        "id": "c",
        "text": "Estimated defect density is reached"
      },
      {
        "id": "d",
        "text": "Requirements are translated into given/when/then format"
      },
      {
        "id": "e",
        "text": "Regression tests are automated"
      }
    ],
    "correct": [
      "c",
      "e"
    ],
    "explanation": "a) Is not correct. Test environment readiness is a resource availability criterion; hence it belongs to the entry criteria\nb) Is not correct. This is a resource availability criterion; hence it belongs to the entry criteria\nc) Is correct. Estimated defect density is a measure of diligence; hence it belongs to the exit criteria.\nd) Is not correct. Requirements translated into a given format result in testable requirements; hence it belongs to the entry criteria\ne) Is correct. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria"
  },
  {
    "id": 32,
    "exam": "A",
    "num": 32,
    "lo": "FL-5.1.4",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made: • Most optimistic estimation: 2 person-hours • Most likely estimation: 11 person-hours • Most pessimistic estimation: 14 person-hours What is the final estimate?",
    "options": [
      {
        "id": "a",
        "text": "9 person-hours"
      },
      {
        "id": "b",
        "text": "14 person-hours"
      },
      {
        "id": "c",
        "text": "11 person-hours"
      },
      {
        "id": "d",
        "text": "10 person-hours"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "In the three-point estimation technique: E = (optimistic + 4*most likely + pessimistic)/6 E = (2+(4*11)+14)/6 = 10 Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct"
  },
  {
    "id": 33,
    "exam": "A",
    "num": 33,
    "lo": "FL-5.1.5",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities ( i.e., a smaller number means a higher priority), and dependencies: Test case number Test condition covered Priority Logical dependency TC 001 Select type of food 3 none TC 002 Select restaurant 2 TC 001 TC 003 Get direction 1 TC 002 TC 004 Call restaurant 2 TC 002 TC 005 Make reservation 3 TC 002 Which of the following test cases should be executed as the third one?",
    "options": [
      {
        "id": "a",
        "text": "TC 003"
      },
      {
        "id": "b",
        "text": "TC 005"
      },
      {
        "id": "c",
        "text": "TC 002"
      },
      {
        "id": "d",
        "text": "TC 001"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Test TC 001 must come first, followed by TC 002, to satisfy dependencies. Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005. Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 34,
    "exam": "A",
    "num": 34,
    "lo": "FL-5.1.7",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Consider the following test categories (1-4) and agile testing quadrants (A-D): 1. Usability testing 2. Component testing 3. Functional testing 4. Reliability testing A. Agile testing quadrant Q1: technology facing, supporting the development team B. Agile testing quadrant Q2: business facing, supporting the development team C. Agile testing quadrant Q3: business facing, critique the product D. Agile testing quadrant Q4: technology facing, critique the product How do the following test categories map onto the agile testing quadrants?",
    "options": [
      {
        "id": "a",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "b",
        "text": "1D, 2A, 3C, 4B"
      },
      {
        "id": "c",
        "text": "1C, 2B, 3D, 4A"
      },
      {
        "id": "d",
        "text": "1D, 2B, 3C, 4A"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering: • Usability testing is in Q3 (1 – C) • Component testing is in Q1 (2 – A) • Functional testing is in Q2 (3 – B) • Reliability testing is in Q4 (4 – D) Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 35,
    "exam": "A",
    "num": 35,
    "lo": "FL-5.2.4",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "During a risk analysis the following risk was identified and assessed: • Risk: Response time is too long to generate a report • Risk likelihood: medium; risk impact: high • Response to risk: o An independent test team performs performance efficiency testing during system testing o A selected sample of end users performs alpha testing and beta testing before the release What measure is proposed to be taken in response to this analyzed risk?",
    "options": [
      {
        "id": "a",
        "text": "Risk acceptance"
      },
      {
        "id": "b",
        "text": "Contingency plan"
      },
      {
        "id": "c",
        "text": "Risk mitigation"
      },
      {
        "id": "d",
        "text": "Risk transfer"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. We do not accept the risk; concrete actions are proposed\nb) Is not correct. No contingency plans are proposed\nc) Is correct. The proposed actions are related to testing, which is a form of risk mitigation\nd) Is not correct. Risk is not transferred but mitigated"
  },
  {
    "id": 36,
    "exam": "A",
    "num": 36,
    "lo": "FL-5.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
    "options": [
      {
        "id": "a",
        "text": "Acceptance criteria"
      },
      {
        "id": "b",
        "text": "Defect report"
      },
      {
        "id": "c",
        "text": "Test completion report"
      },
      {
        "id": "d",
        "text": "Burndown chart"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Acceptance criteria are the conditions used to decide whether the user story is ready. They cannot show work progress\nb) Is not correct. Defect reports inform about the defects. They do not show work progress\nc) Is not correct. Test completion report can be created after the iteration is finished, so it will not show the progress continuously within an iteration\nd) Is correct. Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress"
  },
  {
    "id": 37,
    "exam": "A",
    "num": 37,
    "lo": "FL-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
    "options": [
      {
        "id": "a",
        "text": "Traceability management"
      },
      {
        "id": "b",
        "text": "Maintenance testing"
      },
      {
        "id": "c",
        "text": "Configuration management"
      },
      {
        "id": "d",
        "text": "Requirements engineering"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Traceability is the relationship between two or more work products, not between different versions of the same work product\nb) Is not correct. Maintenance testing is about testing changes; it is not related closely to versioning\nc) Is correct. To support testing, configuration management may involve the version control of all test items\nd) Is not correct. Requirements engineering is the elicitation, documentation, and management of requirements; it is not closely related to test script versioning"
  },
  {
    "id": 38,
    "exam": "A",
    "num": 38,
    "lo": "FL-5.5.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. Application hangs up 2022-May-03 – John Doe – Rejected The application hangs up after entering \"Test input: $ä\" in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC -1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement. What critical information is MISSING from th is test report that would have been useful for the developers?",
    "options": [
      {
        "id": "a",
        "text": "Expected result and actual result"
      },
      {
        "id": "b",
        "text": "References and defect status"
      },
      {
        "id": "c",
        "text": "Test environment and test item"
      },
      {
        "id": "d",
        "text": "Priority and severity"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The expected result is \"the application should accept the provided input and create the user\". The actual result is \"The application hangs up after entering \"Test input. $ä\"\".\nb) Is not correct. There is a reference to the test case and to the related requirement and it states that the defect is rejected. Also, the defect status would not be very helpful for the developers\nc) Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected\nd) Is not correct. The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders"
  },
  {
    "id": 39,
    "exam": "A",
    "num": 39,
    "lo": "FL-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which test activity does a data preparation tool support?",
    "options": [
      {
        "id": "a",
        "text": "Test monitoring and test control"
      },
      {
        "id": "b",
        "text": "Test analysis"
      },
      {
        "id": "c",
        "text": "Test design and test implementation"
      },
      {
        "id": "d",
        "text": "Test completion"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Test monitoring involves the ongoing checking of all activities and comparison of actual progress against the test plan. Test control involves taking the actions necessary to meet the test objectives of the test plan. No test data are prepared during these activities.\nb) Is not correct. Test analysis includes analysis of the test basis to identify test conditions and prioritize them. Test data are not prepared during this activity.\nc) Is correct. Test design and implementation can both include the identification, creation or acquisition of the testware necessary for test execution (e.g., test data).\nd) Is not correct. Test completion activities occur at project milestones (e.g., release, end of iteration, test level completion), so it is too late for preparing test data."
  },
  {
    "id": 40,
    "exam": "A",
    "num": 40,
    "lo": "FL-6.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which item correctly identifies a potential risk of performing test automation?",
    "options": [
      {
        "id": "a",
        "text": "It may introduce unknown regressions in production"
      },
      {
        "id": "b",
        "text": "Sufficient efforts to maintain testware may not be properly allocated"
      },
      {
        "id": "c",
        "text": "Testing tools and associated testware may not be sufficiently relied upon"
      },
      {
        "id": "d",
        "text": "It may reduce the time allocated for manual testing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Test automation does not introduce unknown regressions in production\nb) Is correct. Wrong allocation of effort to maintain testware is a risk\nc) Is not correct. Test tools must be selected so that they and their testware can be relied upon\nd) Is not correct. The primary goal of test automation is to reduce manual testing. So, this is a benefit, not a risk"
  },
  {
    "id": 41,
    "exam": "B",
    "num": 1,
    "lo": "FL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an example of why testing is necessary?",
    "options": [
      {
        "id": "a",
        "text": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users"
      },
      {
        "id": "b",
        "text": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing"
      },
      {
        "id": "c",
        "text": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release"
      },
      {
        "id": "d",
        "text": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection. However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users. Spending time testing for failures that cannot occur with real users is not an efficient use of a tester's time\nb) Is not correct. Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing. Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term 'failures' that makes this an incorrect option\nc) Is not correct. Static analysis directly detects defects in code, and this is normally information for the developer, not the customer.\nd) Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed."
  },
  {
    "id": 42,
    "exam": "B",
    "num": 2,
    "lo": "FL-1.2.2",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
    "options": [
      {
        "id": "a",
        "text": "QA is performed as part of testing"
      },
      {
        "id": "b",
        "text": "Testing is performed as part of QC"
      },
      {
        "id": "c",
        "text": "Testing is another term for QC"
      },
      {
        "id": "d",
        "text": "Testing is performed as part of QA"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects\nb) Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects\nc) Is not correct. Although testing is a significant part of QC and helps to uncover defects, other (non-testing) techniques utilized in QC include formal methods like model checking and proof of correctness, as well as simulation and prototyping\nd) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects"
  },
  {
    "id": 43,
    "exam": "B",
    "num": 3,
    "lo": "FL-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
    "options": [
      {
        "id": "a",
        "text": "Creating test cases that cover every possible specified output"
      },
      {
        "id": "b",
        "text": "Documenting all possible test input variations and prioritizing these based on importance"
      },
      {
        "id": "c",
        "text": "Starting testing as early as possible with reviews and other static testing approaches"
      },
      {
        "id": "d",
        "text": "Using equivalence partitioning and boundary value analysis to generate test cases"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "The 'exhaustive testing is impossible' principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases. Instead, testing utilizes test techniques, test case prioritization, and risk-based testing to sample from the set of possibilities and focus test efforts.\na) Is not correct. The principle states that it is not feasible to test everything except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances, which is generally infeasible as there will be a practically infinite number of possibilities. Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. Sometimes there may be a practically infinite number of possible expected results (e.g., when there are several variables representing real numbers), whereas at other times there may be just two expected results, such as with a single variable that can be either true or false\nb) Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances. This is because for non-trivial systems there is a practically infinite number. Therefore, in practice, documenting all possible input variations would be impractical as it would take an infinite length of time\nc) Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The 'early testing saves time and money' principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures\nd) Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases"
  },
  {
    "id": 44,
    "exam": "B",
    "num": 4,
    "lo": "FL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
    "options": [
      {
        "id": "a",
        "text": "Test design"
      },
      {
        "id": "b",
        "text": "Test execution"
      },
      {
        "id": "c",
        "text": "Test analysis"
      },
      {
        "id": "d",
        "text": "Test implementation"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the necessary infrastructure and tools\nb) Is not correct. Test execution involves executing test cases (as part of test procedures), however it does not directly cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test conditions\nc) Is not correct. Test analysis is used to identify the features that require testing. The test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. While this activity involves working with test conditions, it does not cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test cases\nd) Is not correct. Test implementation includes the generation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. Test data is created, and the test environment built, and its set up verified. While this activity involves explicitly working with test cases, and may use test data requirements and test environment requirements to create test data and the test environment, it does not cover test conditions"
  },
  {
    "id": 45,
    "exam": "B",
    "num": 5,
    "lo": "FL-1.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "options": [
      {
        "id": "a",
        "text": "The average level of experience of the organization's marketing team"
      },
      {
        "id": "b",
        "text": "The knowledge of users that a new system is being developed for them"
      },
      {
        "id": "c",
        "text": "The number of years' experience of the members of the test team"
      },
      {
        "id": "d",
        "text": "The end user's organizational structure for a commercial music streaming application"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The organization's marketing team is unlikely to perform much testing (although in some organizations they may be involved with acceptance testing), so their average level of experience (most of which would be in marketing) is not likely to impact how testing is performed for a given test object\nb) Is not correct. The level of knowledge of users that a new system is being built for them is unlikely to affect how testing is performed. Any user involvement that could affect how testing is performed is more likely to be as a result of decisions made by the testers, customer and project manager\nc) Is correct. The number of years' experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge (e.g., of different tools and defect types) that the team members will apply when they are testing\nd) Is not correct. The organizational structure of the different end users (who may be varied) will change between users. So, it may not even be known when the application is being tested, and the end user's organizational structure can thus have little effect on how the testing is performed"
  },
  {
    "id": 46,
    "exam": "B",
    "num": 6,
    "lo": "FL-1.4.4",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements is a CORRECT example of the value of traceability?",
    "options": [
      {
        "id": "a",
        "text": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk"
      },
      {
        "id": "b",
        "text": "Traceability between user requirements and test results provides a means of measuring project progress against business goals"
      },
      {
        "id": "c",
        "text": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers"
      },
      {
        "id": "d",
        "text": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Traceability between the mitigated risks and test cases that passed provides little information, because to be mitigated (by testing) the risks would need to have a corresponding test case that passed. To be able to assess residual risk, traceability between all risks and test results needs to be available, so that the risks that do not have a corresponding passing test can be identified as the residual risks\nb) Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals\nc) Is not correct. It is not clear that test cases that failed provide an indication of tester's skills any more than test cases that passed. It would partly depend on the test objective (e.g., building confidence or causing failures). Also, such measurement of testers based on test cases that passed and failed can be counter-productive as it could cause the testers to optimize their testing based on that metric rather than the test objective\nd) Is not correct. Traceability between the identified risks and written test conditions provides a means of determining which further test conditions need to be written. Determining which risks are worth testing is part of risk management, and risk mitigation in particular"
  },
  {
    "id": 47,
    "exam": "B",
    "num": 7,
    "lo": "FL-1.5.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
    "options": [
      {
        "id": "a",
        "text": "The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming"
      },
      {
        "id": "b",
        "text": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system"
      },
      {
        "id": "c",
        "text": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts"
      },
      {
        "id": "d",
        "text": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Strong communication skills, active listening, and teamwork abilities enable a tester to interact effectively with all stakeholders, however a deep knowledge of a variety of computer games that allowed them to get on well with one developer is not an example of a generic skill useful to testers\nb) Is correct. Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers. A tester with experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system\nc) Is not correct. Although programming skills could be considered as technical knowledge which can increase efficiency when utilizing some test tools, it is unlikely that these skills would improve their communication with business analysts\nd) Is not correct. Although thoroughness, attention to detail, curiosity, and a methodical approach to identifying hard-to-find defects are all useful generic skills for testers, it is doubtful they would be generating test cases prior to starting exploratory testing. This is because one of the main tenets of exploratory testing is that the test cases are generated during the testing, not scripted in advance"
  },
  {
    "id": 48,
    "exam": "B",
    "num": 8,
    "lo": "FL-1.5.2",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an advantage of the whole-team approach?",
    "options": [
      {
        "id": "a",
        "text": "It allows team members to take on any role at any time"
      },
      {
        "id": "b",
        "text": "It only needs a single team to support the complete development project"
      },
      {
        "id": "c",
        "text": "It embeds business representatives alongside developers in the same team"
      },
      {
        "id": "d",
        "text": "It generates a team synergy that benefits the entire project"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, however that does not mean that team members can take on any role at any time. Typically, they only take on roles in which they are competent, and there is no suggestion that every team member can do every role\nb) Is not correct. The whole-team approach applies to how a single team (typically in Agile software development) works; it does not cover how multiple teams are supposed to work on larger projects, and it does not suggest that only one 'whole' team is needed for a complete project\nc) Is not correct. The whole-team approach does not expect every team member to be involved in every important decision. For instance, there is no need for the business representative (i.e., the Product Owner) to be involved in every technical decision that does not affect the business outcome and implementing such an approach would unnecessarily slow down the team's progress\nd) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project"
  },
  {
    "id": 49,
    "exam": "B",
    "num": 9,
    "lo": "FL-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "If agile software development is used, automation of system tests replaces the need for regression testing"
      },
      {
        "id": "b",
        "text": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle"
      },
      {
        "id": "c",
        "text": "If an iterative development model is used, then component testing is typically performed manually by developers"
      },
      {
        "id": "d",
        "text": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. In agile software development, deliverables are produced in each iteration, and the frequent delivery of increments necessitates extensive regression testing. Although some (or all) of this regression testing may be automated, the regression testing (automated or not) cannot be replaced by automation of system tests\nb) Is correct. If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible. Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle\nc) Is not correct. If an iterative development model, like agile software development, is used, then component tests may well be used for regression testing for each iteration. In which case, there is a strong argument for automating these component tests, which will have to be run frequently, and there is unlikely to be a strong argument for developers performing these component tests manually\nd) Is not correct. In most incremental development models, deliverables are produced in each increment, requiring both static testing and dynamic testing at all test levels for each increment delivered"
  },
  {
    "id": 50,
    "exam": "B",
    "num": 10,
    "lo": "FL-2.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "Testers should review work products as part of the next development phase"
      },
      {
        "id": "b",
        "text": "Testers should review work products as soon as drafts are available"
      },
      {
        "id": "c",
        "text": "Testers should review work products before test analysis and test design begin"
      },
      {
        "id": "d",
        "text": "Testers should review work products immediately after they are published"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach. If they waited until the next development phase, then unnecessary development (and test) work could be started on unreviewed, flawed work products\nb) Is correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach\nc) Is not correct. Testers typically review work products that form the test basis as part of test analysis, not before test analysis and test design\nd) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of the shift-left approach. Waiting until they are published means that any defects that could be found by tester's review will be in the published document"
  },
  {
    "id": 51,
    "exam": "B",
    "num": 11,
    "lo": "FL-2.1.3",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Test-Driven Development"
      },
      {
        "id": "b",
        "text": "Coverage-Driven Development"
      },
      {
        "id": "c",
        "text": "Quality-Driven Development"
      },
      {
        "id": "d",
        "text": "Feature-Driven Development"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test-Driven Development (TDD) is a well-known example of a test-first approach to development\nb) Is not correct. Coverage-Driven Development is not a correct example of a test-first approach to development\nc) Is not correct. Quality-Driven Development is not a correct example of a test-first approach to development\nd) Is not correct. Feature-Driven Development is not an example of a test-first approach to development, but is, instead, an agile software development methodology based around delivering features (as opposed to user stories in Scrum)"
  },
  {
    "id": 52,
    "exam": "B",
    "num": 12,
    "lo": "FL-2.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following statements about DevOps is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing"
      },
      {
        "id": "b",
        "text": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression"
      },
      {
        "id": "c",
        "text": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach"
      },
      {
        "id": "d",
        "text": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. This is largely provided through continuous integration, where the developers submit component (unit) tests with their new code, which must pass for the code to be admitted to the build. Therefore, developers do need to complete component testing\nb) Is correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests\nc) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. Testers do not attempt to treat developers and operations equally by spending more time on release testing, although a shift-right approach to testing (testing in production) may well be used\nd) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) in DevOps facilitate stable test environments and reduce the need for manual testing, however, there is a risk of overlooking the importance of manual testing, especially from a user's perspective"
  },
  {
    "id": 53,
    "exam": "B",
    "num": 13,
    "lo": "FL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is MOST likely to be performed as part of system testing?",
    "options": [
      {
        "id": "a",
        "text": "Security testing of a credit management system by an independent test team"
      },
      {
        "id": "b",
        "text": "Testing the interface of a currency exchange system with an external banking system"
      },
      {
        "id": "c",
        "text": "Beta testing of a remote learning system by courseware developers"
      },
      {
        "id": "d",
        "text": "Testing interactions between the user interface and database of a human resources system"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. System testing examines the behavior and capabilities of the complete system and covers non-functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team based on system specifications\nb) Is not correct. System integration testing examines the interfaces with other systems and external services\nc) Is not correct. Beta testing is a type of acceptance testing performed at an external site by roles outside the development organization\nd) Is not correct. Component integration testing involves testing the (interfaces and) interactions between components of a system, such as the user interface and database"
  },
  {
    "id": 54,
    "exam": "B",
    "num": 14,
    "lo": "FL-2.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses"
      },
      {
        "id": "b",
        "text": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced"
      },
      {
        "id": "c",
        "text": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object"
      },
      {
        "id": "d",
        "text": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Regression tests increase in number as the project progresses, as new regression tests are typically required as changes are made to the system. Similarly, the number of confirmation tests also typically increases as the project progresses as new confirmation tests are needed for each fix made to a system\nb) Is not correct. It is the other way round. Confirmation tests are created and run when the test object is fixed, and regression tests are (ideally) run whenever the test object is enhanced (changed)\nc) Is not correct. Confirmation testing verifies that a defect has been fixed correctly and so is concerned with testing changes to the test object. However, regression testing ensures that changes (including changes to the operational environment) do not have negative effects on unchanged software and so does not check that the operational environment remains unchanged\nd) Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed – and so is concerned with changed code"
  },
  {
    "id": 55,
    "exam": "B",
    "num": 15,
    "lo": "FL-3.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
    "options": [
      {
        "id": "a",
        "text": "Lack of usability provided through the user interface"
      },
      {
        "id": "b",
        "text": "Code with no path that reaches it"
      },
      {
        "id": "c",
        "text": "Poor response times for most of the expected users"
      },
      {
        "id": "d",
        "text": "Required features that are not implemented in the code"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. A lack of usability provided through the user interface can be detected through a review using a suitable checklist, but the lack of usability can also be identified by getting several typical users to dynamically test the user interface and provide feedback on its usability\nb) Is correct. A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code\nc) Is not correct. Poor response times for most of the expected users are difficult to determine without executing the code (i.e., by static testing), so in this situation dynamic testing could find a defect, but static testing is unlikely to find it\nd) Is not correct. A review of the code by someone who is aware of the required features could detect that the required features had not been implemented in the code, and dynamic testing could also be used to determine that these required features had not been implemented"
  },
  {
    "id": 56,
    "exam": "B",
    "num": 16,
    "lo": "FL-3.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": [
      {
        "id": "a",
        "text": "Managers are aware of which developers are less productive"
      },
      {
        "id": "b",
        "text": "It allows project managers to prioritize their stakeholder interactions"
      },
      {
        "id": "c",
        "text": "It facilitates early communication of potential quality issues"
      },
      {
        "id": "d",
        "text": "End users better understand why the delivery of the work product is delayed"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The feedback is from stakeholders (e.g., business representatives and end users), not from developers, so this feedback is not likely to inform managers which developers are more or less productive\nb) Is not correct. Early and frequent feedback from stakeholders is not used by project managers to prioritize how they interact with the different stakeholders\nc) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner\nd) Is not correct. Early and frequent feedback can prevent the development of a product that does not meet stakeholder needs, and results in costly rework and missed deadlines, so, ideally there should be no delay. Also, the feedback is from stakeholders (not to them), which includes the end users, so the end users providing feedback will not aid the end users' understanding"
  },
  {
    "id": 57,
    "exam": "B",
    "num": 17,
    "lo": "FL-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Given the following task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected 2. Everyone has access to the work product 3. Anomalies are identified in the work product 4. Anomalies are discussed And the following review activities A. Individual review B. Review initiation C. Planning D. Communication and analysis Which of the following BEST matches the task descriptions and activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2C, 3D, 4A"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "d",
        "text": "1C, 2B, 3A, 4D"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Considering each of the listed task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected - (Planning (C): Defining the review scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas of focus, exit criteria, supporting information such as standards, effort, and timeframes.) 2. Everyone has access to the work product - (Review initiation (B): Ensuring all participants have access to the work product and necessary resources, and clarifying their roles and responsibilities.) 3. Anomalies are identified in the work product - (Individual review (A): Evaluating the work product's quality, identifying and logging anomalies, recommendations, and questions using review techniques like checklist-based reviewing and scenario-based reviewing.) 4. Anomalies are analyzed and discussed - (Communication and analysis (D): Analyzing and discussing each anomaly, determining its status, ownership, and required actions, and making review decisions, normally in a meeting. This could include determining the need for a follow-up review.) Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. The correct match is: 1C, 2B, 3A, 4D"
  },
  {
    "id": 58,
    "exam": "B",
    "num": 18,
    "lo": "FL-3.2.3",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Given the following roles in reviews: 1. Scribe 2. Review leader 3. Facilitator 4. Manager And the following responsibilities in reviews: A. Ensures the effective running of review meetings and the setting up a safe review environment B. Records review information, such as decisions and new anomalies found during the review meeting C. Decides what is to be reviewed and provides resources, such as staff and time for the review D. Takes overall responsibility for the review such as organizing when and where the review will take place Which of the following BEST matches the roles and responsibilities?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3D, 4C"
      },
      {
        "id": "b",
        "text": "1A, 2C, 3B, 4D"
      },
      {
        "id": "c",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "d",
        "text": "1B, 2D, 3C, 4A"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed roles: 1. Scribe (or Recorder) - responsible for gathering feedback from reviewers and documenting review information, such as decisions made, and any new anomalies identified during the review meeting. (Records review information, such as decisions and new anomalies found during the review meeting - B) 2. Review Leader - responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully. (Takes overall responsibility for the review such as organizing when and where the review will take place - D) 3. Facilitator (or Moderator) - responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. (Ensures the effective running of review meetings and the setting up of a safe review environment - A) 4. Manager - responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. (Decides what is to be reviewed and provides resources, such as staff and time for the review - C) Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct match is: 1B, 2D, 3A, 4C\nd) Is not correct"
  },
  {
    "id": 59,
    "exam": "B",
    "num": 19,
    "lo": "FL-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
    "options": [
      {
        "id": "a",
        "text": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object."
      },
      {
        "id": "b",
        "text": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code."
      },
      {
        "id": "c",
        "text": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic."
      },
      {
        "id": "d",
        "text": "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Decision table testing is a black-box test technique, not a white-box test technique – the test cases are not based on the decisions in the source code. In branch testing, the test cases are derived from knowledge of the control flow of the test object\nb) Is not correct. Anticipation of potential defects is used in error guessing (an experience-based test technique), not in branch testing (a white-box test technique). In decision table testing, the test cases are derived from the specification that describes the business logic\nc) Is not correct. If a test case is based on the knowledge of the control flow of the test object, it is a white-box test technique. Decision table testing is typically based on an analysis of business logic, so it is a black-box test technique. In branch testing, test cases are not derived from the specification – this would make it a black-box test technique. Branch testing is a white-box test technique, where test cases are derived based on the source code structure\nd) Is correct. Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, so test cases are based on an analysis of the test object's internal structure and processing. As the test cases are dependent on how the software is designed and coded, they can only be created after the design or implementation of the test object"
  },
  {
    "id": 60,
    "exam": "B",
    "num": 20,
    "lo": "FL-4.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
    "options": [
      {
        "id": "a",
        "text": "19, 20, 30"
      },
      {
        "id": "b",
        "text": "11, 12, 20"
      },
      {
        "id": "c",
        "text": "1, 10, 50"
      },
      {
        "id": "d",
        "text": "10, 29, 30, 31"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. 19 covers the \"no discount\" partition, 20 covers the \"50% discount\" partition, and 30 covers the \"10% discount\" partition. These three values cover all three of the valid equivalence partitions\nb) Is not correct. 11 and 12 cover the \"no discount\" partition, while 20 covers the \"50% discount\" partition, so covering two of the three valid equivalence partitions\nc) Is not correct. 1 covers the \"no discount\" partition, while 10 and 50 cover the \"10% discount\" partition. The \"50% discount\" partition is not covered, so overall two of the three valid equivalence partitions are covered\nd) Is not correct. 29 and 31 cover the \"no discount\" partition, while 10 and 30 cover the \"10% discount\" partition. The \"50% discount\" partition is not covered, so overall two of the three valid equivalence partitions are covered"
  },
  {
    "id": 61,
    "exam": "B",
    "num": 21,
    "lo": "FL-4.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the \"password length\" variable. Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?",
    "options": [
      {
        "id": "a",
        "text": "4, 5, 13, 14"
      },
      {
        "id": "b",
        "text": "7, 11"
      },
      {
        "id": "c",
        "text": "1, 5, 13"
      },
      {
        "id": "d",
        "text": "1, 4, 7, 11, 14"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "The domain for the password length has three equivalence partitions: • passwords too short {0, 1, …, 4, 5} • passwords OK {6, 7, …, 11, 12} • passwords too long {13, 14, …} To achieve full coverage for 3-value BVA we need to test the following values: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Since 2-value BVA is already covered, this means that we have already tested the passwords of length: 0, 5, 6, 12 and 13. This means that the additional lengths that need to be covered to move from 2-value to 3-value are: 1, 4, 7, 11 and 14. Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct"
  },
  {
    "id": 62,
    "exam": "B",
    "num": 22,
    "lo": "FL-4.2.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "The following decision table contains the rules for determining the risk of atherosclerosis. Rule 1 Rule 2 Rule 3 Rule 4 Rule 5 Conditions Cholesterol (mg/dl) ≤124 ≤ 124 125 – 200 125 – 200 ≥ 201 Blood pressure (mm Hg) ≤ 140 > 140 ≤ 140 > 140 – Action Risk level very low low medium high very high You designed the test cases with the following input data: TC1: Cholesterol = 125 mg/dl Blood pressure = 141 mm Hg TC2: Cholesterol = 200 mg/dl Blood pressure = 201 mm Hg TC3: Cholesterol = 124 mg/dl Blood pressure = 201 mm Hg TC4: Cholesterol = 109 mg/dl Blood pressure = 200 mm Hg TC5: Cholesterol = 201 mg/dl Blood pressure = 140 mm Hg What is the decision table coverage achieved by these test cases?",
    "options": [
      {
        "id": "a",
        "text": "40%"
      },
      {
        "id": "b",
        "text": "60%"
      },
      {
        "id": "c",
        "text": "80%"
      },
      {
        "id": "d",
        "text": "100%"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4 TC3 and TC4 both cover Rule 2 TC5 covers Rule 5 So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. Therefore, option\nb) is the CORRECT option. Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 63,
    "exam": "B",
    "num": 23,
    "lo": "FL-4.2.4",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements. Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "Add, Remove, Add, Add, Add"
      },
      {
        "id": "b",
        "text": "Add, Add, Add, Add, Remove, Remove"
      },
      {
        "id": "c",
        "text": "Add, Add, Add, Remove, Remove"
      },
      {
        "id": "d",
        "text": "Add, Add, Add, Remove, Add"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Let us refer to the transitions with E1, …, E5 as in the picture. The variable N denotes the number of elements currently stored. Each \"Add\" event increases it by 1, and each \"Remove\" event decreases it by 1. Notice, that when the \"Add\" event occurs while being in the NOT FULL state, the state changes to FULL only if N=2. If N<2, the system stays in the NOT FULL state. If N=0, no \"Remove\" action is possible. Similarly, if N=3, no \"Add\" action is possible. Test\na) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Test\nb) is infeasible, because after the first three \"Add\" actions the system is in the FULL state and there is no valid transition going from FULL triggered by the \"Add\" event. After the first three transitions only 60% of valid transitions coverage is achieved. Test\nc) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5 valid transitions, achieving 100% valid transitions coverage). Test\nd) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct"
  },
  {
    "id": 64,
    "exam": "B",
    "num": 24,
    "lo": "FL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?",
    "options": [
      {
        "id": "a",
        "text": "The test suite composed of tests T1 and T2 achieves 105% statement coverage"
      },
      {
        "id": "b",
        "text": "There exists at least one statement that must have been executed by both T1 and T2"
      },
      {
        "id": "c",
        "text": "At least 5% of the statements in the code that was tested are non-executable"
      },
      {
        "id": "d",
        "text": "The test suite composed of tests T1 and T2 achieves full branch coverage"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Coverage is always defined as the percentage of the covered elements. Therefore, it cannot exceed 100%\nb) Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible (see answer\na). Therefore, at least 5% of executable statements must have been executed by both T1 and T2\nc) Is not correct. Statement coverage does not tell us anything about the number of non-executable statements in the code\nd) Is not correct. Even if a test suite achieves full statement coverage, this does not imply achieving full branch coverage"
  },
  {
    "id": 65,
    "exam": "B",
    "num": 25,
    "lo": "FL-4.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?",
    "options": [
      {
        "id": "a",
        "text": "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code"
      },
      {
        "id": "b",
        "text": "X = number of conditional branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "id": "c",
        "text": "X = number of branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "id": "d",
        "text": "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Branch testing is a white-box test technique in which the coverage items are branches. A branch is a transfer of control between two nodes in the control flow graph, which shows the possible sequences in which source code statements are executed in the test object. Each transfer of control can be either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome). Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage. Thus:\na) Is not correct. A decision outcome is a conditional branch. For branch testing, X counts not only conditional, but also unconditional branches\nb) Is not correct. Branch coverage counts not only conditional, but also unconditional branches\nc) Is correct. Branch coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage\nd) Is not correct. Both X and Y count only conditional branches and do not take into account the unconditional branches"
  },
  {
    "id": 66,
    "exam": "B",
    "num": 26,
    "lo": "FL-4.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": true,
    "text": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "options": [
      {
        "id": "a",
        "text": "Testers have not been allocated enough time for test design and test execution"
      },
      {
        "id": "b",
        "text": "The existing test strategy requires that testers use formal, black-box test techniques"
      },
      {
        "id": "c",
        "text": "The specification is written in a formal language that can be processed by a tool"
      },
      {
        "id": "d",
        "text": "Testers are the members of an agile team and have good programming skills"
      },
      {
        "id": "e",
        "text": "Testers are experienced in the business domain and have good analytical skills"
      }
    ],
    "correct": [
      "a",
      "e"
    ],
    "explanation": "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness. Thus:\na) Is correct. Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing\nb) Is not correct. Exploratory testing is not a black-box test technique\nc) Is not correct. Exploratory testing is useful when the specifications are poorly written\nd) Is not correct. Programming skills have nothing to do with exploratory testing in principle\ne) Is correct. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness"
  },
  {
    "id": 67,
    "exam": "B",
    "num": 27,
    "lo": "FL-4.4.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
    "options": [
      {
        "id": "a",
        "text": "\"The developer made an error when implementing the code\""
      },
      {
        "id": "b",
        "text": "\"The achieved statement coverage exceeds 85%\""
      },
      {
        "id": "c",
        "text": "\"The program works correctly regarding functional and non-functional requirements\""
      },
      {
        "id": "d",
        "text": "\"The error messages are written in language that the user can understand\""
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Checklists should contain test conditions to be verified. This is an example of an error, not a test condition; even if the tester was able to deduce some potential test conditions from the examples of errors, this error description is too general\nb) Is not correct. Checklists should not contain items that are better suited as exit criteria. This is an example of an exit criterion\nc) Is not correct. Checklists should not contain items that are too general. This is a very general item, which practically describes a test objective\nd) Is correct. This is an example of a test condition that can be checked by a human"
  },
  {
    "id": 68,
    "exam": "B",
    "num": 28,
    "lo": "FL-4.5.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Consider the following acceptance criteria for a user story written from the perspective of an online store owner. Given that the user is logged in and on the homepage, When the user clicks on the \"Add Item\" button, Then the \"Create Item\" form should appear, And the user should be able to input a name and price for the new item. In what format is this acceptance criteria written?",
    "options": [
      {
        "id": "a",
        "text": "Rule-oriented"
      },
      {
        "id": "b",
        "text": "Scenario-oriented"
      },
      {
        "id": "c",
        "text": "Product-oriented"
      },
      {
        "id": "d",
        "text": "Process-oriented"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The rule-oriented format includes formats like bullet point verification lists or tabulated forms of input-output mappings, explicitly showing the rules to be followed. Given/When/Then is a scenario-oriented format because it describes a scenario to be verified\nb) Is correct. This is a Given/When/Then format, which is scenario-oriented\nc) Is not correct. There is no \"product-oriented\" format of acceptance criteria\nd) Is not correct. There is no \"process-oriented\" format of acceptance criteria"
  },
  {
    "id": 69,
    "exam": "B",
    "num": 29,
    "lo": "FL-4.5.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Your team analyzes the following user story in order to define the acceptance criteria: As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases. Which of the following test cases will NOT be relevant for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Input: the customer logs into their account on the website and clicks the \"see order history\" button Expected result: the system shows a list of all the customer's previous orders, including the date, order number, and total cost"
      },
      {
        "id": "b",
        "text": "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities"
      },
      {
        "id": "c",
        "text": "Input: the customer clicks \"Sort ascending\" button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order"
      },
      {
        "id": "d",
        "text": "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The test case is related to viewing previous orders in the order history\nb) Is not correct. The test case is related to viewing previous orders\nc) Is not correct. The test case is related to viewing previous orders in the order history\nd) Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders"
  },
  {
    "id": 70,
    "exam": "B",
    "num": 30,
    "lo": "FL-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are: (1) Code development (2) Submit code into a version control system and merge it into the \"test\" branch (3) Perform component testing for the submitted code Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "options": [
      {
        "id": "a",
        "text": "Static analysis returns no high severity warnings for the submitted code"
      },
      {
        "id": "b",
        "text": "System version control reports no conflicts when merging code into the \"test\" branch"
      },
      {
        "id": "c",
        "text": "Component tests are compiled and ready to be executed"
      },
      {
        "id": "d",
        "text": "Statement coverage is at least 80%"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This is something that can (and should) be checked before the code is submitted to version control\nb) Is not correct. This is something that can be checked after step (2) is performed, because merge conflict reporting can be done after the code is submitted and merged\nc) Is not correct. This fits better as the entry criterion for step (3)\nd) Is not correct. This fits better as the exit criterion for step (3)"
  },
  {
    "id": 71,
    "exam": "B",
    "num": 31,
    "lo": "FL-5.1.4",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data. Project Development effort ($) Test effort ($) P1 800,000 40,000 P2 1,200,000 130,000 P3 600,000 70,000 P4 1,000,000 120,000 The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
    "options": [
      {
        "id": "a",
        "text": "$40,000"
      },
      {
        "id": "b",
        "text": "$80,000"
      },
      {
        "id": "c",
        "text": "$81,250"
      },
      {
        "id": "d",
        "text": "$82,500"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is estimated as: 10% * $800,000 = 0.1 * $800,000 = $80,000. Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 72,
    "exam": "B",
    "num": 32,
    "lo": "FL-5.1.5",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority. Test Priority (1 = higher priority) TC1 SEARCH for product A 4 TC2 SEARCH for product B 4 TC3 VIEW product A details 3 TC4 VIEW product B details 2 TC5 ADD product A to a shopping cart 3 TC6 ADD product B to a shopping cart 1 TC7 place an ORDER 5 You also identified the following logical dependencies between test cases: • SEARCH functionality must be tested before VIEW functionality can be tested. • VIEW functionality must be tested before ADD functionality. • ADD functionality must be tested before ORDER functionality. Which test case should be executed as the fourth one?",
    "options": [
      {
        "id": "a",
        "text": "TC3"
      },
      {
        "id": "b",
        "text": "TC1"
      },
      {
        "id": "c",
        "text": "TC7"
      },
      {
        "id": "d",
        "text": "TC2"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The logical dependencies mean that for each product you have to run SEARCH → VIEW → ADD before running ORDER. You can add more products (using the same flow), before you run ORDER. Based on this, TC1 or TC2 must be executed first, otherwise no progress can be made. The first priority should be given to VIEW and ADD product B, as its test cases (TC6, TC4) are assigned with higher priority. So, the first 3 tests to execute are TC2 -> TC4 -> TC6 Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. If TC7 has lower priority than the other tests, they should be tested first. Therefore, the entire flow should be: TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC7\na) Is not correct. TC1 must be executed before TC3\nb) Is correct\nc) Is not correct. As shown above, TC7 is the last to be executed.\nd) Is not correct. Product B must be executed before product A"
  },
  {
    "id": 73,
    "exam": "B",
    "num": 33,
    "lo": "FL-5.1.7",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "According to the testing quadrants model, which of the following falls into quadrant Q1 (\"technology facing\" and \"support the team\")?",
    "options": [
      {
        "id": "a",
        "text": "Usability testing"
      },
      {
        "id": "b",
        "text": "Functional testing"
      },
      {
        "id": "c",
        "text": "User acceptance testing"
      },
      {
        "id": "d",
        "text": "Component integration testing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Usability testing is business facing testing that critiques the product (Q3)\nb) Is not correct. Functional testing is business facing testing (Q2)\nc) Is not correct. User acceptance testing is business facing testing that critiques the product (Q3)\nd) Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1)"
  },
  {
    "id": 74,
    "exam": "B",
    "num": 34,
    "lo": "FL-5.2.4",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Given the following risks: 1. Ineffective loop implementation causes long system responses 2. Consumers change their preferences 3. Flooding of the server room 4. Patients above a certain age receive inaccurate reports And the following mitigation activities: A. Risk acceptance B. Testing for performance efficiency C. Using boundary value analysis as the test technique D. Risk transfer Which of the following BEST matches the risks with the mitigation activities?",
    "options": [
      {
        "id": "a",
        "text": "1C, 2D, 3A, 4B"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "c",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "d",
        "text": "1C, 2A, 3D, 4B"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed risks and their mitigations: 1. Long system responses (1) can be tested in performance testing (B) 2. Changes in consumers' preferences (2) are usually out of our control, so usually we accept this risk (A) 3. Flooding of the server room (3) can cause significant loss, so we should transfer the risk, e.g., by buying an insurance policy (D) 4. That patients above a certain age receive inaccurate reports (4) suggests a potential boundary problem, which can be effectively detected with test techniques like BVA (C) Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C\nd) Is not correct"
  },
  {
    "id": 75,
    "exam": "B",
    "num": 35,
    "lo": "FL-5.3.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is a product quality metric?",
    "options": [
      {
        "id": "a",
        "text": "Mean time to failure"
      },
      {
        "id": "b",
        "text": "Number of defects found"
      },
      {
        "id": "c",
        "text": "Requirements coverage"
      },
      {
        "id": "d",
        "text": "Defect detection percentage"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric\nb) Is not correct. This is an example of a defect metric, not a product quality metric\nc) Is not correct. This is an example of a coverage metric, not a product quality metric\nd) Is not correct. This is an example of a defect metric, not a product quality metric"
  },
  {
    "id": 76,
    "exam": "B",
    "num": 36,
    "lo": "FL-5.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?",
    "options": [
      {
        "id": "a",
        "text": "Face-to-face"
      },
      {
        "id": "b",
        "text": "Dashboards"
      },
      {
        "id": "c",
        "text": "Email"
      },
      {
        "id": "d",
        "text": "Video conferencing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The client is in a different location and time zone, so it may be difficult to communicate face-to-face\nb) Is not correct. Dashboards are usually available to any user at any time, so the difference in time zones will not be as much of a hindrance to communication as verbal, face-to-face communication\nc) Is not correct. Although the time difference between Europe and America is several hours, and this may cause some inconvenience, it's certainly not as great as with communicating face-to-face\nd) Is not correct. Video conferencing tools are a convenient means of communication. Although communication between Europe and America during working hours usually requires one party to connect in the very early or very late hours, this is not as much of an inconvenience as verbal, face-to-face communication"
  },
  {
    "id": 77,
    "exam": "B",
    "num": 37,
    "lo": "FL-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
    "options": [
      {
        "id": "a",
        "text": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment"
      },
      {
        "id": "b",
        "text": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage"
      },
      {
        "id": "c",
        "text": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end"
      },
      {
        "id": "d",
        "text": "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions\nb) Is not correct. CM tools do not execute test cases and do not calculate coverage\nc) Is not correct. A CM tool is not a licensed management tool\nd) Is not correct. CM tools do not generate test data"
  },
  {
    "id": 78,
    "exam": "B",
    "num": 38,
    "lo": "FL-5.5.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows. Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5 Test run ID: 736 Start 12:43:21.003 12:43:21.003 Execution of TC1. Input: 3. Output: 3. Result: passed 12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed 12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8. Result: failed 12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2. Result: failed 12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed End 12:43:21.005 Total time of test cycle: 0:00:00.002 Which of the following provides the BEST description of the failure that can be used in a defect report?",
    "options": [
      {
        "id": "a",
        "text": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5."
      },
      {
        "id": "b",
        "text": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5."
      },
      {
        "id": "c",
        "text": "The system fails to sort negative numbers. Reference: TC4, TC5."
      },
      {
        "id": "d",
        "text": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. While the sentence is true, it does not provide much value for the developer\nb) Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the defect and fix it more efficiently\nc) Is not correct. The system does not fail in sorting negative numbers. The problem is rather in disregarding duplicates\nd) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren't aware that the test cases have any defects"
  },
  {
    "id": 79,
    "exam": "B",
    "num": 39,
    "lo": "FL-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Given the following descriptions: 1. Support workflow tracking 2. Facilitate communication 3. Virtual machines 4. Support reviews And the following test tool categories: A. Static testing tools B. Tools supporting scalability and deployment standardization C. DevOps tools D. Collaboration tools Which of the following BEST matches the descriptions and categories?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2D, 3B, 4A"
      },
      {
        "id": "d",
        "text": "1D, 2C, 3A, 4B"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed tool categories and their descriptions: A. Static testing tools – support the tester in performing reviews and static analysis (4) B. Tools supporting scalability and deployment standardization – For example, virtual machines, containerization tools (3) C. DevOps tools – support the DevOps delivery pipeline, workflow tracking, automated build process(es), continuous integration/continuous delivery (CI/CD) (1) D. Collaboration tools – facilitate communication (2) Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct match is: 1C, 2D, 3B, 4A\nd) Is not correct"
  },
  {
    "id": 80,
    "exam": "B",
    "num": 40,
    "lo": "FL-6.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": [
      {
        "id": "a",
        "text": "It provides coverage measures that are too complicated for humans to derive"
      },
      {
        "id": "b",
        "text": "It shares responsibility for the testing with the tool vendor"
      },
      {
        "id": "c",
        "text": "It removes the need for critical thinking when analyzing test results"
      },
      {
        "id": "d",
        "text": "It generates test cases from an analysis of the program code"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test automation can provide measures that are too complicated for humans to derive, such as white-box testing coverage measures for all but the most trivial code\nb) Is not correct. By using test tools, the responsibility for the testing is NOT shared with the tool vendor as the vendor is not involved in the testing, and it is the tester's responsibility. The only possible responsibility that could be assigned to the tool vendor is if the tool fails to work as expected and provides incorrect test results\nc) Is not correct. Testers still need to apply critical thinking when analyzing anomalies in the test results to determine their likely cause\nd) Is not correct. Neither testers nor tools can generate test cases simply from an analysis of the program code as the code is the implementation and provides no information on the expected results, which will need to come from another part of the test basis, such as the design specification"
  },
  {
    "id": 81,
    "exam": "C",
    "num": 1,
    "lo": "FL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a typical test objective?",
    "options": [
      {
        "id": "a",
        "text": "Validating that documented requirements are met"
      },
      {
        "id": "b",
        "text": "Causing failures and identifying defects"
      },
      {
        "id": "c",
        "text": "Initiating errors and identifying root causes"
      },
      {
        "id": "d",
        "text": "Verifying the test object meets user expectations"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replaced 'validating' with 'verifying'\nb) Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing\nc) Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing\nd) Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this would be correct if we replaced 'verifying' with 'validating'"
  },
  {
    "id": 82,
    "exam": "C",
    "num": 2,
    "lo": "FL-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements BEST describes the difference between testing and debugging?",
    "options": [
      {
        "id": "a",
        "text": "Testing causes failures while debugging fixes failures"
      },
      {
        "id": "b",
        "text": "Testing is a negative activity while debugging is a positive activity"
      },
      {
        "id": "c",
        "text": "Testing determines that defects exist while debugging removes defects"
      },
      {
        "id": "d",
        "text": "Testing finds the cause of defects while debugging fixes the cause of defects"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Dynamic testing does cause failures (from which defects can then be located and fixed). However, debugging is concerned with locating defects and fixing these defects. Therefore, debugging does not fix failures\nb) Is not correct. Both testing and debugging contribute to improving the quality of the test object, so both should be considered positively. Debugging is generally considered to be a positive activity as it is fixing something. Dynamic testing does involve intentionally causing the test object to fail, which is why some people consider it a negative activity, but that is a very narrow view (and not one typically held by testers). Both positive and negative test cases are possible. Positive test cases check that the test object correctly performs what it is supposed to do, while negative testing checks that the test object does not do what it is not supposed to do\nc) Is correct. Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects\nd) Is not correct. The causes of defects are typically human errors. Testing finds defects either directly through static testing, or indirectly by causing failures in dynamic testing, and debugging fixes defects. So, testing does not find the cause of defects and debugging does not fix the causes of defects"
  },
  {
    "id": 83,
    "exam": "C",
    "num": 3,
    "lo": "FL-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
    "options": [
      {
        "id": "a",
        "text": "Explaining that it is not possible for testing to show the absence of defects"
      },
      {
        "id": "b",
        "text": "Supporting the end users to perform acceptance testing"
      },
      {
        "id": "c",
        "text": "Ensuring that no implementation defects remain in the delivered system"
      },
      {
        "id": "d",
        "text": "Modifying tests that cause no failures to ensure few defects remain"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The 'absence-of-defects fallacy' is concerned with the idea that ensuring correctness in accordance with the requirements (i.e., verifying the absence of implementation defects) does not guarantee user satisfaction with the system. To address this it is also necessary to validate that the system meets users' needs and expectations, fulfills business objectives, and outperforms competing systems.\na) Is not correct. The 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the 'absence-of-defects' fallacy\nb) Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations\nc) Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness\nd) Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the 'tests wear out' principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations"
  },
  {
    "id": 84,
    "exam": "C",
    "num": 4,
    "lo": "FL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": true,
    "text": "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
    "options": [
      {
        "id": "a",
        "text": "Test implementation"
      },
      {
        "id": "b",
        "text": "Test design"
      },
      {
        "id": "c",
        "text": "Test execution"
      },
      {
        "id": "d",
        "text": "Test monitoring"
      },
      {
        "id": "e",
        "text": "Test analysis"
      }
    ],
    "correct": [
      "b",
      "e"
    ],
    "explanation": "Given the following description of test analysis: To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. The systematic identification of test conditions as coverage items often involves using test techniques both during test analysis and as part of the test design activity. From the above description, it can be seen that test techniques are often used in the test analysis and test design activities. Boundary value analysis and equivalence partitioning are test techniques.\na) Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while test techniques create test cases\nb) Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items\nc) Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while test techniques create test cases\nd) Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while test techniques create test cases\ne) Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions"
  },
  {
    "id": 85,
    "exam": "C",
    "num": 5,
    "lo": "FL-1.4.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Given the following testware: 1. Coverage items 2. Change requests 3. Test execution schedule 4. Prioritized test conditions And the following test activities A. Test analysis B. Test design C. Test implementation D. Test completion Which of the following BEST shows the testware produced by the activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "c",
        "text": "1D, 2C, 3A, 4B"
      },
      {
        "id": "d",
        "text": "1D, 2C, 3B, 4A"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering each of the listed test activities and their output testware: A. Test analysis - prioritized test conditions (4) (e.g., acceptance criteria), and defect reports for defects identified in the test basis B. Test design - prioritized test cases, test charters, coverage items (1), test data requirements, and test environment requirements C. Test implementation - test procedures, automated test scripts, test suites, test data, test execution schedule (3), and test environment elements such as stubs, drivers, simulators, and service virtualizations D. Test completion - test completion report, documented lessons learned, action items for improvement, and change requests (2) (as product backlog items) Thus:\na) Is correct. The correct match is: 1B, 2D, 3C, 4A\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 86,
    "exam": "C",
    "num": 6,
    "lo": "FL-1.4.5",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team"
      },
      {
        "id": "b",
        "text": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion"
      },
      {
        "id": "c",
        "text": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself"
      },
      {
        "id": "d",
        "text": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members following the whole-team approach\nb) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control\nc) Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks\nd) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for test implementation and test execution"
  },
  {
    "id": 87,
    "exam": "C",
    "num": 7,
    "lo": "FL-1.5.2",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an advantage of the whole-team approach?",
    "options": [
      {
        "id": "a",
        "text": "Teams with no testers"
      },
      {
        "id": "b",
        "text": "Improved team dynamics"
      },
      {
        "id": "c",
        "text": "Specialist team members"
      },
      {
        "id": "d",
        "text": "Larger team sizes"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. In the whole-team approach, testers play a vital role by sharing their testing expertise with the team and guiding product development. They collaborate with other team members to achieve the desired quality levels and work with business representatives to create acceptance tests. Testers also partner with developers to determine the optimal test strategy and test automation approaches\nb) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project\nc) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, thus specialist team members are not an advantage of this approach\nd) Is not correct. There is no specific guidance on the optimum size of teams using the whole-team approach, and there is no suggestion that larger teams are better"
  },
  {
    "id": 88,
    "exam": "C",
    "num": 8,
    "lo": "FL-1.5.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements about the independence of testing is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers"
      },
      {
        "id": "b",
        "text": "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers"
      },
      {
        "id": "c",
        "text": "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain"
      },
      {
        "id": "d",
        "text": "Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process\nb) Is not correct. A developer's familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects\nc) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer's team and do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not dependent on the level of independence\nd) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer's team generally more independent than testers from within the team. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release"
  },
  {
    "id": 89,
    "exam": "C",
    "num": 9,
    "lo": "FL-2.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "For each test level, there is a corresponding development level"
      },
      {
        "id": "b",
        "text": "For each test objective, there is a corresponding development objective"
      },
      {
        "id": "c",
        "text": "For every test activity, there is a corresponding user activity"
      },
      {
        "id": "d",
        "text": "For every development activity, there is a corresponding test activity"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, here we are attempting to equate test levels with development levels, and, although we know what is meant by 'test levels', there is no common understanding of the term ' development level'\nb) Is not correct. Every software development activity has a corresponding test activity; however test objectives are quite different. For instance, there might be a test objective of ensuring that a test object adheres to a contractual requirement that a certain type of testing must be performed before delivery. In this case there is no reason for there to be a corresponding development objective\nc) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to testing and user activities. For instance, for some systems it is difficult to even identify the end users. Also, some test activities are focused on developers (e.g., testing for ease of maintainability), which has no user aspect to it\nd) Is correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity"
  },
  {
    "id": 90,
    "exam": "C",
    "num": 10,
    "lo": "FL-2.1.3",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Component Test-Driven Development"
      },
      {
        "id": "b",
        "text": "Integration Test-Driven Development"
      },
      {
        "id": "c",
        "text": "System Test-Driven Development"
      },
      {
        "id": "d",
        "text": "Acceptance Test-Driven Development"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Component Test-Driven Development is not a correct example of a test-first approach to development\nb) Is not correct. Integration Test-Driven Development is not a correct example of a test-first approach to development\nc) Is not correct. System Test-Driven Development is not a correct example of a test-first approach to development\nd) Is correct. Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development"
  },
  {
    "id": 91,
    "exam": "C",
    "num": 11,
    "lo": "FL-2.1.5",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following provides the BEST description of shift-left?",
    "options": [
      {
        "id": "a",
        "text": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money'"
      },
      {
        "id": "b",
        "text": "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC"
      },
      {
        "id": "c",
        "text": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests"
      },
      {
        "id": "d",
        "text": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Practices involved in shift left are aimed at implementing more test activities in the early phases of the software development life cycle (SDLC), portraying the SDLC as moving from left to right. There is no such thing as the left-hand side of the test process\nb) Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher\nc) Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and if a continuous integration/continuous delivery (CI/CD) approach is followed, then these tests will have been submitted with the code. In some situations the tester may automate tests for regression testing, and sometimes even for component tests and component integration tests, however this is not part of shift left which moves testing earlier in the SDLC\nd) Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasizing the importance of starting testing earlier in the SDLC. However, automating more test activities to be performed later in the SDLC is not part of shift-left"
  },
  {
    "id": 92,
    "exam": "C",
    "num": 12,
    "lo": "FL-2.1.6",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is LEAST likely to occur as a result of a retrospective?",
    "options": [
      {
        "id": "a",
        "text": "The quality of future test objects improves by identifying improvements in development practices"
      },
      {
        "id": "b",
        "text": "Test efficiency improves by speeding up the configuration of test environments through automation"
      },
      {
        "id": "c",
        "text": "End users' understanding of the development and test processes is improved"
      },
      {
        "id": "d",
        "text": "Automated test scripts are enhanced through feedback from developers"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. One of the purposes of retrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective\nb) Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements. So, this is likely to occur as a result of a retrospective\nc) Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives\nd) Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective"
  },
  {
    "id": 93,
    "exam": "C",
    "num": 13,
    "lo": "FL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
    "options": [
      {
        "id": "a",
        "text": "Component testing"
      },
      {
        "id": "b",
        "text": "Component integration testing"
      },
      {
        "id": "c",
        "text": "System integration testing"
      },
      {
        "id": "d",
        "text": "Acceptance testing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment\nb) Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing\nc) Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. This type of testing is also most often performed by testers\nd) Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users"
  },
  {
    "id": 94,
    "exam": "C",
    "num": 14,
    "lo": "FL-2.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
    "options": [
      {
        "id": "a",
        "text": "Only confirmation testing"
      },
      {
        "id": "b",
        "text": "Confirmation testing then regression testing"
      },
      {
        "id": "c",
        "text": "Only regression testing"
      },
      {
        "id": "d",
        "text": "Regression testing then confirmation testing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered in unchanged areas of the system\nb) Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system\nc) Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation\nd) Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed (i.e., when an update needs to be tested), confirmation testing precedes regression testing"
  },
  {
    "id": 95,
    "exam": "C",
    "num": 15,
    "lo": "FL-3.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Given the following example defects: i. Two different parts of the design specification disagree due to the complexity of the design ii. A response time is too long and so makes users lose patience iii. A path in the code cannot be reached during execution iv. A variable is declared but never subsequently used in the program v. The amount of memory needed by the program to generate a report is too high Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
    "options": [
      {
        "id": "a",
        "text": "ii, v"
      },
      {
        "id": "b",
        "text": "iii, v"
      },
      {
        "id": "c",
        "text": "i, ii, iv"
      },
      {
        "id": "d",
        "text": "i, iii, iv"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Considering each of the listed example defects: i. Two different parts of the design specification disagree due to the complexity of the design – this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing ii. A response time is too long and so makes users lose patience – this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing iii. A path in the code cannot be reached during execution - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing iv. A variable is declared but never subsequently used in the program - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing v. The amount of memory needed by the program to generate a report is too high – this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynamic testing Thus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. The correct match for static testing is i, iii, and iv"
  },
  {
    "id": 96,
    "exam": "C",
    "num": 16,
    "lo": "FL-3.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": [
      {
        "id": "a",
        "text": "Changes to requirements are understood and implemented earlier"
      },
      {
        "id": "b",
        "text": "It ensures business stakeholders understand user requirements"
      },
      {
        "id": "c",
        "text": "It allows product owners to change their requirements as often as they want"
      },
      {
        "id": "d",
        "text": "End users are told which requirements will not be implemented prior to release"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner\nb) Is not correct. The feedback is from stakeholders, so providing feedback is unlikely to improve their understanding of their own user requirements\nc) Is not correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. However, because changes in requirements can be understood and implemented sooner, it does not mean that unlimited changes to requirements are encouraged\nd) Is not correct. The feedback is from stakeholders and does not cover communication to them. Communications with end users could include telling them about which requirements will not be implemented prior to release, but ideally this should not happen at all"
  },
  {
    "id": 97,
    "exam": "C",
    "num": 17,
    "lo": "FL-3.2.4",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Given the following review types: 1. Technical review 2. Informal review 3. Inspection 4. Walkthrough And the following descriptions: A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects C. The main objective is detecting potential defects and it requires metrics collection to support process improvement D. The main objective is detecting potential defects and it generates no formal documented output Which of the following BEST matches the review types and the descriptions?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "id": "b",
        "text": "1A, 2D, 3C, 4B"
      },
      {
        "id": "c",
        "text": "1B, 2C, 3D, 4A"
      },
      {
        "id": "d",
        "text": "1C, 2D, 3A, 4B"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed review types: 1. Technical review - This type of review is performed by technically qualified reviewers and led by a moderator. The objectives are to gain consensus and make decisions on technical problems while also evaluating quality and building confidence in the work product, generating new ideas, motivating and enabling authors to improve, and detecting anomalies 2. Informal review - The main objective is to detect anomalies. The process is not defined and does not require formal documented output 3. Inspection - This is the most formal review type, and it follows the complete generic review process. The primary objective is to find the most anomalies, and other objectives include evaluating quality and building confidence in the work product, motivating and enabling authors to improve, and collecting metrics that can be used to enhance the software development lifecycle (SDLC), including the inspection process. The author cannot act as the review leader or scribe 4. Walkthrough - Led by the author, this type of review serves various objectives such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. Reviewers might perform an individual review before the walkthrough, but this is not mandatory A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting anomalies C. The main objective is detecting anomalies and it requires metrics collection to support process improvement"
  },
  {
    "id": 98,
    "exam": "C",
    "num": 18,
    "lo": "FL-3.2.5",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a factor that contributes to a successful review?",
    "options": [
      {
        "id": "a",
        "text": "Ensure management participate as reviewers"
      },
      {
        "id": "b",
        "text": "Split large work products into smaller parts"
      },
      {
        "id": "c",
        "text": "Set reviewer evaluation as an objective"
      },
      {
        "id": "d",
        "text": "Plan to cover one document per review"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. To ensure successful reviews, it is important to secure management's support for the review process. However that does not mean that they should participate as reviewers\nb) Is correct. To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual reviews or review meetings\nc) Is not correct. To ensure successful reviews, it's important to clearly define objectives and measurable exit criteria, without evaluating participants\nd) Is not correct. To ensure successful reviews, it's important to break down the review into smaller chunks to prevent reviewers from losing focus during individual reviews or review meetings. So you should not plan to cover one document per review"
  },
  {
    "id": 99,
    "exam": "C",
    "num": 19,
    "lo": "FL-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
    "options": [
      {
        "id": "a",
        "text": "The test object"
      },
      {
        "id": "b",
        "text": "The test level at which the test technique is used"
      },
      {
        "id": "c",
        "text": "The test basis"
      },
      {
        "id": "d",
        "text": "The software development lifecycle (SDLC) in which the test technique can be used"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. In most cases both black-box test techniques and experience-based test techniques can be used for the same test objects\nb) Is not correct. Both black-box test techniques and experience-based test techniques can be used at all test levels\nc) Is correct. Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all\nd) Is not correct. Experience-based test techniques can detect defects that may be missed using black-box (and white-box) test techniques. Hence, experience-based test techniques are complementary to black-box test techniques and white-box test techniques and both black-box test techniques and experience-based test techniques can be used in all SDLCs"
  },
  {
    "id": 100,
    "exam": "C",
    "num": 20,
    "lo": "FL-4.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions: Variable: PIN code length • The partition \"length correct\" - four-digit PINs • The partition \"length incorrect\" - PINs with length other than 4 Variable: Number of different digits • The partition \"number of different digits correct\" - PINs with at least two different digits • The partition \"number of different digits incorrect\" - PINs with all digits being the same Which of the following is the BEST set of input test data to cover the identified equivalence partitions?",
    "options": [
      {
        "id": "a",
        "text": "12, 1111, 1234, 12345"
      },
      {
        "id": "b",
        "text": "1, 123, 1111, 1234"
      },
      {
        "id": "c",
        "text": "11, 12, 1111, 12345"
      },
      {
        "id": "d",
        "text": "123, 1222, 12345"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. • Value \"12\" covers \"length incorrect, too few digits\" • Value \"1111\" covers \"length correct\" and \"number of different digits incorrect • Value \"1234\" again covers \"length correct\" and \"number of different digits correct\" • Value \"12345\" covers \"length incorrect, too many digits\"\nb) Is not correct. All partitions are covered, however it only covers the lower side of \"length incorrect\"\nc) Is not correct. There are no value covering \"correct PIN\"\nd) Is not correct. There are no value covering \"number of different digits\""
  },
  {
    "id": 101,
    "exam": "C",
    "num": 21,
    "lo": "FL-4.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "A developer was asked to implement the following business rule: INPUT: value (integer number) IF (value ≤ 100 OR value ≥ 200) THEN write \"value incorrect\" ELSE write \"value OK\" You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?",
    "options": [
      {
        "id": "a",
        "text": "100, 150, 200, 201"
      },
      {
        "id": "b",
        "text": "99, 100, 200, 201"
      },
      {
        "id": "c",
        "text": "98, 99, 100, 101"
      },
      {
        "id": "d",
        "text": "101, 150, 199, 200"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "The equivalence partitions are: {…, 99, 100}, {101, 102, …, 198, 199}, {200, 201, …}. Thus, there are 4 boundary values, which are: 100, 101, 199 and 200. In 2-value BVA, for each boundary value there are two coverage items (the boundary value and its closest neighbor belonging to the adjacent partition). As the closest neighbors are also boundary values in the adjacent partition, then there are just four coverage items. Thus:\na) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage\nb) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage\nc) Is not correct. Only 100 and 101 are valid coverage items for 2-value BVA, so we achieve 50% coverage\nd) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage"
  },
  {
    "id": 102,
    "exam": "C",
    "num": 22,
    "lo": "FL-4.2.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table. R1 R2 R3 C1: First attempt at the exam? - - F C2: Theoretical exam passed? T F -C3: Practical exam passed? T - F Issue a driving license? X Request additional driving lessons? X Request to take the exam again? X What test data will show that there are contradictory rules in the decision table?",
    "options": [
      {
        "id": "a",
        "text": "C1 = T, C2 = T, C3 = F"
      },
      {
        "id": "b",
        "text": "C1 = T, C2 = F, C3 = T"
      },
      {
        "id": "c",
        "text": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T"
      },
      {
        "id": "d",
        "text": "C1 = F, C2 = F, C3 = F"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The combination (T, T, F) does not match any rule. This is an example of omission, not a contradiction\nb) Is not correct. The combination (T, F, T) matches only one column, R2, so there is no contradiction\nc) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction\nd) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3."
  },
  {
    "id": 103,
    "exam": "C",
    "num": 23,
    "lo": "FL-4.2.4",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are designing test cases based on the following state transition diagram: What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "6"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "The following three transitions: \"REQUESTING -> CONFIRMED\" \"WAITING LIST -> CONFIRMED\" \"WAITING LIST -> END\" cannot appear in the same test case, which suggests that at least three test cases are required. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. In fact, only three sequences are possible: TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 104,
    "exam": "C",
    "num": 24,
    "lo": "FL-4.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You want to apply branch testing to the code represented by the following control flow graph. How many coverage items do you need to test?",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "7"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph. Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct"
  },
  {
    "id": 105,
    "exam": "C",
    "num": 25,
    "lo": "FL-4.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "How can white-box testing be useful in support of black-box testing?",
    "options": [
      {
        "id": "a",
        "text": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests"
      },
      {
        "id": "b",
        "text": "White-box coverage analysis can help testers identify unreachable fragments of the source code"
      },
      {
        "id": "c",
        "text": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique"
      },
      {
        "id": "d",
        "text": "White-box test techniques can provide coverage items for black-box techniques"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code\nb) Is not correct. This statement is correct, but it has nothing to do with black-box testing\nc) Is not correct. In general there are no relationships between white-box test techniques and black-box test techniques\nd) Is not correct. White-box test techniques are used to design tests based on the test object itself, while black-box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived from these two types of test techniques"
  },
  {
    "id": 106,
    "exam": "C",
    "num": 26,
    "lo": "FL-4.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Consider the following list: • Correct input not accepted • Incorrect input accepted • Wrong output format • Division by zero What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
    "options": [
      {
        "id": "a",
        "text": "Exploratory testing"
      },
      {
        "id": "b",
        "text": "Fault attack"
      },
      {
        "id": "c",
        "text": "Checklist-based testing"
      },
      {
        "id": "d",
        "text": "Boundary value analysis"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option\nb) Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures\nc) Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist-based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack, which focuses on errors, defects and failures\nd) Is not correct. BVA is based on an analysis of boundary values of equivalence partitions. The above list does not mention equivalence partitions or their boundaries"
  },
  {
    "id": 107,
    "exam": "C",
    "num": 27,
    "lo": "FL-4.4.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
    "options": [
      {
        "id": "a",
        "text": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items"
      },
      {
        "id": "b",
        "text": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage"
      },
      {
        "id": "c",
        "text": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software"
      },
      {
        "id": "d",
        "text": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this would result in increased coverage\nb) Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does not result in increased coverage\nc) Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does not result in increased coverage\nd) Is correct. If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this will result in increased coverage"
  },
  {
    "id": 108,
    "exam": "C",
    "num": 28,
    "lo": "FL-4.5.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
    "options": [
      {
        "id": "a",
        "text": "The application must allow users to delete their account and all associated data upon request"
      },
      {
        "id": "b",
        "text": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so"
      },
      {
        "id": "c",
        "text": "IF (contain(product(23).Name, cart.products())) THEN return FALSE"
      },
      {
        "id": "d",
        "text": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rule-oriented acceptance criterion\nb) Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenario-oriented acceptance criterion\nc) Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders\nd) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule-oriented acceptance criterion, not a scenario-based acceptance criterion"
  },
  {
    "id": 109,
    "exam": "C",
    "num": 29,
    "lo": "FL-4.5.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are using acceptance test-driven development and designing test cases based on the following user story: As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors. Acceptance Criteria: AC1: Regular users have access to floors 1 to 3 AC2: Floor 4 is only accessible to Special users AC3: Special users have all the access rights of Regular users Which test case is the MOST reasonable one to test AC3?",
    "options": [
      {
        "id": "a",
        "text": "Check that a Regular user can access floors 1 and 3"
      },
      {
        "id": "b",
        "text": "Check that a Regular user cannot access floor 4"
      },
      {
        "id": "c",
        "text": "Check that a Special user can access floor 5"
      },
      {
        "id": "d",
        "text": "Check that a Special user can access floors 1, 2 and 3"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user\nb) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user\nc) Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3\nd) Is correct. This is the way we can check if a Special user can access floors which are accessible to a Regular user"
  },
  {
    "id": 110,
    "exam": "C",
    "num": 30,
    "lo": "FL-5.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is NOT a purpose of a test plan?",
    "options": [
      {
        "id": "a",
        "text": "To define test data and expected results for component tests and component integration tests"
      },
      {
        "id": "b",
        "text": "To define as exit criteria from the component test level that \"100% statement coverage and 100% branch coverage must be achieved\""
      },
      {
        "id": "c",
        "text": "To describe what fields the test progress report shall contain and what should be the form of this report"
      },
      {
        "id": "d",
        "text": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like\nb) Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criteria for the component test level\nc) Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard way of communicating or reporting\nd) Is not correct. One of the purposes of a test plan is to demonstrate that testing will adhere to the existing test policy and test strategy, or to explain why the testing will deviate from them. This is an example of explaining the deviation, regarding the test levels that will be (or will not be) followed"
  },
  {
    "id": 111,
    "exam": "C",
    "num": 31,
    "lo": "FL-5.1.4",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation: 𝐸(𝑛) = 3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2) 4 The graph shows the estimated and actual amount of work for the first four iterations. What is the estimated amount of work for iteration #5?",
    "options": [
      {
        "id": "a",
        "text": "10.5 person-days"
      },
      {
        "id": "b",
        "text": "8.25 person-days"
      },
      {
        "id": "c",
        "text": "6.5 person-days"
      },
      {
        "id": "d",
        "text": "9.4 person-days"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days. Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct"
  },
  {
    "id": 112,
    "exam": "C",
    "num": 32,
    "lo": "FL-5.1.5",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed. Which test case should be executed sixth?",
    "options": [
      {
        "id": "a",
        "text": "TC 3"
      },
      {
        "id": "b",
        "text": "TC 5"
      },
      {
        "id": "c",
        "text": "TC 6"
      },
      {
        "id": "d",
        "text": "TC 2"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority). However, in order to run TC 7, we need to first run TC 4. In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible, the first five test cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full schedule will be TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6. So, the sixth test case will be TC 3. Thus:\na) Is correct\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 113,
    "exam": "C",
    "num": 33,
    "lo": "FL-5.1.6",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What does the test pyramid model show?",
    "options": [
      {
        "id": "a",
        "text": "That tests may have different priorities"
      },
      {
        "id": "b",
        "text": "That tests may have different granularity"
      },
      {
        "id": "c",
        "text": "That tests may require different coverage criteria"
      },
      {
        "id": "d",
        "text": "That tests may depend on other tests"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The test pyramid model does not provide information about test priorities\nb) Is correct. The test pyramid model shows that different tests have different levels of granularity\nc) Is not correct. The test pyramid model is independent of coverage criteria\nd) Is not correct. Test pyramid model does not show any relations between different tests"
  },
  {
    "id": 114,
    "exam": "C",
    "num": 34,
    "lo": "FL-5.1.7",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the relationship between the testing quadrants, test levels and test types?",
    "options": [
      {
        "id": "a",
        "text": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle"
      },
      {
        "id": "b",
        "text": "Testing quadrants describe the degree of granularity of individual test types performed at each test level"
      },
      {
        "id": "c",
        "text": "Testing quadrants assign the test types that can be performed to the test levels"
      },
      {
        "id": "d",
        "text": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model\nb) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid\nc) Is not correct. The statement is wrong, because in general any test type can be performed at any test level\nd) Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants"
  },
  {
    "id": 115,
    "exam": "C",
    "num": 35,
    "lo": "FL-5.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
    "options": [
      {
        "id": "a",
        "text": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible"
      },
      {
        "id": "b",
        "text": "Risk identification allows us to implement risk mitigation activities and reduce the risk level"
      },
      {
        "id": "c",
        "text": "The assessed risk level helps us to select the rigor of testing"
      },
      {
        "id": "d",
        "text": "Risk analysis allows us to derive coverage items"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Risk monitoring is part of risk control, not risk analysis\nb) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase\nc) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing\nd) Is not correct. Coverage items are derived using test techniques, not through risk analysis"
  },
  {
    "id": 116,
    "exam": "C",
    "num": 36,
    "lo": "FL-5.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following activities in the test process makes the MOST use of test progress reports?",
    "options": [
      {
        "id": "a",
        "text": "Test design"
      },
      {
        "id": "b",
        "text": "Test completion"
      },
      {
        "id": "c",
        "text": "Test analysis"
      },
      {
        "id": "d",
        "text": "Test planning"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test design\nb) Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data\nc) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test analysis\nd) Is not correct. Test progress reports are most used during test monitoring and test control, and test completion, not during test planning"
  },
  {
    "id": 117,
    "exam": "C",
    "num": 37,
    "lo": "FL-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is NOT an example of how configuration management supports testing?",
    "options": [
      {
        "id": "a",
        "text": "All commits to the repository are uniquely identified and version controlled"
      },
      {
        "id": "b",
        "text": "All changes in the test environment elements are tracked"
      },
      {
        "id": "c",
        "text": "All requirement specifications are referenced unambiguously in test plans"
      },
      {
        "id": "d",
        "text": "All identified defects have an assigned status"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster\nb) Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue without being affected by the change\nc) Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test documentation (e.g., test plans)\nd) Is correct. This is ensured by defect management, not by the configuration management process"
  },
  {
    "id": 118,
    "exam": "C",
    "num": 38,
    "lo": "FL-5.5.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Consider the following defect report for a web-based shopping application: Application: WebShop v0.99 Defect: Login button not working Steps to Reproduce: Launch the website Click on the login button Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked. Severity: High Priority: Urgent What is the MOST important information that is missing from this defect report?",
    "options": [
      {
        "id": "a",
        "text": "Name of the tester and date"
      },
      {
        "id": "b",
        "text": "Test environment elements and their version numbers"
      },
      {
        "id": "c",
        "text": "Identification of the test object"
      },
      {
        "id": "d",
        "text": "Impact on the interests of stakeholders"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This is important, but not as important as test environment elements\nb) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly\nc) Is not correct. The test object is identified (WebShop v0.99)\nd) Is not correct. The impact is included – this is severity (high)"
  },
  {
    "id": 119,
    "exam": "C",
    "num": 39,
    "lo": "FL-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
    "options": [
      {
        "id": "a",
        "text": "Test execution and coverage tools"
      },
      {
        "id": "b",
        "text": "Test design and implementation tools"
      },
      {
        "id": "c",
        "text": "Defect management tools"
      },
      {
        "id": "d",
        "text": "Test management tools"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases. However, these tools do not help with the organization of defects and configuration management\nb) Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defects and configuration management\nc) Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management\nd) Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management"
  },
  {
    "id": 120,
    "exam": "C",
    "num": 40,
    "lo": "FL-6.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": [
      {
        "id": "a",
        "text": "The capability of generating test cases without access to the test basis"
      },
      {
        "id": "b",
        "text": "The achievement of increased coverage through more objective assessment"
      },
      {
        "id": "c",
        "text": "The increase in test execution times available with higher processing power"
      },
      {
        "id": "d",
        "text": "The prevention of human errors through greater consistency and repeatability"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. 'The capability of generating test cases without access to the test basis' is not possible. The generation of test cases by either testers or tools requires access to the test basis\nb) Is not correct. 'The achievement of increased coverage through more objective assessment' is not a direct benefit of test automation. Test automation will provide more objective assessment of coverage, however that objective assessment will not increase the coverage. Only by using the results of the coverage to write further test cases can the coverage possibly be increased\nc) Is not correct. 'The increase in test execution times available with higher processing power' is a contradictory statement as higher processing power would normally reduce execution times, and increased execution times are not a benefit as the testing would take longer\nd) Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency"
  },
  {
    "id": 121,
    "exam": "D",
    "num": 1,
    "lo": "FL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a typical test objective?",
    "options": [
      {
        "id": "a",
        "text": "Finding and fixing defects in the test object"
      },
      {
        "id": "b",
        "text": "Maintaining effective communications with developers"
      },
      {
        "id": "c",
        "text": "Validating that legal requirements have been met"
      },
      {
        "id": "d",
        "text": "Building confidence in the quality of the test object"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Finding and fixing defects in the test object is not a typical test objective as although identifying defects is an objective of testing, fixing defects is not a test activity\nb) Is not correct. Maintaining effective communications with developers is not a typical test objective although it is useful in achieving other objectives of testing, such as providing stakeholders with information that enables them to make informed decisions. It is not a primary reason for performing testing\nc) Is not correct. Validating that legal requirements have been met is not a typical test objective because validation is concerned with checking whether the system meets users' and other stakeholders' needs in its operational environment. Checking that legal requirements have been met is a form of verification\nd) Is correct. Building confidence in the quality of the test object is achieved by executing tests that passed"
  },
  {
    "id": 122,
    "exam": "D",
    "num": 2,
    "lo": "FL-1.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect. Which of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "The miscalculation of bonuses is a defect that occasionally occurs"
      },
      {
        "id": "b",
        "text": "The fine received for failing to address some disabled users is a failure"
      },
      {
        "id": "c",
        "text": "The programmer working under severe time pressure is a root cause"
      },
      {
        "id": "d",
        "text": "The design of the user interface includes a designer error"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The miscalculation of bonuses is a failure by the system, not a defect\nb) Is not correct. The system not suitably supporting disabled users is a failure which eventually results in a fine, but the fine itself is not a failure (it appears to be the correct functioning of the regulatory system)\nc) Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect\nd) Is not correct. The poor design of the user interface, which does not suitably address disabled users, is a design defect caused by the designer error. Thus the design of the user interface includes a design defect not a designer error"
  },
  {
    "id": 123,
    "exam": "D",
    "num": 3,
    "lo": "FL-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following 'principles of testing' is being addressed through the variation of test cases?",
    "options": [
      {
        "id": "a",
        "text": "Tests wear out"
      },
      {
        "id": "b",
        "text": "Absence-of-defects fallacy"
      },
      {
        "id": "c",
        "text": "Early testing saves time and money"
      },
      {
        "id": "d",
        "text": "Defects cluster together"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The 'tests wear out' principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. By using test conditions to generate new tests each time, the tests will not be identical and the risk of the tests wearing out is reduced\nb) Is not correct. The 'absence-of-defects fallacy' principle is concerned with ensuring that users' needs are fulfilled even if lots of testing is done and no defects are found (i.e., validation is also necessary). The use of test conditions to generate test cases and execute tests does not directly address this concern\nc) Is not correct. The 'early testing saves time and money' principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures. This is typically addressed by starting testing (both static and dynamic) as early as possible, but this is not addressed by using test conditions to generate test cases and execute tests\nd) Is not correct. The 'Defects cluster together' principle is concerned with the distribution of defects in a system, which typically follows a Pareto distribution. The use of test conditions to generate test cases and execute tests does not address this concern, which is typically addressed by risk-based testing"
  },
  {
    "id": 124,
    "exam": "D",
    "num": 4,
    "lo": "FL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Given the following test tasks: 1. Derive test cases from test conditions 2. Identify reusable testware 3. Organize test cases into test procedures 4. Evaluate the test basis and the test object And the following test activities: A. Test analysis B. Test design C. Test implementation D. Test completion Which of the following BEST matches the tasks with the activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "d",
        "text": "1C, 2D, 3A, 4B"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed test activities and their tasks: A. Test analysis - To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. During this test analysis, defects in the test basis are typically uncovered, and the test object's testability may also be assessed. (Task 4) B. Test design - Involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. (Task 1) C. Test implementation - Test procedures, such as manual and automated test scripts, are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. (Task 3) D. Test completion - Occurs at project milestones, such as release, end of iteration or end of test level. Testware is identified and archived or handed to the appropriate teams for reuse, the test environment is shut down, and the test activities are analyzed for lessons learned and future improvements. (Task 2) Thus:\na) Is not correct\nb) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 125,
    "exam": "D",
    "num": 5,
    "lo": "FL-1.4.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Given the following testware: i. Test completion report ii. Data held in a database used for test inputs and expected results iii. The list of elements needed to build the test environment iv. Documented sequences of test cases in execution order v. Test cases Which of the following BEST shows the testware produced as a result of performing test implementation?",
    "options": [
      {
        "id": "a",
        "text": "ii, iv"
      },
      {
        "id": "b",
        "text": "iii, v"
      },
      {
        "id": "c",
        "text": "i, ii, v"
      },
      {
        "id": "d",
        "text": "i, iii, iv"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering each of the listed testware, and the test activity that produces it: i. The test completion report is an output of test completion ii. Data held in a database used for inputs and expected results is the test data - output of test implementation iii. The list of elements needed to build the test environment is the test environment requirements - output of test design iv. Documented sequences of test cases in execution order are the test procedures - output of test implementation v. Test cases - output of test design Test implementation produces the following outputs: test procedures (iv), automated test scripts, test suites, test data (ii), test execution schedule, and test environment elements such as stubs, drivers, simulators, and service virtualizations. Thus:\na) Is correct. Items ii and iv in the list are produced as a result of test implementation\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 126,
    "exam": "D",
    "num": 6,
    "lo": "FL-1.4.5",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
    "options": [
      {
        "id": "a",
        "text": "Evaluate the test basis and the test object"
      },
      {
        "id": "b",
        "text": "Define test environment requirements"
      },
      {
        "id": "c",
        "text": "Assess testability of the test object"
      },
      {
        "id": "d",
        "text": "Create the test completion report"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Evaluating the test basis for defects and the test object for testability are tasks performed as part of test analysis, so it is likely they are tasks performed by the testing role\nb) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Defining the test environment requirements is a task performed as part of test design, so it is likely to be a task performed by the testing role\nc) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Assessing the testability of a test object is a task performed as part of test analysis, so it is likely to be a task performed by the testing role\nd) Is correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion, is likely to be a task performed by the test management role"
  },
  {
    "id": 127,
    "exam": "D",
    "num": 7,
    "lo": "FL-1.5.2",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an advantage of the whole team approach?",
    "options": [
      {
        "id": "a",
        "text": "Improved communication between team members"
      },
      {
        "id": "b",
        "text": "Decreased individual accountability for quality"
      },
      {
        "id": "c",
        "text": "Faster deployment of deliverables to the end users"
      },
      {
        "id": "d",
        "text": "Reduced collaboration with external business users"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The whole team approach promotes robust communication and collaboration between the team members\nb) Is not correct. While the whole team approach prioritizes collective accountability for quality, each individual team member is still equally accountable for quality\nc) Is not correct. The whole team approach is about how the team works together, with the aim of higher quality deliverables, but it does not necessarily result in faster deployment to end users\nd) Is not correct. When using the whole team approach, testers work with business representatives to create acceptance tests. There is no suggestion that the approach will reduce collaboration with external business users"
  },
  {
    "id": 128,
    "exam": "D",
    "num": 8,
    "lo": "FL-1.5.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Given the following benefits and drawbacks of the independence of testing: i. The testers work in a different location from the developers ii. Testers question the assumptions programmers make while writing code iii. A confrontational dynamic has been established between testers and developers iv. Developers have convinced themselves that testers are mostly accountable for quality v. Testers have different biases than those held by the developers Which are MOST likely to be considered benefits?",
    "options": [
      {
        "id": "a",
        "text": "i, iv"
      },
      {
        "id": "b",
        "text": "ii, v"
      },
      {
        "id": "c",
        "text": "i, iii, iv"
      },
      {
        "id": "d",
        "text": "ii, iii, v"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed benefits and drawbacks of the independence of testing: i. Ideally, we want close collaboration between testers and developers, which is not increased by isolation. Thus, this is a disadvantage ii. Testers and developers have varied backgrounds, technical viewpoints, and potential biases, allowing testers to usefully challenge assumptions made by stakeholders during system specification and implementation. Thus, this is an advantage iii. The main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process. Thus, this is a disadvantage iv. One of the disadvantages of independence of testing is that testers may become isolated from the development team, leading to developers feeling less accountable for quality. Thus, this is a disadvantage v. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias Thus:\na) Is not correct\nb) Is correct. The list entries showing benefits are ii and v\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 129,
    "exam": "D",
    "num": 9,
    "lo": "FL-2.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "Each test level has specific and distinct test objectives"
      },
      {
        "id": "b",
        "text": "Test implementation and execution for a given test level should start during the corresponding development phase"
      },
      {
        "id": "c",
        "text": "Testers should start test design as soon as drafts of the relevant work products become available"
      },
      {
        "id": "d",
        "text": "Every dynamic testing activity has a corresponding static testing activity"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Each test level has specific and distinct test objectives as a different form of test object (e.g., single component and complete system) is tested at each test level and overlapping test objectives would lead to unnecessary duplication\nb) Is not correct. Test analysis and test design for a given test level should start during the corresponding development phase to facilitate early testing (e.g., acceptance test analysis and test design should begin during requirements analysis). Test implementation will generally start later, and test execution will start during the test level\nc) Is not correct. Test design for a given test level should start during the corresponding development phase to facilitate early testing, however test design (e.g., test case generation) needs to be based on an agreed test basis, not an early draft, otherwise significant test effort may be wasted on creating test cases for a design that later changes\nd) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to dynamic testing and static testing. There are some static testing activities (e.g., static analysis) for which there is no obvious corresponding dynamic testing activity"
  },
  {
    "id": 130,
    "exam": "D",
    "num": 10,
    "lo": "FL-2.1.3",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Behavior-Driven Development"
      },
      {
        "id": "b",
        "text": "Test Level Driven Development"
      },
      {
        "id": "c",
        "text": "Function-Driven Development"
      },
      {
        "id": "d",
        "text": "Performance-Driven Development"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development\nb) Is not correct. Test Level Driven Development is not a correct example of a test-first approach to development\nc) Is not correct. Function-Driven Development is not a correct example of a test-first approach to development\nd) Is not correct. Performance-Driven Development is not a correct example of a test-first approach to development"
  },
  {
    "id": 131,
    "exam": "D",
    "num": 11,
    "lo": "FL-2.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
    "options": [
      {
        "id": "a",
        "text": "Making sure that non-functional quality characteristics are not overlooked"
      },
      {
        "id": "b",
        "text": "Managing continuously changing test environments"
      },
      {
        "id": "c",
        "text": "The need for more manual testers with suitable experience"
      },
      {
        "id": "d",
        "text": "Setting up the test automation as part of the delivery pipeline"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. DevOps generally increases the visibility of non-functional quality characteristics, such as performance and reliability\nb) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) used in DevOps facilitate stable test environments\nc) Is not correct. Automated processes like CI/CD used in DevOps generally reduce the need for manual testing\nd) Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation"
  },
  {
    "id": 132,
    "exam": "D",
    "num": 12,
    "lo": "FL-2.1.6",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following BEST describes retrospectives?",
    "options": [
      {
        "id": "a",
        "text": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach"
      },
      {
        "id": "b",
        "text": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future"
      },
      {
        "id": "c",
        "text": "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment"
      },
      {
        "id": "d",
        "text": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The benefits of retrospectives include team bonding and learning from sharing issues, and better collaboration between developers and testers through reviewing and improving working practices. Calling out individuals who a team member may feel did not fully contribute to achieving quality as required by the whole team approach will not contribute to this team bonding and collaboration\nb) Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so\nc) Is not correct. The benefits of retrospectives are based on increased effectiveness and efficiency through process improvements; they are not an opportunity to let off steam and criticize management and customers. Also, the test results are recorded, usually in the test completion report, so anything said in the meeting could be read by other stakeholders\nd) Is not correct. Retrospectives are meetings that are typically held at the end of an iteration where team members will focus on discussing quality-related issues that have occurred in the current iteration. They are not used for making plans or technical decisions for the next iteration; this would be done in the iteration planning meeting at the start of the next iteration"
  },
  {
    "id": 133,
    "exam": "D",
    "num": 13,
    "lo": "FL-2.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following tests is MOST likely to be performed as part of functional testing?",
    "options": [
      {
        "id": "a",
        "text": "The test checks that the sort function puts the elements of the list or array in ascending order"
      },
      {
        "id": "b",
        "text": "The test checks whether the sort function completes sorting within one second of starting"
      },
      {
        "id": "c",
        "text": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending"
      },
      {
        "id": "d",
        "text": "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, which is part of functional testing\nb) Is not correct. Assessing whether the sort function meets its non-functional requirement to complete within one second is part of testing its performance efficiency, which is part of non-functional testing\nc) Is not correct. Evaluating the ease with which the sort function can be modified from sorting ascending to sorting descending is testing its modifiability, a form of non-functional maintainability testing, which is part of non-functional testing\nd) Is not correct. Assessing that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture is testing its adaptability, a form of portability testing, which is part of non-functional testing"
  },
  {
    "id": 134,
    "exam": "D",
    "num": 14,
    "lo": "FL-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
    "options": [
      {
        "id": "a",
        "text": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true"
      },
      {
        "id": "b",
        "text": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers"
      },
      {
        "id": "c",
        "text": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system"
      },
      {
        "id": "d",
        "text": "The language support option of the currency exchange system was used to enable both English and local language currency transactions"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Assuming that testers could check the ease of changing the currency exchange system then it would be done by maintainability testing rather than maintenance testing, so this is not a trigger for maintenance testing\nb) Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option of the currency exchange system was a fix that would lead to maintenance testing\nc) Is not correct. If the agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system, then this will result in them testing the new feature, and then they would perform regression testing. No maintenance testing is required in this situation\nd) Is not correct. Reconfiguration of the currency exchange system to support both the local language and English currency transactions is not a system modification, a change to the operational environment, or a system retirement, which are the three triggers for maintenance testing"
  },
  {
    "id": 135,
    "exam": "D",
    "num": 15,
    "lo": "FL-3.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following CANNOT be examined by static testing?",
    "options": [
      {
        "id": "a",
        "text": "Contract"
      },
      {
        "id": "b",
        "text": "Test plan"
      },
      {
        "id": "c",
        "text": "Encrypted code"
      },
      {
        "id": "d",
        "text": "Test charter"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Most work products can be examined using some form of static testing, and a contract must be interpretable by humans and so could be reviewed, which is a form of static testing\nb) Is not correct. Most work products can be examined using some form of static testing, and a test plan must be interpretable by humans and so could be reviewed, which is a form of static testing\nc) Is correct. Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for humans and if it is properly encrypted it will not be analyzable by most tools\nd) Is not correct. Most work products can be examined using some form of static testing, and a test charter must be interpretable by humans and so could be reviewed, which is a form of static testing"
  },
  {
    "id": 136,
    "exam": "D",
    "num": 16,
    "lo": "FL-3.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following statements about the value of static testing is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "The defect types found by static testing are different from the defect types that can be found by dynamic testing"
      },
      {
        "id": "b",
        "text": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types"
      },
      {
        "id": "c",
        "text": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them"
      },
      {
        "id": "d",
        "text": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Some defect types that can only be detected by static testing, such as unreachable code, design patterns not implemented as desired and defects in non-executable work products. Some defect types that can be found by both static testing and dynamic testing, such as a programming defect that can be observed by a reviewer in a code review and which causes an observable failure during dynamic testing. And some defect types that can only be detected by dynamic testing, such as performance issues or memory issues that can only be observed when executing the code or system. Thus:\na) Is not correct\nb) Is not correct\nc) Is correct\nd) Is not correct"
  },
  {
    "id": 137,
    "exam": "D",
    "num": 17,
    "lo": "FL-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Given the following descriptions of review activities: 1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed 2. Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product 3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies 4. The objective of the review and its schedule are established to ensure a focused and efficient review 5. Participants are provided with access to the item being reviewed Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?",
    "options": [
      {
        "id": "a",
        "text": "4 – 3 – 5 – 2 – 1"
      },
      {
        "id": "b",
        "text": "4 – 5 – 3 – 1 – 2"
      },
      {
        "id": "c",
        "text": "5 – 4 – 1 – 3 – 2"
      },
      {
        "id": "d",
        "text": "5 – 4 – 3 – 2 – 1"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The five listed descriptions and the corresponding review process activities are: 1. This describes part of the 'communication and analysis' activity 2. This describes part of the 'fixing and reporting' activity 3. This describes part of the 'individual review' activity 4. This describes part of the 'planning' activity 5. This describes part of the 'review initiation' activity The generic review process from ISO/IEC 20246, which is outlined in the syllabus, comprises the following activities in this logical order: • Planning (4) • Review initiation (5) • Individual review (3) • Communication and analysis (1) • Fixing and reporting (2) Thus:\na) Is not correct\nb) Is correct. The correct sequence of activities is: 4 – 5 – 3 – 1 – 2\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 138,
    "exam": "D",
    "num": 18,
    "lo": "FL-3.2.3",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?",
    "options": [
      {
        "id": "a",
        "text": "Manager"
      },
      {
        "id": "b",
        "text": "Moderator"
      },
      {
        "id": "c",
        "text": "Chairperson"
      },
      {
        "id": "d",
        "text": "Review Leader"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The manager is responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review\nb) Is correct. The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely\nc) Is not correct. The chairperson is not a recognized role in reviews\nd) Is not correct. The review leader is responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully"
  },
  {
    "id": 139,
    "exam": "D",
    "num": 19,
    "lo": "FL-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You perform system testing of an e-commerce web application and are provided with the following requirement: REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount. Which test techniques will be MOST helpful in designing test cases based on this requirement?",
    "options": [
      {
        "id": "a",
        "text": "White-box test techniques"
      },
      {
        "id": "b",
        "text": "Black-box test techniques"
      },
      {
        "id": "c",
        "text": "Experience-based test techniques"
      },
      {
        "id": "d",
        "text": "Risk-based test techniques"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The document does not refer to the test object's internal structure but specifies the desired behavior of the test object. Therefore, white-box test techniques will not be helpful in designing test cases\nb) Is correct. The document is a requirement that specifies the desired behavior of the test object. Therefore, the most suitable test techniques in this case are the black-box test techniques (e.g., Boundary Value Analysis or Decision Table Testing)\nc) Is not correct. Although experience-based test techniques can be used to design test cases based on this document, black-box test techniques will be more suitable. The document describes a precise business rule and, in addition, wording like \"exceeds $100\" suggests the existence of important equivalence partition boundaries that should be tested using black-box test techniques like Boundary Value Analysis\nd) Is not correct. Risk-based test techniques are not a recognized type of test technique"
  },
  {
    "id": 140,
    "exam": "D",
    "num": 20,
    "lo": "FL-4.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": true,
    "text": "The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows: Let D be the difference between CY and BY, that is, D = CY – BY • If D < 0 then print the error message \"birth year cannot be greater than current year\" • If 0 ≤ D < 18 then apply the student discount • If 18 ≤ D < 65 then apply no discount • If D ≥ 65 then apply the pensioner discount Your test suite already contains two test cases: • BY = 1990, CY = 2020, expected result: no discount • BY = 2030, CY = 2029, expected result: print the error message Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?",
    "options": [
      {
        "id": "a",
        "text": "BY = 2001, CY = 2065"
      },
      {
        "id": "b",
        "text": "BY = 1900, CY = 1965"
      },
      {
        "id": "c",
        "text": "BY = 1965, CY = 1900"
      },
      {
        "id": "d",
        "text": "BY = 2011, CY = 2029"
      },
      {
        "id": "e",
        "text": "BY = 2000, CY = 2000"
      }
    ],
    "correct": [
      "b",
      "e"
    ],
    "explanation": "There are two equivalence partitions that are not yet covered, which correspond to \"student discount\" and \"pensioner discount\".\na) Is not correct. CY – BY = 64, so these inputs correspond to the already covered \"no discount\" partition\nb) Is correct. CY – BY = 65, so these inputs correspond to a partition that is not yet covered (\"pensioner discount\")\nc) Is not correct. CY – BY = –65, so these inputs correspond to the already covered \"error message\" partition\nd) Is not correct. CY – BY = 18, so these inputs correspond to the already covered \"no discount\" partition\ne) Is correct. CY – BY = 0, so these inputs correspond to a partition that is not yet covered (\"student discount\")"
  },
  {
    "id": 141,
    "exam": "D",
    "num": 21,
    "lo": "FL-4.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message \"temperature OK\". For lower temperatures, the system displays the message \"temperature too low\" and for higher temperatures it displays the message \"temperature too high\". Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?",
    "options": [
      {
        "id": "a",
        "text": "–1, 3"
      },
      {
        "id": "b",
        "text": "0, 2"
      },
      {
        "id": "c",
        "text": "–1, 0, 2, 3"
      },
      {
        "id": "d",
        "text": "–2, 0, 2, 4"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "There are three equivalence partitions: {…, –2, –1}, {0, 1, 2}, {3, 4, …}. For 2-value BVA all the boundary values for all the equivalence partitions must be covered. The boundary values are –1 (for the \"temperature too low\" partition), 0, 2 (for the \"temperature OK\" partition) and 3 (for the \"temperature too high\" partition). Thus:\na) Is not correct\nb) Is not correct\nc) Is correct. The correct option is: –1, 0, 2, 3\nd) Is not correct"
  },
  {
    "id": 142,
    "exam": "D",
    "num": 22,
    "lo": "FL-4.2.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are designing test cases based on the following decision table. R1 R2 R3 R4 R5 R6 R7 C1: Age 0-18 19-65 19-65 >65 0-18 19-65 >65 C2: Experience - 0-4 >4 - - - -C3: Registered? NO NO NO NO YES YES YES Category A A B B B D C So far you have designed the following test cases: • TC1: 19-year-old, unregistered man with no experience; expected result: category A • TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B • TC3: 66-year-old, registered man with no experience; expected result: category C • TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
    "options": [
      {
        "id": "a",
        "text": "66-year-old, unregistered man with no experience; expected result: category B"
      },
      {
        "id": "b",
        "text": "55-year-old, unregistered woman with 2 years of experience; expected result: category A"
      },
      {
        "id": "c",
        "text": "19-year-old, registered woman with 5 years of experience; expected result: category D"
      },
      {
        "id": "d",
        "text": "No additional test case can increase the already achieved decision table coverage"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7 and R6 in the decision table.\na) Is correct. The conditions \"66-year-old\", \"unregistered\" and \"no experience\" match rule R4, which is not covered by the existing test cases, so after adding this test case, the decision table coverage will increase\nb) Is not correct. The conditions \"55-year-old\", \"unregistered\" and \"2 years of experience\" match rule R2, already covered by TC1. So adding this test case will not increase the coverage\nc) Is not correct. The conditions \"19-year-old\", \"registered\" and \"5 years of experience\" match rule R6, already covered by TC4. So adding this test case will not increase the coverage\nd) Is not correct. The existing test cases cover only 4 out of 7 columns of the decision table. The coverage can be increased by adding test cases that cover yet uncovered columns, that is, R1, R4 and R5"
  },
  {
    "id": 143,
    "exam": "D",
    "num": 23,
    "lo": "FL-4.2.4",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events: Events State Available NotAvailable ChangeRoom Cancel Pay S1: Requesting S2 S3 S2: Confirmed S1 S4 S4 S3: Waiting list S2 S4 S4: End Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel"
      },
      {
        "id": "b",
        "text": "Available, ChangeRoom, NotAvailable, Available, Pay"
      },
      {
        "id": "c",
        "text": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable"
      },
      {
        "id": "d",
        "text": "NotAvailable, Cancel, ChangeRoom, Available, Pay"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This sequence of five events covers 4 different valid transitions (both \"NotAvailable\" events correspond to the same transition between S1 and S3). This test case covers 4 out of 7 valid transitions\nb) Is correct. This sequence of five events covers 5 different transitions (the first \"Available\" event corresponds to a transition between S1 and S2, and the second \"Available\" event corresponds to a transition between S3 and S2, so two different transitions are covered). This test case covers 5 out of 7 valid transitions and achieves the highest valid transitions coverage\nc) Is not correct. This sequence of five events covers 3 different transitions (both \"Available\" events correspond to the same transition from S1 to S2; both \"ChangeRoom\" events correspond to the same transition from S2 to S1). This test case covers 3 out of 7 valid transitions\nd) Is not correct. This sequence of five events does not represent a feasible test case, because after \"Cancel\" the system ends up in the End state and no further valid transitions can be executed"
  },
  {
    "id": 144,
    "exam": "D",
    "num": 24,
    "lo": "FL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Executing S will cause all possible failures in P"
      },
      {
        "id": "b",
        "text": "S achieves 100% branch coverage for P"
      },
      {
        "id": "c",
        "text": "Every executable statement in P containing a defect has been run at least once during the execution of S"
      },
      {
        "id": "d",
        "text": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. A statement with a defect, when executed, does not have to cause a failure. For example, a statement x := y / z will cause a failure only when z equals 0\nb) Is not correct. 100% statement coverage does not guarantee 100% branch coverage. For example, a test case with x=0 for the code 1. IF (x=0) THEN 2. A; 3. ENDIF achieves 100% statement coverage but does not cover the branch from 1 to 3\nc) Is correct. 100% statement coverage means that each executable statement was executed at least once\nd) Is not correct. The removed test case may provide coverage of some statements that are not covered by either of the other two test cases, in which case the remaining two test cases together will not achieve 100% statement coverage"
  },
  {
    "id": 145,
    "exam": "D",
    "num": 25,
    "lo": "FL-4.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are designed based on the structure of the test object rather than the specification"
      },
      {
        "id": "b",
        "text": "For each white-box test technique the coverage can be well-defined and easily measured"
      },
      {
        "id": "c",
        "text": "White-box test techniques are very well designed to detect omissions in the requirements"
      },
      {
        "id": "d",
        "text": "White-box test techniques can be used in both static testing and dynamic testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. A fundamental strength that all white-box test techniques share is that the entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incomplete. This means white-box testing can find defects such as an extra feature added to the code (either accidentally or deliberately) that is not supposed to be there, which black-box testing cannot detect\nb) Is not correct. The fact that the coverage can be precisely defined is not the right reason. The achieved level of coverage would have much more impact than the possibility to measure the coverage\nc) Is not correct. If the software does not implement one or more requirements, white-box testing is unlikely to detect the resulting defects of omission\nd) Is not correct. While this is true, this is not the right answer, because there is no connection between the capability to be used in both static testing and dynamic testing and the claim that white-box testing facilitates defect detection with poor specifications"
  },
  {
    "id": 146,
    "exam": "D",
    "num": 26,
    "lo": "FL-4.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is NOT anticipated by the tester while applying error guessing?",
    "options": [
      {
        "id": "a",
        "text": "The developer misunderstood the formula in the user story for calculating the interest"
      },
      {
        "id": "b",
        "text": "The developer wrote \"FA = A*(1+IR^N)\" instead of \"FA = A*(1+IR)^N\" in the source code"
      },
      {
        "id": "c",
        "text": "The developer missed the seminar on new compound interest rate legislation"
      },
      {
        "id": "d",
        "text": "The accuracy of the interest calculated by the system is not precise enough"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Error guessing is about anticipating the errors, defects and failures based on the tester's knowledge.\na) Is not correct. This is an example of anticipating the developer's error\nb) Is not correct. This is an example of anticipating the defect\nc) Is correct. This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficult for the tester to anticipate\nd) Is not correct. This is an example of anticipating a failure, perhaps based on experience of previous systems in this application domain"
  },
  {
    "id": 147,
    "exam": "D",
    "num": 27,
    "lo": "FL-4.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is true about exploratory testing?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are designed before the exploratory testing session starts"
      },
      {
        "id": "b",
        "text": "The tester can perform test execution, but cannot perform test design"
      },
      {
        "id": "c",
        "text": "Exploratory testing results are good predictors of the number of remaining defects"
      },
      {
        "id": "d",
        "text": "During exploratory testing the tester may use black-box test techniques"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. In exploratory testing, test cases are usually created during the exploratory testing session, alongside test analysis, test implementation and test execution\nb) Is not correct. In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object\nc) Is not correct. Exploratory test results depend heavily on the tester's experience. So, even if the test results of exploratory testing can be used as a predictor of risk and used to assess whether there will be fewer or more defects, compared to the previous exploratory testing session, they are not a good example of reliable defect prediction models that can predict the number of remaining defects\nd) Is correct. During exploratory testing, the testers can use any test techniques that they find useful"
  },
  {
    "id": 148,
    "exam": "D",
    "num": 28,
    "lo": "FL-4.5.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?",
    "options": [
      {
        "id": "a",
        "text": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story"
      },
      {
        "id": "b",
        "text": "Reviews, so that a team can detect inconsistencies and contradictions in a user story"
      },
      {
        "id": "c",
        "text": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation"
      },
      {
        "id": "d",
        "text": "Conversation, so that team members can understand how the software will be used"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Planning poker can estimate effort for a user story that is already written. It does not help in understanding what should be delivered\nb) Is not correct. Reviews are not a collaborative user story writing practice\nc) Is not correct. Iteration planning is a project-related practice, used to plan the work, not to understand what needs to be delivered\nd) Is correct. Conversation explains how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vision of what should be delivered"
  },
  {
    "id": 149,
    "exam": "D",
    "num": 29,
    "lo": "FL-4.5.3",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You have just started designing test cases for the following user story. As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily. Acceptance criteria: 1. The filter should work for all versions of the application from version 3.0 upwards 2. The filter should allow the customer to set a price range with a minimum and a maximum price 3. The search results should update dynamically as the customer adjusts the price range filter In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110. Which of the following is the BEST example of a test case for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B"
      },
      {
        "id": "b",
        "text": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client's webpage. Expected result: the default maximum price changes to $120"
      },
      {
        "id": "c",
        "text": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate"
      },
      {
        "id": "d",
        "text": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This test case is related to acceptance criteria 2 and 3, because we check if we can set price range (acceptance criterion 2) and if the results update dynamically after adjusting the price range filter (acceptance criterion 3)\nb) Is not correct. This test case is not related to any of the acceptance criteria. It checks if the filter dynamically sets the default minimum and maximum price range, and not that a customer can do it\nc) Is not correct. This test case is not related to any of the acceptance criteria. It checks the currency exchange feature, which is not discussed in this user story\nd) Is not correct. This test case is not related to any of the acceptance criteria. It checks the application's compatibility with different browsers, which is not discussed in this user story"
  },
  {
    "id": 150,
    "exam": "D",
    "num": 30,
    "lo": "FL-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": true,
    "text": "Which of the following BEST define EXIT criteria in a testing project?",
    "options": [
      {
        "id": "a",
        "text": "Budget is approved"
      },
      {
        "id": "b",
        "text": "Budget runs out"
      },
      {
        "id": "c",
        "text": "Test basis is available"
      },
      {
        "id": "d",
        "text": "Test cases achieved at least 80% statement coverage"
      },
      {
        "id": "e",
        "text": "All test analysts are ISTQB certified at the Foundation Level"
      }
    ],
    "correct": [
      "b",
      "d"
    ],
    "explanation": "a) Is not correct. The approval of the budget is an example of an entry criterion. It would make no sense to approve the budget for some activity that has already been done\nb) Is correct. Running out of budget can be viewed as a valid exit criterion\nc) Is not correct. Availability of resources is an example of an entry criterion for testing\nd) Correct. Coverage is a measure of thoroughness, so it is a typical exit criterion\ne) Is not correct. This is an example of an entry criterion, checked before the project starts"
  },
  {
    "id": 151,
    "exam": "D",
    "num": 31,
    "lo": "FL-5.1.4",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case: • Best-case scenario: 1 hour • Worst-case scenario: 8 hours • Most likely scenario: 3 hours Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?",
    "options": [
      {
        "id": "a",
        "text": "14 hours"
      },
      {
        "id": "b",
        "text": "3.5 hours"
      },
      {
        "id": "c",
        "text": "16 hours"
      },
      {
        "id": "d",
        "text": "12 hours"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Using the three-point estimation technique, the final estimate (E) is calculated as: E = (a + 4*m +\nb) / 6, where a is the most optimistic estimate, m is the most likely estimate, and b is the most pessimistic estimate. Thus:\na) Is correct. In this case, the estimate for executing a single test case is: E = (1h + 4*3h + 8h) / 6 = 3.5 hours So, the total time needed for the tester to execute 4 test cases is: 3.5h * 4 = 14 hours\nb) Is not correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 152,
    "exam": "D",
    "num": 32,
    "lo": "FL-5.1.5",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "The table shows the traceability matrix from test cases to requirements. \"X\" means that a given test case covers the corresponding requirement. Req1 Req2 Req3 Req4 Req5 Req6 Req7 TC1 X X X X TC2 X X X TC3 X X TC4 X You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one?",
    "options": [
      {
        "id": "a",
        "text": "TC1"
      },
      {
        "id": "b",
        "text": "TC2"
      },
      {
        "id": "c",
        "text": "TC3"
      },
      {
        "id": "d",
        "text": "TC4"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so should be executed first. Req2, Req5 and Req6 are still not covered. The next test case that achieves the highest additional coverage of the remaining requirements is TC3, covering 2 out of these 3 requirements (Req5 and Req6). So, TC3 should be executed as the second one. Now the only requirement still not covered is Req2, which is covered by TC4. Therefore, TC4 should be executed as the third test case. So, the last test case executed will be TC2. Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 153,
    "exam": "D",
    "num": 33,
    "lo": "FL-5.1.7",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How can the testing quadrants be beneficial for testing?",
    "options": [
      {
        "id": "a",
        "text": "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing"
      },
      {
        "id": "b",
        "text": "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)"
      },
      {
        "id": "c",
        "text": "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others"
      },
      {
        "id": "d",
        "text": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Testing quadrants have nothing to do with describing the relationships between test levels\nb) Is not correct. Testing quadrants cannot help in assessing any type of coverage\nc) Is correct. Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on (business- or technology-facing)\nd) Is not correct. Testing quadrants is not a psychological model"
  },
  {
    "id": 154,
    "exam": "D",
    "num": 34,
    "lo": "FL-5.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact?",
    "options": [
      {
        "id": "a",
        "text": "$500"
      },
      {
        "id": "b",
        "text": "$2,000"
      },
      {
        "id": "c",
        "text": "$50,000"
      },
      {
        "id": "d",
        "text": "$200"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Risk assessment can use a quantitative or qualitative approach, or a mix of them. In the quantitative approach the risk level is calculated as the multiplication of risk likelihood and risk impact. So, Risk level = Risk likelihood * Risk impact Then, Risk impact = Risk level / Risk likelihood. In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000. Thus:\na) Is not correct\nb) Is correct\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 155,
    "exam": "D",
    "num": 35,
    "lo": "FL-5.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": true,
    "text": "Which of the following are product risks?",
    "options": [
      {
        "id": "a",
        "text": "Scope creep"
      },
      {
        "id": "b",
        "text": "Poor architecture"
      },
      {
        "id": "c",
        "text": "Cost-cutting"
      },
      {
        "id": "d",
        "text": "Poor tool support"
      },
      {
        "id": "e",
        "text": "Too long response time"
      }
    ],
    "correct": [
      "b",
      "e"
    ],
    "explanation": "a) Is not correct. Scope creep is an example of a project risk related to technical issues\nb) Is correct. Poor architecture is an example of a product risk since it refers to a product characteristic\nc) Is not correct. Cost-cutting is an example of a project risk, related to organizational issues\nd) Is not correct. Poor tool support is an example of a project risk related to technical issues\ne) Is correct. Response time that is too long is an example of a product risk since it refers to a product characteristic"
  },
  {
    "id": 156,
    "exam": "D",
    "num": 36,
    "lo": "FL-5.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is NOT a valid purpose for a test report?",
    "options": [
      {
        "id": "a",
        "text": "Tracking test progress and identifying areas that require further attention"
      },
      {
        "id": "b",
        "text": "Providing information on the tests executed, their results, and defects found"
      },
      {
        "id": "c",
        "text": "Providing information about each defect, such as the steps to reproduce it"
      },
      {
        "id": "d",
        "text": "Providing information on testing planned for the next period"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Tracking test progress and identifying areas that require further attention is an example of supporting the ongoing control of testing. This is one of the purposes of test reports\nb) Is not correct. Providing information on the tests executed, their test results, and any defects found is an example of summarizing the test activities performed at a given test level. This is one of the purposes of test reports\nc) Is correct. Providing information about defects is the purpose of a defect report, not a test report\nd) Is not correct. Providing information on testing planned for the next period is one of the purposes of test reports"
  },
  {
    "id": 157,
    "exam": "D",
    "num": 37,
    "lo": "FL-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it. Which of the following enabled the above activity to be performed by the team?",
    "options": [
      {
        "id": "a",
        "text": "Risk management"
      },
      {
        "id": "b",
        "text": "Test monitoring and control"
      },
      {
        "id": "c",
        "text": "Whole team approach"
      },
      {
        "id": "d",
        "text": "Configuration management"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Risk management consists of risk analysis and risk control. Neither of these activities supports the reassembly of the files that made up the release, because these activities deal with risks, not with configuration items\nb) Is not correct. Test monitoring is concerned with gathering information about testing. This information is used to assess test progress and to measure whether the exit criteria or the test tasks associated with the exit criteria are satisfied, such as meeting the targets for coverage of product risks, requirements, or other acceptance criteria. Test control uses the information from test monitoring to provide, in the form of control directives, guidance and the necessary corrective actions to achieve the most effective and efficient testing. None of these activities deal with the management of configuration items\nc) Is not correct. The whole team approach builds on the tester's skill to work effectively in a team context and to contribute positively to the team goals. So, it focuses on team-related issues, not on configuration items\nd) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results"
  },
  {
    "id": 158,
    "exam": "D",
    "num": 38,
    "lo": "FL-5.5.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Consider the following defect report for a Book Lending System. Defect ID: 001 | Title: Unable to Return a Book | Severity: High | Priority: | Environment: Windows 10, Google Chrome Description: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user. Steps to Reproduce: Login to the Book Lending System as a user who has checked out a book. Click on the \"Book Return\" button for the book that has been checked out. System does not register the return and the book remains checked out. Expected Result: The book should be returned and no longer appear as checked out to the user. Actual Result: The book remains checked out to the user and is not registered as returned in the system. Attachments: [empty list] Which of the following is MOST likely to help the developer reproduce the failure quickly?",
    "options": [
      {
        "id": "a",
        "text": "Adding information about which users and which books the failure affects to the \"Description\" section"
      },
      {
        "id": "b",
        "text": "Filling in the missing value for the \"Priority\" field"
      },
      {
        "id": "c",
        "text": "Adding memory dumps and database snapshots taken after each step described in the \"Steps to Reproduce\" section to the \"Attachments\" section."
      },
      {
        "id": "d",
        "text": "Repeating the same test case for different environments and writing defect reports for each of them separately"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster\nb) Is not correct. Adding the value of Priority will not help in reproducing the defect itself\nc) Is not correct. Although some of this information may be of value, adding the memory dumps and database snapshots after each step will be too much, because most of these artefacts will contain useless information for the developer, and make the defect report less readable. It will also require the developer to spend a lot of time analyzing this information, which will lengthen the repair process\nd) Is not correct. The question was about helping the developer to reproduce the failure for a specific environment configuration"
  },
  {
    "id": 159,
    "exam": "D",
    "num": 39,
    "lo": "FL-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Given the following test tool categories: i. Collaboration tools ii. DevOps tools iii. Management tools iv. Non-functional testing tools v. Test design and implementation tools Tools from which of the categories are MOST likely to facilitate test execution?",
    "options": [
      {
        "id": "a",
        "text": "i, v"
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
        "text": "ii, iii, iv"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed tool categories: i. Collaboration tools – facilitate communication. Communication does not include the facilitation of test execution ii. DevOps tools - support the DevOps delivery pipeline, workflow tracking, automated build process(es) and CI/CD. The delivery pipeline and CI/CD both include the facilitation of test execution, such as component testing for CI iii. Management tools – increase the test process efficiency by facilitating management of the SDLC, requirements, tests, defects and configuration. The management of these items does not include the facilitation of test execution iv. Non-functional testing tools – allow the tester to perform non-functional testing that is difficult or impossible to perform manually. Non-functional testing can include both static testing and dynamic testing, including test execution v. Test design and implementation tools – facilitate generation of test cases, test data and test procedures. The generation of this testware does not include the facilitation of test execution Thus:\na) Is not correct\nb) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution\nc) Is not correct\nd) Is not correct"
  },
  {
    "id": 160,
    "exam": "D",
    "num": 40,
    "lo": "FL-6.2.1",
    "level": "K1",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which of the following is MOST likely to be a risk of test automation?",
    "options": [
      {
        "id": "a",
        "text": "The detection of additional high-severity defects"
      },
      {
        "id": "b",
        "text": "Providing measures that are too complicated for humans to derive"
      },
      {
        "id": "c",
        "text": "Incompatibility with the development platform"
      },
      {
        "id": "d",
        "text": "Substantially reduced test execution times"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The detection of additional high-severity defects would be a benefit of test automation, rather than a risk\nb) Is not correct. The provision of measures that are too complicated for humans to derive themselves is normally considered to be a benefit of test automation\nc) Is correct. If the test automation is incompatible with the development platform, then it will not be able to integrate them, and, for instance, pass test inputs to the test object and receive test results from the test object\nd) Is not correct. Substantially reduced test execution times would normally be considered a benefit that is provided by test automation"
  }
];
