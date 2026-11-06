import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctsec";

export default function CTSECSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-SEC (2016)"
      eyebrow="ISTQB CERTIFIED TESTER — SECURITY TESTING"
      title="CT-SEC (2016) Learning Guide"
      subtitle="9 Chapters · Advanced Security Tester Syllabus 2016 · ~18.5 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ Many K3/K4 objectives: risk and policy analysis (ch 1), approaches (ch 2), test plans and evaluation (ch 3), requirements/design/component analysis (ch 4), testing each security mechanism (ch 5), attack analysis (ch 6), report analysis (ch 7), tool needs (ch 8). Scenario questions are worth 2–3 points."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Risk exposure = impact × likelihood (risk matrix)", "Controls = administrative · technical · physical × preventive/detective/corrective/recovery", "Audit pillars = assessment · prevention · detection · reaction · recovery", "Environment = isolated · complete · restorable — and AUTHORIZED in writing", "IDS: negative (signature) vs positive (behavior) model", "Forensics = acquire & authenticate → analyze → report"] }}
    />
  );
}
