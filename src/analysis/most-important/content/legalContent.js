export const LEGAL_KEY_CONTENT = {
  audit: "legal",
  pageTitle: "Legal Key Findings",
  shortTitle: "Legal",
  keyFilePath: "src/analysis/most-important/content/legalContent.js",
  detailedPage: "src/analysis/detailed/legal.html",
  chartId: "key-legal-chart-1",
  chartTitle: "Legal Key Figure",
  bullets: [
    "Model identity is the dominant driver of variation in legal evaluations, explaining up to 70.2% of variance in the responsiveness metric (Shift) and over 45% of variance in case scores.",
    "Demographic perturbations (ethnicity, gender, immigration status, age) produced negligible omnibus effects across outcomes, with ε² ≤ 0.002 in most tests despite statistical significance from the large sample size.",
    "Localized demographic disparities appeared within specific models, including moderate ethnicity effects in Claude 3.5 (ε² up to 0.174) and large pairwise contrasts in Gemma 2 27B risk assessments (Cliff’s δ up to 0.55).",
    "Models differ substantially in judicial reasoning style and scoring thresholds, which can change perceived case strength, legal risk, and recommended legal strategy even when case facts remain identical."
  ],
  implications: "In this audit, the bigger fairness issue was variation across models rather than broad demographic bias across the whole task. Still, some individual models showed demographic gaps large enough to matter. Because people may use these tools as informal legal guidance, differences in scoring style and thresholds could affect case strategy and perceived case strength.",
  limitation: "The overall legal result is somewhat reassuring, but it is not final. Some within-model contrasts are still meaningful, and prompt framing may change where those gaps appear.",
  figureNote: "These visuals show that most overall demographic effects stay near zero, while a smaller set of model-specific contrasts stands out. The takeaway is that the broad pattern looks stable, but some models still need scrutiny."
};
