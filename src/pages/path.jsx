import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft, Circle, CircleCheck, List, X, ExternalLink } from "lucide-react";
import { Meter, Hint, pct } from "../components/ui.jsx";
import { Block, TermsProvider } from "../components/Blocks.jsx";
import { SectionExtras } from "../components/LearnExtras.jsx";
import { PathCard, LevelChip, rankedPaths } from "../components/LearnUI.jsx";
import { getTrack } from "../lib/tracks.js";
import { useTrackData, findSection, depthOf, sectionLink, useLearning, useSectionTitles } from "../lib/learning.js";
import { getPath } from "../data/learning/paths.js";

function PathIndex() {
  const { level, role } = useLearning();
  return (
    <div className="page">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Topic paths</span>
        <h2>Learn one subject across tracks</h2>
        <span className="mu sm">Each path picks the best sections from several syllabi, in a sensible order, with a plain-language note on every step.</span>
      </div>
      <div className="g3">{rankedPaths(level, role).map((p) => <PathCard key={p.id} path={p} />)}</div>
    </div>
  );
}

// One topic path, one step per view (?p=<path id>&step=<1-based>). A step shows the
// section from its track; marking it studied ticks it in that track too.
export default function PathReader() {
  const [params, setParams] = useSearchParams();
  const path = getPath(params.get("p"));
  const [outline, setOutline] = useState(false);
  const [, force] = useState(0);
  const n = path ? Math.min(Math.max(1, Number(params.get("step")) || 1), path.steps.length) : 0;
  const step = path?.steps[n - 1];
  const track = step ? getTrack(step.track) : null;
  const data = useTrackData(step?.track);
  const titles = useSectionTitles(path ? path.steps.map((s) => [s.track, s.section]) : []);

  useEffect(() => { window.scrollTo(0, 0); }, [path?.id, n]);
  if (!path) return <PathIndex />;

  const found = data ? findSection(data, step.section) : null;
  const section = found?.section;
  const studiedOf = (st) => getTrack(st.track).progress.getStudied().has(st.section);
  const isStudied = studiedOf(step);
  const done = path.steps.filter(studiedOf).length;
  const go = (k) => { setOutline(false); setParams({ p: path.id, step: String(k) }); };
  const setStudied = (v) => { track.progress.setStudied(step.section, v); force((x) => x + 1); };
  const next = n < path.steps.length ? n + 1 : null;
  const depth = step.depth || (section ? depthOf(track.level, section.level) : null);

  return (
    <div className="page narrow">
      <div className="crow wrap" style={{ gap: 12 }}>
        <button className="olbtn" onClick={() => setOutline(true)} aria-label="Open path outline">
          <List className="i" />{path.title} · Step {n} of {path.steps.length}
        </button>
        <Meter value={pct(done, path.steps.length)} />
        <span className="mu sm">{done}/{path.steps.length} studied</span>
      </div>

      {n === 1 && (
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Topic path · <LevelChip level={path.level} /></span>
          <h2>{path.title}</h2>
          <span className="mu sm">{path.summary} For: {path.for}</span>
        </div>
      )}

      <div className="callout plain">
        <span className="lbl">In plain words</span>
        <p>{step.note}</p>
      </div>

      <article className="boxc">
        <div className="sech">
          <span className="sid">{step.section}</span>
          <b>{section?.title || "Loading…"}</b>
          {depth && <LevelChip level={depth} />}
          <button className={`btn ${isStudied ? "okb" : ""}`} onClick={() => setStudied(!isStudied)} aria-pressed={isStudied}>
            {isStudied ? <><Check className="i" />Studied</> : <><Circle className="i" />Mark studied</>}
          </button>
        </div>
        <div className="isec prose">
          {!section ? <span className="mu">Loading the section…</span> : section.learn ? (
            <TermsProvider glossary={data.glossary} glossaryPath={track.steps[3].path}>
              {section.learn.body.map((b, i) => <Block key={i} block={b} />)}
            </TermsProvider>
          ) : (
            <p>{section.summary || (section.deepPoints || []).join(" ")}</p>
          )}
        </div>
        <div className="isec">
          <div className="crow wrap sm">
            <span className="dot" style={{ "--h": track.accent }} />
            <span className="mu">From {track.title}{found ? ` · Chapter ${found.chapter.id}: ${found.chapter.title}` : ""}</span>
            <Link className="push crow" to={sectionLink(track.id, step.section)}>Open in the track <ExternalLink className="i" /></Link>
          </div>
        </div>
      </article>

      {section && <SectionExtras trackId={track.id} sectionId={step.section} />}

      <div className="reader-foot">
        {n > 1 && <button className="btn" onClick={() => go(n - 1)}><ChevronLeft className="i" />Previous</button>}
        <span className="push">
          {isStudied ? (
            next ? <button className="btn pri" onClick={() => go(next)}>Next step <ArrowRight className="i" /></button>
              : <Link className="btn pri" to="/explore">Path complete — back to Explore <ArrowRight className="i" /></Link>
          ) : (
            <button className="btn pri" onClick={() => { setStudied(true); if (next) go(next); }}><Check className="i" />Mark studied & {next ? "next" : "finish"}</button>
          )}
        </span>
      </div>

      {outline && (
        <>
          <button className="scrim" aria-label="Close outline" onClick={() => setOutline(false)} />
          <aside className="olp" aria-label="Path outline">
            <div className="crow"><b>{path.title}</b><button className="ib push" onClick={() => setOutline(false)} aria-label="Close outline"><X className="i" /></button></div>
            <span className="mu sm">{done} of {path.steps.length} studied</span>
            <Meter value={pct(done, path.steps.length)} />
            <div className="ol">
              {path.steps.map((st, i) => (
                <button key={i} className={`olr${i + 1 === n ? " on" : ""}`} onClick={() => go(i + 1)}>
                  {studiedOf(st) ? <CircleCheck className="i ok" /> : <Circle className="i mu" />}
                  <span className="sid">{i + 1}</span>
                  <span className="ell">{titles[`${st.track}:${st.section}`] || st.section}</span>
                  <span className="mu sm push">{getTrack(st.track).shortName.split(" ")[0]}</span>
                </button>
              ))}
            </div>
            <Link className="btn" style={{ alignSelf: "flex-start", marginTop: 6 }} to="/path"><List className="i" />All paths</Link>
          </aside>
        </>
      )}
      {!section && data && <Hint icon={X} tone="warn">This step points at a section that no longer exists.</Hint>}
    </div>
  );
}
