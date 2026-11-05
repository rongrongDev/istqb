import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";

// Learn content blocks (p, list, table, example, note, seealso) shared by the track Learn
// reader and the topic-path reader. Paragraphs and list items link glossary terms from
// the surrounding <TermsProvider> to an inline definition tooltip.

const TermsContext = createContext(null);

// Very common words that would light up every paragraph.
const STOP = new Set(["test", "testing", "tests", "defect", "defects", "failure", "error", "quality", "risk", "requirement", "user", "coverage", "tool", "review", "data", "model", "system"]);

function termKeys(term) {
  const out = [];
  const m = term.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  const base = (m ? m[1] : term).trim();
  if (base) out.push(base);
  if (m && /^[A-Z0-9][A-Z0-9 .\-/]{1,9}$/.test(m[2].trim())) out.push(m[2].trim());
  return out;
}

export function TermsProvider({ glossary, glossaryPath, children }) {
  const value = useMemo(() => {
    if (!glossary?.length) return null;
    const map = new Map();
    for (const e of glossary) {
      for (const k of termKeys(e.term)) {
        const key = k.toLowerCase();
        if (k.length < 4 || STOP.has(key) || map.has(key)) continue;
        map.set(key, { entry: e, abbr: k === k.toUpperCase() && /[A-Z]/.test(k) ? k : null });
      }
    }
    if (!map.size) return null;
    const keys = [...map.keys()].sort((a, b) => b.length - a.length).map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const re = new RegExp(`\\b(${keys.join("|")})\\b`, "gi");
    return { map, re, glossaryPath };
  }, [glossary, glossaryPath]);
  return <TermsContext.Provider value={value}>{children}</TermsContext.Provider>;
}

function Term({ text, entry, glossaryPath }) {
  const [pos, setPos] = useState(null); // fixed-position coordinates while open
  const ref = useRef(null);
  const btn = useRef(null);
  const open = !!pos;
  const show = () => {
    const r = btn.current.getBoundingClientRect();
    const w = Math.min(320, window.innerWidth - 24);
    const left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12));
    const below = window.innerHeight - r.bottom > 200;
    setPos(below ? { left, top: r.bottom + 6, width: w } : { left, bottom: window.innerHeight - r.top + 6, width: w });
  };
  const timer = useRef(null);
  const hide = () => { clearTimeout(timer.current); setPos(null); };
  // Hover: wait a moment before closing so the pointer can cross the gap into the tooltip.
  const enter = () => { clearTimeout(timer.current); if (!pos) show(); };
  const leave = () => { timer.current = setTimeout(() => setPos(null), 180); };
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) hide(); };
    const onKey = (e) => { if (e.key === "Escape") hide(); };
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", hide);
    };
  }, [open]);
  return (
    <span className="termw" ref={ref} onMouseEnter={enter} onMouseLeave={leave}>
      <button type="button" ref={btn} className="term" aria-expanded={open} onClick={() => (open ? hide() : show())} onFocus={show}
        onBlur={(e) => { if (!ref.current?.contains(e.relatedTarget)) hide(); }}>{text}</button>
      {open && (
        <span className="tip" role="tooltip" style={pos}>
          <b>{entry.term}</b>
          <span>{entry.definition}</span>
          {glossaryPath && <Link to={`/${glossaryPath}?q=${encodeURIComponent(entry.term)}`}>Open in glossary</Link>}
        </span>
      )}
    </span>
  );
}

// Turns glossary terms in plain text into tooltips; each term links once per block (`seen`).
export function Rich({ text, seen }) {
  const ctx = useContext(TermsContext);
  if (!ctx || typeof text !== "string") return text;
  const parts = [];
  let last = 0;
  ctx.re.lastIndex = 0;
  for (let m; (m = ctx.re.exec(text)); ) {
    const key = m[1].toLowerCase();
    const hit = ctx.map.get(key);
    if (!hit || seen.has(key) || (hit.abbr && m[1] !== hit.abbr)) continue;
    seen.add(key);
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Term key={m.index} text={m[1]} entry={hit.entry} glossaryPath={ctx.glossaryPath} />);
    last = m.index + m[1].length;
  }
  if (!parts.length) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function Block({ block }) {
  const seen = new Set();
  switch (block.type) {
    case "p":
      return <p><Rich text={block.text} seen={seen} /></p>;
    case "list":
      return (
        <div>
          {block.intro && <p className="intro" style={{ marginBottom: 8 }}>{block.intro}</p>}
          <ul>{block.items.map((it, i) => <li key={i}><Rich text={it} seen={seen} /></li>)}</ul>
        </div>
      );
    case "table":
      return (
        <div className="ptable">
          <table>
            <thead><tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case "example":
      return (
        <div className="callout ex">
          <span className="lbl">Example{block.title ? ` — ${block.title}` : ""}</span>
          <p>{block.text}</p>
        </div>
      );
    case "note":
      return (
        <div className="callout nt">
          <span className="lbl">{block.title || "Remember"}</span>
          <p>{block.text}</p>
        </div>
      );
    case "seealso":
      return (
        <div className="callout nt">
          <span className="lbl">See also</span>
          <p><Link to={block.href}>{block.label}</Link>{block.text ? ` — ${block.text}` : ""}</p>
        </div>
      );
    default:
      return null;
  }
}

// Copy-to-clipboard button; falls back to selecting the target text when the clipboard is refused.
export function CopyButton({ text, label = "Copy", targetRef }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      const el = targetRef?.current;
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
    }
  };
  return (
    <button type="button" className="btn" onClick={copy}>
      {done ? <><Check className="i" />Copied</> : <><Copy className="i" />{label}</>}
    </button>
  );
}

export function CodeBlock({ code, lang, title }) {
  const ref = useRef(null);
  return (
    <div className="codeb">
      <div className="crow codeh">
        <span className="sid">{title || lang}</span>
        <span className="push"><CopyButton text={code} targetRef={ref} /></span>
      </div>
      <pre ref={ref}><code>{code}</code></pre>
    </div>
  );
}
