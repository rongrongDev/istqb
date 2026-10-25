import { useEffect, useState } from "react";
import { questions, mainQuestions, totalPoints } from "../data/ctqdo/quiz.js";
import { recordExamScoreQDO } from "../lib/progress.js";
import { T } from "../lib/theme.js";


const chapterColors = { 1: "#4F46E5", 2: "#7C3AED", 3: "#0891B2", 4: "#059669" };

// Official CT-QDO v1.0 exam rules (ISTQB): 40 questions, 45 points, 60 min (+25% non-native), pass = 65% (30 points).
const EXAM_MINUTES = 60;
const PASS_POINTS = Math.ceil(totalPoints * 0.65);

const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function CTQDOQuiz() {
  const [mode, setMode] = useState("start"); // start | quiz | result
  const [examMode, setExamMode] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [extraTime, setExtraTime] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState({});
  const [revealed, setRevealed] = useState({});
  const [filter, setFilter] = useState(0); // chapter filter (practice)
  const [setFilterVal, setSetFilterVal] = useState("all"); // all | main | appendix (practice)

  const practicePool =
    setFilterVal === "main" ? mainQuestions :
    setFilterVal === "appendix" ? questions.filter((q) => q.appendix) :
    questions;
  const practiceQs = practicePool.filter((q) => filter === 0 || q.chapter === filter);

  // Exam simulation and review use the official 40-question main exam.
  const filteredQs = examMode || reviewMode ? mainQuestions : practiceQs;

  const q = filteredQs[currentQ];
  const isRevealed = q && revealed[q.id];
  const userAnswers = (q && selected[q.id]) || [];

  const isCorrect = (q) => {
    const ua = selected[q.id] || [];
    return q.correct.length === ua.length && q.correct.every(c => ua.includes(c));
  };

  const score = filteredQs.filter(q => revealed[q.id] && isCorrect(q)).reduce((s, q) => s + q.points, 0);
  const maxScore = filteredQs.reduce((s, q) => s + q.points, 0);
  const answeredCount = filteredQs.filter(q => revealed[q.id]).length;

  const examScore = mainQuestions.filter(isCorrect).reduce((s, q) => s + q.points, 0);
  const examAnswered = mainQuestions.filter(q => (selected[q.id] || []).length > 0).length;

  const finishExam = () => {
    recordExamScoreQDO(mainQuestions.filter(isCorrect).reduce((s, qq) => s + qq.points, 0), totalPoints);
    setMode("result");
    setTimeLeft(null);
  };

  useEffect(() => {
    if (!examMode || mode !== "quiz" || timeLeft === null) return;
    if (timeLeft <= 0) { finishExam(); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [examMode, mode, timeLeft]);

  const startPractice = () => {
    setExamMode(false); setReviewMode(false); setRevealed({}); setSelected({});
    setMode("quiz"); setCurrentQ(0);
  };

  const startExam = () => {
    setExamMode(true); setReviewMode(false); setRevealed({}); setSelected({}); setFilter(0);
    setTimeLeft(Math.round(EXAM_MINUTES * (extraTime ? 1.25 : 1) * 60));
    setMode("quiz"); setCurrentQ(0);
  };

  const startReview = () => {
    const all = {};
    for (const qq of mainQuestions) all[qq.id] = true;
    setRevealed(all); setReviewMode(true); setExamMode(false); setFilter(0);
    setMode("quiz"); setCurrentQ(0);
  };

  const toggleAnswer = (optId) => {
    if (isRevealed) return;
    const current = selected[q.id] || [];
    if (q.multi) {
      setSelected(prev => ({
        ...prev,
        [q.id]: current.includes(optId) ? current.filter(x => x !== optId) : [...current, optId]
      }));
    } else {
      setSelected(prev => ({ ...prev, [q.id]: [optId] }));
    }
  };

  const submit = () => {
    if (!userAnswers.length) return;
    setRevealed(prev => ({ ...prev, [q.id]: true }));
  };

  const goTo = (idx) => {
    if (idx >= 0 && idx < filteredQs.length) setCurrentQ(idx);
  };

  if (mode === "start") {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
        <div style={{ background: "linear-gradient(135deg, #1C1917 0%, #7C2D12 50%, #C2410C 100%)", borderRadius: "16px", padding: "24px", marginBottom: "20px", color: "white" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.65, marginBottom: "6px" }}>ISTQB CT-QDO v1.0</div>
          <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "6px" }}>Official Sample Exam Practice</div>
          <div style={{ fontSize: "13px", opacity: 0.75 }}>40 Questions ({totalPoints} Points) + 8 Appendix Questions · Based on Official Sample Exam v1.0</div>
        </div>

        <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.ink, marginBottom: "12px" }}>Official Exam Rules</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
            {[
              { label: "Total Questions", value: "40" },
              { label: "Total Points", value: `${totalPoints}` },
              { label: "Duration", value: `${EXAM_MINUTES} min (+25% non-native)` },
              { label: "Pass Mark (65%)", value: `${PASS_POINTS} points` },
              { label: "2-Point Questions", value: "K3 'Apply' items" },
              { label: "Prerequisite", value: "CTFL certificate" }
            ].map(item => (
              <div key={item.label} style={{ background: T.panel, borderRadius: "8px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>{item.label}</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: T.ink }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#FFFBEB", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", color: "#92400E" }}>
            📝 <b>Practice mode</b>: all 48 questions (incl. 8 Appendix A extras), submit each to see the official explanation immediately.{" "}
            <b>Exam simulation</b>: the official 40-question exam, real timer, no feedback until you finish — then pass/fail against the official 65% mark.
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.ink, marginBottom: "10px" }}>Practice Filters</div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: T.muted, marginBottom: "6px", letterSpacing: "0.05em" }}>QUESTION SET</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            {[
              { key: "all", label: `All (${questions.length})` },
              { key: "main", label: `Main exam (${mainQuestions.length})` },
              { key: "appendix", label: `Appendix A (${questions.length - mainQuestions.length})` },
            ].map(s => (
              <button key={s.key} onClick={() => setSetFilterVal(s.key)} style={{
                padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
                background: setFilterVal === s.key ? "#C2410C" : T.surface,
                color: setFilterVal === s.key ? "white" : T.body,
                fontSize: "12px", fontWeight: 600
              }}>{s.label}</button>
            ))}
          </div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: T.muted, marginBottom: "6px", letterSpacing: "0.05em" }}>CHAPTER</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button onClick={() => setFilter(0)} style={{
              padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
              background: filter === 0 ? T.ink : T.surface, color: filter === 0 ? "white" : T.body,
              fontSize: "12px", fontWeight: 600
            }}>All</button>
            {[1,2,3,4].map(ch => {
              const count = practicePool.filter(q => q.chapter === ch).length;
              return (
                <button key={ch} onClick={() => setFilter(ch)} style={{
                  padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
                  background: filter === ch ? chapterColors[ch] : T.surface,
                  color: filter === ch ? "white" : T.body,
                  fontSize: "12px", fontWeight: 600
                }}>Ch {ch} ({count})</button>
              );
            })}
          </div>
        </div>

        <button onClick={startPractice} disabled={practiceQs.length === 0} style={{
          width: "100%", background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
          color: "white", border: "none", borderRadius: "12px", padding: "16px",
          fontSize: "16px", fontWeight: 700, cursor: "pointer", marginBottom: "12px"
        }}>
          Start Practice Quiz ({practiceQs.length} questions) →
        </button>

        <button onClick={startExam} style={{
          width: "100%", background: "white", color: "#7C2D12",
          border: "2px solid #C2410C", borderRadius: "12px", padding: "15px",
          fontSize: "16px", fontWeight: 700, cursor: "pointer"
        }}>
          🕐 Start Exam Simulation ({Math.round(EXAM_MINUTES * (extraTime ? 1.25 : 1))} min, all 40 questions)
        </button>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", fontSize: "13px", color: T.body, cursor: "pointer", justifyContent: "center" }}>
          <input type="checkbox" checked={extraTime} onChange={(e) => setExtraTime(e.target.checked)} />
          +25% time (exam taken in a non-native language)
        </label>
      </div>
    );
  }

  if (mode === "result") {
    const passed = examScore >= PASS_POINTS;
    const byChapter = [1,2,3,4].map(ch => {
      const qs = mainQuestions.filter(qq => qq.chapter === ch);
      const got = qs.filter(isCorrect).reduce((s, qq) => s + qq.points, 0);
      const max = qs.reduce((s, qq) => s + qq.points, 0);
      return { ch, got, max };
    });
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
        <div style={{
          background: passed ? "linear-gradient(135deg, #065F46 0%, #059669 100%)" : "linear-gradient(135deg, #7F1D1D 0%, #DC2626 100%)",
          borderRadius: "16px", padding: "28px 24px", marginBottom: "20px", color: "white", textAlign: "center"
        }}>
          <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", opacity: 0.8, marginBottom: "8px" }}>EXAM SIMULATION RESULT</div>
          <div style={{ fontSize: "40px", fontWeight: 800, marginBottom: "4px" }}>{passed ? "PASS ✓" : "FAIL ✗"}</div>
          <div style={{ fontSize: "16px", opacity: 0.9 }}>
            {examScore} / {totalPoints} points ({Math.round((examScore / totalPoints) * 100)}%) · pass mark {PASS_POINTS} ({Math.round((PASS_POINTS / totalPoints) * 100)}%)
          </div>
          <div style={{ fontSize: "13px", opacity: 0.75, marginTop: "6px" }}>{examAnswered} of {mainQuestions.length} questions answered</div>
        </div>

        <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.ink, marginBottom: "12px" }}>Breakdown by Chapter</div>
          {byChapter.map(({ ch, got, max }) => (
            <div key={ch} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 700, color: chapterColors[ch] }}>Chapter {ch}</span>
                <span style={{ color: T.muted }}>{got}/{max} pts</span>
              </div>
              <div style={{ background: T.surface, borderRadius: "999px", height: "8px" }}>
                <div style={{ background: chapterColors[ch], height: "8px", borderRadius: "999px", width: `${max ? (got / max) * 100 : 0}%` }} />
              </div>
            </div>
          ))}
          <div style={{ fontSize: "12px", color: T.muted, marginTop: "10px" }}>
            Weak chapters? Re-study them on <a href="/ctqdo-learn" style={{ color: "#C2410C", fontWeight: 700 }}>Learn</a> and revisit the <a href="/ctqdo-guide" style={{ color: "#C2410C", fontWeight: 700 }}>Exam Insights</a>.
          </div>
        </div>

        <button onClick={startReview} style={{
          width: "100%", background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)", color: "white",
          border: "none", borderRadius: "12px", padding: "15px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginBottom: "12px"
        }}>
          Review All Answers & Explanations →
        </button>
        <button onClick={() => { setMode("start"); setSelected({}); setRevealed({}); }} style={{
          width: "100%", background: "white", color: T.body, border: `1px solid ${T.border}`,
          borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer"
        }}>
          ← Back to Start
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <button onClick={() => (examMode ? finishExam() : setMode("start"))} style={{
          background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
          padding: "8px 12px", cursor: "pointer", fontSize: "12px", fontWeight: 600, color: T.body
        }}>{examMode ? "Finish Exam" : "← Back"}</button>
        <div style={{ fontSize: "13px", fontWeight: 700, color: T.body }}>
          Q{currentQ + 1} / {filteredQs.length}{!examMode && ` · Score: ${score}/${maxScore}`}
        </div>
        {examMode ? (
          <div style={{
            fontSize: "14px", fontWeight: 800, fontVariantNumeric: "tabular-nums",
            color: timeLeft !== null && timeLeft < 300 ? "#DC2626" : T.ink,
            background: "white", border: `1px solid ${T.border}`, borderRadius: "8px", padding: "8px 12px"
          }}>
            ⏱ {fmtTime(Math.max(0, timeLeft ?? 0))}
          </div>
        ) : (
          <div style={{ fontSize: "12px", color: T.muted }}>{answeredCount} answered</div>
        )}
      </div>

      {/* Progress Bar */}
      <div style={{ background: T.track, borderRadius: "999px", height: "6px", marginBottom: "16px" }}>
        <div style={{
          background: `linear-gradient(90deg, ${chapterColors[q.chapter]} 0%, ${chapterColors[q.chapter]}CC 100%)`,
          height: "6px", borderRadius: "999px",
          width: `${((currentQ + 1) / filteredQs.length) * 100}%`, transition: "width 0.3s"
        }} />
      </div>

      {/* Question Card */}
      <div style={{ background: "white", borderRadius: "14px", padding: "18px", marginBottom: "12px", border: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          {q.appendix && (
            <span style={{ background: "#7C2D12", color: "white", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
              Appendix {q.label}
            </span>
          )}
          <span style={{ background: chapterColors[q.chapter], color: "white", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
            Ch {q.chapter}
          </span>
          <span style={{ background: q.level === "K3" ? "#D97706" : q.level === "K1" ? T.muted : "#2563EB", color: "white", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
            {q.level} {q.level === "K3" ? "★" : ""}
          </span>
          <span style={{ background: T.surface, color: T.body, fontSize: "10px", fontWeight: 600, padding: "3px 10px", borderRadius: "4px" }}>
            LO: {q.lo}
          </span>
          <span style={{ background: q.points === 2 ? "#FFFBEB" : T.panel, color: q.points === 2 ? "#92400E" : T.muted, fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
            {q.points} pt{q.points > 1 ? "s" : ""}
          </span>
          {q.multi && (
            <span style={{ background: "#FFF7ED", color: "#C2410C", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
              SELECT TWO
            </span>
          )}
          {isRevealed && (
            <span style={{ background: isCorrect(q) ? "#ECFDF5" : "#FEF2F2", color: isCorrect(q) ? "#065F46" : "#991B1B", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
              {isCorrect(q) ? "✓ CORRECT" : "✗ INCORRECT"}
            </span>
          )}
        </div>

        <div style={{ fontSize: "14px", color: T.ink, lineHeight: 1.7, marginBottom: "16px", whiteSpace: "pre-wrap" }}>
          {q.text}
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {q.options.map(opt => {
            const isSelected = userAnswers.includes(opt.id);
            const isCorrectOpt = q.correct.includes(opt.id);
            let bg = "white", border = `1px solid ${T.border}`, color = T.body;
            if (isRevealed) {
              if (isCorrectOpt) { bg = "#ECFDF5"; border = "2px solid #10B981"; color = "#065F46"; }
              else if (isSelected && !isCorrectOpt) { bg = "#FEF2F2"; border = "2px solid #EF4444"; color = "#991B1B"; }
            } else if (isSelected) {
              bg = "#FFF7ED"; border = "2px solid #C2410C"; color = "#7C2D12";
            }
            return (
              <button key={opt.id} onClick={() => toggleAnswer(opt.id)} style={{
                background: bg, border, borderRadius: "8px", padding: "12px 14px",
                textAlign: "left", cursor: isRevealed ? "default" : "pointer",
                display: "flex", gap: "10px", alignItems: "flex-start"
              }}>
                <span style={{ fontWeight: 700, fontSize: "13px", flexShrink: 0, color: isRevealed && isCorrectOpt ? "#065F46" : isRevealed && isSelected ? "#991B1B" : isSelected ? "#C2410C" : T.faint }}>
                  {opt.id.toUpperCase()})
                </span>
                <span style={{ fontSize: "13px", color, lineHeight: 1.5 }}>{opt.text}</span>
                {isRevealed && isCorrectOpt && <span style={{ marginLeft: "auto", flexShrink: 0, color: "#10B981", fontWeight: 700 }}>✓</span>}
                {isRevealed && isSelected && !isCorrectOpt && <span style={{ marginLeft: "auto", flexShrink: 0, color: "#EF4444", fontWeight: 700 }}>✗</span>}
              </button>
            );
          })}
        </div>

        {/* Submit Button — practice mode only; exam mode gives no per-question feedback */}
        {!examMode && !isRevealed && (
          <button onClick={submit} disabled={!userAnswers.length} style={{
            width: "100%", marginTop: "14px",
            background: userAnswers.length ? "#C2410C" : T.track,
            color: userAnswers.length ? "white" : T.faint,
            border: "none", borderRadius: "8px", padding: "12px",
            fontSize: "14px", fontWeight: 700, cursor: userAnswers.length ? "pointer" : "not-allowed"
          }}>
            {q.multi ? `Submit (${userAnswers.length}/2 selected)` : "Submit Answer"}
          </button>
        )}

        {/* Explanation */}
        {isRevealed && (
          <div style={{
            marginTop: "14px", background: T.pageBg, borderRadius: "10px",
            padding: "14px", border: `1px solid ${T.border}`
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: T.body, letterSpacing: "0.06em", marginBottom: "8px" }}>
              📋 OFFICIAL EXPLANATION
            </div>
            <div style={{ fontSize: "12px", color: T.body, lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
              {q.explanation}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        <button onClick={() => goTo(currentQ - 1)} disabled={currentQ === 0} style={{
          background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
          padding: "10px 18px", cursor: currentQ === 0 ? "not-allowed" : "pointer",
          fontSize: "13px", fontWeight: 600, color: currentQ === 0 ? T.disabled : T.body
        }}>← Prev</button>

        {/* Question dots */}
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center", flex: 1 }}>
          {filteredQs.slice(Math.max(0, currentQ - 3), Math.min(filteredQs.length, currentQ + 4)).map((fq, idx) => {
            const actualIdx = Math.max(0, currentQ - 3) + idx;
            const isCurrent = actualIdx === currentQ;
            const isAns = examMode ? (selected[fq.id] || []).length > 0 : revealed[fq.id];
            const isOk = !examMode && isAns && isCorrect(fq);
            return (
              <button key={fq.id} onClick={() => goTo(actualIdx)} style={{
                width: "28px", height: "28px", borderRadius: "6px", border: "none",
                background: isCurrent ? chapterColors[fq.chapter] : examMode ? (isAns ? "#FFF7ED" : T.track) : isOk ? "#ECFDF5" : isAns ? "#FEF2F2" : T.track,
                color: isCurrent ? "white" : examMode ? (isAns ? "#C2410C" : T.muted) : isOk ? "#065F46" : isAns ? "#991B1B" : T.muted,
                fontSize: "11px", fontWeight: 700, cursor: "pointer"
              }}>
                {actualIdx + 1}
              </button>
            );
          })}
        </div>

        <button onClick={() => goTo(currentQ + 1)} disabled={currentQ === filteredQs.length - 1} style={{
          background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
          padding: "10px 18px", cursor: currentQ === filteredQs.length - 1 ? "not-allowed" : "pointer",
          fontSize: "13px", fontWeight: 600, color: currentQ === filteredQs.length - 1 ? T.disabled : T.body
        }}>Next →</button>
      </div>

      {/* Exam mode: answered count + finish */}
      {examMode && (
        <div style={{ background: "white", borderRadius: "12px", padding: "14px 16px", marginTop: "14px", border: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "13px", color: T.body }}>
            <b>{examAnswered}</b> of {mainQuestions.length} answered
          </div>
          <button onClick={finishExam} style={{
            background: "#7C2D12", color: "white", border: "none", borderRadius: "8px",
            padding: "10px 18px", fontSize: "13px", fontWeight: 700, cursor: "pointer"
          }}>
            Finish & Score →
          </button>
        </div>
      )}

      {/* Score Summary (practice mode) */}
      {!examMode && answeredCount > 0 && (
        <div style={{ background: "white", borderRadius: "12px", padding: "14px 16px", marginTop: "14px", border: `1px solid ${T.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>Current Score</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: T.ink }}>
                {score}/{filteredQs.filter(q => revealed[q.id]).reduce((s, q) => s + q.points, 0)}
                <span style={{ fontSize: "13px", color: T.muted, fontWeight: 500 }}> pts answered</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>Correct Rate</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: score / filteredQs.filter(q => revealed[q.id]).reduce((s, q) => s + q.points, 0) >= 0.65 ? "#059669" : "#DC2626" }}>
                {Math.round(score / filteredQs.filter(q => revealed[q.id]).reduce((s, q) => s + q.points, 0) * 100)}%
              </div>
            </div>
          </div>
          <div style={{ background: T.surface, borderRadius: "999px", height: "6px", marginTop: "10px" }}>
            <div style={{
              background: score / maxScore >= 0.65 ? "#059669" : "#DC2626",
              height: "6px", borderRadius: "999px",
              width: `${(answeredCount / filteredQs.length) * 100}%`
            }} />
          </div>
          <div style={{ fontSize: "11px", color: T.muted, marginTop: "6px" }}>
            {answeredCount} of {filteredQs.length} questions answered · official pass mark: 65%
          </div>
        </div>
      )}
    </div>
  );
}
