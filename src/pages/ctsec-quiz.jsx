import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctsec/quiz.js";
import { recordExamScoreSEC, getBestExamScoreSEC } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Exam A"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTSECQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-SEC (2016)"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam set A v1.1 · 45 questions · 1–3 points each`}
      record={recordExamScoreSEC}
      getBest={getBestExamScoreSEC}
      learnPath="ctsec-learn"
      examMinutes={120}
      examSets={SETS}
      rules={[{"label": "Questions per Exam", "value": "45"}, {"label": "Total Points", "value": "80"}, {"label": "Duration", "value": "120 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "52 of 80 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
