import { motion } from 'motion/react';
import { WHY_CHOOSE_DATA } from '../../data/principles';

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-slate-800/70 bg-[#060917]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-sm font-medium text-violet-400">Why Choose AIVORA</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight text-balance">
              Engineering discipline before hype.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              We focus on clear communication, resilient software architecture, and practical
              delivery standards you can inspect at every milestone.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_DATA.map((principle, idx) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.25,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-6 space-y-3"
              >
                <span className="font-mono text-xs font-medium text-blue-400 tabular-nums block">
                  {principle.orderLabel}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
