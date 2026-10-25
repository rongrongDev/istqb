// Shared palette as CSS variables (Chalkboard light/dark, defined in src/styles.css).
// Inline styles should reference these tokens instead of hard-coding colours.
// Track accents (tracks.js) appear only as dots; pass/fail use T.ok / T.danger.

export const T = {
  app: "var(--app)",
  surface: "var(--surface)",
  surface2: "var(--surface-2)",
  raised: "var(--raised)",
  line: "var(--line)",
  text: "var(--text)",
  muted: "var(--muted)",
  accent: "var(--accent)",
  accentFg: "var(--accent-fg)",
  accentSoft: "var(--accent-soft)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
};

const KEY = "theme";

// "light" | "dark" | null (follow the system)
export function getThemeChoice() {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

export function setThemeChoice(choice) {
  if (choice) document.documentElement.dataset.theme = choice;
  else delete document.documentElement.dataset.theme;
  try {
    if (choice) localStorage.setItem(KEY, choice);
    else localStorage.removeItem(KEY);
  } catch {
    /* storage unavailable */
  }
}

export function isDark() {
  const choice = getThemeChoice() || document.documentElement.dataset.theme;
  if (choice) return choice === "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}
