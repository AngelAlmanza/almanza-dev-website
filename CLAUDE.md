# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview the production build
```

No linter or test runner is configured.

## Architecture

Single-page personal website built with **Astro 5** (static output) + **Tailwind CSS v4** + vanilla JS animations.

**Page composition** — both `src/pages/index.astro` (en) and `src/pages/es/index.astro` (es) are thin wrappers that import all section components and pass `lang` down. Every component accepts a `lang: Lang` prop and calls `useTranslations(lang)` internally.

**i18n flow**:
- `src/i18n/en.ts` / `src/i18n/es.ts` — typed `as const` translation objects
- `src/i18n/utils.ts` — `useTranslations(lang)`, `getLocaleUrl(lang)`, `getAlternateLang(lang)`
- English is the default locale (no URL prefix); Spanish lives at `/es/`
- When adding copy, update both translation files before touching templates

**Tailwind v4 — no config file**. All custom tokens live in the `@theme {}` block in `src/styles/global.css`. Reference tokens in templates via their CSS custom-property names (`var(--color-primary)`) or via the generated Tailwind utilities (`bg-primary`, `text-muted`, etc.).

**Animation conventions**:
- Scroll-reveal: add `data-reveal` (and optionally `data-reveal-delay="1–5"`) to any element. The `IntersectionObserver` in `Layout.astro` handles the rest by toggling `.revealed`.
- Magnetic buttons: add `data-magnetic` + a JS `mousemove` handler inside the component's `<script>` block.
- Animated gradient background: `.animated-gradient` CSS class.
- Reusable CSS utilities: `.gradient-text`, `.card-hover`, `.section-container`, `.noise-overlay`, `.grid-dots`.

**Layout.astro** is the only place that imports `global.css`, sets `<html lang>`, canonical, hreflang, OG/Twitter meta, and structured data. Keep SEO concerns there.

## Version Control
- Use Git for version control
- Write clear and descriptive commit messages that explain the changes made, they must be in english and follow the format: `type(scope): description`, where type can be `feat`, `fix`, `docs`, `style`, `refactor`, `test`, or `chore`.
