// Distractor anatomy: the kinds of trap wrong answers set, and tags for the wrong options of
// official sample questions. Tags are this site's reading of each option (not part of the
// official answer keys). Key: "<track id>:<sample set>:<question number>" → { optionId: trapId }.

export const trapTypes = [
  { id: "missed-not", title: "Missed the NOT", desc: "The option is a true statement. It's only wrong because the question asks which one is NOT true, NOT a benefit, and so on.", tip: "Circle NOT / LEAST / EXCEPT before reading the options, and re-read it before you answer." },
  { id: "absolute", title: "Too absolute", desc: "Overclaims: prove, guarantee, always, never, all, every combination. Testing rarely proves or guarantees anything.", tip: "Words like prove, guarantee, all and never are red flags. Testing reduces risk and gives information; it doesn't prove absence of defects." },
  { id: "swapped", title: "Neighbouring concept", desc: "Describes a real, closely related concept — the wrong activity, role, technique, review type or principle for this question.", tip: "Name the concept each option describes. The right one matches the exact term in the stem, not its neighbour." },
  { id: "wrong-scope", title: "Wrong scope", desc: "The right idea applied to the wrong test level, phase, model or role, or stretched beyond what the scenario says.", tip: "Check who, when and at which level. \"Only in…\" and details not in the scenario usually mark this trap." },
  { id: "partial", title: "Partly right", desc: "Some parts are correct but not all — typical in matching and \"which of i–v\" questions.", tip: "Verify every pair or list item. One wrong element makes the whole option wrong." },
  { id: "slip", title: "Calculation or counting slip", desc: "The number you get by miscounting partitions, boundaries, rules or transitions, or by using the wrong formula.", tip: "Write the coverage items down before counting, and count the denominator as carefully as the numerator." },
  { id: "myth", title: "Popular myth", desc: "Sounds like common wisdom or a nice idea, but the syllabus says otherwise.", tip: "Ask: does the syllabus actually say this, or does it just sound reasonable?" },
  { id: "reversed", title: "Reversed", desc: "States the opposite of the syllabus — the relationship, cause or risk turned around.", tip: "Restate the option in your own words; reversals become obvious once you say them plainly." },
  { id: "irrelevant", title: "True but irrelevant", desc: "A reasonable or even true statement that doesn't answer the question asked.", tip: "Re-read the question's last line. A true statement is still wrong if it answers a different question." },
];

export const getTrapType = (id) => trapTypes.find((t) => t.id === id) || null;

const T = (o) => o;
export const traps = {
  // CTFL v4.0 Sample Exam A
  "ctfl:A:1": T({ a: "absolute", b: "absolute", d: "absolute" }),
  "ctfl:A:2": T({ b: "myth", c: "wrong-scope", d: "myth" }),
  "ctfl:A:3": T({ b: "swapped", c: "swapped", d: "swapped" }),
  "ctfl:A:4": T({ a: "swapped", c: "swapped", d: "swapped" }),
  "ctfl:A:5": T({ a: "partial", c: "partial", d: "partial" }),
  "ctfl:A:6": T({ b: "swapped", c: "swapped", d: "swapped" }),
  "ctfl:A:7": T({ a: "swapped", c: "partial", d: "partial" }),
  "ctfl:A:8": T({ a: "swapped", b: "swapped", c: "reversed" }),
  "ctfl:A:9": T({ a: "wrong-scope", b: "wrong-scope", c: "wrong-scope" }),
  "ctfl:A:10": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:11": T({ a: "missed-not", b: "missed-not", c: "missed-not" }),
  "ctfl:A:12": T({ a: "irrelevant", b: "myth", d: "swapped" }),
  "ctfl:A:13": T({ b: "partial", c: "partial", d: "partial" }),
  "ctfl:A:14": T({ a: "partial", c: "partial", d: "partial" }),
  "ctfl:A:15": T({ b: "missed-not", c: "missed-not", d: "missed-not" }),
  "ctfl:A:16": T({ a: "swapped", b: "myth", c: "swapped" }),
  "ctfl:A:17": T({ a: "swapped", c: "swapped", d: "swapped" }),
  "ctfl:A:18": T({ a: "missed-not", b: "missed-not", c: "missed-not" }),
  "ctfl:A:19": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:20": T({ a: "slip", c: "slip", d: "slip" }),
  "ctfl:A:21": T({ b: "slip", c: "slip", d: "slip" }),
  "ctfl:A:22": T({ a: "slip", b: "slip", c: "slip" }),
  "ctfl:A:23": T({ a: "slip", b: "slip", c: "slip" }),
  "ctfl:A:24": T({ b: "absolute", c: "swapped", d: "absolute" }),
  "ctfl:A:25": T({ a: "missed-not", b: "missed-not", c: "missed-not" }),
  "ctfl:A:26": T({ b: "wrong-scope", c: "wrong-scope", d: "myth" }),
  "ctfl:A:27": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:28": T({ a: "swapped", c: "myth", d: "swapped" }),
  "ctfl:A:29": T({ b: "wrong-scope", c: "wrong-scope", d: "swapped" }),
  "ctfl:A:30": T({ a: "swapped", b: "absolute", d: "absolute" }),
  "ctfl:A:31": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:32": T({ a: "slip", b: "slip", c: "slip" }),
  "ctfl:A:33": T({ b: "slip", c: "slip", d: "slip" }),
  "ctfl:A:34": T({ b: "partial", c: "partial", d: "partial" }),
  "ctfl:A:35": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:36": T({ a: "swapped", b: "swapped", c: "swapped" }),
  "ctfl:A:37": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:38": T({ a: "irrelevant", b: "irrelevant", d: "irrelevant" }),
  "ctfl:A:39": T({ a: "swapped", b: "swapped", d: "swapped" }),
  "ctfl:A:40": T({ a: "myth", c: "reversed", d: "myth" }),
};

export const trapKey = (track, exam, num) => `${track}:${exam}:${num}`;
export const trapsFor = (track, q) => traps[trapKey(track, q.exam, q.num)] || null;
