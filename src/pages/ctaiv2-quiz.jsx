import QuizPage from "../components/QuizPage.jsx";
import { questions, totalPoints } from "../data/ctaiv2/quiz.js";
import { recordExamScore, getBestExamScore } from "../lib/progress.js";

export default function CTAIQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-AI v2.0"
      subtitle={`40 Questions · ${totalPoints} Points · Based on Official Sample Exam v2.1`}
      record={recordExamScore}
      getBest={getBestExamScore}
      learnPath="ctaiv2-learn"
      examSets={[{ key: "main", label: "Official sample exam v2.1", questions }]}
      rules={[
        { label: "Total Questions", value: "40" },
        { label: "Total Points", value: `${totalPoints}` },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass Mark (65%)", value: `${Math.ceil(totalPoints * 0.65)} points` },
        { label: "2-Point Questions", value: "K3 'Apply' items" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      rulesNote="Practice mode: submit each question to see the official explanation immediately. Exam simulation: real timer, no feedback until you finish — then pass/fail against the official 65% mark with a per-chapter breakdown."
    />
  );
}
