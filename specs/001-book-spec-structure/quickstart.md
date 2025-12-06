# Quickstart: Setting up the Docusaurus Book Project

This guide provides the steps to set up the Docusaurus project for the Physical AI book.

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 18.0 or higher.

## 1. Initialize a new Docusaurus site

The recommended way to start a new Docusaurus site is by using the `create-docusaurus` command-line tool.

```bash
npx create-docusaurus@latest physical-ai-book classic
```

- `physical-ai-book` will be the name of the directory for your project.
- `classic` specifies that we want to use the "Classic" template, which is ideal for a documentation site.

## 2. Navigate into the project directory

```bash
cd physical-ai-book
```

## 3. Start the development server

Run the following command to start a local development server:

```bash
npm run start
```

This command will build your site and serve it at `http://localhost:3000`. The site will automatically reload when you make changes to the source files.

## 4. Project Configuration

The main configuration file is `docusaurus.config.js`. Key settings to review and potentially modify include:

- `title`: The title of the book.
- `tagline`: A catchy tagline for the book.
- `url`: The production URL of your site (this will be set up during deployment).
- `baseUrl`: The base URL for your site. For most cases, this will be `/`.
- `organizationName`: Your GitHub username or organization name.
- `projectName`: The name of the GitHub repository.
- `presets`: This is where you configure the `classic` preset, including the `docs` and `blog` plugins. The `sidebarPath` for `docs` points to a file that defines the sidebar structure, which can be generated automatically from the `docs` directory structure.
- `themeConfig`: This object contains settings for the theme, such as the navbar, footer, and color scheme.

By following these steps, you will have a functional Docusaurus site ready for content development.
