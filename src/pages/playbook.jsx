import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { getTrack } from "../lib/tracks.js";
import { loadQuiz, findQuestion, useLearning } from "../lib/learning.js";
import { tactics, trackNotes } from "../data/learning/playbook.js";
import { trapTypes } from "../data/learning/traps.js";

// One official sample question used as a demo: answer it, then see the key.
function Demo({ demo }) {
  const [track, exam, num] = demo;
  const [q, setQ] = useState(null);
  const [pick, setPick] = useState([]);
  const [shown, setShown] = useState(false);
  useEffect(() => { loadQuiz(track).then((qs) => setQ(findQuestion(qs, exam, num) || null)).catch(() => setQ(null)); }, [track, exam, num]);
  if (!q) return null;
  const toggle = (id) => !shown && setPick((p) => (q.multi ? (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]) : [id]));
  return (
    <div className="stack" style={{ gap: 8 }}>
      <span className="mu sm">Try it — {getTrack(track).shortName}, sample exam {exam}, question {num}</span>
      <p className="qt" style={{ fontSize: 15 }}>{q.text}</p>
      <div className="optg">
        {q.options.map((o) => {
          const right = q.correct.includes(o.id), sel = pick.includes(o.id);
          return (
            <button key={o.id} className={`opt${shown ? (right ? " right" : sel ? " wrong" : "") : sel ? " sel" : ""}`} onClick={() => toggle(o.id)} disabled={shown}>
              <span className="key">{o.id}</span><span className="tx">{o.text}</span>
              {shown && right && <Check className="i ok" />}{shown && sel && !right && <X className="i bad" />}
            </button>
          );
        })}
      </div>
      <button className="btn" style={{ alignSelf: "flex-start" }} onClick={() => setShown((s) => !s)}>{shown ? "Hide the answer" : pick.length ? "Check" : "Show the answer"}</button>
      {shown && <div className="callout"><span className="lbl">Official explanation</span><div className="t">{q.explanation}</div></div>}
    </div>
  );
}

// Exam technique playbook: tactics, the trap types behind wrong answers, and track notes.
export default function Playbook() {
  const { trapTally } = useLearning();
  const [open, setOpen] = useState(null);
  const caught = trapTypes.map((t) => ({ ...t, n: trapTally?.[t.id] || 0 })).sort((a, b) => b.n - a.n);
  const anyCaught = caught.some((t) => t.n > 0);

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Exam technique playbook</span>
        <h2>How to read and answer exam questions</h2>
        <span className="mu sm">Twelve tactics, each shown on a real sample question. They help you read questions well — they don't replace knowing the syllabus.</span>
      </div>

      <div className="tbl">
        {tactics.map((t, i) => (
          <div key={t.id} className="pbk">
            <button className="chr" onClick={() => setOpen(open === t.id ? null : t.id)} aria-expanded={open === t.id}>
              <span className="num">{i + 1}</span>
              <div className="tx"><b>{t.title}</b><span>{t.rule}</span></div>
            </button>
            {open === t.id && (
              <div className="isec">
                <p className="sm" style={{ lineHeight: 1.6 }}><b>Why it works:</b> {t.why}</p>
                {t.demo && <Demo demo={t.demo} />}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>The traps behind wrong answers</h2>
      <span className="mu sm">
        Wrong options follow a few patterns. In practice and review, CTFL Sample Exam A shows which trap each wrong answer sets.
        {anyCaught ? " Below, the traps that have caught you so far." : " Your tally appears here once you've practised."}
      </span>
      <div className="g2">
        {caught.map((t) => (
          <div key={t.id} className="tile">
            <div className="crow"><b>{t.title}</b>{t.n > 0 && <span className="chip bad push">caught you {t.n}×</span>}</div>
            <span className="mu sm">{t.desc}</span>
            <span className="sm"><b>Tip:</b> {t.tip}</span>
          </div>
        ))}
      </div>

      <h2>Track notes</h2>
      <div className="g2">
        {trackNotes.map((n) => (
          <div key={n.track} className="tile">
            <div className="crow"><span className="dot" style={{ "--h": getTrack(n.track).accent }} /><b>{n.title}</b></div>
            <ul className="sm" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>{n.notes.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
      <Link className="btn pri" style={{ alignSelf: "flex-start" }} to="/ctflv4-quiz">Practise on CTFL Sample Exam A</Link>
    </div>
  );
}
