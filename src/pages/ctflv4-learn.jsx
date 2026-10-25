import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctflv4";
import { getStudiedSectionsCTFL, setSectionStudiedCTFL } from "../lib/progress.js";

export default function CTFLLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsCTFL}
      setStudied={setSectionStudiedCTFL}
      label="ISTQB CTFL v4.0"
      intro="Full teaching content for each chapter, written from the official v4.0.1 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
