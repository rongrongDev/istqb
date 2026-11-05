import QuizPage from "../components/QuizPage.jsx";
import { questions } from "../data/ctaiv1/quiz.js";

// CT-AI v1.x (legacy): practice only — no timed exam and no saved score.
const main = questions.filter((q) => !q.isAppendix);
const appendix = questions.filter((q) => q.isAppendix);
const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

export default function CTAIQuiz() {
  return (
    <QuizPage
      questions={questions}
      label="ISTQB CT-AI v1.0"
      subtitle="Based on Official ISTQB CT-AI v1.1 Sample Exam (40 questions + 27 appendix)"
      practicePools={[
        { key: "all", label: "All", questions },
        { key: "main", label: "Main set", questions: main },
        { key: "appendix", label: "Appendix", questions: appendix },
      ]}
      rules={[
        { label: "Main Questions", value: `${main.length}` },
        { label: "Appendix Questions", value: `${appendix.length}` },
        { label: "Total Points", value: `${totalPoints}` },
        { label: "Multi-select Questions", value: `${questions.filter((q) => q.multi).length} (Q25, Q29, Q35)` },
        { label: "2-Point Questions", value: `${questions.filter((q) => q.points === 2).length} (Q11, Q17, Q19, Q25, Q29, Q33, Q35)` },
        { label: "Chapters", value: "11 + Appendix" },
      ]}
      rulesNote="Select an answer, then click Submit to reveal the official rationale. Navigate freely between questions at any time."
    />
  );
}
