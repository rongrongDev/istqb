import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctaltae";
import { getStudiedSectionsTAE, setSectionStudiedTAE } from "../lib/progress.js";

export default function CTALTAELearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsTAE}
      setStudied={setSectionStudiedTAE}
      label="ISTQB CTAL-TAE v2.0"
      intro="Full teaching content for each chapter, written from the official v2.0 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
