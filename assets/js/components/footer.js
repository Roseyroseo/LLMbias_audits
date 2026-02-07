import { SITE_CONFIG } from "../config.js";

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-row">
        <p>${SITE_CONFIG.siteTitle} | ${SITE_CONFIG.teamName} | ${SITE_CONFIG.footerYearPlaceholder}</p>
      </div>
    </footer>
  `;
}
