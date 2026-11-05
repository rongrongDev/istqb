import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctut";
import { getStudiedSectionsUT, setSectionStudiedUT } from "../lib/progress.js";

export default function CTUTLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsUT}
      setStudied={setSectionStudiedUT}
      label="ISTQB CT-UT (2018)"
      intro="Full teaching content for each chapter, written from the official 2018 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
