import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Timer, ArrowLeft } from "lucide-react";
import { getTrack, legacyProgress } from "../lib/tracks.js";
import Shell from "./Shell.jsx";
import { STEP_ICON, STEP_SHORT, pct, passMark } from "./ui.jsx";
import { useLearning, isLearningMode } from "../lib/learning.js";

// Track landing page (/track/:id): exam facts, progress stats, the 5-step path and,
// for CT-AI, the superseded v1.0 pages — all driven by src/lib/tracks.js.
export default function TrackPage() {
  const { id } = useParams();
  const track = getTrack(id);
  const [chapters, setChapters] = useState(null);
  const learning = isLearningMode(useLearning());

  useEffect(() => {
    let alive = true;
    setChapters(null);
    if (track) track.loadData().then((m) => alive && setChapters(m.chapters)).catch(() => {});
    return () => { alive = false; };
  }, [id]);

  if (!track) {
    return (
      <Shell>
        <div className="page narrow">
          <div className="empty">
            <b>Unknown track “{id}”.</b>
            <Link className="btn" to="/"><ArrowLeft className="i" />Back to the dashboard</Link>
          </div>
        </div>
      </Shell>
    );
  }

  const studied = track.progress.getStudied();
  const best = track.progress.getBestExam();
  const totalSections = chapters ? chapters.reduce((n, ch) => n + ch.sections.length, 0) : null;
  const studiedCount = chapters
    ? chapters.reduce((n, ch) => n + ch.sections.filter((s) => studied.has(s.id)).length, 0)
    : studied.size;
  const legacyBest = track.legacy ? legacyProgress.getBestExam() : null;
  const { questions, points, note } = track.exam;
  const pass = passMark(points);
  const quiz = track.steps[4].path;

  return (
    <Shell trackId={track.id}>
      <div className="page">
        <div className="thead">
          <span className="dot" style={{ "--h": track.accent }} />
          <div className="stack" style={{ gap: 4 }}>
            <span className="lbl">{track.org} · {track.level} · {track.badge}</span>
            <h2>{track.title}</h2>
            <span className="mu sm">{track.blurb}</span>
            <span className="mu sm">
              {chapters ? `${chapters.length} chapters · ` : ""}Prerequisite: {track.prerequisite}
            </span>
          </div>
        </div>

        {!learning && <div className="ticket">
          <div className="stack" style={{ gap: 4 }}>
            <span className="lbl">The exam</span>
            <b className="nt2">{questions} questions{points !== questions ? ` (${points} points)` : ""} · {track.exam.minutes || 60} min · pass at {pass}</b>
            <span className="mu sm">{note}</span>
          </div>
          <Link className="btn pri" to={`/${quiz}`}><Timer className="i" />Take a mock exam</Link>
        </div>}

        <div className="stats">
          <div>
            <b>{studiedCount}{totalSections != null && <span className="mu">/{totalSections}</span>}</b>
            <span className="mu">sections studied</span>
          </div>
          {!learning && <div>
            {best ? (
              <>
                <b className={best.score >= passMark(best.total) ? "ok" : "bad"}>{pct(best.score, best.total)}%</b>
                <span className="mu">best mock exam ({best.score}/{best.total} pts)</span>
              </>
            ) : (
              <><b className="mu">—</b><span className="mu">no mock exam yet</span></>
            )}
          </div>}
          {!learning && <div>
            <b>{pass}<span className="mu">/{points}</span></b>
            <span className="mu">points to pass (65%)</span>
          </div>}
        </div>

        <div className="stack" style={{ gap: 8 }}>
          <span className="lbl">Study path — follow the steps in order</span>
          <div className="stepper">
            {track.steps.map((s, i) => {
              if (learning && i === 2) return null;
              const Icon = STEP_ICON[STEP_SHORT[i]];
              return (
                <Link key={s.path} to={`/${s.path}`} className={`sc${i === 0 && studiedCount === 0 ? " on" : ""}`}>
                  <div className="crow"><span className="num">{s.step}</span><Icon className="i mu" /></div>
                  <b>{learning && i === 4 ? "Practice questions" : s.title}</b>
                  <span className="mu sm">{s.desc}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {track.legacy && (
          <div className="boxc">
            <div className="isec">
              <span className="lbl">{track.legacy.label}</span>
              <span className="mu sm">
                {track.legacy.note}
                {legacyBest && ` Best v1 mock: ${pct(legacyBest.score, legacyBest.total)}%.`}
              </span>
              <div className="g4">
                {track.legacy.pages.map((p) => (
                  <Link key={p.path} to={`/${p.path}`} className="stp">
                    <div className="tx"><b>{p.title}</b><span>{p.desc}</span></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}
