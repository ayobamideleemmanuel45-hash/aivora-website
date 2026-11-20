import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DEMO_PROJECTS_DATA } from '../../data/projects';
import type { DemoProject, ProjectFilterCategory, ServiceId } from '../../types/domain';
import { DemoPreviewScene } from '../portfolio/DemoPreviewScene';
import { DemoPreviewModal } from '../portfolio/DemoPreviewModal';

interface PortfolioSectionProps {
  onRequestSimilarBuild: (serviceId: ServiceId) => void;
}

const FILTER_TABS: { id: ProjectFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Demos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai-automation', label: 'AI & Automation' },
];

export function PortfolioSection({ onRequestSimilarBuild }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('all');
  const [selectedDemo, setSelectedDemo] = useState<DemoProject | null>(null);

  const visibleProjects =
    activeFilter === 'all'
      ? DEMO_PROJECTS_DATA
      : DEMO_PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-slate-800/70 bg-[#050814]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-blue-400">Demonstration Portfolio</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight text-balance">
              Reference builds showing how we architect modern digital products.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Each project below is an internal concept demonstration created to show our UI
              engineering, system architecture, and workflow design—never fabricated client work.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter demonstration projects"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0A0F24] border border-slate-800 self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demonstration Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.26,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="surface-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200 hover:border-slate-700"
            >
              <div>
                <DemoPreviewScene variant={project.previewVariant} compact={true} />

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-medium text-violet-400">{project.demoLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.categoryLabel}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.summary}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-500 truncate">
                  {project.stack.slice(0, 3).join(' · ')}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDemo(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
                >
                  <span>Inspect Demo</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DemoPreviewModal
        project={selectedDemo}
        onClose={() => setSelectedDemo(null)}
        onRequestSimilarBuild={onRequestSimilarBuild}
      />
    </section>
  );
}
