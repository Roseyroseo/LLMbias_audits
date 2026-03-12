export function renderEthicsSection() {
  return `
    <section class="section container" id="ethics" aria-labelledby="ethics-title">
      <h2 id="ethics-title">Implications, Limitations, and Next Steps</h2>
      <div class="info-grid">
        <article class="info-card">
          <h3>Why This Matters</h3>
          <p>
            Even modest score shifts can matter when the output affects academic misconduct claims, candidate filtering, teacher layoffs, legal strategy, or intake triage. That is why these systems need to be audited before people rely on them.
          </p>
        </article>
        <article class="info-card">
          <h3>What This Audit Cannot Show</h3>
          <p>
            These results come from specific model versions under controlled prompts. They do not show how every downstream product will behave, and they are not legal, medical, or clinical advice. A weak result in one audit also does not mean the risk is gone elsewhere.
          </p>
        </article>
        <article class="info-card">
          <h3>How to Read the Evidence</h3>
          <p>
            Large effect sizes and repeated gaps are warning signs. Smaller effects need to be read alongside sample size, task framing, and model differences before anyone calls a system safe. The detailed pages provide the evidence needed for that judgment.
          </p>
        </article>
        <article class="info-card">
          <h3>What Teams Should Do Next</h3>
          <p>
            Teams thinking about real-world use should run model-specific audits, expand demographic coverage, monitor updates over time, and keep humans accountable for high-stakes decisions. This work needs to continue because model behavior changes across tasks and product versions.
          </p>
        </article>
      </div>
    </section>
  `;
}
