export type ProjectCategory = 'graphic-design' | 'web-design' | 'web-development';

export interface ProjectMedia {
  src: string;
  type: 'image' | 'video';
  alt: {
    es: string;
    en: string;
  };
  caption?: {
    es: string;
    en: string;
  };
}

export interface Project {
  id: string;
  category: ProjectCategory;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  image: string;
  media: ProjectMedia[];
  featured: boolean;
  demoUrl?: string;
  repoUrl?: string;
  challenge: {
    es: string;
    en: string;
  };
  uxDecisions: {
    es: string;
    en: string;
  };
  architecture: {
    es: string;
    en: string;
  };
  aiIntegration: {
    es: string;
    en: string;
  };
  problemsSolved?: {
    es: string;
    en: string;
  };
  metrics?: {
    es: string;
    en: string;
  };
  myRole?: {
    es: string;
    en: string;
  };
  techDetails?: {
    es: string;
    en: string;
  };
  deployment?: {
    es: string;
    en: string;
  };
  confidentialNote?: string;
}

const placeholder = '/projects/text-gen.svg';

export const projects: Project[] = [
  {
    id: 'aisiplan',
    category: 'web-development',
    title: { es: 'Aisiplan', en: 'Aisiplan' },
    subtitle: {
      es: 'Plataforma para la gestión de actividades de ocio y tiempo libre',
      en: 'Platform for managing leisure and free time activities',
    },
    description: {
      es: 'Plataforma fullStack que centraliza actividades de ocio, permitiendo a usuarios descubrir e inscribirse, y a empresas gestionar sus publicaciones desde un panel.',
      en: 'FullStack platform that centralizes leisure activities, letting users discover and register, and companies manage their listings from a dashboard.',
    },
    tags: ['TypeScript', 'React.js', 'Vite', 'SASS', 'Node.js', 'Express', 'MySQL', 'TypeORM', 'JWT', 'Figma'],
    image: '/projects/web-develop/aisiplan/cabecera-sin-login.jpg',
    media: [
      { src: '/projects/web-develop/aisiplan/pagina-inicio.jpg', type: 'image', alt: { es: 'Página de inicio Aisiplan', en: 'Aisiplan home page' } },
      { src: '/projects/web-develop/aisiplan/pagina-inicio-sesion.jpg', type: 'image', alt: { es: 'Inicio de sesión Aisiplan', en: 'Aisiplan login' } },
      { src: '/projects/web-develop/aisiplan/pagina-actividades.jpg', type: 'image', alt: { es: 'Página de actividades Aisiplan', en: 'Aisiplan activities page' } },
      { src: '/projects/web-develop/aisiplan/pagina-detalle-actividades.jpg', type: 'image', alt: { es: 'Detalle de actividad Aisiplan', en: 'Aisiplan activity detail' } },
      { src: '/projects/web-develop/aisiplan/pagina-perfil.jpg', type: 'image', alt: { es: 'Perfil de usuario Aisiplan', en: 'Aisiplan user profile' } },
      { src: '/projects/web-develop/aisiplan/cabecera-logueado.jpg', type: 'image', alt: { es: 'Cabecera logueado Aisiplan', en: 'Aisiplan logged-in header' } },
      { src: '/projects/web-develop/aisiplan/cabecera-sin-login.jpg', type: 'image', alt: { es: 'Cabecera sin login Aisiplan', en: 'Aisiplan logged-out header' } },
      { src: '/projects/web-develop/aisiplan/formularios.jpg', type: 'image', alt: { es: 'Formularios Aisiplan', en: 'Aisiplan forms' } },
      { src: '/projects/web-develop/aisiplan/footer.jpg', type: 'image', alt: { es: 'Footer Aisiplan', en: 'Aisiplan footer' } },
    ],
    featured: true,
    demoUrl: 'https://aisiplan.vercel.app/',
    repoUrl: 'https://github.com/maiderbarrutia/fullstack-aisiplan',
    challenge: {
      es: 'No existía una plataforma que unificara toda la oferta de ocio local. Las alternativas (Eventbrite, Meetup, Airbnb Experiences, Fever) están fragmentadas: unas enfocadas al turismo, otras solo a música, y ninguna facilita el descubrimiento de actividades pequeñas o gratuitas de empresas locales. El reto era construir una web que centralizara toda la oferta y permitiera a pequeñas empresas publicar sin barreras.',
      en: 'No platform existed that unified all local leisure offerings. Alternatives (Eventbrite, Meetup, Airbnb Experiences, Fever) are fragmented: some focused on tourism, others only on music, and none facilitate discovery of small or free activities from local businesses. The challenge was to build a site that centralizes all offerings and lets small businesses publish without barriers.',
    },
    uxDecisions: {
      es: 'Identidad visual propia con logotipo y paleta naranja que transmite energía. Header fijo con navegación adaptativa al iniciar sesión. Página de inicio con buscador, actividades destacadas, categorías visuales y carrusel de empresas. Formularios con validación en tiempo real y mensajes claros. Accesibilidad: contraste suficiente, tipografía legible y etiquetas semánticas.',
      en: 'Custom visual identity with logo and orange palette conveying energy. Fixed header with adaptive navigation when logged in. Home page with search bar, featured activities, visual categories, and company carousel. Forms with real-time validation and clear messages. Accessibility: sufficient contrast, readable typography, semantic labels.',
    },
    architecture: {
      es: 'Frontend con React + Vite + TypeScript + SASS. Backend con Node.js + Express + TypeORM sobre MySQL. API RESTful con autenticación JWT, subida de archivos con Multer y middlewares de validación. Base de datos relacional con 5 tablas, claves foráneas y restricciones de integridad.',
      en: 'Frontend with React + Vite + TypeScript + SASS. Backend with Node.js + Express + TypeORM on MySQL. RESTful API with JWT authentication, Multer file upload, and validation middlewares. Relational database with 5 tables, foreign keys, and integrity constraints.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Centraliza la oferta de ocio en un único acceso, eliminando búsquedas dispersas. Pequeñas empresas locales publican sin coste. Usuarios buscan por localización y categorías, se inscriben directamente. Empresas gestionan publicaciones e inscripciones desde un panel.',
      en: 'Centralizes leisure offerings in one place, eliminating scattered searches. Small local businesses publish at no cost. Users search by location and categories, register directly. Companies manage listings and registrations from a dashboard.',
    },
    metrics: {
      es: '• Sistema de autenticación con JWT y roles (empresa/usuario)\n• CRUD completo de actividades con formularios dinámicos\n• Panel de perfil para empresas con gestión de actividades e inscripciones\n• Buscador con filtros por texto, localización y categorías\n• Subida de imágenes y vídeos con Multer\n• Arquitectura modular escalable (backend separado del frontend)\n• Base de datos relacional con 5 tablas y relaciones normalizadas\n• Seeders para carga inicial de datos',
      en: '• JWT authentication system with roles (company/user)\n• Full CRUD for activities with dynamic forms\n• Company profile panel with activity and registration management\n• Search with text, location, and category filters\n• Image and video upload with Multer\n• Scalable modular architecture (separated backend and frontend)\n• Relational database with 5 tables and normalized relationships\n• Seeders for initial data loading',
    },
    myRole: {
      es: 'Desarrollo fullStack completo: investigación de mercado, diseño de identidad visual y prototipos en Figma, base de datos MySQL, backend con Node.js + Express + TypeORM, frontend con React + Vite + TypeScript + SASS, autenticación JWT, pruebas con Postman, despliegue en Vercel y documentación técnica.',
      en: 'Complete fullStack development: market research, visual identity design and prototypes in Figma, MySQL database, backend with Node.js + Express + TypeORM, frontend with React + Vite + TypeScript + SASS, JWT authentication, Postman testing, Vercel deployment, and technical documentation.',
    },
    techDetails: {
      es: '• **Frontend:** React + Vite + TypeScript + SASS. Componentes reutilizables, React Router para navegación, Context API para estado de autenticación\n• **Backend:** Node.js + Express + TypeORM. Arquitectura MVC con controladores, entidades, rutas y middlewares\n• **Base de datos:** MySQL relacional con 5 tablas (Category, UserData, Company, Activity, Registration), claves foráneas e índices\n• **Autenticación:** JWT con middlewares de protección de rutas y contexto de sesión en frontend\n• **API REST:** Endpoints completos para usuarios, empresas, actividades, categorías e inscripciones\n• **Subida de archivos:** Multer para imágenes y vídeos, almacenados en carpeta pública\n• **Validación:** Postman para pruebas de endpoints y middlewares de validación server-side\n• **Metodología:** Kanban con Trello, documentación en Notion, control de versiones con Git + GitHub',
      en: '• **Frontend:** React + Vite + TypeScript + SASS. Reusable components, React Router for navigation, Context API for auth state\n• **Backend:** Node.js + Express + TypeORM. MVC architecture with controllers, entities, routes, and middlewares\n• **Database:** MySQL relational with 5 tables (Category, UserData, Company, Activity, Registration), foreign keys and indexes\n• **Authentication:** JWT with route protection middlewares and session context in frontend\n• **REST API:** Complete endpoints for users, companies, activities, categories, and registrations\n• **File upload:** Multer for images and videos, stored in public folder\n• **Validation:** Postman for endpoint testing and server-side validation middlewares\n• **Methodology:** Kanban with Trello, documentation in Notion, version control with Git + GitHub',
    },
    deployment: {
      es: '• **Frontend:** Vercel\n• **Backend:** Render\n• **Base de datos:** Aiven (MySQL)\n• **Imágenes:** Cloudinary',
      en: '• **Frontend:** Vercel\n• **Backend:** Render\n• **Database:** Aiven (MySQL)\n• **Images:** Cloudinary',
    },
  },
  {
    id: 'ecommerce-branding',
    category: 'web-development',
    title: { es: 'Ecommerce + Branding', en: 'E-commerce + Branding' },
    subtitle: {
      es: 'Identidad corporativa completa y tienda online multilingüe',
      en: 'Complete corporate identity and multilingual online store',
    },
    description: {
      es: 'Proyecto integral que abarca desde el diseño de logotipo, packaging e identidad corporativa hasta el desarrollo completo de una tienda online WooCommerce multilingüe (6 idiomas) con catálogo de productos, carrito de compra, pasarela de pago internacional y panel de administración.',
      en: 'Comprehensive project covering logo design, packaging, corporate identity, and complete multilingual WooCommerce online store development (6 languages) with product catalog, shopping cart, international payment gateway, and admin panel.',
    },
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Illustrator', 'Photoshop', 'Identidad Corporativa', 'Packaging'],
    image: '/projects/branding-ecommerce.svg',
    media: [],
    featured: false,
    challenge: {
      es: 'El cliente necesitaba una identidad de marca completa desde cero: logotipo, paleta cromática, tipografía corporativa, diseño de packaging para múltiples líneas de producto, y una tienda online funcional en 6 idiomas. El reto era mantener la coherencia visual en todos los soportes (físico y digital) mientras se construía una experiencia de compra fluida y profesional.',
      en: 'The client needed a complete brand identity from scratch: logo, color palette, corporate typography, packaging design for multiple product lines, and a functional online store in 6 languages. The challenge was maintaining visual consistency across all media (physical and digital) while building a smooth and professional shopping experience.',
    },
    uxDecisions: {
      es: 'Diseño limpio y profesional con enfoque en la presentación de productos. Navegación por categorías clara, fichas de producto detalladas, carrito visible en todo momento. Proceso de checkout optimizado en varios pasos con selector de idioma accesible desde cualquier página. La identidad visual se trasladó del packaging al digital manteniendo colores, tipografía y estilo gráfico.',
      en: 'Clean and professional design focused on product presentation. Clear category navigation, detailed product sheets, always-visible cart. Optimized multi-step checkout process with language selector accessible from any page. The visual identity was carried from packaging to digital, maintaining colors, typography, and graphic style.',
    },
    architecture: {
      es: 'Identidad corporativa diseñada en Illustrator y Photoshop. Arquitectura web basada en WordPress + WooCommerce con tema personalizado. Base de datos MySQL relacional para productos, pedidos y usuarios. Integración de plugins para multilingüismo (WPML), pasarela de pago internacional, y envíos. Caché y optimización de rendimiento.',
      en: 'Corporate identity designed in Illustrator and Photoshop. Web architecture based on WordPress + WooCommerce with custom theme. MySQL relational database for products, orders, and users. Plugin integration for multilingual support (WPML), international payment gateway, and shipping. Cache and performance optimization.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Unifica la imagen de marca en todos los canales (packaging, web, redes sociales). Centraliza la venta online de múltiples líneas de producto en un único ecommerce multilingüe. Gestión eficiente de inventario y pedidos desde el panel de administración. Visibilidad internacional con dominio .com y configuración multi-moneda.',
      en: 'Unifies brand image across all channels (packaging, web, social media). Centralizes online sales of multiple product lines in a single multilingual e-commerce. Efficient inventory and order management from the admin panel. International visibility with .com domain and multi-currency setup.',
    },
    metrics: {
      es: '• Identidad corporativa completa: logotipo, paleta, tipografía, manual de marca\n• Diseño de packaging para 3 líneas de producto\n• Tienda online funcional con WooCommerce\n• Soporte para 6 idiomas con traducciones completas\n• Pasarela de pago internacional integrada\n• Sistema de seguimiento de pedidos para clientes\n• Diseño responsive adaptado a todos los dispositivos\n• Optimización SEO para motores de búsqueda\n• Integración con redes sociales',
      en: '• Complete corporate identity: logo, palette, typography, brand guidelines\n• Packaging design for 3 product lines\n• Functional online store with WooCommerce\n• Support for 6 languages with full translations\n• Integrated international payment gateway\n• Order tracking system for customers\n• Responsive design adapted to all devices\n• SEO optimization for search engines\n• Social media integration',
    },
    myRole: {
      es: 'Dirección de arte integral: diseño de logotipo, identidad corporativa, packaging para 3 líneas de producto, y desarrollo completo del ecommerce (WordPress + WooCommerce, personalización de tema, integración multilingüe, pasarela de pago, SEO, rendimiento y despliegue en producción).',
      en: 'Complete art direction: logo design, corporate identity, packaging for 3 product lines, and full e-commerce development (WordPress + WooCommerce, theme customization, multilingual integration, payment gateway, SEO, performance, and production deployment).',
    },
    techDetails: {
      es: '• **Identidad corporativa:** Illustrator, Photoshop — logotipo, paleta cromática, tipografía, manual de marca\n• **Packaging:** Illustrator, Photoshop — diseño de envases para 3 líneas de producto\n• **CMS:** WordPress + WooCommerce con tema personalizado\n• **Idiomas:** WPML para gestión multilingüe (6 idiomas)\n• **Frontend:** HTML5, CSS3, JavaScript, tema hijo personalizado\n• **Backend:** PHP, MySQL con tablas relacionales de WooCommerce\n• **Plugins:** WPML, pasarela de pago, SEO, caché, seguridad\n• **Rendimiento:** Caché server-side, optimización de imágenes, minificación de assets\n• **SEO:** Sitemaps, meta tags multilingües, datos estructurados\n• **Hosting:** Servidor dedicado con SSL y CDN',
      en: '• **Corporate identity:** Illustrator, Photoshop — logo, color palette, typography, brand guidelines\n• **Packaging:** Illustrator, Photoshop — packaging design for 3 product lines\n• **CMS:** WordPress + WooCommerce with custom theme\n• **Languages:** WPML for multilingual management (6 languages)\n• **Frontend:** HTML5, CSS3, JavaScript, custom child theme\n• **Backend:** PHP, MySQL with WooCommerce relational tables\n• **Plugins:** WPML, payment gateway, SEO, cache, security\n• **Performance:** Server-side cache, image optimization, asset minification\n• **SEO:** Sitemaps, multilingual meta tags, structured data\n• **Hosting:** Dedicated server with SSL and CDN',
    },
    confidentialNote: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
  },
  {
    id: 'energy-distribution-portal',
    category: 'web-development',
    title: { es: 'Portal Corporativo de Gas', en: 'Gas Corporate Portal' },
    subtitle: {
      es: 'Maquetación completa del portal corporativo para una de las mayores compañías energéticas del país',
      en: 'Complete markup of the corporate portal for one of the largest energy companies in the country',
    },
    description: {
      es: 'Maquetación completa en WordPress con Elementor y SASS del portal corporativo de la división de gas butano y propano de una gran compañía energética. Desarrollo visual de todas las páginas a partir de diseños proporcionados, incluyendo home, catálogo de productos, FAQ y contenido corporativo bilingüe.',
      en: 'Complete markup in WordPress with Elementor and SASS of the butane and propane gas division corporate portal of a major energy company. Visual development of all pages from provided designs, including home, product catalog, FAQ, and bilingual corporate content.',
    },
    tags: ['WordPress', 'Elementor', 'SASS', 'HTML/CSS', 'JavaScript'],
    image: '/projects/energy-portal.svg',
    media: [],
    featured: true,
    challenge: {
      es: 'Una de las mayores compañías energéticas del país necesitaba un portal web moderno y funcional para su división de gas butano y propano. El reto era maquetar con Elementor + SASS un sitio completo que mantuviera la identidad corporativa de una gran empresa, fuera visualmente coherente en todas sus secciones, responsive en todos los dispositivos y accesible para un público diverso (particulares y empresas), cumpliendo con los estándares de calidad del sector energético.',
      en: 'One of the largest energy companies in the country needed a modern, functional web portal for its butane and propane gas division. The challenge was to build with Elementor + SASS a complete site that maintained the corporate identity of a large company, was visually coherent across all sections, responsive on all devices, and accessible to a diverse audience (individuals and businesses), meeting energy sector quality standards.',
    },
    uxDecisions: {
      es: 'Diseño corporativo que transmite seguridad y confianza, alineado con la identidad de marca de una gran compañía energética. Navegación clara separando canales (particulares vs empresas). Contenido educativo sobre seguridad y mantenimiento. Blog y FAQ con información útil. Coherencia visual en todas las secciones del portal.',
      en: 'Corporate design conveying security and trust, aligned with the brand identity of a major energy company. Clear navigation separating channels (individuals vs businesses). Educational content on safety and maintenance. Blog and FAQ with useful information. Visual consistency across all portal sections.',
    },
    architecture: {
      es: 'WordPress con Elementor para la maquetación visual y SASS para estilos personalizados avanzados. Tema hijo personalizado con overrides de CSS vía SASS. Gestión de contenidos bilingüe. Diseño responsive con breakpoints personalizados. Optimización de rendimiento y SEO on-page.',
      en: 'WordPress with Elementor for visual markup and SASS for advanced custom styles. Custom child theme with CSS overrides via SASS. Bilingual content management. Responsive design with custom breakpoints. Performance optimization and on-page SEO.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Proporciona una presencia digital corporativa y profesional para la división de gas de una gran compañía energética. Unifica el diseño visual de todas las secciones del portal. Mantiene la coherencia de marca en cada página. Ofrece una experiencia de usuario fluida y responsive.',
      en: 'Provides a corporate, professional digital presence for the gas division of a major energy company. Unifies visual design across all portal sections. Maintains brand consistency on every page. Delivers a smooth, responsive user experience.',
    },
    metrics: {
      es: '• Portal corporativo completo para gran compañía del sector energético\n• Maquetación de todas las páginas con Elementor + SASS\n• Diseño responsive para todos los dispositivos\n• Soporte bilingüe (español/inglés)\n• Contenido educativo, blog y FAQ\n• Coherencia visual corporativa\n• Optimización SEO on-page\n• Integración de estilos SASS personalizados',
      en: '• Complete corporate portal for a major energy sector company\n• Markup of all pages with Elementor + SASS\n• Responsive design for all devices\n• Bilingual support (Spanish/English)\n• Educational content, blog, and FAQ\n• Corporate visual consistency\n• On-page SEO optimization\n• Custom SASS style integration',
    },
    myRole: {
      es: 'Maquetación completa de todas las páginas del portal en WordPress con Elementor y SASS a partir de diseños proporcionados, incluyendo la personalización avanzada de estilos con SASS, diseño responsive, y optimización visual general.',
      en: 'Complete markup of all portal pages in WordPress with Elementor and SASS from provided designs, including advanced style customization with SASS, responsive design, and overall visual optimization.',
    },
    techDetails: {
      es: '• **CMS:** WordPress con Elementor\n• **Frontend:** SASS, HTML5, CSS3, JavaScript\n• **Maquetación:** Elementor con estilos SASS personalizados en tema hijo\n• **Estilos:** SASS con variables, mixins, nesting y partials\n• **Diseño:** Responsive con breakpoints personalizados\n• **SEO:** Meta tags, datos estructurados, optimización on-page\n• **Rendimiento:** Optimización de imágenes, minificación, caché\n• **Idiomas:** Bilingüe español/inglés',
      en: '• **CMS:** WordPress with Elementor\n• **Frontend:** SASS, HTML5, CSS3, JavaScript\n• **Markup:** Elementor with custom SASS styles in child theme\n• **Styles:** SASS with variables, mixins, nesting, and partials\n• **Design:** Responsive with custom breakpoints\n• **SEO:** Meta tags, structured data, on-page optimization\n• **Performance:** Image optimization, minification, cache\n• **Languages:** Bilingual Spanish/English',
    },
    confidentialNote: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
  },
  {
    id: 'ai-sales-simulator',
    category: 'web-development',
    title: { es: 'Simulador de Ventas con IA', en: 'AI Sales Simulator' },
    subtitle: {
      es: 'Desarrollo completo en Webflow para plataforma de ventas con IA',
      en: 'Complete Webflow development for an AI sales platform',
    },
    description: {
      es: 'Desarrollo completo en Webflow de la web corporativa para una plataforma SaaS de simulación de ventas con IA. Maquetación pixel-perfect a partir de diseños proporcionados, con animaciones avanzadas, diseño responsive y experiencia de usuario fluida. La web comunica el valor del producto a través de storytelling visual, métricas impactantes y un diseño moderno y profesional.',
      en: 'Complete Webflow development of the corporate website for an AI-powered sales simulation SaaS platform. Pixel-perfect markup from provided designs, with advanced animations, responsive design, and smooth user experience. The website communicates product value through visual storytelling, impactful metrics, and a modern, professional design.',
    },
    tags: ['Webflow', 'HTML/CSS', 'JavaScript', 'Animaciones', 'Responsive Design'],
    image: '/projects/ai-sales-simulator.svg',
    media: [],
    featured: true,
    challenge: {
      es: 'Necesitaban una web corporativa que reflejara la innovación tecnológica del producto (simulador de ventas con IA) y transmitiera confianza a grandes empresas. El diseño debía ser moderno, con animaciones sutiles, storytelling visual y una arquitectura de contenidos que guiara al usuario desde el interés hasta la solicitud de demo. El reto era traducir diseños estáticos a una web interactiva y fluida, manteniendo la fidelidad pixel-perfect.',
      en: 'They needed a corporate website that reflected the technological innovation of the product (AI sales simulator) and conveyed trust to large companies. The design had to be modern, with subtle animations, visual storytelling, and content architecture guiding users from interest to demo request. The challenge was translating static designs into an interactive, fluid website while maintaining pixel-perfect fidelity.',
    },
    uxDecisions: {
      es: 'Diseño limpio y profesional con jerarquía visual clara. Hero impactante con propuesta de valor. Secciones de beneficios con iconografía y métricas. Comparativa interactiva (formación clásica vs role play con IA). Testimonios de clientes reales. FAQ optimizada. Llamadas a la acción estratégicamente ubicadas. Animaciones que mejoran la narrativa sin saturar.',
      en: 'Clean, professional design with clear visual hierarchy. Impactful hero with value proposition. Benefits sections with icons and metrics. Interactive comparison (traditional training vs AI role play). Real client testimonials. Optimized FAQ. Strategically placed calls to action. Animations that enhance narrative without overwhelming.',
    },
    architecture: {
      es: 'Web desarrollada íntegramente en Webflow con CMS para gestión de contenidos. Animaciones CSS y JavaScript personalizadas. Diseño responsive con breakpoints optimizados. Integración de formularios con automatizaciones. Optimización de rendimiento y SEO on-page. Hosting en Webflow con CDN global.',
      en: 'Website built entirely in Webflow with CMS for content management. Custom CSS and JavaScript animations. Responsive design with optimized breakpoints. Form integration with automations. Performance optimization and on-page SEO. Webflow hosting with global CDN.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Proporciona una presencia digital profesional y moderna que refleja la innovación del producto. Comunica eficazmente el valor diferencial frente a métodos tradicionales. Genera confianza en grandes empresas mediante testimonios y casos de uso. Optimiza la conversión a demo con un recorrido de usuario bien definido.',
      en: 'Provides a professional, modern digital presence that reflects product innovation. Effectively communicates differential value vs traditional methods. Builds trust in large companies through testimonials and use cases. Optimizes demo conversion with a well-defined user journey.',
    },
    metrics: {
      es: '• Web corporativa completa desarrollada en Webflow\n• Maquetación pixel-perfect a partir de diseños\n• Animaciones avanzadas CSS y JavaScript\n• Diseño responsive para todos los dispositivos\n• CMS para gestión autónoma de contenidos\n• Formularios integrados con automatización\n• Optimización SEO completa\n• Hosting con CDN global y alto rendimiento',
      en: '• Complete corporate website built in Webflow\n• Pixel-perfect markup from designs\n• Advanced CSS and JavaScript animations\n• Responsive design for all devices\n• CMS for autonomous content management\n• Forms with automation integration\n• Complete SEO optimization\n• Hosting with global CDN and high performance',
    },
    myRole: {
      es: 'Desarrollo completo de la web en Webflow: maquetación pixel-perfect a partir de diseños proporcionados, implementación de animaciones, diseño responsive, integración de CMS y formularios, optimización de rendimiento y SEO, y despliegue en producción.',
      en: 'Complete website development in Webflow: pixel-perfect markup from provided designs, animation implementation, responsive design, CMS and form integration, performance and SEO optimization, and production deployment.',
    },
    techDetails: {
      es: '• **CMS:** Webflow con sistema de gestión de contenidos integrado\n• **Frontend:** Webflow Designer + Custom Code (CSS, JavaScript)\n• **Animaciones:** Animaciones CSS personalizadas, interacciones Webflow, JavaScript\n• **Diseño:** Responsive con breakpoints optimizados\n• **Formularios:** Webflow Forms con integración de automatizaciones\n• **SEO:** Meta tags, sitemap, datos estructurados, optimización on-page\n• **Rendimiento:** CDN global, lazy loading, minificación automática\n• **Hosting:** Webflow Enterprise hosting con SSL y CDN',
      en: '• **CMS:** Webflow with integrated content management system\n• **Frontend:** Webflow Designer + Custom Code (CSS, JavaScript)\n• **Animations:** Custom CSS animations, Webflow interactions, JavaScript\n• **Design:** Responsive with optimized breakpoints\n• **Forms:** Webflow Forms with automation integration\n• **SEO:** Meta tags, sitemap, structured data, on-page optimization\n• **Performance:** Global CDN, lazy loading, automatic minification\n• **Hosting:** Webflow Enterprise hosting with SSL and CDN',
    },
    confidentialNote: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
  },
  {
    id: 'landing-gasnature',
    category: 'web-design',
    title: { es: 'Landing GasNature', en: 'GasNature Landing Page' },
    subtitle: {
      es: 'Landing page para empresa de gas natural',
      en: 'Landing page for a natural gas company',
    },
    description: {
      es: 'Diseño de landing page para GasNature, empresa de servicios energéticos.',
      en: 'Landing page design for GasNature, an energy services company.',
    },
    tags: ['Photoshop', 'Landing Page'],
    image: '/projects/web-design/gasnature-landing.jpg',
    media: [
      { src: '/projects/web-design/gasnature-landing.jpg', type: 'image', alt: { es: 'Landing GasNature', en: 'GasNature Landing Page' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una landing page atractiva y funcional que comunique los servicios de la empresa.',
      en: 'Create an attractive and functional landing page that communicates the company services.',
    },
    uxDecisions: {
      es: 'Diseño limpio con llamadas a la acción claras. Optimización para conversión.',
      en: 'Clean design with clear calls to action. Conversion optimization.',
    },
    architecture: {
      es: 'Diseño en Photoshop, maquetación con HTML5 y CSS3.',
      en: 'Design in Photoshop, layout with HTML5 and CSS3.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'landing-tcs',
    category: 'web-design',
    title: { es: 'Landing TCS', en: 'TCS Landing Page' },
    subtitle: {
      es: 'Landing page para empresa de servicios técnicos',
      en: 'Landing page for a technical services company',
    },
    description: {
      es: 'Diseño de landing page para TCS, empresa de servicios técnicos.',
      en: 'Landing page design for TCS, a technical services company.',
    },
    tags: ['Photoshop', 'Landing Page'],
    image: '/projects/web-design/tcs.jpg',
    media: [
      { src: '/projects/web-design/tcs.jpg', type: 'image', alt: { es: 'Landing TCS', en: 'TCS Landing Page' } },
      { src: '/projects/tcs.svg', type: 'image', alt: { es: 'Landing TCS detalle', en: 'TCS Landing detail' } },
    ],
    featured: false,
    challenge: {
      es: 'Diseñar una landing page profesional que refleje la experiencia técnica de la empresa.',
      en: 'Design a professional landing page that reflects the company technical expertise.',
    },
    uxDecisions: {
      es: 'Enfoque en la presentación de servicios y datos de contacto. Diseño corporativo.',
      en: 'Focus on service presentation and contact information. Corporate design.',
    },
    architecture: {
      es: 'Diseño en Photoshop, maquetación responsive con HTML5 y CSS3.',
      en: 'Design in Photoshop, responsive layout with HTML5 and CSS3.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'landing-traductor-itzulpen',
    category: 'web-design',
    title: { es: 'Landing Traductor Itzulpen', en: 'Itzulpen Translator Landing' },
    subtitle: {
      es: 'Landing page para servicio de traducción',
      en: 'Landing page for a translation service',
    },
    description: {
      es: 'Diseño de landing page para Itzulpen, servicio profesional de traducción.',
      en: 'Landing page design for Itzulpen, a professional translation service.',
    },
    tags: ['Photoshop', 'Landing Page'],
    image: '/projects/web-design/traductor-web-itzulpen.png',
    media: [
      { src: '/projects/web-design/traductor-web-itzulpen.png', type: 'image', alt: { es: 'Landing Itzulpen', en: 'Itzulpen Landing Page' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una página que transmita confianza y profesionalidad en servicios lingüísticos.',
      en: 'Create a page that conveys trust and professionalism in language services.',
    },
    uxDecisions: {
      es: 'Diseño minimalista con énfasis en el formulario de contacto y servicios.',
      en: 'Minimalist design with emphasis on the contact form and services.',
    },
    architecture: {
      es: 'Diseño en Photoshop con maquetación web estándar.',
      en: 'Design in Photoshop with standard web layout.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'web-araex',
    category: 'web-design',
    title: { es: 'Web Araex', en: 'Araex Website' },
    subtitle: {
      es: 'Sitio web corporativo para empresa del sector industrial',
      en: 'Corporate website for an industrial sector company',
    },
    description: {
      es: 'Diseño de sitio web corporativo para Araex.',
      en: 'Corporate website design for Araex.',
    },
    tags: ['Photoshop'],
    image: '/projects/web-design/araex/home-araex.png',
    media: [
      { src: '/projects/web-design/araex/home-araex.png', type: 'image', alt: { es: 'Web Araex', en: 'Araex Website' } },
      { src: '/projects/web-design/araex/Gran sello2.jpg', type: 'image', alt: { es: 'Araex sello', en: 'Araex seal' } },
    ],
    featured: false,
    challenge: {
      es: 'Diseñar un sitio web corporativo que represente la solidez de la empresa.',
      en: 'Design a corporate website that represents the company strength.',
    },
    uxDecisions: {
      es: 'Estructura clara con secciones bien definidas. Diseño profesional.',
      en: 'Clear structure with well-defined sections. Professional design.',
    },
    architecture: {
      es: 'Diseño en Photoshop con maquetación responsive.',
      en: 'Design in Photoshop with responsive layout.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'piatto-ristorante',
    category: 'graphic-design',
    title: { es: 'Piatto Ristorante Italiano', en: 'Piatto Ristorante Italiano' },
    subtitle: {
      es: 'Identidad corporativa para restaurante italiano',
      en: 'Corporate identity for an Italian restaurant',
    },
    description: {
      es: 'Desarrollo de identidad corporativa completa para restaurante italiano, incluyendo logotipo, papelería y publicidad.',
      en: 'Complete corporate identity development for an Italian restaurant, including logo, stationery and advertising.',
    },
    tags: ['Illustrator'],
    image: '/projects/graphic-design/corporate-identity/piatto-restaurante/logoPiatto.jpg',
    media: [
      { src: '/projects/graphic-design/corporate-identity/piatto-restaurante/logoPiatto.jpg', type: 'image', alt: { es: 'Logo Piatto', en: 'Piatto logo' } },
      { src: '/projects/graphic-design/corporate-identity/piatto-restaurante/identidadPiatto.jpg', type: 'image', alt: { es: 'Identidad Piatto', en: 'Piatto identity' } },
      { src: '/projects/graphic-design/corporate-identity/piatto-restaurante/logoPiattoBlancoNegro.jpg', type: 'image', alt: { es: 'Piatto blanco y negro', en: 'Piatto black and white' } },
      { src: '/projects/graphic-design/corporate-identity/piatto-restaurante/anuncioPrensaPiatto.png', type: 'image', alt: { es: 'Anuncio prensa Piatto', en: 'Piatto press ad' } },
      { src: '/projects/graphic-design/corporate-identity/piatto-restaurante/stufferPiatto.jpg', type: 'image', alt: { es: 'Stuffer Piatto', en: 'Piatto stuffer' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una identidad visual que refleje la esencia de la cocina italiana.',
      en: 'Create a visual identity that reflects the essence of Italian cuisine.',
    },
    uxDecisions: {
      es: 'Selección de colores y tipografía que evocan la tradición italiana.',
      en: 'Color and typography selection that evoke Italian tradition.',
    },
    architecture: {
      es: 'Diseño vectorial con Illustrator.',
      en: 'Vector design with Illustrator.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'revista-grafik',
    category: 'graphic-design',
    title: { es: 'Revista GrafiK', en: 'GrafiK Magazine' },
    subtitle: {
      es: 'Diseño editorial para revista de diseño gráfico',
      en: 'Editorial design for a graphic design magazine',
    },
    description: {
      es: 'Diseño y maquetación completa de la revista GrafiK, publicación especializada en diseño gráfico.',
      en: 'Complete design and layout of GrafiK magazine, a publication specialized in graphic design.',
    },
    tags: ['InDesign', 'Illustrator', 'Photoshop'],
    image: '/projects/graphic-design/editorial/revista-grafik/revistaBansky.jpg',
    media: [
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaBansky.jpg', type: 'image', alt: { es: 'Revista GrafiK Bansky', en: 'GrafiK Bansky issue' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/indiceRevista.jpg', type: 'image', alt: { es: 'Índice revista GrafiK', en: 'GrafiK magazine index' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/logo.jpg', type: 'image', alt: { es: 'Logo revisa GrafiK', en: 'GrafiK magazine logo' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaBauhaus.jpg', type: 'image', alt: { es: 'Revista GrafiK Bauhaus', en: 'GrafiK Bauhaus issue' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaGauckler.jpg', type: 'image', alt: { es: 'Revista GrafiK Gauckler', en: 'GrafiK Gauckler issue' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaLehanneur.jpg', type: 'image', alt: { es: 'Revista GrafiK Lehanneur', en: 'GrafiK Lehanneur issue' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaMuebles.jpg', type: 'image', alt: { es: 'Revista GrafiK muebles', en: 'GrafiK furniture issue' } },
      { src: '/projects/graphic-design/editorial/revista-grafik/revistaSillas.jpg', type: 'image', alt: { es: 'Revista GrafiK sillas', en: 'GrafiK chairs issue' } },
    ],
    featured: false,
    challenge: {
      es: 'Maquetar una revista con contenido variado manteniendo coherencia visual en todas las páginas.',
      en: 'Layout a magazine with varied content maintaining visual coherence across all pages.',
    },
    uxDecisions: {
      es: 'Jerarquía visual clara con uso de retículas y estilos coherentes.',
      en: 'Clear visual hierarchy with grid systems and consistent styles.',
    },
    architecture: {
      es: 'Maquetación con InDesign, ilustraciones y tratamiento de imágenes con Illustrator y Photoshop.',
      en: 'Layout with InDesign, illustrations and image processing with Illustrator and Photoshop.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'folleto-camara-comercio-bilbao',
    category: 'graphic-design',
    title: { es: 'Folleto Cámara de Comercio de Bilbao', en: 'Bilbao Chamber of Commerce Brochure' },
    subtitle: {
      es: 'Folleto publicitario para la Cámara de Comercio de Bilbao',
      en: 'Advertising brochure for the Bilbao Chamber of Commerce',
    },
    description: {
      es: 'Diseño y maquetación de folleto publicitario para la Cámara de Comercio de Bilbao.',
      en: 'Design and layout of advertising brochure for the Bilbao Chamber of Commerce.',
    },
    tags: ['InDesign', 'Illustrator'],
    image: '/projects/graphic-design/camara-comercio-bilbao/camara-comercio-bilbao.jpg',
    media: [
      { src: '/projects/graphic-design/camara-comercio-bilbao/camara-comercio-bilbao.jpg', type: 'image', alt: { es: 'Folleto Cámara Comercio Bilbao', en: 'Bilbao Chamber of Commerce brochure' } },
      { src: '/projects/graphic-design/camara-comercio-bilbao/camara-comercio-bilbao-portada.jpg', type: 'image', alt: { es: 'Portada folleto Cámara Comercio', en: 'Chamber of Commerce cover' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear un folleto informativo que comunique los servicios de la cámara de forma clara y profesional.',
      en: 'Create an informative brochure that communicates the chamber services clearly and professionally.',
    },
    uxDecisions: {
      es: 'Estructura plegable con información jerarquizada para fácil lectura.',
      en: 'Folding structure with hierarchical information for easy reading.',
    },
    architecture: {
      es: 'Maquetación con InDesign e ilustraciones vectoriales con Illustrator.',
      en: 'Layout with InDesign and vector illustrations with Illustrator.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'folleto-colonias-2010',
    category: 'graphic-design',
    title: { es: 'Folleto Colonias 2010', en: 'Summer Camp 2010 Brochure' },
    subtitle: {
      es: 'Folleto publicitario para colonias de verano',
      en: 'Advertising brochure for summer camps',
    },
    description: {
      es: 'Diseño de folleto publicitario para colonias de verano.',
      en: 'Design of advertising brochure for summer camps.',
    },
    tags: ['InDesign', 'Illustrator'],
    image: '/projects/graphic-design/colonias/coloniasExterior.jpg',
    media: [
      { src: '/projects/graphic-design/colonias/coloniasExterior.jpg', type: 'image', alt: { es: 'Folleto Colonias exterior', en: 'Summer camp brochure exterior' } },
      { src: '/projects/graphic-design/colonias/coloniasInterior.jpg', type: 'image', alt: { es: 'Folleto Colonias interior', en: 'Summer camp brochure interior' } },
      { src: '/projects/graphic-design/colonias/folleto3.jpg', type: 'image', alt: { es: 'Folleto Colonias detalle', en: 'Summer camp brochure detail' } },
    ],
    featured: false,
    challenge: {
      es: 'Diseñar un folleto atractivo para captar la atención de familias con niños.',
      en: 'Design an attractive brochure to capture the attention of families with children.',
    },
    uxDecisions: {
      es: 'Colores vivos y fotografías atractivas para conectar con el público infantil y familiar.',
      en: 'Vibrant colors and attractive photographs to connect with children and family audience.',
    },
    architecture: {
      es: 'Maquetación con InDesign e ilustraciones con Illustrator.',
      en: 'Layout with InDesign and illustrations with Illustrator.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'optica-pop-eye',
    category: 'graphic-design',
    title: { es: 'Óptica Pop Eye', en: 'Pop Eye Optician' },
    subtitle: {
      es: 'Identidad corporativa para óptica',
      en: 'Corporate identity for an optician',
    },
    description: {
      es: 'Desarrollo de identidad corporativa para óptica Pop Eye, incluyendo logotipo y papelería.',
      en: 'Corporate identity development for Pop Eye optician, including logo and stationery.',
    },
    tags: ['InDesign', 'Illustrator'],
    image: '/projects/graphic-design/corporate-identity/pop-eye/popEye-logo.jpg',
    media: [
      { src: '/projects/graphic-design/corporate-identity/pop-eye/popEye-logo.jpg', type: 'image', alt: { es: 'Logo Pop Eye', en: 'Pop Eye logo' } },
      { src: '/projects/graphic-design/corporate-identity/pop-eye/portadaPopeye.jpg', type: 'image', alt: { es: 'Portada Pop Eye', en: 'Pop Eye cover' } },
      { src: '/projects/graphic-design/corporate-identity/pop-eye/investigacionPopeye.jpg', type: 'image', alt: { es: 'Investigación Pop Eye', en: 'Pop Eye research' } },
      { src: '/projects/graphic-design/corporate-identity/pop-eye/alternativasLogoPopeye.jpg', type: 'image', alt: { es: 'Alternativas logo Pop Eye', en: 'Pop Eye logo alternatives' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una marca visualmente llamativa y memorable para una óptica.',
      en: 'Create a visually striking and memorable brand for an optician.',
    },
    uxDecisions: {
      es: 'Juego tipográfico y cromático que refleja el nombre Pop Eye.',
      en: 'Typographic and chromatic play that reflects the Pop Eye name.',
    },
    architecture: {
      es: 'Diseño vectorial con Illustrator e InDesign.',
      en: 'Vector design with Illustrator and InDesign.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'pack-zensacion',
    category: 'graphic-design',
    title: { es: 'Pack Zensación', en: 'Zensación Pack' },
    subtitle: {
      es: 'Identidad corporativa y packaging',
      en: 'Corporate identity and packaging',
    },
    description: {
      es: 'Desarrollo de identidad corporativa y diseño de packaging para la marca Zensación.',
      en: 'Corporate identity development and packaging design for the Zensación brand.',
    },
    tags: ['InDesign', 'Illustrator'],
    image: '/projects/graphic-design/corporate-identity/zensacion/montaje-zensacion.jpg',
    media: [
      { src: '/projects/graphic-design/corporate-identity/zensacion/montaje-zensacion.jpg', type: 'image', alt: { es: 'Pack Zensación montaje', en: 'Zensación pack mockup' } },
      { src: '/projects/graphic-design/corporate-identity/zensacion/logo-zensacion.jpg', type: 'image', alt: { es: 'Logo Zensación', en: 'Zensación logo' } },
    ],
    featured: false,
    challenge: {
      es: 'Diseñar un packaging atractivo que destaque en el punto de venta.',
      en: 'Design attractive packaging that stands out at the point of sale.',
    },
    uxDecisions: {
      es: 'Diseño minimalista con colores relajantes que evocan la sensación de bienestar.',
      en: 'Minimalist design with relaxing colors that evoke a feeling of well-being.',
    },
    architecture: {
      es: 'Diseño vectorial con Illustrator y maquetación con InDesign.',
      en: 'Vector design with Illustrator and layout with InDesign.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'bodegas-ubide',
    category: 'graphic-design',
    title: { es: 'Bodegas Ubide', en: 'Ubide Wineries' },
    subtitle: {
      es: 'Identidad corporativa para bodega',
      en: 'Corporate identity for a winery',
    },
    description: {
      es: 'Desarrollo de identidad corporativa para bodega, incluyendo papelería y aplicaciones.',
      en: 'Corporate identity development for a winery, including stationery and applications.',
    },
    tags: ['InDesign', 'Illustrator', 'Photoshop'],
    image: '/projects/graphic-design/corporate-identity/bodegas-ubide/papeleria-bodegas-ubide.jpg',
    media: [
      { src: '/projects/graphic-design/corporate-identity/bodegas-ubide/papeleria-bodegas-ubide.jpg', type: 'image', alt: { es: 'Papelería Bodegas Ubide', en: 'Ubide Wineries stationery' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una identidad visual que refleje la tradición vinícola.',
      en: 'Create a visual identity that reflects winemaking tradition.',
    },
    uxDecisions: {
      es: 'Paleta de colores asociada al vino. Tipografía clásica y elegante.',
      en: 'Color palette associated with wine. Classic and elegant typography.',
    },
    architecture: {
      es: 'Diseño con Illustrator, tratamiento de imágenes con Photoshop y maquetación con InDesign.',
      en: 'Design with Illustrator, image processing with Photoshop and layout with InDesign.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'anuncios-publicitarios',
    category: 'graphic-design',
    title: { es: 'Anuncios Publicitarios', en: 'Advertising Ads' },
    subtitle: {
      es: 'Diseño de anuncios publicitarios',
      en: 'Advertising design',
    },
    description: {
      es: 'Creación de anuncios publicitarios para diversos medios y campañas.',
      en: 'Creation of advertisements for various media and campaigns.',
    },
    tags: ['Photoshop'],
    image: '/projects/graphic-design/advertisements/advertisements.jpg',
    media: [
      { src: '/projects/graphic-design/advertisements/advertisements.jpg', type: 'image', alt: { es: 'Anuncios publicitarios', en: 'Advertisements' } },
    ],
    featured: false,
    challenge: {
      es: 'Diseñar anuncios impactantes que capturen la atención del público objetivo.',
      en: 'Design impactful ads that capture the attention of the target audience.',
    },
    uxDecisions: {
      es: 'Composición visual equilibrada con mensajes claros y directos.',
      en: 'Balanced visual composition with clear and direct messages.',
    },
    architecture: {
      es: 'Diseño y tratamiento de imágenes con Photoshop.',
      en: 'Design and image processing with Photoshop.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'carteles-aste-nagusia-jazzaldia',
    category: 'graphic-design',
    title: { es: 'Carteles Aste Nagusia y Jazzaldia', en: 'Aste Nagusia & Jazzaldia Posters' },
    subtitle: {
      es: 'Cartelería para festivales de Bilbao',
      en: 'Posters for Bilbao festivals',
    },
    description: {
      es: 'Diseño de carteles para los festivales Aste Nagusia y Jazzaldia de Bilbao.',
      en: 'Poster design for the Aste Nagusia and Jazzaldia festivals in Bilbao.',
    },
    tags: ['Illustrator', 'Photoshop'],
    image: '/projects/graphic-design/carteles-jazzaldia-aste-nagusia.jpg',
    media: [
      { src: '/projects/graphic-design/carteles-jazzaldia-aste-nagusia.jpg', type: 'image', alt: { es: 'Carteles Aste Nagusia y Jazzaldia', en: 'Aste Nagusia & Jazzaldia posters' } },
      { src: '/projects/graphic-design/jazzaldia/Jazzaldia.jpg', type: 'image', alt: { es: 'Cartel Jazzaldia', en: 'Jazzaldia poster' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear carteles que capturen la esencia y el espíritu de cada festival.',
      en: 'Create posters that capture the essence and spirit of each festival.',
    },
    uxDecisions: {
      es: 'Tipografía y composición llamativas para destacar en entornos urbanos.',
      en: 'Striking typography and composition to stand out in urban environments.',
    },
    architecture: {
      es: 'Diseño vectorial con Illustrator y tratamiento de imágenes con Photoshop.',
      en: 'Vector design with Illustrator and image processing with Photoshop.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
