// Exam technique playbook: tactics for answering ISTQB/ASTQB-style questions, each shown on a
// real official sample question (`demo` = [track id, sample set, question number]).
// Tactics help you read questions well; they never replace knowing the syllabus.

export const tactics = [
  {
    id: "last-line-first",
    title: "Read the last line first",
    rule: "Before reading a long scenario, read the actual question at the end, then read the scenario looking for what it needs.",
    why: "Scenarios carry extra detail. Knowing what's asked tells you which details matter.",
    demo: ["ctfl", "A", 27],
  },
  {
    id: "spot-the-not",
    title: "Spot NOT, LEAST and EXCEPT",
    rule: "If the question asks which is NOT true, three options are true statements. Find the odd one out — don't pick the first true thing you see.",
    why: "\"Missed the NOT\" is one of the most common ways to lose easy points.",
    demo: ["ctfl", "A", 15],
  },
  {
    id: "distrust-absolutes",
    title: "Distrust absolute words",
    rule: "Options with prove, guarantee, always, never, all or every are usually wrong in testing questions.",
    why: "Testing reduces risk and gives information; the syllabus never claims it proves the absence of defects.",
    demo: ["ctfl", "A", 1],
  },
  {
    id: "exact-term",
    title: "Match the exact term, not its neighbour",
    rule: "Name the activity, role or technique each option describes, then keep only the one that matches the term in the question.",
    why: "Distractors are often correct descriptions of a neighbouring concept — test design when the question asks about test analysis.",
    demo: ["ctfl", "A", 4],
  },
  {
    id: "k-level-cue",
    title: "Use the K-level as a hint",
    rule: "K1 asks you to recognise a definition, K2 to explain or compare, K3 to apply a technique (often with a count or calculation), K4 to analyse a scenario.",
    why: "If a K3 question seems to need no working, you've probably missed something.",
    demo: ["ctfl", "A", 21],
  },
  {
    id: "write-coverage-items",
    title: "Write the coverage items down before counting",
    rule: "For partitions, boundaries, decision-table columns or transitions, list every coverage item first, then tick the ones the tests hit.",
    why: "Most technique questions are lost by miscounting the total, not by misunderstanding the technique.",
    demo: ["ctfl", "B", 22],
  },
  {
    id: "underline-constraints",
    title: "Underline the constraints in scenarios",
    rule: "Look for words that limit the answer: \"minimal\", \"no requirements yet\", \"only valid partitions\", \"only ground-floor flats have gardens\".",
    why: "The constraint is usually what separates the right answer from a plausible one.",
    demo: ["ctfl", "A", 20],
  },
  {
    id: "select-two",
    title: "Judge each option on its own in \"select TWO\"",
    rule: "Decide true/false for every option independently, then check you have exactly the number asked for.",
    why: "There's no partial credit; picking the two that \"sound like a pair\" is a common slip.",
    demo: ["ctfl", "A", 6],
  },
  {
    id: "anchor-pair",
    title: "Matching questions: find one certain pair",
    rule: "Find the one pair you're surest of and cross out every option that doesn't contain it. Repeat with the next surest pair.",
    why: "You rarely need to know every pair to reach the answer.",
    demo: ["ctfl", "A", 13],
  },
  {
    id: "syllabus-not-workplace",
    title: "Answer from the syllabus, not your workplace",
    rule: "When your team does it differently, choose what the syllabus says.",
    why: "Distractors are often popular practices or myths that sound reasonable.",
    demo: ["ctfl", "A", 30],
  },
  {
    id: "best-of-two",
    title: "For BEST and MOST, eliminate then compare",
    rule: "Cross out the clearly wrong options, then compare the last two against the exact wording of the question.",
    why: "\"BEST\" questions usually have two defensible options; one fits the question's wording more precisely.",
    demo: ["ctfl", "A", 10],
  },
  {
    id: "budget-time",
    title: "Budget time by points and flag",
    rule: "Spend roughly a minute per point, flag anything that takes longer, and come back at the end. Never leave a question blank — there's no penalty for wrong answers.",
    why: "A stuck 1-point question can cost you three questions you'd have answered.",
    demo: ["ctsec", "A", 2],
  },
];

export const trackNotes = [
  { track: "ctfl", title: "CTFL chapter 4 (techniques)", notes: [
    "Equivalence partitioning: \"each choice\" coverage needs every partition of every variable at least once; constraints between variables can force extra tests.",
    "2-value BVA counts the boundary values of every partition; 3-value adds the neighbour on the other side.",
    "Decision-table coverage counts columns exercised, not tests run — two tests on one column count once.",
    "Valid-transition coverage counts distinct transitions; repeated events on the same transition don't add coverage.",
  ] },
  { track: "ctpt", title: "CT-PT (performance)", notes: [
    "Read the shared base scenario once, carefully; several questions reuse its numbers.",
    "Virtual users ≈ throughput × (response time + think time).",
    "Goals use percentiles (90th/95th), not averages or maximums.",
  ] },
  { track: "ctact", title: "CT-AcT (models and Gherkin)", notes: [
    "BPMN: an X diamond is a decision (one path); a + diamond runs all branches and is not a decision.",
    "DMN tables: inputs, one output column, one rule per input combination.",
    "Gherkin: Given = state, When = one user action, Then = observable result — no UI clicks.",
  ] },
  { track: "ctsec", title: "CT-SEC (multi-point questions)", notes: [
    "K4 questions are worth 3 points: read them first if you're short on time, but don't rush them.",
  ] },
];
