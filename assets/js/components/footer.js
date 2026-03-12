import { SITE_CONFIG } from "../config.js";

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-row">
        <div>
          <p>${SITE_CONFIG.siteTitle} | ${SITE_CONFIG.teamName} | ${SITE_CONFIG.footerYearPlaceholder}</p>
          <p class="footer-note">Detailed audit pages include prompts, figures, and notebook links.</p>
        </div>
        <div class="footer-links" aria-label="Project artifacts">
          <a data-artifact-link="report" href="${SITE_CONFIG.artifactLinks.report}" target="_blank" rel="noopener noreferrer">Report</a>
          <a data-artifact-link="code" href="${SITE_CONFIG.artifactLinks.code}" target="_blank" rel="noopener noreferrer">Repository</a>
          <a data-artifact-link="poster" href="${SITE_CONFIG.artifactLinks.poster}" target="_blank" rel="noopener noreferrer">Poster</a>
        </div>
      </div>
    </footer>
  `;
}
