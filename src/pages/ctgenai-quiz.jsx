import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctgenai/quiz.js";
import { recordExamScoreGenAI, getBestExamScoreGenAI } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Exam A"}, {"key": "ASTQB", "label": "ASTQB Exam"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTGenAIQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-GenAI v1.1"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam A + ASTQB Sample Exam · 40 questions per exam`}
      record={recordExamScoreGenAI}
      getBest={getBestExamScoreGenAI}
      learnPath="ctgenai-learn"
      examMinutes={60}
      examSets={SETS}
      practicePools={[{ key: "all", label: "All sets", questions }, ...SETS]}
      rules={[{"label": "Questions per Exam", "value": "40"}, {"label": "Total Points", "value": "46"}, {"label": "Duration", "value": "60 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "30 of 46 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: pick any mix of sample exams and chapters, submit each question to see the official explanation immediately. Exam simulation: one full sample exam, real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
