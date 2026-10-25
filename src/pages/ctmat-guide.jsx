import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctmat";

export default function CTMATGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-MAT (2019)"
      eyebrow="ISTQB CERTIFIED TESTER — MOBILE APPLICATION TESTING"
      title="CT-MAT (2019) — Comprehensive Exam Guide"
      subtitle="5 Chapters · Insights From Official Sample Exam A · 40 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea", "📝 Exam insights from the official sample exam"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The K3 objectives — test strategy (1.6), displays (2.1.2), interrupts (2.1.7), permissions (2.1.8), power (2.1.9), notifications (2.2.1), OS preferences (2.2.3), installability (3.1.1), stress (3.1.2), usability (3.1.5), tours (3.3.3) — appear as apply-style scenario questions."
      examFormat={[
        { label: "Questions", value: "40 (1 point each)" },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass mark", value: "26 of 40 (65%)" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      examNote="Sample Exam A distribution: Ch 1 → 8 questions · Ch 2 → 13 questions · Ch 3 → 11 questions · Ch 4 → 4 questions · Ch 5 → 4 questions. Chapters 2 and 3 carry most of the K3 scenario questions."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "Native   = SDK build, store install, full device features",
          "Web      = browser, no install, cross-browser testing instead",
          "Hybrid   = native wrapper + web view, watch performance/look",
          "Emulator = models HARDWARE, runs real byte-code",
          "Simulator= models RUNTIME, dedicated build, never real perf",
          "Labs     = on-premise (sensors, proximity) · remote (variety, scale)",
          "Automation = user-agent based (web only) · device-based (all)",
        ],
        note: <><strong>Definition swaps to watch:</strong> input vs output methods (printing/SMS/TV-remote = output) · device vs user-initiated interrupts (low battery/memory = device) · usability vs accessibility (voice-over = accessibility) · store approval (before submission) vs post-release testing (after publication).</>,
      }}
    />
  );
}
