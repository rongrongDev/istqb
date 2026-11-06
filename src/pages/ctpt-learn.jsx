import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctpt";
import { getStudiedSectionsPT, setSectionStudiedPT } from "../lib/progress.js";

export default function CTPTLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsPT}
      setStudied={setSectionStudiedPT}
      label="ISTQB CT-PT (2018)"
      intro="Full teaching content for each chapter, written from the official 2018 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
