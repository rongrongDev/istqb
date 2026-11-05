import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctgenai";
import { getStudiedSectionsGenAI, setSectionStudiedGenAI } from "../lib/progress.js";

export default function CTGenAILearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsGenAI}
      setStudied={setSectionStudiedGenAI}
      label="ISTQB CT-GenAI v1.1"
      intro="Full teaching content for each chapter, written from the official v1.1 syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
