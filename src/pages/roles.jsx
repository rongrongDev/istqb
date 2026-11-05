import { Link, useSearchParams } from "react-router-dom";
import { Check, ChevronLeft } from "lucide-react";
import { PathCard, SectionRefs } from "../components/LearnUI.jsx";
import { useLearning, updateLearning } from "../lib/learning.js";
import { roles, getRole } from "../data/learning/roles.js";
import { getPath } from "../data/learning/paths.js";

// Paths by role (?r=<role id>): why testing knowledge helps, which topic paths to follow,
// and a few extra sections picked for that role.
export default function Roles() {
  const [params] = useSearchParams();
  const { role: myRole } = useLearning();
  const role = getRole(params.get("r"));

  if (!role) {
    return (
      <div className="page">
        <div className="stack" style={{ gap: 6 }}>
          <span className="lbl">Paths by role</span>
          <h2>Where should someone in your role start?</h2>
          <span className="mu sm">Testing knowledge helps far beyond the test team. Pick your role for a reading list built from the topic paths.</span>
        </div>
        <div className="g3">
          {roles.map((r) => (
            <Link key={r.id} to={`/roles?r=${r.id}`} className={`tile${r.id === myRole ? " sel" : ""}`}>
              <b>{r.title}</b>
              <span className="mu sm">{r.why}</span>
              <span className="mu sm">{r.paths.length} paths · {r.extras.length} extra sections</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const mine = myRole === role.id;
  return (
    <div className="page">
      <Link to="/roles" className="crow sm"><ChevronLeft className="i" />All roles</Link>
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Paths by role</span>
        <h2>{role.title}</h2>
        <span className="mu" style={{ maxWidth: "70ch", lineHeight: 1.6 }}>{role.why}</span>
        <button className={`btn ${mine ? "okb" : "pri"}`} style={{ alignSelf: "flex-start" }} aria-pressed={mine}
          onClick={() => updateLearning({ role: mine ? null : role.id })}>
          <Check className="i" />{mine ? "This is my role" : "Make this my role"}
        </button>
        <span className="mu sm">Your role puts its paths first on Explore and picks the concept of the day from them.</span>
      </div>

      <h2>Recommended paths</h2>
      <div className="g3">{role.paths.map((id) => <PathCard key={id} path={getPath(id)} />)}</div>

      <h2>Also worth reading</h2>
      <SectionRefs refs={role.extras} />
    </div>
  );
}
