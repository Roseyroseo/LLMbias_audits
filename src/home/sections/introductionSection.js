const introBlocks = [
  {
    heading: "Motivation",
    body: "Previous algorithmic failures (e.g., biased resume screeners, facial recognition errors, etc.) serve as a warning for the widespread adoption of LLMs. Unlike static algorithms, modern LLMs are versatile and opaque. Unfair and discriminative models can be deployed across hiring, education, and healthcare with minimal adaptation. This project is motivated by the urgent need to audit these models before they become deeply embedded in critical infrastructure. We investigate whether these systems discriminates across demographic groups, or if they inadvertently penalize marginalized communities."
  },
  {
    heading: "Scope",
    body: "This audit examines 11 LLM models (e.g., Claude 4.5, GPT-4, Gemini-3, etc.) available via API as of Quarter 1 2026. The scope is text-based interactions within five domains: academic integrity, legal document analysis, resume screening, mental health triage, and teacher service evaluation. Bias is defined as statistically significant disparities in outcomes when input text is varied only by demographic markers while controlling for semantic content."
  },
  {
    heading: "Overview of Audits",
    body: "We selected Education, Legal, Employment, and Mental Health because they represent high-stakes environments where algorithmic decision could have a high impact. Education audit is a AI-generated text detection likelihood audit with paired false and true writing conditions; employment audit is a hiring-screening fairness audit under demographic perturbations; legal audit is a judge-evaluation fairness audit with controlled demographic/context variables; mental health audit is a mental-health triage fairness audit on urgency and triage-level outputs; service evaluation audit is teacher service evaluation audit with two framings: layoffs and reward."
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
