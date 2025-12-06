# Data Model: Book Content Structure

This document defines the data model for the book's content, which in the context of Docusaurus, is the file and directory structure.

## Entities

The primary entities are **Chapters** and **Lessons**.

- **Chapter:** A logical grouping of lessons. A chapter is represented as a directory within the `docs` directory.
- **Lesson:** A single piece of content within a chapter. A lesson is a Markdown file (`.md` or `.mdx`).

## Structure

The book's content will be organized in a hierarchical structure inside the `docs` directory.

### Directory and File Naming Convention

- **Directory (Chapter):** Directories will be prefixed with a two-digit number to enforce ordering (e.g., `01-introduction`, `02-getting-started`).
- **File (Lesson):** Markdown files within a chapter directory will also be prefixed with a two-digit number for ordering (e.g., `01-welcome.md`, `02-what-is-physical-ai.md`).
- **Category Metadata:** Each chapter directory will contain a `_category_.json` file to define the chapter's title and its position in the sidebar.

### Example File Structure

```
docs/
├── 01-introduction/
│   ├── 01-welcome.md
│   ├── 02-what-is-physical-ai.md
│   └── 03-overview-of-the-book.md
│   └── _category_.json
├── 02-core-concepts/
│   ├── 01-lesson-one.md
│   ├── 02-lesson-two.md
│   └── _category_.json
└── ... (more chapters)
```

### `_category_.json` File

This file provides metadata for the sidebar.

**Example for `docs/01-introduction/_category_.json`:**
```json
{
  "label": "Chapter 1: Introduction",
  "position": 1
}
```

This structure ensures a clear, ordered, and scalable organization for the book's content.
