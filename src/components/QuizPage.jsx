import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Timer, Play, Flag, X, Check, Grid3x3, ChevronUp, ChevronLeft, ChevronRight, ListChecks, RotateCcw, BookOpen, Info, Trophy } from "lucide-react";
import { KChip, Meter, Hint, pct, passMark } from "./ui.jsx";

// Official rules shared by every track: 60 min by default (examMinutes overrides, e.g. advanced-level 120 min),
// +25% non-native, pass = 65% of points rounded up.
const EXAM_MINUTES = 60;
const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const sumPoints = (qs) => qs.reduce((s, q) => s + q.points, 0);
const chaptersOf = (qs) => [...new Set(qs.map((q) => q.chapter))].sort((a, b) => a - b);

function Toggle({ checked, onChange, children }) {
  return (
    <label className="tg">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="tgl" />
      <span>{children}</span>
    </label>
  );
}

function Ticket({ label, title, sub, nums }) {
  return (
    <div className="ticket">
      <div className="stack" style={{ gap: 4 }}>
        <span className="lbl">{label}</span>
        <b className="nt2">{title}</b>
        <span className="mu sm">{sub}</span>
      </div>
      <div className="tk">{nums.map(([n, l]) => <div key={l}><b>{n}</b><span className="mu">{l}</span></div>)}</div>
    </div>
  );
}

