import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctaltae";

export default function CTALTAEGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CTAL-TAE v2.0"
      eyebrow="ISTQB ADVANCED LEVEL — TEST AUTOMATION ENGINEERING"
      title="CTAL-TAE v2.0 — Comprehensive Exam Guide"
      subtitle="8 Chapters · Insights From ISTQB Sample Exam v2.4 + ASTQB Sample Exam · 80 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K4 (3 pts): analyze the SUT (2.2.1), tool evaluation (2.2.2), deployment risks (4.2.1), analyze TAS/SUT data (6.1.2), improve a deployed TAS (8.1.2). K3 (2 pts): layering (3.1.3), approaches (3.1.4), patterns (3.1.5), pilot (4.1.1), pipelines (5.1.1), data collection (6.1.1), verify the environment (7.1.1), improve test cases (8.1.1), restructure testware (8.1.3)."
      examFormat={[{"label": "Questions", "value": "40 (66 points in Sample Exam v2.4)"}, {"label": "Duration", "value": "90 min (+25% non-native)"}, {"label": "Pass mark", "value": "65% (43 of 66 points)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="ISTQB Sample Exam v2.4: Ch 1 → 3 · Ch 2 → 5 · Ch 3 → 6 · Ch 4 → 4 · Ch 5 → 6 · Ch 6 → 4 · Ch 7 → 6 · Ch 8 → 6 questions. 1 point for K2, 2 points for K3, 3 points for K4."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Environments = local dev → build → integration (1st full suite, 1st monitoring) → preproduction (performance, UAT) → production", "Pipelines    = component/comp. integration → CI · system → continuous deployment · system integration → continuous delivery", "Separate test pipeline = flexible suites but NOT a quality gate", "Log levels   = fatal > error > warn > info > debug > trace", "Failure analysis = seen before? → which test → which step → SUT state → log defect", "Core lib upgrade = pilot → impact → adoption plan → update dependencies"], note: "Definition swaps to watch: controllability (perform actions) vs observability (see results) · business logic layer (SUT-dependent) vs core libraries (SUT-independent) · TAS failure (defect not in the SUT) vs failed test · contract testing (service-to-service) vs checking a legal contract · repeatability (same result each run) vs intrusiveness (TAS changes SUT behavior)." }}
    />
  );
}
