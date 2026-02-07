const introBlocks = [
  {
    heading: "Motivation",
    body: "[TODO: Update src/home/sections/introductionSection.js -> Add project-specific motivation and at least one citation relevant to LLM bias auditing.]"
  },
  {
    heading: "Scope",
    body: "[TODO: Update src/home/sections/introductionSection.js -> Define scope boundaries: datasets, model versions, dates, and excluded cases.]"
  },
  {
    heading: "Overview of Audits",
    body: "[TODO: Update src/home/sections/introductionSection.js -> Explain why education, legal, and medical triage were selected and how they differ.]"
  }
];

export function renderIntroductionSection() {
  const blocksMarkup = introBlocks
    .map((block) => `<h3>${block.heading}</h3><p>${block.body}</p>`)
    .join("");

  return `
    <section class="section container" id="introduction" aria-labelledby="intro-title">
      <h2 id="intro-title">Introduction</h2>
      ${blocksMarkup}
    </section>
  `;
}
