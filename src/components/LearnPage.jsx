import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Check, Circle, CircleCheck, CircleDashed, X, Info } from "lucide-react";
import { KChip, Meter, Hint, keywordList, pct } from "./ui.jsx";
import { Block, TermsProvider } from "./Blocks.jsx";
import { SectionExtras } from "./LearnExtras.jsx";
import { useCurrentTrack, useTrackData, useLearning, isLearningMode } from "../lib/learning.js";

function Outline({ chapters, chapter, current, studied, go, onClose, onAll }) {
  const done = chapter.sections.filter((s) => studied.has(s.id)).length;
  return (
    <>
      <button className="scrim" aria-label="Close outline" onClick={onClose} />
      <aside className="olp" aria-label="Chapter outline">
        <div className="crow"><b>Chapter {chapter.id} · {chapter.title}</b><button className="ib push" onClick={onClose} aria-label="Close outline"><X className="i" /></button></div>
        <span className="mu sm">{done} of {chapter.sections.length} studied · {chapter.time}</span>
        <Meter value={pct(done, chapter.sections.length)} />
        <div className="ol">
          {chapter.sections.map((s) => (
            <button key={s.id} className={`olr${s.id === current ? " on" : ""}`} onClick={() => go(chapter.id, s.id)}>
              {studied.has(s.id) ? <CircleCheck className="i ok" /> : <Circle className="i mu" />}
              <span className="sid">{s.id}</span><span className="ell">{s.title}</span>
            </button>
          ))}
        </div>
        <span className="lbl" style={{ marginTop: 8 }}>Other chapters</span>
        <div className="ol">
          {chapters.filter((c) => c.id !== chapter.id).map((c) => {
            const st = c.sections.filter((s) => studied.has(s.id)).length;
            return (
              <button key={c.id} className="olr" onClick={() => go(c.id, c.sections[0].id)}>
                {st === c.sections.length ? <CircleCheck className="i ok" /> : <CircleDashed className="i mu" />}
                <span className="sid">{c.id}</span><span className="ell">{c.title}</span>
                <span className="mu sm push">{st}/{c.sections.length}</span>
              </button>
            );
          })}
        </div>
        <button className="btn" style={{ alignSelf: "flex-start", marginTop: 6 }} onClick={onAll}><List className="i" />All chapters</button>
      </aside>
    </>
  );
}

