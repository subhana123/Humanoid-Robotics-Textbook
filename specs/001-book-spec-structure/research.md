# Research: Docusaurus for Physical AI Book

This document summarizes the research conducted to inform the development plan for the Physical AI book using Docusaurus.

## 1. Deployment Options

**Decision:** Netlify is recommended for deployment.

**Rationale:**
- **Ease of Use:** Netlify offers a streamlined "zero-configuration" deployment process for Docusaurus sites, integrating directly with Git repositories for automatic builds and deployments.
- **Deploy Previews:** A key advantage is the automatic generation of deploy previews for every pull request. This allows for easy review and testing of changes before they go live.
- **Features:** Netlify provides a generous free tier that includes free SSL, custom domain configuration, and a global CDN for faster content delivery.

**Alternatives Considered:**
- **Vercel:** A strong alternative with a similar feature set to Netlify, also offering excellent performance and ease of use. The choice between Netlify and Vercel often comes down to developer preference.
- **GitHub Pages:** While free and integrated with GitHub, it requires more complex CI/CD setup for Docusaurus and lacks advanced features like deploy previews.

## 2. Essential Docusaurus Plugins

**Decision:** The project will start with the `@docusaurus/preset-classic`.

**Rationale:**
- The `classic` preset includes the most critical plugins for a documentation site out-of-the-box:
    - **`@docusaurus/plugin-content-docs`:** The core plugin for managing documentation with sidebars, versioning, and navigation. This is essential for the book's structure.
    - **`@docusaurus/plugin-content-blog`:** Useful for supplementary articles or project updates.
    - **`@docusaurus/plugin-content-pages`:** For standalone pages like an "About" or "Contact" page.
    - **`@docusaurus/theme-classic`:** A production-ready theme that provides the site's look and feel.
- **`@docusaurus/plugin-sitemap`:** This will be included for SEO purposes.

**Future Considerations:**
- As the book develops, other plugins might be considered, such as:
    - **`@docusaurus/plugin-ideal-image`** for image optimization.
    - Community plugins for features like diagrams or advanced search if needed.

## 3. Content Structure for a Book

**Decision:** A hierarchical file structure within the `docs` directory will be used to represent chapters and lessons.

**Rationale:**
- Docusaurus automatically generates sidebars and navigation from the file and directory structure inside `docs`.
- This approach is intuitive and scalable. Each chapter will be a directory, and each lesson will be a Markdown file within that chapter's directory.
- Docusaurus uses file and directory naming to control the order of items in the sidebar. Numbered prefixes (e.g., `01-introduction.md`, `02-next-topic.md`) are a common convention to enforce a specific order.

**Example Structure:**
```
docs/
├── 01-introduction/
│   ├── 01-welcome.md
│   ├── 02-what-is-physical-ai.md
│   └── _category_.json  // Defines the category "Chapter 1: Introduction"
└── 02-getting-started/
    ├── 01-setting-up.md
    ├── 02-your-first-project.md
    └── _category_.json // Defines "Chapter 2: Getting Started"
```
This structure will be formalized in `data-model.md`.
