import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctact";
import { getStudiedSectionsACT, setSectionStudiedACT } from "../lib/progress.js";

export default function CTACTLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsACT}
      setStudied={setSectionStudiedACT}
      label="ISTQB CT-AcT (2019)"
      intro="Full teaching content for each chapter, written from the official 2019 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
