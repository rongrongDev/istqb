import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctaltae/quiz.js";
import { recordExamScoreTAE, getBestExamScoreTAE } from "../lib/progress.js";

const SETS = [{"key": "A", "label": "ISTQB Sample Exam"}, {"key": "ASTQB", "label": "ASTQB Exam"}].map((s) => ({ ...s, short: s.label, questions: questions.filter((q) => q.exam === s.key) }));

export default function CTALTAEQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CTAL-TAE v2.0"
      subtitle={`${questions.length} Questions · ISTQB Sample Exam v2.4 + ASTQB Sample Exam · 40 questions per exam`}
      record={recordExamScoreTAE}
      getBest={getBestExamScoreTAE}
      learnPath="ctaltae-learn"
      examMinutes={90}
      examSets={SETS}
      practicePools={[{ key: "all", label: "All sets", questions }, ...SETS]}
      rules={[{"label": "Questions per Exam", "value": "40"}, {"label": "Total Points", "value": "66 / 64"}, {"label": "Duration", "value": "90 min (+25% non-native)"}, {"label": "Pass Mark (65%)", "value": "43 of 66 / 42 of 64 points"}, {"label": "Question Format", "value": "Multiple choice"}, {"label": "Prerequisite", "value": "CTFL certificate"}]}
      rulesNote="Practice mode: pick any mix of sample exams and chapters, submit each question to see the official explanation immediately. Exam simulation: one full sample exam, real timer, no feedback until you finish — then pass/fail against the 65% mark with a per-chapter breakdown."
    />
  );
}
