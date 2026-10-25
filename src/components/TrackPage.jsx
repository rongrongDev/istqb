import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTrack, legacyProgress } from "../lib/tracks.js";
import { T } from "../lib/theme.js";

const font = "'Inter', system-ui, sans-serif";

// Track landing page (/track/:id) — the curated study path, progress stats, and
// exam readiness for one certification track, driven entirely by src/lib/tracks.js.
export default function TrackPage() {
  const { id } = useParams();
  const track = getTrack(id);
  const [chapters, setChapters] = useState(null);

  useEffect(() => {
    let alive = true;
    setChapters(null);
    if (track) track.loadData().then((m) => alive && setChapters(m.chapters)).catch(() => {});
    return () => { alive = false; };
  }, [id]);

  if (!track) {
    return (
      <div style={{ fontFamily: font, background: T.pageGradient, minHeight: "100vh", padding: "40px 16px", textAlign: "center" }}>
        <p style={{ color: T.body, fontSize: "14px" }}>Unknown track “{id}”.</p>
        <Link to="/" style={{ color: T.inkSoft, fontWeight: 700 }}>← Back to the ISTQB Hub</Link>
      </div>
    );
  }

  const studied = track.progress.getStudied();
  const bestExam = track.progress.getBestExam();
  const totalSections = chapters ? chapters.reduce((n, ch) => n + ch.sections.length, 0) : null;
  const studiedCount = chapters
    ? chapters.reduce((n, ch) => n + ch.sections.filter((s) => studied.has(s.id)).length, 0)
    : studied.size;
  const legacyBest = track.legacy ? legacyProgress.getBestExam() : null;

  const card = (to, title, desc, badge) => (
    <Link key={to} to={`/${to}`} style={{
      background: "white", border: `1px solid ${T.border}`, borderRadius: "12px",
      padding: "16px 20px", color: T.inkSoft, textDecoration: "none",
      display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px",
    }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "3px", display: "flex", alignItems: "center", gap: "8px" }}>
          {badge && (
            <span style={{ background: T.inkSoft, color: T.pageBg, borderRadius: "999px", fontSize: "11px", fontWeight: 800, padding: "2px 9px" }}>
              {badge}
            </span>
          )}
          {title}
        </div>
        <div style={{ fontSize: "12.5px", color: T.muted, lineHeight: 1.5 }}>{desc}</div>
      </div>
      <span style={{ color: T.faint, fontSize: "18px" }}>›</span>
    </Link>
  );

  return (
    <div style={{ fontFamily: font, background: T.pageGradient, minHeight: "100vh", padding: "28px 16px 60px" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <Link to="/" style={{ display: "inline-block", color: T.body, fontSize: "13px", fontWeight: 700, textDecoration: "none", marginBottom: "14px" }}>
          ← ISTQB Hub
        </Link>

        {/* Track header */}
        <div style={{ background: track.gradient, borderRadius: "16px", padding: "22px 24px", color: "white", marginBottom: "20px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", opacity: 0.7, marginBottom: "6px" }}>
            {track.org} · {track.level.toUpperCase()} · {track.badge}
          </div>
          <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "6px" }}>{track.title}</div>
          <div style={{ fontSize: "13px", opacity: 0.8, lineHeight: 1.55 }}>{track.blurb}</div>
          <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "8px" }}>Prerequisite: {track.prerequisite}</div>
        </div>

        {/* Progress / exam readiness */}
        {(studiedCount > 0 || bestExam) && (
          <div style={{
            background: "white", border: `1px solid ${T.border}`, borderRadius: "12px",
            padding: "14px 20px", color: T.inkSoft, marginBottom: "20px",
            display: "flex", justifyContent: "space-around", textAlign: "center", gap: "12px",
          }}>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800 }}>
                {studiedCount}{totalSections != null ? `/${totalSections}` : ""}
              </div>
              <div style={{ fontSize: "11px", color: T.muted }}>sections studied</div>
            </div>
            {bestExam && (
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: bestExam.score / bestExam.total >= 0.65 ? "#059669" : "#DC2626" }}>
                  {Math.round((bestExam.score / bestExam.total) * 100)}%
                </div>
                <div style={{ fontSize: "11px", color: T.muted }}>best mock exam ({bestExam.score}/{bestExam.total} pts)</div>
              </div>
            )}
          </div>
        )}

        {/* Study path */}
        <div style={{ color: T.muted, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 10px" }}>
          STUDY PATH — FOLLOW THE STEPS IN ORDER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {track.steps.map((c) => card(c.path, c.title, c.desc, `STEP ${c.step}`))}
        </div>

        {/* Legacy pages grouped under this track */}
        {track.legacy && (
          <>
            <div style={{ color: T.muted, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", margin: "24px 0 2px" }}>
              {track.legacy.label.toUpperCase()}
            </div>
            <div style={{ color: T.muted, fontSize: "12px", lineHeight: 1.5, margin: "0 0 10px" }}>
              {track.legacy.note}
              {legacyBest && ` Best v1 mock: ${Math.round((legacyBest.score / legacyBest.total) * 100)}%.`}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {track.legacy.pages.map((c) => card(c.path, c.title, c.desc))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
