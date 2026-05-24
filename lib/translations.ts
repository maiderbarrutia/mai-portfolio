export const translations = {
  es: {
    // Navigation
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    
    // Hero Section
    hero: {
      title: 'Maider Barrutia',
      subtitle: 'Fullstack Developer & UI Architect',
      description: 'Construyo <strong>aplicaciones full-stack</strong> con mentalidad de <strong>arquitecta UI</strong>. Combino código robusto y diseño centrado en el usuario, optimizando el desarrollo con IA para crear soluciones nativas, fluidas y escalables.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contacto',
    },
    
    // Projects Section
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Una selección de mis trabajos más relevantes donde combino desarrollo frontend, backend y estrategias de IA.',
      viewProject: 'Ver Proyecto',
      viewAll: 'Ver Más Proyectos',
      backToHome: 'Volver al Inicio',
      challenge: 'El Reto',
      uxDecisions: 'Decisiones UX/UI',
      architecture: 'Arquitectura del Código',
      aiIntegration: 'Integración de IA',
      demo: 'Ver Demo',
      repository: 'Repositorio',
    },
    
    // Tech Stack Section
    tech: {
      tag: 'Habilidades',
      title: 'Stack Tecnológico',
      subtitle: 'Las herramientas y tecnologías que utilizo para construir productos digitales de alta calidad.',
    },
    techStack: {
      title: 'Stack Tecnológico',
      subtitle: 'Las herramientas y tecnologías que utilizo para construir productos digitales de alta calidad.',
      core: 'Core',
      tools: 'Herramientas',
      aiData: 'IA & Datos',
    },
    
    // Experience Section
    experience: {
      tag: 'Trayectoria',
      title: 'Experiencia Profesional',
      subtitle: 'Mi recorrido en el sector tecnológico, combinando desarrollo y diseño.',
      experienceTab: 'Experiencia',
      educationTab: 'Educación',
      present: 'Actualidad',
      viewMore: 'Ver Más',
    },
    
    // Contact Section
    contact: {
      tag: 'Contacto',
      title: 'Hablemos',
      subtitle: '¿Tienes un proyecto en mente? Me encantaría escucharte.',
      letsConnect: 'Conectemos',
      description: 'Estoy siempre abierta a nuevas oportunidades y proyectos interesantes. No dudes en contactarme.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar. Intenta de nuevo.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      alternativeContact: '¿Prefieres otro medio? Escríbeme a',
    },
    
    // Footer
    footer: {
      // tagline: 'Creando experiencias digitales excepcionales',
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      using: 'usando',
      designedBy: 'Diseñado y desarrollado por',
      privacy: 'Política de Privacidad',
    },
    
    // Theme
    theme: {
      light: 'Modo Claro',
      dark: 'Modo Oscuro',
      toggle: 'Cambiar tema',
    },
    
    // Language
    language: {
      toggle: 'Cambiar idioma',
      es: 'Español',
      en: 'English',
    },
  },
  
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      title: 'Maider Barrutia',
      subtitle: 'Fullstack Developer & UI Architect',
      description: 'I build full-stack applications with a UI architect mindset. I combine robust code and user-centered design, leveraging AI to streamline development and deliver native, seamless, and scalable solutions.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
    },
    
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my most relevant work where I combine frontend, backend development, and AI strategies.',
      viewProject: 'View Project',
      viewAll: 'View More Projects',
      backToHome: 'Back to Home',
      challenge: 'The Challenge',
      uxDecisions: 'UX/UI Decisions',
      architecture: 'Code Architecture',
      aiIntegration: 'AI Integration',
      demo: 'View Demo',
      repository: 'Repository',
    },
    
    // Tech Stack Section
    tech: {
      tag: 'Skills',
      title: 'Tech Stack',
      subtitle: 'The tools and technologies I use to build high-quality digital products.',
    },
    techStack: {
      title: 'Tech Stack',
      subtitle: 'The tools and technologies I use to build high-quality digital products.',
      core: 'Core',
      tools: 'Tools',
      aiData: 'AI & Data',
    },
    
    // Experience Section
    experience: {
      tag: 'Journey',
      title: 'Professional Experience',
      subtitle: 'My path in the tech industry, combining development and design.',
      experienceTab: 'Experience',
      educationTab: 'Education',
      present: 'Present',
      viewMore: 'View More',
    },
    
    // Contact Section
    contact: {
      tag: 'Contact',
      title: 'Let\'s Talk',
      subtitle: 'Have a project in mind? I would love to hear from you.',
      letsConnect: 'Let\'s Connect',
      description: 'I\'m always open to new opportunities and interesting projects. Feel free to reach out.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me about your project...',
      alternativeContact: 'Prefer another way? Email me at',
    },
    
    // Footer
    footer: {
      // tagline: 'Creating exceptional digital experiences',
      rights: 'All rights reserved',
      madeWith: 'Made with',
      using: 'using',
      designedBy: 'Designed and developed by',
      privacy: 'Privacy Policy',
    },
    
    // Theme
    theme: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      toggle: 'Toggle theme',
    },
    
    // Language
    language: {
      toggle: 'Change language',
      es: 'Español',
      en: 'English',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.es;