// Step 5 for every track: check-in page, practice mode, timed exam simulation, result and
// review. Track rules arrive as props: examSets (CTFL A–D; one set elsewhere — CT-QDO's is
// the main questions only), practicePools, and `record` (omitted = practice only, CT-AI v1.x).
export default function QuizPage({
  questions, label, subtitle, record, getBest, examSets = [], practicePools, rules, rulesNote, examNote, learnPath,
  examMinutes = EXAM_MINUTES,
}) {
  const pools = practicePools || [{ key: "all", label: "All", questions }];
  const practiceOnly = !record;
  const [mode, setMode] = useState("start"); // start | quiz | result
  const [kind, setKind] = useState("practice"); // practice | exam | review
  const [setKey, setSetKey] = useState(examSets[0]?.key);
  const [poolKey, setPoolKey] = useState(pools[0].key);
  const [filter, setFilter] = useState(0);
  const [extraTime, setExtraTime] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [revealed, setRevealed] = useState({});
  const [gridOpen, setGridOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [result, setResult] = useState(null);

  const set = examSets.find((s) => s.key === setKey);
  const examQs = set?.questions || [];
  const examTotal = sumPoints(examQs);
  const pass = passMark(examTotal);
  const pool = pools.find((p) => p.key === poolKey);
  const practiceQs = pool.questions.filter((q) => filter === 0 || q.chapter === filter);
  const list = kind === "practice" ? practiceQs : examQs;
  const q = list[current];
  const minutes = Math.round(examMinutes * (extraTime ? 1.25 : 1));
  const best = getBest?.();

  const isCorrect = (qq) => {
    const ua = selected[qq.id] || [];
    return qq.correct.length === ua.length && qq.correct.every((c) => ua.includes(c));
  };
  const answered = (qq) => (selected[qq.id] || []).length > 0;
  const unanswered = examQs.filter((qq) => !answered(qq));

  useEffect(() => { window.scrollTo(0, 0); setGridOpen(false); }, [mode]);
  useEffect(() => {
    if (mode !== "quiz") return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [mode]);

  const finishExam = (auto = false) => {
    if (!auto && unanswered.length > 0 && !confirm) { setConfirm(true); setGridOpen(false); return; }
    const score = sumPoints(examQs.filter(isCorrect));
    const prev = getBest();
    record(score, examTotal);
    setResult({ score, answered: examQs.length - unanswered.length, prev, newBest: !prev || score > prev.score });
    setConfirm(false);
    setTimeLeft(null);
    setMode("result");
  };

  useEffect(() => {
    if (kind !== "exam" || mode !== "quiz" || timeLeft === null) return;
    if (timeLeft <= 0) { finishExam(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [kind, mode, timeLeft]);

  const start = (k) => {
    setKind(k); setCurrent(0); setConfirm(false); setGridOpen(false);
    if (k !== "review") { setSelected({}); setRevealed({}); }
    if (k === "exam") setTimeLeft(minutes * 60);
    if (k === "review") setRevealed(Object.fromEntries(examQs.map((qq) => [qq.id, true])));
    setMode("quiz");
  };

  const goTo = (i) => { if (i >= 0 && i < list.length) { setCurrent(i); setGridOpen(false); } };

  // ── check-in ──
  if (mode === "start") {
    const chapters = chaptersOf(pool.questions);
    const practiceCard = (
      <div className="boxc"><div className="isec">
        <b>Practice mode</b>
        <span className="mu sm">Submit each question to see the official explanation immediately.</span>
        {pools.length > 1 && (
          <>
            <span className="lbl">Question set</span>
            <div className="crow wrap" style={{ gap: 6 }}>
              {pools.map((p) => (
                <button key={p.key} className={`chip${p.key === poolKey ? " on" : ""}`} aria-pressed={p.key === poolKey}
                  onClick={() => { setPoolKey(p.key); setFilter(0); }}>{p.label} · {p.questions.length}</button>
              ))}
            </div>
          </>
        )}
        <span className="lbl">Chapter</span>
        <div className="crow wrap" style={{ gap: 6 }}>
          <button className={`chip${filter === 0 ? " on" : ""}`} aria-pressed={filter === 0} onClick={() => setFilter(0)}>All</button>
          {chapters.map((ch) => (
            <button key={ch} className={`chip${filter === ch ? " on" : ""}`} aria-pressed={filter === ch} onClick={() => setFilter(ch)}>
              Ch {ch} · {pool.questions.filter((qq) => qq.chapter === ch).length}
            </button>
          ))}
        </div>
        <div><button className={`btn${practiceOnly ? " pri" : ""}`} disabled={!practiceQs.length} onClick={() => start("practice")}><Play className="i" />Start practice · {practiceQs.length} questions</button></div>
      </div></div>
    );
    const rulesCard = (
      <div className="boxc"><div className="isec">
        <span className="lbl">{practiceOnly ? "Exam information" : "Official exam rules"}</span>
        <div className="rules">{rules.map((r) => <div key={r.label}><span className="mu">{r.label}</span><b>{r.value}</b></div>)}</div>
        {rulesNote && <p className="sm mu">{rulesNote}</p>}
      </div></div>
    );

    return (
      <div className="page">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">{label} · {practiceOnly ? "Practice" : "Exam check-in"}</span>
          <span className="mu sm">{subtitle}</span>
        </div>
        {practiceOnly ? (
          <div className="g2a">
            <div className="stack">
              <Ticket label={`Practice · ${label}`} title={`${questions.length} sample questions`} sub="Main set + appendix, with answer rationales"
                nums={[[questions.length, "questions"], ["—", "no timer"]]} />
              <Hint icon={Info}>This quiz has no timed exam and no saved best score. Use it to practise; for a mock exam, use the current syllabus.</Hint>
              {practiceCard}
            </div>
            {rulesCard}
          </div>
        ) : (
          <div className="g2a">
            <div className="stack">
              <Ticket label={`Exam simulation · ${label}`} title={set.label}
                sub={`${best ? `Best mock so far: ${pct(best.score, best.total)}% (${best.score}/${best.total})` : "No mock yet"} · pass mark ${pass}/${examTotal}`}
                nums={[[examQs.length, "questions"], [minutes, "minutes"], [pass, "to pass"], examQs.every((qq) => qq.points === 1) ? [1, "pt each"] : [examTotal, "points"]]} />
              {examSets.length > 1 && (
                <>
                  <span className="lbl">Choose a sample exam</span>
                  <div className="sets" role="radiogroup" aria-label="Sample exam">
                    {examSets.map((s) => (
                      <button key={s.key} role="radio" aria-checked={s.key === setKey} className={`setc${s.key === setKey ? " on" : ""}`} onClick={() => setSetKey(s.key)}>
                        <b>{s.short || s.label}</b>
                        <span className="mu sm">{s.questions.length} questions · {sumPoints(s.questions)} pts</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {examNote && <Hint icon={Info}>{examNote}</Hint>}
              <Toggle checked={extraTime} onChange={setExtraTime}>
                +25% time for non-native speakers{extraTime && <> · <b>60 → 75 min</b></>}
              </Toggle>
              <div className="startbig">
                <button className="btn pri big" onClick={() => start("exam")}><Timer className="i" />Start {examSets.length > 1 ? set.label : "exam simulation"} · {minutes} min</button>
                <span className="mu sm">No feedback until you finish. Leaving the page ends the attempt.</span>
              </div>
            </div>
            <div className="stack" style={{ gap: 12 }}>
              <span className="lbl">Or practise without a timer</span>
              {practiceCard}
              {rulesCard}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── result ──
  if (mode === "result") {
    const { score, answered: done, prev, newBest } = result;
    const passed = score >= pass;
    const byChapter = chaptersOf(examQs).map((ch) => {
      const qs = examQs.filter((qq) => qq.chapter === ch);
      return { ch, got: sumPoints(qs.filter(isCorrect)), max: sumPoints(qs) };
    });
    const weakest = byChapter.reduce((a, b) => (b.got / b.max < a.got / a.max ? b : a));
    return (
      <div className="page narrow">
        <div className="verdict-c">
          <div className="lbl">Exam simulation result — {set.label}</div>
          <div className="crow wrap" style={{ gap: 14, alignItems: "baseline" }}>
            <span className={`big ${passed ? "ok" : "bad"}`}>{passed ? "Pass" : "Not yet"}</span>
            <span className="score">{score} / {examTotal} points · {pct(score, examTotal)}%</span>
          </div>
          <div className="crow wrap sm" style={{ gap: 10 }}>
            <span className="mu">Pass mark {pass} (65%){!passed && ` · ${pass - score} point${pass - score > 1 ? "s" : ""} short`}</span>
            <Meter value={pct(score, examTotal)} pass />
            <span className="mu">{done} of {examQs.length} answered</span>
          </div>
        </div>
        {newBest && (
          <Hint icon={Trophy} tone="ok">
            {prev ? `New best mock — saved in this browser (was ${pct(prev.score, prev.total)}%).` : "First mock exam score — saved in this browser."}
          </Hint>
        )}
        <div className="boxc"><div className="isec">
          <span className="lbl">Breakdown by chapter</span>
          <div className="bk2">
            {byChapter.map(({ ch, got, max }) => (
              <div key={ch} className="stack" style={{ gap: 4 }}>
                <div className="crow sm"><b>Chapter {ch}</b><span className={`push ${got / max < 0.65 ? "bad" : "mu"}`}>{got}/{max} pts</span></div>
                <Meter value={pct(got, max)} />
              </div>
            ))}
          </div>
          <p className="sm mu">Weakest: Chapter {weakest.ch} ({weakest.got}/{weakest.max}). Re-study it in Learn and revisit the Exam Insights.</p>
        </div></div>
        <div className="crow wrap" style={{ gap: 8 }}>
          <button className="btn pri" onClick={() => start("review")}><ListChecks className="i" />Review all answers & explanations</button>
          {learnPath && <Link className="btn" to={`/${learnPath}?ch=${weakest.ch}`}><BookOpen className="i" />Re-study Chapter {weakest.ch}</Link>}
          <button className="btn" onClick={() => { setMode("start"); setSelected({}); setRevealed({}); }}><RotateCcw className="i" />Back to start</button>
        </div>
      </div>
    );
  }

  // ── full-screen quiz: practice, exam, review ──
  const exam = kind === "exam", review = kind === "review";
  const isRevealed = !!revealed[q.id];
  const ua = selected[q.id] || [];
  const doneCount = exam ? examQs.length - unanswered.length : list.filter((qq) => revealed[qq.id]).length;
  const rightCount = list.filter((qq) => revealed[qq.id] && isCorrect(qq)).length;
  const practiceScore = sumPoints(list.filter((qq) => revealed[qq.id] && isCorrect(qq)));
  const practiceMax = sumPoints(list.filter((qq) => revealed[qq.id]));
  const reviewScore = sumPoints(examQs.filter(isCorrect));
  const stateOf = (qq) => (exam ? (answered(qq) ? "a" : "") : revealed[qq.id] ? (isCorrect(qq) ? "r" : "w") : "");

  const toggleAnswer = (optId) => {
    if (isRevealed) return;
    setSelected((prev) => {
      const cur = prev[q.id] || [];
      return { ...prev, [q.id]: q.multi ? (cur.includes(optId) ? cur.filter((x) => x !== optId) : [...cur, optId]) : [optId] };
    });
  };

  const header = exam ? (
    <>
      <b className="ell">{set.label} · Exam simulation</b>
      <span className={`timer${timeLeft < 300 ? " low" : ""}`} role="timer" aria-label="Time left"><Timer className="i" />{fmtTime(Math.max(0, timeLeft ?? 0))}</span>
      <button className="btn" onClick={() => finishExam()}><Flag className="i" />Finish exam</button>
    </>
  ) : review ? (
    <>
      <b className="ell">Review · {set.label}</b>
      <span className="crow sm"><b>{reviewScore} / {examTotal}</b><span className={`chip ${reviewScore >= pass ? "ok" : "bad"}`}>{reviewScore >= pass ? "Pass" : "Not yet"}</span></span>
      <button className="btn" onClick={() => setMode("result")}><X className="i" />Back to result</button>
    </>
  ) : (
    <>
      <b className="ell">Practice · {pool.label} · {filter ? `Ch ${filter}` : "All chapters"}</b>
      <span className="crow sm"><b>Q{current + 1} / {list.length}</b><span className="mu">· score {practiceScore}/{practiceMax}</span></span>
      <button className="btn" onClick={() => setMode("start")}><X className="i" />Back to start</button>
    </>
  );

  const meta = (
    <div className="qmeta crow wrap" style={{ gap: 6 }}>
      {q.exam && <span className="chip acc">Exam {q.exam} · Q{q.num}</span>}
      {q.appendix && <span className="chip acc">Appendix {q.label}</span>}
      {q.isAppendix && <span className="chip acc">Appendix</span>}
      <span className="chip">Ch {q.chapter}</span>
      <KChip level={q.level} />
      {q.lo && <span className="chip">LO {q.lo}</span>}
      <span className="chip">{q.points} pt{q.points > 1 ? "s" : ""}</span>
      {q.multi && <span className="chip warn">Select two</span>}
      {isRevealed && <span className={`chip ${isCorrect(q) ? "ok" : "bad"}`}>{isCorrect(q) ? "Correct" : "Incorrect"}</span>}
    </div>
  );

  const options = (
    <div className="optg" role={q.multi ? "group" : "radiogroup"} aria-label="Answer options">
      {q.options.map((opt) => {
        const sel = ua.includes(opt.id), right = q.correct.includes(opt.id);
        const cls = isRevealed ? (right ? " right" : sel ? " wrong" : "") : sel ? " sel" : "";
        return (
          <button key={opt.id} className={`opt${cls}`} onClick={() => toggleAnswer(opt.id)} disabled={isRevealed}
            role={q.multi ? "checkbox" : "radio"} aria-checked={sel}>
            <span className={`key${q.multi ? " sq" : ""}`}>{q.multi && sel && !isRevealed ? "✓" : opt.id}</span>
            <span className="tx">{opt.text}</span>
            {isRevealed && right && <span className="mk ok"><Check className="i" /></span>}
            {isRevealed && sel && !right && <span className="mk bad"><X className="i" /></span>}
          </button>
        );
      })}
    </div>
  );

  const explanation = isRevealed && (
    <div className="callout">
      <span className="lbl">Official explanation</span>
      <div className="t">{q.explanation}</div>
    </div>
  );

  const counter = exam ? `${doneCount} answered` : review ? `${rightCount} right · ${list.length - rightCount} wrong` : `${doneCount} answered`;

  return (
    <div className="exam" role="dialog" aria-label={exam ? "Exam simulation" : review ? "Answer review" : "Practice"}>
      <header className="tb">{header}</header>
      <div className="exam-main">
        <div className={`exam-body${review ? " split" : ""}`}>
          <div className="stack" style={{ gap: 16 }}>
            {meta}
            <p className="qt">{q.text}</p>
            {options}
            {q.multi && !isRevealed && <span className="mu sm">{ua.length} of 2 selected. Both must be right to score.</span>}
            {kind === "practice" && !isRevealed && (
              <div><button className="btn pri" disabled={!ua.length} onClick={() => setRevealed((r) => ({ ...r, [q.id]: true }))}>
                {q.multi ? `Submit (${ua.length}/2 selected)` : "Submit answer"}
              </button></div>
            )}
            {!review && explanation}
          </div>
          {review && <div className="stack" style={{ gap: 12 }}>{explanation}</div>}
        </div>
      </div>
      <footer className="exf">
        <button className="btn" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous question">
          <ChevronLeft className="i" /><span className="lbl-t">Previous</span>
        </button>
        <button className="qcount" onClick={() => { setGridOpen((g) => !g); setConfirm(false); }} aria-expanded={gridOpen} aria-label="All questions">
          <Grid3x3 className="i" /><b>Q{current + 1}</b><span className="mu">/ {list.length}</span><span className="mu">· {counter}</span><ChevronUp className="i mu" />
        </button>
        <button className="segbar" onClick={() => setGridOpen(true)} aria-label="Open question grid" tabIndex={-1}>
          {list.map((qq, i) => <i key={qq.id} className={`${stateOf(qq)}${i === current ? " c" : ""}`} />)}
        </button>
        <button className="btn pri" onClick={() => goTo(current + 1)} disabled={current === list.length - 1} aria-label="Next question">
          <span className="lbl-t">Next</span><ChevronRight className="i" />
        </button>

        {gridOpen && (
          <>
            <button className="scrim" style={{ zIndex: 55 }} aria-label="Close question grid" onClick={() => setGridOpen(false)} />
            <div className="qpop" role="dialog" aria-label="All questions">
              <div className="grab" />
              <div className="crow"><b>All questions</b><span className="mu sm push">{exam ? `${doneCount} answered · ${list.length - doneCount} to go` : counter}</span></div>
              <div className="qdots">
                {list.map((qq, i) => (
                  <button key={qq.id} className={`qd ${stateOf(qq)}${i === current ? " c" : ""}`} onClick={() => goTo(i)} aria-label={`Question ${i + 1}`}>{i + 1}</button>
                ))}
              </div>
              <div className="crow wrap sm mu" style={{ gap: 12 }}>
                {exam ? (
                  <><span className="crow" style={{ gap: 5 }}><i className="lg a" />Answered</span><span className="crow" style={{ gap: 5 }}><i className="lg" />Not yet</span></>
                ) : (
                  <><span className="crow" style={{ gap: 5 }}><i className="lg r" />Right</span><span className="crow" style={{ gap: 5 }}><i className="lg w" />Wrong</span></>
                )}
                <span className="crow" style={{ gap: 5 }}><i className="lg c" />Current</span>
              </div>
            </div>
          </>
        )}

        {confirm && (
          <>
            <button className="scrim" style={{ zIndex: 55 }} aria-label="Keep answering" onClick={() => setConfirm(false)} />
            <div className="confirm" role="alertdialog" aria-label="Unanswered questions">
              <div className="grab" />
              <div className="stack" style={{ gap: 2 }}>
                <b>{unanswered.length} question{unanswered.length > 1 ? "s are" : " is"} unanswered</b>
                <span className="mu sm">Unanswered questions score 0. You have {fmtTime(Math.max(0, timeLeft ?? 0))} left.</span>
              </div>
              <span className="crow push" style={{ gap: 8 }}>
                <button className="btn" onClick={() => { setConfirm(false); goTo(examQs.indexOf(unanswered[0])); }}>Go to first unanswered</button>
                <button className="btn pri" onClick={() => finishExam(true)}><Flag className="i" />Finish exam</button>
              </span>
            </div>
          </>
        )}
      </footer>
    </div>
  );
}
