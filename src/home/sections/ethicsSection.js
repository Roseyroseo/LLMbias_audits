const ethicsBlocks = [
  {
    heading: "Why bias audits matter",
    body: "[TODO: Update src/home/sections/ethicsSection.js -> Add undergrad-friendly explanation of fairness risk and affected stakeholders.]"
  },
  {
    heading: "Risks of deployment",
    body: "[TODO: Update src/home/sections/ethicsSection.js -> Describe plausible harm pathways if models are deployed without audits.]"
  },
  {
    heading: "Limitations and responsible interpretation",
    body: "[TODO: Update src/home/sections/ethicsSection.js -> Clarify study limits and how results should be interpreted responsibly.]"
  }
];

export function renderEthicsSection() {
  const blocksMarkup = ethicsBlocks
    .map((block) => `<h3>${block.heading}</h3><p>${block.body}</p>`)
    .join("");

  return `
    <section class="section container" id="ethics" aria-labelledby="ethics-title">
      <h2 id="ethics-title">Ethics and Real-World Importance</h2>
      ${blocksMarkup}
    </section>
  `;
}
