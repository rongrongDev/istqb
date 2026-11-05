import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctgenai/glossary.js";

export default function CTGenAIGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-GenAI v1.1" intro="Every chapter keyword plus the syllabus's own Generative AI Specific Terms (Appendix D) with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
