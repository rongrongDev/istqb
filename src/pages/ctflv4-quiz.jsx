import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctflv4/quiz.js";
import { recordExamScoreCTFL, getBestExamScoreCTFL } from "../lib/progress.js";

const SETS = ["A", "B", "C", "D"].map((s) => ({ key: s, label: `Sample Exam ${s}`, short: `Set ${s}`, questions: questions.filter((q) => q.exam === s) }));

export default function CTFLQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CTFL v4.0"
      subtitle={`${questions.length} Questions · Sample Exams A, B, C & D · 40 questions per exam`}
      record={recordExamScoreCTFL}
      getBest={getBestExamScoreCTFL}
      learnPath="ctflv4-learn"
      examSets={SETS}
      practicePools={[{ key: "all", label: "All sets", questions }, ...SETS.map((s) => ({ ...s, label: `Exam ${s.key}` }))]}
      rules={[
        { label: "Questions per Exam", value: "40" },
        { label: "Points per Question", value: "1" },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass Mark (65%)", value: "26 of 40 points" },
        { label: "Question Format", value: "Multiple choice" },
        { label: "Prerequisite", value: "None — entry level" },
      ]}
      rulesNote="Practice mode: pick any mix of exam sets and chapters, submit each question to see the official explanation immediately. Exam simulation: one full sample exam (A–D), real timer, no feedback until you finish — then pass/fail against the official 65% mark."
    />
  );
}
