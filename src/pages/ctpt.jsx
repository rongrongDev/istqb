import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctpt";

export default function CTPTSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-PT (2018)"
      eyebrow="ISTQB CERTIFIED TESTER — PERFORMANCE TESTING"
      title="CT-PT (2018) Learning Guide"
      subtitle="5 Chapters · Syllabus 2018 · ~14.6 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ Chapter 4 (475 min) is half the syllabus: K4 objectives on objectives, test plans, stakeholder communication, operational/load profiles, throughput & concurrency and results analysis appear as scenario questions — every question is worth 1 point."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Sub-characteristics = time behavior · resource utilization · capacity", "Load = realistic, rising · Stress = at/beyond peak · Spike = burst + recovery", "Endurance = long time (leaks) · Scalability = future growth", "Throughput = virtual users / (processing time + think time)", "Elapsed time = response time + think time", "Goal metric = 90th percentile, not average or 100%"] }}
    />
  );
}
