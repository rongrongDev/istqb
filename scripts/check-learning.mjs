// Integrity check for src/data/learning/: every (track, section) reference must exist,
// ids must be unique, exercises/self-check must be well-formed. Run: node scripts/check-learning.mjs
const root = new URL("../src/", import.meta.url);
const dataDir = { ctai: "ctaiv2", ctfl: "ctflv4", ctqdo: "ctqdo", ctmat: "ctmat", softskills: "softskills", ctgenai: "ctgenai", ctaltae: "ctaltae", cttas: "cttas", ctpt: "ctpt", ctsec: "ctsec", ctft: "ctft", ctact: "ctact", ctut: "ctut" };
const sections = {}, quiz = {};
for (const [id, dir] of Object.entries(dataDir)) {
  const { chapters } = await import(new URL(`data/${dir}/index.js`, root));
  sections[id] = new Set(chapters.flatMap((c) => c.sections.map((s) => s.id)));
  const { questions } = await import(new URL(`data/${dir}/quiz.js`, root));
  for (const q of questions) quiz[`${id}:${q.exam ?? ""}:${q.num ?? q.id}`] = q;
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
// ---- enrich-learning content (tasks 022–031) ----
const { trapTypes, traps } = await L("traps.js");
const { workings } = await L("workings.js");
const { tactics, trackNotes } = await L("playbook.js");
const { pairs } = await L("pairs.js");
const { situations } = await L("situations.js");
const { tradeoffs } = await L("tradeoffs.js");
const { antipatterns, areas: apAreas } = await L("antipatterns.js");
const { realworld } = await L("realworld.js");
const { questions: interview } = await L("interview.js");
const { capstones } = await L("capstones.js");
const trapIds = new Set(trapTypes.map((t) => t.id));
for (const [k, tags] of Object.entries(traps)) {
  const q = quiz[k];
  if (!q) { errs.push(`traps: no question ${k}`); continue; }
  for (const [opt, t] of Object.entries(tags)) {
    if (!trapIds.has(t)) errs.push(`traps ${k}: unknown trap ${t}`);
    if (!q.options.some((o) => o.id === opt)) errs.push(`traps ${k}: no option ${opt}`);
    if (q.correct.includes(opt)) errs.push(`traps ${k}: option ${opt} is a correct answer`);
  }
}
for (const [k, steps] of Object.entries(workings)) { if (!quiz[k]) errs.push(`workings: no question ${k}`); if (!steps.length) errs.push(`workings ${k}: empty`); }
for (const t of tactics) if (t.demo && !quiz[t.demo.join(":")]) errs.push(`playbook ${t.id}: no question ${t.demo.join(":")}`);
for (const n of trackNotes) if (!sections[n.track]) errs.push(`playbook notes: unknown track ${n.track}`);
uniq("pairs", pairs); uniq("situations", situations); uniq("tradeoffs", tradeoffs); uniq("antipatterns", antipatterns); uniq("interview", interview); uniq("capstones", capstones);
for (const p of pairs) { p.links.forEach(([t, s]) => ref(`pair ${p.id}`, t, s)); p.drill.forEach((d) => ["a", "b"].includes(d.answer) || errs.push(`pair ${p.id}: bad drill answer`)); }
for (const x of situations) { x.links.forEach(([t, s]) => ref(`situation ${x.id}`, t, s)); if (!x.responses.some((r) => r.rating === "best")) errs.push(`situation ${x.id}: no best response`); }
const recipeIds = new Set(recipes.map((r) => r.id)), templateIds = new Set(templates.map((t) => t.id));
for (const x of tradeoffs) { x.links.forEach(([t, s]) => ref(`tradeoff ${x.id}`, t, s)); x.recipes.forEach((r) => recipeIds.has(r) || errs.push(`tradeoff ${x.id}: unknown recipe ${r}`)); if (!x.sources?.length) errs.push(`tradeoff ${x.id}: no sources`); }
for (const x of antipatterns) { x.links.forEach(([t, s]) => ref(`antipattern ${x.id}`, t, s)); if (!apAreas.includes(x.area)) errs.push(`antipattern ${x.id}: bad area`); }
for (const x of realworld) ref("realworld", x.track, x.section);
for (const x of interview) x.links.forEach(([t, s]) => ref(`interview ${x.id}`, t, s));
for (const c of capstones) c.stages.forEach((st, i) => {
  st.links.forEach(([t, s]) => ref(`capstone ${c.id} stage ${i + 1}`, t, s));
  st.templates.forEach((t) => templateIds.has(t) || errs.push(`capstone ${c.id} stage ${i + 1}: unknown template ${t}`));
  (st.recipes || []).forEach((r) => recipeIds.has(r) || errs.push(`capstone ${c.id} stage ${i + 1}: unknown recipe ${r}`));
});
console.log(`traps ${Object.keys(traps).length} questions · workings ${Object.keys(workings).length} · tactics ${tactics.length} · pairs ${pairs.length} · situations ${situations.length} · trade-offs ${tradeoffs.length} · anti-patterns ${antipatterns.length} · real-world notes ${realworld.length} · interview ${interview.length} · capstones ${capstones.length}`);
console.log(`paths ${paths.length} (${paths.reduce((n, p) => n + p.steps.length, 0)} steps) · roles ${roles.length} · exercises ${exercises.length} · recipes ${recipes.length} · templates ${templates.length} · cases ${cases.length} · self-check ${areas.length}×3`);
console.log(errs.length ? errs.join("\n") : "ALL LEARNING CHECKS PASSED");
process.exit(errs.length ? 1 : 0);
