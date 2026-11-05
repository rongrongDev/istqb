import { Routes, Route, Link } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { ArrowRight, CircleCheck, CircleAlert, Circle, TriangleAlert, Folder, Compass } from "lucide-react";
import { tracks, registeredPaths } from "./lib/tracks.js";
import TrackPage from "./components/TrackPage.jsx";
import Shell from "./components/Shell.jsx";
import { Meter, Hint, pct, passMark } from "./components/ui.jsx";
import { PathCard, ConceptCard, rankedPaths } from "./components/LearnUI.jsx";
import { learnPagePaths } from "./lib/learnNav.js";
import { useLearning, isLearningMode } from "./lib/learning.js";

// Auto-discover all JSX files in src/pages/
// To add a new guide: drop a .jsx file into src/pages/ — it becomes /<filename>.
// To add a new certification track: add an entry in src/lib/tracks.js.
const pageModules = import.meta.glob("./pages/*.jsx");

const routes = Object.entries(pageModules).map(([path, loader]) => {
  const name = path.replace("./pages/", "").replace(".jsx", "");
  return { path: name, Component: lazy(loader) };
});

function storageWorks() {
  try {
    localStorage.setItem("__probe", "1");
    localStorage.removeItem("__probe");
    return true;
  } catch {
    return false;
  }
}

// Per-track progress derived from studied ids and chapter order only (no extra storage).
function summarize(track, chapters) {
  const studied = track.progress.getStudied();
  const best = track.progress.getBestExam();
  if (!chapters) return { track, studied, best, total: null, count: studied.size };
  const all = chapters.flatMap((ch) => ch.sections.map((s) => ({ ch, s })));
  const left = all.filter(({ s }) => !studied.has(s.id));
  const byChapter = chapters.map((ch) => ({ ch, left: ch.sections.filter((s) => !studied.has(s.id)).length }));
  const weakest = byChapter.reduce((a, b) => (b.left > a.left ? b : a));
  return { track, studied, best, chapters, total: all.length, count: all.length - left.length, next: left[0] || null, weakest };
}

function NextCard({ sum }) {
  const { track, next } = sum;
  if (!next) {
    return (
      <div className="next">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">All sections studied · {track.shortName}</span>
          <b className="nt2">Ready for a mock exam</b>
          <span className="mu sm">Every section is ticked. Test yourself against the 65% pass mark.</span>
        </div>
        <Link className="btn pri" to={`/${track.steps[4].path}`}>Take a mock exam <ArrowRight className="i" /></Link>
      </div>
    );
  }
  const inCh = next.ch.sections.filter((s) => sum.studied.has(s.id)).length;
  return (
    <div className="next">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Next up · {track.shortName} · Chapter {next.ch.id}</span>
        <b className="nt2">{next.s.id} {next.s.title}</b>
        <span className="mu sm">
          {next.s.level} · {next.s.type === "deep" ? "deep" : "skim"} section · {inCh} of {next.ch.sections.length} studied in this chapter
        </span>
      </div>
      <Link className="btn pri" to={`/${track.steps[0].path}?ch=${next.ch.id}&s=${encodeURIComponent(next.s.id)}`}>Continue <ArrowRight className="i" /></Link>
    </div>
  );
}

