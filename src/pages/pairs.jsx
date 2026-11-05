import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, X, Shuffle } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { getTrack } from "../lib/tracks.js";
import { pairs } from "../data/learning/pairs.js";

const TRACKS = [...new Set(pairs.flatMap((p) => p.links.map(([t]) => t)))];

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// "Which is it?" drill over the drill items of the given pairs.
function Drill({ list }) {
  const items = useMemo(() => shuffle(list.flatMap((p) => p.drill.map((d) => ({ ...d, pair: p })))), [list]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);
  useEffect(() => { setI(0); setPick(null); setScore(0); }, [items]);
  if (!items.length) return null;
  const done = i >= items.length;
  const it = items[Math.min(i, items.length - 1)];
  const choose = (k) => { if (pick) return; setPick(k); if (k === it.answer) setScore((s) => s + 1); };
  return (
    <div className="boxc">
      <div className="isec">
        <div className="crow"><Shuffle className="i mu" /><span className="lbl">Which is it? · {done ? items.length : i + 1} of {items.length}</span><span className="mu sm push">{score} right</span></div>
        {done ? (
          <>
            <b className="nt2">{score} of {items.length} right</b>
            <button className="btn" style={{ alignSelf: "flex-start" }} onClick={() => { setI(0); setPick(null); setScore(0); }}>Go again</button>
          </>
        ) : (
          <>
            <p className="extx">{it.text}</p>
            <div className="crow wrap">
              {["a", "b"].map((k) => (
                <button key={k} className={`btn${pick ? (k === it.answer ? " okb" : k === pick ? " badb" : "") : ""}`} onClick={() => choose(k)}>
                  {pick && k === it.answer && <Check className="i" />}{pick === k && k !== it.answer && <X className="i" />}{it.pair[k]}
                </button>
              ))}
            </div>
            {pick && (
              <>
                <span className="sm">{it.pair.rule}</span>
                <button className="btn pri" style={{ alignSelf: "flex-start" }} onClick={() => { setI(i + 1); setPick(null); }}>Next</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// Confusable pairs: a rule to tell each pair apart, an example of each side, and a drill.
export default function Pairs() {
  const [params] = useSearchParams();
  const [track, setTrack] = useState(null);
  const focus = params.get("p");
  const list = track ? pairs.filter((p) => p.links.some(([t]) => t === track)) : pairs;
  useEffect(() => { if (focus) document.getElementById(`pair-${focus}`)?.scrollIntoView({ block: "start" }); }, [focus]);

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Confusable pairs</span>
        <h2>Terms that are easy to mix up</h2>
        <span className="mu sm">Each pair has one rule to tell them apart. The drill scenarios are written for this site — practice, not exam questions.</span>
      </div>
      <div className="crow wrap" role="radiogroup" aria-label="Filter by track" style={{ gap: 6 }}>
        <button role="radio" aria-checked={!track} className={`chip${!track ? " on" : ""}`} onClick={() => setTrack(null)}>All ({pairs.length})</button>
        {TRACKS.map((t) => (
          <button key={t} role="radio" aria-checked={track === t} className={`chip${track === t ? " on" : ""}`} onClick={() => setTrack(t)}>{getTrack(t).shortName}</button>
        ))}
      </div>
      <Drill list={list} />
      {list.map((p) => (
        <div key={p.id} id={`pair-${p.id}`} className={`boxc${p.id === focus ? " focus" : ""}`}>
          <div className="isec">
            <b className="nt2">{p.a} <span className="mu">vs</span> {p.b}</b>
            <p className="extx">{p.rule}</p>
            <div className="g2">
              <div className="callout"><span className="lbl">{p.a}</span><p>{p.exA}</p></div>
              <div className="callout"><span className="lbl">{p.b}</span><p>{p.exB}</p></div>
            </div>
          </div>
          <div className="isec"><SectionRefs refs={p.links.map(([t, s]) => ({ track: t, section: s }))} /></div>
        </div>
      ))}
    </div>
  );
}
