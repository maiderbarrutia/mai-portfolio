# Maider Barrutia — Portfolio

Personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Sass**. Features bilingual (ES/EN) support, dark mode, project gallery with lightbox, and AI-optimized SEO.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework (RSC, SSG, dynamic routes) |
| React 19 | UI library |
| TypeScript 5.7 | Static typing |
| Sass (SCSS) | Styling (modular architecture with partials) |
| Zod | Schema validation (forms + API) |
| react-hook-form | Form state management |
| lucide-react + react-icons | Icons |
| isomorphic-dompurify | HTML sanitization |
| Tailwind CSS 4 | Utility CSS (minimal, SCSS is primary) |
| Vercel Analytics | Privacy-friendly analytics |

## Features

### 🌐 Bilingual (ES/EN)
- Custom `LanguageContext` with `t()` and `tHtml()` helpers.
- Routes: `/projects/` (EN) and `/proyectos/` (ES) with matching `[id]` slugs.
- Language toggle intelligently maps slugs between languages.
- `portfolio-language` cookie for server-side metadata detection.
- All visible text, metadata (title, OG, Twitter), and 404 page are fully translated.

### 🌗 Dark Mode
- Theme persistence via `localStorage`; defaults to `prefers-color-scheme`.
- Inline script prevents flash-of-wrong-theme before React hydrates.
- CSS custom properties for light/dark colors in `styles/_colors.scss`.

### ♿ Accessibility
- Skip-to-content link as first focusable element.
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>` with `aria-label`.
- Full ARIA: `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, `role="tablist"`, `role="alert"`, `aria-live`.
- Focus-visible outlines; `inert` on hidden mobile nav.

### 🖼️ Project Gallery
- Vertical gallery with original aspect ratios.
- Lightbox with focus trap, keyboard navigation, and `aria-modal`.
- 23 projects across 3 categories: Web Development, Web Design, Graphic Design.
- 5 confidential projects (no client info, SVG previews, `confidentialNote`).

### 📄 Contact
- Form with client + server validation (Zod).
- Rate-limited API route (5 req/hr per IP) with CORS origin checking.
- Privacy-forward: form submitted client-side to Web3Forms.
- Copy-to-clipboard email button (email never visible in DOM).

### 🔒 Security
- Content Security Policy via HTTP headers.
- X-Frame-Options: DENY, X-Content-Type-Options: nosniff.
- Permissions Policy (blocks camera, microphone, geolocation).
- HTML sanitization on all translated content.
- `NEXT_PUBLIC_SITE_URL` required at build time (fails fast if missing).

### 🚀 Performance
- Font preloading (Inter + Fira Code variable WOFF2).
- `next/image` with `priority` for LCP elements.
- AVIF/WebP support; scroll-triggered intersection observer animations.
- SSG for project detail pages (46 static paths).

### 🔍 SEO
- Dynamic `generateMetadata()` on all pages (bilingual titles, OG, Twitter).
- JSON-LD structured data (Person + WebSite schemas).
- Sitemap with all routes + project pages.
- Robots.txt (dynamic) + hreflang for ES/EN.
- Bilingual 404 page with localized metadata.

## Getting Started

```bash
pnpm install
pnpm dev
```

Requires `NEXT_PUBLIC_SITE_URL` in `.env`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WEB3FORMS_ACCESS_KEY=your-web3forms-key
```

## Project Structure

```
app/
├── api/contact/           # Rate-limited form API route
├── legal/                 # Bilingual legal/privacy page
├── projects/              # English project routes + [id] detail
├── proyectos/             # Spanish project routes + [id] detail
├── proyectos-shared/      # Shared project components (list + detail)
├── layout.tsx             # Root layout (JSON-LD, fonts, metadata)
├── page.tsx               # Homepage (bilingual metadata)
├── not-found.tsx          # Bilingual 404 page
├── error.tsx              # Error boundary
├── sitemap.ts             # Dynamic sitemap
└── robots.ts              # Dynamic robots.txt

components/
├── Header/                # Nav + language/theme toggles
├── Hero/                  # Bento grid intro
├── Projects/              # Featured project cards
├── TechStack/             # Categorized tech tabs
├── Experience/            # Timeline + education tabs
├── Contact/               # Form + social links
├── Footer/                # Footer nav
└── SkipLink/              # Accessibility skip link

lib/
├── constants.ts           # SITE_URL + pageTitle() helper
├── translations.ts        # 264-line ES/EN translation map
├── sanitize.ts            # DOMPurify wrapper
└── stripHtml.ts           # HTML tag removal for metadata

data/
├── projects.ts            # 23 project entries
├── technologies.ts        # Tech stack data
└── legal.ts               # Legal text content

styles/
├── _colors.scss           # Light/dark color tokens
├── _fonts.scss            # Font-face declarations
├── _mixins.scss           # Responsive breakpoints
├── _helpers.scss          # Spacing/utility classes
├── _common.scss           # Shared element styles
├── _texts.scss            # Typography system
└── globals.scss           # CSS custom properties + reset
```

## Deployment

Deployed on **Vercel**. Configure in project settings:

| Variable | Scope | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | `https://maiderbarrutia.com` |
| `WEB3FORMS_ACCESS_KEY` | Production | `your-web3forms-key` |
| `CORS_ORIGINS` | Production | (optional) extra allowed origins |

The `.env` file provides local defaults; Vercel environment variables override them at build time.
