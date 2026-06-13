# mai-portfolio

Personal portfolio of Maider Barrutia — Next.js 16.2.6 + React 19 + pnpm.

## Quick start

```bash
pnpm install
pnpm dev          # next dev on localhost:3000
pnpm build        # next build (SSG)
pnpm lint         # eslint .
pnpm typecheck    # npx tsc --noEmit (not in scripts, run explicitly)
```

## Architecture

- **Bilingual (ES/EN)**: route-based — `app/en/` prefix for English (home, projects, legal), root (no prefix) for Spanish. Shared detail components in `app/proyectos-shared/`. Language stored in cookie (`portfolio-language`) + localStorage, detected from URL pathname, with `LanguageContext` provider.
- **Theme**: `data-theme` attribute on `<html>`. Inline script in `layout.tsx` prevents flash. `ThemeContext` + localStorage persist.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) + modular SCSS per component (`ComponentName.module.scss`). CSS variables in `styles/globals.css` (oklch colors) + `styles/globals.scss` (custom theme vars). Theme vars use `[data-theme='dark']` selector. `prefers-reduced-motion` global rule in `globals.scss`. GPU compositing hints (`will-change`) on all animated elements.
- **Contact API**: `app/api/contact/route.ts` — Zod validation, in-memory rate limit (5/hr/IP), CORS origin check, forwards to Web3Forms.
- **CV API**: `app/api/cv/route.ts` — serves PDFs from `private/cv/` (not `public/`) with `X-Robots-Tag: noindex` to avoid search indexing.
- **Security**: CSP headers in `next.config.mjs`. HTML sanitized via `sanitize-html` (`lib/sanitize.ts` — allowlist of tags/attrs). No jsdom dependency.
- **SEO**: Dynamic bilingual metadata, JSON-LD in root layout, sitemap (`app/sitemap.ts`), `app/robots.ts`.
- **Env vars**: `NEXT_PUBLIC_SITE_URL` (required), `WEB3FORMS_ACCESS_KEY`, `CORS_ORIGINS` (optional comma-separated).

## Performance

- **Translations flattened** at module init into `Map<string, string>` → O(1) `t()` lookups instead of nested traversal.
- **react-icons eliminated** — all tech icons are inline SVGs in `components/ui/technologyIcon.tsx` (no icon library dependency).
- **IntersectionObservers consolidated** — shared `useInView` / `useMultiInView` hooks in `hooks/use-intersection-observer.ts`.
- **Header bundle reduced** — replaced `import { projects } from '@/data/projects'` (~600 KB) with lightweight `data/slug-lookup.ts` for language switching.
- **GPU compositing hints** — `will-change: transform, opacity` on all animated elements across SCSS modules.
- **Footer year** — lazy `useState(() => new Date().getFullYear())` initializer.

## Key paths

| Path | Purpose |
|---|---|
| `app/en/` | English routes (home, projects, legal) |
| `app/proyectos/` | Spanish project routes |
| `app/proyectos-shared/` | Shared project detail/list components |
| `app/legal/` | Spanish legal page |
| `app/api/cv/route.ts` | Serves CV PDFs with noindex |
| `app/api/contact/route.ts` | Rate-limited contact form endpoint |
| `private/cv/` | CV PDF files (not served from `public/`) |
| `data/slug-lookup.ts` | Lightweight ES↔EN slug mapping (no project data) |
| `data/projects.ts` | Project data (bilingual slugs, media, categories) |
| `data/technologies.ts` | Tech stack data |
| `hooks/use-intersection-observer.ts` | Shared `useInView` / `useMultiInView` hooks |
| `hooks/use-mobile.ts` | `useIsMobile()` (768px breakpoint) |
| `context/LanguageContext.tsx` | `useLanguage()` → `t(key)` / `tHtml(key)` with flat Map lookup |
| `context/ThemeContext.tsx` | `useTheme()` → `{ theme, setTheme }` |
| `components/SanitizedHTML.tsx` | Render sanitized HTML strings safely |
| `components/ui/technologyIcon.tsx` | Technology icons as inline SVGs |
| `lib/sanitize.ts` | `sanitize-html` wrapper (allowlist of tags/attrs) |
| `lib/translations.ts` | All i18n strings, typed as `const` |

## Conventions

- Uses `@/*` path alias (maps to project root).
- SCSS modules use camelCase-dashed class names (e.g. `styles['error-page']`).
- shadcn/ui "new-york" style — `components/ui/` for primitives, `@/lib/utils` for cn().
- All content strings live in `translations.ts`, accessed via dot-notation keys (e.g. `t('hero.title')`).
- Projects have bilingual slugs (e.g. `slug.es`/`slug.en`), image per project, typed `ProjectCategory`.
- Fonts: Inter (variable) + Fira Code (variable), preloaded in layout from `/fonts/`.
- Accessibility: `id="main-content"` on all pages, `scroll-margin-top` on sections, SkipLink component, ARIA attributes on interactive elements, `prefers-reduced-motion` global rule.
- No test suite configured. No CI config present.

## Vercel deploy

Deployed at `maiderbarrutia.vercel.app`. Env vars required in project settings: `NEXT_PUBLIC_SITE_URL`, `WEB3FORMS_ACCESS_KEY`.
