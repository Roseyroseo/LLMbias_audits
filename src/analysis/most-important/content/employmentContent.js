export const EMPLOYMENT_KEY_CONTENT = {
  audit: "employment-screening",
  pageTitle: "Employment Screening Key Findings",
  shortTitle: "Employment Screening",
  keyFilePath: "src/analysis/most-important/content/employmentContent.js",
  detailedPage: "src/analysis/detailed/employment-screening.html",
  chartId: "key-employment-chart-1",
  chartTitle: "Employment Screening Key Figure",
  bullets: [
    "Pooled across all models, demographic factors explained negligible variance in recommendation scores (max pooled partial η² ≈ 0.0017), suggesting apparent parity at the system level. However, per-model analyses revealed substantial heterogeneity, with max effect sizes ranging from 0.15 to 0.40.",
    "Intersectionality drives disparities: The strongest effects often arise from interaction terms (race x gender, gender x disability), not single demographic factors.",
    "Findings were consistent within a fixed prompt and set of experiences, but per-model sample sizes (~54 per model) and sparse factorial cells limit generalizability.",
    "Robustness checks across different resume versions and prompt variations showed consistent patterns of demographic sensitivity, reinforcing the importance of careful model selection and auditing."
  ],
  implications: "These results suggest that a model can look neutral in the pooled average while still showing meaningful demographic bias on its own. Hiring teams should audit models one by one instead of assuming the average result means the tool is fair.",
  limitation: "The strongest employment claims are model-specific rather than universal. Sparse cells and bounded scores mean effect sizes tell the story more clearly than ANOVA p-values alone.",
  figureNote: "These visuals compare the calm pooled average to the more important model-level picture. The main point is that an average can hide meaningful disparities inside specific models and interaction terms."
};
