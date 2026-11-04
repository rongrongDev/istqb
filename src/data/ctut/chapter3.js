// CT-UT (syllabus 2018) — Chapter 3: Usability and Accessibility Standards
// summary/deepPoints from the syllabus; examInsights from ISTQB CT-UT Sample Exam set A v1.2
export default {
  id: 3,
  title: 'Usability and Accessibility Standards',
  time: '105 min',
  color: '#0891B2',
  bg: '#ECFEFF',
  overview: "Three questions. Only what the syllabus says about each standard is examinable. Know what a USER INTERFACE GUIDELINE is (low-level, specific, little room for interpretation), the ISO standards (9241-110 dialogue principles, 9241-210 human-centered design, 25066 CIF reports — and that there is NO ISO standard for usability testing), manufacturer guidelines, ISO 9241-171 and WCAG 2.0 levels A/AA/AAA with their examples, and the UK Equality Act vs Americans with Disabilities Act (and Section 508).",
  sections: [
    {
      id: '3.1', title: 'User Interface Guidelines and Manufacturer Guidelines', level: 'K2', type: 'deep',
      deepPoints: [
        "USABILITY STANDARD = a collection of UI guidelines for efficient, satisfactory dialogues. USER INTERFACE GUIDELINE = a LOW-LEVEL, SPECIFIC rule leaving little room for interpretation, for consistent appearance and behavior.",
        "Guidelines help decide what is \"unacceptable\" (ten steps to log on?) — sizes and placement of controls, clarity of prompts, helpful error messages, layout, colors, sounds. Examples: safest value selected by default; the logo always top-left and linking home; buttons exactly 23 px high.",
        "MANUFACTURER GUIDELINES: Apple (OS X Human Interface Guidelines), Android (Google), Microsoft Windows UX Interaction Guidelines, SAP design guidelines."
      ],
      examInsights: ["A-Q11 — A valid UI guideline is precise and checkable: \"the company logo must appear in the upper left corner of each page, exactly as on the home page\"."]
    },
    {
      id: '3.1.1', title: 'ISO Usability Standards', level: 'K2', type: 'deep',
      deepPoints: [
        "No ISO standard exists for usability evaluation or usability testing.",
        "ISO 9241-110 — SEVEN DIALOGUE PRINCIPLES: suitability for the task, self-descriptiveness, conformity with user expectations, suitability for learning, controllability, error tolerance, suitability for individualization. Like heuristics, but general and open to interpretation in evaluation.",
        "ISO 9241-210 — human-centered design principles and activities (section 1.3).",
        "ISO 25066 (2016) — COMMON INDUSTRY FORMAT (CIF) for usability evaluation reports: classification of evaluation approaches, required content elements, intended users and situations."
      ],
      examInsights: []
    },
    {
      id: '3.2.1', title: 'ISO 9241-171 Software Accessibility', level: 'K2', type: 'skim',
      summary: "An ACCESSIBILITY STANDARD is a collection of UI guidelines for accessible dialogues. ISO 9241-171 guides software design for the highest possible accessibility: definitions (e.g. SCREEN READER = assistive technology letting users operate software without viewing the display) and 140+ guidelines, e.g. 8.1.4 \"make names (of UI elements) available to assistive technology\" in a documented, stable way.",
      examInsights: []
    },
    {
      id: '3.2.2', title: 'Web Content Accessibility Guidelines (WCAG)', level: 'K2', type: 'deep',
      deepPoints: [
        "Published by the W3C's Web Accessibility Initiative (WAI): guidelines for making web content accessible, mainly for people with disabilities.",
        "LEVEL A — high impact on broad populations, easiest to implement, lowest impact on presentation/business logic. Examples: TEXT ALTERNATIVES (1.1.1 — images have equivalent alt text); KEYBOARD ACCESSIBLE (2.1.1 — everything operable by keyboard, no mouse needed).",
        "LEVEL AA — also high impact, sometimes for specific populations; may change presentation or business logic. Example: DISTINGUISHABLE (1.4.4 — text resizable to 200% without loss).",
        "LEVEL AAA — improvements for specific populations, possibly hard or expensive; low cost-benefit may lower priority. Example: 2.1.3 keyboard operable with no exceptions for timing."
      ],
      examInsights: ["A-Q12 — For \"provide text alternatives for non-text content\", images should include equivalent alternative text in the markup."]
    },
    {
      id: '3.2.3', title: 'Accessibility Legislation', level: 'K2', type: 'deep',
      deepPoints: [
        "UK EQUALITY ACT 2010: protects against discrimination; a Statutory Code of Practice puts websites providing services under the Act. Organizations must take REASONABLE steps (cost considered). WCAG Level A is generally seen as the legal minimum (improves chances in court, no guarantee); some see AA as proper accessibility.",
        "AMERICANS WITH DISABILITIES ACT: prohibits disability discrimination and requires PRIVATE WEBSITES to be accessible to blind and visually impaired users; places of public accommodation and their goods and services must be accessible.",
        "REHABILITATION ACT 1973, SECTION 508: FEDERAL AGENCIES must make electronic and information technology accessible to disabled employees and the public."
      ],
      examInsights: ["A-Q13 — The law that specifically requires private websites to be accessible to blind or visually impaired users: the Americans with Disabilities Act."]
    }
  ]
};
