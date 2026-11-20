import type { DemoProject } from '../types/domain';

export const DEMO_PROJECTS_DATA: DemoProject[] = [
  {
    id: 'demo-operations-portal',
    title: 'Meridian Operations Web Portal',
    demoLabel: 'Concept Demo',
    category: 'web',
    categoryLabel: 'Website Development',
    summary:
      'Demonstration B2B client portal featuring structured project milestones, real-time deliverable tracking, and role-ready authentication layouts.',
    architectureOverview:
      'Built as a modular React and TypeScript web platform designed to demonstrate how AIVORA structures multi-tenant client portals, responsive data views, and future customer account modules.',
    capabilities: [
      'Modular client workspace layout with responsive breakpoints',
      'Role-separated route structure ready for customer and admin logins',
      'Clean tabular milestone tracking and document exchange views',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API Architecture'],
    previewVariant: 'web-portal',
    isDemo: true,
  },
  {
    id: 'demo-field-service-mobile',
    title: 'PulseGrid Field Companion App',
    demoLabel: 'Concept Demo',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    summary:
      'Demonstration mobile application showcasing offline-resilient task checklists, digital sign-offs, and fast touch navigation for distributed teams.',
    architectureOverview:
      'A mobile-first interface prototype demonstrating crisp dark-surface readability, thumb-reachable navigation, and structured local-to-cloud state synchronization patterns.',
    capabilities: [
      'Thumb-first task navigation and single-screen status updates',
      'Structured offline queue design for low-connectivity environments',
      'Instant status transition feedback with optimistic UI patterns',
    ],
    stack: ['React Native Architecture', 'TypeScript', 'Local Sync Queue'],
    previewVariant: 'mobile-app',
    isDemo: true,
  },
  {
    id: 'demo-ai-intake-triage',
    title: 'LexaDocs AI Knowledge Assistant',
    demoLabel: 'Concept Demo',
    category: 'ai-automation',
    categoryLabel: 'AI Solutions',
    summary:
      'Demonstration AI assistant interface that parses uploaded specifications, answers policy queries with citations, and routes complex requests.',
    architectureOverview:
      'Illustrates AIVORA’s approach to grounded AI solutions—separating server-side model orchestration from a clean, transparent user interface that avoids opaque guesswork.',
    capabilities: [
      'Structured document ingestion and source-grounded responses',
      'Server-side API key isolation and deterministic JSON schemas',
      'Human-in-the-loop escalation triggers for sensitive workflows',
    ],
    stack: ['Gemini SDK', 'Node.js API Proxy', 'TypeScript', 'Vector Indexing'],
    previewVariant: 'ai-triage',
    isDemo: true,
  },
  {
    id: 'demo-automated-lead-pipeline',
    title: 'FlowSync Enquiry & CRM Automator',
    demoLabel: 'Concept Demo',
    category: 'ai-automation',
    categoryLabel: 'Business Automation',
    summary:
      'Demonstration automation pipeline linking web intake forms to structured validation, instant team alerts, and synchronized administrative logs.',
    architectureOverview:
      'Demonstrates an end-to-end business automation blueprint with schema validation, webhook dispatching, and retry-safe audit logging.',
    capabilities: [
      'Schema-validated web intake with instant client confirmation',
      'Automated webhook dispatch to messaging and CRM tools',
      'Centralized exception queue for reliable operations oversight',
    ],
    stack: ['Express.js', 'Webhook Pipelines', 'Schema Validation', 'Audit Logs'],
    previewVariant: 'workflow-engine',
    isDemo: true,
  },
];
