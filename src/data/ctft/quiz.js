// CT-FT v1.0 (2026) — official sample exam, parsed from the PDFs in trainings/:
//   exam "ASTQB" = ASTQB "ISTQB Finance Testing v1.0 Sample Exam Questions" (2026): 40 questions, 45 points,
//                  30 points to pass. Correct answers, points, LOs and per-option rationales from the matching
//                  Sample-Answers PDF; K-levels from the syllabus LO table.
//   The ISTQB "Sample Exam Set A v1.0" is NOT included: its answers document does not line up with its questions
//   document (answers describe different question stems/options), so it couldn't be verified against a key.
//   The source states no exam duration; 60 minutes (the usual 40-question specialist exam) is assumed here.
export const questions = [
  {
    "id": 1,
    "exam": "ASTQB",
    "num": "1",
    "lo": "FT-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Protecting customer data and financial assets from unauthorized access belongs to which category of the objectives of finance testing?",
    "options": [
      {
        "id": "a",
        "text": "Functional accuracy"
      },
      {
        "id": "b",
        "text": "Data integrity"
      },
      {
        "id": "c",
        "text": "Security assurance"
      },
      {
        "id": "d",
        "text": "Operational resilience and performance"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is one of the factors in security assurance."
  },
  {
    "id": 2,
    "exam": "ASTQB",
    "num": "2",
    "lo": "FT-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You are testing a user-facing banking system that supports the mobile applications and the branches. What type of test environment is this?",
    "options": [
      {
        "id": "a",
        "text": "Omnichannel consumer environment"
      },
      {
        "id": "b",
        "text": "High-throughput and low-latency environment"
      },
      {
        "id": "c",
        "text": "Logic-dense and resilient API environment"
      },
      {
        "id": "d",
        "text": "Schema-driven messaging environment"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This environment prioritizes a unified, seamless customer journey across retail and commercial banking."
  },
  {
    "id": 3,
    "exam": "ASTQB",
    "num": "3",
    "lo": "FT-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You are testing a system used by Fintech companies that uses complex business logic. What type of test environment is this?",
    "options": [
      {
        "id": "a",
        "text": "Omnichannel consumer environment"
      },
      {
        "id": "b",
        "text": "High-throughput and low-latency environment"
      },
      {
        "id": "c",
        "text": "Logic-dense and resilient API environment"
      },
      {
        "id": "d",
        "text": "Schema-driven messaging environment"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is a typical fintech environment that requires fast processing of complex business logic and multiple APIs to other systems."
  },
  {
    "id": 4,
    "exam": "ASTQB",
    "num": "4",
    "lo": "FT-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which regulatory standard is applicable when testing compliance and identity workflows?",
    "options": [
      {
        "id": "a",
        "text": "Know Your Customer (KYC)"
      },
      {
        "id": "b",
        "text": "Order Management System / Execution Management System (OMS/EMS)"
      },
      {
        "id": "c",
        "text": "End of Day (EOD)"
      },
      {
        "id": "d",
        "text": "Customer User Trust and Trade Execution Responsibility (CUTTER)"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Know Your Customer (KYC). (The ASTQB answer sheet gives no further rationale — see syllabus section 1.1.3 for FT-1.1.3.)"
  },
  {
    "id": 5,
    "exam": "ASTQB",
    "num": "5",
    "lo": "FT-1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Why is domain knowledge needed to translate financial regulations to test conditions?",
    "options": [
      {
        "id": "a",
        "text": "Because they should not be directly translated into test cases without being divided into the conditions being tested"
      },
      {
        "id": "b",
        "text": "Because the regulations are often abstract and leave it up to the reader to interpret"
      },
      {
        "id": "c",
        "text": "Because only regulators can understand the regulations, and testers will not be able to accurately interpret them"
      },
      {
        "id": "d",
        "text": "Because there are too many data dependencies built into the regulations, and the tester cannot control the data"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The tester has to apply their domain knowledge in order to translate the regulations into test conditions."
  },
  {
    "id": 6,
    "exam": "ASTQB",
    "num": "6",
    "lo": "FT-1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an area in which the tester’s domain knowledge can be applied to help mitigate the challenge?",
    "options": [
      {
        "id": "a",
        "text": "Data dependencies"
      },
      {
        "id": "b",
        "text": "Environment availability"
      },
      {
        "id": "c",
        "text": "API quality"
      },
      {
        "id": "d",
        "text": "Data protection"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Having the ability to understand how the data may have internal dependencies helps the tester to create and maintain valid test data."
  },
  {
    "id": 7,
    "exam": "ASTQB",
    "num": "7",
    "lo": "FT-2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Your manager has directed that compliance testing ensures the system complies with both regulatory frameworks and internal policies. What is the goal of your compliance testing?",
    "options": [
      {
        "id": "a",
        "text": "Verification of adherence"
      },
      {
        "id": "b",
        "text": "Risk identification"
      },
      {
        "id": "c",
        "text": "Control validation"
      },
      {
        "id": "d",
        "text": "Evidence provision"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The purpose of this testing is to verify that the frameworks and policies are being adhered to by the system."
  },
  {
    "id": 8,
    "exam": "ASTQB",
    "num": "8",
    "lo": "FT-2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Your company is facing an audit into its practices and adherence to standards and regulations. Your manager wants to be sure the system will provide all the information needed to support the audit. Which of the following should be your goal during compliance testing?",
    "options": [
      {
        "id": "a",
        "text": "Verification of adherence"
      },
      {
        "id": "b",
        "text": "Risk identification"
      },
      {
        "id": "c",
        "text": "Control validation"
      },
      {
        "id": "d",
        "text": "Evidence provision"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): You need to be testing to ensure the system provides the necessary evidence needed by the auditors."
  },
  {
    "id": 9,
    "exam": "ASTQB",
    "num": "9",
    "lo": "FT-2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What type of compliance testing examines the system outputs to verify accuracy, completeness, and validity?",
    "options": [
      {
        "id": "a",
        "text": "Substantive testing"
      },
      {
        "id": "b",
        "text": "Transactional testing"
      },
      {
        "id": "c",
        "text": "Fringe testing"
      },
      {
        "id": "d",
        "text": "Process testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is substantive testing where the individual transactions and outputs are examined to verify accuracy, completeness, and validity of the data."
  },
  {
    "id": 10,
    "exam": "ASTQB",
    "num": "10",
    "lo": "FT-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are testing to ensure your software complies with the Payment Card Industry Data Security Standard (PCI DSS). What should you be covering in your testing?",
    "options": [
      {
        "id": "a",
        "text": "Consent handling, data-subject rights, access controls, privacy-by- design, data masking"
      },
      {
        "id": "b",
        "text": "Segregation of duties, approval workflows, immutable audit logs, preserved financial history"
      },
      {
        "id": "c",
        "text": "Encryption of cardholder data, strong authentication, secure transaction flows, testing with tokenized primary account numbers"
      },
      {
        "id": "d",
        "text": "Credit, market, and liquidity risk models through stress and scenario testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): A is GDPR, B is SOX, C is PCI DSS, D is BaseI III/IV."
  },
  {
    "id": 11,
    "exam": "ASTQB",
    "num": "11",
    "lo": "FT-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are testing to ensure your software complies with BaseI III/IV. What should you be covering in your testing?",
    "options": [
      {
        "id": "a",
        "text": "Consent handling, data-subject rights, access controls, privacy-by- design, data masking"
      },
      {
        "id": "b",
        "text": "Segregation of duties, approval workflows, immutable audit logs, preserved financial history"
      },
      {
        "id": "c",
        "text": "Encryption of cardholder data, strong authentication, secure transaction flows, testing with tokenized primary account numbers"
      },
      {
        "id": "d",
        "text": "Credit, market, and liquidity risk models through stress and scenario testing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): A is GDPR, B is SOX, C is PCI DSS, D is BaseI III/IV."
  },
  {
    "id": 12,
    "exam": "ASTQB",
    "num": "12",
    "lo": "FT-2.2.2",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are working for a company in the financial industry. Your company has just been fined because it was not in compliance with industry regulations. In this case, who imposes the fine?",
    "options": [
      {
        "id": "a",
        "text": "The board of directors"
      },
      {
        "id": "b",
        "text": "The upper management"
      },
      {
        "id": "c",
        "text": "The regulatory body"
      },
      {
        "id": "d",
        "text": "The customers and clients"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The regulatory body in charge of the areas of non- compliance would be the one that would levy the fine."
  },
  {
    "id": 13,
    "exam": "ASTQB",
    "num": "13",
    "lo": "FT-2.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What is the purpose of adhering to compliance-critical test data management?",
    "options": [
      {
        "id": "a",
        "text": "To expose security weaknesses, potential fraud paths, and logic gaps that might be accessible via bad inputs, unauthorized access, or limit breaches"
      },
      {
        "id": "b",
        "text": "To ensure data is handled in accordance with the applicable regulations"
      },
      {
        "id": "c",
        "text": "To ensure the testing artifacts are handled via systematic collection, retention and management to prove due diligence"
      },
      {
        "id": "d",
        "text": "To ensure the system is stable under high transaction loads and operational resilience is provided via disaster recovery and business continuity validation"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): To ensure data is handled in accordance with the applicable regulations. (The ASTQB answer sheet gives no further rationale — see syllabus section 2.3 for FT-2.3.)"
  },
  {
    "id": 14,
    "exam": "ASTQB",
    "num": "14",
    "lo": "FT-2.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What is the purpose of ensuring that testing is evidence-driven?",
    "options": [
      {
        "id": "a",
        "text": "To expose security weaknesses, potential fraud paths, and logic gaps that might be accessible via bad inputs, unauthorized access, or limit breaches"
      },
      {
        "id": "b",
        "text": "To ensure data is handled in accordance with the applicable regulations"
      },
      {
        "id": "c",
        "text": "To ensure the testing artifacts are handled via systematic collection, retention, and management to prove due diligence"
      },
      {
        "id": "d",
        "text": "To ensure the system is stable under high transaction loads and operational resilience is provided via disaster recovery and business continuity validation"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): To ensure the testing artifacts are handled via systematic collection, retention, and management to prove due diligence. (The ASTQB answer sheet gives no further rationale — see syllabus section 2.3 for FT-2.3.)"
  },
  {
    "id": 15,
    "exam": "ASTQB",
    "num": "15",
    "lo": "FT-2.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You want to be sure your testing meets all the requirements for an audit. You are carefully logging information for each test execution, including the steps, the system configuration, the preconditions, and the input parameters. What key component of auditability are you targeting?",
    "options": [
      {
        "id": "a",
        "text": "Bidirectional traceability"
      },
      {
        "id": "b",
        "text": "Immutable evidence retention"
      },
      {
        "id": "c",
        "text": "Evidence integrity and privacy"
      },
      {
        "id": "d",
        "text": "Reproducibility"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): You have captured everything needed to re-execute a test in order to obtain the same result."
  },
  {
    "id": 16,
    "exam": "ASTQB",
    "num": "16",
    "lo": "FT-2.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What is the purpose of Continuous Control Monitoring (CCM) in the Continuous Automated Compliance Validation (CACV) practice?",
    "options": [
      {
        "id": "a",
        "text": "To determine how regulatory changes will affect the code under development"
      },
      {
        "id": "b",
        "text": "To determine how compliance requirement changes will affect code that has been deployed"
      },
      {
        "id": "c",
        "text": "To determine if configuration drift has occurred in a deployed system"
      },
      {
        "id": "d",
        "text": "To determine if the automation is providing sufficient coverage of the identified regulations"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The goal of CCM is to monitor a deployed and compliant system to ensure it remains compliant in the event of post-deployment changes, such as environmental changes."
  },
  {
    "id": 17,
    "exam": "ASTQB",
    "num": "17",
    "lo": "FT-3.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is an example of a technical or operational risk in a financial system?",
    "options": [
      {
        "id": "a",
        "text": "Third-party service providers who are not meeting security requirements"
      },
      {
        "id": "b",
        "text": "Slow implementation of a legal requirement"
      },
      {
        "id": "c",
        "text": "Obfuscation of financial systems"
      },
      {
        "id": "d",
        "text": "Lack of an adequate automation framework"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Lack of an adequate automation framework. (The ASTQB answer sheet gives no further rationale — see syllabus section 3.1 for FT-3.1.)"
  },
  {
    "id": 18,
    "exam": "ASTQB",
    "num": "18",
    "lo": "FT-3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What are the two factors used to build the risk matrix for a financial system?",
    "options": [
      {
        "id": "a",
        "text": "Probability and impact"
      },
      {
        "id": "b",
        "text": "Security and performance"
      },
      {
        "id": "c",
        "text": "Compliance and regulations"
      },
      {
        "id": "d",
        "text": "Accuracy and error rate"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is the same for all systems, not just financial systems."
  },
  {
    "id": 19,
    "exam": "ASTQB",
    "num": "19",
    "lo": "FT-3.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "How does risk-based testing affect the order of test execution?",
    "options": [
      {
        "id": "a",
        "text": "The tests that cover the widest array of risks are executed first"
      },
      {
        "id": "b",
        "text": "The tests with the highest defect yield are executed more frequently than the others"
      },
      {
        "id": "c",
        "text": "The tests that address the elements with the highest risk are executed first"
      },
      {
        "id": "d",
        "text": "The tests that are the fastest to execute are run first"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The goal of risk-based testing is to target the testing to mitigate the highest-risk elements first."
  },
  {
    "id": 20,
    "exam": "ASTQB",
    "num": "20",
    "lo": "FT-3.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "How is the definition of test conditions affected by a risk-based approach to testing?",
    "options": [
      {
        "id": "a",
        "text": "The business workflows are defined and tested first"
      },
      {
        "id": "b",
        "text": "The identified high-risk areas are targeted by high-priority test conditions"
      },
      {
        "id": "c",
        "text": "The test data is defined first, and then the conditions to manipulate the data are defined"
      },
      {
        "id": "d",
        "text": "The reports and audit logs are targeted by high-priority test conditions"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The identified high-risk areas are targeted by high-priority test conditions. (The ASTQB answer sheet gives no further rationale — see syllabus section 3.3 for FT-3.3.)"
  },
  {
    "id": 21,
    "exam": "ASTQB",
    "num": "21",
    "lo": "FT-3.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "You have been executing test cases as a form of risk mitigation for a financial system. You have uncovered a risk in the software, but the project team has decided it does not need to be fixed. What type of risk mitigation is this?",
    "options": [
      {
        "id": "a",
        "text": "Avoidance"
      },
      {
        "id": "b",
        "text": "Mitigation by testing"
      },
      {
        "id": "c",
        "text": "Transfer"
      },
      {
        "id": "d",
        "text": "Acceptance"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This is an example of consciously accepting the risk."
  },
  {
    "id": 22,
    "exam": "ASTQB",
    "num": "22",
    "lo": "FT-4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a financial system that shows inaccuracies in payment information when payments are made in a currency different from the one in which the debt was incurred. When this happens, the payment is not converted, and the amount is applied as if it were in the currency of the debt. What type of problem is this?",
    "options": [
      {
        "id": "a",
        "text": "Quantity"
      },
      {
        "id": "b",
        "text": "Consistency"
      },
      {
        "id": "c",
        "text": "Reporting"
      },
      {
        "id": "d",
        "text": "Data loss"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a consistency issue because the data is not being translated correctly between currency types."
  },
  {
    "id": 23,
    "exam": "ASTQB",
    "num": "23",
    "lo": "FT-4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following can have an impact on financial forecasting models from data that is inconsistent or inaccurate?",
    "options": [
      {
        "id": "a",
        "text": "The system can be slow in generating the model"
      },
      {
        "id": "b",
        "text": "The data will be undecipherable"
      },
      {
        "id": "c",
        "text": "The users will be confused"
      },
      {
        "id": "d",
        "text": "The model can be misleading"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Because the input data is poor, the model can be misleading. The biggest problem is that B and C probably won’t occur because the user won’t know the data was bad."
  },
  {
    "id": 24,
    "exam": "ASTQB",
    "num": "24",
    "lo": "FT-4.2",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You are conducting data reconciliation for banking transactions conducted through an ATM. You have verified that the user’s identity is confirmed, that the proper data is displayed to them, and that they are able to either deposit money, withdraw money, or check their balance. What additional reconciliation should be tested?",
    "options": [
      {
        "id": "a",
        "text": "The triggering of all downstream workflows pertinent to the ATM transactions"
      },
      {
        "id": "b",
        "text": "The updating of the cash balance in the ATM"
      },
      {
        "id": "c",
        "text": "The application of the withdrawal limits for that particular ATM"
      },
      {
        "id": "d",
        "text": "The recording of the card usage for the ATM logs"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): For reconciliation testing, all the related processes must be tested as well to ensure that everything has been recorded and updated correctly."
  },
  {
    "id": 25,
    "exam": "ASTQB",
    "num": "25",
    "lo": "FT-4.2",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You work for a bank that has just acquired a bank in another country. You are concerned about the currency differences between the two banks. What type of reconciliation testing should you do to help ensure there are no issues in this area?",
    "options": [
      {
        "id": "a",
        "text": "Test to ensure there are no rounding errors in transaction reporting"
      },
      {
        "id": "b",
        "text": "Test to verify that batch processing occurs at the same time in both countries"
      },
      {
        "id": "c",
        "text": "Test to ensure the currency is transformed consistently and the settlement values are aligned"
      },
      {
        "id": "d",
        "text": "Test to verify the reporting is accurate for both banks using a neutral currency value"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): In this case, the risk is in the currency transformation, both in timing and accuracy."
  },
  {
    "id": 26,
    "exam": "ASTQB",
    "num": "26",
    "lo": "FT-4.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Your system handles private data that must be protected. Unfortunately, there is not enough time to do exhaustive testing of all the data handling to ensure there are no exposures. What method should you apply first to ensure the most important data is always protected?",
    "options": [
      {
        "id": "a",
        "text": "Apply risk-based testing to address the highest risk areas first"
      },
      {
        "id": "b",
        "text": "Ensure that masking is in place for all the data all the time"
      },
      {
        "id": "c",
        "text": "Concentrate on access controls since that is likely the biggest area of vulnerability"
      },
      {
        "id": "d",
        "text": "Check the logs and output files to ensure no unsecured data is being reported"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): In this case, you don’t have enough time to do everything, so you are better to concentrate on the highest-risk areas with the limited time you have. B is probably not feasible since only the private data needs to be masked and only when it’s viewable. C, and D should also be done, but time might not allow it which is why you need risk- based testing to prioritize."
  },
  {
    "id": 27,
    "exam": "ASTQB",
    "num": "27",
    "lo": "FT-4.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a system that manages users’ credit cards. Currently the card numbers, expiration dates, and CVV are displayed through the user interface and in the transaction logs. You are concerned that the testers should not have access to this information. What should be done to protect this data?",
    "options": [
      {
        "id": "a",
        "text": "It should be eliminated from the system so there is no risk of exposure"
      },
      {
        "id": "b",
        "text": "It should be masked"
      },
      {
        "id": "c",
        "text": "It should be anonymized"
      },
      {
        "id": "d",
        "text": "It should be scrambled with a hashing algorithm"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The data should be masked. There is no need to anonymize it because it can still belong to the right customer; the numbers (or parts of the numbers) need to be hidden."
  },
  {
    "id": 28,
    "exam": "ASTQB",
    "num": "28",
    "lo": "FT-5.1",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are testing a new version of a mortgage loan application. The application allows people to apply for loans and returns a quick approval or denial based on the information they enter. It is imperative that the decision made by the new application matches the decision made by the previous system. The decision has been made to run the systems in parallel to compare the outputs to ensure the new application is functioning correctly. What test technique should be used to control the inputs and verify the outputs?",
    "options": [
      {
        "id": "a",
        "text": "Equivalence partitioning"
      },
      {
        "id": "b",
        "text": "Decision table testing"
      },
      {
        "id": "c",
        "text": "Calculation testing"
      },
      {
        "id": "d",
        "text": "Back-to-back testing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This is an example of back-to-back testing where the legacy system and the new system are run on the same data, and the outputs are compared."
  },
  {
    "id": 29,
    "exam": "ASTQB",
    "num": "29",
    "lo": "FT-5.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are working on a system that supports remote terminals for credit card transactions. The system has failed during a Christmas sale, causing an hour of downtime and many unhappy customers. What type of failure is this?",
    "options": [
      {
        "id": "a",
        "text": "Scalability"
      },
      {
        "id": "b",
        "text": "Portability"
      },
      {
        "id": "c",
        "text": "Data integrity"
      },
      {
        "id": "d",
        "text": "Accessibility"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is a problem with the system’s inability to scale as the load increases. D is also a concern, but the problem was caused by scalability issues."
  },
  {
    "id": 30,
    "exam": "ASTQB",
    "num": "30",
    "lo": "FT-5.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are working for a financial trading company. A new ruling has just been made that everyone in the company must change their password every Monday morning as soon as they start work. The first week this rule was in place, the system crashed at 8:05 am. What type of problem would be most likely to cause this crash?",
    "options": [
      {
        "id": "a",
        "text": "Technical debt"
      },
      {
        "id": "b",
        "text": "Concurrency defects"
      },
      {
        "id": "c",
        "text": "Usability limitations"
      },
      {
        "id": "d",
        "text": "Data integrity violations"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a problem with a high volume of concurrent transactions when everyone changed their password."
  },
  {
    "id": 31,
    "exam": "ASTQB",
    "num": "31",
    "lo": "FT-5.3",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are working on a credit card acceptance system that currently supports only Visa and Mastercard. In the next release, American Express will also be supported. It is expected that this will increase the volume of transactions by at least 30%. What type of testing do you need to conduct to ensure the system will be ready for this increase?",
    "options": [
      {
        "id": "a",
        "text": "Load testing"
      },
      {
        "id": "b",
        "text": "Stress testing"
      },
      {
        "id": "c",
        "text": "Failover testing"
      },
      {
        "id": "d",
        "text": "Load balancing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Load testing is what is needed here because the load on the system is expected to increase."
  },
  {
    "id": 32,
    "exam": "ASTQB",
    "num": "32",
    "lo": "FT-5.4",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "When data encryption algorithms are tested and their application verified, what type of testing is being conducted?",
    "options": [
      {
        "id": "a",
        "text": "Performance"
      },
      {
        "id": "b",
        "text": "Calculation"
      },
      {
        "id": "c",
        "text": "Security"
      },
      {
        "id": "d",
        "text": "Availability"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is done as part of security testing."
  },
  {
    "id": 33,
    "exam": "ASTQB",
    "num": "33",
    "lo": "FT-5.4",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What type of testing is used to ensure that the service provided by a system is continuous and can recover under adverse conditions?",
    "options": [
      {
        "id": "a",
        "text": "Availability"
      },
      {
        "id": "b",
        "text": "Recovery"
      },
      {
        "id": "c",
        "text": "Security"
      },
      {
        "id": "d",
        "text": "Infrastructure"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Availability. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.4 for FT-5.4.)"
  },
  {
    "id": 34,
    "exam": "ASTQB",
    "num": "34",
    "lo": "FT-5.5",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How can AI assistants help testers with API testing?",
    "options": [
      {
        "id": "a",
        "text": "They can analyze the API and determine the test conditions"
      },
      {
        "id": "b",
        "text": "They can build virtualized services"
      },
      {
        "id": "c",
        "text": "They can set up testing environments to support volume testing"
      },
      {
        "id": "d",
        "text": "They can simulate the software on either side of the API to allow error checking"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): They can analyze the API and determine the test conditions. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.5 for FT-5.5.)"
  },
  {
    "id": 35,
    "exam": "ASTQB",
    "num": "35",
    "lo": "FT-5.5",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How can AI help financial institutions with their compliance testing?",
    "options": [
      {
        "id": "a",
        "text": "It can summarize regulations and compliance requirements into test conditions"
      },
      {
        "id": "b",
        "text": "It can create test automation that will ensure compliance based on industry standards"
      },
      {
        "id": "c",
        "text": "It can review reported defects and generate code to further test the reported areas"
      },
      {
        "id": "d",
        "text": "It can report any failures to the regulatory agencies to ensure priority resolution"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): It can review the applicable regulations and pick out the test conditions that need to be met in the software under test. B is not correct because it won’t be able to just generate test automation for compliance – it would have to understand the software under test. C is not correct because more code isn’t needed at this point. The defect is already identified. D is not correct because the compliance issues should be resolved internally."
  },
  {
    "id": 36,
    "exam": "ASTQB",
    "num": "36",
    "lo": "FT-6.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "How can test automation improve the testing efficiency when complex calculations must be tested?",
    "options": [
      {
        "id": "a",
        "text": "It can eliminate manual errors that can affect the test results"
      },
      {
        "id": "b",
        "text": "It can conduct a quick regression test"
      },
      {
        "id": "c",
        "text": "It can simulate peak-load scenarios and run consistently across multiple environments"
      },
      {
        "id": "d",
        "text": "It can verify compliance with standards and create auditable results"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Because the test automation will always execute the same steps in the same way, it can consistently and correctly complete complex steps."
  },
  {
    "id": 37,
    "exam": "ASTQB",
    "num": "37",
    "lo": "FT-6.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "How can test automation improve the testing efficiency for performance testing across complex interrelated systems?",
    "options": [
      {
        "id": "a",
        "text": "It can eliminate manual errors that can affect the test results"
      },
      {
        "id": "b",
        "text": "It can conduct a quick regression test"
      },
      {
        "id": "c",
        "text": "It can simulate peak-load scenarios and run consistently across multiple environments"
      },
      {
        "id": "d",
        "text": "It can verify compliance with standards and create auditable results"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): It can simulate peak-load scenarios and run consistently across multiple environments. (The ASTQB answer sheet gives no further rationale — see syllabus section 6.1 for FT-6.1.)"
  },
  {
    "id": 38,
    "exam": "ASTQB",
    "num": "38",
    "lo": "FT-6.2",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You are testing a system that accepts applications for mortgage loans and calculates rates based on a number of parameters. Because the calculations are so complex and frequently changing, you have automated scripts to do the calculations and store the results in a table. This table is then used by the larger set of scripts to determine if the software is returning the correct values. What is the role of the table in the overall automation?",
    "options": [
      {
        "id": "a",
        "text": "Regression test"
      },
      {
        "id": "b",
        "text": "End-to-end automation"
      },
      {
        "id": "c",
        "text": "Real-time data"
      },
      {
        "id": "d",
        "text": "Test oracle"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This piece of the calculation logic is serving as the test oracle for the larger end-to-end test by providing the correct output for the mortgage calculation."
  },
  {
    "id": 39,
    "exam": "ASTQB",
    "num": "39",
    "lo": "FT-6.3",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Why is automated logging particularly important for test automation in financial applications?",
    "options": [
      {
        "id": "a",
        "text": "It is frequently required to repeat steps in a process"
      },
      {
        "id": "b",
        "text": "It is needed to know where to restart the test in the event of a catastrophic failure"
      },
      {
        "id": "c",
        "text": "It is required to meet some regulatory and audit requirements"
      },
      {
        "id": "d",
        "text": "It proves due diligence to the developers and operations staff"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): It is required to meet some regulatory and audit requirements. (The ASTQB answer sheet gives no further rationale — see syllabus section 6.3 for FT-6.3.)"
  },
  {
    "id": 40,
    "exam": "ASTQB",
    "num": "40",
    "lo": "FT-6.4",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "In addition to working with masked or anonymized data, what other security precaution can make test automation more challenging for a mobile financial application than a mobile game?",
    "options": [
      {
        "id": "a",
        "text": "Usability requirements"
      },
      {
        "id": "b",
        "text": "Encryption of the traffic between the device and the backend system"
      },
      {
        "id": "c",
        "text": "Device variability and accountability"
      },
      {
        "id": "d",
        "text": "Network stability and connectivity"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): You are unlikely to have encrypted traffic for a mobile game, but very likely to have it for a financial system, and this can complicate test automation. A, C, and D are applicable to both types of applications."
  }
];
