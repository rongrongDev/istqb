import NotesPage from "../components/NotesPage.jsx";
import { chapters } from "../data/ctgenai";

export default function CTGenAIGuide() {
  return (
    <NotesPage
      chapters={chapters}
      mode="insights"
      label="ISTQB CT-GenAI v1.1"
      eyebrow="ISTQB CERTIFIED TESTER — TESTING WITH GENERATIVE AI"
      title="CT-GenAI v1.1 — Comprehensive Exam Guide"
      subtitle="5 Chapters · Insights From ISTQB Sample Exam A + ASTQB Sample Exam · 80 Questions Referenced"
      legend={["🎯 Deep — master every point", "⚡ Skim — grasp key idea, move on", "📝 Exam insights from the official sample exam(s)"]}
      levels={[["K1", "Remember"], ["K2", "Understand"], ["K3", "Apply ★"]]}
      levelNote="★ The K3 objectives — test analysis (2.2.1), test design & implementation (2.2.2), regression testing (2.2.3), monitoring & control (2.2.4), choosing prompting techniques (2.2.5), identifying hallucinations/reasoning errors/biases (3.1.2) — are 2-point apply-style scenario questions."
      examFormat={[{"label": "Questions", "value": "40 (46 points)"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass mark", "value": "30 points (65%)"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      examNote="ISTQB Sample Exam A: Ch 1 → 7 questions · Ch 2 → 11 questions (16 pts) · Ch 3 → 10 questions (11 pts) · Ch 4 → 5 questions · Ch 5 → 7 questions. Chapter 2 carries five of the six 2-point K3 scenarios."
      quickRef={{ title: "⭐ EXAM QUICK REFERENCE", lines: ["Input data    = material to work on (stories, benchmarks, examples)", "Output format = the columns / fields you want back", "System prompt = whole conversation, hidden · User prompt = each turn", "Hallucination = made-up/irrelevant · Reasoning error = bad logic · Bias = training data", "Attack vectors = context manip. · request manip. · data poisoning · malicious code", "Adoption      = discovery → initiation & usage definition → utilization & iteration", "Back-end      = auth, retrieval, PROMPT PREPARATION, post-processing"], note: "Definition swaps to watch: tokenization (split text) vs embedding (vectors) · multimodal LLM ⊃ vision-language model (not the reverse) · instruction-tuned (follows formats) vs reasoning (inference, synthesis) · data poisoning (training data / ratings) vs request manipulation (disruptive input) · tester verifies AI testware vs test manager oversees AI-based processes." }}
    />
  );
}
