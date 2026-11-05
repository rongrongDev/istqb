import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctft/glossary.js";

export default function CTFTGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-FT v1.0" intro="Every chapter keyword — testing terms and the finance domain terms (ledgers, settlement, GDPR, SOX, DORA) — with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
