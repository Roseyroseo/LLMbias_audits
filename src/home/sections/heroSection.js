import { SITE_CONFIG } from "../../../assets/js/config.js";

function iconSvg(type) {
  if (type === "report") {
    return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6 3h8l4 4v14H6V3zm8 1.5V8h3.5L14 4.5zM8 11h8v1.5H8V11zm0 3h8v1.5H8V14zm0 3h6v1.5H8V17z"/></svg>';
  }

  if (type === "code") {
    return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M8.59 16.59L4 12l4.59-4.59L10 8.82 6.83 12 10 15.18l-1.41 1.41zm6.82 0L14 15.18 17.17 12 14 8.82l1.41-1.41L20 12l-4.59 4.59z"/></svg>';
  }

  return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1h-5l-3 2-3-2H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 4v2h12V7H6zm0 4v2h12v-2H6zm0 4v2h8v-2H6z"/></svg>';
}

const artifacts = [
  { key: "report", label: "Report" },
  { key: "code", label: "Repository" },
  { key: "poster", label: "Poster" }
];

export function renderHeroSection() {
  const linksMarkup = artifacts
    .map((artifact) => {
      return `
        <a class="icon-button" data-artifact-link="${artifact.key}" href="${SITE_CONFIG.artifactLinks[artifact.key]}" target="_blank" rel="noopener noreferrer">
          ${iconSvg(artifact.key)}
          <span>${artifact.label}</span>
        </a>
      `;
    })
    .join("");

  return `
    <section class="hero container" aria-labelledby="hero-title">
      <p class="eyebrow">DSC 180AB Capstone Project</p>
      <h1 id="hero-title">${SITE_CONFIG.siteTitle}</h1>
      <p class="hero-lead">
        We audited 11 widely used large language models to ask a simple question: when the same essay, resume, legal case, or patient report stays the same, do decisions change when demographic cues change? Across education, legal support, employment screening, and mental-health triage, we found that the answer depends a lot on the task, specific framing, and the model. The largest gaps showed up in settings tied to sanctions, screening, and personnel decisions.
      </p>
      <p class="hero-supporting-copy">
        We interviewed professionals across various fields: Instructors, hiring teams, legal aid groups, clinicians, and product teams in order to investigate their concerns surrounding whether LLM outputs are safe enough to use in their respective domain contexts. <br><br>Our audits are not meant to label models as fair or biased; rather, we want to showcase where disparities appear, where they seem limited, and open up discussions about the implications of these findings and the potential risk of deploying these systems without proper oversight.
      </p>
      <div class="hero-metrics" aria-label="Project highlights">
        <article class="metric-card">
          <h2>Problem</h2>
          <p>Institutions and individuals are increasingly relying on LLM-based systems to make decisions that affect students, job seekers, patients, and people looking for legal help.</p>
        </article>
        <article class="metric-card">
          <h2>Approach</h2>
          <p>We kept the case text the same and changed demographic cues such as names, gender, language, and disability status.</p>
        </article>
        <article class="metric-card">
          <h2>Results</h2>
          <p>Education and employment showed the clearest disparities. Legal and mental-health results were more mixed and depended more on the model.</p>
        </article>
        <article class="metric-card">
          <h2>Scope</h2>
          <p>We measured output differences in controlled prompts. We did not estimate downstream harms or certify any model as safe to deploy.</p>
        </article>
      </div>
      <div class="hero-actions" aria-label="Quick links">
        <a class="button-link" href="#problem">See the problem</a>
        <a class="button-link" href="#results">Jump to results</a>
        <a class="button-link secondary" href="#method">Review the method</a>
      </div>
      <div class="icon-links" aria-label="Project artifacts">
        ${linksMarkup}
      </div>
    </section>
  `;
}
