import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/softskills";
import { getStudiedSectionsSS, setSectionStudiedSS } from "../lib/progress.js";

export default function SoftSkillsLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsSS}
      setStudied={setSectionStudiedSS}
      label="ASTQB CT-SS v1.0"
      intro="Full teaching content for each chapter, written from the official v1.0 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
