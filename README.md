# Investigating LLM Bias

Static capstone website scaffold for **Bias Audit Action Team A09**.
Built with vanilla HTML, CSS, and JavaScript ES modules. Suitable for GitHub Pages.

## Project Overview

This site has three goals:
1. Present the capstone narrative and methodology on `index.html`.
2. Store full domain write-ups in `src/analysis/detailed/`.
3. Store key findings in shared source modules under `src/analysis/most-important/content/`, then render those findings directly on the home page.

Shared layout (header/footer/nav) and home sections are componentized for easier team editing.

## Run Locally

Option 1 (recommended):
- `python3 -m http.server 8000`
- Open `http://localhost:8000`

Option 2:
- Open `index.html` directly.
- Note: module behavior may vary on `file://`; local server is more reliable.

## Where To Edit Content (Most Important)

1. Home page section content
- `src/home/sections/heroSection.js`
- `src/home/sections/introductionSection.js`
- `src/home/sections/auditSummariesSection.js`
- `src/home/sections/methodologySection.js`
- `src/home/sections/ethicsSection.js`

`index.html` is only mount points. Edit actual home text in these section modules.

2. Key findings source files (used directly by home page)
- `src/analysis/most-important/content/educationContent.js`
- `src/analysis/most-important/content/legalContent.js`
- `src/analysis/most-important/content/medicalContent.js`
- `src/analysis/most-important/content/employmentContent.js`

Update these for:
- condensed bullets
- implications
- key figure notes

3. Detailed analysis pages
- `src/analysis/detailed/education.html`
- `src/analysis/detailed/legal.html`
- `src/analysis/detailed/medical.html`
- `src/analysis/detailed/employment-screening.html`

Fill all placeholders in:
- Executive Summary
- Dataset and Prompts
- Metrics and Statistical Tests
- Findings subsections
- Limitations
- Appendix and References

4. Team page
- `src/team/index.html`

Current members are prefilled:
- Derrick Dollesin
- Bhagya Ram
- Rosey Gutierrez
- Huize Mao

For each member card, update:
- Role
- Short bio
- Contributions
- Contact link

Also update "How We Worked" section in the same file.

5. Artifact links + site-wide config
- `assets/js/config.js`

Update:
- `SITE_CONFIG.artifactLinks.report`
- `SITE_CONFIG.artifactLinks.code`
- `SITE_CONFIG.artifactLinks.poster`

## Styling Rules

Global styles are in `assets/css/styles.css`.

Use consistency-first editing:
- Change CSS variables in `:root` first.
- Reuse existing component classes.
- Avoid one-off inline styles.

Layout approach:
- Desktop/web-first defaults for laptop presentation.
- Mobile as fallback via `@media (max-width: ...)`.

## Navigation and Shared Components

- `assets/js/config.js` stores nav and site metadata.
- `assets/js/components/header.js` builds header/nav.
- `assets/js/components/footer.js` builds footer.
- `assets/js/main.js` injects layout, renders modular sections, and handles nav interactions.
- `src/home/renderHomePage.js` mounts all home sections.

If pages move or rename, update links in:
- `assets/js/config.js`
- `src/home/sections/auditSummariesSection.js`

## Charts and D3 Integration

Chart behavior lives in:
- `assets/js/charts/placeholderCharts.js`

Current behavior:
- The site first tries to render a screenshot image from `assets/images/charts/`.
- If no screenshot is found and `window.d3` exists, a demo chart renders.
- Otherwise, a styled placeholder renders.

To add screenshot-based charts:
1. Put the image in the correct domain folder:
- `assets/images/charts/education/`
- `assets/images/charts/legal/`
- `assets/images/charts/medical/`
- `assets/images/charts/employment-screening/`
2. Name the file exactly the same as the chart container ID.
Examples:
- `assets/images/charts/education/home-education-chart-1.png`
- `assets/images/charts/legal/detailed-legal-chart-1.jpg`
- `assets/images/charts/employment-screening/home-employment-chart-2.jpeg`
3. Supported extensions are `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`.

Important limitation:
- The site cannot auto-list folder contents because it is static.
- The file name convention is what makes the auto-rendering work.

To add new chart containers:
1. Keep/add chart container IDs in HTML output.
2. Register IDs in `CHART_CONTAINER_IDS` in `assets/js/config.js`.
3. If the domain prefix is new, add it to `CHART_IMAGE_FOLDERS` in `assets/js/config.js`.

## Naming Conventions

- IDs: lowercase kebab-case with context prefix.
- Classes: reusable component names.
- File names: lowercase and domain-oriented.

## Teammate TODO Checklist

- [ ] Fill placeholders in `src/home/sections/`.
- [ ] Fill placeholders in `src/analysis/most-important/content/`.
- [ ] Confirm updated key-finding bullets render on `index.html`.
- [ ] Fill all placeholders in `src/analysis/detailed/` pages.
- [ ] Update team cards and process details in `src/team/index.html`.
- [ ] Add final report/code/poster URLs in `assets/js/config.js`.
- [ ] Replace placeholder charts with real visuals.
- [ ] Verify links before publishing to GitHub Pages.
