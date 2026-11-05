import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctqdo";

export default function CTQDOGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-QDO v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — QUALITY IN DEVOPS"
      title="CT-QDO v1.0 — Comprehensive Exam Guide"
      subtitle="4 Chapters · Insights From the Official Sample Exam · 48 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea", "📝 Exam insights from the official sample exam"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 5 K3 objectives (implement QA activities 2.1.1, implement a CI/CD pipeline 2.2.6, quality reporting 3.1.3, prepare API testing 3.2.2, quality hunting 3.3.4) each yield a 2-point scenario question — practice them on scenarios."
      examFormat={[
        { label: "Questions", value: "40 (45 points)" },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass mark", value: "30 points (65%)" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      examNote="Question distribution: Ch 1 → 8 questions (8 pts) · Ch 2 → 9 questions (11 pts) · Ch 3 → 13 questions (16 pts) · Ch 4 → 10 questions (10 pts). Chapters 2–3 carry the five 2-point K3 scenarios."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "DORA throughput  = change lead time + deployment frequency",
          "DORA stability   = change fail % + failed deployment recovery time",
          "CD               = always deployable, HUMAN decides deployment",
          "Cont. deployment = every passing change deploys, NO human",
          "Deployment ≠ release — feature toggles decouple them",
          "Telemetry = gather data · Observability = analyze data",
          "Pipeline steps   = VSM → build/deploy → commit → acceptance → release → evolve",
        ],
        note: <><strong>Definition swaps to watch:</strong> quality hunting (assess quality level) vs bug hunting (count defects) · crowd testing (external, breadth) vs quality hunting (internal teams, limited time) · dark launch (no users see it) vs canary (few users see it).</>,
      }}
    />
  );
}
