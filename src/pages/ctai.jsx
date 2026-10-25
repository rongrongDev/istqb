import { useState } from "react";

import { chapters } from "../data/ctaiv1";
import { T } from "../lib/theme.js";

const DeepBadge = () => (
  <span style={{
    background: "#DC2626", color: "white", fontSize: "10px", fontWeight: 700,
    padding: "2px 8px", borderRadius: "999px", letterSpacing: "0.05em", whiteSpace: "nowrap"
  }}>🎯 DEEP LEARNING</span>
);

const SkimBadge = () => (
  <span style={{
    background: T.muted, color: "white", fontSize: "10px", fontWeight: 700,
    padding: "2px 8px", borderRadius: "999px", letterSpacing: "0.05em", whiteSpace: "nowrap"
  }}>⚡ SKIM</span>
);

const LevelBadge = ({ level }) => {
  const colors = { K1: T.muted, K2: "#2563EB", K3: "#D97706", K4: "#DC2626" };
  const labels = { K1: "K1 Remember", K2: "K2 Understand", K3: "K3 Apply", K4: "K4 Analyze" };
  return (
    <span style={{
      background: colors[level], color: "white", fontSize: "10px", fontWeight: 700,
      padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap"
    }}>{labels[level]}</span>
  );
};

export default function CTAIGuide() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [openSections, setOpenSections] = useState({});

  const toggleChapter = (id) => setActiveChapter(prev => prev === id ? null : id);
  const toggleSection = (key) => setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));

  const chapter = chapters.find(c => c.id === activeChapter);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.pageBg, minHeight: "100vh", padding: "16px" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)",
        borderRadius: "16px", padding: "24px", marginBottom: "20px", color: "white"
      }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", opacity: 0.7, marginBottom: "8px" }}>ISTQB CERTIFIED TESTER</div>
        <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "8px" }}>AI Testing (CT-AI)</div>
        <div style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>Comprehensive Learning Guide · All 11 Chapters</div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ background: "#DC2626", width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}/>
            <span style={{ fontSize: "12px" }}>🎯 Deep Learning — master every point</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ background: T.muted, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}/>
            <span style={{ fontSize: "12px" }}>⚡ Skim — grasp key concepts, move on</span>
          </div>
        </div>
      </div>

      {/* K-Level Legend */}
      <div style={{ background: "white", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px", border: `1px solid ${T.border}` }}>
        <div style={{ fontSize: "11px", fontWeight: 700, color: T.muted, marginBottom: "10px", letterSpacing: "0.05em" }}>COGNITIVE LEVEL KEY</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { level: "K1", desc: "Remember — recall facts", color: T.muted },
            { level: "K2", desc: "Understand — explain concepts", color: "#2563EB" },
            { level: "K3", desc: "Apply — use in scenarios", color: "#D97706" },
            { level: "K4", desc: "Analyze — judge & select", color: "#DC2626" },
          ].map(k => (
            <div key={k.level} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ background: k.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "4px" }}>{k.level}</span>
              <span style={{ fontSize: "12px", color: T.body }}>{k.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter List */}
      {!activeChapter && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {chapters.map(ch => {
            const deepCount = ch.sections.filter(s => s.type === "deep").length;
            const skimCount = ch.sections.filter(s => s.type === "skim").length;
            return (
              <button key={ch.id} onClick={() => toggleChapter(ch.id)} style={{
                background: "white", border: `2px solid ${ch.color}20`, borderRadius: "12px",
                padding: "16px", textAlign: "left", cursor: "pointer", transition: "all 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      background: ch.color, color: "white", width: "28px", height: "28px",
                      borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "13px", fontWeight: 800, flexShrink: 0
                    }}>{ch.id}</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink }}>{ch.title}</div>
                      <div style={{ fontSize: "12px", color: T.muted, marginTop: "2px" }}>⏱ {ch.time}</div>
                    </div>
                  </div>
                  <span style={{ color: ch.color, fontSize: "18px" }}>›</span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                  <span style={{ background: "#FEF2F2", color: "#DC2626", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "999px" }}>
                    🎯 {deepCount} deep
                  </span>
                  <span style={{ background: T.panel, color: T.muted, fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "999px" }}>
                    ⚡ {skimCount} skim
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Chapter Detail */}
      {activeChapter && chapter && (
        <div>
          {/* Back + Chapter Header */}
          <button onClick={() => { setActiveChapter(null); setOpenSections({}); }} style={{
            background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
            padding: "8px 14px", marginBottom: "12px", cursor: "pointer", fontSize: "13px",
            fontWeight: 600, color: T.body, display: "flex", alignItems: "center", gap: "6px"
          }}>
            ← All Chapters
          </button>

          <div style={{
            background: `linear-gradient(135deg, ${chapter.color}15 0%, ${chapter.color}08 100%)`,
            border: `2px solid ${chapter.color}30`,
            borderRadius: "14px", padding: "20px", marginBottom: "16px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{
                background: chapter.color, color: "white", width: "36px", height: "36px",
                borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 800, flexShrink: 0
              }}>{chapter.id}</div>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: T.ink }}>{chapter.title}</div>
                <div style={{ fontSize: "12px", color: T.muted }}>⏱ {chapter.time}</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: T.body, lineHeight: 1.6, background: "white", borderRadius: "8px", padding: "12px" }}>
              <span style={{ fontWeight: 700, color: chapter.color }}>Study Guide: </span>{chapter.overview}
            </div>
          </div>

          {/* Sections */}
          {chapter.sections.map(section => {
            const key = `${chapter.id}-${section.id}`;
            const isOpen = openSections[key];
            const isDeep = section.type === "deep";

            return (
              <div key={section.id} style={{
                background: "white",
                border: `1px solid ${isDeep ? "#FCA5A5" : T.track}`,
                borderLeft: `4px solid ${isDeep ? "#DC2626" : T.faint}`,
                borderRadius: "10px", marginBottom: "10px", overflow: "hidden"
              }}>
                <button onClick={() => toggleSection(key)} style={{
                  width: "100%", background: "transparent", border: "none",
                  padding: "14px", textAlign: "left", cursor: "pointer"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "6px" }}>
                        {isDeep ? <DeepBadge /> : <SkimBadge />}
                        <LevelBadge level={section.level} />
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: T.ink }}>
                        {section.id} {section.title}
                      </div>
                    </div>
                    <span style={{ color: isDeep ? "#DC2626" : T.muted, fontSize: "18px", flexShrink: 0 }}>
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 14px 14px", borderTop: `1px solid ${isDeep ? "#FEE2E2" : T.surface}` }}>
                    {isDeep ? (
                      <div style={{ marginTop: "12px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#DC2626", letterSpacing: "0.05em", marginBottom: "10px" }}>
                          KEY LEARNING POINTS
                        </div>
                        {section.deepPoints.map((point, i) => (
                          <div key={i} style={{
                            display: "flex", gap: "10px", marginBottom: "10px",
                            background: "#FFF7F7", borderRadius: "8px", padding: "10px"
                          }}>
                            <span style={{ color: "#DC2626", fontWeight: 800, fontSize: "13px", flexShrink: 0 }}>{i + 1}</span>
                            <span style={{ fontSize: "13px", color: T.body, lineHeight: 1.6 }}>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{
                        marginTop: "12px", background: T.panel, borderRadius: "8px",
                        padding: "12px", fontSize: "13px", color: T.body, lineHeight: 1.7
                      }}>
                        {section.summary}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom nav */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
            <button onClick={() => { setActiveChapter(null); setOpenSections({}); }} style={{
              background: "white", border: `1px solid ${T.border}`, borderRadius: "8px",
              padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: T.body
            }}>← Chapter List</button>
            <div style={{ display: "flex", gap: "8px" }}>
              {activeChapter > 1 && (
                <button onClick={() => { setActiveChapter(activeChapter - 1); setOpenSections({}); }} style={{
                  background: chapter.color, color: "white", border: "none", borderRadius: "8px",
                  padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: 600
                }}>← Ch {activeChapter - 1}</button>
              )}
              {activeChapter < 11 && (
                <button onClick={() => { setActiveChapter(activeChapter + 1); setOpenSections({}); }} style={{
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