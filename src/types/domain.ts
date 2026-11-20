export type ServiceId =
  | 'website-development'
  | 'mobile-app-development'
  | 'ai-solutions'
  | 'business-automation';

export type ProjectFilterCategory = 'all' | 'web' | 'mobile' | 'ai-automation';

export interface ServiceItem {
  id: ServiceId;
  orderLabel: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  accentTone: 'blue' | 'purple';
}

export interface DemoProject {
  id: string;
  title: string;
  demoLabel: string;
  category: Exclude<ProjectFilterCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  architectureOverview: string;
  capabilities: string[];
  stack: string[];
  previewVariant: 'web-portal' | 'mobile-app' | 'ai-triage' | 'workflow-engine';
  isDemo: true;
}

export interface EngineeringPrinciple {
  id: string;
  orderLabel: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  service: ServiceId | '';
  estimatedBudget: string;
  projectDescription: string;
}

export type EnquiryValidationErrors = Partial<Record<keyof EnquiryFormData, string>>;

export interface EnquirySubmissionResult {
  success: boolean;
  referenceCode?: string;
  submittedAt?: string;
  errorMessage?: string;
}

/**
 * Future platform module interfaces.
 * Kept alongside core domain models to support customer accounts,
 * an integrated AI assistant, and an administrator dashboard without
 * restructuring existing components.
 */
export interface CustomerAccountProfile {
  id: string;
  email: string;
  fullName: string;
  organization?: string;
  role: 'customer' | 'admin';
}

export interface AiAssistantContext {
  sessionId: string;
  selectedService?: ServiceId;
  activeProjectDemoId?: string;
}

export interface AdminDashboardSummary {
  pendingEnquiries: number;
  activeProjects: number;
  lastUpdatedIso: string;
}
