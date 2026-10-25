import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/softskills/glossary.js";

export default function SoftSkillsGlossary() {
  return <GlossaryPage glossary={glossary} label="ASTQB CT-SS v1.0" intro="Every chapter keyword and key concept defined in the syllabus, with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
