import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/cttas";

export default function CTTASGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-TAS v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — TEST AUTOMATION STRATEGY"
      title="CT-TAS v1.0 — Comprehensive Exam Guide"
      subtitle="6 Chapters · Insights From ISTQB Sample Exam v1.2 + ASTQB Sample Exam · 80 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3 (2 pts): optimize distribution for shift left/right (3.1.3), DevOps continuous testing (3.2.3), show ROI (5.1.1 — turning point & inputs), organizational considerations (5.3.1), project characteristics (5.3.2), evaluate automation assets (6.2.1)."
      examFormat={[{"label": "Questions", "value": "40 (49 points)"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass mark", "value": "32 points (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="ISTQB Sample Exam v1.2: Ch 1 → 5 · Ch 2 → 4 · Ch 3 → 9 · Ch 4 → 10 · Ch 5 → 7 · Ch 6 → 5 questions. The 2-point K3 items sit in chapters 3, 5 and 6."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Savings inputs   = manual run time · automated run time · # test cases · # runs", "Investment inputs= setup · dev time · # scripts · maintenance · run time · % failed", "Metrics          = pass-fail · failures-to-defects · exec time · # tests · functional cov · code cov", "Waterfall < V-model < Agile (in-sprint) < DevOps (continuous testing)", "Pipeline queuing → smoke suite in pipeline, full regression separately", "Red flag         = TAS maintenance time > manual testing time"], note: "Definition swaps to watch: floating (concurrent use) vs per user/machine (named) · hourglass (service level missing) vs ice cream cone (component level missing) · shift left (earlier, test doubles) vs shift right (production, canary/dark launch) · number of automated tests (progress) vs functional coverage (requirements) · TAA (a design) vs test environment components." }}
    />
  );
}
