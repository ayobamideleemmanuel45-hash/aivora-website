import type {
  EnquiryFormData,
  EnquirySubmissionResult,
  EnquiryValidationErrors,
} from '../types/domain';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED_CHARS_REGEX = /^[+\d\s().-]+$/;

export const ESTIMATED_BUDGET_OPTIONS = [
  { value: 'under-1500', label: 'Under $1,500' },
  { value: '1500-5000', label: '$1,500 – $5,000' },
  { value: '5000-15000', label: '$5,000 – $15,000' },
  { value: '15000-plus', label: '$15,000+' },
  { value: 'guidance-needed', label: 'Not sure yet — looking for guidance' },
] as const;

export function validateEnquiryForm(data: EnquiryFormData): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@company.com).';
  }

  const trimmedWhatsapp = data.whatsappNumber.trim();
  const digitCount = trimmedWhatsapp.replace(/\D/g, '').length;
  if (!trimmedWhatsapp) {
    errors.whatsappNumber = 'Please enter your WhatsApp number.';
  } else if (!PHONE_ALLOWED_CHARS_REGEX.test(trimmedWhatsapp) || digitCount < 7 || digitCount > 15) {
    errors.whatsappNumber = 'Please enter a valid phone number with country code (7–15 digits).';
  }

  if (!data.service) {
    errors.service = 'Please select the service required.';
  }

  if (!data.estimatedBudget) {
    errors.estimatedBudget = 'Please select an estimated budget range.';
  }

  const trimmedDescription = data.projectDescription.trim();
  if (!trimmedDescription) {
    errors.projectDescription = 'Please describe your project goals and requirements.';
  } else if (trimmedDescription.length < 15) {
    errors.projectDescription =
      'Please provide at least 15 characters so we understand your project scope.';
  }

  return errors;
}

/**
 * Abstraction layer for submitting project enquiries.
 * Currently completes locally with structured validation and reference generation;
 * ready to be connected to a backend `/api/enquiries` endpoint or admin dashboard store.
 */
export async function submitProjectEnquiry(
  data: EnquiryFormData
): Promise<EnquirySubmissionResult> {
  const errors = validateEnquiryForm(data);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errorMessage: 'Please review the highlighted fields before submitting.',
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 350));

  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `AIV-${randomDigits}`;

  return {
    success: true,
    referenceCode,
    submittedAt: new Date().toISOString(),
  };
}
