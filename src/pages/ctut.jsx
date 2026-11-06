import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctut";

export default function CTUTSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-UT (2018)"
      eyebrow="ISTQB CERTIFIED TESTER — USABILITY TESTING"
      title="CT-UT (2018) Learning Guide"
      subtitle="8 Chapters · Syllabus 2018 · ~14 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ Chapter 5 (270 min) is a third of the syllabus and of Sample Exam A. K4 objectives — analyzing a project for usability risks (2.2.2), heuristic evaluation (4.2.2) and selecting methods (7.1.1) — appear as scenario questions; every question is worth 1 point."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Usability = specified users · goals · effectiveness, efficiency, satisfaction · context of use", "UX = before + during + after use · Accessibility = users with disabilities", "Formative = early, qualitative · Summative = late, quantitative", "No users? → usability review · Satisfaction? → user survey", "Moderator = the only one who talks to the participant", "Report: ≤ 25 findings · ≤ 20 pages · 1-page executive summary"] }}
    />
  );
}
