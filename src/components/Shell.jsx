import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Search, Moon, Sun, Archive, LayoutDashboard, X, GraduationCap, Compass } from "lucide-react";
import { tracks, findPage, getTrack } from "../lib/tracks.js";
import { isDark, setThemeChoice } from "../lib/theme.js";
import { Logo, STEP_SHORT, STEP_ICON } from "./ui.jsx";
import { learnTabs, learnPagePaths } from "../lib/learnNav.js";
import { useLearning, updateLearning, isLearningMode } from "../lib/learning.js";

// Lookup sources for ⌘K: the current track (or its legacy pages), else every track.
function sourcesFor(track, legacy) {
  if (legacy) {
    const p = track.legacy.pages;
    return [{ label: "CT-AI v1.0", learn: p[0].path, glossary: p[2].path, loadData: track.legacy.loadData, loadGlossary: track.legacy.loadGlossary }];
  }
  return (track ? [track] : tracks).map((t) => ({
    label: t.shortName, learn: t.steps[0].path, glossary: t.steps[3].path, loadData: t.loadData, loadGlossary: t.loadGlossary,
  }));
}

function CommandPalette({ sources, onClose }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [data, setData] = useState(null);
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    let alive = true;
    Promise.all(sources.map(async (s) => {
      const [d, g] = await Promise.all([s.loadData(), s.loadGlossary()]);
      return { ...s, chapters: d.chapters, entries: g.glossary };
    })).then((r) => alive && setData(r)).catch(() => alive && setData([]));
    return () => { alive = false; };
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term || !data) return [];
    const terms = [], sections = [];
    for (const s of data) {
      for (const e of s.entries) {
        if (e.term.toLowerCase().includes(term) || e.definition.toLowerCase().includes(term)) {
          terms.push({ kind: "term", src: s, e, rank: e.term.toLowerCase().includes(term) ? 0 : 1 });
        }
      }
      for (const ch of s.chapters) for (const sec of ch.sections) {
        if (sec.title.toLowerCase().includes(term) || sec.id.startsWith(term)) sections.push({ kind: "section", src: s, ch, sec });
      }
    }
    terms.sort((a, b) => a.rank - b.rank || a.e.term.localeCompare(b.e.term));
    return [...terms.slice(0, 6), ...sections.slice(0, 5)];
  }, [q, data]);

  useEffect(() => setActive(0), [q]);

  const go = (r) => {
    onClose();
    if (r.kind === "term") navigate(`/${r.src.glossary}?q=${encodeURIComponent(r.e.term)}`);
    else navigate(`/${r.src.learn}?ch=${r.ch.id}&s=${encodeURIComponent(r.sec.id)}`);
  };

  const onKey = (e) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) go(results[active]);
  };

  const many = sources.length > 1;
  const terms = results.filter((r) => r.kind === "term");
  const secs = results.filter((r) => r.kind === "section");
  const row = (r, i, body) => (
    <div key={i} role="option" aria-selected={i === active} className={`cr${i === active ? " on" : ""}`}
      onMouseEnter={() => setActive(i)} onClick={() => go(r)}>{body}</div>
  );

  return (
    <>
      <button className="scrim" style={{ zIndex: 39 }} aria-label="Close lookup" onClick={onClose} />
      <div className="cmdk" role="dialog" aria-label="Look up a term or section">
        <div className="inp">
          <Search className="i" />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey}
            placeholder="Look up a term or section…" aria-label="Look up a term or section" role="combobox" aria-expanded={results.length > 0} />
          <button className="ib" onClick={onClose} aria-label="Close"><X className="i" /></button>
        </div>
        {!data && q && <div className="mu sm" style={{ padding: "10px 12px" }}>Loading…</div>}
        {data && q && results.length === 0 && <div className="mu sm" style={{ padding: "10px 12px" }}>Nothing matches “{q}”.</div>}
        <div role="listbox">
          {terms.length > 0 && <div className="lbl" style={{ padding: "10px 4px 4px" }}>Glossary{many ? "" : ` · ${sources[0].label}`} · {terms.length} match{terms.length > 1 ? "es" : ""}</div>}
          {terms.map((r, i) => row(r, i, <>
            <div className="crow"><b>{r.e.term}</b><span className="sid push">{many ? `${r.src.label} · ` : ""}§{r.e.ref}</span></div>
            <p>{r.e.definition}</p>
          </>))}
          {secs.length > 0 && <div className="lbl" style={{ padding: "10px 4px 4px" }}>Sections</div>}
          {secs.map((r, j) => row(r, terms.length + j, (
            <div className="crow"><span className="sid">{r.sec.id}</span><b className="ell">{r.sec.title}</b><span className="mu sm push">{many ? `${r.src.label} · ` : ""}Learn</span></div>
          )))}
        </div>
      </div>
    </>
  );
}

