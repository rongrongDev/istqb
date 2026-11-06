import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctact";

export default function CTACTSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-AcT (2019)"
      eyebrow="ISTQB CERTIFIED TESTER — ACCEPTANCE TESTING"
      title="CT-AcT (2019) Learning Guide"
      subtitle="5 Chapters · Syllabus v1.0 (2019) · ~10 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3 objectives — writing acceptance criteria (2.1), Gherkin (2.2.2), BPMN/DMN modeling (3.1), deriving tests from models (3.2) and collaboration skills (5.1) — are a quarter of Sample Exam A; every question is worth 1 point."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Acceptance criteria = WHAT to test (true/false) · acceptance tests = HOW", "Good criteria: precise, measurable, concise · no technical solution", "Gherkin: GIVEN state · WHEN user action · THEN observable result", "BPMN X = decision (one path) · + = parallel (all paths)", "Quality in use: effectiveness · efficiency · satisfaction · freedom from risk · context coverage", "UX pillars: user · task · context · competition"] }}
    />
  );
}
