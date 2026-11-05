import GlossaryPage from "../components/GlossaryPage.jsx";
import { glossary } from "../data/ctpt/glossary.js";

export default function CTPTGlossary() {
  return <GlossaryPage glossary={glossary} label="ISTQB CT-PT (2018)" intro="Every chapter keyword plus the metric and scripting terms the exam relies on — throughput, think time, correlation, percentiles — with definitions. ISTQB exams test exact definitions — flip through these until each one is familiar." />;
}
