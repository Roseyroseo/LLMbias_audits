import { renderHeroSection } from "./sections/heroSection.js";
import { renderIntroductionSection } from "./sections/introductionSection.js";
import { renderAuditSummariesSection } from "./sections/auditSummariesSection.js";
import { renderMethodologySection } from "./sections/methodologySection.js";
import { renderEthicsSection } from "./sections/ethicsSection.js";

const HOME_SECTION_RENDERERS = {
  "home-hero": renderHeroSection,
  "home-introduction": renderIntroductionSection,
  "home-audit-summaries": renderAuditSummariesSection,
  "home-methodology": renderMethodologySection,
  "home-ethics": renderEthicsSection
};

export function renderHomePageSections() {
  Object.entries(HOME_SECTION_RENDERERS).forEach(([mountId, renderFn]) => {
    const mountElement = document.getElementById(mountId);

    if (!mountElement) {
      return;
    }

    mountElement.innerHTML = renderFn();
  });
}
