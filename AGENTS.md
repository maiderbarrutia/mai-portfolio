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
- **Styling**: Modular SCSS per component (`ComponentName.module.scss`). CSS variables in `styles/globals.scss` (oklch colors) + `styles/globals.css` (root custom properties). Theme vars use `[data-theme='dark']` selector. `prefers-reduced-motion` global rule in `globals.scss`. GPU compositing hints (`will-change`) on all animated elements. **No Tailwind** — removed; plain CSS/SCSS only.
- **Contact API**: `app/api/contact/route.ts` — Zod validation, in-memory rate limit (5/hr/IP), CORS origin check, forwards to Web3Forms.
- **CV API**: `app/api/cv/route.ts` — serves PDFs from `private/cv/` (not `public/`) with `X-Robots-Tag: noindex` to avoid search indexing.
- **Security**: CSP headers in `next.config.mjs`. HTML sanitized via `sanitize-html` (`lib/sanitize.ts` — allowlist of tags/attrs). No jsdom dependency.
- **SEO**: Dynamic bilingual metadata per page, JSON-LD in root layout, sitemap (`app/sitemap.ts`), robots (`app/robots.ts`), per-page canonicals, `hreflang` alternates.
- **Env vars**: `NEXT_PUBLIC_SITE_URL` (required), `WEB3FORMS_ACCESS_KEY`, `CORS_ORIGINS` (optional comma-separated).

## Performance

- **Translations flattened** at module init into `Map<string, string>` → O(1) `t()` lookups instead of nested traversal.
- **react-icons kept** — tech icons use `react-icons` in `components/ui/technologyIcon.tsx` with `aria-label` on all SVGs (fixes WCAG "SVG without accessible text").
- **IntersectionObservers consolidated** — shared `useInView` / `useMultiInView` hooks in `hooks/use-intersection-observer.ts`.
- **Header bundle reduced** — replaced `import { projects } from '@/data/projects'` (~600 KB) with lightweight `data/slug-lookup.ts` for language switching.
- **GPU compositing hints** — `will-change: transform, opacity` on all animated elements across SCSS modules.
- **Footer year** — lazy `useState(() => new Date().getFullYear())` initializer.
- **inlineCss: true** (Next.js experimental) — eliminates render-blocking CSS requests (~150ms saved).
- **browserslist** targeting modern browsers — skips legacy polyfills (~14 KB saved).
- **prefers-reduced-motion** global rule disables animations for users who prefer reduced motion.

## Key paths

