import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { Meter, pct } from "./ui.jsx";
import { getTrack } from "../lib/tracks.js";
import { LEVELS, levelLabel, fitsLevel, pathProgress, sectionLink, useLearning, updateLearning, useSectionTitles, conceptOfTheDay, chapterOf } from "../lib/learning.js";
import { paths, getPath } from "../data/learning/paths.js";
import { getRole } from "../data/learning/roles.js";

export function LevelChip({ level }) {
  return <span className={`chip lvl-${level}`}>{levelLabel(level)}</span>;
}

// Topic path card with progress and a continue/start link.
export function PathCard({ path }) {
  const { level } = useLearning();
  const prog = pathProgress(path);
  const stepNo = (prog.next ?? 0) + 1;
  const fits = fitsLevel(path.level, level);
  return (
    <Link to={`/path?p=${path.id}&step=${stepNo}`} className={`tile${fits ? "" : " dim"}`}>
      <div className="crow wrap"><b className="ell">{path.title}</b><span className="push"><LevelChip level={path.level} /></span></div>
      <span className="mu sm">{path.summary}</span>
      <div className="stack" style={{ gap: 4, marginTop: "auto" }}>
        <div className="crow sm">
          <span className="mu">{prog.done === prog.total ? "Completed" : prog.done ? `Continue at step ${stepNo}` : `${prog.total} steps`}</span>
          <span className="push">{prog.done}/{prog.total}</span>
        </div>
        <Meter value={pct(prog.done, prog.total)} />
      </div>
    </Link>
  );
}

// Paths sorted so the ones that suit the learner's level and role come first.
export function rankedPaths(level, roleId) {
  const role = getRole(roleId);
  const score = (p) => (role?.paths.includes(p.id) ? 0 : 2) + (fitsLevel(p.level, level) ? 0 : 1);
  return [...paths].sort((a, b) => score(a) - score(b));
}

export function LevelPicker() {
  const { level } = useLearning();
  return (
    <div className="seg" role="radiogroup" aria-label="Your level">
      {LEVELS.map((l) => (
        <button key={l.id} role="radio" aria-checked={level === l.id} className={level === l.id ? "on" : ""}
          onClick={() => updateLearning({ level: level === l.id ? null : l.id })} title={l.desc}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

// A list of links into track Learn sections, with titles loaded from the track data.
export function SectionRefs({ refs }) {
  const titles = useSectionTitles(refs.map((r) => [r.track, r.section]));
  return (
    <div className="tbl">
      {refs.map((r) => {
        const t = getTrack(r.track);
        return (
          <Link key={`${r.track}:${r.section}`} to={sectionLink(r.track, r.section)} className="chr">
            <span className="dot" style={{ "--h": t.accent }} />
            <div className="tx">
              <b>{titles[`${r.track}:${r.section}`] || `Section ${r.section}`}</b>
              <span>{t.shortName} · {r.section}{r.note ? ` — ${r.note}` : ""}</span>
            </div>
            <ChevronRight className="i mu" />
          </Link>
        );
      })}
    </div>
  );
}

// Tracks the concept of the day draws from: the learner's role paths, else by level.
function conceptTracks(level, roleId) {
  const role = getRole(roleId);
  if (role) return [...new Set(role.paths.flatMap((id) => getPath(id).steps.map((s) => s.track)))];
  if (level === "beginner") return ["ctfl", "ctut", "softskills"];
  const all = ["ctfl", "ctqdo", "ctmat", "softskills", "ctgenai", "cttas", "ctpt", "ctsec", "ctft", "ctact", "ctut", "ctai"];
  return level === "expert" ? [...all, "ctaltae"] : all;
}

export function ConceptCard() {
  const { level, role } = useLearning();
  const [c, setC] = useState(undefined);
  useEffect(() => {
    let alive = true;
    conceptOfTheDay(conceptTracks(level, role)).then((r) => alive && setC(r));
    return () => { alive = false; };
  }, [level, role]);
  return (
    <div className="boxc">
      <div className="isec">
        <div className="crow"><Sparkles className="i mu" /><span className="lbl">Concept of the day</span></div>
        {c === undefined ? <span className="mu sm">Loading…</span> : !c ? <span className="mu sm">No concept available.</span> : (
          <>
            <b className="nt2">{c.entry.term}</b>
            <p className="sm" style={{ lineHeight: 1.6 }}>{c.entry.definition}</p>
            <div className="crow wrap sm">
              <span className="mu">{c.track.shortName}{c.entry.ref ? ` · section ${c.entry.ref}` : ""}</span>
              <span className="push crow wrap" style={{ gap: 8 }}>
                <Link to={`/${c.track.steps[3].path}?q=${encodeURIComponent(c.entry.term)}`}>Glossary</Link>
                {c.entry.ref && <Link to={`/${c.track.steps[0].path}?ch=${chapterOf(c.entry.ref)}`}>Read the chapter <ArrowRight className="i" /></Link>}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
