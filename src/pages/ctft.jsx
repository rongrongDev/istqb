import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctft";

export default function CTFTSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-FT v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — FINANCE TESTING"
      title="CT-FT v1.0 Learning Guide"
      subtitle="6 Chapters · Syllabus v1.0 (2026) · ~11 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3 objectives — reconciliation (4.2), functional testing (5.1), load & stress testing (5.3) and automation strategy (6.2) — appear as scenario questions worth 2 points each in the ASTQB sample."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Accuracy = correct real value · Consistency = same format, value, meaning everywhere", "Control testing = HOW processing works · Substantive = WHAT it produces", "Back-to-back = same inputs into two versions, compare outputs", "Stress up to ~200% of peak → fail gracefully, then recover", "RTO = time to restore · RPO = data you may lose", "Risk responses = avoid · mitigate (test) · transfer · accept"] }}
    />
  );
}
