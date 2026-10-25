import { useMemo, useState } from "react";
import { glossary } from "../data/ctaiv1/glossary.js";
import { T } from "../lib/theme.js";

const font = "'Inter', system-ui, sans-serif";
const chapterColors = {
  1: "#4F46E5", 2: "#7C3AED", 3: "#0891B2", 4: "#059669",
  5: "#D97706", 6: "#DC2626", 7: "#475569", 8: "#0F766E",
  9: "#B45309", 10: "#6D28D9", 11: "#BE185D",
};

export default function CTAIV1Glossary() {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState(0);

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((e) => (chapter === 0 || e.chapters.includes(chapter)))
      .filter((e) => !q || e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, chapter]);

  return (
    <div style={{ fontFamily: font, background: T.surface, minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(120deg, #1E1B4B 0%, #4C1D95 100%)", color: "white", padding: "32px 16px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.65, marginBottom: "6px" }}>ISTQB CT-AI v1.0</div>
          <h1 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 6px" }}>Glossary</h1>
          <p style={{ fontSize: "13.5px", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
            Every v1.0 syllabus keyword with its definition. ISTQB exams test exact definitions — flip through these until each one is familiar.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "20px 16px 60px" }}>
        <input
          type="search"
          placeholder={`Search ${glossary.length} terms…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box", padding: "12px 16px", fontSize: "15px",
            borderRadius: "12px", border: `1px solid ${T.borderStrong}`, fontFamily: font, outline: "none", background: "white",
          }}
        />
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "12px 0 20px" }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((ch) => (
            <button key={ch} onClick={() => setChapter(ch)} style={{
              background: chapter === ch ? (ch === 0 ? T.ink : chapterColors[ch]) : "white",
              color: chapter === ch ? "white" : T.body,
              border: `1px solid ${T.borderStrong}`, borderRadius: "999px", padding: "6px 14px",
              fontSize: "12.5px", fontWeight: 700, cursor: "pointer", fontFamily: font,
            }}>
              {ch === 0 ? "All" : `Ch ${ch}`}
            </button>
          ))}
        </div>

        {entries.length === 0 && (
          <div style={{ textAlign: "center", color: T.muted, fontSize: "14px", padding: "40px 0" }}>No terms match.</div>
        )}
        {entries.map((e) => (
          <div key={e.term} style={{ background: "white", border: `1px solid ${T.border}`, borderRadius: "12px", padding: "16px 20px", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
              <span style={{ fontSize: "15.5px", fontWeight: 800, color: T.ink }}>{e.term}</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: T.muted }}>§{e.ref}</span>
              {e.chapters.map((ch) => (
                <span key={ch} style={{ background: chapterColors[ch], color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px" }}>
                  Ch {ch}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: T.body, margin: 0 }}>{e.definition}</p>
          </div>
        ))}

        <div style={{ marginTop: "24px", textAlign: "center", fontSize: "13px", color: T.muted }}>
          Study the full material on <a href="/ctaiv1-learn" style={{ color: "#4F46E5", fontWeight: 700 }}>Learn</a> · test yourself in the{" "}
          <a href="/ctai-quiz" style={{ color: "#4F46E5", fontWeight: 700 }}>Quiz</a>
        </div>
      </div>
    </div>
  );
}
