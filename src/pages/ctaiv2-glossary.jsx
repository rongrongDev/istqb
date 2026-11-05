import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctaiv2/glossary.js";

export default function CTAIGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-AI v2.0" intro="Every syllabus keyword with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
