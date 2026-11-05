import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctpt";

export default function CTPTGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-PT (2018)"
      eyebrow="ISTQB CERTIFIED TESTER — PERFORMANCE TESTING"
      title="CT-PT (2018) — Comprehensive Exam Guide"
      subtitle="5 Chapters · Insights From ISTQB Sample Exam A v1.3 + ASTQB 2019 Sample Exam · 79 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ K4: risks across the lifecycle (3.3), activities per lifecycle (3.4), objectives (4.1.1), test plan (4.1.2), stakeholder communication (4.1.3), operational profiles (4.2.3), load profiles (4.2.4), throughput & concurrency (4.2.5), results analysis (4.4), tool suitability (5.2). K3: implementing scripts (4.2.7)."
      examFormat={[{"label": "Questions", "value": "40 (1 point each)"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass mark", "value": "26 of 40 (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="ISTQB Sample Exam A: Ch 1 → 6 · Ch 2 → 4 · Ch 3 → 7 · Ch 4 → 20 · Ch 5 → 3 questions. Chapter 4's K4 scenarios (objectives, plans, profiles, throughput, analysis) dominate."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Risk analysis = test PLANNING · ordering into procedures = IMPLEMENTATION", "Protocols  = DB: ODBC/JDBC · web: HTTP(S) · web services: SOAP/REST · OSI 5–7", "Correlation = re-use IDs from responses (main playback failure cause)", "Same data for all VUs → caching (too good) or locking (too bad)", "Ramp-up → steady state (measure) → ramp-down; spike = transient state", "Tools = load generator · load management console · monitoring tool"], note: "Definition swaps to watch: load (realistic, increasing) vs stress (at/beyond limits) vs spike (sudden bursts + recovery) · system throughput (transactions/time) vs network throughput (bits/s) · concurrency (parallel sessions) vs throughput · response time = user concern, throughput = business concern, resource utilization = system concern · protocol-level timing (server + network) vs GUI-level (end-to-end)." }}
    />
  );
}
