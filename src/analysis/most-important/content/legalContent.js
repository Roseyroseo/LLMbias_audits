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
  implications: "These findings suggest that the primary fairness concern in AI-assisted legal services is variation between model architectures rather than consistent demographic bias. However, localized demographic disparities in individual models indicate that demographic signals can still influence legal reasoning in specific contexts. Because users may rely on AI systems as informal legal guidance tools, differences in model scoring thresholds and reasoning structure could influence perceived case viability, recommended legal strategies, and willingness to pursue legal action. Deployment of AI in legal support contexts should therefore include ongoing bias auditing, transparency about model behavior, and safeguards ensuring that legal guidance remains consistent and equitable across demographic conditions.",
  figureTodo: "This figure visualizes Kruskal-Wallis effect sizes (ε²) across demographic variables and models for Case 1 outcomes. Most cells are near zero, indicating minimal demographic influence on model scores, while a small number of models show localized effects in specific dimensions. The visualization highlights that overall variance is driven primarily by model identity rather than demographic attributes."
};
