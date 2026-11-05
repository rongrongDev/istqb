// Integrity check for src/data/learning/: every (track, section) reference must exist,
// ids must be unique, exercises/self-check must be well-formed. Run: node scripts/check-learning.mjs
const root = new URL("../src/", import.meta.url);
const dataDir = { ctai: "ctaiv2", ctfl: "ctflv4", ctqdo: "ctqdo", ctmat: "ctmat", softskills: "softskills", ctgenai: "ctgenai", ctaltae: "ctaltae", cttas: "cttas", ctpt: "ctpt", ctsec: "ctsec", ctft: "ctft", ctact: "ctact", ctut: "ctut" };
const sections = {};
for (const [id, dir] of Object.entries(dataDir)) {
  const { chapters } = await import(new URL(`data/${dir}/index.js`, root));
  sections[id] = new Set(chapters.flatMap((c) => c.sections.map((s) => s.id)));
}
const L = (f) => import(new URL(`data/learning/${f}`, root));
const { paths } = await L("paths.js");
const { roles } = await L("roles.js");
const { exercises } = await L("exercises.js");
const { recipes } = await L("recipes.js");
const { templates } = await L("templates.js");
const { cases } = await L("cases.js");
const { areas } = await L("selfcheck.js");
const errs = [];
const ref = (where, t, s) => { if (!sections[t]) errs.push(`${where}: unknown track ${t}`); else if (!sections[t].has(s)) errs.push(`${where}: ${t} has no section ${s}`); };
const uniq = (name, list) => { const seen = new Set(); for (const x of list) { if (seen.has(x.id)) errs.push(`${name}: duplicate id ${x.id}`); seen.add(x.id); } };
const levels = new Set(["beginner", "practitioner", "expert"]);
uniq("paths", paths); uniq("roles", roles); uniq("exercises", exercises); uniq("recipes", recipes); uniq("templates", templates); uniq("cases", cases); uniq("areas", areas);
const pathIds = new Set(paths.map((p) => p.id));
for (const p of paths) {
  if (!levels.has(p.level)) errs.push(`path ${p.id}: bad level`);
  p.steps.forEach((st, i) => { ref(`path ${p.id} step ${i + 1}`, st.track, st.section); if (!st.note) errs.push(`path ${p.id} step ${i + 1}: no note`); if (st.depth && !levels.has(st.depth)) errs.push(`path ${p.id} step ${i + 1}: bad depth`); });
}
for (const r of roles) { r.paths.forEach((p) => pathIds.has(p) || errs.push(`role ${r.id}: unknown path ${p}`)); r.extras.forEach((x) => ref(`role ${r.id}`, x.track, x.section)); }
for (const e of exercises) {
  ref(`exercise ${e.id}`, e.track, e.section);
  if (!e.task || !e.solution) errs.push(`exercise ${e.id}: task/solution missing`);
  if (e.check && !["values", "number"].includes(e.check.kind)) errs.push(`exercise ${e.id}: bad check kind`);
}
for (const r of recipes) { r.links.forEach(([t, s]) => ref(`recipe ${r.id}`, t, s)); if (!r.code || !r.version) errs.push(`recipe ${r.id}: code/version missing`); }
for (const t of templates) t.links.forEach(([tr, s]) => ref(`template ${t.id}`, tr, s));
for (const c of cases) { c.links.forEach(([t, s]) => ref(`case ${c.id}`, t, s)); if (!c.sources?.length) errs.push(`case ${c.id}: no sources`); }
for (const a of areas) {
  if (!pathIds.has(a.path)) errs.push(`self-check ${a.id}: unknown path ${a.path}`);
  if (a.questions.length !== 3) errs.push(`self-check ${a.id}: needs 3 questions`);
  a.questions.forEach((q, i) => { if (!(q.correct >= 0 && q.correct < q.options.length) || !q.why) errs.push(`self-check ${a.id} q${i + 1}: bad`); });
}
console.log(`paths ${paths.length} (${paths.reduce((n, p) => n + p.steps.length, 0)} steps) · roles ${roles.length} · exercises ${exercises.length} · recipes ${recipes.length} · templates ${templates.length} · cases ${cases.length} · self-check ${areas.length}×3`);
console.log(errs.length ? errs.join("\n") : "ALL LEARNING CHECKS PASSED");
process.exit(errs.length ? 1 : 0);
