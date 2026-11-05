import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctft";
import { getStudiedSectionsFT, setSectionStudiedFT } from "../lib/progress.js";

export default function CTFTLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsFT}
      setStudied={setSectionStudiedFT}
      label="ISTQB CT-FT v1.0"
      intro="Full teaching content for each chapter, written from the official v1.0 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
