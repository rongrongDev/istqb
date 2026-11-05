import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, TriangleAlert } from "lucide-react";
import { Hint } from "../components/ui.jsx";
import { CodeBlock } from "../components/Blocks.jsx";
import { SectionRefs } from "../components/LearnUI.jsx";
import { recipes, getRecipe } from "../data/learning/recipes.js";

// Tool recipes (?r=<recipe id>): how a technique runs in a real tool.
export default function Toolbox() {
  const [params] = useSearchParams();
  const r = getRecipe(params.get("r"));

  if (!r) {
    return (
      <div className="page narrow">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Toolbox</span>
          <h2>See the techniques in real tools</h2>
          <span className="mu sm">The syllabi stay tool-neutral on purpose. These short recipes show the next practical step, each linked back to the sections that explain the idea.</span>
        </div>
        <div className="tbl">
          {recipes.map((x) => (
            <Link key={x.id} to={`/toolbox?r=${x.id}`} className="chr">
              <div className="tx"><b>{x.tool}: {x.title}</b><span>{x.goal}</span></div>
              <ChevronRight className="i mu" />
            </Link>
          ))}
        </div>
        <Hint icon={TriangleAlert} tone="warn">Only run scans and load tests against systems you own or have written permission to test.</Hint>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <Link to="/toolbox" className="crow sm"><ChevronLeft className="i" />All recipes</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Toolbox · {r.tool}</span>
        <h2>{r.title}</h2>
        <span className="mu">{r.goal}</span>
        <span className="chip" style={{ alignSelf: "flex-start" }}>{r.version}</span>
      </div>
      <div className="boxc">
        <div className="isec prose">
          <span className="lbl">Steps</span>
          <ol className="pts">{r.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        </div>
      </div>
      <CodeBlock code={r.code} lang={r.lang} />
      <h2>The ideas behind it</h2>
      <SectionRefs refs={r.links.map(([track, section]) => ({ track, section }))} />
    </div>
  );
}
