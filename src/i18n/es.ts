export const es = {
  meta: {
    title: 'Angel Almanza | Ingeniero de Soluciones',
    description:
      'Ingeniero de Software especializado en automatización, sistemas empresariales y arquitecturas escalables. Transformo procesos manuales en activos digitales de alto impacto.',
    ogImage: '/og-es.png',
  },
  nav: {
    home: 'Inicio',
    work: 'Trabajo',
    products: 'Productos',
    services: 'Servicios',
    blog: 'Blog',
    contact: 'Contacto',
  },
  hero: {
    label: 'Ingeniero de Soluciones · Desarrollador Full-Stack',
    headline: 'Construyendo software que optimiza negocios y escala ideas.',
    subheadline:
      'Soy Angel, Ingeniero de Software especializado en automatización, sistemas empresariales y arquitecturas escalables. Transformo procesos manuales en activos digitales de alto impacto.',
    cta_primary: 'Ver Catálogo de Productos',
    cta_secondary: 'Hablemos de tu Proyecto',
    scroll_hint: 'Desplázate para explorar',
  },
  cases: {
    section_label: 'Casos de Éxito',
    section_title: 'Soluciones reales.',
    section_title_accent: 'Impacto medible.',
    challenge: 'Desafío',
    impact: 'Impacto',
    tech_label: 'Stack',
    items: [
      {
        id: 'crm',
        title: 'Orquestador de Migración CRM & Automatización de Soporte',
        category: 'Empresa · Automatización',
        challenge:
          'Caos operacional por flujos de ticketing manual y altos costos de licenciamiento en el equipo de soporte.',
        impact:
          'Eliminación total del ingreso manual de datos y reducción drástica de costos operativos usando Node.js y OAuth2 para integración CRM sin fricciones.',
        tech: ['Node.js', 'OAuth2', 'REST APIs', 'CRM'],
        metric: '100%',
        metric_label: 'Tareas manuales eliminadas',
        size: 'large',
      },
      {
        id: 'logistics',
        title: 'Sistema Omnicanal de Notificaciones Logísticas',
        category: 'Logística · Comunicaciones',
        challenge:
          'Pérdidas económicas por citas perdidas y logística de campo descoordinada.',
        impact:
          'Reducción drástica de viajes innecesarios al integrar Twilio y Meta Business API para confirmaciones en tiempo real por SMS y WhatsApp.',
        tech: ['Twilio', 'Meta Business API', 'Webhooks', 'Node.js', 'React.js'],
        metric: '~60%',
        metric_label: 'Menos citas perdidas',
        size: 'medium',
      },
    ],
  },
  products: {
    section_label: 'Catálogo de Productos',
    section_title: 'Soluciones listas.',
    section_title_accent: 'Para desplegar hoy.',
    badge: 'Listo para Desplegar',
    cta_demo: 'Ver Demo',
    cta_buy: 'Comprar Licencia',
    items: [
      {
        id: 'pos',
        name: 'Sistema POS de Escritorio',
        description:
          'Control completo de inventario y ventas para negocios retail. Arquitectura offline-first con sincronización en tiempo real y analítica detallada.',
        icon: 'pos',
      },
      {
        id: 'gym',
        name: 'Sistema de Gestión de Gimnasios',
        description:
          'Administración automatizada de membresías y accesos. Control de asistencia, facturación recurrente y portal para miembros incluidos.',
        icon: 'gym',
      },
      {
        id: 'saas',
        name: 'SaaS Boilerplate',
        description:
          'Arquitectura base para lanzar apps rápidamente. Autenticación, billing (Stripe), multi-tenancy y CI/CD incluidos desde el inicio.',
        icon: 'rocket',
      },
    ],
  },
  services: {
    section_label: 'Servicios',
    section_title: 'Expertise',
    section_title_accent: 'a demanda.',
    items: [
      {
        id: 'mvp',
        name: 'Desarrollo de MVP',
        description:
          'De la idea al código funcional en semanas, no meses. Lean, iterativo y listo para producción desde el primer día.',
        icon: 'code',
      },
      {
        id: 'automation',
        name: 'Automatización de Procesos',
        description:
          'Conectando tus herramientas — APIs, CRM, Webhooks — para eliminar trabajo repetitivo y reducir costos operativos.',
        icon: 'automation',
      },
      {
        id: 'consulting',
        name: 'Consultoría Técnica',
        description:
          'Auditoría de arquitectura, optimización de bases de datos y revisión de código. Insights accionables para tu equipo de ingeniería.',
        icon: 'consulting',
      },
    ],
  },
  blog: {
    section_label: 'Insights',
    section_title: 'Conocimiento.',
    section_title_accent: 'Compartido.',
    description:
      'Artículos profundos sobre arquitectura de software, resúmenes de mis tutoriales de YouTube y guías prácticas para desarrolladores construyendo sistemas en producción.',
    coming_soon: 'Próximamente',
    coming_soon_text:
      'Estoy trabajando en artículos técnicos y tutoriales detallados. Sígueme en redes sociales para ser el primero en enterarte.',
    follow_cta: 'Seguir en YouTube',
  },
  contact: {
    section_label: 'Contacto',
    section_title: 'Trabajemos',
    section_title_accent: 'juntos.',
    description:
      '¿Tienes un problema técnico que necesita una solución de ingeniería? Cuéntame sobre tu proyecto y encontraremos el mejor camino juntos.',
    name_label: 'Nombre Completo',
    email_label: 'Correo Electrónico',
    message_label: 'Cuéntame sobre tu proyecto',
    message_placeholder:
      'Describe el problema que quieres resolver, tu stack actual y tiempos...',
    submit: 'Enviar Mensaje',
    calendly: 'Agendar una Llamada',
    or: 'o',
    availability: 'Actualmente aceptando nuevos proyectos',
  },
  footer: {
    tagline: 'Construyendo software que optimiza negocios y escala ideas.',
    rights: 'Todos los derechos reservados.',
    built_with: 'Construido con Astro & Tailwind CSS',
    links_title: 'Enlaces Rápidos',
    social_title: 'Conectar',
  },
};
