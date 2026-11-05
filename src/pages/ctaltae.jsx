import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctaltae";

export default function CTALTAESummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CTAL-TAE v2.0"
      eyebrow="ISTQB ADVANCED LEVEL — TEST AUTOMATION ENGINEERING"
      title="CTAL-TAE v2.0 Learning Guide"
      subtitle="8 Chapters · Syllabus v2.0 (2024-05-03) · ~19.5 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"], ["K4", "Analyze ★★"]]}
      levelNote="★ Advanced level: K3 'apply' objectives are worth 2 points and K4 'analyze' objectives 3 points in the ISTQB sample exam — chapters 2, 3, 6 and 8 carry the heaviest scenarios."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["gTAA capabilities = generation (optional) · definition · execution · adaptation", "TAF layers   = test scripts → business logic (SUT-dependent) → core libraries", "Approaches   = capture/playback → linear → structured → data-driven → keyword-driven", "Patterns     = facade · singleton (one driver) · page object · flow model (double facade)", "Testability  = observability + controllability + architecture transparency", "Waits        = hard-coded < polling + timeout < event subscription + timeout"] }}
    />
  );
}
