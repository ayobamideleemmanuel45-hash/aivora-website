import { COMPANY_CONFIG } from '../../config/company';
import { SERVICES_DATA } from '../../data/services';
import type { ServiceId } from '../../types/domain';
import { AivoraMark } from '../ui/AivoraMark';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceId: ServiceId) => void;
}

export function Footer({ onNavigate, onSelectService }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#040610]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2.5 text-lg font-display font-bold tracking-tight text-white"
            >
              <AivoraMark className="w-6 h-6" />
              <span>{COMPANY_CONFIG.brandName}</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A digital technology company building custom websites, mobile applications, applied AI
              solutions, and business automation systems.
            </p>
            <div className="text-sm text-slate-400 space-y-1 pt-1">
              <p>{COMPANY_CONFIG.locationLabel}</p>
              <p>
                <a
                  href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                  className="text-slate-200 hover:text-blue-400 transition-colors"
                >
                  {COMPANY_CONFIG.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-display font-semibold text-white">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_CONFIG.navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-display font-semibold text-white">Capabilities</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {COMPANY_CONFIG.legalName}. All rights reserved.
          </p>
          <p>Portfolio items presented on this site are interactive concept demonstrations.</p>
        </div>
      </div>
    </footer>
  );
}
