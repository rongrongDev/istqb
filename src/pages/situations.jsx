import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { situations, ratingLabel } from "../data/learning/situations.js";

const RATING_CLS = { best: "ok", acceptable: "warn", risky: "bad" };

// Tricky workplace situations (?s=<id>): choose a response, then see every rating and why.
export default function Situations() {
  const [params, setParams] = useSearchParams();
  const idx = situations.findIndex((x) => x.id === params.get("s"));
  const [pick, setPick] = useState(null);
  const x = situations[idx];

  if (!x) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Tricky situations</span>
          <h2>What would you do?</h2>
          <span className="mu sm">Real situations testers face. Choose a response, then see how each option is rated and why. Ratings reflect common good practice; real situations depend on context.</span>
        </div>
        <div className="tbl">
          {situations.map((s) => (
            <Link key={s.id} to={`/situations?s=${s.id}`} className="chr">
              <div className="tx"><b>{s.title}</b><span>{s.area}</span></div>
              <ChevronRight className="i mu" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const next = situations[idx + 1];
  const go = (id) => { setPick(null); setParams(id ? { s: id } : {}); window.scrollTo(0, 0); };
  return (
    <div className="page narrow">
      <Link to="/situations" className="crow sm"><ChevronLeft className="i" />All situations</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">{x.area} · situation {idx + 1} of {situations.length}</span>
        <h2>{x.title}</h2>
      </div>
      <div className="callout plain"><span className="lbl">The situation</span><p>{x.scenario}</p></div>
      <span className="lbl">{pick == null ? "What would you do?" : "How each response rates"}</span>
      <div className="optg" role="radiogroup" aria-label="Responses">
        {x.responses.map((r, i) => (
          <button key={i} className={`opt${pick == null ? "" : i === pick ? " sel" : ""}`} disabled={pick != null} onClick={() => setPick(i)} role="radio" aria-checked={pick === i}>
            <span className="key">{String.fromCharCode(97 + i)}</span>
            <span className="tx">
              {r.text}
              {pick != null && <><br /><span className="sm mu">{r.why}</span></>}
            </span>
            {pick != null && <span className={`chip ${RATING_CLS[r.rating]}`}>{ratingLabel[r.rating]}</span>}
          </button>
        ))}
      </div>
      {pick != null && (
        <>
          <h2>Learn more</h2>
          <SectionRefs refs={x.links.map(([t, s]) => ({ track: t, section: s }))} />
          <div className="reader-foot">
            <button className="btn" onClick={() => setPick(null)}>Try again</button>
            <span className="push">{next ? <button className="btn pri" onClick={() => go(next.id)}>Next situation <ArrowRight className="i" /></button> : <button className="btn pri" onClick={() => go(null)}>All situations</button>}</span>
          </div>
        </>
      )}
    </div>
  );
}
