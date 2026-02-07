import { EDUCATION_KEY_CONTENT } from "../../analysis/most-important/content/educationContent.js";
import { LEGAL_KEY_CONTENT } from "../../analysis/most-important/content/legalContent.js";
import { MEDICAL_KEY_CONTENT } from "../../analysis/most-important/content/medicalContent.js";

const audits = [
  {
    title: "Education Audit",
    detailedPage: "src/analysis/detailed/education.html",
    keyContent: EDUCATION_KEY_CONTENT,
    charts: [
      { id: "home-education-chart-1", title: "Education Bias Score by Group" },
      { id: "home-education-chart-2", title: "Education Recommendation Distribution" }
    ]
  },
  {
    title: "Legal Audit",
    detailedPage: "src/analysis/detailed/legal.html",
    keyContent: LEGAL_KEY_CONTENT,
    charts: [
      { id: "home-legal-chart-1", title: "Legal Helpfulness Gap" },
      { id: "home-legal-chart-2", title: "Legal Safety Warning Frequency" }
    ]
  },
  {
    title: "Medical Triage Audit",
    detailedPage: "src/analysis/detailed/medical.html",
    keyContent: MEDICAL_KEY_CONTENT,
    charts: [
      { id: "home-medical-chart-1", title: "Medical Triage Urgency Distribution" },
      { id: "home-medical-chart-2", title: "Medical Safety Advice Coverage" }
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

      <div class="summary-block">
        <h4>Most Important Findings</h4>
        <p>[TODO: Update ${audit.keyContent.keyFilePath} -> These bullets are auto-synced from this source file.]</p>
        <ul class="list-tight">
          ${bulletsMarkup}
        </ul>
        <p><strong>Source of truth:</strong> <code>${audit.keyContent.keyFilePath}</code></p>
      </div>

      <div class="summary-block">
        <h4>Supporting Visuals</h4>
        <p>[TODO: Update assets/js/charts/placeholderCharts.js -> Replace placeholders with real charts for this audit.]</p>
        <div class="chart-grid">
          ${chartsMarkup}
        </div>
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
    <section class="section container" aria-labelledby="summary-title">
      <h2 id="summary-title">Audit Summaries</h2>
      ${auditsMarkup}
    </section>
  `;
}
