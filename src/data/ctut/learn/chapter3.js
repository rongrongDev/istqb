// CT-UT — Chapter 3 learn content, authored from the ISTQB Usability Testing Syllabus 2018.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.
// Only what the syllabus states about each standard is examinable — not the standards' full contents.

export default {
  intro:
    "Standards and guidelines turn vague ideas of \"good usability\" into checkable rules. This chapter covers user interface guidelines, the ISO usability standards, manufacturer guidelines, the accessibility standards ISO 9241-171 and WCAG, and accessibility legislation in the UK and USA.",
  keywords: ["user interface guideline", "Web Content Accessibility Guidelines"],
  objectives: [
    { id: "UTFL-3.1.1", level: "K2", text: "Understand the general content and applicability of ISO usability standards and manufacturer guidelines to particular types of project/application" },
    { id: "UTFL-3.2.1", level: "K2", text: "Understand the general content and applicability of ISO 9241-171 (Software Accessibility) and the Web Content Accessibility Guidelines (WCAG) 2.0 to particular types of project and applications" },
    { id: "UTFL-3.2.2", level: "K2", text: "Understand the general content of accessibility legislation (UK Equality Act 2010 and Americans with Disabilities Act)" },
  ],
  sections: {
    "3.1": {
      objective: "UTFL-3.1.1",
      body: [
        { type: "p", text: "A usability standard is a collection of user interface guidelines for designing efficient and satisfying dialogues. A user interface guideline is a low-level, specific rule for UI design that leaves little room for interpretation, so designers apply it consistently across an organization's systems." },
        { type: "p", text: "Guidelines help detect and report usability problems throughout human-centered design — without them it's hard to say what is unacceptable (is ten steps to log on reasonable?). They should give precise rules for the size and placement of controls, clear instructions and prompts, helpful error messages, layout, colors and sounds." },
        { type: "list", intro: "Example guidelines:", items: [
          "\"Select the safest, most secure value by default for every control; if safety isn't a factor, the most likely or convenient value.\"",
          "\"The company logo appears in the upper left corner of every page, exactly where it is on the home page, and clicking it shows the home page.\"",
          "\"Buttons are exactly 23 pixels high.\"",
        ]},
        { type: "table", headers: ["Manufacturer guideline", "Typical section titles"], rows: [
          ["Apple OS X Human Interface Guidelines", "Starting and stopping, modality, feedback and assistance, interaction and input, color and typography, terminology and wording"],
          ["Android UI Guidelines (Google)", "Animation, style, layout, components, patterns, usability"],
          ["Microsoft Windows UX Interaction Guidelines", "Design principles, controls, commands, text, messages, windows, visuals"],
          ["SAP design guidelines", "Action, container, data visualization, filter, list, table, toolbar, user input"],
        ]},
      ],
    },
    "3.1.1": {
      objective: "UTFL-3.1.1",
      body: [
        { type: "p", text: "Most ISO usability standards belong to the ISO 9241 family. Note: there is currently no ISO standard for usability evaluation or usability testing." },
        { type: "table", headers: ["Standard", "Content"], rows: [
          ["ISO 9241-110 — ergonomics of human-system interaction", "Seven dialogue principles: suitability for the task, self-descriptiveness, conformity with user expectations, suitability for learning, controllability, error tolerance, suitability for individualization"],
          ["ISO 9241-210 — human-centered design for interactive systems", "Principles and activities of human-centered design (see section 1.3)"],
          ["ISO 25066 (2016) — Common Industry Format (CIF) for usability evaluation reports", "Classifies evaluation approaches; specifies the content elements of a report, its intended users and when it applies"],
        ]},
        { type: "p", text: "Dialogue principles resemble heuristics and apply to analysis, design and evaluation, but their general wording makes them open to interpretation when used to evaluate." },
      ],
    },
    "3.2.1": {
      objective: "UTFL-3.2.1",
      body: [
        { type: "p", text: "An accessibility standard is a collection of user interface guidelines for designing accessible dialogues. ISO 9241-171 guides software design toward the highest possible accessibility. It provides definitions — e.g. a screen reader is assistive technology that lets users operate software without seeing the display — and more than 140 guidelines with notes and examples, such as \"make the names of user interface elements available to assistive technology in a documented, stable way\"." },
      ],
    },
    "3.2.2": {
      objective: "UTFL-3.2.1",
      body: [
        { type: "p", text: "The Web Content Accessibility Guidelines come from the Web Accessibility Initiative (WAI) of the W3C, the main international standards body for the web. They tell you how to make web content accessible, mainly for people with disabilities, at three conformance levels:" },
        { type: "table", headers: ["Level", "Character", "Examples"], rows: [
          ["A", "High impact on broad populations, not a single disability; least impact on presentation and business logic; usually easiest", "Text alternatives (1.1.1): images have equivalent alternative text in the markup. Keyboard accessible (2.1.1): all functions work from a keyboard — no mouse needed — including speech input that mimics a keyboard"],
          ["AA", "Also high impact, sometimes for specific populations; may require changes to presentation or business logic", "Distinguishable (1.4.4): text can be resized up to 200% without assistive technology and without losing content or function"],
          ["AAA", "Improvements for specific populations; may be hard or costly; low cost-benefit may lower priority", "Keyboard (2.1.3): all functionality operable by keyboard without any timing requirements"],
        ]},
        { type: "p", text: "Section 1.2.3 recommends adopting level AA as the ambition level for accessibility." },
      ],
    },
    "3.2.3": {
      objective: "UTFL-3.2.2",
      body: [
        { type: "table", headers: ["Law", "Key points"], rows: [
          ["UK Equality Act 2010", "Protects against discrimination at work and in society. A Statutory Code of Practice includes websites that provide services. Organizations must take reasonable steps (cost considered) to make sites accessible. WCAG level A is generally seen as the legal minimum — it improves your chances in court but guarantees nothing; some regard AA as the minimum for proper accessibility"],
          ["Americans with Disabilities Act (USA)", "Prohibits discrimination based on disability and requires private websites to be accessible to blind and visually impaired users; places of public accommodation and their goods and services must be accessible"],
          ["Rehabilitation Act 1973, Section 508 (USA)", "Federal agencies must make the electronic and information technology they develop, buy or use accessible, giving disabled employees and the public comparable access to information"],
        ]},
      ],
    },
  },
};
