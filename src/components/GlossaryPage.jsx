import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SearchX, RotateCcw, Command } from "lucide-react";

// Step 4 for every track: search (term or definition), alphabetical, chapter filter.
// ?q=<term> pre-fills the search (used by the ⌘K lookup).
export default function GlossaryPage({ glossary, label, intro }) {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") || "");
  const [chapter, setChapter] = useState(0);
  const chapterIds = useMemo(() => [...new Set(glossary.flatMap((e) => e.chapters))].sort((a, b) => a - b), [glossary]);

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((e) => chapter === 0 || e.chapters.includes(chapter))
      .filter((e) => !q || e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [glossary, query, chapter]);

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <div className="crow wrap">
          <span className="lbl">{label} · Glossary</span>
          <span className="mu sm push crow" style={{ gap: 6 }}><Command className="i" style={{ "--ic": "13px" }} />Press ⌘K on any page to look up a term</span>
        </div>
        <h2>Glossary</h2>
        <span className="mu sm">{intro}</span>
      </div>
      <label className="inp">
        <Search className="i" />
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${glossary.length} terms…`} aria-label="Search terms" />
        <span className="mu sm">{entries.length} of {glossary.length}</span>
      </label>
      <div className="crow wrap" style={{ gap: 6 }} role="group" aria-label="Filter by chapter">
        {[0, ...chapterIds].map((ch) => (
          <button key={ch} className={`chip${chapter === ch ? " on" : ""}`} aria-pressed={chapter === ch} onClick={() => setChapter(ch)}>
            {ch === 0 ? "All" : `Ch ${ch}`}
          </button>
        ))}
      </div>

      {entries.length === 0 ? (
        <div className="empty">
          <SearchX className="i" />
          <b>No term matches{query ? ` “${query}”` : ""}{chapter ? ` in Chapter ${chapter}` : ""}</b>
          <span className="mu sm">Try fewer words{chapter ? ", or search all chapters" : ""}.</span>
          {chapter !== 0 && <button className="btn" onClick={() => setChapter(0)}><RotateCcw className="i" />Search all chapters</button>}
        </div>
      ) : (
        <div className="tbl">
          {entries.map((e) => (
            <div key={e.term} className="gl">
              <div className="crow wrap">
                <b>{e.term}</b>
                <span className="crow push" style={{ gap: 6 }}>
                  {e.chapters.map((c) => <span key={c} className="chip">Ch {c}</span>)}
                  <span className="sid">§{e.ref}</span>
                </span>
              </div>
              <p>{e.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