// Step 1 for every track: chapter list, then one section per view with the chapter
// outline panel. Deep links: ?ch=<chapter id>&s=<section id>.
export default function LearnPage({ chapters, getStudied, setStudied, label, intro }) {
  const [params, setParams] = useSearchParams();
  const [studied, setStudiedState] = useState(() => getStudied());
  const [outline, setOutline] = useState(false);
  const track = useCurrentTrack();
  const trackData = useTrackData(track?.id);
  const learning = isLearningMode(useLearning());

  const chapter = chapters.find((c) => String(c.id) === params.get("ch"));
  const idx = chapter ? Math.max(0, chapter.sections.findIndex((s) => s.id === params.get("s"))) : -1;
  const section = chapter?.sections[idx];

  useEffect(() => { window.scrollTo(0, 0); }, [chapter?.id, section?.id]);

  const go = (ch, s) => { setOutline(false); setParams(ch == null ? {} : { ch: String(ch), s }); };
  const toggle = (id) => setStudiedState(setStudied(id, !studied.has(id)));

  if (!chapter) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">{label} · Learn</span>
          <h2>Learn the syllabus</h2>
          <span className="mu sm">{intro}</span>
        </div>
        <div className="tbl">
          {chapters.map((ch) => {
            const st = ch.sections.filter((s) => studied.has(s.id)).length;
            return (
              <button key={ch.id} className="chr" onClick={() => go(ch.id, ch.sections[0].id)}>
                <span className="num">{ch.id}</span>
                <div className="tx">
                  <b>{ch.title}</b>
                  <span>
                    {ch.time} · {ch.sections.length} sections{st === ch.sections.length ? " · all studied" : ""}
                    {!ch.learn && " · summary text only for now"}
                  </span>
                </div>
                <Meter value={pct(st, ch.sections.length)} />
                <span className="mu sm" style={{ width: 46, textAlign: "right" }}>{st}/{ch.sections.length}</span>
                <ChevronRight className="i mu" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const ci = chapters.indexOf(chapter);
  const prev = idx > 0 ? [chapter.id, chapter.sections[idx - 1]] : ci > 0 ? [chapters[ci - 1].id, chapters[ci - 1].sections.at(-1)] : null;
  const next = idx < chapter.sections.length - 1 ? [chapter.id, chapter.sections[idx + 1]] : ci < chapters.length - 1 ? [chapters[ci + 1].id, chapters[ci + 1].sections[0]] : null;
  const done = chapter.sections.filter((s) => studied.has(s.id)).length;
  const isStudied = studied.has(section.id);
  const advance = () => (next ? go(next[0], next[1].id) : go(null));
  const markAndNext = () => { setStudiedState(setStudied(section.id, true)); advance(); };
  const { learn } = chapter;
  const keywords = keywordList(learn?.keywords);

  return (
    <div className="page narrow">
      <div className="crow wrap" style={{ gap: 12 }}>
        <button className="olbtn" onClick={() => setOutline(true)} aria-label="Open chapter outline">
          <List className="i" />Chapter {chapter.id} · Section {idx + 1} of {chapter.sections.length}<ChevronDown className="i" />
        </button>
        <Meter value={pct(done, chapter.sections.length)} />
        <span className="mu sm">{done}/{chapter.sections.length} studied</span>
      </div>

      {idx === 0 && (
        <div className="stack" style={{ gap: 12 }}>
          <div className="stack" style={{ gap: 6 }}>
            <span className="lbl">{label} · Chapter {chapter.id} · {chapter.time} · {chapter.sections.length} sections</span>
            <h2>{chapter.title}</h2>
          </div>
          {learn?.intro && <div className="boxc"><div className="isec prose"><p>{learn.intro}</p></div></div>}
          {learn?.objectives && !learning && (
            <div className="boxc">
              <div className="isec">
                <span className="lbl">Learning objectives — what the exam tests</span>
                {learn.objectives.map((lo) => (
                  <div key={lo.id} className="lo"><code className="sid">{lo.id}</code><KChip level={lo.level} /><span>{lo.text}</span></div>
                ))}
              </div>
            </div>
          )}
          {keywords.length > 0 && (
            <div className="boxc">
              <div className="isec">
                <span className="lbl">{learning ? "Key terms in this chapter" : "Keywords — know these definitions"}</span>
                <div className="crow wrap" style={{ gap: 6 }}>{keywords.map((kw) => <span key={kw} className="chip">{kw}</span>)}</div>
              </div>
            </div>
          )}
        </div>
      )}

      <article className="boxc">
        <div className="sech">
          <span className="sid">{section.id}</span>
          <b>{section.title}</b>
          <KChip level={section.level} />
          <span className={`chip ${section.type === "deep" ? "bad" : ""}`}>{section.type === "deep" ? "deep" : "skim"}</span>
          <button className={`btn ${isStudied ? "okb" : ""}`} onClick={() => toggle(section.id)} aria-pressed={isStudied}>
            {isStudied ? <><Check className="i" />Studied</> : <><Circle className="i" />Mark studied</>}
          </button>
        </div>
        <div className="isec prose">
          {section.learn ? (
            <TermsProvider glossary={trackData?.glossary} glossaryPath={track?.steps[3].path}>
              {section.learn.body.map((b, i) => <Block key={i} block={b} />)}
            </TermsProvider>
          ) : (
            <>
              <Hint icon={Info}>Full teaching content for this section is coming. Here is the summary text meanwhile; the Summaries step has the deep-dive points.</Hint>
              <p>{section.summary || (section.deepPoints || []).join(" ")}</p>
            </>
          )}
        </div>
      </article>

      <SectionExtras trackId={track?.id} sectionId={section.id} />

      <div className="reader-foot">
        {prev && <button className="btn" onClick={() => go(prev[0], prev[1].id)}><ChevronLeft className="i" />Previous: {prev[1].id}</button>}
        <span className="push">
          {isStudied ? (
            <button className="btn pri" onClick={advance}>
              {next ? <>Next: {next[1].id} <span className="ell" style={{ maxWidth: "28vw" }}>{next[1].title}</span></> : "Back to all chapters"}<ArrowRight className="i" />
            </button>
          ) : (
            <button className="btn pri" onClick={markAndNext}><Check className="i" />Mark studied & {next ? "next" : "finish"}</button>
          )}
        </span>
      </div>

      {outline && (
        <Outline chapters={chapters} chapter={chapter} current={section.id} studied={studied} go={go}
          onClose={() => setOutline(false)} onAll={() => go(null)} />
      )}
    </div>
  );
}
