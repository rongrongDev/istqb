// CT-PT (2018) — two official sample exams, parsed from the PDFs in trainings/:
//   exam "A"     = ISTQB CT-PT Sample Exam A v1.3: 40 questions, 40 points. Correct answers, LOs, K-levels and
//                  per-option rationales from the matching Sample-Exam-Answers PDF; answer-key table and
//                  per-question answers cross-checked on import.
//   exam "ASTQB" = ASTQB Performance Testing sample exam (2019): 40 points / 26 to pass / 60 min in the source.
//                  Q27 (pick the correct load-profile chart) is omitted because its four charts are images that
//                  can't be reproduced as text — 39 questions remain. The shared "Base Scenario" is repeated in
//                  each question that refers to it, and Q21/Q28 carry the preceding question's scenario.
//                  K-levels for this set come from the syllabus LO table (the ASTQB key lists LOs only).
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "PTFL-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an important principle in performance testing?",
    "options": [
      {
        "id": "a",
        "text": "The tests should be easy to create and understand"
      },
      {
        "id": "b",
        "text": "The test results must be reproducible when the system under test is unchanged"
      },
      {
        "id": "c",
        "text": "The tests should be executed in the production environment to provide the most accurate results"
      },
      {
        "id": "d",
        "text": "The test results should match the stakeholders’ expectations for system performance"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because tests are sometimes quite complex to create\n\nCORRECT (b): Reproducible results are a key factor in performance test execution. The results should be statistically identical when run on the same unchanged system\n\nWRONG (c): Because tests generally should not be run in the actual production environment, but rather a representative equivalent\n\nWRONG (d): Because the test results may show that the system does not meet expectations."
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "PTFL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is the best description of spike testing?",
    "options": [
      {
        "id": "a",
        "text": "It focuses on the ability of the system to handle loads that are gradually increased to reach the expected maximum"
      },
      {
        "id": "b",
        "text": "It focuses on the ability of the system to handle loads that are at or beyond the expected peak load"
      },
      {
        "id": "c",
        "text": "It focuses on the ability of the system to meet future efficiency requirements"
      },
      {
        "id": "d",
        "text": "It focuses on the ability of the system to respond to quick and extreme changes in load"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Is a description of load testing\n\nWRONG (b): Is a description of stress testing\n\nWRONG (c): Is a description of scalability testing\n\nCORRECT (d): This is a description of spike testing"
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "PTFL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is the best description of load testing?",
    "options": [
      {
        "id": "a",
        "text": "It focuses on the ability of the system to handle loads that are gradually increased to reach the expected maximum"
      },
      {
        "id": "b",
        "text": "It focuses on the ability of the system to handle loads that are at or beyond the expected peak load"
      },
      {
        "id": "c",
        "text": "It focuses on the ability of the system to meet future efficiency requirements"
      },
      {
        "id": "d",
        "text": "It focuses on the ability of the system to respond to quick and extreme changes in load"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is a description of load testing\n\nWRONG (b): Is a description of stress testing\n\nWRONG (c): Is a description of scalability testing\n\nWRONG (d): Is a description of spike testing"
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "PTFL-1.3.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following performance testing activities should occur during unit testing?",
    "options": [
      {
        "id": "a",
        "text": "Testing end-to-end behavior under various load conditions"
      },
      {
        "id": "b",
        "text": "Testing data flows and workflows across interfaces"
      },
      {
        "id": "c",
        "text": "Testing key use cases and workflows using a top-down approach"
      },
      {
        "id": "d",
        "text": "Testing to evaluate resource utilization and potential bottlenecks"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Because this occurs at system or SIT\n\nWRONG (b): Because this occurs during SIT\n\nWRONG (c): Because this is done during integration testing\n\nCORRECT (d): While this can occur at any time, it should start with unit testing"
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "PTFL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "When is it appropriate to generate load via the application’s APIs?",
    "options": [
      {
        "id": "a",
        "text": "When a large number of testers are available who can represent the real users"
      },
      {
        "id": "b",
        "text": "When testing must be conducted at the communications protocol level"
      },
      {
        "id": "c",
        "text": "When the UI is likely to change but the transactions must be processed as if they were created through the UI"
      },
      {
        "id": "d",
        "text": "When only small numbers of test instances are available"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because this is crowd testing, and these testers would be using the real UI\n\nWRONG (b): Because the communications protocol level is one level below the API level\n\nCORRECT (c): Testing through the API makes the most sense when the UI is likely to change, but the full communication to and from the UI must be tested\n\nWRONG (d): Because many test instances can be created with API testing"
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "PTFL-1.5.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "If you have an application that has a memory leak, what is the likely result you will see during performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Response time will be consistently slow"
      },
      {
        "id": "b",
        "text": "Response time will remain acceptable, but the error handling will degrade"
      },
      {
        "id": "c",
        "text": "Response time will be slow, but only under heavy loads"
      },
      {
        "id": "d",
        "text": "Response time will degrade over time"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Is an indication of underlying performance issues such as bad design, under-powered hardware, network latency, etc.\n\nWRONG (b): Is an indication of resource pool or queue or stack issues as well as invalid timeout settings\n\nWRONG (c): Is an indication that some of the resources may become saturated, but only at high loads\n\nCORRECT (d): With a memory leak, response time will degrade over time (the time length is unknown though until you test it)"
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "PTFL-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a true statement regarding tracking metrics for network latency during a performance test?",
    "options": [
      {
        "id": "a",
        "text": "High latency could indicate a network bandwidth problem that could negatively impact performance"
      },
      {
        "id": "b",
        "text": "Low latency could indicate a network bandwidth problem that could negatively impact performance"
      },
      {
        "id": "c",
        "text": "Network latency is difficult to track and should not be included in the performance metrics"
      },
      {
        "id": "d",
        "text": "Network latency is too variable to be useful during performance tuning"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): A high latency means that there are delays occurring in the network which may be due to inadequate bandwidth\n\nWRONG (b): Because low latency is a good thing\n\nWRONG (c): Because this is trackable with the right tools\n\nWRONG (d): Because if there is variability, that needs to be understood as part of the performance tests"
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "PTFL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Should performance test results be aggregated?",
    "options": [
      {
        "id": "a",
        "text": "Yes, this gives a better overall picture of the performance of the system and helps to identify trends"
      },
      {
        "id": "b",
        "text": "Yes, this is the best way to focus on the outliers in the performance metrics"
      },
      {
        "id": "c",
        "text": "No, the results should be analyzed individually so that all variations are understood"
      },
      {
        "id": "d",
        "text": "No, the results from each test should be reported and tracked separately"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Aggregated results help to provide the big picture and to observe consistent trends. Aggregating the results helps to identify and understand the importance of outliers and to know which ones interesting vs are just test aberrations\n\nWRONG (b): Because aggregated results will eliminate the information on the outliers\n\nWRONG (c): Because aggregation allows you to see the big picture rather than focusing on the individual results which may be due to transient system noise. It is unlikely to ever reach the point where “all” variations are understood\n\nWRONG (d): Because this type of reporting will be too difficult for stakeholders to understand and may focus on the highly unlikely situations"
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "PTFL-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "In what way are log analysis tools helpful for collecting metrics?",
    "options": [
      {
        "id": "a",
        "text": "They monitor the systems while the performance tests are conducted and report on the behavior during the tests"
      },
      {
        "id": "b",
        "text": "They create the system load and monitor the system performance"
      },
      {
        "id": "c",
        "text": "They scan the various server logs and compile metrics for occurrences that were recorded during the test execution"
      },
      {
        "id": "d",
        "text": "They write the performance results to the server logs for later manual analysis"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): As these are general system monitoring tools\n\nWRONG (b): As these are performance testing tools\n\nCORRECT (c): The log analysis tools scan the server logs for particular error types (high usage, memory errors, etc.) and report on those\n\nWRONG (d): Because the performance test results are not written to the logs, rather the system activities during the performance tests are written to the logs"
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "PTFL-2.4.1",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a failure that would typically be found by conducting a spike test?",
    "options": [
      {
        "id": "a",
        "text": "The system performance gradually degrades"
      },
      {
        "id": "b",
        "text": "The system provides inconsistent responses to errors"
      },
      {
        "id": "c",
        "text": "The system handles a sudden burst of activity, but cannot resume a steady state"
      },
      {
        "id": "d",
        "text": "The system performs well for the expected load, but cannot scale to a larger load"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): As this is a result of an endurance test\n\nWRONG (b): Because this is an example of resource degradation over time\n\nCORRECT (c): This is a description of a failure that has resulted from a spike test.\n\nWRONG (d): Because this is the result of a scalability test"
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "PTFL-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "When applying the principal performance testing activities, when should risk identification and analysis occur?",
    "options": [
      {
        "id": "a",
        "text": "Test planning"
      },
      {
        "id": "b",
        "text": "Test analysis and design"
      },
      {
        "id": "c",
        "text": "Test implementation and execution"
      },
      {
        "id": "d",
        "text": "Test closure"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Risk identification and analysis is done at the test planning stage. This information is then used for the analysis and design of the tests\n\nWRONG (b): Because this is too late in the process\n\nWRONG (c): Because this is too late in the process\n\nWRONG (d): Because this is too late in the process"
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "PTFL-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "When applying the principal performance testing activities, when should the test cases be ordered into performance test procedures?",
    "options": [
      {
        "id": "a",
        "text": "Test planning"
      },
      {
        "id": "b",
        "text": "Test analysis and design"
      },
      {
        "id": "c",
        "text": "Test implementation and execution"
      },
      {
        "id": "d",
        "text": "Test closure"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because this is when the test cases are planned and designed\n\nWRONG (b): Because this is when the test cases are planned and designed\n\nCORRECT (c): This should occur during the test implementation and execution activities\n\nWRONG (d): Because this is too late"
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Consider the following technical environments:\n\n1. Single computer\n2. Multi-tier system\n3. Distributed\n4. Virtualized\n5. Dynamic/Cloud-based\n6. Client/Server and Browser-based\n7. Mobile\n8. Embedded\n9. Mainframe\n\nWhich of these is most likely to have a performance risk due to connectivity issues?",
    "options": [
      {
        "id": "a",
        "text": "2, 3"
      },
      {
        "id": "b",
        "text": "7, 8"
      },
      {
        "id": "c",
        "text": "5, 6, 7, 9"
      },
      {
        "id": "d",
        "text": "2, 4, 5, 8"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because these environments are not prone to connection dropping b) B is correct according to the syllabus. Mobile and embedded environments are particularly prone to connectivity issues particularly when embedded software is used in the IoT devices\n\nWRONG (c): Because other than #7, the other environments are not prone to connection dropping\n\nWRONG (d): Because these environments are not prone to connection dropping"
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Consider the following technical environments:\n\n1. Virtualized\n2. Dynamic/Cloud-based\n3. Client/Server and Browser-based\n4. Mobile\n5. Embedded\n6. Mainframe\n\nWhich of these is most likely to have a performance risk due to memory leaks?",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 3, 6"
      },
      {
        "id": "b",
        "text": "2, 3, 4, 5"
      },
      {
        "id": "c",
        "text": "1, 2, 4, 6"
      },
      {
        "id": "d",
        "text": "1, 3, 4, 5"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\nWRONG (c).\n\nCORRECT (d): The virtualized environment uses shared resources across different applications, including memory. The dynamic/cloud-based environment are designed to dynamically scale, so while memory leaks may occur, they are less of a risk because the environment will scale to compensate. Client/Server and browser-based environments are prone to memory leaks, particularly since a lot of this code is written in C and C++. Mobile environments are prone to leakage and are particularly at risk due to the limited available memory. The same is true of the embedded environments (and these also tend to be written in languages that have less protection against leaks). Mainframes tend to run older code, often written in the higher-level languages that provide their own memory management"
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "If performance testing is being conducted for software that is written in C++, what do you need to monitor that would not be a concern if the software were written in Python?",
    "options": [
      {
        "id": "a",
        "text": "Memory use"
      },
      {
        "id": "b",
        "text": "Network latency"
      },
      {
        "id": "c",
        "text": "Connectivity"
      },
      {
        "id": "d",
        "text": "Batch processing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): C and C++ require the programmer to do their own memory management which sometimes results in memory leaks (where memory is allocated, but not de-allocated)\n\nWRONG (b): Would have the same issues regardless of the language used\n\nWRONG (c): Would have the same issues regardless of the language used\n\nWRONG (d): Would have the same issues regardless of the language used"
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "PTFL-3.3.1",
    "level": "K4",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nGiven this information, when is the best time in the project to analyze and assess the performance risks?",
    "options": [
      {
        "id": "a",
        "text": "During the requirements phase and again just prior to executing the performance tests"
      },
      {
        "id": "b",
        "text": "After design but prior to coding"
      },
      {
        "id": "c",
        "text": "During system testing and again prior to the performance tests"
      },
      {
        "id": "d",
        "text": "Repeatedly throughout the requirements, development, and performance testing"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Because it ignores looking at the risks during development\n\nWRONG (b): Because it leaves out the requirements and development and at the completion of development\n\nWRONG (c): Because it leaves out the requirements and development options for analysis\n\nCORRECT (d): Since performance is critical, the risks must be analyzed as early as possible and then repeatedly as the system is assembled since risks may change both in impact and likelihood"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "PTFL-3.4.1",
    "level": "K4",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nWhat is the best way to address the performance testing for the response time?",
    "options": [
      {
        "id": "a",
        "text": "Test from the UI with the full data set loaded to ensure the response time will be adequate when the database is loaded"
      },
      {
        "id": "b",
        "text": "Test via the web services at the API level to ensure access to the data is fast enough without having the testing complicated by the UI"
      },
      {
        "id": "c",
        "text": "Conduct a technical review of the database implementation and conduct a performance test from the UI with the full database loaded"
      },
      {
        "id": "d",
        "text": "Conduct a network assessment to ensure there are no latency issues between the database server and the web servers, then test with a network scanner to ensure no collisions are occurring that might cause performance delays"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because this leaves out the static testing\n\nWRONG (b): Because this would bypass any issues that might occur at the UI end and does not consider the database loading\n\nCORRECT (c): The best way to do the testing is to first do a technical analysis because this can be done at the design time. Once implemented, full testing will be needed to verify that the solution does indeed deliver the required performance\n\nWRONG (d): Because the network is less likely an issue regarding the data handling for such a large amount of data"
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "PTFL-4.1.1",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nWhich of the following is a technical objective for performance that could be applicable to this project?",
    "options": [
      {
        "id": "a",
        "text": "The response time must be within three seconds from the time the request is sent when there are 100 concurrent users making similar requests"
      },
      {
        "id": "b",
        "text": "The system must be able to scale to 10 million patient records with no degradation in the performance"
      },
      {
        "id": "c",
        "text": "The system must perform at or above the level of the legacy system when handling a similar load and responding to a similar request"
      },
      {
        "id": "d",
        "text": "The response time must remain the same when the disaster recovery system is in use rather than the primary system and the switchover must cause no discernable downtime"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because this is a user-based objective\n\nCORRECT (b): Scalability is a technical objective for performance\n\nWRONG (c): Because this is also a user-based objective and not a very clear one at that\n\nWRONG (d): Because this is primarily a robustness test rather than a performance test"
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "PTFL-4.1.2",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nYou have been asked to write a performance test plan for this project. Which of the following is the information you will need to deal with the most critical performance objective?",
    "options": [
      {
        "id": "a",
        "text": "Who can access what data and how often will they do it"
      },
      {
        "id": "b",
        "text": "How is user access authenticated and authorized"
      },
      {
        "id": "c",
        "text": "Where will the data be stored and how much storage is available"
      },
      {
        "id": "d",
        "text": "What is the expected use of the data after it has been presented to the user"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Because data retrieval time is critical to the project, you need to know who can access that data (so you can get the user profiles created), what data they will access (so you can be sure you have the right data available) and how often will they access it (so you can set up an operational profile)\n\nWRONG (b): Because this is more related to security than performance testing and is not the most critical performance objective\n\nWRONG (c): Because the data storage may be something to investigate if the data retrieval proves slow, but we do not need to know it to conduct the tests\n\nWRONG (d): Because that is after retrieval and the scenario just discusses presenting the information to the requestor"
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "PTFL-4.1.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nYou have been asked to prepare a presentation for the business stakeholders regarding your plan for performance testing. Which of the following is an example set of information that should be shared with these stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "Once configured, the performance test system will require data loading. Once loaded, we will next proceed to running a small set of sample scripts to verify the output. When those succeed, we will proceed with the performance test script which ramps up users at a rate of 10 per minute until we reach the target number of concurrent users. This load will then be maintained for 2 hours"
      },
      {
        "id": "b",
        "text": "The performance test system will cost $240,000 which will include the hardware and setup. This system will allow us to create a test system that is representative of the production system and will allow us to simulate production-like conditions"
      },
      {
        "id": "c",
        "text": "Because the cost of a performance test system is prohibitive, we will conduct the performance testing in the production environment using live data"
      },
      {
        "id": "d",
        "text": "The product risks include data contention issues, data access issues, locking issues that will reject concurrent requests, network bandwidth constraints, data seek errors, data seek slowdowns or bottlenecks, and difficulty for the user in processing the returned data"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because this is information that should be shared with the technical stakeholders\n\nCORRECT (b): This is information that should be conveyed to the business stakeholders\n\nWRONG (c): Because it is incomplete. If testing will be conducted in production, mitigation plans must also be made so that any impact to production is understood\n\nWRONG (d): Because this is a list of risks but does not include a list of how the tests will help mitigate these risks"
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "PTFL-4.1.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nYou have been asked to prepare a presentation for the technical stakeholders regarding your plan for performance testing. Which of the following is an example set of information that should be shared with these stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "Once configured, the performance test system will require data loading. Once loaded, we will next proceed to running a small set of sample scripts to verify the output. When those succeed, we will proceed with the performance test script which ramps up users at a rate of 10 per minute until we reach the target number of concurrent users. This load will then be maintained for 2 hours"
      },
      {
        "id": "b",
        "text": "The performance test system will cost $240,000 which will include the hardware and setup. This system will allow us to create a test system that is representative of the production system and will allow us to simulate production-like conditions"
      },
      {
        "id": "c",
        "text": "Because the cost of a performance test system is prohibitive, we will conduct the performance testing in the production environment using live data"
      },
      {
        "id": "d",
        "text": "The product risks include data contention issues, data access issues, locking issues that will reject concurrent requests, network bandwidth constraints, data seek errors, data seek slowdowns or bottlenecks, and difficulty for the user in processing the returned data"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is information that should be conveyed to the technical stakeholders because it shows how the tests will be conducted\n\nWRONG (b): Because this is information that should be shared with the business stakeholders\n\nWRONG (c): Because it is incomplete. If testing will be conducted in production, mitigation plans must also be made so that any impact to production is understood\n\nWRONG (d): Because this is a list of risks but does not include a list of how the tests will help mitigate these risks"
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "PTFL-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If your performance test is testing the speed of the response of a web service, which protocol is being used?",
    "options": [
      {
        "id": "a",
        "text": "ODBC"
      },
      {
        "id": "b",
        "text": "HTTP"
      },
      {
        "id": "c",
        "text": "REST"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Is an example of a database protocol\n\nWRONG (b): Is an example of a web protocol\n\nCORRECT (c): Is an example of a web service protocol\n\nWRONG (d): Is an example of a network protocol"
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "PTFL-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If your performance test is testing the speed with which database requests are sent and received, which protocol is being used?",
    "options": [
      {
        "id": "a",
        "text": "ODBC"
      },
      {
        "id": "b",
        "text": "HTTP"
      },
      {
        "id": "c",
        "text": "REST"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is an example of a database protocol\n\nWRONG (b): Is an example of a web protocol\n\nWRONG (c): Is an example of a web service protocol\n\nWRONG (d): Is an example of a network protocol"
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "PTFL-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If you are testing from the UI and you need to simulate the amount of time it will take a real user to read a prompt and enter data in a field, what should you implement in your test script?",
    "options": [
      {
        "id": "a",
        "text": "Wait time"
      },
      {
        "id": "b",
        "text": "Think time"
      },
      {
        "id": "c",
        "text": "Latency time"
      },
      {
        "id": "d",
        "text": "Reading time"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): This is referred to as think time\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "PTFL-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the value of nesting transactions for performance testing?",
    "options": [
      {
        "id": "a",
        "text": "It supports the concept of parent and child transactions"
      },
      {
        "id": "b",
        "text": "It allows the tester to measure a series of discrete transactions"
      },
      {
        "id": "c",
        "text": "It speeds the reporting time for the performance results"
      },
      {
        "id": "d",
        "text": "It bypasses the network communication time by sending the transaction directly to the server that will process it"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because parent and child transactions may not accomplish anything meaningful in terms of system usage\n\nCORRECT (b): The discrete transactions can be nested together to provide response information for a series of transactions that would normally be performed together while still allowing measurement of the discrete transactions as well\n\nWRONG (c): Because it will not affect the reporting time, particularly if the discrete transactions are tracked as well. It may increase reporting time\n\nWRONG (d): Because this has nothing to do with bypassing network communications"
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "PTFL-4.2.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally view 6 patient records for each access. They will print those patient records to be retained in the patient’s file at the hospital. They will also enter notes into the database regarding the patient’s treatment. For new patients, another user will enter the information into the system.\n\nGiven this information, what is missing to construct the operational profile for this user class?",
    "options": [
      {
        "id": "a",
        "text": "No interviews were conducted to better understand the user class"
      },
      {
        "id": "b",
        "text": "The number of users across the system for this role is not known"
      },
      {
        "id": "c",
        "text": "Batch processing of the patient upload information has not been considered"
      },
      {
        "id": "d",
        "text": "Other system components that may be required (x-ray upload, lab results reporting) have not been considered"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Is not needed for this instance because we already have the information\n\nCORRECT (b): At this point, we need to know how many users of this type will be accessing the system. We know the concurrency because we can take the number of users and the accesses per shift to figure this out\n\nWRONG (c): Considerations for setting up the load profile but not needed for the operational profile\n\nWRONG (d): Considerations for setting up the load profile but not needed for the operational profile"
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "PTFL-4.2.4",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally update 6 patient records for each access by entering notes into the database regarding the patient’s treatment. They will print those patient records to be retained in the patient’s file at the hospital. For new patients, another user will enter the information into the system.\n\nThe shifts these doctors work is: 7am – 5pm (day shift), 2pm – midnight (evening shift), 9pm to 7am (night shift). There are 1000 doctors that work the day shift, 1000 that work the evening shift, and 500 that work the night shift. Assuming an even distribution of the system access across a shift, which of the following is the proper load profile for these doctors?",
    "options": [
      {
        "id": "a",
        "text": "6250 transaction per hour"
      },
      {
        "id": "b",
        "text": "Steady ramp-up increasing the transactions by 15,000 per hour starting at 15,000 transactions and ending at 150,000 transactions"
      },
      {
        "id": "c",
        "text": "Stepped ramp-up with 7 hours at 21,000 transactions, 3 hours at 27,000 transactions, 3 hours at 36,000 transactions, 11 hours at 66,000 transactions"
      },
      {
        "id": "d",
        "text": "Separate tests for 120,000 transactions per hour and 30,000 transactions per hour"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Total transactions should be 2500 doctors x 10 accesses x 6 record updates: 150,000 transactions per day. Hourly load: 7 hours of 500 doctors = 21,000 transactions 11 hours of 1000 doctors = 66,000 transactions 3 hours of 1500 doctors = 27,000 transactions 3 hours of 2000 doctors = 36,000 transactions\n\nDoctors per hour in 24-hour clock: 1:00 - 500 2:00 - 500 3:00 - 500 4:00 - 500 5:00 - 500 6:00 - 500 7:00 - 1000 8:00 - 1000 9:00 – 1000 10:00 - 1000 11:00 - 1000 12:00 - 1000 13:00 - 1000 14:00 - 2000 15:00 - 2000 16:00 - 2000 17:00 - 1000 18:00 - 1000 19:00 - 1000 20:00 - 1000 21:00 - 1500 22:00 - 1500 23:00 - 1500 24:00 – 500\n\nThus:\nWRONG (a).\nWRONG (b).\nCORRECT (c).\nWRONG (d)."
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "PTFL-4.2.5",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally update 6 patient records for each access by entering notes into the database regarding the patient’s treatment. They will print those patient records to be retained in the patient file at the hospital. For new patients, another user will enter the information into the system.\n\nThe shifts these doctors work is: 7am – 5pm (day shift), 2pm – midnight (evening shift), 9pm to 7am (night shift). There are 1000 doctors that work the day shift, 1000 that work the evening shift, and 500 that work the night shift.\n\nAssuming an even distribution of the system access across a shift, what is the highest number of concurrent accesses on the system from these doctors?",
    "options": [
      {
        "id": "a",
        "text": "1,000"
      },
      {
        "id": "b",
        "text": "2,000"
      },
      {
        "id": "c",
        "text": "6,000"
      },
      {
        "id": "d",
        "text": "12,000"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): The highest concurrent usage is when 2000 doctors are working from 2:00-5:00 in the afternoon. Each doctor has only one access per hour according to the question and that access has up to 6 updates\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "PTFL-4.2.6",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is one of the advantages to conducting performance tests at the protocol level?",
    "options": [
      {
        "id": "a",
        "text": "It is the easiest method for manual scripting"
      },
      {
        "id": "b",
        "text": "It is the best way to evaluate the total user experience"
      },
      {
        "id": "c",
        "text": "It is scalable because the client is bypassed"
      },
      {
        "id": "d",
        "text": "It is the best way to handle data correlation"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because this scripting can be quite difficult without using a tool to capture the protocol level communication\n\nWRONG (b): Because the UI is bypassed\n\nCORRECT (c): This is a scalable method because it bypasses the UI so you can run many of these tests at the same time without requiring the client\n\nWRONG (d): Because data correlation is more difficult because the correlation done at the UI is bypassed"
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "PTFL-4.2.6",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the best method to use for verifying that a performance test script added users to a system?",
    "options": [
      {
        "id": "a",
        "text": "Check the error output from the script to verify no errors occurred"
      },
      {
        "id": "b",
        "text": "Manually check via an application to see if the users were created"
      },
      {
        "id": "c",
        "text": "Use the script to verify through the application that the users were created"
      },
      {
        "id": "d",
        "text": "Use the script to verify that the users exist in the database"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Because no errors do not mean that it worked – it could just mean that the error handling is also broken\n\nWRONG (b): Because this could be a very time-consuming approach\n\nWRONG (c): Because the application may have a defect that causes it to not find the new users\n\nCORRECT (d): Scripts should contain their own checks that the process has worked and verifying via the database directly is a more efficient way to do it (and more maintainable) than having the script do the verification through the application (which may also be wrong) as this adds to the maintenance requirements of the script"
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "PTFL-4.2.7",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally view 6 patient records for each access. They will print those patient records to be retained in the patient file at the hospital. They will also enter notes into the database regarding the patient’s treatment. For new patients, another user will enter the information into the system.\n\nYou have created a performance script that logs in as a doctor (from a list of doctors) and then performs the patient look ups. When you run the script, the login works, but then you are not able to perform the patient look ups. You are getting an error that indicates the user is not known to the system. What is likely your problem?",
    "options": [
      {
        "id": "a",
        "text": "The script is not capturing and re-using the system identifier for the user"
      },
      {
        "id": "b",
        "text": "You cannot use the same user to log in and do the patient look ups because the user has expired"
      },
      {
        "id": "c",
        "text": "The script needs to pass the login username/password for each transaction"
      },
      {
        "id": "d",
        "text": "The login information from the previous user is cached by the system and you need to clear the cache before you can log in as a new user"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The problem is most likely with the system identifier that is given to that particular user when they login. When they try to do another transaction, that unique identifier needs to be passed to the system so it can provide access to the transaction\n\nWRONG (b): Because there is no indication that this is the problem\n\nWRONG (c): Because the question indicates that the doctor performs multiple lookups per access\n\nWRONG (d): Because if this were happening, it would log in as the previous user, not error out on the login"
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "PTFL-4.2.7",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are testing a sales application for an e-commerce system. You are particularly interested in the response time for when a user enters text to be used to search for an item in the database. You have noticed that the first time you ran the tests it took 5.00 seconds to respond, but subsequent queries with the same data are responding in 0.01 seconds. What should you have done during your scripting to prevent this issue?",
    "options": [
      {
        "id": "a",
        "text": "There is no issue, the system is just getting faster"
      },
      {
        "id": "b",
        "text": "You need to log in each time to ensure that the transaction is performed again"
      },
      {
        "id": "c",
        "text": "You need to be sure the cache is cleared because the query results are probably being cached"
      },
      {
        "id": "d",
        "text": "You need to use a different user for each test to avoid the user’s information being re-used without being restored"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Is highly unlikely as systems tend to get slower, not faster, unless there is a caching issue\n\nWRONG (b): Because it is not the user’s information that is being re-used but rather the search results\n\nCORRECT (c): This is a symptom of caching and can be avoided by either varying the data or by clearing the cache\n\nWRONG (d): Because it is not the user’s information that is being re-used but rather the search results"
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "PTFL-4.2.8",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What happens when the performance test system is not equivalent to the production environment?",
    "options": [
      {
        "id": "a",
        "text": "Projections become less reliable, and risk increases because the results may not be representative"
      },
      {
        "id": "b",
        "text": "The tests will tend to run more quickly because they are not burdened by production data"
      },
      {
        "id": "c",
        "text": "The results will be easier to understand because the system can be configured for a particular test"
      },
      {
        "id": "d",
        "text": "Projects become more reliable because of the targeted focus, and this results in risk being reduced"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The less like production the performance testing system is, the less reliable are the results and this increases the risk of making incorrect assumptions\n\nWRONG (b): It could happen, but not necessarily\n\nWRONG (c): Because there is no reason to think the results would be easier to understand with a different configuration\n\nWRONG (d): Because the project risk would actually be increased in this case"
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "PTFL-4.2.8",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is a concern when using a properly configured load generation tool to build the background load for the performance tests?",
    "options": [
      {
        "id": "a",
        "text": "The load generated will contain invalid data"
      },
      {
        "id": "b",
        "text": "The load generator may experience performance problems and will not be able to maintain a steady load"
      },
      {
        "id": "c",
        "text": "The load generated may affect the production system and the production data"
      },
      {
        "id": "d",
        "text": "The load generator log reports may be difficult to read, resulting in problems with interpreting the performance results"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Will not occur if the tool is configured properly\n\nCORRECT (b): A load generator, particularly if you are running multiples on one machine, may slow down enough that it is no longer maintaining the desired load on the system\n\nWRONG (c): Will not occur if the tool is configured properly\n\nWRONG (d): Is not an issue as the load generator is not usually used to generate the performance results – it just creates the load on the system so the performance tests can be conducted"
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "PTFL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the purpose of having a ramp up period at the beginning of performance tests?",
    "options": [
      {
        "id": "a",
        "text": "To increase the number of users beyond the desired load"
      },
      {
        "id": "b",
        "text": "To allow the system to achieve a steady state before taking measurements"
      },
      {
        "id": "c",
        "text": "To allow the system to achieve an orderly shut down after the tests"
      },
      {
        "id": "d",
        "text": "To ensure the performance monitoring tools are working"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because the goal of the ramp up to is to get the number of users to the point desired for the test, not to exceed that number\n\nCORRECT (b): The system must have started up and achieved a steady state for valid steady state performance metrics to be gathered\n\nWRONG (c): Because ramp up is increasing load, not decreasing it getting ready for shut down\n\nWRONG (d): Because this has nothing to do with ramp up and should be tested before any official tests are started"
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "PTFL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is a method for testing transient states?",
    "options": [
      {
        "id": "a",
        "text": "Steady load testing"
      },
      {
        "id": "b",
        "text": "Peak and valley testing"
      },
      {
        "id": "c",
        "text": "Spike testing"
      },
      {
        "id": "d",
        "text": "Scalability testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): This is achieved with spike tests which force the system to transition between a low load to a high load in a short period of time\nWRONG (d)."
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "PTFL-4.4.1",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nYou have conducted your tests and have determined the following metrics:\n\n< 3 second response time: 85% of the time < 5 second response time: 90% of the time <10 second response time: 95% of the time < 60 second response time: 100% of the time\n\nGiven this information, how should you present the results to the stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "The test failed; the system is too slow. The requirements should be reviewed to ensure that <3 seconds is required 100% of the time"
      },
      {
        "id": "b",
        "text": "85% of the time the performance goal is met, so the system should be accepted based on industry standards"
      },
      {
        "id": "c",
        "text": "The response time for 90% of the tests is probably acceptable, but more tuning is needed to bring down the 95% response time"
      },
      {
        "id": "d",
        "text": "The response time for 100% of the tests is unacceptable and tuning will be required to bring it down to <3 seconds"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This is also a problem with the requirements being unclear. Does it have to be less than 3 seconds 100% of the time? Or is it acceptable if it is 95%? As stated though, the system has failed the test and the requirements should be revisited.\n\nWRONG (b): Because the goal did not stay 85% of the time was acceptable\n\nCORRECT (c): Might be a good result if the requirements had been better defined. Right now, they say that 100% must be less than 3 seconds. Realistically though, the 90% time should be investigated to see if there are a few outliers that are bringing it down or if it is always at the 5 second mark. More tuning should be attempted though because this is a critical system and performance could be life or death impacting\n\nWRONG (d): Because tuning to get to below 3 seconds 100% of the time will probably not be possible"
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "PTFL-5.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the purpose of a load generator tool?",
    "options": [
      {
        "id": "a",
        "text": "It creates a load on the network to allow testing for collisions"
      },
      {
        "id": "b",
        "text": "It maintains a load on the user interface to accurately mimic user response time"
      },
      {
        "id": "c",
        "text": "It feeds data to the dashboard showing how the system is responding to the load"
      },
      {
        "id": "d",
        "text": "It simulates user behavior according to the operational profiles"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Is a network analysis tool\n\nWRONG (b): Might be a browser testing tool or might not exist\n\nWRONG (c): Is a monitoring too\n\nCORRECT (d): This is what a load generator tool does"
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "PTFL-5.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is a pay-as-you-go tool?",
    "options": [
      {
        "id": "a",
        "text": "A tool with a licensing agreement that requires you to pay only for the number of virtual users and instances that you actually use"
      },
      {
        "id": "b",
        "text": "A server-based tool that provides you with full ownership of the tool for your usage"
      },
      {
        "id": "c",
        "text": "A monitoring tool that populates the dashboard with pertinent metrics based on what you have paid to monitor"
      },
      {
        "id": "d",
        "text": "A tool that provides the ability to test from multiple points of presence for load generation"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is the description of a pay-as-you-go tool. These are often cloud-based tools but not all cloud-based tools are pay-as-you-go\n\nWRONG (b): As these are not descriptions of pay-as-you-go tools\n\nWRONG (c): As these are not descriptions of pay-as-you-go tools\n\nWRONG (d): As these are not descriptions of pay-as-you-go tools"
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "PTFL-5.2.1",
    "level": "K4",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "40. You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.\n\nYou have a technical team conducting the performance tests and they are comfortable with programming the performance test scripts for re-usability and maintainability. You are now looking for a tool to use for this testing. You have found one that is compatible with your environment and will be able to generate a load via the protocols in use. The team has looked at it and they are comfortable that they can code in the tool and will be able to create their scripts with little training.\n\nBecause there are many stakeholders for this testing, you have verified that the tool provides excellent monitoring and reporting capabilities. You have verified with the various system administrators that they are comfortable with the tool and happy to use its monitoring capabilities in addition to their own tools during the testing.\n\nWhat do you still need to verify before selecting this tool?",
    "options": [
      {
        "id": "a",
        "text": "The project schedules"
      },
      {
        "id": "b",
        "text": "The availability of a record/playback capability for your testers to use"
      },
      {
        "id": "c",
        "text": "The ability of the tool to meet your requirements for concurrent virtual users"
      },
      {
        "id": "d",
        "text": "The ease with which your team can code the required performance scripts"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): At this point you know that your testers are able to code what is needed. The project schedule is not really a factor because any tool will take time to acquire and integrate, but the developers can code in it, so that is the main schedule factor. What you need to know is can this tool simulate the necessary number of virtual users and, of course, how much will it cost\nWRONG (d)."
  },
  {
    "id": 41,
    "exam": "ASTQB",
    "num": "1",
    "lo": "PTFL-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an important principle of performance testing regarding results?",
    "options": [
      {
        "id": "a",
        "text": "The results must be identical to those returned when the same tests are run in the production environment"
      },
      {
        "id": "b",
        "text": "The results must prove that the system meets or exceeds user expectations"
      },
      {
        "id": "c",
        "text": "The results must be in a form that allows comparison to the expectations of the users"
      },
      {
        "id": "d",
        "text": "The results must be reported via a dashboard for use by executive management"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The results from the test must be in a form that allows comparison to the expectations of the users. For example, if the users expect sub 2 second response time with 500 users on the system, then the tests must simulate the same environment to allow the comparison.\n\nA is not correct because “identical” is unlikely. Representative or statistically identical is possible, but not truly identical.\n\nB is not correct because the results may not meet the user expectations. The system may just be slow.\n\nD is not correct because results usually have to be formatted for consumption by executive management. A dashboard may be the preferable method, but other options exist as well."
  },
  {
    "id": 42,
    "exam": "ASTQB",
    "num": "2",
    "lo": "PTFL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "How does load testing differ from stress testing?",
    "options": [
      {
        "id": "a",
        "text": "Load testing concentrates on the highest expected load while stress testing concentrates on maintaining a high load for a period of time"
      },
      {
        "id": "b",
        "text": "Load testing concentrates on quick increases and decreases of load while stress testing concentrates on maintaining a high load for a period of time"
      },
      {
        "id": "c",
        "text": "Load testing and stress testing are actually the same thing"
      },
      {
        "id": "d",
        "text": "Load testing concentrate on increasing levels of realistic load while stress testing focuses on loads that are at or beyond the expected peak load"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Load testing looks at increasing the load on a system, but staying within realistic boundaries. Stress testing pushes the load to and above the expected highest load to see how the system responds."
  },
  {
    "id": 43,
    "exam": "ASTQB",
    "num": "3",
    "lo": "PTFL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "If performance testing is being conducted to determine that a system under load can increase its capacity as more memory is allocated to it, what type of testing is being conducted?",
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
        "text": "Scalability testing"
      },
      {
        "id": "d",
        "text": "Spike testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This type of testing is looking to see if the system can scale up to handle larger loads."
  },
  {
    "id": 44,
    "exam": "ASTQB",
    "num": "4",
    "lo": "PTFL-1.3.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an important static activity in performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Reviewing outstanding usability defect reports"
      },
      {
        "id": "b",
        "text": "Reviewing the system architecture"
      },
      {
        "id": "c",
        "text": "Reviewing the security requirements for the system"
      },
      {
        "id": "d",
        "text": "Reviewing the functional requirements"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): , this is one of the important activities. A is incorrect as it is dealing with usability reports. Reviewing defect reports regarding performance would be a good activity.\n\nC is not correct because it’s looking at security rather than performance, although security changes can result in performance impact.\n\nD is not correct because the functional requirements will not yield the performance requirements – those would be non-functional requirements."
  },
  {
    "id": 45,
    "exam": "ASTQB",
    "num": "5",
    "lo": "PTFL-1.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Why is a stable user interface important when the load will be generated from that interface?",
    "options": [
      {
        "id": "a",
        "text": "Because changes to the interface may necessitate changes in the performance scripts"
      },
      {
        "id": "b",
        "text": "Because defects in the interface will cause performance degradation"
      },
      {
        "id": "c",
        "text": "Because the APIs used by the interface will have to be changed"
      },
      {
        "id": "d",
        "text": "Because the full user experience cannot be determined until the interface is stable"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): When the load generation tool is using the user interface, any changes to that interface can break the scripts and require re-work.\n\nB is not correct because although defects could cause performance issues, there’s no guarantee that they will. In fact, the defects could increase the performance in some cases.\n\nC is not correct because changes to the API will not necessarily be required when the UI is being updated.\n\nD is not correct because this would happen in a usability exercise, not a performance exercise."
  },
  {
    "id": 46,
    "exam": "ASTQB",
    "num": "6",
    "lo": "PTFL-1.5.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "What is a likely cause of a system responding slowly only under a heavy load?",
    "options": [
      {
        "id": "a",
        "text": "A network latency issue that should have been visible during functional testing"
      },
      {
        "id": "b",
        "text": "A slow memory leak"
      },
      {
        "id": "c",
        "text": "A lack of indexing on a database table"
      },
      {
        "id": "d",
        "text": "A saturation or exhaustion of a system resource"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This type of performance issue normally is caused by a saturation or exhaustion of a needed resource such as database connections, memory, disk space, etc.\n\nA is not correct because this only occurs under a heavy load and that wouldn’t have occurred during functional testing.\n\nB is not correct because this would have appeared as a gradual slowdown of the system as memory became more scarce.\n\nC is not correct because this would have been evident based on the amount of data in the database rather than the load on the system."
  },
  {
    "id": 47,
    "exam": "ASTQB",
    "num": "7",
    "lo": "PTFL-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "If you are measuring the time it takes for a system to be restored from a backup, what type of environment are you considering?",
    "options": [
      {
        "id": "a",
        "text": "Technical"
      },
      {
        "id": "b",
        "text": "Business"
      },
      {
        "id": "c",
        "text": "Operational"
      },
      {
        "id": "d",
        "text": "Virtual"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Time to restore backups is categorized as an operational environment measurement."
  },
  {
    "id": 48,
    "exam": "ASTQB",
    "num": "8",
    "lo": "PTFL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is an advantage to aggregating test results?",
    "options": [
      {
        "id": "a",
        "text": "It’s easier to see the overall performance of a system"
      },
      {
        "id": "b",
        "text": "It’s easier to see the specific performance of a specific test"
      },
      {
        "id": "c",
        "text": "It’s easier to understand the length and frequency of any slow periods"
      },
      {
        "id": "d",
        "text": "It’s easier to capture the ramp-up and ramp-down time anomalies"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Aggregating the data provides a summary of the testing data and removes any small performance issues that are not indicative of the overall performance.\n\nB is not correct because the data is combined rather than reported separately.\n\nC is not correct because unless a slow period is indicative of general performance it will likely be smoothed out in the aggregate report.\n\nD is not correct because the ramp-up and ramp-down times are usually excluded to provide a more realistic overall picture."
  },
  {
    "id": 49,
    "exam": "ASTQB",
    "num": "9",
    "lo": "PTFL-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "During or after a performance test, what type of information should you check for in the server logs?",
    "options": [
      {
        "id": "a",
        "text": "Number of concurrent users on the system at a particular point in time"
      },
      {
        "id": "b",
        "text": "A graph of the system performance during the test"
      },
      {
        "id": "c",
        "text": "Defects that were reported during the testing"
      },
      {
        "id": "d",
        "text": "Memory errors and database errors that occurred during the test"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This information is normally captured in the server logs. A and B would normally be shown by a performance monitoring tool. C would have to be recorded manually into a defect management system and reported from there. A log might highlight a failure, but the actual defect would have to be determined after more analysis."
  },
  {
    "id": 50,
    "exam": "ASTQB",
    "num": "10",
    "lo": "PTFL-2.4.1",
    "level": "K1",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "If you are testing to understand how many users can use a site at the same time, what test result is particularly interesting to you?",
    "options": [
      {
        "id": "a",
        "text": "Throughput of data"
      },
      {
        "id": "b",
        "text": "Business process efficiency"
      },
      {
        "id": "c",
        "text": "Concurrency of usage"
      },
      {
        "id": "d",
        "text": "Timing of usage"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): In this case, you want to see how many users can use the system concurrently (at the same time). A, B and D might be interesting, but that will not answer the question."
  },
  {
    "id": 51,
    "exam": "ASTQB",
    "num": "11",
    "lo": "PTFL-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Why are good test monitoring and control measures so important in performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Because testing can lag behind schedule and more testers may be required to complete the work"
      },
      {
        "id": "b",
        "text": "Because environment changes can invalidate test results so being aware of these changes is critical"
      },
      {
        "id": "c",
        "text": "Because it is difficult to define the performance requirements in a measurable way"
      },
      {
        "id": "d",
        "text": "Because test design often requires building modular tests that can later be combined into larger suites for execution"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Performance testing is particularly sensitive to environment changes and careful monitoring of any changes and control measures to prevent or schedule such changes is critically important.\n\nA is not correct because adding more testers doesn’t help performance testing.\n\nC is not correct because, while the statement is often true, adding good monitoring and control won’t help.\n\nD is not correct because this is a normal process of test design for a performance testing exercise."
  },
  {
    "id": 52,
    "exam": "ASTQB",
    "num": "12",
    "lo": "PTFL-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "How often should performance testing be conducted?",
    "options": [
      {
        "id": "a",
        "text": "Once, after system testing has been completed"
      },
      {
        "id": "b",
        "text": "Multiple times, after system testing has been completed"
      },
      {
        "id": "c",
        "text": "Twice for each test level"
      },
      {
        "id": "d",
        "text": "Multiple times, at all test levels"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Performance testing should be conducted as an ongoing activity and performed multiple times and at all levels of testing (unit, integration, system, SIT and acceptance)."
  },
  {
    "id": 53,
    "exam": "ASTQB",
    "num": "13",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is the most likely performance risk for a distributed system?",
    "options": [
      {
        "id": "a",
        "text": "Problems with critical workflows or dataflows to or from remote servers"
      },
      {
        "id": "b",
        "text": "Problems with excessive load on the hardware due to improper configuration of the host virtual machine"
      },
      {
        "id": "c",
        "text": "Problems with network connection at the client connection point"
      },
      {
        "id": "d",
        "text": "Problems with new traffic via APIs that overload established applications"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is a problem that is likely to occur in particular with distributed systems. B is a problem most likely to occur with a virtualized system. C is most likely to occur with a client-server system. D is most likely to occur with a mainframe application."
  },
  {
    "id": 54,
    "exam": "ASTQB",
    "num": "14",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is the most likely performance risk for a client-server system?",
    "options": [
      {
        "id": "a",
        "text": "Problems with critical workflows or dataflows to or from remote servers"
      },
      {
        "id": "b",
        "text": "Problems with excessive load on the hardware due to improper configuration of the host virtual machine"
      },
      {
        "id": "c",
        "text": "Problems with network connection at the client connection point"
      },
      {
        "id": "d",
        "text": "Problems with new traffic via APIs that overload established applications"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is a problem that is most likely to occur with a client-server system. A is a problem that is likely to occur in particular with distributed systems. B is a problem most likely to occur with a virtualized system. D is most likely to occur with a mainframe application."
  },
  {
    "id": 55,
    "exam": "ASTQB",
    "num": "15",
    "lo": "PTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is the most likely performance risk for a virtualized system?",
    "options": [
      {
        "id": "a",
        "text": "Problems with critical workflows or dataflows to or from remote servers"
      },
      {
        "id": "b",
        "text": "Problems with excessive load on the hardware due to improper configuration of the host virtual machine"
      },
      {
        "id": "c",
        "text": "Problems with network connection at the client connection point"
      },
      {
        "id": "d",
        "text": "Problems with new traffic via APIs that overload established applications"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a problem most likely to occur with a virtualized system. A is a problem that is likely to occur in particular with distributed systems. C is most likely to occur with a client-server system. D is most likely to occur with a mainframe application."
  },
  {
    "id": 56,
    "exam": "ASTQB",
    "num": "16",
    "lo": "PTFL-3.3.1",
    "level": "K4",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities.\nYour company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nThe technical stakeholders on the project are available for a one-day performance risk analysis session. Of the risks in this product, which one is best analyzed by these stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "The time that will be required to get the information from the sensors into the application"
      },
      {
        "id": "b",
        "text": "The time that will be required to communicate through the API to the display board"
      },
      {
        "id": "c",
        "text": "The time that will be required for a judge to enter a disqualification status"
      },
      {
        "id": "d",
        "text": "The time that will be required for the data to be available on the mobile applications"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Given that these are technical stakeholders, the issues that may arise around getting near real time information from the sensors is the highest priority. Their input in the other areas would be helpful as well, but the technical problems are likely to occur in the interface between the sensors and the software.\n\nB is not correct because issues with the API can likely be addressed with software changes and it’s fairly unlikely that just the API will be problematic.\n\nC is not correct. The judges have five minutes to enter their disqualification information so assuming the UI isn’t complex this shouldn’t be a performance issue. It certainly won’t be high volume.\n\nD is not correct. While this will be the highest number of concurrent users, this needs to be addressed first from the business standpoint so the users are better understood and their expectations are documented."
  },
  {
    "id": 57,
    "exam": "ASTQB",
    "num": "17",
    "lo": "PTFL-3.4.1",
    "level": "K4",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have determined that testing the mobile application will require an expensive cloud resource that will supply simulated and real devices. Setting this up will not be a major effort, but you will be billed for each minute of use as well as for each device (simulated or real) that is used.\nYour development lifecycle methodology is agile.\nGiven this information, what is the best time to conduct the full performance test for the mobile application?",
    "options": [
      {
        "id": "a",
        "text": "As part of CI/CD, for each build"
      },
      {
        "id": "b",
        "text": "As part of each iteration, toward the end of the iteration"
      },
      {
        "id": "c",
        "text": "As part of a separate iteration which will occur when the software is functionally stable"
      },
      {
        "id": "d",
        "text": "As part of the final release testing, after the regression testing has been successfully completed"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Because of the expense of the environment, you don’t want to run this test too early or too often but you do want to run it as soon as you can. Executing when the software is functionally stable will help reduce the need to re-run the tests as changes are made to the software to add features or fix defects.\n\nA is not correct because it would be too expensive and would require stubbing.\n\nB is not correct because it would be too early and too expensive.\n\nD is not correct because it’s too late to fix anything that is found."
  },
  {
    "id": 58,
    "exam": "ASTQB",
    "num": "18",
    "lo": "PTFL-4.1.1",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nThe expected data to be viewed on the mobile devices is:\n• Results that are automatically displayed when each racer completes their run • Final results that are automatically displayed when the race is completed • Summary of all racers that were disqualified • Ranking board showing the top five racers – updated when each racer completes their run\nThe acceptable time (90% of the transactions) for the automatic results to be received is 3 seconds. For information that is queried (summary and ranking board), the acceptable response time (for 90% of the transactions) is 5 seconds.\nWhat additional information do you need to derive the performance test objectives?",
    "options": [
      {
        "id": "a",
        "text": "A description of the devices that will be used"
      },
      {
        "id": "b",
        "text": "A description of the handling that will occur when connectivity is lost"
      },
      {
        "id": "c",
        "text": "A list of the system resources that should be tracked and the expected usage of those resources"
      },
      {
        "id": "d",
        "text": "A list of all other applications that are expected to be running on the target devices throughout the tests"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): To set up the tests you need to know what system resources (memory, network throughput, etc.) need to be tracked and any baseline usage that is expected.\n\nA is not correct because the actual devices will not be used for this test.\n\nB is not correct because handling connectivity issues is a functional issue even though it can significantly impact performance.\n\nD is not correct because the performance tests will be using simulated devices which will assume full usage of the device’s capabilities. There is no way to know what other applications might be running – there are too many options."
  },
  {
    "id": 59,
    "exam": "ASTQB",
    "num": "19",
    "lo": "PTFL-4.1.2",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have been asked to prepare a performance test plan. Given the project information that has been supplied, what type of performance testing will be the most important for this project?",
    "options": [
      {
        "id": "a",
        "text": "Spike testing"
      },
      {
        "id": "b",
        "text": "Stress testing"
      },
      {
        "id": "c",
        "text": "Endurance testing"
      },
      {
        "id": "d",
        "text": "Scalability testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Spike testing is going to be very important because of the sudden loads when an important race is being run and then the return to a quiescent state between races. B would be good to do, but if the peak load is known, that can be covered in the spike testing.\n\nC is not correct because the system does not need to run for a long time. Worst case, you could reboot between events.\n\nD is not correct because the goal is not to determine if resources can be added to deal with increasing loads. This is a short-term usage system."
  },
  {
    "id": 60,
    "exam": "ASTQB",
    "num": "20",
    "lo": "PTFL-4.1.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have run one cycle of performance tests. You have accumulated the following metrics:\nVirtual users = 100,000 Virtual users successfully completing all transactions = 97%\nTransaction time for results that are automatically displayed when each racer completes their run Average = 2 seconds, 90% = 3 seconds, 95% = 5 seconds\nTransaction time for final results that are automatically displayed when the race is completed Average = 1 second, 90% = 3 seconds, 95% = 4 seconds\nTransaction time for summary of all racers that were disqualified Average = 6 seconds, 90% = 7 seconds, 95% = 8 seconds\nTransaction time for ranking board showing the top five racers Average = 4 seconds, 90% = 5 seconds, 95% = 9 seconds\nThe acceptable time (90% of the transactions) for the automatic results to be received is 3 seconds. For information that is queried (summary and ranking board), the acceptable response time (for 90% of the transactions) is 5 seconds.\nFor this information, you have created the following report:\nTransaction Time → Result\n• Individual run completion → Met\n• Race completion → Met\n• Disqualifications → Too slow\n• Ranking board → Met\nFor which stakeholder group would this report be most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "Stakeholders with a business focus"
      },
      {
        "id": "b",
        "text": "Stakeholders with a technology focus"
      },
      {
        "id": "c",
        "text": "Future product users"
      },
      {
        "id": "d",
        "text": "Competitors"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is a high-level report that is most appropriate for stakeholders that have a general business focus.\n\nB is not correct because the technical stakeholders would want more details.\n\nC is not correct because presumably the slow problem will be fixed prior to release.\n\nD is not correct because arming competitors with defect information is never a good idea."
  },
  {
    "id": 61,
    "exam": "ASTQB",
    "num": "21",
    "lo": "PTFL-4.1.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have run one cycle of performance tests. You have accumulated the following metrics:\nVirtual users = 100,000 Virtual users successfully completing all transactions = 97%\nTransaction time for results that are automatically displayed when each racer completes their run Average = 2 seconds, 90% = 3 seconds, 95% = 5 seconds\nTransaction time for final results that are automatically displayed when the race is completed Average = 1 second, 90% = 3 seconds, 95% = 4 seconds\nTransaction time for summary of all racers that were disqualified Average = 6 seconds, 90% = 7 seconds, 95% = 8 seconds\nTransaction time for ranking board showing the top five racers Average = 4 seconds, 90% = 5 seconds, 95% = 9 seconds\nThe acceptable time (90% of the transactions) for the automatic results to be received is 3 seconds. For information that is queried (summary and ranking board), the acceptable response time (for 90% of the transactions) is 5 seconds.\nFor this information, you have created the following report:\nTransaction Time → Result\n• Individual run completion → Met\n• Race completion → Met\n• Disqualifications → Too slow\n• Ranking board → Met\n\nConsidering the previous scenario and disregarding the performance times, what information would be most interesting to the technical stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "How the virtual users were created"
      },
      {
        "id": "b",
        "text": "The ramp-up and ramp-down times needed for all users"
      },
      {
        "id": "c",
        "text": "What caused 3% of the transactions to fail to complete"
      },
      {
        "id": "d",
        "text": "Which environment was used for the tests"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Technical users will want to know what happened with the 3% that failed. As they are troubleshooting, they may be interested in D, but that won’t be the first area to investigate.\n\nA and\n\nB are not correct because the creation of the users and the time required to complete the transactions is not in question here."
  },
  {
    "id": 62,
    "exam": "ASTQB",
    "num": "22",
    "lo": "PTFL-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "In the OSI model layers, which layers are most commonly accessed for performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Layers 1 – 3"
      },
      {
        "id": "b",
        "text": "Layers 3 – 5"
      },
      {
        "id": "c",
        "text": "Layers 5 – 7"
      },
      {
        "id": "d",
        "text": "Layers 7 – 9"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Layer 5 (session layer) to Layer 7 (application layer) are the most commonly used."
  },
  {
    "id": 63,
    "exam": "ASTQB",
    "num": "23",
    "lo": "PTFL-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If you are conducting performance testing with particular emphasis on database access, which protocol are you likely using for the testing?",
    "options": [
      {
        "id": "a",
        "text": "HTTP"
      },
      {
        "id": "b",
        "text": "ODBC"
      },
      {
        "id": "c",
        "text": "REST"
      },
      {
        "id": "d",
        "text": "HTML"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): ODBC is an open database protocol that is commonly used for database communication. JDBC is the java version of the protocol. HTTP and HTML are web protocols and REST is a web service protocol."
  },
  {
    "id": 64,
    "exam": "ASTQB",
    "num": "24",
    "lo": "PTFL-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nWhich of the following is an example of a transaction?",
    "options": [
      {
        "id": "a",
        "text": "Requesting a current ranking list"
      },
      {
        "id": "b",
        "text": "Receiving and viewing an individual skier’s results"
      },
      {
        "id": "c",
        "text": "Entering a disqualification request"
      },
      {
        "id": "d",
        "text": "Printing the final ranking from a particular race"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a complete request. The information is pushed from the service and received by the mobile application. The user then views this information. A is not a complete transaction because the request is not fulfilled. C is not a complete transaction because the disqualification request is not recorded. D is not a capability of the system."
  },
  {
    "id": 65,
    "exam": "ASTQB",
    "num": "25",
    "lo": "PTFL-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Why is it important to include think time when creating performance test scripts?",
    "options": [
      {
        "id": "a",
        "text": "Because the system needs time to ramp-up and ramp-down"
      },
      {
        "id": "b",
        "text": "Because users tend to pause during transactions to read screens, absorb information or navigate"
      },
      {
        "id": "c",
        "text": "Because performance testers must carefully include every step a user will follow, requiring them to “think” as they script"
      },
      {
        "id": "d",
        "text": "Because systems cannot keep up with transactions that are received from multiple scripts"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Think time is used to simulate a real user’s interaction with the system."
  },
  {
    "id": 66,
    "exam": "ASTQB",
    "num": "26",
    "lo": "PTFL-4.2.3",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have identified three operational profiles for the product:\n1. The mobile user who checks the results for every race on their phone 2. The judge who enters disqualification status information during and immediately after a race 3. The broadcast companies who access the data through the API\nWhat operational profile are you missing?",
    "options": [
      {
        "id": "a",
        "text": "The skier"
      },
      {
        "id": "b",
        "text": "The audience who is viewing the display board with the scores"
      },
      {
        "id": "c",
        "text": "The display board itself"
      },
      {
        "id": "d",
        "text": "Mobile users who are at the race and are checking the results for every race on their phone"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The display board is receiving the information from the application and is a component of the overall system.\n\nA is not correct because the skier does not actually use the data.\n\nB is not correct because they are viewing the results of the data manipulation by the display board, which is one step removed from the product.\n\nD is not correct because these folks are the same as those described in #1."
  },
  {
    "id": 67,
    "exam": "ASTQB",
    "num": "28",
    "lo": "PTFL-4.2.5",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have identified that you expect to have a load of 100,000 users for a high interest race and 20,000 users for a low-interest race. There are 5,000 users who seem to always be connected, even when nothing is happening.\nHigh-interest races are the semi-finals and finals for any particular contest. A race normally lasts for 5 minutes and there are usually 8 racers in the semi-finals and 4 racers in the finals. A low-interest race is any of the first 30 races that lead to determining who will be in the semi-finals.\n\nIn the scenario above, for a given contest with 30 racers, what is the expected throughput for the automatic results display for one phone?",
    "options": [
      {
        "id": "a",
        "text": "30"
      },
      {
        "id": "b",
        "text": "43"
      },
      {
        "id": "c",
        "text": "20,000"
      },
      {
        "id": "d",
        "text": "100,000"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The throughput for one phone for the automatic race results is 30 + 8 + 4 for the individual races + 1 for the final results = 43."
  },
  {
    "id": 68,
    "exam": "ASTQB",
    "num": "29",
    "lo": "PTFL-4.2.6",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Why is it important to have a clean-up section in a performance test script?",
    "options": [
      {
        "id": "a",
        "text": "To ensure that data is collected for response time reporting"
      },
      {
        "id": "b",
        "text": "To ensure any errors are recorded and data issues are resolved"
      },
      {
        "id": "c",
        "text": "To ensure the system is reset to a point that the script can be run again"
      },
      {
        "id": "d",
        "text": "To ensure the operator is informed that the test has been completed"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The purpose of the clean-up is to reset the system back to the state it was in before the test was run – or as much as possible. This enables the script to be run again. The clean-up may include deleting created data or recreated data that was deleted during the script execution.\n\nA and\n\nB are not correct because reporting data and errors should be gathered throughout the execution.\n\nD is not correct because the tool will inform the operator when the script(s) have completed; this doesn’t have to be scripted."
  },
  {
    "id": 69,
    "exam": "ASTQB",
    "num": "30",
    "lo": "PTFL-4.2.6",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following is a good practice when adding verification logic to a script?",
    "options": [
      {
        "id": "a",
        "text": "Try to add data that has already been added"
      },
      {
        "id": "b",
        "text": "Try to delete data that has already been deleted"
      },
      {
        "id": "c",
        "text": "Verify that the transactions have completed by querying the database to see if the data was changed correctly"
      },
      {
        "id": "d",
        "text": "Verify that no errors have been recorded by the script and that no errors have been recorded in the system logs"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): A good practice is to verify that the transactions are actually completing. This is usually done by checking via an independent method such as querying the database to see if created data is there and deleted data is not.\n\nA and\n\nB are not correct because these transactions could also fail, giving a false negative.\n\nD is not correct because the errors have already been recorded by the script. Adding system log verification to the script is tricky. It’s usually better to use a log analysis tool to check for interesting errors."
  },
  {
    "id": 70,
    "exam": "ASTQB",
    "num": "31",
    "lo": "PTFL-4.2.7",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have identified that you expect to have a load of 100,000 users for a high interest race and 20,000 users for a low-interest race. There are 5,000 users who seem to always be connected, even when nothing is happening.\nYou have been looking at purchasing a load testing tool, but you have found that licenses for virtual users are very expensive. What is the minimum number of virtual users you will need to conduct a load test for this application?",
    "options": [
      {
        "id": "a",
        "text": "5,000 since that is the base load"
      },
      {
        "id": "b",
        "text": "10,000 and extrapolate the results to 100,000"
      },
      {
        "id": "c",
        "text": "20,000 with all think time removed"
      },
      {
        "id": "d",
        "text": "100,000 each creating the expected throughput"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): You need the full set of virtual users to adequately test this application. Even testing with 100,000 may be risky since the application may be more widely used than expected. Stress testing would be wise. A is too low. B is dangerous because systems don’t normally degrade in a linear fashion. C is also dangerous because 20,000 users with no think time may very well flood the system. In this case, it’s also not valid because the information is being sent to the users automatically – they are not requesting it, so no think time is actually involved."
  },
  {
    "id": 71,
    "exam": "ASTQB",
    "num": "32",
    "lo": "PTFL-4.2.7",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nThe judges must log in with a username and password before they are allowed to enter any disqualifications. A judge normally logs in once for a race and may enter several disqualifications during\nthat race. How will correlation be needed when creating the performance scripts for the judges’ interactions?",
    "options": [
      {
        "id": "a",
        "text": "It will be needed to ensure the judge’s session information is recorded with their disqualification entries"
      },
      {
        "id": "b",
        "text": "It will be needed to ensure the disqualification is recorded against the correct skier"
      },
      {
        "id": "c",
        "text": "It will be needed to time a disqualification correctly during the race to ensure it is within the 5- minute time limit"
      },
      {
        "id": "d",
        "text": "It will be needed to ensure the results correctly record the judge’s information"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): hen the judge logs in, he is creating a session. That session information, including the information associated with the judge himself, must be used to record the disqualification. Since the user name and password will be handled potentially by a system variable, that information may have to be correlated manually in the test script. B, C and D don’t pertain to the performance scripts but are functional issues."
  },
  {
    "id": 72,
    "exam": "ASTQB",
    "num": "33",
    "lo": "PTFL-4.2.8",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is the best environment to use for performance testing?",
    "options": [
      {
        "id": "a",
        "text": "The production environment"
      },
      {
        "id": "b",
        "text": "A complete replica of the production environment"
      },
      {
        "id": "c",
        "text": "The sandbox environment"
      },
      {
        "id": "d",
        "text": "The development environment"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The more similar the performance test environment to production, the more accurate the test results.\n\nA is not correct because running performance tests in production can have serious consequences if the production system is impacted by the tests (e.g., slowed down, crashed). C is not a good candidate since a sandbox environment should not be used for performance testing. D is not a good candidate because it usually is not a good representation of the production environment and often contains code that is not tested or ready for performance testing."
  },
  {
    "id": 73,
    "exam": "ASTQB",
    "num": "34",
    "lo": "PTFL-4.2.8",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "When would it be appropriate to use service virtualization?",
    "options": [
      {
        "id": "a",
        "text": "When a web service resides in a virtual machine"
      },
      {
        "id": "b",
        "text": "When the cloud is being used for testing"
      },
      {
        "id": "c",
        "text": "When the performance testing tool is a SaaS"
      },
      {
        "id": "d",
        "text": "When the service to be used is not available"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Service virtualization is used to replace or emulate a component of the system that is not available for some reason.\n\nA is not correct. Services that reside in VMs look the same as services on a physical machine.\n\nB is not correct. You might want to use service virtualization, but that would not be required just because it is a cloud implementation.\n\nC is not correct. If the performance testing tool is a Software as a Service tool, it has no bearing on the services that it is testing."
  },
  {
    "id": 74,
    "exam": "ASTQB",
    "num": "35",
    "lo": "PTFL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What should be done immediately after the ramp-up is completed for a performance test?",
    "options": [
      {
        "id": "a",
        "text": "Start the step-up load of virtual users"
      },
      {
        "id": "b",
        "text": "Initiate the ramp-down"
      },
      {
        "id": "c",
        "text": "Wait until the system has reached a steady state, then start the step-up"
      },
      {
        "id": "d",
        "text": "Bring on the full load of virtual users"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): It’s important to let the system reach a steady state before starting to load on users. Depending on the scenario you are testing, A or D would be the correct thing to do once the steady state has been reached. B is only done at the end of the test."
  },
  {
    "id": 75,
    "exam": "ASTQB",
    "num": "36",
    "lo": "PTFL-4.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Should manual tests be run during performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Yes, this will help to verify that the performance being recorded by the tool is accurate"
      },
      {
        "id": "b",
        "text": "Yes, this will help verify that there are no functional issues occurring"
      },
      {
        "id": "c",
        "text": "No, this is likely to interfere with the metrics being gathered by the performance testing tools"
      },
      {
        "id": "d",
        "text": "No, this can give a false impression to the users regarding the performance they will experience with the released product"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Doing manual checking of the performance during performance testing will help supply ad hoc measurements that can be used to validate the measurements that the tool is gathering.\n\nB is not correct because running the same scripts as the tool should not find functional issues. If it does, the system was not ready for performance testing.\n\nC is not correct because one or two manual users is not creating a significant load for the system.\n\nD is not correct because end users would not be involved in this testing as it might yield frightening results before the system is tuned."
  },
  {
    "id": 76,
    "exam": "ASTQB",
    "num": "37",
    "lo": "PTFL-4.4.1",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nYou have run one cycle of performance tests. You have accumulated the following metrics:\nVirtual users = 100,000 Virtual users successfully completing all transactions = 97%\nTransaction time for results that are automatically displayed when each racer completes their run Average = 2 seconds, 90% = 3 seconds, 95% = 5 seconds\nTransaction time for results that are automatically displayed when the race is completed Average = 1 second, 90% = 3 seconds, 95% = 4 seconds\nTransaction time for summary of all racers that were disqualified Average = 6 seconds, 90% = 7 seconds, 95% = 8 seconds\nTransaction time for ranking board showing the top five racers Average = 4 seconds, 90% = 5 seconds, 95% = 9 seconds\nThe acceptable time (for 90% of the transactions) for the automatic results to be received is 3 seconds. For information that is queried (summary and ranking board), the acceptable response time (for 90% of the transactions) is 5 seconds.\nGiven this information, which scenarios will require system tuning and further testing?",
    "options": [
      {
        "id": "a",
        "text": "All of them because these results are for only one run"
      },
      {
        "id": "b",
        "text": "The automatic displays because their 95% numbers are too slow"
      },
      {
        "id": "c",
        "text": "The summary of disqualifications because all times are too slow"
      },
      {
        "id": "d",
        "text": "The ranking board because this is a time critical part of the system and the 95% numbers are too slow"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The disqualifications time is too slow, particularly for the 90%, but it’s also too slow even for the average. Tuning and retesting will be required. A may be correct and will probably need to happen, but not until C is resolved. B and D are worrying about the 95% numbers, but those are not in the requirements."
  },
  {
    "id": 77,
    "exam": "ASTQB",
    "num": "38",
    "lo": "PTFL-5.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the basis for the scripts executed by a load generator to simulate user behavior?",
    "options": [
      {
        "id": "a",
        "text": "The expected number of virtual users"
      },
      {
        "id": "b",
        "text": "The defined operational profiles"
      },
      {
        "id": "c",
        "text": "The defined load profiles"
      },
      {
        "id": "d",
        "text": "The expected system response time"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The load generator creates and executes multiple client instances that simulate user behavior according to a defined operational profile.\n\nA is not correct because while the number of users simulated depends on the defined number of virtual users, this is not the basis for the behaviors.\n\nC is not correct. Load profiles are based on the selected combination of operational profiles. D is used to compare the actual results to the expected results."
  },
  {
    "id": 78,
    "exam": "ASTQB",
    "num": "39",
    "lo": "PTFL-5.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is a function of the load management console of a performance testing tool?",
    "options": [
      {
        "id": "a",
        "text": "To manage the activities of the virtual users"
      },
      {
        "id": "b",
        "text": "To provide raw data for executive management"
      },
      {
        "id": "c",
        "text": "To start and stop the tests"
      },
      {
        "id": "d",
        "text": "To handle error recovery for a test script"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The management console starts and stops the tests and aggregates metrics during the tests.\n\nA is not correct because these activities are dictated by the scripts.\n\nB is not correct because the graphs produced by these tools are fitting for technical consumption, not executive management.\n\nD is not correct because error reporting is shown in the console, but error recovery must be scripted."
  },
  {
    "id": 79,
    "exam": "ASTQB",
    "num": "40",
    "lo": "PTFL-5.2.1",
    "level": "K4",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Base Scenario: You are working for a company that has developed software that will be used in the Olympic skiing events to track and post times. This software will take data from various sensors to determine start and finish times for each individual racer as they race one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes of the end of their run. The information will be sent through an API to software that will control the display board at the event and to the interface used by the broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wants to receive “real time” results from the events. Testing for the mobile application will be done in the cloud using device simulators.\n\nIs it suitable to use simulators in the cloud for all performance testing?",
    "options": [
      {
        "id": "a",
        "text": "Yes, simulators will be cost effective and accurate enough for this testing"
      },
      {
        "id": "b",
        "text": "No, emulators will be needed for all transactions to ensure the information is displayed correctly"
      },
      {
        "id": "c",
        "text": "No, cloud simulators can be used for the phone testing, but emulators or the real device will be needed to test the communication with the display board"
      },
      {
        "id": "d",
        "text": "No, testing should be conducted on real devices to verify the usability as well as the performance"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The communication with the display board will require either an emulator or the real device to ensure the communication is fast enough to suit the needs of the audience. Problems may be found during the testing that indicate the board itself is too slow, but that will need to be discovered before the product is released.\n\nA is not correct because it won’t deal with the display board.\n\nB is not correct because emulators are not needed for the phone app.\n\nD is not correct because this would be very expensive, unnecessary and usability testing is not in scope."
  }
];
