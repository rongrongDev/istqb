// Learner preferences and learning-feature state for the "learning without certification"
// features: mode (exam | learning), level, role, done exercises and the self-check result.
// One localStorage key, read/write failures swallowed like src/lib/progress.js, plus a tiny
// subscribe API so every component using useLearning() re-renders on change.
import { useEffect, useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import { tracks, getTrack, findPage } from "./tracks.js";

const KEY = "learning-state";
const DEFAULTS = { mode: "exam", level: null, role: null, exercisesDone: [], selfCheck: null, trapTally: {} };
const listeners = new Set();

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}

let state = read();

export function getLearning() {
  return state;
}

export function updateLearning(patch) {
  state = { ...state, ...(typeof patch === "function" ? patch(state) : patch) };
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage blocked: keep the in-memory state for this visit
  }
  listeners.forEach((l) => l());
}

function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useLearning() {
  return useSyncExternalStore(subscribe, getLearning, getLearning);
}

export const isLearningMode = (s = state) => s.mode === "learning";

export function setExerciseDone(id, done) {
  updateLearning((s) => {
    const set = new Set(s.exercisesDone);
    if (done) set.add(id);
    else set.delete(id);
    return { exercisesDone: [...set] };
  });
}

// Count the distractor traps that caught the learner (ids from src/data/learning/traps.js).
export function recordTraps(ids) {
  if (!ids.length) return;
  updateLearning((s) => {
    const tally = { ...s.trapTally };
    for (const id of ids) tally[id] = (tally[id] || 0) + 1;
    return { trapTally: tally };
  });
}

// ---- Depth levels ----------------------------------------------------------------------
export const LEVELS = [
  { id: "beginner", label: "Beginner", desc: "New to testing or to this area — start with the basics" },
  { id: "practitioner", label: "Practitioner", desc: "You test or build software and want to go deeper" },
  { id: "expert", label: "Expert", desc: "You lead or specialise and want advanced material" },
];
const RANK = { beginner: 0, practitioner: 1, expert: 2 };

// Depth of a section: the higher of its track's level (Foundation → beginner, Specialist →
// practitioner, Advanced → expert) and its K-level (K1/K2 → beginner, K3 → practitioner,
// K4 → expert). Path steps can override it with their own `depth`.
export function depthOf(trackLevel, kLevel) {
  const k = { K3: 1, K4: 2 }[kLevel] ?? 0;
  const t = { Foundation: 0, Specialist: 1, Advanced: 2 }[trackLevel] ?? 1;
  return ["beginner", "practitioner", "expert"][Math.max(t, k)];
}

export const levelLabel = (id) => LEVELS.find((l) => l.id === id)?.label || id;
// True when content of depth `d` suits a learner at `level` (no level set = everything).
export const fitsLevel = (d, level) => !level || RANK[d] <= RANK[level];
export const levelRank = (id) => RANK[id] ?? 0;

// ---- Track data cache ------------------------------------------------------------------
const cache = {};
export function loadTrackData(id) {
  const t = getTrack(id);
  if (!t) return Promise.reject(new Error(`Unknown track ${id}`));
  cache[id] ??= Promise.all([t.loadData(), t.loadGlossary()]).then(([d, g]) => ({ track: t, chapters: d.chapters, glossary: g.glossary }));
  return cache[id];
}

// Find a section in loaded track data.
export function findSection(data, sectionId) {
  for (const ch of data.chapters) {
    const s = ch.sections.find((x) => x.id === sectionId);
    if (s) return { chapter: ch, section: s };
  }
  return null;
}

export const learnLink = (trackId, chapterId, sectionId) => {
  const t = getTrack(trackId);
  return `/${t.steps[0].path}?ch=${chapterId}&s=${encodeURIComponent(sectionId)}`;
};

export const trackIds = () => tracks.map((t) => t.id);

// The track whose page is open (e.g. /ctut-learn → ctut), or null; legacy pages count as none.
export function useCurrentTrack() {
  const { pathname } = useLocation();
  const info = findPage(pathname.replace(/^\//, ""));
  return info && !info.legacy ? info.track : null;
}

// Loaded data for a track id (chapters + glossary), or null while loading / when id is null.
export function useTrackData(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let alive = true;
    setData(null);
    if (id) loadTrackData(id).then((d) => alive && setData(d)).catch(() => {});
    return () => { alive = false; };
  }, [id]);
  return data;
}

// ---- Paths and section references ------------------------------------------------------
// Section ids start with their chapter number (e.g. "4.2.1" → chapter 4).
export const chapterOf = (sectionId) => sectionId.split(".")[0];
export const sectionLink = (trackId, sectionId) => learnLink(trackId, chapterOf(sectionId), sectionId);

// Progress of a topic path, read from each step's track progress (no extra storage).
export function pathProgress(path) {
  const studied = {};
  const isDone = (st) => (studied[st.track] ??= getTrack(st.track).progress.getStudied()).has(st.section);
  const doneFlags = path.steps.map(isDone);
  const done = doneFlags.filter(Boolean).length;
  const next = doneFlags.findIndex((d) => !d);
  return { done, total: path.steps.length, next: next < 0 ? null : next };
}

// Titles for a list of [trackId, sectionId] refs, loading each track's data once.
export function useSectionTitles(refs) {
  const ids = [...new Set(refs.map(([t]) => t))].sort().join(",");
  const [titles, setTitles] = useState({});
  useEffect(() => {
    let alive = true;
    Promise.all(ids.split(",").filter(Boolean).map((id) => loadTrackData(id).catch(() => null))).then((all) => {
      if (!alive) return;
      const out = {};
      for (const d of all) if (d) for (const ch of d.chapters) for (const s of ch.sections) out[`${d.track.id}:${s.id}`] = s.title;
      setTitles(out);
    });
    return () => { alive = false; };
  }, [ids]);
  return titles;
}

// ---- Concept of the day -----------------------------------------------------------------
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}

export const todayKey = () => new Date().toISOString().slice(0, 10);

// Same concept all day: date-seeded pick from the glossaries of the given tracks.
export async function conceptOfTheDay(trackIdList, day = todayKey()) {
  const all = await Promise.all(trackIdList.map((id) => loadTrackData(id).catch(() => null)));
  const pool = all.filter(Boolean).flatMap((d) => d.glossary.map((e) => ({ track: d.track, entry: e })))
    .sort((a, b) => (a.track.id + a.entry.term).localeCompare(b.track.id + b.entry.term));
  return pool.length ? pool[hash(day) % pool.length] : null;
}

// ---- Official quiz data on demand (playbook demos) ---------------------------------------
const DATA_DIR = { ctai: "ctaiv2", ctfl: "ctflv4", ctqdo: "ctqdo", ctmat: "ctmat", softskills: "softskills", ctgenai: "ctgenai", ctaltae: "ctaltae", cttas: "cttas", ctpt: "ctpt", ctsec: "ctsec", ctft: "ctft", ctact: "ctact", ctut: "ctut" };
const quizModules = import.meta.glob("../data/*/quiz.js");
const quizCache = {};
export function loadQuiz(trackId) {
  const loader = quizModules[`../data/${DATA_DIR[trackId]}/quiz.js`];
  if (!loader) return Promise.reject(new Error(`No quiz for ${trackId}`));
  quizCache[trackId] ??= loader().then((m) => m.questions);
  return quizCache[trackId];
}
export const findQuestion = (questions, exam, num) => questions.find((q) => String(q.exam ?? "") === String(exam) && String(q.num ?? q.id) === String(num));
