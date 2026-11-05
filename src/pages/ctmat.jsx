import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctmat";

export default function CTMATSummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-MAT (2019)"
      eyebrow="ISTQB CERTIFIED TESTER — MOBILE APPLICATION TESTING"
      title="CT-MAT (2019) Learning Guide"
      subtitle="5 Chapters · Syllabus v2019 (2019-05-03) · ~13 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 12 K3 'prepare/apply' objectives (test strategy, displays, interrupts, permissions, power, notifications, OS preferences, installability, stress, usability, tours) drive the scenario questions — every question is worth 1 point."
      quickRef={{
        title: "⭐ EXAM QUICK REFERENCE",
        lines: [
          "App types      = native (SDK, stores) · web (browser) · hybrid (wrapper)",
          "Emulator       = HARDWARE + real byte-code · Simulator = runtime lookalike",
          "Strategy       = single platform · multi-platform · maximum coverage",
          "SFiDPOT        = Structure Function input Data Platform Operations Time",
          "CRUD           = Create Read Update Delete",
          "Test pyramid   = FLIPPED on mobile (lots of manual testing)",
        ],
      }}
    />
  );
}
