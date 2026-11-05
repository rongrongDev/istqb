import QuizPage from "../components/QuizPage.jsx";
import { questions, totalPoints } from "../data/ctmat/quiz.js";
import { recordExamScoreMAT, getBestExamScoreMAT } from "../lib/progress.js";

export default function CTMATQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-MAT (2019)"
      subtitle={`40 Questions · ${totalPoints} Points · Based on Official Sample Exam A v1.1`}
      record={recordExamScoreMAT}
      getBest={getBestExamScoreMAT}
      learnPath="ctmat-learn"
      examSets={[{ key: "main", label: "Official Sample Exam A", questions }]}
      rules={[
        { label: "Total Questions", value: "40" },
        { label: "Total Points", value: `${totalPoints}` },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass Mark (65%)", value: `${Math.ceil(totalPoints * 0.65)} points` },
        { label: "Points per Question", value: "1" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the official 65% mark with a per-chapter breakdown."
    />
  );
}
