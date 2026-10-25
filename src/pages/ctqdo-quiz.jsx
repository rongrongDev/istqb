import QuizPage from "../components/QuizPage.jsx";
import { questions, mainQuestions, totalPoints } from "../data/ctqdo/quiz.js";
import { recordExamScoreQDO, getBestExamScoreQDO } from "../lib/progress.js";

export default function CTQDOQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-QDO v1.0"
      subtitle={`40 Questions (${totalPoints} Points) + 8 Appendix Questions · Based on Official Sample Exam v1.0`}
      record={recordExamScoreQDO}
      getBest={getBestExamScoreQDO}
      learnPath="ctqdo-learn"
      examSets={[{ key: "main", label: "Official sample exam", questions: mainQuestions }]}
      practicePools={[
        { key: "all", label: "All", questions },
        { key: "main", label: "Main exam", questions: mainQuestions },
        { key: "appendix", label: "Appendix A", questions: questions.filter((q) => q.appendix) },
      ]}
      examNote="The exam uses the 40 main questions. The 8 appendix questions are practice only and never count towards the score."
      rules={[
        { label: "Total Questions", value: "40" },
        { label: "Total Points", value: `${totalPoints}` },
        { label: "Duration", value: "60 min (+25% non-native)" },
        { label: "Pass Mark (65%)", value: `${Math.ceil(totalPoints * 0.65)} points` },
        { label: "2-Point Questions", value: "K3 'Apply' items" },
        { label: "Prerequisite", value: "CTFL certificate" },
      ]}
      rulesNote="Practice mode: all 48 questions (incl. 8 Appendix A extras), submit each to see the official explanation immediately. Exam simulation: the official 40-question exam, real timer, no feedback until you finish — then pass/fail against the official 65% mark."
    />
  );
}
