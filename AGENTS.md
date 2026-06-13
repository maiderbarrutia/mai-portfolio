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

- **Bilingual (ES/EN)**: route-based — `app/projects/` (EN), `app/proyectos/` (ES). Shared detail components in `app/proyectos-shared/`. Language stored in cookie (`portfolio-language`) + localStorage, detected from URL pathname, with `LanguageContext` provider.
- **Theme**: `data-theme` attribute on `<html>`. Inline script in `layout.tsx` prevents flash. `ThemeContext` + localStorage persist.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) + modular SCSS per component (`ComponentName.module.scss`). CSS variables in `styles/globals.css` (oklch colors). Theme vars use `.dark` class selector.
- **Contact API**: `app/api/contact/route.ts` — Zod validation, in-memory rate limit (5/hr/IP), CORS origin check, forwards to Web3Forms.
- **Security**: CSP headers in `next.config.mjs`. HTML sanitized via `isomorphic-dompurify` (`lib/sanitize.ts` — allowlist of tags/attrs).
- **SEO**: Dynamic bilingual metadata, JSON-LD in root layout, sitemap (`app/sitemap.ts`), `app/robots.ts`.
- **Env vars**: `NEXT_PUBLIC_SITE_URL` (required), `WEB3FORMS_ACCESS_KEY`, `CORS_ORIGINS` (optional comma-separated).

## Key paths

| Path | Purpose |
|---|---|
| `@/lib/constants.ts` | `SITE_URL`, `pageTitle()` helper |
| `@/lib/translations.ts` | All i18n strings, typed as `const` |
| `@/context/LanguageContext.tsx` | `useLanguage()` → `t(key)` / `tHtml(key)` |
| `@/context/ThemeContext.tsx` | `useTheme()` → `{ theme, setTheme }` |
| `@/data/projects.ts` | Project data (bilingual slugs, media, categories) |
| `@/data/technologies.ts` | Tech stack data |
| `@/components/SanitizedHTML.tsx` | Render sanitized HTML strings safely |
| `@/hooks/use-mobile.ts` | `useIsMobile()` (768px breakpoint) |

## Conventions

- Uses `@/*` path alias (maps to project root).
- SCSS modules use camelCase-dashed class names (e.g. `styles['error-page']`).
- shadcn/ui "new-york" style — `components/ui/` for primitives, `@/lib/utils` for cn().
- All content strings live in `translations.ts`, accessed via dot-notation keys (e.g. `t('hero.title')`).
- Projects have bilingual slugs (e.g. `slug.es`/`slug.en`), image per project, typed `ProjectCategory`.
- Fonts: Inter (variable) + Fira Code (variable), preloaded in layout from `/fonts/`.
- No test suite configured. No CI config present.

## Vercel deploy

Deployed at `maiderbarrutia.vercel.app`. Env vars required in project settings: `NEXT_PUBLIC_SITE_URL`, `WEB3FORMS_ACCESS_KEY`.
