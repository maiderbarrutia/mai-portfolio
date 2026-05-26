export const legalContent = {
  es: {
    title: 'Aviso Legal y Política de Privacidad',
    backHome: 'Volver al Inicio',
    lastUpdated: 'Última actualización: mayo 2026',
    sections: [
      {
        title: '1. Aviso Legal',
        content: `En cumplimiento con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de esta web es:

• **Titular:** Maider Barrutia
• **Correo electrónico:** maiderbarrutia@hotmail.com
• **Finalidad:** Presentación del portfolio profesional y curricular, así como exhibición de proyectos de desarrollo web, diseño UI/UX e integración de IA.

El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena de las condiciones aquí recogidas. El titular se reserva el derecho de modificar la presentación y configuración del sitio web sin previo aviso.`,
      },
      {
        title: '2. Propiedad Intelectual',
        content: `Todos los contenidos de esta web (textos, imágenes, logotipos, archivos, código fuente y, en general, cualquier elemento susceptible de protección) son propiedad de Maider Barrutia, salvo que se indique lo contrario.

Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin la autorización expresa de su titular.`,
      },
      {
        title: '3. Política de Privacidad',
        content: `**Responsable del tratamiento:** Maider Barrutia.
**Finalidad del tratamiento:** Los datos personales facilitados a través del formulario de contacto (nombre, correo electrónico y mensaje) serán utilizados exclusivamente para responder a tu consulta o propuesta.
**Base legal:** Consentimiento del usuario al enviar el formulario.
**Destinatarios:** Los datos se envían a Web3Forms (https://web3forms.com) como encargado del tratamiento para la gestión y envío de mensajes por correo electrónico. No se realizan transferencias internacionales fuera del Espacio Económico Europeo.
**Plazo de conservación:** Los datos se conservarán durante el tiempo necesario para atender tu consulta y, posteriormente, durante el plazo legal de prescripción de responsabilidades.

**Derechos del usuario:** Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición escribiendo a hello@maiderbarrutia.com. Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).`,
      },
      {
        title: '4. Política de Cookies',
        content: `Este sitio web **no utiliza cookies propias ni de terceros** con fines de tracking o publicitarios.

Únicamente se utiliza **Vercel Analytics**, una herramienta de análisis anónimo que no emplea cookies ni almacena datos personales. Los datos recogidos son agregados y anónimos (páginas visitadas, país de origen, dispositivo), sin identificar a usuarios individuales.`,
      },
      {
        title: '5. Enlaces Externos',
        content: `Este sitio web puede contener enlaces a sitios externos (LinkedIn, GitHub). No nos responsabilizamos del contenido ni de las políticas de privacidad de dichos sitios.`,
      },
    ],
  },
  en: {
    title: 'Legal Notice & Privacy Policy',
    backHome: 'Back to Home',
    lastUpdated: 'Last updated: May 2026',
    sections: [
      {
        title: '1. Legal Notice',
        content: `In compliance with applicable information society and electronic commerce regulations, the owner of this website is:

• **Owner:** Maider Barrutia
• **Email:** hello@maiderbarrutia.com
• **Purpose:** Professional portfolio and CV showcase, including web development, UI/UX design, and AI integration projects.

Access to and use of this website implies full acceptance of the terms set forth herein. The owner reserves the right to modify the website's presentation and configuration without prior notice.`,
      },
      {
        title: '2. Intellectual Property',
        content: `All content on this website (texts, images, logos, files, source code, and any other protectable elements) are the property of Maider Barrutia, unless otherwise stated.

Reproduction, distribution, public communication, or transformation of these contents is prohibited without the express authorization of the owner.`,
      },
      {
        title: '3. Privacy Policy',
        content: `**Data Controller:** Maider Barrutia.
**Processing purpose:** Personal data provided through the contact form (name, email, and message) will be used solely to respond to your inquiry or proposal.
**Legal basis:** User consent when submitting the form.
**Recipients:** Data is sent to Web3Forms (https://web3forms.com) as a data processor for managing and forwarding messages via email. No international transfers outside the European Economic Area are made.
**Retention period:** Data will be retained for as long as necessary to address your inquiry and subsequently for the legal prescription period.

**User rights:** You may exercise your rights of access, rectification, erasure, restriction of processing, portability, and objection by writing to hello@maiderbarrutia.com. You have the right to file a complaint with the Spanish Data Protection Agency (AEPD).`,
      },
      {
        title: '4. Cookie Policy',
        content: `This website **does not use first-party or third-party cookies** for tracking or advertising purposes.

It only uses **Vercel Analytics**, an anonymous analytics tool that does not employ cookies or store personal data. The data collected is aggregated and anonymous (pages visited, country of origin, device), without identifying individual users.`,
      },
      {
        title: '5. External Links',
        content: `This website may contain links to external sites (LinkedIn, GitHub). We are not responsible for the content or privacy policies of those sites.`,
      },
    ],
  },
} as const;

export type LegalLanguage = keyof typeof legalContent;
