import { Link } from "react-router-dom";
import { ArrowRight, Compass, GraduationCap, PencilRuler, Wrench, FileText, Siren, NotebookPen, ListChecks, Building2, Scale, Briefcase, BookMarked, Shuffle, Ban, Trophy } from "lucide-react";
import { PathCard, LevelPicker, ConceptCard, rankedPaths, LevelChip } from "../components/LearnUI.jsx";
import { useLearning, updateLearning, isLearningMode, levelLabel } from "../lib/learning.js";
import { roles, getRole } from "../data/learning/roles.js";
import { areas } from "../data/learning/selfcheck.js";
import { exercises } from "../data/learning/exercises.js";
import { recipes } from "../data/learning/recipes.js";
import { templates } from "../data/learning/templates.js";
import { cases } from "../data/learning/cases.js";
import { situations } from "../data/learning/situations.js";
import { tradeoffs } from "../data/learning/tradeoffs.js";
import { questions as interview } from "../data/learning/interview.js";
import { pairs } from "../data/learning/pairs.js";
import { antipatterns } from "../data/learning/antipatterns.js";
import { capstones } from "../data/learning/capstones.js";
import { tactics } from "../data/learning/playbook.js";

const PRACTISE = [
  { to: "/exercises", icon: PencilRuler, title: "Hands-on exercises", desc: `${exercises.length} practical tasks with worked solutions` },
  { to: "/situations", icon: Building2, title: "Tricky situations", desc: `${situations.length} workplace dilemmas — what would you do?` },
  { to: "/capstones", icon: Trophy, title: "Capstone projects", desc: `${capstones.length} staged projects with model answers` },
  { to: "/interview", icon: Briefcase, title: "Interview prep", desc: `${interview.length} common questions with answer outlines` },
  { to: "/pairs", icon: Shuffle, title: "Confusable pairs", desc: `${pairs.length} easily mixed-up terms, with a drill` },
  { to: "/playbook", icon: BookMarked, title: "Exam technique playbook", desc: `${tactics.length} tactics for tricky exam questions` },
];
const LOOKUP = [
  { to: "/tradeoffs", icon: Scale, title: "Trade-off guides", desc: `${tradeoffs.length} decisions teams argue about` },
  { to: "/anti-patterns", icon: Ban, title: "Anti-patterns", desc: `${antipatterns.length} testing habits that backfire, with fixes` },
  { to: "/case-studies", icon: Siren, title: "Failure case studies", desc: `${cases.length} real incidents and what testing teaches us` },
  { to: "/toolbox", icon: Wrench, title: "Toolbox", desc: `${recipes.length} recipes for Playwright, k6, ZAP, axe and more` },
  { to: "/templates", icon: FileText, title: "Templates and checklists", desc: `${templates.length} ready-to-copy Markdown templates` },
  { to: "/learning-record", icon: NotebookPen, title: "My learning record", desc: "Everything you've studied, in one place" },
];

// Hub of the "learn without an exam" area: level, role, self-check, topic paths, tools.
export default function Explore() {
  const state = useLearning();
  const { level, role, selfCheck } = state;
  const learning = isLearningMode(state);
  const myRole = getRole(role);

  return (
    <div className="page">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Learn without an exam</span>
        <h2>Learn testing your way</h2>
        <span className="mu sm" style={{ maxWidth: "70ch" }}>
          You don't need to be studying for a certificate. Pick a topic path or your role, practise with real exercises and tools,
          and learn from real failures. Everything here reuses the syllabus content, explained for people at any level.
        </span>
      </div>

      <div className="g2a">
        <div className="boxc">
          <div className="isec">
            <span className="lbl">Your level</span>
            <LevelPicker />
            <span className="mu sm">
              {level ? `Showing ${levelLabel(level).toLowerCase()} material first. Tap again to clear.` : "Pick one to put suitable paths and concepts first — or take the self-check."}
            </span>
          </div>
          <div className="isec">
            <span className="lbl">Not sure? Take the self-check</span>
            {selfCheck ? (
              <div className="crow wrap sm">
                <span>Last result ({selfCheck.date}):</span>
                {areas.map((a) => <span key={a.id} className="chip">{a.title}: {levelLabel(selfCheck.areas[a.id]?.level || "beginner")}</span>)}
              </div>
            ) : (
              <span className="mu sm">18 quick questions across six areas place you at beginner, practitioner or expert in each and suggest where to start.</span>
            )}
            <Link className="btn" to="/self-check" style={{ alignSelf: "flex-start" }}><ListChecks className="i" />{selfCheck ? "Retake the self-check" : "Start the self-check"}</Link>
          </div>
          <div className="isec">
            <span className="lbl">Exam details</span>
            <span className="mu sm">
              {learning
                ? "Learning mode is on: K-levels, objective codes, exam insights and pass marks are hidden across the site."
                : "Exam mode shows K-levels, learning objectives and pass marks. Learning mode hides them if you're not sitting an exam."}
            </span>
            <button className="btn" style={{ alignSelf: "flex-start" }} onClick={() => updateLearning({ mode: learning ? "exam" : "learning" })}>
              {learning ? <><GraduationCap className="i" />Switch to exam mode</> : <><Compass className="i" />Switch to learning mode</>}
            </button>
          </div>
        </div>
        <ConceptCard />
      </div>

      <div className="crow wrap"><h2>Paths by role</h2>{myRole && <span className="mu sm push">Your role: {myRole.title}</span>}</div>
      <div className="g3">
        {roles.map((r) => (
          <Link key={r.id} to={`/roles?r=${r.id}`} className={`tile${r.id === role ? " sel" : ""}`}>
            <b>{r.title}</b>
            <span className="mu sm">{r.why}</span>
          </Link>
        ))}
      </div>

      <div className="crow wrap"><h2>Topic paths</h2><span className="mu sm push">Each path strings sections from several tracks into one subject</span></div>
      <div className="g3">
        {rankedPaths(level, role).map((p) => <PathCard key={p.id} path={p} />)}
      </div>

      {[["Practise", PRACTISE], ["Look things up", LOOKUP]].map(([heading, list]) => (
        <div key={heading} className="stack" style={{ gap: 12 }}>
          <h2>{heading}</h2>
          <div className="g3">
            {list.map((t) => (
              <Link key={t.to} to={t.to} className="tile">
                <div className="crow"><t.icon className="i mu" /><b>{t.title}</b><ArrowRight className="i mu push" /></div>
                <span className="mu sm">{t.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <span className="mu sm">Levels: <LevelChip level="beginner" /> <LevelChip level="practitioner" /> <LevelChip level="expert" /></span>
    </div>
  );
}
