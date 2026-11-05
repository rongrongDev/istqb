import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionRefs } from "../components/LearnUI.jsx";
import { cases, getCase } from "../data/learning/cases.js";

// Real-world failure case studies (?c=<case id>), each with its public sources.
export default function CaseStudies() {
  const [params] = useSearchParams();
  const c = getCase(params.get("c"));

  if (!c) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Failure case studies</span>
          <h2>What real failures teach about testing</h2>
          <span className="mu sm">Well-documented incidents, kept to what the public investigations found, each linked to the testing ideas that would have helped.</span>
        </div>
        <div className="tbl">
          {cases.map((x) => (
            <Link key={x.id} to={`/case-studies?c=${x.id}`} className="chr">
              <div className="tx"><b>{x.title}</b><span>{x.when} · {x.domain} · {x.summary}</span></div>
              <ChevronRight className="i mu" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <Link to="/case-studies" className="crow sm"><ChevronLeft className="i" />All case studies</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">{c.domain} · {c.when}</span>
        <h2>{c.title}</h2>
        <span className="mu">{c.summary}</span>
      </div>
      <div className="boxc">
        <div className="isec prose"><span className="lbl">What happened</span><p>{c.happened}</p></div>
        <div className="isec prose"><span className="lbl">Why</span><p>{c.cause}</p></div>
        <div className="isec prose">
          <span className="lbl">What testing teaches us</span>
          <ul>{c.lessons.map((l, i) => <li key={i}>{l}</li>)}</ul>
        </div>
        <div className="isec">
          <span className="lbl">Sources</span>
          <ul className="sm mu" style={{ margin: 0, paddingLeft: 18 }}>{c.sources.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>
      <h2>Related sections</h2>
      <SectionRefs refs={c.links.map(([track, section]) => ({ track, section }))} />
    </div>
  );
}
