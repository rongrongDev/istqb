import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctflv4/glossary.js";

export default function CTFLGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CTFL v4.0" intro="Every syllabus keyword with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
