// CT-SEC (Security Testing, Advanced Security Tester syllabus 2016) — ISTQB Sample Exam set A v1.1 (2021-06-08),
// parsed from the PDFs in trainings/: 45 questions, 80 points. Correct answers, points and per-option rationales
// come from the Sample-Exam-Answers PDF; answer-key table and per-question answers cross-checked on import.
// NOTE: the official key lists no LO or K-level for any question ("-"). The `lo`, `level` and `chapter` values here
// are a topic-based mapping made for this site (questions follow syllabus order) so chapter filters work — they
// are not official.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "AS-1.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a purpose of a security audit?",
    "options": [
      {
        "id": "a",
        "text": "To prevent users from using simple passwords"
      },
      {
        "id": "b",
        "text": "To reveal insufficient patch updates provided by the vendor"
      },
      {
        "id": "c",
        "text": "To halt unauthorized intruders from accessing the system"
      },
      {
        "id": "d",
        "text": "To require users to change their password after a predetermined set of days"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a).\n\nCORRECT (b): As keeping the patch updates current on the system is one of the purposes of a security audit. The others are good practices, but not the purpose of the security audit\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "AS-1.1.3",
    "level": "K4",
    "points": 3,
    "chapter": 1,
    "multi": false,
    "text": "You are responsible for ensuring that new vendors brought on externally for the project are fully compliant with government-mandated guidelines as part of your risk assessment. On which stakeholders should you primarily focus to ensure these outside vendors continue to comply?",
    "options": [
      {
        "id": "a",
        "text": "Customers, users, and vendors to ensure there is good communication between them"
      },
      {
        "id": "b",
        "text": "Public users and vendors who will follow the law as it applies to the source of information"
      },
      {
        "id": "c",
        "text": "Federal and local agencies that communicate guidelines to follow"
      },
      {
        "id": "d",
        "text": "Both internal and external sources that will use the information for further analyzing the risk"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Need to be informed, but the information needs to come from the federal and local agencies\n\nWRONG (b): Need to be informed, but the information needs to come from the federal and local agencies\n\nCORRECT (c): As this is the source of the guidelines. The guidelines may change so it is important to keep the communications channels open with these folks\n\nWRONG (d): Need to be informed, but the information needs to come from the federal and local agencies"
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "AS-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is a consequence of a policy that minimizes access to a system or device to acceptable levels?",
    "options": [
      {
        "id": "a",
        "text": "More devices are added to mitigate the impact"
      },
      {
        "id": "b",
        "text": "Proper controls of self-provisioning devices such as routers are prohibited"
      },
      {
        "id": "c",
        "text": "Devices that do not conform are removed from the wireless network"
      },
      {
        "id": "d",
        "text": "Access to the VPN is severely restricted"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): As this would not be an expected results\n\nWRONG (b): Because these controls will be encouraged\n\nCORRECT (c): When this policy is implemented, non-conforming devices will be removed until they conform\n\nWRONG (d): Because access will be controlled, not severely limited"
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "AS-1.2.2",
    "level": "K4",
    "points": 3,
    "chapter": 1,
    "multi": false,
    "text": "Your role as the Security Administrator is to help your organization understand the effectiveness of security policies and procedures across the enterprise. You will report your effectiveness findings to Senior Management after your analysis has been completed. Which of the following is the optimum strategy to accomplish this?",
    "options": [
      {
        "id": "a",
        "text": "Implement a static analysis evaluation independently for both policies and procedures"
      },
      {
        "id": "b",
        "text": "Analyze the results from a security test to validate effectiveness"
      },
      {
        "id": "c",
        "text": "Evaluate security test results that focus on current threats and attacks"
      },
      {
        "id": "d",
        "text": "Evaluate the static test results for new and emerging software threats"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because the static analysis should be over the code, if anything\n\nCORRECT (b): You should analyze the results of a security test to see if the policies and procedures have been followed and are effective\n\nWRONG (c): Because the focus should not just be on current threats and attacks, but also on configurations, etc.\n\nWRONG (d): Because the focus is not just on the emerging threats"
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "AS-2.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "If an organization experiences a security breach and legal action results, how does it help the organization to have done security testing?",
    "options": [
      {
        "id": "a",
        "text": "It can show that the organization has done due diligence to try to prevent such an incident"
      },
      {
        "id": "b",
        "text": "The documentation from the security testing can be used to track down the perpetrator"
      },
      {
        "id": "c",
        "text": "Since any important information would have been backed up before security testing, this backup can be used to restore any compromised information"
      },
      {
        "id": "d",
        "text": "By tracing through the documented tests, the security testing team can discover how the breach was possible"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Per the syllabus\n\nWRONG (b): Because this information would probably not be helpful\n\nWRONG (c): Because the backup would likely be out of date and the information was not necessarily corrupted, but rather stolen or viewed\n\nWRONG (d): Because, although this may help point to areas where testing was not sufficient, it will not support the organization’s defense of legal actions"
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "AS-2.4.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is a correct statement?",
    "options": [
      {
        "id": "a",
        "text": "Information assurance is a part of security testing"
      },
      {
        "id": "b",
        "text": "Information assurance and security testing are two terms for the same thing"
      },
      {
        "id": "c",
        "text": "Security testing is a part of information assurance"
      },
      {
        "id": "d",
        "text": "The two terms refer to different areas of security"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): Security testing is a part of the larger area of information assurance\nWRONG (d)."
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "AS-2.4.2",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are working at a bank as part of the security testing team. During a recent security audit it was noted that the user’s passwords were not strong enough. Since that time, a new set of requirements has been issued to ensure password strength. Given this information:\n\n1. Verify that passwords meet the requirements for length\n2. Verify that passwords meet the requirements for usage of characters, numbers, letters and capitalization\n3. Verify that passwords can be retried three times\n4. Verify that passwords cannot be re-used within a one year timeframe\n5. Verify that passwords must be reset every three months\n6. Verify that the user can request to have their password emailed to them\n7. Verify that the system administrator can reset a locked password\n\nWhat would be a reasonable set of security objectives for general password rule testing?",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 3, 4"
      },
      {
        "id": "b",
        "text": "1, 2, 4, 5"
      },
      {
        "id": "c",
        "text": "3, 4, 6, 7"
      },
      {
        "id": "d",
        "text": "4, 5, 6, 7"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because 3 is functional rather than security-related (unless it locks them out, but we do not know that from this description)\n\nCORRECT (b): Because all of these are valid security objectives\n\nWRONG (c): Because 6 and 7 are both functional rather than specific security requirements\n\nWRONG (d): Because 6 and 7 are both functional rather than specific security requirements"
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "AS-2.5.1",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "Your company recently made headlines after a security breach resulted in confidential customer information being stolen. Management has reacted with an edict that the scope of the security testing objectives needs to be expanded immediately. While you agree that something needs to be done, you are worried that this approach may be too reactive and may not result in the testing that is needed.\n\nAccording to the syllabus, what is a reasonable concern if these initiatives are implemented?",
    "options": [
      {
        "id": "a",
        "text": "The testing will still miss issues because it will not be well-focused"
      },
      {
        "id": "b",
        "text": "The testing will be outsourced so that it can be done more efficiently"
      },
      {
        "id": "c",
        "text": "The testing scope may be too large and there may not be adequate resources to complete it"
      },
      {
        "id": "d",
        "text": "The testing objectives are not clearly defined and may miss the same issues as previously escaped to production"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Is reasonable concerns, but you do not know when or how the test objectives will be defined, so this may be controllable\n\nWRONG (b): Is always a possibility and may be the right thing to do in this case, but there has been no indication that outsourcing will occur at this time\n\nCORRECT (c): per the syllabus as this is a common problem when the objectives are broadly defined\n\nWRONG (d): Is reasonable concerns, but you do not know when or how the test objectives will be defined, so this may be controllable"
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "AS-2.4.1",
    "level": "K2",
    "points": 3,
    "chapter": 2,
    "multi": false,
    "text": "You have just accepted a job to create a security testing team for a company than handles sensitive medical information that is shared between doctors and hospitals. You have noticed that the security around this information is not sufficient to protect it from hackers or even accidental exposure. The person who had your job previously brought in a number of consultants to do testing, but the findings were not documented and no changes were implemented. In fact, you don’t even know what the coverage was from the testing. You have presented your findings to the executive management team. While they have agreed in principle that they need security testing, they have not allocated the necessary budget or time to the project. It appears that while they think security is a good idea, they really have no understanding of what should be done or how it should be done. What should be your first step toward getting the executives aligned with the work that needs to be done?",
    "options": [
      {
        "id": "a",
        "text": "Create a detailed list of all the possible security holes and present these to the executives"
      },
      {
        "id": "b",
        "text": "Provide a summary of the testing approach that you propose and give examples of how the testing will be conducted"
      },
      {
        "id": "c",
        "text": "Bring in the legal team to explain what a security breach could cost the organization"
      },
      {
        "id": "d",
        "text": "Create a security policy and security testing policy and demonstrate how that aligns with your proposed testing approach"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): At this point although they might be useful if you have trouble getting funding when you work to implement the policy\n\nWRONG (b): Because you need an overall policy before you define the approach\n\nWRONG (c): At this point although they might be useful if you have trouble getting funding when you work to implement the policy\n\nCORRECT (d): At this point, the organization needs a high-level policy and plan to move forward. Without this policy, the testing may continue to be sporadic and high-level support and funding will be difficult"
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "AS-2.6.3",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You have just come from a meeting where there was much discussion regarding the security approach of the organization. One of the points of emphasis was the importance of testing to ensure that data is protected from fraudulent access, particularly credit card information. You have been asked to prepare a set of testing objectives that will help address this risk area. One of your tasks is to ensure that you are covering all the concerns of the stakeholders. Which stakeholder group is most likely to see the benefits from your efforts?",
    "options": [
      {
        "id": "a",
        "text": "Executive management"
      },
      {
        "id": "b",
        "text": "Compliancy officers"
      },
      {
        "id": "c",
        "text": "Business customers"
      },
      {
        "id": "d",
        "text": "Regulatory officers"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Will not be involved, this is not usually their primary benefit\n\nWRONG (b): Will not be involved, this is not usually their primary benefit\n\nCORRECT (c): The business customers will be most concerned with protection from fraudulent access as it is their data that is vulnerable\n\nWRONG (d): Will not be involved, this is not usually their primary benefit"
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "AS-3.1.1",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "As a Security Administrator you are responsible for all aspects of the security process, including testing. For this particular process you are to use conceptual tests as a basis for manual tests and execute these from an external vendor’s perspective. Which security testing process does this most parallel?",
    "options": [
      {
        "id": "a",
        "text": "Security test creation of conditions and objectives"
      },
      {
        "id": "b",
        "text": "Security test implementation"
      },
      {
        "id": "c",
        "text": "Overall evaluating and reporting of security testing"
      },
      {
        "id": "d",
        "text": "Security test analysis and design"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because this has already been done with the creation of the conceptual tests\n\nCORRECT (b): The use of the conceptual tests to create the manual tests and perform the execution is part of the security test implementation\n\nWRONG (c): Will occur after the tests have been executed\n\nWRONG (d): Because this has already been done with the creation of the conceptual tests"
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "AS-3.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 3,
    "multi": false,
    "text": "You have been developing a security test plan for a system that will store medical information for patients and will transfer that data to specialist doctors. You have covered the following areas in your plan:\n\n Scope (what is in scope and out of scope)  Roles and assignments  Responsibilities (vendors vs. internal)  High level schedule  Environment requirements and setup  List of necessary authorizations and approvals\n\nWhat information do you still need to supply in this test plan to meet the minimum requirements as noted in the syllabus?",
    "options": [
      {
        "id": "a",
        "text": "A list of the necessary credentials and training for the personnel who will be conducting the testing"
      },
      {
        "id": "b",
        "text": "A schedule showing the time that will be required to design, run and evaluate the security tests"
      },
      {
        "id": "c",
        "text": "A copy of the regulatory standards that must be met by this system"
      },
      {
        "id": "d",
        "text": "A list of the individuals who will be doing the testing and their contact information in the event of a security breach"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Might be needed but that is not one of the minimum requirements and may already be understood in the roles and responsibilities section\n\nCORRECT (b): Per the syllabus\n\nWRONG (c): Because the standards might be referenced but not included in the plan\n\nWRONG (d): Because this level of detail does not belong in the plan and the individual testers should not be contacted during a breach"
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "AS-3.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following test cases would best test a system’s security procedure?",
    "options": [
      {
        "id": "a",
        "text": "Three unsuccessful login attempts will generate a lock-out message. Contact your manager or the System Administrator so they can give you a temporary password over the phone. You must then change the temporary password upon logging in. You log out then log back in using your newly created password."
      },
      {
        "id": "b",
        "text": "You receive a lock-out message after several attempts to log in. You call IT support to obtain a new password. You log in with the temporary password, log back out, then log in again and enter a new password."
      },
      {
        "id": "c",
        "text": "After several attempts you are locked out of the system. You use a password that worked previously. However, it no longer works. You attempt to create a new password but you are now locked out. A complete reboot of the machine is the next step to take you to the prompt to re-enter the password."
      },
      {
        "id": "d",
        "text": "After the first attempt to use an invalid password you immediately pull up a list of passwords on your notepad on your PC to ensure you are using the correct one. You try another password from the list and it works."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a).\n\nWRONG (b): Because of the word “several”\n\nWRONG (c): Because of the word “several”\n\nWRONG (d): Because this would definitely not be a good security practice"
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "AS-3.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following are main characteristics of an effective security test environment?",
    "options": [
      {
        "id": "a",
        "text": "Closely tied to production systems to enhance security at all points"
      },
      {
        "id": "b",
        "text": "Isolates different old versions of the operating systems for use in the environment"
      },
      {
        "id": "c",
        "text": "Mimics the production environment in terms of access rights"
      },
      {
        "id": "d",
        "text": "Includes all production environment plug-ins as well as other plug-ins not in the production environment in order to ensure the most comprehensive setup"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because the system do not need to be and probably should not be connected\n\nWRONG (b): May be useful, but is not a main characteristic\n\nCORRECT (c): Because the closer the test environment mimics production, the more valid the testing will be. This is particularly true when it comes to access rights and delegation settings\n\nWRONG (d): Because it includes plug-ins that are not in production which could result in both false positives and false negatives from the testing"
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "AS-3.4.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What is a significant concern when seeking approval for the security testing tools?",
    "options": [
      {
        "id": "a",
        "text": "Some countries prohibit the use of certain security testing tools"
      },
      {
        "id": "b",
        "text": "Ensure the approval process for security testing tools can be bypassed on an exception basis in cases where a malicious event is in progress"
      },
      {
        "id": "c",
        "text": "The risks of the tool are rarely known before it is procured and are better discovered when the tools is in use"
      },
      {
        "id": "d",
        "text": "Because security testing tool risks are usually known, there is no need for a mitigating strategy"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): While some tools are quite good and effective for testing, they may be prohibited by some countries and some organizations\n\nWRONG (b): Because there is always a danger of deploying a sub-optimal tool to deal with a crisis. A fast-track approval process makes sense, but a complete bypass is risky\n\nWRONG (c): Because there may be unknown risks from tools and it is better to do the due diligence in tool selection rather than deal with the consequences of a poorly selected tool\n\nWRONG (d): Because there may be unknown risks from tools and it is better to do the due diligence in tool selection rather than deal with the consequences of a poorly selected tool"
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "AS-3.5.1",
    "level": "K4",
    "points": 3,
    "chapter": 3,
    "multi": false,
    "text": "You are reviewing a set of security test results run on a product that is going through final testing before release to production. This is an update of a version that is currently in production. The application just tested was your e-commerce site, and it has a defect that allows cross-site scripting. Which of the following is the proper set of steps you should take?",
    "options": [
      {
        "id": "a",
        "text": "Report the problem to the developer, add it to the stakeholder report, and continue testing for other types of defects"
      },
      {
        "id": "b",
        "text": "Test if the problem exists in the current production version, document the defect in a secure system, notify the developer, continue testing for other XSS defects"
      },
      {
        "id": "c",
        "text": "Investigate the extent of the problem by conducting further tests on the planned release with particular concentration on other XSS isses, conduct static analysis on the code"
      },
      {
        "id": "d",
        "text": "Inform management, document the defect and include it in your weekly status report to stakeholders, continue testing for other security defects to determine the extent of the security issues"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because the defect should not be publicized in the stakeholder report\n\nCORRECT (b): The first priority is to see if the problem exists in the production version. The defect should be documented only in a secure defect tracking system since the problem may exist in production. Since one XSS issue was found, there may be others so continued testing is warranted\n\nWRONG (c): Because while further testing is needed, notification is critical\n\nWRONG (d): Because of the stakeholder reporting"
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "AS-4.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "At what point in the SDLC should there be checking to ensure that proper secure coding practices have been followed?",
    "options": [
      {
        "id": "a",
        "text": "Component testing"
      },
      {
        "id": "b",
        "text": "Integration testing"
      },
      {
        "id": "c",
        "text": "System testing"
      },
      {
        "id": "d",
        "text": "Security acceptance testing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The checking should be done as soon as the code is written\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "AS-4.2.1",
    "level": "K4",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You have been asked by the business analyst to help with defining the requirements for the security aspects of a system. This is a safety-critical system that stores medical information for patients and supplies this information to health professionals at hospitals, doctors’ offices and ambulances. At what point in the lifecycle should the security requirements be documented and at what level of detail?",
    "options": [
      {
        "id": "a",
        "text": "They should not be documented formally because of the need to protect the security implementation within the code from outsiders"
      },
      {
        "id": "b",
        "text": "They should be documented in a detailed and unambiguous way in the requirements documents during the requirements phase"
      },
      {
        "id": "c",
        "text": "They should be documented during the design phase when the code approach is known rather than at the requirements phase when the approach is not known"
      },
      {
        "id": "d",
        "text": "They should be restricted to the functional access and availability requirements from the user’s perspective and should be documented during the requirements phase"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Although it is important that the documented requirements be protected from those who do not need to know\nCORRECT (b).\n\nWRONG (c): Because although they may be refined at the design level, they should be initially captured during the requirements definition phase\n\nWRONG (d): Because security requirements also need to include secure coding practices, etc."
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "AS-4.3.1",
    "level": "K4",
    "points": 3,
    "chapter": 4,
    "multi": false,
    "text": "A deficiency has been discovered in production. If an unauthorized user copies a URL from a session of an authorized user, the unauthorized user can paste the URL into their session and continue to process with the authorized user’s rights. In the case that was reported, the unauthorized user was able to use the authorized user’s URL to change the system administration password. In order to close this gap, the developers will check the session ID and the user ID anytime a URL is used.\n\nWhat is a realistic concern for this fix?",
    "options": [
      {
        "id": "a",
        "text": "It will not fix the problem and session hijacking will still be possible"
      },
      {
        "id": "b",
        "text": "It will fix the problem, but the usability may be adversely affected"
      },
      {
        "id": "c",
        "text": "It will fix the problem, but performance may be adversely affected"
      },
      {
        "id": "d",
        "text": "It will not fix the problem and will expose a new vulnerability with session IDs"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because the fix should fix the problem\n\nWRONG (b): Because there should be no impact to usability (unless you are the hacker!)\n\nCORRECT (c): It is likely that this level of checking will slow down the system because it will have to check on each screen change\n\nWRONG (d): Because the fix should fix the problem"
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "AS-4.4.2",
    "level": "K3",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "During component level testing, why should the security tester review compiler warnings?",
    "options": [
      {
        "id": "a",
        "text": "Because these indicate security problems that must be fixed"
      },
      {
        "id": "b",
        "text": "Because these indicate potential issues that should be investigated"
      },
      {
        "id": "c",
        "text": "Because these indicate coding issues that will cause functional defects"
      },
      {
        "id": "d",
        "text": "Because these indicate poor programming practices that will increase maintainability"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because warnings do not necessarily require a fix\n\nCORRECT (b): From a security testing standpoint, compiler warnings indicate potential issues that could lead to security gaps\n\nWRONG (c): Is not related to security testing\n\nWRONG (d): Is not related to security testing"
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "AS-4.4.4",
    "level": "K2",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You have been testing a system that has 20 defined components. You have done extensive security testing on each of the components. The system is now ready to move into component integration security testing. How should you approach this testing?",
    "options": [
      {
        "id": "a",
        "text": "Since component integration testing is concerned with the summation of the vulnerabilities of the individual components, conducting the same tests on the integrated components is the best approach."
      },
      {
        "id": "b",
        "text": "The main risk is now in the integration of the components themselves, so testing should cover each interface and verify that there are no vulnerabilities in the interfaces and the components should also be retested."
      },
      {
        "id": "c",
        "text": "It is likely that new vulnerabilities are present with the integrated components as well as with the larger system and infrastructure that is now testable, so testing should expand to include these new areas."
      },
      {
        "id": "d",
        "text": "Since the components are now integrated, the security risks will be reduced because the possible interactions are now limited so only the integration points should be tested and no component re-testing is needed."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because component integration testing is not the sum of the individual components\n\nWRONG (b): Because the testing should not be limited to just the interfaces and the original components\n\nCORRECT (c): New vulnerabilities may be present with the integrated components and new testing areas are likely to be available\n\nWRONG (d): Because security risks are likely to be increased, not decreased"
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "AS-4.4.2",
    "level": "K3",
    "points": 3,
    "chapter": 4,
    "multi": false,
    "text": "You are creating security test cases to check for SQL injection on an input field that allows up to 5 alphanumeric characters. You are planning to apply equivalence partitioning to reduce the number of test cases you will need to execute. Given this information, which of the following is the minimum set of inputs you would need to use to test this field?",
    "options": [
      {
        "id": "a",
        "text": "bbbbb, 12345, ‘"
      },
      {
        "id": "b",
        "text": "%, ‘, @, ab123"
      },
      {
        "id": "c",
        "text": "‘, ab123"
      },
      {
        "id": "d",
        "text": "‘"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Has more than the minimum number\n\nWRONG (b): Has more than the minimum number\n\nCORRECT (c): As this has one test for SQL injection and one for a valid input. This is the minimum number of tests\n\nWRONG (d): It does not have enough tests because it does not test the valid input. It would be advisable to do more testing on the various characters that can support SQL injection, but this question is asking to apply EP and get the minimum number of test cases"
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "AS-4.5.1",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "You have been given the following requirement for security testing.\n\nA user will be allowed to request their password. If they make this request, they must answer two of their three security questions correctly. If they answer correctly, a link will be sent to their email. The link will take them to a page where they can reset their password. Once reset, they can login with the new password. The link must be disabled 1 hour after it is sent. The user is allowed only two password requests without a reset, after which they will have to call the help desk. For any other errors, the user ID is locked and must be unlocked by the help desk.\n\nWhich of the following is the minimum list of test conditions to adequately test the functional security covered by this requirement?",
    "options": [
      {
        "id": "a",
        "text": "Invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; link good; link expired; two requests without reset; three requests without reset"
      },
      {
        "id": "b",
        "text": "Valid user; 2 correct answers; good email; reset with good password; link good; two requests without reset"
      },
      {
        "id": "c",
        "text": "Invalid user; 2 incorrect answers; bad email; reset with bad password; link expired; three requests without reset"
      },
      {
        "id": "d",
        "text": "Buffer overflow on each input field; SQL injection on each input field; XXS on the login page and reset password page, invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; link good; link expired; two requests without reset; three requests without reset"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): As it covers the main scenarios for the functional security specified in the requirement\n\nWRONG (b): Tests only on the valid tests\n\nWRONG (c): Tests only the error conditions\n\nWRONG (d): Expands into attack testing as well as functional testing"
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "AS-4.5.2",
    "level": "K3",
    "points": 2,
    "chapter": 4,
    "multi": false,
    "text": "A user will be allowed to request their password. If they make this request, they must answer two of their three security questions correctly. If they answer correctly, a link will be sent to their email address. The link will take them to a page where they can reset their password. Once reset, they can login with the new password. The link must be disabled one hour after it is sent. The user is allowed only two password requests without a reset, after which he will have to call the helpdesk. For any other errors, the user ID is locked and must be unlocked by the help desk.\n\nConsidering:\n\n1. User can reset password if less than three requests have been made since last reset, and two security questions are answered correctly, and the link is used to reset and a valid password is entered at the reset prompt.\n2. More than two requests results in user ID locked.\n3. More than two requests without a reset results in user ID locked.\n4. More than two security questions missed results in error.\n5. More than two security questions missed, user ID is locked.\n6. If email error is received by the system, user ID is locked.\n7. If invalid password is entered on reset, the user is prompted with the proper rules.\n8. Reset password can be used to log into the system.\n\nWhich of the following is a valid set of acceptance criteria for this requirement?",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 4, 6, 7, 8"
      },
      {
        "id": "b",
        "text": "1, 2, 3, 4, 5, 6, 7, 8"
      },
      {
        "id": "c",
        "text": "3, 5, 6, 7, 8"
      },
      {
        "id": "d",
        "text": "1, 3, 5, 6, 8"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Consider:  7 is tempting and would be logical, but it is not specified in the requirement  The others are not true. Because they do not contain the proper criteria  2 Is not true, where 3 is true  4 Is not true, where 5 is true\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\n\nCORRECT (d): Because it provides the acceptance criteria based on the requirement"
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "AS-5.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You are implementing procedures for evaluating system hardening in an effort to test the system’s security effectiveness. What procedure might you follow to ensure the hardening mechanisms put in place are working as expected?",
    "options": [
      {
        "id": "a",
        "text": "Closely monitor various security performance reports and metrics to determine if the correct level of access and authentication is achieved"
      },
      {
        "id": "b",
        "text": "Frequently audit strong authentication to ensure a high level of intrusion protection is maintained at all times"
      },
      {
        "id": "c",
        "text": "Evaluate the hardware components that have been hardened and compare these to other hardened software components to ensure equilibrium is being achieved"
      },
      {
        "id": "d",
        "text": "Enlist a known hacker to conduct an independent assessment of the hardening effectiveness"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): There are security performance reports and metrics available that can be used to determine if you have achieved the right level of hardening\n\nWRONG (b): Because strong authentication is just one aspect of hardening\n\nWRONG (c): Because equilibrium is not needed. The more critical areas may warrant better hardening\n\nWRONG (d): Because there is, the danger of the hacker not telling you what is found"
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "AS-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What are key attributes of security authentication of a medium complexity IT system?",
    "options": [
      {
        "id": "a",
        "text": "It verifies that the user has the correct profile and corresponding rights to access limited parts of the system"
      },
      {
        "id": "b",
        "text": "It is key in identifying the amount of system resources the user can utilize"
      },
      {
        "id": "c",
        "text": "It verifies that user entering the system is legitimate"
      },
      {
        "id": "d",
        "text": "It uses common credentials among users to gain entry into the system"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because it is not looking at access rights\n\nWRONG (b): Because system resource utilization is not a consideration\n\nCORRECT (c): It verifies that the user is legitimate and authorized\n\nWRONG (d): Because common credential verification should not be used – each individual should have unique credentials"
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "AS-5.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "Typical encryption mechanisms are vulnerable to threats which makes it important to understand their effectiveness at any given time. Identify which of the following you should implement to gain confidence in your encryption mechanisms?",
    "options": [
      {
        "id": "a",
        "text": "Evaluate cryptographic keys to ensure they are at least 256 bits in size"
      },
      {
        "id": "b",
        "text": "Ensure you are applying random algorithms to generate random numbers where possible"
      },
      {
        "id": "c",
        "text": "Develop tests that ensure symmetric encryption is used in the right modes"
      },
      {
        "id": "d",
        "text": "Remove all WEP protocols to see how the system performs"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because a minimum of 768 bits should be used\n\nWRONG (b): Because the random algorithm is easy to crack\n\nCORRECT (c): Per the syllabus\n\nWRONG (d): Because WEP protocols should be left in place, not removed"
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "AS-5.4.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which is true of the relationship between a firewall and a network zone?",
    "options": [
      {
        "id": "a",
        "text": "Both a network zone and firewall focus on the size of data that is being passed through"
      },
      {
        "id": "b",
        "text": "A network zone communicates through safe protocol options while a firewall ensures those protocols are safe"
      },
      {
        "id": "c",
        "text": "A sub-network can be considered a network zone and a firewall can be traffic monitoring software"
      },
      {
        "id": "d",
        "text": "A network zone blocks malicious traffic from an untrusted zone which the firewall does not filter"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because network zones do not focus on size of data\n\nWRONG (b): Network zones are parts of the configuration of the firewall and define the authorized flow of data between networks\n\nCORRECT (c): Per the syllabus\n\nWRONG (d): Because the firewall blocks the traffic, not the network zone"
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "AS-5.5.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following would you apply to most effectively test the abilities of an intrusion detection tool?",
    "options": [
      {
        "id": "a",
        "text": "Develop a series of scenarios based on past experience"
      },
      {
        "id": "b",
        "text": "Use tests that generate malicious traffic to add new intrusive specifications"
      },
      {
        "id": "c",
        "text": "Apply it to situations of known malicious traffic"
      },
      {
        "id": "d",
        "text": "Use it in conjunction with other IDS products when possible"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Might be useful, but will not be as effective in making sure the tool will work for the future as well as the present\n\nCORRECT (b): Because these tests can be used to add new intrusive specifications, which were, formerly considered to be authorized traffic\n\nWRONG (c): Might be useful, but will not be as effective as B in making sure the tool will work for the future as well as the present\n\nWRONG (d): Is true for the usage, but not for the testing"
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "AS-5.6.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following is a main disadvantage to malware scanning tools?",
    "options": [
      {
        "id": "a",
        "text": "They only detect certain levels of malware"
      },
      {
        "id": "b",
        "text": "They can only detect malware that is known to the tool"
      },
      {
        "id": "c",
        "text": "They tend to be overly complex to run"
      },
      {
        "id": "d",
        "text": "They do not provide updating and reporting capabilities"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): May be correct depending on the particular focus of the tool, but is not a main disadvantage\n\nCORRECT (b): The malware tool can only detect malware that it already knows about\n\nWRONG (c): The tools are normally easy to run\n\nWRONG (d): Because the tools provide the ability to update themselves with new findings and to produce reports"
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "AS-5.7.2",
    "level": "K3",
    "points": 2,
    "chapter": 5,
    "multi": false,
    "text": "You need to remove personal identification numbers from a legacy system in order to reduce risk during testing. Part of your data obfuscation plan includes verifying how effectively the data is masked.\n\nWhich of the following is the most effective approach to use?",
    "options": [
      {
        "id": "a",
        "text": "Manually verify in the database that the data targeted for obfuscation is no longer understandable for logical human interpretation"
      },
      {
        "id": "b",
        "text": "Design a brute force attack on the obfuscated data"
      },
      {
        "id": "c",
        "text": "Substitute the sensitive data with random data of varying string lengths"
      },
      {
        "id": "d",
        "text": "Enlist the development teams to generate a program to stress the database for vulnerabilities"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because it is generally not feasible because of the amount of data and time it would take\n\nCORRECT (b): Per the syllabus. A brute force or dictionary attack can be used to see if personal information is still accessible\n\nWRONG (c): Because this is more of an anonymizing exercise. Also, the field length might be limited so this may corrupt the data\n\nWRONG (d): Because we are not trying to stress test the database itself"
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "AS-6.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "What is often considered the weakest link in software security?",
    "options": [
      {
        "id": "a",
        "text": "The lack of a consistent and comprehensive security training plan"
      },
      {
        "id": "b",
        "text": "The effort necessary to maintain document and procedure updates in order to keep up with continuing security threats"
      },
      {
        "id": "c",
        "text": "The behavior of humans"
      },
      {
        "id": "d",
        "text": "The constant advancement in malicious techniques"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a).\nWRONG (b).\n\nCORRECT (c): It is the people and their behavior that is the weakest link\nWRONG (d)."
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "AS-6.1.2",
    "level": "K3",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Which of the following is a potential security risk?",
    "options": [
      {
        "id": "a",
        "text": "Publishing an accounting department’s organization chart on the company’s web site"
      },
      {
        "id": "b",
        "text": "Posting birthday wishes for a co-worker on Facebook"
      },
      {
        "id": "c",
        "text": "Posting the company phone directory on the company Intranet"
      },
      {
        "id": "d",
        "text": "Posting professional experience in a Linked In profile"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): This information could be used to determine approval chains for invoice approvals, which could then be used to create and approve fake invoices if the accounting system can be hacked\n\nWRONG (b): Because the birth date should not be used in any employee information such as a password\n\nWRONG (c): Because the company intranet should be behind the firewall with other protected information\n\nWRONG (d): Because this information is unlikely to be useful to a hacker"
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "AS-6.1.4",
    "level": "K4",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "You are responsible for security testing your company’s financial application. You have recently received email from a person who claims to have hacked into the system using Shodan and has discovered that you are running an out-of-date and vulnerable OS on one of your servers. You have checked and the hacker is correct. You have made sure the server has been updated. Your preliminary check has shown no trace of how the hacker got into your system. Should you be concerned?",
    "options": [
      {
        "id": "a",
        "text": "No, this is a “white hat” hacker and means no harm to your company"
      },
      {
        "id": "b",
        "text": "No, you have fixed the vulnerability so the system is now safe"
      },
      {
        "id": "c",
        "text": "Yes, your security testing is not sufficient and you need to re-run your tests to see what was missed"
      },
      {
        "id": "d",
        "text": "Yes, since the hacker did not admit how he got in the system, he can still access it and may decide to exploit the vulnerability next time"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): This could be a dangerous assumption\n\nWRONG (b): Because the hacker still has access to the system\n\nWRONG (c): May be true, but re-running the same tests is not going to help with this issue\n\nCORRECT (d): This is your biggest point of concern"
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "AS-6.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 6,
    "multi": false,
    "text": "Why is an attack from inside the organization particularly worrisome?",
    "options": [
      {
        "id": "a",
        "text": "The attacker is likely driven by curiosity and will be unrelenting"
      },
      {
        "id": "b",
        "text": "The attacker is likely bored at work and will continue hacking the system for entertainment"
      },
      {
        "id": "c",
        "text": "The attacker is already inside the firewall and is an authorized system user"
      },
      {
        "id": "d",
        "text": "The attacker is likely to launch a DOS attack which will cripple the servers"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Is more likely to occur with an external attacker\n\nWRONG (b): Is more likely to occur with an external attacker\n\nCORRECT (c): The biggest threat here is that the external protections are useless because the attacker is already inside the system\n\nWRONG (d): Is not the most likely attack – generally, internal users are after information they can sell or can use to embarrass the company"
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "AS-6.1.4",
    "level": "K4",
    "points": 3,
    "chapter": 6,
    "multi": false,
    "text": "You are working in an organization where system administration access to the servers is highly restricted. Only three long-term and trusted employees know the root passwords. Recently though, there have been several odd occurrences. An unknown program, called “IKnowYourBirthday” was found to be running and was emailing birthday greetings to staff members. The birth dates were correct and the greetings were all signed “From your favorite server”. This program was killed and no one could figure out where it came from. A second problem occurred when the corporate phone list was hacked and all the phone numbers were changed to 867-5309 (apparently taken from the song by the same name). The correct list was restored and again no one could figure out how it had been done, although the new file had been created by “root”. You’ve just received a phone call from the lead system administrator telling you that the root password has been changed. It has been determined that the password was set to the lead system administrator’s dog’s name.\n\nFurther investigation has discovered that the problems started shortly after a series of virus– infected emails were detected. When the first one was found, safeguards were immediately put in place to stop any further spread of the virus, but now you are wondering if someone managed to get into the system via code that was introduced into the system by the virus.\n\nWhat should you do now as your next step of investigation?",
    "options": [
      {
        "id": "a",
        "text": "Look to see if the HR birthdate information was accessed from outside the system, and if so, trace the IP address"
      },
      {
        "id": "b",
        "text": "Verify if the lead system administrator’s dog’s name is posted somewhere in social media"
      },
      {
        "id": "c",
        "text": "Check the suspicious email that was sent and try to trace the IP address"
      },
      {
        "id": "d",
        "text": "Check the personnel files of the other two system administrators to see if there is an indication that they are unhappy"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): would be the next likely paths to pursue since it is possible this is an internal attack (D) or that the attacks are separate and the birthdate information might provide some information as to who has been near it\n\nWRONG (b): Might be pursued, but it would be easier to just ask the sys admin who would know the dog’s name\n\nCORRECT (c): It is the best place to start because it appears that this might have been where the problem originated. If C does not find anything\n\nWRONG (d): Would be the next likely paths to pursue since it is possible this is an internal attack or that the attacks are separate and the birthdate information might provide some information as to who has been near it"
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "AS-6.3.2",
    "level": "K3",
    "points": 2,
    "chapter": 6,
    "multi": false,
    "text": "During testing of an upgrade, you have discovered that it is possible to create a man-in-the-middle attack that can change the amount charged to customers on your e-commerce web site. Your tester successfully changed the amount so that customers were all getting a 10% discount. What should you do first?",
    "options": [
      {
        "id": "a",
        "text": "The tester should be discouraged from creating these types of attacks as they are not realistic in the production environment"
      },
      {
        "id": "b",
        "text": "Immediately inform management that the attack was created by the test team as part of testing, in case it is detected"
      },
      {
        "id": "c",
        "text": "Work with the developers to implement checks such as SSL-trip to ensure certificates are valid and not self-signed"
      },
      {
        "id": "d",
        "text": "Check production to see if the vulnerability is also in the production code"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Because this is exactly what security testers should be doing\n\nWRONG (b): Because management permission should always be obtained prior to testing, not afterward\n\nWRONG (c): Should be the next step to ensure the developers are coding correctly and using all available tools to check for this type of issue\n\nCORRECT (d): The first priority is to see if the vulnerability is in the production code and get the problem fixed immediately"
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "AS-7.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "Why is it important to reassess security risk expectations on a frequent basis?",
    "options": [
      {
        "id": "a",
        "text": "Stakeholders have to be educated on all security risks at all times"
      },
      {
        "id": "b",
        "text": "Stakeholders will make business decisions based on associated security risk levels"
      },
      {
        "id": "c",
        "text": "Users must develop a manual-based risk mitigation plan"
      },
      {
        "id": "d",
        "text": "Both user and stakeholder expectations regarding security should be kept from changing"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because everyone does not need to know everything\n\nCORRECT (b): Stakeholders often have to make business decisions regarding the security risk level that is acceptable and any necessary mitigation plans\n\nWRONG (c): Because a manual-based risk mitigation plan is not feasible and the users probably would not be implementing this anyway\n\nWRONG (d): Because expectations should change"
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "AS-7.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 7,
    "multi": false,
    "text": "Which of the following is an important aspect of security test results?",
    "options": [
      {
        "id": "a",
        "text": "They are published for users and stakeholders to access in order to help them better understand risk"
      },
      {
        "id": "b",
        "text": "They should be shared with developers across the enterprise in order to mitigate risk for future development projects"
      },
      {
        "id": "c",
        "text": "The fewer people that know the better"
      },
      {
        "id": "d",
        "text": "Results should always be classified by criticality"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because of the need to tightly control access to the results\n\nWRONG (b): Because only limited parts of the report should be made available to the developers to improve their coding. Likewise, limited parts should be made available to infrastructure people to fix any infrastructure issues that may have been found\n\nCORRECT (c): The results from security tests should be kept confidential and access to the results should be tightly controlled. This is because the outcome of the tests often identify weaknesses in the current system under test and often the same issues exist with the production system\n\nWRONG (d): Is true, but is not the most important aspect"
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "AS-7.2.3",
    "level": "K4",
    "points": 3,
    "chapter": 7,
    "multi": false,
    "text": "You are finalizing your security test status report for a project that is ready for deployment into production. There is a high degree of risk for this project due to the nature of the system. As a result, you want to place particular emphasis on risk. Based on this, what is the best way to articulate risk on your report?",
    "options": [
      {
        "id": "a",
        "text": "A descriptive risk assessment included in the summary"
      },
      {
        "id": "b",
        "text": "Overall risk included in the last section of the report"
      },
      {
        "id": "c",
        "text": "Risk impact described in the summary and later detailed in terms of specific vulnerabilities"
      },
      {
        "id": "d",
        "text": "Risk impact is not part of the summary of the report"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because the details should not be in the summary\n\nWRONG (b): Because the information should not be recorded only at the end of the report\n\nCORRECT (c): The risk impact should be described in the summary and detailed later in the report by discussing specific vulnerabilities\n\nWRONG (d): Because this is an important part of the report"
  },
  {
    "id": 41,
    "exam": "A",
    "num": "41",
    "lo": "AS-8.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "In what way are dynamic security analysis tools different from general dynamic analysis tools?",
    "options": [
      {
        "id": "a",
        "text": "The security tools probe the system rather than just the application under test"
      },
      {
        "id": "b",
        "text": "The security tools work the same in dynamic or static mode"
      },
      {
        "id": "c",
        "text": "The security tools are better suited to detect problems such as memory leaks"
      },
      {
        "id": "d",
        "text": "The security tools need to be tailored to the language in which the application is implemented"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a).\n\nWRONG (b): Because there are both dynamic and static analysis security tools\n\nWRONG (c): Because memory leaks are detected by the general dynamic analysis tools, not the security specific ones\n\nWRONG (d): Because this is true of all static analysis tools"
  },
  {
    "id": 42,
    "exam": "A",
    "num": "42",
    "lo": "AS-8.2.1",
    "level": "K4",
    "points": 3,
    "chapter": 8,
    "multi": false,
    "text": "You have been given the job of testing the organization’s firewall. You have reviewed the implementation plan and steps, verified that the configuration has been set up as instructed by the firewall vendor and have conducted port scanning. Your organization is particularly concerned about denial of service (DOS) attacks, particularly since they had one when the old firewall was in place. What type of testing should you conduct to help detect unexpected behavior that could be exploited by a DOS attack?",
    "options": [
      {
        "id": "a",
        "text": "Create tests that will send malformed network packets or fuzzed data and see if they are detected and rejected by the firewall"
      },
      {
        "id": "b",
        "text": "Implement automated tests to stress test the servers to test the failover capabilities"
      },
      {
        "id": "c",
        "text": "Test the encryption and decryption algorithms to determine if they are fast enough to deal with the load of a DOS attack"
      },
      {
        "id": "d",
        "text": "Conduct software component hardening to ensure the attack surface is reduced as much as possible"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): As both of these techniques are used to test firewalls\n\nWRONG (b): Because the goal is to prevent the attack rather than let it get through the firewall\n\nWRONG (c): Because the goal is to prevent the attack rather than let it get through the firewall\n\nWRONG (d): Because software component hardening will help the individual software components, but not the firewall and its implementation"
  },
  {
    "id": 43,
    "exam": "A",
    "num": "43",
    "lo": "AS-8.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 8,
    "multi": false,
    "text": "If you have acquired a tool that is used under the GNU General Public License, which of the following is an important consideration for tool maintenance?",
    "options": [
      {
        "id": "a",
        "text": "Reliability of the vendor and ability to provide support"
      },
      {
        "id": "b",
        "text": "Frequency and availability of updates from the vendor"
      },
      {
        "id": "c",
        "text": "Technical capabilities of your team to support and customize the tool for your environment"
      },
      {
        "id": "d",
        "text": "License cost and support contract cost"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because there is no vendor b) B incorrect. Because there is no vendor\n\nCORRECT (c): The GNU license is free and it is an open source community so there is no vendor\n\nWRONG (d): Because the tool is free although you may have development costs in customizing the tool for your needs"
  },
  {
    "id": 44,
    "exam": "A",
    "num": "44",
    "lo": "AS-9.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 9,
    "multi": false,
    "text": "Which of the following is a benefit of conforming to security testing standards?",
    "options": [
      {
        "id": "a",
        "text": "They are consistent and easy to follow as they are separate and independent from project goals and objectives"
      },
      {
        "id": "b",
        "text": "They are the building blocks for future security testing, eliminating the need to start from scratch"
      },
      {
        "id": "c",
        "text": "They outline an effective offense to meet threats before they enter the system"
      },
      {
        "id": "d",
        "text": "They allow for latitude in security practices since threats are always changing dynamically"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because security standards may be mentioned in the project goals and objectives\nCORRECT (b).\n\nWRONG (c): Because they are defensive in nature\n\nWRONG (d): Because they define certain standards that help define practices – the standards should be responsive to changes in the threats"
  },
  {
    "id": 45,
    "exam": "A",
    "num": "45",
    "lo": "AS-9.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 9,
    "multi": false,
    "text": "What are advantages to imposing security standards in contracts?",
    "options": [
      {
        "id": "a",
        "text": "They provide each party a legal exit when an unforeseen security issue adversely affects the product"
      },
      {
        "id": "b",
        "text": "They provide a starting place for both parties to begin their negotiations"
      },
      {
        "id": "c",
        "text": "They are a convenient way to make public the agreement between parties"
      },
      {
        "id": "d",
        "text": "They can change as standards change, even when the contract is finalized"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Because it is too late then\n\nCORRECT (b): By defining the security standards, each party can then determine what is required and further specify those requirements\n\nWRONG (c): Because the security agreements are likely to be kept private\n\nWRONG (d): Because contracts do not usually change in this way"
  }
];
