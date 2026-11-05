import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctqdo/glossary.js";

export default function CTQDOGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-QDO v1.0" intro="Every syllabus keyword and Quality-in-DevOps specific term with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
