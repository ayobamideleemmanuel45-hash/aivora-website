export interface NavItem {
  id: string;
  label: string;
  href: string;
}

const WHATSAPP_PLACEHOLDER_PHONE = '2349079061275';

export const COMPANY_CONFIG = {
  brandName: 'AIVORA',
  headline: 'Your Vision. Our Digital Innovation.',
  legalName: 'AIVORA Digital Technology',
  contactEmail: 'hello@aivora.tech',
  locationLabel: 'Remote-First Digital Technology Studio',
  /**
   * Placeholder WhatsApp phone number & link.
   * Replace WHATSAPP_PLACEHOLDER_PHONE above with your official business number
   * in international format (digits only, no + or spaces, e.g., '15551234567').
   */
  whatsappPlaceholderPhone: WHATSAPP_PLACEHOLDER_PHONE,
  whatsappHref: `https://wa.me/${WHATSAPP_PLACEHOLDER_PHONE}?text=Hello%20AIVORA%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project.`,
  whatsappDisplayNote: 'WhatsApp: +234 907 906 1275',
  navItems: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  /**
   * Architectural extension flags for upcoming platform capabilities:
   * - customerAccounts: client portal & project tracking
   * - aiAssistant: interactive project scoping assistant
   * - adminDashboard: internal enquiry & operations console
   */
  platformModules: {
    customerAccounts: false,
    aiAssistant: false,
    adminDashboard: false,
  },
} as const;
