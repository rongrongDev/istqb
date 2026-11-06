// CT-FT v1.0 — Chapter 4: Data Testing and Data Management
// summary/deepPoints from syllabus v1.0 (2026); examInsights from the ASTQB Finance Testing v1.0 sample exam
export default {
  id: 4,
  title: 'Data Testing and Data Management',
  time: '90 min',
  color: '#059669',
  bg: '#ECFDF5',
  overview: "Six questions in the ASTQB sample incl. two K3 reconciliation scenarios. Know ACCURACY (correctly represents real values) vs CONSISTENCY (same format, value, meaning everywhere), typical defects, reconciliation in migration (record sampling, aggregation, CHECKSUMS, balance matching) and in integrated environments (whole lifecycles, tolerances, cut-offs, ledgers, transformations, multi-currency; card and ATM scenarios), and the privacy vs data protection test areas (masking, pseudonymization, retention, protected logs).",
  sections: [
    {
      id: '4.1', title: 'Data Accuracy and Data Consistency', level: 'K2', type: 'deep',
      deepPoints: [
        "Data testing verifies accuracy, completeness, timeliness and LINEAGE across the data lifecycle, per data governance.",
        "ACCURACY: data correctly represents real financial values — complete, current, defect-free. CONSISTENCY: uniform format, value and meaning across systems — no conflicting information.",
        "Why: FINANCIAL REPORTING (small errors cascade into wrong calculations and summaries); RISK AND DECISION SUPPORT (bad inputs distort forecasts and risk profiles); SYSTEM INTEGRATION AND AUTOMATION (smooth flows, less manual intervention).",
        "Typical defects: duplicate transactions in statements; ledger vs sub-ledger balance differences; customer data variations across onboarding/identity systems; CURRENCY MISMATCHES in cross-border processing; loss or corruption in migration/transformation.",
        "Focus: compare source and target, validate reconciliation, business rules, impact of changes; master and reference data. Practices: validation rules and exception handling, automated comparison of large datasets, DATA PROFILING, early anomaly detection, documented definitions and metadata."
      ],
      examInsights: ["ASTQB-Q22/Q23 — A payment applied without currency conversion = a consistency problem; inaccurate or inconsistent data makes forecasting models misleading."]
    },
    {
      id: '4.2', title: 'Data Reconciliation Across Financial Systems', level: 'K3', type: 'deep',
      deepPoints: [
        "Reconciliation confirms every system (processing, settlement, accounting, reporting) reflects the SAME financial outcome despite different logic, timing and transformations — critical during core banking migrations, upgrades and large transfers.",
        "MIGRATION: confirm legacy data is fully and correctly represented after transform and load — RECORD SAMPLING, AGGREGATION comparisons, CHECKSUM verification, BALANCE MATCHING; post-migration compare opening balances, transaction totals, posting statuses.",
        "INTEGRATED ENVIRONMENTS: consistency across core banking, payment gateways, clearing/settlement, data warehouses — whole workflows (authorization, settlement, reversal, rejection) and aggregated reporting vs transaction data.",
        "Key areas: system-to-system alignment (states, amounts, timestamps); reconciliation SCOPE (balances, counts, posting dates, statuses); TOLERANCES and exceptions (rounding from currency conversion); BATCH and CUT-OFF handling (month-end — no gaps or duplicates); LEDGER and balance reconciliation (suspense/unmatched items tracked); frequency and volume (real-time, intra-day, end-of-day; peaks); TRANSFORMATION and mapping (fees, interest, conversion); MULTI-CURRENCY and cross-border (rates, settlement currencies, timing).",
        "Scenarios: CARD (issuing, acquiring, networks, settlement — amounts, fees, reversals, chargebacks, postings); ATM (switches, processors, core — withdrawals, fees, reversals, partial dispensations, exceptions)."
      ],
      examInsights: ["ASTQB-Q24/Q25 (K3) — Beyond the ATM screen, reconcile the triggering of all downstream workflows; between two banks with different currencies, test that currency is transformed consistently."]
    },
    {
      id: '4.3', title: 'Data Privacy and Data Protection in Finance Testing', level: 'K2', type: 'deep',
      deepPoints: [
        "DATA PRIVACY = proper collection, use, storage, sharing and deletion of personal/financial data per law and policy. Test: role-based access to sensitive data; restricted visibility in screens, reports, exports, ERROR MESSAGES; use only for authorized purposes and per CONSENT; retention and deletion rules; controlled sharing via interfaces; logging of access for accountability. Risks: unintended exposure, leakage via logs/reports, inconsistent controls.",
        "DATA PROTECTION = safeguarding sensitive information, esp. in test environments: avoid real production data unless strongly masked/anonymized under strict controls; prefer SYNTHETIC, ANONYMIZED, PSEUDONYMIZED or MASKED data. Test: data CLASSIFICATION by sensitivity; MASKING/anonymization preserving usability; PSEUDONYMIZATION of identifiers; access only for authorized people; RETENTION for the required period then secure removal; logs and monitoring outputs without plain-text confidential data."
      ],
      examInsights: ["ASTQB-Q26/Q27 — First apply risk-based testing so the highest-risk data is always protected; sensitive data testers shouldn't see (e.g. in logs) should be masked."]
    }
  ]
};
