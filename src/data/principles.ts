import type { EngineeringPrinciple } from '../types/domain';

export const WHY_CHOOSE_DATA: EngineeringPrinciple[] = [
  {
    id: 'architecture-first',
    orderLabel: '01.',
    title: 'Architecture Built for Growth',
    description:
      'Every codebase is organized into clean, modular layers from day one—so adding customer accounts, AI assistants, or admin dashboards never requires rebuilding from scratch.',
  },
  {
    id: 'practical-ai',
    orderLabel: '02.',
    title: 'Practical AI & Automation',
    description:
      'We focus on measurable workflow utility rather than novelty—connecting language models and automation pipelines directly to real operational bottlenecks.',
  },
  {
    id: 'clarity-security',
    orderLabel: '03.',
    title: 'Security & Clean Code Discipline',
    description:
      'Strict TypeScript contracts, validated form inputs, server-side secret isolation, and accessible interfaces ensure your software remains dependable in production.',
  },
  {
    id: 'direct-collaboration',
    orderLabel: '04.',
    title: 'Direct Technical Collaboration',
    description:
      'You work directly with the engineers shaping your product—with transparent milestones, honest technical trade-offs, and responsive communication.',
  },
];
