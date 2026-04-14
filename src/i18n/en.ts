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
    headline: 'Turning your ideas into scalable software and automated workflows.',
    subheadline:
      "I'm Angel, a Software Engineer dedicated to helping businesses eliminate manual tasks and build robust digital products that drive growth.",
    cta_primary: "Start a Project",
    cta_secondary: "View past solutions",
    scroll_hint: 'Explore',
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
        name: 'Custom Software Solutions',
        description:
          "I build solutions that live where your customers are: on the web, on mobile, or installed on their desktop. Software designed specifically to solve your business's unique problems.",
        icon: 'code',
      },
      {
        id: 'automation',
        name: 'Integrations and Process Automation',
        description:
          'Tired of repetitive tasks? I sync your systems and automate your workflows so your team stops wasting time on manual work and focuses on what matters.',
        icon: 'automation',
      },
      {
        id: 'mvp',
        name: 'Digital Product Launch',
        description:
          'I turn your idea into a real, functional app in record time. I handle all the development so you can focus on growing your business.',
        icon: 'consulting', // rocket
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
      "Have an idea in mind or a process that needs improvement? Share your vision with me, and I’ll take care of turning it into high-quality software.",
    name_label: 'Full Name',
    email_label: 'Email Address',
    message_label: 'How can I help you?',
    message_placeholder:
      "Tell me briefly about what you want to build or which process you’d like to automate. I’d love to hear about it!",
    submit: 'Send my inquiry',
    calendly: "I'd rather schedule a call",
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
