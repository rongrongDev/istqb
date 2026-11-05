import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctsec";
import { getStudiedSectionsSEC, setSectionStudiedSEC } from "../lib/progress.js";

export default function CTSECLearn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsSEC}
      setStudied={setSectionStudiedSEC}
      label="ISTQB CT-SEC (2016)"
      intro="Full teaching content for each chapter, written from the official 2016 Security Tester syllabus — no PDF needed. Study here first, then use the Summary, Exam Insights, and Quiz pages to consolidate."
    />
  );
}
