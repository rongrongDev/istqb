// Toolbox: short recipes showing how a technique runs in a real tool. Tool-specific on purpose
// (the syllabi stay tool-neutral). Each recipe carries the tool version it was written for;
// re-check commands when a major version changes. `links` = related Learn sections.
// Only run scans and load tests against systems you own or have written permission to test.

export const recipes = [
  {
    id: "playwright-ui",
    tool: "Playwright",
    version: "Written for @playwright/test 1.4x",
    title: "A first end-to-end UI check",
    goal: "Automate one user journey through a web page and assert what the user should see.",
    links: [["ctaltae", "3.1.5"], ["ctaltae", "3.1.4"], ["cttas", "3.3.1"]],
    steps: [
      "Create a project and install browsers: npm init playwright@latest",
      "Write the test below in tests/search.spec.js",
      "Run it: npx playwright test — then open the HTML report with npx playwright show-report",
      "Prefer role- and label-based locators (getByRole, getByLabel): they survive styling changes and match how users find things",
    ],
    lang: "js",
    code: `import { test, expect } from "@playwright/test";

test("searching shows matching results", async ({ page }) => {
  await page.goto("https://staging.example.com/");
  await page.getByRole("searchbox", { name: "Search" }).fill("boundary value");
  await page.getByRole("button", { name: "Search" }).click();

  // Web-first assertion: waits until the heading appears (no manual sleeps)
  await expect(page.getByRole("heading", { name: /results/i })).toBeVisible();
});`,
  },
  {
    id: "k6-load",
    tool: "k6",
    version: "Written for k6 v0.5x–1.x",
    title: "A ramp-up load test with pass/fail thresholds",
    goal: "Simulate users ramping up to a steady load, hold it, and fail the run if the 90th-percentile response time or error rate is too high.",
    links: [["ctpt", "4.2.4"], ["ctpt", "4.2.7"], ["ctpt", "2.1"]],
    steps: [
      "Install k6 (package manager or the official Docker image grafana/k6)",
      "Save the script below as load-test.js and point it at a test environment you're allowed to load",
      "Run it: k6 run load-test.js",
      "Read the summary: http_req_duration p(90), http_req_failed rate, and whether thresholds passed",
    ],
    lang: "js",
    code: `import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 20 }, // ramp up to 20 virtual users
    { duration: "3m", target: 20 }, // steady state — measure here
    { duration: "1m", target: 0 },  // ramp down
  ],
  thresholds: {
    http_req_duration: ["p(90)<800"], // 90% of requests under 800 ms
    http_req_failed: ["rate<0.01"],   // fewer than 1% errors
  },
};

export default function () {
  const res = http.get("https://staging.example.com/products");
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(3); // think time between user actions
}`,
  },
  {
    id: "zap-baseline",
    tool: "OWASP ZAP",
    version: "Written for the ZAP stable Docker image (2.1x)",
    title: "A passive baseline security scan",
    goal: "Spider a web app and report common issues (missing security headers, cookie flags, information leaks) without attacking it.",
    links: [["ctsec", "8.1"], ["ctsec", "4.5.1"], ["ctsec", "3.4.2"]],
    steps: [
      "Get written approval and agree the target and time window (see CT-SEC 3.4.2)",
      "Run the command below from an empty folder; the report is written there",
      "Open baseline-report.html; triage each alert as real, accepted risk, or false positive",
      "The baseline scan is passive. Active scanning (zap-full-scan.py) sends attacks — never run it without approval",
    ],
    lang: "sh",
    code: `docker run --rm -v "$(pwd)":/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable \\
  zap-baseline.py -t https://staging.example.com -r baseline-report.html`,
  },
  {
    id: "axe-accessibility",
    tool: "axe-core with Playwright",
    version: "Written for @axe-core/playwright 4.x",
    title: "Automated WCAG A/AA checks on a page",
    goal: "Catch the accessibility problems a machine can detect (missing alt text, low contrast, unlabelled inputs) on every build.",
    links: [["ctut", "3.2.2"], ["ctut", "1.2.3"], ["ctmat", "3.1.8"]],
    steps: [
      "Add the package to a Playwright project: npm i -D @axe-core/playwright",
      "Add the test below and run npx playwright test",
      "Each violation lists the rule, the WCAG criterion and the failing elements",
      "Automated checks find only part of the problems — keyboard-only and screen-reader walkthroughs are still needed",
    ],
    lang: "js",
    code: `import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home page has no WCAG A/AA violations", async ({ page }) => {
  await page.goto("https://staging.example.com/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});`,
  },
  {
    id: "newman-api",
    tool: "Postman + Newman",
    version: "Written for Postman v10+ and Newman 6.x",
    title: "API tests that run in a pipeline",
    goal: "Write assertions on an API response in Postman, then run the same collection from the command line in CI.",
    links: [["ctqdo", "3.2.2"], ["ctqdo", "2.2.2"], ["ctaltae", "5.1.3"]],
    steps: [
      "In Postman, add a request (e.g. POST /orders) and paste the script below into its Tests (post-response) tab",
      "Export the collection and environment as JSON files into your repository",
      "Run in CI: npx newman run orders.postman_collection.json -e staging.postman_environment.json --reporters cli,junit",
      "Publish the JUnit XML so the pipeline shows failed assertions",
    ],
    lang: "js",
    code: `pm.test("creates the order (201)", () => {
  pm.response.to.have.status(201);
});

pm.test("returns the new order id and status", () => {
  const body = pm.response.json();
  pm.expect(body.id).to.be.a("string");
  pm.expect(body.status).to.eql("PENDING");
});

pm.test("responds within 500 ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(500);
});`,
  },
  {
    id: "cucumber-gherkin",
    tool: "Cucumber (JavaScript)",
    version: "Written for @cucumber/cucumber 10.x",
    title: "Run Gherkin scenarios as automated tests",
    goal: "Turn a Given–When–Then scenario into an executable test by binding each step to code.",
    links: [["ctact", "2.2.2"], ["ctfl", "4.5.3"], ["ctact", "1.2.3"]],
    steps: [
      "npm i -D @cucumber/cucumber",
      "Put the scenario in features/transfer.feature and the steps in features/steps.js (below)",
      "Run: npx cucumber-js",
      "Keep steps at the business level; hide clicks and API calls inside step code so scenarios stay readable",
    ],
    lang: "js",
    code: `// features/transfer.feature
// Feature: Transfer between own accounts
//   Scenario: Transfer within the balance
//     Given account "A" has 500
//     And account "B" has 0
//     When I transfer 200 from "A" to "B"
//     Then account "A" has 300
//     And account "B" has 200

// features/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("node:assert");
const { Bank } = require("../src/bank"); // the code under test

Given("account {string} has {int}", function (name, amount) {
  this.bank ??= new Bank();
  this.bank.open(name, amount);
});

When("I transfer {int} from {string} to {string}", function (amount, from, to) {
  this.bank.transfer(from, to, amount);
});

Then("account {string} has {int}", function (name, expected) {
  assert.strictEqual(this.bank.balance(name), expected);
});`,
  },
];

export const getRecipe = (id) => recipes.find((r) => r.id === id) || null;
export const recipesFor = (track, section) => recipes.filter((r) => r.links.some(([t, s]) => t === track && s === section));
