export function renderIntroductionSection() {
  return `
    <section class="section container" id="problem" aria-labelledby="intro-title">
      <h2 id="intro-title">Problem, Stakeholders, and Scope</h2>
      <p class="section-intro">
        Earlier failures in hiring, surveillance, and risk-scoring systems showed what can happen when a model is treated as objective before anyone audits it. LLMs raise that risk because the same model can be reused across many settings, often with little oversight and little visibility into why its output changes.
      </p>
      <div class="info-grid">
        <article class="info-card">
          <h3>Who Should Care</h3>
          <p>
            This project is for people who need to judge whether LLM-assisted decisions are trustworthy: instructors and school leaders, hiring teams, legal-service organizations, mental-health triage teams, and outside reviewers.
          </p>
        </article>
        <article class="info-card">
          <h3>What We Audited</h3>
          <p>
            We tested 11 API-accessible LLMs on high-stakes text tasks. This site focuses on four domains: education, legal support, employment screening, and mental-health triage. Teacher evaluation results also appear under education because they came from the same interviews and fairness concerns.
          </p>
        </article>
        <article class="info-card">
          <h3>What Counts as Bias Here</h3>
          <p>
            We count it as bias when scores, labels, or recommendations change after demographic cues change while the case itself stays the same. We report effect sizes alongside significance tests so readers can tell the difference between a meaningful shift and a tiny effect in a large dataset.
          </p>
        </article>
        <article class="info-card">
          <h3>Scope Boundaries</h3>
          <p>
            We audited controlled prompts and model outputs, not full real-world deployments. We are not estimating legal liability, clinical validity, or exact downstream harm. We are showing where demographic sensitivity appears, where it looks limited, and what still remains unclear.
          </p>
        </article>
      </div>
    </section>
  `;
}
