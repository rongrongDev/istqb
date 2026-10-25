import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctaiv1";

// CT-AI v1.0 (legacy) chapter summaries.
export default function CTAIGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-AI v1.0"
      eyebrow="ISTQB CERTIFIED TESTER"
      title="AI Testing (CT-AI)"
      subtitle="Comprehensive Learning Guide · All 11 Chapters"
      legend={["🎯 Deep Learning — master every point", "⚡ Skim — grasp key concepts, move on"]}
      levels={[["K1", "Remember — recall facts"], ["K2", "Understand — explain concepts"], ["K3", "Apply — use in scenarios"], ["K4", "Analyze — judge & select"]]}
      strategyLabel="Study Guide"
    />
  );
}
