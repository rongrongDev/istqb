import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctut/glossary.js";

export default function CTUTGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-UT (2018)" intro="Every chapter keyword plus the session, review, reporting and questionnaire terms the exam relies on, with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
