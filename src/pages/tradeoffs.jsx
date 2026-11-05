import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Wrench } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { tradeoffs } from "../data/learning/tradeoffs.js";
import { getRecipe } from "../data/learning/recipes.js";

// Trade-off decision guides (?t=<id>): options side by side, when each wins, both sides of
// contested debates, and named sources.
export default function Tradeoffs() {
  const [params] = useSearchParams();
  const t = tradeoffs.find((x) => x.id === params.get("t"));

  if (!t) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Trade-off guides</span>
          <h2>Decisions teams argue about</h2>
          <span className="mu sm">Each guide compares the options, says when each one wins, and gives a rule of thumb. Contested topics show both sides.</span>
        </div>
        <div className="tbl">
          {tradeoffs.map((x) => (
            <Link key={x.id} to={`/tradeoffs?t=${x.id}`} className="chr">
              <div className="tx"><b>{x.title}</b><span>{x.question}</span></div>
              {x.debate && <span className="chip warn">Debated</span>}
              <ChevronRight className="i mu" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <Link to="/tradeoffs" className="crow sm"><ChevronLeft className="i" />All trade-offs</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Trade-off guide</span>
        <h2>{t.title}</h2>
        <span className="mu">{t.question}</span>
      </div>
      <div className="g2">
        {t.options.map((o) => (
          <div key={o.name} className="boxc">
            <div className="isec"><b>{o.name}</b></div>
            <div className="isec">
              <span className="lbl ok">Strengths</span>
              <ul className="sm" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>{o.pros.map((x) => <li key={x}>{x}</li>)}</ul>
              <span className="lbl bad">Costs</span>
              <ul className="sm" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>{o.cons.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="isec"><span className="lbl">Choose it when</span><span className="sm">{o.when}</span></div>
          </div>
        ))}
      </div>
      {t.debate && (
        <div className="boxc">
          <div className="isec"><span className="lbl">The debate</span></div>
          <div className="isec"><p className="sm" style={{ lineHeight: 1.6 }}>{t.debate.a}</p><p className="sm" style={{ lineHeight: 1.6 }}>{t.debate.b}</p></div>
          <div className="isec"><span className="lbl">Where they agree</span><p className="sm" style={{ lineHeight: 1.6 }}>{t.debate.common}</p></div>
        </div>
      )}
      <div className="callout plain"><span className="lbl">Rule of thumb</span><p>{t.rule}</p></div>
      {t.recipes.length > 0 && (
        <div className="crow wrap" style={{ gap: 8 }}>
          {t.recipes.map((id) => { const r = getRecipe(id); return <Link key={id} className="btn wrapb" to={`/toolbox?r=${id}`}><Wrench className="i" />{r.tool}: {r.title}</Link>; })}
        </div>
      )}
      <h2>Related sections</h2>
      <SectionRefs refs={t.links.map(([tr, s]) => ({ track: tr, section: s }))} />
      <div className="stack" style={{ gap: 4 }}>
        <span className="lbl">Sources</span>
        <ul className="sm mu" style={{ margin: 0, paddingLeft: 18 }}>{t.sources.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </div>
  );
}
