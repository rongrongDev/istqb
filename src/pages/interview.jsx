import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { questions, levels, areas } from "../data/learning/interview.js";

function Card({ q, open, onToggle }) {
  return (
    <div id={`q-${q.id}`} className="boxc">
      <div className="isec">
        <div className="crow wrap"><span className="chip">{q.level}</span><span className="chip">{q.area}</span></div>
        <b className="nt2">{q.q}</b>
        <button className="btn" style={{ alignSelf: "flex-start" }} onClick={onToggle} aria-expanded={open}>
          {open ? <><EyeOff className="i" />Hide the answer</> : <><Eye className="i" />Think first, then show the answer</>}
        </button>
      </div>
      {open && (
        <>
          <div className="isec"><span className="lbl">What the interviewer looks for</span><span className="sm">{q.looksFor}</span></div>
          <div className="isec"><span className="lbl">Answer outline</span><ul className="pts">{q.outline.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="isec"><span className="lbl">Likely follow-ups</span><ul className="pts">{q.followUps.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="isec"><span className="lbl">Back it up</span><SectionRefs refs={q.links.map(([t, s]) => ({ track: t, section: s }))} /></div>
        </>
      )}
    </div>
  );
}

// QA interview prep: questions by level and area; answers stay hidden until revealed.
export default function Interview() {
  const [params] = useSearchParams();
  const focus = params.get("q");
  const [level, setLevel] = useState(null);
  const [area, setArea] = useState(null);
  const [open, setOpen] = useState(() => (focus ? { [focus]: true } : {}));
  useEffect(() => { if (focus) document.getElementById(`q-${focus}`)?.scrollIntoView({ block: "start" }); }, [focus]);
  const list = questions.filter((q) => (!level || q.level === level) && (!area || q.area === area));
  const chips = (vals, cur, set) => (
    <div className="crow wrap" style={{ gap: 6 }}>
      <button className={`chip${!cur ? " on" : ""}`} aria-pressed={!cur} onClick={() => set(null)}>All</button>
      {vals.map((v) => <button key={v} className={`chip${cur === v ? " on" : ""}`} aria-pressed={cur === v} onClick={() => set(cur === v ? null : v)}>{v}</button>)}
    </div>
  );
  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Interview prep</span>
        <h2>Common QA interview questions</h2>
        <span className="mu sm">Answer in your head (or out loud) before you reveal the outline. Outlines are a structure to build on, not a script to memorise.</span>
      </div>
      <div className="stack" style={{ gap: 8 }}>
        <span className="lbl">Level</span>{chips(levels, level, setLevel)}
        <span className="lbl">Area</span>{chips(areas, area, setArea)}
      </div>
      {list.length === 0 && <span className="mu">No questions match these filters.</span>}
      {list.map((q) => <Card key={q.id} q={q} open={!!open[q.id]} onToggle={() => setOpen((o) => ({ ...o, [q.id]: !o[q.id] }))} />)}
    </div>
  );
}
