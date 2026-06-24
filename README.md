# Web Components — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **Web Components** — the browser-native, framework-agnostic component model: Custom Elements, the lifecycle, Shadow DOM, templates & slots, styling across the shadow boundary, attributes/properties/events, composition patterns (form-associated elements, a11y, declarative shadow DOM), and **Lit**. Every example **renders live in your browser**. Diagrams are **Mermaid**, and there's a **read-mode** toggle.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<LivePreview>`** renders `{ html, css, js }` in a sandboxed (`allow-scripts`) iframe, so custom elements / Shadow DOM / slots / styling appear live. The `js` runs as a classic script — Lit lessons use a dynamic `import('https://esm.sh/lit')` wrapped in an async IIFE (no top-level await). |
| Diagrams | Client-side, theme-aware **Mermaid** (`<Mermaid>` + `public/enhance.js`) |
| Reading | **Read-mode** toggle (hides sidebar/TOC, widens content) via `public/enhance.js` |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

## Content Structure

```
src/content/docs/
  en/                              # English — served at /en/...
    intro-custom-elements/
    lifecycle/
    shadow-dom/
    templates-slots/
    styling/
    attributes-properties-events/
    patterns-composition/
    lit-and-tooling/
    index.mdx                      # EN landing (splash)
  th/                              # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### The 8 Modules

| Directory | Module |
| --------- | ------ |
| `intro-custom-elements` | Intro & Custom Elements |
| `lifecycle` | Lifecycle Callbacks |
| `shadow-dom` | Shadow DOM |
| `templates-slots` | Templates & Slots |
| `styling` | Styling (`:host` / `::slotted` / `::part`) |
| `attributes-properties-events` | Attributes, Properties & Events |
| `patterns-composition` | Patterns & Composition (form-associated, a11y, declarative SDOM) |
| `lit-and-tooling` | Lit & Tooling |

### Components & Lesson Template

- **`LivePreview.tsx`** `{ html?, css?, js?, height? }` — renders a sandboxed iframe (`build-srcdoc.ts` builds the doc: `css` → `<style>`, `html` → body, `js` → classic `<script>`). Rendered demos are hoisted `export const ...Html` / `...Js` (/`...Css`) + `<LivePreview html={...} js={...} />`.
- **`Mermaid.astro`** `{ code, title }`, **`Tip.astro`** `{ title }` (callout), **`Quiz.tsx`** `{ id, questions }` (0-based `answer`, field `q`), **`ProgressTracker.tsx`** `{ id }`.

Lesson order: frontmatter → imports → concept intro → prose (fenced `js`/`html`/`css` + `<Mermaid>`) → `export const ...Code` + `<LivePreview>` (where a rendered demo helps) → `<Tip>` → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **In `export const` snippets:** escape `${`→`\${` and nested backticks as `` \` `` — **Lit `html\`...\`` / `css\`...\`` tagged templates use both**; double-escape `\\n`. Fenced blocks are literal.
> - **Lit runs inline** via `(async () => { const { LitElement, html } = await import('https://esm.sh/lit'); ... })();` — the runner injects a classic script, so wrap in an async IIFE (no top-level await).
> - **Never a bare `{...}`/`${...}` in prose** — keep JS/HTML/objects in code spans / fenced blocks / `export const`. **Diagrams are Mermaid, not ASCII** (typographic arrows `→`/`↔` in prose are fine).
> - **Internal links include the base path** (`/web-components-from-zero-to-hero/en/...`); cross-course links use the full `https://avetavos.github.io/<course>/...` URL.
> - Use **current Web Components** (Custom Elements v1, Shadow DOM v1, `::part`, form-associated elements via `ElementInternals`, declarative shadow DOM, current Lit).

## Deployment

Fully static → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/web-components-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push to `gh-pages`, set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**, then **request a Pages build** (`gh api -X POST repos/<owner>/<repo>/pages/builds`) — flipping the source alone does not trigger one. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
