// CT-GenAI v1.1 — two official sample exams, parsed from the PDFs in trainings/ (scratchpad parsers):
//   exam "A"     = ISTQB Sample Exam set A v1.1 (2026-04-27): 40 questions, 46 points (pass = 30). Correct answers, LOs,
//                  K-levels, points and per-option rationales come from the matching Sample-Exam-Answers PDF;
//                  the answer-key table and the per-question answers were cross-checked on import.
//   exam "ASTQB" = ASTQB Testing with Generative AI v1.1 sample exam: 40 questions, 46 points (pass = 30).
//                  Answers and rationales from the ASTQB Sample-Answers PDF.
// The ISTQB appendix questions A1–A3 are drag-and-drop items with no choice-based key ("N/A") and are
// not included.
export const questions = [
  {
    "id": 1,
    "exam": "A",
    "num": "1",
    "lo": "GenAI-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Match each type of AI technology (1-4) with its CORRECT description (A-D):\n\n1. Symbolic AI\n2. Classical machine learning\n3. Deep learning\n4. Generative AI\n\nA. Uses neural networks to automatically learn features from data.\nB. Uses rule-based systems to mimic human decision-making.\nC. Uses deep learning to create new data by learning from its training data.\nD. Uses a data-driven approach that requires feature selection.",
    "options": [
      {
        "id": "a",
        "text": "1D, 2B, 3A, 4C"
      },
      {
        "id": "b",
        "text": "1D, 2C, 3B, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2B, 3D, 4A"
      },
      {
        "id": "d",
        "text": "1B, 2D, 3A, 4C"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Considering:\n• Symbolic AI uses a rule-based system to mimic human decision-making, representing knowledge using symbols and logical rules (1B).\n• Classical machine learning uses a data-driven approach that requires data preparation, feature selection and model training (2D).\n• Deep learning uses neural networks (machine learning structures) to automatically learn features from data (3A).\n• Generative AI uses deep learning techniques to create new data by learning and mimicking patterns from its training data (4C).\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\nCORRECT (d)."
  },
  {
    "id": 2,
    "exam": "A",
    "num": "2",
    "lo": "GenAI-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Consider the realm of Large Language Models (LLMs). Which of the following options BEST explains why context window limitations affect LLM’s text processing capabilities?",
    "options": [
      {
        "id": "a",
        "text": "Because context windows restrict temporal processing sequences, preventing LLMs from maintaining chronological consistency across extended text analysis."
      },
      {
        "id": "b",
        "text": "Because context windows prevent cross-referencing capabilities, limiting LLMs’ ability to connect information across different document sources simultaneously."
      },
      {
        "id": "c",
        "text": "Because context windows force LLMs to discard earlier information, which may contain relevant details needed for understanding later content."
      },
      {
        "id": "d",
        "text": "Because context windows constrain parsing granularity levels, restricting LLMs from adjusting between character-level and document-level analysis approaches."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Because context windows do not control temporal sequencing but limit the scope of text that can be simultaneously considered.\n\nWRONG (b): Because context windows affect scope within the current input, not cross-document referencing capabilities.\n\nCORRECT (c): When text exceeds the context window size, the model cannot simultaneously consider all parts of the document. As the model processes new tokens, it must effectively “forget” or discard tokens that fall outside its context window boundary.\n\nWRONG (d): Because context windows do not determine parsing approaches but limit the amount of text that can be processed simultaneously."
  },
  {
    "id": 3,
    "exam": "A",
    "num": "3",
    "lo": "GenAI-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements BEST describes tokenization in processing text for LLMs?",
    "options": [
      {
        "id": "a",
        "text": "Tokenization converts tokens into high-dimensional vectors to capture their meaning."
      },
      {
        "id": "b",
        "text": "Tokenization creates the building blocks used to understand and generate text."
      },
      {
        "id": "c",
        "text": "Tokenization generates contextually appropriate responses using neural networks."
      },
      {
        "id": "d",
        "text": "Tokenization predicts the next token in a sequence based on learned relationships."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This describes embeddings, not tokenization.\n\nCORRECT (b): Tokenization involves splitting text into smaller units (tokens) that represent the building blocks of natural language generation tasks and enable LLMs to understand and generate text. See also the definition of “Tokenization” in the syllabus (see “Appendix D – Generative AI Specific Terms”).\n\nWRONG (c): This describes the general function of LLMs, not tokenization.\n\nWRONG (d): This refers to how LLMs generate text, not tokenization."
  },
  {
    "id": 4,
    "exam": "A",
    "num": "4",
    "lo": "GenAI-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "In the context of software testing, which of the following statements (i-v) about foundation, instruction-tuned, and reasoning LLMs are CORRECT?\n\ni. Foundation LLMs excel at generating test cases from high-level requirements without structured input.\nii. Reasoning LLMs excel at creating test scripts that strictly follow predefined organizational templates.\niii. Instruction-tuned LLMs excel at autonomously prioritizing test execution based on real-time user feedback.\niv. Reasoning LLMs excel at synthesizing data from defect reports to detect trends and prioritize test efforts.\nv. Instruction-tuned LLMs excel at generating test cases that adhere to Gherkin language syntax.",
    "options": [
      {
        "id": "a",
        "text": "i, ii, and iii"
      },
      {
        "id": "b",
        "text": "ii, iii, and iv"
      },
      {
        "id": "c",
        "text": "i, ii, and v"
      },
      {
        "id": "d",
        "text": "iv, and v"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Considering:\ni. Is not correct. While foundation LLMs can generate test cases, they do not inherently “excel” at this task without structured input. Generating test cases without structured input misrepresents their capabilities.\nii. Is not correct. Creating template-based test scripts requires executing explicit instructions, which is the role of instruction-tuned LLMs, not reasoning LLMs. Reasoning LLMs specialize in logical inference and problem-solving, not rigid template adherence.\niii. Is not correct. Instruction-tuned LLMs are designed to follow structured prompts, not make autonomous decisions. Prioritizing tests based on feedback requires reasoning, which is beyond their scope.\niv. Is correct. Reasoning LLMs are explicitly designed for synthesizing multiple data sources and performing logical inference, problem-solving, and decision-making. Detecting trends and prioritizing test efforts aligns with their role in contextual analysis and the description provided.\nv. Is correct. Instruction-tuned LLMs are specifically trained to follow instructions, including adhering to requested formats, styles, and syntax rules. Generating test cases conforming to Gherkin language syntax, is a task well-suited to their capabilities.\n\nThus:\nWRONG (a).\nWRONG (b).\nWRONG (c).\nCORRECT (d)."
  },
  {
    "id": 5,
    "exam": "A",
    "num": "5",
    "lo": "GenAI-1.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements BEST describes the relation between multimodal LLMs and vision-language models?",
    "options": [
      {
        "id": "a",
        "text": "Multimodal LLMs are a subset of vision-language models designed to handle diverse inputs."
      },
      {
        "id": "b",
        "text": "Vision-language models are a subset of multimodal LLMs focusing on visual and textual data."
      },
      {
        "id": "c",
        "text": "Vision-language models are unrelated to multimodal LLMs and focus only on the user interface."
      },
      {
        "id": "d",
        "text": "Multimodal LLMs and vision-language models are interchangeable terms."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Vision-language models are a subset of multimodal LLMs, not the reverse.\n\nCORRECT (b): Vision-language models specifically integrate visual and textual data, making them a subset of multimodal LLMs.\n\nWRONG (c): Vision-language models are closely related to multimodal LLMs and focus on both visual and textual data.\n\nWRONG (d): Multimodal LLMs and vision-language models have distinct scopes and are not interchangeable."
  },
  {
    "id": 6,
    "exam": "A",
    "num": "6",
    "lo": "GenAI-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": true,
    "text": "Which TWO of the following options represent key capabilities of LLMs in test tasks?",
    "options": [
      {
        "id": "a",
        "text": "Identifying ambiguities and inconsistencies in requirements."
      },
      {
        "id": "b",
        "text": "Generating complete application code for deployment."
      },
      {
        "id": "c",
        "text": "Automating the execution of all test scripts without human intervention."
      },
      {
        "id": "d",
        "text": "Performing exploratory testing on software applications."
      },
      {
        "id": "e",
        "text": "Creating diverse test data with various combinations and boundary values."
      }
    ],
    "correct": [
      "a",
      "e"
    ],
    "explanation": "CORRECT (a): LLMs can analyze and clarify requirements by identifying ambiguities and inconsistencies.\n\nWRONG (b): Generating complete application code is not a key capability of LLMs in test tasks.\n\nWRONG (c): LLMs can support test automation by suggesting improvements to test scripts and identifying design patterns but do not directly execute test scripts or fully automate test scripts without human oversight.\n\nWRONG (d): LLMs cannot perform manual exploratory testing because it is an intuitive and adaptive process that requires human creativity, experience, and decision-making.\n\nCORRECT (e): LLMs can generate diverse test data, including combinations and boundaries."
  },
  {
    "id": 7,
    "exam": "A",
    "num": "7",
    "lo": "GenAI-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following statements BEST explains the difference between AI chatbots and LLM-powered testing applications in the context of software testing?",
    "options": [
      {
        "id": "a",
        "text": "AI chatbots are more suited for specific test tasks, while LLM-powered testing applications focus on ad hoc interactions."
      },
      {
        "id": "b",
        "text": "Both AI chatbots and LLM-powered testing applications are designed to perform identical tasks without any configuration differences."
      },
      {
        "id": "c",
        "text": "LLM-powered testing applications rely on conversational prompts, while AI chatbots require integration into test tools and test processes."
      },
      {
        "id": "d",
        "text": "AI chatbots offer conversational interfaces for ad hoc test tasks, while LLM-powered testing applications provide customized solutions for specific test tasks."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): AI chatbots are best suited for ad hoc interactions, not specific test tasks.\n\nWRONG (b): AI chatbots and LLM-powered testing applications have distinct purposes and are not identical in functionality or configurability.\n\nWRONG (c): LLM-powered testing applications focus on integration into test processes, not conversational prompts. AI chatbots do not require integration into test tools and into test processes because their primary function is to facilitate ad hoc interactions rather than performing specific test tasks.\n\nCORRECT (d): AI chatbots provide conversational interfaces for ad hoc tasks, while LLM-powered testing applications deliver customized solutions for specific needs."
  },
  {
    "id": 8,
    "exam": "A",
    "num": "8",
    "lo": "GenAI-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "A tester is examining a structured prompt used to obtain LLM assistance for performance test analysis. One of the components of this prompt reads: “Test reports from performance testing tools, system monitoring logs during peak usage periods, and application performance benchmarks from previous releases”.\n\nIn which component of the six-part prompt structure would this description MOST LIKELY appear?",
    "options": [
      {
        "id": "a",
        "text": "Context"
      },
      {
        "id": "b",
        "text": "Input data"
      },
      {
        "id": "c",
        "text": "Constraints"
      },
      {
        "id": "d",
        "text": "Output format"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Context provides background information about the test environment or system being tested, not specific (input) data to be analyzed. While this mentions performance testing, it is listing actual data sources rather than providing background information.\n\nCORRECT (b): The description lists specific data sources (test reports, monitoring logs, performance benchmarks) that will be processed by the LLM to perform the analysis task.\n\nWRONG (c): Constraints outline restrictions or special considerations for how the task should be performed. The description lists actual data sources rather than restrictions on the analysis approach.\n\nWRONG (d): Output format specifies the expected structure and characteristics of the LLM’s response. The description lists actual data sources, without any reference to how results should be presented."
  },
  {
    "id": 9,
    "exam": "A",
    "num": "9",
    "lo": "GenAI-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "A tester wants an LLM to analyze a requirements specification for potential defects. In the structured prompt the tester is using, one line reads: “The potential defects must be provided in a markdown table with the following columns: ID, requirement reference, defect type, description, severity”.\n\nIn which component of the six-part prompt structure would this line MOST LIKELY appear?",
    "options": [
      {
        "id": "a",
        "text": "Instructions"
      },
      {
        "id": "b",
        "text": "Constraints"
      },
      {
        "id": "c",
        "text": "Output format"
      },
      {
        "id": "d",
        "text": "Context"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): The given line does not describe what task to perform, but rather how to present the results. Instructions tell the LLM what to do, while this line tells the LLM how to format the output.\n\nWRONG (b): The given line is not imposing restrictions or limitations on the analysis process, but rather specifying the desired presentation format. Constraints might include aspects like “exclude cosmetic issues” whereas this line is about formatting the output.\n\nCORRECT (c): The given line matches the syllabus definition of output format specifications that guide how the LLM should format the output.\n\nWRONG (d): The given line provides no background information such as the context of the requirements specification. Instead, it is about formatting the output."
  },
  {
    "id": 10,
    "exam": "A",
    "num": "10",
    "lo": "GenAI-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following BEST differentiates prompt chaining, few-shot prompting, and meta prompting techniques?",
    "options": [
      {
        "id": "a",
        "text": "Prompt chaining focuses on providing examples, few-shot prompting breaks tasks into subtasks, and meta prompting refines prompts manually."
      },
      {
        "id": "b",
        "text": "Few-shot prompting provides guidance with examples, prompt chaining breaks tasks into multiple prompts, and meta prompting allows the model to iteratively refine its own prompts."
      },
      {
        "id": "c",
        "text": "Meta prompting emphasizes breaking down tasks into steps, prompt chaining uses examples, and few-shot prompting focuses on manual optimization of prompts."
      },
      {
        "id": "d",
        "text": "Prompt chaining provides guidance without examples, few-shot provides guidance with examples, and meta prompting relies on tester-defined prompts."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Prompt chaining is actually defined by decomposing a task into sequential prompts, not by “providing examples”. Few-shot prompting is the technique that supplies examples, not the one that “breaks tasks into subtasks”. Meta prompting relies on the LLM to revise prompts by itself, not on the tester “refining prompts manually”.\n\nCORRECT (b): Few-shot prompting provides guidance with examples, prompt chaining decomposes tasks into intermediate steps (multiple prompts), and meta prompting uses AI to refine its own prompts iteratively.\n\nWRONG (c): Meta prompting’s core purpose is automatic prompt refinement by the LLM, not “breaking tasks into steps”. Prompt chaining is characterized by step-by-step decomposition, not by “using examples” as stated. Few-shot prompting is the method that supplies examples to the model and it is not centered on “manual optimization of prompts”.\n\nWRONG (d): Prompt chaining is defined by stepwise decomposition, not “guidance without examples”. Meta prompting relies on the LLM to generate/refine prompts, not solely on tester-defined wording."
  },
  {
    "id": 11,
    "exam": "A",
    "num": "11",
    "lo": "GenAI-2.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "What is the primary function of a system prompt in interactions with LLMs?",
    "options": [
      {
        "id": "a",
        "text": "To provide a framework for the LLM behavior for the entire conversation."
      },
      {
        "id": "b",
        "text": "To provide specific questions or instructions from the user to the LLM."
      },
      {
        "id": "c",
        "text": "To adjust dynamically with each user interaction and set the conversation's context."
      },
      {
        "id": "d",
        "text": "To include visible input from the user and set rules for the conversation."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The system prompt stays constant throughout the interaction session and establishes the fundamental framework for how the LLM should respond.\n\nWRONG (b): This describes the function of a user prompt, not a system prompt.\n\nWRONG (c): The system prompt does not adjust dynamically; it remains constant.\n\nWRONG (d): The system prompt is hidden and does not include visible input from the user."
  },
  {
    "id": 12,
    "exam": "A",
    "num": "12",
    "lo": "GenAI-2.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are tasked with applying the following test approach to a set of stable requirements for a new project: generate test conditions, prioritize them based on risk level, and identify potential coverage gaps. The requirements have already been thoroughly reviewed for defects.\n\nWhich of the following sequences of steps (i-v) should you follow to effectively apply Generative AI to implement this test approach using a prompt chaining technique to implement this test approach?\n\ni. Submit the requirements to the LLM and prompt it to produce test conditions based on those requirements.\nii. Provide the test conditions to the LLM, ensuring it understands the context for prioritization, and prompt it to prioritize those test conditions accordingly.\niii. Provide the prioritized test conditions to the LLM and prompt it to analyze them to determine whether all aspects of the requirements are addressed in the test conditions.\niv. Submit the requirements to the LLM and prompt it to produce prioritized test conditions that address all aspects of the requirements.\nv. Submit the requirements to the LLM and prompt it to detect inconsistencies and ambiguities in those requirements.",
    "options": [
      {
        "id": "a",
        "text": "i, ii, and iii"
      },
      {
        "id": "b",
        "text": "iv, and ii"
      },
      {
        "id": "c",
        "text": "i, iii, and v"
      },
      {
        "id": "d",
        "text": "v, and iv"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering:\ni. Is correct because it ensures the process begins with generating test conditions from the requirements which aligns with the syllabus description that test analysis with GenAI involves generating test conditions based on the test basis, for example on requirements.\nii. Is correct because it clarifies the need for acceptance criteria (test conditions) to improve LLM-generated outputs and follows the syllabus guidance that LLMs can prioritize test conditions based on risk level when provided with proper context.\niii. Is correct because it directs the LLM to perform coverage analysis, addressing all aspects of the requirements, which matches the syllabus statement that LLMs can perform coverage analysis to determine whether all aspects of the test basis are covered.\niv. Is not correct because relying on minimal input without guidance does not align with the prompt chaining technique or ensure effectiveness. This options attempts to do everything in one step rather than breaking it down.\nv. Is not correct because defect identification is not central to the test objective of generating prioritized test conditions and identifying coverage gaps. The scenario specifically states the requirements are stable and already thoroughly reviewed for defects (which typically include ambiguities and inconsistencies).\n\nThus:\nCORRECT (a).\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 13,
    "exam": "A",
    "num": "13",
    "lo": "GenAI-2.2.2",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "Consider applying the few-shot structured prompting technique to generate Gherkin-style test cases (i.e., scenario-based) for the following user story and acceptance criterion:\n- User story: “As a user, I want to reset my password so that I can regain access to my account if I forget it.”\n- Acceptance criterion: “When a user submits a registered email address then they receive a password reset email.”\n\nYou can rely on predefined examples that include user stories, acceptance criteria, and Gherkin-style test cases. Your task is to create a prompt to guide the LLM in generating accurate test cases aligned with the acceptance criterion for the user story above.\n\nWhich one of the following prompts is BEST suited to this task?",
    "options": [
      {
        "id": "a",
        "text": "Prompt A Role: Act as a test analyst. Context: You are testing a password reset functionality. Instruction: Generate Gherkin-style test cases for the user story and acceptance criterion. using the following predefined examples as a guide: << predefined examples >>. Input Data: <<< user story >>> and <<< acceptance criterion >>>. Constraints: Rely on best practices to create test cases. Output Format: Generate test cases with expected results."
      },
      {
        "id": "b",
        "text": "Prompt B Role: Act as a test analyst specializing in Gherkin-style test cases. Context: You are testing a password reset functionality. Instruction: Generate Gherkin-style test cases for the user story and acceptance criterion, using the following predefined examples as a guide: << predefined examples >>. Input Data: <<< user story >>> and <<< acceptance criterion >>>. Constraints: Use \"Given-When-Then\" syntax and ensure alignment with the acceptance criterion. Output Format: Respect the given Gherkin-style test case format."
      },
      {
        "id": "c",
        "text": "Prompt C Role: Act as a test analyst. Context: You are testing a password reset functionality. Instruction: Generate Gherkin-style test cases for the user story and acceptance criterion. Rely on best practices to create test cases. Input Data: <<< user story >>> and <<< acceptance criterion >>>. Constraints: Use \"Given-When-Then\" syntax and ensure alignment with the acceptance criterion. Output Format: Respect the given Gherkin-style test case format."
      },
      {
        "id": "d",
        "text": "Prompt D Role: Act as a test analyst. Context: You are testing a password reset functionality. Instruction: Generate at least two Gherkin-style test cases for the user story and acceptance criterion. Focus on edge cases. Input Data: <<< user story >>> and <<< acceptance criterion >>>. Constraints: Ensure all test cases follow \"Given-When-Then\" syntax. Output Format: Respect the given Gherkin-style test case format."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): While it specifies using predefined examples, it does not explicitly require the use of the “Given-When-Then” syntax, which is crucial for Gherkin-style test cases. It also indicates reliance on vague best practices in defining the constraints and does not specifically ensure alignment with the acceptance criterion.\n\nCORRECT (b): Comprehensive and leverages predefined examples to guide the LLM.\n\nWRONG (c): Lacks emphasis on using predefined examples and indicates reliance on vague best practices in defining the instructions.\n\nWRONG (d): Focuses on edge cases but neglects comprehensive coverage and the use of examples for guidance."
  },
  {
    "id": 14,
    "exam": "A",
    "num": "14",
    "lo": "GenAI-2.2.3",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are tasked with applying structured prompting to analyze regression test results. Here is an initial draft of the prompt:\n\nRole: Act as a test analyst. Context: Analyze raw regression test results from a recent test execution cycle. Instruction: Identify discrepancies in the test results. Input Data: Use the attached file containing raw test results. Constraints: Use the known anomalies list for cross-checking. Output Format: Provide a list of discrepancies using a table format.\n\nYou are asked to improve this prompt. Which of the following improvements would BEST align the prompt with structured prompt engineering best practices for comprehensive regression test report analysis?",
    "options": [
      {
        "id": "a",
        "text": "Add a step to cluster similar issues and cross-check findings against the known anomalies list."
      },
      {
        "id": "b",
        "text": "Specify that the role is a regression test analyst specializing in actionable insights."
      },
      {
        "id": "c",
        "text": "Expand the instruction to include separating expected results and actual results, clustering issues, and highlighting discrepancies."
      },
      {
        "id": "d",
        "text": "Include references to regression testing principles such as \"Given-When-Then\" in the constraints."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Addresses clustering and cross-checking but misses other critical steps like separating test results.\n\nWRONG (b): Improves role clarity but does not expand instructions or address structured steps.\n\nCORRECT (c): Expands instructions to include all critical structured analysis steps. Separating expected results and actual results helps to pinpoint mismatches effectively, clustering issues facilitates better prioritization and reduces redundancy, and highlighting discrepancies helps to focus attention on the most important findings.\n\nWRONG (d): Introduces irrelevant constraints, misaligning the prompt with the task requirements."
  },
  {
    "id": 15,
    "exam": "A",
    "num": "15",
    "lo": "GenAI-2.2.4",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are using an LLM to assist in preparing actionable test metrics from raw data. The metrics include test progress, defect trends, and coverage, which are graphically displayed and explained with text. Your goal is to improve the test process to ensure the generated metrics are accurate, actionable, and easily interpretable by stakeholders.\n\nHere is an initial draft of a prompt used to instruct the AI:\n\nRole: Act as a test manager. Context: You are provided with raw data from test tools. Instruction: Generate test progress metrics, defect trend metrics, and coverage metrics from the raw data. Input Data: Use the attached file containing raw test results. Constraints: Ensure that the output is concise and understandable. Output Format: Display metrics on a dashboard.\n\nYou are asked to improve this prompt. Which of the following improvements would BEST enhance the LLM’s ability to produce accurate and actionable metrics?",
    "options": [
      {
        "id": "a",
        "text": "Specify that the role is a test manager focusing on actionable insights and decision support, ensuring comprehensive analysis of test data."
      },
      {
        "id": "b",
        "text": "Add an instruction to include potential risks identified from the trends in the generated metrics, along with their impact assessment and priority levels."
      },
      {
        "id": "c",
        "text": "Expand the output format to include a plain-language summary that interprets the metrics and outlines next steps for stakeholders."
      },
      {
        "id": "d",
        "text": "Emphasize constraints that the output is also easily interpretable by stakeholders, using clear language and avoiding technical jargon throughout the response."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Clarifies the role but does not add any concrete instruction that improves accuracy, actionability, or interpretability of the delivered metrics.\n\nWRONG (b): Adds a risk-analysis task that could distract the model from the core metrics and still offers no mechanism for making results clear to stakeholders.\n\nCORRECT (c): Expanding the output format with a plain-language summary that interprets the metrics and outlines next steps directly supports stakeholder understanding and actionability (see also the syllabus in section 2.2.4: “Enhanced test metrics visualization and reporting”).\n\nWRONG (d): Merely re-states an existing constraint and gives no specific guidance on how the LLM should achieve stakeholder-level interpretability."
  },
  {
    "id": 16,
    "exam": "A",
    "num": "16",
    "lo": "GenAI-2.2.5",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "Your goal is to create test cases for an AI-based system that suffers from the test oracle problem, preventing you from determining expected results. You can only count on a few existing test cases with known expected results. Through appropriate analysis, you have identified a set of well-defined transformation rules that specify how changes to inputs affect expected results. These rules can be applied to all existing test cases. You have decided to rely on Generative AI, providing a given LLM with the following information: the existing test cases with their inputs and expected results, a clear description of the transformation rules, and guidelines for generating additional test cases by precisely applying these rules to the relevant existing test cases. With the specified information, the chosen LLM can directly generate additional test cases in line with your expectations.\n\nWhich of the following prompting techniques is BEST suited to achieve your goal in this scenario?",
    "options": [
      {
        "id": "a",
        "text": "Few-shot prompting"
      },
      {
        "id": "b",
        "text": "Prompt chaining"
      },
      {
        "id": "c",
        "text": "Meta prompting"
      },
      {
        "id": "d",
        "text": "Zero-shot prompting"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Few-shot prompting is ideal in this scenario because it allows you to provide some examples (the existing test cases with inputs and expected results) to guide the LLM. By illustrating how these transformation rules are applied to generate new test cases, few-shot prompting can help the LLM understand and replicate the process to generate additional test cases.\n\nWRONG (b): While prompt chaining could be used, it could unnecessarily complicate this very straightforward task.\n\nWRONG (c): While meta-prompting could be used, it is not as direct and specific as few-shot prompting to address this very straightforward task .\n\nWRONG (d): Zero-shot prompting would not be effective since it would not leverage existing test cases as examples."
  },
  {
    "id": 17,
    "exam": "A",
    "num": "17",
    "lo": "GenAI-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are leveraging Generative AI to assist in testing an entertainment software application. The Generative AI model generates test cases for user interaction scenarios, test scripts for API interactions, and synthetic test data to address edge cases.\n\nTo effectively evaluate the Generative AI model’s performance and to refine prompts, which combination of metrics and actions BEST ensures comprehensive assessment and improvement?",
    "options": [
      {
        "id": "a",
        "text": "Evaluate the diversity of test cases to ensure varied input scenarios and use test execution success rate to validate the functionality of generated API test scripts."
      },
      {
        "id": "b",
        "text": "Apply accuracy and completeness metrics to validate test cases against entertainment software requirements and rely on time efficiency to compare AI-generated test scripts with manual test efforts."
      },
      {
        "id": "c",
        "text": "Focus on precision to ensure generated test data meets entertainment software compliance standards, while contextual fit and test execution success rate assesses the alignment and usability of test scripts."
      },
      {
        "id": "d",
        "text": "Prioritize relevance and contextual fit for all outputs to maintain consistency with entertainment software requirements and include diversity metrics to expand edge case coverage."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Diversity ensures comprehensive coverage of edge cases, and test execution success rate evaluates the reliability of API test scripts (see the description and example for the \"diversity\" metric provided by the syllabus within the table in section 2.3.1).\n\nWRONG (b): While accuracy and completeness are important, relying primarily on time efficiency does not fully evaluate coverage or test execution reliability.\n\nWRONG (c): Precision and contextual fit are valuable but do not address diversity or thoroughly evaluate test execution success for API test scripts.\n\nWRONG (d): Relevance and contextual fit are crucial, but without considering metrics like test execution success rate or accuracy, critical aspects of evaluation are missed."
  },
  {
    "id": 18,
    "exam": "A",
    "num": "18",
    "lo": "GenAI-2.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following techniques for evaluating and iteratively refining prompts is BEST suited for determining why an LLM consistently generates test cases with wrong expected results that contradict the input requirements, thereby providing insights to optimize the prompt and prevent similar errors?",
    "options": [
      {
        "id": "a",
        "text": "Output analysis"
      },
      {
        "id": "b",
        "text": "A/B testing of prompts"
      },
      {
        "id": "c",
        "text": "Adjusting prompt length and specificity"
      },
      {
        "id": "d",
        "text": "Integrating user feedback"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Output analysis examines LLM outputs for inaccuracies or inconsistencies. By classifying the wrong expected results that contradict the requirements, it reveals why the prompt misled the LLM and provides concrete insights for prompt refinement.\n\nWRONG (b): A/B testing of prompts is better suited for comparing different prompt versions than for diagnosing the cause of wrong expected results.\n\nWRONG (c): While adjusting the length and specificity of prompts can improve the quality of responses by adding or reducing context, it does not directly address the cause of wrong expected results.\n\nWRONG (d): While using the insights gathered from testers about the usefulness and clarity of generated output can help refine prompts to better meet real-world testing needs, it does not directly address the cause of wrong expected results."
  },
  {
    "id": 19,
    "exam": "A",
    "num": "19",
    "lo": "GenAI-3.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What is a hallucination in the context of LLM outputs?",
    "options": [
      {
        "id": "a",
        "text": "A logical error where the LLM fails to follow a multi-step reasoning process accurately."
      },
      {
        "id": "b",
        "text": "A bias in the LLM output caused by the training data favoring certain perspectives."
      },
      {
        "id": "c",
        "text": "A generation of irrelevant or factually incorrect output by the LLM for a given task."
      },
      {
        "id": "d",
        "text": "A limitation of the LLM to understand non-English perspectives in test generation tasks."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): This describes reasoning errors, not hallucinations.\n\nWRONG (b): This described biases in AI output, not hallucinations.\n\nCORRECT (c): Hallucinations occur when the LLM generates output that is factually incorrect or irrelevant to a given task. See the syllabus in section 3.1.1.\n\nWRONG (d): This describes biases due to underrepresentation in training data, not hallucinations."
  },
  {
    "id": 20,
    "exam": "A",
    "num": "20",
    "lo": "GenAI-3.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are using Generative AI to create test cases for an e-commerce (e-shop) application. The following features have been explicitly mentioned in the project briefing:\n\n• cart management\n• discount code application\n• order confirmation email generation\n\nBased on these details, which of the following AI-generated test cases MOST LIKELY represents a hallucination?",
    "options": [
      {
        "id": "a",
        "text": "Verify that a user can add multiple items to their cart and proceed to checkout."
      },
      {
        "id": "b",
        "text": "Verify that a user cannot apply an expired discount code during checkout."
      },
      {
        "id": "c",
        "text": "Verify that a user receives a confirmation email after successfully placing an order."
      },
      {
        "id": "d",
        "text": "Verify that a user can create a wishlist to save favorite items for later."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Cart management is explicitly mentioned in the project briefing, making this test case relevant.\n\nWRONG (b): Discount code application is explicitly mentioned in the project briefing, making this test case relevant.\n\nWRONG (c): Order confirmation emails are explicitly mentioned in the project briefing, so this test case is valid.\n\nCORRECT (d): Wishlist management is not mentioned in the project briefing, making this the most likely hallucinated test case."
  },
  {
    "id": 21,
    "exam": "A",
    "num": "21",
    "lo": "GenAI-3.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following options refers to a benefit that is MOST directly associated with using clear and structured input data formats when working with LLMs for test tasks?",
    "options": [
      {
        "id": "a",
        "text": "Helps reduce the effort to fine-tune the LLMs for test tasks."
      },
      {
        "id": "b",
        "text": "Helps LLMs generate less ambiguous outputs for test tasks."
      },
      {
        "id": "c",
        "text": "Helps LLMs generate more context-relevant outputs for test tasks."
      },
      {
        "id": "d",
        "text": "Helps LLMs generate more creative outputs for test tasks."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): The effort to fine-tune LLMs for test tasks is associated with further training of these models on a targeted dataset, enabling them to learn the domain-specific knowledge and nuances needed to perform those test tasks. The use of clear and structured input data formats does not affect this effort.\n\nCORRECT (b): When input data is presented in a clear and structured way, potential misunderstandings are minimized. Ambiguity often arises from unclear and poorly structured data.\n\nWRONG (c): Context relevance is more dependent on providing the right contextual information rather than just using clear and structured input data formats.\n\nWRONG (d): The use of clear and structured input data formats does not increase the creativity of LLMs in generating outputs. In particular, the use of these formats does not encourage novel responses, as it requires LLMs to generate responses that adhere to the specified formats."
  },
  {
    "id": 22,
    "exam": "A",
    "num": "22",
    "lo": "GenAI-3.1.4",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which strategy can help reduce variability in LLM outputs by narrowing the probability distribution during inference?",
    "options": [
      {
        "id": "a",
        "text": "Increasing the learning rate."
      },
      {
        "id": "b",
        "text": "Lowering the temperature setting."
      },
      {
        "id": "c",
        "text": "Increasing the random seed."
      },
      {
        "id": "d",
        "text": "Lowering the random seed."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Learning rate is a setting (chosen before training begins) that controls the learning process of neural networks. This setting determines how much to change the model's weights during training. It is not related to inference variability. Increasing it can lead to faster convergence during training but does not affect the variability of outputs during inference.\n\nCORRECT (b): Temperature is a parameter that controls the randomness of the output by acting on the probability distribution during inference. Lowering the temperature reduces randomness, leading to more consistent outputs. c) and d) are not correct. While setting a random seed can improve reproducibility, it does not in itself narrow the probability distribution during inference. Moreover, whether its value is high or low is irrelevant."
  },
  {
    "id": 23,
    "exam": "A",
    "num": "23",
    "lo": "GenAI-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following statements about data privacy concerns related to using Generative AI for software testing is INCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Generative AI can unintentionally expose sensitive data through its outputs."
      },
      {
        "id": "b",
        "text": "Generative AI tools may store and process sensitive data without explicit user consent, leading to misuse."
      },
      {
        "id": "c",
        "text": "Using Generative AI tools without adhering to data protection regulations, such as General Data Protection Regulation (GDPR), can lead to legal disputes."
      },
      {
        "id": "d",
        "text": "An LLM is likely to expose real sensitive data if it hallucinates while generating synthetic test data, regardless of the data it was trained on."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): This is a privacy concern, as “Unintentional data exposure” relates to generative AI (GenAI) outputs revealing sensitive information accidentally.\n\nWRONG (b): This is a privacy concern, as it involves the lack of control over how sensitive data is stored or processed.\n\nWRONG (c): This is a privacy concern related to non-compliance with regulations such as the General Data Protection Regulation (GDPR), leading to legal risks.\n\nCORRECT (d): An LLM does not expose real sensitive data if it hallucinates when generating synthetic test data, as long as it was not trained on real sensitive data. In this case hallucinations would be purely synthetic and based on patterns and structures the model learned during training. The LLM could unintentionally generate synthetic test data that matches real sensitive data (and this is definitely a concern) but it would not be exposing real sensitive data. However, this unintentional generation is very unlikely."
  },
  {
    "id": 24,
    "exam": "A",
    "num": "24",
    "lo": "GenAI-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "An attacker injects falsified test results into the training dataset of an LLM intended to recommend optimal test coverage strategies. What type of attack vector does this description BEST refer to?",
    "options": [
      {
        "id": "a",
        "text": "Malicious code generation"
      },
      {
        "id": "b",
        "text": "Context Manipulation"
      },
      {
        "id": "c",
        "text": "Request manipulation"
      },
      {
        "id": "d",
        "text": "Data poisoning"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Malicious code generation involves “manipulating an LLM to generate backdoors (e.g., external command calls) during use”, not injecting false data into training datasets.\n\nWRONG (b): Context Manipulation involves “sending requests designed to extract confidential training data”, not injecting false data into training datasets.\n\nWRONG (c): Request manipulation involves “introducing data that disrupts the AI’s output” during runtime use, not injecting false data into training datasets.\n\nCORRECT (d): According to the syllabus in section 3.2.2, data poisoning involves “manipulating training data” with the specific example of “providing fake evaluations when rating the results of an AI-generated test report”. The question describes this attack vector: an attacker is injecting falsified test (execution) results into the training dataset, which directly manipulates the training data to compromise the LLM’s ability to accurately recommend optimal test coverage strategies."
  },
  {
    "id": 25,
    "exam": "A",
    "num": "25",
    "lo": "GenAI-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Match each type of attack vector against an LLM (1-4) with the corresponding example (A-D):\n1. Context Manipulation\n2. Request manipulation\n3. Data poisoning\n4. Malicious code generation\nA. An attacker maliciously modifies the data associated with traceability links between requirements and test cases into the dataset used for fine-tuning an LLM, compromising its accuracy in generating test cases from requirements.\nB. An attacker maliciously crafts and provides deceptive prompts that induce an LLM, fine-tuned to assist testers in automated test script generation, to produce vulnerable test scripts with hidden security flaws.\nC. An attacker maliciously provides large specially crafted prompts that induce an LLM, fine-tuned to assist testers in generating test cases, to accidentally reveal confidential API keys inherited from past test projects.\nD. An attacker maliciously submits carefully modified reference screenshots into a visual testing framework that uses an LLM for comparative visual analysis, to trick the LLM into systematically ignoring genuine UI issues during regression testing.",
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
        "text": "1D, 2C, 3B, 4A"
      },
      {
        "id": "d",
        "text": "1C, 2B, 3D, 4A"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Considering:\n• Context Manipulation is based on sending requests designed to extract confidential training data. (1C)\n• Request manipulation is based on introducing an image that disrupts the LLM output. (2D)\n• Data poisoning is based on manipulating recommendations through fake evaluations used in training. (3A)\n• Malicious code generation is based on manipulating a LLM to generate backdoors (e.g., external command calls) during use. (4B)\n\nThus:\nCORRECT (a).\nWRONG (b).\nWRONG (c).\nWRONG (d)."
  },
  {
    "id": 26,
    "exam": "A",
    "num": "26",
    "lo": "GenAI-3.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following strategies BEST addresses data privacy risks in the context of Generative AI-powered software testing?",
    "options": [
      {
        "id": "a",
        "text": "Using multiple LLMs to evaluate and compare test results for improved accuracy."
      },
      {
        "id": "b",
        "text": "Replacing sensitive test data with an anonymized version of the same."
      },
      {
        "id": "c",
        "text": "Allowing unrestricted access to sensitive test data to improve Generative AI model training."
      },
      {
        "id": "d",
        "text": "Disabling encryption of sensitive test data to streamline data storage and transmission processes."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): While evaluating outputs by comparing multiple LLMs is a useful practice, in this case it focuses on output quality in terms of accuracy without addressing data privacy risks.\n\nCORRECT (b): Anonymization is an effective strategy to mitigate data privacy risks.\n\nWRONG (c): Unrestricted access to sensitive data increases the risk of sensitive data breach.\n\nWRONG (d): Disabling encryption of sensitive data weakens security and increases the risk of sensitive data theft."
  },
  {
    "id": 27,
    "exam": "A",
    "num": "27",
    "lo": "GenAI-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following options about the impact of LLM usage on energy consumption and CO₂ emission is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Image generation tasks consume substantially more energy than text generation tasks, but produce fewer CO₂ emissions."
      },
      {
        "id": "b",
        "text": "Generative AI-powered searches consume significantly less energy than traditional web searches due to their optimized algorithms."
      },
      {
        "id": "c",
        "text": "Image generation tasks consume substantially more energy than text generation tasks due to their higher computational complexity."
      },
      {
        "id": "d",
        "text": "Text generation tasks consume very little energy, allowing them to be performed by millions of users without significant energy consumption."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Image generation is by far much more energy- and CO₂-intensive than text generation. Energy consumption and CO₂ emissions are typically correlated unless a key factor (like energy source differences) is specified.\n\nWRONG (b): On the contrary, GenAI-powered searches consume considerably more energy than traditional web searches.\n\nCORRECT (c): Image generation requires significantly more computational resources than text generation, making it much more energy intensive.\n\nWRONG (d): The cumulative impact of text generation across millions of users is not negligible."
  },
  {
    "id": 28,
    "exam": "A",
    "num": "28",
    "lo": "GenAI-3.4.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": true,
    "text": "Which TWO of the following standards, or parts of them, are MOST relevant to the use of Generative AI in software testing?",
    "options": [
      {
        "id": "a",
        "text": "ISO/IEC 25010:2023"
      },
      {
        "id": "b",
        "text": "ISO/IEC 23053:2022"
      },
      {
        "id": "c",
        "text": "ISO/IEC/IEEE 29119-2:2021"
      },
      {
        "id": "d",
        "text": "ISO/IEC 42001:2023"
      },
      {
        "id": "e",
        "text": "ISO/IEC/IEEE 29119-3:2021"
      }
    ],
    "correct": [
      "b",
      "d"
    ],
    "explanation": "WRONG (a): ISO/IEC 25010:2023 is a standard (not mentioned in the syllabus, but mentioned in the CTFL syllabus) that defines a product quality model that relate to quality properties of ICT/software products. It does not address the use of GenAI in software testing.\n\nCORRECT (b): ISO/IEC 23053:2022 is a standard (mentioned in section 3.4.1 of the syllabus) that provides a framework for data quality, transparency, and fault tolerance when using GenAI for testing.\n\nWRONG (c): ISO/IEC/IEEE 29119-2:2021 is a part (volume) of the standard (not mentioned in the syllabus, but mentioned in the CTFL syllabus) that deals with test processes. It does not address the use of GenAI in software testing.\n\nCORRECT (d): ISO/IEC 42001:2023 is a standard (mentioned in section 3.4.1 of the syllabus) that specifies requirements for managing AI-based systems within an organization, providing best practices for GenAI in software testing and promoting consistency and reliability.\n\nWRONG (e): ISO/IEC/IEEE 29119-3:2021 is a part (volume) of the standard (not mentioned in the syllabus, but mentioned in the CTFL syllabus) that deals with test documentation. It does not address the use of GenAI in software testing."
  },
  {
    "id": 29,
    "exam": "A",
    "num": "29",
    "lo": "GenAI-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following components of an LLM-powered testing application is responsible for combining user input with structured and semantically similar data to prepare a prompt for the LLM?",
    "options": [
      {
        "id": "a",
        "text": "Back-end"
      },
      {
        "id": "b",
        "text": "Front-end"
      },
      {
        "id": "c",
        "text": "Authentication component"
      },
      {
        "id": "d",
        "text": "Post-processing component"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): The back-end is responsible for retrieving data from relational and vector databases, combining it with user input, and preparing the prompt tailored for the LLM.\n\nWRONG (b): The front-end serves as the user interface for submitting input, but it does not prepare the prompt for the LLM.\n\nWRONG (c): The authentication component ensures secure access but is unrelated to data retrieval or prompt preparation.\n\nWRONG (d): The post-processing component refines the output generated by the LLM but does not handle prompt preparation."
  },
  {
    "id": 30,
    "exam": "A",
    "num": "30",
    "lo": "GenAI-4.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "You are a tester working on a banking application that includes features such as user login, account management, and secure transactions. The system documentation, including API specifications and security requirements, is stored in a vector database, while historical test cases are stored in a relational database. Your task is to generate test cases using a Retrieval-Augmented Generation (RAG) framework to ensure alignment with the latest specifications and requirements.\n\nWhich of the following options represents the MOST appropriate use of the RAG framework in this scenario?",
    "options": [
      {
        "id": "a",
        "text": "Submit a query specifying one function to be tested. The RAG framework will retrieve relevant specifications and requirements from the vector database, combine them with historical test cases, and automatically generate accurate and context-aware test cases through the LLM."
      },
      {
        "id": "b",
        "text": "Submit a query specifying all functions to be tested. The RAG framework will retrieve relevant specifications and requirements from the vector database, combine them with historical test cases, and automatically generate accurate and context-aware test cases through the LLM."
      },
      {
        "id": "c",
        "text": "Use the RAG framework to retrieve historical test cases from the relational database and security requirements from the vector database. Manually review the retrieved information before refining the query for the LLM to generate targeted test cases."
      },
      {
        "id": "d",
        "text": "Rely on the LLM’s internal training data to generate test cases while using the RAG framework or reference retrieval without directly integrating retrieved information into the generation process."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): RAG automatically retrieves the relevant specifications and historical test-case chunks and feeds them to the LLM, which then generates accurate, context-aware test cases.\n\nWRONG (b): RAG is better used when asked to retrieve specific targeted information from the vector database and not the whole dataset.\n\nWRONG (c): Manually reviewing and refining the query adds unnecessary effort, which contradicts RAG’s design to automate retrieval and use retrieved data dynamically in the LLM’s response generation.\n\nWRONG (d): Relying on the LLM’s internal data ignores RAG’s core capability of enhancing responses by integrating external, up-to-date information."
  },
  {
    "id": 31,
    "exam": "A",
    "num": "31",
    "lo": "GenAI-4.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following options BEST describes the enhancements that autonomous and semi-autonomous LLM-powered agents bring to automating test processes?",
    "options": [
      {
        "id": "a",
        "text": "They can enhance both efficiency and quality in automating test processes through a balanced use of single-agent and multi-agent systems."
      },
      {
        "id": "b",
        "text": "They can enhance quality in automating test processes by adding complex verification checks although at the expense of efficiency."
      },
      {
        "id": "c",
        "text": "They can enhance both efficiency and quality in automating test processes by leveraging their ability to operate with varying levels of human interaction."
      },
      {
        "id": "d",
        "text": "They can enhance both efficiency and quality in automating test processes while eliminating the need for verification within these test processes."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Autonomous and semi-autonomous agents can be implemented as single-agent and/or multi-agent systems to improve both efficiency and quality in test processes. However, the key enhancements that these agents bring refer to increased efficiency and quality in test processes due to their ability to balance autonomy with human oversight.\n\nWRONG (b): While autonomous and semi-autonomous agents incorporate verifications to ensure quality, these verifications are also designed to be efficient. The use of automated checks actually aims to streamline the test processes and enhance quality without sacrificing efficiency (and vice versa) which, in turn, is also enhanced.\n\nCORRECT (c): Autonomous agents increase efficiency by executing test tasks within the test processes with minimal human intervention and by using automated checks designed to be efficient. Semi-autonomous agents involve strategic human oversight, which ensures the quality of test results. These two types of agents allow implementing a balanced approach to achieve both efficiency and quality by leveraging their ability to operate with varying levels of human interaction.\n\nWRONG (d): The complete elimination of verification is neither realistic nor desirable. Verification remains crucial even when using advanced technologies like autonomous and semi-autonomous LLM-powered agents."
  },
  {
    "id": 32,
    "exam": "A",
    "num": "32",
    "lo": "GenAI-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following statements about fine-tuning language models for specific test tasks is INCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Fine-tuning involves training a pre-trained model on task-specific data to enhance its performance and domain knowledge."
      },
      {
        "id": "b",
        "text": "Fine-tuning equips a language model with new capabilities by replacing its general knowledge with task-specific reasoning, ensuring the absence of overfitting."
      },
      {
        "id": "c",
        "text": "Fine-tuning modifies a pre-trained model’s parameters using a targeted dataset to adapt it for a specific domain or task."
      },
      {
        "id": "d",
        "text": "Fine-tuning requires high-quality, task-specific datasets to avoid biased or inaccurate results."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): This is a correct description of fine-tuning, which enhances a model’s performance in a specific domain through task-specific training.\n\nCORRECT (b): This statement is incorrect because fine-tuning does not replace the model's general knowledge, and overfitting remains a potential challenge.\n\nWRONG (c): This is a correct description, as fine-tuning involves parameter adjustment using targeted datasets.\n\nWRONG (d): This is a correct description of the challenges associated with fine-tuning, as high-quality datasets are crucial for effective adaptation."
  },
  {
    "id": 33,
    "exam": "A",
    "num": "33",
    "lo": "GenAI-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following BEST describes the primary focus of Large Language Model Operations (LLMOps) when deploying and managing LLMs for test tasks?",
    "options": [
      {
        "id": "a",
        "text": "Preventing reliance on Generative AI in test processes."
      },
      {
        "id": "b",
        "text": "Managing LLMs effectively across their lifecycle, including privacy, security, and cost considerations."
      },
      {
        "id": "c",
        "text": "Limiting LLM usage to chatbot-based testing solutions to reduce complexity."
      },
      {
        "id": "d",
        "text": "Fully automating all test tasks without requiring human oversight."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): Large Language Model Operations (LLMOps) focuses on managing LLMs, not preventing their use.\n\nCORRECT (b): LLMOps manages LLMs across their lifecycle, addressing privacy, security, and cost for testing.\n\nWRONG (c): LLMOps applies to various applications, not just chatbot-based solutions.\n\nWRONG (d): LLMOps does not aim to fully automate all test tasks or eliminate human oversight."
  },
  {
    "id": 34,
    "exam": "A",
    "num": "34",
    "lo": "GenAI-5.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following statements about shadow AI is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Shadow AI enforces compliance with organizational data policies and general AI regulations."
      },
      {
        "id": "b",
        "text": "Shadow AI eliminates the need for clear licensing agreements in AI tools."
      },
      {
        "id": "c",
        "text": "Shadow AI reduces the risk of intellectual property disputes."
      },
      {
        "id": "d",
        "text": "Shadow AI may lead to unauthorized accesses to sensitive information."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "WRONG (a): Using unapproved GenAI tools does not enforce organizational data policies.\n\nWRONG (b): Shadow AI introduces risks related to unclear licensing agreements, which can lead to intellectual property disputes.\n\nWRONG (c): Shadow AI increases, rather than reduces, the risk of intellectual property disputes.\n\nCORRECT (d): Unapproved AI tools often lack robust security measures, increasing the risk of data breaches or unauthorized access."
  },
  {
    "id": 35,
    "exam": "A",
    "num": "35",
    "lo": "GenAI-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is a key aspect to consider when defining a Generative AI strategy for software testing?",
    "options": [
      {
        "id": "a",
        "text": "Prepare training programs designed to ensure that team members obtain certifications specific to each LLM they use."
      },
      {
        "id": "b",
        "text": "Select LLMs that can be integrated appropriately with existing test environments and test tools."
      },
      {
        "id": "c",
        "text": "Ensure that as much input data as possible is available to increase the likelihood of obtaining effective LLM outputs."
      },
      {
        "id": "d",
        "text": "Collect standard supervised machine learning metrics to evaluate the effectiveness of LLM outputs."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): While certifications for specific LLMs could be useful (and more available in the future), training programs should be designed to ensure that test team members have the technical skills necessary to use GenAI tools effectively.\n\nCORRECT (b): Selecting LLMs that are compatible with existing test infrastructure and scalability requirements is a critical aspect of a GenAI strategy. Test tools and test environments are fundamental elements of test infrastructure.\n\nWRONG (c): Data quality and structured, secure input are crucial for achieving reliable results with GenAI. It is necessary to have an adequate amount of high-quality input data (according to the test objectives), not as much data as possible.\n\nWRONG (d): Section 5.1.2 states that a GenAI strategy for software testing must collect task-specific metrics to measure the effectiveness of LLM outputs. The metrics listed in section 2.3.1 (e.g., relevance, execution-success rate, time efficiency) are tailored to test tasks rather than borrowed wholesale from classical supervised-machine learning."
  },
  {
    "id": 36,
    "exam": "A",
    "num": "36",
    "lo": "GenAI-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following statements BEST describes one of the key criteria to select an appropriate LLM for specific test tasks within a test organization?",
    "options": [
      {
        "id": "a",
        "text": "A key selection criterion involves evaluating the LLM’s performance for the test tasks against the publicly available benchmarks for LLMs in code generation."
      },
      {
        "id": "b",
        "text": "A key selection criterion involves evaluating recurring costs such as those associated with the computational resources required to run the LLM."
      },
      {
        "id": "c",
        "text": "A key selection criterion involves evaluating the LLM against the publicly available community benchmarks to ensure full compatibility with them."
      },
      {
        "id": "d",
        "text": "A key selection criterion involves evaluating recurring costs such as those associated with a proof of concept aimed at demonstrating the suitability of an LLM for the test tasks."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WRONG (a): A key selection criterion involves evaluating the model’s performance for the test tasks against the organization's benchmarks using metrics such as those presented in the syllabus itself (see the syllabus in section 5.1.3). The specified criterion may be relevant if the test tasks involve code generation. However, it is not applicable for other types of test tasks.\n\nCORRECT (b): A key selection criterion involves evaluating recurring costs (see the syllabus in section 5.1.3), and this answer refers to a typical example of a recurring cost.\n\nWRONG (c): Evaluating the LLM against the publicly available community benchmarks to ensure full compatibility with them is not one of the key criteria mentioned in the syllabus (in section 5.1.3) for selecting an appropriate LLM for specific test tasks.\n\nWRONG (d): A key selection criterion involves evaluating recurring costs (see the syllabus in section 5.1.3), but this answer refers to a typical example of a non-recurring cost."
  },
  {
    "id": 37,
    "exam": "A",
    "num": "37",
    "lo": "GenAI-5.1.4",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What are the key phases in the adoption of Generative AI in a test organization?",
    "options": [
      {
        "id": "a",
        "text": "Discovery, initiation and usage definition, utilization and iteration"
      },
      {
        "id": "b",
        "text": "Awareness, usage prioritization, performance monitoring"
      },
      {
        "id": "c",
        "text": "Planning, experimentation, evaluation and refinement"
      },
      {
        "id": "d",
        "text": "Training, testing, implementation, and scaling"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "The syllabus describes the following 3 key phases:\n• Discovery\n• Initiation and usage definition\n• Utilization and iteration\n\nThus:\nCORRECT (a): explicitly mentions all these 3 key phases.\n\nWRONG (b): does not explicitly mention any of these 3 phases (only mentions some objectives and/or activities associated with these phases).\n\nWRONG (c): does not explicitly mention any of these 3 phases (only mentions some objectives and/or activities associated with these phases).\n\nWRONG (d): does not explicitly mention any of these 3 phases (only mentions some objectives and/or activities associated with these phases)."
  },
  {
    "id": 38,
    "exam": "A",
    "num": "38",
    "lo": "GenAI-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following options BEST refers to an example of knowledge and/or skills required for testers to work effectively with LLMs in test processes?",
    "options": [
      {
        "id": "a",
        "text": "Mastering techniques specifically aimed at preventing LLMs from hallucinating and incurring reasoning errors when performing specific test tasks."
      },
      {
        "id": "b",
        "text": "Selecting and implementing suitable test automation approaches, such as keyword-driven test automation, for automating test processes."
      },
      {
        "id": "c",
        "text": "Choosing the most appropriate LLM based on criteria such as its capability to be adapted or customized to perform specific test tasks."
      },
      {
        "id": "d",
        "text": "Ensuring the validation and test data used in the development of the LLMS are of the highest quality."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): Hallucinations in LLMs are intrinsic challenges with current AI technologies, and testers cannot prevent hallucinations and reasoning errors from occurring. Instead, testers should be able to (identify and) mitigate the risks of hallucinations and reasoning errors (and also biases) when testing with GenAI.\n\nWRONG (b): While proficiency in test automation is valuable, it does not specifically address the integration of GenAI into test processes.\n\nCORRECT (c): The syllabus names “assessing LLM capabilities” as a key competency. This naturally entails comparing candidate models and selecting the one that can be adapted or fine-tuned for particular test tasks. That is a direct example of knowledge/skills testers need to work effectively with LLMs.\n\nWRONG (d): It refers to skills that are required for developing the LLMs such as AI researchers and data scientists, not testers using GenAI for test tasks. These testers focus on ensuring the quality of the test data they directly use when interacting with LLMs."
  },
  {
    "id": 39,
    "exam": "A",
    "num": "39",
    "lo": "GenAI-5.2.2",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the BEST approach for cultivating skills within test teams to specifically support the adoption of Generative AI?",
    "options": [
      {
        "id": "a",
        "text": "Rely mainly on external expert courses with hands-on practice, aiming to integrate AI into all daily test tasks at once."
      },
      {
        "id": "b",
        "text": "Encourage independent experimentation with various LLMs without following a structured process."
      },
      {
        "id": "c",
        "text": "Adopt a hands-on, gradual learning process supported by guided exercises, peer learning, and knowledge-sharing communities."
      },
      {
        "id": "d",
        "text": "Rely mainly on theoretical courses from external experts, aiming to gradually integrate AI into daily test tasks in line with actual learning."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "WRONG (a): While external expert courses with hands-on practice can be beneficial, mainly relying on them diminishes the importance of internal practice and community building. Moreover, integrating AI into all daily test tasks in a ‘big-bang’ fashion is not recommended.\n\nWRONG (b): While experimentation is part of the learning process, independent experimentation without structure may not lead to consistent or effective skill development.\n\nCORRECT (c): Focusing on developing practical skills through structured activities, peer learning, and knowledge-sharing communities is a recommended approach.\n\nWRONG (d): Mainly relying on theoretical courses from external experts diminishes the importance of developing practical skills and know-how through sharing within the organization."
  },
  {
    "id": 40,
    "exam": "A",
    "num": "40",
    "lo": "GenAI-5.2.3",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Which of the following answers BEST describes how the roles and responsibilities of testers and test managers within a test organization are impacted by the adoption of Generative AI for software testing?",
    "options": [
      {
        "id": "a",
        "text": "Testers shift their focus from manually designing test cases to guiding and verifying AI- generated testware."
      },
      {
        "id": "b",
        "text": "Test managers shift their focus from managing test projects to understanding the inner working of Generative AI technologies."
      },
      {
        "id": "c",
        "text": "Testers shift their focus from manually designing test cases to overseeing AI-based test processes."
      },
      {
        "id": "d",
        "text": "Test managers shift their focus from relying on people to relying solely on Generative AI to boost productivity in test tasks."
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Testers evolve into AI-assisted testing specialists, refining prompts and verifying AI outputs.\n\nWRONG (b): The responsibilities of the test managers are updated to include the development of an AI-based test strategy, AI-based risk management, and oversight of AI-based test processes. Thus, their focus is still on test management and not on understanding the (technically complex) inner workings of GenAI technologies.\n\nWRONG (c): Testers do not shift their focus to overseeing AI-based test processes. This oversight is the responsibility of test managers.\n\nWRONG (d): Test managers must balance human and AI capabilities to achieve efficient results.\n\nA1 N/A The RAG process can be summarized as follows:\n1. Breaking documents into chunks for focused retrieval.\n2. Cleaning and processing chunks for consistency.\n3. Encoding chunks into embeddings and storing them in a vector database.\n4. Retrieving relevant chunks during user query processing.\n5. Generating responses by combining retrieved data with the LLM’s knowledge.\n\nThus, the correct answer is:\n\nAnswer First Break large documents into smaller chunks\n\nClean and process document chunks\n\nStore embeddings in a vector database Retrieve relevant chunks based on semantic similarity Generate a response using retrieved chunks Last and the LLM\n\nA2 N/A Considering:\n• Prompt Chaining - 1st item on the right: Directly references iterative LLM use for test analysis tasks (Section 2.2.1).\n• Few-Shot Prompting – 2nd item on the right: Explicitly ties to LLM-generated test cases with examples (Section 2.2.2b).\n• Meta Prompting (C) – 4th item on the right: Highlights LLM collaboration for prompt refinement (Section 2.1.2).\n• Zero-Shot Prompting (D) – 3rd item on the right: Emphasizes LLM’s intrinsic reasoning for prioritization (Section 2.1.2).\n\nThus, the correct answer is:\n\nA3 N/A Considering:\n• Discovery – Activities include training test teams on GenAI concepts, providing access to LLMs/SLMs, and experimenting with initial use cases to familiarize testers with GenAI and build confidence\n• Initiation and Usage Definition – Focuses on identifying and prioritizing practical use cases for GenAI in software testing\n• Utilization and Iteration – Continuous monitoring of the progress of GenAI for software testing and related tools is in place, as well as measurement and management of the transformation to ensure sustainable benefits and scalability\n\nThus, the correct answer is:"
  },
  {
    "id": 41,
    "exam": "ASTQB",
    "num": "1",
    "lo": "GenAI-1.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following uses deep learning techniques to create new content?",
    "options": [
      {
        "id": "a",
        "text": "Symbolic AI"
      },
      {
        "id": "b",
        "text": "Classical machine learning"
      },
      {
        "id": "c",
        "text": "Deep learning"
      },
      {
        "id": "d",
        "text": "Generative AI"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Generative AI uses deep learning techniques to create new data by learning and mimicking patterns from the training data."
  },
  {
    "id": 42,
    "exam": "ASTQB",
    "num": "2",
    "lo": "GenAI-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You have used the same prompt multiple times, but you have received different responses for the LLM. Why is this happening?",
    "options": [
      {
        "id": "a",
        "text": "Because the prompt is incorrect"
      },
      {
        "id": "b",
        "text": "Because LLMs have non-deterministic behavior"
      },
      {
        "id": "c",
        "text": "Because the training data was faulty"
      },
      {
        "id": "d",
        "text": "Because LLMs are trained to always vary the response"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): LLMs exhibit non-deterministic behavior due to the probabilistic nature of their inference mechanisms."
  },
  {
    "id": 43,
    "exam": "ASTQB",
    "num": "3",
    "lo": "GenAI-1.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "How is tokenization related to embeddings?",
    "options": [
      {
        "id": "a",
        "text": "Tokens are a numeric representation of how a given word is embedded into the model"
      },
      {
        "id": "b",
        "text": "Tokens represent characters, subwords, or words, and embeddings capture the semantic, syntactic, and contextual relationship of the tokens"
      },
      {
        "id": "c",
        "text": "Embeddings describe the text component in such a way that it can be tokenized for use within the model"
      },
      {
        "id": "d",
        "text": "Embeddings identify the non-deterministic behavior of a word component, which is then used to determine the positioning of its token using a vector to represent its position"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Because the syllabus says so."
  },
  {
    "id": 44,
    "exam": "ASTQB",
    "num": "4",
    "lo": "GenAI-1.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You need an LLM that will help with decision-making based on a process similar to human logic. Which type of LLM should you use?",
    "options": [
      {
        "id": "a",
        "text": "Foundation LLM"
      },
      {
        "id": "b",
        "text": "Instruction-tuned LLM"
      },
      {
        "id": "c",
        "text": "Reasoning LLM"
      },
      {
        "id": "d",
        "text": "Ad-hoc LLM"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): You need a reasoning LLM because that training method is designed to emulate human-like reasoning responses."
  },
  {
    "id": 45,
    "exam": "ASTQB",
    "num": "5",
    "lo": "GenAI-1.1.4",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Which of the following is an advantage of using an LLM augmented with vision-language models for developing test cases?",
    "options": [
      {
        "id": "a",
        "text": "There is no advantage because this type of model is used primarily for military applications"
      },
      {
        "id": "b",
        "text": "It can create test cases that can include text and visual cues"
      },
      {
        "id": "c",
        "text": "It can edit images much faster and more accurately than a human"
      },
      {
        "id": "d",
        "text": "It can generate executable code from wireframes and screenshots"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): It can create test cases that include textual data and visual cues, which increases the overall test coverage."
  },
  {
    "id": 46,
    "exam": "ASTQB",
    "num": "6",
    "lo": "GenAI-1.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "You have created test automation that will be used to test driver’s license applications. There is a huge amount of data available for this testing, but it will take too long to test with all of that data. How can an LLM help with this problem?",
    "options": [
      {
        "id": "a",
        "text": "It can create new synthetic data that will protect private information"
      },
      {
        "id": "b",
        "text": "It can take the existing data and augment that with data that is missing according to the data rules"
      },
      {
        "id": "c",
        "text": "It can take the existing data and break it into smaller sets that will contain interesting variances"
      },
      {
        "id": "d",
        "text": "It can delete data that is duplicated and replace it with new data"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): It can look at the existing data, analyze it, and break it into smaller sets that will contain representative and interesting data."
  },
  {
    "id": 47,
    "exam": "ASTQB",
    "num": "7",
    "lo": "GenAI-1.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 1,
    "multi": false,
    "text": "Your organization is developing a test management tool that will use AI to generate, classify, and store test cases based on requirements, general testing knowledge, and previous issues found. Which of the following interaction models would be best to use?",
    "options": [
      {
        "id": "a",
        "text": "Chatbots talking to the LLM"
      },
      {
        "id": "b",
        "text": "Chatbots talking to other chatbots that have been trained on your system"
      },
      {
        "id": "c",
        "text": "APIs of the LLM to allow the test task information to pass into and out of the LLM"
      },
      {
        "id": "d",
        "text": "APIs of the LLM to pass the test case information into the LLM to be stored there"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Using the APIs of the LLM will allow maximum usage of the LLM by passing the necessary data to and from it. D doesn’t make sense because the test case information would be stored in the test management system, not in the LLM. A and B are incorrect because chatbots would not be the most efficient or flexible access."
  },
  {
    "id": 48,
    "exam": "ASTQB",
    "num": "8",
    "lo": "GenAI-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following are the six components of an effective prompt?",
    "options": [
      {
        "id": "a",
        "text": "Prompt Chain, Persona, Instruction, Assumptions, Constraints, Output Format"
      },
      {
        "id": "b",
        "text": "Role, Bias, Context, Instruction, Input Data, Constraints, Output Data"
      },
      {
        "id": "c",
        "text": "Persona, Background, Instruction, Input Data, Output Data, Assumptions"
      },
      {
        "id": "d",
        "text": "Role, Context, Instruction, Input Data, Constraints, Output Format"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): These are the components."
  },
  {
    "id": 49,
    "exam": "ASTQB",
    "num": "9",
    "lo": "GenAI-2.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You have provided a structured prompt to a GenAI model regarding the creation of test cases. You have specified that you want to receive test cases in the following format: • Description of test • Reference to source • Steps to complete • Expected outcome This is an example of what component of a structured prompt?",
    "options": [
      {
        "id": "a",
        "text": "Role"
      },
      {
        "id": "b",
        "text": "Context"
      },
      {
        "id": "c",
        "text": "Instruction"
      },
      {
        "id": "d",
        "text": "Output format"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This is the output format that you are specifying."
  },
  {
    "id": 50,
    "exam": "ASTQB",
    "num": "10",
    "lo": "GenAI-2.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "If you have a test process with complex tasks and you will need to check intermediate results before proceeding, which prompting technique is the most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "Prompt chaining"
      },
      {
        "id": "b",
        "text": "Few-shot prompting"
      },
      {
        "id": "c",
        "text": "Zero-shot prompting"
      },
      {
        "id": "d",
        "text": "Meta prompting"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Prompt chaining allows the next prompt to be tuned based on the results of the preceding step."
  },
  {
    "id": 51,
    "exam": "ASTQB",
    "num": "11",
    "lo": "GenAI-2.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "Which of the following is true regarding a user prompt for an LLM?",
    "options": [
      {
        "id": "a",
        "text": "It is set once at the start of the conversation"
      },
      {
        "id": "b",
        "text": "It is usually set by the developer"
      },
      {
        "id": "c",
        "text": "It usually changes with each interaction"
      },
      {
        "id": "d",
        "text": "It is user-independent, so the response will be consistent regardless of how the user words the prompt"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The user prompt is the interaction with the system, and this usually changes with each interaction. A and B are correct for system prompts."
  },
  {
    "id": 52,
    "exam": "ASTQB",
    "num": "12",
    "lo": "GenAI-2.2.1",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are working on a replacement of an e-commerce system. You have been given a large set of test conditions to test. There is not adequate time to test all the conditions. You have a testing-trained LLM that you can use. How can you best use it in this situation?",
    "options": [
      {
        "id": "a",
        "text": "The LLM can create an estimate for how long testing will take based on similar test conditions. This schedule can then be incorporated into the overall project schedule to allow adequate time for testing."
      },
      {
        "id": "b",
        "text": "The LLM can be fed information regarding previous defects, end- user requirements, and payment regulations to let it determine the relative risk of all the test conditions. This can then be used to prioritize the testing."
      },
      {
        "id": "c",
        "text": "The LLM can generate and execute all the test cases based on the test conditions, which will save significant time."
      },
      {
        "id": "d",
        "text": "The LLM can generate test data to cover every possible purchasing scenario. This will ensure testing will not miss any corner cases, and that will help the schedule by eliminating any testing escapes."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Since there isn’t enough time, the tests will have to be prioritized and executed in priority order. When time runs out, at least the most important tests will have been executed. A is not correct because there’s already not enough time – making a schedule proving that won’t help. C is not correct. The LLM could generate the test cases, but it won’t know how to execute them. It might be able to develop test automation from the generated test cases, but that’s not likely to shorten the time required for testing. D is not correct because it will make testing take longer."
  },
  {
    "id": 53,
    "exam": "ASTQB",
    "num": "13",
    "lo": "GenAI-2.2.2",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You have been given requirements in the form of wireframes of the GUI and user stories. You want to use these to create the test conditions for a set of tests. How should you use prompts to evaluate the inputs and create the test conditions?",
    "options": [
      {
        "id": "a",
        "text": "Apply multimodal prompts"
      },
      {
        "id": "b",
        "text": "Set well-defined system parameters to define the graphics to be used"
      },
      {
        "id": "c",
        "text": "Apply prompt chaining"
      },
      {
        "id": "d",
        "text": "Use meta prompting so the prompts can be continuously refined"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): In this case, you will definitely need multimodal prompts because the data you are providing is both graphics and text. B is not correct because this is not something that is defined in system parameters. C is not correct because, also, prompt chaining may be useful; you first need to get the information into the system via A. D is not correct because it’s not a matter of generating additional prompts."
  },
  {
    "id": 54,
    "exam": "ASTQB",
    "num": "14",
    "lo": "GenAI-2.2.3",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You have been testing versions of the same software over several years. Rather than the quality improving, it seems to just stay the same, with the same high number of defects being caught during testing for each release. How could AI help with this problem?",
    "options": [
      {
        "id": "a",
        "text": "It could analyze test failures and prioritize the tests that failed last time so they are executed first for each new release."
      },
      {
        "id": "b",
        "text": "It could use meta prompting to review each test case to determine if it is an effective test. Ineffective tests could then be removed from the overall test suite."
      },
      {
        "id": "c",
        "text": "It could create large sets of test data that are used across releases of the product to ensure that data variance is not causing the repeated failures."
      },
      {
        "id": "d",
        "text": "It could conduct root cause analysis over all the defects found across releases to determine the common causes. This information could then be used to improve development and analysis processes."
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): We don’t know what’s causing these issues, and we are catching them in testing, but they shouldn’t be occurring in the first place. Root cause analysis will tell us what is breaking and why."
  },
  {
    "id": 55,
    "exam": "ASTQB",
    "num": "15",
    "lo": "GenAI-2.2.4",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are working on a critical project that is under the scrutiny of senior management. As a result, simple and clear reporting of testing progress is paramount. You are using the test reporting capabilities of your test management system, but any analysis of the issues and trends has to be done manually by you. How could AI help with this situation?",
    "options": [
      {
        "id": "a",
        "text": "AI could analyze all the open defects and verify that the prioritization is correct based on keywords in the defect report."
      },
      {
        "id": "b",
        "text": "AI could track which test cases are finding the most defects, so you could highlight those on your reports."
      },
      {
        "id": "c",
        "text": "AI could analyze the defect and test case execution information and provide trending information and root cause analysis mapped to the use cases for the software."
      },
      {
        "id": "d",
        "text": "AI would automatically email the existing dashboards to the pertinent executives to ensure they always have the latest information available. For example, defect reports would go to the development management, defect reports to the test management, etc."
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): AI can do analysis of the large amount of information to pull out the necessary trending and root cause analysis to provide more information other than just the numbers. By mapping the findings to the use cases, the importance of the failures would be easier to assess. A would be useful, but doesn’t address the problem in the question. B might be useful, but it would only give part of the picture because you wouldn’t know if those defects mattered. D is not correct because that would be annoying and this information is readily available already."
  },
  {
    "id": 56,
    "exam": "ASTQB",
    "num": "16",
    "lo": "GenAI-2.2.5",
    "level": "K3",
    "points": 2,
    "chapter": 2,
    "multi": false,
    "text": "You are working on testing a new system. The requirements are high-level and lack detail. What prompting technique should you use to get started to get some ideas for how to progress with test case generation?",
    "options": [
      {
        "id": "a",
        "text": "Prompt chaining"
      },
      {
        "id": "b",
        "text": "Few-shot prompting"
      },
      {
        "id": "c",
        "text": "Meta prompting"
      },
      {
        "id": "d",
        "text": "Zero-shot prompting"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): In this case meta prompting is a good starting point. You have the general description of what the software should do and what a test case should accomplish, so those inputs can be used. AI can then respond, and together you can build more test cases."
  },
  {
    "id": 57,
    "exam": "ASTQB",
    "num": "17",
    "lo": "GenAI-2.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You are using GenAI to create test cases for you for a heavily rules-based application. You have requested that it use decision tables to build the test cases. Which metric would be the best one to use to determine how well it has done with this request?",
    "options": [
      {
        "id": "a",
        "text": "Accuracy"
      },
      {
        "id": "b",
        "text": "Recall"
      },
      {
        "id": "c",
        "text": "Diversity"
      },
      {
        "id": "d",
        "text": "Time Efficiency"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): The recall metric evaluates the completeness of the generated output with respect to a specific objective, in this case, using decision tables."
  },
  {
    "id": 58,
    "exam": "ASTQB",
    "num": "18",
    "lo": "GenAI-2.3.2",
    "level": "K2",
    "points": 1,
    "chapter": 2,
    "multi": false,
    "text": "You have been iteratively modifying your prompt for GenAI test case creation. You are still getting the same types of issues with the output, even though you keep refining the prompts and adding more information. What technique can you employ to use those issues to better evaluate and refine the prompts?",
    "options": [
      {
        "id": "a",
        "text": "Iterative prompt modification"
      },
      {
        "id": "b",
        "text": "A/B testing of prompts"
      },
      {
        "id": "c",
        "text": "Output analysis"
      },
      {
        "id": "d",
        "text": "Adjusting prompt specificity"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): At this point, you need to do some analysis on the issues to determine why you are seeing them occur repeatedly."
  },
  {
    "id": 59,
    "exam": "ASTQB",
    "num": "19",
    "lo": "GenAI-3.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following is a result of a reasoning error?",
    "options": [
      {
        "id": "a",
        "text": "An output that favors certain types of information, approaches, or assumptions"
      },
      {
        "id": "b",
        "text": "An output that is based on misinterpretations of logical structures"
      },
      {
        "id": "c",
        "text": "An output that appears plausible but is factually incorrect or irrelevant"
      },
      {
        "id": "d",
        "text": "An output that is only partially complete"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is an example of a reasoning"
  },
  {
    "id": 60,
    "exam": "ASTQB",
    "num": "20",
    "lo": "GenAI-3.1.2",
    "level": "K3",
    "points": 2,
    "chapter": 3,
    "multi": false,
    "text": "You are using GenAI to develop a test plan. You have fed it the requirements, high-level project plan, schedules, and tester profiles. Despite your instructions, when you ask it to generate the test schedule, it creates a new team member and puts them on the schedule to make the testing effort fit the project timeline. What is the problem, and what should you do about it?",
    "options": [
      {
        "id": "a",
        "text": "This is likely a bias problem. You should give it a wider variety of requirements for similar systems so it generates a larger scope of tests."
      },
      {
        "id": "b",
        "text": "This is likely a hallucination. You should instruct the AI model that this is incorrect so it learns."
      },
      {
        "id": "c",
        "text": "This is likely a reasoning error. You should run the test cases against the test objects to verify if the expected results are valid."
      },
      {
        "id": "d",
        "text": "This is likely a temperature problem. You should lower the temperature to allow a more specific focus."
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): This is a hallucination where the AI model has created a new team member for you. While this might be handy, it won’t really help with the schedule and the AI model must be taught that this is incorrect."
  },
  {
    "id": 61,
    "exam": "ASTQB",
    "num": "21",
    "lo": "GenAI-3.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "In what way does comparing results across several different models help reduce hallucinations, reasoning errors, and biases?",
    "options": [
      {
        "id": "a",
        "text": "You can combine the results into a superset of data, which will reduce the errors in the data"
      },
      {
        "id": "b",
        "text": "You can select the data that occurs with the highest frequency and know that it is the most accurate"
      },
      {
        "id": "c",
        "text": "You can compare different outputs from the same prompts to detect output errors and reliability"
      },
      {
        "id": "d",
        "text": "You can get the results faster by using multiple models concurrently"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): By comparing the results from different models using the same prompts, you can tune the prompts, compare the outputs, and pick the most reliable results."
  },
  {
    "id": 62,
    "exam": "ASTQB",
    "num": "22",
    "lo": "GenAI-3.1.4",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "How does setting a random seed value help improve reproducibility in LLM outputs?",
    "options": [
      {
        "id": "a",
        "text": "By setting a lower seed value, the temperature setting is automatically increased, which narrows the probability distribution"
      },
      {
        "id": "b",
        "text": "By setting a higher seed value, more seeds are allowed to be used, which will promote larger output sets from the LLM, which can then be used to extract consistent data, which improves reproducibility"
      },
      {
        "id": "c",
        "text": "By setting a variable seed value, the random sequence values are increased, which results in a larger set of data, which is easier to recreate"
      },
      {
        "id": "d",
        "text": "By setting a seed value, the random number generator has the same starting point, which will ensure the same pseudo-random sequence is used, which improves reproducibility"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): The seed value is used for the random number generator. If it always starts from the same seed value, it is more likely to use the same pseudo-sequence, which will improve the reproducibility of the outputs."
  },
  {
    "id": 63,
    "exam": "ASTQB",
    "num": "23",
    "lo": "GenAI-3.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "If you have a GenAI tool that is processing sensitive customer data, what must you ensure?",
    "options": [
      {
        "id": "a",
        "text": "It cannot store the data in an unencrypted form because it will be readable by anyone"
      },
      {
        "id": "b",
        "text": "It cannot store the data where it might be accessed by an unauthorized user, including another GenAI tool"
      },
      {
        "id": "c",
        "text": "It cannot modify and then restore the data because it will be incorrect and might be misleading for other users"
      },
      {
        "id": "d",
        "text": "It cannot access any sensitive data for any use"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): Presumably, it’s accessing the data because it needs to, but the risk is that it might store it somewhere that it could be accessed by another GenAI tool."
  },
  {
    "id": 64,
    "exam": "ASTQB",
    "num": "24",
    "lo": "GenAI-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "You’ve been working on an application that processes employee leave requests. The data you are using contains the birth date of the employee, but you have replaced all the birth dates with a default date of 1/1/89. You are using GenAI within your company’s databases to build new test data. You have now discovered that the test data contains birthdates again, and they are the real dates. This is an example of what type of data privacy issue?",
    "options": [
      {
        "id": "a",
        "text": "Lack of control over data usage"
      },
      {
        "id": "b",
        "text": "Vulnerability to security attacks"
      },
      {
        "id": "c",
        "text": "Evidence of a malicious introduction of false data"
      },
      {
        "id": "d",
        "text": "Unintentional data exposure"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This is an unintentional exposure of private data – in this case, the birthdates of the employees. A is not correct because the control is still within the company, but there is clearly access to some of the HR data. C and D are not correct because there’s no indication that this was malicious."
  },
  {
    "id": 65,
    "exam": "ASTQB",
    "num": "25",
    "lo": "GenAI-3.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What type of attack vector is being used when the results of AI-generated data are rated incorrectly, intentionally?",
    "options": [
      {
        "id": "a",
        "text": "Context manipulation"
      },
      {
        "id": "b",
        "text": "Request manipulation"
      },
      {
        "id": "c",
        "text": "Data poisoning"
      },
      {
        "id": "d",
        "text": "Malicious code generation"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is an example of data poisoning."
  },
  {
    "id": 66,
    "exam": "ASTQB",
    "num": "26",
    "lo": "GenAI-3.2.3",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "What is the purpose of data anonymization?",
    "options": [
      {
        "id": "a",
        "text": "To only use and process the data that is legally permitted and use only the smallest amount needed"
      },
      {
        "id": "b",
        "text": "To mask or replace any private information with non-identifiable data"
      },
      {
        "id": "c",
        "text": "To implement strong encryption and strictly control data access"
      },
      {
        "id": "d",
        "text": "To ensure everyone is trained in the proper handling of data and is minimizing access"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): To mask or replace any private information with non-identifiable data. (The ASTQB answer sheet gives no further rationale — see syllabus section 3.2.3 for GenAI-3.2.3.)"
  },
  {
    "id": 67,
    "exam": "ASTQB",
    "num": "27",
    "lo": "GenAI-3.3.1",
    "level": "K2",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following GenAI activities takes about as much power as charging a smartphone?",
    "options": [
      {
        "id": "a",
        "text": "Generating a letter to your bank"
      },
      {
        "id": "b",
        "text": "Creating “business” penguin pictures for a presentation"
      },
      {
        "id": "c",
        "text": "Creating only one penguin image"
      },
      {
        "id": "d",
        "text": "Generating a financial year summary report"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Creating just one image uses about the same power as charging a cell phone."
  },
  {
    "id": 68,
    "exam": "ASTQB",
    "num": "28",
    "lo": "GenAI-3.4.1",
    "level": "K1",
    "points": 1,
    "chapter": 3,
    "multi": false,
    "text": "Which of the following establishes a legal framework addressing AI risks and classifying applications by risk level?",
    "options": [
      {
        "id": "a",
        "text": "ISO/IEC 42001:2023"
      },
      {
        "id": "b",
        "text": "ISO/IEC 23053:2022"
      },
      {
        "id": "c",
        "text": "EU AI Act"
      },
      {
        "id": "d",
        "text": "NIST AI Risk Management Framework"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): D, which sounds right, concentrates on managing the risk, focusing on fairness, transparency, and security, so it is not the correct answer."
  },
  {
    "id": 69,
    "exam": "ASTQB",
    "num": "29",
    "lo": "GenAI-4.1.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which part of the architecture in an LLM-powered test infrastructure is responsible for integrating multiple data sources?",
    "options": [
      {
        "id": "a",
        "text": "The front-end"
      },
      {
        "id": "b",
        "text": "The LLM itself"
      },
      {
        "id": "c",
        "text": "The back-end"
      },
      {
        "id": "d",
        "text": "The data controller"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): The back-end integrates multiple data sources."
  },
  {
    "id": 70,
    "exam": "ASTQB",
    "num": "30",
    "lo": "GenAI-4.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What are the two steps in RAG processing?",
    "options": [
      {
        "id": "a",
        "text": "Input / Retrieval"
      },
      {
        "id": "b",
        "text": "Processing / Output"
      },
      {
        "id": "c",
        "text": "Access / Processing"
      },
      {
        "id": "d",
        "text": "Retrieval / Generation"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Retrieval / Generation. (The ASTQB answer sheet gives no further rationale — see syllabus section 4.1.2 for GenAI-4.1.2.)"
  },
  {
    "id": 71,
    "exam": "ASTQB",
    "num": "31",
    "lo": "GenAI-4.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "What does “orchestration” mean regarding LLM-powered agents?",
    "options": [
      {
        "id": "a",
        "text": "It is when several agents work together in a coordinated manner to more efficiently solve complex problems"
      },
      {
        "id": "b",
        "text": "It is when more than three LLM-powered agents work independently to generate outputs that are then reviewed by another agent for accuracy and post-processing"
      },
      {
        "id": "c",
        "text": "It is when RAG is an integral part of an LLM-powered test infrastructure"
      },
      {
        "id": "d",
        "text": "It is a term for background processing that uses a combination of autonomous and semi-autonomous agents"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): B, C, and D are fictional."
  },
  {
    "id": 72,
    "exam": "ASTQB",
    "num": "32",
    "lo": "GenAI-4.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "How can overfitting compromise your model during fine- tuning?",
    "options": [
      {
        "id": "a",
        "text": "It can make the LLM too generalized to be applicable and efficient"
      },
      {
        "id": "b",
        "text": "It can introduce hallucinations and biases"
      },
      {
        "id": "c",
        "text": "It can make the model unable or inaccurate when processing data that is new to it"
      },
      {
        "id": "d",
        "text": "It can create a lack of transparency regarding LLM decision-making"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): Overfitting is when the model has become too specific and is unable to deal with data that is not within what it already knows."
  },
  {
    "id": 73,
    "exam": "ASTQB",
    "num": "33",
    "lo": "GenAI-4.2.2",
    "level": "K2",
    "points": 1,
    "chapter": 4,
    "multi": false,
    "text": "Which of the following LLM deployment types is most concerned with data privacy?",
    "options": [
      {
        "id": "a",
        "text": "Chatbots"
      },
      {
        "id": "b",
        "text": "Commercial testing tools with AI components"
      },
      {
        "id": "c",
        "text": "In-house developed commercial test tools with AI components"
      },
      {
        "id": "d",
        "text": "Data privacy is a critical concern for all of these deployment types"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): It depends more on the data being handled than the process that is handling it, so potentially any of these could be most critical."
  },
  {
    "id": 74,
    "exam": "ASTQB",
    "num": "34",
    "lo": "GenAI-5.1.1",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "How is the risk of using copyrighted data without proper authorization categorized when using shadow AI?",
    "options": [
      {
        "id": "a",
        "text": "Information security weakness"
      },
      {
        "id": "b",
        "text": "Data privacy weakness"
      },
      {
        "id": "c",
        "text": "Compliance issues"
      },
      {
        "id": "d",
        "text": "Vague intellectual property"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): This is an issue because these tools may have unclear licensing agreements and may use copyright data without proper authorization."
  },
  {
    "id": 75,
    "exam": "ASTQB",
    "num": "35",
    "lo": "GenAI-5.1.2",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Why is high-quality input data important when implementing an LLM-powered testing approach?",
    "options": [
      {
        "id": "a",
        "text": "It will be faster with good data that produces fewer errors"
      },
      {
        "id": "b",
        "text": "It will produce reliable results"
      },
      {
        "id": "c",
        "text": "It will allow the largest possible data set to be built"
      },
      {
        "id": "d",
        "text": "It will ensure access is protected and limited to only the correct users"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CORRECT (b): It will produce reliable results. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.1.2 for GenAI-5.1.2.)"
  },
  {
    "id": 76,
    "exam": "ASTQB",
    "num": "36",
    "lo": "GenAI-5.1.3",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "You are working to convince your manager that a GenAI tool would be helpful in generating test reports. One of his issues is that he feels he could hire interns to write the test reports, and that would be faster than incorporating a new tool. You are sure that it will be able to write the reports faster and more accurately, freeing critical testing time. What is an important capability of the LLM that you should evaluate to be sure it will prove you right?",
    "options": [
      {
        "id": "a",
        "text": "Model performance"
      },
      {
        "id": "b",
        "text": "Fine-tuning potential"
      },
      {
        "id": "c",
        "text": "Direct cost"
      },
      {
        "id": "d",
        "text": "Community and support"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): You need to be sure the model will perform efficiently and accurately in the report generation tasks."
  },
  {
    "id": 77,
    "exam": "ASTQB",
    "num": "37",
    "lo": "GenAI-5.1.4",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "What is the first key phase when adopting GenAI into the test organization?",
    "options": [
      {
        "id": "a",
        "text": "Discovery"
      },
      {
        "id": "b",
        "text": "Initiation and Training"
      },
      {
        "id": "c",
        "text": "Usage Definition"
      },
      {
        "id": "d",
        "text": "Exploitation and Iteration"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): Discovery. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.1.4 for GenAI-5.1.4.)"
  },
  {
    "id": 78,
    "exam": "ASTQB",
    "num": "38",
    "lo": "GenAI-5.2.1",
    "level": "K2",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Why does a tester need to understand “prompt engineering” in order to work effectively with GenAI?",
    "options": [
      {
        "id": "a",
        "text": "Because they will have a better grasp of the internal layers of the neural network"
      },
      {
        "id": "b",
        "text": "Because they need to understand what user prompts will need to be tested and the relative risk of each"
      },
      {
        "id": "c",
        "text": "Because they will be asked to generate new user prompts based on the AI-designed UI"
      },
      {
        "id": "d",
        "text": "Because they will need to design and refine the input prompts to guide the LLM"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "CORRECT (d): Because they will need to design and refine the input prompts to guide the LLM. (The ASTQB answer sheet gives no further rationale — see syllabus section 5.2.1 for GenAI-5.2.1.)"
  },
  {
    "id": 79,
    "exam": "ASTQB",
    "num": "39",
    "lo": "GenAI-5.2.2",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "When conducting GenAI training meetings with the testing team, what is an important learning method?",
    "options": [
      {
        "id": "a",
        "text": "Discussing challenges and their resolutions"
      },
      {
        "id": "b",
        "text": "Highlighting erroneous prompts used within the team"
      },
      {
        "id": "c",
        "text": "Processing AI outputs to better analyze manual testing gaps"
      },
      {
        "id": "d",
        "text": "Promoting the use of AI methods and nominating an “AI champion of the week”"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CORRECT (a): B, C and D might also be informative, but one of the key methods highlighted in the syllabus is to discuss challenges as a team."
  },
  {
    "id": 80,
    "exam": "ASTQB",
    "num": "40",
    "lo": "GenAI-5.2.3",
    "level": "K1",
    "points": 1,
    "chapter": 5,
    "multi": false,
    "text": "Who is usually responsible for ensuring that test teams maintain both traditional testing competencies and AI literacy?",
    "options": [
      {
        "id": "a",
        "text": "Each tester"
      },
      {
        "id": "b",
        "text": "The senior testers"
      },
      {
        "id": "c",
        "text": "The test manager"
      },
      {
        "id": "d",
        "text": "The AI master"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "CORRECT (c): This is usually the role of the test manager to be sure that the team as a whole has these capabilities. Individuals are responsible for their own capabilities and ensuring they are staying current with the industry changes."
  }
];
