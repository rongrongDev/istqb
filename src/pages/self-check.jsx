import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, RotateCcw, Info } from "lucide-react";
import { Hint, Meter, pct } from "../components/ui.jsx";
import { PathCard, LevelChip } from "../components/LearnUI.jsx";
import { updateLearning, useLearning, levelLabel, levelRank, todayKey } from "../lib/learning.js";
import { areas, placement } from "../data/learning/selfcheck.js";
import { getPath } from "../data/learning/paths.js";

const QUESTIONS = areas.flatMap((a) => a.questions.map((q, i) => ({ ...q, area: a, n: i + 1 })));
const KEYS = ["a", "b", "c", "d"];

// Overall suggestion: the level reached in most areas; ties go to the lower level.
function suggestLevel(byArea) {
  const counts = { beginner: 0, practitioner: 0, expert: 0 };
  Object.values(byArea).forEach((r) => counts[r.level]++);
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || levelRank(a[0]) - levelRank(b[0]))[0][0];
}

function Result({ result, onRetake }) {
  const { level } = useLearning();
  // Weakest areas first; at most three path suggestions.
  const weak = areas.filter((a) => result.areas[a.id].level !== "expert")
    .sort((a, b) => result.areas[a.id].right - result.areas[b.id].right);
  const recommended = [...new Set(weak.map((a) => a.path))].slice(0, 3);
  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Self-check result · {result.date}</span>
        <h2>Here's where to start</h2>
        <span className="mu sm">A rough guide from {QUESTIONS.length} questions — not a grade. Retake it any time.</span>
      </div>
      <div className="tbl">
        {areas.map((a) => {
          const r = result.areas[a.id];
          return (
            <div key={a.id} className="chr">
              <div className="tx"><b>{a.title}</b><span>{r.right} of 3 right</span></div>
              <Meter value={pct(r.right, 3)} />
              <LevelChip level={r.level} />
            </div>
          );
        })}
      </div>
      <div className="boxc">
        <div className="isec">
          <span className="lbl">Suggested overall level</span>
          <div className="crow wrap"><LevelChip level={result.suggested} /><span className="mu sm">Used to put suitable paths and concepts first.</span></div>
          <button className="btn pri" style={{ alignSelf: "flex-start" }} disabled={level === result.suggested}
            onClick={() => updateLearning({ level: result.suggested })}>
            <Check className="i" />{level === result.suggested ? `Level set to ${levelLabel(result.suggested)}` : `Use ${levelLabel(result.suggested)} as my level`}
          </button>
        </div>
      </div>
      {weak.length > 0 && (
        <>
          <h2>Recommended paths</h2>
          <div className="g3">{recommended.map((id) => <PathCard key={id} path={getPath(id)} />)}</div>
        </>
      )}
      <div className="crow wrap">
        <button className="btn" onClick={onRetake}><RotateCcw className="i" />Retake</button>
        <Link className="btn pri push" to="/explore">Go to Explore <ArrowRight className="i" /></Link>
      </div>
    </div>
  );
}

// "Where do I start?" — 6 areas × 3 original questions of rising difficulty.
export default function SelfCheck() {
  const { selfCheck } = useLearning();
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [picked, setPicked] = useState(null);
  const [showResult, setShowResult] = useState(!!selfCheck);

  const q = QUESTIONS[i];
  const answered = answers[i] != null;
  const result = useMemo(() => selfCheck, [selfCheck]);

  if (showResult && result) return <Result result={result} onRetake={() => { setI(0); setAnswers({}); setPicked(null); setShowResult(false); }} />;

  const submit = () => setAnswers((a) => ({ ...a, [i]: picked }));
  const finish = () => {
    const byArea = {};
    for (const a of areas) {
      const right = QUESTIONS.reduce((n, qq, k) => n + (qq.area.id === a.id && answers[k] === qq.correct ? 1 : 0), 0);
      byArea[a.id] = { right, level: placement(right) };
    }
    updateLearning({ selfCheck: { date: todayKey(), areas: byArea, suggested: suggestLevel(byArea) } });
    setShowResult(true);
  };
  const next = () => { setPicked(null); if (i < QUESTIONS.length - 1) setI(i + 1); else finish(); };

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Where do I start? · Question {i + 1} of {QUESTIONS.length}</span>
        <Meter value={pct(i + (answered ? 1 : 0), QUESTIONS.length)} />
      </div>
      {i === 0 && !answered && (
        <Hint icon={Info}>A quick self-check written for this site — not an exam and not official ISTQB questions. If you don't know an answer, pick your best guess — the result is only a starting point.</Hint>
      )}
      <div className="boxc">
        <div className="isec">
          <span className="lbl">{q.area.title}</span>
          <b className="qt">{q.q}</b>
        </div>
        <div className="optg" role="radiogroup" aria-label="Answer options">
          {q.options.map((o, k) => {
            const state = answered ? (k === q.correct ? " right" : k === answers[i] ? " wrong" : "") : picked === k ? " sel" : "";
            return (
              <button key={k} className={`opt${state}`} role="radio" aria-checked={picked === k} disabled={answered} onClick={() => setPicked(k)}>
                <span className="key">{KEYS[k]}</span><span className="tx">{o}</span>
                {answered && k === q.correct && <Check className="i ok" />}
                {answered && k === answers[i] && k !== q.correct && <X className="i bad" />}
              </button>
            );
          })}
        </div>
        {answered && <div className="isec"><div className={`callout ${answers[i] === q.correct ? "ex" : "bad"}`}><span className="lbl">{answers[i] === q.correct ? "Right" : "Not quite"}</span><p>{q.why}</p></div></div>}
      </div>
      <div className="reader-foot">
        {selfCheck && <button className="btn" onClick={() => setShowResult(true)}>See last result</button>}
        <span className="push">
          {answered
            ? <button className="btn pri" onClick={next}>{i < QUESTIONS.length - 1 ? "Next question" : "See my result"}<ArrowRight className="i" /></button>
            : <button className="btn pri" disabled={picked == null} onClick={submit}><Check className="i" />Check answer</button>}
        </span>
      </div>
    </div>
  );
}
