import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { tracks, registeredPaths } from "./lib/tracks.js";
import { T } from "./lib/theme.js";
import TrackPage from "./components/TrackPage.jsx";
import PageChrome from "./components/PageChrome.jsx";

// Auto-discover all JSX files in src/pages/
// To add a new guide: drop a .jsx file into src/pages/ — it becomes /<filename>.
// To add a new certification track: add an entry in src/lib/tracks.js.
const pageModules = import.meta.glob("./pages/*.jsx");

const routes = Object.entries(pageModules).map(([path, loader]) => {
  const name = path.replace("./pages/", "").replace(".jsx", "");
  return { path: name, Component: lazy(loader) };
});

function Home() {
  const known = registeredPaths();
  const extra = routes.filter((r) => !known.has(r.path));

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: T.pageGradient,
      minHeight: "100vh",
      padding: "40px 16px",
    }}>
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", color: T.ink, marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: T.muted, marginBottom: "8px" }}>
            ISTQB & ASTQB CERTIFICATION STUDY TRACKS
          </div>
          <h1 style={{ fontSize: "30px", fontWeight: 800, margin: "0 0 8px" }}>ISTQB Learning Hub</h1>
          <p style={{ fontSize: "14px", color: T.body, margin: 0, lineHeight: 1.6 }}>
            Everything you need to pass — no PDF required.<br />Pick a certification track to see its study path and progress.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tracks.map((track) => {
            const studiedCount = track.progress.getStudied().size;
            const bestExam = track.progress.getBestExam();
            return (
              <Link key={track.id} to={`/track/${track.id}`} style={{
                background: "white", border: `1px solid ${T.border}`, borderRadius: "14px",
                padding: "18px 20px", color: T.inkSoft, textDecoration: "none", display: "block",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                      <span style={{ background: track.accent, color: "white", borderRadius: "999px", fontSize: "10px", fontWeight: 800, padding: "2px 9px", letterSpacing: "0.04em" }}>
                        {track.badge}
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: T.muted }}>{track.org} · {track.level}</span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "16px", marginBottom: "3px" }}>{track.title}</div>
                    <div style={{ fontSize: "12.5px", color: T.muted, lineHeight: 1.5 }}>{track.blurb}</div>
                    {(studiedCount > 0 || bestExam) && (
                      <div style={{ fontSize: "12px", color: T.body, marginTop: "8px", fontWeight: 600 }}>
                        {studiedCount > 0 && `${studiedCount} sections studied`}
                        {studiedCount > 0 && bestExam && " · "}
                        {bestExam && (
                          <span style={{ color: bestExam.score / bestExam.total >= 0.65 ? "#059669" : "#DC2626" }}>
                            best mock {Math.round((bestExam.score / bestExam.total) * 100)}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <span style={{ color: T.faint, fontSize: "18px", flexShrink: 0 }}>›</span>
                </div>
              </Link>
            );
          })}
        </div>

        {extra.length > 0 && (
          <>
            <div style={{ color: T.muted, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", margin: "24px 0 10px" }}>
              MORE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {extra.map((r) => (
                <Link key={r.path} to={`/${r.path}`} style={{
                  background: "white", border: `1px solid ${T.border}`, borderRadius: "12px",
                  padding: "14px 20px", color: T.inkSoft, textDecoration: "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontWeight: 700, fontSize: "14px",
                }}>
                  {r.path}
                  <span style={{ color: T.faint, fontSize: "18px" }}>›</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "system-ui", color: T.muted, fontSize: "14px"
      }}>
        Loading…
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<TrackPage />} />
        {routes.map(({ path, Component }) => (
          <Route key={path} path={`/${path}`} element={
            <PageChrome path={path}>
              <Component />
            </PageChrome>
          } />
        ))}
      </Routes>
    </Suspense>
  );
}
