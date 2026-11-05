// Pages of the "Learn without an exam" area. The Shell shows them as tabs; the dashboard
// keeps them out of its "More pages" list.
import { Compass, Route, PencilRuler, Wrench, FileText, Siren, NotebookPen } from "lucide-react";

export const learnPages = [
  { path: "explore", short: "Explore", title: "Learn without an exam", icon: Compass },
  { path: "path", short: "Paths", title: "Topic paths", icon: Route, hidden: true },
  { path: "exercises", short: "Exercises", title: "Hands-on exercises", icon: PencilRuler },
  { path: "toolbox", short: "Toolbox", title: "Tool recipes", icon: Wrench },
  { path: "templates", short: "Templates", title: "Templates and checklists", icon: FileText },
  { path: "case-studies", short: "Cases", title: "Failure case studies", icon: Siren },
  { path: "learning-record", short: "Record", title: "My learning record", icon: NotebookPen },
  { path: "roles", short: "Roles", title: "Paths by role", icon: Compass, hidden: true },
  { path: "self-check", short: "Self-check", title: "Where do I start?", icon: Compass, hidden: true },
];

export const learnPagePaths = new Set(learnPages.map((p) => p.path));
export const learnTabs = learnPages.filter((p) => !p.hidden);
