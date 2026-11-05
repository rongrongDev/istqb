import { BookOpen, List, Lightbulb, BookA, Timer } from "lucide-react";
import { useLearning, isLearningMode } from "../lib/learning.js";

// Small shared pieces of the Exam Room design (classes live in src/styles.css).

export const STEP_SHORT = ["Learn", "Summary", "Insights", "Glossary", "Quiz"];
export const STEP_ICON = { Learn: BookOpen, Summary: List, Insights: Lightbulb, Glossary: BookA, Quiz: Timer };

export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export const passMark = (total) => Math.ceil(total * 0.65);

// Test brackets [✓] mark (design/site-revamp-blueprint.html → Logo A).
export function Logo() {
  return (
    <span className="logo" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 6H6v20h4.5M21.5 6H26v20h-4.5" strokeWidth="3" />
        <path d="m11.5 16.5 3.2 3.2 6.3-7" strokeWidth="3.2" />
      </svg>
    </span>
  );
}

const K = { K1: ["K1 Remember", ""], K2: ["K2 Understand", "acc"], K3: ["K3 Apply", "warn"], K4: ["K4 Analyze", "bad"] };
// Hidden in Learning mode (no exam framing).
export function KChip({ level }) {
  const learning = isLearningMode(useLearning());
  if (learning) return null;
  const [label, cls] = K[level] || [level, ""];
  return <span className={`chip ${cls}`}>{label}</span>;
}

export function Meter({ value, pass, className = "" }) {
  const cls = pass ? `pm ${value >= 65 ? "ok" : "bad"}` : "";
  return <span className={`meter ${cls} ${className}`}><span style={{ width: `${Math.min(100, value)}%` }} /></span>;
}

export function Hint({ icon: Icon, tone = "", children }) {
  return (
    <div className={`hintbar ${tone}`}>
      <Icon className="i" />
      <span>{children}</span>
    </div>
  );
}

// Learn-content keywords are an array, or { general, aiSpecific } for CT-AI.
export const keywordList = (kw) => (Array.isArray(kw) ? kw : [...(kw?.general || []), ...(kw?.aiSpecific || [])]);
