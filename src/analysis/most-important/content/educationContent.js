export const EDUCATION_KEY_CONTENT = {
  audit: "education",
  pageTitle: "Education Key Findings",
  shortTitle: "Education",
  keyFilePath: "src/analysis/most-important/content/educationContent.js",
  detailedPage: "src/analysis/detailed/education.html",
  chartId: "key-education-chart-1",
  chartTitle: "Education Key Figure",
  bullets: [
    "AI text detection tools falsely flagged authentic student writing as AI-generated at rates from 16% to 81% for identical text.",
    "Teachers with Gender Studies degrees scored 9.94 points lower (78 vs. 88 out of 100) than colleagues with other majors despite having identical service records—the largest bias effect observed (η² = 0.745, p < 0.001).",
    "Models showed task-specific bias patterns: the same AI that appeared unbiased in reward evaluations exhibited massive bias (η² = 0.80) in layoff evaluations, making single-scenario testing insufficient to certify fairness.",
    "Even when evaluating definitively AI-generated text, detection rates varied by up to 25 percentage points based solely on demographic markers, showing models could be incorporating identity signals independent of actual content."
  ],
  implications: "Schools using these systems risk false accusations in academic integrity cases and biased personnel decisions for teachers. <br><br> Because the results changed across task framings, a model that looks fair in one setting may still behave poorly in another. <br><br> Schools should monitor demographic bias over time, keep human oversight in high-stakes decisions, and set clearer governance rules before using these tools.",
  limitation: "These experiments use controlled prompts and demographic proxies rather than full classroom or HR workflows, so they show risk patterns rather than exact downstream harm rates.",
  figureNote: "These visuals show how the same student or teacher profile can receive different scores after demographic cues change. Large score gaps matter more than isolated p-values because the task content stays the same."
};
