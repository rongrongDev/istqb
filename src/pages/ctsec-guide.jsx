import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctsec";

export default function CTSECGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-SEC (2016)"
      eyebrow="ISTQB CERTIFIED TESTER — SECURITY TESTING"
      title="CT-SEC (2016) — Comprehensive Exam Guide"
      subtitle="9 Chapters · Insights From ISTQB Sample Exam set A v1.1 · 45 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K4 analyses (3 pts typical): assets and risk techniques (1.1), policy effectiveness (1.2.2), approaches and failures (2.6), test plans (3.2), results (3.5), requirements/design/component adequacy (4.2–4.4), attack scenarios (6.1.4), interim reports (7.2.3), tool needs (8.2.1). K3 (2 pts typical): objectives, test design, end-to-end and acceptance tests, testing each security mechanism."
      examFormat={[{"label": "Questions", "value": "45 (80 points)"}, {"label": "Duration", "value": "120 min (+25% non-native)"}, {"label": "Pass mark", "value": "52 of 80 (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="Sample Exam A (site mapping — the official key has no LOs): Ch 1 → 4 · Ch 2 → 6 · Ch 3 → 6 · Ch 4 → 8 · Ch 5 → 7 · Ch 6 → 6 · Ch 7 → 3 · Ch 8 → 3 · Ch 9 → 2 questions. 1, 2 or 3 points per question."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Security is BUILT IN — not tested or patched in", "Security testing policy follows the approved security policy", "IA ⊃ security testing (like QA ⊃ testing)", "Stakeholders: execs = protection · senior mgmt = due diligence · customers = fraud protection", "Report = need-to-know · early · tuned to the recipient", "shall = mandatory · should/may = optional"], note: "Definition swaps to watch: security audit (wider, procedures/policies) vs security testing (technology, proves controls work) · authentication (who are you) vs authorization (what may you do) · firewall (blocks traffic) vs IDS (analyzes and alerts) · negative/signature vs positive/behavior IDS model · insiders (many attacks) vs external hackers (minority) · passive vs active reconnaissance." }}
    />
  );
}
