import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, X } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { antipatterns, areas } from "../data/learning/antipatterns.js";

// "Spot it": a team description, pick the anti-pattern (three choices).
function SpotIt() {
  const rounds = useMemo(() => antipatterns.map((a) => {
    const others = antipatterns.filter((o) => o.id !== a.id).sort(() => Math.random() - 0.5).slice(0, 2);
    return { a, choices: [a, ...others].sort(() => Math.random() - 0.5) };
  }).sort(() => Math.random() - 0.5), []);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const r = rounds[i % rounds.length];
  return (
    <div className="boxc">
      <div className="isec">
        <span className="lbl">Spot it · {(i % rounds.length) + 1} of {rounds.length}</span>
        <p className="extx">“{r.a.spot}”</p>
        <div className="crow wrap">
          {r.choices.map((c) => (
            <button key={c.id} className={`btn${pick ? (c.id === r.a.id ? " okb" : c.id === pick ? " badb" : "") : ""}`} onClick={() => !pick && setPick(c.id)}>
              {pick && c.id === r.a.id && <Check className="i" />}{pick === c.id && c.id !== r.a.id && <X className="i" />}{c.title}
            </button>
          ))}
        </div>
        {pick && <button className="btn pri" style={{ alignSelf: "flex-start" }} onClick={() => { setI(i + 1); setPick(null); }}>Next</button>}
      </div>
    </div>
  );
}

// Testing anti-patterns grouped by area; #<id> deep-links to one entry.
export default function AntiPatterns() {
  const { hash } = useLocation();
  useEffect(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }); }, [hash]);
  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Anti-patterns</span>
        <h2>Testing habits that backfire — and what to do instead</h2>
        <span className="mu sm">Each one: the symptom you'd notice, why it happens, the harm, and the fix.</span>
      </div>
      <SpotIt />
      {areas.map((area) => (
        <div key={area} className="stack" style={{ gap: 10 }}>
          <h2>{area}</h2>
          {antipatterns.filter((a) => a.area === area).map((a) => (
            <div key={a.id} id={a.id} className={`boxc${hash === `#${a.id}` ? " focus" : ""}`}>
              <div className="isec"><b className="nt2">{a.title}</b><span className="mu sm">{a.symptom}</span></div>
              <div className="isec">
                <span className="sm"><b>Why it happens:</b> {a.cause}</span>
                <span className="sm"><b>The harm:</b> {a.harm}</span>
                <div className="callout ex"><span className="lbl">The fix</span><p>{a.fix}</p></div>
              </div>
              <div className="isec"><SectionRefs refs={a.links.map(([t, s]) => ({ track: t, section: s }))} /></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
