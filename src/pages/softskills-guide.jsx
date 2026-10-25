import { useState } from "react";
import { chapters } from "../data/softskills";
import { T } from "../lib/theme.js";


const DeepBadge = () => (
  <span style={{ background: "#DC2626", color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
    🎯 DEEP LEARNING
  </span>
);

const SkimBadge = () => (
  <span style={{ background: T.muted, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
    ⚡ SKIM
  </span>
);

const ExamBadge = () => (
  <span style={{ background: "#D97706", color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
    📝 EXAM INSIGHTS
  </span>
);

const LevelBadge = ({ level }) => {
  const map = {
    K1: { bg: T.muted, label: "K1 Remember" },
    K2: { bg: "#2563EB", label: "K2 Understand" },
    K3: { bg: "#D97706", label: "K3 Apply ★" },
    K4: { bg: "#DC2626", label: "K4 Analyze ★★" }
  };
  const { bg, label } = map[level] || map.K2;
  return (
    <span style={{ background: bg, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
};

export default function SoftSkillsGuide() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [openInsights, setOpenInsights] = useState({});

  const goToChapter = (id) => { setActiveChapter(id); setOpenSections({}); setOpenInsights({}); window.scrollTo(0, 0); };
  const goBack = () => { setActiveChapter(null); setOpenSections({}); setOpenInsights({}); };
  const toggleSection = (key) => setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleInsights = (key) => setOpenInsights(prev => ({ ...prev, [key]: !prev[key] }));

  const chapter = chapters.find(c => c.id === activeChapter);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px", boxSizing: "border-box" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1F1024 0%, #9D174D 50%, #E11D48 100%)", borderRadius: "16px", padding: "24px", marginBottom: "20px", color: "white" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.65, marginBottom: "6px" }}>ASTQB CERTIFIED TESTER — SOFT SKILLS FOR TESTERS</div>
        <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "6px" }}>CT-SS v1.0 — Comprehensive Exam Guide</div>
        <div style={{ fontSize: "13px", opacity: 0.75, marginBottom: "18px" }}>4 Chapters · Insights From the Official Sample Exam · 40 Questions Referenced</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ background: "#DC2626", width: "10px", height: "10px", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "12px" }}>🎯 Deep — master every point</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ background: T.muted, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "12px" }}>⚡ Skim — grasp key idea</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ background: "#D97706", width: "10px", height: "10px", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "12px" }}>📝 Exam insights from the official sample exam</span>
          </div>
        </div>
      </div>

      {/* Exam Format + K-Level Legend */}
      {!activeChapter && (
        <>
          <div style={{ background: "white", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: T.muted, marginBottom: "10px", letterSpacing: "0.06em" }}>OFFICIAL EXAM FORMAT</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { label: "Questions", value: "40 (45 points)" },
                { label: "Duration", value: "60 min (+25% non-native)" },
                { label: "Pass mark", value: "30 points (65%)" },
                { label: "Prerequisite", value: "None — interest in testing" },
              ].map(item => (
                <div key={item.label} style={{ background: T.panel, borderRadius: "8px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: T.muted, marginBottom: "2px" }}>{item.label}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "10px", fontSize: "12px", color: T.muted, background: "#FFFBEB", borderRadius: "8px", padding: "8px 12px" }}>
              Sample exam distribution: Ch 1 → 13 questions (14 pts) · Ch 2 → 10 questions (11 pts) · Ch 3 → 12 questions (14 pts) · Ch 4 → 5 questions (6 pts). Every chapter except ch. 2 carries at least one 2-point K3 scenario.
            </div>
          </div>

          <div style={{ background: "white", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: T.muted, marginBottom: "10px", letterSpacing: "0.06em" }}>COGNITIVE LEVEL KEY</div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { level: "K1", desc: "Remember", color: T.muted },
                { level: "K2", desc: "Understand", color: "#2563EB" },
                { level: "K3", desc: "Apply ★", color: "#D97706" },
              ].map(k => (
                <div key={k.level} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ background: k.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>{k.level}</span>
                  <span style={{ fontSize: "12px", color: T.body }}>{k.desc}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "10px", fontSize: "12px", color: T.muted, background: "#FFFBEB", borderRadius: "8px", padding: "8px 12px" }}>
              ★ The 5 K3 objectives — select the best communication environment (1.3.e), apply business-writing practices (2.1.a), apply the Cost of Quality formula (3.1.d), determine informal usability requirements (3.3.a), prepare for a stretch-role interview (4.2.c) — each yield a 2-point scenario question.
            </div>
          </div>
        </>
      )}

      {/* Chapter List */}
      {!activeChapter && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {chapters.map(ch => {
            const deepCount = ch.sections.filter(s => s.type === "deep").length;
            const skimCount = ch.sections.filter(s => s.type === "skim").length;
            const k3Count = ch.sections.filter(s => s.level === "K3" || s.level === "K4").length;
            const insightCount = ch.sections.reduce((sum, s) => sum + (s.examInsights ? s.examInsights.length : 0), 0);
            return (
              <button key={ch.id} onClick={() => goToChapter(ch.id)} style={{
                background: "white", border: `2px solid ${ch.color}25`, borderRadius: "14px",
                padding: "16px", textAlign: "left", cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)", width: "100%"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: ch.color, color: "white", width: "32px", height: "32px",
                      borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 800, flexShrink: 0
                    }}>{ch.id}</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink, lineHeight: 1.3 }}>{ch.title}</div>
                      <div style={{ fontSize: "12px", color: T.muted, marginTop: "2px" }}>⏱ {ch.time} · {ch.sections.length} sections</div>
                    </div>
                  </div>
                  <span style={{ color: ch.color, fontSize: "20px", lineHeight: 1 }}>›</span>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ background: "#FEF2F2", color: "#DC2626", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>🎯 {deepCount} deep</span>
                  <span style={{ background: T.panel, color: T.muted, fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>⚡ {skimCount} skim</span>
                  {k3Count > 0 && <span style={{ background: "#FFFBEB", color: "#D97706", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px" }}>★ {k3Count} K3</span>}
                  <span style={{ background: "#FFF7ED", color: "#EA580C", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>📝 {insightCount} insights</span>
                </div>
              </button>
            );
          })}

          {/* Quick Reference Card */}
          <div style={{ background: "white", border: `1px solid ${T.border}`, borderRadius: "14px", padding: "16px", marginTop: "4px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: T.body, marginBottom: "10px" }}>⭐ EXAM QUICK REFERENCE</div>
            <div style={{ background: T.panel, borderRadius: "8px", padding: "12px", fontFamily: "monospace", fontSize: "12px", color: T.ink, lineHeight: 2 }}>
              <div>Communication = objective, informing, pausable, forwardable</div>
              <div>Problem to manager/retro = always bring a possible solution</div>
              <div>Risk steps    = identify → assess (impact × likelihood) → mitigate</div>
              <div>CoQ delta     = actual phase cost − should-have phase cost</div>
              <div>Severity = system · Priority = business · Urgency = speed</div>
              <div>Usability Q   = "does it do what the user NEEDS it to do?"</div>
              <div>SME best use  = prioritizing defect reports</div>
            </div>
            <div style={{ marginTop: "10px", background: "#FFFBEB", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", color: "#92400E" }}>
              <strong>Swaps to watch:</strong> test strategy (all projects) vs test plan (one project) · severity (system impact) vs priority (business importance) · usability (user-friendliness) vs accessibility (usable by ALL users, voice-over = accessibility) · Explainability = AI characteristic, NOT ISO 25010.
            </div>
          </div>
        </div>
      )}

      {/* Chapter Detail */}
      {activeChapter && chapter && (
        <div>
          <button onClick={goBack} style={{
            background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
            padding: "8px 14px", marginBottom: "12px", cursor: "pointer", fontSize: "13px",
            fontWeight: 600, color: T.body, display: "flex", alignItems: "center", gap: "6px"
          }}>← All Chapters</button>

          <div style={{
            background: `linear-gradient(135deg, ${chapter.color}12 0%, ${chapter.color}06 100%)`,
            border: `2px solid ${chapter.color}30`, borderRadius: "14px", padding: "20px", marginBottom: "16px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{
                background: chapter.color, color: "white", width: "40px", height: "40px",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "17px", fontWeight: 800, flexShrink: 0
              }}>{chapter.id}</div>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: T.ink }}>{chapter.title}</div>
                <div style={{ fontSize: "12px", color: T.muted, marginTop: "2px" }}>⏱ {chapter.time} · {chapter.sections.length} sections</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: T.body, lineHeight: 1.65, background: "white", borderRadius: "10px", padding: "12px 14px", borderLeft: `4px solid ${chapter.color}` }}>
              <span style={{ fontWeight: 700, color: chapter.color }}>Study strategy: </span>{chapter.overview}
            </div>
          </div>

          {/* Section Progress Summary */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
            {chapter.sections.filter(s => s.type === "deep").map(s => (
              <span key={s.id} style={{ background: "#FEF2F2", color: "#DC2626", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>
                {(s.level === "K3" || s.level === "K4") ? "★ " : ""}{s.id}
              </span>
            ))}
          </div>

          {/* Sections */}
          {chapter.sections.map(section => {
            const key = `${chapter.id}-${section.id}`;
            const insightKey = `ins-${key}`;
            const isOpen = openSections[key];
            const isInsightOpen = openInsights[insightKey];
            const isDeep = section.type === "deep";
            const hasInsights = section.examInsights && section.examInsights.length > 0;

            return (
              <div key={section.id} style={{
                background: "white",
                border: `1px solid ${isDeep ? "#FCA5A5" : T.track}`,
                borderLeft: `4px solid ${isDeep ? "#DC2626" : T.disabled}`,
                borderRadius: "10px", marginBottom: "10px", overflow: "hidden"
              }}>
                {/* Section Header */}
                <button onClick={() => toggleSection(key)} style={{
                  width: "100%", background: isDeep && isOpen ? "#FFF7F7" : "transparent",
                  border: "none", padding: "14px 16px", textAlign: "left", cursor: "pointer"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "7px" }}>
                        {isDeep ? <DeepBadge /> : <SkimBadge />}
                        <LevelBadge level={section.level} />
                        {hasInsights && <ExamBadge />}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink, lineHeight: 1.35 }}>
                        {section.id} — {section.title}
                      </div>
                    </div>
                    <div style={{
                      color: isDeep ? "#DC2626" : T.faint, fontSize: "18px", lineHeight: 1, flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s"
                    }}>▾</div>
                  </div>
                </button>

                {/* Section Content */}
                {isOpen && (
                  <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${isDeep ? "#FEE2E2" : T.surface}` }}>
                    {isDeep ? (
                      <div style={{ marginTop: "12px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#DC2626", letterSpacing: "0.06em", marginBottom: "10px" }}>
                          KEY LEARNING POINTS
                        </div>
                        {section.deepPoints.map((point, i) => (
                          <div key={i} style={{
                            display: "flex", gap: "10px", marginBottom: "10px",
                            background: i % 2 === 0 ? "#FFF7F7" : "#FFFBFB",
                            borderRadius: "8px", padding: "10px 12px", border: "1px solid #FEE2E2"
                          }}>
                            <span style={{ color: "#DC2626", fontWeight: 800, fontSize: "13px", flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
                            <span style={{ fontSize: "13px", color: T.body, lineHeight: 1.65 }}>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{
                        marginTop: "12px", background: T.panel, borderRadius: "8px",
                        padding: "12px 14px", fontSize: "13px", color: T.body, lineHeight: 1.7,
                        border: `1px solid ${T.border}`
                      }}>
                        {section.summary}
                      </div>
                    )}

                    {/* Exam Insights Toggle */}
                    {hasInsights && (
                      <div style={{ marginTop: "12px" }}>
                        <button onClick={() => toggleInsights(insightKey)} style={{
                          width: "100%", background: isInsightOpen ? "#FFF7ED" : "#FFFBEB",
                          border: `1px solid ${isInsightOpen ? "#F97316" : "#FDE68A"}`,
                          borderRadius: "8px", padding: "10px 14px", cursor: "pointer",
                          display: "flex", justifyContent: "space-between", alignItems: "center"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "14px" }}>📝</span>
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#92400E" }}>
                              EXAM INSIGHTS ({section.examInsights.length})
                            </span>
                          </div>
                          <span style={{
                            color: "#D97706", fontSize: "14px",
                            transform: isInsightOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s"
                          }}>▾</span>
                        </button>

                        {isInsightOpen && (
                          <div style={{ marginTop: "4px" }}>
                            {section.examInsights.map((insight, i) => {
                              const isTrap = insight.includes("TRAP");
                              const isKey = insight.includes("KEY") || insight.includes("MATCHING") || insight.includes("SCENARIO") || insight.includes("ORDERING") || insight.includes("MEMORY AID");
                              const bgColor = isTrap ? "#FFF1F2" : isKey ? "#ECFDF5" : "#FFFBEB";
                              const borderColor = isTrap ? "#FDA4AF" : isKey ? "#6EE7B7" : "#FDE68A";
                              const textColor = isTrap ? "#BE123C" : isKey ? "#065F46" : "#78350F";
                              return (
                                <div key={i} style={{
                                  background: bgColor, border: `1px solid ${borderColor}`,
                                  borderRadius: "8px", padding: "10px 12px", marginBottom: "6px",
                                  fontSize: "12px", color: textColor, lineHeight: 1.65
                                }}>
                                  {insight}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${T.border}` }}>
            <button onClick={goBack} style={{
              background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
              padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: T.body
            }}>← Chapter List</button>
            <div style={{ display: "flex", gap: "8px" }}>
              {activeChapter > 1 && (
                <button onClick={() => goToChapter(activeChapter - 1)} style={{
                  background: chapter.color, color: "white", border: "none", borderRadius: "8px",
                  padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: 600
                }}>← Ch {activeChapter - 1}</button>
              )}
              {activeChapter < chapters.length && (
                <button onClick={() => goToChapter(activeChapter + 1)} style={{
                  background: chapter.color, color: "white", border: "none", borderRadius: "8px",
                  padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: 600
                }}>Ch {activeChapter + 1} →</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
