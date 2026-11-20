import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../../data/services';
import type { ServiceId } from '../../types/domain';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceId: ServiceId) => void;
}

export function ServicesSection({ onSelectServiceForEnquiry }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 sm:py-24 border-b border-slate-800/70 bg-[#050814]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="text-sm font-medium text-blue-400">Core Capabilities</p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight text-balance">
            Four focused disciplines to design, build, and automate your digital operations.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Engage AIVORA for a single focused build or combine web, mobile, AI, and automation into
            one cohesive product roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isBlue = service.accentTone === 'blue';
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.28,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`font-mono text-sm font-medium tabular-nums ${
                        isBlue ? 'text-blue-400' : 'text-violet-400'
                      }`}
                    >
                      {service.orderLabel}
                    </span>
                    <span className="text-xs text-slate-500">Core Service</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm font-medium text-slate-200 leading-relaxed">
                    {service.summary}
                  </p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isBlue ? 'text-blue-400' : 'text-violet-400'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForEnquiry(service.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
