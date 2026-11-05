import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Check, Eye, FileText, Wrench } from "lucide-react";
import { Meter, pct } from "../components/ui.jsx";
import { SectionRefs, LevelChip } from "../components/LearnUI.jsx";
import { capstones } from "../data/learning/capstones.js";
import { templates } from "../data/learning/templates.js";
import { getRecipe } from "../data/learning/recipes.js";

// Per-browser progress: { "<capstone>:<stage>": [checked rubric indexes] }
const KEY = "capstone-progress";
const readProgress = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const writeProgress = (p) => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage blocked */ } };

// Capstone projects (?c=<id>&stage=<n>): staged case work with model answers and a rubric.
export default function Capstones() {
  const [params, setParams] = useSearchParams();
  const c = capstones.find((x) => x.id === params.get("c"));
  const [progress, setProgress] = useState(readProgress);
  const [shown, setShown] = useState(false);

  if (!c) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Capstone projects</span>
          <h2>Put it all together on a realistic project</h2>
          <span className="mu sm">Each project is a brief and a series of stages. Do each task yourself first, then compare with a model answer and tick the rubric. Model answers show one good answer, not the only one.</span>
        </div>
        {capstones.map((x) => {
          const done = x.stages.filter((_, i) => (progress[`${x.id}:${i}`] || []).length === x.stages[i].rubric.length).length;
          return (
            <Link key={x.id} to={`/capstones?c=${x.id}&stage=1`} className="tile">
              <div className="crow wrap"><b>{x.title}</b><span className="push"><LevelChip level={x.level} /></span></div>
              <span className="mu sm">{x.brief}</span>
              <div className="crow sm"><span className="mu">{x.stages.length} stages</span><span className="push">{done}/{x.stages.length} complete</span></div>
              <Meter value={pct(done, x.stages.length)} />
            </Link>
          );
        })}
      </div>
    );
  }

  const n = Math.min(Math.max(1, Number(params.get("stage")) || 1), c.stages.length);
  const st = c.stages[n - 1];
  const key = `${c.id}:${n - 1}`;
  const ticked = progress[key] || [];
  const toggle = (i) => {
    const next = { ...progress, [key]: ticked.includes(i) ? ticked.filter((x) => x !== i) : [...ticked, i] };
    setProgress(next); writeProgress(next);
  };
  const go = (k) => { setShown(false); setParams({ c: c.id, stage: String(k) }); window.scrollTo(0, 0); };

  return (
    <div className="page narrow">
      <Link to="/capstones" className="crow sm"><ChevronLeft className="i" />All projects</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Capstone · stage {n} of {c.stages.length}</span>
        <h2>{c.title}</h2>
      </div>
      {n === 1 ? <div className="callout plain"><span className="lbl">The brief</span><p>{c.brief}</p></div>
        : <details className="callout"><summary className="lbl">The brief</summary><p>{c.brief}</p></details>}
      <div className="crow wrap" style={{ gap: 6 }}>
        {c.stages.map((s, i) => {
          const full = (progress[`${c.id}:${i}`] || []).length === s.rubric.length;
          return <button key={i} className={`chip${i + 1 === n ? " on" : full ? " ok" : ""}`} onClick={() => go(i + 1)}>{full && <Check className="i" />}{i + 1}. {s.title}</button>;
        })}
      </div>
      <div className="boxc">
        <div className="isec"><b className="nt2">{st.title}</b><p className="extx">{st.task}</p></div>
        <div className="isec">
          <span className="mu sm">Write your answer somewhere first — on paper or in a document — then compare.</span>
          <button className="btn" style={{ alignSelf: "flex-start" }} onClick={() => setShown((s) => !s)} aria-expanded={shown}><Eye className="i" />{shown ? "Hide the model answer" : "Show the model answer"}</button>
          {shown && <div className="callout ex"><span className="lbl">Model answer</span><p>{st.model}</p></div>}
        </div>
        <div className="isec">
          <span className="lbl">Rubric — tick what your answer covered</span>
          {st.rubric.map((r, i) => (
            <label key={i} className="crow sm rub">
              <input type="checkbox" checked={ticked.includes(i)} onChange={() => toggle(i)} />
              <span>{r}</span>
            </label>
          ))}
        </div>
        {(st.templates.length > 0 || (st.recipes || []).length > 0) && (
          <div className="isec crow wrap" style={{ gap: 8 }}>
            {st.templates.map((id) => <Link key={id} className="btn wrapb" to={`/templates?t=${id}`}><FileText className="i" />{templates.find((t) => t.id === id)?.title}</Link>)}
            {(st.recipes || []).map((id) => <Link key={id} className="btn" to={`/toolbox?r=${id}`}><Wrench className="i" />{getRecipe(id)?.tool}</Link>)}
          </div>
        )}
      </div>
      <SectionRefs refs={st.links.map(([t, s]) => ({ track: t, section: s }))} />
      <div className="reader-foot">
        {n > 1 && <button className="btn" onClick={() => go(n - 1)}><ChevronLeft className="i" />Previous stage</button>}
        <span className="push">{n < c.stages.length ? <button className="btn pri" onClick={() => go(n + 1)}>Next stage <ArrowRight className="i" /></button> : <Link className="btn pri" to="/capstones">Finish <ChevronRight className="i" /></Link>}</span>
      </div>
    </div>
  );
}
