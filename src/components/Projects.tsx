import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-steel-500 font-medium text-sm tracking-widest uppercase mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Projects</h2>
          <div className="mt-4 w-12 h-1 bg-steel-600 rounded-full" />
          <p className="mt-5 text-slate-300 text-base max-w-xl">
            Sample backend projects showcasing API design, system architecture, and database integration skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-slate-700 border border-slate-700 rounded-2xl overflow-hidden hover:border-steel-500/40 hover:shadow-xl hover:shadow-steel-500/10 transition-all duration-500"
            >
              <div className="h-1.5 bg-gradient-to-r from-steel-600 via-steel-500 to-steel-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-100 text-lg leading-snug pr-3 group-hover:text-steel-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i + 0.3, duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={13} className="text-steel-500 shrink-0" />
                      <span className="text-xs text-slate-400">{h}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-medium bg-steel-600/10 text-steel-500 rounded-full border border-steel-600/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
