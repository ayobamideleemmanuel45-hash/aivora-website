import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-slate-800/70 bg-[#060917]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <p className="text-sm font-medium text-violet-400">About AIVORA</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug text-balance">
              Practical digital engineering for both individuals and growing businesses.
            </h2>
          </motion.div>

          {/* Right narrative & structured focus areas */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base text-slate-300 leading-relaxed">
              AIVORA is a digital technology company dedicated to helping individuals and businesses
              create modern websites, mobile applications, AI solutions, and digital business
              systems. Whether you are an independent founder bringing a new product to life or an
              established organization streamlining operations, we turn clear ideas into reliable
              software.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Every system we build is structured with clean separation between user interfaces,
              application logic, and data layers—giving you a dependable foundation today and a
              clear path to add customer portals, AI assistants, and internal management dashboards
              as your needs grow.
            </p>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-display text-sm font-semibold text-white">
                  Built for Individuals
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  Personal brands, solo founders, and creators launching focused web or mobile products.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-white">
                  Built for Businesses
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  Companies adopting custom AI workflows, client portals, and digital business systems.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-white">
                  Modular Foundations
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  Clean codebases prepared for future customer accounts, AI, and admin controls.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
