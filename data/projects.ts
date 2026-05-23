export interface Project {
  id: string;
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
}

export const projects: Project[] = [
  {
    id: 'text-generation-tool',
    title: {
      es: 'Herramienta de Generación de Textos',
      en: 'Text Generation Tool',
    },
    subtitle: {
      es: 'Automatización de contenido con IA para equipos de marketing',
      en: 'AI-powered content automation for marketing teams',
    },
    description: {
      es: 'Plataforma web que permite generar textos optimizados para diferentes canales utilizando inteligencia artificial.',
      en: 'Web platform that enables generating optimized texts for different channels using artificial intelligence.',
    },
    tags: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'SASS'],
    image: '/projects/text-gen.jpg',
    featured: true,
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/project',
    challenge: {
      es: 'El equipo de marketing necesitaba una herramienta que pudiera generar contenido de alta calidad de manera consistente, manteniendo el tono de la marca y optimizando para diferentes plataformas (redes sociales, email, web).',
      en: 'The marketing team needed a tool that could generate high-quality content consistently, maintaining brand tone and optimizing for different platforms (social media, email, web).',
    },
    uxDecisions: {
      es: 'Diseñé una interfaz minimalista con un flujo de 3 pasos: selección de tipo de contenido, configuración de parámetros, y generación con preview en tiempo real. Implementé un sistema de plantillas guardadas para acelerar flujos recurrentes.',
      en: 'I designed a minimalist interface with a 3-step flow: content type selection, parameter configuration, and generation with real-time preview. Implemented a saved templates system to speed up recurring workflows.',
    },
    architecture: {
      es: 'Frontend en React con TypeScript y SASS modules. Backend en Node.js con Express, conectando con la API de OpenAI. Sistema de caché para respuestas frecuentes y rate limiting para optimizar costes.',
      en: 'Frontend in React with TypeScript and SASS modules. Backend in Node.js with Express, connecting to OpenAI API. Cache system for frequent responses and rate limiting to optimize costs.',
    },
    aiIntegration: {
      es: 'Utilicé GitHub Copilot para acelerar el desarrollo de componentes repetitivos. Implementé prompt engineering avanzado para guiar a GPT-4 en la generación de contenido con el tono adecuado.',
      en: 'Used GitHub Copilot to speed up development of repetitive components. Implemented advanced prompt engineering to guide GPT-4 in generating content with the right tone.',
    },
  },
  {
    id: 'tcs-corporate',
    title: {
      es: 'TCS Corporate Website',
      en: 'TCS Corporate Website',
    },
    subtitle: {
      es: 'Rediseño completo de sitio corporativo con enfoque en conversión',
      en: 'Complete corporate site redesign focused on conversion',
    },
    description: {
      es: 'Desarrollo del sitio web corporativo para Técnicos de Captación y Servicios, optimizado para generación de leads.',
      en: 'Development of the corporate website for Técnicos de Captación y Servicios, optimized for lead generation.',
    },
    tags: ['Next.js', 'TypeScript', 'SASS', 'SEO', 'Analytics'],
    image: '/projects/tcs.jpg',
    featured: true,
    demoUrl: 'https://example.com/tcs',
    challenge: {
      es: 'La empresa necesitaba modernizar su presencia digital, mejorar el posicionamiento SEO y crear un embudo de conversión efectivo para servicios B2B.',
      en: 'The company needed to modernize its digital presence, improve SEO positioning, and create an effective conversion funnel for B2B services.',
    },
    uxDecisions: {
      es: 'Estructura de información reorganizada basada en journey del usuario. CTAs estratégicos en cada sección. Formularios progresivos que minimizan fricción. Mobile-first con atención a tiempos de carga.',
      en: 'Information structure reorganized based on user journey. Strategic CTAs in each section. Progressive forms that minimize friction. Mobile-first with attention to load times.',
    },
    architecture: {
      es: 'Next.js con SSG para máximo rendimiento SEO. Sistema de componentes modulares. Integración con CRM para gestión de leads. Analytics avanzado con eventos personalizados.',
      en: 'Next.js with SSG for maximum SEO performance. Modular component system. CRM integration for lead management. Advanced analytics with custom events.',
    },
    aiIntegration: {
      es: 'ChatGPT para generación inicial de copy y optimización de meta descriptions. Herramientas AI para análisis de competencia y sugerencias de keywords.',
      en: 'ChatGPT for initial copy generation and meta descriptions optimization. AI tools for competitor analysis and keyword suggestions.',
    },
  },
  {
    id: 'e-commerce-dashboard',
    title: {
      es: 'Dashboard E-commerce',
      en: 'E-commerce Dashboard',
    },
    subtitle: {
      es: 'Panel de administración con visualización de datos en tiempo real',
      en: 'Admin panel with real-time data visualization',
    },
    description: {
      es: 'Dashboard administrativo para gestión de tienda online con métricas, inventario y gestión de pedidos.',
      en: 'Administrative dashboard for online store management with metrics, inventory and order management.',
    },
    tags: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
    image: '/projects/dashboard.jpg',
    featured: true,
    demoUrl: 'https://example.com/dashboard',
    repoUrl: 'https://github.com/example/dashboard',
    challenge: {
      es: 'El cliente gestionaba su e-commerce con múltiples herramientas desconectadas. Necesitaba una visión unificada de ventas, inventario y comportamiento del cliente.',
      en: 'The client was managing their e-commerce with multiple disconnected tools. They needed a unified view of sales, inventory, and customer behavior.',
    },
    uxDecisions: {
      es: 'Dashboard con widgets personalizables. Gráficos interactivos con drill-down. Sistema de alertas configurables. Dark mode para reducir fatiga visual en uso prolongado.',
      en: 'Dashboard with customizable widgets. Interactive charts with drill-down. Configurable alert system. Dark mode to reduce eye strain during extended use.',
    },
    architecture: {
      es: 'SPA en React con estado global en Redux. API REST en Node.js con PostgreSQL. WebSockets para actualizaciones en tiempo real. Sistema de caché con Redis.',
      en: 'SPA in React with Redux global state. REST API in Node.js with PostgreSQL. WebSockets for real-time updates. Cache system with Redis.',
    },
    aiIntegration: {
      es: 'Implementé predicciones de demanda usando modelos de ML. El sistema sugiere reposición de inventario y detecta anomalías en patrones de venta.',
      en: 'Implemented demand predictions using ML models. The system suggests inventory replenishment and detects anomalies in sales patterns.',
    },
  },
  {
    id: 'design-system',
    title: {
      es: 'Design System Corporativo',
      en: 'Corporate Design System',
    },
    subtitle: {
      es: 'Sistema de diseño escalable para múltiples productos digitales',
      en: 'Scalable design system for multiple digital products',
    },
    description: {
      es: 'Creación de un design system completo con componentes reutilizables, documentación y herramientas de desarrollo.',
      en: 'Creation of a complete design system with reusable components, documentation and development tools.',
    },
    tags: ['React', 'Storybook', 'SASS', 'Figma', 'TypeScript'],
    image: '/projects/design-system.jpg',
    featured: false,
    repoUrl: 'https://github.com/example/design-system',
    challenge: {
      es: 'La empresa tenía inconsistencias visuales entre sus diferentes productos. Los equipos duplicaban esfuerzos creando componentes similares.',
      en: 'The company had visual inconsistencies between their different products. Teams were duplicating efforts creating similar components.',
    },
    uxDecisions: {
      es: 'Tokens de diseño como única fuente de verdad. Componentes atómicos combinables. Documentación interactiva en Storybook. Guías de accesibilidad integradas.',
      en: 'Design tokens as single source of truth. Combinable atomic components. Interactive documentation in Storybook. Integrated accessibility guidelines.',
    },
    architecture: {
      es: 'Monorepo con packages separados para tokens, componentes React y utilidades. Build optimizado con tree-shaking. Versionado semántico con changelog automático.',
      en: 'Monorepo with separate packages for tokens, React components and utilities. Optimized build with tree-shaking. Semantic versioning with automatic changelog.',
    },
    aiIntegration: {
      es: 'Copilot para generar variantes de componentes. AI para sugerir mejoras de accesibilidad. Automatización de tests visuales con herramientas AI.',
      en: 'Copilot for generating component variants. AI for suggesting accessibility improvements. Automation of visual tests with AI tools.',
    },
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
