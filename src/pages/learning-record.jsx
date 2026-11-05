import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { Hint, Meter, pct } from "../components/ui.jsx";
import { CopyButton } from "../components/Blocks.jsx";
import { LevelChip } from "../components/LearnUI.jsx";
import { tracks } from "../lib/tracks.js";
import { useLearning, loadTrackData, pathProgress, levelLabel, todayKey } from "../lib/learning.js";
import { paths } from "../data/learning/paths.js";
import { exercises } from "../data/learning/exercises.js";
import { areas } from "../data/learning/selfcheck.js";
import { getRole } from "../data/learning/roles.js";

// A private overview of everything studied on this site, with a plain-text summary to copy.
export default function LearningRecord() {
  const { exercisesDone, selfCheck, level, role } = useLearning();
  const [totals, setTotals] = useState({});

  useEffect(() => {
    let alive = true;
    for (const t of tracks) {
      loadTrackData(t.id).then((d) => alive && setTotals((x) => ({ ...x, [t.id]: d.chapters.reduce((n, c) => n + c.sections.length, 0) }))).catch(() => {});
    }
    return () => { alive = false; };
  }, []);

  const trackRows = tracks.map((t) => ({ t, studied: t.progress.getStudied().size, total: totals[t.id] })).filter((r) => r.studied > 0);
  const pathRows = paths.map((p) => ({ p, ...pathProgress(p) })).filter((r) => r.done > 0);
  const doneEx = exercises.filter((e) => exercisesDone.includes(e.id));
  const sectionsStudied = trackRows.reduce((n, r) => n + r.studied, 0);
  const myRole = getRole(role);

  const summary = [
    `My learning record — ISTQB Hub (self-reported study activity), ${todayKey()}`,
    `Sections studied: ${sectionsStudied}`,
    ...trackRows.map((r) => `- ${r.t.title}: ${r.studied}${r.total ? `/${r.total}` : ""} sections`),
    `Topic paths: ${pathRows.filter((r) => r.done === r.total).length} completed, ${pathRows.filter((r) => r.done < r.total).length} in progress`,
    ...pathRows.map((r) => `- ${r.p.title}: ${r.done}/${r.total} steps`),
    `Hands-on exercises done: ${doneEx.length}/${exercises.length}`,
    ...doneEx.map((e) => `- ${e.title}`),
    ...(selfCheck ? [`Self-check (${selfCheck.date}): ` + areas.map((a) => `${a.title} ${levelLabel(selfCheck.areas[a.id]?.level || "beginner")}`).join(", ")] : []),
  ].join("\n");

  const empty = !trackRows.length && !pathRows.length && !doneEx.length && !selfCheck;

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">My learning record</span>
        <h2>What you've learned here</h2>
        <span className="mu sm">Kept in this browser only. Copy the summary to share it — for a 1:1, a review or your own notes.</span>
      </div>
      <Hint icon={Info}>This is a self-reported record of study activity on this site, not a certificate or an assessment.</Hint>

      {empty ? (
        <div className="boxc"><div className="isec">
          <b>Nothing recorded yet</b>
          <span className="mu sm">Study a section, follow a topic path, finish an exercise or take the self-check — it all shows up here.</span>
          <Link className="btn pri" style={{ alignSelf: "flex-start" }} to="/explore">Find something to learn</Link>
        </div></div>
      ) : (
        <>
          <div className="stats">
            <div><b>{sectionsStudied}</b><span className="mu">sections studied</span></div>
            <div><b>{pathRows.filter((r) => r.done === r.total).length}<span className="mu">/{paths.length}</span></b><span className="mu">paths completed</span></div>
            <div><b>{doneEx.length}<span className="mu">/{exercises.length}</span></b><span className="mu">exercises done</span></div>
          </div>

          {(level || myRole) && (
            <div className="crow wrap sm">
              {level && <><span className="mu">Level:</span><LevelChip level={level} /></>}
              {myRole && <><span className="mu">Role:</span><span className="chip">{myRole.title}</span></>}
            </div>
          )}

          {trackRows.length > 0 && (
            <div className="boxc"><div className="isec">
              <span className="lbl">Tracks</span>
              {trackRows.map((r) => (
                <Link key={r.t.id} to={`/track/${r.t.id}`} className="crow sm">
                  <span className="dot" style={{ "--h": r.t.accent }} /><span className="ell">{r.t.title}</span>
                  <Meter value={r.total ? pct(r.studied, r.total) : 0} /><span className="mu">{r.studied}{r.total ? `/${r.total}` : ""}</span>
                </Link>
              ))}
            </div></div>
          )}

          {pathRows.length > 0 && (
            <div className="boxc"><div className="isec">
              <span className="lbl">Topic paths</span>
              {pathRows.map((r) => (
                <Link key={r.p.id} to={`/path?p=${r.p.id}&step=${(r.next ?? 0) + 1}`} className="crow sm">
                  <span className="ell">{r.p.title}</span><Meter value={pct(r.done, r.total)} /><span className="mu">{r.done}/{r.total}</span>
                </Link>
              ))}
            </div></div>
          )}

          {doneEx.length > 0 && (
            <div className="boxc"><div className="isec">
              <span className="lbl">Exercises done</span>
              <ul className="sm" style={{ margin: 0, paddingLeft: 18 }}>{doneEx.map((e) => <li key={e.id}>{e.title}</li>)}</ul>
            </div></div>
          )}

          {selfCheck && (
            <div className="boxc"><div className="isec">
              <span className="lbl">Self-check · {selfCheck.date}</span>
              <div className="crow wrap" style={{ gap: 6 }}>
                {areas.map((a) => <span key={a.id} className="chip">{a.title}: {levelLabel(selfCheck.areas[a.id]?.level || "beginner")}</span>)}
              </div>
            </div></div>
          )}

          <div className="codeb">
            <div className="crow codeh">
              <span className="sid">Summary (plain text)</span>
              <span className="push"><CopyButton text={summary} label="Copy summary" /></span>
            </div>
            <pre><code>{summary}</code></pre>
          </div>
        </>
      )}
    </div>
  );
}
