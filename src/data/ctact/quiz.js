// CT-AcT (Acceptance Testing Specialist, syllabus v1.0 2019) — ISTQB Sample Exam set A v1.3 (2023-10-26),
// parsed from the PDFs in trainings/: 40 questions, 40 points. Correct answers, LOs, K-levels and per-option
// rationales come from the Sample-Exam-Answers PDF; answer-key table and per-question answers cross-checked on import.
// Q17's four option tables and the BPMN diagrams in Q18–Q20 are images/tables in the PDF; they are rendered here as
// text descriptions ("[Diagram described in text]") transcribed from the PDF pages.
// Duration and pass mark are not stated in the documents: 60 min and 65% (26/40) are the standard ISTQB
// specialist exam format.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "AcT-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following statements describes the relation between business goals, business needs and requirements BEST?",
    "options": [
      {
        "id": "a",
        "text": "Business goals and business needs are synonyms"
      },
      {
        "id": "b",
        "text": "Business goals, business needs and requirements describe at different levels of abstraction, what shall be achieved"
      },
      {
        "id": "c",
        "text": "Business needs address the business solution whereas business requirements define the business problem or opportunity"
      },
      {
        "id": "d",
        "text": "To derive the business needs, the business analyst first has to understand the business goals and requirements"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Business goals and needs have different levels of abstraction\n\nCORRECT (b): As stated in [AcT Syllabus], business goals, business needs, business requirements, and product requirements describe, at different levels of abstraction, what shall be achieved\n\nWRONG (c): Business needs define the business problem or opportunity, which business analysts have to understand in order to recommend appropriate solutions through business requirements\n\nWRONG (d): Business requirements are derived from business needs"
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "AcT-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following statements regarding acceptance criteria is true?",
    "options": [
      {
        "id": "a",
        "text": "Acceptance criteria are specific to agile frameworks where they correspond to functional requirements"
      },
      {
        "id": "b",
        "text": "Testers should not be involved in writing acceptance criteria to make sure that the test is independent"
      },
      {
        "id": "c",
        "text": "In acceptance test-driven development (ATDD), acceptance criteria replace acceptance tests"
      },
      {
        "id": "d",
        "text": "Acceptance criteria specify what shall be tested to verify that a requirement or user story has been implemented correctly"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Acceptance criteria are not limited to agile development\n\nWRONG (b): Independent testers should be involved to ensure early verification of the criteria\n\nWRONG (c): In acceptance test-driven development (ATDD), acceptance tests are written at the same time as acceptance criteria are defined but do not replace them\n\nCORRECT (d): Acceptance criteria represent the test conditions which determine “what” to test"
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "AcT-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following statements regarding the quality of requirements is MOST correct?",
    "options": [
      {
        "id": "a",
        "text": "Vague or ambiguous requirements may lead to misunderstandings both during implementation and testing"
      },
      {
        "id": "b",
        "text": "In Agile development lifecycle models, requirement engineering becomes less important due to the product owner role"
      },
      {
        "id": "c",
        "text": "INVEST is a technique that ensure the quality of user stories or requirements, thus replacing regular reviews"
      },
      {
        "id": "d",
        "text": "Testers may complete unclear requirements by assumptions, as long as they discuss those assumptions with at least one stakeholder"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Unclear requirements may lead to incorrect acceptance criteria, and the resulting tests will be flawed. This will lead to rework or, even worse, the running of invalid tests, thus creating unnecessary costs\n\nWRONG (b): In Agile, requirements engineering still needs to be performed and proper skills are required from both the product owner and the team members\n\nWRONG (c): INVEST is not replacing reviews, it defines quality characteristics for user stories, that may be used by business analysts / product owners and testers to ensure the quality of user stories\n\nWRONG (d): Requirements should be agreed between all key stakeholders, including the team and business stakeholders. Tester do not decide on requirements. Instead, testers should work closely with business analysts to make sure that requirements are clear and well understood by all stakeholders concerned"
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "AcT-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "How does ISTQB CTFL test activities relate to the IQBBA FL business analysis and requirements engineering activities?",
    "options": [
      {
        "id": "a",
        "text": "Business analysts who follow the IQBBA requirements engineering process will not be involved in designing test cases"
      },
      {
        "id": "b",
        "text": "Business analysts and tester have to decide, whether they follow the IQBBA or ISTQB lifecycle processes, because they exclude each other"
      },
      {
        "id": "c",
        "text": "The IQBBA solution evaluation phase precedes the ISTQB test implementation and test execution activities"
      },
      {
        "id": "d",
        "text": "Test analysis and test design activities may result in changes of acceptance criteria"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): IQBBA process assumes business analyst involvement in testing – reviewing test cases, providing input information etc.\n\nWRONG (b): IQBBA and ISTQB processes are not in conflict, in fact many activities defined in these processes are related and together support similar goals\n\nWRONG (c): IQBBA solution evaluation and ISTQB test implementation, test execution may be done in parallel\n\nCORRECT (d): As stated in [AcT Syllabus], testers can contribute to the definition and verification of acceptance criteria as part of test analysis and test design activities"
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "AcT-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following statements describes the collaboration between business analysts and testers BEST?",
    "options": [
      {
        "id": "a",
        "text": "Business analysts collaborate on test planning and risk analysis to ensure that further on, appropriate test cases are developed and prioritized"
      },
      {
        "id": "b",
        "text": "Business analysts usually cannot review acceptance tests, because they do not understand the technical details"
      },
      {
        "id": "c",
        "text": "Testers participate in identifying business needs of stakeholders to better understand the business needs and related requirements"
      },
      {
        "id": "d",
        "text": "Once the requirements and acceptance criteria have been defined, business analysts are no longer involved in testing activities"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Collaboration on test planning based on risk analysis is a good opportunity to ensure that the appropriate test cases will be developed and prioritized\n\nWRONG (b): Acceptance tests do not include technical details instead they focus on checking business acceptance criteria and can and should be therefore reviewed by business analysts\n\nWRONG (c): This is the role of a business analyst. Testers can support requirements review to ensure acceptance criteria are clear and measurable\n\nWRONG (d): Business analysts should be involved in other test activities, including testing preparation, execution and reporting too"
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "AcT-1.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which one of the following statements regarding ATDD / BDD is true?",
    "options": [
      {
        "id": "a",
        "text": "Behavior-Driven Development (BDD) considers acceptance test design as an activity to be handled by the test team after requirements have been finalized"
      },
      {
        "id": "b",
        "text": "In both Acceptance-Test Driven Development (ATDD) and Behavior-Driven Development (BDD), test cases provide examples of product use"
      },
      {
        "id": "c",
        "text": "In Acceptance-Test Driven Development (ATDD), test cases are written prior to the acceptance criteria"
      },
      {
        "id": "d",
        "text": "In both Acceptance-Test Driven Development (ATDD) and Behavior-Driven Development (BDD), acceptance test cases are written by a test automation engineer as test automation code"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): BDD involves creation of acceptance tests at early stage. In this approach acceptance criteria and acceptance test cases should be created before requirements finalization to have a greater impact on the overall development of the solution\n\nCORRECT (b): As stated in [AcT Syllabus], acceptance test cases represent scenarios of usage of the product\n\nWRONG (c): Acceptance criteria define \"what\" (what to test) and acceptance test cases define \"how\". They can be defined in the same working session, but it does not make sense to define \"how\" before \"what\"\n\nWRONG (d): With ATDD and BDD, acceptance tests can be read and understood by business analysts and other stakeholders"
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "AcT-2.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "As a tester you participate in the project of the decision support system for granting a loan. You are asked to review the acceptance criteria for the following requirement:\n\nREQ 3.28. The automated system records critical credit application data (CCAD) needed to support application screening.\n\nAssume that it is well known what kind of data CCAD are. Which of the following would be the BEST example of an acceptance criterion for this requirement?",
    "options": [
      {
        "id": "a",
        "text": "The CCAD are stored in the MySQL relational database after each successful data entry procedure"
      },
      {
        "id": "b",
        "text": "The CCAD is not recorded if it is incomplete and a message is displayed"
      },
      {
        "id": "c",
        "text": "The CCAD record process is quick and reversible"
      },
      {
        "id": "d",
        "text": "The process for collecting CCAD meets corporate usability guidelines"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): A well-written acceptance criterion does not include technical solution details\n\nCORRECT (b): This is the expected behavior that an acceptance user would like to verify. Notice that it is well known when the CCAD is incomplete, because we have the CCAD precisely defined\n\nWRONG (c): This acceptance criterion is not precise, nor measurable\n\nWRONG (d): This acceptance criterion does not refer to the above requirement"
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "AcT-2.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "As an acceptance tester you are analyzing the following user story for a computer web-based massively multiplayer online role-playing game (MMORPG):\n\nAs an unregistered player I want to be able to register myself by defining my e-mail, login and password in a registration form so that I become a registered player\n\nConsider the following propositions of the acceptance criteria:\n\ni. A registration form is displayed on the screen\nii. The form is written in the Groovy language; the cursor is initially set on the ‘login’ field; after pushing the TAB button the cursor switches to ‘password’, ‘repeat password’, ‘mail’, and ‘repeat mail’ forms\niii. I cannot register myself if the login I choose is used by another player\niv. After successful registration process I am informed about it by an e-mail\n\nWhich of the above statements would you consider as well-written acceptance criteria?",
    "options": [
      {
        "id": "a",
        "text": "Only i. and iii."
      },
      {
        "id": "b",
        "text": "Only ii."
      },
      {
        "id": "c",
        "text": "Only ii. and iv."
      },
      {
        "id": "d",
        "text": "Only i., iii., and iv."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Statement ii) includes technical solutions, which should be avoided in the acceptance criteria. All the other acceptance criteria are well written, as they are precise, measureable and understandable by the stakeholders.\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\nCORRECT (d)."
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "AcT-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which one of the following statements describes correctly how acceptance testing may be augmented with other test techniques or approaches?",
    "options": [
      {
        "id": "a",
        "text": "In a model-based testing approach, acceptance tests are generated from graphical or textual models"
      },
      {
        "id": "b",
        "text": "In a priority-based testing approach, prioritization of acceptance tests depends on identified product risks"
      },
      {
        "id": "c",
        "text": "In a risk-based testing approach, acceptance criteria are derived from the tester’s experience and intuition"
      },
      {
        "id": "d",
        "text": "In a black-box testing approach, acceptance test scenarios follow the implemented sequence of function calls in the code"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Model-based testing uses graphical (or textual) models to obtain acceptance tests\n\nWRONG (b): Prioritization of acceptance tests based on identified product risks relate to risk-based testing approach\n\nWRONG (c): In a risk-based testing approach, prioritization and intensity of testing depends on previously identified product risks, not on experience\n\nWRONG (d): Black box generally refers to testing checking system reaction on provided input, without investigating the internal code behavior"
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "AcT-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which one of the following test design techniques fits accepting testing purposes BEST?",
    "options": [
      {
        "id": "a",
        "text": "Static code analysis"
      },
      {
        "id": "b",
        "text": "Input validation"
      },
      {
        "id": "c",
        "text": "Equivalence partitioning"
      },
      {
        "id": "d",
        "text": "Defect-based test design"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This is a technique done on the source code level, while acceptance should focus on higher business levels\n\nWRONG (b): This can be used as an element of other black box technique but is a not a single test technique by itself\n\nCORRECT (c): As stated in [AcT Syllabus], this technique can be used as part of acceptance testing\n\nWRONG (d): Defect based test design techniques may be used for integration, system testing but rather not for acceptance testing as it aims is not to search for defects, but check business readiness of a system"
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "AcT-2.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Assume you are testing functionality of the interface of an elevator. One of the requirements is that the elevator can work only if the total weight of the passengers does not exceed 200 kg. The elevator can reach the following floors: Ground Floor, 1st floor and 2nd floor. You want to create an acceptance test using the Gherkin language. You can use the following phrases for this purpose:\n\ni. The total weight of passengers is greater than 200 kg\nii. The elevator is on the ground floor\niii. A button ‘1st floor’ was pressed\niv. The elevator goes to the 1st floor\nv. A passenger standing at the 2nd floor calls the elevator\nvi. A message ‘too many passengers’ is displayed on the screen\n\nWhich of the following statements correctly matches constructs of Given/When/Then with a relevant phrase in order to create a correct test case for the given requirement?",
    "options": [
      {
        "id": "a",
        "text": "GIVEN ii. WHEN i. THEN vi."
      },
      {
        "id": "b",
        "text": "GIVEN ii. WHEN iv. THEN v."
      },
      {
        "id": "c",
        "text": "GIVEN iii. WHEN ii. THEN iv."
      },
      {
        "id": "d",
        "text": "GIVEN ii. WHEN v. AND vi. THEN i."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This test represents a situation in which the elevator cannot operate, since the total weight of the passengers exceeds the allowed limits. ii) represents a situation, i) represents an action (event), and vi) the expected result\n\nWRONG (b): This test does not cover a reasonable operation/scenario\n– it just describes that some combination of events iv) and v) may occur, but does not contain any reasonable, expected result in the THEN section\n\nWRONG (c): This test is not complete, since it does not take into account the restriction on the total weight of the passengers, given in the requirements\n\nWRONG (d): This test would represent a correct reasoning (if the weight message is shown then the total weight exceeds 200 kg), but this does not test a useful scenario. In fact, i) is not the expected result, but an action on the system. We would like test the opposite: if the weight is too big, is the message shown?"
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "AcT-2.2.2",
    "level": "K3",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is the BEST example of a Gherkin-style test for a web-based banking application?",
    "options": [
      {
        "id": "a",
        "text": "GIVEN I have $5000 on my personal account X AND I have $200 on my personal account Y WHEN I transfer $1000 from X to Y THEN I should have balance $4000 on my personal account X AND I should have balance $1200 on my personal account Y"
      },
      {
        "id": "b",
        "text": "GIVEN I have $5000 on my personal account X AND I have $200 on my personal account Y WHEN I click ‘Make transfer’ button AND I enter ‘3000’ into ‘Amount’ field AND I enter ‘X’ into ‘From which account’ field AND I enter ‘Y’ into ‘To which account’ field AND I click ‘Confirm transaction’ button THEN I should have balance $2000 on my personal account X AND I should have balance $3200 on my personal account Y"
      },
      {
        "id": "c",
        "text": "GIVEN I have $5000 on my personal account X and $600 on my personal account Y WHEN I transfer $500 from Y to X THEN I should have balance $4500 on X and balance $1100 on Y"
      },
      {
        "id": "d",
        "text": "GIVEN I have $5000 on my personal account X WHEN I have $600 on my personal account Y THEN I have $5600 in total on my personal accounts X and Y"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is a good example of a Gherkin-style test: GIVEN section describes the preconditions (a situation; a precondition), WHEN\n– a specified behavior (an action on the system) and THEN – the expected result (post condition, expected change)\n\nWRONG (b): According to [AcT Syllabus], WHEN section should not refer to the user interface elements, but should only describe the action we want to invoke\n\nWRONG (c): This scenario contains an error in the THEN section – it should state that we have $5500 on X and $100 on Y\n\nWRONG (d): This scenario states an obvious state on the system resulted from simple calculation that does not need to be a part of acceptance test scenario"
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "AcT-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "In Agile an exploratory test session is conducted. Which one of the following concepts applies BEST?",
    "options": [
      {
        "id": "a",
        "text": "Pair programming"
      },
      {
        "id": "b",
        "text": "Refactoring"
      },
      {
        "id": "c",
        "text": "Planning poker"
      },
      {
        "id": "d",
        "text": "Time boxing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): This is not a concept related to exploratory testing (ET), this term refers to one of agile development approaches\n\nWRONG (b): This is not a concept related to ET, this term refers to one of agile development practices to be followed by development team\n\nWRONG (c): This is a planning technique, not related to ET itself\n\nCORRECT (d): Timeboxing is a concept supporting managing ET sessions, as time-boxed sessions help to control the time and effort dedicated to exploratory session"
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "AcT-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which one of the following statements describes an exploratory test charter BEST?",
    "options": [
      {
        "id": "a",
        "text": "Indicating that the tester should take the role of a novice user can be part of an exploratory test charter"
      },
      {
        "id": "b",
        "text": "The test charter is elaborated during the testing session according to test execution results"
      },
      {
        "id": "c",
        "text": "Each exploratory test charter is based on a previously defined list of activities that would be interesting to test"
      },
      {
        "id": "d",
        "text": "Acceptance testers use the exploratory test charter during the testing session to define the test oracle"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): As stated in [AcT Syllabus], the test charter possibly contains tactics to be used during the session (such as the type of user that shall be simulated during the exploratory session)\n\nWRONG (b): The test charter is prepared prior to the testing session and is used by the tester during the session\n\nWRONG (c): Test charter includes information on the role the tester takes during the session, the particular objective to be achieved during the session, the setup, the activities that would be interesting to test, the test oracle and other information – in exploratory testing there is no predefined list of activities to be followed\n\nWRONG (d): Test oracle should be defined in a test charter, before the session"
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "AcT-2.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "How are beta testing and acceptance testing related?",
    "options": [
      {
        "id": "a",
        "text": "Beta testing is a synonym for acceptance testing used in specific application domains"
      },
      {
        "id": "b",
        "text": "Beta testing should include predefined acceptance test scenarios based on acceptance criteria"
      },
      {
        "id": "c",
        "text": "Beta testing allows the product to be tested in realistic business configurations and contexts"
      },
      {
        "id": "d",
        "text": "Beta testing is a systematic approach to acceptance testing and provides measurable coverage of the user stories"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Beta testing is a form of acceptance testing for commercial off-the-shelf software. It is not the same as acceptance testing\n\nWRONG (b): Beta testing is performed by potential or existing users at their location and neither follow predefined scenarios nor use a test charter and test activities are usually not documented at all\n\nCORRECT (c): During beta testing, the product is tested in various realistic configurations by actual users in their business process context\n\nWRONG (d): beta testing is not systematic or measurable"
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "AcT-2.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which one of the following statements defines beta testing BEST?",
    "options": [
      {
        "id": "a",
        "text": "Beta testing is performed by developers at the customer's location"
      },
      {
        "id": "b",
        "text": "Beta testing takes place early in the development process to acquire feedback from the market"
      },
      {
        "id": "c",
        "text": "During beta testing, genuine users define the acceptance criteria for various realistic configurations"
      },
      {
        "id": "d",
        "text": "Beta testers discover defects in the product that escaped during the development process"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): It is performed by potential or existing users at their location\n\nWRONG (b): It is performed after the product is completed to allow users evaluation of the product in real environment and provide feedback to development organization\n\nWRONG (c): In beta tests, user test the product in various realistic configurations and they neither follow predefined scenarios nor use a test charter\n\nCORRECT (d): Beta testers may discover defects in the product that escaped during the development process"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "AcT-3.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Suppose you are testing a new professional exam support system. As input the system takes two grades from two exams. For each exam the possible grade is 0 or 1 point. As output the system returns a single string – the decision about the entitlements: if the total score is 2, the candidate receives full entitlements. If the total score is 1, she receives partial entitlements. If the total score is 0, the candidate fails and receives no entitlements.\n\nWhich of the following is the correct Decision Model and Notation (DMN) model for this situation?",
    "options": [
      {
        "id": "a",
        "text": "Decision table \"Entitlements\" (hit policy U) — inputs: Exam #1, Exam #2 · output: Entitlements · rules: 1) 0, 0 → No · 2) 0, 1 → Partial · 3) 1, 0 → Partial · 4) 1, 1 → Full"
      },
      {
        "id": "b",
        "text": "Table \"Entitlements\" — columns: Exam result | Entitlements · rows: 0 → No · 1 → Partial · 2 → Full"
      },
      {
        "id": "c",
        "text": "Decision table \"Entitlements\" (hit policy U) — inputs: Exam #1, Exam #2 · outputs: No entitlements, Partial entitlements, Full entitlements · rules: 1) 0, 0 → YES, NO, NO · 2) 0, 1 → NO, YES, NO · 3) 1, 0 → NO, YES, NO · 4) 1, 1 → NO, NO, YES"
      },
      {
        "id": "d",
        "text": "Table \"Entitlements\" — columns: Rule | Exam #1 | Exam #2 | Result | Output · single row: 1 | e1 | e2 | e1 + e2 | 0: no, 1: partial, 2: full"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is correct DMN decision table with 2 inputs and one output\n\nWRONG (b): The table show no inputs – this is not DMN table\n\nWRONG (c): The format of output presentation is not correct\n\nWRONG (d): This is not a DMN decision table (because of the ‘Result’ column and incorrect format of the ‘Output’ column)"
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "AcT-3.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Assume you would like to create a model describing a loan request process in a bank.\n\nThe loan request process starts when the customer submits a loan application. The bank then reviews the application. Regardless of whether the loan request is approved or not, a letter is sent to inform the customer of the decision. If the request is approved, the loan contract is created.\n\nYou have drawn the following business process model using BPMN 2.0.\n\n[Diagram described in text] Start event \"Loan application received\" → task \"Record Loan Application\" → PARALLEL gateway (+) splits into three branches: (1) \"Verify Employment\"; (2) \"Request Credit Report\" → \"Review Credit Report\"; (3) \"Perform Title Search\" → \"Review Title Report\" → PARALLEL gateway (+) joins them → \"Review Loan Application\" → EXCLUSIVE gateway (X) \"Loan Status?\": approved → \"Send Loan Approval Letter\" → SUB-PROCESS \"Create the loan contract\" (marked +) → end event \"Loan Application approved\"; rejected → \"Send Loan Rejection Letter\" → end event \"Loan Application Rejected\".\n\nWhich one of the following sentences is true with respect to this process model?",
    "options": [
      {
        "id": "a",
        "text": "Verifying employment is not done when the loan status is rejected"
      },
      {
        "id": "b",
        "text": "Creating the loan contract is defined as a sub-process"
      },
      {
        "id": "c",
        "text": "Performing title search and requesting credit report are sequential tasks"
      },
      {
        "id": "d",
        "text": "A review credit report is optional when reviewing the loan application"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): “Verify Employment” is systematically done after the “Record Loan Application” task and prior to “Review Loan Application” in which the decision regarding the loan application is taken\n\nCORRECT (b): “Create the Loan Contract” is defined as a sub-process\n\nWRONG (c): A parallel gateway splits the flow between “Perform Title Search” and “Request Credit Report” tasks\n\nWRONG (d): The task “Review Credit Report” has to be done before “Review Loan Application” in the process flow"
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "AcT-3.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "As an acceptance tester you want to test the $100 withdrawal process described by the following Business Process Model and Notation (BPMN) model.\n\n[Diagram described in text] Start event → task \"Select 'Withdraw $100'\" → EXCLUSIVE gateway (X): balance < $100 → task \"Remove card (withdrawal rejected)\" → error end event; balance >= $100 → task \"Select receipt\" → EXCLUSIVE gateway (X): YES → PARALLEL gateway (+) running \"Take receipt\" and \"Withdraw $100, remove card\" in parallel; NO → \"Withdraw $100, remove card\". Both paths then reach the end event.\n\nYou would like to achieve the following coverage criterion “execute all possible process tasks”. Consider the following test cases:\n\nTest 1: balance = $100, receipt = YES Test 2: balance = $120, receipt = NO Test 3: balance = $85 Test 4: balance = $20, receipt = YES\n\nWhich of the following is the minimal set of test cases allowing to achieve required coverage?",
    "options": [
      {
        "id": "a",
        "text": "Test 1, Test 3"
      },
      {
        "id": "b",
        "text": "Test 1, Test 2, Test 3"
      },
      {
        "id": "c",
        "text": "Test 2, Test 4"
      },
      {
        "id": "d",
        "text": "Test 1, Test 2, Test 4"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Test 1 covers all the tasks except ‘Remove card (withdrawal rejected)’, which in turn is covered by Test 3. Hence, these two tests achieve the desired coverage. Notice that in Test 1 both the tasks ‘Take receipt’ and ‘Withdraw $100, remove card’ are covered, as they are executed in parallel\n\nWRONG (b): This set of test cases achieves the required coverage, but it is not the minimal set of test cases (which is answer a with only two test cases)\n\nWRONG (c): Test 3 covers only two out of five tasks\n\nWRONG (d): Test 4 is incorrectly constructed, as having balance $20 does not allow us to select the receipt printing"
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "AcT-3.2.1",
    "level": "K3",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "As an acceptance tester you want to test the $100 withdrawal process described by the following BPMN model.\n\n[Diagram described in text] Start event → task \"Select 'Withdraw $100'\" → EXCLUSIVE gateway (X): balance < $100 → task \"Remove card (withdrawal rejected)\" → error end event; balance >= $100 → task \"Select receipt\" → EXCLUSIVE gateway (X): YES → PARALLEL gateway (+) running \"Take receipt\" and \"Withdraw $100, remove card\" in parallel; NO → \"Withdraw $100, remove card\". Both paths then reach the end event.\n\nYou would like to achieve decision coverage. Consider the following test cases:\n\nTest 1: balance = $100, receipt = YES Test 2: balance = $99 Test 3: balance = $120, receipt = NO Test 4: balance = $2500, receipt = YES\n\nWhich of the following is the minimal set of test cases allowing to achieve full decision coverage?",
    "options": [
      {
        "id": "a",
        "text": "Test 1, Test 2, Test 4"
      },
      {
        "id": "b",
        "text": "Test 1, Test 2"
      },
      {
        "id": "c",
        "text": "Test 2, Test 3"
      },
      {
        "id": "d",
        "text": "Test 1, Test 2, Test 3"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "There are two decisions (denoted by the rhombuses with the X sign). The first one has two outcomes: balance >= $100 and balance < $100. The second one has also two outcomes: YES and NO. To achieve full decision coverage we need to cover all these outcomes. Notice that the rhombus with the plus sign denotes a parallel sequence, so it is not a decision. Test 1 and Test 4 cover balance >= $100 and YES Test 2 covers balance < $100 Test 3 covers balance >= $100 and NO Hence, we need three test cases (1, 2, 3 or 2, 3, 4) to achieve the decision coverage.\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\nCORRECT (d)."
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "AcT-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which one of the following statements regarding the graphical representation of business processes is true?",
    "options": [
      {
        "id": "a",
        "text": "Using decision tables in BPMN allows defining test conditions corresponding to the business rules under test"
      },
      {
        "id": "b",
        "text": "Graphical representations of business processes must describe the complete workflow in detail, including alternative and error scenarios"
      },
      {
        "id": "c",
        "text": "For acceptance testing, graphical business process models should focus on the user workflows to be tested"
      },
      {
        "id": "d",
        "text": "Business processes should be described graphically using the DMN standard and completed with decision tables"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This is supported by decision tables, BPMN support business process modeling in the form of diagrams\n\nWRONG (b): Graphical representations of business processes should focus on what is to be tested. Depending on the purpose, graphical representations of business processes may cover only partially the behavior of related software systems\n\nCORRECT (c): Especially in user acceptance testing, the “main objective is building confidence that the users can use the system to meet their needs, fulfill requirements, and perform business processes” [ISTQB CTFL syllabus]. Therefore, graphical business process models should focus on user workflows\n\nWRONG (d): DMN is not for graphic business process modeling, it is a notation for decision modeling"
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "AcT-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What is considered as good practice regarding business process modeling?",
    "options": [
      {
        "id": "a",
        "text": "Keeping all model element in one diagram considerably improves the readability of BMPN models"
      },
      {
        "id": "b",
        "text": "BPMN diagrams and DMN tables should include information such as traceability to user stories"
      },
      {
        "id": "c",
        "text": "Links to requirements or risks should be well separated from the workflow description"
      },
      {
        "id": "d",
        "text": "Business analysts should finalize their process models before showing them to acceptance testers"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Diagrams should be as simple as possible and be structured in sub-processes\n\nCORRECT (b): Additional information such as links to user stories, requirements, risks, priorities and any other information useful for acceptance testing should be added to the diagrams using annotations\n\nWRONG (c): Links to user stories, requirements, risks, priorities and any other information useful for acceptance testing should be added to the diagrams using annotations\n\nWRONG (d): It should be a collaborative work between business analysts and testers, and produced artifacts shared between both groups"
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "AcT-3.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Your company wants to establish a new human resources management application. As tester, you propose to use an ATDD approach and to use business process models for test case design.\n\nWhich of the following statements is the LEAST meaningful argument for this approach?",
    "options": [
      {
        "id": "a",
        "text": "The process models will help testers to understand the use cases to be tested"
      },
      {
        "id": "b",
        "text": "Testers will be able to show test coverage directly within the graphical representation of business processes"
      },
      {
        "id": "c",
        "text": "Business process models will make it easier to detect defects in the application code"
      },
      {
        "id": "d",
        "text": "As business process models will be updated to maintain the tests, they will be a living documentation of the product"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Business analysts and testers collaborate to model workflows when using process modeling for ATDD. This helps the testers to understand the use cases to be tested\n\nWRONG (b): As testers derive tests from these business process models, they can show test coverage directly within the graphical representation\n\nCORRECT (c): The graphical representation of business process model does not specifically allow to locate defects in the code\n\nWRONG (d): Business process models created and maintained for ATDD can be viewed as living documentation used by business analysts to present the actual behavior of the test object"
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "AcT-3.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following sentences explains BEST how business process and business rule modeling can be used for ATDD?",
    "options": [
      {
        "id": "a",
        "text": "In an ATDD approach, business process/rule models must be created before the project starts"
      },
      {
        "id": "b",
        "text": "In an ATDD approach, business process models replace acceptance criteria"
      },
      {
        "id": "c",
        "text": "In an ATDD approach, testers use business process and business rule models to generate acceptance tests"
      },
      {
        "id": "d",
        "text": "In an ATDD approach, process models are created for initial test design but are not maintained afterwards"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): In visual ATDD, business analysts and testers collaborate to model workflows and business rules using graphical notations\n\nWRONG (b): Business process/rule models are reviewed with relevant stakeholders and contribute to the validation of the requirements and acceptance criteria, and not to replace them\n\nCORRECT (c): Testers derive tests from these business process/rule models to ensure and demonstrate the required coverage through the different paths and business rules\n\nWRONG (d): Acceptance tests are derived from process models, which are updated to maintain test cases when there is a change in requirements or user stories"
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "AcT-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Given the following attributes:\n\ni. Commercializability\nii. Functional suitability\niii. Viability\niv. Reliability\nv. Security\nvi. Cognitive ability\nvii. Maintainability\n\nWhich one of the following answers contains quality attributes that are MOST relevant for acceptance testing?",
    "options": [
      {
        "id": "a",
        "text": "ii, v and vi"
      },
      {
        "id": "b",
        "text": "ii, v and vii"
      },
      {
        "id": "c",
        "text": "i, ii and vi"
      },
      {
        "id": "d",
        "text": "iii, iv and v"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Quality characteristics defined in ISO/IEC 25010 are:  Functional suitability  Reliability  Performance efficiency  Usability  Security  Compatibility  Maintainability  Portability Which means that ii, v and vii are correct.\n\nThus:\nWRONG (a).\nCORRECT (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "AcT-4.1.2",
    "level": "K1",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "The standard ISO 25010 defines a quality in use model with characteristics and subcharacteristics. Which elements of the following list is a characteristic of quality in use according to this standard?",
    "options": [
      {
        "id": "a",
        "text": "Efficiency"
      },
      {
        "id": "b",
        "text": "Usability"
      },
      {
        "id": "c",
        "text": "Compatibility"
      },
      {
        "id": "d",
        "text": "Portability"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Efficiency is one out of five characteristics in the ISO 25010 quality in use model\n\nWRONG (b): Usability is part of the non-functional characteristics according to ISO 25010 but is not part of the quality in use model\n\nWRONG (c): Compatibility is part of the non-functional characteristics according to ISO 25010 but is not part of the quality in use model\n\nWRONG (d): Portability is part of the non-functional characteristics according to ISO 25010 but is not part of the quality in use model"
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "AcT-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following statements corresponds BEST to a UX requirement analysis activity?",
    "options": [
      {
        "id": "a",
        "text": "Personas are used to analyze products or solutions from competitors"
      },
      {
        "id": "b",
        "text": "User profiles are used to determine different levels of business knowledge"
      },
      {
        "id": "c",
        "text": "Security requirements are derived from usage scenarios"
      },
      {
        "id": "d",
        "text": "Environmental conditions such as light conditions are obtained from a task analysis"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Creating personas may be part of the user profile analysis when analyzing UX requirements, but they are not used to analyze products or solutions from competitors\n\nCORRECT (b): Measuring the level of business knowledge may be part of the user profile analysis when analyzing UX requirements\n\nWRONG (c): security requirements analysis is not usually part of UX requirements analysis\n\nWRONG (d): Context analysis may include analysis of external conditions such as light condition, but these conditions result from context analysis not from task analysis"
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "AcT-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following scenarios characterizes UX task analysis BEST?",
    "options": [
      {
        "id": "a",
        "text": "Users are qualified depending on their physical and intellectual characteristics"
      },
      {
        "id": "b",
        "text": "Use cases are analyzed and represented through business process models"
      },
      {
        "id": "c",
        "text": "External conditions are considered as input for subsequent design steps"
      },
      {
        "id": "d",
        "text": "Inspirations from similar sectors are sought to identify successful solutions"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This relates to user analysis\n\nCORRECT (b): During task analysis, functionality is identified and formalized, for example through use cases that can be therefore represented as business process models\n\nWRONG (c): This relates to context analysis\n\nWRONG (d): This relates to competition analysis"
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "AcT-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following usability testing techniques matches the test objective BEST?",
    "options": [
      {
        "id": "a",
        "text": "Expert reviews help to understand how users interact with a system and what is more or less visible"
      },
      {
        "id": "b",
        "text": "Biometrics-based evaluation help to understand retrospectively, how users interacted with the system and to improve it"
      },
      {
        "id": "c",
        "text": "Log file analysis performed by usability experts identifies strong points of an interface that attract the user's attention"
      },
      {
        "id": "d",
        "text": "Walkthrough and thinking aloud methods can indicate difficulties users experience with certain tasks"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): In expert reviews usability experts evaluate the usability of the system or product according to pre-defined criteria or checklists based upon usability heuristics to identify strong and weak points of an interface\n\nWRONG (b): In biometrics-based evaluations user behavior is monitored with specific biometric devices to understand how the user interacts with a page or a system\n\nWRONG (c): Log files analysis allows to analyze retrospectively how the users interacted with the system to improve it\n\nCORRECT (d): In walkthrough and thinking aloud methods, users explore the product and may perform given specific tasks. This helps to see how they interact with the product and to learn about expectations or difficulties"
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "AcT-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following statements regarding performance testing is MOST correct?",
    "options": [
      {
        "id": "a",
        "text": "Depending on the model used to simulate the workload, performance tests are called load, stress or endurance / stability tests"
      },
      {
        "id": "b",
        "text": "Performance testing aims to determine a system’s robustness against malicious attacks"
      },
      {
        "id": "c",
        "text": "The performance of the system is measured in a context that reflects, as far as possible, representative operating conditions"
      },
      {
        "id": "d",
        "text": "The performance test results serve to determine hardware and software performance requirements"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This classification refers to types of testing to be performed, depending on what needs to be measured\n\nWRONG (b): Performance testing aims to determine a system’s responsiveness and stability under certain conditions\n\nCORRECT (c): In a typical performance test, concurrent users or transactions are simulated with specific tools to generate a given workload which mimics, as close as possible, actual conditions with real users and realistic interactions\n\nWRONG (d): Results of a performance test are measured, and compared to pre-defined performance requirements"
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "AcT-4.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following combinations of given perspective and statement matches BEST?",
    "options": [
      {
        "id": "a",
        "text": "From a business perspective, computing power and architecture are major parameters for fine-tuning the system"
      },
      {
        "id": "b",
        "text": "From a user perspective, missing feedback from the system when processing a request it is a problem"
      },
      {
        "id": "c",
        "text": "From a technical perspective, the number of concurrent user and the types of transactions performed are major elements"
      },
      {
        "id": "d",
        "text": "From a business perspective, the choice of performance test tools strongly depends on the applied test techniques"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Computing power and architecture belong to the technical perspective\n\nCORRECT (b): From a user perspective, the perceived response time is crucial as it reflects his real experience with the system\n\nWRONG (c): The number of concurrent user and the types of scenarios or transactions are about business perspective\n\nWRONG (d): This is not a subject of interest for a business perspective"
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "AcT-4.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which one of the following acceptance criteria relates to security requirements?",
    "options": [
      {
        "id": "a",
        "text": "The system's response time shall not exceed 3 seconds"
      },
      {
        "id": "b",
        "text": "The system shall be web-based"
      },
      {
        "id": "c",
        "text": "The graphical user interface shall comply with corporate style guides"
      },
      {
        "id": "d",
        "text": "Normal users shall have restricted access to private data"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Response time requirements relate to performance quality characteristics\n\nWRONG (b): This is a technical restriction of the solution space\n\nWRONG (c): Corporate style guides are crucial for branding and may include aspects that relate to usability, but they usually do not cover security requirements which are rather part of programming guidelines\n\nCORRECT (d): Confidentiality of private data is a security requirement"
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "AcT-5.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "The project team is currently facing a difficult situation originating from their difficulty in envisioning the future and the necessary steps to reach it together with a certain loss of motivation due to a strong feeling of stagnation. You try to unlock the situation by proposing a workshop. Which one would fit the best?",
    "options": [
      {
        "id": "a",
        "text": "You ask two volunteers to play a part in front of the team. One will try to defend the project and propose positive arguments and ways forward. The other will do the opposite. You then recapitulate the major arguments of both sides and debate them openly with the team"
      },
      {
        "id": "b",
        "text": "You draw a staircase with 11 steps, each of them representing a major milestone of the project. The bottom of the stairs corresponds to the first day of the project and the upper step means that the project is released. You locate the present situation in the middle of the stairs. The team is asked to identify and discuss the major steps down and up"
      },
      {
        "id": "c",
        "text": "You organize a day out with challenging physical exercises practiced in teams followed by an after work dinner and drink. After all, nothing is best for motivation than hard times together, strong common objectives and a promise of good time"
      },
      {
        "id": "d",
        "text": "You visualize all remaining major milestones of the project, starting with today and ending with project release. Then, you ask the team to identify and discuss the necessary actions to move forward from the present situation and to reach the milestones"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This approach might come to help in identifying some of the problems but it will not help envisioning the future neither will it re-motivate the team\n\nCORRECT (b): By identifying what has already been achieved (back) and what is left to be done and how, the team will be able to get a better understanding on where they are and how they will go forward\n\nWRONG (c): It might work on motivation and team spirit but it will not help envision the future neither will it help in getting a clue on what has already been achieved\n\nWRONG (d): By starting the analysis with the present situation, the team will only work on the future steps. They will not envision what has been achieved and might even get more demotivated by what is left to be done and how unreachable it might seem to be"
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "AcT-5.1.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are leading a brand new project team whose members are coming from all over the organization and have no former experience in working together. You need to build a common vision and team spirit. What workshop would fit BEST?",
    "options": [
      {
        "id": "a",
        "text": "You invite the team members and ask them to design their own (team-wise) emblem representing their values, beliefs, goals, tasks together than a common motto"
      },
      {
        "id": "b",
        "text": "You invite every member in turn to describe his/her past experience and his/her major achievements in the organization or in their former job"
      },
      {
        "id": "c",
        "text": "You ask every member in turn to write down three things he/she likes and dislikes in the organization and to post them on a wall. A volunteer is then chosen to read randomly some posts that are then discussed with the group"
      },
      {
        "id": "d",
        "text": "You draw a staircase with 11 steps, each of them representing a major milestone of the project. The bottom of the stairs corresponds to the first day of the project and the upper step means that the project is released. You locate the present situation in the top of the stairs. The team is asked to identify and discuss the major steps downwards"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): By representing their values, beliefs, goals, tasks, the team’s members will get a complete definition of the team’s identity and you will align all the members on the same vision\n\nWRONG (b): You might either break the ice or get a very boring meeting but you will for sure completely miss the goal\n\nWRONG (c): This workshop is rather used for expressing the unsaid. It will neither bring any team spirit nor will it align the team on a common objective\n\nWRONG (d): This workshop is pretty useless unless the goal is to remember the good old days (as it only allows to envision the past steps when the project is achieved)"
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "AcT-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following statements regarding defects is MOST correct?",
    "options": [
      {
        "id": "a",
        "text": "Regular meetings between business analysts and testers are necessary to report discrepancies between actual and expected outcome"
      },
      {
        "id": "b",
        "text": "Testers should provide accurate information regarding the difference between the expected test result and the actual result"
      },
      {
        "id": "c",
        "text": "If the defect turns out to be a bug, the tester writes a defect report and sends it to the business analyst for further investigation"
      },
      {
        "id": "d",
        "text": "The tester should analyze the potential impact of a defect on system usage, before communicating it to the business analyst"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Testers first report discrepancies through defect reports which are discussed afterwards\n\nCORRECT (b): A defect report contains all relevant information the tester can provide to help the business analyst understand what happened and to assess the deviation should be provided\n\nWRONG (c): All defects should be documented and assessed by the business analyst, who may then decide. whether it is a defect or not\n\nWRONG (d): Testers are testing experts, not business experts. It is the business analyst who is capable to judge the impact of a defect on system usage best"
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "AcT-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following activities is most likely performed by the business analyst as part of defect analysis?",
    "options": [
      {
        "id": "a",
        "text": "Identify the requirements / user stories that are not satisfied"
      },
      {
        "id": "b",
        "text": "Assess the impact of corrective actions on other parts of the system's implementation"
      },
      {
        "id": "c",
        "text": "Analyze the function that failed step by step to identify the cause of the defect"
      },
      {
        "id": "d",
        "text": "Check, whether other paths in the business process model perform as intended"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): During defect analysis activities, the business analyst identifies the acceptance criteria that are not satisfied to analyze the defect. Those criteria are part of a requirement / user story\n\nWRONG (b): The business analyst does not have sufficient insight in the implementation to be able to assess the impact of changes on other parts of the system’s implementation. Developers do have this insight\n\nWRONG (c): Debugging is a developer’s task\n\nWRONG (d): In individual cases, business analysts may perform this check to gather confidence in the system, but in general, the other paths are covered by other tests which are performed by testers"
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "AcT-5.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following information is most likely part of an acceptance test summary report?",
    "options": [
      {
        "id": "a",
        "text": "Information to evaluate the level of risk for product release"
      },
      {
        "id": "b",
        "text": "Technical details on defect fixes"
      },
      {
        "id": "c",
        "text": "Test strategy and test design methods"
      },
      {
        "id": "d",
        "text": "Test procedure information"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Based on the test summary report, decision makers should be able to determine whether the system under test has reached the necessary pre-defined level of quality and may be released to production or not\n\nWRONG (b): Defect fixes are documented in the related defect report\n\nWRONG (c): Test strategy and test design methods are part of the test plan\n\nWRONG (d): Test procedure information is contained in the test procedure specification. They may be part of a test report, but not of the test summary report"
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "AcT-5.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following techniques is most likely applied to ensure the quality of acceptance testing activities?",
    "options": [
      {
        "id": "a",
        "text": "Review of the source code to ensure traceability of user stories to system components"
      },
      {
        "id": "b",
        "text": "Verification of the traceability between user stories and test cases to make sure it is up to date"
      },
      {
        "id": "c",
        "text": "Checklist-based verification of requirements to ensure their completeness and quality"
      },
      {
        "id": "d",
        "text": "Eye tracking to verify the feasibility of previously defined user acceptance tests"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Code reviews are used to ensure the quality of software implementations\n\nCORRECT (b): Traceability between requirements / user stories, acceptance criteria, test cases, and defects clarify dependencies and provide simple access to related information\n\nWRONG (c): Even if acceptance testers should participate in requirements reviews, the verification of the test basis is not a QA technique for acceptance testing activities\n\nWRONG (d): Eye tracking is a technique applied during usability testing. It is used to ensure the quality of the system, not of the acceptance tests"
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "AcT-5.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which one of the following sentences describes BEST a major advantage when business analysts and testers review the acceptance criteria together?",
    "options": [
      {
        "id": "a",
        "text": "A shared vision between the business analyst and the tester on acceptance criteria facilitates the design of acceptance test cases"
      },
      {
        "id": "b",
        "text": "A joint review ensures that non-functional quality criteria are taken into account"
      },
      {
        "id": "c",
        "text": "The review of acceptance criteria helps to verify that acceptance test cases cover business processes, business rules and business risks"
      },
      {
        "id": "d",
        "text": "The review of acceptance criteria is a good practice to improve the quality of test reports"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Good acceptance provide measurable pass/fail criteria, which facilitates the design of the corresponding test cases\n\nWRONG (b): A joint review certainly reduces the risk of forgetting about non-functional quality criteria, but it is not a guarantee\n\nWRONG (c): This is more an advantage of the review of acceptance test cases\n\nWRONG (d): This is more an advantage of the review of test reports"
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "AcT-5.3.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which tool fits the mentioned acceptance test activities BEST?",
    "options": [
      {
        "id": "a",
        "text": "Requirements management tools for managing acceptance test execution campaigns"
      },
      {
        "id": "b",
        "text": "Test management and automation tools for business process model-based acceptance test generation"
      },
      {
        "id": "c",
        "text": "Business process management tools for modeling business processes and rules"
      },
      {
        "id": "d",
        "text": "Model-based testing tools for managing incidents"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Test management tools and test automation tools are used to manage test execution campaigns, but not requirements management tools\n\nWRONG (b): Business process-based test case generators are used for generating tests from business process models\n\nCORRECT (c): Business process management tools are used for modeling business processes and rules\n\nWRONG (d): Defect / incident management tools are used for managing incidents"
  }
];
