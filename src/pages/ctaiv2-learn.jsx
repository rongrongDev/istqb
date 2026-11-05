import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctaiv2";
import { getStudiedSections, setSectionStudied } from "../lib/progress.js";

export default function CTAILearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSections}
      setStudied={setSectionStudied}
      label="ISTQB CT-AI v2.0"
      intro="Full teaching content for each chapter, written from the official syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
