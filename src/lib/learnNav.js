// Pages of the "Learn without an exam" area. The Shell shows the non-hidden ones as tabs (the
// rest highlight Explore); the dashboard keeps all of them out of its "More pages" list.
import { Compass, Route, PencilRuler, Wrench, FileText, Siren, NotebookPen, Building2, Scale, Briefcase, BookMarked, Shuffle, Ban, Trophy } from "lucide-react";

export const learnPages = [
  { path: "explore", short: "Explore", title: "Learn without an exam", icon: Compass },
  { path: "exercises", short: "Exercises", title: "Hands-on exercises", icon: PencilRuler },
  { path: "situations", short: "Situations", title: "Tricky situations", icon: Building2 },
  { path: "tradeoffs", short: "Trade-offs", title: "Trade-off guides", icon: Scale },
  { path: "interview", short: "Interview", title: "Interview prep", icon: Briefcase },
  { path: "learning-record", short: "Record", title: "My learning record", icon: NotebookPen },
  { path: "path", short: "Paths", title: "Topic paths", icon: Route, hidden: true },
  { path: "roles", short: "Roles", title: "Paths by role", icon: Compass, hidden: true },
  { path: "self-check", short: "Self-check", title: "Where do I start?", icon: Compass, hidden: true },
  { path: "toolbox", short: "Toolbox", title: "Tool recipes", icon: Wrench, hidden: true },
  { path: "templates", short: "Templates", title: "Templates and checklists", icon: FileText, hidden: true },
  { path: "case-studies", short: "Cases", title: "Failure case studies", icon: Siren, hidden: true },
  { path: "playbook", short: "Playbook", title: "Exam technique playbook", icon: BookMarked, hidden: true },
  { path: "pairs", short: "Pairs", title: "Confusable pairs", icon: Shuffle, hidden: true },
  { path: "anti-patterns", short: "Anti-patterns", title: "Testing anti-patterns", icon: Ban, hidden: true },
  { path: "capstones", short: "Capstones", title: "Capstone projects", icon: Trophy, hidden: true },
];

export const learnPagePaths = new Set(learnPages.map((p) => p.path));
export const learnTabs = learnPages.filter((p) => !p.hidden);
