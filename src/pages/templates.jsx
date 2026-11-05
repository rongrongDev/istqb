import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CopyButton } from "../components/Blocks.jsx";
import { SectionRefs } from "../components/LearnUI.jsx";
import { templates } from "../data/learning/templates.js";

const AREAS = [...new Set(templates.map((t) => t.area))];

// Templates and checklists (?t=<template id>): preview and copy as Markdown.
export default function Templates() {
  const [params] = useSearchParams();
  const [area, setArea] = useState(null);
  const ref = useRef(null);
  const t = templates.find((x) => x.id === params.get("t"));

  if (!t) {
    const list = area ? templates.filter((x) => x.area === area) : templates;
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Templates and checklists</span>
          <h2>Start from a good outline</h2>
          <span className="mu sm">Ready to copy as Markdown into your wiki, tracker or document. Each is based on what the syllabi say the artefact should contain.</span>
        </div>
        <div className="crow wrap" role="radiogroup" aria-label="Filter by area" style={{ gap: 6 }}>
          <button role="radio" aria-checked={!area} className={`chip${!area ? " on" : ""}`} onClick={() => setArea(null)}>All ({templates.length})</button>
          {AREAS.map((a) => (
            <button key={a} role="radio" aria-checked={area === a} className={`chip${area === a ? " on" : ""}`} onClick={() => setArea(a)}>
              {a} ({templates.filter((x) => x.area === a).length})
            </button>
          ))}
        </div>
        <div className="tbl">
          {list.map((x) => (
            <Link key={x.id} to={`/templates?t=${x.id}`} className="chr">
              <div className="tx"><b>{x.title}</b><span>{x.area} · {x.use}</span></div>
              <ChevronRight className="i mu" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <Link to="/templates" className="crow sm"><ChevronLeft className="i" />All templates</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Template · {t.area}</span>
        <h2>{t.title}</h2>
        <span className="mu">{t.use}</span>
      </div>
      <div className="codeb">
        <div className="crow codeh">
          <span className="sid">Markdown</span>
          <span className="push"><CopyButton text={t.body} label="Copy as Markdown" targetRef={ref} /></span>
        </div>
        <pre ref={ref}><code>{t.body}</code></pre>
      </div>
      <h2>Where it's explained</h2>
      <SectionRefs refs={t.links.map(([track, section]) => ({ track, section }))} />
    </div>
  );
}
