const methodologyBlocks = [
  {
    heading: "Models Used",
    body: "We tested 11 LLMs available via API: <ul>        <li>Amazon Nova Micro v1</li>        <li>Anthropic Claude Haiku 4.5</li>        <li>DeepSeek Chat</li>        <li>Google Gemini 3 Flash Preview</li>        <li>Google Gemma 2 27B-IT</li>        <li>Meta LLaMa 4 Maverick</li>        <li>OpenAI GPT-4o</li>        <li>OpenAI GPT-5 Nano</li>        <li>OpenAI GPT-OSS-120B</li>        <li>Qwen Max</li>        <li>X.AI Grok 3 Mini</li>      </ul>"
  },
  {
    heading: "Prompt Engineering",
    body: "We used a controlled perturbation design: core content remained identical while demographic markers (e.g., names, gender, race, disability, language) were systematically varied. Each domain used a shared scaffold with specific task instructions (e.g., 'evaluate this teacher,' 'screen this applicant,' 'triage this case'). Models were instructed to return structured outputs—usually JSON with numeric scores and categorical labels. All prompts were submitted multiple times per combination to assess consistency."
  },
  {
    heading: "Data Extraction",
    body: "Outputs were parsed via automated pipelines extracting schema fields (likelihood scores, recommendation levels, urgency ratings, etc.). For each domain, we logged model, demographic condition, repetition, and all returned values. Quality assurance included manual verification of parsed samples and exclusion of zero-variance runs where models returned identical scores across all inputs."
  },
  {
    heading: "Statistical Techniques",
    body: "We used both parametric and non-parametric tests: factorial ANOVA (or Welch's ANOVA when variances differed), Kruskal–Wallis, and Mann–Whitney U. Effect sizes were reported as partial eta-squared (η²) and rank-biserial correlation. Post-hoc comparisons used Tukey's HSD. Assumptions were checked via Levene's test (homogeneity of variance) and Shapiro–Wilk (normality). Confidence intervals were set at 95%, with corrections for multiple comparisons."
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
