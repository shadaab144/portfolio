import { ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-steel-500 font-medium text-sm tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Certifications</h2>
          <div className="mt-4 w-12 h-1 bg-steel-600 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-steel-500/40 hover:shadow-xl hover:shadow-steel-500/10 transition-all duration-500"
            >
              <div className="h-1 bg-gradient-to-r from-steel-600 via-steel-500 to-steel-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-steel-600/10 border border-steel-600/20 flex items-center justify-center shrink-0"
                  >
                    <ShieldCheck size={24} className="text-steel-500" />
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-100 text-base leading-snug group-hover:text-steel-500 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap gap-4 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={12} />
                    Issued {cert.date}
                  </span>
                  {cert.expiry && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={12} />
                      Expires {cert.expiry}
                    </span>
                  )}
                  {cert.badge && (
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-steel-600/10 text-steel-500 rounded-full border border-steel-600/20">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {cert.verifyUrl && (
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-steel-500 transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    Verify Credential
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
