import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctaiv2";

export default function CTAIGuideV2() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-AI v2.0"
      eyebrow="ISTQB CERTIFIED TESTER AI TESTING"
      title="CT-AI v2.0 — Comprehensive Exam Guide"
      subtitle="7 Chapters · Official Q&A Insights Embedded · 40 Exam Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea", "📝 Exam insights from official Q&A"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K3/K4 objectives are virtually guaranteed exam questions — practice applying them to scenarios."
      quickRef={{
        title: "⭐ EXAM FORMULA QUICK REFERENCE",
        lines: [
          "Accuracy  = (TP + TN) / (TP + TN + FP + FN) × 100%",
          "Precision = TP / (TP + FP) × 100%   ← denominator = predicted positives",
          "Recall    = TP / (TP + FN) × 100%   ← denominator = actual positives",
          "F1-Score  = 2 × (Precision × Recall) / (Precision + Recall)",
        ],
        note: <><strong>Q15 Exam values:</strong> TP=78, TN=14, FP=22, FN=6 → Precision = 78/(78+22) = 78/100 = <strong>78%</strong></>,
      }}
    />
  );
}
