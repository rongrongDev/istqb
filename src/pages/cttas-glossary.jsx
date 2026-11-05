import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/cttas/glossary.js";

export default function CTTASGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-TAS v1.0" intro="Every chapter keyword plus the strategy terms the exam relies on — distributions, licensing models, ROI and metrics — with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
