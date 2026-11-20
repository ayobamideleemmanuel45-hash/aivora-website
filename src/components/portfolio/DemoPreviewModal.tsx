import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import type { DemoProject, ServiceId } from '../../types/domain';
import { DemoPreviewScene } from './DemoPreviewScene';

interface DemoPreviewModalProps {
  project: DemoProject | null;
  onClose: () => void;
  onRequestSimilarBuild: (serviceId: ServiceId) => void;
}

export function DemoPreviewModal({
  project,
  onClose,
  onRequestSimilarBuild,
}: DemoPreviewModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const mapCategoryToService = (category: DemoProject['category']): ServiceId => {
    if (category === 'web') return 'website-development';
    if (category === 'mobile') return 'mobile-app-development';
    if (project.categoryLabel === 'AI Solutions') return 'ai-solutions';
    return 'business-automation';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090E21] border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-medium text-violet-400">{project.demoLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.categoryLabel}</span>
            </div>
            <h3
              id="demo-modal-title"
              className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close demonstration preview"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 bg-[#0D142D] text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <DemoPreviewScene variant={project.previewVariant} compact={false} />

        <div className="space-y-4">
          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Demonstration Architecture Overview
            </h4>
            <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-2.5">
              Key Capabilities Showcased
            </h4>
            <ul className="space-y-2">
              {project.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" aria-hidden="true" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-slate-300">Reference Stack:</span>
            {project.stack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Concept demonstration built to illustrate engineering structure.
          </p>
          <button
            type="button"
            onClick={() => {
              const serviceId = mapCategoryToService(project.category);
              onClose();
              onRequestSimilarBuild(serviceId);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Request Similar Build</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
