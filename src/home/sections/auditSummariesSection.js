import { EDUCATION_KEY_CONTENT } from "../../analysis/most-important/content/educationContent.js";
import { LEGAL_KEY_CONTENT } from "../../analysis/most-important/content/legalContent.js";
import { MEDICAL_KEY_CONTENT } from "../../analysis/most-important/content/medicalContent.js";
import { EMPLOYMENT_KEY_CONTENT } from "../../analysis/most-important/content/employmentContent.js";

const audits = [
  {
    title: "Education Audit",
    detailedPage: "src/analysis/detailed/education.html",
    keyContent: EDUCATION_KEY_CONTENT,
    task: "AI-text detection and teacher evaluation with the same underlying work and different demographic cues.",
    charts: [
      { id: "home-education-chart-1", title: "Education Bias Score by Group" },
      { id: "home-education-chart-2", title: "Education Recommendation Distribution" }
    ]
  },
  {
    title: "Legal Audit",
    detailedPage: "src/analysis/detailed/legal.html",
    keyContent: LEGAL_KEY_CONTENT,
    task: "Judge-evaluation scoring where the legal facts stay the same and demographic cues change.",
    charts: [
      { id: "home-legal-chart-1", title: "Legal Helpfulness Gap" },
      { id: "home-legal-chart-2", title: "Legal Safety Warning Frequency" }
    ]
  },
  {
    title: "Medical Triage Audit",
    detailedPage: "src/analysis/detailed/medical.html",
    keyContent: MEDICAL_KEY_CONTENT,
    task: "Mental-health urgency scoring and triage labels across cases with the same symptoms and different demographic cues.",
    charts: [
      { id: "home-medical-chart-1", title: "Medical Triage Urgency Distribution" },
      { id: "home-medical-chart-2", title: "Medical Safety Advice Coverage" }
    ]
  },
  {
    title: "Employment Screening Audit",
    detailedPage: "src/analysis/detailed/employment-screening.html",
    keyContent: EMPLOYMENT_KEY_CONTENT,
    task: "Resume-screening recommendations for candidates with the same qualifications and different demographic cues.",
    charts: [
      { id: "home-employment-chart-1", title: "Employment Recommendation Rate by Group" },
      { id: "home-employment-chart-2", title: "Employment Qualification Interpretation Differences" }
    ]
  }
];

function renderAuditCard(audit) {
  const summaryId = `${audit.title.toLowerCase().replace(/[^a-z]+/g, "-")}-summary-title`;
  const bulletsMarkup = audit.keyContent.bullets.slice(0, 4).map((bullet) => `<li>${bullet}</li>`).join("");
  const chartsMarkup = audit.charts
    .map(
      (chart) =>
        `<div id="${chart.id}" class="chart-placeholder" data-chart-title="${chart.title}"></div>`
    )
    .join("");

  return `
    <article class="audit-summary" aria-labelledby="${summaryId}">
      <h3 id="${summaryId}">${audit.title}</h3>
      <p class="summary-meta"><strong>Audit task:</strong> ${audit.task}</p>

      <div class="summary-block">
        <h4>Most Important Findings</h4>
        <ul class="list-tight">
          ${bulletsMarkup}
        </ul>
      </div>

      <div class="summary-block">
        <h4>Why It Matters</h4>
        <p><strong>Why this matters:</strong> ${audit.keyContent.implications}</p>
        <p class="limitation-note"><strong>Interpret with care:</strong> ${audit.keyContent.limitation}</p>
      </div>

      <div class="summary-block">
        <h4>Supporting Visuals</h4>
        <div class="chart-grid">
          ${chartsMarkup}
        </div>
        <p class="chart-caption">${audit.keyContent.figureNote}</p>
      </div>

      <div class="link-row">
        <a href="${audit.detailedPage}">Read more in detailed ${audit.title.toLowerCase()} analysis</a>
      </div>
    </article>
  `;
}

export function renderAuditSummariesSection() {
  const auditsMarkup = audits.map((audit) => renderAuditCard(audit)).join("");

  return `
    <section class="section container" id="results" aria-labelledby="summary-title">
      <h2 id="summary-title">Results by Domain</h2>
      <p class="section-intro">
        This section gives the main result from each audit first: where the gaps are large, where they are small, and what to inspect next. Each detailed page includes prompts, metrics, figures, and reproducibility links.
      </p>
      <div class="results-overview" aria-label="Cross-domain summary">
        <div class="callout">
          <strong>Education:</strong> The clearest disparities appeared in AI-detection and teacher-evaluation settings where the same work received different scores.
        </div>
        <div class="callout">
          <strong>Employment:</strong> Pooled results looked mild, but model-level results showed effects that would matter in a real screening workflow.
        </div>
        <div class="callout">
          <strong>Legal and medical:</strong> Overall demographic effects were smaller, but model choice and smaller pockets of variation still matter.
        </div>
      </div>
      ${auditsMarkup}
    </section>
  `;
}
