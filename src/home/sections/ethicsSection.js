const ethicsBlocks = [
  {
    heading: "Risks of deployment",
    body: "Deploying LLMs without rigorous audits creates pathways to discrimination and harm. When adopted widely, these systems risk encoding discrimination into infrastructure at scale. And could impact the well-being of millions of people. Thus, thorough auditing and benchmarking is vital in the deployment of real-world LLM and agentic systems."
  },
  {
    heading: "Limitations and responsible interpretation",
    body: "This audit captures a snapshot of specific model versions under controlled conditions. Real-world performance may vary due to system updates, prompt variability, and deployment context. Results should not be generalized to all AI systems or use cases. We identify patterns of bias, but absence of evidence is not evidence of absence-unmeasured harms may exist. Our findings are intended to inform developers, policymakers, and the public, not to provide legal or clinical recommendations. Responsible deployment requires continuous monitoring, domain expertise, and human oversight; audits like this are a starting point, not a final verdict."
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