function Readiness({ sum }) {
  const { track, best, total, count, weakest } = sum;
  const pass = best ? passMark(best.total) : null;
  return (
    <div className="boxc">
      <div className="isec">
        <span className="lbl">{track.shortName} · exam readiness</span>
        {best ? (
          <div className="crow sm">
            {best.score >= pass ? <CircleCheck className="i ok" /> : <CircleAlert className="i bad" />}
            <span>
              {best.score >= pass
                ? `Best mock passes: ${pct(best.score, best.total)}% against the 65% line`
                : `Best mock ${pct(best.score, best.total)}% · ${pass - best.score} points short of the pass mark`}
            </span>
          </div>
        ) : (
          <div className="crow sm"><Circle className="i mu" /><span>No mock exam yet — the pass mark is 65%</span></div>
        )}
        {total != null && (
          <div className="crow sm">
            {count === total ? <CircleCheck className="i ok" /> : <CircleAlert className="i bad" />}
            <span>
              {count === total
                ? `All ${total} sections studied`
                : `${total - count} of ${total} sections not studied yet, ${weakest.left} of them in Chapter ${weakest.ch.id} (${weakest.ch.title})`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Tile({ sum, learning }) {
  const { track, best, total, count } = sum;
  const bp = best ? pct(best.score, best.total) : 0;
  return (
    <Link to={`/track/${track.id}`} className="tile">
      <div className="crow"><span className="dot" style={{ "--h": track.accent }} /><b className="ell">{track.shortName}</b><span className="mu sm push">{track.level}</span></div>
      <div className="mu sm ell">{track.title.replace(/ \(.*\)$/, "")}</div>
      <div className="stack" style={{ gap: 4 }}>
        <div className="crow sm"><span className="mu">Studied</span><span className="push">{count}{total != null ? `/${total}` : ""}</span></div>
        <Meter value={total ? pct(count, total) : 0} />
      </div>
      {!learning && <div className="stack" style={{ gap: 4 }}>
        <div className="crow sm">
          <span className="mu">Best mock · pass 65%</span>
          <span className={`push ${best ? (best.score >= passMark(best.total) ? "ok" : "bad") : "mu"}`}>{best ? `${bp}%` : "No attempt"}</span>
        </div>
        <Meter value={bp} pass />
      </div>}
    </Link>
  );
}

// "Learn without an exam" teaser: concept of the day plus the paths that suit the learner.
function LearnSection({ concept = true }) {
  const { level, role } = useLearning();
  return (
    <div className="stack" style={{ gap: 12 }}>
      <div className="crow wrap">
        <h2>Learn without an exam</h2>
        <Link className="push crow sm" to="/explore"><Compass className="i" />Explore paths, exercises and tools <ArrowRight className="i" /></Link>
      </div>
      {concept ? (
        <div className="g2a">
          <div className="g2">{rankedPaths(level, role).slice(0, 4).map((p) => <PathCard key={p.id} path={p} />)}</div>
          <ConceptCard />
        </div>
      ) : (
        <div className="g3">{rankedPaths(level, role).slice(0, 3).map((p) => <PathCard key={p.id} path={p} />)}</div>
      )}
    </div>
  );
}

function Home() {
  const known = registeredPaths();
  const extra = routes.filter((r) => !known.has(r.path) && !learnPagePaths.has(r.path));
  const learning = isLearningMode(useLearning());
  const [chapters, setChapters] = useState({});
  const [storageOk] = useState(storageWorks);

  useEffect(() => {
    let alive = true;
    for (const t of tracks) t.loadData().then((m) => alive && setChapters((c) => ({ ...c, [t.id]: m.chapters }))).catch(() => {});
    return () => { alive = false; };
  }, []);

  const sums = tracks.map((t) => summarize(t, chapters[t.id]));
  const started = sums.filter((s) => s.count > 0 || s.best);
  const focus = started.length ? started.reduce((a, b) => (b.count > a.count ? b : a)) : null;
  const first = sums.find((s) => s.track.id === "ctfl") || sums[0];
  const firstSec = first.chapters?.[0]?.sections[0];

  return (
    <div className="page">
      {!storageOk && (
        <Hint icon={TriangleAlert} tone="warn">
          This browser isn’t saving progress (private window or blocked storage). You can still study, but ticks and scores are lost when you close the tab.
        </Hint>
      )}
      <div className="g2a">
        {focus ? (
          <>
            {focus.chapters ? <NextCard sum={focus} /> : <div className="next"><span className="mu">Loading…</span></div>}
            {learning ? <ConceptCard /> : <Readiness sum={focus} />}
          </>
        ) : (
          <>
            <div className="next">
              <div className="stack" style={{ gap: 6 }}>
                <span className="lbl">Start here · {first.track.shortName} · no prerequisite</span>
                <b className="nt2">{firstSec ? `${firstSec.id} ${firstSec.title}` : "Foundation Level"}</b>
                <span className="mu sm">
                  Most learners start with Foundation Level.{first.chapters ? ` ${first.chapters.length} chapters, ${first.total} sections.` : ""}
                </span>
              </div>
              <Link className="btn pri" to={`/${first.track.steps[0].path}${firstSec ? `?ch=1&s=${encodeURIComponent(firstSec.id)}` : ""}`}>
                Start learning <ArrowRight className="i" />
              </Link>
            </div>
            <div className="boxc">
              <div className="isec">
                <span className="lbl">How each track works</span>
                {first.track.steps.map((s, i) => (
                  <div key={s.path} className="crow sm"><span className="num">{i + 1}</span><span className="ell">{s.title}</span></div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {learning && <LearnSection concept={!focus} />}

      <div className="crow wrap">
        <h2>Your tracks</h2>
        <span className="mu sm push">Progress stays in this browser</span>
      </div>
      <div className="g3">
        {sums.map((s) => <Tile key={s.track.id} sum={s} learning={learning} />)}
      </div>

      {!learning && <LearnSection />}

      {extra.length > 0 && (
        <div className="stack" style={{ gap: 8 }}>
          <div className="crow sm mu"><Folder className="i" /><span className="lbl">More pages</span></div>
          <div className="tbl">
            {extra.map((r) => (
              <Link key={r.path} to={`/${r.path}`} className="chr"><span className="sid">/{r.path}</span></Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell><Home /></Shell>} />
      <Route path="/track/:id" element={<TrackPage />} />
      {routes.map(({ path, Component }) => (
        <Route key={path} path={`/${path}`} element={<Shell path={path}><Component /></Shell>} />
      ))}
    </Routes>
  );
}
