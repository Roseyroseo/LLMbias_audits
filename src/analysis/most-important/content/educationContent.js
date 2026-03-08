export const EDUCATION_KEY_CONTENT = {
  audit: "education",
  pageTitle: "Education Key Findings",
  shortTitle: "Education",
  keyFilePath: "src/analysis/most-important/content/educationContent.js",
  detailedPage: "src/analysis/detailed/education.html",
  chartId: "key-education-chart-1",
  chartTitle: "Education Key Figure",
  bullets: [
    "AI text detection tools falsely flagged authentic student writing as AI-generated at rates from 18% to 82% for identical text.",
    "Teachers with Gender Studies degrees scored 9.92 points lower (78 vs. 88 out of 100) than colleagues with other majors despite having identical service records—the largest bias effect observed (η² = 0.742, p < 0.001).",
    "Models showed task-specific bias patterns: the same AI that appeared unbiased in reward evaluations exhibited massive bias (η² = 0.80) in layoff evaluations, making single-scenario testing insufficient to certify fairness.",
    "Even when evaluating definitively AI-generated text, detection rates varied by up to 25 percentage points based solely on demographic markers, proving models incorporate identity signals independent of actual content."
  ],
  implications: "Schools deploying these AI systems risk creating discriminatory academic integrity enforcement (falsely accusing certain students more often) and biased personnel decisions (systematically disadvantaging teachers with specific backgrounds). The inconsistent behavior across task framings means pre-deployment testing in one scenario cannot guarantee fairness in real-world use. Institutions must implement continuous demographic bias monitoring, provide human oversight for high-stakes decisions, and establish democratic governance processes before deploying AI systems that affect students' and educators' futures.",
  figureTodo: "[TODO: Update src/analysis/most-important/content/educationContent.js -> Add figure caption and interpretation note.]"
};
