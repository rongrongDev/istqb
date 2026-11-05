import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctaltae/glossary.js";

export default function CTALTAEGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CTAL-TAE v2.0" intro="Every chapter keyword plus the architecture, layer and design-pattern terms the exam relies on, with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
