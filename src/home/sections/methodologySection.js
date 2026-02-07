const methodologyBlocks = [
  {
    heading: "Models Used",
    body: "[TODO: Update src/home/sections/methodologySection.js -> List production model names, versions, providers, and exact access dates.]"
  },
  {
    heading: "Prompt Engineering",
    body: "[TODO: Update src/home/sections/methodologySection.js -> Document shared prompt scaffold, controlled variables, and domain-specific slots.]"
  },
  {
    heading: "Data Extraction",
    body: "[TODO: Update src/home/sections/methodologySection.js -> Describe parsing pipeline, schema fields, and QA/inter-rater checks.]"
  },
  {
    heading: "Statistical Techniques",
    body: "[TODO: Update src/home/sections/methodologySection.js -> Specify tests, confidence intervals, effect sizes, and correction strategy.]"
  }
];

export function renderMethodologySection() {
  const blocksMarkup = methodologyBlocks
    .map((block) => `<h3>${block.heading}</h3><p>${block.body}</p>`)
    .join("");

  return `
    <section class="section container" id="methodology" aria-labelledby="methodology-title">
      <h2 id="methodology-title">Methodology</h2>
      ${blocksMarkup}
    </section>
  `;
}
