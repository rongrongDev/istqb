import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctut/quiz.js";
import { recordExamScoreUT, getBestExamScoreUT } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Exam A"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTUTQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-UT (2018)"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam A v1.2 · 40 questions`}
      record={recordExamScoreUT}
      getBest={getBestExamScoreUT}
      learnPath="ctut-learn"
      examMinutes={60}
      examSets={SETS}
      rules={[{"label": "Questions per Exam", "value": "40"}, {"label": "Total Points", "value": "40"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "26 of 40 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
