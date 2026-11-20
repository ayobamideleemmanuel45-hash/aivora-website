import { useState } from 'react';
import { ArrowRight, Code2, Cpu, Layers, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ServiceId } from '../../types/domain';

interface HeroSectionProps {
  onExploreServices: () => void;
  onStartProject: (preselectService?: ServiceId) => void;
}

interface HeroDisciplinePreview {
  id: ServiceId;
  shortLabel: string;
  order: string;
  title: string;
  focus: string;
  layers: { label: string; detail: string }[];
}

const DISCIPLINE_PREVIEWS: HeroDisciplinePreview[] = [
  {
    id: 'website-development',
    shortLabel: 'Websites',
    order: '01.',
    title: 'Websites & Web Platforms',
    focus: 'Custom websites, portals, and web apps built for individuals and growing businesses.',
    layers: [
      { label: 'Interface Layer', detail: 'Responsive layouts, accessible components, crisp typography' },
      { label: 'Application Core', detail: 'Type-safe routing, validated state, role-ready structure' },
      { label: 'Production Delivery', detail: 'Fast page loads, semantic SEO, clean deployment setup' },
    ],
  },
  {
    id: 'mobile-app-development',
    shortLabel: 'Mobile',
    order: '02.',
    title: 'Mobile Applications',
    focus: 'iOS and Android mobile apps designed around intuitive touch navigation and reliability.',
    layers: [
      { label: 'Touch Ergonomics', detail: 'Fluid navigation, responsive views, clear visual hierarchy' },
      { label: 'Offline Resilience', detail: 'Local state queuing and dependable background sync' },
      { label: 'Device Integration', detail: 'Secure sign-in, notifications, and structured API sync' },
    ],
  },
  {
    id: 'ai-solutions',
    shortLabel: 'AI',
    order: '03.',
    title: 'AI Solutions',
    focus: 'Practical AI assistants and intelligent document tools integrated with clear guardrails.',
    layers: [
      { label: 'Knowledge Grounding', detail: 'Structured retrieval over approved documents and policies' },
      { label: 'Model Orchestration', detail: 'Server-side API proxies with strict schema validation' },
      { label: 'Human Oversight', detail: 'Transparent source attribution and escalation triggers' },
    ],
  },
  {
    id: 'business-automation',
    shortLabel: 'Systems',
    order: '04.',
    title: 'Digital Business Systems',
    focus: 'Connected business automation and internal tools that replace repetitive manual work.',
    layers: [
      { label: 'Intake & Validation', detail: 'Structured triggers from forms, webhooks, and email' },
      { label: 'System Bridging', detail: 'Reliable sync across CRM, billing, and team channels' },
      { label: 'Operational Clarity', detail: 'Traceable logs, error recovery, and admin visibility' },
    ],
  },
];

export function HeroSection({ onExploreServices, onStartProject }: HeroSectionProps) {
  const [selectedId, setSelectedId] = useState<ServiceId>('website-development');
  const activePreview =
    DISCIPLINE_PREVIEWS.find((item) => item.id === selectedId) ?? DISCIPLINE_PREVIEWS[0];

  const getIcon = (id: ServiceId) => {
    switch (id) {
      case 'website-development':
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      case 'mobile-app-development':
        return <Smartphone className="w-4 h-4" aria-hidden="true" />;
      case 'ai-solutions':
        return <Cpu className="w-4 h-4" aria-hidden="true" />;
      case 'business-automation':
        return <Layers className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70 architectural-grid"
    >
      {/* Subtle architectural radial lighting in electric blue & deep violet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[620px] h-[620px] rounded-full bg-blue-600/14 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/6 w-[520px] h-[520px] rounded-full bg-violet-600/14 blur-[120px]"
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-22 lg:pt-26 pb-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Compelling Headline & Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium text-blue-400 tracking-wide mb-4">
              AIVORA Digital Technology · For Individuals &amp; Businesses
            </p>

            <h1 className="font-display font-bold tracking-tight text-white text-[clamp(2.25rem,4.3vw,3.75rem)] leading-[1.07] text-balance">
              Your Vision. Our Digital Innovation.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              AIVORA helps individuals and businesses create custom websites, mobile applications,
              AI solutions, and digital business systems—engineered with precision so your ideas
              become dependable, scalable software.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-lg shadow-blue-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 bg-[#0B1024] hover:bg-[#111936] border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Discipline Architecture Panel */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="surface-elevated rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xl shadow-black/40">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
                <span className="text-xs font-medium text-slate-400">
                  Interactive Solution Blueprint
                </span>
                <div
                  role="tablist"
                  aria-label="Core technology disciplines"
                  className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#060916] border border-slate-800"
                >
                  {DISCIPLINE_PREVIEWS.map((item) => {
                    const isSelected = item.id === selectedId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedId(item.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                          isSelected
                            ? 'bg-gradient-to-r from-blue-600/90 to-violet-600/90 text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {getIcon(item.id)}
                        <span>{item.shortLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="py-6 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreview.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <div>
                      <h2 className="font-display text-xl font-semibold text-white">
                        {activePreview.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                        {activePreview.focus}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {activePreview.layers.map((layer, index) => (
                        <div
                          key={layer.label}
                          className="rounded-xl bg-[#070B1A] border border-slate-800/80 px-4 py-3 flex items-start justify-between gap-4"
                        >
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium text-slate-100">
                              <span className="font-mono text-xs text-blue-400 mr-2 tabular-nums">
                                0{index + 1}.
                              </span>
                              {layer.label}
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {layer.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Built for individuals, founders, and businesses
                </span>
                <button
                  type="button"
                  onClick={() => onStartProject(activePreview.id)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
                >
                  Enquire About {activePreview.shortLabel} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-pillar summary strip directly beneath the hero split */}
        <div className="mt-12 pt-8 border-t border-slate-800/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINE_PREVIEWS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`text-left rounded-xl p-4 border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isSelected
                    ? 'bg-[#0D142D] border-blue-500/40'
                    : 'bg-[#080C1C]/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-blue-400 tabular-nums">{item.order}</span>
                  <span className="text-slate-400">{getIcon(item.id)}</span>
                </div>
                <h3 className="mt-2 font-display text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {item.focus}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
