export const SITE_CONFIG = {
  teamName: "Bias Audit Action Team A09",
  siteTitle: "Human-Centered Bias Auditing of Large Language Models",
  footerYearPlaceholder: "2026",
  artifactLinks: {
    report: "https://drive.google.com/file/d/1Z5Fk7JS_fUfG7Hwgrl12gHJg4xULjoS6/view?usp=sharing",
    code: "https://github.com/staeiou/auditlab_wi26",
    poster: "https://drive.google.com/file/d/1hvH-DsaZ1xEl89bYsMMJoyU2f1nmkkBv/view?usp=sharing"
  }
};

export const NAV_ITEMS = [
  {
    type: "link",
    label: "Home",
    href: "index.html"
  },
  {
    type: "link",
    label: "Problem",
    href: "index.html#problem"
  },
  {
    type: "link",
    label: "Method",
    href: "index.html#method"
  },
  {
    type: "link",
    label: "Results",
    href: "index.html#results"
  },
  {
    type: "dropdown",
    label: "Detailed Analyses",
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
  },
  {
    type: "link",
    label: "Team",
    href: "src/team/index.html"
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
  "detailed-education-chart-2",
  "detailed-education-chart-3",
  "detailed-education-chart-4",
  "detailed-education-chart-5",
  "detailed-education-chart-6",
  "detailed-legal-chart-1",
  "detailed-medical-chart-1",
  "detailed-employment-chart-1"
];

export const CHART_IMAGE_FOLDERS = {
  education: "education",
  legal: "legal",
  medical: "medical",
  employment: "employment-screening"
};

export const CHART_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "svg"];
