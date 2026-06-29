<div align="center">

# 👩‍💻 Maider Barrutia

### _FullStack Developer & UI Specialist_

[![Portfolio](https://img.shields.io/badge/Portfolio-00a292?style=for-the-badge&logo=vercel&logoColor=white)](https://maiderbarrutia.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/maiderbarrutiaunzueta)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/maiderbarrutia)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maiderbarrutia@hotmail.com)

</div>

---

<br>

<details>
<summary><b>Español</b></summary>
<br>

## Sobre mí

Desarrolladora FullStack apasionada por crear interfaces modernas y experiencias digitales memorables. Combino arquitectura frontend con backend escalable y soluciones potenciadas por IA para dar vida a productos web completos.

### 🛠️ Stack principal

`Next.js` `React` `TypeScript` `Sass` `Zod` `Node.js`

### ✨ Funcionalidades

| | |
|---|---|
| 🌐 **Bilingüe** | Español/Inglés con detección automática, rutas separadas y slugs mapeados entre idiomas |
| 🌙 **Modo oscuro** | Persistente, respeta `prefers-color-scheme`, sin flash al cargar |
| ♿ **Accesibilidad** | SkipLink, roles ARIA, focus trap en lightbox, navegación por teclado |
| 🖼️ **Galería** | Lightbox modal con teclado, foco atrapado y `aria-modal` |
| 📬 **Contacto** | Formulario con validación Zod, rate limiting, Web3Forms (sin servidor intermedio) |
| 🔒 **Seguridad** | CSP, rate limiting, sanitización HTML, validación de origen CORS |
| 🚀 **SEO** | Metadata bilingüe dinámica, JSON-LD, sitemap, hreflang, OG/Twitter cards |
| ⚡ **Rendimiento** | SSG, preload de fuentes variables, `next/image` con `priority` |

### 📁 Estructura

```
app/
├── en/                   → Rutas en inglés (home, projects, legal)
├── proyectos/            → Rutas en español
├── proyectos-shared/     → Componentes compartidos (lista + detalle)
├── api/contact/          → API rate-limited para el formulario
├── api/cv/               → Sirve PDFs desde private/cv/ con noindex
├── legal/                → Aviso legal (español)
├── layout.tsx            → Layout raíz + JSON-LD
├── page.tsx              → Home (español)
├── not-found.tsx         → Página 404 bilingüe
├── sitemap.ts            → Sitemap dinámico bilingüe
└── robots.ts             → Robots.txt

components/
├── Header/               → Navegación + toggles de idioma/tema
├── Hero/                 → Introducción tipo bento grid
├── Projects/             → Tarjetas de proyectos destacados
├── TechStack/            → Tecnologías organizadas por categorías
├── Experience/           → Línea temporal + educación
├── Contact/              → Formulario + enlaces sociales
├── Footer/               → Pie de página
└── SkipLink/             → Enlace de accesibilidad

hooks/ → use-intersection-observer, use-mobile
lib/   → constants, translations, sanitize, stripHtml
data/  → projects, slug-lookup, technologies
private/cv/ → PDFs de CV (no accesibles desde public/)
styles/ → SCSS modular (colors, fonts, mixins, helpers)
public/ → llms.txt, favicon, fuentes, imágenes
```

### 🚀 Primeros pasos

```bash
pnpm install
pnpm dev
```

Configura las variables de entorno en `.env`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WEB3FORMS_ACCESS_KEY=tu-clave-web3forms
```

### 🌍 Despliegue en Vercel

| Variable | Ejemplo |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://tudominio.com` |
| `WEB3FORMS_ACCESS_KEY` | Tu clave de Web3Forms |
| `CORS_ORIGINS` | (Opcional) orígenes adicionales |

</details>

---

<br>

<details>
<summary><b>English</b></summary>
<br>

## About Me

FullStack Developer passionate about crafting modern interfaces and memorable digital experiences. I blend frontend architecture with scalable backend and AI-powered solutions to bring complete web products to life.

### 🛠️ Core Stack

`Next.js` `React` `TypeScript` `Sass` `Zod` `Node.js`

### ✨ Features

| | |
|---|---|
| 🌐 **Bilingual** | Spanish/English with auto-detection, separate routes, and mapped slugs |
| 🌙 **Dark Mode** | Persistent, respects `prefers-color-scheme`, no flash on load |
| ♿ **Accessibility** | SkipLink, ARIA roles, lightbox focus trap, keyboard navigation |
| 🖼️ **Gallery** | Modal lightbox with keyboard support, focus trap, and `aria-modal` |
| 📬 **Contact** | Zod-validated form with rate limiting, Web3Forms (no intermediary server) |
| 🔒 **Security** | CSP, rate limiting, HTML sanitization, CORS origin validation |
| 🚀 **SEO** | Dynamic bilingual metadata, JSON-LD, sitemap, hreflang, OG/Twitter cards |
| ⚡ **Performance** | SSG, variable font preload, `next/image` with `priority` |

### 📁 Project Structure

```
app/
├── en/                   → English routes (home, projects, legal)
├── proyectos/            → Spanish routes
├── proyectos-shared/     → Shared components (list + detail)
├── api/contact/          → Rate-limited contact API
├── api/cv/               → Serves PDFs from private/cv/ with noindex
├── legal/                → Legal notice (Spanish)
├── layout.tsx            → Root layout + JSON-LD
├── page.tsx              → Home (Spanish)
├── not-found.tsx         → Bilingual 404 page
├── sitemap.ts            → Dynamic bilingual sitemap
└── robots.ts             → Robots.txt

components/
├── Header/               → Navigation + language/theme toggles
├── Hero/                 → Bento grid introduction
├── Projects/             → Featured project cards
├── TechStack/            → Tech organized by category
├── Experience/           → Timeline + education
├── Contact/              → Form + social links
├── Footer/               → Page footer
└── SkipLink/             → Accessibility skip link

hooks/ → use-intersection-observer, use-mobile
lib/   → constants, translations, sanitize, stripHtml
data/  → projects, slug-lookup, technologies
private/cv/ → CV PDFs (not accessible from public/)
styles/ → Modular SCSS (colors, fonts, mixins, helpers)
public/ → llms.txt, favicon, fonts, images
```

### 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Set up environment variables in `.env`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WEB3FORMS_ACCESS_KEY=your-web3forms-key
```

### 🌍 Deploy on Vercel

| Variable | Example |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |
| `WEB3FORMS_ACCESS_KEY` | Your Web3Forms key |
| `CORS_ORIGINS` | (Optional) additional origins |

</details>

