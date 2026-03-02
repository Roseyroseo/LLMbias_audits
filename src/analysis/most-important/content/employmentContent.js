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
  implications: "These findings suggest that even when models appear to be neutral at the system level, they may exhibit significant demographic bias at the individual model level. Hiring teams should use model-specific auditing and avoid assuming that a model is fair simply because it performs well on average.",
  figures: [
    {
      id: "employment_eta_squared",
      src: "src/analysis/most-important/content/images/employment_eta_squared.png",
      caption: "Partial η² by model (employment)",
    },
    {
      id: "employment_avb_dist",
      src: "src/analysis/most-important/content/images/employment_avb_dist.png",
      caption: "Average bias distribution across demographics",
    },
  ],
};
