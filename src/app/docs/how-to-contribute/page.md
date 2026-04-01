---
title: How to Contribute
nextjs:
  metadata:
    title: How to Contribute
    description: Guidelines for contributing to the fire sprinkler knowledge base — content standards, formatting, and submission process.
---

This knowledge base is a community resource for fire protection professionals. Contributions from experienced designers, engineers, technicians, inspectors, and project managers make this site more accurate and more useful for everyone. {% .lead %}

---

## What makes a good contribution

The best contributions come from people who have done the work. Whether you have corrected a code reference, added a field tip, or written an entire new section, practical experience is what makes this content valuable.

### Content principles

- **Write for practitioners** — assume the reader is a working professional who needs to apply this information, not a student reading a textbook
- **Cite NFPA by chapter and section** — vague references like "per NFPA 13" are not useful; "per NFPA 13 Section 12.2.1.1" is
- **Be specific about editions** — if a requirement changed between editions, note which edition you are referencing
- **Include practical context** — explain not just what the code says, but how it applies in the field and what goes wrong when it is misunderstood
- **Use figures** — add placeholder figure tags where a diagram, photo, or video would help explain a concept

---

## Content formatting

This site uses Markdoc, a markdown-based format with some custom components.

### Frontmatter

Every page starts with YAML frontmatter containing a `title` field and a `nextjs.metadata` block with `title` and `description` for SEO.

### Headings

Use `##` for main sections and `###` for subsections. These automatically appear in the right-side table of contents. Keep headings descriptive and concise.

### Callouts

Two callout types are available:

- **Note callout** — use `callout type="note"` with a `title` attribute for tips and best practices
- **Warning callout** — use `callout type="warning"` with a `title` attribute for critical safety or code compliance items

### Figures

Use the self-closing `figure` tag with `src`, `alt`, and `caption` attributes for images and placeholders. When adding new content, insert figure placeholders wherever a diagram, photo, or video would help explain a concept. Use descriptive alt text and captions that explain what the future image should show.

---

## Types of contributions

### Corrections

If you spot an error — a wrong code reference, an outdated practice, or a factual mistake — fixing it is the highest-value contribution. Even small corrections matter.

### Field tips and practical notes

Adding a callout with a field observation or common mistake helps other professionals avoid the same problem. These practical notes are often more valuable than the surrounding text.

### New content

If a topic is missing or a section is thin, consider writing new content. Follow the structure of existing pages: lead paragraph, clear H2/H3 sections, code references, callouts, and figure placeholders.

### Figure contributions

If you have diagrams, photos of installations, or technical illustrations that could replace placeholder images, those contributions are especially valuable.

---

## Submitting your contribution

This site is hosted on GitHub. To contribute:

1. **Fork the repository** to your own GitHub account
2. **Create a branch** for your changes
3. **Make your edits** to the relevant `page.md` files in `src/app/docs/`
4. **Submit a pull request** with a clear description of what you changed and why

If you are not comfortable with GitHub, you can also open an issue describing the correction or content you would like to see added, and another contributor can implement it.

{% callout type="note" title="Every contribution helps" %}
Even fixing a single wrong section number or adding a one-line field tip improves this resource for the next person who comes looking for answers. No contribution is too small.
{% /callout %}
