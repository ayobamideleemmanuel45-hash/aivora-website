import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, ExternalLink, Mail, MessageCircle, Send } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SERVICES_DATA } from '../../data/services';
import {
  ESTIMATED_BUDGET_OPTIONS,
  submitProjectEnquiry,
  validateEnquiryForm,
} from '../../services/enquiryService';
import type {
  EnquiryFormData,
  EnquirySubmissionResult,
  EnquiryValidationErrors,
  ServiceId,
} from '../../types/domain';

interface ContactSectionProps {
  preselectedService: ServiceId | '';
}

const INITIAL_FORM_STATE: EnquiryFormData = {
  fullName: '',
  email: '',
  whatsappNumber: '',
  service: '',
  estimatedBudget: '',
  projectDescription: '',
};

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    fullName: string;
    serviceTitle: string;
    budgetLabel: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.service;
        return next;
      });
    }
  }, [preselectedService]);

  const handleFieldChange = (field: keyof EnquiryFormData, value: string) => {
    const updated = { ...formData, [field]: value } as EnquiryFormData;
    setFormData(updated);

    if (touched[field]) {
      const validation = validateEnquiryForm(updated);
      setErrors((prev) => ({ ...prev, [field]: validation[field] }));
    }
  };

  const handleFieldBlur = (field: keyof EnquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validation = validateEnquiryForm(formData);
    setErrors((prev) => ({ ...prev, [field]: validation[field] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateEnquiryForm(formData);
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      email: true,
      whatsappNumber: true,
      service: true,
      estimatedBudget: true,
      projectDescription: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const matchedService =
      SERVICES_DATA.find((s) => s.id === formData.service)?.title ?? 'Digital Project';
    const matchedBudget =
      ESTIMATED_BUDGET_OPTIONS.find((b) => b.value === formData.estimatedBudget)?.label ??
      formData.estimatedBudget;

    setIsSubmitting(true);
    const result = await submitProjectEnquiry(formData);
    setIsSubmitting(false);
    setSubmissionResult(result);

    if (result.success) {
      setSubmittedSummary({
        fullName: formData.fullName.trim(),
        serviceTitle: matchedService,
        budgetLabel: matchedBudget,
      });
      setFormData(INITIAL_FORM_STATE);
      setTouched({});
      setErrors({});
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmittedSummary(null);
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
  };

  const whatsappDirectFollowupHref = submittedSummary
    ? `https://wa.me/${COMPANY_CONFIG.whatsappPlaceholderPhone}?text=${encodeURIComponent(
        `Hello AIVORA, I just submitted project enquiry ${submissionResult?.referenceCode ?? ''} (${submittedSummary.serviceTitle}, budget: ${submittedSummary.budgetLabel}). My name is ${submittedSummary.fullName}.`
      )}`
    : COMPANY_CONFIG.whatsappHref;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#050814]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & WhatsApp Placeholder Button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-blue-400">Start a Project</p>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight text-balance">
                Share your vision with AIVORA.
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Tell us whether you need a website, mobile application, AI solution, or digital
                business system. We review every enquiry carefully and follow up directly.
              </p>
            </div>

            <div className="surface-card rounded-2xl p-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-medium text-slate-400 block">Direct Email</span>
                <a
                  href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <span>{COMPANY_CONFIG.contactEmail}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-slate-800/80 space-y-3">
                <div>
                  <span className="text-xs font-medium text-slate-400 block">
                    WhatsApp Direct Contact
                  </span>
                  <p className="mt-1 text-sm text-slate-300">
                    Prefer messaging directly? Start a WhatsApp conversation to discuss your
                    requirements.
                  </p>
                </div>

                <a
                  href={COMPANY_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0D1631] hover:bg-[#142045] border border-slate-700/80 hover:border-blue-500/60 text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <MessageCircle className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span>Message on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>

                <p className="text-xs text-slate-500">
                  Placeholder number: +{COMPANY_CONFIG.whatsappPlaceholderPhone}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Functional 6-Field Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="surface-elevated rounded-2xl p-6 sm:p-8">
              {submissionResult?.success ? (
                <div className="py-6 space-y-5" role="status" aria-live="polite">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Project Enquiry Received
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                      Thank you{submittedSummary ? `, ${submittedSummary.fullName}` : ''}. Your
                      enquiry has been validated under reference{' '}
                      <span className="font-mono text-blue-400 font-medium">
                        {submissionResult.referenceCode}
                      </span>
                      .
                    </p>
                    {submittedSummary && (
                      <p className="text-xs text-slate-400">
                        {submittedSummary.serviceTitle} · Estimated budget:{' '}
                        {submittedSummary.budgetLabel}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={whatsappDirectFollowupHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Continue on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-200 bg-[#0B1024] hover:bg-[#131C3E] border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 1. Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-name" className="block text-sm font-medium text-slate-200">
                        Full Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        onBlur={() => handleFieldBlur('fullName')}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                        placeholder="Alex Morgan"
                        className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-rose-500/80 focus:ring-rose-500/40'
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="error-fullName" className="text-xs text-rose-400" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* 2. Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-email" className="block text-sm font-medium text-slate-200">
                        Email Address <span className="text-violet-400">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        onBlur={() => handleFieldBlur('email')}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="alex@example.com"
                        className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-rose-500/80 focus:ring-rose-500/40'
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.email && (
                        <p id="error-email" className="text-xs text-rose-400" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 3. WhatsApp Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-whatsapp" className="block text-sm font-medium text-slate-200">
                        WhatsApp Number <span className="text-violet-400">*</span>
                      </label>
                      <input
                        id="enquiry-whatsapp"
                        name="whatsappNumber"
                        type="tel"
                        autoComplete="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                        onBlur={() => handleFieldBlur('whatsappNumber')}
                        aria-invalid={Boolean(errors.whatsappNumber)}
                        aria-describedby={errors.whatsappNumber ? 'error-whatsappNumber' : undefined}
                        placeholder="+1 555 234 5678"
                        className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.whatsappNumber
                            ? 'border-rose-500/80 focus:ring-rose-500/40'
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p id="error-whatsappNumber" className="text-xs text-rose-400" role="alert">
                          {errors.whatsappNumber}
                        </p>
                      )}
                    </div>

                    {/* 4. Service Required */}
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-service" className="block text-sm font-medium text-slate-200">
                        Service Required <span className="text-violet-400">*</span>
                      </label>
                      <select
                        id="enquiry-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => handleFieldChange('service', e.target.value)}
                        onBlur={() => handleFieldBlur('service')}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'error-service' : undefined}
                        className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.service
                            ? 'border-rose-500/80 focus:ring-rose-500/40'
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                      >
                        <option value="" className="bg-[#060917] text-slate-400">
                          Select a service...
                        </option>
                        {SERVICES_DATA.map((service) => (
                          <option
                            key={service.id}
                            value={service.id}
                            className="bg-[#060917] text-white"
                          >
                            {service.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="error-service" className="text-xs text-rose-400" role="alert">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 5. Estimated Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-budget" className="block text-sm font-medium text-slate-200">
                      Estimated Budget <span className="text-violet-400">*</span>
                    </label>
                    <select
                      id="enquiry-budget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={(e) => handleFieldChange('estimatedBudget', e.target.value)}
                      onBlur={() => handleFieldBlur('estimatedBudget')}
                      aria-invalid={Boolean(errors.estimatedBudget)}
                      aria-describedby={errors.estimatedBudget ? 'error-estimatedBudget' : undefined}
                      className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 transition-colors ${
                        errors.estimatedBudget
                          ? 'border-rose-500/80 focus:ring-rose-500/40'
                          : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                    >
                      <option value="" className="bg-[#060917] text-slate-400">
                        Select estimated budget...
                      </option>
                      {ESTIMATED_BUDGET_OPTIONS.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-[#060917] text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.estimatedBudget && (
                      <p id="error-estimatedBudget" className="text-xs text-rose-400" role="alert">
                        {errors.estimatedBudget}
                      </p>
                    )}
                  </div>

                  {/* 6. Project Description */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-description" className="block text-sm font-medium text-slate-200">
                      Project Description <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      id="enquiry-description"
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => handleFieldChange('projectDescription', e.target.value)}
                      onBlur={() => handleFieldBlur('projectDescription')}
                      aria-invalid={Boolean(errors.projectDescription)}
                      aria-describedby={
                        errors.projectDescription ? 'error-projectDescription' : undefined
                      }
                      placeholder="Describe what you want to build (website, mobile app, AI solution, or digital business system), your goals, and any preferred timeline..."
                      className={`w-full rounded-lg bg-[#060917] border px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
                        errors.projectDescription
                          ? 'border-rose-500/80 focus:ring-rose-500/40'
                          : 'border-slate-700/80 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p id="error-projectDescription" className="text-xs text-rose-400" role="alert">
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  {submissionResult?.errorMessage && !submissionResult.success && (
                    <p className="text-sm text-rose-400" role="alert">
                      {submissionResult.errorMessage}
                    </p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      All fields marked with <span className="text-violet-400">*</span> are required
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:opacity-60 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
