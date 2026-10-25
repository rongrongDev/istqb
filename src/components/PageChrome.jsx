import { Suspense } from "react";
import { Link } from "react-router-dom";
import { findPage } from "../lib/tracks.js";
import { T } from "../lib/theme.js";

const font = "'Inter', system-ui, sans-serif";

const crumbLink = {
  color: T.body,
  textDecoration: "none",
  fontWeight: 700,
  whiteSpace: "nowrap",
};

// Slim breadcrumb + next-step bar rendered above every routed page (see src/App.jsx).
// Gives each leaf page a way back (hub › track) and forward (next study-path step)
// without touching the page components themselves.
export default function PageChrome({ path, children }) {
  const info = findPage(path);
  return (
    <>
      <nav style={{
        fontFamily: font, background: T.pageBg, borderBottom: `1px solid ${T.border}`,
        padding: "8px 16px", display: "flex", alignItems: "center", gap: "6px",
        fontSize: "12.5px", color: T.muted, flexWrap: "wrap",
      }}>
        <Link to="/" style={crumbLink}>⌂ ISTQB Hub</Link>
        {info ? (
          <>
            <span>›</span>
            <Link to={`/track/${info.track.id}`} style={crumbLink}>{info.track.shortName}</Link>
            <span>›</span>
            <span style={{ color: T.muted, whiteSpace: "nowrap" }}>
              {info.legacy ? `${info.title}` : `Step ${info.step}: ${info.title}`}
            </span>
          </>
        ) : (
          <>
            <span>›</span>
            <span style={{ color: T.muted }}>{path}</span>
          </>
        )}
        {info?.next && (
          <Link to={`/${info.next.path}`} style={{ ...crumbLink, marginLeft: "auto", color: info.track.accent }}>
            Next{info.legacy ? "" : ` (step ${info.step + 1})`}: {info.next.title} →
          </Link>
        )}
        {info && !info.next && (
          <Link to={`/track/${info.track.id}`} style={{ ...crumbLink, marginLeft: "auto", color: info.track.accent }}>
            ↑ Back to {info.track.shortName} track
          </Link>
        )}
      </nav>
      <Suspense fallback={
        <div style={{
          minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: font, color: T.muted, fontSize: "14px", background: T.pageBg,
        }}>
          Loading…
        </div>
      }>
        {children}
      </Suspense>
    </>
  );
}