| Path | Purpose |
|---|---|
| `app/page.tsx` | Spanish home (root `/`) |
| `app/en/page.tsx` | English home (`/en`) |
| `app/proyectos/page.tsx` | Spanish projects list (`/proyectos`) — uses `cookies()` (dynamic) |
| `app/en/projects/page.tsx` | English projects list (`/en/projects`) — static |
| `app/proyectos/[id]/page.tsx` | Spanish project detail (`/proyectos/:slug`) |
| `app/en/projects/[id]/page.tsx` | English project detail (`/en/projects/:slug`) |
| `app/proyectos-shared/` | Shared components: `ProyectosClient.tsx`, `ProjectDetailPage.tsx` |
| `app/legal/page.tsx` | Spanish legal notice (`/legal`) |
| `app/en/legal/page.tsx` | English legal notice (`/en/legal`) |
| `app/layout.tsx` | Root layout + JSON-LD, inline theme script, font preloads, `llms.txt` link |
| `app/not-found.tsx` | Bilingual 404 page |
| `app/error.tsx` | Global error boundary with logging |
| `app/sitemap.ts` | Dynamic bilingual sitemap (static + project routes) |
| `app/robots.ts` | Robots.txt allowing all, pointing to sitemap |
| `app/api/contact/route.ts` | Rate-limited contact form (Zod + Web3Forms) |
| `app/api/cv/route.ts` | Serves CV PDFs from `private/cv/` with `X-Robots-Tag: noindex` |
| `private/cv/` | CV PDF files: `cv-maider-barrutia.pdf`, `cv-maider-barrutia-en.pdf` |
| `data/projects.ts` | Project data (bilingual slugs, media, categories, full detail fields) |
| `data/slug-lookup.ts` | Lightweight ES↔EN slug mapping (no project data) |
| `data/technologies.ts` | Tech stack data (categories, icons via `react-icons`) |
| `data/legal.ts` | Legal content (bilingual) |
| `lib/constants.ts` | `SITE_URL` from env, `pageTitle()` helper |
| `lib/sanitize.ts` | `sanitize-html` wrapper with allowlist |
| `lib/translations.ts` | All i18n strings, typed as `const` |
| `hooks/use-intersection-observer.ts` | Shared `useInView` / `useMultiInView` hooks |
| `hooks/use-mobile.ts` | `useIsMobile()` (768px breakpoint) |
| `context/LanguageContext.tsx` | `useLanguage()` → `t(key)` / `tHtml(key)` with flat Map lookup |
| `context/ThemeContext.tsx` | `useTheme()` → `{ theme, setTheme }` |
| `components/ClientProviders.tsx` | Wrappers for LanguageProvider + ThemeProvider |
| `components/SanitizedHTML.tsx` | Safe rendering of sanitized HTML strings |
| `components/ui/technologyIcon.tsx` | Tech icons using `react-icons` with `aria-label` |
| `components/SkipLink/SkipLink.tsx` | Accessibility skip to main content |
| `components/Header/Header.tsx` | Navigation, language toggle, theme toggle |
| `components/Hero/Hero.tsx` | Bento grid introduction |
| `components/Projects/Projects.tsx` | Featured projects section |
| `components/Projects/ProjectCard.tsx` | Individual project card |
| `components/TechStack/TechStack.tsx` | Technologies organized by category |
| `components/Experience/Experience.tsx` | Timeline + education + CV download links |
| `components/Contact/Contact.tsx` | Form + social links (Zod + react-hook-form) |
| `components/Footer/Footer.tsx` | Footer with nav, lazy year, social links |
| `styles/globals.scss` | CSS custom properties, `prefers-reduced-motion`, imports partials |
| `styles/_colors.scss` | oklch color definitions |
| `styles/_fonts.scss` | Font-face declarations |
| `styles/_mixins.scss` | SCSS mixins |
| `styles/_helpers.scss` | Helper classes |
| `styles/_common.scss` | Common styles |
| `styles/_texts.scss` | Typography utilities |
| `public/llms.txt` | LLM context file with profile, stack, projects |
| `public/fonts/` | Inter Variable + Fira Code Variable (woff2) |
| `public/projects/` | Project images/media |

## Project data structure (data/projects.ts)

```ts
type ProjectCategory = 'graphic-design' | 'web-design' | 'web-development';

interface ProjectMedia {
  src: string;
  type: 'image' | 'video';
  alt: { es: string; en: string };
  caption?: { es: string; en: string };
}

interface Project {
  id: string;
  slug: { es: string; en: string };
  category: ProjectCategory;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  image: string;                    // hero image
  media: ProjectMedia[];            // gallery
  featured: boolean;
  demoUrl?: string;
  repoUrl?: string;
  challenge: { es: string; en: string };
  uxDecisions: { es: string; en: string };
  architecture: { es: string; en: string };
  aiIntegration: { es: string; en: string };
  problemsSolved?: { es: string; en: string };
  metrics?: { es: string; en: string };
  myRole?: { es: string; en: string };
  techDetails?: { es: string; en: string };
  deployment?: { es: string; en: string };
  confidentialNote?: { es: string; en: string };
}
```

Current projects (5): Aisiplan, Ecommerce + Branding, Portal Corporativo de Gas, Simulador de Ventas con IA, Portal Inmobiliario.

## Routing & i18n

