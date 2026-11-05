import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctaiv2";

export default function CTAIGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-AI v2.0"
      eyebrow="ISTQB CERTIFIED TESTER AI TESTING"
      title="CT-AI v2.0 Learning Guide"
      subtitle="7 Chapters · Syllabus 2026/04/17 · 19.5 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K3/K4 objectives are virtually guaranteed exam questions — these sections need the most practice."
      quickRef={{
        title: "⭐ EXAM FORMULA QUICK REFERENCE",
        lines: [
          "Accuracy  = (TP + TN) / (TP + TN + FP + FN) × 100%",
          "Precision = TP / (TP + FP) × 100%",
          "Recall    = TP / (TP + FN) × 100%",
          "F1-Score  = 2 × (Precision × Recall) / (Precision + Recall)",
        ],
      }}
    />
  );
}
