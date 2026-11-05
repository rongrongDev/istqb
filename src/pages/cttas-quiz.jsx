import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/cttas/quiz.js";
import { recordExamScoreTAS, getBestExamScoreTAS } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Exam A"}, {"key": "ASTQB", "label": "ASTQB Exam"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTTASQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-TAS v1.0"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam A v1.2 + ASTQB Sample Exam · 40 questions per exam`}
      record={recordExamScoreTAS}
      getBest={getBestExamScoreTAS}
      learnPath="cttas-learn"
      examMinutes={60}
      examSets={SETS}
      practicePools={[{ key: "all", label: "All sets", questions }, ...SETS]}
      rules={[{"label": "Questions per Exam", "value": "40"}, {"label": "Total Points", "value": "49"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "32 of 49 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: pick any mix of sample exams and chapters, submit each question to see the official explanation immediately. Exam simulation: one full sample exam, real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
