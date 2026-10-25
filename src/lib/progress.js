// Lightweight localStorage-backed study progress. Fails silently when storage
// is unavailable (private browsing) — the site works, progress just isn't kept.
// Each syllabus track gets its own storage key so progress never mixes.

function makeProgress(KEY) {
  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch {
      return {};
    }
  }

  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      /* storage unavailable */
    }
  }

  return {
    getStudiedSections() {
      return new Set(load().studied || []);
    },
    setSectionStudied(sectionId, studied) {
      const data = load();
      const set = new Set(data.studied || []);
      if (studied) set.add(sectionId);
      else set.delete(sectionId);
      data.studied = [...set];
      save(data);
      return new Set(set);
    },
    getBestExamScore() {
      return load().bestExam || null; // { score, total, date }
    },
    recordExamScore(score, total) {
      const data = load();
      if (!data.bestExam || score > data.bestExam.score) {
        data.bestExam = { score, total, date: new Date().toISOString().slice(0, 10) };
        save(data);
      }
      return data.bestExam;
    },
  };
}

const v2 = makeProgress("ctai-v2-progress");
const v1 = makeProgress("ctai-v1-progress");

// CT-AI v2.0 track (existing API, unchanged)
export const getStudiedSections = v2.getStudiedSections;
export const setSectionStudied = v2.setSectionStudied;
export const getBestExamScore = v2.getBestExamScore;
export const recordExamScore = v2.recordExamScore;

// CT-AI v1.0 track
export const getStudiedSectionsV1 = v1.getStudiedSections;
export const setSectionStudiedV1 = v1.setSectionStudied;
export const getBestExamScoreV1 = v1.getBestExamScore;
export const recordExamScoreV1 = v1.recordExamScore;

// CTFL v4.0 track
const ctfl = makeProgress("ctfl-v4-progress");
export const getStudiedSectionsCTFL = ctfl.getStudiedSections;
export const setSectionStudiedCTFL = ctfl.setSectionStudied;
export const getBestExamScoreCTFL = ctfl.getBestExamScore;
export const recordExamScoreCTFL = ctfl.recordExamScore;

// CT-QDO v1.0 track
const qdo = makeProgress("ct-qdo-progress");
export const getStudiedSectionsQDO = qdo.getStudiedSections;
export const setSectionStudiedQDO = qdo.setSectionStudied;
export const getBestExamScoreQDO = qdo.getBestExamScore;
export const recordExamScoreQDO = qdo.recordExamScore;

// CT-MAT (2019) track
const mat = makeProgress("ct-mat-progress");
export const getStudiedSectionsMAT = mat.getStudiedSections;
export const setSectionStudiedMAT = mat.setSectionStudied;
export const getBestExamScoreMAT = mat.getBestExamScore;
export const recordExamScoreMAT = mat.recordExamScore;

// ASTQB CT-SS (Soft Skills for Testers) track
const ss = makeProgress("ct-ss-progress");
export const getStudiedSectionsSS = ss.getStudiedSections;
export const setSectionStudiedSS = ss.setSectionStudied;
export const getBestExamScoreSS = ss.getBestExamScore;
export const recordExamScoreSS = ss.recordExamScore;
