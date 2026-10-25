import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctmat";
import { getStudiedSectionsMAT, setSectionStudiedMAT } from "../lib/progress.js";

export default function CTMATLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsMAT}
      setStudied={setSectionStudiedMAT}
      label="ISTQB CT-MAT (2019)"
      intro="Full teaching content for each chapter, written from the official 2019 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
