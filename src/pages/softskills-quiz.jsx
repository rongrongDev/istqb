import QuizPage from "../components/QuizPage.jsx";
import { questions, totalPoints } from "../data/softskills/quiz.js";
import { recordExamScoreSS, getBestExamScoreSS } from "../lib/progress.js";

export default function SoftSkillsQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ASTQB CT-SS v1.0"
      subtitle={`40 Questions · ${totalPoints} Points · Based on the Official ASTQB Sample Exam`}
      record={recordExamScoreSS}
      getBest={getBestExamScoreSS}
      learnPath="softskills-learn"
      examSets={[{ key: "main", label: "Official ASTQB sample exam", questions }]}
      rules={[
        { label: "Total Questions", value: "40" },
        { label: "Total Points", value: `${totalPoints}` },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass Mark (65%)", value: `${Math.ceil(totalPoints * 0.65)} points` },
        { label: "2-Point Questions", value: "Five K3 scenarios" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the official 65% mark with a per-chapter breakdown."
    />
  );
}
