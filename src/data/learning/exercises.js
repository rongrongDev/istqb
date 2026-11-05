// Hands-on exercises: practical tasks with hints and worked solutions, attached to the Learn
// section that teaches the technique. They are practice for real work, NOT exam questions —
// the official sample-exam quizzes stay untouched.
//
// check (optional) — auto-checking:
//   { kind: "values", answer: [..numbers..] }  the learner types a comma-separated set (order ignored)
//   { kind: "number", answer: n, tolerance? }   a single number

export const exercises = [
  {
    id: "ep-age",
    track: "ctfl", section: "4.2.1",
    title: "Partition an age field",
    task: "A sign-up form accepts an age as a whole number. Ages 18 to 65 are accepted; anything else is rejected with \"You must be between 18 and 65\". Non-numbers are rejected with \"Enter a number\". List the equivalence partitions and pick one test value for each.",
    hints: ["Think about valid and invalid groups separately.", "There are numbers below the range, inside it and above it — and inputs that aren't numbers at all."],
    solution: "Four partitions: below 18 (invalid, e.g. 10), 18–65 (valid, e.g. 40), above 65 (invalid, e.g. 80), not a whole number (invalid, e.g. \"abc\" or 25.5). Four tests cover all partitions. Test invalid partitions one at a time so one rejection can't hide another.",
  },
  {
    id: "bva-weight",
    track: "ctfl", section: "4.2.2",
    title: "Boundary values for parcel weight",
    task: "A courier accepts parcels from 1 kg to 30 kg in whole kilograms. Using 2-value boundary value analysis, which weights do you test? Type them comma-separated.",
    hints: ["Each boundary has a value on it and a neighbour just outside it.", "There are two boundaries: the minimum and the maximum."],
    check: { kind: "values", answer: [0, 1, 30, 31] },
    solution: "0, 1, 30, 31. With 3-value BVA you'd add the inside neighbours too: 0, 1, 2, 29, 30, 31.",
  },
  {
    id: "dt-discount",
    track: "ctfl", section: "4.2.3",
    title: "Decision table for a discount rule",
    task: "A shop gives 10% off orders of 100 or more, and members get free delivery on any order. Members ordering 100 or more get both. Build the full decision table (conditions: member?, order ≥ 100?) and say how many test cases give full coverage.",
    hints: ["Two yes/no conditions give 2 × 2 columns.", "Each column needs an expected discount and an expected delivery charge."],
    check: { kind: "number", answer: 4 },
    solution: "4 rules: member + ≥100 → 10% off, free delivery; member + <100 → no discount, free delivery; non-member + ≥100 → 10% off, paid delivery; non-member + <100 → no discount, paid delivery. One test per column = 4 tests.",
  },
  {
    id: "st-lockout",
    track: "ctfl", section: "4.2.4",
    title: "States of a login lockout",
    task: "An account starts Active. Each wrong password moves it closer to lock: after 3 consecutive failures it becomes Locked. A correct password while Active resets the failure count. Locked accounts can only be unlocked by an admin (back to Active). Sketch the states and transitions, then count how many valid transitions you need to test for 0-switch (all transitions) coverage.",
    hints: ["Model the failure count as states: Active(0), Active(1), Active(2), Locked.", "Count wrong-password moves, correct-password resets, and the admin unlock."],
    check: { kind: "number", answer: 7 },
    solution: "States: A0, A1, A2, Locked. Transitions: wrong password A0→A1, A1→A2, A2→Locked (3); correct password A0→A0, A1→A0, A2→A0 (3); admin unlock Locked→A0 (1). That's 7. Also try invalid transitions, such as a correct password while Locked — it must stay Locked.",
  },
  {
    id: "ac-password-reset",
    track: "ctact", section: "2.1",
    title: "Acceptance criteria for a password reset",
    task: "Story: \"As a registered user I want to reset my forgotten password so that I can get back into my account.\" Write four to six acceptance criteria that are precise, measurable and free of implementation details.",
    hints: ["Cover the happy path, link expiry, reuse of the link, and what an unknown email address sees.", "Avoid how it's built (\"stored in Redis\") and vague words (\"fast\", \"user-friendly\")."],
    solution: "Example set: (1) Requesting a reset for a registered email sends a reset link to that address within 2 minutes. (2) Requesting a reset for an unknown email shows the same confirmation message, without saying the account doesn't exist. (3) The link expires 30 minutes after it was sent. (4) A link can be used only once. (5) The new password must meet the existing password rules. (6) After a successful reset, all existing sessions for that account are signed out.",
  },
  {
    id: "gherkin-transfer",
    track: "ctact", section: "2.2.2",
    title: "Gherkin for a daily transfer limit",
    task: "Rule: a customer may transfer at most 5,000 per day between their own accounts. Write two Gherkin scenarios: one that succeeds at the limit and one that is rejected just over it.",
    hints: ["Given sets balances and what's already been transferred today.", "Then should state observable results — balances and messages — not UI clicks."],
    solution: "Scenario: Transfer up to the daily limit\n  Given I have 8,000 on account A and 0 on account B\n  And I have transferred 4,000 today\n  When I transfer 1,000 from A to B\n  Then account A has 7,000 and account B has 1,000\n\nScenario: Transfer over the daily limit is rejected\n  Given I have 8,000 on account A\n  And I have transferred 4,000 today\n  When I transfer 1,001 from A to B\n  Then the transfer is rejected with \"Daily transfer limit is 5,000\"\n  And account A still has 8,000",
  },
  {
    id: "heuristics-checkout",
    track: "ctut", section: "4.2.3",
    title: "Heuristic review of a checkout page",
    task: "A checkout page: after pressing Pay, nothing happens for 6 seconds, then a new page appears. Errors appear as \"ERR_402\". The coupon code typed on the cart page has to be typed again here. There's no way back to the cart without losing the address you've entered. Which of Nielsen's heuristics does each problem violate?",
    hints: ["Four problems, four heuristics.", "Think: feedback, error messages, memory load, and escape routes."],
    solution: "No feedback after Pay → visibility of system status. \"ERR_402\" → help users recognize, diagnose and recover from errors. Retyping the coupon → recognition rather than recall. No way back without losing data → user control and freedom.",
  },
  {
    id: "usability-task",
    track: "ctut", section: "5.3.3",
    title: "Write a usability test task",
    task: "You're testing a public library app's new reservation feature. Write one test task for participants, including the scenario wording, the data you give them, and when the task counts as complete or abandoned.",
    hints: ["Phrase a realistic goal, not instructions about which buttons to press.", "Don't use the interface's own labels in the task wording — it gives the answer away."],
    solution: "Scenario: \"Your book club is reading 'The Night Circus' next month. Make sure you'll be able to pick up a copy at the Central branch.\" Data: a test library card number and PIN. Complete when a reservation for that title at Central is confirmed. Abandoned if not done within 8 minutes or the participant gives up. The wording avoids the label \"Reserve\" on purpose.",
  },
  {
    id: "throughput-vusers",
    track: "ctpt", section: "4.2.5",
    title: "How many virtual users?",
    task: "The target is 20 checkouts per second. A checkout takes about 2 seconds to respond, and real users pause about 8 seconds between steps (think time). Roughly how many concurrent virtual users do you need?",
    hints: ["Each virtual user completes one checkout every (response time + think time) seconds.", "Virtual users ≈ throughput × (response time + think time)."],
    check: { kind: "number", answer: 200 },
    solution: "20 × (2 + 8) = 200 virtual users. If response time degrades under load, the same 200 users produce less throughput — which is exactly what the test should reveal.",
  },
];

export const exercisesFor = (track, section) => exercises.filter((e) => e.track === track && e.section === section);
