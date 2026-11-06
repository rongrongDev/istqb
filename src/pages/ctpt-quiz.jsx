import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctpt/quiz.js";
import { recordExamScorePT, getBestExamScorePT } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Exam A"}, {"key": "ASTQB", "label": "ASTQB Exam"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTPTQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-PT (2018)"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam A v1.3 + ASTQB 2019 Sample Exam · 40 / 39 questions`}
      record={recordExamScorePT}
      getBest={getBestExamScorePT}
      learnPath="ctpt-learn"
      examMinutes={60}
      examSets={SETS}
      practicePools={[{ key: "all", label: "All sets", questions }, ...SETS]}
      rules={[{"label": "Questions per Exam", "value": "40 / 39"}, {"label": "Total Points", "value": "40 / 39"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "26 of 40 / 26 of 39 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: pick any mix of sample exams and chapters, submit each question to see the official explanation immediately. Exam simulation: one full sample exam, real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
