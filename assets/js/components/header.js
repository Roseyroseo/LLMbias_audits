import { NAV_ITEMS, SITE_CONFIG } from "../config.js";

function normalizeRootPath(rootPath) {
  if (!rootPath) {
    return "";
  }

  return rootPath.endsWith("/") ? rootPath : `${rootPath}/`;
}

function resolvePath(rootPath, href) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return href;
  }

  return `${normalizeRootPath(rootPath)}${href}`;
}

function renderDropdownItem(rootPath, item) {
  return `<li role="none"><a role="menuitem" class="dropdown-link" href="${resolvePath(rootPath, item.href)}">${item.label}</a></li>`;
}

function renderNavItem(rootPath, item, index) {
  if (item.type === "link") {
    return `<li class="nav-item"><a class="nav-link" href="${resolvePath(rootPath, item.href)}">${item.label}</a></li>`;
  }

  if (item.type === "dropdown") {
    const menuId = `nav-dropdown-${index}`;
    const itemsMarkup = item.items.map((dropdownItem) => renderDropdownItem(rootPath, dropdownItem)).join("");

    return `
      <li class="nav-item nav-dropdown" data-dropdown>
        <button
          type="button"
          class="nav-link nav-dropdown-toggle"
          aria-expanded="false"
          aria-controls="${menuId}"
          id="${menuId}-button"
        >
          ${item.label}
          <span class="caret" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-menu" id="${menuId}" role="menu" aria-labelledby="${menuId}-button" hidden>
          ${itemsMarkup}
        </ul>
      </li>
    `;
  }

  return "";
}

export function createHeader(rootPath = "") {
  const navMarkup = NAV_ITEMS.map((item, index) => renderNavItem(rootPath, item, index)).join("");
  const homeHref = resolvePath(rootPath, "index.html");

  return `
    <header class="site-header" id="site-header-inner">
      <div class="container header-row">
        <a class="site-brand" href="${homeHref}">${SITE_CONFIG.teamName}</a>
        <button
          type="button"
          class="nav-toggle"
          aria-expanded="false"
          aria-controls="primary-navigation"
        >
          <span class="sr-only">Toggle navigation menu</span>
          <span class="hamburger" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="primary-navigation" aria-label="Primary navigation">
          <ul class="nav-list">
            ${navMarkup}
          </ul>
        </nav>
      </div>
    </header>
  `;
}
