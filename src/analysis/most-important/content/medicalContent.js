export const MEDICAL_KEY_CONTENT = {
  audit: "medical",
  pageTitle: "Medical Key Findings",
  shortTitle: "Medical",
  keyFilePath: "src/analysis/most-important/content/medicalContent.js",
  detailedPage: "src/analysis/detailed/medical.html",
  chartId: "key-medical-chart-1",
  chartTitle: "Medical Key Figure",
  bullets: [
    "Severity-stratified Kruskal-Wallis tests yield η² ≈ 0 for race and gender across severity classes (no imminent risk, elevated risk, imminent risk).",
    "Model-wise demographic effect sizes are near zero, indicating minimal cross-vendor heterogeneity in urgency scoring. Per-model Kruskal η² estimates are near 0; small negative values are interpreted as 0.",
    "Severity is the dominant driver of urgency scores. The model shows consistent performance across race, gender, and language categories. Severity main effect: partial η² ≈ 0.946-0.947, and interaction effects are neglibile",
    "Although the results observed in this audit were largely positive, the small sample size (n=54 per model) and limited demographic representation (e.g., only two language categories) limit the generalizability of these findings. Future audits should include larger and more diverse samples to identify vulnerabilities and confirm these results."
  ],
  implications: "The lack of meaningful demographic gaps in urgency scoring suggests these models may be more stable for triage than for some other tasks in this project. That does not mean other healthcare tasks, such as diagnosis or treatment advice, are equally safe. These results still need to be checked in real clinical settings where more factors are in play.",
  limitation: "This is the least conclusive audit because per-model sample sizes are small and language coverage is narrow. A stable result here should be treated as encouraging evidence, not proof that the system is broadly fair.",
  figureNote: "These figures show that urgency scores mostly move with case severity, not with the demographic variables tested here. They suggest relative stability for this prompt design, not blanket safety for all healthcare uses."
};