- **Spanish (default)**: `/`, `/proyectos`, `/proyectos/:slug`, `/legal`
- **English**: `/en`, `/en/projects`, `/en/projects/:slug`, `/en/legal`
- Language detection: URL pathname (`/en/` prefix) → localStorage → cookie → `prefers-color-scheme` fallback
- Language toggle in Header maps slugs via `data/slug-lookup.ts`
- `LanguageContext` provides `t(key)` (plain text) and `tHtml(key)` (sanitized HTML)

## SEO details

- **Per-page canonicals**: every page exports `metadata` with `alternates.canonical`
- **Root layout**: no global `canonical` (removed to fix Google "duplicate, different canonical")
- **Alternates**: `languages` object in root metadata + per-page `alternates.languages`
- **Sitemap**: 6 static routes + 40 project routes (5 projects × 2 languages × detail/list)
- **Robots**: allow all, sitemap reference
- **JSON-LD**: Person + WebSite in root layout
- **OG/Twitter cards**: bilingual, per-page
- **llms.txt**: linked via `<link rel="alternate" type="text/markdown" href="/llms.txt">`

## Security details

- **CSP**: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://api.web3forms.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`
- **Headers**: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Contact API**: Zod schema, in-memory rate limit (5 req/hr/IP), CORS origin check against `CORS_ORIGINS` + `NEXT_PUBLIC_SITE_URL`, forwards to Web3Forms
- **CV API**: serves from `private/` (not public), `X-Robots-Tag: noindex, nofollow`, `Cache-Control: no-cache`
- **HTML sanitization**: `sanitize-html` allowlist — tags: `strong, em, u, s, p, br, ul, ol, li, a, span, div, h1-h6, blockquote, code, pre, img, figure, figcaption`; attrs: `href, target, rel, src, alt, class, id, style` — no jsdom needed

## Styling conventions

- SCSS modules: `ComponentName.module.scss`, camelCase-dashed classes (`styles['hero-grid']`)
- CSS variables (oklch) in `globals.css` + `globals.scss`, theme override via `[data-theme='dark']`
- `prefers-reduced-motion: reduce` disables transitions/animations globally
- `will-change: transform, opacity` on all animated elements
- Fonts: Inter Variable + Fira Code Variable, preloaded in layout
- **No Tailwind** — project uses plain SCSS modules only

## Accessibility

- `id="main-content"` on all page mains
- `scroll-margin-top` on all section elements
- SkipLink component (first focusable element)
- ARIA roles on interactive elements (lightbox, toggles, forms)
- Focus trap in lightbox modal
- `aria-modal="true"` on modals
- Keyboard navigation for gallery (arrows, ESC)
- All SVG icons have `aria-label`
- Semantic HTML structure

## Conventions

- `@/*` path alias (maps to project root)
- SCSS modules use camelCase-dashed class names (e.g. `styles['error-page']`)
- shadcn/ui "new-york" style — `components/ui/` for primitives, `@/lib/utils` for `cn()`
- All content strings in `translations.ts`, accessed via dot-notation keys (e.g. `t('hero.title')`)
- Projects have bilingual slugs (`slug.es`/`slug.en`), image per project, typed `ProjectCategory`
- Fonts: Inter (variable) + Fira Code (variable), preloaded in layout from `/fonts/`
- No test suite configured. No CI config present.

## Vercel deploy

Deployed at `maiderbarrutia.vercel.app` (aliased to `maiderbarrutia.com`).  
Env vars required in project settings: `NEXT_PUBLIC_SITE_URL`, `WEB3FORMS_ACCESS_KEY`.  
Optional: `CORS_ORIGINS`.

## Current status / known items

- **Google Search Console**: 40 pages "discovered not indexed" — canonical fix deployed (removed global canonical from root layout), awaiting recrawl
- **CSP**: still uses `'unsafe-eval'` and `'unsafe-inline'` — can be hardened later with nonces/hashes
- **No tests / CI**: consider adding Vitest + Playwright + GitHub Actions
- **Images**: all in `public/projects/`, served via `next/image` with `priority` on hero