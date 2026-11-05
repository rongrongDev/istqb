import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/softskills";

export default function SoftSkillsGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ASTQB CT-SS v1.0"
      eyebrow="ASTQB CERTIFIED TESTER — SOFT SKILLS FOR TESTERS"
      title="CT-SS v1.0 — Comprehensive Exam Guide"
      subtitle="4 Chapters · Insights From the Official Sample Exam · 40 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea", "📝 Exam insights from the official sample exam"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 5 K3 objectives — select the best communication environment (1.3.e), apply business-writing practices (2.1.a), apply the Cost of Quality formula (3.1.d), determine informal usability requirements (3.3.a), prepare for a stretch-role interview (4.2.c) — each yield a 2-point scenario question."
      examFormat={[
        { label: "Questions", value: "40 (45 points)" },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass mark", value: "30 points (65%)" },
        { label: "Prerequisite", value: "None — interest in testing" },
      ]}
      examNote="Sample exam distribution: Ch 1 → 13 questions (14 pts) · Ch 2 → 10 questions (11 pts) · Ch 3 → 12 questions (14 pts) · Ch 4 → 5 questions (6 pts). Every chapter except ch. 2 carries at least one 2-point K3 scenario."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "Communication = objective, informing, pausable, forwardable",
          "Problem to manager/retro = always bring a possible solution",
          "Risk steps    = identify → assess (impact × likelihood) → mitigate",
          "CoQ delta     = actual phase cost − should-have phase cost",
          "Severity = system · Priority = business · Urgency = speed",
          "Usability Q   = \"does it do what the user NEEDS it to do?\"",
          "SME best use  = prioritizing defect reports",
        ],
        note: <><strong>Swaps to watch:</strong> test strategy (all projects) vs test plan (one project) · severity (system impact) vs priority (business importance) · usability (user-friendliness) vs accessibility (usable by ALL users, voice-over = accessibility) · Explainability = AI characteristic, NOT ISO 25010.</>,
      }}
    />
  );
}
