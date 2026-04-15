import { ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-crimson-500 font-medium text-sm tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Certifications</h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-crimson-500 to-gold-500 rounded-full" />
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
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-crimson-500/40 hover:shadow-xl hover:shadow-crimson-500/10 transition-all duration-500"
            >
              <div className="h-1 bg-gradient-to-r from-crimson-600 via-crimson-500 to-gold-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl bg-crimson-600/10 border border-crimson-600/20 flex items-center justify-center shrink-0"
                  >
                    <ShieldCheck size={24} className="text-crimson-500" />
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-100 text-base leading-snug group-hover:text-crimson-500 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap gap-4 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={12} />
                    Issued {cert.date}
                  </span>
                  {cert.expiry && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar size={12} />
                      Expires {cert.expiry}
                    </span>
                  )}
                  {cert.badge && (
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-crimson-600/10 text-crimson-500 rounded-full border border-crimson-600/20">
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
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-crimson-500 transition-colors duration-300"
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
