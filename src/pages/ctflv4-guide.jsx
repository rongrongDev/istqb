import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctflv4";

export default function CTFLGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CTFL v4.0"
      eyebrow="ISTQB CERTIFIED TESTER FOUNDATION LEVEL"
      title="CTFL v4.0 — Comprehensive Exam Guide"
      subtitle="6 Chapters · Insights From Sample Exams A–D · 160 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea", "📝 Exam insights from official sample exams"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 8 K3 objectives (EP, BVA, decision tables, state transitions, ATDD, estimation, prioritization, defect reports) each yield an apply-style question — practice them on scenarios."
      quickRef={{
        title: "⭐ EXAM FORMULA QUICK REFERENCE",
        lines: [
          "Three-point estimate  E = (a + 4m + b) / 6,  SD = (b − a) / 6",
          "Risk level            = risk likelihood × risk impact",
          "Coverage              = exercised coverage items / total items × 100%",
          "2-value BVA [a..b]    → a−1, a, b, b+1",
          "3-value BVA [a..b]    → a−1, a, a+1, b−1, b, b+1",
        ],
        note: <><strong>Worked example (Exam A Q32):</strong> a=6, m=9, b=18 → E = (6 + 4×9 + 18)/6 = <strong>10 person-hours</strong>, SD = (18−6)/6 = 2</>,
      }}
    />
  );
}
