import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/softskills";

export default function SoftSkillsSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ASTQB CT-SS v1.0"
      eyebrow="ASTQB CERTIFIED TESTER — SOFT SKILLS FOR TESTERS"
      title="CT-SS v1.0 Learning Guide"
      subtitle="4 Chapters · Syllabus v1.0 (2025-10-01) · ~17 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 5 K3 objectives (choosing the communication environment, business-writing fixes, the Cost of Quality calculation, the usability questions, stretch-role interviews) each yield a 2-point scenario question — 10 of the 45 exam points."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "Objective > subjective · inform > guide · pause before send",
          "Risk steps    = identify → assess (impact × likelihood) → mitigate",
          "CoQ delta     = cost where found − cost where it should have been found",
          "Severity = system impact · Priority = business · Urgency = how fast",
          "Test case min = traceable + repeatable + expected results",
          "ISO 25010     = FuncSuit Reliab Perf Usab Sec Compat Maint Port",
        ],
      }}
    />
  );
}
