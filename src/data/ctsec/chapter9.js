// CT-SEC (Advanced Security Tester 2016) — Chapter 9: Standards and Industry Trends
// summary/deepPoints from the 2016 syllabus; examInsights from ISTQB Security Testing Sample Exam set A v1.1
export default {
  id: 9,
  title: 'Standards and Industry Trends',
  time: '40 min',
  color: '#2563EB',
  bg: '#EFF6FF',
  overview: "Short K2 chapter: consensus-based vs regulatory standards, the benefits of security testing standards (framework, effective defenses, tailorable, DUE DILIGENCE), standards in regulated vs contractual settings (STARTING POINT for negotiation; strict compliance if a contract claims it), SHALL (mandatory) vs SHOULD/MAY (optional), documenting deviations, and where to learn about trends.",
  sections: [
    {
      id: '9.1', title: 'Understanding Security Testing Standards', level: 'K2', type: 'deep',
      deepPoints: [
        "CONSENSUS-BASED standard = considered opinion of a body of experts, for VOLUNTARY use in supplier–customer contracts; lesser 'standards' come from informal or vendor-specific groups. Regulated industries (medical, financial, transportation, energy) may REQUIRE compliance with regulations or interpretations of voluntary standards.",
        "Benefits: a FRAMEWORK so you don't start from a blank page; effective defenses and how to test common attacks; TAILORABLE; demonstrate DUE DILIGENCE.",
        "Regulatory: everyone must know their obligations — non-compliance can delay or prevent approval, even financial or criminal sanctions. Contractual: a reasonable, convenient STARTING POINT for negotiating requirements; if a contract is won by claiming compliance, follow the standard strictly and document deviations.",
        "Selection: research the standards that fit your systems, assets, risk and compliance needs; tailor them."
      ],
      examInsights: [
        "Q44 KEY — Benefit of conforming to security testing standards: they are building blocks for future testing, eliminating the need to start from scratch.",
        "Q45 KEY — Security standards in contracts give both parties a starting place for negotiation."
      ]
    },
    {
      id: '9.2', title: 'Applying Security Standards', level: 'K2', type: 'skim',
      summary: "'SHALL' = MANDATORY (normative) requirements needed to claim conformance; 'SHOULD' and 'MAY' = OPTIONAL (informative). Typical misuse: requiring an optional item or treating an obligatory one as optional. Project-specific omissions, modifications or additions must be JUSTIFIED, DOCUMENTED and AGREED by all parties."
    },
    {
      id: '9.3', title: 'Industry Trends', level: 'K2', type: 'skim',
      summary: "Learn trends from general and industry-specific news services, publications, email lists, conferences, trade shows and professional societies/communities of practice; ELECTRONIC ALERTS give the most immediate actionable response; focus on issues specific to your industry, application area and products. New technologies (e.g. location-aware mobile services) open a window for misuse; threats grow from criminals, hacktivists, economic and political agents, well-funded corporate espionage and nation-states → track trends and acquire the right tools."
    }
  ]
};
