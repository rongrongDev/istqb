// Shared site palette: beige backgrounds/surfaces + dark grey text/UI, matching the main page
// (src/App.jsx). Every page should reference these tokens instead of hard-coding neutrals.
// Track accent colors (per-chapter colors, header gradients) and the success/fail colors
// (#059669 / #DC2626) are intentionally NOT part of the neutral palette.

export const T = {
  // Beige backgrounds & surfaces
  pageBg: "#F5F0E6",        // page background (flat)
  pageGradient: "linear-gradient(135deg, #F5F0E6 0%, #EDE6D8 100%)", // main-page style gradient
  panel: "#F5F0E6",         // subtle inner boxes on white cards
  surface: "#EDE6D8",       // chips, filter pills, deeper fills
  track: "#E3DCCB",         // progress-bar tracks, question dots
  border: "#E3DCCB",        // standard 1px card borders
  borderStrong: "#D6CDB8",  // stronger borders (inputs, outlined buttons)
  hairline: "#EDE6D8",      // hairline separators inside cards
  disabled: "#C9BEA5",      // disabled text/icons on light surfaces

  // Dark grey text scale
  ink: "#111827",           // headings / strongest text
  inkSoft: "#1F2937",       // primary text, dark UI elements
  body: "#374151",          // body text
  muted: "#6B7280",         // secondary text
  faint: "#9CA3AF",         // faint text / inactive icons
};
