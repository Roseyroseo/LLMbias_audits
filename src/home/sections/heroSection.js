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
  { key: "code", label: "Code" },
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
      <h1 id="hero-title">${SITE_CONFIG.siteTitle}</h1>
      <p>
        We conduct a large-scale experimental audit of 11 leading large language models across education, legal services, employment, and mental health where 
        algorithmic decisions directly affect people’s lives. Using controlled demographic perturbations, we isolate whether models produce statistically 
        significant disparities when semantic content is held constant. Our findings reveal consistent, measurable bias across multiple domains, raising urgent concerns 
        about deploying LLMs in critical decision-making systems.
      </p>
      <div class="icon-links" aria-label="Project artifacts">
        ${linksMarkup}
      </div>
    </section>
  `;
}
