// CT-SEC (Advanced Security Tester 2016) — Chapter 9 learn content, authored from the ISTQB Advanced Security Tester Syllabus 2016.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Standards capture expert consensus and regulators' demands, and trends signal tomorrow's threats. This short chapter covers the benefits of security testing standards, how they apply in regulatory versus contractual situations, mandatory versus optional clauses, and where to follow industry trends.",
  keywords: ["consensus-based standard"],
  objectives: [
    { id: "AS-9.1.1", level: "K2", text: "Understand the benefits of using security testing standards and where to find them" },
    { id: "AS-9.1.2", level: "K2", text: "Understand the difference in applicability of standards in regulatory versus contractual situations" },
    { id: "AS-9.2.1", level: "K2", text: "Understand the difference between mandatory (normative) and optional (informative) clauses within any standard" },
    { id: "AS-9.3.1", level: "K2", text: "Understand where to learn of industry trends in information security" },
  ],
  sections: {
    "9.1": {
      objective: "AS-9.1.1",
      body: [
        { type: "p", text: "A consensus-based standard is the considered opinion of a knowledgeable body of experts, available for voluntary use in supplier–customer agreements. Less formal 'standards' come from self-identified or vendor-specific groups. In regulated sectors — medical, financial, transportation, energy — agencies may require compliance with their own regulations or their reading of voluntary standards." },
        { type: "list", intro: "Benefits of security testing standards:", items: [
          "A framework, so you don't start from a blank page.",
          "Effective defenses and how to test against the most common attacks.",
          "They can be tailored to the project or organization.",
          "Following them demonstrates due diligence.",
        ]},
        { type: "table", headers: ["Situation", "Role of standards"], rows: [
          ["Regulatory", "Mandatory obligations — non-compliance can delay or block approval and, in extreme cases, bring financial or criminal sanctions"],
          ["Contractual", "A reasonable, convenient starting point for negotiating requirements; if a contract was won by claiming compliance, follow the standard strictly and document deviations"],
        ]},
        { type: "p", text: "Not every standard fits every situation — research the ones that suit your systems, assets, risk level and compliance needs, and tailor them." },
      ],
    },
    "9.2": {
      objective: "AS-9.2.1",
      body: [
        { type: "p", text: "Read standards precisely: 'shall' marks mandatory (normative) requirements needed to claim conformance; 'should' and 'may' mark optional (informative) ones. A common misuse is demanding an optional item or treating a mandatory one as optional. Any omissions, modifications or additions must be justified, documented and agreed by all parties." },
      ],
    },
    "9.3": {
      objective: "AS-9.3.1",
      body: [
        { type: "p", text: "Follow general and industry-specific news services, publications, email lists, conferences, trade shows and professional societies; electronic alerts give the fastest actionable warnings. Pay most attention to issues specific to your industry, application area and products." },
        { type: "p", text: "New technologies open windows for misuse until their risks are understood — location-aware mobile services, for instance. Threat agents are growing in motivation and resources: criminals moving extortion online, ad hoc ideological networks, well-funded corporate espionage, and nation-states. Track trends and acquire the right tools to stay ready for the next threat." },
      ],
    },
  },
};
