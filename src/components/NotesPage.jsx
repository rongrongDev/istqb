import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, List } from "lucide-react";
import { KChip } from "./ui.jsx";

const KEY_WORDS = ["KEY", "MATCHING", "SCENARIO", "CALCULATION", "ORDERING", "APPLICATION", "PATTERN", "MEMORY AID"];
const insightKind = (text) => (text.includes("TRAP") ? ["bad", "Trap"] : KEY_WORDS.some((k) => text.includes(k)) ? ["nt", "Key"] : ["", "Insight"]);
const isK3 = (s) => s.level === "K3" || s.level === "K4";

function SectionItem({ section, open, onToggle, insights }) {
  const deep = section.type === "deep";
  const n = section.examInsights?.length || 0;
  return (
    <div className="boxc">
      <button className="sech" onClick={onToggle} aria-expanded={open}>
        <span className="sid">{section.id}</span>
        <b>{section.title}</b>
        <KChip level={section.level} />
        <span className={`chip ${deep ? "bad" : ""}`}>{deep ? "deep" : "skim"}</span>
        {insights && n > 0 && <span className="chip warn">{n} insight{n > 1 ? "s" : ""}</span>}
        {open ? <ChevronUp className="i mu" /> : <ChevronDown className="i mu" />}
      </button>
      {open && (
        <div className="isec">
          {deep ? (
            <>
              <span className="lbl bad">Key learning points</span>
              <ol className="pts">{section.deepPoints.map((p, i) => <li key={i}>{p}</li>)}</ol>
            </>
          ) : (
            <p className="sm" style={{ lineHeight: 1.65 }}>{section.summary}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Steps 2 and 3 for every track: chapter summaries (mode "summaries") and the same
// summaries with the official sample-exam insights beside them (mode "insights").
// Per-track text (header, legends, exam format, quick reference) comes in as props.
export default function NotesPage({
  chapters, mode, label, eyebrow, title, subtitle, legend = [], levels, levelNote,
  examFormat, examNote, quickRef, strategyLabel = "Study strategy",
}) {
  const insights = mode === "insights";
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState({});
  const [filter, setFilter] = useState("all");
  const chapter = chapters.find((c) => String(c.id) === params.get("ch"));

  useEffect(() => { setOpen({}); setFilter("all"); window.scrollTo(0, 0); }, [chapter?.id]);
  const go = (id) => setParams(id == null ? {} : { ch: String(id) });

  if (!chapter) {
    return (
      <div className="page">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">{eyebrow}</span>
          <h2>{title}</h2>
          <span className="mu sm">{subtitle}</span>
          {legend.length > 0 && <div className="crow wrap sm mu" style={{ gap: 14 }}>{legend.map((l) => <span key={l}>{l}</span>)}</div>}
        </div>
        <div className="g2a">
          <div className="tbl">
            {chapters.map((ch) => {
              const deep = ch.sections.filter((s) => s.type === "deep").length;
              const skim = ch.sections.filter((s) => s.type === "skim").length;
              const k3 = ch.sections.filter(isK3).length;
              const ins = ch.sections.reduce((n, s) => n + (s.examInsights?.length || 0), 0);
              return (
                <button key={ch.id} className="chr" onClick={() => go(ch.id)}>
                  <span className="num">{ch.id}</span>
                  <div className="tx">
                    <b>{ch.title}</b>
                    <span>{ch.time} · {ch.sections.length} sections</span>
                    <span className="crow wrap" style={{ gap: 6, marginTop: 4 }}>
                      <span className="chip bad">{deep} deep</span>
                      <span className="chip">{skim} skim</span>
                      {k3 > 0 && <span className="chip warn">{k3} {levels.some(([k]) => k === "K4") ? "K3/K4" : "K3"}</span>}
                      {insights && <span className="chip acc">{ins} insights</span>}
                    </span>
                  </div>
                  <ChevronRight className="i mu" />
                </button>
              );
            })}
          </div>
          <div className="stack" style={{ gap: 12 }}>
            {examFormat && (
              <div className="boxc"><div className="isec">
                <span className="lbl">Official exam format</span>
                <div className="rules">{examFormat.map((r) => <div key={r.label}><span className="mu">{r.label}</span><b>{r.value}</b></div>)}</div>
                {examNote && <p className="sm mu">{examNote}</p>}
              </div></div>
            )}
            <div className="boxc"><div className="isec">
              <span className="lbl">Cognitive level key</span>
              <div className="crow wrap" style={{ gap: 10 }}>
                {levels.map(([k, desc]) => <span key={k} className="crow sm" style={{ gap: 6 }}><span className="chip">{k}</span><span className="mu">{desc}</span></span>)}
              </div>
              {levelNote && <p className="sm mu">{levelNote}</p>}
            </div></div>
            {quickRef && (
              <div className="boxc"><div className="isec">
                <span className="lbl">{quickRef.title}</span>
                <div className="qref">{quickRef.lines.join("\n")}</div>
                {quickRef.note && <div className="callout nt"><p>{quickRef.note}</p></div>}
              </div></div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const deepN = chapter.sections.filter((s) => s.type === "deep").length;
  const shown = chapter.sections.filter((s) => filter === "all" || s.type === filter);
  const ci = chapters.indexOf(chapter);
  const prevCh = chapters[ci - 1], nextCh = chapters[ci + 1];
  const allInsights = chapter.sections.flatMap((s) => (s.examInsights || []).map((text) => ({ s, text })));

  const list = (
    <div className="stack" style={{ gap: 10 }}>
      {shown.map((s) => (
        <SectionItem key={s.id} section={s} insights={insights} open={!!open[s.id]} onToggle={() => setOpen((o) => ({ ...o, [s.id]: !o[s.id] }))} />
      ))}
    </div>
  );

  return (
    <div className="page">
      <div className="crow wrap" style={{ gap: 10 }}>
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">{label} · Chapter {chapter.id} · {chapter.time} · {insights ? "Exam insights" : "Chapter summaries"}</span>
          <h2>{chapter.title}</h2>
        </div>
        <button className="btn push" onClick={() => go(null)}><List className="i" />All chapters</button>
      </div>
      <div className="callout"><p><b>{strategyLabel}: </b>{chapter.overview}</p></div>
      <div className="crow wrap" style={{ gap: 6 }} role="group" aria-label="Filter sections">
        {[["all", `All ${chapter.sections.length}`], ["deep", `Deep only · ${deepN}`], ["skim", `Skim only · ${chapter.sections.length - deepN}`]].map(([k, l]) => (
          <button key={k} className={`chip${filter === k ? " on" : ""}`} aria-pressed={filter === k} onClick={() => setFilter(k)}>{l}</button>
        ))}
      </div>

      {insights ? (
        <div className="g2a">
          {list}
          <div className="stack" style={{ gap: 10 }}>
            <span className="lbl">Traps and key facts in this chapter · {allInsights.length}</span>
            {allInsights.length === 0 && <p className="mu sm">No sample-exam insights for this chapter.</p>}
            {allInsights.map(({ s, text }, i) => {
              const [cls, kind] = insightKind(text);
              return (
                <div key={i} className={`callout ${cls}`}>
                  <span className="lbl">{s.id} · {kind}</span>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : list}

      <div className="crow wrap" style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
        <button className="btn" onClick={() => go(null)}><List className="i" />Chapter list</button>
        <span className="crow push">
          {prevCh && <button className="btn" onClick={() => go(prevCh.id)}><ChevronLeft className="i" />Ch {prevCh.id}</button>}
          {nextCh && <button className="btn pri" onClick={() => go(nextCh.id)}>Ch {nextCh.id}<ChevronRight className="i" /></button>}
        </span>
      </div>
    </div>
  );
}
