import { CHART_CONTAINER_IDS } from "../config.js";

function createFallbackMarkup(title) {
  return `
    <div class="chart-placeholder-message" role="img" aria-label="Placeholder chart for ${title}">
      <strong>Chart placeholder</strong>
      <p>${title}</p>
      <p>[TODO: Replace with figure...]</p>
    </div>
  `;
}

function renderFallbackChart(container, title) {
  container.innerHTML = createFallbackMarkup(title);
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

export function renderPlaceholderCharts() {
  CHART_CONTAINER_IDS.forEach((id) => {
    const container = document.getElementById(id);

    if (!container) {
      return;
    }

    const title = container.dataset.chartTitle || "Audit Chart";

    if (window.d3) {
      renderD3Chart(container, title);
    } else {
      renderFallbackChart(container, title);
    }
  });
}
