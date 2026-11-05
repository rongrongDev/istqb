import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctqdo";

export default function CTQDOSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-QDO v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — QUALITY IN DEVOPS"
      title="CT-QDO v1.0 Learning Guide"
      subtitle="4 Chapters · Syllabus v1.0 (2026-04-17) · ~20 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 5 K3 objectives (QA activities, pipeline implementation, quality reporting, API testing, quality hunting) each yield a 2-point scenario question — 10 of the 45 exam points."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "DORA throughput   = change lead time + deployment frequency",
          "DORA stability    = change fail % + failed deployment recovery time",
          "CALMS             = Culture Automation Lean Measurement Sharing",
          "Three ways        = flow → feedback → continuous learning",
          "SLA ⊃ SLO ⊂ SLI   : SLIs measure whether SLOs (targets) meet SLAs",
          "Pipeline steps    = VSM → build/deploy → commit → acceptance → release → evolve",
        ],
      }}
    />
  );
}