// Site chrome for every screen except the full-screen exam: top bar (logo, track pill,
// step tabs, ⌘K lookup, theme toggle), the phone tab strip, and the footer.
export default function Shell({ path, trackId, children }) {
  const info = path ? findPage(path) : null;
  const track = info?.track || (trackId ? getTrack(trackId) : null);
  const legacy = !!info?.legacy;
  const [menu, setMenu] = useState(false);
  const [palette, setPalette] = useState(false);
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette((p) => !p); }
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { setMenu(false); setPalette(false); }, [path, trackId]);

  const learning = isLearningMode(useLearning());
  const inLearnArea = !track && learnPagePaths.has(path);
  // Learning mode drops the exam-only step (Insights) and calls the quiz "Practice".
  const tabs = inLearnArea
    ? learnTabs.map((p) => ({ path: p.path, short: p.short, title: p.title, icon: p.icon }))
    : !track ? [] : legacy
      ? track.legacy.pages.map((p) => ({ path: p.path, short: p.short, title: p.title, icon: STEP_ICON[p.short] }))
      : track.steps
        .map((s, i) => ({ path: s.path, short: STEP_SHORT[i], title: s.title, icon: STEP_ICON[STEP_SHORT[i]] }))
        .filter((t) => !(learning && t.short === "Insights"))
        .map((t) => (learning && t.short === "Quiz" ? { ...t, short: "Practice" } : t));
  // Pages without their own tab (path reader, roles, self-check) highlight Explore.
  const activeTab = tabs.some((t) => t.path === path) ? path : inLearnArea ? "explore" : path;
  const pillLabel = legacy ? "CT-AI v1.0 (legacy)" : track ? track.shortName : inLearnArea ? "Learn without an exam" : "Choose a track";

  const toggleTheme = () => { setThemeChoice(dark ? "light" : "dark"); setDark(!dark); };
  const toggleMode = () => updateLearning({ mode: learning ? "exam" : "learning" });

  return (
    <>
      <header className="tb">
        <Link to="/" className="brand" aria-label="ISTQB Hub dashboard"><Logo /><span className="wm">ISTQB Hub</span></Link>
        <div style={{ position: "relative" }}>
          <button className="pill" onClick={() => setMenu((m) => !m)} aria-expanded={menu} aria-haspopup="menu">
            {track && <span className="dot" style={{ "--h": track.accent }} />}
            <span className="ell" style={{ maxWidth: "42vw" }}>{pillLabel}</span>
            <ChevronDown className="i" />
          </button>
          {menu && (
            <>
              <button className="scrim" style={{ background: "transparent" }} aria-label="Close menu" onClick={() => setMenu(false)} />
              <div className="menu" role="menu" style={{ left: 0 }}>
                <span className="lbl" style={{ padding: "4px 8px" }}>Switch track</span>
                {tracks.map((t) => (
                  <Link key={t.id} role="menuitem" to={`/track/${t.id}`} className={`mi${t === track && !legacy ? " on" : ""}`}>
                    <span className="dot" style={{ "--h": t.accent }} /><b>{t.shortName}</b>
                    <span className="mu sm ell">{t.title.replace(/ \(.*\)$/, "")}</span>
                  </Link>
                ))}
                <div className="sep" />
                <Link role="menuitem" to="/ctaiv1-learn" className={`mi${legacy ? " on" : ""}`}><Archive className="i mu" /><span>CT-AI v1.0 (legacy)</span></Link>
                <Link role="menuitem" to="/explore" className={`mi${inLearnArea ? " on" : ""}`}><Compass className="i mu" /><span>Learn without an exam</span></Link>
                <Link role="menuitem" to="/" className="mi"><LayoutDashboard className="i mu" /><span>Dashboard</span></Link>
              </div>
            </>
          )}
        </div>
        <nav className="tabs" aria-label="Study steps">
          {tabs.length ? tabs.map((t) => (
            <Link key={t.path} to={`/${t.path}`} className={t.path === activeTab ? "on" : ""} aria-current={t.path === activeTab ? "page" : undefined}>{t.short}</Link>
          )) : <Link to="/" className="on" aria-current="page">Dashboard</Link>}
        </nav>
        <button className="search" onClick={() => setPalette(true)} aria-label="Look up a term (⌘K)">
          <Search className="i" /><span className="lbl-t">Look up a term</span><kbd className="k">⌘K</kbd>
        </button>
        <button className={`ib modeb${learning ? " on" : ""}`} onClick={toggleMode} aria-pressed={learning}
          aria-label={learning ? "Learning mode is on — switch to exam mode" : "Switch to learning mode (hide exam details)"}
          title={learning ? "Learning mode: exam details hidden. Click for exam mode." : "Exam mode. Click for learning mode (hides K-levels, objectives and pass marks)."}>
          {learning ? <Compass className="i" /> : <GraduationCap className="i" />}
        </button>
        <button className="ib" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
          {dark ? <Sun className="i" /> : <Moon className="i" />}
        </button>
      </header>
      {tabs.length > 0 && (
        <nav className="mseg" style={{ "--n": tabs.length }} aria-label={inLearnArea ? "Learning pages" : "Study steps"}>
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.path} to={`/${t.path}`} className={t.path === activeTab ? "on" : ""} aria-current={t.path === activeTab ? "page" : undefined}>
                {Icon && <Icon className="i" />}{t.short}
              </Link>
            );
          })}
        </nav>
      )}
      {palette && <CommandPalette sources={sourcesFor(track, legacy)} onClose={() => setPalette(false)} />}
      <main>
        <Suspense fallback={<div className="loading">Loading…</div>}>{children}</Suspense>
      </main>
      <footer className="foot">
        <span>ISTQB Hub is an unofficial study aid, not affiliated with ISTQB® or ASTQB.</span>
        <span>Progress is kept in this browser only.</span>
      </footer>
    </>
  );
}
