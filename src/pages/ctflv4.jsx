import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctflv4";

export default function CTFLSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CTFL v4.0"
      eyebrow="ISTQB CERTIFIED TESTER FOUNDATION LEVEL"
      title="CTFL v4.0 Learning Guide"
      subtitle="6 Chapters · Syllabus v4.0.1 (2024-09-15) · ~19 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3 objectives are guaranteed apply-style exam questions (8 of 40) — chapters 4 and 5 need the most practice."
      quickRef={{
        title: "⭐ EXAM FORMULA QUICK REFERENCE",
        lines: [
          "Three-point estimate  E = (a + 4m + b) / 6,  SD = (b − a) / 6",
          "Risk level            = risk likelihood × risk impact",
          "Coverage              = exercised coverage items / total items × 100%",
          "2-value BVA [a..b]    → a−1, a, b, b+1 · 3-value adds a+1, b−1",
        ],
      }}
    />
  );
}
