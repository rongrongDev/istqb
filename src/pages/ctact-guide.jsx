import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctact";

export default function CTACTGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-AcT (2019)"
      eyebrow="ISTQB CERTIFIED TESTER — ACCEPTANCE TESTING"
      title="CT-AcT (2019) — Comprehensive Exam Guide"
      subtitle="5 Chapters · Insights From ISTQB Sample Exam A v1.3 · 40 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3: develop acceptance criteria (2.1), apply Gherkin (2.2.2), construct BPMN/DMN models (3.1), derive tests for a coverage criterion (3.2), apply social and communication skills (5.1). Everything else is K1/K2."
      examFormat={[{"label": "Questions", "value": "40 (1 point each)"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass mark", "value": "26 of 40 (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="Sample Exam A: Ch 1 → 6 · Ch 2 → 10 · Ch 3 → 8 · Ch 4 → 8 · Ch 5 → 8 questions. Chapters 2 and 3 carry most K3 scenarios (criteria, Gherkin, BPMN/DMN)."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["BA ↔ test: requirements engineering ↔ planning/analysis/design · solution evaluation ↔ implementation/execution/completion", "ATDD = collaborative, any form (visual) · BDD = Gherkin text", "Exploratory: sessions · charter · time-box · domain experts", "Beta: real users, own site, not systematic, late", "Coverage items: annotated stories/risks · DMN rules · scenarios · all paths", "Release: as is · with reservations · rejected"], note: "Definition swaps to watch: acceptance criteria (what) vs acceptance tests (how) · ATDD (collaborative, visual possible) vs BDD (Gherkin) · exclusive gateway X (decision) vs parallel gateway + (not a decision) · exploratory testing (charter, sessions) vs beta testing (users, no charter) · product quality (ISO 25010 characteristics) vs quality in use (5 outcomes) · user vs business vs technical performance perspective." }}
    />
  );
}
