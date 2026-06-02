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
  slug: {
    es: string;
    en: string;
  };
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
  confidentialNote?: {
    es: string;
    en: string;
  };
}

const placeholder = '/projects/text-gen.svg';

export const projects: Project[] = [
  {
    id: 'aisiplan',
    slug: {
      es: 'aisiplan',
      en: 'aisiplan',
    },
    category: 'web-development',
    title: { es: 'Aisiplan', en: 'Aisiplan' },
    subtitle: {
      es: 'Plataforma para la gestión de actividades de ocio y tiempo libre',
      en: 'Platform for managing leisure and free time activities',
    },
    description: {
      es: '<strong>Plataforma</strong> <strong>fullStack</strong> que centraliza actividades de ocio, permitiendo a usuarios descubrir e inscribirse, y a empresas gestionar sus publicaciones desde un panel.',
      en: '<strong>FullStack</strong> platform that centralizes leisure activities, letting users discover and register, and companies manage their listings from a dashboard.',
    },
    tags: ['TypeScript', 'React.js', 'Node.js', 'Scss', 'Vite', 'Express', 'MySQL', 'TypeORM', 'JWT', 'Figma'],
    image: '/projects/web-develop/aisiplan/cabecera-sin-login.jpg',
    media: [
      { src: '/projects/web-develop/aisiplan/pagina-inicio.jpg', type: 'image', alt: { es: 'Página de inicio Aisiplan', en: 'Aisiplan home page' } },
      { src: '/projects/web-develop/aisiplan/pagina-inicio-sesion.jpg', type: 'image', alt: { es: 'Inicio de sesión Aisiplan', en: 'Aisiplan login' } },
      { src: '/projects/web-develop/aisiplan/pagina-actividades.jpg', type: 'image', alt: { es: 'Página de actividades Aisiplan', en: 'Aisiplan activities page' } },
      { src: '/projects/web-develop/aisiplan/pagina-detalle-actividades.jpg', type: 'image', alt: { es: 'Detalle de actividad Aisiplan', en: 'Aisiplan activity detail' } },
      { src: '/projects/web-develop/aisiplan/pagina-perfil.jpg', type: 'image', alt: { es: 'Perfil de usuario Aisiplan', en: 'Aisiplan user profile' } },
      { src: '/projects/web-develop/aisiplan/cabecera-logueado.jpg', type: 'image', alt: { es: 'Cabecera logueado Aisiplan', en: 'Aisiplan logged-in header' } },
      { src: '/projects/web-develop/aisiplan/formularios.jpg', type: 'image', alt: { es: 'Formularios Aisiplan', en: 'Aisiplan forms' } },
      { src: '/projects/web-develop/aisiplan/footer.jpg', type: 'image', alt: { es: 'Footer Aisiplan', en: 'Aisiplan footer' } },
    ],
    featured: true,
    demoUrl: 'https://aisiplan.vercel.app/',
    repoUrl: 'https://github.com/maiderbarrutia/fullstack-aisiplan',
    challenge: {
      es: 'No existía una <strong>plataforma</strong> que unificara toda la oferta de ocio local. Las alternativas (Eventbrite, Meetup, Airbnb Experiences, Fever) están fragmentadas: unas enfocadas al turismo, otras solo a música, y ninguna facilita el descubrimiento de actividades pequeñas o gratuitas de empresas locales. El reto era construir una web que centralizara toda la oferta y permitiera a pequeñas empresas publicar sin barreras.',
      en: 'No platform existed that unified all local leisure offerings. Alternatives (Eventbrite, Meetup, Airbnb Experiences, Fever) are fragmented: some focused on tourism, others only on music, and none facilitate discovery of small or free activities from local businesses. The challenge was to build a site that centralizes all offerings and lets small businesses publish without barriers.',
    },
    uxDecisions: {
      es: 'Identidad visual propia con <strong>logotipo</strong> y paleta naranja que transmite energía. Header fijo con <strong>navegación</strong> adaptativa al iniciar sesión. Página de inicio con buscador, actividades destacadas, categorías visuales y carrusel de empresas. Formularios con validación en tiempo real y mensajes claros. <strong>Accesibilidad</strong>: contraste suficiente, tipografía legible y etiquetas semánticas.',
      en: 'Custom visual identity with logo and orange palette conveying energy. Fixed header with adaptive navigation when logged in. Home page with search bar, featured activities, visual categories, and company carousel. Forms with real-time validation and clear messages. <strong>Accessibility</strong>: sufficient contrast, readable typography, and semantic labels.',
    },
    architecture: {
      es: 'Frontend con <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>. Backend con <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong> sobre <strong>MySQL</strong>. <strong>API RESTful</strong> con autenticación <strong>JWT</strong>, subida de archivos con <strong>Multer</strong> y middlewares de validación. Base de datos relacional con 5 tablas, claves foráneas y restricciones de integridad.',
      en: 'Frontend with <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>. Backend with <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong> on <strong>MySQL</strong>. <strong>API RESTful</strong> with <strong>JWT</strong> authentication, <strong>Multer</strong> file upload, and validation middlewares. Relational database with 5 tables, foreign keys, and integrity constraints.',
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
      es: '• Sistema de autenticación con <strong>JWT</strong> y roles (empresa/usuario)\n• <strong>CRUD</strong> completo de actividades con formularios dinámicos\n• Panel de perfil para empresas con gestión de actividades e inscripciones\n• Buscador con filtros por texto, localización y categorías\n• Subida de imágenes y vídeos con <strong>Multer</strong>\n• Arquitectura modular escalable (backend separado del frontend)\n• Base de datos relacional con 5 tablas y relaciones normalizadas\n• Seeders para carga inicial de datos',
      en: '• Authentication system with <strong>JWT</strong> and roles (company/user)\n• Full <strong>CRUD</strong> for activities with dynamic forms\n• Company profile panel with activity and registration management\n• Search with text, location, and category filters\n• Image and video upload with <strong>Multer</strong>\n• Scalable modular architecture (separated backend and frontend)\n• Relational database with 5 tables and normalized relationships\n• Seeders for initial data loading',
    },
    myRole: {
      es: 'Desarrollo fullStack completo: investigación de mercado, diseño de identidad visual y prototipos en <strong>Figma</strong>, base de datos <strong>MySQL</strong>, backend con <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong>, frontend con <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>, autenticación <strong>JWT</strong>, pruebas con <strong>Postman</strong>, despliegue en <strong>Vercel</strong> y documentación técnica.',
      en: 'Complete fullStack development: market research, visual identity design and prototypes in <strong>Figma</strong>, <strong>MySQL</strong> database, backend with <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong>, frontend with <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>, <strong>JWT</strong> authentication, <strong>Postman</strong> testing, <strong>Vercel</strong> deployment, and technical documentation.',
    },
    techDetails: {
      es: '• <strong>Frontend:</strong> <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>. Componentes reutilizables, <strong>React Router</strong> para navegación, <strong>Context API</strong> para estado de autenticación\n• <strong>Backend:</strong> <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong>. Arquitectura <strong>MVC</strong> con controladores, entidades, rutas y middlewares\n• <strong>Base de datos:</strong> <strong>MySQL</strong> relacional con 5 tablas (Category, UserData, Company, Activity, Registration), claves foráneas e índices\n• <strong>Autenticación:</strong> <strong>JWT</strong> con middlewares de protección de rutas y contexto de sesión en frontend\n• <strong>API REST</strong>: Endpoints completos para usuarios, empresas, actividades, categorías e inscripciones\n• <strong>Subida de archivos:</strong> <strong>Multer</strong> para imágenes y vídeos, almacenados en carpeta pública\n• <strong>Validación:</strong> <strong>Postman</strong> para pruebas de endpoints y middlewares de validación server-side\n• <strong>Metodología:</strong> Kanban con <strong>Trello</strong>, documentación en <strong>Notion</strong>, control de versiones con <strong>Git</strong> + <strong>GitHub</strong>',
      en: '• <strong>Frontend:</strong> <strong>React</strong> + <strong>Vite</strong> + <strong>TypeScript</strong> + <strong>Scss</strong>. Reusable components, <strong>React Router</strong> for navigation, <strong>Context API</strong> for auth state\n• <strong>Backend:</strong> <strong>Node.js</strong> + <strong>Express</strong> + <strong>TypeORM</strong>. <strong>MVC</strong> architecture with controllers, entities, routes, and middlewares\n• <strong>Database:</strong> <strong>MySQL</strong> relational with 5 tables (Category, UserData, Company, Activity, Registration), foreign keys and indexes\n• <strong>Authentication:</strong> <strong>JWT</strong> with route protection middlewares and session context in frontend\n• <strong>REST API</strong>: Complete endpoints for users, companies, activities, categories, and registrations\n• <strong>File upload:</strong> <strong>Multer</strong> for images and videos, stored in public folder\n• <strong>Validation:</strong> <strong>Postman</strong> for endpoint testing and server-side validation middlewares\n• <strong>Methodology:</strong> Kanban with <strong>Trello</strong>, documentation in <strong>Notion</strong>, version control with <strong>Git</strong> + <strong>GitHub</strong>',
    },
    deployment: {
      es: '• <strong>Frontend:</strong> <strong>Vercel</strong>\n• <strong>Backend:</strong> <strong>Render</strong>\n• <strong>Base de datos:</strong> <strong>Aiven</strong> (<strong>MySQL</strong>)\n• <strong>Imágenes:</strong> <strong>Cloudinary</strong>',
      en: '• <strong>Frontend:</strong> <strong>Vercel</strong>\n• <strong>Backend:</strong> <strong>Render</strong>\n• <strong>Database:</strong> <strong>Aiven</strong> (<strong>MySQL</strong>)\n• <strong>Images:</strong> <strong>Cloudinary</strong>',
    },
  },
  {
    id: 'ecommerce-branding',
    slug: {
      es: 'ecommerce-y-branding',
      en: 'ecommerce-and-branding',
    },
    category: 'web-development',
    title: { es: 'Ecommerce + Branding', en: 'E-commerce + Branding' },
    subtitle: {
      es: 'Identidad corporativa completa y tienda online multilingüe',
      en: 'Complete corporate identity and multilingual online store',
    },
    description: {
      es: 'Proyecto integral que abarca desde el diseño de <strong>logotipo</strong>, <strong>packaging</strong> e <strong>identidad corporativa</strong> hasta el desarrollo completo de una <strong>tienda online</strong> <strong>WooCommerce</strong> multilingüe (6 idiomas) con catálogo de productos, carrito de compra, pasarela de pago internacional y panel de administración.',
      en: 'Comprehensive project covering logo design, <strong>packaging</strong>, corporate identity, and complete multilingual <strong>WooCommerce</strong> online store development (6 languages) with product catalog, shopping cart, international payment gateway, and admin panel.',
    },
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Illustrator', 'Photoshop', 'Identidad Corporativa', 'Packaging'],
    image: '/projects/branding-ecommerce.svg',
    media: [],
    featured: false,
    challenge: {
      es: 'El cliente necesitaba una identidad de marca completa desde cero: <strong>logotipo</strong>, paleta cromática, tipografía corporativa, diseño de <strong>packaging</strong> para múltiples líneas de producto, y una <strong>tienda online</strong> funcional en 6 idiomas. El reto era mantener la coherencia visual en todos los soportes (físico y digital) mientras se construía una experiencia de compra fluida y profesional.',
      en: 'The client needed a complete brand identity from scratch: logo, color palette, corporate typography, <strong>packaging</strong> design for multiple product lines, and a functional online store in 6 languages. The challenge was maintaining visual consistency across all media (physical and digital) while building a smooth and professional shopping experience.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> limpio y profesional con enfoque en la presentación de productos. <strong>Navegación</strong> por categorías clara, fichas de producto detalladas, carrito visible en todo momento. Proceso de checkout optimizado en varios pasos con selector de idioma accesible desde cualquier página. La identidad visual se trasladó del <strong>packaging</strong> al digital manteniendo colores, tipografía y estilo gráfico.',
      en: 'Clean and professional design focused on product presentation. Clear category navigation, detailed product sheets, always-visible cart. Optimized multi-step checkout process with language selector accessible from any page. The visual identity was carried from <strong>packaging</strong> to digital, maintaining colors, typography, and graphic style.',
    },
    architecture: {
      es: 'Identidad corporativa diseñada en <strong>Illustrator</strong> y <strong>Photoshop</strong>. Arquitectura web basada en <strong>WordPress</strong> + <strong>WooCommerce</strong> con tema personalizado. Base de datos <strong>MySQL</strong> relacional para productos, pedidos y usuarios. Integración de plugins para multilingüismo (<strong>WPML</strong>), pasarela de pago internacional, y envíos. Caché y <strong>optimización</strong> de <strong>rendimiento</strong>.',
      en: 'Corporate identity designed in <strong>Illustrator</strong> and <strong>Photoshop</strong>. Web architecture based on <strong>WordPress</strong> + <strong>WooCommerce</strong> with custom theme. <strong>MySQL</strong> relational database for products, orders, and users. Plugin integration for multilingual support (<strong>WPML</strong>), international payment gateway, and shipping. Cache and <strong>performance</strong> <strong>optimization</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Unifica la imagen de marca en todos los canales (<strong>packaging</strong>, web, redes sociales). Centraliza la venta online de múltiples líneas de producto en un único <strong>ecommerce</strong> multilingüe. Gestión eficiente de inventario y pedidos desde el panel de administración. Visibilidad internacional con dominio .com y configuración multi-moneda.',
      en: 'Unifies brand image across all channels (<strong>packaging</strong>, web, social media). Centralizes online sales of multiple product lines in a single multilingual <strong>e-commerce</strong>. Efficient inventory and order management from the admin panel. International visibility with .com domain and multi-currency setup.',
    },
    metrics: {
      es: '• <strong>Identidad corporativa</strong> completa: <strong>logotipo</strong>, paleta, tipografía, manual de marca\n• <strong>Diseño</strong> de <strong>packaging</strong> para 3 líneas de producto\n• <strong>Tienda online</strong> funcional con <strong>WooCommerce</strong>\n• Soporte para 6 idiomas con traducciones completas\n• Pasarela de pago internacional integrada\n• Sistema de seguimiento de pedidos para clientes\n• <strong>Diseño</strong> responsive adaptado a todos los dispositivos\n• <strong>Optimización</strong> <strong>SEO</strong> para motores de búsqueda\n• Integración con redes sociales',
      en: '• Complete corporate identity: logo, palette, typography, brand guidelines\n• Packaging design for 3 product lines\n• Functional online store with <strong>WooCommerce</strong>\n• Support for 6 languages with full translations\n• Integrated international payment gateway\n• Order tracking system for customers\n• <strong>Responsive</strong> design adapted to all devices\n• <strong>SEO</strong> <strong>optimization</strong> for search engines\n• Social media integration',
    },
    myRole: {
      es: 'Dirección de arte integral: <strong>diseño</strong> de <strong>logotipo</strong>, <strong>identidad corporativa</strong>, <strong>packaging</strong> para 3 líneas de producto, y desarrollo completo del <strong>ecommerce</strong> (<strong>WordPress</strong> + <strong>WooCommerce</strong>, personalización de tema, integración multilingüe, pasarela de pago, <strong>SEO</strong>, <strong>rendimiento</strong> y despliegue en producción).',
      en: 'Complete art direction: logo design, corporate identity, <strong>packaging</strong> for 3 product lines, and full <strong>e-commerce</strong> development (<strong>WordPress</strong> + <strong>WooCommerce</strong>, theme customization, multilingual integration, payment gateway, <strong>SEO</strong>, <strong>performance</strong>, and production deployment).',
    },
    techDetails: {
      es: '• <strong>Identidad corporativa:</strong> <strong>Illustrator</strong>, <strong>Photoshop</strong> — <strong>logotipo</strong>, paleta cromática, tipografía, manual de marca\n• <strong>Packaging:</strong> <strong>Illustrator</strong>, <strong>Photoshop</strong> — <strong>diseño</strong> de envases para 3 líneas de producto\n• <strong>CMS:</strong> <strong>WordPress</strong> + <strong>WooCommerce</strong> con tema personalizado\n• <strong>Idiomas:</strong> <strong>WPML</strong> para gestión multilingüe (6 idiomas)\n• <strong>Frontend:</strong> <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, tema hijo personalizado\n• <strong>Backend:</strong> <strong>PHP</strong>, <strong>MySQL</strong> con tablas relacionales de <strong>WooCommerce</strong>\n• <strong>Plugins:</strong> <strong>WPML</strong>, pasarela de pago, <strong>SEO</strong>, caché, seguridad\n• <strong>Rendimiento:</strong> Caché server-side, <strong>optimización</strong> de imágenes, minificación de assets\n• <strong>SEO:</strong> Sitemaps, meta tags multilingües, datos estructurados\n• <strong>Hosting:</strong> Servidor dedicado con <strong>SSL</strong> y <strong>CDN</strong>',
      en: '• <strong>Corporate identity:</strong> <strong>Illustrator</strong>, <strong>Photoshop</strong> — logo, color palette, typography, brand guidelines\n• <strong>Packaging:</strong> <strong>Illustrator</strong>, <strong>Photoshop</strong> — packaging design for 3 product lines\n• <strong>CMS:</strong> <strong>WordPress</strong> + <strong>WooCommerce</strong> with custom theme\n• <strong>Languages:</strong> <strong>WPML</strong> for multilingual management (6 languages)\n• <strong>Frontend:</strong> <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, custom child theme\n• <strong>Backend:</strong> <strong>PHP</strong>, <strong>MySQL</strong> with <strong>WooCommerce</strong> relational tables\n• <strong>Plugins:</strong> <strong>WPML</strong>, payment gateway, <strong>SEO</strong>, cache, security\n• <strong>Performance:</strong> Server-side cache, image <strong>optimization</strong>, asset minification\n• <strong>SEO:</strong> Sitemaps, multilingual meta tags, structured data\n• <strong>Hosting:</strong> Dedicated server with <strong>SSL</strong> and <strong>CDN</strong>',
    },
    confidentialNote: {
      es: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
      en: '📜 Note: Project built for an external company. Real names and logos omitted due to intellectual property.',
    },
  },
  {
    id: 'energy-distribution-portal',
    slug: {
      es: 'portal-corporativo-de-gas',
      en: 'gas-corporate-portal',
    },
    category: 'web-development',
    title: { es: 'Portal Corporativo de Gas', en: 'Gas Corporate Portal' },
    subtitle: {
      es: 'Desarrollo integral del portal corporativo para una de las mayores compañías energéticas del país',
      en: 'Comprehensive development of the corporate portal for one of the largest energy companies in the country',
    },
    description: {
      es: 'Arquitectura e implementación técnica en <strong>WordPress</strong> (con <strong>Elementor</strong>, <strong>JavaScript</strong> y <strong>Scss</strong>) de la <strong>plataforma</strong> web para la división de gas de una gran <strong>compañía energética</strong>. Construcción modular de todas las secciones a partir de las especificaciones de <strong>diseño</strong>, incluyendo la página principal, el catálogo de productos, la sección de soporte/FAQ y el sistema de contenido bilingüe.',
      en: 'Technical architecture and implementation in <strong>WordPress</strong> (using <strong>Elementor</strong>, <strong>JavaScript</strong>, and <strong>Scss</strong>) of the web platform for the gas division of a major <strong>energy company</strong>. Modular construction of all sections based on design specifications, including the home page, product catalog, support/FAQ section, and bilingual content system.',
    },
    tags: ['WordPress', 'Elementor', 'Scss', 'JavaScript'],
    image: '/projects/energy-portal.svg',
    media: [],
    featured: true,
    challenge: {
      es: 'Una de las mayores <strong>compañías energéticas</strong> del país necesitaba un <strong>portal</strong> web moderno y funcional para su división de gas butano y propano. El reto era maquetar con <strong>Elementor</strong> + <strong>Scss</strong> un sitio completo que mantuviera la <strong>identidad corporativa</strong> de una gran empresa, fuera visualmente coherente en todas sus secciones, <strong>responsive</strong> en todos los dispositivos y accesible para un público diverso (particulares y empresas), cumpliendo con los estándares de <strong>calidad</strong> del <strong>sector energético</strong>.',
      en: 'One of the largest <strong>energy companies</strong> in the country needed a modern, functional web portal for its butane and propane gas division. The challenge was to build with <strong>Elementor</strong> + <strong>Scss</strong> a complete site that maintained the corporate identity of a large company, was visually coherent across all sections, <strong>responsive</strong> on all devices, and accessible to a diverse audience (individuals and businesses), meeting energy sector <strong>quality</strong> standards.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> corporativo que transmite seguridad y confianza, alineado con la identidad de marca de una gran <strong>compañía energética</strong>. <strong>Navegación</strong> clara separando canales (particulares vs empresas). Contenido educativo sobre seguridad y mantenimiento. Blog y FAQ con información útil. Coherencia visual en todas las secciones del <strong>portal</strong>.',
      en: 'Corporate design conveying security and trust, aligned with the brand identity of a major <strong>energy company</strong>. Clear navigation separating channels (individuals vs businesses). Educational content on safety and maintenance. Blog and FAQ with useful information. Visual consistency across all portal sections.',
    },
    architecture: {
      es: '<strong>WordPress</strong> con <strong>Elementor</strong> para la maquetación visual y <strong>Scss</strong> para estilos personalizados avanzados. Tema hijo personalizado con overrides de <strong>CSS</strong> vía <strong>Scss</strong>. Gestión de contenidos bilingüe. <strong>Diseño responsive</strong> con breakpoints personalizados. <strong>Optimización</strong> de <strong>rendimiento</strong> y <strong>SEO</strong> on-page.',
      en: '<strong>WordPress</strong> with <strong>Elementor</strong> for visual markup and <strong>Scss</strong> for advanced custom styles. Custom child theme with <strong>CSS</strong> overrides via <strong>Scss</strong>. Bilingual content management. <strong>Responsive</strong> design with custom breakpoints. <strong>Performance</strong> <strong>optimization</strong> and on-page <strong>SEO</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Proporciona una presencia digital corporativa y <strong>profesional</strong> para la división de gas de una gran <strong>compañía energética</strong>. Unifica el <strong>diseño</strong> visual de todas las secciones del <strong>portal</strong>. Mantiene la coherencia de marca en cada página. Ofrece una <strong>experiencia de usuario</strong> fluida y <strong>responsive</strong>.',
      en: 'Provides a corporate digital presence for the gas division of a major <strong>energy company</strong>. Unifies visual design across all portal sections. Maintains brand consistency on every page. Delivers a smooth, <strong>responsive</strong> user experience.',
    },
    metrics: {
      es: '• <strong>Portal</strong> corporativo completo para gran <strong>compañía</strong> del <strong>sector energético</strong>\n• Maquetación de todas las páginas con <strong>Elementor</strong> + <strong>Scss</strong>\n• <strong>Diseño</strong> responsive para todos los dispositivos\n• Soporte bilingüe (español/inglés)\n• Contenido educativo, blog y FAQ\n• Coherencia visual corporativa\n• <strong>Optimización</strong> <strong>SEO</strong> on-page\n• Integración de estilos <strong>Scss</strong> personalizados',
      en: '• Complete corporate portal for a major energy sector company\n• Markup of all pages with <strong>Elementor</strong> + <strong>Scss</strong>\n• <strong>Responsive</strong> design for all devices\n• Bilingual support (Spanish/English)\n• Educational content, blog, and FAQ\n• Corporate visual consistency\n• On-page <strong>SEO</strong> <strong>optimization</strong>\n• Custom <strong>Scss</strong> style integration',
    },
    myRole: {
      es: 'Maquetación completa de todas las páginas del portal en <strong>WordPress</strong> con <strong>Elementor</strong> y <strong>Scss</strong> a partir de diseños proporcionados, incluyendo la personalización avanzada de estilos con <strong>Scss</strong>, <strong>diseño responsive</strong>, y <strong>optimización</strong> visual general.',
      en: 'Complete markup of all portal pages in <strong>WordPress</strong> with <strong>Elementor</strong> and <strong>Scss</strong> from provided designs, including advanced style customization with <strong>Scss</strong>, <strong>responsive</strong> design, and overall visual <strong>optimization</strong>.',
    },
    techDetails: {
      es: '• <strong>CMS:</strong> <strong>WordPress</strong> con <strong>Elementor</strong>\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>\n• <strong>Maquetación:</strong> <strong>Elementor</strong> con estilos <strong>Scss</strong> personalizados en tema hijo\n• <strong>Estilos:</strong> <strong>Scss</strong> con variables, mixins, nesting y partials\n• <strong>Diseño:</strong> <strong>Responsive</strong> con breakpoints personalizados\n• <strong>SEO:</strong> Meta tags, datos estructurados, <strong>optimización</strong> on-page\n• <strong>Rendimiento:</strong> <strong>Optimización</strong> de imágenes, minificación, caché\n• <strong>Idiomas:</strong> Bilingüe español/inglés',
      en: '• <strong>CMS:</strong> <strong>WordPress</strong> with <strong>Elementor</strong>\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>\n• <strong>Markup:</strong> <strong>Elementor</strong> with custom <strong>Scss</strong> styles in child theme\n• <strong>Styles:</strong> <strong>Scss</strong> with variables, mixins, nesting, and partials\n• <strong>Design:</strong> <strong>Responsive</strong> with custom breakpoints\n• <strong>SEO:</strong> Meta tags, structured data, on-page <strong>optimization</strong>\n• <strong>Performance:</strong> Image <strong>optimization</strong>, minification, cache\n• <strong>Languages:</strong> Bilingual Spanish/English',
    },
    confidentialNote: {
      es: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
      en: '📜 Note: Project built for an external company. Real names and logos omitted due to intellectual property.',
    },
  },
  {
    id: 'ai-sales-simulator',
    slug: {
      es: 'simulador-de-ventas-con-ia',
      en: 'ai-sales-simulator',
    },
    category: 'web-development',
    title: { es: 'Simulador de Ventas con IA', en: 'AI Sales Simulator' },
    subtitle: {
      es: 'Desarrollo completo en Webflow para plataforma de ventas con IA',
      en: 'Complete Webflow development for an AI sales platform',
    },
    description: {
      es: '<strong>Desarrollo</strong> completo en <strong>Webflow</strong> de la web corporativa para una <strong>plataforma</strong> SaaS de simulación de ventas con IA. Maquetación <strong>pixel-perfect</strong> a partir de diseños proporcionados, con <strong>animaciones</strong> avanzadas, <strong>diseño</strong> responsive y <strong>experiencia de usuario</strong> fluida. La web comunica el valor del producto a través de <strong>storytelling visual</strong>, <strong>métricas</strong> impactantes y un diseño moderno y <strong>profesional</strong>.',
      en: 'Complete <strong>Webflow</strong> development of the corporate website for an AI-powered sales simulation SaaS <strong>platform</strong>. <strong>Pixel-perfect</strong> markup from provided designs, with advanced animations, <strong>responsive</strong> design, and smooth user experience. The website communicates product value through visual storytelling, impactful <strong>metrics</strong>, and a modern, professional design.',
    },
    tags: ['Webflow', 'CSS3', 'JavaScript', 'Animaciones', 'Responsive Design'],
    image: '/projects/ai-sales-simulator.svg',
    media: [],
    featured: true,
    challenge: {
      es: 'Necesitaban una web corporativa que reflejara la innovación tecnológica del producto (simulador de ventas con IA) y transmitiera confianza a grandes empresas. El <strong>diseño</strong> debía ser moderno, con <strong>animaciones</strong> sutiles, <strong>storytelling visual</strong> y una arquitectura de contenidos que guiara al usuario desde el interés hasta la solicitud de demo. El reto era traducir diseños estáticos a una web interactiva y fluida, manteniendo la fidelidad <strong>pixel-perfect</strong>.',
      en: 'They needed a corporate website that reflected the technological innovation of the product (AI sales simulator) and conveyed trust to large companies. The design had to be modern, with subtle animations, visual storytelling, and content architecture guiding users from interest to demo request. The challenge was translating static designs into an interactive, fluid website while maintaining <strong>pixel-perfect</strong> fidelity.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> limpio y <strong>profesional</strong> con jerarquía visual clara. Hero impactante con propuesta de valor. Secciones de beneficios con iconografía y <strong>métricas</strong>. Comparativa interactiva (formación clásica vs role play con IA). Testimonios de clientes reales. FAQ optimizada. Llamadas a la acción estratégicamente ubicadas. <strong>Animaciones</strong> que mejoran la narrativa sin saturar.',
      en: 'Clean, professional design with clear visual hierarchy. Impactful hero with value proposition. Benefits sections with icons and <strong>metrics</strong>. Interactive comparison (traditional training vs AI role play). Real client testimonials. Optimized FAQ. Strategically placed calls to action. Animations that enhance narrative without overwhelming.',
    },
    architecture: {
      es: 'Web desarrollada íntegramente en <strong>Webflow</strong> con <strong>CMS</strong> para gestión de contenidos. <strong>Animaciones</strong> <strong>CSS</strong> y <strong>JavaScript</strong> personalizadas. <strong>Diseño</strong> responsive con breakpoints optimizados. Integración de formularios con automatizaciones. <strong>Optimización</strong> de <strong>rendimiento</strong> y <strong>SEO</strong> on-page. Hosting en <strong>Webflow</strong> con <strong>CDN</strong> global.',
      en: 'Website built entirely in <strong>Webflow</strong> with <strong>CMS</strong> for content management. Custom <strong>CSS</strong> and <strong>JavaScript</strong> animations. <strong>Responsive</strong> design with optimized breakpoints. Form integration with automations. <strong>Performance</strong> <strong>optimization</strong> and on-page <strong>SEO</strong>. <strong>Webflow</strong> hosting with global <strong>CDN</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Proporciona una presencia digital <strong>profesional</strong> y moderna que refleja la innovación del producto. Comunica eficazmente el valor diferencial frente a métodos tradicionales. Genera confianza en grandes empresas mediante testimonios y casos de uso. Optimiza la conversión a demo con un recorrido de usuario bien definido.',
      en: 'Provides a professional, modern digital presence that reflects product innovation. Effectively communicates differential value vs traditional methods. Builds trust in large companies through testimonials and use cases. Optimizes demo conversion with a well-defined user journey.',
    },
    metrics: {
      es: '• Web corporativa completa desarrollada en <strong>Webflow</strong>\n• Maquetación <strong>pixel-perfect</strong> a partir de diseños\n• <strong>Animaciones</strong> avanzadas <strong>CSS</strong> y <strong>JavaScript</strong>\n• <strong>Diseño</strong> responsive para todos los dispositivos\n• <strong>CMS</strong> para gestión autónoma de contenidos\n• Formularios integrados con automatización\n• <strong>Optimización</strong> <strong>SEO</strong> completa\n• Hosting con <strong>CDN</strong> global y alto <strong>rendimiento</strong>',
      en: '• Complete corporate website built in <strong>Webflow</strong>\n• <strong>Pixel-perfect</strong> markup from designs\n• Advanced <strong>CSS</strong> and <strong>JavaScript</strong> animations\n• <strong>Responsive</strong> design for all devices\n• <strong>CMS</strong> for autonomous content management\n• Forms with automation integration\n• Complete <strong>SEO</strong> <strong>optimization</strong>\n• Hosting with global <strong>CDN</strong> and high <strong>performance</strong>',
    },
    myRole: {
      es: 'Desarrollo completo de la web en <strong>Webflow</strong>: maquetación <strong>pixel-perfect</strong> a partir de diseños proporcionados, implementación de <strong>animaciones</strong>, <strong>diseño responsive</strong>, integración de <strong>CMS</strong> y formularios, <strong>optimización</strong> de <strong>rendimiento</strong> y <strong>SEO</strong>, y despliegue en producción.',
      en: 'Complete website development in <strong>Webflow</strong>: <strong>pixel-perfect</strong> markup from provided designs, animation implementation, <strong>responsive</strong> design, <strong>CMS</strong> and form integration, <strong>performance</strong> and <strong>SEO</strong> <strong>optimization</strong>, and production deployment.',
    },
    techDetails: {
      es: '• <strong>CMS:</strong> <strong>Webflow</strong> con sistema de gestión de contenidos integrado\n• <strong>Frontend:</strong> <strong>Webflow</strong> Designer + Custom Code (<strong>CSS</strong>, <strong>JavaScript</strong>)\n• <strong>Animaciones:</strong> Animaciones <strong>CSS</strong> personalizadas, interacciones <strong>Webflow</strong>, <strong>JavaScript</strong>\n• <strong>Diseño:</strong> <strong>Responsive</strong> con breakpoints optimizados\n• <strong>Formularios:</strong> <strong>Webflow</strong> Forms con integración de automatizaciones\n• <strong>SEO:</strong> Meta tags, sitemap, datos estructurados, <strong>optimización</strong> on-page\n• <strong>Rendimiento:</strong> <strong>CDN</strong> global, lazy loading, minificación automática\n• <strong>Hosting:</strong> <strong>Webflow</strong> Enterprise hosting con <strong>SSL</strong> y <strong>CDN</strong>',
      en: '• <strong>CMS:</strong> <strong>Webflow</strong> with integrated content management system\n• <strong>Frontend:</strong> <strong>Webflow</strong> Designer + Custom Code (<strong>CSS</strong>, <strong>JavaScript</strong>)\n• <strong>Animations:</strong> Custom <strong>CSS</strong> animations, <strong>Webflow</strong> interactions, <strong>JavaScript</strong>\n• <strong>Design:</strong> <strong>Responsive</strong> with optimized breakpoints\n• <strong>Forms:</strong> <strong>Webflow</strong> Forms with automation integration\n• <strong>SEO:</strong> Meta tags, sitemap, structured data, on-page <strong>optimization</strong>\n• <strong>Performance:</strong> Global <strong>CDN</strong>, lazy loading, automatic minification\n• <strong>Hosting:</strong> <strong>Webflow</strong> Enterprise hosting with <strong>SSL</strong> and <strong>CDN</strong>',
    },
    confidentialNote: {
      es: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
      en: '📜 Note: Project built for an external company. Real names and logos omitted due to intellectual property.',
    },
  },
  {
    id: 'real-estate-portal',
    slug: {
      es: 'portal-inmobiliario',
      en: 'real-estate-portal',
    },
    category: 'web-development',
    title: { es: 'Portal Inmobiliario', en: 'Real Estate Portal' },
    subtitle: {
      es: 'Adaptación de tema WordPress para portal inmobiliario de una de las agencias líderes del sector',
      en: 'WordPress theme adaptation for a leading real estate agency portal',
    },
    description: {
      es: 'Adaptación y personalización de un tema <strong>WordPress</strong> comprado para el <strong>portal</strong> web de una importante agencia inmobiliaria. Se adaptó el tema existente al <strong>diseño</strong> proporcionado, trabajando con <strong>Scss</strong> para ajustar estilos, maquetación y componentes, logrando una web <strong>profesional</strong> y coherente con la identidad de marca.',
      en: 'Adaptation and customization of a purchased <strong>WordPress</strong> theme for a major real estate agency website. The existing theme was adapted to match the provided design, working with <strong>Scss</strong> to adjust styles, layout, and components, achieving a professional look consistent with the brand identity.',
    },
    tags: ['WordPress', 'Scss', 'HTML5', 'CSS3', 'jQuery', 'PHP'],
    image: '/projects/real-estate-portal.svg',
    media: [],
    featured: false,
    challenge: {
      es: 'Partir de un tema <strong>WordPress</strong> comprado y transformarlo visualmente para que se ajustara exactamente al <strong>diseño</strong> proporcionado por el cliente, una de las agencias inmobiliarias más reconocidas del país. El reto era adaptar la estructura y estilos del tema sin perder la funcionalidad base, trabajando con <strong>Scss</strong> para sobreescribir y personalizar cada sección.',
      en: 'Start from a purchased <strong>WordPress</strong> theme and visually transform it to exactly match the design provided by the client, one of the most recognized real estate agencies in the country. The challenge was adapting the theme structure and styles without losing base functionality, working with <strong>Scss</strong> to override and customize each section.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> limpio y <strong>profesional</strong> enfocado en la presentación de propiedades. <strong>Navegación</strong> intuitiva con buscador destacado. Fichas de propiedad con información clara y llamadas a la acción. Galería de imágenes y mapas de ubicación. Adaptación <strong>responsive</strong> para consultar propiedades desde cualquier dispositivo.',
      en: 'Clean, professional design focused on property presentation. Intuitive navigation with prominent search. Property listings with clear information and calls to action. Image gallery and location maps. <strong>Responsive</strong> adaptation for browsing properties from any device.',
    },
    architecture: {
      es: '<strong>WordPress</strong> con tema comprado personalizado vía <strong>Scss</strong>. Tema hijo con overrides de estilos. Personalización de plantillas <strong>PHP</strong> del tema. <strong>Scss</strong> con variables, mixins y partials para mantener el código organizado y reutilizable. <strong>Diseño responsive</strong> adaptado a todos los dispositivos.',
      en: '<strong>WordPress</strong> with purchased theme customized via <strong>Scss</strong>. Child theme with style overrides. Customization of <strong>PHP</strong> theme templates. <strong>Scss</strong> with variables, mixins, and partials for organized, reusable code. <strong>Responsive</strong> design adapted to all devices.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Transforma un tema genérico comprado en un <strong>portal</strong> web <strong>profesional</strong> y único para una agencia inmobiliaria de primer nivel. Mantiene la funcionalidad robusta del tema base mientras se adapta visualmente al <strong>diseño</strong> y la identidad de marca del cliente.',
      en: 'Transforms a generic purchased theme into a unique, professional web portal for a top-tier real estate agency. Maintains the robust functionality of the base theme while visually adapting to the client\'s design and brand identity.',
    },
    metrics: {
      es: '• <strong>Portal</strong> inmobiliario completo con tema <strong>WordPress</strong> adaptado\n• Personalización visual completa con <strong>Scss</strong>\n• Tema hijo con overrides de estilos y plantillas\n• <strong>Diseño</strong> responsive para todos los dispositivos\n• Integración de buscador y fichas de propiedad\n• <strong>Optimización</strong> de <strong>rendimiento</strong> y <strong>SEO</strong>',
      en: '• Complete real estate portal with adapted <strong>WordPress</strong> theme\n• Full visual customization with <strong>Scss</strong>\n• Child theme with style and template overrides\n• <strong>Responsive</strong> design for all devices\n• Search and property listing integration\n• <strong>Performance</strong> and <strong>SEO</strong> <strong>optimization</strong>',
    },
    myRole: {
      es: 'Me encargué del <strong>desarrollo</strong> integral de la capa <strong>frontend</strong>, trabajando en coordinación con el equipo encargado del <strong>backend</strong>. Mi trabajo incluyó la adaptación y personalización del tema <strong>WordPress</strong> con <strong>Scss</strong>, maquetación <strong>responsive</strong>, el ajuste de plantillas <strong>PHP</strong> y la implementación del <strong>portal</strong> garantizando la máxima fidelidad con el <strong>diseño</strong> <strong>UI</strong> proporcionado.',
      en: 'I developed all the <strong>frontend</strong> work alongside two colleagues. My work included: <strong>WordPress</strong> theme adaptation and customization with <strong>Scss</strong>, <strong>responsive</strong> layout, <strong>PHP</strong> template adjustments, and portal configuration to match the provided design.',
    },
    techDetails: {
      es: '• <strong>CMS:</strong> <strong>WordPress</strong> con tema comprado personalizado\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>jQuery</strong>\n• <strong>Estilos:</strong> <strong>Scss</strong> con variables, mixins, nesting, partials y tema hijo\n• <strong>Plantillas:</strong> Personalización de plantillas <strong>PHP</strong> del tema\n• <strong>Diseño:</strong> <strong>Responsive</strong> con breakpoints personalizados\n• <strong>Rendimiento:</strong> <strong>Optimización</strong> de assets, caché, carga diferida de imágenes\n• <strong>SEO:</strong> Meta tags, datos estructurados, sitemap',
      en: '• <strong>CMS:</strong> <strong>WordPress</strong> with customized purchased theme\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>jQuery</strong>\n• <strong>Styles:</strong> <strong>Scss</strong> with variables, mixins, nesting, partials, and child theme\n• <strong>Templates:</strong> Customization of <strong>PHP</strong> theme templates\n• <strong>Design:</strong> <strong>Responsive</strong> with custom breakpoints\n• <strong>Performance:</strong> Asset <strong>optimization</strong>, cache, lazy image loading\n• <strong>SEO:</strong> Meta tags, structured data, sitemap',
    },
    confidentialNote: {
      es: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
      en: '📜 Note: Project built for an external company. Real names and logos omitted due to intellectual property.',
    },
  },
  {
    id: 'doryos',
    slug: {
      es: 'portal-salud-digital',
      en: 'digital-health-portal',
    },
    category: 'web-development',
    title: { es: 'Portal de Salud Digital', en: 'Digital Health Portal' },
    subtitle: {
      es: 'Plataforma de conocimiento médico digital para una gran compañía de salud',
      en: 'Digital medical knowledge platform for a major healthcare company',
    },
    description: {
      es: '<strong>Desarrollo</strong> completo desde cero de un <strong>portal</strong> <strong>WordPress</strong> para una gran compañía de salud. Una <strong>plataforma</strong> de <strong>comunidad médica</strong> digital con vídeos didácticos, eventos, webinars y rutas formativas.',
      en: 'Complete <strong>WordPress</strong> development from scratch for a major healthcare company. A digital medical community platform with educational videos, events, webinars, and training paths.',
    },
    tags: ['WordPress', 'Scss', 'HTML5', 'CSS3', 'jQuery', 'PHP'],
    image: '/projects/health-portal.svg',
    media: [],
    featured: false,
    confidentialNote: {
      es: '📜 Nota: Proyecto realizado para cliente de empresa externa. Nombres y logos reales omitidos por propiedad intelectual.',
      en: '📜 Note: Project built for an external company. Real names and logos omitted due to intellectual property.',
    },
    challenge: {
      es: 'Crear desde cero un <strong>portal</strong> <strong>WordPress</strong> completamente customizado, sin partir de un tema comprado. La empresa nos pasó parte de los diseños y a partir de ahí desarrollé la maquetación completa. El reto era construir una <strong>plataforma</strong> escalable para una <strong>comunidad médica</strong> global con sistema de vídeos, eventos, webinars, rutas formativas y gestión de usuarios, manteniendo un <strong>diseño</strong> <strong>profesional</strong> acorde al <strong>sector sanitario</strong>.',
      en: 'Build a fully customized <strong>WordPress</strong> portal from scratch, without using a purchased theme. The company provided us with some of the designs, and from there I developed the complete layout. The challenge was to create a scalable platform for a global medical community with a video system, events, webinars, training paths, and user management, maintaining a professional design befitting the healthcare sector.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> limpio y <strong>profesional</strong> enfocado en la <strong>usabilidad</strong> para profesionales sanitarios. <strong>Navegación</strong> clara con categorización de contenido médico por especialidades. Sistema de búsqueda avanzada. Reproductor de vídeo integrado. <strong>Diseño responsive</strong> para acceso desde cualquier dispositivo.',
      en: 'Clean, professional design focused on usability for healthcare professionals. Clear navigation with medical content categorization by specialty. Advanced search system. Integrated video player. <strong>Responsive</strong> design for access from any device.',
    },
    architecture: {
      es: '<strong>WordPress</strong> con tema propio desarrollado desde cero. Maquetación completa con <strong>Scss</strong> (variables, mixins, partials). Personalización de plantillas <strong>PHP</strong>. Integración de funcionalidades con <strong>jQuery</strong>. <strong>Optimización</strong> de <strong>rendimiento</strong> y <strong>SEO</strong> on-page.',
      en: '<strong>WordPress</strong> with custom theme developed from scratch. Complete layout with <strong>Scss</strong> (variables, mixins, partials). <strong>PHP</strong> template customization. <strong>jQuery</strong> functionality integration. <strong>Performance</strong> <strong>optimization</strong> and on-page <strong>SEO</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
    problemsSolved: {
      es: 'Se construyó una <strong>plataforma</strong> médica digital completa y escalable desde cero, sin depender de temas precomprados, logrando un <strong>diseño</strong> totalmente adaptado a las necesidades de la <strong>comunidad médica</strong>.',
      en: 'A complete, scalable digital medical platform was built from scratch, without relying on pre-purchased themes, achieving a design fully adapted to the medical community\'s needs.',
    },
    metrics: {
      es: '• Portal <strong>WordPress</strong> con tema propio desarrollado desde cero\n• Maquetación completa con <strong>Scss</strong>\n• Personalización de plantillas <strong>PHP</strong>\n• Sistema de vídeos, eventos y webinars\n• Rutas formativas y gestión de contenido\n• <strong>Diseño responsive</strong> y optimizado\n• <strong>SEO</strong> on-page',
      en: '• <strong>WordPress</strong> portal with custom theme developed from scratch\n• Complete layout with <strong>Scss</strong>\n• <strong>PHP</strong> template customization\n• Video, event, and webinar system\n• Training paths and content management\n• <strong>Responsive</strong> and optimized design\n• On-page <strong>SEO</strong>',
    },
    myRole: {
      es: 'Maquetación completa de la web con <strong>Scss</strong>, añadí o modifiqué partes de <strong>PHP</strong> y algunas funcionalidades con <strong>jQuery</strong>.',
      en: 'Complete website layout with <strong>Scss</strong>, added or modified <strong>PHP</strong> parts, and implemented some <strong>jQuery</strong> functionality.',
    },
    techDetails: {
      es: '• <strong>CMS:</strong> <strong>WordPress</strong> con tema propio desarrollado desde cero\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>jQuery</strong>\n• <strong>Estilos:</strong> <strong>Scss</strong> con variables, mixins, nesting, partials\n• <strong>Plantillas:</strong> Personalización de plantillas <strong>PHP</strong> del tema\n• <strong>Diseño:</strong> <strong>Responsive</strong> con breakpoints personalizados\n• <strong>Rendimiento:</strong> <strong>Optimización</strong> de assets, caché, carga diferida de imágenes\n• <strong>SEO:</strong> Meta tags, datos estructurados, sitemap',
      en: '• <strong>CMS:</strong> <strong>WordPress</strong> with custom theme developed from scratch\n• <strong>Frontend:</strong> <strong>Scss</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>jQuery</strong>\n• <strong>Styles:</strong> <strong>Scss</strong> with variables, mixins, nesting, partials\n• <strong>Templates:</strong> Customization of <strong>PHP</strong> theme templates\n• <strong>Design:</strong> <strong>Responsive</strong> with custom breakpoints\n• <strong>Performance:</strong> Asset <strong>optimization</strong>, cache, lazy image loading\n• <strong>SEO:</strong> Meta tags, structured data, sitemap',
    },
  },
  {
    id: 'landing-gasnature',
    slug: {
      es: 'landing-gasnature',
      en: 'landing-gasnature',
    },
    category: 'web-design',
    title: { es: 'Landing GasNature', en: 'GasNature Landing Page' },
    subtitle: {
      es: 'Landing page para empresa de gas natural',
      en: 'Landing page for a natural gas company',
    },
    description: {
      es: '<strong>Diseño</strong> de <strong>landing page</strong> para <strong>GasNature</strong>, empresa de servicios energéticos.',
      en: 'Landing page design for <strong>GasNature</strong>, an energy services company.',
    },
    tags: ['Photoshop', 'Landing Page'],
    image: '/projects/web-design/gasnature-landing.jpg',
    media: [
      { src: '/projects/web-design/gasnature-landing.jpg', type: 'image', alt: { es: 'Landing GasNature', en: 'GasNature Landing Page' } },
    ],
    featured: false,
    challenge: {
      es: 'Crear una <strong>landing page</strong> atractiva y funcional que comunique los servicios de la empresa.',
      en: 'Create an attractive and functional landing page that communicates the company services.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> limpio con llamadas a la acción claras. <strong>Optimización</strong> para conversión.',
      en: 'Clean design with clear calls to action. Conversion <strong>optimization</strong>.',
    },
    architecture: {
      es: 'Diseño en <strong>Photoshop</strong>, maquetación con <strong>HTML5</strong> y <strong>CSS3</strong>.',
      en: 'Design in <strong>Photoshop</strong>, layout with <strong>HTML5</strong> and <strong>CSS3</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'landing-tcs',
    slug: {
      es: 'landing-tcs',
      en: 'landing-tcs',
    },
    category: 'web-design',
    title: { es: 'Landing TCS', en: 'TCS Landing Page' },
    subtitle: {
      es: 'Landing page para empresa de servicios técnicos',
      en: 'Landing page for a technical services company',
    },
    description: {
      es: '<strong>Diseño</strong> de <strong>landing page</strong> para TCS, empresa de servicios técnicos.',
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
      es: 'Diseñar una <strong>landing page</strong> <strong>profesional</strong> que refleje la experiencia técnica de la empresa.',
      en: 'Design a professional landing page that reflects the company technical expertise.',
    },
    uxDecisions: {
      es: 'Enfoque en la presentación de servicios y datos de contacto. <strong>Diseño</strong> corporativo.',
      en: 'Focus on service presentation and contact information. Corporate design.',
    },
    architecture: {
      es: 'Diseño en <strong>Photoshop</strong>, maquetación <strong>responsive</strong> con <strong>HTML5</strong> y <strong>CSS3</strong>.',
      en: 'Design in <strong>Photoshop</strong>, <strong>responsive</strong> layout with <strong>HTML5</strong> and <strong>CSS3</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'landing-traductor-itzulpen',
    slug: {
      es: 'landing-traductor-itzulpen',
      en: 'landing-translator-itzulpen',
    },
    category: 'web-design',
    title: { es: 'Landing Traductor Itzulpen', en: 'Itzulpen Translator Landing' },
    subtitle: {
      es: 'Landing page para servicio de traducción',
      en: 'Landing page for a translation service',
    },
    description: {
      es: '<strong>Diseño</strong> de <strong>landing page</strong> para Itzulpen, servicio <strong>profesional</strong> de traducción.',
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
      es: 'Diseño en <strong>Photoshop</strong> con maquetación web estándar.',
      en: 'Design in <strong>Photoshop</strong> with standard web layout.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'web-araex',
    slug: {
      es: 'web-araex',
      en: 'web-araex',
    },
    category: 'web-design',
    title: { es: 'Web Araex', en: 'Araex Website' },
    subtitle: {
      es: 'Sitio web corporativo para empresa del sector industrial',
      en: 'Corporate website for an industrial sector company',
    },
    description: {
      es: '<strong>Diseño</strong> de sitio web <strong>corporativo</strong> para Araex.',
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
      es: 'Diseñar un sitio web <strong>corporativo</strong> que represente la solidez de la empresa.',
      en: 'Design a corporate website that represents the company strength.',
    },
    uxDecisions: {
      es: 'Estructura clara con secciones bien definidas. <strong>Diseño</strong> <strong>profesional</strong>.',
      en: 'Clear structure with well-defined sections. Professional design.',
    },
    architecture: {
      es: 'Diseño en <strong>Photoshop</strong> con maquetación <strong>responsive</strong>.',
      en: 'Design in <strong>Photoshop</strong> with <strong>responsive</strong> layout.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'piatto-ristorante',
    slug: {
      es: 'piatto-ristorante',
      en: 'piatto-ristorante',
    },
    category: 'graphic-design',
    title: { es: 'Piatto Ristorante Italiano', en: 'Piatto Ristorante Italiano' },
    subtitle: {
      es: 'Identidad corporativa para restaurante italiano',
      en: 'Corporate identity for an Italian restaurant',
    },
    description: {
      es: '<strong>Desarrollo</strong> de <strong>identidad corporativa</strong> completa para restaurante italiano, incluyendo <strong>logotipo</strong>, papelería y publicidad.',
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
      es: '<strong>Diseño</strong> vectorial con <strong>Illustrator</strong>.',
      en: 'Vector design with <strong>Illustrator</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'revista-grafik',
    slug: {
      es: 'revista-grafik',
      en: 'grafik-magazine',
    },
    category: 'graphic-design',
    title: { es: 'Revista GrafiK', en: 'GrafiK Magazine' },
    subtitle: {
      es: 'Diseño editorial para revista de diseño gráfico',
      en: 'Editorial design for a graphic design magazine',
    },
    description: {
      es: '<strong>Diseño</strong> y <strong>maquetación</strong> completa de la revista GrafiK, publicación especializada en diseño gráfico.',
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
      es: 'Maquetación con <strong>InDesign</strong>, ilustraciones y tratamiento de imágenes con <strong>Illustrator</strong> y <strong>Photoshop</strong>.',
      en: 'Layout with <strong>InDesign</strong>, illustrations and image processing with <strong>Illustrator</strong> and <strong>Photoshop</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'folleto-camara-comercio-bilbao',
    slug: {
      es: 'folleto-camara-comercio-bilbao',
      en: 'bilbao-chamber-of-commerce-brochure',
    },
    category: 'graphic-design',
    title: { es: 'Folleto Cámara de Comercio de Bilbao', en: 'Bilbao Chamber of Commerce Brochure' },
    subtitle: {
      es: 'Folleto publicitario para la Cámara de Comercio de Bilbao',
      en: 'Advertising brochure for the Bilbao Chamber of Commerce',
    },
    description: {
      es: '<strong>Diseño</strong> y <strong>maquetación</strong> de folleto publicitario para la Cámara de Comercio de Bilbao.',
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
      es: 'Maquetación con <strong>InDesign</strong> e ilustraciones vectoriales con <strong>Illustrator</strong>.',
      en: 'Layout with <strong>InDesign</strong> and vector illustrations with <strong>Illustrator</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'folleto-colonias-2010',
    slug: {
      es: 'folleto-colonias-2010',
      en: 'summer-camp-brochure-2010',
    },
    category: 'graphic-design',
    title: { es: 'Folleto Colonias 2010', en: 'Summer Camp 2010 Brochure' },
    subtitle: {
      es: 'Folleto publicitario para colonias de verano',
      en: 'Advertising brochure for summer camps',
    },
    description: {
      es: '<strong>Diseño</strong> de folleto publicitario para colonias de verano.',
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
      es: 'Maquetación con <strong>InDesign</strong> e ilustraciones con <strong>Illustrator</strong>.',
      en: 'Layout with <strong>InDesign</strong> and illustrations with <strong>Illustrator</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'optica-pop-eye',
    slug: {
      es: 'optica-pop-eye',
      en: 'pop-eye-optics',
    },
    category: 'graphic-design',
    title: { es: 'Óptica Pop Eye', en: 'Pop Eye Optician' },
    subtitle: {
      es: 'Identidad corporativa para óptica',
      en: 'Corporate identity for an optician',
    },
    description: {
      es: '<strong>Desarrollo</strong> de <strong>identidad corporativa</strong> para óptica Pop Eye, incluyendo <strong>logotipo</strong> y papelería.',
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
      es: 'Diseño vectorial con <strong>Illustrator</strong> e <strong>InDesign</strong>.',
      en: 'Vector design with <strong>Illustrator</strong> and <strong>InDesign</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'pack-zensacion',
    slug: {
      es: 'pack-zensacion',
      en: 'zensacion-packaging',
    },
    category: 'graphic-design',
    title: { es: 'Pack Zensación', en: 'Zensación Pack' },
    subtitle: {
      es: 'Identidad corporativa y packaging',
      en: 'Corporate identity and packaging',
    },
    description: {
      es: '<strong>Desarrollo</strong> de <strong>identidad corporativa</strong> y <strong>diseño</strong> de <strong>packaging</strong> para la marca Zensación.',
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
      es: 'Diseñar un <strong>packaging</strong> atractivo que destaque en el punto de venta.',
      en: 'Design attractive packaging that stands out at the point of sale.',
    },
    uxDecisions: {
      es: '<strong>Diseño</strong> minimalista con colores relajantes que evocan la sensación de bienestar.',
      en: 'Minimalist design with relaxing colors that evoke a feeling of well-being.',
    },
    architecture: {
      es: '<strong>Diseño</strong> vectorial con <strong>Illustrator</strong> y <strong>maquetación</strong> con <strong>InDesign</strong>.',
      en: 'Vector design with <strong>Illustrator</strong> and layout with <strong>InDesign</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'bodegas-ubide',
    slug: {
      es: 'bodegas-ubide',
      en: 'ubide-winery',
    },
    category: 'graphic-design',
    title: { es: 'Bodegas Ubide', en: 'Ubide Wineries' },
    subtitle: {
      es: 'Identidad corporativa para bodega',
      en: 'Corporate identity for a winery',
    },
    description: {
      es: '<strong>Desarrollo</strong> de <strong>identidad corporativa</strong> para bodega, incluyendo papelería y aplicaciones.',
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
      es: '<strong>Diseño</strong> con <strong>Illustrator</strong>, tratamiento de imágenes con <strong>Photoshop</strong> y <strong>maquetación</strong> con <strong>InDesign</strong>.',
      en: 'Design with <strong>Illustrator</strong>, image processing with <strong>Photoshop</strong> and layout with <strong>InDesign</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'anuncios-publicitarios',
    slug: {
      es: 'anuncios-publicitarios',
      en: 'print-advertisements',
    },
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
      es: '<strong>Diseño</strong> y tratamiento de imágenes con <strong>Photoshop</strong>.',
      en: 'Design and image processing with <strong>Photoshop</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
  {
    id: 'carteles-aste-nagusia-jazzaldia',
    slug: {
      es: 'carteles-aste-nagusia-jazzaldia',
      en: 'aste-nagusia-jazzaldia-posters',
    },
    category: 'graphic-design',
    title: { es: 'Carteles Aste Nagusia y Jazzaldia', en: 'Aste Nagusia & Jazzaldia Posters' },
    subtitle: {
      es: 'Cartelería para festivales de Bilbao',
      en: 'Posters for Bilbao festivals',
    },
    description: {
      es: '<strong>Diseño</strong> de carteles para los festivales Aste Nagusia y Jazzaldia de Bilbao.',
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
      es: 'Diseño vectorial con <strong>Illustrator</strong> y tratamiento de imágenes con <strong>Photoshop</strong>.',
      en: 'Vector design with <strong>Illustrator</strong> and image processing with <strong>Photoshop</strong>.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (slug: string) => projects.find(p => p.slug.es === slug || p.slug.en === slug);
