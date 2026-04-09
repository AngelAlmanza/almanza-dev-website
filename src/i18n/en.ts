export const en = {
  meta: {
    title: 'Angel Almanza | Solutions Engineer',
    description:
      'Software Engineer specialized in automation, enterprise systems, and scalable architectures. I transform manual processes into high-impact digital assets.',
    ogImage: '/og-en.png',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    products: 'Products',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    label: 'Solutions Engineer · Full-Stack Developer',
    headline: 'Building software that optimizes business and scales ideas.',
    subheadline:
      "I'm Angel, a Software Engineer specialized in automation, enterprise systems, and scalable architectures. I transform manual processes into high-impact digital assets.",
    cta_primary: "Let's Talk About Your Project",
    cta_secondary: "View Product Catalog",
    scroll_hint: 'Scroll to explore',
  },
  cases: {
    section_label: 'Success Cases',
    section_title: 'Real solutions.',
    section_title_accent: 'Measurable impact.',
    challenge: 'Challenge',
    impact: 'Impact',
    tech_label: 'Stack',
    items: [
      {
        id: 'crm',
        title: 'CRM Migration Orchestrator & Support Automation',
        category: 'Enterprise · Automation',
        challenge:
          'Operational chaos due to manual ticketing workflows and high licensing costs across the support team.',
        impact:
          'Reduction of 90% in manual data entry and reduction in operational costs using Node.js and OAuth2 for seamless CRM integration.',
        tech: ['Node.js', 'OAuth2', 'REST APIs', 'CRM'],
        metric: '90%',
        metric_label: 'Manual tasks eliminated',
        size: 'large',
      },
      {
        id: 'logistics',
        title: 'Omnichannel Logistics Notification System',
        category: 'Logistics · Communications',
        challenge:
          'Financial losses due to missed appointments and uncoordinated field logistics.',
        impact:
          'Drastic reduction in unnecessary trips by integrating Twilio and Meta Business API for real-time SMS and WhatsApp confirmations.',
        tech: ['Twilio', 'Meta Business API', 'Webhooks', 'Node.js', 'React.js'],
        metric: '~60%',
        metric_label: 'Fewer missed appointments',
        size: 'medium',
      },
    ],
  },
  products: {
    section_label: 'Product Catalog',
    section_title: 'Pre-built solutions.',
    section_title_accent: 'Ready to deploy.',
    badge: 'Ready to Deploy',
    cta_demo: 'View Demo',
    cta_buy: 'Buy License',
    items: [
      {
        id: 'pos',
        name: 'Desktop POS System',
        description:
          'Full inventory and sales control for retail businesses. Offline-first architecture with real-time sync and detailed analytics.',
        icon: 'pos',
      },
      {
        id: 'gym',
        name: 'Gym Management System',
        description:
          'Automated membership and access administration. Attendance tracking, recurring billing, and member portal included.',
        icon: 'gym',
      },
      {
        id: 'saas',
        name: 'SaaS Boilerplate',
        description:
          'Base architecture to launch apps rapidly. Authentication, billing (Stripe), multi-tenancy, and CI/CD out of the box.',
        icon: 'rocket',
      },
    ],
  },
  services: {
    section_label: 'Services',
    section_title: 'Expertise',
    section_title_accent: 'on demand.',
    items: [
      {
        id: 'mvp',
        name: 'MVP Development',
        description:
          'From idea to functional code in weeks, not months. Lean, iterative, and production-ready from day one.',
        icon: 'code',
      },
      {
        id: 'automation',
        name: 'Process Automation',
        description:
          'Connecting your tools — APIs, CRM, Webhooks — to eliminate repetitive work and reduce operational costs.',
        icon: 'automation',
      },
      {
        id: 'consulting',
        name: 'Technical Consulting',
        description:
          'Architecture auditing, database optimization, and code review. Actionable insights for your engineering team.',
        icon: 'consulting',
      },
    ],
  },
  blog: {
    section_label: 'Insights',
    section_title: 'Knowledge.',
    section_title_accent: 'Shared.',
    description:
      'In-depth articles on software architecture, summaries of my YouTube tutorials, and practical guides for developers building production systems.',
    coming_soon: 'Coming Soon',
    coming_soon_text:
      "I'm working on bringing you in-depth technical articles and tutorials. Follow me on social media to be the first to know.",
    follow_cta: 'Follow on YouTube',
  },
  contact: {
    section_label: 'Contact',
    section_title: "Let's work",
    section_title_accent: 'together.',
    description:
      'Do you have a technical problem that needs an engineering solution? Let me know about your project and we will figure out the best path forward.',
    name_label: 'Full Name',
    email_label: 'Email Address',
    message_label: 'Tell me about your project',
    message_placeholder:
      'Describe the problem you want to solve, your current stack, and timeline...',
    submit: 'Send Message',
    calendly: 'Schedule a Call',
    or: 'or',
    availability: 'Currently accepting new projects',
  },
  footer: {
    tagline: 'Building software that optimizes business and scales ideas.',
    rights: 'All rights reserved.',
    links_title: 'Quick Links',
    social_title: 'Connect',
  },
} as const;

export type Translations = typeof en;
