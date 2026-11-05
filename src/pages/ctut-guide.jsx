import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctut";

export default function CTUTGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-UT (2018)"
      eyebrow="ISTQB CERTIFIED TESTER — USABILITY TESTING"
      title="CT-UT (2018) — Comprehensive Exam Guide"
      subtitle="8 Chapters · Insights From ISTQB Sample Exam A v1.2 · 40 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K4: identify likely usability risks in a project (2.2.2), heuristic evaluation (4.2.2), select evaluation methods (7.1.1). K3: define a test task (5.3.3), review a test report (5.6.1), apply reporting best practices (5.6.3)."
      examFormat={[{"label": "Questions", "value": "40 (1 point each)"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass mark", "value": "26 of 40 (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="Sample Exam A: Ch 1 → 13 · Ch 2 → 2 · Ch 3 → 3 · Ch 4 → 3 · Ch 5 → 14 · Ch 6 → 2 · Ch 7 → 1 · Ch 8 → 2 questions (incl. 6 keyword questions mapped by topic). Basic concepts and usability testing dominate."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Approaches: review (no users) · testing (observe users) · survey (satisfaction)", "HCD: context of use → requirements → designs → evaluate → iterate", "Agile: RITE · informal/quick (café, < 15 min) · weekly testing", "WCAG: A (alt text, keyboard) · AA (resize 200%) · AAA", "Severity: minor · major · critical (gave up) · catastrophic", "SUS 10 items · SUMI 50 · WAMMI 20 (websites)"], note: "Definition swaps to watch: usability (direct interaction) vs user experience (before, during, after) vs accessibility (users with disabilities) · formative (early, qualitative) vs summative (late, quantitative) · informal review (anyone) vs expert review (peer-recognized experts) vs heuristic evaluation (heuristics drive it) · test plan (purpose, who, where, cost) vs test script (moderator's checklist) · moderator (runs session, only one talking) vs note-taker (records) vs observers · Equality Act (UK, reasonable steps) vs ADA (US, private websites) vs Section 508 (US federal agencies)." }}
    />
  );
}
