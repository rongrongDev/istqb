import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctmat/glossary.js";

export default function CTMATGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-MAT (2019)" intro="Every chapter keyword and domain-specific term from the syllabus's own glossary (Appendix B) with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
