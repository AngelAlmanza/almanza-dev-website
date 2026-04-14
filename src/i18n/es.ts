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
    headline: 'Transformo tus ideas en software escalable y procesos automatizados.',
    subheadline:
      'Soy Angel, Ingeniero de Software. Ayudo a empresas y emprendedores a eliminar tareas manuales y crear productos digitales robustos que impulsan su crecimiento.',
    cta_primary: "Iniciar un Proyecto",
    cta_secondary: "Ver soluciones anteriores",
    scroll_hint: 'Explorar',
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
          'Reducción del 90% en el ingreso manual de datos y reducción de costos operativos usando Node.js y OAuth2 para integración CRM sin fricciones.',
        tech: ['Node.js', 'OAuth2', 'REST APIs', 'CRM'],
        metric: '90%',
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
        id: 'custom',
        name: 'Desarrollo de Software a Medida',
        description:
          'Creo soluciones que viven donde tus clientes están: en la web, en el celular o instaladas en la computadora. Software diseñado específicamente para resolver los problemas de tu empresa.',
        icon: 'code',
      },
      {
        id: 'automation',
        name: 'Integraciones y Automatización de Procesos',
        description:
          '¿Haces tareas repetitivas? Conecto tus sistemas y automatizo tus procesos para que tu equipo deje de perder tiempo en tareas manuales y se enfoque en lo que importa.',
        icon: 'automation',
      },
      {
        id: 'mvp',
        name: 'Lanzamiento de Productos Digitales',
        description:
          'Transformo tu idea en una aplicación real y funcional en tiempo récord. Me encargo de todo el desarrollo para que tú solo te preocupes por hacer crecer tu negocio.',
        icon: 'consulting', // rocket
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
      '¿Tienes una idea en mente o un proceso que necesita mejorar? Cuéntame tu visión y yo me encargo de convertirla en software de calidad.',
    name_label: 'Nombre Completo',
    email_label: 'Correo Electrónico',
    message_label: '¿En qué puedo ayudarte?',
    message_placeholder:
      'Cuéntame brevemente qué quieres construir o qué proceso te gustaría automatizar. ¡Me encantará leerlo!',
    submit: 'Enviar mi propuesta',
    calendly: 'Prefiero agendar una llamada',
    or: 'o',
    availability: 'Actualmente aceptando nuevos proyectos',
  },
  footer: {
    tagline: 'Construyendo software que optimiza negocios y escala ideas.',
    rights: 'Todos los derechos reservados.',
    links_title: 'Enlaces Rápidos',
    social_title: 'Conectar',
  },
};
