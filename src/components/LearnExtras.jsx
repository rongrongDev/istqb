import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, CircleCheck, Lightbulb, Eye, Wrench, FileText, Siren, PencilRuler, Scale, Shuffle, Ban, Briefcase, Building2 } from "lucide-react";
import { useLearning, setExerciseDone } from "../lib/learning.js";
import { exercisesFor } from "../data/learning/exercises.js";
import { recipesFor } from "../data/learning/recipes.js";
import { templatesFor } from "../data/learning/templates.js";
import { casesFor } from "../data/learning/cases.js";
import { realworldFor } from "../data/learning/realworld.js";
import { pairs } from "../data/learning/pairs.js";
import { antipatterns } from "../data/learning/antipatterns.js";
import { tradeoffs } from "../data/learning/tradeoffs.js";
import { situations } from "../data/learning/situations.js";
import { questions as interview } from "../data/learning/interview.js";

const linked = (list, track, section) => list.filter((x) => x.links.some(([t, s]) => t === track && s === section));

// Parse "0, 1; 30 31" → [0, 1, 30, 31]
const numbers = (s) => (s.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);

function checkAnswer(check, input) {
  if (check.kind === "number") {
    const [n] = numbers(input);
    return n != null && Math.abs(n - check.answer) <= (check.tolerance || 0);
  }
  const got = [...new Set(numbers(input))].sort((a, b) => a - b);
  const want = [...check.answer].sort((a, b) => a - b);
  return got.length === want.length && got.every((v, i) => v === want[i]);
}

// One hands-on exercise: task, hints, optional auto-check, solution, done toggle.
export function Exercise({ ex, showSource }) {
  const { exercisesDone } = useLearning();
  const done = exercisesDone.includes(ex.id);
  const [hints, setHints] = useState(0);
  const [solution, setSolution] = useState(false);
  const [input, setInput] = useState("");
  const [verdict, setVerdict] = useState(null);
  const inputId = `ex-${ex.id}`;

  const submit = (e) => {
    e.preventDefault();
    const ok = checkAnswer(ex.check, input);
    setVerdict(ok);
    if (ok) setExerciseDone(ex.id, true);
  };

  return (
    <div className="boxc exb" id={`exercise-${ex.id}`}>
      <div className="isec">
        <div className="crow wrap">
          <PencilRuler className="i mu" />
          <span className="lbl">Exercise · practice, not an exam question</span>
          {done && <span className="chip ok push"><CircleCheck className="i" />Done</span>}
        </div>
        <b className="nt2">{ex.title}</b>
        {showSource && showSource(ex)}
        <p className="extx">{ex.task}</p>
        {ex.hints.slice(0, hints).map((h, i) => <div key={i} className="callout nt"><span className="lbl">Hint {i + 1}</span><p>{h}</p></div>)}
        {ex.check && (
          <form className="crow wrap" onSubmit={submit}>
            <label className="sr" htmlFor={inputId}>Your answer</label>
            <input id={inputId} className="tin" value={input} onChange={(e) => { setInput(e.target.value); setVerdict(null); }}
              placeholder={ex.check.kind === "number" ? "Your answer (a number)" : "Your answer, e.g. 3, 7, 12"} inputMode="decimal" autoComplete="off" />
            <button className="btn pri" type="submit" disabled={!input.trim()}>Check</button>
            {verdict === true && <span className="chip ok"><Check className="i" />Correct</span>}
            {verdict === false && <span className="chip bad">Not quite — try again or use a hint</span>}
          </form>
        )}
        <div className="crow wrap">
          {hints < ex.hints.length && <button className="btn" onClick={() => setHints((h) => h + 1)}><Lightbulb className="i" />{hints ? "Another hint" : "Show a hint"}</button>}
          <button className="btn" onClick={() => setSolution((s) => !s)} aria-expanded={solution}><Eye className="i" />{solution ? "Hide solution" : "Show worked solution"}</button>
          {!ex.check && (
            <button className={`btn push ${done ? "okb" : ""}`} onClick={() => setExerciseDone(ex.id, !done)} aria-pressed={done}>
              <Check className="i" />{done ? "Done" : "Mark done"}
            </button>
          )}
        </div>
        {solution && <div className="callout ex"><span className="lbl">Worked solution</span><p>{ex.solution}</p></div>}
      </div>
    </div>
  );
}

// Everything attached to a Learn section beyond its syllabus text: exercises, tool recipes,
// templates and case studies. Renders nothing when the section has none.
export function SectionExtras({ trackId, sectionId }) {
  if (!trackId) return null;
  const ex = exercisesFor(trackId, sectionId);
  const notes = realworldFor(trackId, sectionId);
  const links = [
    ...recipesFor(trackId, sectionId).map((r) => ({ to: `/toolbox?r=${r.id}`, icon: Wrench, kind: "Try it with a tool", title: `${r.tool}: ${r.title}` })),
    ...templatesFor(trackId, sectionId).map((t) => ({ to: `/templates?t=${t.id}`, icon: FileText, kind: "Template", title: t.title })),
    ...casesFor(trackId, sectionId).map((c) => ({ to: `/case-studies?c=${c.id}`, icon: Siren, kind: "Seen in the wild", title: `${c.title} (${c.when})` })),
    ...linked(pairs, trackId, sectionId).map((p) => ({ to: `/pairs?p=${p.id}`, icon: Shuffle, kind: "Easily confused", title: `${p.a} vs ${p.b}` })),
    ...linked(tradeoffs, trackId, sectionId).map((t) => ({ to: `/tradeoffs?t=${t.id}`, icon: Scale, kind: "Trade-off guide", title: t.title })),
    ...linked(antipatterns, trackId, sectionId).map((a) => ({ to: `/anti-patterns#${a.id}`, icon: Ban, kind: "Anti-pattern", title: a.title })),
    ...linked(situations, trackId, sectionId).map((x) => ({ to: `/situations?s=${x.id}`, icon: Building2, kind: "Tricky situation", title: x.title })),
    ...linked(interview, trackId, sectionId).map((q) => ({ to: `/interview?q=${q.id}`, icon: Briefcase, kind: "Interview question", title: q.q })),
  ];
  if (!ex.length && !links.length && !notes.length) return null;
  return (
    <div className="stack" style={{ gap: 10 }}>
      {notes.map((n, i) => (
        <div key={i} className="callout rw">
          <span className="lbl">In the real world</span>
          <p><b>For the exam:</b> {n.exam}</p>
          <p><b>In practice:</b> {n.reality}</p>
        </div>
      ))}
      {ex.map((e) => <Exercise key={e.id} ex={e} />)}
      {links.length > 0 && (
        <div className="boxc">
          <div className="isec">
            <span className="lbl">Put it into practice</span>
            <div className="tbl">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="chr">
                  <l.icon className="i mu" />
                  <div className="tx"><b>{l.title}</b><span>{l.kind}</span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
