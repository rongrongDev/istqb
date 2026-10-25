import { useState } from "react";
import { chapters } from "../data/ctaiv1";
import { getStudiedSectionsV1, setSectionStudiedV1 } from "../lib/progress.js";
import { T } from "../lib/theme.js";

const font = "'Inter', system-ui, sans-serif";

const LevelBadge = ({ level }) => {
  const map = {
    K1: { bg: T.muted, label: "K1 Remember" },
    K2: { bg: "#2563EB", label: "K2 Understand" },
    K3: { bg: "#D97706", label: "K3 Apply ★" },
    K4: { bg: "#DC2626", label: "K4 Analyze ★★" },
  };
  const { bg, label } = map[level] || map.K2;
  return (
    <span style={{ background: bg, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
};

function Block({ block, color }) {
  switch (block.type) {
    case "p":
      return <p style={{ fontSize: "14px", lineHeight: 1.75, color: T.inkSoft, margin: "0 0 14px" }}>{block.text}</p>;
    case "list":
      return (
        <div style={{ margin: "0 0 14px" }}>
          {block.intro && <p style={{ fontSize: "14px", lineHeight: 1.7, color: T.inkSoft, margin: "0 0 8px", fontWeight: 600 }}>{block.intro}</p>}
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {block.items.map((it, i) => (
              <li key={i} style={{ fontSize: "14px", lineHeight: 1.7, color: T.body, marginBottom: "6px" }}>{it}</li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div style={{ overflowX: "auto", margin: "0 0 16px" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "13px" }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ background: color, color: "white", padding: "8px 12px", textAlign: "left", fontWeight: 700, border: `1px solid ${T.border}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} style={{ background: r % 2 ? T.panel : "white" }}>
                  {row.map((cell, c) => (
                    <td key={c} style={{ padding: "8px 12px", border: `1px solid ${T.border}`, color: T.body, lineHeight: 1.55, fontWeight: c === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "example":
      return (
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "12px 16px", margin: "0 0 14px" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#047857", letterSpacing: "0.06em", marginBottom: "4px" }}>
            💡 EXAMPLE{block.title ? ` — ${block.title.toUpperCase()}` : ""}
          </div>
          <div style={{ fontSize: "13.5px", lineHeight: 1.7, color: "#065F46" }}>{block.text}</div>
        </div>
      );
    case "note":
      return (
        <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: "10px", padding: "12px 16px", margin: "0 0 14px" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#B45309", letterSpacing: "0.06em", marginBottom: "4px" }}>
            📌 {block.title ? block.title.toUpperCase() : "REMEMBER"}
          </div>
          <div style={{ fontSize: "13.5px", lineHeight: 1.7, color: "#92400E" }}>{block.text}</div>
        </div>
      );
    default:
      return null;
  }
}

export default function CTAIV1Learn() {
  // ?ch=N deep-links straight into a chapter
  const [activeChapter, setActiveChapter] = useState(() => {
    const ch = Number(new URLSearchParams(window.location.search).get("ch"));
    return chapters.some((c) => c.id === ch) ? ch : null;
  });
  const [studied, setStudied] = useState(() => getStudiedSectionsV1());
  const chapter = chapters.find((c) => c.id === activeChapter);

  const toggleStudied = (id) => setStudied(setSectionStudiedV1(id, !studied.has(id)));

  if (!chapter) {
    return (
      <div style={{ fontFamily: font, background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)", minHeight: "100vh", padding: "40px 16px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", color: "white", marginBottom: "36px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.65, marginBottom: "8px" }}>ISTQB CT-AI v1.0</div>
            <h1 style={{ fontSize: "30px", fontWeight: 800, margin: "0 0 8px" }}>Learn the Syllabus</h1>
            <p style={{ fontSize: "14px", opacity: 0.8, margin: "0 auto", maxWidth: "520px", lineHeight: 1.6 }}>
              Teaching content for all 11 chapters of the v1.0 syllabus — the version some institutions
              still certify against. Study here first, then consolidate with the Summary and Quiz pages.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {chapters.map((ch) => {
              const ready = !!ch.learn;
              return (
                <button key={ch.id} onClick={() => ready && (setActiveChapter(ch.id), window.scrollTo(0, 0))} style={{
                  background: ready ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.25)", borderRadius: "14px", padding: "18px 22px",
                  color: "white", textAlign: "left", cursor: ready ? "pointer" : "default", fontFamily: font,
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px",
                  opacity: ready ? 1 : 0.55,
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>
                      Chapter {ch.id} — {ch.title}
                    </div>
                    <div style={{ fontSize: "12px", opacity: 0.7 }}>
                      {ch.time} · {ch.sections.length} sections
                      {ready && ` · ${ch.sections.filter((s) => studied.has(s.id)).length}/${ch.sections.length} studied`}
                      {!ready && " · learn content coming soon (see Summary page)"}
                    </div>
                  </div>
                  <span style={{ opacity: 0.7, fontSize: "18px" }}>{ready ? "›" : "…"}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const { learn } = chapter;
  return (
    <div style={{ fontFamily: font, background: T.surface, minHeight: "100vh" }}>
      <div style={{ background: `linear-gradient(120deg, ${chapter.color} 0%, ${chapter.color}CC 100%)`, color: "white", padding: "28px 16px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <button onClick={() => setActiveChapter(null)} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", borderRadius: "8px", padding: "6px 14px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: font, marginBottom: "14px" }}>
            ‹ All chapters
          </button>
          <h1 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 6px" }}>Chapter {chapter.id}: {chapter.title}</h1>
          <div style={{ fontSize: "13px", opacity: 0.85 }}>{chapter.time} study time · {chapter.sections.length} sections</div>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "24px 16px 60px" }}>
        {learn?.intro && (
          <p style={{ fontSize: "14.5px", lineHeight: 1.75, color: T.inkSoft, background: "white", borderRadius: "12px", padding: "16px 20px", border: `1px solid ${T.border}` }}>{learn.intro}</p>
        )}

        {learn?.objectives && (
          <div style={{ background: "white", borderRadius: "12px", padding: "16px 20px", border: `1px solid ${T.border}`, marginTop: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: chapter.color, letterSpacing: "0.08em", marginBottom: "10px" }}>LEARNING OBJECTIVES — WHAT THE EXAM TESTS</div>
            {learn.objectives.map((lo) => (
              <div key={lo.id} style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "8px" }}>
                <code style={{ fontSize: "12px", fontWeight: 700, color: chapter.color, whiteSpace: "nowrap" }}>{lo.id}</code>
                <LevelBadge level={lo.level} />
                <span style={{ fontSize: "13.5px", color: T.body, lineHeight: 1.5 }}>{lo.text}</span>
              </div>
            ))}
          </div>
        )}

        {learn?.keywords?.aiSpecific?.length > 0 && (
          <div style={{ background: "white", borderRadius: "12px", padding: "16px 20px", border: `1px solid ${T.border}`, marginTop: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: chapter.color, letterSpacing: "0.08em", marginBottom: "10px" }}>KEYWORDS — KNOW THESE DEFINITIONS</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[...(learn.keywords.general || []), ...(learn.keywords.aiSpecific || [])].map((kw) => (
                <span key={kw} style={{ background: chapter.bg, color: chapter.color, fontSize: "12.5px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px" }}>{kw}</span>
              ))}
            </div>
          </div>
        )}

        {chapter.sections.map((s) => (
          <div key={s.id} style={{ background: "white", borderRadius: "12px", border: `1px solid ${T.border}`, marginTop: "20px", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: `1px solid ${T.hairline}`, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "13px", fontWeight: 800, color: chapter.color }}>{s.id}</span>
              <span style={{ fontSize: "15.5px", fontWeight: 700, color: T.ink, flex: 1 }}>{s.title}</span>
              <LevelBadge level={s.level} />
              <button onClick={() => toggleStudied(s.id)} title="Mark as studied" style={{
                background: studied.has(s.id) ? "#059669" : "white",
                color: studied.has(s.id) ? "white" : T.muted,
                border: studied.has(s.id) ? "1px solid #059669" : `1px solid ${T.borderStrong}`,
                borderRadius: "999px", padding: "4px 12px", fontSize: "11px", fontWeight: 700,
                cursor: "pointer", fontFamily: font, whiteSpace: "nowrap",
              }}>
                {studied.has(s.id) ? "✓ Studied" : "Mark studied"}
              </button>
            </div>
            <div style={{ padding: "18px 20px 8px" }}>
              {s.learn ? (
                s.learn.body.map((b, i) => <Block key={i} block={b} color={chapter.color} />)
              ) : (
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: T.body, margin: "0 0 14px" }}>
                  {s.summary || (s.deepPoints || []).join(" ")}
                </p>
              )}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "28px", textAlign: "center", fontSize: "13px", color: T.muted }}>
          Done studying? Consolidate with the <a href="/ctai" style={{ color: chapter.color, fontWeight: 700 }}>Summary</a>,{" "}
          <a href="/ctaiv1-glossary" style={{ color: chapter.color, fontWeight: 700 }}>Glossary</a>, and{" "}
          <a href="/ctai-quiz" style={{ color: chapter.color, fontWeight: 700 }}>Quiz</a> pages.
        </div>
      </div>
    </div>
  );
}
