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
      es: 'Plataforma para la gestión de actividades de ocio y tiempo libre',
      en: 'Platform for managing leisure and free time activities',
    },
    tags: ['TypeScript', 'React.js', 'MySQL', 'Vite', 'SASS', 'Node.js', 'Express'],
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
      es: 'Desarrollar una plataforma web completa para la gestión de actividades de ocio, con autenticación de usuarios, perfiles y paneles de administración.',
      en: 'Develop a complete web platform for managing leisure activities, with user authentication, profiles and administration panels.',
    },
    uxDecisions: {
      es: 'Interfaz limpia y moderna con formularios optimizados. Navegación intuitiva para búsqueda y gestión de actividades.',
      en: 'Clean and modern interface with optimized forms. Intuitive navigation for searching and managing activities.',
    },
    architecture: {
      es: 'Frontend con React + Vite + SASS. Backend con Node.js + Express + MySQL. API REST con Postman para testing.',
      en: 'Frontend with React + Vite + SASS. Backend with Node.js + Express + MySQL. REST API with Postman for testing.',
    },
    aiIntegration: {
      es: '',
      en: '',
    },
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
