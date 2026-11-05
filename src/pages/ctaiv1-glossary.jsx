import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctaiv1/glossary.js";

export default function CTAIV1Glossary() {
  return (
    <GlossaryPage
      glossary={glossary}
      label="ISTQB CT-AI v1.0"
      intro="Every v1.0 syllabus keyword with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar."
    />
  );
}
