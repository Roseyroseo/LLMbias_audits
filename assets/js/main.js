import { SITE_CONFIG } from "./config.js";
import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { renderPlaceholderCharts } from "./charts/placeholderCharts.js";
import { renderHomePageSections } from "../../src/home/renderHomePage.js";

function getRootPath() {
  const metaRoot = document.querySelector('meta[name="root-path"]');
  return metaRoot ? metaRoot.content : "";
}

function closeAllDropdowns(exceptButton = null) {
  const desktopMode = window.innerWidth >= 840;
  const dropdownButtons = document.querySelectorAll(".nav-dropdown-toggle");

  dropdownButtons.forEach((button) => {
    const menuId = button.getAttribute("aria-controls");
    const menu = menuId ? document.getElementById(menuId) : null;
    const shouldClose = !exceptButton || button !== exceptButton;

    if (menu && shouldClose) {
      button.setAttribute("aria-expanded", "false");
      menu.hidden = desktopMode ? false : true;
    }
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  const toggleButton = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".site-nav");
  const dropdownButtons = header.querySelectorAll(".nav-dropdown-toggle");
  const isDesktop = () => window.innerWidth >= 840;

  function syncDropdownMode() {
    dropdownButtons.forEach((button) => {
      const menuId = button.getAttribute("aria-controls");
      const menu = menuId ? document.getElementById(menuId) : null;

      if (!menu) {
        return;
      }

      button.setAttribute("aria-expanded", "false");
      menu.hidden = !isDesktop();
    });
  }

  function closeMobileMenu({ returnFocus = false } = {}) {
    if (!toggleButton || !nav) {
      return;
    }

    header.classList.remove("menu-open");
    toggleButton.setAttribute("aria-expanded", "false");

    if (returnFocus) {
      toggleButton.focus();
    }
  }

  if (toggleButton && nav) {
    toggleButton.addEventListener("click", () => {
      const currentlyExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      const nextExpanded = !currentlyExpanded;

      header.classList.toggle("menu-open", nextExpanded);
      toggleButton.setAttribute("aria-expanded", String(nextExpanded));

      if (nextExpanded) {
        const firstInteractive = nav.querySelector("a, button");
        if (firstInteractive) {
          firstInteractive.focus();
        }
      } else {
        closeAllDropdowns();
      }
    });
  }

  dropdownButtons.forEach((button) => {
    const menuId = button.getAttribute("aria-controls");
    const menu = menuId ? document.getElementById(menuId) : null;

    if (!menu) {
      return;
    }

    button.addEventListener("click", () => {
      if (isDesktop()) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      closeAllDropdowns(button);
      button.setAttribute("aria-expanded", String(!isExpanded));
      menu.hidden = isExpanded;
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" && menu.hidden) {
        event.preventDefault();
        closeAllDropdowns(button);
        button.setAttribute("aria-expanded", "true");
        menu.hidden = false;
        const firstLink = menu.querySelector("a");
        if (firstLink) {
          firstLink.focus();
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideHeader = header.contains(event.target);
    if (!clickedInsideHeader) {
      if (!isDesktop()) {
        closeAllDropdowns();
      }
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
      closeMobileMenu({ returnFocus: true });
    }
  });

  syncDropdownMode();

  window.addEventListener("resize", () => {
    syncDropdownMode();

    if (isDesktop()) {
      closeMobileMenu();
    }
  });
}

function setupArtifactLinks() {
  const links = document.querySelectorAll("[data-artifact-link]");

  links.forEach((linkElement) => {
    const artifactType = linkElement.dataset.artifactLink;
    const href = SITE_CONFIG.artifactLinks[artifactType];

    if (href) {
      linkElement.href = href;
    }
  });
}

function setupSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function injectLayout() {
  const rootPath = getRootPath();
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");

  if (headerHost) {
    headerHost.innerHTML = createHeader(rootPath);
  }

  if (footerHost) {
    footerHost.innerHTML = createFooter();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectLayout();
  renderHomePageSections();
  setupNavigation();
  setupArtifactLinks();
  setupSmoothScrolling();
  renderPlaceholderCharts();
});
