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
  const domainKey = getDomainKeyFromContainerId(containerId);
  const folder = CHART_IMAGE_FOLDERS[domainKey];

  if (!folder) {
    return `
      <div class="chart-placeholder-message" role="img" aria-label="Placeholder chart for ${title}">
        <strong>Chart placeholder</strong>
        <p>${title}</p>
        <p>[TODO: Replace with figure...]</p>
      </div>
    `;
  }

  return `
    <div class="chart-placeholder-message" role="img" aria-label="Placeholder chart for ${title}">
      <strong>Chart placeholder</strong>
      <p>${title}</p>
      <p>Drop a screenshot into <code>assets/images/charts/${folder}/</code></p>
      <p>Name it <code>${containerId}.png</code>, <code>.jpg</code>, or <code>.jpeg</code>.</p>
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
    </figure>
  `;
}

function renderD3Chart(container, title) {
  const d3 = window.d3;
  const data = [0.2, 0.35, 0.5, 0.42];
  const width = 420;
  const height = 220;
  const margin = { top: 28, right: 18, bottom: 36, left: 40 };

  container.innerHTML = "";

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("role", "img")
    .attr("aria-label", `Demo chart placeholder for ${title}`)
    .attr("class", "chart-svg");

  const xScale = d3
    .scaleBand()
    .domain(data.map((_, index) => `P${index + 1}`))
    .range([margin.left, width - margin.right])
    .padding(0.3);

  const yScale = d3
    .scaleLinear()
    .domain([0, 0.6])
    .nice()
    .range([height - margin.bottom, margin.top]);

  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale).ticks(5));

  svg
    .selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", (_, index) => xScale(`P${index + 1}`))
    .attr("y", (value) => yScale(value))
    .attr("width", xScale.bandwidth())
    .attr("height", (value) => height - margin.bottom - yScale(value));

  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 10)
    .attr("text-anchor", "middle")
    .attr("class", "chart-title")
    .text(`${title} (Demo)`);
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

    if (window.d3) {
      renderD3Chart(container, title);
      return;
    }

    renderFallbackChart(container, title);
  });

  await Promise.all(renderTasks);
}
