import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctsec/glossary.js";

export default function CTSECGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-SEC (2016)" intro="Every chapter keyword from the Security Tester syllabus plus a few attack terms the exam uses, with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
