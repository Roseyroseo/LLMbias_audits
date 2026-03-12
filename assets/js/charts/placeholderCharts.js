import {
  CHART_CONTAINER_IDS,
  CHART_IMAGE_EXTENSIONS,
  CHART_IMAGE_FOLDERS
} from "../config.js";

function getRootPath() {
  const metaRoot = document.querySelector('meta[name="root-path"]');
  if (!metaRoot) {
    return "";
  }

  const rootPath = metaRoot.content || "";
  return rootPath === "" || rootPath.endsWith("/") ? rootPath : `${rootPath}/`;
}

function getDomainKeyFromContainerId(containerId) {
  const [, domainKey] = containerId.split("-");
  return domainKey || null;
}

function getImageCandidates(containerId) {
  const domainKey = getDomainKeyFromContainerId(containerId);
  const folder = CHART_IMAGE_FOLDERS[domainKey];

  if (!folder) {
    return [];
  }

  const rootPath = getRootPath();
  return CHART_IMAGE_EXTENSIONS.map(
    (extension) => `${rootPath}assets/images/charts/${folder}/${containerId}.${extension}`
  );
}

function tryLoadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = reject;
    image.src = src;
  });
}

async function findExistingImage(containerId) {
  const candidates = getImageCandidates(containerId);

  for (const src of candidates) {
    try {
      return await tryLoadImage(src);
    } catch {
      continue;
    }
  }

  return null;
}

function createFallbackMarkup(title, containerId) {
  return `
    <div class="chart-placeholder-message" role="img" aria-label="Figure unavailable for ${title}">
      <strong>Figure preview unavailable</strong>
      <p>${title}</p>
      <p>This page references the analysis, but no static image was bundled for this figure.</p>
    </div>
  `;
}

function renderFallbackChart(container, title) {
  container.innerHTML = createFallbackMarkup(title, container.id);
}

function renderImageChart(container, title, src) {
  container.innerHTML = `
    <figure class="chart-figure">
      <img class="chart-screenshot" src="${src}" alt="${title}">
      <figcaption class="chart-caption">${title}</figcaption>
    </figure>
  `;
}

export async function renderPlaceholderCharts() {
  const renderTasks = CHART_CONTAINER_IDS.map(async (id) => {
    const container = document.getElementById(id);

    if (!container) {
      return;
    }

    const title = container.dataset.chartTitle || "Audit Chart";
    const imageSrc = await findExistingImage(id);

    if (imageSrc) {
      renderImageChart(container, title, imageSrc);
      return;
    }

    renderFallbackChart(container, title);
  });

  await Promise.all(renderTasks);
}
