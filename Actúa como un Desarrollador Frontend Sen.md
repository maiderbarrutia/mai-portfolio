Actúa como un Desarrollador Frontend Senior experto en UX/UI y optimización de rendimiento. Quiero que crees el código completo para mi portafolio profesional de 2026. 

El stack tecnológico obligatorio debe ser: Next.js (App Router), TypeScript, y SASS (SCSS Modules) para los estilos. El código debe estar ultra-optimizado, ser limpio, modular, accesible (WCAG) y estar listo para ser desplegado de forma 100% gratuita en Vercel o GitHub Pages (asegúrate de que las rutas dinámicas y assets no rompan el build estático).

La estética visual debe ser: color claro inicial pero un boton para cambiar a modo oscuro, tipografías sans-serif limpias y geométricas, espaciado generoso (diseño minimalista) y un único color de acento eléctrico vibrante (#00a292) para botones clave y microinteracciones. Inspirado en un diseño Bento Grid sofisticado. Utiliza esta web de guia porque esta web es la que quiero actualizar: https://maiderbarrutia.github.io/.
La web tiene que tener los idiomas español e inglés. El español como principal

Estructura del sitio a generar:

1. ARQUITECTURA DE PÁGINAS (Next.js App Router):
- PÁGINA PRINCIPAL ('app/page.tsx'): Una landing page Single-Page con las siguientes secciones:
  * Hero Section: Un titular impactante "Maider Barrutia | Fullstack Engineer & UX Architect". Un subtítulo breve que explique el valor de fusionar código robusto, diseño y flujo de trabajo con IA. Dos botones CTA ("Ver Proyectos" y "Contacto").
  * Sección Proyectos Destacados (Star Proyectos): Un layout responsivo con 3-4 proyectos más importante. Cada tarjeta debe simular un "Caso de Estudio" con título, un subtítulo del problema resuelto, tags de tecnologías core y un botón "Ver Caso de Estudio →" que enlace a su página secundaria correspondiente. Los proyectos se deben meter de manera fácil.
  * Sección Tech Stack: Una cuadrícula limpia dividida en 3 bloques: 1) Core (Next.js, TS, React, SASS, Node), 2) Tools (Figma, Git) y 3) AI & Data (Estrategias de prompt engineering, automatización, Python, bases de datos).
  * Sección cv: Añadir brevemente mi experiencia trabajando en el sector y estudios relacionados con ello.
  * Footer / Contacto: Un formulario estético (frontend funcional, con inputs limpios y un botón de enviar con microinteracción de hover) y enlaces a redes (GitHub, LinkedIn).Añadir también el correo por si falla el formulario.

- PÁGINAS SECUNDARIAS DINÁMICAS ('app/projects/[id]/page.tsx'):
  * Una plantilla modular para los proyectos, principalmente los destacados. Cada página debe incluir de forma elegante: 1) El Reto técnico, 2) Decisiones de UX/UI, 3) Arquitectura del Backend/Código, 4) Cómo se integró la IA para acelerar el desarrollo, y 5) Enlaces a la Demo y Repositorio. Incluye un botón flotante o superior para "Volver al inicio".

2. REQUISITOS DE ESTILOS (SASS / SCSS):
- Crea un archivo de variables globales para los colores (oscuro de fondo, gris de tarjetas, acento neón, texto principal y secundario).
- Crea archivos generales de scss para animaciones, colores, helpers (breakpoints, tamaños contenedor máximo, etc.), fonts, clases generales (textos genericos y h1, h2 y h3), etc. Después cada tsx debe tener su propio scss
- Todo el layout debe ser completamente responsive (Mobile-first estricto).
- Añade efectos hover sutiles con transiciones CSS nativas en todas las tarjetas de proyectos y botones para que la web se sienta viva y fluida (microinteracciones).

Por favor, genera la estructura de archivos del proyecto, el código de los componentes clave, las páginas de Next.js y los archivos .module.scss correspondientes listos para copiar, pegar y ejecutar localmente con 'npm run dev'.