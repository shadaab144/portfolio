import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-crimson-500 font-medium text-sm tracking-widest uppercase mb-2">Where I&apos;ve Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Experience</h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-crimson-500 to-gold-500 rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-crimson-600/50 via-crimson-600/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="relative sm:pl-16"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-crimson-500 items-center justify-center shadow-lg shadow-crimson-500/30 ring-4 ring-gray-900"
                >
                  <Briefcase size={20} className="text-gray-950" />
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-800 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-crimson-500/40 hover:shadow-lg hover:shadow-crimson-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                      <p className="text-crimson-500 font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 size={16} className="text-crimson-500 mt-0.5 shrink-0" />
                        <p className="text-gray-200 text-sm leading-relaxed">{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
