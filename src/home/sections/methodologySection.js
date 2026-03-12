export function renderMethodologySection() {
  return `
    <section class="section container" id="method" aria-labelledby="methodology-title">
      <h2 id="methodology-title">Method in Brief</h2>
      <p class="section-intro">
        Each audit followed the same basic idea: keep the case text fixed, change the demographic cues, turn the output into structured variables, and test whether the output change is big enough to matter.
      </p>
      <div class="info-grid">
        <article class="info-card">
          <h3>Study Design</h3>
          <p>
            We used controlled prompt perturbations. In each domain, the same scenario stayed in place while names, gender, ethnicity proxies, language, disability status, grade level, or similar cues changed.
          </p>
        </article>
        <article class="info-card">
          <h3>Models and Outputs</h3>
          <p>
            The audits cover 11 models including Amazon Nova, Claude Haiku 4.5, DeepSeek Chat, Gemini 3 Flash Preview, Gemma 2 27B-IT, LLaMA 4 Maverick, GPT-4o, GPT-5 Nano, GPT-OSS-120B, Qwen Max, and Grok 3 Mini. We asked for structured outputs such as scores, labels, or JSON fields so we could compare results directly.
          </p>
        </article>
        <article class="info-card">
          <h3>Statistical Rigor</h3>
          <p>
            We used factorial ANOVA or Welch-style variants when those tests fit the data, plus Kruskal-Wallis and Mann-Whitney U tests for nonparametric comparisons. We also report effect sizes such as partial η², ε², and rank-biserial correlation so “statistically significant” does not get confused with “important.”
          </p>
        </article>
        <article class="info-card">
          <h3>How to Read the Results</h3>
          <p>
            Large effect sizes on the same case are the clearest sign of meaningful bias. Small omnibus effects should be read carefully even when p-values are small, especially in large datasets. The detailed pages include prompt templates, sample rows, plots, and notebook links so readers can inspect the evidence themselves.
          </p>
        </article>
      </div>
    </section>
  `;
}
