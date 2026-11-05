import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/cttas";
import { getStudiedSectionsTAS, setSectionStudiedTAS } from "../lib/progress.js";

export default function CTTASLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsTAS}
      setStudied={setSectionStudiedTAS}
      label="ISTQB CT-TAS v1.0"
      intro="Full teaching content for each chapter, written from the official v1.0 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
