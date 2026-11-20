import type { ServiceItem } from '../types/domain';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    orderLabel: '01.',
    title: 'Website Development',
    summary: 'Fast, responsive web applications and corporate platforms built for clarity and conversion.',
    description:
      'We design and engineer custom marketing websites, client portals, and full-stack web applications using modern component architectures, clean semantic markup, and strict performance budgets.',
    deliverables: [
      'Custom responsive UI engineering',
      'Full-stack API & database architecture',
      'Technical SEO & accessibility compliance',
      'Production deployment & CI/CD setup',
    ],
    accentTone: 'blue',
  },
  {
    id: 'mobile-app-development',
    orderLabel: '02.',
    title: 'Mobile App Development',
    summary: 'Cross-platform iOS and Android applications engineered for smooth touch ergonomics and reliability.',
    description:
      'From initial product architecture to App Store and Play Store readiness, we build responsive mobile experiences with offline resilience, structured state management, and native device integrations.',
    deliverables: [
      'iOS & Android cross-platform builds',
      'Offline-first local synchronization',
      'Authentication & role-based access',
      'Clean API integration & push alerts',
    ],
    accentTone: 'purple',
  },
  {
    id: 'ai-solutions',
    orderLabel: '03.',
    title: 'AI Solutions',
    summary: 'Practical artificial intelligence systems integrated directly into your product and data workflows.',
    description:
      'We implement reliable AI features with clear guardrails—ranging from intelligent customer assistants and semantic document search to structured data extraction and decision support tools.',
    deliverables: [
      'Custom AI assistants & chat interfaces',
      'Document parsing & semantic search',
      'Structured classification & extraction',
      'Server-side model orchestration & safety',
    ],
    accentTone: 'purple',
  },
  {
    id: 'business-automation',
    orderLabel: '04.',
    title: 'Business Automation & Digital Systems',
    summary: 'Digital business systems and automated workflows that eliminate repetitive manual tasks.',
    description:
      'We build custom digital business systems and connect your existing tools—CRM, invoicing, forms, notifications, and spreadsheets—into reliable automated workflows with clear visibility.',
    deliverables: [
      'Custom digital business systems',
      'Multi-system API & webhook bridges',
      'Automated lead routing & intake pipelines',
      'Scheduled reporting & exception alerts',
    ],
    accentTone: 'blue',
  },
];
