import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctgenai";

export default function CTGenAISummaries() {
  return (
    <NotesPage
      chapters={chapters}
      mode="summaries"
      label="ISTQB CT-GenAI v1.1"
      eyebrow="ISTQB CERTIFIED TESTER — TESTING WITH GENERATIVE AI"
      title="CT-GenAI v1.1 Learning Guide"
      subtitle="5 Chapters · Syllabus v1.1 (2026) · ~13.6 hours total"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The 6 K3 objectives (test analysis, test design & implementation, regression automation, monitoring & control, choosing prompting techniques, identifying hallucinations/reasoning errors/biases) each yield a 2-point scenario question in the ISTQB sample exam."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Prompt parts  = Role · Context · Instruction · Input data · Constraints · Output format", "Chaining      = complex task, verify each step", "Few-shot      = repetitive / fixed output format (Gherkin, keywords)", "Meta          = new task, let the LLM help write the prompt", "LLM families  = foundation → instruction-tuned → reasoning", "Non-determinism = lower temperature · set a seed", "RAG           = chunk → embed → vector DB → RETRIEVE → GENERATE"] }}
    />
  );
}
