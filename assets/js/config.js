export const SITE_CONFIG = {
  teamName: "Bias Audit Action Team A09",
  siteTitle: "Investigating LLM Bias",
  footerYearPlaceholder: "2026",
  artifactLinks: {
    report: "https://example.com/report",
    code: "https://github.com/staeiou/auditlab_wi26",
    poster: "../assets/poster/A09 Capstone Presentation Poster.pdf"
  }
};

export const NAV_ITEMS = [
  {
    type: "link",
    label: "The Team",
    href: "src/team/index.html"
  },
  {
    type: "dropdown",
    label: "Detailed Analysis",
    items: [
      {
        label: "Education Audit",
        href: "src/analysis/detailed/education.html"
      },
      {
        label: "Legal Audit",
        href: "src/analysis/detailed/legal.html"
      },
      {
        label: "Medical Triage Audit",
        href: "src/analysis/detailed/medical.html"
      },
      {
        label: "Employment Screening Audit",
        href: "src/analysis/detailed/employment-screening.html"
      }
    ]
  }
];

export const CHART_CONTAINER_IDS = [
  "home-education-chart-1",
  "home-education-chart-2",
  "home-legal-chart-1",
  "home-legal-chart-2",
  "home-medical-chart-1",
  "home-medical-chart-2",
  "home-employment-chart-1",
  "home-employment-chart-2",
  "detailed-education-chart-1",
  "detailed-legal-chart-1",
  "detailed-medical-chart-1",
  "detailed-employment-chart-1"
];
