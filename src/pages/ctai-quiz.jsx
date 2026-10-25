import { useState } from "react";

import { questions } from "../data/ctaiv1/quiz.js";
import { T } from "../lib/theme.js";

// Unique chapters present in main questions
const mainChapters = [...new Set(questions.filter(q => !q.isAppendix).map(q => q.chapter))].sort((a, b) => a - b);

const chapterColors = {
  1: "#4F46E5", 2: "#7C3AED", 3: "#0891B2", 4: "#059669",
  5: "#D97706", 6: "#DC2626", 7: "#475569", 8: "#0F766E",
  9: "#B45309", 10: "#6D28D9", 11: "#BE185D"
};

const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
const mainCount = questions.filter(q => !q.isAppendix).length;
const appendixCount = questions.filter(q => q.isAppendix).length;
const multiCount = questions.filter(q => q.multi).length;
const twoPointCount = questions.filter(q => q.points === 2).length;

export default function CTAIQuiz() {
  const [mode, setMode] = useState("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState({});
  const [revealed, setRevealed] = useState({});
  // filter: 0=all, 1-11=chapter, "appendix"=appendix only
  const [filter, setFilter] = useState(0);

  const filteredQs = filter === 0
    ? questions
    : filter === "appendix"
    ? questions.filter(q => q.isAppendix)
    : questions.filter(q => q.chapter === filter && !q.isAppendix);

  const q = filteredQs[currentQ];
  const isRevealed = q && revealed[q.id];
  const userAnswers = (q && selected[q.id]) || [];

  const isCorrect = (q) => {
    const ua = selected[q.id] || [];
    return q.correct.length === ua.length && q.correct.every(c => ua.includes(c));
  };

  const score = filteredQs.filter(q => revealed[q.id] && isCorrect(q)).reduce((s, q) => s + q.points, 0);
  const answeredQs = filteredQs.filter(q => revealed[q.id]);
  const answeredPts = answeredQs.reduce((s, q) => s + q.points, 0);
  const maxScore = filteredQs.reduce((s, q) => s + q.points, 0);
  const answeredCount = answeredQs.length;

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

  const startQuiz = () => {
    setMode("quiz");
    setCurrentQ(0);
  };

  // ─── START SCREEN ───
  if (mode === "start") {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)",
          borderRadius: "16px", padding: "24px", marginBottom: "20px", color: "white"
        }}>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.65, marginBottom: "6px" }}>
            ISTQB CT-AI v1.0
          </div>
          <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "6px" }}>
            CT-AI v1.0 · Sample Exam Practice
          </div>
          <div style={{ fontSize: "13px", opacity: 0.75 }}>
            Based on Official ISTQB CT-AI v1.1 Sample Exam (40 questions + 27 appendix)
          </div>
        </div>

        {/* Stats */}
        <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.ink, marginBottom: "12px" }}>Exam Information</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
            {[
              { label: "Main Questions", value: `${mainCount}` },
              { label: "Appendix Questions", value: `${appendixCount}` },
              { label: "Total Points", value: `${totalPoints}` },
              { label: "Multi-select Questions", value: `${multiCount} (Q25, Q29, Q35)` },
              { label: "2-Point Questions", value: `${twoPointCount} (Q11, Q17, Q19, Q25, Q29, Q33, Q35)` },
              { label: "Chapters", value: "11 + Appendix" }
            ].map(item => (
              <div key={item.label} style={{ background: T.panel, borderRadius: "8px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>{item.label}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#FFFBEB", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", color: "#92400E" }}>
            Select an answer, then click Submit to reveal the official rationale. Navigate freely between questions at any time.
          </div>
        </div>

        {/* Filter */}
        <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.ink, marginBottom: "10px" }}>Filter by Chapter (optional)</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button onClick={() => setFilter(0)} style={{
              padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
              background: filter === 0 ? "#4F46E5" : T.surface,
              color: filter === 0 ? "white" : T.body,
              fontSize: "12px", fontWeight: 600
            }}>All ({questions.length})</button>
            {mainChapters.map(ch => {
              const count = questions.filter(q => q.chapter === ch && !q.isAppendix).length;
              return (
                <button key={ch} onClick={() => setFilter(ch)} style={{
                  padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
                  background: filter === ch ? chapterColors[ch] : T.surface,
                  color: filter === ch ? "white" : T.body,
                  fontSize: "12px", fontWeight: 600
                }}>Ch {ch} ({count})</button>
              );
            })}
            <button onClick={() => setFilter("appendix")} style={{
              padding: "6px 14px", borderRadius: "999px", border: "none", cursor: "pointer",
              background: filter === "appendix" ? T.muted : T.surface,
              color: filter === "appendix" ? "white" : T.body,
              fontSize: "12px", fontWeight: 600
            }}>Appendix ({appendixCount})</button>
          </div>
        </div>

        <button onClick={startQuiz} style={{
          width: "100%",
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "white", border: "none", borderRadius: "12px", padding: "16px",
          fontSize: "16px", fontWeight: 700, cursor: "pointer"
        }}>
          Start Practice Quiz →
        </button>
      </div>
    );
  }

  // ─── QUIZ SCREEN ───
  const chColor = chapterColors[q.chapter] || "#4F46E5";

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <button onClick={() => setMode("start")} style={{
          background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
          padding: "8px 12px", cursor: "pointer", fontSize: "12px", fontWeight: 600, color: T.body
        }}>← Back</button>
        <div style={{ fontSize: "13px", fontWeight: 700, color: T.body }}>
          Q{currentQ + 1} / {filteredQs.length} · Score: {score}/{maxScore}
        </div>
        <div style={{ fontSize: "12px", color: T.muted }}>{answeredCount} answered</div>
      </div>

      {/* Chapter filter chips in quiz mode */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
        <button onClick={() => { setFilter(0); setCurrentQ(0); }} style={{
          padding: "4px 10px", borderRadius: "999px", border: "none", cursor: "pointer",
          background: filter === 0 ? "#4F46E5" : T.surface,
          color: filter === 0 ? "white" : T.body, fontSize: "11px", fontWeight: 600
        }}>All</button>
        {mainChapters.map(ch => (
          <button key={ch} onClick={() => { setFilter(ch); setCurrentQ(0); }} style={{
            padding: "4px 10px", borderRadius: "999px", border: "none", cursor: "pointer",
            background: filter === ch ? chapterColors[ch] : T.surface,
            color: filter === ch ? "white" : T.body, fontSize: "11px", fontWeight: 600
          }}>Ch {ch}</button>
        ))}
        <button onClick={() => { setFilter("appendix"); setCurrentQ(0); }} style={{
          padding: "4px 10px", borderRadius: "999px", border: "none", cursor: "pointer",
          background: filter === "appendix" ? T.muted : T.surface,
          color: filter === "appendix" ? "white" : T.body, fontSize: "11px", fontWeight: 600
        }}>App</button>
      </div>

      {/* Progress Bar */}
      <div style={{ background: T.track, borderRadius: "999px", height: "6px", marginBottom: "16px" }}>
        <div style={{
          background: `linear-gradient(90deg, ${chColor} 0%, ${chColor}CC 100%)`,
          height: "6px", borderRadius: "999px",
          width: `${((currentQ + 1) / filteredQs.length) * 100}%`,
          transition: "width 0.3s"
        }} />
      </div>

      {/* Question Card */}
      <div style={{ background: "white", borderRadius: "14px", padding: "18px", marginBottom: "12px", border: `1px solid ${T.border}` }}>
        {/* Badges */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span style={{
            background: chColor, color: "white",
            fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
          }}>Ch {q.chapter}</span>
          {q.isAppendix && (
            <span style={{
              background: T.muted, color: "white",
              fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
            }}>Appendix</span>
          )}
          <span style={{
            background: q.level === "K3" ? "#D97706" : q.level === "K1" ? T.muted : "#2563EB",
            color: "white", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
          }}>{q.level}{q.level === "K3" ? " ★" : ""}</span>
          {q.points === 2 && (
            <span style={{
              background: "#FFFBEB", color: "#92400E",
              fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
            }}>2 pts</span>
          )}
          {q.multi && (
            <span style={{
              background: "#EEF2FF", color: "#4F46E5",
              fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
            }}>SELECT TWO</span>
          )}
          {isRevealed && (
            <span style={{
              background: isCorrect(q) ? "#ECFDF5" : "#FEF2F2",
              color: isCorrect(q) ? "#065F46" : "#991B1B",
              fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px"
            }}>
              {isCorrect(q) ? "✓ CORRECT" : "✗ INCORRECT"}
            </span>
          )}
        </div>

        {/* Question text */}
        <div style={{ fontSize: "14px", color: T.ink, lineHeight: 1.7, marginBottom: "16px", whiteSpace: "pre-wrap" }}>
          {q.text}
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {q.options.map(opt => {
            const isSelected = userAnswers.includes(opt.id);
            const isCorrectOpt = q.correct.includes(opt.id);
            const isMissedCorrect = isRevealed && isCorrectOpt && !isSelected;

            let bg = "white", border = `1px solid ${T.border}`, textColor = T.body;
            if (isRevealed) {
              if (isCorrectOpt && isSelected) { bg = "#ECFDF5"; border = "2px solid #10B981"; textColor = "#065F46"; }
              else if (isCorrectOpt && !isSelected) { bg = "#FEFCE8"; border = "2px solid #EAB308"; textColor = "#713F12"; }
              else if (!isCorrectOpt && isSelected) { bg = "#FEF2F2"; border = "2px solid #EF4444"; textColor = "#991B1B"; }
            } else if (isSelected) {
              bg = "#EEF2FF"; border = "2px solid #4F46E5"; textColor = "#3730A3";
            }

            return (
              <button key={opt.id} onClick={() => toggleAnswer(opt.id)} style={{
                background: bg, border, borderRadius: "8px", padding: "12px 14px",
                textAlign: "left", cursor: isRevealed ? "default" : "pointer",
                display: "flex", gap: "10px", alignItems: "flex-start"
              }}>
                <span style={{
                  fontWeight: 700, fontSize: "13px", flexShrink: 0,
                  color: isRevealed && isCorrectOpt && isSelected ? "#065F46"
                    : isRevealed && isMissedCorrect ? "#713F12"
                    : isRevealed && isSelected ? "#991B1B"
                    : isSelected ? "#4F46E5" : T.faint
                }}>
                  {opt.id.toUpperCase()})
                </span>
                <span style={{ fontSize: "13px", color: textColor, lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{opt.text}</span>
                {isRevealed && isCorrectOpt && isSelected && (
                  <span style={{ marginLeft: "auto", flexShrink: 0, color: "#10B981", fontWeight: 700 }}>✓</span>
                )}
                {isRevealed && isMissedCorrect && (
                  <span style={{ marginLeft: "auto", flexShrink: 0, color: "#EAB308", fontWeight: 700 }}>!</span>
                )}
                {isRevealed && !isCorrectOpt && isSelected && (
                  <span style={{ marginLeft: "auto", flexShrink: 0, color: "#EF4444", fontWeight: 700 }}>✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Submit */}
        {!isRevealed && (
          <button onClick={submit} disabled={!userAnswers.length} style={{
            width: "100%", marginTop: "14px",
            background: userAnswers.length ? "#4F46E5" : T.track,
            color: userAnswers.length ? "white" : T.faint,
            border: "none", borderRadius: "8px", padding: "12px",
            fontSize: "14px", fontWeight: 700, cursor: userAnswers.length ? "pointer" : "not-allowed"
          }}>
            {q.multi
              ? `Check Answer (${userAnswers.length}/2 selected)`
              : "Check Answer"}
          </button>
        )}

        {/* Rationale */}
        {isRevealed && (
          <div style={{
            marginTop: "14px", background: T.pageBg, borderRadius: "10px",
            padding: "14px", border: `1px solid ${T.border}`
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: T.body, letterSpacing: "0.06em", marginBottom: "8px" }}>
              RATIONALE
            </div>
            <div style={{ fontSize: "12px", color: T.body, lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
              {q.rationale}
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

        {/* Question dots (windowed) */}
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center", flex: 1 }}>
          {filteredQs.slice(Math.max(0, currentQ - 3), Math.min(filteredQs.length, currentQ + 4)).map((fq, idx) => {
            const actualIdx = Math.max(0, currentQ - 3) + idx;
            const isCurrent = actualIdx === currentQ;
            const isAns = revealed[fq.id];
            const isOk = isAns && isCorrect(fq);
            return (
              <button key={fq.id} onClick={() => goTo(actualIdx)} style={{
                width: "28px", height: "28px", borderRadius: "6px", border: "none",
                background: isCurrent ? (chapterColors[fq.chapter] || "#4F46E5") : isOk ? "#ECFDF5" : isAns ? "#FEF2F2" : T.track,
                color: isCurrent ? "white" : isOk ? "#065F46" : isAns ? "#991B1B" : T.muted,
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

      {/* Score Summary */}
      {answeredCount > 0 && (
        <div style={{
          background: "white", borderRadius: "12px", padding: "14px 16px",
          marginTop: "14px", border: `1px solid ${T.border}`
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>Current Score</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: T.ink }}>
                {score}/{answeredPts}
                <span style={{ fontSize: "13px", color: T.muted, fontWeight: 500 }}> pts answered</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>Correct Rate</div>
              <div style={{
                fontSize: "20px", fontWeight: 800,
                color: answeredPts > 0 && score / answeredPts >= 0.65 ? "#059669" : "#DC2626"
              }}>
                {answeredPts > 0 ? Math.round((score / answeredPts) * 100) : 0}%
              </div>
            </div>
          </div>
          <div style={{ background: T.surface, borderRadius: "999px", height: "6px", marginTop: "10px" }}>
            <div style={{
              background: answeredPts > 0 && score / answeredPts >= 0.65 ? "#059669" : "#DC2626",
              height: "6px", borderRadius: "999px",
              width: `${(answeredCount / filteredQs.length) * 100}%`,
              transition: "width 0.3s"
            }} />
          </div>
          <div style={{ fontSize: "11px", color: T.muted, marginTop: "6px" }}>
            {answeredCount} of {filteredQs.length} questions answered
          </div>
        </div>
      )}
    </div>
  );
}
