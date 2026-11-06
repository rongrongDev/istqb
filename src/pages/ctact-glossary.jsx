import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctact/glossary.js";

export default function CTACTGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-AcT (2019)" intro="Every chapter keyword plus the BPMN/DMN, ATDD/BDD and business-analysis terms the exam relies on, with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
