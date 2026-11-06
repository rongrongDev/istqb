import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctft/quiz.js";
import { recordExamScoreFT, getBestExamScoreFT } from "../lib/progress.js";

const SETS = [{"key": "ASTQB", "label": "ASTQB Exam"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTFTQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-FT v1.0"
      subtitle={`${questions.length} Questions · ASTQB Finance Testing v1.0 Sample Exam · 40 questions · 45 points`}
      record={recordExamScoreFT}
      getBest={getBestExamScoreFT}
      learnPath="ctft-learn"
      examMinutes={60}
      examSets={SETS}
      rules={[{"label": "Questions per Exam", "value": "40"}, {"label": "Total Points", "value": "45"}, {"label": "Duration", "value": "60 min (assumed; +25% non-native)"}, {"label": "Pass Mark (65%)", "value": "30 of 45 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
