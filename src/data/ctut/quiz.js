// CT-UT (Usability Testing Specialist, Foundation Level syllabus 2018) — ISTQB Sample Exam set A v1.2 (2021-06-15),
// parsed from the PDFs in trainings/ (re-extracted with pdftotext -layout because the bundled .txt dropped a line of
// Q4's rationale): 40 questions, 40 points. Correct answers, LOs and per-option rationales come from the
// Sample-Exam-Answers PDF; answer-key table and per-question answers cross-checked on import.
// The key's K-level column lost its digits in the PDF ("K"), so K-levels come from the syllabus LO list.
// Q35–Q40 are keyword questions (K1) with no LO in the key; the `lo`/`chapter` shown for them is a topic-based
// mapping made for this site and is noted in each explanation.
// Duration and pass mark are not stated in the documents: 60 min and 65% (26/40) are the standard ISTQB
// specialist exam format.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "UTFL-1.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is true?",
    "options": [
      {
        "id": "a",
        "text": "Usability deals with specified users achieving specified goals in a specified context of use with a software product; User experience deals with a person’s perceptions and responses resulting from using the software product"
      },
      {
        "id": "b",
        "text": "Usability is measured in terms of effectiveness, efficiency and satisfaction; Accessibility deals with a person’s perceptions and responses resulting from using the software product"
      },
      {
        "id": "c",
        "text": "User experience deals with specified users achieving specified goals in a specified context of use with a software product; Usability deals with a person’s perceptions and responses resulting from using the software product"
      },
      {
        "id": "d",
        "text": "User experience deals with a person’s perceptions and responses resulting from using the software product; accessibility deals with a person’s emotions, beliefs and perceptions"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a).\n\nWRONG (b): The usability definition is correct. But the second part refers to user experience, not accessibility\n\nWRONG (c): The first part is Usability and the second part is user experience\n\nWRONG (d): Both parts refer to user experience"
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "UTFL-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a reasonable goal of accessibility evaluation?",
    "options": [
      {
        "id": "a",
        "text": "To ensure that within a specific context of use, anyone can use the software"
      },
      {
        "id": "b",
        "text": "To verify that the external influencing factors, such as presentation, are working effectively for the overall user experience"
      },
      {
        "id": "c",
        "text": "To ensure learnability of the software"
      },
      {
        "id": "d",
        "text": "To verify that the software is usable by people with specific disabilities"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): This is a usability test\n\nWRONG (b): This is a factor in user experience\n\nWRONG (c): This is a factor in user experience\nCORRECT (d)."
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "UTFL-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You are conducting an evaluation that includes the online purchase, the download and installation, the actual use, and the support the customer receives from the call center for a given product. What type of evaluation are you conducting?",
    "options": [
      {
        "id": "a",
        "text": "Usability"
      },
      {
        "id": "b",
        "text": "User experience"
      },
      {
        "id": "c",
        "text": "Accessibility"
      },
      {
        "id": "d",
        "text": "Usability and User experience"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): These evaluation areas are included only for the user experience evaluation\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "UTFL-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You are asked to evaluate the usability of a specialized medical software application. Due to time and budget constraints, it is not possible to include users in the evaluation process.\n\nWhich of the following is a valid approach for evaluating the usability in this case?",
    "options": [
      {
        "id": "a",
        "text": "Accessibility Evaluation"
      },
      {
        "id": "b",
        "text": "Usability testing"
      },
      {
        "id": "c",
        "text": "User surveys"
      },
      {
        "id": "d",
        "text": "Usability Review"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): An accessibility evaluation, just like a usability evaluation, may use one of the three other mentioned approaches\n\nWRONG (b): Usability testing definitely needs users to be performed\n\nWRONG (c): User surveys, as the name states, needs users to answer the survey\n\nCORRECT (d): The usability review includes expert-based approaches, which do not necessarily require users to be involved"
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "UTFL-1.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "In a project that is employing usability evaluation practices, which of the following should come first?",
    "options": [
      {
        "id": "a",
        "text": "Formative testing"
      },
      {
        "id": "b",
        "text": "Summative testing"
      },
      {
        "id": "c",
        "text": "Formative and summative should occur at the same time during requirements gathering"
      },
      {
        "id": "d",
        "text": "Formative and summative should occur at the same time during design"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Formative is designed to identify and analyze usability problems and is a qualitative technique that is used during design. Summative is focused on obtaining measurements and is quantitative in nature and is used after the product has been released to production (or near to release)\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "UTFL-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of these basic approaches to a software development project follows all key elements of human-centered evaluation?",
    "options": [
      {
        "id": "a",
        "text": "Define requirements, develop the software, and perform acceptance test"
      },
      {
        "id": "b",
        "text": "Interview users, iteratively develop prototypes, and evaluate the software"
      },
      {
        "id": "c",
        "text": "Iteratively develop prototypes, perform expert reviews, and integrate found issues"
      },
      {
        "id": "d",
        "text": "Interview users, develop the software, and perform acceptance test"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Besides acceptance tests, this approach completely misses all three key elements: Users are only included at the end, no prototypes are developed, and no evaluation is happening\n\nCORRECT (b): This approach takes all three key elements into consideration: Users are included, prototypes are iteratively developed and evaluated\n\nWRONG (c): Although this approach takes the prototyping aspect and the evaluation into consideration, no users are included in the process\n\nWRONG (d): This approach may take the users and evaluation aspects into consideration, but no prototyping is happening"
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "UTFL-1.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "What is the purpose of the evaluation step in the human-centered design process?",
    "options": [
      {
        "id": "a",
        "text": "To reduce the need for requirements analysis"
      },
      {
        "id": "b",
        "text": "To simplify the design process"
      },
      {
        "id": "c",
        "text": "To allow the user to see and use versions of the software as it evolves"
      },
      {
        "id": "d",
        "text": "To implement feedback and improve the product until the usability requirements are achieved"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): The human-centered design process requires that the user be involved in all phases. They should see the software as it evolves and provide feedback that can be incorporated into the design\nWRONG (d)."
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "UTFL-1.3.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following are the best usability evaluation approaches for an agile software development lifecycle?",
    "options": [
      {
        "id": "a",
        "text": "RITE, discount, weekly testing"
      },
      {
        "id": "b",
        "text": "RAD, informal and quick, monthly cycle testing"
      },
      {
        "id": "c",
        "text": "RUP, usability reviews, usability acceptance criteria"
      },
      {
        "id": "d",
        "text": "REST, formative, daily usability labs"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Rapid Iterative Testing and Evaluation (RITE), informal and quick (discount) usability testing and usability testing conducted consistently on a weekly basis are evaluation approaches that are particularly well-suited for an agile environment\n\nWRONG (b): Because monthly cycle testing would not be fast enough for agile and RAD is a development process\n\nWRONG (c): Because the Rational Unified Process is a development process rather than a usability evaluation approach\n\nWRONG (d): REST is a communication protocol and not a usability evaluation approach"
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "UTFL-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You have just purchased a new defect tracking tool but you are having some problems with the installation. You have called the customer support number and they helped you install the software but also said that you should have been able to figure it out yourself and told you to read the manual before you call them again. Given your experience, what type of risk has been realized?",
    "options": [
      {
        "id": "a",
        "text": "Accessibility risk"
      },
      {
        "id": "b",
        "text": "User experience risk"
      },
      {
        "id": "c",
        "text": "Usability risk"
      },
      {
        "id": "d",
        "text": "Support risk"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because this is not an accessibility risk\n\nCORRECT (b): This is a problem with the user experience which includes the entire user experience around the product, not just working with the product itself\n\nWRONG (c): Because this is a user experience risk dealing with entire user experience, not just usability\n\nWRONG (d): Because the risk is not related to the supportability of the product but rather the people in the support department"
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "UTFL-2.2.2",
    "level": "K4",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Your company has developed a new printer that is meant to automatically configure itself when installed. Previous versions of the printer have had installation issues resulting in the printer either failing to install or installing incorrectly and disabling the color printing capability. When this occurred most people brought the printer back and demanded a refund even though the printer itself functioned correctly. Given this experience, what is a reasonable usability risk that should be tracked for the new printer release?",
    "options": [
      {
        "id": "a",
        "text": "Users cannot figure out the installation issues and as a result they report their dissatisfaction to their friends on social media creating a negative image of the company"
      },
      {
        "id": "b",
        "text": "The user documentation is not sufficient to help with the installation issues and the support team is slow in answering the phone"
      },
      {
        "id": "c",
        "text": "The lack of color printing capability causes an accessibility issue for people who need color printing to be able to read certain medical forms"
      },
      {
        "id": "d",
        "text": "The lack of time available for the design team is causing poor usability design and analysis"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is risk in that the users cannot figure out how to install the software and spread their dissatisfaction to their friends\n\nWRONG (b): Because this is actually a user experience risk rather than a usability risk\n\nWRONG (c): Because this is an accessibility risk rather than a usability risk\n\nWRONG (d): Because this is a project risk"
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "UTFL-3.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a valid example of a user interface guideline?",
    "options": [
      {
        "id": "a",
        "text": "The company logo must appear in the upper left corner of each page. Its position must be exactly the same as on the home page. Clicking the logo must cause the home page to be displayed"
      },
      {
        "id": "b",
        "text": "Error messages must be constructive, precise, comprehensible and polite"
      },
      {
        "id": "c",
        "text": "Errors must be handled in a polite and tolerant way, never blaming the user for an error"
      },
      {
        "id": "d",
        "text": "The user interface must be suitable for the task"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This example appears in the Syllabus, section 3.1\n\nWRONG (b): This is a heuristic, not a user interface guideline\n\nWRONG (c): This is the dialogue principle “Error tolerance”, it is not a user interface guideline\n\nWRONG (d): This is the dialogue principle “Suitability for the task”, it is not a user interface guideline"
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "UTFL-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "WCAG guideline 1.1.1 says “Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language”.\n\nWhich of the following suggestions best illustrates the WCAG guideline?",
    "options": [
      {
        "id": "a",
        "text": "Users should be able to easily magnify text up to 300%"
      },
      {
        "id": "b",
        "text": "Images should include equivalent alternative text in the markup/code"
      },
      {
        "id": "c",
        "text": "Braille (embossed text for blind people) equivalents should be available for all text"
      },
      {
        "id": "d",
        "text": "For all text that is difficult to understand, a simplified text alternative should be offered"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This suggestion addresses text, not “non-text content”\n\nCORRECT (b): This suggestion addresses images – that is, non-text content. The example is included in the Syllabus, section 3.2.2. It originates from http://www.w3.org/standards/webdesign/accessibility\n\nWRONG (c): This suggestion addresses text, not “non-text content”\n\nWRONG (d): This suggestion addresses text, not “non-text content”"
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "UTFL-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following laws specifically requires private websites to be accessible to blind or visually impaired Internet users?",
    "options": [
      {
        "id": "a",
        "text": "The Equality Act"
      },
      {
        "id": "b",
        "text": "The Americans with Disabilities Act"
      },
      {
        "id": "c",
        "text": "The Rehabilitation Act"
      },
      {
        "id": "d",
        "text": "Section 508"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): It does not specifically reference web sites\n\nCORRECT (b): This is highlighted in the ADA regarding private websites\n\nWRONG (c): This act was enacted in 1973 and refers to Federal agencies\n\nWRONG (d): Because it has a more general focus that everyone should have the same access to information"
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "UTFL-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What is an important component of an effective usability review?",
    "options": [
      {
        "id": "a",
        "text": "A detailed design document"
      },
      {
        "id": "b",
        "text": "Screen layouts and narrative descriptions"
      },
      {
        "id": "c",
        "text": "A visible user interface, either real or simulated"
      },
      {
        "id": "d",
        "text": "A list of known usability issues"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because a detailed design document doesn’t provide the look and feel that a real UI does\n\nWRONG (b): Because a detailed design document doesn’t provide the look and feel that a real UI does\n\nCORRECT (c): The more realistic the UI, the more accurate and effective the review will be\n\nWRONG (d): This might help in testing, but not during the usability review since that review is usually conducted by experts and those familiar with how the software must work"
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "UTFL-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "If a planned usability review is being conducted and the most experienced person in the review has six months of usability testing experience, what type of review is this?",
    "options": [
      {
        "id": "a",
        "text": "A formal usability review"
      },
      {
        "id": "b",
        "text": "An informal usability review"
      },
      {
        "id": "c",
        "text": "An expert usability review"
      },
      {
        "id": "d",
        "text": "An ad hoc usability review"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because a formal usability review requires usability experts\n\nCORRECT (b): This is an informal usability review with people who may have some awareness of usability but are not recognized experts\n\nWRONG (c): Because six months would not constitute an expert\n\nWRONG (d): Because this review has been planned and prepared"
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "UTFL-4.2.2",
    "level": "K4",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are conducting usability testing on software that is used by people to register for a driver’s license. This software gathers the user’s information and assigns a driver’s license number. The user is then taken to another page where they are asked about car insurance information. On that page they are required to enter their newly acquired driver’s license number.\n\nGiven this information, which heuristic should be used to identify a problem with the software?",
    "options": [
      {
        "id": "a",
        "text": "User control and freedom"
      },
      {
        "id": "b",
        "text": "Error prevention"
      },
      {
        "id": "c",
        "text": "Visibility of system status"
      },
      {
        "id": "d",
        "text": "Recognition rather than recall"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Is a checklist items but are not applicable to this scenario\n\nWRONG (b): Is a checklist items but are not applicable to this scenario\n\nWRONG (c): Is a checklist items but are not applicable to this scenario\n\nCORRECT (d): The user is being asked to remember the driver’s license number and re-enter it. The software should supply the number (since it just assigned it) rather than requiring the user to recall it"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "UTFL-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Gathering comments from the users is a part of which principal step in usability testing?",
    "options": [
      {
        "id": "a",
        "text": "Preparing the usability test"
      },
      {
        "id": "b",
        "text": "Conducting the usability test session"
      },
      {
        "id": "c",
        "text": "Communicating the findings from the test session"
      },
      {
        "id": "d",
        "text": "Conducting the retrospective after the testing has completed"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): The post-session interview is part of the test session and is used to get the user’s feedback and impressions\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "UTFL-5.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following actions should be taken as part of usability test planning?",
    "options": [
      {
        "id": "a",
        "text": "Selecting the moderator for the tests"
      },
      {
        "id": "b",
        "text": "Determining how to analyze the results of previous usability tests"
      },
      {
        "id": "c",
        "text": "Deciding where to document known defects in the software"
      },
      {
        "id": "d",
        "text": "Presenting the briefing instructions to the users"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The moderator’s name is normally included in the test plan so it is determined during the test planning\n\nWRONG (b): Because they refer to previous tests and defects that may not be relevant for this testing. Known defects could change though if testing is on-going\n\nWRONG (c): Because they refer to previous tests and defects that may not be relevant for this testing. Known defects could change though if testing is on-going\n\nWRONG (d): Because these details are not usually known at the time the test plan is written and are likely to change. The briefing instructions are included in the usability test scripts which are prepared after planning is complete"
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "UTFL-5.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Questions that are asked of the user at the conclusion of the usability session are included in which usability testing documentation?",
    "options": [
      {
        "id": "a",
        "text": "The usability test plan"
      },
      {
        "id": "b",
        "text": "The usability risk register"
      },
      {
        "id": "c",
        "text": "The usability checklist"
      },
      {
        "id": "d",
        "text": "The usability test script"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\nWRONG (c).\n\nCORRECT (d): The pre-session and post-session interview questions to be used by the moderator are included in the usability test script"
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "UTFL-5.3.3",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are creating tasks to be completed during a usability test. The software is used for people to register for a driver’s license. This software gathers the user’s information and assigns a driver’s license number. Once the person has their number, they are then given a series of questions regarding their insurance information. Given this information, what would be a good first task for the usability testers?",
    "options": [
      {
        "id": "a",
        "text": "To conduct some exploratory testing and get a general impression of the software"
      },
      {
        "id": "b",
        "text": "To write down their impressions of the home page"
      },
      {
        "id": "c",
        "text": "To enter their name and address into the application"
      },
      {
        "id": "d",
        "text": "To take the simplest path all the way through the software including answering the insurance questions"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because we want them to follow a script rather than explore\n\nWRONG (b): Because this will be gathered in the post-session interview\n\nCORRECT (c): The first task should be simple and easy for the user. Entering their name and address should be straightforward and should allow them to have a good experience with their first use of the software\n\nWRONG (d): Because this isn’t a simple task"
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "UTFL-5.3.4",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "When considering a location for a usability test, what requirements do observers have?",
    "options": [
      {
        "id": "a",
        "text": "They should be able to come and go as needed"
      },
      {
        "id": "b",
        "text": "They should be constrained and focused on the users during the entire test"
      },
      {
        "id": "c",
        "text": "They should not have access to refreshments in the observation room"
      },
      {
        "id": "d",
        "text": "They should be able to interact with the user during the test"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Observers should be able to come and go without interfering with the test\n\nWRONG (b): Because mobility in the observers is often necessary, particularly for long sessions\n\nWRONG (c): Because it is a regulation that limits the observers\n\nWRONG (d): Because the moderator interacts with the user at the beginning and end of the session, not the observers"
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "UTFL-5.3.5",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is a disadvantage to using a usability lab?",
    "options": [
      {
        "id": "a",
        "text": "Observers are restricted to a specific area"
      },
      {
        "id": "b",
        "text": "The room may feel unrealistic to the user"
      },
      {
        "id": "c",
        "text": "Each test will be conducted in a similar environment"
      },
      {
        "id": "d",
        "text": "Observers can come and go during the session"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Is not a disadvantage because observers can collaborate with each other without disturbing the test\n\nCORRECT (b): This is a risk with a usability lab because it may not be representative of the real environment\n\nWRONG (c): Is advantages to using a usability lab\n\nWRONG (d): Is advantages to using a usability lab"
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "UTFL-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "If a user has become confused and frustrated during a test session, what actions should the moderator take?",
    "options": [
      {
        "id": "a",
        "text": "The moderator should help the user and provide instructions as needed to get them back on track"
      },
      {
        "id": "b",
        "text": "The moderator should point the user to the documentation but should not help"
      },
      {
        "id": "c",
        "text": "The moderator should wait until the user is blocked before helping the user move to the next test task"
      },
      {
        "id": "d",
        "text": "The moderator should have no interaction with the user regardless of how confused or frustrated the user gets"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): The moderator should only step in if the user is completely stuck and then should help by directing the user to the next task. The point of the moderator is to observe and encourage the user to think aloud, not to help the user\nWRONG (d)."
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "UTFL-5.5.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is an example of a positive usability finding?",
    "options": [
      {
        "id": "a",
        "text": "A user found a defect that will need to be fixed prior to release"
      },
      {
        "id": "b",
        "text": "A user complimented the easy to use help feature"
      },
      {
        "id": "c",
        "text": "A user was able to follow the steps of the scenario"
      },
      {
        "id": "d",
        "text": "The moderator did not have to redirect the user at any point"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because a defect is not a positive find\n\nCORRECT (b): Because the user liked this feature\n\nWRONG (c): Because it does not indicate the user liked or disliked anything\n\nWRONG (d): Because it does not indicate the user liked or disliked anything"
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "UTFL-5.6.1",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You have written a usability test report and have included the detailed findings and recommendations, the objectives of the test, the purpose of the test, and a description of the evaluation method that was used during the testing. You have included a single page executive summary. Your findings list includes the 35 defects that were found including a proposed resolution for each defect and the stakeholder’s description of the problem. What should you change to align the report with best practices for this type of report?",
    "options": [
      {
        "id": "a",
        "text": "Remove the stakeholder’s descriptions of the problems and use a technical description"
      },
      {
        "id": "b",
        "text": "Remove the proposed solutions and leave that to the developer to figure out"
      },
      {
        "id": "c",
        "text": "Remove the less important defects from the list to keep the list to no more than 25 defects"
      },
      {
        "id": "d",
        "text": "Remove the executive summary because that should be written as a separate document"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because the stakeholder descriptions may give good insight into the problems\n\nWRONG (b): Because sometimes it helps the developer to understand what the stakeholder wants to see\n\nCORRECT (c): No more than 25 defects should be included on the report per the syllabus\n\nWRONG (d): Because the executive summary is an important part of the report"
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "UTFL-5.6.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "In what way does the Agile software development methodology help reduce internal resistance to usability findings?",
    "options": [
      {
        "id": "a",
        "text": "Because the software is evolving all the time, no one is really invested in its design so changes are accepted easily"
      },
      {
        "id": "b",
        "text": "Because the whole-team approach is used, the team is accustomed to exchanging views freely"
      },
      {
        "id": "c",
        "text": "Because the scrum master guides the project, he will be able to determine which usability issues are valid"
      },
      {
        "id": "d",
        "text": "Because multiple users are a part of the team, they can be involved in the design and usability decisions"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because developers are usually invested in their design, even in agile projects\nCORRECT (b).\n\nWRONG (c): Because this is not the role of the scrum master\n\nWRONG (d): Because the product owner represents the users"
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "UTFL-5.6.3",
    "level": "K3",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You have conducted several usability lab sessions and it is becoming clear that the software is quite difficult to use. The users can’t figure out what to do and end up frustrated with the software when trying to complete fairly simple tasks. You have shared these results with the developers but they don’t think there is a problem. What approach should you take to convince the developers that an issue exists?",
    "options": [
      {
        "id": "a",
        "text": "Write defect reports for each issue and give each a high severity rating"
      },
      {
        "id": "b",
        "text": "Explain to the developer the issue is likely design-related"
      },
      {
        "id": "c",
        "text": "Have the developers sit with the users and walk them through the software so the users don’t get frustrated"
      },
      {
        "id": "d",
        "text": "Have the developers observe a usability session to better understand where the users are getting confused"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): This will not help because it won’t create the understanding that’s needed from the developers\n\nWRONG (b): Because an open confrontation won’t build understanding\n\nWRONG (c): Because the developers need to observe not instruct\n\nCORRECT (d): This is the best way to get the developers to understand the problems that the users are experiencing and to get them to understand that the users aren’t just being stupid but that they are legitimately confused"
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "UTFL-5.7.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "When conducting quality control activities for a usability test, why should you observe the first two or three test sessions?",
    "options": [
      {
        "id": "a",
        "text": "To ensure the sessions are conducted in accordance with the usability test script"
      },
      {
        "id": "b",
        "text": "To ensure the sessions are conducted in accordance with the usability test plan"
      },
      {
        "id": "c",
        "text": "To ensure the sessions are conducted by a test manager"
      },
      {
        "id": "d",
        "text": "To ensure the sessions are documented properly in the test management system"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The usability test script describes how usability test sessions should be run\n\nWRONG (b): Because the plan does not describe the test sessions at the appropriate level\n\nWRONG (c): Because the sessions should be conducted by a moderator\n\nWRONG (d): Because the sessions are usually documented in reports rather than in the test management system"
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "UTFL-5.8.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is the most common problem that occurs when the usability tests are scheduled too late?",
    "options": [
      {
        "id": "a",
        "text": "The test team does not have time to support the test effort as they are busy with the final release testing"
      },
      {
        "id": "b",
        "text": "The management is not interested in the results of the test because they do not understand the goals of usability testing"
      },
      {
        "id": "c",
        "text": "The results may be received when the development team does not have time to address the issues"
      },
      {
        "id": "d",
        "text": "The system testing schedule will be delayed waiting for the completion of usability testing"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because, although the testers may be time compressed as well, it doesn’t matter because the developers don’t have time to make the changes\n\nWRONG (b): Because, although this may be true, it’s not a problem that’s isolated to the usability testing happening late in the schedule. This can be a problem regardless of when the tests are run\n\nCORRECT (c): The biggest issue is that the results may arrive too late for the developers to be able to make the changes\n\nWRONG (d): Because usability testing is usually done during or after system testing and would not delay system testing"
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "UTFL-6.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "If a company has just launched a new mobile application, what information would they expect to get from a usability evaluation?",
    "options": [
      {
        "id": "a",
        "text": "An understanding of the users’ satisfaction with the software"
      },
      {
        "id": "b",
        "text": "An understanding of any learnability issues with the software"
      },
      {
        "id": "c",
        "text": "An assessment of the efficiency and effectiveness of the software"
      },
      {
        "id": "d",
        "text": "An assessment of the market reception of the software and predictive sales information"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Evaluating the level of user satisfaction is the primary goal of a usability evaluation\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "UTFL-6.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Your company has recently released software that supports an ultrasound medical device and is interested in how the usability is perceived by the end users. Marketing wants to use a short questionnaire that will allow the user to respond subjectively to a small set of statements. Which questionnaire would be most appropriate to use to gather this information?",
    "options": [
      {
        "id": "a",
        "text": "SUMI"
      },
      {
        "id": "b",
        "text": "WAMMI"
      },
      {
        "id": "c",
        "text": "SUS"
      },
      {
        "id": "d",
        "text": "RITE"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because SUMI has 50 questions so is not “short”\n\nWRONG (b): Because WAMMI is focused on web software, and this is not web software. RITE it not a standardized questionnaire\n\nCORRECT (c): SUS is the System Usability Scale and uses a 10-item questionnaire to provide a high-level subjective assessment of usability\n\nWRONG (d): It is a test method"
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "UTFL-7.1.1",
    "level": "K4",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "While doing the usability re-design, the developers asked several user representatives for early feedback. However, feedback was inconsistent. When they implemented the code, the developers ignored some of the feedback. Given this information, what is the best approach to use to verify the usability?",
    "options": [
      {
        "id": "a",
        "text": "A usability review should be used to ensure that the design is optimal"
      },
      {
        "id": "b",
        "text": "A usability test should be conducted to ensure the feedback is not dismissed as opinion"
      },
      {
        "id": "c",
        "text": "A usability maturity assessment should be conducted to ensure the team is using best practices"
      },
      {
        "id": "d",
        "text": "A formative usability analysis should be conducted to ensure the design contains important usability characteristics"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because the results from the review are likely to be dismissed by this immature team\n\nCORRECT (b): This is a team with a low usability maturity, and they are most likely to value feedback from real users now that the code has been developed\n\nWRONG (c): Because that assessment is not really needed at this point. It’s clear that they have a low level of maturity because they asked a few users and then picked and chose which comments they wanted to take\n\nWRONG (d): Because a formative analysis should be done during design, not after implementation"
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "UTFL-8.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "Your organization needs to create a usability survey that will gather the information needed to evaluate and improve the usability of your new product. Who should be responsible for these tasks?",
    "options": [
      {
        "id": "a",
        "text": "The usability test moderator"
      },
      {
        "id": "b",
        "text": "The usability tester"
      },
      {
        "id": "c",
        "text": "The test manager"
      },
      {
        "id": "d",
        "text": "The project manager"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): This is a principal task of the usability tester, including creating the survey plan, selecting the questionnaire, analyzing the responses and reporting the results\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "UTFL-8.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "At the end of the usability session, the users will be interviewed to gather their opinions on what worked and what didn’t work, what they liked and what they found difficult to use. Who should conduct this interview?",
    "options": [
      {
        "id": "a",
        "text": "The usability test moderator"
      },
      {
        "id": "b",
        "text": "The usability tester"
      },
      {
        "id": "c",
        "text": "The test manager"
      },
      {
        "id": "d",
        "text": "The project manager"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Conducting the post-session interview is the responsibility of the moderator of the usability test\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "UTFL-5.4.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is “think aloud” usability testing?",
    "options": [
      {
        "id": "a",
        "text": "It is testing conducted by a pair of usability testers who discuss the tests as they execute them"
      },
      {
        "id": "b",
        "text": "It is a form of post-session review where the usability tester discusses what they were thinking as they ran the tests"
      },
      {
        "id": "c",
        "text": "It is a method used during formative evaluation to “talk through” the proposed user interface"
      },
      {
        "id": "d",
        "text": "It is a method used to encourage the user to voice their thoughts as they are conducting their tests"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\nWRONG (c).\n\nCORRECT (d): The think aloud method is used for the moderator to understand what the user is thinking as they are conducting their tests\n\n(Keyword question — the official key lists no LO; mapped to UTFL-5.4.1 by topic.)"
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "UTFL-1.3.3",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You are in a café and have 10-15 minutes available with potential mobile application users. What is your best option regarding usability testing?",
    "options": [
      {
        "id": "a",
        "text": "Perform an informal test session where the potential users try to use the product"
      },
      {
        "id": "b",
        "text": "Perform a survey-based test"
      },
      {
        "id": "c",
        "text": "Perform a questionnaire-based test"
      },
      {
        "id": "d",
        "text": "Perform formative testing for 15 minutes"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This form of usability testing is both informal and quick. It is done in an informal environment, such as a café, and is usually conducted in short time periods such as 15 minutes\n\nWRONG (b): Because although it may be inexpensive, it is not survey-based\n\nWRONG (c): Because although it may be effective, it is not questionnaire-based\n\nWRONG (d): Because although it may be efficient, it’s not formative\n\n(Keyword question — the official key lists no LO; mapped to UTFL-1.3.3 by topic.)"
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "UTFL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "What is accessibility?",
    "options": [
      {
        "id": "a",
        "text": "Usability of a software product by everyone regardless of capabilities or disabilities"
      },
      {
        "id": "b",
        "text": "Usability of a software product by people with limited vision, hearing, dexterity, cognition or physical mobility"
      },
      {
        "id": "c",
        "text": "Usability of a software product by people of different nationalities and languages"
      },
      {
        "id": "d",
        "text": "Usability of the software product focusing on the direct interaction of the software with the user"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because the syllabus specifies that the target users have a disability of some type\n\nCORRECT (b): Per the syllabus\n\nWRONG (c): Is referring to localization testing in some form\n\nWRONG (d): Is usability\n\n(Keyword question — the official key lists no LO; mapped to UTFL-1.1.1 by topic.)"
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "UTFL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "If you are evaluating the services that a user receives prior to using the software, what type of evaluation are you doing?",
    "options": [
      {
        "id": "a",
        "text": "Usability"
      },
      {
        "id": "b",
        "text": "User experience"
      },
      {
        "id": "c",
        "text": "Accessibility"
      },
      {
        "id": "d",
        "text": "User services"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): The services a user receives both before and after actually using the software is a part of the user experience evaluation\nWRONG (c).\nWRONG (d).\n\n(Keyword question — the official key lists no LO; mapped to UTFL-1.1.1 by topic.)"
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "UTFL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is the correct description of the user interface?",
    "options": [
      {
        "id": "a",
        "text": "The user interface consists of all components of a software product that provide information and controls for the user to accomplish specific tasks with the software product"
      },
      {
        "id": "b",
        "text": "The user interface is a software defect which results in difficulty for the user when using the software product"
      },
      {
        "id": "c",
        "text": "The user interface describes a person’s perceptions and responses that result from the use and/or anticipated use of a product, system or service"
      },
      {
        "id": "d",
        "text": "The user interface is a process through which information about the usability of a software product is gathered in order to improve the software product or to assess the value of the software product’s usability."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This is the definition of the user interface\n\nWRONG (b): Describes a usability problem (defect)\n\nWRONG (c): This is the definition of user experience\n\nWRONG (d): This is the definition of usability evaluation\n\n(Keyword question — the official key lists no LO; mapped to UTFL-1.1.1 by topic.)"
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "UTFL-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "If the users are made uncomfortable by the software when they use it, what type of issue is this?",
    "options": [
      {
        "id": "a",
        "text": "Efficiency"
      },
      {
        "id": "b",
        "text": "Functional"
      },
      {
        "id": "c",
        "text": "Effectiveness"
      },
      {
        "id": "d",
        "text": "Satisfaction"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\nWRONG (c).\n\nCORRECT (d): Factors that make the users uncomfortable with the software are satisfaction issues\n\n(Keyword question — the official key lists no LO; mapped to UTFL-1.1.1 by topic.)"
  }
];
