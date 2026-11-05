import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctqdo";
import { getStudiedSectionsQDO, setSectionStudiedQDO } from "../lib/progress.js";

export default function CTQDOLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsQDO}
      setStudied={setSectionStudiedQDO}
      label="ISTQB CT-QDO v1.0"
      intro="Full teaching content for each chapter, written from the official v1.0 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
