// CT-FT v1.0 — Chapter 4 learn content, authored from ISTQB CT-FT Syllabus v1.0.
// Paraphrased teaching material so the chapter can be studied without opening the PDF.

export default {
  intro:
    "Financial decisions and compliance rest on data being accurate, consistent and protected. This chapter covers data accuracy and consistency, reconciling data across systems during migrations and daily operations, and testing data privacy and data protection.",
  keywords: [
    "data accuracy", "data consistency", "data reconciliation", "test data", "test technique",
    "audit trail", "core banking system", "customer trust", "data privacy", "data profiling", "general ledger", "settlement system",
  ],
  objectives: [
    { id: "FT-4.1", level: "K2", text: "Explain the importance of data accuracy and consistency across financial systems" },
    { id: "FT-4.2", level: "K3", text: "Apply data reconciliation techniques to multi-system financial processes" },
    { id: "FT-4.3", level: "K2", text: "Explain the importance of data privacy and data protection in finance testing" },
  ],
  sections: {
    "4.1": {
      objective: "FT-4.1",
      body: [
        { type: "p", text: "Data testing verifies the accuracy, completeness, timeliness and lineage of financial data throughout its lifecycle, in line with data governance." },
        { type: "table", headers: ["Quality", "Meaning"], rows: [
          ["Data accuracy", "Data correctly represents real values — transactions, balances, customer details — and is complete, current and defect-free"],
          ["Data consistency", "The same format, value and meaning wherever data is used; systems never present conflicting information"],
        ]},
        { type: "list", intro: "Why it matters:", items: [
          "Financial reporting — tiny errors cascade into wrong calculations and misleading summaries.",
          "Risk and decision support — models fed bad data give distorted forecasts and risk profiles.",
          "Integration and automation — consistent data flows smoothly with less manual intervention.",
        ]},
        { type: "list", intro: "Typical defects:", items: [
          "Duplicate transactions on statements.",
          "Balance differences between ledger and sub-ledger.",
          "Customer data that differs between onboarding and identity systems.",
          "Currency mismatches in cross-border processing.",
          "Data lost or corrupted during migration or transformation.",
        ]},
        { type: "p", text: "Test data as it moves, transforms and is stored: compare source and target, validate reconciliation and business rules, and assess the impact of changes, understanding master and reference data. Good practice: clear validation rules and exception handling, automated comparison of large datasets, data profiling, early anomaly detection and documented definitions and metadata." },
      ],
    },
    "4.2": {
      objective: "FT-4.2",
      body: [
        { type: "p", text: "Reconciliation confirms that every system a transaction passes through — processing, settlement, accounting, reporting — reflects the same financial outcome despite differences in logic, timing and transformation. It matters most during core banking migrations, upgrades and large data transfers." },
        { type: "p", text: "In migrations, confirm that legacy data is completely and correctly represented after transformation and loading, using record sampling, aggregation comparisons, checksum verification and balance matching; afterwards compare opening balances, transaction totals and posting statuses. In operational environments, reconcile across core banking, payment gateways, clearing and settlement and data warehouses — following whole lifecycles (authorization, settlement, reversal, rejection) and checking aggregated reports against transaction data." },
        { type: "table", headers: ["Reconciliation area", "What to check"], rows: [
          ["System-to-system alignment", "Transaction states, amounts and timestamps match across interfaces"],
          ["Scope definition", "Reconciliation points — balances, counts, posting dates, statuses — for deposits, withdrawals, transfers, loan repayments"],
          ["Tolerances and exceptions", "Acceptable variances (e.g. conversion rounding) vs genuine discrepancies"],
          ["Batch and cut-off", "Transactions around end-of-day or month-end cut-offs: no gaps, no duplicates"],
          ["Ledger and balance", "Transactions match sub-ledger and general ledger postings; suspense items tracked to resolution"],
          ["Frequency and volume", "Real-time, intra-day or end-of-day reconciliation stays reliable at peak volumes"],
          ["Transformation and mapping", "Fees, interest and currency conversion produce consistent results"],
          ["Multi-currency and cross-border", "Converted amounts and settlement values align despite rates and timing"],
        ]},
        { type: "example", title: "Card and ATM scenarios", text: "Card payments: reconcile amounts, fees, reversals, chargebacks and settlement postings across issuing, acquiring, networks and settlement. ATM: reconcile withdrawals, fees, reversals, partial dispensations and exceptions across switches, processors and core banking." },
      ],
    },
    "4.3": {
      objective: "FT-4.3",
      body: [
        { type: "p", text: "Financial systems hold highly sensitive data, which must be protected during testing — and testing must confirm the system itself handles data as privacy and protection rules require." },
        { type: "table", headers: ["", "Data privacy", "Data protection"], rows: [
          ["Concerns", "Proper collection, use, storage, sharing and deletion of personal and financial data per law and policy", "Safeguarding sensitive information, especially in test environments"],
          ["Test areas", "Role-based access; hidden sensitive data in screens, reports, exports and error messages; use only per consent and purpose; retention and deletion rules; controlled sharing via interfaces; access logging for accountability", "Classification by sensitivity; masking or anonymization that keeps data usable; pseudonymized identifiers; access for authorized staff only; test data kept only as long as needed then securely removed; no plain-text confidential data in logs or monitoring"],
        ]},
        { type: "note", title: "Production data", text: "Avoid real production data in testing unless it is strongly masked or anonymized under strict controls; prefer synthetic, anonymized, pseudonymized or masked data." },
      ],
    },
  },
};
