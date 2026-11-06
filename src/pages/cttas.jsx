import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/cttas";

export default function CTTASSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-TAS v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — TEST AUTOMATION STRATEGY"
      title="CT-TAS v1.0 Learning Guide"
      subtitle="6 Chapters · Syllabus v1.0 (2024-05-03) · ~12.75 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The K3 objectives — shift left/right optimization (3.1.3), DevOps continuous testing (3.2.3), ROI (5.1.1), organizational considerations (5.3.1), project characteristics (5.3.2), evaluating automation assets (6.2.1) — are 2-point scenario questions; ROI questions involve calculation."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Distributions = pyramid (target) · ice cream cone · hourglass · umbrella", "Ownership     = in-house · vendor-based · outsourced", "Licensing     = open source · per user/machine · floating (concurrent) · runtime", "ROI           = savings / investment (time units) → turning point", "Agile ideal   = in-sprint test automation (in the story's exit criteria)"] }}
    />
  );
}
