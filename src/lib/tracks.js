// Central registry of certification tracks. The hub (src/App.jsx), the track landing
// pages (src/components/TrackPage.jsx), and the sitewide breadcrumb/next-step bar
// (src/components/PageChrome.jsx) are all driven by this config — adding a future
// track is a new entry here, not a page rewrite. Tracks without pages yet can set
// `comingSoon: true` to appear on the hub as a disabled card.
import {
  getStudiedSections, getBestExamScore,
  getStudiedSectionsV1, getBestExamScoreV1,
  getStudiedSectionsCTFL, getBestExamScoreCTFL,
  getStudiedSectionsQDO, getBestExamScoreQDO,
  getStudiedSectionsMAT, getBestExamScoreMAT,
  getStudiedSectionsSS, getBestExamScoreSS,
} from "./progress.js";

export const tracks = [
  {
    id: "ctai",
    shortName: "CT-AI v2.0",
    title: "AI Testing (CT-AI v2.0)",
    org: "ISTQB",
    level: "Specialist",
    badge: "CURRENT SYLLABUS",
    blurb: "Testing AI-based systems and using AI in testing — 7 chapters from the official v2.0 syllabus.",
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4C1D95 100%)",
    accent: "#4F46E5",
    prerequisite: "CTFL certificate",
    steps: [
      { path: "ctaiv2-learn", step: 1, title: "Learn", desc: "Full teaching content for all 7 chapters, written from the official syllabus — start here" },
      { path: "ctaiv2", step: 2, title: "Chapter Summaries", desc: "Condensed revision notes: skim vs deep-dive per section" },
      { path: "ctaiv2-guide", step: 3, title: "Exam Insights", desc: "Summaries + known traps and key facts from the official sample exam" },
      { path: "ctaiv2-glossary", step: 4, title: "Glossary", desc: "All 63 syllabus keywords with definitions — exams test exact wording" },
      { path: "ctaiv2-quiz", step: 5, title: "Quiz & Exam Simulation", desc: "40 official sample questions: practice with explanations, or a timed 60-min mock exam" },
    ],
    legacy: {
      label: "CT-AI v1.0 — superseded syllabus",
      note: "Some institutions still certify against v1.0 — check which version your exam uses before studying.",
      pages: [
        { path: "ctaiv1-learn", title: "Learn (v1.0)", desc: "Teaching content for all 11 chapters of the v1.0 syllabus, with objectives and keywords" },
        { path: "ctai", title: "Chapter Summaries (v1.0)", desc: "Condensed revision notes: skim vs deep-dive per section" },
        { path: "ctaiv1-glossary", title: "Glossary (v1.0)", desc: "All v1.0 syllabus keywords with definitions" },
        { path: "ctai-quiz", title: "Quiz (v1.x)", desc: "67 sample exam questions (main set + appendix) with answer rationales" },
      ],
    },
    progress: { getStudied: getStudiedSections, getBestExam: getBestExamScore },
    loadData: () => import("../data/ctaiv2/index.js"),
  },
  {
    id: "ctfl",
    shortName: "CTFL v4.0",
    title: "Foundation Level (CTFL v4.0)",
    org: "ISTQB",
    level: "Foundation",
    badge: "START HERE",
    blurb: "The entry-level certification most learners start with — no prerequisite. 6 chapters, Sample Exams A–D.",
    gradient: "linear-gradient(135deg, #0F172A 0%, #134E4A 50%, #0F766E 100%)",
    accent: "#0F766E",
    prerequisite: "None — entry level",
    steps: [
      { path: "ctflv4-learn", step: 1, title: "Learn", desc: "Full teaching content for all 6 chapters, written from the official v4.0.1 syllabus — start here" },
      { path: "ctflv4", step: 2, title: "Chapter Summaries", desc: "Condensed revision notes: skim vs deep-dive per section" },
      { path: "ctflv4-guide", step: 3, title: "Exam Insights", desc: "Summaries + known traps and key facts from official Sample Exams A–D" },
      { path: "ctflv4-glossary", step: 4, title: "Glossary", desc: "97 syllabus keywords with definitions — exams test exact wording" },
      { path: "ctflv4-quiz", step: 5, title: "Quiz & Exam Simulation", desc: "160 official sample questions (Exams A–D): practice with explanations, or a timed 60-min mock exam" },
    ],
    progress: { getStudied: getStudiedSectionsCTFL, getBestExam: getBestExamScoreCTFL },
    loadData: () => import("../data/ctflv4/index.js"),
  },
  {
    id: "ctqdo",
    shortName: "CT-QDO v1.0",
    title: "Quality in DevOps (CT-QDO v1.0)",
    org: "ISTQB",
    level: "Specialist",
    badge: "NEW 2026",
    blurb: "QA and testing in a DevOps environment — 4 chapters, 48 official sample questions.",
    gradient: "linear-gradient(135deg, #1C1917 0%, #7C2D12 50%, #C2410C 100%)",
    accent: "#C2410C",
    prerequisite: "CTFL certificate",
    steps: [
      { path: "ctqdo-learn", step: 1, title: "Learn", desc: "Full teaching content for all 4 chapters, written from the official v1.0 syllabus — start here" },
      { path: "ctqdo", step: 2, title: "Chapter Summaries", desc: "Condensed revision notes: skim vs deep-dive per section" },
      { path: "ctqdo-guide", step: 3, title: "Exam Insights", desc: "Summaries + known traps and key facts from the official sample exam" },
      { path: "ctqdo-glossary", step: 4, title: "Glossary", desc: "87 syllabus keywords and DevOps-specific terms with definitions — exams test exact wording" },
      { path: "ctqdo-quiz", step: 5, title: "Quiz & Exam Simulation", desc: "48 official sample questions (main exam + appendix): practice with explanations, or a timed 60-min mock exam" },
    ],
    progress: { getStudied: getStudiedSectionsQDO, getBestExam: getBestExamScoreQDO },
    loadData: () => import("../data/ctqdo/index.js"),
  },
  {
    id: "ctmat",
    shortName: "CT-MAT 2019",
    title: "Mobile Application Testing (CT-MAT)",
    org: "ISTQB",
    level: "Specialist",
    badge: "SPECIALIST",
    blurb: "Testing mobile apps: device hardware, app software, connectivity, labs, and automation — 5 chapters.",
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #701A75 50%, #A21CAF 100%)",
    accent: "#A21CAF",
    prerequisite: "CTFL certificate",
    steps: [
      { path: "ctmat-learn", step: 1, title: "Learn", desc: "Full teaching content for all 5 chapters, written from the official 2019 syllabus — start here" },
      { path: "ctmat", step: 2, title: "Chapter Summaries", desc: "Condensed revision notes: skim vs deep-dive per section" },
      { path: "ctmat-guide", step: 3, title: "Exam Insights", desc: "Summaries + known traps and key facts from official Sample Exam A" },
      { path: "ctmat-glossary", step: 4, title: "Glossary", desc: "118 chapter keywords and domain-specific terms with definitions — exams test exact wording" },
      { path: "ctmat-quiz", step: 5, title: "Quiz & Exam Simulation", desc: "40 official Sample Exam A questions: practice with explanations, or a timed 60-min mock exam" },
    ],
    progress: { getStudied: getStudiedSectionsMAT, getBestExam: getBestExamScoreMAT },
    loadData: () => import("../data/ctmat/index.js"),
  },
  {
    id: "softskills",
    shortName: "Soft Skills CT-SS",
    title: "Soft Skills for Testers (CT-SS v1.0)",
    org: "ASTQB",
    level: "Specialist",
    badge: "NO PREREQUISITE",
    blurb: "Communication, business writing, promoting the value of testing, and professional development — 4 chapters.",
    gradient: "linear-gradient(135deg, #1F1024 0%, #9D174D 50%, #E11D48 100%)",
    accent: "#E11D48",
    prerequisite: "None — interest in testing",
    steps: [
      { path: "softskills-learn", step: 1, title: "Learn", desc: "Full teaching content for all 4 chapters, written from the official v1.0 syllabus — start here" },
      { path: "softskills", step: 2, title: "Chapter Summaries", desc: "Condensed revision notes: skim vs deep-dive per section" },
      { path: "softskills-guide", step: 3, title: "Exam Insights", desc: "Summaries + known traps and key facts from the official sample exam" },
      { path: "softskills-glossary", step: 4, title: "Glossary", desc: "25 chapter keywords and key concepts with definitions — exams test exact wording" },
      { path: "softskills-quiz", step: 5, title: "Quiz & Exam Simulation", desc: "40 official sample questions (45 points): practice with explanations, or a timed 60-min mock exam" },
    ],
    progress: { getStudied: getStudiedSectionsSS, getBestExam: getBestExamScoreSS },
    loadData: () => import("../data/softskills/index.js"),
  },
];

// v1 progress helpers exposed for the CT-AI track landing page (legacy block).
export const legacyProgress = { getStudied: getStudiedSectionsV1, getBestExam: getBestExamScoreV1 };

export function getTrack(id) {
  return tracks.find((t) => t.id === id) || null;
}

// Find which track/step (or legacy page) a route path belongs to.
// Returns { track, title, step?, next?, legacy? } or null for unregistered pages.
export function findPage(path) {
  for (const track of tracks) {
    const i = track.steps.findIndex((s) => s.path === path);
    if (i >= 0) {
      return { track, title: track.steps[i].title, step: track.steps[i].step, next: track.steps[i + 1] || null };
    }
    const pages = track.legacy?.pages || [];
    const j = pages.findIndex((p) => p.path === path);
    if (j >= 0) {
      return { track, title: pages[j].title, legacy: true, next: pages[j + 1] || null };
    }
  }
  return null;
}

// All registered route paths (used by the hub to compute the "More" section).
export function registeredPaths() {
  const out = new Set();
  for (const track of tracks) {
    for (const s of track.steps) out.add(s.path);
    for (const p of track.legacy?.pages || []) out.add(p.path);
  }
  return out;
}
