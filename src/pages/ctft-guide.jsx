import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctft";

export default function CTFTGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-FT v1.0"
      eyebrow="ISTQB CERTIFIED TESTER — FINANCE TESTING"
      title="CT-FT v1.0 — Comprehensive Exam Guide"
      subtitle="6 Chapters · Insights From the ASTQB Finance Testing v1.0 Sample Exam · 40 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ K3: data reconciliation across systems (4.2), functional testing of financial systems (5.1), load and stress testing (5.3), automation strategies for legacy and modern landscapes (6.2). Everything else is K1/K2."
      examFormat={[{"label": "Questions", "value": "40 (45 points)"}, {"label": "Duration", "value": "60 min (assumed; +25% non-native)"}, {"label": "Pass mark", "value": "30 of 45 (~67%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="ASTQB Sample: Ch 1 → 6 · Ch 2 → 10 · Ch 3 → 5 · Ch 4 → 6 · Ch 5 → 8 · Ch 6 → 5 questions. Compliance (ch 2) and functional/non-functional testing (ch 5) dominate."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Environments: omnichannel · high-throughput/low-latency · logic-dense API · schema-driven messaging", "Regulations: GDPR (privacy) · SOX (controls) · PCI DSS (cards) · DORA (resilience)", "Auditability = bidirectional traceability + retained evidence", "CACV = compliance as code + pipeline gates + continuous monitoring", "Reconcile: sampling · aggregation · checksums · balance matching", "Automated test oracle = reference app or expected-results table"], note: "Definition swaps to watch: accuracy (correct value) vs consistency (same everywhere) · control testing (how) vs substantive testing (what) · load (expected peak) vs stress (beyond peak) vs endurance (sustained) · calculation (formulas) vs exploratory (patterns) vs back-to-back (compare versions) · scalability (peaks) vs concurrency (simultaneous requests) · security (attacks) vs availability (continuity and recovery) · RTO (time) vs RPO (data)." }}
    />
  );
}
