// "Show the working" for official calculation and technique questions: the method an expert
// would follow on scrap paper. Written for this site; the official answer and explanation stay
// as they are. Key: "<track id>:<sample set>:<question number>" → ordered steps.

export const workings = {
  // ---- CTFL v4.0 ----
  "ctfl:A:20": [
    "List the partitions to cover: floor = {ground, first, second-or-higher}; garden = {none, small, large}. Each-choice coverage means every partition of each variable appears in at least one test.",
    "Note the constraint: only ground-floor flats have gardens. So \"small\" and \"large\" can only be tested with \"ground floor\" — that needs two different tests.",
    "Those two tests cover ground floor, small and large. Still uncovered: first floor, second-or-higher, and no garden.",
    "First floor and second-or-higher each need their own test; both must use \"no garden\", which covers the last partition.",
    "Total: 2 + 2 = 4 tests.",
  ],
  "ctfl:A:21": [
    "Write down the partitions: 0–50, 51–60, 61–70, 71–80, 81–90, 91–100.",
    "2-value BVA coverage items = the minimum and maximum of every partition: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100 → 12 items.",
    "Mark the values the tests use: 91, 50, 81, 60, 70, 80 → 6 of the 12 items.",
    "Coverage = 6 / 12 = 50%.",
  ],
  "ctfl:A:22": [
    "Read each rule against the description, not just against the table: a discount needs member AND no missed deadline; the T-shirt needs member AND 15th rental.",
    "R8 = non-member, missed deadline, 15th rental, with the gift action ticked.",
    "Non-members never get the T-shirt (it's a member gift), so R8's action contradicts the description.",
    "Check the others quickly: R4, R2 and R6 all match the rules as described, so R8 is the impossible one.",
  ],
  "ctfl:A:32": [
    "Three-point (PERT) estimate: E = (optimistic + 4 × most likely + pessimistic) / 6.",
    "E = (2 + 4 × 11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6.",
    "E = 10 person-hours.",
  ],
  "ctfl:B:20": [
    "Identify the valid partitions by what the system does: no discount (not a multiple of 10), 10% (multiple of 10 but not of 20), 50% (multiple of 20).",
    "Classify each option's values: a) 19 none, 20 → 50%, 30 → 10% — all three partitions.",
    "b) 11, 12 none; 20 → 50% — two. c) 1 none; 10, 50 → 10% — two (50 is not a multiple of 20). d) 29, 31 none; 10, 30 → 10% — two.",
    "Only a) covers all three partitions.",
  ],
  "ctfl:B:21": [
    "Partitions of password length: too short 0–5, OK 6–12, too long 13+.",
    "2-value BVA items (boundaries): 0, 5, 6, 12, 13 — already covered.",
    "3-value BVA adds each boundary's other neighbour: around 0 → 1; around 5 → 4; around 6 → 7; around 12 → 11; around 13 → 14.",
    "Additional lengths: 1, 4, 7, 11, 14.",
  ],
  "ctfl:B:22": [
    "Map each test to the one rule (column) it exercises: TC1 (125, 141) → Rule 4; TC2 (200, 201) → Rule 4; TC3 (124, 201) → Rule 2; TC4 (109, 200) → Rule 2; TC5 (201, 140) → Rule 5.",
    "Distinct rules covered: 2, 4, 5 → 3 of the 5 columns.",
    "Coverage = 3 / 5 = 60%. Duplicate tests on the same column add nothing.",
  ],
  "ctfl:C:20": [
    "Coverage items: length correct, length incorrect (too few and too many digits), digits all the same, at least two different digits.",
    "Check a): 12 → too short; 1111 → right length, all the same; 1234 → right length, different digits; 12345 → too long. Everything covered, both sides of the length rule included.",
    "b) misses the too-long side; c) has no fully valid PIN; d) has no all-same-digits PIN.",
  ],
  "ctfl:C:21": [
    "Derive partitions from the rule: incorrect ≤ 100, OK 101–199, incorrect ≥ 200.",
    "Boundary values: 100, 101, 199, 200. In 2-value BVA the neighbours are themselves boundaries, so there are 4 coverage items.",
    "Count items per option: a) 100, 200 → 2; b) 100, 200 → 2; c) 100, 101 → 2; d) 101, 199, 200 → 3.",
    "d) gives the highest coverage (75%).",
  ],
  "ctfl:C:22": [
    "A contradiction means one input combination matches two rules with different actions.",
    "Test the candidate (F, F, F): R2 needs C2 = F (C1, C3 don't care) → matches; R3 needs C1 = F and C3 = F (C2 don't care) → matches.",
    "R2 and R3 prescribe different actions, so (F, F, F) exposes the contradiction.",
    "The other options match one rule or none — none is an omission, not a contradiction.",
  ],
  "ctfl:D:20": [
    "Partitions of D = CY − BY: D < 0 error, 0–17 student, 18–64 none, 65+ pensioner.",
    "Existing tests cover: D = 30 (none) and D = −1 (error). Missing: student and pensioner.",
    "Compute D for each option: a) 64 none; b) 65 pensioner; c) −65 error; d) 18 none; e) 0 student.",
    "Choose b) and e).",
  ],
  "ctfl:D:21": [
    "Partitions of temperature: too low ≤ −1, OK 0–2, too high ≥ 3.",
    "2-value BVA items: −1, 0, 2, 3.",
    "Only c) contains all four.",
  ],
  "ctfl:D:22": [
    "Map the existing tests to columns: TC1 → R2, TC2 → R3, TC3 → R7, TC4 → R6. Uncovered: R1, R4, R5.",
    "Check each candidate: a) 66, unregistered → R4 (new); b) 55, unregistered, 2 years → R2 (already covered); c) 19, registered → R6 (covered).",
    "Only a) raises coverage.",
  ],
  "ctfl:D:23": [
    "From the table, list the valid transitions: S1–Available→S2, S1–NotAvailable→S3, S2–ChangeRoom→S1, S2–Cancel→S4, S2–Pay→S4, S3–Available→S2, S3–Cancel→S4 → 7 transitions.",
    "Trace option b) from S1: Available (S1→S2), ChangeRoom (S2→S1), NotAvailable (S1→S3), Available (S3→S2), Pay (S2→S4) → 5 different transitions.",
    "Trace the others the same way, counting a repeated transition once: a) 4, c) 3, d) is invalid early.",
    "b) covers the most: 5 of 7.",
  ],
  // ---- CT-AcT ----
  "ctact:A:17": [
    "A DMN decision table has input columns and output columns, and one row (rule) per input combination with the output value.",
    "Inputs here: Exam #1 and Exam #2 (0 or 1). Output: the entitlement (No / Partial / Full).",
    "a) has exactly that: 2 inputs, 1 output, 4 rules. b) has no inputs; c) splits the single output into three yes/no columns; d) adds a calculated column that isn't DMN notation.",
  ],
  "ctact:A:19": [
    "List the tasks: Select 'Withdraw $100', Select receipt, Take receipt, Withdraw $100 and remove card, Remove card (withdrawal rejected).",
    "Test 1 (balance $100, receipt YES) runs the accepted path; the parallel gateway runs both Take receipt and Withdraw — 4 tasks.",
    "The rejection task needs balance < $100 → Test 3 ($85).",
    "Two tests (1 and 3) cover every task; no smaller set can, so a) is minimal.",
  ],
  "ctact:A:20": [
    "Decision coverage counts outcomes of exclusive (X) gateways only; the parallel (+) gateway isn't a decision.",
    "Outcomes to cover: balance ≥ $100, balance < $100, receipt YES, receipt NO → but YES/NO only happen when balance ≥ $100.",
    "So you need: (≥$100, YES), (≥$100, NO), (<$100) → three tests.",
    "Tests 1, 2, 3 do exactly that; option d).",
  ],
  // ---- CT-PT ----
  "ctpt:ASTQB:28": [
    "Throughput here = how many results updates one phone receives for the contest.",
    "Count the races: 30 qualifying races + 8 semi-final races + 4 final races = 42, one update each.",
    "Add the final overall results update: 42 + 1 = 43.",
  ],
};

export const workingFor = (track, q) => workings[`${track}:${q.exam}:${q.num}`] || null;
